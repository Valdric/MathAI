# AI Implementation Changelog

This document tracks all completed features, bug fixes, and refactoring efforts. AI agents must append their completed tasks to this file to preserve context for future sessions.

## Format

```markdown
### [YYYY-MM-DD] - [Type: Feature | BugFix | Refactor]
**Task/Objective:** ...
**Files Modified:**
- `path/to/file1`
- `path/to/file2`
**Summary of Changes:** 
- Added X
- Fixed Y
```

---

## Change History

*(Newest changes are added below)*

### [2026-07-30] - [Type: Feature | Refactor | BugFix]
**Task/Objective:** Migrasi Backend ke FastAPI, Integrasi Frontend React, Refactor Premium UI, dan Dukungan Supabase
**Files Modified:**
- `backend/` (Seluruh folder & subfolder: `api/`, `core/`, `models/`, `schemas/`, `services/`)
- `frontend/` (Seluruh folder & subfolder: `src/components/`, `src/store/`, `src/pages/`)
- `.sdd/` (Folder `features/` dan `steering/`)
**Summary of Changes:** 
- **[Feature] Backend Migration**: Berhasil melakukan migrasi backend secara penuh dari Flask ke **FastAPI** dengan arsitektur berlapis (layered architecture).
- **[Feature] Frontend Integration**: Membangun ulang frontend menggunakan **React + Vite** dipadukan dengan **Zustand** untuk manajemen state.
- **[Feature] Auth & User Management**: Mengimplementasikan sistem autentikasi (Login, Register, Logout, Hapus Akun) berbasis JWT (JSON Web Tokens).
- **[Feature] Chat Database & RAG**: Membuat persistensi data sesi percakapan menggunakan SQLAlchemy, serta mengintegrasikan *Langchain + Groq API* untuk model AI RAG (Retrieval-Augmented Generation) yang peduli dengan kurikulum (Kelas & Mata Pelajaran).
- **[Refactor] Premium UI Refactor**: Mengonversi komponen UI (seperti `LoginForm`, `SignupForm`, `ChatArea`) ke **Tailwind CSS** untuk menghadirkan desain modern (*glassmorphism*) yang responsif.
- **[Feature] Supabase / PostgreSQL Support**: Mengadopsi library `psycopg2-binary` dan logika deteksi URL pada SQLAlchemy untuk mendukung penggunakan Supabase sebagai database serverless utama.
- **[Feature] Global Theme**: Menambahkan *Global Theme Toggler* untuk mode Gelap/Terang yang persisten.
- **[BugFix] Data Isolation**: Mengatasi kebocoran data di mana riwayat obrolan akun lain terlihat (dengan mengimplementasikan pembersihan state lokal secara menyeluruh saat *logout* via `clearAllData()`).
- **[BugFix] Post-Login Flow**: Memperbaiki alur saat login pertama kali agar otomatis mengambil (*fetch*) riwayat chat akun yang baru masuk.
- **[BugFix] UI Layouting**: Memperbaiki z-index dan layout *Welcome Form* (onboarding kelas & mapel) agar Navbar tetap muncul di bagian atas layar.

### [2026-07-31] - [Type: BugFix]
**Task/Objective:** Fix Vercel Serverless Function Deployment Bundle Size Exceeded (>500MB Limit)
**Files Modified:**
- `backend/requirements.txt`
- `backend/rag.py`
**Summary of Changes:** 
- **[BugFix] Vercel Bundle Size Optimization**: Menghapus dependensi PyTorch (`torch`), `sentence-transformers`, `langchain-huggingface`, `chromadb`, `pandas`, dan `openpyxl` dari `requirements.txt` yang menyebabkan ukuran bundle membengkak hingga 5.14 GB.
- **[Refactor] Lightweight Groq Integration**: Mengubah `rag.py` untuk menggunakan API `ChatGroq` secara langsung tanpa memuat model embedding PyTorch lokal yang berat. Ukuran fungsi serverless sekarang turun drastis dari 5.14 GB menjadi ~30 MB (jauh di bawah batas Vercel 500 MB).

### [2026-07-31] - [Type: BugFix]
**Task/Objective:** Fix Navbar Layout Clipping and Profile Menu Z-Index Stacking Overlap Bugs
**Files Modified:**
- `frontend/src/App.tsx`
- `frontend/src/components/templates/AppShell/AppShell.tsx`
- `frontend/src/components/organisms/ChatArea/ChatArea.tsx`
- `frontend/src/components/organisms/WelcomeForm/WelcomeForm.tsx`
**Summary of Changes:** 
- **[BugFix] Responsive Viewport Height**: Mengganti `h-screen` dengan `h-[100dvh]` pada `AppShell` dan `App` untuk mencegah penumpukan/pemotongan navbar atas di berbagai perangkat (khususnya browser mobile).
- **[BugFix] Z-Index Stacking Context Fix**: Menambahkan `relative z-30` pada `<header>` di `ChatArea` dan `z-10` pada `WelcomeForm` sehingga menu dropdown `ProfileMenu` (`z-50`) dipastikan berada di lapisan paling atas dan tidak tertimpa lagi oleh kartu "Selamat Datang di MathAI".

### [2026-07-31] - [Type: BugFix]
**Task/Objective:** Fix Root Cause of Navbar Clipping on Mobile — Global CSS `overflow: hidden` & Nested Viewport Lock Conflicts
**Files Modified:**
- `frontend/src/index.css`
- `frontend/src/pages/MainChatPage/MainChatPage.tsx`
- `frontend/src/components/templates/AppShell/AppShell.tsx`
- `frontend/src/components/organisms/Sidebar/Sidebar.tsx`
**Summary of Changes:** 
- **[BugFix] Remove Global `overflow: hidden`**: Menghapus `overflow: hidden` dari `html, body, #root` di `index.css` yang merupakan akar masalah utama pemotongan navbar. Properti ini memotong seluruh konten secara global sebelum Tailwind sempat bekerja. Diganti dengan `overflow-x: hidden` hanya pada `html` untuk mencegah scrollbar horizontal.
- **[BugFix] Single Viewport Lock Strategy**: Menetapkan `MainChatPage` sebagai satu-satunya kontainer viewport-lock (`h-screen h-[100dvh] overflow-hidden`). `AppShell` diubah dari `h-screen` menjadi `h-full` agar mewarisi tinggi dari parent, menghilangkan konflik nested viewport locks yang bertabrakan.
- **[BugFix] Sidebar Mobile Height**: Mengubah Sidebar dari `fixed top-0 bottom-0` menjadi `fixed inset-y-0 h-screen h-[100dvh]` saat posisi fixed (mobile), dan `md:h-full` saat relative (desktop) untuk konsistensi tinggi di semua perangkat.
- **[BugFix] Dynamic Viewport Height (`dvh`)**: Menambahkan `height: 100dvh` pada `index.css` global sebagai override dari `height: 100%` untuk browser modern yang mendukung dynamic viewport units.
- **[BugFix] Mobile Safe Area Support**: Menambahkan `viewport-fit=cover` pada `index.html` dan CSS `env(safe-area-inset-*)` padding pada elemen `body` dan fixed `Sidebar` agar konten tidak tertutup oleh poni layar (notch) atau status bar browser mobile.
- **[Refactor] Responsive Base Font Size**: Menyesuaikan tipografi dasar menjadi `14px` pada perangkat mobile untuk mencegah antarmuka terasa terlalu besar dan sesak.

### [2026-11-15] - [Type: Refactor | BugFix]
**Task/Objective:** Perapihan Struktur Proyek sesuai Standar SDD, Ekstraksi Service Layer Frontend, Sinkronisasi Backend Config/Endpoint, dan Pembersihan File Legacy
**Files Modified:**
- Root & Legacy Cleanup: Dihapus `cleanup-imports.js`, `refactor.js`, `image.png`, `smartai-tutor.jpg`, `frontend_legacy/`, `backend/backup_old/`, `backend/chroma_db/`, `frontend/src/App.css`, `frontend/src/assets/`, dan 17 file `*.module.css` yang sudah tidak digunakan.
- `frontend/index.html`, `frontend/src/components/atoms/Avatar/Avatar.tsx`, `frontend/src/components/organisms/Sidebar/Sidebar.tsx`, serta standarisasi barrel file `index.tsx` pada `ProfileMenu`, `LoginForm`, `ProfileModal`, `SignupForm`.
- `frontend/src/services/http.ts`, `frontend/src/services/auth.service.ts`, `frontend/src/services/chat.service.ts` (Baru)
- `frontend/src/store/chatStore.ts`, `frontend/src/components/organisms/LoginForm/LoginForm.tsx`, `frontend/src/components/organisms/SignupForm/SignupForm.tsx`, `frontend/src/components/organisms/ProfileModal/ProfileModal.tsx`, `frontend/src/components/organisms/SettingsModal/SettingsModal.tsx`
- `backend/requirements.txt`, `backend/core/config.py`, `backend/rag.py`, `backend/services/chat_service.py`, `backend/api/routers/chat_router.py`, `backend/api/routers/document_router.py`
- `.sdd/steering/tech.md`, `.sdd/steering/structure.md`, `.sdd/features/sma-math-guardrails/requirements.md`, `.sdd/features/sma-math-guardrails/design.md`
**Summary of Changes:**
- **[Refactor] Housekeeping & Barrel Standardization**: Menghapus seluruh artefak migrasi, kode legacy Flask/vanilla, serta 17 CSS modules mati; menyeragamkan seluruh barrel file komponen menjadi `index.tsx`; mengarahkan favicon `frontend/index.html` ke `/favicon.svg`.
- **[Refactor] Frontend Service Layer**: Mengekstrak seluruh panggilan `fetch` dari store dan komponen ke `frontend/src/services/` (`http.ts`, `auth.service.ts`, `chat.service.ts`) sesuai konvensi struktur SDD.
- **[BugFix] FastAPI Error Handling**: Memperbaiki parsing error API di frontend agar membaca field `detail` dari respons error FastAPI (`HTTPException` dan validation errors), bukan lagi `data.error` peninggalan Flask.
- **[BugFix] Clear All Chats Sync**: Menambahkan endpoint `DELETE /api/chats/` di backend (`chat_router.py` & `chat_service.py`) serta menghubungkan `SettingsModal` melalui `deleteAllChats()` agar "Hapus Semua Data" juga menghapus sesi obrolan dari database server.
- **[BugFix] Backend Cleanup & Warning Fix**: Memperbaiki `SyntaxWarning` Python 3.12 pada `SMA_MATH_SYSTEM_PROMPT` (`rag.py`), menyelaraskan `backend/core/config.py` dan `backend/requirements.txt` untuk `httpx` + Ollama, serta memproteksi endpoint `POST /upload` dengan `Depends(get_current_user)`.
- **[Refactor] SDD Steering & Spec Sync**: Memperbarui `.sdd/steering/tech.md`, `.sdd/steering/structure.md`, dan spesifikasi `sma-math-guardrails` agar 100% sinkron dengan implementasi dan standar SDD.

### [2026-11-15] - [Type: Feature]
**Task/Objective:** Penambahan Panduan Pull Request (`docs/PULL_REQUEST_GUIDE.md`) dan GitHub PR Template (`.github/pull_request_template.md`)
**Files Modified:**
- `docs/PULL_REQUEST_GUIDE.md` (Baru)
- `.github/pull_request_template.md` (Baru)
- `.sdd/steering/structure.md`
**Summary of Changes:**
- **[Feature] PR Guidelines & Template**: Menambahkan dokumentasi standar pembuatan dan review Pull Request di `docs/PULL_REQUEST_GUIDE.md` beserta template otomatis GitHub di `.github/pull_request_template.md`.
- **[Refactor] Structure Steering Update**: Memperbarui pohon direktori di `.sdd/steering/structure.md` untuk mencatat folder `docs/` dan `.github/`.
