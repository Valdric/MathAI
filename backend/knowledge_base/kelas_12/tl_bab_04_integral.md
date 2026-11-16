---
judul: "Integral"
kelas: "12"
fase: "F"
bab: "TL-4"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (10 bagian)"
---

# Bab TL-4 — Integral

> Kelas 12 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- (A) Integral Tak Tentu
  - Definisi Integral Tak Tentu
  - Sifat-sifat Integral Tak Tentu
- (B) Integral Tentu
  - Jumlahan Riemann
  - Integral Tentu
  - Sifat-sifat Integral Tentu
  - Teorema Dasar Kalkulus
- (C) Penerapan Integral
  - Luas Daerah pada Kurva
  - Bidang Ekonomi dan Bisnis
  - Bidang Fisika
  - Bidang Kesehatan

## (A) Integral Tak Tentu

### Definisi Integral Tak Tentu

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VIII Integral, subbab 8.1–8.3, Definisi 8.1 dan Contoh 8.5, hlm. 294–306.*

Integral tak tentu ditemukan sebagai **kebalikan dari turunan** (antiturunan). Semua fungsi yang hanya berbeda konstantanya, misalnya $F(x) = \frac{1}{4}x^4$, $\frac{1}{4}x^4 + 5$, dan $\frac{1}{4}x^4 - 8$, memiliki turunan yang sama, yaitu $x^3$. Karena itu, jika turunan tersebut diintegralkan, hasilnya kembali ke fungsi semula ditambah konstanta $c$.

Jika $F(x)$ adalah fungsi dengan $F'(x) = f(x)$, maka:

$$\int f(x)\,dx = F(x) + c$$

dengan $c$ konstanta. Nilai $c$ dapat ditentukan jika diketahui satu titik yang dilalui fungsi asal (nilai awal).

#### Contoh

Diberikan turunan fungsi berikut; tentukan integralnya.

a. $\displaystyle\int x^6\,dx = \frac{1}{7}x^7 + c$

b. $\displaystyle\int x\,dx = \frac{1}{2}x^2 + c$

c. $\displaystyle\int (x^4 + x^3)\,dx = \frac{1}{5}x^5 + \frac{1}{4}x^4 + c$

### Sifat-sifat Integral Tak Tentu

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VIII Integral, subbab 8.3 Rumus Dasar dan Sifat Dasar Integral Tak Tentu, Sifat 8.4–8.6, hlm. 306–316.*

1. **Rumus dasar:** untuk $n \neq -1$,
$$\int x^n\,dx = \frac{1}{n + 1}x^{n+1} + c, \qquad \int a x^n\,dx = \frac{a}{n + 1}x^{n+1} + c$$
2. **Perkalian dengan konstanta:** $\displaystyle\int k\,f(x)\,dx = k\int f(x)\,dx$
3. **Penjumlahan dan pengurangan:** integral tak tentu dari jumlah (atau selisih) beberapa fungsi sama dengan jumlah (atau selisih) integral tak tentu masing-masing fungsi:
$$\int [f_1(x) \pm f_2(x) \pm \cdots \pm f_n(x)]\,dx = \int f_1(x)\,dx \pm \int f_2(x)\,dx \pm \cdots \pm \int f_n(x)\,dx$$

#### Contoh

Tentukan $\displaystyle\int (3x^6 - 2x^2 + 1)\,dx$.

**Penyelesaian:**

$$\int (3x^6 - 2x^2 + 1)\,dx = \int 3x^6\,dx - \int 2x^2\,dx + \int 1\,dx = \frac{3}{7}x^7 - \frac{2}{3}x^3 + x + c$$

## (B) Integral Tentu

### Jumlahan Riemann

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab B.1 Jumlahan Riemann, hlm. 178–182.*

Luas daerah di bawah kurva $y = f(x)$ pada interval $[a, b]$ didekati dengan persegi panjang. Interval dipartisi menjadi $n$ subinterval

$$a = x_0 < x_1 < x_2 < \cdots < x_n = b, \qquad \Delta x_i = x_i - x_{i-1}$$

Pada tiap subinterval dipilih titik wakil $\bar{x}_i$, sehingga luas persegi panjang ke-$i$ adalah $A_i = f(\bar{x}_i)\,\Delta x_i$. Jumlah

$$\sum_{i=1}^{n} f(\bar{x}_i)\,\Delta x_i = f(\bar{x}_1)\Delta x_1 + f(\bar{x}_2)\Delta x_2 + \cdots + f(\bar{x}_n)\Delta x_n$$

dinamakan **Jumlahan Riemann**.

#### Contoh Soal 3.6

Diketahui $f(x) = x$ pada interval $[0, 7]$. Tentukan Jumlahan Riemann dengan 7 subinterval sama panjang, dengan titik wakil yang digunakan buku $\bar{x}_1 = 0{,}5;\ \bar{x}_2 = 1{,}5;\ \ldots;\ \bar{x}_7 = 6{,}5$.

Lebar tiap subinterval $\Delta x = \dfrac{7 - 0}{7} = 1$, sehingga

$$\sum_{i=1}^{7} f(\bar{x}_i)\,\Delta x = (0{,}5 + 1{,}5 + 2{,}5 + 3{,}5 + 4{,}5 + 5{,}5 + 6{,}5)(1) = 24{,}5$$

> Catatan: soal di buku menyebut "titik ujung kiri", tetapi titik wakil yang dipakai dalam penyelesaiannya (0,5; 1,5; …; 6,5) adalah titik tengah tiap subinterval.

### Integral Tentu

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab B.2 Integral Tentu, hlm. 183–188.*

Jika banyak partisi diperbesar sehingga $\Delta x_i \to 0$, limit Jumlahan Riemann

$$\lim_{\Delta x \to 0} \sum_{i=1}^{n} f(\bar{x}_i)\,\Delta x_i$$

disebut **integral tentu** $f$ pada interval $[a, b]$ dan ditulis

$$\int_a^b f(x)\,dx$$

#### Contoh Soal 3.7

Integral tentu $f(x) = x$ pada $[0, 7]$, ditentukan melalui limit Jumlahan Riemann, adalah

$$\int_0^7 x\,dx = 24{,}5$$

### Sifat-sifat Integral Tentu

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab B.3 Sifat-Sifat Integral Tentu, Sifat 3.10–3.15, hlm. 189–191.*

Jika $f$ dan $g$ dapat diintegralkan pada interval tertutup $[a, b]$ dan $k$ sebarang konstanta:

- **Sifat 3.10:** $\displaystyle\int_a^a f(x)\,dx = 0$
- **Sifat 3.11:** $\displaystyle\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$, untuk $a < b$
- **Sifat 3.12:** $\displaystyle\int_a^b kf(x)\,dx = k\int_a^b f(x)\,dx$
- **Sifat 3.13:** $\displaystyle\int_a^b \big(f(x) + g(x)\big)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$
- **Sifat 3.14:** $\displaystyle\int_a^b \big(f(x) - g(x)\big)\,dx = \int_a^b f(x)\,dx - \int_a^b g(x)\,dx$
- **Sifat 3.15:** jika $a < c < b$, maka $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$

### Teorema Dasar Kalkulus

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab B.4 Teorema Dasar Kalkulus, hlm. 191–200.*

#### Teorema Dasar Kalkulus I

Misalkan $f$ kontinu pada $[a, b]$ dan $x$ sebarang bilangan di dalam $[a, b]$. Jika $F$ didefinisikan oleh

$$F(x) = \int_a^x f(t)\,dt$$

maka $F'(x) = f(x)$.

#### Teorema Dasar Kalkulus II

Jika $f$ kontinu pada $[a, b]$ dan $F$ antiturunan $f$ pada $[a, b]$, maka

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

Buktinya memakai TDK I: $F(x) = \int_a^x f(t)\,dt + C$, sehingga $F(b) - F(a) = \int_a^b f(t)\,dt$ karena $\int_a^a f(t)\,dt = 0$.

#### Contoh Soal 3.9

$$\int_1^3 x^2\,dx = \left[\frac{1}{3}x^3\right]_1^3 = \frac{27}{3} - \frac{1}{3} = \frac{26}{3} = 8\frac{2}{3}$$

#### Contoh Soal 3.10

$$\int_1^5 (2x - 1)\,dx = \left[x^2 - x\right]_1^5 = (25 - 5) - (1 - 1) = 20$$

## (C) Penerapan Integral

### Luas Daerah pada Kurva

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab C.1 Luas Daerah pada Kurva, hlm. 204–207.*

Luas daerah dihitung sebagai limit jumlah luas persegi panjang dengan lebar $\Delta x_i$ dan tinggi $f(x_i)$, yaitu sebagai integral tentu.

#### Contoh Soal 3.13

Tentukan luas daerah di kuadran pertama yang dibatasi oleh $f(x) = x\sqrt{x^2 + 5}$, sumbu-$x$, dan garis $x = 2$.

$$A = \int_0^2 x\sqrt{x^2 + 5}\,dx = \left[\frac{1}{3}(x^2 + 5)^{3/2}\right]_0^2 = \frac{1}{3}\left(27 - 5\sqrt{5}\right)$$

Jadi, luas daerahnya $\dfrac{1}{3}\left(27 - 5\sqrt{5}\right)$ satuan luas.

### Bidang Ekonomi dan Bisnis

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab C.2, hlm. 207–209.*

#### Contoh Soal 3.14

Ponsel pintar model terbaru dipasarkan selama 5 tahun pertama. Banyak ponsel terjual pada tahun ke-$x$ sejak produksi pertama dimodelkan $y = 3.000\sqrt{x} + 1.000$, dengan $0 \le x \le 5$. Berapa jumlah penjualan selama 4 tahun pertama?

$$S = \int_0^4 \left(3.000\sqrt{x} + 1.000\right)dx = \left[2.000\,x^{3/2} + 1.000x\right]_0^4 = 2.000(8) + 1.000(4) = 20.000$$

Jadi, ponsel yang terjual selama 4 tahun pertama sebanyak 20.000 buah.

### Bidang Fisika

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab C.3, hlm. 209–211.*

#### Contoh Soal 3.15

Partikel berjarak $x$ meter dari titik asal dikenai gaya $(x^2 + 2x)$ N. Usaha untuk memindahkannya dari $x = 1$ ke $x = 3$:

$$W = \int_1^3 (x^2 + 2x)\,dx = \left[\frac{x^3}{3} + x^2\right]_1^3 = (9 + 9) - \left(\frac{1}{3} + 1\right) = \frac{50}{3} \text{ Joule}$$

Menurut Hukum Hooke, gaya untuk menahan pegas yang meregang $x$ meter dari panjang alaminya adalah $f(x) = kx$; usaha meregangkan pegas dihitung dengan $W = \int f(x)\,dx$ pada rentang regangan.

### Bidang Kesehatan

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 3 Integral, subbab C.4, hlm. 211–212.*

Buku menyajikan diskusi kelompok tentang proses penyembuhan luka: kecepatan penyembuhan (laju berkurangnya lebar luka) dinyatakan sebagai fungsi waktu, dan besar perubahan lebar luka dalam suatu selang waktu diperoleh dengan mengintegralkan fungsi kecepatan tersebut. Mekanisme penyembuhan luka berakhir pada fase *remodeling*, ketika jaringan sementara digantikan kulit yang kuat.
