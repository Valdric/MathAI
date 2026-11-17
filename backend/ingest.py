"""
Module 10 — Knowledge Base Ingestion & Text Extraction
MathAI (Asisten AI Matematika SMA)
"""

import os
import re
from typing import List, Dict, Any, Tuple
from pypdf import PdfReader
from docx import Document as DocxDocument
from langchain_text_splitters import RecursiveCharacterTextSplitter


def extract_text(file_path: str) -> str:
    """
    Mengekstrak teks utuh dari file .pdf, .docx, .md, atau .txt.
    Sesuai spesifikasi Module 10 (Setup Knowledge Base).
    """
    ext = os.path.splitext(file_path)[1].lower()
    if ext == ".pdf":
        reader = PdfReader(file_path)
        return "\n".join(page.extract_text() or "" for page in reader.pages)
    if ext == ".docx":
        doc = DocxDocument(file_path)
        return "\n".join(para.text for para in doc.paragraphs)
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()


def parse_markdown_frontmatter(text: str, rel_path: str = "") -> Tuple[Dict[str, str], str]:
    """
    Mengekstrak YAML frontmatter dari dokumen Markdown (judul, kelas, fase, bab, mapel, kurikulum)
    dan mengembalikan tuple (metadata, body_text).
    """
    metadata: Dict[str, str] = {
        "source": rel_path.replace("\\", "/"),
        "judul": "",
        "kelas": "",
        "fase": "",
        "bab": "",
        "mapel": "Matematika SMA",
    }

    norm_path = rel_path.replace("\\", "/").lower()
    if "kelas_10" in norm_path:
        metadata["kelas"] = "10"
    elif "kelas_11" in norm_path:
        metadata["kelas"] = "11"
    elif "kelas_12" in norm_path:
        metadata["kelas"] = "12"
    elif "tambahan" in norm_path:
        metadata["kelas"] = "Umum"

    body = text
    fm_match = re.match(r"^---\s*\r?\n(.*?)\r?\n---\s*\r?\n", text, flags=re.DOTALL)
    if fm_match:
        fm_block = fm_match.group(1)
        body = text[fm_match.end():]
        for line in fm_block.splitlines():
            if ":" in line:
                key, val = line.split(":", 1)
                key = key.strip().lower()
                val = val.strip().strip('"').strip("'")
                if key in ("judul", "kelas", "fase", "bab", "mapel", "kurikulum", "sumber"):
                    metadata[key] = val

    return metadata, body.strip()


def _protect_latex_blocks(text: str) -> Tuple[str, Dict[str, str]]:
    """
    Melindungi blok LaTeX ($$...$$ dan $...$) sebagai token atomik
    agar tidak pernah terpotong di tengah formula saat proses chunking.
    """
    placeholders: Dict[str, str] = {}
    counter = 0

    def _replace(match: re.Match) -> str:
        nonlocal counter
        token = f"__LATEX_ATOM_{counter}__"
        placeholders[token] = match.group(0)
        counter += 1
        return token

    # Lindungi blok display math $$...$$ terlebih dahulu, lalu inline math $...$
    protected = re.sub(r"\$\$.*?\$\$", _replace, text, flags=re.DOTALL)
    protected = re.sub(r"(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)", _replace, protected)
    return protected, placeholders


def _restore_latex_blocks(text: str, placeholders: Dict[str, str]) -> str:
    """Mengembalikan token atomik LaTeX menjadi formula aslinya."""
    for token, formula in placeholders.items():
        if token in text:
            text = text.replace(token, formula)
    return text


def split_markdown_into_chunks(
    text: str,
    rel_path: str = "",
    chunk_size: int = 1200,
    chunk_overlap: int = 200,
) -> List[Dict[str, Any]]:
    """
    Memecah dokumen Markdown di knowledge_base menjadi potongan teks (chunks)
    dengan menjaga keutuhan rumus LaTeX ($$...$$ dan $...$) beserta metadata lengkap.
    """
    base_meta, body = parse_markdown_frontmatter(text, rel_path=rel_path)
    if not body:
        return []

    protected_body, placeholders = _protect_latex_blocks(body)

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\n## ", "\n### ", "\n#### ", "\n\n", "\n", " "],
    )
    raw_chunks = splitter.split_text(protected_body)

    header_prefix = ""
    if base_meta.get("judul"):
        kelas_str = f"Kelas {base_meta['kelas']}" if base_meta.get("kelas") else "SMA"
        header_prefix = f"[{kelas_str} - {base_meta['judul']} ({base_meta.get('mapel', 'Matematika')})]\n"

    results: List[Dict[str, Any]] = []
    for idx, raw_chunk in enumerate(raw_chunks):
        restored_chunk = _restore_latex_blocks(raw_chunk, placeholders).strip()
        if not restored_chunk:
            continue
        meta = dict(base_meta)
        meta["chunk_index"] = idx
        results.append(
            {
                "id": f"{base_meta['source']}::chunk_{idx}",
                "text": f"{header_prefix}{restored_chunk}" if header_prefix else restored_chunk,
                "metadata": meta,
            }
        )
    return results


def discover_knowledge_base_files(kb_root: str) -> List[str]:
    """
    Menemukan seluruh file dokumen (.md, .txt, .pdf, .docx) di dalam folder knowledge_base
    (termasuk subfolder kelas_10, kelas_11, kelas_12, tambahan).
    """
    if not os.path.exists(kb_root):
        return []

    discovered: List[str] = []
    for root, _, files in os.walk(kb_root):
        for fname in sorted(files):
            if fname.lower() == "readme.md":
                continue
            if fname.lower().endswith((".md", ".txt", ".pdf", ".docx")):
                discovered.append(os.path.join(root, fname))
    return sorted(discovered)


def ingest_documents(
    knowledge_base_path: str,
    vector_store: Any,
    chunk_size: int = 1200,
    chunk_overlap: int = 200,
) -> int:
    """
    [Module 14] Membaca seluruh dokumen di knowledge_base_path, memecahnya menjadi chunks,
    dan menyimpannya ke VectorStore (ChromaDB) secara idempotent (upsert berdasarkan doc_id).
    """
    vector_store.ensure_collection()
    files = discover_knowledge_base_files(knowledge_base_path)
    all_chunks: List[Dict[str, Any]] = []
    for file_path in files:
        rel_path = os.path.relpath(file_path, knowledge_base_path).replace("\\", "/")
        text = extract_text(file_path)
        chunks = split_markdown_into_chunks(
            text,
            rel_path=rel_path,
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
        )
        all_chunks.extend(chunks)
    return vector_store.index_chunks(all_chunks)
