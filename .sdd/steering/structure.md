# Project Structure Steering — MathAI

- **Author / Maintainer:** Valdric (`Valdric/MathAI`)

## High-Level Directory Layout

```text
MathAI/
├── .agent/                            # Konfigurasi skill & workflow agen (SDD)
├── .github/                           # Template GitHub (pull_request_template.md)
│   └── pull_request_template.md       # Template deskripsi Pull Request standar tim
├── .sdd/                              # Spec-Driven Development: steering, features, changelog
├── docs/                              # Dokumentasi kolaborasi & panduan proyek
│   └── PULL_REQUEST_GUIDE.md          # Panduan resmi pembuatan & review Pull Request
├── Modelfile                          # Konfigurasi model Ollama (llama3.2-math, temp 0.2, Guardrail SMA)
├── readme.md                          # Dokumentasi utama repositori
│
├── backend/                           # Python FastAPI Backend & RAG Guardrail Handler
│   ├── api/
│   │   ├── index.py                   # Entry point aplikasi FastAPI, CORS, registrasi router
│   │   └── routers/
│   │       ├── auth_router.py         # POST /signup, POST /login
│   │       ├── chat_router.py         # CRUD /api/chats & POST /api/chats/{chat_id}/ask
│   │       ├── document_router.py     # POST /upload (protected)
│   │       └── user_router.py         # PUT /account, DELETE /account
│   ├── core/
│   │   ├── config.py                  # Pydantic BaseSettings (.env, DB, JWT, Ollama)
│   │   ├── database.py                # SQLAlchemy engine, SessionLocal, Base, get_db
│   │   └── security.py                # Hashing password & JWT HS256 token generator
│   ├── knowledge_base/
│   │   └── sma_m4thlab_curriculum.md  # Grounding Knowledge Base Kurikulum Matematika SMA
│   ├── models/
│   │   ├── __init__.py
│   │   ├── chat_model.py              # Model ChatSession & Message
│   │   └── user_model.py              # Model User
│   ├── schemas/
│   │   ├── chat_schema.py             # Skema request/response chat & pesan
│   │   ├── token_schema.py            # Skema Token & LoginResponse
│   │   └── user_schema.py             # Skema UserCreate, UserUpdate, UserResponse
│   ├── services/
│   │   ├── auth_service.py            # Logika registrasi & autentikasi pengguna
│   │   ├── chat_service.py            # Logika sesi chat, riwayat pesan, & pemanggilan RAG
│   │   └── user_service.py            # Dependency get_current_user & manajemen profil
│   ├── rag.py                         # System Prompt, Guardrails, KB retrieval, & klien Ollama
│   ├── requirements.txt               # Dependensi Python backend
│   └── vercel.json                    # Konfigurasi routing Python
│
└── frontend/                          # React 19 + TypeScript + Tailwind CSS v4 + KaTeX SPA
    ├── public/                        # Static assets (favicon.svg, icons.svg)
    ├── index.html                     # HTML entry point
    ├── package.json
    ├── vite.config.ts
    └── src/
        ├── App.tsx                    # Root controller (Auth gate + Theme toggle)
        ├── main.tsx                   # ReactDOM mounting point
        ├── config.ts                  # Pembungkus VITE_API_URL
        ├── index.css                  # Tailwind CSS v4 & KaTeX styling + safe-area mobile
        ├── components/                # Atomic Design UI Components
        │   ├── atoms/                 # Avatar, Button, Input, Skeleton, Spinner
        │   ├── molecules/             # ChatBubble, OptionCard, ProfileMenu, SearchBar
        │   ├── organisms/             # ChatArea, LoginForm, ProfileModal, SettingsModal, Sidebar, SignupForm, SplashScreen, WelcomeForm
        │   └── templates/             # AppShell
        ├── pages/
        │   └── MainChatPage/          # Halaman utama obrolan terhubung Zustand store
        ├── services/                  # Pure async REST API clients
        │   ├── http.ts                # Fetch wrapper & ekstraksi error FastAPI (detail)
        │   ├── auth.service.ts        # API login, signup, update/delete account
        │   └── chat.service.ts        # API CRUD sesi chat, messages, ask AI
        ├── store/
        │   ├── authStore.ts           # Zustand persisted auth store (localStorage: auth-storage)
        │   └── chatStore.ts           # Zustand chat, theme, UI modal/sidebar state
        └── types/
            └── chat.ts                # Shared TypeScript interfaces (IMessage, IChatSession)
```

## Conventions

### Component Folders (`frontend/src/components/` & `pages/`)
Setiap komponen berada dalam foldernya sendiri dengan struktur konsisten:
```text
ComponentName/
├── index.tsx              # Barrel re-export komponen & tipe props
└── ComponentName.tsx      # Implementasi komponen React dengan Tailwind CSS inline
```

### Naming
- Folder & file komponen React: `PascalCase`
- Fungsi, variabel, hooks, props: `camelCase`
- Service files: `*.service.ts` (kecuali wrapper `http.ts`)
- Interface TypeScript: `PascalCase` berawalan `I` (misalnya `IUser`, `IChatSession`, `IMessage`, `IButtonProps`)
- Router/Service/Schema/Model Python: `snake_case`

### Services & State
- Semua panggilan HTTP ke backend harus melalui `frontend/src/services/` (`auth.service.ts` dan `chat.service.ts`) yang membungkus `apiRequest` dari `http.ts`.
- State autentikasi dikelola di `useAuthStore` (`persist` ke `localStorage`), sedangkan state sesi obrolan, pemilihan kurikulum, tema, dan status UI dikelola di `useChatStore`.
