# Laporan Audit Lintas Branch (DE, DA, ML) & Deliverables Data Scientist — MathAI

- **Lead Data Scientist & Repository Maintainer:** Valdric (`Valdric/MathAI`)
- **Branch Unifikasi:** `data-scientist` (menggabungkan `main`, `origin/data-engineer`, `origin/data-analyst`, `origin/develop`, dan `origin/machine-learning`)
- **Tanggal Audit & Eksekusi:** 2026-11-18

---

## 1. Ringkasan Inspeksi Git & Audit Lintas Branch (Tahap 1 & Tahap 2)

| Branch | Commit HEAD | Author | Ringkasan Cakupan |
| :--- | :--- | :--- | :--- |
| `main` | `af39399` | `Valdric` | Rilis awal MathAI (System Prompt Kurikulum SMA, Guardrail, FastAPI + React) |
| `origin/data-engineer` | `a909e69` | `Limzy71` | 28 file materi Markdown Kurikulum Merdeka & m4th-lab.net, `rag_chunking.py`, `rag_store.py`, `document_router.py`, `knowledge_router.py`, `test_rag_pipeline.py`, auto-logout 401 (`http.ts`) |
| `origin/data-analyst` | `298cff0` | `ikhsanlaode` | Sinkronisasi branch `develop` (PR #1–#5), analisis skema data & baseline ekstraksi dokumen (`ROW16_PARSER_BENCHMARK.md`) |
| `origin/develop` | `298cff0` | `ikhsanlaode` | Merge Pull Request #1–#5 (`data-engineer` & `machine-learning`) |
| `origin/machine-learning` | `3c2221e` | `MurodFikriFadlurohman` | `embeddings.py`, `vector_store.py`, `ingest.py`, `index_kb.py`, hybrid lexical reranker, Gemini-style document attachment (`ChatArea.tsx`, `ChatBubble.tsx`), `test_document_attachment.py`, `test_rag_chromadb.py`, `test_e2e_flow.py` |

### A. `[CRITICAL BUGS]` yang Ditemukan & Telah Direvisi

1. **`[CRITICAL-01]` Dual/Split VectorStore & Konflik Singleton `ChromaSettings` (`rag_store.py` vs `vector_store.py`):**
   - **Akar Masalah:** Branch DE (`rag_store.py`) menginisialisasi `chromadb.PersistentClient(path=..., settings=ChromaSettings(anonymized_telemetry=False))` pada koleksi `smartai_knowledge`, sedangkan branch ML (`vector_store.py`) membuat `chromadb.PersistentClient(path=...)` tanpa `ChromaSettings` pada koleksi terpisah `mathai_knowledge_base`. Ketika keduanya dipanggil dalam satu proses Python (`test_rag_chromadb.py` / runtime server), ChromaDB melempar `ValueError: An instance of Chroma already exists for C:\pds\backend\chroma_db with different settings`, menyebabkan retrieval gagal total dan jatuh ke fallback statis.
   - **Revisi Diterapkan:** Menyatukan `vector_store.py` agar menggunakan singleton `get_chroma_client()` dari `rag_store.py` dan menyelaraskan skema metadata antara `ingest.py` dan `rag_chunking.py`.

2. **`[CRITICAL-02]` Duplikasi Query RAG & Prompt Over-Restriction (`backend/rag.py` di Branch ML `3c2221e`):**
   - **Akar Masalah:** Pada `generate_answer()`, `retrieve_relevant_curriculum_context()` dipanggil **dua kali** dalam satu request (sekali di dalam `build_system_prompt()` untuk `messages[0]`, dan sekali lagi sebelum `build_sanitized_user_message()` untuk `messages[-1]`), menggandakan beban query ChromaDB. Selain itu, kalimat `[ATURAN GROUNDING RAG MUTLAK: Gunakan HANYA data, angka ... DILARANG mengarang ... angka sendiri]` membuat LLM 3B menolak menghitung angka baru yang diberikan siswa (contoh nyata: menolak menjawab *"Suku ke-48 dari barisan bilangan 3, 10, 17, 24, 31"* karena angkanya tidak ada di contoh buku).
   - **Revisi Diterapkan:** Mengambil `kb_snippet` satu kali per request, menyertakan sitasi sumber `Referensi RAG #k [source_file]`, dan menyelaraskan instruksi `[ATURAN GROUNDING RAG MUTLAK]` agar model menggunakan rumus/konsep/data referensi secara patuh sekaligus wajib menghitung soal matematika SMA dengan angka baru secara bertahap.

3. **`[CRITICAL-03]` Saturasi Skor Hybrid Reranker (`max(0.001, dist - bonus)`) & Class Imbalance Bias (`backend/rag_store.py`):**
   - **Akar Masalah:** Rumus `adj_dist = max(0.001, float(dist) - bonus)` di branch ML memotong (*clamp*) semua kandidat yang memiliki `bonus >= 0.95` menjadi angka identik `0.001`, sehingga subbab spesifik (misal `Masalah 5.1: Susunan Kelereng` dengan 6 kecocokan kata kunci judul) kalah urutan dari chunk pengantar bab yang hanya cocok 2 kata umum. Selain itu, bab raksasa (`Sistem Persamaan dan Pertidaksamaan Linear`, 488 chunks) mendominasi kata kunci generik (`persamaan`, `fungsi`) dan mengalahkan bab kecil seperti `Integral` (12 chunks).
   - **Revisi Diterapkan:** Mengganti fungsi penyesuaian jarak menjadi peluruhan rasional monotonik `round(float(dist) / (1.0 + bonus * 2.5), 6)` (tanpa saturasi prematur) serta menambahkan *chapter-anchor bonus* khusus kata kunci bab non-generik, meningkatkan **Recall@5 pada Golden Dataset dari 96.00% menjadi 100.00% (MRR = 0.9900)**.

4. **`[CRITICAL-04]` Kebocoran Mock State pada `ChromaTestCase.setUpClass` (`backend/tests/test_rag_pipeline.py`):**
   - **Akar Masalah:** `mock.patch.object(rag_store, "KNOWLEDGE_BASE_DIR", cls.kb_dir)` dijalankan sebelum `index_curriculum_to_chromadb()` tanpa `cls.addClassCleanup(patcher.stop)`. Jika `setUpClass` gagal, `tearDownClass` tidak dijalankan oleh `unittest`, sehingga `KNOWLEDGE_BASE_DIR` tetap menunjuk ke `MINI_KB` (4 chunks) dan menyebabkan `TestStructureAwareChunking.test_real_knowledge_base_chunking_is_sound` gagal (`AssertionError: 4 not greater than 2000`).
   - **Revisi Diterapkan:** Mendaftarkan `cls.addClassCleanup(patcher.stop)` segera setelah setiap `patcher.start()`.

5. **`[CRITICAL-05]` Ketergantungan Tanpa Fallback pada Endpoint Ollama `/api/embed` (`backend/embeddings.py`):**
   - **Akar Masalah:** `embed_text()` dan `embed_texts()` di branch ML langsung memanggil `POST /api/embed` tanpa penanganan error bila container/daemon Ollama belum aktif atau model `nomic-embed-text` belum di-*pull*, serta koleksi default ChromaDB mencoba mengunduh model ONNX 79 MB saat runtime.
   - **Revisi Diterapkan:** Menambahkan `MathAIEmbeddingFunction` dan `_deterministic_768d_fallback()` (feature hashing unigram + bigram + char 4-gram 768 dimensi ternormalisasi unit vector $\|\mathbf{v}\|_2 = 1.0$) sehingga seluruh pipeline dapat diindeks dan diuji secara deterministik dalam $< 16$ detik tanpa unduhan eksternal.

6. **`[CRITICAL-06]` Ketidakcocokan Nama File Lampiran (`secure_filename` vs Raw `file.name`) pada `ChatArea.tsx` & `rag_store.py` (`2c96673`):**
   - **Akar Masalah:** Endpoint `POST /upload` di `document_router.py` menyaring nama file dengan `secure_filename(file.filename)` (mengubah spasi/tanda kurung menjadi `_`) sebelum menyimpannya ke koleksi ChromaDB `smartai_uploads`. Namun `ChatArea.tsx` di branch ML menyimpan `setActiveAttachment(file.name)` (nama mentah ber-spasi), sehingga `get_user_document_text(user_id, attachment)` gagal menemukan dokumen di ChromaDB (`""`) setiap kali siswa mengunggah PDF yang namanya memiliki spasi.
   - **Revisi Diterapkan:** Mengubah `ChatArea.tsx` agar memakai `setActiveAttachment(data.filename || file.name)` dan menambahkan fallback pencocokan nama tersanitasi di `get_user_document_text()`.

7. **`[CRITICAL-07]` Kesalahan Pemilihan Rumus Barisan & Halusinasi Aritmatika pada Model 3B (`feature_engineering.py` & `rag.py`):**
   - **Akar Masalah:** Ketika siswa menanyakan *"Suku ke-48 dari barisan bilangan 3, 10, 17, 24, 31..."* tanpa menulis kata *"aritmetika"*, chunk `Barisan Geometri` ($u_n = ar^{n-1}$) muncul di urutan pertama RAG karena teksnya lebih pendek, membuat LLM 3B salah menggunakan rumus geometri ($\frac{10}{3} = \frac{17}{10} \Rightarrow r=6$). Selain itu, teks hasil *copy-paste* PDF seperti `( 7 5)( 7 5) + −` kehilangan simbol akar $\sqrt{}$.
   - **Revisi Diterapkan:** Membangun penganalisis simbolik & numerik deterministik `analyze_math_problem_hint()` di `backend/data_science/feature_engineering.py` yang mendeteksi jenis barisan (selisih tetap $b$ vs rasio tetap $r$), sistem dua suku diketahui ($u_p, u_q$), determinan matriks $2\times 2$, serta rekonstruksi bentuk akar sekawan dari PDF, lalu memperkaya `search_query` RAG dan menyertakan blok verifikasi perhitungan eksak.

---

## 2. Hasil Eksekusi Deliverables Data Scientist (Tahap 3)

Seluruh modul Data Science telah diimplementasikan di [`backend/data_science/`](../backend/data_science/) dan dieksekusi melalui [`backend/scripts/run_ds_pipeline.py`](../backend/scripts/run_ds_pipeline.py) dengan laporan lengkap di [`backend/evaluation/ds_evaluation_report.json`](../backend/evaluation/ds_evaluation_report.json):

### 2.1 Exploratory Data Analysis (EDA) & Data Profiling (`eda_profiling.py`)
- **Total Chunks Kurikulum:** **3.179 chunks** dari **28 bab aktif** (+ 1 file ringkasan fallback `sma_m4thlab_curriculum.md`, seluruh **29/29 file lulus audit Markdown 100%**).
- **Distribusi per Kelas:** Kelas 10: **1.713 chunks** (53,9%), Kelas 11: **1.004 chunks** (31,6%), Kelas 12: **200 chunks** (6,3%), Tambahan (Logika): **262 chunks** (8,2%).
- **Distribusi Jalur:** Matematika Umum (Wajib): **2.289 chunks** (72,0%) vs Matematika Tingkat Lanjut (Peminatan): **890 chunks** (28,0%).
- **Distribusi Tingkat Kesulitan:** Mudah: **1.257 chunks** (39,5%), Sedang: **1.818 chunks** (57,2%), Sulit: **104 chunks** (3,3%).
- **Statistik Panjang Karakter & Token:**
  - Karakter: $\mu = 727{,}54$, $\sigma = 219{,}79$, Median $= 736{,}0$, $\text{IQR} = 338{,}0$ ($Q_1 = 570$, $Q_3 = 908$), $P_{95} = 1.057{,}0$, $\min = 144$, $\max = 1.203$.
  - Token: $\mu = 103{,}54$, $\sigma = 33{,}60$, Median $= 103{,}0$, $\text{IQR} = 48{,}0$, $P_{95} = 158{,}0$.
  - **Outlier Karakter (Tukey $1{,}5\times\text{IQR}$ fence $[63, 1.415]$):** **0 outlier (0,00%)**.
- **Rasio Kelengkapan LaTeX & Langkah Penyelesaian (CoT):**
  - Cakupan chunk berformula LaTeX: **88,49%** (**9.721** blok display `$$...$$` + **22.893** rumus inline `$...$`).
  - Cakupan langkah penalaran bertahap (*step-by-step reasoning*): **71,72%**.
  - Cakupan contoh soal terpecahkan (*worked examples*): **43,25%**.
- **Deteksi Class Imbalance:**
  - **Chapter Imbalance Ratio ($\max/\min$):** **61,0x** (`Sistem Persamaan dan Pertidaksamaan Linear`: 488 chunks vs `Induksi Matematika` & `Dimensi Tiga`: 8 chunks), Gini Coefficient $= 0{,}6150$, Normalized Entropy $= 0{,}7965$.

### 2.2 Data Quality & Statistical Validation (`validation.py`)
- **Validasi Skema Pydantic v2 (`CurriculumChunkSchema`):** **3.179 / 3.179 valid (100,00%)**, `schema_error_count = 0`, `duplicate_id_count = 0`.
- **5 Statistical Assertions:** Semuanya `True` (`total_chunks_min_1000`, `zero_schema_or_latex_errors`, `zero_duplicate_chunk_ids`, `all_core_grades_covered_10_11_12`, `mean_chunk_length_in_bounds_250_1200`).

### 2.3 Stratified Splitting & Zero Data Leakage Audit (`stratified_split.py`)
- **Golden Dataset (`backend/evaluation/golden_dataset.json`):** **60 item** (50 soal Matematika SMA mencakup seluruh 28 bab Kelas 10/11/12/Tambahan & tingkat kesulitan Mudah/Sedang/Sulit + 10 prompt jebakan/out-of-scope/jailbreak).
- **Stratified Split (`60% / 20% / 20%`, `seed=42`):** Train = **38**, Validation = **11**, Test = **11**.
- **Zero Data Leakage Proof:** `leakage_free = True` (irisan ID = `0`, irisan SHA-256 normalized text = `0` di seluruh pasangan `train_val`, `train_test`, dan `val_test`, serta di seluruh 5 fold Cross-Validation).

### 2.4 Comprehensive Retrieval & Model Evaluation (`evaluation_framework.py`)
- **Retrieval Metrics (ChromaDB `smartai_knowledge`, 3.179 chunks):**
  - **Recall@1:** **98,00%**
  - **Recall@3:** **100,00%**
  - **Recall@5:** **100,00%**
  - **MRR (Mean Reciprocal Rank):** **0,9900**
  - **NDCG@5:** **0,9904**
  - **5-Fold Stratified Cross-Validation Recall@5:** **100,00% $\pm$ 0,00%** (MRR $= 0{,}9900 \pm 0{,}0200$)
- **MathAI Generation & Guardrail Metrics (Golden Dataset $N=60$):**
  - **Final Answer Accuracy:** **100,00%**
  - **Step-by-Step Reasoning / CoT Fidelity:** **100,00%**
  - **Formatting & LaTeX Validity:** **100,00%**
  - **Guardrail Trap Rejection Accuracy ($N=10$ traps):** **100,00%**
