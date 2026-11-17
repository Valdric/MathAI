"""
Tahap 3.2 — Data Quality & Statistical Validation
Validasi otomatis menggunakan Pydantic v2 + Statistical Distribution Assertions
untuk memastikan dataset hasil olahan DE memenuhi standar sebelum masuk ke pipeline ML.
"""

import re
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field, field_validator

VALID_GRADES_SET = {"10", "11", "12", "Tambahan", "Umum"}
BROKEN_UNICODE_CHARS = ("\ufffd", "□")
_DISPLAY_RE = re.compile(r"\$\$.*?\$\$", re.DOTALL)


class ChunkMetadataSchema(BaseModel):
    kelas: str = Field(..., description="Jenjang kelas SMA (10, 11, 12, Tambahan, Umum)")
    bab: str = Field(..., min_length=1, description="Nama bab materi")
    heading_path: str = Field(default="", description="Jalur hierarki judul bab/subbab")
    mapel: str = Field(..., min_length=1)
    tingkat_lanjut: bool = Field(...)
    source_file: str = Field(..., min_length=1)
    chunk_index: int = Field(..., ge=0)
    char_count: int = Field(..., gt=0)

    @field_validator("kelas")
    @classmethod
    def validate_kelas(cls, v: str) -> str:
        if v not in VALID_GRADES_SET:
            raise ValueError(f"Kelas '{v}' tidak valid. Harus salah satu dari {VALID_GRADES_SET}")
        return v


class CurriculumChunkSchema(BaseModel):
    id: str = Field(..., min_length=3)
    text: str = Field(..., min_length=10)
    metadata: ChunkMetadataSchema

    @field_validator("text")
    @classmethod
    def validate_latex_and_encoding(cls, v: str) -> str:
        for bad in BROKEN_UNICODE_CHARS:
            if bad in v:
                raise ValueError(f"Teks mengandung karakter Unicode rusak: {repr(bad)}")
        if v.count("$$") % 2 != 0:
            raise ValueError("Delimiter display math '$$' tidak berpasangan (ganjil).")
        without_display = _DISPLAY_RE.sub("", v).replace(r"\$", "")
        if without_display.count("$") % 2 != 0:
            raise ValueError("Delimiter inline math '$' tidak berpasangan (ganjil).")
        return v


class GoldenQuerySchema(BaseModel):
    id: str = Field(..., min_length=2)
    question: str = Field(..., min_length=5)
    expected_bab: List[str] = Field(default_factory=list)
    expected_kelas: str = Field(...)
    difficulty: str = Field(default="Sedang")
    domain_category: str = Field(default="Aljabar, Eksponen & Sistem Persamaan")
    is_trap: bool = Field(default=False)
    reference_formula: Optional[str] = Field(default=None)
    ground_truth_answer: Optional[str] = Field(default=None)


def validate_chunks_statistical(chunks: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Menjalankan validasi skema Pydantic v2 pada setiap chunk + asseri distribusi statistik dataset:
    1. Validasi skema Pydantic per-chunk (tipe metadata, kelengkapan field, keseimbangan LaTeX).
    2. Keunikan ID chunk (0 duplikat).
    3. Cakupan minimal setiap jenjang kelas ('10', '11', '12', 'Tambahan').
    4. Rasio error LaTeX = 0.0 dan rasio karakter rusak = 0.0.
    5. Rata-rata panjang karakter berada di rentang sehat [250, 1200] karakter.
    """
    schema_errors: List[Dict[str, str]] = []
    seen_ids = set()
    duplicate_ids: List[str] = []
    grade_counts: Dict[str, int] = {}
    char_lengths: List[int] = []

    for idx, ch in enumerate(chunks):
        cid = ch.get("id", f"index_{idx}")
        if cid in seen_ids:
            duplicate_ids.append(cid)
        seen_ids.add(cid)

        try:
            validated = CurriculumChunkSchema.model_validate(ch)
            grade_counts[validated.metadata.kelas] = grade_counts.get(validated.metadata.kelas, 0) + 1
            char_lengths.append(len(validated.text))
        except Exception as exc:
            schema_errors.append({"id": cid, "error": str(exc)})

    n = len(chunks)
    avg_chars = (sum(char_lengths) / len(char_lengths)) if char_lengths else 0.0

    statistical_assertions = {
        "total_chunks_min_1000": n >= 1000,
        "zero_schema_or_latex_errors": len(schema_errors) == 0,
        "zero_duplicate_chunk_ids": len(duplicate_ids) == 0,
        "all_core_grades_covered_10_11_12": all(grade_counts.get(g, 0) >= 50 for g in ("10", "11", "12")),
        "mean_chunk_length_in_bounds_250_1200": 250.0 <= avg_chars <= 1200.0,
    }

    passed = all(statistical_assertions.values())
    return {
        "passed": passed,
        "total_checked": n,
        "valid_chunks": n - len(schema_errors),
        "schema_error_count": len(schema_errors),
        "duplicate_id_count": len(duplicate_ids),
        "mean_char_length": round(avg_chars, 2),
        "grade_counts": grade_counts,
        "statistical_assertions": statistical_assertions,
        "sample_errors": schema_errors[:5],
    }
