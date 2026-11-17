"""
Module 11 & 13–16 — Embedding Utility (Ollama nomic-embed-text)
MathAI (Asisten AI Matematika SMA)
"""

import os
import sys

BACKEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "backend")
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

from embeddings import (  # noqa: E402, F401
    DEFAULT_EMBED_MODEL,
    DEFAULT_OLLAMA_BASE_URL,
    EMBEDDING_DIM,
    embed_text,
    embed_texts,
)

__all__ = [
    "DEFAULT_EMBED_MODEL",
    "DEFAULT_OLLAMA_BASE_URL",
    "EMBEDDING_DIM",
    "embed_text",
    "embed_texts",
]
