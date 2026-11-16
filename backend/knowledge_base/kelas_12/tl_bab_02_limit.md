---
judul: "Limit"
kelas: "12"
fase: "F"
bab: "TL-2"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (6 bagian)"
---

# Bab TL-2 — Limit

> Kelas 12 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- Konsep dan Sifat-sifat Limit
- Limit Fungsi Aljabar
- Limit Fungsi Trigonometri
- Kontinuitas Fungsi

## Konsep dan Sifat-sifat Limit

### Limit Kiri, Limit Kanan, dan Sifat-sifat Limit

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab A.1 Limit dan Kontinuitas Fungsi (a–b), hlm. 81–88.*

Sebelum Karl Weierstrass, konsep kalkulus seperti limit dan turunan belum memiliki fondasi yang ketat; Weierstrass merumuskan limit secara ketat seperti yang dipelajari sekarang.

Dalam contoh buku, nilai $f(x)$ didekati dari arah kiri dan kanan $x = 39$; keduanya menuju 1,6, sehingga limit $f(x)$ untuk $x$ mendekati 39 adalah 1,6.

#### Definisi Limit

Misalkan $f: \mathbb{R} \to \mathbb{R}$. Jika ketika $x$ mendekati $c$ (dari kiri maupun kanan) nilai $f(x)$ mendekati $L$, ditulis

$$\lim_{x \to c} f(x) = L$$

dibaca "limit $f(x)$ untuk $x$ mendekati $c$ sama dengan $L$". Limit ada jika limit kiri dan limit kanan bernilai sama.

#### Sifat-sifat Limit Fungsi

Misalkan $f$ dan $g$ mempunyai limit di $c$, $k$ konstanta, dan $n > 0$:

1. $\displaystyle\lim_{x \to c} k = k$ dan $\displaystyle\lim_{x \to c} x = c$
2. $\displaystyle\lim_{x \to c} kf(x) = k\lim_{x \to c} f(x)$
3. $\displaystyle\lim_{x \to c} \big(f(x) \pm g(x)\big) = \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x)$
4. $\displaystyle\lim_{x \to c} f(x)g(x) = \lim_{x \to c} f(x) \cdot \lim_{x \to c} g(x)$
5. $\displaystyle\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$, dengan $\displaystyle\lim_{x \to c} g(x) \neq 0$
6. $\displaystyle\lim_{x \to c} \big(f(x)\big)^n = \left(\lim_{x \to c} f(x)\right)^n$
7. $\displaystyle\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to c} f(x)}$, dengan $L = \displaystyle\lim_{x \to c} f(x) \ge 0$ jika $n$ genap

### Definisi Limit Fungsi

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VI Limit Fungsi, subbab 6.1 Konsep Limit Fungsi, Definisi 6.1 dan Contoh 6.1, hlm. 218–229.*

#### Definisi

Misalkan $f$ sebuah fungsi $f: \mathbb{R} \to \mathbb{R}$ dan misalkan $L$ dan $c$ anggota himpunan bilangan real.

$$\lim_{x \to c} f(x) = L$$

jika dan hanya jika $f(x)$ mendekati $L$ untuk semua $x$ mendekati $c$.

Catatan:

a. $\displaystyle\lim_{x \to c} f(x) = L$ dibaca "limit fungsi $f(x)$ untuk $x$ mendekati $c$ adalah $L$".

b. $f(x)$ mendekati $L$ ketika $x$ mendekati $c$, dengan $f$ terdefinisi pada selang yang memuat $c$, kecuali mungkin di $c$ sendiri.

#### Fungsi yang Tidak Memiliki Limit

Fungsi

$$f(x) = \begin{cases} x^2, & x \leq 1 \\ x + 1, & x > 1 \end{cases}$$

tidak memiliki limit pada saat $x$ mendekati 1: dari kiri, nilai $f(x)$ mendekati $1^2 = 1$, sedangkan dari kanan nilai $f(x)$ mendekati $1 + 1 = 2$.

#### Contoh: Gerak Lebah

Seekor lebah terbang mengikuti fungsi berikut (ketinggian $y = f(t)$ pada waktu $t$):

$$f(t) = \begin{cases} -5t^2 + 10t, & 0 \leq t \leq 1 \\ 5, & 1 \leq t \leq 2 \\ -5t + 15, & 2 \leq t \leq 3 \end{cases}$$

Analisis gerak lebah pada saat $t = 1$ dan $t = 2$.

**Penyelesaian:**

| $t$ | 0,7 | 0,8 | 0,9 | 0,99 | 0,999 | 1 | 1,001 | 1,01 | 1,1 | 1,2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $f(t)$ | 4,55 | 4,80 | 4,95 | 4,9995 | 5 | 5 | 5 | 5 | 5 | 5 |

| $t$ | 1,7 | 1,8 | 1,9 | 1,99 | 1,999 | 2 | 2,001 | 2,01 | 2,1 | 2,2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $f(t)$ | 5 | 5 | 5 | 5 | 5 | 5 | 4,995 | 4,95 | 4,5 | 4 |

Nilai $y$ mendekati 5 pada saat $t$ mendekati 1, dan juga mendekati 5 pada saat $t$ mendekati 2, baik dari kiri maupun dari kanan. Jadi:

$$\lim_{t \to 1} f(t) = 5 \qquad \text{dan} \qquad \lim_{t \to 2} f(t) = 5$$

### Sifat-Sifat Limit Fungsi

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VI Limit Fungsi, subbab 6.2 Sifat-Sifat Limit Fungsi, Sifat 6.1–6.8, hlm. 229–236.*

Buku menemukan sifat-sifat berikut melalui tabel pendekatan nilai fungsi dari kiri dan kanan. Misalkan $f$ dan $g$ fungsi yang mempunyai limit pada $x$ mendekati $c$, dan $k$ konstanta real:

1. **Limit konstanta:** $\displaystyle\lim_{x \to c} k = k$
2. **Limit fungsi identitas:** $\displaystyle\lim_{x \to c} x = c$
3. **Perkalian dengan konstanta:** $\displaystyle\lim_{x \to c} [k f(x)] = k \left[\lim_{x \to c} f(x)\right]$
4. **Penjumlahan dan pengurangan:** $\displaystyle\lim_{x \to c} [f(x) \pm g(x)] = \lim_{x \to c} f(x) \pm \lim_{x \to c} g(x)$
5. **Perkalian:** $\displaystyle\lim_{x \to c} [f(x) g(x)] = \left[\lim_{x \to c} f(x)\right]\left[\lim_{x \to c} g(x)\right]$
6. **Pembagian:** $\displaystyle\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$, dengan $\displaystyle\lim_{x \to c} g(x) \neq 0$
7. **Perpangkatan:** $\displaystyle\lim_{x \to c} [f(x)]^n = \left[\lim_{x \to c} f(x)\right]^n$
8. **Akar:** $\displaystyle\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to c} f(x)}$ (asalkan akarnya terdefinisi)

#### Contoh

Jika $f(x) = x$, tentukan $\displaystyle\lim_{x \to 1} f(x)$.

| $x$ | 0,5 | 0,9 | 0,99 | 0,999 | 1 | 1,001 | 1,01 | 1,1 | 1,5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $y = x$ | 0,5 | 0,9 | 0,99 | 0,999 | ? | 1,001 | 1,01 | 1,1 | 1,5 |

Jika $x$ mendekati 1 dari kiri maupun kanan, nilai $y$ mendekati 1. Jadi $\displaystyle\lim_{x \to 1} x = 1$.

Dengan sifat-sifat tersebut, misalnya $\displaystyle\lim_{x \to 1} 8x^3 = \lim_{x \to 1}(2x)^3 = \left[\lim_{x \to 1} 2x\right]^3 = 2^3 = 8$.

## Limit Fungsi Aljabar

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VI Limit Fungsi, subbab 6.3 Menentukan Nilai Limit Fungsi, Contoh 6.9–6.10, hlm. 237–241.*

Jika substitusi langsung menghasilkan bentuk tak tentu $\dfrac{0}{0}$, nilai limit dapat ditentukan dengan dua cara: (I) tabel pendekatan nilai fungsi, atau (II) faktorisasi.

### Contoh 1

Tentukan $\displaystyle\lim_{x \to 2} \frac{x^2 - 3x + 2}{x^2 - 4}$.

**Cara I (tabel pendekatan):**

| $x$ | 1,5 | 1,7 | 1,9 | 1,99 | 1,999 | 2 | 2,001 | 2,01 | 2,1 | 2,3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $y$ | 0,143 | 0,189 | 0,231 | 0,248 | 0,250 | $\frac{0}{0}$ | 0,250 | 0,252 | 0,268 | 0,302 |

Nilai fungsi mendekati 0,25 untuk $x$ mendekati 2.

**Cara II (faktorisasi):** $f(2) = \dfrac{0}{0}$ adalah bentuk tak tentu, sehingga:

$$\lim_{x \to 2} \frac{x^2 - 3x + 2}{x^2 - 4} = \lim_{x \to 2} \frac{(x - 2)(x - 1)}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{x - 1}{x + 2} = \frac{1}{4}$$

### Contoh 2

Tentukan $\displaystyle\lim_{x \to 1} \frac{x^4 - 1}{x^2 - 1}$.

**Cara I (tabel pendekatan):**

| $x$ | 0,7 | 0,8 | 0,9 | 0,99 | 0,999 | 1 | 1,001 | 1,01 | 1,1 | 1,2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $y$ | 1,49 | 1,64 | 1,81 | 1,98 | 2,00 | ? | 2,00 | 2,02 | 2,21 | 2,44 |

**Cara II (faktorisasi):**

$$\lim_{x \to 1} \frac{x^4 - 1}{x^2 - 1} = \lim_{x \to 1} \frac{(x^2 - 1)(x^2 + 1)}{x^2 - 1} = \lim_{x \to 1} (x^2 + 1) = 2$$

## Limit Fungsi Trigonometri

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab A.1.c Limit Fungsi Trigonometri, hlm. 88–95.*

### Sifat Dasar

$$\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad \lim_{x \to 0} \frac{x}{\sin x} = 1, \qquad \lim_{x \to 0} \frac{\tan x}{x} = 1, \qquad \lim_{x \to 0} \frac{x}{\tan x} = 1, \qquad \lim_{x \to 0} \cos x = 1$$

### Sifat-sifat Lainnya

$$\lim_{x \to 0} \frac{\sin ax}{bx} = \frac{a}{b}, \qquad \lim_{x \to 0} \frac{ax}{\sin bx} = \frac{a}{b}, \qquad \lim_{x \to 0} \frac{\tan ax}{bx} = \frac{a}{b}, \qquad \lim_{x \to 0} \frac{ax}{\tan bx} = \frac{a}{b}$$

$$\lim_{x \to 0} \frac{\sin ax}{\sin bx} = \frac{a}{b}, \qquad \lim_{x \to 0} \frac{\tan ax}{\tan bx} = \frac{a}{b}, \qquad \lim_{x \to 0} \frac{\sin ax}{\tan bx} = \frac{a}{b}, \qquad \lim_{x \to 0} \frac{\tan ax}{\sin bx} = \frac{a}{b}$$

### Contoh Soal 2.2

1. Dengan sifat $\displaystyle\lim_{x \to 0} \frac{\sin bx}{ax} = \frac{b}{a}$:

$$\lim_{x \to 0} \frac{\sin 3x}{2x} = \frac{3}{2}$$

2. Dengan substitusi langsung (sifat-sifat limit):

$$\lim_{x \to \frac{\pi}{4}} \frac{\sin x + \cos x}{\sin x} = \frac{\frac{1}{2}\sqrt{2} + \frac{1}{2}\sqrt{2}}{\frac{1}{2}\sqrt{2}} = \frac{\sqrt{2}}{\frac{1}{2}\sqrt{2}} = 2$$

## Kontinuitas Fungsi

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab A.1.d Kontinuitas Fungsi, Definisi 2.2, hlm. 95–100.*

Fungsi yang grafiknya tidak terputus disebut **kontinu**. Contoh fungsi yang **diskontinu** (tidak kontinu):

- $F(x)$ diskontinu di $0$ karena $F(0)$ tidak terdefinisi;
- $G(x)$ diskontinu di $2$ karena $\displaystyle\lim_{x \to 2} G(x) \neq G(2)$;
- $H(x)$ diskontinu di $1$ karena nilai $H(x)$ mendekati nilai berbeda dari kiri dan kanan, sehingga limitnya tidak ada.

### Definisi 2.2

Sebuah fungsi $f(x)$ **kontinu di $x = c$** jika:

1. $f(c)$ ada;
2. $\displaystyle\lim_{x \to c} f(x)$ ada;
3. $\displaystyle\lim_{x \to c} f(x) = f(c)$.

Suatu fungsi kontinu pada interval $I$ jika fungsi tersebut kontinu di setiap titik pada $I$.

### Contoh Soal 2.3

Apakah $f(x) = x^2 - 5$ kontinu di $x = -2$?

- $f(-2) = (-2)^2 - 5 = -1$ (ada);
- $\displaystyle\lim_{x \to -2} (x^2 - 5) = (-2)^2 - 5 = -1$ (ada);
- $\displaystyle\lim_{x \to -2} f(x) = f(-2)$.

Jadi $f$ kontinu di $x = -2$.
