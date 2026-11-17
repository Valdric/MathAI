"""
Module 16 — Integrasi RAG ChromaDB ke Endpoint POST /chat/stream (MathAI).
Menggabungkan seluruh endpoint utama MathAI dengan endpoint streaming standar Panduan PDS.
"""

import os
import sys
from typing import List
from fastapi import HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKEND_DIR = os.path.join(ROOT_DIR, "backend")
for p in (ROOT_DIR, BACKEND_DIR):
    if p not in sys.path:
        sys.path.insert(0, p)

from api.index import app  # noqa: E402
from app.embeddings import embed_text  # noqa: E402
from app.ollama_client import OllamaClient  # noqa: E402
from app.system_prompt import MATHAI_SYSTEM_PROMPT  # noqa: E402
from app.vector_store import COLLECTION_NAME, DEFAULT_CHROMA_PATH, VectorStore  # noqa: E402
from data_science.feature_engineering import analyze_math_problem_hint  # noqa: E402
from rag import retrieve_relevant_curriculum_context  # noqa: E402

OLLAMA_BASE_URL = os.environ.get("OLLAMA_BASE_URL", "http://127.0.0.1:11434")
CHROMA_INDEX = os.environ.get("CHROMA_COLLECTION", COLLECTION_NAME)
RAG_TOP_K = 5
HISTORY_WINDOW = 6

vector_store = VectorStore(chroma_path=DEFAULT_CHROMA_PATH, collection_name=CHROMA_INDEX)
ollama_client = OllamaClient(base_url=OLLAMA_BASE_URL)


class ChatMessageItem(BaseModel):
    role: str
    content: str


class ChatStreamRequest(BaseModel):
    messages: List[ChatMessageItem] = []


@app.post("/chat/stream")
def chat_stream(request: ChatStreamRequest) -> StreamingResponse:
    """
    [Module 16] Endpoint streaming RAG MathAI:
    - Mengembalikan HTTP 400 jika messages kosong atau elemen terakhir bukan role 'user'.
    - Melakukan pencarian semantik ChromaDB (cosine similarity) dengan RAG_TOP_K = 5.
    - Menyisipkan konteks dari knowledge base ke akhir MATHAI_SYSTEM_PROMPT.
    """
    if not request.messages or request.messages[-1].role != "user":
        raise HTTPException(
            status_code=400,
            detail="messages harus non-kosong dan elemen terakhir harus role 'user'",
        )

    recent = request.messages[-HISTORY_WINDOW:]
    user_query = recent[-1].content.strip()
    if not user_query:
        raise HTTPException(
            status_code=400,
            detail="content pesan user terakhir tidak boleh kosong",
        )

    math_hint = analyze_math_problem_hint(user_query)
    expanded_query = (
        f"{user_query} {math_hint['query_expansion']}"
        if math_hint.get("query_expansion")
        else user_query
    )

    query_embedding = embed_text(expanded_query, base_url=OLLAMA_BASE_URL)
    hits = vector_store.search(CHROMA_INDEX, query_embedding, k=RAG_TOP_K)

    system_prompt = MATHAI_SYSTEM_PROMPT
    if hits:
        context = "\n\n".join(f"- {hit['_source']['text']}" for hit in hits)
        system_prompt += f"\n\nKonteks dari knowledge base:\n{context}"
    else:
        kb_ctx = retrieve_relevant_curriculum_context(query=expanded_query, top_k=RAG_TOP_K)
        if kb_ctx:
            system_prompt += f"\n\nKonteks dari knowledge base:\n{kb_ctx}"

    if math_hint.get("verification_hint"):
        system_prompt += (
            "\n\nVerifikasi Perhitungan Matematika:\n"
            + math_hint["verification_hint"]
        )

    ollama_messages = [{"role": "system", "content": system_prompt}]
    ollama_messages += [{"role": m.role, "content": m.content} for m in recent]

    return StreamingResponse(
        ollama_client.chat_stream(ollama_messages), media_type="text/plain"
    )
