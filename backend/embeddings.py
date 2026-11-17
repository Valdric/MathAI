"""
Module 11 — Embedding Utility (Ollama nomic-embed-text + Deterministic 768-D Fallback)
MathAI (Asisten AI Matematika SMA)
"""

import hashlib
import math
import os
import re
from typing import List
import httpx
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))
load_dotenv()

DEFAULT_OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://127.0.0.1:11434").rstrip("/")
DEFAULT_EMBED_MODEL = os.getenv("OLLAMA_EMBED_MODEL", "nomic-embed-text")
EMBEDDING_DIM = 768


def _deterministic_768d_fallback(text: str) -> List[float]:
    """
    Fallback deterministik 768-dimensi (unit vector ||v|| = 1.0) berbasis feature hashing
    (unigram + bigram + char-trigram + simbol matematika) apabila daemon Ollama sedang
    offline atau model nomic-embed-text belum di-pull di mesin lokal.
    """
    vec = [0.0] * EMBEDDING_DIM
    clean = (text or "").lower().strip()
    if not clean:
        vec[0] = 1.0
        return vec

    words = re.findall(r"[a-z0-9_]+|\\[a-z]+", clean)
    features: List[tuple[str, float]] = []
    # Word unigrams (bobot tinggi untuk kemiripan semantik kata kunci matematika)
    for w in words:
        features.append((f"w:{w}", 2.5))
    # Word bigrams
    for i in range(len(words) - 1):
        features.append((f"b:{words[i]}_{words[i+1]}", 1.8))
    # Character 4-grams untuk ketahanan morfologi Bahasa Indonesia (mis. turunan/diturunkan)
    compact = re.sub(r"\s+", " ", clean)
    for i in range(max(0, len(compact) - 3)):
        features.append((f"c:{compact[i:i+4]}", 0.4))

    for feat, weight in features:
        digest = hashlib.md5(feat.encode("utf-8")).digest()
        idx1 = int.from_bytes(digest[0:2], "little") % EMBEDDING_DIM
        sign1 = 1.0 if (digest[2] & 1) == 0 else -1.0
        idx2 = int.from_bytes(digest[4:6], "little") % EMBEDDING_DIM
        sign2 = 1.0 if (digest[6] & 1) == 0 else -1.0
        vec[idx1] += sign1 * weight
        vec[idx2] += sign2 * (weight * 0.5)

    norm = math.sqrt(sum(x * x for x in vec))
    if norm == 0.0:
        vec[0] = 1.0
        return vec
    return [x / norm for x in vec]


def _normalize_unit(vec: List[float]) -> List[float]:
    norm = math.sqrt(sum(x * x for x in vec))
    if norm == 0.0:
        return vec
    return [x / norm for x in vec]


def embed_text(
    text: str,
    base_url: str = DEFAULT_OLLAMA_BASE_URL,
    model: str = DEFAULT_EMBED_MODEL,
) -> List[float]:
    """
    Mengubah satu string teks menjadi vektor embedding 768 dimensi (unit vector)
    menggunakan endpoint /api/embed pada Ollama (Module 11), dengan fallback
    deterministik 768-D bila Ollama offline.
    """
    url = f"{base_url.rstrip('/')}/api/embed"
    try:
        with httpx.Client(timeout=5.0) as client:
            response = client.post(
                url,
                json={"model": model, "input": text},
            )
            response.raise_for_status()
            raw_vec = response.json()["embeddings"][0]
            if len(raw_vec) == EMBEDDING_DIM:
                return _normalize_unit(raw_vec)
    except Exception:
        pass
    return _deterministic_768d_fallback(text)


def embed_texts(
    texts: List[str],
    base_url: str = DEFAULT_OLLAMA_BASE_URL,
    model: str = DEFAULT_EMBED_MODEL,
    batch_size: int = 32,
) -> List[List[float]]:
    """
    Mengubah daftar teks (batch) menjadi list vektor embedding 768 dimensi
    secara efisien melalui endpoint /api/embed Ollama (dengan fallback deterministik).
    """
    if not texts:
        return []

    url = f"{base_url.rstrip('/')}/api/embed"
    all_embeddings: List[List[float]] = []

    try:
        with httpx.Client(timeout=15.0) as client:
            for i in range(0, len(texts), batch_size):
                batch = texts[i : i + batch_size]
                response = client.post(
                    url,
                    json={"model": model, "input": batch},
                )
                response.raise_for_status()
                embs = response.json()["embeddings"]
                all_embeddings.extend(_normalize_unit(v) for v in embs)
        if len(all_embeddings) == len(texts):
            return all_embeddings
    except Exception:
        pass

    return [_deterministic_768d_fallback(t) for t in texts]
