"""
Module 13 — Class VectorStore (ChromaDB + Ollama nomic-embed-text)
MathAI (Asisten AI Matematika SMA)
Menyediakan method:
  - ensure_index(index_name)       : Idempotent collection creation (cosine similarity)
  - index_document(...)            : Upsert/overwrite dokumen menggunakan doc_id=filename
  - search(index_name, query_emb)  : Pencarian semantik cosine similarity
"""

import os
import sys

BACKEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "backend")
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

from vector_store import (  # noqa: E402, F401
    COLLECTION_NAME,
    DEFAULT_CHROMA_PATH,
    DEFAULT_KB_PATH,
    VectorStore,
)

__all__ = [
    "COLLECTION_NAME",
    "DEFAULT_CHROMA_PATH",
    "DEFAULT_KB_PATH",
    "VectorStore",
]
