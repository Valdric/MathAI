"""
Module 14 — Simpan Dokumen ke ChromaDB (extract_text & ingest_documents)
MathAI (Asisten AI Matematika SMA)
"""

import os
import sys

BACKEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "backend")
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

from ingest import (  # noqa: E402, F401
    discover_knowledge_base_files,
    extract_text,
    ingest_documents,
    parse_markdown_frontmatter,
    split_markdown_into_chunks,
)

__all__ = [
    "discover_knowledge_base_files",
    "extract_text",
    "ingest_documents",
    "parse_markdown_frontmatter",
    "split_markdown_into_chunks",
]
