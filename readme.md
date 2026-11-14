# MathAI — Asisten AI Matematika SMA

[![Repository](https://img.shields.io/badge/GitHub-Valdric%2FMathAI-10b981?style=flat-square&logo=github)](https://github.com/Valdric/MathAI)
[![Curriculum](https://img.shields.io/badge/Curriculum-m4th--lab.net%20(SMA)-059669?style=flat-square)](https://www.m4th-lab.net/materi?level=sma)
[![Model](https://img.shields.io/badge/Ollama-llama3.2--math-0f172a?style=flat-square)](./Modelfile)

## 1. Deskripsi Proyek

**MathAI** adalah aplikasi asisten dan tutor kecerdasan buatan (AI) yang dikhususkan secara mutlak untuk materi **Matematika Sekolah Menengah Atas (SMA)** di Indonesia (Kelas X, XI, dan XII). Sistem ini dirancang mengacu pada struktur materi Kurikulum Nasional (**Kurikulum 2013 & Kurikulum Merdeka**) sebagaimana tersedia pada repositori pembelajaran **[m4th-lab.net](https://www.m4th-lab.net/materi?level=sma)**.

MathAI membimbing siswa menyelesaikan persoalan matematika secara sistematis (*step-by-step*) mulai dari identifikasi materi, rumus dasar, penjabaran aljabar, hingga kesimpulan akhir dengan dukungan penuh notasi matematika **LaTeX** (`$...$` dan `$$...$$`), serta dilengkapi protokol keamanan berlapis (*Guardrails Mutlak*) untuk menolak topik di luar Matematika SMA.

---

## 2. Cakupan Materi (Knowledge Base `m4th-lab.net`)

Sumber kebenaran kurikulum (*grounding scope*) disimpan pada [`backend/knowledge_base/sma_m4thlab_curriculum.md`](./backend/knowledge_base/sma_m4thlab_curriculum.md) yang merujuk langsung ke **[https://www.m4th-lab.net/materi?level=sma](https://www.m4th-lab.net/materi?level=sma)**:

### A. Matematika Wajib (Umum) — Kelas X, XI, dan XII
- **Eksponen & Logaritma Dasar:** Sifat bilangan berpangkat, bentuk akar, merasionalkan penyebut, dan sifat-sifat logaritma.
- **Nilai Mutlak:** Persamaan dan pertidaksamaan nilai mutlak linear satu variabel.
- **SPLTV & SPtLDV:** Sistem Persamaan Linear Dua/Tiga Variabel (SPLDV, SPLTV) serta Sistem Pertidaksamaan Dua Variabel (Linear-Kuadrat & Kuadrat-Kuadrat).
- **Fungsi:** Fungsi Linear, Fungsi Kuadrat, Fungsi Rasional, Fungsi Komposisi $(f \circ g)(x)$, dan Fungsi Invers $f^{-1}(x)$.
- **Trigonometri Dasar:** Perbandingan trigonometri segitiga siku-siku, sudut istimewa, sudut berelasi di 4 kuadran, Aturan Sinus, Aturan Cosinus, Luas Segitiga, dan Grafik Fungsi Trigonometri.
- **Induksi Matematika & Program Linear:** Pembuktian induksi matematika, model matematika, Daerah Himpunan Penyelesaian (DHP), dan nilai optimum (uji titik pojok & garis selidik).
- **Matriks & Transformasi Geometri:** Operasi matriks, determinan & invers matriks ($2\times 2$ dan $3\times 3$), penyelesaian SPL dengan matriks, serta Translasi, Refleksi, Rotasi, Dilatasi, dan Komposisi Transformasi.
- **Barisan & Deret:** Barisan dan Deret Aritmetika & Geometri, Deret Geometri Tak Hingga, Pertumbuhan, Peluruhan, Bunga Majemuk, dan Anuitas.
- **Limit, Turunan & Integral Fungsi Aljabar:** Limit fungsi aljabar, turunan fungsi aljabar (aturan rantai, persamaan garis singgung, interval naik/turun, nilai stasioner/ekstrem), serta integral tak tentu dan integral tentu fungsi aljabar.
- **Dimensi Tiga (Geometri Ruang):** Jarak titik ke titik, titik ke garis, titik ke bidang, serta sudut antara garis dan bidang pada bangun ruang.
- **Statistika & Peluang:** Statistika deskriptif data tunggal & berkelompok (Mean, Median, Modus, Kuartil, Desil, Jangkauan, Simpangan Rata-rata, Ragam/Varians, Simpangan Baku), Kaidah Pencacahan (Aturan Perkalian, Permutasi, Kombinasi), serta Peluang Kejadian Majemuk & Bersyarat.

### B. Matematika Peminatan (Tingkat Lanjut) — Kelas X, XI, dan XII
- **Fungsi, Persamaan & Pertidaksamaan Eksponensial dan Logaritma Lanjut.**
- **Vektor ($\mathbb{R}^2$ dan $\mathbb{R}^3$):** Operasi aljabar vektor, panjang vektor, perkalian titik (*dot product*), perkalian silang (*cross product*), sudut antarvektor, dan proyeksi ortogonal vektor.
- **Persamaan Trigonometri & Trigonometri Analitik:** Persamaan trigonometri dasar & bentuk $a\cos x + b\sin x = c$, rumus jumlah dan selisih dua sudut, sudut rangkap/paruh, serta identitas trigonometri.
- **Polinomial (Suku Banyak):** Operasi suku banyak, nilai polinomial (Substitusi & Skema Horner), pembagian suku banyak, Teorema Sisa, Teorema Faktor, dan Teorema Vieta.
- **Irisan Kerucut & Lingkaran:** Persamaan lingkaran pusat $(0,0)$ dan $(a,b)$, bentuk umum, kedudukan titik dan garis terhadap lingkaran, serta Persamaan Garis Singgung Lingkaran (PGSL).
- **Limit Fungsi Trigonometri & Limit di Ketakhinggaan:** Limit trigonometri dasar & lanjut, serta limit di ketakhinggaan fungsi rasional dan irasional.
- **Turunan Fungsi Trigonometri & Aplikasi Integral:** Turunan fungsi trigonometri (aturan rantai, titik stasioner, kecekungan), teknik integral substitusi & parsial, luas daerah, dan volume benda putar.
- **Distribusi Peluang (Statistika Inferensial):** Variabel acak diskrit/kontinu, Distribusi Peluang Binomial (Bernoulli), dan Distribusi Normal ($Z$-score).

---

## 3. Arsitektur Sistem & Keamanan Guardrail

```text
+-------------------------------------------------------------------+
|                   Frontend (React 19 + TypeScript)                |
|        Tailwind CSS • Zustand • React Markdown • KaTeX Math       |
+---------------------------------+---------------------------------+
                                  | REST API (JSON)
                                  v
+-------------------------------------------------------------------+
|                    Backend (Python FastAPI)                       |
|  1. System Prompt Lock (messages[0]) + KB sma_m4thlab_curriculum  |
|  2. Context Window Limiter (Maksimal 6 Pesan Riwayat Terakhir)    |
|  3. Sandwich Defense pada Input Pesan Terakhir Siswa              |
+---------------------------------+---------------------------------+
                                  | HTTP POST /api/chat (temp = 0.2)
                                  v
+-------------------------------------------------------------------+
|              AI Engine: Ollama (Model: llama3.2-math)             |
|       Dikonfigurasi melalui Modelfile berbasis llama3.2:3b        |
+-------------------------------------------------------------------+
```

- **Frontend (`frontend/`):** Dibangun menggunakan **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, **Zustand**, serta **Remark Math + Rehype KaTeX** untuk merender ekspresi matematika secara *real-time*.
- **Backend (`backend/`):** Dibangun menggunakan **Python FastAPI** dan **SQLAlchemy**. Modul [`backend/rag.py`](./backend/rag.py) mengintegrasikan Knowledge Base [`sma_m4thlab_curriculum.md`](./backend/knowledge_base/sma_m4thlab_curriculum.md) serta menerapkan 3 lapisan keamanan:
  1. **Parameter `temperature = 0.2`:** Menjaga perhitungan matematis tetap deterministik dan patuh pada *guardrail*.
  2. **Sandwich Defense:** Menyisipkan pengingat instruksi sistem tepat sebelum pertanyaan siswa pada elemen pesan terakhir.
  3. **Context Window Terbatas (`MAX_HISTORY_MESSAGES = 6`):** Mengunci *System Prompt* di indeks ke-0 (`messages[0]`) dan membatasi riwayat percakapan maksimal 6 pesan terakhir untuk mencegah *context stuffing*.
- **AI Engine (`Modelfile`):** Menggunakan **Ollama** dengan model kustom `llama3.2-math` (diturunkan dari `llama3.2:3b`).

---

## 4. Cara Instalasi dan Menjalankan Proyek Secara Lokal

### Prasyarat
- **Node.js** (v18+) & `npm`
- **Python** (v3.10+)
- **Ollama** (lokal atau melalui **Docker**)

### Langkah 1: Clone Repositori
```bash
git clone https://github.com/Valdric/MathAI.git
cd MathAI
```

### Langkah 2: Build Model Ollama (`llama3.2-math`)
Pastikan layanan Ollama aktif di port `11434`, lalu buat model `llama3.2-math` dari [`Modelfile`](./Modelfile):
```bash
ollama pull llama3.2:3b
ollama create llama3.2-math -f Modelfile
```
*(Opsional — Jika menjalankan Ollama di dalam container Docker bernama `ollama`):*
```bash
docker cp Modelfile ollama:/tmp/Modelfile
docker exec ollama ollama create llama3.2-math -f /tmp/Modelfile
```

### Langkah 3: Konfigurasi & Jalankan Backend (FastAPI)
```bash
cd backend
python -m venv venv

# Aktivasi virtual environment (Windows):
venv\Scripts\activate
# Aktivasi virtual environment (macOS / Linux):
source venv/bin/activate

pip install -r requirements.txt
```
Buat file `.env` di dalam direktori `backend/`:
```env
DATABASE_URL=sqlite:///./smartai.db
JWT_SECRET=supersecretkey-mathai-2026
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2-math
```
Jalankan server backend FastAPI:
```bash
uvicorn api.index:app --host 127.0.0.1 --port 8000 --reload
```

### Langkah 4: Instalasi & Jalankan Frontend (React + Vite)
Buka terminal baru dan jalankan:
```bash
cd frontend
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```
Buka browser dan akses **http://127.0.0.1:5173**.

---

## 5. Lisensi dan Author

- **Author / Maintainer:** **Valdric** ([https://github.com/Valdric](https://github.com/Valdric))
- **Repository:** [https://github.com/Valdric/MathAI](https://github.com/Valdric/MathAI)
- **Referensi Kurikulum:** [m4th-lab.net — Materi Matematika SMA](https://www.m4th-lab.net/materi?level=sma)
- **Lisensi:** MIT License — Copyright (c) 2026 **Valdric**.
