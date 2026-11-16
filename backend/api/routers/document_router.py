import os
import uuid
from typing import Optional

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from werkzeug.utils import secure_filename

from models.user_model import User
from services.user_service import get_current_user
from rag import (
    delete_user_document,
    ingest_uploaded_document,
    list_user_documents,
    normalize_grade,
)

router = APIRouter()

UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "uploads")
ALLOWED_EXTENSIONS = {".pdf", ".docx", ".txt", ".md"}
MAX_UPLOAD_BYTES = 10 * 1024 * 1024  # 10 MB


@router.post("/upload")
def upload_file(
    file: UploadFile = File(...),
    kelas: Optional[str] = Form(None, description="Opsional: 10 / 11 / 12 / Tambahan (juga menerima 'Kelas 10', 'X')"),
    bab: Optional[str] = Form(None, description="Opsional: nama bab/topik dokumen"),
    tingkat_lanjut: Optional[bool] = Form(None, description="Opsional: true untuk Matematika Tingkat Lanjut"),
    current_user: User = Depends(get_current_user),
):
    """
    [Row 21] Mengunggah dokumen materi (.pdf/.docx/.txt/.md), membersihkan LaTeX, memotong
    secara structure-aware, lalu meng-index ke ChromaDB (koleksi smartai_uploads).
    Dokumen hanya dapat diambil kembali oleh pengunggahnya saat chat.
    """
    if not file.filename:
        raise HTTPException(status_code=400, detail="Nama file kosong")
    filename = secure_filename(file.filename)
    if not filename:
        raise HTTPException(status_code=400, detail="Nama file tidak valid")
    extension = os.path.splitext(filename)[1].lower()
    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Tipe file {extension or '(tanpa ekstensi)'} tidak didukung. Gunakan: {', '.join(sorted(ALLOWED_EXTENSIONS))}",
        )

    kelas_value = kelas.strip() if kelas and kelas.strip() else None
    if kelas_value and normalize_grade(kelas_value) is None:
        raise HTTPException(status_code=422, detail="Nilai kelas tidak valid. Gunakan 10, 11, 12, atau Tambahan.")

    content = file.file.read(MAX_UPLOAD_BYTES + 1)
    if len(content) > MAX_UPLOAD_BYTES:
        raise HTTPException(status_code=413, detail=f"Ukuran file melebihi batas {MAX_UPLOAD_BYTES // (1024 * 1024)} MB")
    if not content:
        raise HTTPException(status_code=400, detail="File kosong")

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    temp_path = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4().hex}_{filename}")
    try:
        with open(temp_path, "wb") as buffer:
            buffer.write(content)
        result = ingest_uploaded_document(
            temp_path,
            user_id=current_user.id,
            original_filename=filename,
            kelas=kelas_value,
            bab=bab,
            tingkat_lanjut=tingkat_lanjut,
        )
        return {
            "message": f"File {filename} berhasil diproses dan di-index ({result['indexed_chunks']} potongan teks).",
            "filename": filename,
            "chunks_count": result["chunks_count"],
            "indexed_to_chroma": True,
            "indexed_chunks": result["indexed_chunks"],
            "collection": result["collection"],
            "kelas": result["kelas"],
            "bab": result["bab"],
            "tingkat_lanjut": result["tingkat_lanjut"],
            "uploaded_by": current_user.id,
        }
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Gagal memproses dokumen: {exc}")
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)


@router.get("/api/documents")
def list_documents(current_user: User = Depends(get_current_user)):
    """Daftar dokumen unggahan milik pengguna yang sedang login."""
    try:
        return {"documents": list_user_documents(current_user.id)}
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))


@router.delete("/api/documents/{filename}")
def delete_document(filename: str, current_user: User = Depends(get_current_user)):
    """Menghapus satu dokumen unggahan (beserta seluruh chunk-nya di ChromaDB) milik pengguna."""
    try:
        deleted = delete_user_document(current_user.id, filename)
    except RuntimeError as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    if deleted == 0:
        raise HTTPException(status_code=404, detail="Dokumen tidak ditemukan")
    return {"message": f"Dokumen {filename} dihapus", "deleted_chunks": deleted}
