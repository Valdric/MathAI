---
title: "Materi Terapan Turunan Fungsi Aljabar dan Optimasi Biaya"
kelas: "11"
bab: "Turunan Fungsi Aljabar"
kurikulum: "Kurikulum Merdeka SMA"
penyusun: "Tim Data Engineer MathAI"
---

# Terapan Turunan Fungsi Aljabar dan Masalah Optimasi

## A. Konsep Dasar Turunan dan Laju Perubahan
Turunan pertama dari suatu fungsi $f(x)$ pada titik $x = c$ dinotasikan dengan $f'(c)$ atau $\frac{df}{dx}$, yang merepresentasikan laju perubahan sesaat dari fungsi tersebut.

Secara formal, turunan didefinisikan sebagai nilai limit fungsi:
$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

### 1. Aturan Dasar Diferensiasi
Untuk sembarang konstanta $k \in \mathbb{R}$ dan bilangan bulat $n$:
1. **Turunan Konstanta:** 
   $$\frac{d}{dx}(k) = 0$$
2. **Aturan Pangkat (Power Rule):** 
   $$\frac{d}{dx}(x^n) = n \cdot x^{n-1}$$
3. **Aturan Perkalian Skalar:** 
   $$\frac{d}{dx}(k \cdot f(x)) = k \cdot f'(x)$$
4. **Aturan Rantai (Chain Rule):**
   Jika $y = f(u)$ dan $u = g(x)$, maka:
   $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

---

## B. Titik Stasioner, Nilai Ekstrim, dan Uji Turunan Kedua

### 1. Syarat Keberadaan Titik Stasioner
Titik stasioner suatu kurva $y = f(x)$ tercapai apabila gradien garis singgung kurva bernilai nol:
$$f'(x) = 0$$

Nilai $x$ yang memenuhi $f'(x) = 0$ disebut sebagai **bilangan kritis** atau **titik kritis**.

### 2. Uji Turunan Kedua untuk Jenis Titik Stasioner
Misalkan $x = c$ adalah titik kritis di mana $f'(c) = 0$:
1. **Titik Balik Maksimum Lokal:**
   Jika $f''(c) < 0$, maka titik $(c, f(c))$ merupakan titik balik maksimum.
2. **Titik Balik Minimum Lokal:**
   Jika $f''(c) > 0$, maka titik $(c, f(c))$ merupakan titik balik minimum.
3. **Uji Gagal / Titik Belok Potensial:**
   Jika $f''(c) = 0$, jenis stasioner harus diuji menggunakan perubahan tanda turunan pertama $f'(x)$.

---

## C. Contoh Soal Pembahasan Khusus: Optimasi Biaya Produksi

### Soal Penerapan SMA (Kasus Industri Mandiri)
Sebuah perusahaan manufaktur memproduksi $x$ unit kalkulator edukasi setiap jam. Fungsi biaya total per jam dirumuskan dengan:
$$C(x) = 2x^3 - 36x^2 + 210x + 500$$
*(dalam satuan puluh ribu rupiah)*

**Pertanyaan:**
1. Tentukan fungsi biaya marginal $MC(x) = C'(x)$!
2. Tentukan jumlah unit produksi $x$ agar biaya marginal mencapai nilai paling minimum!
3. Berapakah nilai biaya marginal minimum tersebut?

---

### Langkah Penyelesaian Terstruktur (Step-by-Step Solution)

#### Langkah 1: Menentukan Fungsi Biaya Marginal $MC(x)$
Biaya marginal merupakan turunan pertama dari fungsi biaya total $C(x)$:
$$MC(x) = C'(x) = \frac{d}{dx}(2x^3 - 36x^2 + 210x + 500)$$
Terapkan aturan pangkat untuk setiap suku:
$$MC(x) = 2(3x^2) - 36(2x) + 210(1) + 0$$
$$MC(x) = 6x^2 - 72x + 210$$

#### Langkah 2: Menentukan Nilai Minimum Biaya Marginal
Untuk meminimumkan fungsi $MC(x)$, kita turunkan fungsi $MC(x)$ terhadap $x$ dan samakan dengan nol ($MC'(x) = 0$):
$$MC'(x) = \frac{d}{dx}(6x^2 - 72x + 210) = 12x - 72$$
Syarat stasioner biaya marginal:
$$12x - 72 = 0 \implies 12x = 72 \implies x = \frac{72}{12} = 6$$

Uji turunan kedua untuk memastikan nilai minimum:
$$MC''(x) = \frac{d}{dx}(12x - 72) = 12$$
Karena $MC''(6) = 12 > 0$, maka terbukti bahwa pada $x = 6$ unit, biaya marginal mencapai nilai **minimum absolut**.

#### Langkah 3: Menghitung Nilai Biaya Marginal Minimum
Substitusikan nilai kritis $x = 6$ ke dalam fungsi $MC(x)$:
$$MC(6) = 6(6)^2 - 72(6) + 210$$
$$MC(6) = 6(36) - 432 + 210$$
$$MC(6) = 216 - 432 + 210 = -6$$

**Kesimpulan:**
Jumlah unit produksi agar biaya marginal minimum adalah **$x = 6$ unit**, dengan nilai biaya marginal minimum sebesar **$-6$ puluh ribu rupiah** (artinya laju penambahan biaya berkurang 60.000 rupiah pada kapasitas efisiensi puncak).

