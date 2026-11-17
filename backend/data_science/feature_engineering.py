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


def analyze_math_problem_hint(text: str) -> Dict[str, str]:
    """
    Menganalisis pola soal matematika SMA secara deterministik untuk:
    1. Memperkaya query RAG (query_expansion) agar sub-topik yang tepat (mis. Aritmetika vs Geometri) berada di peringkat #1.
    2. Menyediakan verifikasi perhitungan eksak (verification_hint) agar LLM 3B tidak salah memilih rumus atau salah hitung.
    """
    if not text or not text.strip():
        return {"query_expansion": "", "verification_hint": ""}

    clean = text.strip()
    lower = clean.lower()
    hints: List[str] = []
    expansions: List[str] = []

    # 1. Deteksi teks radikal PDF yang teracak saat copy-paste: "( 7 5)( 7 5) + −" -> (\sqrt{7}+\sqrt{5})(\sqrt{7}-\sqrt{5})
    rad_match = re.search(r"\(\s*(\d+)\s+(\d+)\s*\)\s*\(\s*\1\s+\2\s*\)\s*[+＋]\s*[-−–]", clean)
    if rad_match:
        x_val, y_val = int(rad_match.group(1)), int(rad_match.group(2))
        diff_val = x_val - y_val
        expansions.append("eksponen bentuk akar merasionalkan perkalian sekawan")
        hints.append(
            f"- Rekonstruksi notasi akar dari PDF: Bentuk `({x_val} {y_val})({x_val} {y_val}) + -` adalah perkalian sekawan bentuk akar "
            f"$(\\sqrt{{{x_val}}} + \\sqrt{{{y_val}}})(\\sqrt{{{x_val}}} - \\sqrt{{{y_val}}})$.\n"
            f"- Rumus selisih kuadrat: $(a + b)(a - b) = a^2 - b^2$.\n"
            f"- Perhitungan: $(\\sqrt{{{x_val}}})^2 - (\\sqrt{{{y_val}}})^2 = {x_val} - {y_val} = {diff_val}$."
        )

    # 2. Deteksi barisan bilangan eksplisit (misal: 3, 10, 17, 24, 31 atau 27, 24, 21)
    if any(k in lower for k in ("barisan", "deret", "suku")):
        seq_match = re.search(r"(?<![A-Za-z0-9_])(-?\d+(?:\s*,\s*-?\d+){2,})", clean)
        if seq_match:
            nums = [int(n.strip()) for n in seq_match.group(1).split(",")]
            if len(nums) >= 3:
                d1 = nums[1] - nums[0]
                d2 = nums[2] - nums[1]
                is_arith = all(nums[i + 1] - nums[i] == d1 for i in range(len(nums) - 1)) and d1 != 0
                is_geom = (
                    not is_arith
                    and all(nums[i] != 0 for i in range(len(nums) - 1))
                    and (nums[1] / nums[0] == nums[2] / nums[1])
                )
                if is_arith:
                    a_val, b_val = nums[0], d1
                    expansions.append("barisan aritmetika deret aritmetika Definisi Barisan Aritmetika Sifat Suku ke-n Barisan Aritmetika")
                    line = (
                        f"- Jenis barisan: **Barisan Aritmetika** (bukan geometri), karena selisih/beda dua suku berurutan tetap: "
                        f"$b = u_2 - u_1 = {nums[1]} - ({nums[0]}) = {b_val}$, dengan suku pertama $a = u_1 = {a_val}$.\n"
                        f"- Rumus suku ke-$n$ Barisan Aritmetika: $$u_n = a + (n - 1)b$$"
                    )
                    n_suku = re.search(r"suku\s+ke-\s*(\d+)", lower)
                    n_jumlah = re.search(r"jumlah\s+(\d+)\s+suku", lower)
                    if n_suku:
                        n_val = int(n_suku.group(1))
                        un_val = a_val + (n_val - 1) * b_val
                        line += (
                            f"\n- Perhitungan suku ke-{n_val} ($n = {n_val}$): "
                            f"$$u_{{{n_val}}} = {a_val} + ({n_val} - 1) \\times ({b_val}) = {a_val} + {n_val - 1} \\times ({b_val}) = {a_val} + {(n_val - 1) * b_val} = {un_val}$$"
                        )
                    if n_jumlah:
                        n_val = int(n_jumlah.group(1))
                        sn_num = n_val * (2 * a_val + (n_val - 1) * b_val)
                        sn_val = sn_num // 2 if sn_num % 2 == 0 else sn_num / 2
                        line += (
                            f"\n- Rumus jumlah $n$ suku pertama Deret Aritmetika: $$S_n = \\frac{{n}}{{2}}(2a + (n - 1)b)$$\n"
                            f"- Perhitungan $S_{{{n_val}}}$: $$S_{{{n_val}}} = \\frac{{{n_val}}}{{2}}(2({a_val}) + ({n_val} - 1)({b_val})) = {sn_val}$$"
                        )
                    hints.append(line)
                elif is_geom:
                    a_val = nums[0]
                    r_val = nums[1] // nums[0] if nums[1] % nums[0] == 0 else nums[1] / nums[0]
                    expansions.append("barisan geometri deret geometri rasio Sifat Suku ke-n Barisan Geometri")
                    line = (
                        f"- Jenis barisan: **Barisan Geometri**, dengan suku pertama $a = {a_val}$ dan rasio $r = \\frac{{{nums[1]}}}{{{nums[0]}}} = {r_val}$.\n"
                        f"- Rumus suku ke-$n$ Barisan Geometri: $$u_n = a \\cdot r^{{n-1}}$$"
                    )
                    n_suku = re.search(r"suku\s+ke-\s*(\d+)", lower)
                    if n_suku:
                        n_val = int(n_suku.group(1))
                        un_val = a_val * (r_val ** (n_val - 1))
                        line += f"\n- Perhitungan suku ke-{n_val}: $$u_{{{n_val}}} = {a_val} \\cdot ({r_val})^{{{n_val - 1}}} = {un_val}$$"
                    hints.append(line)

    # 3. Deteksi dua suku diketahui (misal: U4 = 17 dan U9 = 39, atau suku ke-4 adalah 17 dan suku ke-9 adalah 39)
    if not hints and "geometri" not in lower and "rasio" not in lower:
        known_terms: Dict[int, int] = {}
        for m in re.finditer(r"(?:suku\s+ke-(\d+)\s*(?:adalah|=|:)?\s*(-?\d+)|\b[uU]_?\{?(\d+)\}?\s*=\s*(-?\d+))", clean):
            idx = int(m.group(1) or m.group(3))
            val = int(m.group(2) or m.group(4))
            known_terms[idx] = val
        if len(known_terms) >= 2:
            sorted_idx = sorted(known_terms.keys())
            p, q = sorted_idx[0], sorted_idx[1]
            up, uq = known_terms[p], known_terms[q]
            b_val = (uq - up) // (q - p) if (uq - up) % (q - p) == 0 else round((uq - up) / (q - p), 4)
            a_val = up - (p - 1) * b_val
            if isinstance(a_val, float):
                a_val = round(a_val, 4)
            expansions.append("barisan aritmetika deret aritmetika eliminasi substitusi suku ke-n")
            line = (
                f"- Diketahui Barisan Aritmetika: $u_{{{p}}} = a + {p - 1}b = {up}$ dan $u_{{{q}}} = a + {q - 1}b = {uq}$.\n"
                f"- Eliminasi: $({q - 1} - {p - 1})b = {uq} - ({up}) \\implies {q - p}b = {uq - up} \\implies b = {b_val}$.\n"
                f"- Substitusi suku pertama: $a = {up} - {p - 1}({b_val}) = {a_val}$."
            )
            targets = [
                int(tm.group(1) or tm.group(2))
                for tm in re.finditer(r"(?:tentukan|nilai|hitung|berapa)[^0-9uU]*(?:suku\s+ke-(\d+)|\b[uU]_?\{?(\d+)\}?)", clean, re.IGNORECASE)
            ]
            for t_idx in targets:
                if t_idx not in known_terms:
                    ut_val = a_val + (t_idx - 1) * b_val
                    if isinstance(ut_val, float) and ut_val.is_integer():
                        ut_val = int(ut_val)
                    line += f"\n- Suku ke-{t_idx}: $$u_{{{t_idx}}} = {a_val} + ({t_idx} - 1)({b_val}) = {ut_val}$$"
            hints.append(line)

    # 4. Deteksi Matriks 2x2: [[a, b], [c, d]] atau pmatrix/bmatrix
    mat_match = re.search(
        r"\[\s*\[\s*(-?\d+)\s*,\s*(-?\d+)\s*\]\s*,\s*\[\s*(-?\d+)\s*,\s*(-?\d+)\s*\]\s*\]"
        r"|\\begin\{[pbv]matrix\}\s*(-?\d+)\s*&\s*(-?\d+)\s*\\\\\s*(-?\d+)\s*&\s*(-?\d+)\s*\\end\{[pbv]matrix\}",
        clean,
    )
    if mat_match:
        groups = [g for g in mat_match.groups() if g is not None]
        if len(groups) == 4:
            ma, mb, mc, md = (int(x) for x in groups)
            det = ma * md - mb * mc
            expansions.append("matriks determinan invers matriks ordo 2x2")
            hints.append(
                f"- Matriks ordo $2 \\times 2$: $\\det(A) = ad - bc = ({ma})({md}) - ({mb})({mc}) = {ma * md} - ({mb * mc}) = {det}$."
            )

    return {
        "query_expansion": " ".join(expansions),
        "verification_hint": "\n".join(hints),
    }
