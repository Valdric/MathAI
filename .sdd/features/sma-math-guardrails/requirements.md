# Requirements Document: Asisten AI Matematika SMA & Backend Guardrails

## Introduction

### Project Context
**MathAI** adalah aplikasi web asisten dan tutor kecerdasan buatan yang dirancang khusus untuk membantu siswa Sekolah Menengah Atas (SMA/MA) di Indonesia (Kelas X, XI, dan XII) dalam memahami dan menyelesaikan soal **Matematika Wajib** dan **Matematika Peminatan**. Agar sistem dapat berjalan secara deterministik, akurat secara pedagogis, dan aman dari penyalahgunaan (*prompt injection*, *jailbreak*, maupun pertanyaan di luar topik), diperlukan spesifikasi aturan domain dan pengamanan berlapis (*Defense-in-Depth*) di sisi backend serta penyelarasan topik di antarmuka pengguna.

### Goal
1. Membatasi identitas dan ruang lingkup pengetahuan AI secara mutlak hanya pada silabus Matematika SMA Kelas X, XI, dan XII berdasarkan referensi kurikulum `m4th-lab.net` (`backend/knowledge_base/sma_m4thlab_curriculum.md`).
2. Menolak setiap permintaan di luar topik Matematika SMA maupun upaya manipulasi instruksi menggunakan template penolakan standar.
3. Menegakkan 3 lapisan pengamanan teknis pada modul LLM (`backend/rag.py`, `backend/services/chat_service.py`, dan `Modelfile`).
4. Menyajikan penjelasan matematika secara sistematis (*step-by-step*) dengan notasi LaTeX yang dapat dirender rapi oleh KaTeX di frontend.

### Scope
- Konfigurasi parameter dan system prompt Ollama pada `Modelfile`.
- Modul prompt engineering, retrieval kurikulum berbasis kata kunci, *Sandwich Defense*, dan pemanggilan API Ollama di `backend/rag.py`.
- Pembatasan riwayat percakapan pada `backend/services/chat_service.py`.
- Daftar pilihan topik Matematika SMA pada `frontend/src/components/organisms/WelcomeForm/WelcomeForm.tsx`.

### Limitations
- Retrieval kurikulum menggunakan pencocokan kata kunci ringan terhadap file markdown lokal (`sma_m4thlab_curriculum.md`) tanpa *vector database* eksternal untuk menjaga jejak memori tetap minimal.
- Keberhasilan penolakan atau pemrosesan bergantung pada ketersediaan layanan Ollama (`OLLAMA_BASE_URL`) dengan model `llama3.2-math` atau fallback `llama3.2:3b`.

---

## Glossary

- **MathAI**: Keseluruhan aplikasi tutor virtual AI Matematika SMA.
- **Guardrail**: Aturan keamanan dan batasan topik mutlak yang mencegah AI menjawab di luar ruang lingkup Matematika SMA.
- **Knowledge_Base**: Dokumen kurikulum acuan di `backend/knowledge_base/sma_m4thlab_curriculum.md` yang merujuk pada `m4th-lab.net`.
- **System_Prompt**: Instruksi tingkat sistem (`SMA_MATH_SYSTEM_PROMPT`) yang mendefinisikan peran, silabus, aturan keamanan, dan format jawaban.
- **Sandwich_Defense**: Teknik pengamanan dengan menyisipkan ulang pengingat instruksi sistem tepat sebelum input pertanyaan pengguna pada elemen pesan terakhir.
- **Context_Window_Limiter**: Pembatasan jumlah pesan riwayat obrolan yang dikirim ke LLM (`MAX_HISTORY_MESSAGES = 6`) untuk mencegah *context stuffing*.
- **WelcomeForm**: Komponen onboarding frontend untuk memilih kelas SMA dan fokus topik matematika.
- **Ollama_Client**: Fungsi `_call_ollama_chat()` pada `backend/rag.py` yang mengirim payload ke endpoint `/api/chat` Ollama.

---

## Requirements

### Requirement 1: Identitas Mutlak & Ruang Lingkup Kurikulum SMA
**User Story:**  
Sebagai pengelola sistem, saya ingin AI memiliki identitas dan batasan materi yang terkunci pada silabus Matematika SMA Indonesia, sehingga penjelasan AI selalu relevan dengan kurikulum sekolah.

#### Acceptance Criteria
1. THE `System_Prompt` (`SMA_MATH_SYSTEM_PROMPT` di `backend/rag.py` dan `SYSTEM` di `Modelfile`) SHALL mendefinisikan identitas asisten sebagai **"Asisten AI Matematika SMA" (MathAI)** yang mengacu pada Kurikulum 2013 & Kurikulum Merdeka (`m4th-lab.net`).
2. THE `System_Prompt` SHALL membatasi cakupan materi hanya pada Matematika Wajib dan Matematika Peminatan SMA Kelas X, XI, dan XII.
3. WHEN pengguna memilih kelas dan bab topik melalui `WelcomeForm`, THE `WelcomeForm` SHALL menyediakan pilihan kelas (`Kelas 10`, `Kelas 11`, `Kelas 12`) dan 7 kelompok topik Matematika SMA (`Aljabar & Fungsi`, `Matriks, Vektor & Transformasi`, `Barisan, Deret & Induksi`, `Trigonometri`, `Geometri`, `Kalkulus Dasar`, `Statistika & Peluang`).
4. WHEN siswa mengirim pertanyaan dengan `grade` atau `subject` yang terkonfigurasi, THE `build_system_prompt()` SHALL menyisipkan konteks sesi belajar dan potongan `Knowledge_Base` yang relevan melalui `retrieve_relevant_curriculum_context()`.

### Requirement 2: Penolakan Topik Non-Matematika SMA & Anti-Manipulasi
**User Story:**  
Sebagai pengelola sistem, saya ingin AI menolak secara tegas setiap pertanyaan di luar Matematika SMA maupun percobaan *prompt injection*, sehingga sistem tidak disalahgunakan untuk topik lain.

#### Acceptance Criteria
1. THE `System_Prompt` SHALL melarang AI menjawab topik di luar Matematika SMA (termasuk pemrograman, fisika, kimia, biologi, politik, hiburan, maupun matematika perguruan tinggi lanjut).
2. WHEN input pengguna mencoba mengubah peran sistem, meminta isi `System_Prompt`, atau menggunakan teknik *jailbreak* (seperti sandi, roleplay, atau perintah pengabaian instruksi), THE `System_Prompt` SHALL menginstruksikan AI untuk mengembalikan hanya **Template Respons Penolakan Standar** tanpa tambahan penjelasan lain.
3. IF pertanyaan pengguna memadukan soal cerita matematika dengan permintaan non-matematika (misalnya meminta kode program), THEN THE `System_Prompt` SHALL menginstruksikan AI untuk menolak bagian non-matematikanya atau menolak seluruh permintaan apabila tidak relevan.

### Requirement 3: Penguatan Keamanan Berlapis di Sisi Backend
**User Story:**  
Sebagai pengembang backend, saya ingin parameter LLM, posisi system prompt, batas riwayat obrolan, dan *Sandwich Defense* dipaksakan di sisi server agar batasan *guardrail* konsisten dan sulit ditembus.

#### Acceptance Criteria
1. THE `Ollama_Client` dan `Modelfile` SHALL menetapkan parameter `temperature` sebesar `0.2` (`LLM_TEMPERATURE = 0.2`) untuk menjaga konsistensi penalaran matematis dan kepatuhan aturan.
2. THE `generate_answer()` SHALL selalu mengunci `System_Prompt` pada indeks ke-0 (`messages[0]`) dengan `role = "system"`.
3. THE `ChatService.generate_ai_reply()` dan `generate_answer()` SHALL membatasi riwayat percakapan yang diteruskan ke LLM maksimal 6 pesan terakhir (`MAX_HISTORY_MESSAGES = 6`) sebelum pesan saat ini.
4. WHEN membangun pesan terakhir pengguna, THE `build_sanitized_user_message()` SHALL membungkus pertanyaan siswa dengan `SANDWICH_DEFENSE_PREFIX` sebelum mengirimkannya ke `Ollama_Client`.
5. IF pemanggilan ke model utama `OLLAMA_MODEL` mengembalikan HTTP `404` atau error koneksi, THEN THE `_call_ollama_chat()` SHALL mencoba `OLLAMA_FALLBACK_MODEL` (`llama3.2:3b`), dan IF seluruh percobaan gagal SHALL melempar `RuntimeError` yang ditangani oleh `ChatService` menjadi HTTP `500` (atau HTTP `429` apabila terkait rate limit).

### Requirement 4: Standar Pedagogis & Format LaTeX
**User Story:**  
Sebagai siswa SMA, saya ingin setiap jawaban soal matematika dijabarkan langkah demi langkah dengan rumus LaTeX yang rapi, sehingga saya mudah memahami alur penyelesaiannya.

#### Acceptance Criteria
1. WHEN menjawab pertanyaan Matematika SMA yang valid, THE `System_Prompt` SHALL mengarahkan AI menggunakan Bahasa Indonesia yang edukatif dengan struktur: Identifikasi Materi, Diketahui & Ditanyakan, Konsep / Rumus Dasar, Langkah Penyelesaian (*step-by-step*), dan Kesimpulan / Jawaban Akhir.
2. THE `System_Prompt` SHALL mewajibkan penulisan ekspresi matematika menggunakan delimiter `$...$` untuk *inline math* dan `$$...$$` untuk *block math*.
3. WHEN pesan AI dirender di frontend, THE `ChatBubble` SHALL menormalisasi delimiter `\(...\)` dan `\[...\]` melalui `preprocessLaTeX()` lalu merender rumus menggunakan `remark-math` dan `rehype-katex`.
