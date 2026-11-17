from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query, Request
from sqlalchemy.orm import Session

from core.database import get_db
from models.user_model import User
from services.user_service import get_current_user
from rag import (
    get_knowledge_stats,
    list_curriculum_topics,
    normalize_grade,
    query_knowledge_chromadb,
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
            return get_current_user(token=token, db=db)
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
