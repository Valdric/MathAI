# Technical Steering — MathAI

## Tech Stack

### Frontend (`frontend/`)
| Layer | Technology |
|---|---|
| Framework | React 19 (`react` ^19.2.7) |
| Language | TypeScript ~6.0 (`strict` / `erasableSyntaxOnly` / `verbatimModuleSyntax`) |
| Build Tool | Vite 8 (`@vitejs/plugin-react`) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, `@custom-variant dark`) |
| Math Rendering | `react-markdown`, `remark-math`, `remark-gfm`, `rehype-raw`, `rehype-katex`, `katex` |
| Icons | `lucide-react` |
| State Management | Zustand (`authStore.ts` with `persist`, `chatStore.ts`) |
| HTTP Layer | Native `fetch` wrapped in `src/services/http.ts` (`auth.service.ts`, `chat.service.ts`) |
| Linter | `oxlint` (`.oxlintrc.json`) |

### Backend (`backend/`)
| Layer | Technology |
|---|---|
| Language | Python 3.12+ |
| Framework | FastAPI (`uvicorn[standard]`) |
| Validation | Pydantic v2 + `pydantic-settings` + `email-validator` |
| Database | SQLAlchemy ORM — SQLite (`sqlite:///./smartai.db`) lokal / PostgreSQL (Supabase) produksi |
| Auth & Security | JWT (`python-jose[cryptography]`, `HS256`) + `werkzeug.security` password hashing |
| AI Engine | **Ollama** (`llama3.2-math` berbasis `llama3.2:3b` via `Modelfile`, fallback `llama3.2:3b`) |
| HTTP Client | `httpx` (memanggil `/api/chat` pada `OLLAMA_BASE_URL`) |
| Document Parsing | `langchain-text-splitters`, `pypdf`, `python-docx` |

## Environment Configuration

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://127.0.0.1:8000
```
Diakses melalui `frontend/src/config.ts` via `import.meta.env.VITE_API_URL`.

### Backend (`backend/.env`)
```env
DATABASE_URL=sqlite:///./smartai.db
JWT_SECRET=supersecretkey-mathai-2026
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2-math
```
Dikelola terpusat pada `backend/core/config.py` (`Settings`).

## Common Commands

```bash
# Frontend (di direktori frontend/)
npm install
npm run dev
npm run build      # tsc -b && vite build
npm run lint       # oxlint

# Backend (di direktori backend/)
pip install -r requirements.txt
uvicorn api.index:app --host 127.0.0.1 --port 8000 --reload
```

## Engineering Principles
1. **Atomic Component-Driven Frontend:** Komponen UI terstruktur dalam `atoms`, `molecules`, `organisms`, `templates`, dan `pages` menggunakan utility class Tailwind CSS secara konsisten tanpa file CSS module mati.
2. **Service Layer Isolation:** Semua pemanggilan HTTP ke backend terpusat di `frontend/src/services/` (`http.ts`, `auth.service.ts`, `chat.service.ts`) dengan ekstraksi error standar FastAPI (`detail`).
3. **Strict Typing:** TypeScript `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, dan tanpa penggunaan `any` implisit/eksplisit.
4. **Layered Backend Architecture:** Pemisahan jelas antara `api/routers/` (routing & dependency injection), `schemas/` (validasi Pydantic), `services/` (business logic), `models/` (SQLAlchemy ORM), dan `rag.py` (guardrails & Ollama client).
5. **Security & Guardrails:** System prompt dikunci di sisi server (`messages[0]`), riwayat percakapan dibatasi `MAX_HISTORY_MESSAGES = 6`, *Sandwich Defense* diterapkan pada input terakhir, dan parameter `temperature = 0.2` dijaga pada pemanggilan Ollama.
