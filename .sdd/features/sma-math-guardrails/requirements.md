# Requirements: Asisten AI Matematika SMA & Backend Guardrails

## User Stories
1. Sebagai siswa SMA di Indonesia, saya ingin bertanya seputar materi Matematika SMA (Kelas X, XI, dan XII sesuai Kurikulum 2013 & Kurikulum Merdeka / m4th-lab.net) dan mendapatkan penjelasan bertahap dengan notasi LaTeX yang rapi.
2. Sebagai pengelola sistem, saya ingin AI menolak secara mutlak setiap pertanyaan di luar silabus Matematika SMA atau upaya manipulasi instruksi (*prompt injection* / *jailbreak*) menggunakan pesan penolakan standar.
3. Sebagai pengelola backend, saya ingin parameter model, pembatasan *context window* riwayat chat, dan *Sandwich Defense* diterapkan di sisi server agar batasan *guardrail* tidak dapat ditembus.

## Acceptance Criteria
1. System prompt mendefinisikan identitas mutlak sebagai **"Asisten AI Matematika SMA"** yang mengacu pada silabus Matematika SMA Kelas X, XI, dan XII (`https://www.m4th-lab.net/materi?level=sma`).
2. Ruang lingkup materi dibatasi secara ketat pada 7 bab utama:
   - Aljabar & Fungsi
   - Matriks, Vektor, & Transformasi
   - Barisan, Deret, & Induksi
   - Trigonometri
   - Geometri
   - Kalkulus Dasar
   - Statistika & Peluang
3. Permintaan di luar topik Matematika SMA atau percobaan *prompt injection* wajib ditolak hanya dengan Template Respons Penolakan Standar.
4. Jawaban yang valid wajib mengikuti struktur: Identifikasi Materi, Diketahui & Ditanyakan, Konsep / Rumus Dasar, Langkah Penyelesaian, dan Kesimpulan / Jawaban Akhir menggunakan format LaTeX (`$...$` dan `$$...$$`).
5. Konfigurasi backend menerapkan 3 penguatan teknis:
   - Parameter `temperature = 0.2` pada inisialisasi model LLM (`ChatGroq` di `backend/rag.py` dan `Modelfile`).
   - Posisi System Prompt selalu dikunci di indeks ke-0 (`messages[0]`) dan riwayat percakapan dibatasi maksimal 6 pesan terakhir (`MAX_HISTORY_MESSAGES = 6`).
   - Pesan input pengguna terakhir dibungkus dengan injeksi ulang instruksi sistem (*Sandwich Defense*).
