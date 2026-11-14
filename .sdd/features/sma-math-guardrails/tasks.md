# Tasks: Asisten AI Matematika SMA & Backend Guardrails

## Implementation Steps
- [x] 1. **Perbarui `Modelfile`**
  - Set `PARAMETER temperature 0.2`.
  - Perbarui blok `SYSTEM` dengan identitas, cakupan materi Matematika SMA (m4th-lab.net), protokol anti-manipulasi, dan standar penyajian jawaban.
- [x] 2. **Perkuat Modul Backend LLM (`backend/rag.py`)**
  - Set `temperature=0.2` pada `ChatGroq`.
  - Tambahkan konstanta `SMA_MATH_SYSTEM_PROMPT` dan `MAX_HISTORY_MESSAGES = 6`.
  - Kunci `SystemMessage` di indeks ke-0 (`messages[0]`), batasi riwayat maksimal 6 pesan terakhir, dan terapkan *Sandwich Defense* pada pesan pengguna terakhir.
- [x] 3. **Perbarui Layanan Chat (`backend/services/chat_service.py`)**
  - Batasi pengambilan riwayat pesan dari database menjadi maksimal 6 pesan terakhir dan teruskan ke `generate_answer()`.
- [x] 4. **Sesuaikan Pilihan Topik Frontend (`WelcomeForm.tsx`)**
  - Ubah daftar topik pilihan menjadi 7 bab Matematika SMA sesuai ruang lingkup mutlak.
- [x] 5. **Commit & Push ke Repository GitHub (`https://github.com/Valdric/MathAI.git`)**
  - Pastikan remote mengarah ke `https://github.com/Valdric/MathAI.git` dan push perubahan ke GitHub.
