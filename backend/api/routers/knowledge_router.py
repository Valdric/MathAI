import os
from typing import Optional

from fastapi import APIRouter, Depends, File, Form, HTTPException, Query, Request, UploadFile
from sqlalchemy.orm import Session
from werkzeug.utils import secure_filename

from core.database import get_db
from models.user_model import User
from services.user_service import get_current_user, decode_access_token
from rag import (
    get_knowledge_stats,
    list_curriculum_topics,
    normalize_grade,
    process_document,
    query_knowledge_chromadb,
)
from rag_store import (
    CHROMA_PERSIST_DIR,
    KNOWLEDGE_BASE_DIR,
    KNOWLEDGE_COLLECTION_NAME,
    get_chroma_client,
    get_knowledge_collection,
    _read_manifest,
    _write_manifest,
)

router = APIRouter(prefix="/api/knowledge")


def get_optional_user(
    request: Request,
    db: Session = Depends(get_db),
) -> Optional[User]:
    """Mengambil user jika token dikirim atau dependency di-override (test), atau None jika diakses publik via Swagger/Browser."""
    override = request.app.dependency_overrides.get(get_current_user)
    if override is not None:
        return override()
    auth_header = request.headers.get("Authorization", "")
    if auth_header.lower().startswith("bearer "):
        token = auth_header.split(" ", 1)[1].strip()
        try:
            return decode_access_token(token=token, db=db)
        except HTTPException:
            return None
    return None


@router.get("/search")
def search_knowledge(
    q: str = Query(..., min_length=2, description="Pertanyaan / kata kunci"),
    grade: Optional[str] = Query(None, description="10 / 11 / 12 / Tambahan atau 'Kelas 10'"),
    k: int = Query(3, ge=1, le=10),
    strict_grade: bool = Query(False, description="True = hanya kelas tersebut"),
    current_user: Optional[User] = Depends(get_optional_user),
):
    """
    Pencarian semantik pada ChromaDB (kurikulum + dokumen unggahan milik pengguna).
    Berguna untuk debugging retrieval oleh ML Engineer / Data Scientist dan sumber data UI.
    `distance` makin kecil = makin mirip.
    """
    if grade and normalize_grade(grade) is None:
        raise HTTPException(status_code=422, detail="Nilai grade tidak valid. Gunakan 10, 11, 12, atau Tambahan.")
    user_id = current_user.id if current_user is not None else None
    hits = query_knowledge_chromadb(
        q, grade=grade, n_results=k, user_id=user_id, strict_grade=strict_grade
    )
    return {
        "query": q,
        "grade": normalize_grade(grade),
        "count": len(hits),
        "results": [
            {
                "text": h["text"],
                "distance": round(h["distance"], 4),
                "matched_grade": h.get("matched_grade", True),
                "metadata": h["metadata"],
            }
            for h in hits
        ],
    }


@router.get("/topics")
def knowledge_topics(current_user: Optional[User] = Depends(get_optional_user)):
    """Daftar bab per kelas yang benar-benar ada di index (untuk sinkronisasi pilihan topik di UI)."""
    return {"topics": list_curriculum_topics()}


@router.get("/stats")
def knowledge_stats(current_user: Optional[User] = Depends(get_optional_user)):
    """Status index (idle/indexing/ready/error), jumlah chunk, distribusi per kelas, dan manifest."""
    return get_knowledge_stats()


@router.delete("/reset")
def reset_knowledge_database():
    """
    Mereset / menghapus seluruh koleksi vector database smartai_knowledge di ChromaDB.
    Tidak memerlukan token autentikasi (bisa langsung di-execute dari Swagger).
    """
    from rag_store import (
        get_chroma_client,
        KNOWLEDGE_COLLECTION_NAME,
        _read_manifest,
        _write_manifest,
        CHROMA_PERSIST_DIR,
    )
    client = get_chroma_client()
    count = 0
    try:
        col = client.get_collection(KNOWLEDGE_COLLECTION_NAME)
        count = col.count()
        client.delete_collection(KNOWLEDGE_COLLECTION_NAME)
    except Exception:
        pass

    manifest = _read_manifest(CHROMA_PERSIST_DIR)
    manifest.pop(KNOWLEDGE_COLLECTION_NAME, None)
    _write_manifest(manifest, CHROMA_PERSIST_DIR)

    return {
        "status": "success",
        "message": "Vector database smartai_knowledge berhasil dihapus/direset.",
        "deleted_chunks": count,
    }


@router.delete("/{filename}")
def delete_knowledge_file(filename: str):
    """
    Menghapus vektor dokumen materi tertentu dari ChromaDB (misal: presiden_indonesia_03.md).
    Tidak memerlukan token autentikasi (bisa langsung di-execute dari Swagger).
    """
    from rag_store import (
        get_chroma_client,
        KNOWLEDGE_COLLECTION_NAME,
        _read_manifest,
        _write_manifest,
        CHROMA_PERSIST_DIR,
    )
    client = get_chroma_client()
    deleted_count = 0
    try:
        col = client.get_collection(KNOWLEDGE_COLLECTION_NAME)
        # Cari chunk yang memiliki source_file atau source yang cocok
        res = col.get(where={"$or": [{"source_file": filename}, {"source": filename}]})
        ids = res.get("ids", [])
        if ids:
            col.delete(ids=ids)
            deleted_count = len(ids)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gagal menghapus vektor materi: {str(e)}")

    manifest = _read_manifest(CHROMA_PERSIST_DIR)
    manifest.pop(KNOWLEDGE_COLLECTION_NAME, None)
    _write_manifest(manifest, CHROMA_PERSIST_DIR)

    return {
        "status": "success",
        "message": f"Vektor dari file {filename} berhasil dihapus dari ChromaDB.",
        "deleted_chunks": deleted_count,
    }


@router.post("/upload")
def upload_knowledge_document(
    file: UploadFile = File(..., description="Pilih file dokumen materi (.md / .txt / .docx / .pdf)"),
    kelas: Optional[str] = Form(None, description="Opsional: 10 / 11 / 12 / Umum / Tambahan"),
    bab: Optional[str] = Form(None, description="Opsional: Nama topik atau bab"),
    tingkat_lanjut: Optional[bool] = Form(False, description="Centang true jika Matematika Tingkat Lanjut"),
):
    """
    Menyimpan dokumen materi langsung ke folder backend/knowledge_base/ dan mengindeksnya ke ChromaDB.
    Dapat digunakan langsung dari Swagger tanpa perlu login / token.
    """
    if not file.filename:
        raise HTTPException(status_code=400, detail="Nama file kosong")
    filename = secure_filename(file.filename)
    if not filename:
        raise HTTPException(status_code=400, detail="Nama file tidak valid")

    ext = os.path.splitext(filename)[1].lower()
    allowed = {".md", ".txt", ".docx", ".pdf"}
    if ext not in allowed:
        raise HTTPException(
            status_code=400,
            detail=f"Tipe file {ext} tidak didukung. Gunakan salah satu dari: {', '.join(sorted(allowed))}",
        )

    # Simpan file secara fisik ke direktori backend/knowledge_base/
    os.makedirs(KNOWLEDGE_BASE_DIR, exist_ok=True)
    target_path = os.path.join(KNOWLEDGE_BASE_DIR, filename)

    content = file.file.read()
    if not content:
        raise HTTPException(status_code=400, detail="File yang diunggah kosong")

    with open(target_path, "wb") as f:
        f.write(content)

    override = {
        "kelas": normalize_grade(kelas) if (kelas and normalize_grade(kelas)) else (kelas.strip() if kelas else "Umum"),
        "judul": bab.strip() if bab and bab.strip() else os.path.splitext(filename)[0].replace("_", " ").title(),
        "tingkat_lanjut": tingkat_lanjut,
    }

    try:
        chunks = process_document(target_path, override_metadata=override, source_name=filename)
        if not chunks:
            raise HTTPException(status_code=400, detail="Tidak ada teks materi yang dapat diekstrak dari file ini.")

        client = get_chroma_client()
        col = get_knowledge_collection(client)

        # Hapus chunk lama jika file dengan nama ini sudah pernah diindeks
        try:
            existing = col.get(where={"$or": [{"source_file": filename}, {"source": filename}]})
            if existing.get("ids"):
                col.delete(ids=existing["ids"])
        except Exception:
            pass

        prefix = filename.replace("\\", "/").replace("/", "_").replace(".", "_")
        ids = [f"{prefix}_{i:05d}" for i in range(len(chunks))]
        docs = [c["text"] for c in chunks]
        metas = []
        for i, c in enumerate(chunks):
            m = dict(c["metadata"])
            m.setdefault("source_file", filename)
            m.setdefault("source", filename)
            m.setdefault("chunk_index", i)
            m.setdefault("origin", "curriculum")
            metas.append(m)

        col.upsert(
            ids=ids,
            documents=docs,
            metadatas=metas,
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gagal memproses dan mengindeks dokumen: {str(e)}")

    return {
        "status": "success",
        "message": f"Dokumen {filename} berhasil disimpan ke folder knowledge_base dan diindeks ke ChromaDB.",
        "filename": filename,
        "saved_path": f"backend/knowledge_base/{filename}",
        "indexed_chunks": len(chunks),
        "total_knowledge_chunks": col.count(),
    }
