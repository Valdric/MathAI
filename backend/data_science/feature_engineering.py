"""
Tahap 3.3 — Feature Engineering & Mathematical Representation
Mengekstrak fitur domain matematika SMA (klasifikasi sub-topik, entitas rumus/operator/variabel,
kedalaman ekspresi LaTeX, jumlah langkah penyelesaian, dan complexity scoring) serta normalisasi notasi.
"""

import re
from typing import Any, Dict, List

_DISPLAY_MATH_RE = re.compile(r"\$\$(.*?)\$\$", re.DOTALL)
_INLINE_MATH_RE = re.compile(r"(?<![\$\\])\$(?!\$)([^$\n]+?)(?<![\$\\])\$(?!\$)")
_LATEX_CMD_RE = re.compile(r"\\([a-zA-Z]+)")
_VARIABLE_RE = re.compile(r"\b([xyzabcpqrmnktuvw]|\\[a-zA-Z]+)\b")

MATH_OPERATORS_WEIGHT = {
    "frac": 1.2,
    "dfrac": 1.2,
    "sqrt": 1.3,
    "int": 2.2,
    "lim": 2.0,
    "sum": 1.8,
    "prod": 1.8,
    "sin": 1.4,
    "cos": 1.4,
    "tan": 1.4,
    "sec": 1.5,
    "csc": 1.5,
    "cot": 1.5,
    "log": 1.5,
    "ln": 1.5,
    "binom": 1.6,
    "pmatrix": 1.9,
    "bmatrix": 1.9,
    "vmatrix": 1.9,
    "vec": 1.4,
    "overrightarrow": 1.4,
    "infty": 1.5,
    "circ": 1.3,
    "cup": 1.2,
    "cap": 1.2,
    "implies": 1.1,
    "iff": 1.2,
}

DOMAIN_TAXONOMY_KEYWORDS: Dict[str, List[str]] = {
    "Kalkulus (Limit, Turunan, Integral)": [
        "limit", "turunan", "derivatif", "integral", "antiturunan", "stasioner",
        "garis singgung kurva", "volume benda putar", "luas daerah", "aturan rantai",
    ],
    "Matriks, Vektor & Transformasi": [
        "matriks", "determinan", "invers matriks", "ordo", "transpos", "vektor",
        "dot product", "proyeksi", "transformasi", "translasi", "refleksi", "rotasi", "dilatasi",
    ],
    "Trigonometri": [
        "trigonometri", "sinus", "cosinus", "tangen", "sudut berelasi",
        "aturan sinus", "aturan cosinus", "identitas trigonometri",
    ],
    "Statistika & Peluang": [
        "statistika", "mean", "median", "modus", "kuartil", "desil", "varians",
        "simpangan baku", "bivariat", "regresi", "korelasi", "peluang", "permutasi",
        "kombinasi", "kombinatorik", "binomial", "distribusi", "frekuensi",
    ],
    "Geometri & Dimensi Tiga": [
        "dimensi tiga", "kubus", "balok", "limas", "jarak titik", "sudut antara",
        "lingkaran", "elips", "parabola", "hiperbola", "geometri analitik",
        "kekongruenan", "kesebangunan", "garis singgung lingkaran",
    ],
    "Barisan, Deret & Keuangan": [
        "barisan", "deret", "aritmetika", "geometri", "bunga majemuk", "bunga tunggal",
        "anuitas", "investasi", "pinjaman", "pertumbuhan", "peluruhan",
    ],
    "Polinomial & Fungsi Lanjut": [
        "polinomial", "suku banyak", "horner", "teorema sisa", "teorema faktor",
        "komposisi fungsi", "fungsi invers", "transformasi fungsi",
    ],
    "Aljabar, Eksponen & Sistem Persamaan": [
        "eksponen", "logaritma", "nilai mutlak", "spldv", "spltv", "pertidaksamaan",
        "persamaan kuadrat", "fungsi kuadrat", "diskriminan", "program linear",
    ],
    "Logika & Induksi Matematika": [
        "induksi matematika", "logika matematika", "konjungsi", "disjungsi",
        "implikasi", "biimplikasi", "kuantor", "tabel kebenaran", "silogisme",
    ],
}


def normalize_math_notation(text: str) -> str:
    """
    Menyeragamkan representasi notasi matematika agar konsisten untuk model & evaluasi:
    - \\dfrac, \\tfrac -> \\frac
    - \\leqslant -> \\le, \\geqslant -> \\ge, \\neq -> \\ne
    - Merapikan spasi berlebih di dalam blok $...$ dan $$...$$
    """
    if not text:
        return ""
    normalized = text
    replacements = {
        r"\dfrac": r"\frac",
        r"\tfrac": r"\frac",
        r"\leqslant": r"\le",
        r"\geqslant": r"\ge",
        r"\neq": r"\ne",
        r"\Longrightarrow": r"\implies",
        r"\Longleftrightarrow": r"\iff",
        r"\rightarrow": r"\to",
    }
    for old, new in replacements.items():
        normalized = normalized.replace(old, new)
    return normalized


def _compute_brace_depth(math_expr: str) -> int:
    max_depth = 0
    current = 0
    for ch in math_expr:
        if ch == "{":
            current += 1
            if current > max_depth:
                max_depth = current
        elif ch == "}":
            current = max(0, current - 1)
    return max_depth


def classify_sub_topic(text: str, metadata: Dict[str, Any] = None) -> str:
    meta = metadata or {}
    combined = f"{meta.get('bab', '')} {meta.get('heading_path', '')} {text[:600]}".lower()
    best_domain = "Aljabar, Eksponen & Sistem Persamaan"
    best_hits = 0
    for domain, kw_list in DOMAIN_TAXONOMY_KEYWORDS.items():
        hits = sum(2 if kw in f"{meta.get('bab', '')} {meta.get('heading_path', '')}".lower() else 1 for kw in kw_list if kw in combined)
        if hits > best_hits:
            best_hits = hits
            best_domain = domain
    return best_domain


def extract_math_features(text: str, metadata: Dict[str, Any] = None) -> Dict[str, Any]:
    """
    Mengekstrak vektor fitur domain matematika dari satu potongan teks/soal:
    - sub_topic_category
    - display_math_count, inline_math_count, total_formula_count
    - extracted_operators, extracted_variables
    - expression_depth (kedalaman kurung kurawal LaTeX)
    - reasoning_step_count (jumlah langkah aljabar / ekuivalensi)
    - has_worked_example (apakah memuat contoh soal & penyelesaian)
    - complexity_score (1.0 - 10.0) & difficulty_label ('Mudah' | 'Sedang' | 'Sulit')
    """
    meta = metadata or {}
    norm_text = normalize_math_notation(text)

    display_blocks = _DISPLAY_MATH_RE.findall(norm_text)
    without_display = _DISPLAY_MATH_RE.sub("", norm_text)
    inline_blocks = _INLINE_MATH_RE.findall(without_display)
    all_math = display_blocks + inline_blocks
    math_joined = " ".join(all_math)

    cmds = _LATEX_CMD_RE.findall(math_joined)
    operators = sorted({c for c in cmds if c in MATH_OPERATORS_WEIGHT})

    raw_vars = _VARIABLE_RE.findall(math_joined)
    variables = sorted({v for v in raw_vars if len(v) == 1 and v.isalpha()})

    max_depth = max((_compute_brace_depth(m) for m in all_math), default=0)

    # Hitung langkah penalaran (baris persamaan '=', \implies, \iff, Langkah)
    eq_steps = math_joined.count("=") + math_joined.count(r"\implies") + math_joined.count(r"\iff")
    step_markers = len(re.findall(r"(?i)\b(langkah|penyelesaian|alternatif penyelesaian|substitusi|eliminasi|jadi|kesimpulan)\b", norm_text))
    reasoning_steps = eq_steps + step_markers

    has_example = bool(
        re.search(r"(?i)\b(contoh\s*soal|masalah\s*\d|latihan|penyelesaian|alternatif\s*penyelesaian)\b", norm_text)
    )

    op_score = sum(MATH_OPERATORS_WEIGHT.get(op, 1.0) for op in operators)
    is_advanced = bool(meta.get("tingkat_lanjut", False))
    grade_str = str(meta.get("kelas", "10"))
    grade_weight = 1.5 if grade_str == "12" else (1.0 if grade_str == "11" else 0.5)

    raw_complexity = (
        1.0
        + min(2.5, len(display_blocks) * 0.6 + len(inline_blocks) * 0.12)
        + min(2.5, op_score * 0.35)
        + min(1.5, max_depth * 0.45)
        + min(1.5, reasoning_steps * 0.12)
        + (0.6 if is_advanced else 0.0)
        + grade_weight * 0.3
    )
    complexity_score = round(min(10.0, max(1.0, raw_complexity)), 2)

    if complexity_score < 4.0:
        difficulty = "Mudah"
    elif complexity_score < 6.8:
        difficulty = "Sedang"
    else:
        difficulty = "Sulit"

    token_estimate = len(re.findall(r"\S+", norm_text))

    return {
        "sub_topic_category": classify_sub_topic(norm_text, meta),
        "display_math_count": len(display_blocks),
        "inline_math_count": len(inline_blocks),
        "total_formula_count": len(all_math),
        "extracted_operators": operators,
        "extracted_variables": variables,
        "expression_depth": max_depth,
        "reasoning_step_count": reasoning_steps,
        "has_worked_example": has_example,
        "token_count": token_estimate,
        "complexity_score": complexity_score,
        "difficulty_label": difficulty,
    }


def enrich_chunk_with_ds_features(chunk: Dict[str, Any]) -> Dict[str, Any]:
    """Menambahkan fitur Data Science ke dictionary chunk dan metadatanya (kompatibel tipe primitif ChromaDB)."""
    text = chunk.get("text", "")
    meta = dict(chunk.get("metadata", {}))
    feats = extract_math_features(text, meta)

    meta["sub_topic_category"] = feats["sub_topic_category"]
    meta["formula_count"] = feats["total_formula_count"]
    meta["expression_depth"] = feats["expression_depth"]
    meta["reasoning_step_count"] = feats["reasoning_step_count"]
    meta["has_worked_example"] = feats["has_worked_example"]
    meta["token_count"] = feats["token_count"]
    meta["complexity_score"] = feats["complexity_score"]
    meta["difficulty_label"] = feats["difficulty_label"]
    meta["operators_csv"] = ",".join(feats["extracted_operators"])
    meta["variables_csv"] = ",".join(feats["extracted_variables"])

    enriched = dict(chunk)
    enriched["text"] = normalize_math_notation(text)
    enriched["metadata"] = meta
    enriched["ds_features"] = feats
    return enriched
