"""
Module 11 — Embedding Utility (Ollama nomic-embed-text)
MathAI (Asisten AI Matematika SMA)
"""

import os
from typing import List
import httpx
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))
load_dotenv()

DEFAULT_OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://127.0.0.1:11434").rstrip("/")
DEFAULT_EMBED_MODEL = os.getenv("OLLAMA_EMBED_MODEL", "nomic-embed-text")


def embed_text(
    text: str,
    base_url: str = DEFAULT_OLLAMA_BASE_URL,
    model: str = DEFAULT_EMBED_MODEL,
) -> List[float]:
    """
    Mengubah satu string teks menjadi vektor embedding 768 dimensi
    menggunakan endpoint /api/embed pada Ollama (Module 11).
    """
    url = f"{base_url.rstrip('/')}/api/embed"
    with httpx.Client(timeout=60.0) as client:
        response = client.post(
            url,
            json={"model": model, "input": text},
        )
        response.raise_for_status()
        return response.json()["embeddings"][0]


def embed_texts(
    texts: List[str],
    base_url: str = DEFAULT_OLLAMA_BASE_URL,
    model: str = DEFAULT_EMBED_MODEL,
    batch_size: int = 32,
) -> List[List[float]]:
    """
    Mengubah daftar teks (batch) menjadi list vektor embedding 768 dimensi
    secara efisien melalui endpoint /api/embed Ollama.
    """
    if not texts:
        return []

    url = f"{base_url.rstrip('/')}/api/embed"
    all_embeddings: List[List[float]] = []

    with httpx.Client(timeout=120.0) as client:
        for i in range(0, len(texts), batch_size):
            batch = texts[i : i + batch_size]
            response = client.post(
                url,
                json={"model": model, "input": batch},
            )
            response.raise_for_status()
            all_embeddings.extend(response.json()["embeddings"])

    return all_embeddings
