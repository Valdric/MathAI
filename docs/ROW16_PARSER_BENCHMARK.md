# Row 16 - Uji Ekstraksi: pypdf vs Parser Alternatif vs Sumber Markdown

## A. Audit Sumber Markdown

- File diaudit: **29** | tanpa masalah: **28** | dengan catatan: **1**
- Total rumus LaTeX terdeteksi: **8804** blok display (`$$`) + **22299** inline (`$`)
- Cleaning menjaga seluruh rumus: **True**

| File | Karakter | FM | H1/H2/H3/H4 | `$$` | `$` | Unicode di luar math | Catatan |
|---|---:|:-:|:-:|---:|---:|---:|---|
| `knowledge_base/kelas_10/bab_01_eksponen_dan_logaritma.md` | 168,541 | ok | 1/3/15/25 | 1229 | 2247 | 0 | - |
| `knowledge_base/kelas_10/bab_02_barisan_dan_deret.md` | 16,160 | ok | 1/4/8/30 | 38 | 141 | 0 | - |
| `knowledge_base/kelas_10/bab_03_vektor_dan_operasinya.md` | 16,407 | ok | 1/6/8/26 | 22 | 197 | 0 | - |
| `knowledge_base/kelas_10/bab_04_trigonometri.md` | 17,581 | ok | 1/5/11/18 | 37 | 183 | 0 | - |
| `knowledge_base/kelas_10/bab_05_sistem_persamaan_dan_pertidaksamaan_linear.md` | 306,414 | ok | 1/5/8/25 | 1092 | 3352 | 0 | - |
| `knowledge_base/kelas_10/bab_06_persamaan_fungsi_dan_pertidaksamaan_kuadrat.md` | 272,695 | ok | 1/6/9/26 | 1824 | 4006 | 0 | - |
| `knowledge_base/kelas_10/bab_07_statistika.md` | 119,899 | ok | 1/8/19/26 | 77 | 681 | 0 | - |
| `knowledge_base/kelas_10/bab_08_peluang.md` | 6,777 | ok | 1/4/6/3 | 5 | 41 | 0 | - |
| `knowledge_base/kelas_10/bab_09_persamaan_dan_pertidaksamaan_nilai_mutlak.md` | 74,629 | ok | 1/6/8/17 | 720 | 1233 | 0 | - |
| `knowledge_base/kelas_11/bab_01_komposisi_fungsi_dan_fungsi_invers.md` | 106,116 | ok | 1/4/7/20 | 809 | 1523 | 0 | - |
| `knowledge_base/kelas_11/bab_02_lingkaran.md` | 6,189 | ok | 1/4/10/0 | 2 | 50 | 0 | - |
| `knowledge_base/kelas_11/bab_03_statistika_analisis_data_bivariat.md` | 9,300 | ok | 1/5/6/9 | 7 | 31 | 0 | - |
| `knowledge_base/kelas_11/bab_04_induksi_matematika.md` | 3,842 | ok | 1/3/5/0 | 4 | 50 | 0 | - |
| `knowledge_base/kelas_11/bab_05_polinomial.md` | 71,439 | ok | 1/7/13/46 | 353 | 1225 | 0 | - |
| `knowledge_base/kelas_11/bab_06_matriks.md` | 153,268 | ok | 1/7/15/153 | 503 | 1185 | 0 | - |
| `knowledge_base/kelas_11/bab_07_transformasi_geometri.md` | 10,859 | ok | 1/5/8/0 | 23 | 157 | 0 | - |
| `knowledge_base/kelas_11/bab_08_fungsi_dan_pemodelannya.md` | 201,038 | ok | 1/5/13/35 | 1766 | 2151 | 0 | - |
| `knowledge_base/kelas_12/bab_01_transformasi_fungsi.md` | 5,108 | ok | 1/5/5/0 | 6 | 69 | 0 | - |
| `knowledge_base/kelas_12/bab_02_investasi_dan_pinjaman.md` | 9,667 | ok | 1/7/12/0 | 20 | 36 | 0 | - |
| `knowledge_base/kelas_12/bab_03_kombinatorik_dan_peluang.md` | 13,738 | ok | 1/3/9/13 | 26 | 115 | 0 | - |
| `knowledge_base/kelas_12/bab_04_dimensi_tiga.md` | 4,404 | ok | 1/4/5/0 | 7 | 108 | 0 | - |
| `knowledge_base/kelas_12/bab_05_kekongruenan_dan_kesebangunan.md` | 2,455 | ok | 1/3/7/0 | 0 | 5 | 0 | - |
| `knowledge_base/kelas_12/tl_bab_01_geometri_analitik.md` | 10,207 | ok | 1/3/7/13 | 13 | 142 | 0 | - |
| `knowledge_base/kelas_12/tl_bab_02_limit.md` | 9,671 | ok | 1/5/10/6 | 12 | 121 | 0 | - |
| `knowledge_base/kelas_12/tl_bab_03_turunan_fungsi.md` | 13,895 | ok | 1/3/12/23 | 15 | 212 | 0 | - |
| `knowledge_base/kelas_12/tl_bab_04_integral.md` | 8,851 | ok | 1/4/10/11 | 17 | 72 | 0 | - |
| `knowledge_base/kelas_12/tl_bab_05_analisis_data_dan_peluang.md` | 11,694 | ok | 1/4/6/23 | 16 | 135 | 0 | - |
| `knowledge_base/sma_m4thlab_curriculum.md` | 13,095 | - | 1/2/6/0 | 0 | 166 | 0 | tanpa frontmatter |
| `knowledge_base/tambahan/logika_matematika.md` | 162,881 | ok | 1/13/12/178 | 161 | 2665 | 0 | - |

## B. Perbandingan Parser PDF (`raw_pdfs`)

_Tidak ada file PDF pada direktori tersebut, sehingga perbandingan pypdf vs PyMuPDF vs pdfplumber **belum dapat diukur pada data nyata**. Letakkan sampel PDF (termasuk PDF scan) lalu jalankan ulang skrip ini._

## C. Keputusan

- **Sumber utama RAG = Markdown (`.md`)**: rumus sudah berupa LaTeX yang tepat, hierarki heading tersedia untuk structure-aware chunking, dan metadata kelas/bab/fase tersedia di frontmatter. README materi juga mencatat bahwa rumus pada teks buku rusak saat diekstrak dari PDF.
- **PDF/DOCX hanya jalur unggahan siswa** (`POST /upload`). Parser bawaan: pypdf. PDF hasil scan (semua halaman kosong) ditolak dengan pesan jelas karena OCR belum didukung.
- Mengganti parser PDF default (mis. ke PyMuPDF) sebaiknya menunggu hasil tabel B pada PDF nyata. Catatan lisensi: PyMuPDF berlisensi AGPL.
