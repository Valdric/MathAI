"""
Client Streaming ke Ollama untuk MathAI (Module 13–16).
Menggunakan temperatur rendah (0.2) untuk konsistensi perhitungan matematika & kepatuhan guardrail.
"""

import json
import os
from typing import Dict, Iterator, List
import httpx

DEFAULT_OLLAMA_BASE_URL = os.environ.get("OLLAMA_BASE_URL", "http://127.0.0.1:11434").rstrip("/")
DEFAULT_CHAT_MODEL = os.environ.get("OLLAMA_MODEL", "llama3.2-math")
DEFAULT_FALLBACK_MODEL = os.environ.get("OLLAMA_FALLBACK_MODEL", "llama3.2:3b")


class OllamaClient:
    """Client HTTP streaming ke endpoint /api/chat pada server Ollama."""

    def __init__(
        self,
        base_url: str = DEFAULT_OLLAMA_BASE_URL,
        model: str = DEFAULT_CHAT_MODEL,
        temperature: float = 0.2,
    ):
        self.base_url = base_url.rstrip("/")
        self.model = model
        self.temperature = temperature

    def chat_stream(self, messages: List[Dict[str, str]]) -> Iterator[str]:
        """Mengirim array messages ke Ollama /api/chat dengan stream=True dan menghasilkan potongan teks."""
        models_to_try = [self.model]
        if DEFAULT_FALLBACK_MODEL not in models_to_try:
            models_to_try.append(DEFAULT_FALLBACK_MODEL)

        for model_name in models_to_try:
            try:
                with httpx.Client(timeout=180.0) as client:
                    with client.stream(
                        "POST",
                        f"{self.base_url}/api/chat",
                        json={
                            "model": model_name,
                            "messages": messages,
                            "stream": True,
                            "options": {
                                "temperature": self.temperature,
                                "top_p": 0.9,
                                "top_k": 40,
                                "repeat_penalty": 1.15,
                                "num_ctx": 8192,
                            },
                        },
                    ) as response:
                        if response.status_code == 404:
                            continue
                        response.raise_for_status()
                        for line in response.iter_lines():
                            if not line:
                                continue
                            data = json.loads(line)
                            chunk = data.get("message", {}).get("content", "")
                            if chunk:
                                yield chunk
                        return
            except Exception:
                continue
        yield "Maaf, layanan AI Ollama sedang tidak dapat dijangkau."
