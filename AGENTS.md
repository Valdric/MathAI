# 🚨 WAJIB: Baca Folder docs/ Sebelum Eksekusi Tugas

Sebelum merencanakan, membuat abstraksi, atau menulis kode, setiap agen **WAJIB** membaca seluruh isi dan referensi pada folder `docs/`:

- **[`docs/PULL_REQUEST_GUIDE.md`](docs/PULL_REQUEST_GUIDE.md):** Aturan branching, standar Pull Request atomik (100–300 baris perubahan), target branch (`develop`), dan format *Conventional Commits* (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`).
- **[`docs/ROW16_PARSER_BENCHMARK.md`](docs/ROW16_PARSER_BENCHMARK.md):** Baseline ekstraksi dokumen, perbandingan `pypdf` vs Markdown, dan spesifikasi audit rumus LaTeX.
- **Dokumen Produk, Roadmap & Timeline:** Seluruh file spesifikasi, timeline (Phase 1–5), dan dokumen kebutuhan di folder `docs/` adalah acuan batas lingkup (*scope*) kerja. **Dilarang berasumsi di luar dokumen yang ada di `docs/`.**

---

## 1. Aturan Filosofi Ponytail (Anti Over-Engineering)
*Diadopsi dari repositori resmi DietrichGebert/ponytail*

Terapkan persona **“Lazy Senior Developer”**: *The best code is the code never written.* Selesaikan seluruh masalah dengan baris kode baru sesedikit mungkin.

### Aturan Output Respon
Setiap respon tugas koding wajib diakhiri dengan **1–2 baris penutup** yang menyatakan:
1. **Apa yang di-skip / tidak dicek.**
2. **Resiko yang perlu diketahui user.**

### Level Intensitas Ponytail
- **`lite`:** Buat apa yang diminta, sebutkan alternatif yang lebih ringkas dalam 1 baris dan biarkan user memilih.
- **`full` (Default):** Terapkan tangga keputusan 7-Rung Hierarchy di bawah secara ketat.
- **`ultra`:** Pertanyakan kebutuhan request sebelum mulai; tolak bagian yang tidak memiliki urgensi jelas.

---

## 2. 7-Rung Hierarchy (Tangga Keputusan Sebelum Menulis Kode)

Sebelum membuat abstraksi atau menulis baris kode baru, lewati tangga berikut secara berurutan dan berhenti di tingkatan pertama yang menyelesaikan masalah:

1. **Apakah ini perlu ada sama sekali?** (Prinsip YAGNI — *You Aren't Gonna Need It*). Hapus ide fitur spekulatif. Permintaan samar ("buatkan X") hanya dikerjakan versi paling minimal yang menjalankan tugas inti.
2. **Apakah sudah ada di codebase ini?** Gunakan kembali helper, service, model, schema, atau utility yang telah ada (contoh: `backend/rag_chunking.py`, `backend/rag_store.py`, `backend/services/chat_service.py`, `backend/core/database.py`).
3. **Apakah standar library / runtime menyediakannya?**
   - **Backend (Python):** Utamakan library bawaan Python (`re`, `math`, `pathlib`, `hashlib`, `json`, `typing`, `dataclasses`, `uuid`).
   - **Frontend (TypeScript/React):** Utamakan Web API & Node/TS built-in (contoh: `fetch`, `URLSearchParams`, `Intl.NumberFormat`, `localStorage`).
4. **Apakah ada fitur bawaan platform / HTML / Framework?**
   - **Frontend:** Utamakan elemen dan atribut native (`<dialog>`, `<form>`, `<input>`, validasi native, CSS variables, utility Tailwind CSS).
   - **Backend:** Utamakan fitur bawaan FastAPI dan Pydantic (contoh: `Form()`, `File()`, `HTTPException`, Pydantic validators).
5. **Apakah sudah ada di dependency terinstall?**
   - Gunakan dependency yang sudah terpasang di `requirements.txt` (`fastapi`, `sqlalchemy`, `chromadb`, `pypdf`, `python-docx`, `bcrypt`, `pyjwt`, `httpx`, `langchain-text-splitters`) atau `package.json` (`lucide-react`, `katex`, `react-markdown`).
   - **Dilarang menambah dependency baru** hanya untuk beberapa baris logika.
6. **Bisakah diselesaikan dalam satu fungsi / baris ringkas?** Jika pembaca bisa langsung memahaminya sekilas, gunakan solusi langsung tanpa lapisan abstraksi berlebih.
7. **Baru tulis kode baru sesedikit mungkin yang bekerja dengan handal.**

---

## 3. Prinsip Eksekusi

- **Lazy about the solution, never about the change itself:** Selesaikan seluruh bagian yang terdampak (*callers*, *routers*, *tests*, konfigurasi).
- **Diff terpendek yang bekerja adalah pemenangnya.** Jangan buat abstraksi, class wrapper, atau interface prematur jika fungsi biasa sudah cukup.
- Berikan komentar kode hanya untuk alasan *why* yang tidak bisa diungkapkan oleh kode itu sendiri (maksimal 1 baris).
- Setiap logika non-trivial baru (percabangan, loop, parser, chunking LaTeX, security, vector search) **wajib menyertakan unit test** di `backend/tests/` atau test mandiri yang terverifikasi.

---

## 4. Guardrails MathAI (Hal yang TIDAK Boleh Dipotong / Ditinggalkan)

Meskipun mengutamakan kode minimalis, **dilarang keras** memotong aspek keselamatan dan kualitas inti berikut:

1. **Validasi Batasan Sistem (Trust-Boundary & Schema Validation):**
   - Semua request payload FastAPI wajib tervalidasi skema Pydantic v2.
   - Validasi file upload: batasan ukuran (maksimal 10 MB), whitelist ekstensi (`.pdf`, `.docx`, `.txt`, `.md`), dan sanitasi nama file (`secure_filename`) untuk mencegah *path traversal*.
2. **Integritas Formula Matematika & LaTeX:**
   - Delimiter LaTeX (`$$...$$` dan `$...$`) adalah unit atomik: **Dilarang memotong rumus matematika di tengah formula** saat chunking RAG.
   - Pembersihan LaTeX (`clean_and_normalize_latex`) tidak boleh merusak sintaks rumus asli (seperti `\frac`, `\sqrt`, matriks, atau integral).
   - Rendering rumus di frontend harus aman dari injeksi XSS dengan KaTeX yang tersanitasi.
3. **Keamanan & Kontrol Akses (Security & Privacy):**
   - Hashing password dengan `bcrypt` (dilarang menyimpan plaintext).
   - Autentikasi JWT dengan masa kedaluwarsa (*expiration*) dan secret key aman via `.env`.
   - **User Scoping Mutlak:** Dokumen yang diunggah siswa hanya boleh diakses, dihapus, dan diambil (*retrieve*) oleh siswa pemilik dokumen (`uploaded_by: user_id`). Mencegah celah IDOR antarsiswa.
   - Pencegahan SQL Injection melalui *parameterized queries* SQLAlchemy ORM.
4. **RAG & LLM Guardrails:**
   - **Strict Scope Kurikulum SMA:** MathAI hanya menjawab materi silabus Matematika SMA (mengacu repositori kurikulum nasional / m4th-lab.net).
   - Konfigurasi temperature rendah (`0.2`) untuk konsistensi perhitungan dan kepatuhan guardrail.
   - *Sandwich defense* pada prompt (kunci identitas di `messages[0]` dan penegasan instruksi pada pesan user terakhir) untuk mencegah manipulasi / *jailbreak*.
5. **Penanganan Error & Pembersihan Resource:**
   - *Graceful degradation:* Jika ChromaDB offline atau sedang diindeks, retrieval otomatis beralih ke keyword fallback tanpa membuat server crash.
   - File upload sementara wajib selalu dibersihkan di blok `finally:`.
