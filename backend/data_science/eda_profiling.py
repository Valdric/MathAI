"""
Tahap 3.1 — Exploratory Data Analysis (EDA) & Data Profiling
Menganalisis distribusi topik/bab, tingkat kesulitan (difficulty distribution), panjang teks/token,
rasio kelengkapan formula LaTeX & langkah penyelesaian (step-by-step reasoning),
serta deteksi class imbalance dan statistical outliers.
"""

import math
import statistics
from typing import Any, Dict, List

from .feature_engineering import extract_math_features


def _percentile(sorted_vals: List[float], p: float) -> float:
    if not sorted_vals:
        return 0.0
    k = (len(sorted_vals) - 1) * p
    f = math.floor(k)
    c = math.ceil(k)
    if f == c:
        return float(sorted_vals[int(k)])
    return float(sorted_vals[f] * (c - k) + sorted_vals[c] * (k - f))


def _gini_coefficient(counts: List[int]) -> float:
    vals = sorted(c for c in counts if c >= 0)
    n = len(vals)
    total = sum(vals)
    if n == 0 or total == 0:
        return 0.0
    cum = sum((i + 1) * v for i, v in enumerate(vals))
    return round((2.0 * cum) / (n * total) - (n + 1.0) / n, 4)


def _normalized_entropy(counts: List[int]) -> float:
    positive = [c for c in counts if c > 0]
    n = len(positive)
    total = sum(positive)
    if n <= 1 or total == 0:
        return 0.0
    ent = -sum((c / total) * math.log2(c / total) for c in positive)
    return round(ent / math.log2(n), 4)


def analyze_knowledge_base_eda(chunks: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Menjalankan EDA lengkap pada seluruh chunk kurikulum hasil olahan DE:
    1. Distribusi topik/bab, jenjang kelas, dan jalur (Wajib vs Tingkat Lanjut).
    2. Distribusi tingkat kesulitan (Mudah, Sedang, Sulit) & skor kompleksitas.
    3. Statistik panjang karakter & token (mean, std, median, IQR, p95, min, max).
    4. Rasio kelengkapan formula LaTeX & langkah penyelesaian (CoT coverage).
    5. Deteksi Class Imbalance (Imbalance Ratio, Gini, Entropy) & Outlier (IQR & Z-score).
    """
    if not chunks:
        return {"total_chunks": 0, "status": "empty"}

    char_lengths: List[int] = []
    token_counts: List[int] = []
    complexity_scores: List[float] = []

    by_grade: Dict[str, int] = {}
    by_bab: Dict[str, int] = {}
    by_domain: Dict[str, int] = {}
    by_difficulty: Dict[str, int] = {"Mudah": 0, "Sedang": 0, "Sulit": 0}
    by_track: Dict[str, int] = {"Matematika Umum (Wajib)": 0, "Matematika Tingkat Lanjut (Peminatan)": 0}

    chunks_with_latex = 0
    chunks_with_display_math = 0
    chunks_with_cot_steps = 0
    chunks_with_worked_examples = 0
    total_display_formulas = 0
    total_inline_formulas = 0

    chunk_records: List[Dict[str, Any]] = []

    for ch in chunks:
        text = ch.get("text", "")
        meta = ch.get("metadata", {})
        feats = ch.get("ds_features") or extract_math_features(text, meta)

        c_len = len(text)
        t_cnt = feats["token_count"]
        comp = feats["complexity_score"]
        diff = feats["difficulty_label"]
        dom = feats["sub_topic_category"]

        char_lengths.append(c_len)
        token_counts.append(t_cnt)
        complexity_scores.append(comp)

        kelas = str(meta.get("kelas", "Umum"))
        bab = str(meta.get("bab", "Tidak Diketahui"))
        is_tl = bool(meta.get("tingkat_lanjut", False))

        by_grade[kelas] = by_grade.get(kelas, 0) + 1
        by_bab[bab] = by_bab.get(bab, 0) + 1
        by_domain[dom] = by_domain.get(dom, 0) + 1
        by_difficulty[diff] = by_difficulty.get(diff, 0) + 1
        track_key = "Matematika Tingkat Lanjut (Peminatan)" if is_tl else "Matematika Umum (Wajib)"
        by_track[track_key] += 1

        if feats["total_formula_count"] > 0:
            chunks_with_latex += 1
        if feats["display_math_count"] > 0:
            chunks_with_display_math += 1
        if feats["reasoning_step_count"] >= 2:
            chunks_with_cot_steps += 1
        if feats["has_worked_example"]:
            chunks_with_worked_examples += 1

        total_display_formulas += feats["display_math_count"]
        total_inline_formulas += feats["inline_math_count"]

        chunk_records.append(
            {
                "id": ch.get("id", ""),
                "bab": bab,
                "kelas": kelas,
                "chars": c_len,
                "tokens": t_cnt,
                "complexity": comp,
            }
        )

    n = len(chunks)
    sorted_chars = sorted(char_lengths)
    sorted_tokens = sorted(token_counts)

    q25_c, q50_c, q75_c = _percentile(sorted_chars, 0.25), _percentile(sorted_chars, 0.50), _percentile(sorted_chars, 0.75)
    iqr_c = q75_c - q25_c
    mean_c = statistics.mean(sorted_chars)
    std_c = statistics.pstdev(sorted_chars) if n > 1 else 0.0

    q25_t, q50_t, q75_t = _percentile(sorted_tokens, 0.25), _percentile(sorted_tokens, 0.50), _percentile(sorted_tokens, 0.75)
    iqr_t = q75_t - q25_t
    mean_t = statistics.mean(sorted_tokens)
    std_t = statistics.pstdev(sorted_tokens) if n > 1 else 0.0

    # Deteksi Outlier (Z-score > 3.0 atau di luar pagar Tukey 1.5*IQR)
    upper_fence_c = q75_c + 1.5 * iqr_c
    lower_fence_c = max(0.0, q25_c - 1.5 * iqr_c)
    char_outliers = [
        r for r in chunk_records
        if r["chars"] > upper_fence_c or r["chars"] < lower_fence_c or (std_c > 0 and abs(r["chars"] - mean_c) / std_c > 3.0)
    ]

    # Analisis Class Imbalance antar Bab & Kelas
    bab_counts = list(by_bab.values())
    max_bab_name, max_bab_cnt = max(by_bab.items(), key=lambda kv: kv[1])
    min_bab_name, min_bab_cnt = min(by_bab.items(), key=lambda kv: kv[1])
    imbalance_ratio_bab = round(max_bab_cnt / max(1, min_bab_cnt), 2)

    grade_counts = [by_grade.get(g, 0) for g in ("10", "11", "12") if by_grade.get(g, 0) > 0]
    imbalance_ratio_grade = round(max(grade_counts) / max(1, min(grade_counts)), 2) if grade_counts else 1.0

    return {
        "total_chunks": n,
        "distributions": {
            "by_grade": dict(sorted(by_grade.items())),
            "by_track": by_track,
            "by_difficulty": by_difficulty,
            "by_domain_category": dict(sorted(by_domain.items(), key=lambda x: x[1], reverse=True)),
            "by_bab_top10": dict(sorted(by_bab.items(), key=lambda x: x[1], reverse=True)[:10]),
            "by_bab_bottom5": dict(sorted(by_bab.items(), key=lambda x: x[1])[:5]),
            "total_unique_babs": len(by_bab),
        },
        "length_and_token_stats": {
            "characters": {
                "mean": round(mean_c, 2),
                "std": round(std_c, 2),
                "min": sorted_chars[0],
                "q25": round(q25_c, 2),
                "median": round(q50_c, 2),
                "q75": round(q75_c, 2),
                "iqr": round(iqr_c, 2),
                "p95": round(_percentile(sorted_chars, 0.95), 2),
                "max": sorted_chars[-1],
            },
            "tokens": {
                "mean": round(mean_t, 2),
                "std": round(std_t, 2),
                "min": sorted_tokens[0],
                "q25": round(q25_t, 2),
                "median": round(q50_t, 2),
                "q75": round(q75_t, 2),
                "iqr": round(iqr_t, 2),
                "p95": round(_percentile(sorted_tokens, 0.95), 2),
                "max": sorted_tokens[-1],
            },
            "complexity_score": {
                "mean": round(statistics.mean(complexity_scores), 2),
                "std": round(statistics.pstdev(complexity_scores) if n > 1 else 0.0, 2),
                "median": round(_percentile(sorted(complexity_scores), 0.50), 2),
            },
        },
        "latex_and_reasoning_ratios": {
            "latex_chunk_coverage_ratio": round(chunks_with_latex / n, 4),
            "display_math_chunk_ratio": round(chunks_with_display_math / n, 4),
            "step_by_step_reasoning_ratio": round(chunks_with_cot_steps / n, 4),
            "worked_example_chunk_ratio": round(chunks_with_worked_examples / n, 4),
            "total_display_formulas": total_display_formulas,
            "total_inline_formulas": total_inline_formulas,
        },
        "class_imbalance_analysis": {
            "chapter_imbalance_ratio_max_min": imbalance_ratio_bab,
            "largest_chapter": {"bab": max_bab_name, "chunks": max_bab_cnt},
            "smallest_chapter": {"bab": min_bab_name, "chunks": min_bab_cnt},
            "chapter_gini_coefficient": _gini_coefficient(bab_counts),
            "chapter_normalized_entropy": _normalized_entropy(bab_counts),
            "grade_imbalance_ratio_max_min": imbalance_ratio_grade,
            "is_imbalanced_warning": imbalance_ratio_bab > 10.0,
        },
        "outlier_analysis": {
            "tukey_lower_fence_chars": round(lower_fence_c, 2),
            "tukey_upper_fence_chars": round(upper_fence_c, 2),
            "total_char_outliers": len(char_outliers),
            "outlier_ratio": round(len(char_outliers) / n, 4),
            "sample_outliers": char_outliers[:8],
        },
    }
