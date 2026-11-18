"""
MathAI RAG - Lapisan Vector Store (ChromaDB)
Role pemilik : Data Engineer (Row 20 & Row 21)

Dua koleksi pada satu database persisten (backend/chroma_db):
  - smartai_knowledge : materi kurikulum resmi (dibangun dari backend/knowledge_base/**/*.md).
                        Dibaca semua pengguna. Dibangun ulang otomatis jika isi materi / parameter
                        chunking berubah (fingerprint di index_manifest.json).
  - smartai_uploads   : dokumen yang diunggah siswa lewat POST /upload. Setiap chunk memiliki
                        metadata uploaded_by sehingga HANYA dapat diambil oleh pengunggahnya.

Dipakai oleh:
  - ML Engineer     : query_knowledge_chromadb(), lewat rag.retrieve_relevant_curriculum_context()
  - Data Scientist  : index_curriculum_to_chromadb(collection_name=..., chunk_size=..., chunk_overlap=...,
                      embedding_function=...) untuk eksperimen tanpa menyentuh koleksi utama.
"""

import glob
import hashlib
import json
import os
import re
import threading
import time
from datetime import datetime, timezone
from typing import Any, Callable, Dict, List, Optional

from rag_chunking import (
    DEFAULT_CHUNK_OVERLAP,
    DEFAULT_CHUNK_SIZE,
    PIPELINE_VERSION,
    chunk_markdown_with_metadata,
    normalize_grade,
)

try:  # ChromaDB bersifat opsional agar backend tetap bisa start (fallback keyword) bila tidak terpasang
    import chromadb
    from chromadb.config import Settings as ChromaSettings
except ImportError:  # pragma: no cover
    chromadb = None
    ChromaSettings = None

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
KNOWLEDGE_BASE_DIR = os.path.join(BASE_DIR, "knowledge_base")
CHROMA_PERSIST_DIR = os.path.join(BASE_DIR, "chroma_db")
KNOWLEDGE_COLLECTION_NAME = "smartai_knowledge"
UPLOAD_COLLECTION_NAME = "smartai_uploads"
MANIFEST_FILENAME = "index_manifest.json"

_clients: Dict[str, Any] = {}
_clients_lock = threading.Lock()
_index_lock = threading.Lock()

# state: idle | indexing | ready | error | unavailable
INDEX_STATUS: Dict[str, Any] = {"state": "idle", "detail": "", "updated_at": None}


def _set_status(state: str, detail: str = "") -> None:
    INDEX_STATUS.update({"state": state, "detail": detail, "updated_at": datetime.now(timezone.utc).isoformat()})


def chromadb_available() -> bool:
    return chromadb is not None


# ------------------------------------------------------------------------------
# Client, collection, embedding
# ------------------------------------------------------------------------------

def get_chroma_client(path: Optional[str] = None):
    """Singleton PersistentClient per direktori. Telemetri dimatikan."""
    if chromadb is None:
        raise RuntimeError("chromadb belum terpasang. Jalankan: pip install -r backend/requirements.txt")
    persist_dir = os.path.abspath(path or CHROMA_PERSIST_DIR)
    with _clients_lock:
        client = _clients.get(persist_dir)
        if client is None:
            os.makedirs(persist_dir, exist_ok=True)
            client = chromadb.PersistentClient(
                path=persist_dir,
                settings=ChromaSettings(anonymized_telemetry=False),
            )
            _clients[persist_dir] = client
        return client


def reset_chroma_clients() -> None:
    """Melupakan semua client yang di-cache (dipakai pada pengujian dengan direktori sementara)."""
    with _clients_lock:
        _clients.clear()
    _COLLECTION_TEXT_CACHE.clear()


class MathAIEmbeddingFunction:
    """
    Embedding function deterministik 768-dimensi (unit vector ||v|| = 1.0) untuk Bahasa Indonesia & LaTeX.
    Bebas unduhan jaringan eksternal (tidak perlu mengunduh 80MB ONNX model saat cold-start/CI)
    dan kompatibel penuh dengan ChromaDB 0.5+ / 1.x.
    """

    def __call__(self, input: List[str]) -> List[List[float]]:
        from embeddings import _deterministic_768d_fallback
        return [_deterministic_768d_fallback(t) for t in input]

    def embed_documents(self, input: List[str]) -> List[List[float]]:
        return self.__call__(input)

    def embed_query(self, input: List[str]) -> List[List[float]]:
        return self.__call__(input)

    @staticmethod
    def is_legacy() -> bool:
        return False

    @staticmethod
    def name() -> str:
        return "mathai_deterministic_768d"

    def get_config(self) -> Dict[str, Any]:
        return {"dim": 768}

    @staticmethod
    def build_from_config(config: Dict[str, Any]) -> "MathAIEmbeddingFunction":
        return MathAIEmbeddingFunction()


_DEFAULT_EMBEDDING_FN = MathAIEmbeddingFunction()


def get_embedding_function(name: Optional[str] = None):
    """
    Pilihan embedding untuk eksperimen Data Scientist (Row 24).
      None / 'default'      -> MathAI 768-D deterministic embedding (tanpa unduhan internet, <1ms/chunk).
      'onnx'                -> ONNX all-MiniLM-L6-v2 bawaan ChromaDB.
      'st:<nama-model>'     -> sentence-transformers, mis. 'st:paraphrase-multilingual-MiniLM-L12-v2'
                               (butuh: pip install sentence-transformers).
    """
    if not name or name == "default":
        return _DEFAULT_EMBEDDING_FN
    if name == "onnx":
        return None
    if name.startswith("st:"):
        from chromadb.utils import embedding_functions
        return embedding_functions.SentenceTransformerEmbeddingFunction(model_name=name[3:])
    raise ValueError(f"Embedding '{name}' tidak dikenali. Gunakan 'default', 'onnx', atau 'st:<model>'.")


def get_knowledge_collection(client=None, name: Optional[str] = None, embedding_function=None):
    client = client or get_chroma_client()
    ef = embedding_function if embedding_function is not None else _DEFAULT_EMBEDDING_FN
    kwargs: Dict[str, Any] = {
        "name": name or KNOWLEDGE_COLLECTION_NAME,
        "metadata": {"description": "MathAI SMA Curriculum Knowledge Base (Kemendikbud & m4th-lab.net)"},
        "embedding_function": ef,
    }
    return client.get_or_create_collection(**kwargs)


def get_upload_collection(client=None):
    client = client or get_chroma_client()
    return client.get_or_create_collection(
        name=UPLOAD_COLLECTION_NAME,
        metadata={"description": "Dokumen unggahan siswa (dibatasi per pengguna lewat metadata uploaded_by)"},
        embedding_function=_DEFAULT_EMBEDDING_FN,
    )


# ------------------------------------------------------------------------------
# ROW 20 - INDEXING KURIKULUM
# ------------------------------------------------------------------------------

def list_curriculum_files(kb_dir: Optional[str] = None) -> List[str]:
    target = kb_dir or KNOWLEDGE_BASE_DIR
    files = sorted(glob.glob(os.path.join(target, "**", "*.md"), recursive=True))
    return [
        f for f in files
        if not os.path.basename(f).lower().startswith("readme")
        and os.path.basename(f).lower() != "sma_m4thlab_curriculum.md"
    ]


def _chunk_id_prefix(rel_path: str) -> str:
    return rel_path.replace("\\", "/").replace("/", "_").replace(".", "_")


def build_curriculum_chunks(
    kb_dir: Optional[str] = None,
    chunk_size: int = DEFAULT_CHUNK_SIZE,
    chunk_overlap: int = DEFAULT_CHUNK_OVERLAP,
    breadcrumb_in_text: bool = True,
) -> List[Dict[str, Any]]:
    """Membaca seluruh materi, membersihkan LaTeX, chunking structure-aware. Hasil siap di-upsert."""
    target = kb_dir or KNOWLEDGE_BASE_DIR
    if not os.path.isdir(target):
        raise FileNotFoundError(f"Direktori Knowledge Base tidak ditemukan: {target}")

    all_chunks: List[Dict[str, Any]] = []
    for path in list_curriculum_files(target):
        rel = os.path.relpath(path, target).replace("\\", "/")
        with open(path, "r", encoding="utf-8") as handle:
            raw = handle.read()
        prefix = _chunk_id_prefix(rel)
        for chunk in chunk_markdown_with_metadata(
            raw, source_name=rel, chunk_size=chunk_size, chunk_overlap=chunk_overlap,
            breadcrumb_in_text=breadcrumb_in_text,
        ):
            chunk["metadata"]["origin"] = "curriculum"
            chunk["id"] = f"{prefix}_{chunk['metadata']['chunk_index']:05d}"
            all_chunks.append(chunk)
    return all_chunks


def compute_kb_fingerprint(
    kb_dir: Optional[str] = None,
    chunk_size: int = DEFAULT_CHUNK_SIZE,
    chunk_overlap: int = DEFAULT_CHUNK_OVERLAP,
    breadcrumb_in_text: bool = True,
) -> str:
    """Sidik jari isi materi + parameter chunking + versi pipeline. Berubah => index perlu dibangun ulang."""
    target = kb_dir or KNOWLEDGE_BASE_DIR
    digest = hashlib.sha1()
    digest.update(f"{PIPELINE_VERSION}|{chunk_size}|{chunk_overlap}|{breadcrumb_in_text}".encode())
    for path in list_curriculum_files(target):
        digest.update(os.path.relpath(path, target).replace("\\", "/").encode())
        with open(path, "rb") as handle:
            digest.update(handle.read())
    return digest.hexdigest()


def _manifest_path(persist_dir: Optional[str] = None) -> str:
    return os.path.join(os.path.abspath(persist_dir or CHROMA_PERSIST_DIR), MANIFEST_FILENAME)


def _read_manifest(persist_dir: Optional[str] = None) -> Dict[str, Any]:
    try:
        with open(_manifest_path(persist_dir), "r", encoding="utf-8") as handle:
            data = json.load(handle)
            return data if isinstance(data, dict) else {}
    except (OSError, ValueError):
        return {}


def _write_manifest(manifest: Dict[str, Any], persist_dir: Optional[str] = None) -> None:
    path = _manifest_path(persist_dir)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as handle:
        json.dump(manifest, handle, indent=2)
    os.replace(tmp, path)


def is_curriculum_index_current(
    kb_dir: Optional[str] = None,
    collection_name: Optional[str] = None,
    chunk_size: int = DEFAULT_CHUNK_SIZE,
    chunk_overlap: int = DEFAULT_CHUNK_OVERLAP,
    client=None,
    persist_dir: Optional[str] = None,
    breadcrumb_in_text: bool = True,
) -> bool:
    name = collection_name or KNOWLEDGE_COLLECTION_NAME
    entry = _read_manifest(persist_dir).get(name)
    if not entry:
        return False
    try:
        collection = get_knowledge_collection(client, name)
        if collection.count() != entry.get("chunks"):
            return False
    except Exception:
        return False
    return entry.get("fingerprint") == compute_kb_fingerprint(kb_dir, chunk_size, chunk_overlap, breadcrumb_in_text)


def index_curriculum_to_chromadb(
    kb_dir: Optional[str] = None,
    batch_size: int = 150,
    force_reindex: bool = False,
    collection_name: Optional[str] = None,
    chunk_size: int = DEFAULT_CHUNK_SIZE,
    chunk_overlap: int = DEFAULT_CHUNK_OVERLAP,
    breadcrumb_in_text: bool = True,
    embedding_function=None,
    client=None,
    persist_dir: Optional[str] = None,
    progress: Optional[Callable[[int, int], None]] = None,
) -> Dict[str, Any]:
    """
    [Row 20] Mengindeks seluruh materi kurikulum ke ChromaDB beserta metadata lengkapnya.

    - Idempoten: jika materi & parameter tidak berubah, tidak melakukan apa-apa ("already_indexed").
    - Jika materi/parameter berubah (atau force_reindex), koleksi dibangun ulang dari nol sehingga
      tidak ada chunk usang yang tertinggal.
    - Manifest ditulis HANYA setelah seluruh batch sukses; proses yang terhenti di tengah jalan
      akan otomatis dibangun ulang pada start berikutnya.
    Data Scientist dapat memakai collection_name/chunk_size/chunk_overlap/embedding_function lain
    untuk eksperimen (disarankan persist_dir terpisah) tanpa mengubah koleksi produksi.
    """
    name = collection_name or KNOWLEDGE_COLLECTION_NAME
    client = client or get_chroma_client(persist_dir)

    with _index_lock:
        if not force_reindex and is_curriculum_index_current(
            kb_dir, name, chunk_size, chunk_overlap, client, persist_dir, breadcrumb_in_text
        ):
            total = get_knowledge_collection(client, name).count()
            return {"status": "already_indexed", "total_chunks": total, "collection_name": name}

        started = time.time()
        manifest = _read_manifest(persist_dir)
        manifest.pop(name, None)
        _write_manifest(manifest, persist_dir)

        chunks = build_curriculum_chunks(kb_dir, chunk_size, chunk_overlap, breadcrumb_in_text)
        if not chunks:
            raise ValueError("Tidak ada materi yang dapat diindeks dari direktori knowledge_base.")

        try:
            client.delete_collection(name)
        except Exception:
            pass
        collection = get_knowledge_collection(client, name, embedding_function)

        total = len(chunks)
        for start in range(0, total, batch_size):
            batch = chunks[start:start + batch_size]
            collection.upsert(
                ids=[c["id"] for c in batch],
                documents=[c["text"] for c in batch],
                metadatas=[c["metadata"] for c in batch],
            )
            if progress:
                progress(min(start + batch_size, total), total)

        manifest[name] = {
            "fingerprint": compute_kb_fingerprint(kb_dir, chunk_size, chunk_overlap, breadcrumb_in_text),
            "chunks": collection.count(),
            "chunk_size": chunk_size,
            "chunk_overlap": chunk_overlap,
            "pipeline_version": PIPELINE_VERSION,
            "indexed_at": datetime.now(timezone.utc).isoformat(),
        }
        _write_manifest(manifest, persist_dir)
        return {
            "status": "success",
            "total_chunks": collection.count(),
            "elapsed_seconds": round(time.time() - started, 2),
            "collection_name": name,
            "chroma_dir": os.path.abspath(persist_dir or CHROMA_PERSIST_DIR),
        }


def _background_index_worker() -> None:
    try:
        _set_status("indexing", "Membangun index kurikulum ke ChromaDB...")
        result = index_curriculum_to_chromadb()
        _set_status("ready", f"{result.get('total_chunks')} chunks")
    except Exception as exc:  # jangan pernah menjatuhkan server
        _set_status("error", str(exc))
        print(f"[ChromaDB] Indexing gagal: {exc}")


def ensure_chromadb_indexed(background: bool = True) -> Optional[threading.Thread]:
    """
    Dipanggil saat aplikasi start. Jika index sudah mutakhir -> langsung "ready".
    Jika belum, index dibangun di thread latar sehingga server tidak tertahan; selama proses
    berjalan retrieval otomatis memakai fallback keyword.
    """
    if chromadb is None:
        _set_status("unavailable", "chromadb tidak terpasang; memakai fallback keyword")
        return None
    try:
        if is_curriculum_index_current():
            _set_status("ready", "index mutakhir")
            return None
    except Exception as exc:
        _set_status("error", str(exc))
        return None

    if not background:
        _background_index_worker()
        return None
    _set_status("indexing", "Membangun index kurikulum ke ChromaDB...")
    thread = threading.Thread(target=_background_index_worker, name="chroma-indexer", daemon=True)
    thread.start()
    return thread


# ------------------------------------------------------------------------------
# ROW 21 - INDEXING DOKUMEN UNGGAHAN
# ------------------------------------------------------------------------------

def _upload_id_prefix(user_id: int, filename: str) -> str:
    return f"u{int(user_id)}_{hashlib.sha1(filename.encode('utf-8')).hexdigest()[:10]}"


def index_uploaded_chunks(
    chunks: List[Dict[str, Any]],
    user_id: int,
    filename: str,
    batch_size: int = 150,
    client=None,
) -> Dict[str, Any]:
    """
    [Row 21] Menyimpan (upsert) chunk dokumen unggahan beserta metadata ke koleksi smartai_uploads.
    Mengunggah ulang file bernama sama milik pengguna yang sama MENGGANTI versi lama (tanpa duplikat).
    """
    if not chunks:
        raise ValueError("Tidak ada chunk untuk diindeks.")
    collection = get_upload_collection(client)
    collection.delete(where={"$and": [{"uploaded_by": int(user_id)}, {"source_file": filename}]})

    prefix = _upload_id_prefix(user_id, filename)
    uploaded_at = datetime.now(timezone.utc).isoformat()
    ids, docs, metas = [], [], []
    for index, chunk in enumerate(chunks):
        meta = dict(chunk["metadata"])
        meta.update({
            "origin": "upload",
            "uploaded_by": int(user_id),
            "source_file": filename,
            "uploaded_at": uploaded_at,
            "chunk_index": index,
        })
        ids.append(f"{prefix}_{index:05d}")
        docs.append(chunk["text"])
        metas.append(meta)

    for start in range(0, len(ids), batch_size):
        collection.upsert(
            ids=ids[start:start + batch_size],
            documents=docs[start:start + batch_size],
            metadatas=metas[start:start + batch_size],
        )
    _COLLECTION_TEXT_CACHE.clear()
    return {
        "indexed_chunks": len(ids),
        "collection": UPLOAD_COLLECTION_NAME,
        "total_in_collection": collection.count(),
    }


def list_user_documents(user_id: int, client=None) -> List[Dict[str, Any]]:
    collection = get_upload_collection(client)
    data = collection.get(where={"uploaded_by": int(user_id)}, include=["metadatas"])
    grouped: Dict[str, Dict[str, Any]] = {}
    for meta in data.get("metadatas") or []:
        name = meta.get("source_file", "")
        entry = grouped.setdefault(name, {
            "filename": name,
            "chunks": 0,
            "kelas": meta.get("kelas"),
            "bab": meta.get("bab"),
            "tingkat_lanjut": meta.get("tingkat_lanjut"),
            "uploaded_at": meta.get("uploaded_at"),
        })
        entry["chunks"] += 1
    return sorted(grouped.values(), key=lambda d: d.get("uploaded_at") or "", reverse=True)


def get_user_document_text(user_id: int, filename: str, max_chars: int = 6000, client=None) -> str:
    """Isi dokumen unggahan milik user_id (urut chunk_index), dipotong max_chars. '' bila tidak ada / bukan miliknya."""
    if chromadb is None or not filename:
        return ""
    collection = get_upload_collection(client)
    candidates = [filename]
    sanitized = re.sub(r"[^A-Za-z0-9_.-]+", "_", filename).strip("._")
    if sanitized and sanitized not in candidates:
        candidates.append(sanitized)
    data: Dict[str, Any] = {}
    for cand in candidates:
        where = {"$and": [{"uploaded_by": int(user_id)}, {"source_file": cand}]}
        data = collection.get(where=where, include=["documents", "metadatas"])
        if data.get("documents"):
            break
    pairs = sorted(
        zip(data.get("metadatas") or [], data.get("documents") or []),
        key=lambda p: (p[0] or {}).get("chunk_index", 0),
    )
    # Buang prefix breadcrumb "[nama-file]" di tiap chunk agar tidak berulang
    texts = [re.sub(r"^\[[^\]\n]*\]\n", "", doc or "") for _, doc in pairs]
    return "\n".join(texts)[:max_chars]


def delete_user_document(user_id: int, filename: str, client=None) -> int:
    collection = get_upload_collection(client)
    where = {"$and": [{"uploaded_by": int(user_id)}, {"source_file": filename}]}
    existing = collection.get(where=where, include=[])
    count = len(existing.get("ids") or [])
    if count:
        collection.delete(where=where)
        _COLLECTION_TEXT_CACHE.clear()
    return count


# ------------------------------------------------------------------------------
# RETRIEVAL (dipakai ML Engineer - Row 29/30)
# ------------------------------------------------------------------------------

def _and(conditions: List[Dict[str, Any]]) -> Optional[Dict[str, Any]]:
    if not conditions:
        return None
    return conditions[0] if len(conditions) == 1 else {"$and": conditions}


_STOPWORDS_ID = {
    "apa", "itu", "dan", "yang", "di", "ke", "dari", "untuk", "pada", "cara",
    "bagaimana", "menghitung", "tentukan", "nilai", "soal", "materi", "rumus",
    "contoh", "dengan", "adalah", "jika", "maka", "jelaskan", "tentang", "kelas",
    "sma", "matematika", "bab", "pengertian", "definisi", "berikan", "tuliskan",
}


def _extract_query_terms(query: str) -> List[str]:
    q_lower = query.lower()
    terms = [
        t for t in re.findall(r"[a-z0-9]+(?:\.[0-9]+)?", q_lower)
        if len(t) >= 2 and t not in _STOPWORDS_ID and not t.isdigit()
    ]
    return list(dict.fromkeys(terms))


_GENERIC_BAB_WORDS = {"dan", "fungsi", "persamaan", "pertidaksamaan", "sistem", "analisis", "data", "pada"}


def _lexical_bonus(query_lower: str, query_terms: List[str], doc_text: str, meta: Dict[str, Any]) -> float:
    if not query_terms:
        return 0.0
    haystack = f"{meta.get('bab', '')} {meta.get('heading_path', '')} {doc_text}".lower()
    matched = sum(1 for t in query_terms if t in haystack)
    if matched == 0:
        return 0.0
    ratio = matched / len(query_terms)
    bonus = ratio * 0.45 + min(0.25, matched * 0.06)
    # Bonus tambahan bila kata cocok tepat di judul subbab (heading_path / bab)
    heading_haystack = f"{meta.get('bab', '')} {meta.get('heading_path', '')}".lower()
    heading_matched = sum(1 for t in query_terms if t in heading_haystack)
    if heading_matched:
        bonus += min(0.85, heading_matched * 0.16)
    # Bonus anchor bab spesifik (mengatasi class imbalance bab besar vs bab kecil seperti Integral/Induksi)
    bab_lower = str(meta.get("bab", "")).lower()
    specific_bab_matched = sum(
        1 for t in query_terms if len(t) >= 4 and t not in _GENERIC_BAB_WORDS and t in bab_lower
    )
    if specific_bab_matched:
        bonus += min(0.45, specific_bab_matched * 0.28)
    return bonus


_COLLECTION_TEXT_CACHE: Dict[Any, Dict[str, Any]] = {}


def _get_cached_collection_data(collection) -> Dict[str, Any]:
    key = (getattr(collection, "name", id(collection)), collection.count())
    cached = _COLLECTION_TEXT_CACHE.get(key)
    if cached is None:
        if len(_COLLECTION_TEXT_CACHE) > 4:
            _COLLECTION_TEXT_CACHE.clear()
        cached = collection.get(include=["documents", "metadatas"])
        _COLLECTION_TEXT_CACHE[key] = cached
    return cached


def _matches_where(meta: Dict[str, Any], where: Optional[Dict[str, Any]]) -> bool:
    if not where:
        return True
    if "$and" in where:
        return all(_matches_where(meta, cond) for cond in where["$and"])
    for k, v in where.items():
        if meta.get(k) != v:
            return False
    return True


def _run_query(collection, query: str, n_results: int, where: Optional[Dict[str, Any]]) -> List[Dict[str, Any]]:
    count = collection.count()
    if count == 0:
        return []
    candidate_k = min(max(n_results * 10, 30), count)
    params: Dict[str, Any] = {"query_texts": [query], "n_results": candidate_k}
    if where:
        params["where"] = where
    result = collection.query(**params)
    docs = (result.get("documents") or [[]])[0]
    metas = (result.get("metadatas") or [[]])[0]
    dists = (result.get("distances") or [[]])[0]
    ids = (result.get("ids") or [[]])[0]

    q_lower = query.lower()
    q_terms = _extract_query_terms(query)

    by_id: Dict[str, Dict[str, Any]] = {}
    for cid, doc, meta, dist in zip(ids, docs, metas, dists):
        meta_dict = meta or {}
        bonus = _lexical_bonus(q_lower, q_terms, doc, meta_dict)
        base_d = min(float(dist), 0.90) if bonus >= 0.25 else float(dist)
        adj_dist = float(dist) if float(dist) == 0.0 else max(0.0001, round(base_d / (1.0 + bonus * 2.5), 6))
        by_id[cid] = {"id": cid, "text": doc, "metadata": meta_dict, "distance": adj_dist}

    # Hybrid lexical scan menggunakan cache memori agar subbab Bahasa Indonesia selalu tertangkap (<1ms)
    if q_terms and count <= 5000:
        try:
            all_data = _get_cached_collection_data(collection)
            for cid, doc, meta in zip(
                all_data.get("ids") or [],
                all_data.get("documents") or [],
                all_data.get("metadatas") or [],
            ):
                if cid in by_id:
                    continue
                meta_dict = meta or {}
                if not _matches_where(meta_dict, where):
                    continue
                bonus = _lexical_bonus(q_lower, q_terms, doc, meta_dict)
                if bonus >= 0.25:
                    adj_dist = max(0.0001, round(0.95 / (1.0 + bonus * 2.5), 6))
                    by_id[cid] = {"id": cid, "text": doc, "metadata": meta_dict, "distance": adj_dist}
        except Exception:
            pass

    ranked = sorted(by_id.values(), key=lambda item: item["distance"])
    return ranked[: min(n_results, count)]


def query_knowledge_chromadb(
    query: str,
    grade: Optional[Any] = None,
    is_advanced: Optional[bool] = None,
    n_results: int = 3,
    user_id: Optional[int] = None,
    strict_grade: bool = False,
    client=None,
    collection=None,
) -> List[Dict[str, Any]]:
    """
    Semantic vector search.

    - grade       : menerima 'Kelas 10' / 'X' / '10' (dinormalisasi). Kosong => tanpa filter kelas.
    - strict_grade: False (default) => chunk sesuai kelas diprioritaskan, sisa slot diisi chunk kelas
                    lain bila kurang (mis. Logika Matematika kelas 'Tambahan'). True => hanya kelas itu.
    - user_id     : bila diberikan, dokumen unggahan milik pengguna tsb ikut dicari.
    Mengembalikan [{'id','text','metadata','distance','matched_grade'}] diurutkan: kelas cocok dahulu,
    lalu jarak terkecil. Tidak pernah melempar exception (mengembalikan [] bila gagal / sedang indexing).
    """
    if not query or not query.strip() or chromadb is None:
        return []
    if collection is None and INDEX_STATUS["state"] == "indexing":
        return []  # index belum lengkap -> biarkan pemanggil memakai fallback keyword
    try:
        coll = collection or get_knowledge_collection(client)
        grade_value = normalize_grade(grade)
        extra: List[Dict[str, Any]] = []
        if is_advanced is not None:
            extra.append({"tingkat_lanjut": bool(is_advanced)})

        hits: List[Dict[str, Any]] = []
        if grade_value:
            hits = _run_query(coll, query, n_results, _and([{"kelas": grade_value}] + extra))
            for hit in hits:
                hit["matched_grade"] = True
        if not grade_value or (not strict_grade and len(hits) < n_results):
            seen = {h["id"] for h in hits}
            for hit in _run_query(coll, query, n_results, _and(extra)):
                if hit["id"] not in seen and len(hits) < n_results:
                    hit["matched_grade"] = not grade_value
                    hits.append(hit)

        if user_id is not None and collection is None:
            uploads = get_upload_collection(client)
            for hit in _run_query(uploads, query, n_results, {"uploaded_by": int(user_id)}):
                hit["matched_grade"] = True
                hits.append(hit)

        hits.sort(key=lambda h: (0 if h.get("matched_grade", True) else 1, h["distance"]))
        return hits[:n_results]
    except Exception as exc:
        print(f"[ChromaDB Retrieval Warning] Gagal query vektor: {exc}")
        return []


# ------------------------------------------------------------------------------
# STATISTIK & DAFTAR TOPIK (untuk Data Scientist, ML Engineer, dan sinkronisasi UI)
# ------------------------------------------------------------------------------

def get_knowledge_stats(client=None) -> Dict[str, Any]:
    stats: Dict[str, Any] = {
        "index_state": INDEX_STATUS["state"],
        "index_detail": INDEX_STATUS["detail"],
        "chromadb_available": chromadb is not None,
        "curriculum_chunks": 0,
        "upload_chunks": 0,
        "by_kelas": {},
        "advanced_chunks": 0,
        "manifest": _read_manifest().get(KNOWLEDGE_COLLECTION_NAME, {}),
    }
    if chromadb is None:
        return stats
    try:
        client = client or get_chroma_client()
        coll = get_knowledge_collection(client)
        stats["curriculum_chunks"] = coll.count()
        stats["upload_chunks"] = get_upload_collection(client).count()
        if stats["curriculum_chunks"]:
            for meta in coll.get(include=["metadatas"]).get("metadatas") or []:
                kelas = meta.get("kelas", "?")
                stats["by_kelas"][kelas] = stats["by_kelas"].get(kelas, 0) + 1
                if meta.get("tingkat_lanjut"):
                    stats["advanced_chunks"] += 1
    except Exception as exc:
        stats["error"] = str(exc)
    return stats


def list_curriculum_topics(client=None) -> Dict[str, List[Dict[str, Any]]]:
    """Daftar bab per kelas sesuai isi index, mis. {'10': [{'bab': 'Eksponen dan Logaritma', ...}]}."""
    topics: Dict[str, Dict[str, Dict[str, Any]]] = {}
    if chromadb is None:
        return {}
    try:
        coll = get_knowledge_collection(client or get_chroma_client())
        if coll.count() == 0:
            return {}
        for meta in coll.get(include=["metadatas"]).get("metadatas") or []:
            kelas = meta.get("kelas", "Umum")
            bab = meta.get("bab", "")
            topics.setdefault(kelas, {}).setdefault(bab, {
                "bab": bab,
                "mapel": meta.get("mapel"),
                "tingkat_lanjut": bool(meta.get("tingkat_lanjut")),
                "source_file": meta.get("source_file"),
            })
    except Exception as exc:
        print(f"[ChromaDB] Gagal membaca daftar topik: {exc}")
        return {}
    return {kelas: list(items.values()) for kelas, items in sorted(topics.items())}
