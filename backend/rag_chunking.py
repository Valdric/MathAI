"""
MathAI RAG - Lapisan Cleaning, Normalisasi LaTeX & Structure-Aware Chunking
Role pemilik : Data Engineer (Row 18 & Row 19)

Modul ini MURNI (tidak bergantung pada ChromaDB / LLM) sehingga mudah diuji dan
dipakai ulang oleh Data Scientist (eksperimen chunk_size / overlap) maupun
ML Engineer.

Kontrak output chunk: list of {"text": str, "metadata": dict}
Semua nilai metadata bertipe primitif (str/int/float/bool) agar kompatibel dengan ChromaDB.
"""

import re
from typing import Any, Dict, List, Optional, Tuple

import yaml
from langchain_core.documents import Document
from langchain_text_splitters import MarkdownHeaderTextSplitter

# Naikkan angka ini setiap kali logika cleaning/chunking berubah agar index ChromaDB
# otomatis dibangun ulang (lihat rag_store.compute_kb_fingerprint).
PIPELINE_VERSION = "2"

DEFAULT_CHUNK_SIZE = 900
DEFAULT_CHUNK_OVERLAP = 150
# Potongan hasil split heading yang lebih pendek dari ini digabung ke potongan anak berikutnya
MIN_CHUNK_CHARS = 200
# Bagian yang tidak berisi materi (hanya daftar judul) dan hanya menjadi noise saat retrieval
SKIPPED_SECTION_PREFIXES = ("daftar isi",)

VALID_GRADES = ("10", "11", "12", "Tambahan", "Umum")

# ------------------------------------------------------------------------------
# ROW 18 - CLEANING & NORMALISASI LATEX
# ------------------------------------------------------------------------------

# Simbol Unicode -> macro LaTeX. Hanya diterapkan DI DALAM blok matematika ($...$ / $$...$$).
UNICODE_MATH_MAP = {
    "×": r"\times",
    "÷": r"\div",
    "±": r"\pm",
    "≤": r"\le",
    "≥": r"\ge",
    "≠": r"\ne",
    "≈": r"\approx",
    "⇒": r"\implies",
    "⟹": r"\implies",
    "⇔": r"\iff",
    "⟺": r"\iff",
    "→": r"\to",
    "∞": r"\infty",
    "π": r"\pi",
    "∈": r"\in",
    "∉": r"\notin",
    "⊂": r"\subset",
    "⊆": r"\subseteq",
    "∪": r"\cup",
    "∩": r"\cap",
    "∅": r"\emptyset",
    "∀": r"\forall",
    "∃": r"\exists",
    "∑": r"\sum",
    "∏": r"\prod",
    "∫": r"\int",
    "∠": r"\angle",
    "⋅": r"\cdot",
}
# Pengganti sederhana tanpa spasi tambahan (artefak umum hasil copy dari PDF / Word)
UNICODE_SIMPLE_MAP = {
    "−": "-",  # U+2212 minus
    "²": "^{2}",
    "³": "^{3}",
}

_DISPLAY_MATH_RE = re.compile(r"\$\$.*?\$\$", re.DOTALL)
_INLINE_MATH_RE = re.compile(r"(?<![\$\\])\$(?!\$)([^$\n]+?)(?<![\$\\])\$(?!\$)")
_LATEX_PAREN_RE = re.compile(r"\\\((.*?)\\\)", re.DOTALL)
# \[ ... \] -> $$ ... $$, kecuali spasi baris LaTeX seperti \\[4pt]
_LATEX_BRACKET_RE = re.compile(
    r"(?<!\\)\\\[(?![\d.\s]*(?:pt|em|ex|cm|mm|in|bp|pc|dd|cc|sp)\b)(.*?)(?<!\\)\\\]",
    re.DOTALL,
)
_PAGE_NOISE_RE = re.compile(
    r"(?m)^[ \t]*(?:Halaman|Page|Hlm\.)[ \t]+\d+(?:[ \t]*(?:dari|of|/)[ \t]*\d+)?[ \t]*$",
    re.IGNORECASE,
)


def _normalize_unicode_in_math(segment: str) -> str:
    for char, macro in UNICODE_MATH_MAP.items():
        if char in segment:
            segment = segment.replace(char, f" {macro} ")
    for char, repl in UNICODE_SIMPLE_MAP.items():
        if char in segment:
            segment = segment.replace(char, repl)
    return segment


def clean_and_normalize_latex(text: str) -> str:
    """
    [Row 18] Membersihkan noise hasil ekstraksi dan menormalisasi notasi LaTeX.

    - Menyeragamkan delimiter: \\( \\) -> $...$ dan \\[ \\] -> $$...$$
      (spasi baris seperti \\\\[4pt] pada matriks/cases TIDAK disentuh).
    - Mengubah simbol Unicode (×, ≤, ∞, −, ², ...) menjadi macro LaTeX, hanya di dalam blok math.
    - Menghapus karakter kontrol, baris nomor halaman, spasi akhir baris, dan baris kosong berlebih.
    - Indentasi awal baris (list bersarang / code block) dipertahankan.
    Fungsi ini idempoten: clean(clean(x)) == clean(x).
    """
    if not text:
        return ""

    cleaned = text.replace("\r\n", "\n").replace("\r", "\n")
    cleaned = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", cleaned)

    cleaned = _LATEX_PAREN_RE.sub(lambda m: f"${m.group(1).strip()}$", cleaned)
    cleaned = _LATEX_BRACKET_RE.sub(lambda m: f"$${m.group(1).strip()}$$", cleaned)

    cleaned = _DISPLAY_MATH_RE.sub(lambda m: _normalize_unicode_in_math(m.group(0)), cleaned)
    cleaned = _INLINE_MATH_RE.sub(lambda m: _normalize_unicode_in_math(m.group(0)), cleaned)

    cleaned = _PAGE_NOISE_RE.sub("", cleaned)

    # Rapikan spasi: runtun spasi di tengah baris -> 1 spasi; hapus spasi/tab di akhir baris.
    cleaned = re.sub(r"(?<=\S)[ \t]{2,}(?=\S)", " ", cleaned)
    cleaned = re.sub(r"[ \t]+\n", "\n", cleaned)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    return cleaned.strip()


# ------------------------------------------------------------------------------
# ROW 19 - STRUCTURE-AWARE CHUNKING
# ------------------------------------------------------------------------------

_UNIT_RE = re.compile(r"\$\$.*?\$\$|\$[^$\n]+?\$|\s+|[^\s$]+|\$", re.DOTALL)


def _pack_units(text: str, max_len: int) -> List[str]:
    """Memecah teks panjang menjadi potongan <= max_len TANPA memotong rumus $...$ / $$...$$."""
    pieces: List[str] = []
    current = ""
    for unit in _UNIT_RE.findall(text):
        if current and len(current) + len(unit) > max_len:
            pieces.append(current.strip())
            current = "" if unit.isspace() else unit
        else:
            current += unit
    if current.strip():
        pieces.append(current.strip())
    return pieces


def split_text_preserving_math(
    text: str,
    chunk_size: int = DEFAULT_CHUNK_SIZE,
    chunk_overlap: int = DEFAULT_CHUNK_OVERLAP,
) -> List[str]:
    """
    [Row 19 helper] Memecah teks menjadi chunk <= chunk_size dengan overlap berbasis blok utuh.

    Jaminan: rumus display ($$...$$) dan inline ($...$) TIDAK pernah terpotong di tengah.
    Satu-satunya pengecualian: satu blok rumus tunggal yang panjangnya melebihi chunk_size
    dipertahankan utuh (chunk akan lebih panjang dari chunk_size).
    """
    if not text or not text.strip():
        return []
    text = text.strip()
    if len(text) <= chunk_size:
        return [text]

    # 1. Pecah menjadi atom: blok display math (atomik) dan paragraf teks
    atoms: List[str] = []
    cursor = 0
    for match in _DISPLAY_MATH_RE.finditer(text):
        before = text[cursor:match.start()]
        atoms.extend(_split_prose_atoms(before, chunk_size))
        atoms.append(match.group(0))
        cursor = match.end()
    atoms.extend(_split_prose_atoms(text[cursor:], chunk_size))

    # 2. Gabungkan atom secara greedy dengan overlap berbasis atom
    chunks: List[str] = []
    current: List[str] = []
    current_len = 0
    for atom in atoms:
        added = len(atom) + (1 if current else 0)
        if current and current_len + added > chunk_size:
            chunks.append("\n".join(current).strip())
            overlap: List[str] = []
            overlap_len = 0
            for prev in reversed(current):
                if overlap_len + len(prev) + 1 > chunk_overlap:
                    break
                overlap.insert(0, prev)
                overlap_len += len(prev) + 1
            current = overlap
            current_len = sum(len(a) + 1 for a in current)
            added = len(atom) + (1 if current else 0)
        current.append(atom)
        current_len += added
    if current:
        last = "\n".join(current).strip()
        # Hindari chunk terakhir yang hanya berisi overlap duplikat
        if not chunks or last != chunks[-1]:
            chunks.append(last)
    return [c for c in chunks if c]


def _split_prose_atoms(segment: str, chunk_size: int) -> List[str]:
    """Memecah teks non-display-math menjadi paragraf/baris/kalimat yang masing-masing <= chunk_size."""
    atoms: List[str] = []
    for paragraph in re.split(r"\n{2,}", segment):
        paragraph = paragraph.strip()
        if not paragraph:
            continue
        if len(paragraph) <= chunk_size:
            atoms.append(paragraph)
            continue
        for line in paragraph.split("\n"):
            line = line.strip()
            if not line:
                continue
            if len(line) <= chunk_size:
                atoms.append(line)
            else:
                atoms.extend(_pack_units(line, chunk_size))
    return atoms


def extract_frontmatter(raw_text: str) -> Tuple[Dict[str, Any], str]:
    """Mengekstrak metadata YAML frontmatter di awal dokumen Markdown (jika ada)."""
    if not raw_text:
        return {}, ""
    text = raw_text.replace("\r\n", "\n").replace("\r", "\n").lstrip("\ufeff")
    match = re.match(r"^---\n(.*?)\n---[ \t]*(?:\n|$)", text, re.DOTALL)
    if match:
        try:
            data = yaml.safe_load(match.group(1)) or {}
            if isinstance(data, dict):
                return data, text[match.end():].strip()
        except yaml.YAMLError:
            pass
    return {}, text.strip()


def normalize_grade(grade: Optional[Any]) -> Optional[str]:
    """
    Menyeragamkan nilai kelas dari berbagai sumber ke bentuk metadata ChromaDB.
    'Kelas 10' / 'kelas x' / 'X' / 10 -> '10';  'Kelas XI' -> '11';  'XII' -> '12';
    'Tambahan' -> 'Tambahan';  kosong / tidak dikenali -> None (artinya: tanpa filter kelas).
    """
    if grade is None:
        return None
    value = str(grade).strip().lower()
    if not value:
        return None
    value = re.sub(r"^kelas\s*", "", value).strip()
    mapping = {"10": "10", "x": "10", "11": "11", "xi": "11", "12": "12", "xii": "12"}
    if value in mapping:
        return mapping[value]
    if value == "tambahan":
        return "Tambahan"
    if value == "umum":
        return "Umum"
    return None


def detect_grade(
    sub_sec: str = "",
    topic: str = "",
    section: str = "",
    h1: str = "",
    source_name: str = "",
    fallback: str = "",
) -> str:
    """Mendeteksi jenjang kelas (10/11/12/Tambahan/Umum). Frontmatter (fallback) diprioritaskan."""
    normalized = normalize_grade(fallback)
    if normalized and normalized != "Umum":
        return normalized

    for text in (sub_sec, topic, section, h1, source_name):
        if not text:
            continue
        if re.search(r"\bKelas\s*(?:XII|12)\b", text, re.IGNORECASE):
            return "12"
        if re.search(r"\bKelas\s*(?:XI|11)\b", text, re.IGNORECASE):
            return "11"
        if re.search(r"\bKelas\s*(?:X|10)\b", text, re.IGNORECASE):
            return "10"
        lowered = text.lower()
        if "kelas_12" in lowered or "kelas12" in lowered:
            return "12"
        if "kelas_11" in lowered or "kelas11" in lowered:
            return "11"
        if "kelas_10" in lowered or "kelas10" in lowered:
            return "10"
    return normalized or "Umum"


def _is_skipped_section(meta: Dict[str, str]) -> bool:
    for key in ("section", "sub_section", "topic"):
        if meta.get(key, "").strip().lower().startswith(SKIPPED_SECTION_PREFIXES):
            return True
    return False


def _extends(parent: Dict[str, str], child: Dict[str, str]) -> bool:
    """True jika metadata `child` adalah turunan (heading lebih dalam) dari `parent`."""
    return all(child.get(k) == v for k, v in parent.items())


def _merge_header_only_docs(docs: List[Document], min_chars: int) -> List[Document]:
    """Menggabungkan potongan yang nyaris hanya berisi judul ke potongan anak berikutnya."""
    merged: List[Document] = []
    pending: Optional[Document] = None
    for doc in docs:
        if pending is not None:
            if _extends(pending.metadata, doc.metadata):
                doc = Document(
                    page_content=pending.page_content.rstrip() + "\n\n" + doc.page_content.lstrip(),
                    metadata=doc.metadata,
                )
            else:
                merged.append(pending)
            pending = None
        if len(doc.page_content.strip()) < min_chars:
            pending = doc
        else:
            merged.append(doc)
    if pending is not None:
        merged.append(pending)
    return merged


def _clean_heading(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def chunk_markdown_with_metadata(
    raw_text: str,
    source_name: str = "curriculum.md",
    default_metadata: Optional[Dict[str, Any]] = None,
    override_metadata: Optional[Dict[str, Any]] = None,
    chunk_size: int = DEFAULT_CHUNK_SIZE,
    chunk_overlap: int = DEFAULT_CHUNK_OVERLAP,
    min_chunk_chars: int = MIN_CHUNK_CHARS,
    breadcrumb_in_text: bool = True,
) -> List[Dict[str, Any]]:
    """
    [Row 19] Memecah dokumen Markdown secara structure-aware per Bab/Subbab (#, ##, ###, ####).

    Prioritas metadata: override_metadata (mis. input form upload) > frontmatter YAML > default_metadata.
    Setiap chunk membawa metadata: kelas, bab, section, sub_section, topic, heading_path, fase, mapel,
    tingkat_lanjut, kurikulum, sumber, source_file, chunk_index, char_count.
    Bagian "Daftar Isi" dilewati; rumus LaTeX tidak pernah terpotong.
    Jika breadcrumb_in_text=True, jalur judul ("Bab › Bagian › Subbab") disisipkan di awal teks
    chunk agar embedding membawa konteks bab walau chunk berasal dari tengah subbab.
    """
    if not raw_text or not raw_text.strip():
        return []

    frontmatter, body = extract_frontmatter(raw_text)
    meta_base: Dict[str, Any] = dict(default_metadata or {})
    meta_base.update(frontmatter)
    meta_base.update({k: v for k, v in (override_metadata or {}).items() if v not in (None, "")})

    cleaned_body = clean_and_normalize_latex(body)
    if not cleaned_body:
        return []

    splitter = MarkdownHeaderTextSplitter(
        headers_to_split_on=[
            ("#", "h1"),
            ("##", "section"),
            ("###", "sub_section"),
            ("####", "topic"),
            ("#####", "sub_topic"),
            ("######", "item_heading"),
        ],
        strip_headers=False,
    )
    md_docs = splitter.split_text(cleaned_body) or [Document(page_content=cleaned_body, metadata={})]
    md_docs = [d for d in md_docs if not _is_skipped_section(d.metadata) and d.page_content.strip()]
    md_docs = _merge_header_only_docs(md_docs, min_chunk_chars)

    raw_kelas = str(meta_base.get("kelas", "")).strip()
    raw_bab = str(meta_base.get("bab", "")).strip()
    raw_judul = str(meta_base.get("judul", "")).strip()
    raw_mapel = str(meta_base.get("mapel", "")).strip()
    raw_fase = str(meta_base.get("fase", "")).strip()
    raw_kurikulum = str(meta_base.get("kurikulum", "Kurikulum Merdeka")).strip()
    raw_sumber = str(meta_base.get("sumber", source_name)).strip()
    explicit_advanced = meta_base.get("tingkat_lanjut")

    chunks: List[Dict[str, Any]] = []
    counter = 0
    for doc in md_docs:
        h1 = _clean_heading(doc.metadata.get("h1", ""))
        section = _clean_heading(doc.metadata.get("section", ""))
        sub_sec = _clean_heading(doc.metadata.get("sub_section", ""))
        topic = _clean_heading(doc.metadata.get("topic", ""))
        sub_topic = _clean_heading(doc.metadata.get("sub_topic", ""))
        item_heading = _clean_heading(doc.metadata.get("item_heading", ""))

        kelas = detect_grade(sub_sec, topic, section, h1, source_name, fallback=raw_kelas)

        bab_name = raw_judul or raw_bab
        if not bab_name:
            bab_name = re.sub(r"^Bab\s+[\w\-]+\s*[—\-:]\s*", "", h1) or section or "Matematika SMA"

        if isinstance(explicit_advanced, bool):
            is_advanced = explicit_advanced
        else:
            context = f"{source_name} {h1} {section} {sub_sec} {topic} {sub_topic} {item_heading}".lower()
            is_advanced = (
                "tingkat lanjut" in raw_mapel.lower()
                or "peminatan" in raw_mapel.lower()
                or raw_bab.upper().startswith("TL")
                or re.search(r"(^|[/_])tl_bab", source_name.lower()) is not None
                or "tingkat lanjut" in context
                or "peminatan" in context
            )

        heading_path = " › ".join(p for p in (bab_name, section, sub_sec, topic, sub_topic, item_heading) if p)
        mapel = raw_mapel or ("Matematika Tingkat Lanjut" if is_advanced else "Matematika Umum")

        for part in split_text_preserving_math(doc.page_content, chunk_size, chunk_overlap):
            part = re.sub(r"[ \t]+\n", "\n", part).strip()
            if not part:
                continue
            text = f"[{heading_path}]\n{part}" if breadcrumb_in_text and heading_path else part
            chunks.append({
                "text": text,
                "metadata": {
                    "kelas": kelas,
                    "bab": bab_name,
                    "judul": bab_name,
                    "section": section,
                    "sub_section": sub_sec,
                    "topic": topic or sub_topic or item_heading,
                    "heading_path": heading_path,
                    "fase": raw_fase or "-",
                    "mapel": mapel,
                    "tingkat_lanjut": bool(is_advanced),
                    "kurikulum": raw_kurikulum,
                    "sumber": raw_sumber,
                    "source_file": source_name,
                    "source": source_name,
                    "chunk_index": counter,
                    "char_count": len(text),
                },
            })
            counter += 1
    return chunks
