"""
Module 10 — Knowledge Base Ingestion & Text Extraction
MathAI (Asisten AI Matematika SMA)
Unified with rag_chunking.py (Data Engineer & Data Scientist Pipeline)
"""

import os
import re
from typing import List, Dict, Any, Tuple
from pypdf import PdfReader
from docx import Document as DocxDocument

from embeddings import embed_text, DEFAULT_OLLAMA_BASE_URL
from rag_chunking import (
    chunk_markdown_with_metadata,
    clean_and_normalize_latex,
    extract_frontmatter,
)


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
    menggunakan parser kanonik rag_chunking.extract_frontmatter.
    """
    raw_fm, body = extract_frontmatter(text)
    metadata: Dict[str, str] = {
        "source": rel_path.replace("\\", "/"),
        "source_file": rel_path.replace("\\", "/"),
        "judul": str(raw_fm.get("judul", "")),
        "kelas": str(raw_fm.get("kelas", "")),
        "fase": str(raw_fm.get("fase", "")),
        "bab": str(raw_fm.get("bab", "")),
        "mapel": str(raw_fm.get("mapel", "Matematika SMA")),
    }

    norm_path = rel_path.replace("\\", "/").lower()
    if not metadata["kelas"]:
        if "kelas_10" in norm_path:
            metadata["kelas"] = "10"
        elif "kelas_11" in norm_path:
            metadata["kelas"] = "11"
        elif "kelas_12" in norm_path:
            metadata["kelas"] = "12"
        elif "tambahan" in norm_path:
            metadata["kelas"] = "Tambahan"

    for key in ("kurikulum", "sumber"):
        if key in raw_fm:
            metadata[key] = str(raw_fm[key])

    return metadata, clean_and_normalize_latex(body)


def split_markdown_into_chunks(
    text: str,
    rel_path: str = "",
    chunk_size: int = 900,
    chunk_overlap: int = 150,
) -> List[Dict[str, Any]]:
    """
    Memecah dokumen Markdown di knowledge_base menjadi potongan teks (chunks)
    menggunakan structure-aware chunker kanonik (rag_chunking.chunk_markdown_with_metadata)
    yang menjamin rumus LaTeX ($$...$$ dan $...$) tidak pernah terpotong di tengah formula.
    """
    norm_rel = rel_path.replace("\\", "/") or "document.md"
    raw_chunks = chunk_markdown_with_metadata(
        raw_text=text,
        source_name=norm_rel,
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        breadcrumb_in_text=True,
    )
    results: List[Dict[str, Any]] = []
    for idx, ch in enumerate(raw_chunks):
        meta = dict(ch["metadata"])
        meta["source"] = norm_rel
        meta["source_file"] = norm_rel
        meta["chunk_index"] = idx
        results.append(
            {
                "id": f"{norm_rel}::chunk_{idx}",
                "text": ch["text"],
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
            if fname.lower() in ("readme.md", "sma_m4thlab_curriculum.md"):
                continue
            if fname.lower().endswith((".md", ".txt", ".pdf", ".docx")):
                discovered.append(os.path.join(root, fname))
    return sorted(discovered)


def ingest_documents(
    knowledge_base_path: str,
    vector_store: Any,
    index_name: str = "mathai_knowledge_base",
    ollama_base_url: str = DEFAULT_OLLAMA_BASE_URL,
) -> int:
    """
    [Module 14] Membaca seluruh dokumen di knowledge_base_path, meng-embed dengan nomic-embed-text,
    dan menyimpannya ke VectorStore (ChromaDB) menggunakan doc_id=filename agar idempotent
    (overwrite di tempat tanpa menduplikasi dokumen saat dijalankan berulang kali).
    """
    kb_path = knowledge_base_path
    if not os.path.exists(kb_path):
        fallback_kb = os.path.join(os.path.dirname(os.path.abspath(__file__)), "knowledge_base")
        if os.path.exists(fallback_kb):
            kb_path = fallback_kb

    vector_store.ensure_index(index_name)

    # Cek apakah folder berisi file langsung di level atas atau subfolder kurikulum
    direct_files = [
        os.path.join(kb_path, f)
        for f in sorted(os.listdir(kb_path))
        if os.path.isfile(os.path.join(kb_path, f))
        and f.lower().endswith((".md", ".txt", ".pdf", ".docx"))
        and f.lower() != "readme.md"
    ] if os.path.isdir(kb_path) else []

    files = discover_knowledge_base_files(kb_path)
    if not files and direct_files:
        files = direct_files

    count = 0
    for file_path in files:
        rel_path = os.path.relpath(file_path, kb_path).replace("\\", "/")
        doc_id = os.path.basename(file_path) if "/" not in rel_path else rel_path
        text = extract_text(file_path)
        embedding = embed_text(text, base_url=ollama_base_url)
        vector_store.index_document(
            index_name,
            doc_id=doc_id,
            text=text,
            embedding=embedding,
            metadata={"source": doc_id},
        )
        count += 1
    return count
