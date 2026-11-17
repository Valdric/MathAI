"""
Module 12 — Vector Store (ChromaDB + Ollama nomic-embed-text)
MathAI (Asisten AI Matematika SMA)
"""

import os
import re
from typing import List, Dict, Any, Optional
import chromadb
from dotenv import load_dotenv

from embeddings import embed_text, embed_texts, DEFAULT_OLLAMA_BASE_URL, DEFAULT_EMBED_MODEL
from ingest import extract_text, split_markdown_into_chunks, discover_knowledge_base_files
from rag_store import get_chroma_client

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))
load_dotenv()

DEFAULT_KB_PATH = os.path.join(BASE_DIR, "knowledge_base")
DEFAULT_CHROMA_PATH = os.path.join(BASE_DIR, "chroma_db")
COLLECTION_NAME = "mathai_knowledge_base"


class VectorStore:
    """
    Pengelola Vector Store berbasis ChromaDB lokal (PersistentClient)
    menggunakan vektor 768 dimensi dari Ollama (nomic-embed-text).
    """

    def __init__(
        self,
        chroma_path: str = DEFAULT_CHROMA_PATH,
        collection_name: str = COLLECTION_NAME,
        ollama_base_url: str = DEFAULT_OLLAMA_BASE_URL,
        embed_model: str = DEFAULT_EMBED_MODEL,
        auto_index: bool = True,
    ):
        self.chroma_path = os.path.abspath(chroma_path)
        self.collection_name = collection_name
        self.ollama_base_url = ollama_base_url
        self.embed_model = embed_model

        os.makedirs(self.chroma_path, exist_ok=True)
        self.client = get_chroma_client(self.chroma_path)
        self.collection = self.ensure_collection()
        if (
            auto_index
            and self.chroma_path == os.path.abspath(DEFAULT_CHROMA_PATH)
            and self.collection_name == COLLECTION_NAME
            and self.collection.count() == 0
            and os.path.isdir(DEFAULT_KB_PATH)
        ):
            self.index_knowledge_base(kb_root=DEFAULT_KB_PATH)

    def ensure_collection(self):
        """Membuat atau mengambil collection ChromaDB dengan metrik cosine similarity."""
        return self.client.get_or_create_collection(
            name=self.collection_name,
            metadata={"hnsw:space": "cosine"},
        )

    def count(self) -> int:
        """Mengembalikan jumlah chunk dokumen yang tersimpan di ChromaDB."""
        return self.collection.count()

    def index_document(
        self,
        doc_id: str,
        text: str,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> None:
        """Meng-embed satu dokumen/chunk (768 dimensi) dan menyimpannya ke ChromaDB."""
        vec = embed_text(text, base_url=self.ollama_base_url, model=self.embed_model)
        meta = dict(metadata or {"source": "manual"})
        meta.setdefault("uploaded_by", "system")
        self.collection.upsert(
            ids=[doc_id],
            documents=[text],
            embeddings=[vec],
            metadatas=[meta],
        )

    def index_chunks(
        self,
        chunks: List[Dict[str, Any]],
        batch_size: int = 32,
        uploaded_by: str = "system",
    ) -> int:
        """Meng-embed dan menyimpan banyak chunk sekaligus secara batch ke ChromaDB."""
        if not chunks:
            return 0

        total_indexed = 0
        for i in range(0, len(chunks), batch_size):
            batch = chunks[i : i + batch_size]
            ids = [item["id"] for item in batch]
            texts = [item["text"] for item in batch]
            metadatas = []
            for item in batch:
                m = dict(item.get("metadata", {"source": "knowledge_base"}))
                m.setdefault("uploaded_by", str(uploaded_by))
                metadatas.append(m)
            embeddings = embed_texts(
                texts,
                base_url=self.ollama_base_url,
                model=self.embed_model,
                batch_size=batch_size,
            )
            self.collection.upsert(
                ids=ids,
                documents=texts,
                embeddings=embeddings,
                metadatas=metadatas,
            )
            total_indexed += len(batch)

        return total_indexed

    def index_knowledge_base(
        self,
        kb_root: str = DEFAULT_KB_PATH,
        force_reindex: bool = False,
        chunk_size: int = 1200,
        chunk_overlap: int = 200,
    ) -> Dict[str, Any]:
        """
        Memindai seluruh file di folder knowledge_base (kelas_10, kelas_11, kelas_12, tambahan),
        memecahnya menjadi chunks, meng-embed dengan nomic-embed-text, dan menyimpannya ke ChromaDB.
        """
        existing_count = self.count()
        if existing_count > 0 and not force_reindex:
            return {
                "status": "skipped_already_indexed",
                "chunks_in_db": existing_count,
            }

        files = discover_knowledge_base_files(kb_root)
        all_chunks: List[Dict[str, Any]] = []
        for fpath in files:
            rel_path = os.path.relpath(fpath, kb_root).replace("\\", "/")
            raw_text = extract_text(fpath)
            file_chunks = split_markdown_into_chunks(
                raw_text,
                rel_path=rel_path,
                chunk_size=chunk_size,
                chunk_overlap=chunk_overlap,
            )
            all_chunks.extend(file_chunks)

        indexed_count = self.index_chunks(all_chunks, batch_size=256, uploaded_by="system")
        return {
            "status": "indexed",
            "files_processed": len(files),
            "chunks_indexed": indexed_count,
            "chunks_in_db": self.count(),
        }

    def search(
        self,
        query: str,
        k: int = 4,
        kelas: Optional[str] = None,
        user_id: Optional[str] = None,
    ) -> List[Dict[str, Any]]:
        """
        Mencari potongan materi paling relevan secara semantik menggunakan
        vektor embedding query (768 dimensi) di ChromaDB dengan filter user scoping
        serta reranking kata kunci matematika.
        """
        total = self.count()
        if total == 0:
            return []

        query_vec = embed_text(query, base_url=self.ollama_base_url, model=self.embed_model)
        candidate_k = min(max(k * 6, 20), total)

        where_filter = None
        if kelas:
            kelas_norm = str(kelas).upper().replace("KELAS", "").strip()
            if kelas_norm in ("X", "10"):
                where_filter = {"kelas": {"$in": ["10", "Umum", ""]}}
            elif kelas_norm in ("XI", "11"):
                where_filter = {"kelas": {"$in": ["11", "Umum", ""]}}
            elif kelas_norm in ("XII", "12"):
                where_filter = {"kelas": {"$in": ["12", "Umum", ""]}}

        try:
            res = self.collection.query(
                query_embeddings=[query_vec],
                n_results=candidate_k,
                where=where_filter,
                include=["documents", "metadatas", "distances"],
            )
            if where_filter and (not res["documents"] or not res["documents"][0]):
                res = self.collection.query(
                    query_embeddings=[query_vec],
                    n_results=candidate_k,
                    include=["documents", "metadatas", "distances"],
                )
        except Exception:
            res = self.collection.query(
                query_embeddings=[query_vec],
                n_results=candidate_k,
                include=["documents", "metadatas", "distances"],
            )

        stopwords = {
            "apa", "itu", "dan", "yang", "di", "ke", "dari", "untuk", "pada",
            "cara", "bagaimana", "menghitung", "tentukan", "nilai", "soal",
            "materi", "rumus", "contoh", "dengan", "adalah", "jika", "maka",
        }
        query_terms = [
            w for w in re.findall(r"[a-zA-Z0-9]{3,}", query.lower())
            if w not in stopwords
        ]

        hits: List[Dict[str, Any]] = []
        if res and res.get("documents") and res["documents"][0]:
            docs = res["documents"][0]
            metas = res["metadatas"][0] if res.get("metadatas") else [{}] * len(docs)
            dists = res["distances"][0] if res.get("distances") else [0.0] * len(docs)
            ids = res["ids"][0] if res.get("ids") else [""] * len(docs)

            for doc_id, doc_text, meta, dist in zip(ids, docs, metas, dists):
                meta = meta or {}
                owner = str(meta.get("uploaded_by", "system"))
                # User scoping: izinkan dokumen kurikulum ("system") atau milik user_id sendiri
                if owner not in ("system", "") and user_id is not None and owner != str(user_id):
                    continue

                base_sim = 1.0 - float(dist)
                doc_lower = f"{meta.get('judul', '')} {meta.get('source', '')} {doc_text}".lower()
                matched_terms = sum(1 for term in query_terms if term in doc_lower)
                boost = min(0.15, matched_terms * 0.04)

                hits.append(
                    {
                        "id": doc_id,
                        "text": doc_text,
                        "metadata": meta,
                        "distance": float(dist),
                        "similarity": round(base_sim + boost, 4),
                    }
                )

        hits.sort(key=lambda x: x["similarity"], reverse=True)
        return hits[:k]
