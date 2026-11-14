# Product Steering — MathAI

- **Author / Maintainer:** Valdric
- **Repository:** `https://github.com/Valdric/MathAI`
- **Knowledge Base Reference:** `backend/knowledge_base/sma_m4thlab_curriculum.md` (`https://www.m4th-lab.net/materi?level=sma`)

## Core Vision
**MathAI** adalah asisten dan tutor kecerdasan buatan spesialis **Matematika Sekolah Menengah Atas (SMA)** di Indonesia (Kelas X, XI, dan XII — Matematika Wajib & Matematika Peminatan) yang mengacu pada Kurikulum Nasional (Kurikulum 2013 & Kurikulum Merdeka) sebagaimana terstruktur pada repositori pembelajaran [m4th-lab.net](https://www.m4th-lab.net/materi?level=sma).

## Target Audience
- Siswa SMA/MA Kelas X, XI, dan XII di seluruh Indonesia.
- Pelajar yang membutuhkan penjelasan matematika langkah demi langkah (*step-by-step*) dengan notasi LaTeX yang rapi dan akurat.

## Key Features
1. **Interactive Chat Interface:** Antarmuka percakapan modern yang mendukung render rumus matematika menggunakan KaTeX (`$...$` & `$$...$$`).
2. **Grounding Kurikulum m4th-lab.net:** Terintegrasi dengan dokumen Knowledge Base `backend/knowledge_base/sma_m4thlab_curriculum.md` yang mencakup seluruh bab Matematika Wajib & Peminatan SMA.
3. **Strict Guardrails & Anti-Manipulation:** Dilengkapi 3 penguatan keamanan backend (`temperature=0.2`, *Sandwich Defense*, dan pembatasan *Context Window* maksimal 6 pesan terakhir dengan System Prompt terkunci di indeks ke-0).
4. **Session & Curriculum Management:** Manajemen riwayat obrolan berdasarkan kelas (Kelas 10, 11, 12) dan topik Matematika SMA.
