# Project Structure Steering — MathAI

- **Author / Maintainer:** Valdric (`Valdric/MathAI`)

## High-Level Directory Layout
```text
MathAI/
├── .sdd/                 # Spesifikasi & steering dokumen (SDD)
├── Modelfile             # Konfigurasi model Ollama (llama3.2-math, temp 0.2, Guardrail SMA)
├── frontend/             # React 19 + TypeScript + Tailwind CSS + KaTeX SPA
├── backend/              # Python FastAPI Backend & RAG Handler
│   ├── api/              # FastAPI routers (auth, user, chat, document)
│   ├── core/             # Konfigurasi aplikasi, koneksi database, JWT security
│   ├── knowledge_base/   # Grounding Knowledge Base Kurikulum SMA (m4th-lab.net)
│   │   └── sma_m4thlab_curriculum.md
│   ├── models/           # SQLAlchemy ORM models
│   ├── schemas/          # Pydantic request/response schemas
│   ├── services/         # Business logic (chat_service.py, auth_service.py, user_service.py)
│   └── rag.py            # Handler prompt, Knowledge Base retrieval, & koneksi Ollama
└── readme.md             # Dokumentasi utama repositori Valdric/MathAI
```
