---
judul: "Statistika: Analisis Data Bivariat"
kelas: "11"
fase: "F"
bab: "3"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (6 bagian)"
---

# Bab 3 — Statistika: Analisis Data Bivariat

> Kelas 11 · Fase F · Matematika Umum

## Daftar Isi

- Data Bivariat
  - Data Kategorikal, Data Numerikal, dan Data Bivariat
  - Hubungan Dua Variabel Kategorikal
- (A) Diagram Pencar
  - Diagram Pencar dan Korelasi
- (B) Regresi Linear
  - Model Linear Terbaik (Best-fit) dan Pencilan
  - Regresi Linear dan Metode Kuadrat Terkecil
- (C) Analisis Korelasi
  - Korelasi Product Moment

## Data Bivariat

### Data Kategorikal, Data Numerikal, dan Data Bivariat

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 1 Analisis Data Bivariat, subbab A Data Kategorikal dan Numerikal dan subbab B Data Bivariat, hlm. 6–16.*

#### Data Kategorikal dan Data Numerikal

- **Data kategorikal** (data kualitatif) adalah data yang dikelompokkan ke dalam kategori, biasanya berbentuk kata-kata, misalnya jenis kelamin, jenis pekerjaan (PNS, swasta, wiraswasta), jenjang pendidikan, dan kota asal.
- **Data numerikal** (data kuantitatif) adalah data yang berbentuk angka, misalnya berat badan, diameter kepala, luas kelas, tekanan darah, dan jumlah tabungan.

Data numerikal dapat diubah menjadi data kategorikal dengan membuat kategori atau pengelompokan.

#### Data Bivariat

Di kelas X dipelajari **data univariat**, yaitu data yang hanya memiliki satu variabel. **Data bivariat** adalah data yang memiliki **dua variabel**. Analisis data bivariat memungkinkan kita mengidentifikasi dan menjelaskan hubungan antara dua variabel; hubungan ini disebut **asosiasi**. Pasangan variabelnya dapat berupa dua variabel kategorikal, dua variabel numerikal, atau satu kategorikal dan satu numerikal.

### Hubungan Dua Variabel Kategorikal

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 1 Analisis Data Bivariat, subbab C Hubungan antara Dua Variabel Kategorikal, hlm. 17–35.*

#### Tabulasi Silang

**Tabulasi silang** adalah cara menyajikan gabungan data dua variabel kategorikal dengan mencantumkan jumlah pengamatan untuk setiap kombinasi nilai kedua variabel. Tabulasi silang disebut juga **tabel silang** atau **tabel kontingensi**. Contohnya, survei 20 responden tentang jenis kelamin (laki-laki/perempuan) dan pilihan media sosial (W/L) dirangkum dalam tabel dua baris dan dua kolom. Data juga dapat disajikan dalam bentuk matriks (baris dan kolom).

#### Frekuensi Relatif dan Asosiasi

Untuk mengidentifikasi asosiasi antara dua variabel kategorikal, cermati kecenderungan data pada tabulasi silang, misalnya dengan frekuensi relatif (persentase) tiap baris.

**Eksplorasi 1.6.** Perusahaan obat memberikan tablet obat mual dan tablet bukan obat (plasebo) masing-masing kepada 100 sukarelawan acak:

| Jenis tablet | Tidak mual | Ringan | Sedang | Berat | Jumlah |
|---|---|---|---|---|---|
| Tablet obat | 41 | 38 | 16 | 5 | 100 |
| Plasebo | 17 | 30 | 38 | 15 | 100 |
| Jumlah | 58 | 68 | 54 | 20 | 200 |

Kelompok tablet obat lebih banyak berada pada kategori tidak mual dan ringan, sedangkan kelompok plasebo lebih banyak pada kategori sedang dan berat, sehingga ada asosiasi antara jenis tablet dan tingkat kemualan. Pertanyaan apakah tablet obat **menyebabkan** penurunan kemualan perlu dipertimbangkan dengan hati-hati, karena asosiasi tidak selalu berarti sebab-akibat.

## (A) Diagram Pencar

### Diagram Pencar dan Korelasi

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 1 Analisis Data Bivariat, subbab D.1–D.2 Diagram Pencar dan Korelasi, hlm. 36–51.*

Diagram pencar dipakai untuk melihat asosiasi antara dua variabel numerikal. Penempatan variabel perlu tepat:

- **Variabel independen** adalah variabel yang digunakan untuk memprediksi nilai variabel dependen; digambarkan pada sumbu-$x$.
- **Variabel dependen** adalah variabel yang nilainya dipengaruhi oleh variabel independen; digambarkan pada sumbu-$y$.

#### Arah, Bentuk, dan Tingkat Korelasi

**Korelasi** adalah pengukur hubungan dua variabel yang dinyatakan dengan tingkat hubungan antarvariabel. Dalam analisis korelasi tidak dipersoalkan variabel mana yang bergantung pada yang lain, sehingga tidak ada istilah variabel independen dan dependen.

Pada diagram pencar diperhatikan:

- **Arah tren**: korelasi positif, korelasi negatif, atau tidak berkorelasi.
- **Bentuk tren**: linear atau kurva (nonlinear).
- **Tingkat korelasi**: makin rapat titik-titik data membentuk suatu garis, makin kuat korelasinya; makin menyebar titik-titik dari garis, makin lemah korelasinya.

## (B) Regresi Linear

### Model Linear Terbaik (Best-fit) dan Pencilan

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 1 Analisis Data Bivariat, subbab D.3 Model Linear Terbaik (Best-fit), hlm. 52–58.*

Jika dua variabel numerikal menunjukkan korelasi linear (positif atau negatif), dapat digambar sebuah **garis lurus terbaik (best-fit)** yang mewakili semua data. Garis ini menggambarkan arah dan tren data sehingga dapat dipakai untuk **memprediksi** nilai variabel dependen.

Contoh data tinggi rata-rata anak usia 2–7 tahun:

| Umur (tahun) | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| Tinggi rata-rata (cm) | 91 | 99 | 104 | 112 | 119 | 126 |

Makin bertambah umur, makin bertambah tinggi badan. Namun, kesimpulan ini tidak berlaku sepanjang umur manusia, dan tidak tepat menyimpulkan bahwa umur menyebabkan tinggi badan.

#### Data Pencilan pada Garis Best-fit

Saat menggambar garis best-fit, mungkin ada data yang sangat tidak cocok dengan pola umumnya (pencilan). Pedomannya:

1. Pencilan yang **tidak mengubah** garis lurus boleh digunakan ataupun tidak.
2. Pencilan yang **mengubah** garis lurus **tetap digunakan**.
3. Pencilan yang **memunculkan korelasi** padahal data tidak berkorelasi **tidak digunakan**.

Buku juga menampilkan *Anscombe's Quartet*, yaitu empat kumpulan data yang statistiknya mirip tetapi diagram pencarnya sangat berbeda, sebagai pengingat bahwa data perlu selalu digambar.

### Regresi Linear dan Metode Kuadrat Terkecil

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 1 Analisis Data Bivariat, Pengayaan Regresi Linear, hlm. 66–71.*

Analisis **regresi linear** mencari garis regresi yang paling tepat terhadap titik-titik pada diagram pencar, yaitu garis yang memberikan deskripsi terbaik hubungan antara variabel independen dan dependen. Bentuk umumnya:

$$\hat{y} = a + bx$$

dibaca "regresi $y$ atas $x$", dengan $\hat{y}$ nilai variabel dependen yang diprediksi, $x$ nilai variabel independen, $a$ titik potong sumbu-$y$, dan $b$ gradien garis regresi.

#### Jumlah Kuadrat (Sum of Squares)

$$SS_{xy} = \sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y}) = \sum_{i=1}^{n} x_iy_i - \frac{\left(\sum x_i\right)\left(\sum y_i\right)}{n}$$

$$SS_{xx} = \sum_{i=1}^{n}(x_i - \bar{x})^2 = \sum_{i=1}^{n} x_i^2 - \frac{\left(\sum x_i\right)^2}{n}$$

Nilai $SS_{xy}$ dan $SS_{xx}$ hanyalah perhitungan sementara. Gradien dan titik potong garis regresi:

$$b = \frac{SS_{xy}}{SS_{xx}}$$

Garis regresi selalu melalui titik rata-rata $(\bar{x}, \bar{y})$, sehingga

$$\bar{y} = a + b\bar{x} \Rightarrow a = \bar{y} - b\bar{x}$$

#### Langkah Menentukan Persamaan Garis Regresi

1. Hitung $\bar{x}$ dan $\bar{y}$.
2. Hitung $SS_{xy}$ dan $SS_{xx}$.
3. Hitung $b = \dfrac{SS_{xy}}{SS_{xx}}$.
4. Hitung $a = \bar{y} - b\bar{x}$.
5. Tulis persamaan $\hat{y} = a + bx$, lalu gunakan untuk interpolasi atau ekstrapolasi.

**Eksplorasi 1.15** (data 12 siswa: rata-rata waktu bermedia sosial per hari dan nilai):

| Waktu (jam/hari) | 4,4 | 6,2 | 4,2 | 1,6 | 4,7 | 5,4 | 1,3 | 2,1 | 6,1 | 3,3 | 4,4 | 3,5 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Nilai | 81 | 55 | 78 | 92 | 68 | 55 | 90 | 82 | 67 | 72 | 68 | 84 |

Buku meminta siswa menggambar diagram pencar, lalu menentukan persamaan garis regresi dengan langkah-langkah di atas. Garis regresi juga dapat ditampilkan dengan aplikasi lembar kerja (menu *Insert → Scatter*, lalu *Trendline* linear dengan opsi *Display Equation on chart*).

## (C) Analisis Korelasi

### Korelasi Product Moment

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 1 Analisis Data Bivariat, Pengayaan Koefisien Korelasi, hlm. 72–76.*

Tingkat korelasi dinyatakan dengan **koefisien korelasi**. Yang paling umum adalah **Korelasi Product Moment** (Korelasi Pearson), dinamai menurut Karl Pearson, yang juga memperkenalkan istilah simpangan baku ($\sigma$).

Selain $SS_{xy}$ dan $SS_{xx}$, digunakan pula

$$SS_{yy} = \sum_{i=1}^{n}(y_i - \bar{y})^2 = \sum_{i=1}^{n} y_i^2 - \frac{\left(\sum y_i\right)^2}{n}$$

Koefisien korelasi product moment:

$$r = \frac{SS_{xy}}{\sqrt{SS_{xx}\,SS_{yy}}}, \qquad -1 \le r \le 1$$

#### Interpretasi Nilai $r$

- $r = 1$: korelasi positif sempurna; $r = -1$: korelasi negatif sempurna; $r = 0$: tidak berkorelasi linear.
- Makin dekat $|r|$ ke 1, makin kuat korelasinya; makin dekat $|r|$ ke 0, makin lemah.
- Tanda $r$ hanya menunjukkan arah. Misalnya $r = -0{,}97$ menunjukkan korelasi yang lebih kuat daripada $r = 0{,}62$.
