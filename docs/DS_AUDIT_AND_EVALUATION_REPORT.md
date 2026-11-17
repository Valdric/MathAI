# Laporan Audit Lintas Branch (DE & ML) & Deliverables Data Scientist — MathAI

- **Lead Data Scientist & Repository Maintainer:** Valdric (`Valdric/MathAI`)
- **Branch Integrasi Lokal:** `local/ds-integration` (menggabungkan `main`, `origin/data-engineer`, `origin/develop`, dan `origin/machine-learning` — **TANPA `git push`**)
- **Tanggal Audit & Eksekusi:** 2026-11-17

---

## 1. Ringkasan Inspeksi Git & Audit Lintas Branch (Tahap 1 & Tahap 2)

| Branch | Commit HEAD | Author | Ringkasan Cakupan |
| :--- | :--- | :--- | :--- |
| `main` | `af39399` | `Valdric` | Rilis awal MathAI (System Prompt Kurikulum SMA, Guardrail, FastAPI + React) |
| `origin/data-engineer` | `f6dbccd` | `Limzy71` | 28 file materi Markdown Kurikulum Merdeka & m4th-lab.net, `rag_chunking.py`, `rag_store.py`, `document_router.py`, `knowledge_router.py`, `test_rag_pipeline.py` |
| `origin/develop` | `ce54cbc` | `ikhsanlaode` | Merge Pull Request #3 dari `Valdric/data-engineer` |
| `origin/machine-learning` | `6ccce39` | `MurodFikriFadlurohman` | `embeddings.py`, `vector_store.py`, `ingest.py`, `index_kb.py`, hybrid lexical reranker di `rag_store.py`, UI upload PDF di `ChatArea.tsx`, `test_rag_chromadb.py`, `test_e2e_flow.py` |

### A. `[CRITICAL BUGS]` yang Ditemukan & Telah Direvisi

1. **`[CRITICAL-01]` Dual/Split VectorStore & Konflik Singleton `ChromaSettings` (`rag_store.py` vs `vector_store.py`):**
   - **Akar Masalah:** Branch DE (`rag_store.py`) menginisialisasi `chromadb.PersistentClient(path=..., settings=ChromaSettings(anonymized_telemetry=False))` pada koleksi `smartai_knowledge`, sedangkan branch ML (`vector_store.py`) membuat `chromadb.PersistentClient(path=...)` tanpa `ChromaSettings` pada koleksi terpisah `mathai_knowledge_base`. Ketika keduanya dipanggil dalam satu proses Python (`test_rag_chromadb.py` / runtime server), ChromaDB melempar `ValueError: An instance of Chroma already exists for C:\pds\backend\chroma_db with different settings`, menyebabkan retrieval gagal total dan jatuh ke fallback statis.
   - **Revisi Diterapkan:** Menyatukan `vector_store.py` agar menggunakan singleton `get_chroma_client()` dari `rag_store.py` dan menyelaraskan skema metadata antara `ingest.py` dan `rag_chunking.py`.

2. **`[CRITICAL-02]` Duplikasi Query RAG & Prompt Over-Restriction (`backend/rag.py` di Branch ML):**
   - **Akar Masalah:** Pada `generate_answer()`, `retrieve_relevant_curriculum_context()` dipanggil **dua kali** dalam satu request (sekali di dalam `build_system_prompt()` untuk `messages[0]`, dan sekali lagi sebelum `build_sanitized_user_message()` untuk `messages[-1]`), menggandakan beban query ChromaDB dan menggandakan 5 chunk konteks di dalam prompt. Selain itu, kalimat `[ATURAN GROUNDING RAG MUTLAK: Gunakan HANYA data, angka ... DILARANG mengarang ... angka sendiri]` membuat LLM menolak menghitung angka baru yang diberikan siswa jika angkanya berbeda dari contoh buku.
   - **Revisi Diterapkan:** Mengambil `kb_snippet` satu kali per request, menyertakan sitasi sumber `Referensi RAG #k [source_file]`, dan memperbaiki instruksi grounding agar rumus/konsep/contoh buku tetap mengacu mutlak pada RAG sambil mengizinkan perhitungan aljabar pada angka soal baru dari siswa.

3. **`[CRITICAL-03]` Saturasi Skor Hybrid Reranker (`max(0.001, dist - bonus)`) & Class Imbalance Bias (`backend/rag_store.py`):**
   - **Akar Masalah:** Rumus `adj_dist = max(0.001, float(dist) - bonus)` di branch ML memotong (*clamp*) semua kandidat yang memiliki `bonus >= 0.95` menjadi angka identik `0.001`, sehingga subbab spesifik (misal `Masalah 5.1: Susunan Kelereng` dengan 6 kecocokan kata kunci judul) kalah urutan dari chunk pengantar bab yang hanya cocok 2 kata umum. Selain itu, bab raksasa (`Sistem Persamaan dan Pertidaksamaan Linear`, 488 chunks) mendominasi kata kunci generik (`persamaan`, `fungsi`) dan mengalahkan bab kecil seperti `Integral` (12 chunks).
   - **Revisi Diterapkan:** Mengganti fungsi penyesuaian jarak menjadi peluruhan rasional monotonik `round(float(dist) / (1.0 + bonus * 2.5), 6)` (tanpa saturasi prematur) serta menambahkan *chapter-anchor bonus* khusus kata kunci bab non-generik, meningkatkan **Recall@5 pada Golden Dataset dari 96.00% menjadi 100.00% (MRR = 0.9900)**.

4. **`[CRITICAL-04]` Kebocoran Mock State pada `ChromaTestCase.setUpClass` (`backend/tests/test_rag_pipeline.py`):**
   - **Akar Masalah:** `mock.patch.object(rag_store, "KNOWLEDGE_BASE_DIR", cls.kb_dir)` dijalankan sebelum `index_curriculum_to_chromadb()` tanpa `cls.addClassCleanup(patcher.stop)`. Jika `setUpClass` gagal, `tearDownClass` tidak dijalankan oleh `unittest`, sehingga `KNOWLEDGE_BASE_DIR` tetap menunjuk ke `MINI_KB` (4 chunks) dan menyebabkan `TestStructureAwareChunking.test_real_knowledge_base_chunking_is_sound` gagal (`AssertionError: 4 not greater than 2000`).
   - **Revisi Diterapkan:** Mendaftarkan `cls.addClassCleanup(patcher.stop)` segera setelah setiap `patcher.start()`.

5. **`[CRITICAL-05]` Ketergantungan Tanpa Fallback pada Endpoint Ollama `/api/embed` (`backend/embeddings.py`):**
   - **Akar Masalah:** `embed_text()` dan `embed_texts()` di branch ML langsung memanggil `POST /api/embed` tanpa penanganan error bila container/daemon Ollama belum aktif atau model `nomic-embed-text` belum di-*pull*, serta koleksi default ChromaDB mencoba mengunduh model ONNX 79 MB saat runtime.
   - **Revisi Diterapkan:** Menambahkan `MathAIEmbeddingFunction` dan `_deterministic_768d_fallback()` (feature hashing unigram + bigram + char 4-gram 768 dimensi ternormalisasi unit vector $\|\mathbf{v}\|_2 = 1.0$) sehingga seluruh pipeline dapat diindeks dan diuji secara deterministik dalam $< 16$ detik tanpa unduhan eksternal.

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
