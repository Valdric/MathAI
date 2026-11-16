---
judul: "Eksponen dan Logaritma"
kelas: "10"
fase: "E"
bab: "1"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (9 bagian); m4th-lab.net (11 bagian)"
---

# Bab 1 — Eksponen dan Logaritma

> Kelas 10 · Fase E · Matematika Umum

## Daftar Isi

- (A) Eksponen
  - Definisi Eksponen
  - Sifat-sifat Eksponen
  - Fungsi Eksponensial
  - Pertumbuhan Eksponen
  - Peluruhan Eksponen
  - Bentuk Akar dan Hubungan Bilangan Pangkat dengan Akar
  - Merasionalkan Bentuk Akar
  - Persamaan Eksponen
  - Pertidaksamaan Eksponen
  - Soal Kontekstual Eksponen
- (B) Logaritma
  - Konsep Logaritma
  - Sifat-sifat Logaritma
  - Persamaan Logaritma
  - Pertidaksamaan Logaritma
  - Soal Cerita Logaritma

## (A) Eksponen

### Definisi Eksponen

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 1 Eksponen, subbab A Definisi Eksponen, hlm. 4–6.*

#### Eksplorasi: Penyebaran Hoaks

Seseorang membagikan pesan hoaks kepada 2 orang temannya. Setiap orang yang menerima pesan itu membagikannya lagi kepada 2 orang lain. Banyak orang yang menerima hoaks pada setiap fase penyebaran mengikuti pola:

$$1 = 2^0,\quad 2 = 2^1,\quad 4 = 2 \times 2 = 2^2,\quad 8 = 2 \times 2 \times 2 = 2^3,\quad 16 = 2 \times 2 \times 2 \times 2 = 2^4$$

Jika banyak orang yang mendapat hoaks pada fase ke-$n$ adalah $m$, maka

$$m = \underbrace{2 \times 2 \times \cdots \times 2}_{n \text{ faktor}} = 2^n$$

Sebagai contoh, pada fase ke-5 banyak penerima hoaks adalah $2^5 = 32$ orang.

#### Definisi Bilangan Berpangkat

Bilangan berpangkat atau **eksponen** menyederhanakan penulisan perkalian berulang.

Jika $a$ adalah bilangan real dan $n$ adalah bilangan bulat positif, maka $a^n$ menyatakan hasil kali bilangan $a$ sebanyak $n$ faktor:

$$a^n = \underbrace{a \times a \times a \times \cdots \times a}_{n \text{ faktor}}$$

Pada $a^n$, $a$ disebut **bilangan pokok** (basis) dan $n$ disebut **pangkat**.

Beberapa definisi penting:

1. Jika $a$ bilangan real dengan $a \neq 0$ dan $n$ bilangan bulat positif, maka $a^{-n} = \dfrac{1}{a^n}$.
2. Jika $a$ bilangan real dengan $a \neq 0$ dan $n$ bilangan bulat positif, maka $a^{\frac{1}{n}} = p$ adalah bilangan real positif sehingga $p^n = a$.
3. Jika $a$ bilangan real dengan $a \neq 0$ dan $m, n$ bilangan bulat positif, maka $a^{\frac{m}{n}} = \left(a^{\frac{1}{n}}\right)^m$.

### Sifat-sifat Eksponen

#### Sifat-sifat Eksponen

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 1 Eksponen, subbab B Sifat-Sifat Eksponen, hlm. 7–9.*

##### Eksplorasi

Perhatikan tabel bentuk eksponen $2^n$ berikut.

| $2^n$ | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ | $2^8$ | $2^9$ | $2^{10}$ |
|---|---|---|---|---|---|---|---|---|---|---|
| Hasil | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1.024 |

Dengan tabel ini dapat diamati, misalnya, $2^2 \cdot 2^3 = 4 \cdot 8 = 32 = 2^5$, $\dfrac{2^8}{2^6} = \dfrac{256}{64} = 4 = 2^2$, dan $\left(2^3\right)^3 = 8^3 = 512 = 2^9$.

##### Sifat-sifat Eksponen

1. $a^m \cdot a^n = a^{m+n}$, dengan $a \neq 0$ dan $m, n$ bilangan bulat.
2. $\dfrac{a^m}{a^n} = a^{m-n}$, dengan $a \neq 0$ dan $m, n$ bilangan bulat.
3. $\left(a^m\right)^n = a^{m \times n}$, dengan $a \neq 0$ dan $m, n$ bilangan bulat.
4. $(ab)^m = a^m \times b^m$, dengan $a, b \neq 0$ dan $m$ bilangan bulat.
5. $\left(\dfrac{a}{b}\right)^m = \dfrac{a^m}{b^m}$, dengan $b \neq 0$ dan $m$ bilangan bulat.
6. $a^{\frac{m}{n}} \cdot a^{\frac{p}{n}} = a^{\frac{m+p}{n}}$, dengan $a > 0$, $\dfrac{m}{n}$ dan $\dfrac{p}{n}$ bilangan rasional, $n \neq 0$.
7. $a^{\frac{m}{n}} \cdot a^{\frac{p}{q}} = a^{\frac{m}{n} + \frac{p}{q}}$, dengan $a > 0$, $\dfrac{m}{n}$ dan $\dfrac{p}{q}$ bilangan rasional, $n, q \neq 0$.

##### Contoh 1

Sederhanakan bentuk eksponen $\dfrac{2^5 \times 2^3}{2^2}$.

**Alternatif penyelesaian:**

$$\frac{2^5 \times 2^3}{2^2} = \frac{2^{5+3}}{2^2} = \frac{2^8}{2^2} = 2^{8-2} = 2^6$$

##### Contoh 2

Sederhanakan bentuk eksponen $\left(x^{\frac{1}{3}}\right)^2 \times x^{\frac{4}{3}}$.

**Alternatif penyelesaian:**

$$\left(x^{\frac{1}{3}}\right)^2 \times x^{\frac{4}{3}} = x^{\frac{2}{3}} \times x^{\frac{4}{3}} = x^{\frac{2}{3} + \frac{4}{3}} = x^{\frac{6}{3}} = x^2$$

#### Bentuk Pangkat dan Sifat-sifat Eksponen

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/bentuk-pangkat-dan-sifat-sifat-eksponen*

Setelah mempelajari fungsi komposisi dan fungsi invers, sekarang kita masuk ke bagian **eksponen**. Materi pertama pada bagian ini adalah **bentuk pangkat dan sifat-sifat eksponen**.

Eksponen atau pangkat digunakan untuk menyatakan perkalian berulang dari suatu bilangan atau bentuk aljabar.

  📌 **Catatan:** Eksponen sangat penting karena banyak digunakan dalam pertumbuhan penduduk, bunga majemuk, peluruhan zat, skala, ilmu komputer, dan berbagai model matematika.

---

###### 1. Pengertian Bentuk Pangkat

Bentuk pangkat adalah bentuk yang menyatakan perkalian berulang.

Secara umum:

$$a^n$$

dibaca:

$$a \text{ pangkat } n$$

atau:

$$a \text{ dipangkatkan } n$$

Pada bentuk $a^n$:

- $a$ disebut **basis** atau bilangan pokok;
- $n$ disebut **eksponen** atau pangkat.

Jika $n$ adalah bilangan asli, maka:

$$a^n=\underbrace{a\times a\times a\times \cdots \times a}_{n\text{ faktor}}$$

Contoh:

$$2^5=2\times2\times2\times2\times2=32$$

  💡 **Ingat:** Eksponen menunjukkan banyaknya faktor yang dikalikan berulang.

---

###### 2. Contoh Bentuk Pangkat

Perhatikan beberapa contoh berikut.

| Bentuk Pangkat | Arti | Nilai |
| --- | --- | --- |
| $3^2$ | $3\times3$ | $9$ |
| $2^4$ | $2\times2\times2\times2$ | $16$ |
| $5^3$ | $5\times5\times5$ | $125$ |
| $10^4$ | $10\times10\times10\times10$ | $10.000$ |

---

###### 3. Pangkat Satu

Setiap bilangan yang dipangkatkan satu hasilnya adalah bilangan itu sendiri.

$$a^1=a$$

Contoh:

$$7^1=7$$

$$x^1=x$$

$$(2a+3)^1=2a+3$$

  📌 **Catatan:** Pangkat satu biasanya tidak ditulis. Misalnya $x^1$ cukup ditulis $x$.

---

###### 4. Pangkat Nol

Untuk $a\ne0$, berlaku:

$$a^0=1$$

Contoh:

$$5^0=1$$

$$(-3)^0=1$$

$$x^0=1,\quad x\ne0$$

  ⚠️ **Perhatian:** Bentuk $0^0$ tidak dibahas sebagai bentuk biasa karena bersifat tidak tentu dalam banyak konteks matematika.

---

###### 5. Pangkat Bilangan Negatif

Untuk $a\ne0$, berlaku:

$$a^{-n}=\frac{1}{a^n}$$

Artinya, pangkat negatif dapat diubah menjadi pecahan dengan pangkat positif.

Contoh:

$$2^{-3}=\frac{1}{2^3}=\frac18$$

Contoh lain:

$$x^{-4}=\frac{1}{x^4},\quad x\ne0$$

  💡 **Ingat:** Pangkat negatif bukan berarti nilainya selalu negatif. Pangkat negatif berarti bentuknya menjadi kebalikan.

---

###### 6. Sifat Perkalian dengan Basis Sama

Jika dua bentuk pangkat memiliki basis yang sama dan dikalikan, maka pangkatnya dijumlahkan.

$$a^m\cdot a^n=a^{m+n}$$

dengan $a\ne0$ untuk kondisi tertentu.

Contoh:

$$2^3\cdot2^4=2^{3+4}=2^7$$

Contoh bentuk aljabar:

$$x^5\cdot x^2=x^{5+2}=x^7$$

Penjelasan:

$$\begin{aligned}
x^5\cdot x^2
&=(x\cdot x\cdot x\cdot x\cdot x)(x\cdot x)\\
&=x^7
\end{aligned}$$

---

###### 7. Sifat Pembagian dengan Basis Sama

Jika dua bentuk pangkat memiliki basis yang sama dan dibagi, maka pangkatnya dikurangkan.

$$\frac{a^m}{a^n}=a^{m-n}$$

dengan $a\ne0$.

Contoh:

$$\frac{3^7}{3^2}=3^{7-2}=3^5$$

Contoh bentuk aljabar:

$$\frac{x^8}{x^3}=x^{8-3}=x^5$$

  ⚠️ **Perhatian:** Sifat ini berlaku jika basisnya sama.

---

###### 8. Sifat Pangkat dari Pangkat

Jika suatu bentuk pangkat dipangkatkan lagi, maka pangkatnya dikalikan.

$$(a^m)^n=a^{mn}$$

Contoh:

$$(2^3)^4=2^{3\cdot4}=2^{12}$$

Contoh bentuk aljabar:

$$(x^5)^2=x^{5\cdot2}=x^{10}$$

---

###### 9. Sifat Pangkat dari Perkalian

Jika suatu perkalian dipangkatkan, maka setiap faktor dipangkatkan.

$$(ab)^n=a^n b^n$$

Contoh:

$$(2x)^3=2^3x^3=8x^3$$

Contoh lain:

$$(3ab)^2=3^2a^2b^2=9a^2b^2$$

  💡 **Ingat:** Semua faktor di dalam tanda kurung harus ikut dipangkatkan.

---

###### 10. Sifat Pangkat dari Pembagian

Jika suatu pembagian dipangkatkan, maka pembilang dan penyebut dipangkatkan.

$$\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}$$

dengan $b\ne0$.

Contoh:

$$\left(\frac{2}{3}\right)^4=\frac{2^4}{3^4}=\frac{16}{81}$$

Contoh bentuk aljabar:

$$\left(\frac{x}{y}\right)^3=\frac{x^3}{y^3},\quad y\ne0$$

---

###### 11. Sifat Pangkat Pecahan

Pangkat pecahan berkaitan dengan bentuk akar.

Untuk $a\ge0$ dan $n$ bilangan asli, berlaku:

$$a^{\frac1n}=\sqrt[n]{a}$$

Contoh:

$$9^{\frac12}=\sqrt{9}=3$$

$$27^{\frac13}=\sqrt[3]{27}=3$$

Secara umum:

$$a^{\frac{m}{n}}=\sqrt[n]{a^m}=(\sqrt[n]{a})^m$$

Contoh:

$$8^{\frac23}=(\sqrt[3]{8})^2=2^2=4$$

  📌 **Catatan:** Pangkat $\frac12$ berarti akar kuadrat, sedangkan pangkat $\frac13$ berarti akar pangkat tiga.

---

###### 12. Menyederhanakan Bentuk dengan Pangkat Positif

Contoh:

Sederhanakan:

$$x^4\cdot x^6$$

Karena basisnya sama, jumlahkan pangkatnya.

$$\begin{aligned}
x^4\cdot x^6
&=x^{4+6}\\
&=x^{10}
\end{aligned}$$

Jadi:

$$x^4\cdot x^6=x^{10}$$

---

###### 13. Menyederhanakan Bentuk dengan Pembagian

Contoh:

Sederhanakan:

$$\frac{a^9}{a^4}$$

Karena basisnya sama, kurangkan pangkatnya.

$$\begin{aligned}
\frac{a^9}{a^4}
&=a^{9-4}\\
&=a^5
\end{aligned}$$

Jadi:

$$\frac{a^9}{a^4}=a^5$$

---

###### 14. Menyederhanakan Bentuk Pangkat dari Pangkat

Contoh:

Sederhanakan:

$$(m^3)^5$$

Gunakan sifat pangkat dari pangkat.

$$\begin{aligned}
(m^3)^5
&=m^{3\cdot5}\\
&=m^{15}
\end{aligned}$$

Jadi:

$$(m^3)^5=m^{15}$$

---

###### 15. Menyederhanakan Pangkat dari Perkalian

Contoh:

Sederhanakan:

$$(2x^3y)^4$$

Semua faktor di dalam tanda kurung dipangkatkan $4$.

$$\begin{aligned}
(2x^3y)^4
&=2^4(x^3)^4y^4\\
&=16x^{12}y^4
\end{aligned}$$

Jadi:

$$(2x^3y)^4=16x^{12}y^4$$

---

###### 16. Menyederhanakan Bentuk dengan Pangkat Negatif

Contoh:

Sederhanakan bentuk berikut dengan pangkat positif.

$$x^{-5}$$

Gunakan sifat pangkat negatif.

$$x^{-5}=\frac{1}{x^5},\quad x\ne0$$

Contoh lain:

$$\frac{1}{a^{-3}}=a^3$$

Karena bentuk $a^{-3}$ di penyebut berpindah menjadi $a^3$ di pembilang.

---

###### 17. Menyederhanakan Bentuk Campuran

Contoh:

Sederhanakan:

$$\frac{x^5y^{-2}}{x^{-3}y^4}$$

Gunakan sifat pembagian pangkat dengan basis sama.

$$\begin{aligned}
\frac{x^5y^{-2}}{x^{-3}y^4}
&=x^{5-(-3)}y^{-2-4}\\
&=x^8y^{-6}\\
&=\frac{x^8}{y^6}
\end{aligned}$$

Jadi:

$$\frac{x^5y^{-2}}{x^{-3}y^4}=\frac{x^8}{y^6}$$

  💡 **Strategi:** Kelompokkan basis yang sama, kemudian gunakan sifat pangkat secara bertahap.

---

###### 18. Menyederhanakan Bentuk Pangkat Pecahan

Contoh:

Hitung nilai:

$$16^{\frac34}$$

Gunakan bentuk akar.

$$\begin{aligned}
16^{\frac34}
&=(\sqrt[4]{16})^3\\
&=2^3\\
&=8
\end{aligned}$$

Jadi:

$$16^{\frac34}=8$$

Contoh lain:

$$81^{\frac12}=\sqrt{81}=9$$

---

###### 19. Tabel Sifat-sifat Eksponen

| No. | Sifat Eksponen | Syarat |
| --- | --- | --- |
| 1 | $a^m\cdot a^n=a^{m+n}$ | Basis sama. |
| 2 | $\frac{a^m}{a^n}=a^{m-n}$ | $a\ne0$. |
| 3 | $(a^m)^n=a^{mn}$ | Pangkat dari pangkat. |
| 4 | $(ab)^n=a^n b^n$ | Perkalian dipangkatkan. |
| 5 | $\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}$ | $b\ne0$. |
| 6 | $a^0=1$ | $a\ne0$. |
| 7 | $a^{-n}=\frac{1}{a^n}$ | $a\ne0$. |
| 8 | $a^{\frac1n}=\sqrt[n]{a}$ | Disesuaikan dengan konteks bilangan real. |

---

###### 20. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Menjumlahkan pangkat pada basis berbeda | $2^3\cdot3^4=6^7$ | Sifat $a^m\cdot a^n=a^{m+n}$ hanya berlaku untuk basis sama. |
| Salah pada pangkat dari pangkat | $(x^3)^4=x^7$ | Seharusnya $(x^3)^4=x^{12}$. |
| Tidak memangkatkan semua faktor | $(2x)^3=2x^3$ | Seharusnya $(2x)^3=8x^3$. |
| Menganggap pangkat negatif berarti hasil negatif | $2^{-3}=-8$ | Seharusnya $2^{-3}=\frac18$. |
| Salah memahami pangkat nol | $7^0=0$ | Seharusnya $7^0=1$. |

  ⚠️ **Perhatian:** Banyak kesalahan eksponen terjadi karena sifat pangkat digunakan pada bentuk yang tidak sesuai syarat.

---

###### 21. Rangkuman

- Bentuk pangkat $a^n$ menyatakan perkalian berulang.
- Pada $a^n$, $a$ disebut basis dan $n$ disebut eksponen.
- Untuk $a\ne0$, berlaku:
  $$a^0=1$$
- Pangkat negatif:
  $$a^{-n}=\frac{1}{a^n}$$
- Perkalian basis sama:
  $$a^m\cdot a^n=a^{m+n}$$
- Pembagian basis sama:
  $$\frac{a^m}{a^n}=a^{m-n}$$
- Pangkat dari pangkat:
  $$(a^m)^n=a^{mn}$$
- Pangkat dari perkalian:
  $$(ab)^n=a^n b^n$$
- Pangkat dari pembagian:
  $$\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}$$
- Pangkat pecahan berkaitan dengan bentuk akar:
  $$a^{\frac1n}=\sqrt[n]{a}$$

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Sederhanakan bentuk berikut.
$$x^4\cdot x^7$$

💡 Pembahasan

Karena basisnya sama, yaitu $x$, maka pangkatnya dijumlahkan.

$$\begin{aligned}
x^4\cdot x^7
&=x^{4+7}\\
&=x^{11}
\end{aligned}$$

Jadi:

$$x^4\cdot x^7=x^{11}$$

  Contoh Soal 2

Sederhanakan bentuk berikut dengan pangkat positif.
$$\frac{a^6b^{-2}}{a^{-1}b^3}$$

💡 Pembahasan

Gunakan sifat pembagian pangkat dengan basis sama.

$$\begin{aligned}
\frac{a^6b^{-2}}{a^{-1}b^3}
&=a^{6-(-1)}b^{-2-3}\\
&=a^7b^{-5}\\
&=\frac{a^7}{b^5}
\end{aligned}$$

Jadi:

$$\frac{a^6b^{-2}}{a^{-1}b^3}=\frac{a^7}{b^5}$$

  Contoh Soal 3

Hitung nilai berikut.
$$27^{\frac23}$$

💡 Pembahasan

Gunakan hubungan pangkat pecahan dengan akar.

$$\begin{aligned}
27^{\frac23}
&=(\sqrt[3]{27})^2\\
&=3^2\\
&=9
\end{aligned}$$

Jadi:

$$27^{\frac23}=9$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Nilai dari $2^5$ adalah ....

A
$10$

B
$16$

C
$32$

D
$64$

E
$128$

💡 Pembahasan

$$\begin{aligned}
2^5
&=2\cdot2\cdot2\cdot2\cdot2\\
&=32
\end{aligned}$$

  Latihan Soal 2

Bentuk sederhana dari $x^3\cdot x^5$ adalah ....

A
$x^8$

B
$x^{15}$

C
$x^2$

D
$2x^8$

E
$x^{35}$

💡 Pembahasan

Karena basis sama, pangkat dijumlahkan.

$$\begin{aligned}
x^3\cdot x^5
&=x^{3+5}\\
&=x^8
\end{aligned}$$

  Latihan Soal 3

Bentuk sederhana dari $\frac{a^9}{a^4}$ adalah ....

A
$a^{13}$

B
$a^5$

C
$a^{36}$

D
$a^{-5}$

E
$1$

💡 Pembahasan

Karena basis sama dan dibagi, pangkat dikurangkan.

$$\begin{aligned}
\frac{a^9}{a^4}
&=a^{9-4}\\
&=a^5
\end{aligned}$$

  Latihan Soal 4

Bentuk sederhana dari $(m^4)^3$ adalah ....

A
$m^7$

B
$m^9$

C
$m^{12}$

D
$m^{16}$

E
$m^{43}$

💡 Pembahasan

Pada pangkat dari pangkat, pangkat dikalikan.

$$\begin{aligned}
(m^4)^3
&=m^{4\cdot3}\\
&=m^{12}
\end{aligned}$$

  Latihan Soal 5

Bentuk sederhana dari $(2x)^4$ adalah ....

A
$2x^4$

B
$8x^4$

C
$16x^4$

D
$16x$

E
$2x^{16}$

💡 Pembahasan

Semua faktor di dalam tanda kurung dipangkatkan.

$$\begin{aligned}
(2x)^4
&=2^4x^4\\
&=16x^4
\end{aligned}$$

  Latihan Soal 6

Bentuk dengan pangkat positif dari $x^{-6}$ adalah ....

A
$-x^6$

B
$\frac{1}{x^6}$

C
$6x$

D
$\frac{1}{6x}$

E
$x^6$

💡 Pembahasan

Pangkat negatif dipindahkan menjadi kebalikan.

$$x^{-6}=\frac{1}{x^6}$$

  Latihan Soal 7

Nilai dari $5^0$ adalah ....

A
$0$

B
$1$

C
$5$

D
$25$

E
$-1$

💡 Pembahasan

Untuk $a\ne0$, berlaku:

$$a^0=1$$

Maka:

$$5^0=1$$

  Latihan Soal 8

Nilai dari $16^{\frac12}$ adalah ....

A
$2$

B
$4$

C
$8$

D
$16$

E
$32$

💡 Pembahasan

Pangkat $\frac12$ berarti akar kuadrat.

$$\begin{aligned}
16^{\frac12}
&=\sqrt{16}\\
&=4
\end{aligned}$$

  Latihan Soal 9

Nilai dari $27^{\frac23}$ adalah ....

A
$3$

B
$9$

C
$18$

D
$27$

E
$81$

💡 Pembahasan

$$\begin{aligned}
27^{\frac23}
&=(\sqrt[3]{27})^2\\
&=3^2\\
&=9
\end{aligned}$$

  Latihan Soal 10

Bentuk sederhana dari $\frac{x^5y^{-2}}{x^{-3}y^4}$ adalah ....

A
$x^2y^2$

B
$\frac{x^2}{y^6}$

C
$\frac{x^8}{y^6}$

D
$\frac{y^6}{x^8}$

E
$x^8y^6$

💡 Pembahasan

Gunakan sifat pembagian basis sama.

$$\begin{aligned}
\frac{x^5y^{-2}}{x^{-3}y^4}
&=x^{5-(-3)}y^{-2-4}\\
&=x^8y^{-6}\\
&=\frac{x^8}{y^6}
\end{aligned}$$

### Fungsi Eksponensial

#### Fungsi Eksponensial

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 1 Eksponen, subbab C Fungsi Eksponensial, hlm. 10–12.*

##### Eksplorasi: Penularan Virus

Seseorang terjangkit virus dan menulari 3 orang lain. Pada fase berikutnya, setiap orang yang tertular menulari 3 orang lain lagi.

| Fase | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Banyak orang tertular | $3 = 3^1$ | $9 = 3^2$ | $27 = 3^3$ | $81 = 3^4$ | $243 = 3^5$ | $729 = 3^6$ | $2.187 = 3^7$ |

Jika $f(x)$ adalah banyak orang yang tertular dan $x$ adalah fase penyebaran, maka

$$f(x) = 3^x$$

Fungsi $f(x) = 3^x$ adalah salah satu contoh fungsi eksponensial.

##### Definisi Fungsi Eksponensial

Sebuah fungsi eksponensial dinyatakan dengan

$$f(x) = n \times a^x$$

dengan $a$ adalah bilangan pokok, $a > 0$, $a \neq 1$, $n$ adalah bilangan real tak nol, dan $x$ adalah sebarang bilangan real.

Contoh fungsi eksponensial lainnya: $f(x) = 4^x$, $f(x) = 3^{x+1}$, dan $f(x) = 5^{2x-1}$.

Perubahan nilai pada fungsi eksponensial sangat signifikan: pada fase-fase berikutnya semakin banyak orang yang tertular virus. Fungsi eksponensial dibedakan menjadi dua bentuk, yaitu **pertumbuhan eksponensial** dan **peluruhan eksponensial**.

#### Fungsi Eksponen

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/fungsi-eksponen*

Pada materi sebelumnya, kita telah mempelajari persamaan eksponen. Sekarang kita akan membahas **fungsi eksponen**.

Fungsi eksponen adalah fungsi yang variabelnya berada pada bagian pangkat. Fungsi ini banyak digunakan untuk memodelkan pertumbuhan dan peluruhan, seperti pertumbuhan penduduk, bunga majemuk, penyebaran bakteri, peluruhan zat radioaktif, dan penurunan nilai barang.

  📌 **Catatan:** Fungsi eksponen berbeda dengan fungsi pangkat. Pada fungsi eksponen, variabel berada di pangkat.

---

###### 1. Pengertian Fungsi Eksponen

Fungsi eksponen adalah fungsi yang berbentuk:

$$f(x)=a^x$$

dengan syarat:

$$a>0,\quad a\ne1$$

Pada fungsi tersebut:

- $a$ disebut **basis**;
- $x$ adalah variabel yang berada pada pangkat;
- $f(x)$ adalah nilai fungsi.

Contoh fungsi eksponen:

$$f(x)=2^x$$

$$g(x)=3^x$$

$$h(x)=\left(\frac12\right)^x$$

  💡 **Ingat:** Fungsi eksponen memiliki variabel pada pangkat, bukan pada basis.

---

###### 2. Bukan Fungsi Eksponen

Tidak semua fungsi yang memuat pangkat disebut fungsi eksponen.

Perhatikan tabel berikut.

| Bentuk Fungsi | Jenis | Alasan |
| --- | --- | --- |
| $f(x)=2^x$ | Fungsi eksponen | Variabel berada pada pangkat. |
| $f(x)=x^2$ | Bukan fungsi eksponen | Variabel berada pada basis. |
| $f(x)=5^x+1$ | Fungsi eksponen | Memuat bentuk eksponen $5^x$. |
| $f(x)=3x+2$ | Bukan fungsi eksponen | Merupakan fungsi linear. |

  ⚠️ **Perhatian:** $x^2$ bukan fungsi eksponen, melainkan fungsi kuadrat atau fungsi pangkat.

---

###### 3. Bentuk Umum Fungsi Eksponen

Bentuk dasar fungsi eksponen adalah:

$$f(x)=a^x$$

dengan:

$$a>0,\quad a\ne1$$

Selain bentuk dasar, fungsi eksponen juga dapat muncul dalam bentuk:

$$f(x)=ka^x$$

atau:

$$f(x)=a^{mx+n}$$

atau:

$$f(x)=ka^{mx+n}+c$$

Contoh:

$$f(x)=3\cdot2^x$$

$$g(x)=5^{2x-1}$$

$$h(x)=2^{x+1}-3$$

  📌 **Catatan:** Pada materi awal ini, fokus utama kita adalah memahami fungsi eksponen dasar dan cara menentukan nilainya.

---

###### 4. Mengapa Basis Harus Positif dan Tidak Sama dengan 1?

Pada fungsi eksponen dasar:

$$f(x)=a^x$$

basis $a$ biasanya disyaratkan:

$$a>0,\quad a\ne1$$

Alasannya:

| Syarat | Alasan |
| --- | --- |
| $a>0$ | Agar fungsi terdefinisi dengan baik untuk banyak nilai real $x$. |
| $a\ne1$ | Jika $a=1$, maka $1^x=1$ untuk semua $x$, sehingga fungsi menjadi konstan. |

Jika $a=1$, maka:

$$f(x)=1^x=1$$

Fungsi tersebut bukan fungsi eksponen yang menunjukkan pertumbuhan atau peluruhan.

---

###### 5. Menentukan Nilai Fungsi Eksponen

Untuk menentukan nilai fungsi eksponen, substitusikan nilai $x$ ke dalam fungsi.

Contoh:

Diketahui:

$$f(x)=2^x$$

Tentukan $f(3)$.

Substitusikan $x=3$.

$$\begin{aligned}
f(3)
&=2^3\\
&=8
\end{aligned}$$

Jadi:

$$f(3)=8$$

---

###### 6. Nilai Fungsi Eksponen untuk Beberapa Nilai $x$

Misalkan:

$$f(x)=2^x$$

Tentukan nilai fungsi untuk $x=-2,-1,0,1,2,3$.

| $x$ | $f(x)=2^x$ | Nilai |
| --- | --- | --- |
| $-2$ | $2^{-2}$ | $\frac14$ |
| $-1$ | $2^{-1}$ | $\frac12$ |
| $0$ | $2^0$ | $1$ |
| $1$ | $2^1$ | $2$ |
| $2$ | $2^2$ | $4$ |
| $3$ | $2^3$ | $8$ |

  💡 **Ingat:** Pada fungsi $f(x)=a^x$, nilai $f(0)$ selalu $1$ jika $a>0$ dan $a\ne0$.

---

###### 7. Domain Fungsi Eksponen

Domain fungsi eksponen dasar:

$$f(x)=a^x$$

dengan $a>0$ dan $a\ne1$ adalah semua bilangan real.

Ditulis:

$$D_f=\mathbb{R}$$

Artinya, nilai $x$ dapat berupa bilangan negatif, nol, positif, pecahan, maupun desimal.

Contoh:

$$2^{-1}=\frac12$$

$$2^0=1$$

$$2^{\frac12}=\sqrt2$$

Semua bentuk tersebut masih terdefinisi.

---

###### 8. Range Fungsi Eksponen

Range fungsi eksponen dasar:

$$f(x)=a^x$$

adalah semua bilangan real positif.

Ditulis:

$$R_f=\{y\mid y>0,\ y\in\mathbb{R}\}$$

atau:

$$R_f=(0,\infty)$$

Mengapa?

Karena hasil dari $a^x$ selalu positif untuk $a>0$.

Contoh:

$$2^x>0$$

untuk setiap bilangan real $x$.

  📌 **Catatan:** Fungsi eksponen dasar tidak pernah bernilai nol atau negatif.

---

###### 9. Titik Potong dengan Sumbu $Y$

Untuk fungsi eksponen dasar:

$$f(x)=a^x$$

titik potong dengan sumbu $Y$ terjadi saat:

$$x=0$$

Maka:

$$\begin{aligned}
f(0)
&=a^0\\
&=1
\end{aligned}$$

Jadi, grafik fungsi eksponen dasar selalu melalui titik:

$$(0,1)$$

  📊 **Gambar 1.** Grafik fungsi eksponen dasar $f(x)=a^x$ yang melalui titik $(0,1)$.

---

###### 10. Fungsi Eksponen Naik

Jika basis fungsi eksponen memenuhi:

$$a>1$$

maka fungsi:

$$f(x)=a^x$$

merupakan fungsi naik.

Artinya, semakin besar nilai $x$, semakin besar nilai $f(x)$.

Contoh:

$$f(x)=2^x$$

Tabel nilainya:

| $x$ | $2^x$ |
| --- | --- |
| $-2$ | $\frac14$ |
| $-1$ | $\frac12$ |
| $0$ | $1$ |
| $1$ | $2$ |
| $2$ | $4$ |
| $3$ | $8$ |

  💡 **Ingat:** Jika $a>1$, fungsi eksponen $f(x)=a^x$ naik dari kiri ke kanan.

---

###### 11. Fungsi Eksponen Turun

Jika basis fungsi eksponen memenuhi:

$$0<a<1$$

maka fungsi:

$$f(x)=a^x$$

merupakan fungsi turun.

Artinya, semakin besar nilai $x$, semakin kecil nilai $f(x)$.

Contoh:

$$f(x)=\left(\frac12\right)^x$$

Tabel nilainya:

| $x$ | $\left(\frac12\right)^x$ |
| --- | --- |
| $-2$ | $4$ |
| $-1$ | $2$ |
| $0$ | $1$ |
| $1$ | $\frac12$ |
| $2$ | $\frac14$ |
| $3$ | $\frac18$ |

  📊 **Gambar 2.** Perbandingan grafik fungsi eksponen naik $f(x)=2^x$ dan fungsi eksponen turun $g(x)=\left(\frac12\right)^x$.

---

###### 12. Perbandingan Fungsi Eksponen Naik dan Turun

| Basis | Bentuk Fungsi | Sifat Grafik | Contoh |
| --- | --- | --- | --- |
| $a>1$ | $f(x)=a^x$ | Naik | $f(x)=2^x$ |
| $0<a<1$ | $f(x)=a^x$ | Turun | $f(x)=\left(\frac12\right)^x$ |

---

###### 13. Asimtot Fungsi Eksponen Dasar

Grafik fungsi eksponen dasar:

$$f(x)=a^x$$

memiliki asimtot mendatar:

$$y=0$$

Asimtot mendatar berarti grafik semakin mendekati garis tersebut, tetapi tidak memotongnya.

Untuk $f(x)=2^x$, saat $x$ semakin kecil, nilai $2^x$ semakin mendekati $0$, tetapi tidak pernah sama dengan $0$.

  ⚠️ **Perhatian:** Fungsi eksponen dasar tidak pernah bernilai nol, meskipun grafiknya dapat mendekati sumbu $X$.

---

###### 14. Fungsi Eksponen dengan Koefisien

Fungsi eksponen dapat berbentuk:

$$f(x)=ka^x$$

dengan $k\ne0$.

Contoh:

$$f(x)=3\cdot2^x$$

Nilai fungsi untuk $x=2$ adalah:

$$\begin{aligned}
f(2)
&=3\cdot2^2\\
&=3\cdot4\\
&=12
\end{aligned}$$

Koefisien $k$ mengalikan hasil dari bentuk eksponen.

---

###### 15. Fungsi Eksponen dengan Pangkat Linear

Fungsi eksponen juga dapat berbentuk:

$$f(x)=a^{mx+n}$$

Contoh:

$$f(x)=2^{x+3}$$

Nilai fungsi untuk $x=1$ adalah:

$$\begin{aligned}
f(1)
&=2^{1+3}\\
&=2^4\\
&=16
\end{aligned}$$

Contoh lain:

$$g(x)=3^{2x-1}$$

Nilai fungsi untuk $x=2$ adalah:

$$\begin{aligned}
g(2)
&=3^{2(2)-1}\\
&=3^3\\
&=27
\end{aligned}$$

---

###### 16. Fungsi Eksponen dengan Pergeseran Vertikal

Fungsi eksponen dapat berbentuk:

$$f(x)=a^x+c$$

Nilai $c$ menyebabkan grafik bergeser ke atas atau ke bawah.

Contoh:

$$f(x)=2^x+3$$

Titik potong dengan sumbu $Y$:

$$\begin{aligned}
f(0)
&=2^0+3\\
&=1+3\\
&=4
\end{aligned}$$

Range fungsi berubah menjadi:

$$y>3$$

karena $2^x>0$, maka $2^x+3>3$.

  📊 **Gambar 3.** Grafik fungsi $f(x)=2^x+3$ sebagai pergeseran grafik $y=2^x$ sejauh $3$ satuan ke atas.

---

###### 17. Fungsi Eksponen dalam Pertumbuhan

Fungsi eksponen sering digunakan untuk memodelkan pertumbuhan.

Bentuk umum pertumbuhan eksponen:

$$P(t)=P_0\cdot a^t$$

dengan:

- $P(t)$ adalah jumlah setelah waktu $t$;
- $P_0$ adalah jumlah awal;
- $a$ adalah faktor pertumbuhan;
- $t$ adalah waktu.

Jika setiap periode jumlahnya menjadi dua kali lipat, maka:

$$a=2$$

Contoh:

Jumlah bakteri mula-mula $100$. Setiap jam bakteri menjadi dua kali lipat. Maka fungsi jumlah bakteri setelah $t$ jam adalah:

$$P(t)=100\cdot2^t$$

Jika $t=3$, maka:

$$\begin{aligned}
P(3)
&=100\cdot2^3\\
&=100\cdot8\\
&=800
\end{aligned}$$

Jadi, setelah $3$ jam terdapat $800$ bakteri.

---

###### 18. Fungsi Eksponen dalam Peluruhan

Fungsi eksponen juga digunakan untuk memodelkan peluruhan atau penurunan.

Bentuk umum peluruhan eksponen:

$$P(t)=P_0\cdot a^t$$

dengan:

$$0<a<1$$

Contoh:

Suatu zat mula-mula memiliki massa $80$ gram. Setiap jam massanya menjadi setengah dari sebelumnya. Maka fungsi massanya setelah $t$ jam adalah:

$$P(t)=80\left(\frac12\right)^t$$

Jika $t=3$, maka:

$$\begin{aligned}
P(3)
&=80\left(\frac12\right)^3\\
&=80\cdot\frac18\\
&=10
\end{aligned}$$

Jadi, massa zat setelah $3$ jam adalah $10$ gram.

  💡 **Ingat:** Jika faktor pengali lebih dari $1$, terjadi pertumbuhan. Jika faktor pengali antara $0$ dan $1$, terjadi peluruhan.

---

###### 19. Menentukan Fungsi Eksponen dari Informasi Sederhana

Jika diketahui nilai awal dan faktor perubahan, fungsi eksponen dapat disusun.

Contoh:

Modal awal seseorang adalah Rp$1.000.000$. Setiap tahun modal bertambah $10\%$. Tentukan fungsi modal setelah $t$ tahun.

Karena bertambah $10\%$, faktor pertumbuhan adalah:

$$1+10\%=1{,}1$$

Maka fungsi modal:

$$M(t)=1.000.000(1{,}1)^t$$

Jika $t=2$, maka:

$$\begin{aligned}
M(2)
&=1.000.000(1{,}1)^2\\
&=1.000.000(1{,}21)\\
&=1.210.000
\end{aligned}$$

Jadi, modal setelah $2$ tahun adalah:

$$\text{Rp}1.210.000$$

---

###### 20. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Menganggap $x^2$ sebagai fungsi eksponen | $f(x)=x^2$ disebut fungsi eksponen. | $x^2$ adalah fungsi kuadrat, karena variabel berada pada basis. |
| Salah menentukan fungsi naik atau turun | $\left(\frac12\right)^x$ dianggap naik. | Karena $0<\frac12<1$, fungsi tersebut turun. |
| Menganggap fungsi eksponen bisa bernilai nol | $2^x=0$ dianggap memiliki solusi real. | $2^x$ selalu positif, sehingga tidak pernah sama dengan nol. |
| Salah menghitung pangkat negatif | $2^{-3}=-8$. | Seharusnya $2^{-3}=\frac18$. |
| Salah mengubah persen pertumbuhan | Bertambah $10\%$ ditulis faktor $0{,}1$. | Bertambah $10\%$ berarti faktor pertumbuhan $1{,}1$. |

  ⚠️ **Perhatian:** Pada fungsi eksponen, basis menentukan apakah fungsi naik atau turun.

---

###### 21. Rangkuman

- Fungsi eksponen adalah fungsi yang variabelnya berada pada pangkat.
- Bentuk dasar fungsi eksponen:
  $$f(x)=a^x$$
  dengan:
  $$a>0,\quad a\ne1$$
- Domain fungsi eksponen dasar adalah:
  $$\mathbb{R}$$
- Range fungsi eksponen dasar adalah:
  $$(0,\infty)$$
- Grafik fungsi eksponen dasar selalu melalui titik:
  $$(0,1)$$
- Jika $a>1$, fungsi eksponen naik.
- Jika $0<a<1$, fungsi eksponen turun.
- Fungsi eksponen dasar memiliki asimtot mendatar:
  $$y=0$$
- Fungsi eksponen dapat digunakan untuk memodelkan pertumbuhan dan peluruhan.
- Pertumbuhan memiliki faktor $a>1$.
- Peluruhan memiliki faktor $0<a<1$.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui fungsi $f(x)=3^x$. Tentukan nilai $f(4)$.

💡 Pembahasan

Substitusikan $x=4$ ke fungsi $f(x)=3^x$.

$$\begin{aligned}
f(4)
&=3^4\\
&=81
\end{aligned}$$

Jadi:

$$f(4)=81$$

  Contoh Soal 2

Tentukan apakah fungsi $f(x)=\left(\frac13\right)^x$ merupakan fungsi naik atau turun.

💡 Pembahasan

Basis fungsi tersebut adalah:

$$a=\frac13$$

Karena:

$$0<\frac13<1$$

maka fungsi eksponen tersebut merupakan fungsi turun.

Jadi, $f(x)=\left(\frac13\right)^x$ adalah fungsi turun.

  Contoh Soal 3

Jumlah bakteri mula-mula $200$. Setiap jam bakteri menjadi dua kali lipat. Tentukan fungsi jumlah bakteri setelah $t$ jam dan hitung jumlah bakteri setelah $4$ jam.

💡 Pembahasan

Jumlah awal bakteri adalah $200$.

Karena setiap jam menjadi dua kali lipat, faktor pertumbuhannya adalah $2$.

Maka fungsi jumlah bakteri:

$$P(t)=200\cdot2^t$$

Untuk $t=4$:

$$\begin{aligned}
P(4)
&=200\cdot2^4\\
&=200\cdot16\\
&=3.200
\end{aligned}$$

Jadi, jumlah bakteri setelah $4$ jam adalah $3.200$ bakteri.

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Fungsi berikut yang merupakan fungsi eksponen adalah ....

A
$f(x)=x^2$

B
$f(x)=2^x$

C
$f(x)=3x+1$

D
$f(x)=x+5$

E
$f(x)=x^3-1$

💡 Pembahasan

Fungsi eksponen memiliki variabel pada pangkat.

Pada $f(x)=2^x$, variabel $x$ berada pada pangkat, sehingga merupakan fungsi eksponen.

  Latihan Soal 2

Nilai dari $f(3)$ untuk fungsi $f(x)=2^x$ adalah ....

A
$4$

B
$8$

C
$9$

D
$16$

E
$32$

💡 Pembahasan

Substitusikan $x=3$.

$$\begin{aligned}
f(3)
&=2^3\\
&=8
\end{aligned}$$

  Latihan Soal 3

Nilai dari $f(2)$ untuk fungsi $f(x)=3\cdot2^x$ adalah ....

A
$6$

B
$12$

C
$18$

D
$24$

E
$32$

💡 Pembahasan

Substitusikan $x=2$.

$$\begin{aligned}
f(2)
&=3\cdot2^2\\
&=3\cdot4\\
&=12
\end{aligned}$$

  Latihan Soal 4

Fungsi $f(x)=4^x$ merupakan fungsi ....

A
naik

B
turun

C
konstan nol

D
linear

E
kuadrat

💡 Pembahasan

Basis fungsi adalah $4$.

Karena:

$$4>1$$

maka $f(x)=4^x$ merupakan fungsi eksponen naik.

  Latihan Soal 5

Fungsi $f(x)=\left(\frac14\right)^x$ merupakan fungsi ....

A
naik

B
turun

C
konstan satu

D
fungsi linear

E
fungsi kuadrat

💡 Pembahasan

Basis fungsi adalah $\frac14$.

Karena:

$$0<\frac14<1$$

maka $f(x)=\left(\frac14\right)^x$ merupakan fungsi eksponen turun.

  Latihan Soal 6

Domain dari fungsi $f(x)=5^x$ adalah ....

A
$x>0$

B
$x\ge0$

C
semua bilangan real

D
$x\ne0$

E
$x<0$

💡 Pembahasan

Fungsi eksponen dasar $f(x)=a^x$ dengan $a>0$ dan $a\ne1$ memiliki domain semua bilangan real.

Jadi, domain $f(x)=5^x$ adalah:

$$\mathbb{R}$$

  Latihan Soal 7

Range dari fungsi $f(x)=2^x$ adalah ....

A
$y\ge0$

B
$y>0$

C
$y<0$

D
$y\le0$

E
semua bilangan real

💡 Pembahasan

Nilai $2^x$ selalu positif untuk setiap bilangan real $x$.

Maka range-nya adalah:

$$y>0$$

  Latihan Soal 8

Grafik fungsi eksponen dasar $f(x)=a^x$ selalu melalui titik ....

A
$(1,0)$

B
$(0,1)$

C
$(0,0)$

D
$(1,1)$

E
$(-1,0)$

💡 Pembahasan

Untuk $f(x)=a^x$, saat $x=0$:

$$\begin{aligned}
f(0)
&=a^0\\
&=1
\end{aligned}$$

Jadi, grafik selalu melalui titik $(0,1)$.

  Latihan Soal 9

Jumlah bakteri mula-mula $150$. Setiap jam jumlahnya menjadi dua kali lipat. Fungsi jumlah bakteri setelah $t$ jam adalah ....

A
$P(t)=150\cdot2^t$

B
$P(t)=2\cdot150^t$

C
$P(t)=150+t^2$

D
$P(t)=150+2t$

E
$P(t)=150(1{,}5)^t$

💡 Pembahasan

Jumlah awal adalah $150$.

Karena setiap jam menjadi dua kali lipat, faktor pertumbuhannya adalah $2$.

Maka:

$$P(t)=150\cdot2^t$$

  Latihan Soal 10

Suatu zat mula-mula bermassa $64$ gram. Setiap jam massanya menjadi setengah dari sebelumnya. Massa zat setelah $3$ jam adalah ....

A
$32$ gram

B
$24$ gram

C
$8$ gram

D
$6$ gram

E
$4$ gram

💡 Pembahasan

Fungsi massa zat:

$$P(t)=64\left(\frac12\right)^t$$

Untuk $t=3$:

$$\begin{aligned}
P(3)
&=64\left(\frac12\right)^3\\
&=64\cdot\frac18\\
&=8
\end{aligned}$$

Jadi, massa zat setelah $3$ jam adalah $8$ gram.

#### Grafik Fungsi Eksponen

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/grafik-fungsi-eksponen*

Pada materi sebelumnya, kita telah mempelajari fungsi eksponen. Sekarang kita akan membahas **grafik fungsi eksponen**.

Grafik fungsi eksponen menunjukkan bagaimana nilai fungsi berubah ketika nilai $x$ berubah. Grafik ini memiliki bentuk khas: dapat naik sangat cepat atau turun mendekati nol.

  📌 **Catatan:** Grafik fungsi eksponen dasar selalu melalui titik $(0,1)$ dan memiliki asimtot mendatar $y=0$.

---

###### 1. Mengingat Kembali Fungsi Eksponen

Fungsi eksponen dasar berbentuk:

$$f(x)=a^x$$

dengan syarat:

$$a>0,\quad a\ne1$$

Jika:

$$a>1$$

maka grafik fungsi eksponen **naik**.

Jika:

$$0<a<1$$

maka grafik fungsi eksponen **turun**.

---

###### 2. Ciri Umum Grafik Fungsi Eksponen Dasar

Grafik fungsi eksponen dasar:

$$f(x)=a^x$$

memiliki ciri-ciri berikut.

| Ciri | Keterangan |
| --- | --- |
| Domain | Semua bilangan real, yaitu $\mathbb{R}$. |
| Range | $y>0$ atau $(0,\infty)$. |
| Titik potong sumbu $Y$ | $(0,1)$. |
| Asimtot mendatar | $y=0$. |
| Nilai fungsi | Selalu positif. |

  💡 **Ingat:** Fungsi eksponen dasar $f(x)=a^x$ tidak pernah memotong sumbu $X$.

---

###### 3. Membuat Grafik Fungsi Eksponen

Untuk menggambar grafik fungsi eksponen, gunakan langkah berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan beberapa nilai $x$. |
| 2 | Hitung nilai $f(x)$. |
| 3 | Buat tabel pasangan titik $(x,y)$. |
| 4 | Plot titik-titik pada bidang koordinat. |
| 5 | Hubungkan titik-titik dengan kurva halus. |
| 6 | Perhatikan asimtot mendatarnya. |

---

###### 4. Grafik Fungsi $f(x)=2^x$

Perhatikan fungsi:

$$f(x)=2^x$$

Buat tabel nilai untuk beberapa nilai $x$.

| $x$ | $f(x)=2^x$ | Titik |
| --- | --- | --- |
| $-3$ | $2^{-3}=\frac18$ | $\left(-3,\frac18\right)$ |
| $-2$ | $2^{-2}=\frac14$ | $\left(-2,\frac14\right)$ |
| $-1$ | $2^{-1}=\frac12$ | $\left(-1,\frac12\right)$ |
| $0$ | $2^0=1$ | $(0,1)$ |
| $1$ | $2^1=2$ | $(1,2)$ |
| $2$ | $2^2=4$ | $(2,4)$ |
| $3$ | $2^3=8$ | $(3,8)$ |

Karena basisnya $2$ dan $2>1$, maka grafik $f(x)=2^x$ merupakan grafik naik.

  📊 **Gambar 1.** Grafik $y=2^x$ dengan titik bantu $\left(-3,\frac18\right)$, $\left(-2,\frac14\right)$, $\left(-1,\frac12\right)$, $(0,1)$, $(1,2)$, $(2,4)$, dan $(3,8)$.

---

###### 5. Sifat Grafik $f(x)=2^x$

Grafik $f(x)=2^x$ memiliki sifat berikut.

| Sifat | Keterangan |
| --- | --- |
| Naik | Semakin besar $x$, semakin besar nilai $2^x$. |
| Melalui titik | $(0,1)$. |
| Asimtot mendatar | $y=0$. |
| Range | $y>0$. |

---

###### 6. Grafik Fungsi $f(x)=\left(\frac12\right)^x$

Perhatikan fungsi:

$$f(x)=\left(\frac12\right)^x$$

Buat tabel nilai.

| $x$ | $f(x)=\left(\frac12\right)^x$ | Titik |
| --- | --- | --- |
| $-3$ | $\left(\frac12\right)^{-3}=8$ | $(-3,8)$ |
| $-2$ | $\left(\frac12\right)^{-2}=4$ | $(-2,4)$ |
| $-1$ | $\left(\frac12\right)^{-1}=2$ | $(-1,2)$ |
| $0$ | $\left(\frac12\right)^0=1$ | $(0,1)$ |
| $1$ | $\left(\frac12\right)^1=\frac12$ | $\left(1,\frac12\right)$ |
| $2$ | $\left(\frac12\right)^2=\frac14$ | $\left(2,\frac14\right)$ |
| $3$ | $\left(\frac12\right)^3=\frac18$ | $\left(3,\frac18\right)$ |

Karena:

$$0<\frac12<1$$

maka grafik $f(x)=\left(\frac12\right)^x$ merupakan grafik turun.

  📊 **Gambar 2.** Grafik $y=\left(\frac12\right)^x$ dengan titik bantu $(-3,8)$, $(-2,4)$, $(-1,2)$, $(0,1)$, $\left(1,\frac12\right)$, $\left(2,\frac14\right)$, dan $\left(3,\frac18\right)$.

---

###### 7. Perbandingan Grafik Naik dan Turun

Perhatikan dua fungsi berikut.

$$f(x)=2^x$$

dan:

$$g(x)=\left(\frac12\right)^x$$

Keduanya sama-sama melalui titik $(0,1)$ dan memiliki asimtot mendatar $y=0$.

Perbedaannya:

| Fungsi | Basis | Sifat Grafik |
| --- | --- | --- |
| $f(x)=2^x$ | $2>1$ | Naik |
| $g(x)=\left(\frac12\right)^x$ | $0<\frac12<1$ | Turun |

  📊 **Gambar 3.** Perbandingan grafik $y=2^x$ dan $y=\left(\frac12\right)^x$ pada bidang koordinat yang sama.

  💡 **Ingat:** Basis menentukan arah grafik. Jika $a>1$, grafik naik. Jika $0<a<1$, grafik turun.

---

###### 8. Asimtot Mendatar Grafik Eksponen

Asimtot mendatar adalah garis yang didekati grafik, tetapi tidak dipotong oleh grafik.

Pada fungsi eksponen dasar:

$$f(x)=a^x$$

asimtot mendatarnya adalah:

$$y=0$$

Artinya, grafik mendekati sumbu $X$, tetapi tidak pernah menyentuhnya.

Contoh pada $f(x)=2^x$:

Saat $x$ makin kecil, nilai $2^x$ makin mendekati $0$.

$$\begin{aligned}
2^{-1}&=\frac12\\
2^{-2}&=\frac14\\
2^{-3}&=\frac18\\
2^{-4}&=\frac1{16}
\end{aligned}$$

Nilainya makin kecil, tetapi tetap positif.

---

###### 9. Titik Potong dengan Sumbu $Y$

Grafik fungsi eksponen dasar:

$$f(x)=a^x$$

memotong sumbu $Y$ ketika $x=0$.

Substitusi $x=0$:

$$\begin{aligned}
f(0)
&=a^0\\
&=1
\end{aligned}$$

Jadi titik potong sumbu $Y$ adalah:

$$(0,1)$$

  📌 **Catatan:** Fungsi eksponen dasar tidak memiliki titik potong dengan sumbu $X$ karena $a^x$ selalu positif.

---

###### 10. Grafik Fungsi $f(x)=3^x$

Perhatikan fungsi:

$$f(x)=3^x$$

Tabel nilai:

| $x$ | $3^x$ | Titik |
| --- | --- | --- |
| $-2$ | $\frac19$ | $\left(-2,\frac19\right)$ |
| $-1$ | $\frac13$ | $\left(-1,\frac13\right)$ |
| $0$ | $1$ | $(0,1)$ |
| $1$ | $3$ | $(1,3)$ |
| $2$ | $9$ | $(2,9)$ |

Karena $3>1$, grafik $f(x)=3^x$ naik.

Dibandingkan $y=2^x$, grafik $y=3^x$ naik lebih cepat.

  📊 **Gambar 4.** Perbandingan grafik $y=2^x$ dan $y=3^x$ untuk menunjukkan bahwa basis lebih besar membuat pertumbuhan lebih cepat.

---

###### 11. Grafik Fungsi $f(x)=2^x+3$

Fungsi:

$$f(x)=2^x+3$$

merupakan pergeseran grafik:

$$y=2^x$$

sejauh $3$ satuan ke atas.

Karena $2^x>0$, maka:

$$2^x+3>3$$

Jadi range fungsi:

$$y>3$$

Asimtot mendatarnya juga bergeser dari:

$$y=0$$

menjadi:

$$y=3$$

Titik potong sumbu $Y$:

$$\begin{aligned}
f(0)
&=2^0+3\\
&=1+3\\
&=4
\end{aligned}$$

Jadi grafik melalui titik:

$$(0,4)$$

  📊 **Gambar 5.** Grafik $y=2^x+3$ sebagai pergeseran grafik $y=2^x$ sejauh $3$ satuan ke atas, dengan asimtot mendatar $y=3$.

---

###### 12. Grafik Fungsi $f(x)=2^x-2$

Fungsi:

$$f(x)=2^x-2$$

merupakan pergeseran grafik:

$$y=2^x$$

sejauh $2$ satuan ke bawah.

Karena $2^x>0$, maka:

$$2^x-2>-2$$

Range fungsi:

$$y>-2$$

Asimtot mendatarnya:

$$y=-2$$

Titik potong sumbu $Y$:

$$\begin{aligned}
f(0)
&=2^0-2\\
&=1-2\\
&=-1
\end{aligned}$$

Jadi grafik melalui titik:

$$(0,-1)$$

  📊 **Gambar 6.** Grafik $y=2^x-2$ sebagai pergeseran grafik $y=2^x$ sejauh $2$ satuan ke bawah, dengan asimtot mendatar $y=-2$.

---

###### 13. Grafik Fungsi $f(x)=2^{x-1}$

Fungsi:

$$f(x)=2^{x-1}$$

merupakan pergeseran grafik:

$$y=2^x$$

sejauh $1$ satuan ke kanan.

Untuk melihatnya, buat beberapa titik bantu.

| $x$ | $f(x)=2^{x-1}$ | Titik |
| --- | --- | --- |
| $-1$ | $2^{-2}=\frac14$ | $\left(-1,\frac14\right)$ |
| $0$ | $2^{-1}=\frac12$ | $\left(0,\frac12\right)$ |
| $1$ | $2^0=1$ | $(1,1)$ |
| $2$ | $2^1=2$ | $(2,2)$ |
| $3$ | $2^2=4$ | $(3,4)$ |

  📊 **Gambar 7.** Grafik $y=2^{x-1}$ sebagai pergeseran grafik $y=2^x$ sejauh $1$ satuan ke kanan.

---

###### 14. Grafik Fungsi $f(x)=2^{x+1}$

Fungsi:

$$f(x)=2^{x+1}$$

merupakan pergeseran grafik:

$$y=2^x$$

sejauh $1$ satuan ke kiri.

Tabel nilai:

| $x$ | $f(x)=2^{x+1}$ | Titik |
| --- | --- | --- |
| $-3$ | $2^{-2}=\frac14$ | $\left(-3,\frac14\right)$ |
| $-2$ | $2^{-1}=\frac12$ | $\left(-2,\frac12\right)$ |
| $-1$ | $2^0=1$ | $(-1,1)$ |
| $0$ | $2^1=2$ | $(0,2)$ |
| $1$ | $2^2=4$ | $(1,4)$ |

  📊 **Gambar 8.** Grafik $y=2^{x+1}$ sebagai pergeseran grafik $y=2^x$ sejauh $1$ satuan ke kiri.

---

###### 15. Grafik Fungsi $f(x)=-2^x$

Fungsi:

$$f(x)=-2^x$$

dapat ditulis sebagai:

$$f(x)=-(2^x)$$

Grafik ini merupakan pencerminan grafik $y=2^x$ terhadap sumbu $X$.

Karena $2^x>0$, maka:

$$-2^x<0$$

Range fungsi:

$$y<0$$

Asimtot mendatar:

$$y=0$$

Titik potong sumbu $Y$:

$$\begin{aligned}
f(0)
&=-2^0\\
&=-1
\end{aligned}$$

Jadi grafik melalui titik:

$$(0,-1)$$

  📊 **Gambar 9.** Grafik $y=-2^x$ sebagai pencerminan grafik $y=2^x$ terhadap sumbu $X$.

  ⚠️ **Perhatian:** Bentuk $-2^x$ berarti $-(2^x)$, bukan $(-2)^x$.

---

###### 16. Grafik Fungsi $f(x)=2^{-x}$

Fungsi:

$$f(x)=2^{-x}$$

dapat ditulis:

$$f(x)=\left(\frac12\right)^x$$

Karena:

$$2^{-x}=(2^{-1})^x=\left(\frac12\right)^x$$

Jadi grafik $y=2^{-x}$ sama dengan grafik:

$$y=\left(\frac12\right)^x$$

Grafiknya merupakan grafik eksponen turun.

  📊 **Gambar 10.** Grafik $y=2^{-x}$ yang sama dengan grafik $y=\left(\frac12\right)^x$.

---

###### 17. Menentukan Domain, Range, dan Asimtot

Contoh:

Tentukan domain, range, dan asimtot dari:

$$f(x)=3^x-4$$

Domain fungsi eksponen tetap semua bilangan real.

$$D_f=\mathbb{R}$$

Karena:

$$3^x>0$$

maka:

$$3^x-4>-4$$

Jadi range:

$$R_f=\{y\mid y>-4\}$$

Asimtot mendatarnya:

$$y=-4$$

Titik potong sumbu $Y$:

$$\begin{aligned}
f(0)
&=3^0-4\\
&=1-4\\
&=-3
\end{aligned}$$

Jadi grafik melalui titik:

$$(0,-3)$$

---

###### 18. Menentukan Titik Potong Sumbu $X$

Fungsi eksponen dasar $f(x)=a^x$ tidak memiliki titik potong sumbu $X$.

Namun, fungsi eksponen yang digeser ke bawah dapat memotong sumbu $X$.

Contoh:

Tentukan titik potong sumbu $X$ dari:

$$f(x)=2^x-4$$

Titik potong sumbu $X$ terjadi saat:

$$f(x)=0$$

Maka:

$$\begin{aligned}
2^x-4&=0\\
2^x&=4\\
2^x&=2^2\\
x&=2
\end{aligned}$$

Jadi titik potong sumbu $X$ adalah:

$$(2,0)$$

  📊 **Gambar 11.** Grafik $y=2^x-4$ yang memotong sumbu $X$ di titik $(2,0)$ dan memiliki asimtot mendatar $y=-4$.

---

###### 19. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengira grafik eksponen dasar memotong sumbu $X$ | $y=2^x$ dianggap melalui $(0,0)$. | $y=2^x$ melalui $(0,1)$ dan tidak memotong sumbu $X$. |
| Salah menentukan grafik naik atau turun | $\left(\frac12\right)^x$ dianggap naik. | Karena $0<\frac12<1$, grafiknya turun. |
| Salah menentukan asimtot setelah pergeseran | $y=2^x+3$ dianggap berasimtot $y=0$. | Asimtotnya bergeser menjadi $y=3$. |
| Salah membaca bentuk negatif | $-2^x$ dianggap sama dengan $(-2)^x$. | $-2^x=-(2^x)$. |
| Lupa menggunakan titik bantu | Grafik digambar tanpa tabel nilai. | Gunakan tabel nilai agar bentuk grafik lebih tepat. |

  ⚠️ **Perhatian:** Pada grafik eksponen, asimtot dan titik potong sumbu $Y$ sangat membantu menentukan bentuk grafik.

---

###### 20. Rangkuman

- Grafik fungsi eksponen dasar berbentuk:
  $$f(x)=a^x$$
  dengan:
  $$a>0,\quad a\ne1$$
- Domain fungsi eksponen dasar adalah:
  $$\mathbb{R}$$
- Range fungsi eksponen dasar adalah:
  $$y>0$$
- Grafik fungsi eksponen dasar selalu melalui titik:
  $$(0,1)$$
- Asimtot mendatar fungsi eksponen dasar adalah:
  $$y=0$$
- Jika $a>1$, grafik fungsi eksponen naik.
- Jika $0<a<1$, grafik fungsi eksponen turun.
- Fungsi $f(x)=a^x+c$ memiliki asimtot mendatar:
  $$y=c$$
- Fungsi $f(x)=a^{x-h}$ merupakan pergeseran horizontal grafik $y=a^x$.
- Fungsi $f(x)=-a^x$ merupakan pencerminan grafik $y=a^x$ terhadap sumbu $X$.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Buatlah tabel nilai untuk fungsi $f(x)=2^x$ pada $x=-2,-1,0,1,2$, kemudian tentukan sifat grafiknya.

💡 Pembahasan

Hitung nilai fungsi.

| $x$ | $f(x)=2^x$ |
| --- | --- |
| $-2$ | $\frac14$ |
| $-1$ | $\frac12$ |
| $0$ | $1$ |
| $1$ | $2$ |
| $2$ | $4$ |

Karena basisnya $2$ dan $2>1$, maka grafik fungsi $f(x)=2^x$ adalah grafik naik.

  Contoh Soal 2

Tentukan domain, range, asimtot, dan titik potong sumbu $Y$ dari fungsi $f(x)=2^x+5$.

💡 Pembahasan

Domain fungsi eksponen adalah semua bilangan real.

$$D_f=\mathbb{R}$$

Karena:

$$2^x>0$$

maka:

$$2^x+5>5$$

Jadi range:

$$R_f=\{y\mid y>5\}$$

Asimtot mendatar grafik adalah:

$$y=5$$

Titik potong sumbu $Y$ terjadi saat $x=0$.

$$\begin{aligned}
f(0)
&=2^0+5\\
&=1+5\\
&=6
\end{aligned}$$

Jadi titik potong sumbu $Y$ adalah:

$$(0,6)$$

  Contoh Soal 3

Tentukan titik potong sumbu $X$ dari fungsi $f(x)=3^x-9$.

💡 Pembahasan

Titik potong sumbu $X$ terjadi saat $f(x)=0$.

$$\begin{aligned}
3^x-9&=0\\
3^x&=9\\
3^x&=3^2\\
x&=2
\end{aligned}$$

Jadi titik potong sumbu $X$ adalah:

$$(2,0)$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Grafik fungsi $f(x)=2^x$ merupakan grafik ....

A
naik

B
turun

C
konstan

D
garis lurus

E
parabola

💡 Pembahasan

Karena basisnya $2$ dan $2>1$, maka grafik $f(x)=2^x$ merupakan grafik naik.

  Latihan Soal 2

Grafik fungsi $f(x)=\left(\frac13\right)^x$ merupakan grafik ....

A
naik

B
turun

C
konstan

D
parabola terbuka ke atas

E
parabola terbuka ke bawah

💡 Pembahasan

Karena:

$$0<\frac13<1$$

maka grafik $f(x)=\left(\frac13\right)^x$ merupakan grafik turun.

  Latihan Soal 3

Grafik fungsi eksponen dasar $f(x)=a^x$ selalu melalui titik ....

A
$(0,0)$

B
$(0,1)$

C
$(1,0)$

D
$(-1,0)$

E
$(1,1)$

💡 Pembahasan

Untuk $f(x)=a^x$:

$$\begin{aligned}
f(0)
&=a^0\\
&=1
\end{aligned}$$

Jadi grafiknya melalui titik $(0,1)$.

  Latihan Soal 4

Asimtot mendatar dari grafik $f(x)=2^x$ adalah ....

A
$y=0$

B
$x=0$

C
$y=1$

D
$x=1$

E
$y=2$

💡 Pembahasan

Fungsi eksponen dasar $f(x)=a^x$ memiliki asimtot mendatar:

$$y=0$$

  Latihan Soal 5

Range dari fungsi $f(x)=2^x+4$ adalah ....

A
$y>0$

B
$y>4$

C
$y<4$

D
$y\ge4$

E
semua bilangan real

💡 Pembahasan

Karena:

$$2^x>0$$

maka:

$$2^x+4>4$$

Jadi range-nya adalah $y>4$.

  Latihan Soal 6

Asimtot mendatar dari grafik $f(x)=3^x-5$ adalah ....

A
$y=0$

B
$y=-5$

C
$y=5$

D
$x=-5$

E
$x=5$

💡 Pembahasan

Grafik $y=3^x$ memiliki asimtot $y=0$.

Karena fungsi $f(x)=3^x-5$ bergeser $5$ satuan ke bawah, asimtotnya menjadi:

$$y=-5$$

  Latihan Soal 7

Titik potong sumbu $Y$ dari grafik $f(x)=2^x+3$ adalah ....

A
$(0,1)$

B
$(0,3)$

C
$(0,4)$

D
$(3,0)$

E
$(4,0)$

💡 Pembahasan

Titik potong sumbu $Y$ terjadi saat $x=0$.

$$\begin{aligned}
f(0)
&=2^0+3\\
&=1+3\\
&=4
\end{aligned}$$

Jadi titik potong sumbu $Y$ adalah $(0,4)$.

  Latihan Soal 8

Titik potong sumbu $X$ dari grafik $f(x)=2^x-8$ adalah ....

A
$(1,0)$

B
$(2,0)$

C
$(3,0)$

D
$(4,0)$

E
$(8,0)$

💡 Pembahasan

Titik potong sumbu $X$ terjadi saat $f(x)=0$.

$$\begin{aligned}
2^x-8&=0\\
2^x&=8\\
2^x&=2^3\\
x&=3
\end{aligned}$$

Jadi titik potong sumbu $X$ adalah $(3,0)$.

  Latihan Soal 9

Grafik $y=2^x+3$ merupakan pergeseran grafik $y=2^x$ ....

A
$3$ satuan ke atas

B
$3$ satuan ke bawah

C
$3$ satuan ke kanan

D
$3$ satuan ke kiri

E
terhadap sumbu $X$

💡 Pembahasan

Bentuk $y=2^x+3$ berarti grafik $y=2^x$ digeser $3$ satuan ke atas.

  Latihan Soal 10

Grafik $y=-2^x$ merupakan hasil transformasi dari grafik $y=2^x$ berupa ....

A
pergeseran $2$ satuan ke atas

B
pergeseran $2$ satuan ke bawah

C
pencerminan terhadap sumbu $X$

D
pencerminan terhadap sumbu $Y$

E
pergeseran $2$ satuan ke kanan

💡 Pembahasan

Bentuk:

$$y=-2^x$$

berarti:

$$y=-(2^x)$$

sehingga grafiknya merupakan pencerminan grafik $y=2^x$ terhadap sumbu $X$.

### Pertumbuhan Eksponen

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab V Barisan, subbab 5.4.1 Pertumbuhan, hlm. 204–205.*

Pertumbuhan terjadi ketika suatu besaran bertambah dengan persentase (laju) yang tetap pada setiap periode. Nilai besaran tersebut dari periode ke periode membentuk barisan geometri.

#### Masalah: Perkembangan Koloni Bakteri

Seorang peneliti mengamati perkembangan koloni bakteri setiap jam. Jumlah koloni bakteri mula-mula 100, dan setiap bakteri membelah menjadi dua setiap jam. Berapa jumlah koloni bakteri setelah $n$ jam?

**Penyelesaian:**

Misalkan $K(0) = 100$ adalah jumlah koloni mula-mula dan $K(n)$ jumlah koloni setelah $n$ jam.

| Waktu (jam) | Jumlah koloni | Pola bilangan |
| --- | --- | --- |
| 1 | 200 | $100 \times 2 = 100 \times 2^1$ |
| 2 | 400 | $100 \times 2 \times 2 = 100 \times 2^2$ |
| 3 | 800 | $100 \times 2 \times 2 \times 2 = 100 \times 2^3$ |
| $n$ | … | $100 \times 2^n$ |

Jadi model jumlah koloni bakteri setelah $n$ jam adalah:

$$K(n) = 100 \cdot 2^n$$

Setelah 50 jam, jumlah koloninya $K(50) = 100 \cdot 2^{50}$.

#### Rumus Pertumbuhan

Jika besaran awal $P_0$ bertambah dengan laju $i$ (dalam desimal) per periode, maka setelah $n$ periode:

$$P_n = P_0(1 + i)^n$$

#### Contoh

Penduduk suatu kota metropolitan tercatat 3,25 juta jiwa pada tahun 2008 dan diperkirakan menjadi 4,5 juta jiwa pada tahun 2013. Jika tahun 2008 dianggap tahun dasar, berapa persen pertumbuhannya per tahun? Berapa jumlah penduduknya pada tahun 2015?

**Penyelesaian:**

Persentase pertumbuhan penduduk:

$$4{,}5 = 3{,}25(1 + i)^{2013 - 2008} = 3{,}25(1 + i)^5$$

$$\frac{4{,}5}{3{,}25} = (1 + i)^5 \Rightarrow 1{,}3846 = (1 + i)^5$$

$$1 + i = 1{,}3846^{1/5} \Rightarrow i \approx 0{,}0673 = 6{,}73\%$$

Jumlah penduduk pada tahun 2015:

$$P_{2015} = 3{,}25(1 + 0{,}0673)^{7} \approx 3{,}25 \times 1{,}5776 \approx 5{,}13$$

Jadi, pertumbuhan penduduknya sekitar 6,73% per tahun dan jumlah penduduk pada tahun 2015 sekitar 5,13 juta jiwa.

### Peluruhan Eksponen

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab V Barisan, subbab 5.4.2 Peluruhan, hlm. 205–206.*

Peluruhan (penyusutan) terjadi ketika suatu besaran berkurang dengan persentase yang tetap pada setiap periode.

#### Masalah: Peluruhan Neutron

Suatu neutron dapat pecah mendadak menjadi sebuah proton dan sebuah elektron. Jika terdapat 1.000.000 neutron, kira-kira 5% darinya berubah pada akhir setiap menit. Berapa neutron yang masih ada setelah $n$ menit dan setelah 10 menit?

**Penyelesaian:**

Misalkan banyak neutron semula $M$ dan persentase peluruhan $p\%$ setiap menit.

- Setelah 1 menit: $M - \dfrac{p}{100}M = M\left(1 - \dfrac{p}{100}\right)$
- Setelah 2 menit: $M\left(1 - \dfrac{p}{100}\right)\left(1 - \dfrac{p}{100}\right) = M\left(1 - \dfrac{p}{100}\right)^2$
- Setelah 3 menit: $M\left(1 - \dfrac{p}{100}\right)^3$
- Setelah $n$ menit: $M\left(1 - \dfrac{p}{100}\right)^n$

Banyak neutron setiap menit membentuk barisan geometri:

$$M,\ M\left(1 - \frac{p}{100}\right),\ M\left(1 - \frac{p}{100}\right)^2,\ \ldots,\ M\left(1 - \frac{p}{100}\right)^n$$

Bilangan $\left(1 - \dfrac{p}{100}\right)$ disebut **faktor peluruhan**.

Dalam kasus ini $M = 1.000.000$ dan $p = 5$, sehingga:

$$U_n = 1.000.000\left(1 - \frac{5}{100}\right)^n = 1.000.000\,(0{,}95)^n$$

dengan faktor peluruhan 0,95. Setelah 10 menit:

$$U_{10} = 1.000.000\,(0{,}95)^{10}$$

$$U_{10} = 1.000.000 \times 0{,}5987 \approx 598.737$$

Jadi, neutron yang masih ada setelah $n$ menit adalah $1.000.000\,(0{,}95)^n$, dan setelah 10 menit tersisa sekitar 598.737 neutron.

> Catatan: buku menghitung nilai ini dengan tabel logaritma dan memperoleh 598.412; selisihnya berasal dari pembulatan logaritma. Nilai di atas dihitung langsung.

#### Rumus Peluruhan

Jika besaran awal $M$ berkurang $p\%$ setiap periode, maka setelah $n$ periode:

$$M_n = M\left(1 - \frac{p}{100}\right)^n$$

### Bentuk Akar dan Hubungan Bilangan Pangkat dengan Akar

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 1 Eksponen, subbab D Bentuk Akar, bagian 1 Hubungan Bilangan Pangkat dan Akar, hlm. 21–22.*

#### Masalah: Peluruhan Dosis Obat

Peluruhan dosis obat di dalam tubuh pasien dinyatakan dengan fungsi $f(x) = 50(0{,}5)^x$, dengan $x$ adalah waktu yang dibutuhkan obat untuk meluruh setengah dosis dari dosis sebelumnya. Untuk mengetahui banyak dosis setelah 30 menit (setengah periode), dihitung

$$f\left(\tfrac{1}{2}\right) = 50(0{,}5)^{\frac{1}{2}}$$

Bentuk lain dari $(0{,}5)^{\frac{1}{2}}$ adalah $\sqrt{0{,}5}$. Bentuk ini disebut **bentuk akar**.

#### Definisi Bentuk Akar

Untuk setiap bilangan pangkat rasional $\dfrac{m}{n}$, dengan $m$ dan $n$ bilangan bulat dan $n > 0$, didefinisikan

$$a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m \quad \text{atau} \quad a^{\frac{m}{n}} = \sqrt[n]{a^m}$$

Sifat-sifat eksponen juga berlaku untuk bentuk pangkat pecahan ini.

#### Contoh 6

Sederhanakan bentuk $\left(2\sqrt{x}\right)\left(3\sqrt[3]{x}\right)$ untuk $x > 0$.

**Alternatif penyelesaian:**

$$\left(2\sqrt{x}\right)\left(3\sqrt[3]{x}\right) = \left(2x^{\frac{1}{2}}\right)\left(3x^{\frac{1}{3}}\right) = 2 \cdot 3 \cdot x^{\frac{1}{2} + \frac{1}{3}} = 6x^{\frac{3+2}{6}} = 6x^{\frac{5}{6}}$$

Pertanyaan berpikir kritis dari buku: apakah $\sqrt{a + b} = \sqrt{a} + \sqrt{b}$ benar? Jelaskan jawabanmu.

### Merasionalkan Bentuk Akar

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 1 Eksponen, subbab D Bentuk Akar, bagian 2 Merasionalkan Bentuk Akar, hlm. 22–23.*

Untuk merasionalkan bentuk akar, kalikan dengan **bentuk akar sekawannya**.

Bentuk $\dfrac{a}{\sqrt{b}}$ dirasionalkan dengan mengalikan $\dfrac{\sqrt{b}}{\sqrt{b}}$:

$$\frac{a}{\sqrt{b}} = \frac{a}{\sqrt{b}} \times \frac{\sqrt{b}}{\sqrt{b}} = \frac{a}{b}\sqrt{b}$$

Bentuk $\dfrac{c}{\sqrt{a} + \sqrt{b}}$, $\dfrac{c}{\sqrt{a} - \sqrt{b}}$, $\dfrac{c}{a + \sqrt{b}}$, dan $\dfrac{c}{a - \sqrt{b}}$ dirasionalkan dengan mengalikan sekawannya. Bentuk $\sqrt{a} + \sqrt{b}$ dan $\sqrt{a} - \sqrt{b}$ saling sekawan, demikian pula $a + \sqrt{b}$ dan $a - \sqrt{b}$. Hasilnya:

$$\frac{c}{\sqrt{a} + \sqrt{b}} \times \frac{\sqrt{a} - \sqrt{b}}{\sqrt{a} - \sqrt{b}} = \frac{c\left(\sqrt{a} - \sqrt{b}\right)}{a - b}$$

$$\frac{c}{\sqrt{a} - \sqrt{b}} \times \frac{\sqrt{a} + \sqrt{b}}{\sqrt{a} + \sqrt{b}} = \frac{c\left(\sqrt{a} + \sqrt{b}\right)}{a - b}$$

$$\frac{c}{a + \sqrt{b}} \times \frac{a - \sqrt{b}}{a - \sqrt{b}} = \frac{c\left(a - \sqrt{b}\right)}{a^2 - b}$$

$$\frac{c}{a - \sqrt{b}} \times \frac{a + \sqrt{b}}{a + \sqrt{b}} = \frac{c\left(a + \sqrt{b}\right)}{a^2 - b}$$

### Persamaan Eksponen

#### Persamaan Eksponen

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/persamaan-eksponen*

Pada materi sebelumnya, kita telah mempelajari bentuk pangkat dan sifat-sifat eksponen. Sekarang kita akan membahas **persamaan eksponen**.

Persamaan eksponen adalah persamaan yang memuat variabel pada bagian pangkat atau eksponen.

  📌 **Catatan:** Persamaan eksponen sering diselesaikan dengan mengubah kedua ruas agar memiliki basis yang sama.

---

###### 1. Pengertian Persamaan Eksponen

Persamaan eksponen adalah persamaan yang variabelnya muncul pada pangkat.

Contoh persamaan eksponen:

$$2^x=32$$

$$3^{x+1}=81$$

$$5^{2x-1}=125$$

Pada persamaan tersebut, variabel $x$ berada di bagian pangkat.

  💡 **Ingat:** Jika variabel berada di pangkat, maka persamaan tersebut termasuk persamaan eksponen.

---

###### 2. Ide Dasar Menyelesaikan Persamaan Eksponen

Ide utama dalam menyelesaikan persamaan eksponen adalah membuat kedua ruas memiliki basis yang sama.

Jika:

$$a^m=a^n$$

dengan $a>0$ dan $a\ne1$, maka:

$$m=n$$

Artinya, jika basisnya sama, maka pangkatnya dapat disamakan.

Contoh:

$$2^x=2^5$$

maka:

$$x=5$$

---

###### 3. Syarat Basis pada Persamaan Eksponen

Pada bentuk:

$$a^m=a^n$$

basis $a$ biasanya memenuhi:

$$a>0,\quad a\ne1$$

Mengapa?

Jika $a=1$, maka:

$$1^m=1^n=1$$

untuk banyak nilai $m$ dan $n$, sehingga pangkatnya tidak dapat ditentukan secara tunggal.

Jika $a=0$ atau negatif, pembahasan menjadi lebih terbatas dan tidak selalu berlaku untuk semua bilangan real.

  ⚠️ **Perhatian:** Dalam pembelajaran SMA, persamaan eksponen umumnya dibahas untuk basis positif dan tidak sama dengan $1$.

---

###### 4. Menyelesaikan Persamaan Eksponen dengan Basis Sama

Contoh:

$$2^{x+1}=2^5$$

Karena basis kedua ruas sama, yaitu $2$, maka pangkatnya disamakan.

$$\begin{aligned}
x+1&=5\\
x&=4
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x=4$$

---

###### 5. Mengubah Bilangan ke Bentuk Pangkat

Tidak semua persamaan langsung memiliki basis sama. Kadang salah satu ruas harus diubah terlebih dahulu.

Contoh:

$$3^x=81$$

Karena:

$$81=3^4$$

maka:

$$3^x=3^4$$

Sehingga:

$$x=4$$

---

###### 6. Contoh Mengubah Ruas Kanan ke Basis Sama

Selesaikan:

$$2^{x+2}=64$$

Ubah $64$ menjadi pangkat basis $2$.

$$64=2^6$$

Maka:

$$2^{x+2}=2^6$$

Samakan pangkatnya.

$$\begin{aligned}
x+2&=6\\
x&=4
\end{aligned}$$

Jadi:

$$x=4$$

---

###### 7. Contoh Mengubah Ruas Kiri dan Kanan

Selesaikan:

$$4^{x}=32$$

Ubah kedua ruas ke basis $2$.

$$4=2^2$$

dan:

$$32=2^5$$

Maka:

$$\begin{aligned}
4^x&=32\\
(2^2)^x&=2^5\\
2^{2x}&=2^5
\end{aligned}$$

Samakan pangkatnya.

$$\begin{aligned}
2x&=5\\
x&=\frac52
\end{aligned}$$

Jadi:

$$x=\frac52$$

---

###### 8. Persamaan Eksponen dengan Pangkat Linear

Persamaan eksponen sering memuat pangkat berbentuk linear.

Contoh:

$$5^{2x-1}=125$$

Karena:

$$125=5^3$$

maka:

$$5^{2x-1}=5^3$$

Samakan pangkatnya.

$$\begin{aligned}
2x-1&=3\\
2x&=4\\
x&=2
\end{aligned}$$

Jadi:

$$x=2$$

---

###### 9. Persamaan Eksponen dengan Dua Bentuk Linear

Contoh:

$$7^{3x-2}=7^{x+4}$$

Karena basisnya sama, pangkatnya disamakan.

$$\begin{aligned}
3x-2&=x+4\\
3x-x&=4+2\\
2x&=6\\
x&=3
\end{aligned}$$

Jadi:

$$x=3$$

---

###### 10. Persamaan Eksponen dengan Basis Berbeda tetapi Dapat Disamakan

Contoh:

$$8^{x-1}=16^{x+1}$$

Ubah kedua basis menjadi basis $2$.

$$8=2^3$$

dan:

$$16=2^4$$

Maka:

$$\begin{aligned}
8^{x-1}&=16^{x+1}\\
(2^3)^{x-1}&=(2^4)^{x+1}\\
2^{3(x-1)}&=2^{4(x+1)}
\end{aligned}$$

Samakan pangkatnya.

$$\begin{aligned}
3(x-1)&=4(x+1)\\
3x-3&=4x+4\\
-3-4&=4x-3x\\
-7&=x
\end{aligned}$$

Jadi:

$$x=-7$$

  💡 **Strategi:** Jika basis berbeda, cari apakah keduanya dapat diubah menjadi basis pokok yang sama.

---

###### 11. Persamaan Eksponen dengan Basis Pecahan

Persamaan eksponen juga dapat memuat basis pecahan.

Contoh:

$$\left(\frac12\right)^x=8$$

Ubah kedua ruas ke basis $2$.

Karena:

$$\frac12=2^{-1}$$

dan:

$$8=2^3$$

maka:

$$\begin{aligned}
\left(\frac12\right)^x&=8\\
(2^{-1})^x&=2^3\\
2^{-x}&=2^3
\end{aligned}$$

Samakan pangkatnya.

$$\begin{aligned}
-x&=3\\
x&=-3
\end{aligned}$$

Jadi:

$$x=-3$$

---

###### 12. Persamaan Eksponen dengan Pangkat Negatif

Contoh:

$$2^{x-3}=\frac{1}{16}$$

Ubah ruas kanan ke basis $2$.

Karena:

$$16=2^4$$

maka:

$$\frac{1}{16}=2^{-4}$$

Sehingga:

$$2^{x-3}=2^{-4}$$

Samakan pangkatnya.

$$\begin{aligned}
x-3&=-4\\
x&=-1
\end{aligned}$$

Jadi:

$$x=-1$$

---

###### 13. Persamaan Eksponen dengan Bentuk Kuadrat pada Pangkat

Kadang pangkat pada persamaan eksponen berbentuk kuadrat.

Contoh:

$$3^{x^2-4}=3^{2x}$$

Karena basisnya sama, pangkatnya disamakan.

$$x^2-4=2x$$

Pindahkan semua suku ke satu ruas.

$$\begin{aligned}
x^2-4&=2x\\
x^2-2x-4&=0
\end{aligned}$$

Gunakan rumus kuadrat.

$$\begin{aligned}
x&=\frac{-(-2)\pm\sqrt{(-2)^2-4(1)(-4)}}{2(1)}\\
&=\frac{2\pm\sqrt{4+16}}{2}\\
&=\frac{2\pm\sqrt{20}}{2}\\
&=\frac{2\pm2\sqrt5}{2}\\
&=1\pm\sqrt5
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x=1+\sqrt5 \quad \text{atau} \quad x=1-\sqrt5$$

---

###### 14. Persamaan Eksponen dengan Substitusi Sederhana

Beberapa persamaan eksponen dapat diselesaikan dengan substitusi.

Contoh:

$$2^{2x}-5\cdot2^x+4=0$$

Perhatikan bahwa:

$$2^{2x}=(2^x)^2$$

Misalkan:

$$y=2^x$$

Maka persamaan menjadi:

$$y^2-5y+4=0$$

Faktorkan:

$$\begin{aligned}
y^2-5y+4&=0\\
(y-1)(y-4)&=0
\end{aligned}$$

Maka:

$$y=1 \quad \text{atau} \quad y=4$$

Kembalikan ke $y=2^x$.

Untuk $y=1$:

$$\begin{aligned}
2^x&=1\\
2^x&=2^0\\
x&=0
\end{aligned}$$

Untuk $y=4$:

$$\begin{aligned}
2^x&=4\\
2^x&=2^2\\
x&=2
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x=0 \quad \text{atau} \quad x=2$$

  📌 **Catatan:** Jika ada bentuk $a^{2x}$ dan $a^x$, biasanya dapat digunakan substitusi $y=a^x$.

---

###### 15. Persamaan Eksponen dengan Substitusi Basis Lain

Contoh:

$$3^{2x}-10\cdot3^x+9=0$$

Misalkan:

$$y=3^x$$

Maka:

$$3^{2x}=(3^x)^2=y^2$$

Persamaan menjadi:

$$y^2-10y+9=0$$

Faktorkan:

$$\begin{aligned}
y^2-10y+9&=0\\
(y-1)(y-9)&=0
\end{aligned}$$

Maka:

$$y=1 \quad \text{atau} \quad y=9$$

Kembalikan ke $y=3^x$.

$$\begin{aligned}
3^x&=1\\
3^x&=3^0\\
x&=0
\end{aligned}$$

atau:

$$\begin{aligned}
3^x&=9\\
3^x&=3^2\\
x&=2
\end{aligned}$$

Jadi:

$$x=0 \quad \text{atau} \quad x=2$$

---

###### 16. Persamaan Eksponen dengan Bentuk $a^{f(x)}=1$

Jika:

$$a^{f(x)}=1$$

dengan $a>0$ dan $a\ne1$, maka:

$$f(x)=0$$

Contoh:

$$5^{2x-6}=1$$

Karena:

$$1=5^0$$

maka:

$$5^{2x-6}=5^0$$

Samakan pangkatnya.

$$\begin{aligned}
2x-6&=0\\
2x&=6\\
x&=3
\end{aligned}$$

Jadi:

$$x=3$$

---

###### 17. Persamaan Eksponen dengan Bentuk $a^{f(x)}=a$

Jika:

$$a^{f(x)}=a$$

maka:

$$a^{f(x)}=a^1$$

sehingga:

$$f(x)=1$$

Contoh:

$$4^{x+2}=4$$

Karena:

$$4=4^1$$

maka:

$$4^{x+2}=4^1$$

Sehingga:

$$\begin{aligned}
x+2&=1\\
x&=-1
\end{aligned}$$

Jadi:

$$x=-1$$

---

###### 18. Mengecek Solusi Persamaan Eksponen

Setelah memperoleh solusi, solusi dapat dicek dengan substitusi ke persamaan awal.

Contoh:

Diketahui solusi dari:

$$2^{x+2}=64$$

adalah $x=4$.

Cek:

$$\begin{aligned}
2^{x+2}
&=2^{4+2}\\
&=2^6\\
&=64
\end{aligned}$$

Karena ruas kiri sama dengan ruas kanan, maka solusi $x=4$ benar.

  💡 **Strategi:** Pengecekan solusi sangat berguna terutama jika persamaan melibatkan bentuk kuadrat atau substitusi.

---

###### 19. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Langsung menyamakan pangkat padahal basis berbeda | Dari $2^x=3^5$ langsung ditulis $x=5$. | Pangkat hanya boleh disamakan jika basisnya sama. |
| Salah mengubah basis | $16=2^3$. | Seharusnya $16=2^4$. |
| Salah pada basis pecahan | $\left(\frac12\right)^x=2^x$. | Seharusnya $\left(\frac12\right)^x=(2^{-1})^x=2^{-x}$. |
| Mengabaikan tanda negatif pada pangkat | $\frac{1}{8}=2^3$. | Seharusnya $\frac{1}{8}=2^{-3}$. |
| Salah substitusi | Jika $y=2^x$, maka $2^{2x}=2y$. | Seharusnya $2^{2x}=(2^x)^2=y^2$. |

  ⚠️ **Perhatian:** Kunci persamaan eksponen adalah ketelitian dalam mengubah basis dan menyamakan pangkat.

---

###### 20. Rangkuman

- Persamaan eksponen adalah persamaan yang memuat variabel pada pangkat.
- Jika:
  $$a^m=a^n$$
  dengan $a>0$ dan $a\ne1$, maka:
  $$m=n$$
- Langkah umum menyelesaikan persamaan eksponen:
  1. Ubah kedua ruas ke basis yang sama.
  2. Samakan pangkatnya.
  3. Selesaikan persamaan pangkat.
  4. Cek solusi jika diperlukan.
- Jika ada bentuk $a^{2x}$ dan $a^x$, gunakan substitusi:
  $$y=a^x$$
- Jika:
  $$a^{f(x)}=1$$
  maka:
  $$f(x)=0$$
  untuk $a>0$ dan $a\ne1$.
- Pangkat hanya boleh disamakan jika basisnya sama.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Selesaikan persamaan berikut.
$$2^{x+3}=32$$

💡 Pembahasan

Ubah $32$ menjadi pangkat basis $2$.

$$32=2^5$$

Maka:

$$\begin{aligned}
2^{x+3}&=32\\
2^{x+3}&=2^5
\end{aligned}$$

Karena basisnya sama, pangkatnya disamakan.

$$\begin{aligned}
x+3&=5\\
x&=2
\end{aligned}$$

Jadi:

$$x=2$$

  Contoh Soal 2

Selesaikan persamaan berikut.
$$9^{x-1}=27^{x+1}$$

💡 Pembahasan

Ubah kedua basis menjadi basis $3$.

$$9=3^2,\quad 27=3^3$$

Maka:

$$\begin{aligned}
9^{x-1}&=27^{x+1}\\
(3^2)^{x-1}&=(3^3)^{x+1}\\
3^{2(x-1)}&=3^{3(x+1)}
\end{aligned}$$

Samakan pangkatnya.

$$\begin{aligned}
2(x-1)&=3(x+1)\\
2x-2&=3x+3\\
-2-3&=3x-2x\\
-5&=x
\end{aligned}$$

Jadi:

$$x=-5$$

  Contoh Soal 3

Selesaikan persamaan berikut.
$$2^{2x}-5\cdot2^x+4=0$$

💡 Pembahasan

Gunakan substitusi:

$$y=2^x$$

sehingga:

$$2^{2x}=(2^x)^2=y^2$$

Persamaan menjadi:

$$\begin{aligned}
y^2-5y+4&=0\\
(y-1)(y-4)&=0
\end{aligned}$$

Maka:

$$y=1 \quad \text{atau} \quad y=4$$

Kembalikan ke $y=2^x$.

Untuk $y=1$:

$$\begin{aligned}
2^x&=1\\
2^x&=2^0\\
x&=0
\end{aligned}$$

Untuk $y=4$:

$$\begin{aligned}
2^x&=4\\
2^x&=2^2\\
x&=2
\end{aligned}$$

Jadi:

$$x=0 \quad \text{atau} \quad x=2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Penyelesaian dari $2^x=16$ adalah ....

A
$2$

B
$3$

C
$4$

D
$5$

E
$6$

💡 Pembahasan

$$16=2^4$$

Maka:

$$\begin{aligned}
2^x&=16\\
2^x&=2^4\\
x&=4
\end{aligned}$$

  Latihan Soal 2

Penyelesaian dari $3^{x+1}=81$ adalah ....

A
$1$

B
$2$

C
$3$

D
$4$

E
$5$

💡 Pembahasan

$$81=3^4$$

Maka:

$$\begin{aligned}
3^{x+1}&=81\\
3^{x+1}&=3^4\\
x+1&=4\\
x&=3
\end{aligned}$$

  Latihan Soal 3

Penyelesaian dari $5^{2x-1}=125$ adalah ....

A
$0$

B
$1$

C
$2$

D
$3$

E
$4$

💡 Pembahasan

$$125=5^3$$

Maka:

$$\begin{aligned}
5^{2x-1}&=125\\
5^{2x-1}&=5^3\\
2x-1&=3\\
2x&=4\\
x&=2
\end{aligned}$$

  Latihan Soal 4

Penyelesaian dari $4^x=32$ adalah ....

A
$1$

B
$\frac52$

C
$3$

D
$\frac72$

E
$4$

💡 Pembahasan

Ubah ke basis $2$.

$$\begin{aligned}
4^x&=32\\
(2^2)^x&=2^5\\
2^{2x}&=2^5\\
2x&=5\\
x&=\frac52
\end{aligned}$$

  Latihan Soal 5

Penyelesaian dari $8^{x-1}=16^{x+1}$ adalah ....

A
$-9$

B
$-7$

C
$-5$

D
$5$

E
$7$

💡 Pembahasan

Ubah ke basis $2$.

$$\begin{aligned}
8^{x-1}&=16^{x+1}\\
(2^3)^{x-1}&=(2^4)^{x+1}\\
2^{3(x-1)}&=2^{4(x+1)}
\end{aligned}$$

Samakan pangkat.

$$\begin{aligned}
3(x-1)&=4(x+1)\\
3x-3&=4x+4\\
-7&=x
\end{aligned}$$

Jadi, $x=-7$.

  Latihan Soal 6

Penyelesaian dari $\left(\frac12\right)^x=32$ adalah ....

A
$-5$

B
$-4$

C
$4$

D
$5$

E
$6$

💡 Pembahasan

Ubah ke basis $2$.

$$\begin{aligned}
\left(\frac12\right)^x&=32\\
(2^{-1})^x&=2^5\\
2^{-x}&=2^5\\
-x&=5\\
x&=-5
\end{aligned}$$

  Latihan Soal 7

Penyelesaian dari $2^{x-3}=\frac{1}{8}$ adalah ....

A
$-2$

B
$-1$

C
$0$

D
$1$

E
$2$

💡 Pembahasan

Karena:

$$\frac18=2^{-3}$$

maka:

$$\begin{aligned}
2^{x-3}&=\frac18\\
2^{x-3}&=2^{-3}\\
x-3&=-3\\
x&=0
\end{aligned}$$

  Latihan Soal 8

Penyelesaian dari $3^{2x}=3^{x+6}$ adalah ....

A
$3$

B
$4$

C
$5$

D
$6$

E
$7$

💡 Pembahasan

Karena basis sama, samakan pangkat.

$$\begin{aligned}
3^{2x}&=3^{x+6}\\
2x&=x+6\\
x&=6
\end{aligned}$$

  Latihan Soal 9

Penyelesaian dari $5^{2x-4}=1$ adalah ....

A
$0$

B
$1$

C
$2$

D
$3$

E
$4$

💡 Pembahasan

Karena:

$$1=5^0$$

maka:

$$\begin{aligned}
5^{2x-4}&=1\\
5^{2x-4}&=5^0\\
2x-4&=0\\
2x&=4\\
x&=2
\end{aligned}$$

  Latihan Soal 10

Penyelesaian dari $2^{2x}-6\cdot2^x+8=0$ adalah ....

A
$x=0$ atau $x=1$

B
$x=1$ atau $x=2$

C
$x=2$ atau $x=3$

D
$x=-1$ atau $x=2$

E
$x=-2$ atau $x=1$

💡 Pembahasan

Misalkan:

$$y=2^x$$

maka:

$$2^{2x}=y^2$$

Persamaan menjadi:

$$\begin{aligned}
y^2-6y+8&=0\\
(y-2)(y-4)&=0
\end{aligned}$$

Maka $y=2$ atau $y=4$.

Karena $y=2^x$, diperoleh:

$$\begin{aligned}
2^x&=2\\
x&=1
\end{aligned}$$

atau:

$$\begin{aligned}
2^x&=4\\
x&=2
\end{aligned}$$

Jadi, $x=1$ atau $x=2$.

### Pertidaksamaan Eksponen

#### Pertidaksamaan Eksponen

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pertidaksamaan-eksponen*

Pada materi sebelumnya, kita telah mempelajari grafik fungsi eksponen. Sekarang kita akan membahas **pertidaksamaan eksponen**.

Pertidaksamaan eksponen adalah pertidaksamaan yang memuat variabel pada bagian pangkat. Materi ini sangat berkaitan dengan sifat naik dan turun pada fungsi eksponen.

  📌 **Catatan:** Kunci utama pertidaksamaan eksponen adalah memperhatikan basisnya. Jika basis lebih dari $1$, tanda pertidaksamaan tetap. Jika basis di antara $0$ dan $1$, tanda pertidaksamaan berbalik.

---

###### 1. Pengertian Pertidaksamaan Eksponen

Pertidaksamaan eksponen adalah pertidaksamaan yang variabelnya berada pada pangkat.

Contoh:

$$2^x>16$$

$$3^{x+1}\le81$$

$$\left(\frac12\right)^x<8$$

$$5^{2x-1}\ge125$$

Pada contoh tersebut, variabel $x$ berada pada pangkat, sehingga termasuk pertidaksamaan eksponen.

---

###### 2. Mengingat Kembali Fungsi Eksponen Naik

Fungsi eksponen:

$$f(x)=a^x$$

dengan:

$$a>1$$

merupakan fungsi naik.

Artinya, jika nilai pangkat lebih besar, maka nilai fungsi juga lebih besar.

Jika:

$$a^m>a^n$$

dengan $a>1$, maka:

$$m>n$$

Demikian juga:

$$a^m<a^n \Longleftrightarrow m<n$$

  💡 **Ingat:** Untuk basis $a>1$, tanda pertidaksamaan tetap.

---

###### 3. Mengingat Kembali Fungsi Eksponen Turun

Fungsi eksponen:

$$f(x)=a^x$$

dengan:

$$0<a<1$$

merupakan fungsi turun.

Artinya, jika nilai pangkat lebih besar, nilai fungsi justru lebih kecil.

Jika:

$$a^m>a^n$$

dengan $0<a<1$, maka:

$$m<n$$

Demikian juga:

$$a^m<a^n \Longleftrightarrow m>n$$

  ⚠️ **Perhatian:** Untuk basis $0<a<1$, tanda pertidaksamaan harus dibalik.

---

###### 4. Aturan Dasar Pertidaksamaan Eksponen

Perhatikan aturan berikut.

| Basis | Bentuk | Kesimpulan |
| --- | --- | --- |
| $a>1$ | $a^{f(x)}>a^{g(x)}$ | $f(x)>g(x)$ |
| $a>1$ | $a^{f(x)}<a^{g(x)}$ | $f(x)<g(x)$ |
| $0<a<1$ | $a^{f(x)}>a^{g(x)}$ | $f(x)<g(x)$ |
| $0<a<1$ | $a^{f(x)}<a^{g(x)}$ | $f(x)>g(x)$ |

---

###### 5. Menyelesaikan Pertidaksamaan dengan Basis Lebih dari 1

Contoh:

$$2^x>32$$

Ubah $32$ menjadi pangkat basis $2$.

$$32=2^5$$

Maka:

$$2^x>2^5$$

Karena basis $2>1$, tanda pertidaksamaan tetap.

$$x>5$$

Jadi, himpunan penyelesaiannya adalah:

$$\{x\mid x>5,\ x\in\mathbb{R}\}$$

---

###### 6. Contoh Basis Lebih dari 1 dengan Pangkat Linear

Selesaikan:

$$3^{x+2}\le81$$

Ubah $81$ menjadi basis $3$.

$$81=3^4$$

Maka:

$$3^{x+2}\le3^4$$

Karena basis $3>1$, tanda pertidaksamaan tetap.

$$\begin{aligned}
x+2&\le4\\
x&\le2
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x\le2$$

---

###### 7. Menyelesaikan Pertidaksamaan dengan Basis Pecahan

Contoh:

$$\left(\frac12\right)^x>8$$

Ubah kedua ruas menjadi basis $2$.

$$\frac12=2^{-1}$$

dan:

$$8=2^3$$

Maka:

$$\left(\frac12\right)^x>8$$

menjadi:

$$2^{-x}>2^3$$

Karena basis $2>1$, tanda tetap ketika membandingkan pangkat pada basis $2$.

$$\begin{aligned}
-x&>3\\
x&<-3
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x<-3$$

  📌 **Catatan:** Cara ini aman karena basis akhirnya dibuat menjadi $2>1$.

---

###### 8. Basis Pecahan Langsung dengan Tanda Berbalik

Contoh yang sama dapat diselesaikan langsung dengan basis $\frac12$.

$$\left(\frac12\right)^x>8$$

Ubah $8$ menjadi basis $\frac12$.

Karena:

$$8=2^3=\left(\frac12\right)^{-3}$$

maka:

$$\left(\frac12\right)^x>\left(\frac12\right)^{-3}$$

Karena:

$$0<\frac12<1$$

maka tanda pertidaksamaan dibalik.

$$x<-3$$

Hasilnya sama.

  ⚠️ **Perhatian:** Jika langsung memakai basis pecahan antara $0$ dan $1$, tanda pertidaksamaan harus dibalik.

---

###### 9. Pertidaksamaan Eksponen dengan Basis Berbeda

Contoh:

$$4^{x-1}\ge8$$

Ubah kedua ruas menjadi basis $2$.

$$4=2^2$$

dan:

$$8=2^3$$

Maka:

$$\begin{aligned}
4^{x-1}&\ge8\\
(2^2)^{x-1}&\ge2^3\\
2^{2(x-1)}&\ge2^3
\end{aligned}$$

Karena basis $2>1$, tanda tetap.

$$\begin{aligned}
2(x-1)&\ge3\\
2x-2&\ge3\\
2x&\ge5\\
x&\ge\frac52
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x\ge\frac52$$

---

###### 10. Pertidaksamaan Eksponen dengan Dua Ruas Berpangkat

Contoh:

$$5^{2x-1}<5^{x+4}$$

Karena basisnya sama dan $5>1$, tanda tetap.

$$\begin{aligned}
2x-1&<x+4\\
2x-x&<4+1\\
x&<5
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x<5$$

---

###### 11. Pertidaksamaan Eksponen dengan Basis Pecahan pada Kedua Ruas

Contoh:

$$\left(\frac13\right)^{2x+1}\le\left(\frac13\right)^{x-2}$$

Karena:

$$0<\frac13<1$$

maka tanda pertidaksamaan dibalik ketika pangkat dibandingkan.

$$\begin{aligned}
2x+1&\ge x-2\\
2x-x&\ge -2-1\\
x&\ge -3
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x\ge -3$$

  💡 **Strategi:** Jika basis pecahan tetap dipakai, langsung balik tanda saat menyamakan pangkat.

---

###### 12. Pertidaksamaan Eksponen dengan Bentuk Kuadrat pada Pangkat

Contoh:

$$2^{x^2-3x}\le2^4$$

Karena basis $2>1$, tanda tetap.

$$x^2-3x\le4$$

Pindahkan semua suku ke satu ruas.

$$\begin{aligned}
x^2-3x&\le4\\
x^2-3x-4&\le0\\
(x-4)(x+1)&\le0
\end{aligned}$$

Titik pembuat nol:

$$x=4 \quad \text{atau} \quad x=-1$$

Karena bentuk kuadrat terbuka ke atas, maka nilai $\le0$ berada di antara akar-akarnya.

Jadi:

$$-1\le x\le4$$

  📊 **Gambar 1.** Garis bilangan penyelesaian pertidaksamaan $(x-4)(x+1)\le0$, dengan daerah penyelesaian $-1\le x\le4$.

---

###### 13. Pertidaksamaan Eksponen dengan Basis Pecahan dan Pangkat Kuadrat

Contoh:

$$\left(\frac12\right)^{x^2-5x}<\left(\frac12\right)^6$$

Karena:

$$0<\frac12<1$$

maka tanda pertidaksamaan dibalik.

$$x^2-5x>6$$

Pindahkan semua suku ke satu ruas.

$$\begin{aligned}
x^2-5x&>6\\
x^2-5x-6&>0\\
(x-6)(x+1)&>0
\end{aligned}$$

Titik pembuat nol:

$$x=6 \quad \text{atau} \quad x=-1$$

Karena bentuk kuadrat terbuka ke atas, maka nilai $>0$ berada di luar akar-akarnya.

Jadi:

$$x<-1 \quad \text{atau} \quad x>6$$

  📊 **Gambar 2.** Garis bilangan penyelesaian pertidaksamaan $(x-6)(x+1)>0$, dengan daerah penyelesaian $x<-1$ atau $x>6$.

---

###### 14. Pertidaksamaan Eksponen Bentuk $a^{f(x)}\ge1$

Jika:

$$a^{f(x)}\ge1$$

maka penyelesaiannya bergantung pada basis $a$.

Karena:

$$1=a^0$$

maka:

$$a^{f(x)}\ge a^0$$

Jika $a>1$, maka:

$$f(x)\ge0$$

Jika $0<a<1$, maka:

$$f(x)\le0$$

Contoh:

$$3^{2x-6}\ge1$$

Karena $3>1$, maka:

$$\begin{aligned}
2x-6&\ge0\\
2x&\ge6\\
x&\ge3
\end{aligned}$$

Jadi:

$$x\ge3$$

---

###### 15. Pertidaksamaan Eksponen Bentuk Basis Pecahan terhadap 1

Contoh:

$$\left(\frac14\right)^{x+2}\ge1$$

Karena:

$$1=\left(\frac14\right)^0$$

maka:

$$\left(\frac14\right)^{x+2}\ge\left(\frac14\right)^0$$

Karena:

$$0<\frac14<1$$

maka tanda pertidaksamaan dibalik.

$$\begin{aligned}
x+2&\le0\\
x&\le-2
\end{aligned}$$

Jadi:

$$x\le-2$$

---

###### 16. Pertidaksamaan Eksponen dengan Substitusi Sederhana

Beberapa pertidaksamaan eksponen dapat diselesaikan dengan substitusi.

Contoh:

$$2^{2x}-5\cdot2^x+4>0$$

Misalkan:

$$y=2^x$$

Karena $2^x>0$, maka:

$$y>0$$

Selain itu:

$$2^{2x}=(2^x)^2=y^2$$

Sehingga pertidaksamaan menjadi:

$$y^2-5y+4>0$$

Faktorkan.

$$\begin{aligned}
y^2-5y+4&>0\\
(y-1)(y-4)&>0
\end{aligned}$$

Dengan garis bilangan, diperoleh:

$$y<1 \quad \text{atau} \quad y>4$$

Karena $y=2^x$, maka:

$$2^x<1 \quad \text{atau} \quad 2^x>4$$

Untuk $2^x<1$:

$$\begin{aligned}
2^x&<2^0\\
x&<0
\end{aligned}$$

Untuk $2^x>4$:

$$\begin{aligned}
2^x&>2^2\\
x&>2
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x<0 \quad \text{atau} \quad x>2$$

  📊 **Gambar 3.** Garis bilangan penyelesaian pertidaksamaan $(y-1)(y-4)>0$, dengan daerah $y<1$ atau $y>4$.

---

###### 17. Pertidaksamaan Eksponen dengan Substitusi dan Syarat $y>0$

Contoh:

$$3^{2x}-10\cdot3^x+9\le0$$

Misalkan:

$$y=3^x$$

Karena $3^x>0$, maka:

$$y>0$$

Persamaan menjadi:

$$y^2-10y+9\le0$$

Faktorkan.

$$\begin{aligned}
y^2-10y+9&\le0\\
(y-1)(y-9)&\le0
\end{aligned}$$

Maka:

$$1\le y\le9$$

Kembalikan ke $y=3^x$.

$$1\le3^x\le9$$

Ubah menjadi basis $3$.

$$3^0\le3^x\le3^2$$

Karena basis $3>1$, maka:

$$0\le x\le2$$

Jadi, penyelesaiannya adalah:

$$0\le x\le2$$

  ⚠️ **Perhatian:** Saat menggunakan substitusi $y=a^x$, selalu ingat bahwa $y>0$.

---

###### 18. Menyelesaikan dengan Bantuan Grafik

Pertidaksamaan eksponen juga dapat dipahami menggunakan grafik.

Contoh:

$$2^x>4$$

Karena:

$$4=2^2$$

maka:

$$2^x>2^2$$

Untuk basis $2>1$, grafik $y=2^x$ naik. Nilai $2^x$ lebih besar dari $4$ ketika:

$$x>2$$

  📊 **Gambar 4.** Grafik $y=2^x$ dan garis $y=4$, dengan daerah $2^x>4$ berada pada $x>2$.

---

###### 19. Langkah Umum Menyelesaikan Pertidaksamaan Eksponen

| Langkah | Penjelasan |
| --- | --- |
| 1 | Ubah kedua ruas ke basis yang sama jika memungkinkan. |
| 2 | Perhatikan nilai basis. |
| 3 | Jika basis $a>1$, tanda pertidaksamaan tetap. |
| 4 | Jika basis $0<a<1$, tanda pertidaksamaan dibalik. |
| 5 | Selesaikan pertidaksamaan pangkatnya. |
| 6 | Jika muncul pertidaksamaan kuadrat, gunakan garis bilangan. |
| 7 | Jika menggunakan substitusi, perhatikan syarat variabel pengganti. |

---

###### 20. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tidak membalik tanda pada basis pecahan | $\left(\frac12\right)^x>\left(\frac12\right)^3$ ditulis $x>3$. | Karena $0<\frac12<1$, seharusnya $x<3$. |
| Menyamakan pangkat saat basis belum sama | Dari $2^x>3^4$ langsung ditulis $x>4$. | Pangkat boleh dibandingkan jika basis sama. |
| Salah mengubah basis pecahan | $\frac12=2^1$. | Seharusnya $\frac12=2^{-1}$. |
| Lupa menyelesaikan pertidaksamaan kuadrat | Dari $(x-4)(x+1)\le0$ langsung ditulis $x\le4$ atau $x\le-1$. | Gunakan garis bilangan sehingga diperoleh $-1\le x\le4$. |
| Lupa syarat substitusi | Jika $y=2^x$, dianggap $y$ boleh negatif. | Karena $2^x>0$, maka $y>0$. |

  ⚠️ **Perhatian:** Kesalahan paling sering pada pertidaksamaan eksponen adalah lupa membalik tanda saat basisnya di antara $0$ dan $1$.

---

###### 21. Rangkuman

- Pertidaksamaan eksponen memuat variabel pada pangkat.
- Jika $a>1$, maka:
  $$a^{f(x)}>a^{g(x)} \Longleftrightarrow f(x)>g(x)$$
- Jika $0<a<1$, maka:
  $$a^{f(x)}>a^{g(x)} \Longleftrightarrow f(x)<g(x)$$
- Untuk basis $a>1$, tanda pertidaksamaan tetap.
- Untuk basis $0<a<1$, tanda pertidaksamaan dibalik.
- Jika pertidaksamaan menghasilkan bentuk kuadrat, selesaikan dengan garis bilangan.
- Jika menggunakan substitusi $y=a^x$, maka:
  $$y>0$$
- Selalu pastikan basis sudah sama sebelum membandingkan pangkat.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Selesaikan pertidaksamaan berikut.
$$2^{x+1}>16$$

💡 Pembahasan

Ubah $16$ menjadi basis $2$.

$$16=2^4$$

Maka:

$$2^{x+1}>2^4$$

Karena basis $2>1$, tanda pertidaksamaan tetap.

$$\begin{aligned}
x+1&>4\\
x&>3
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x>3$$

  Contoh Soal 2

Selesaikan pertidaksamaan berikut.
$$\left(\frac13\right)^{2x-1}\le\left(\frac13\right)^5$$

💡 Pembahasan

Karena basisnya $\frac13$ dan:

$$0<\frac13<1$$

maka tanda pertidaksamaan dibalik.

$$\begin{aligned}
2x-1&\ge5\\
2x&\ge6\\
x&\ge3
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x\ge3$$

  Contoh Soal 3

Selesaikan pertidaksamaan berikut.
$$2^{2x}-5\cdot2^x+4>0$$

💡 Pembahasan

Misalkan:

$$y=2^x$$

Karena $2^x>0$, maka $y>0$.

Bentuk $2^{2x}$ menjadi:

$$2^{2x}=(2^x)^2=y^2$$

Maka pertidaksamaan menjadi:

$$\begin{aligned}
y^2-5y+4&>0\\
(y-1)(y-4)&>0
\end{aligned}$$

Dari garis bilangan diperoleh:

$$y<1 \quad \text{atau} \quad y>4$$

Kembalikan ke $y=2^x$.

Untuk $y<1$:

$$\begin{aligned}
2^x&<1\\
2^x&<2^0\\
x&<0
\end{aligned}$$

Untuk $y>4$:

$$\begin{aligned}
2^x&>4\\
2^x&>2^2\\
x&>2
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$x<0 \quad \text{atau} \quad x>2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Penyelesaian dari $2^x>32$ adalah ....

A
$x>4$

B
$x>5$

C
$x<5$

D
$x\ge5$

E
$x\le5$

💡 Pembahasan

$$32=2^5$$

Maka:

$$2^x>2^5$$

Karena basis $2>1$, tanda tetap.

$$x>5$$

  Latihan Soal 2

Penyelesaian dari $3^{x-2}\le27$ adalah ....

A
$x\le3$

B
$x\le4$

C
$x\le5$

D
$x\ge5$

E
$x>5$

💡 Pembahasan

$$27=3^3$$

Maka:

$$3^{x-2}\le3^3$$

Karena basis $3>1$, tanda tetap.

$$\begin{aligned}
x-2&\le3\\
x&\le5
\end{aligned}$$

  Latihan Soal 3

Penyelesaian dari $\left(\frac12\right)^x<\left(\frac12\right)^4$ adalah ....

A
$x<4$

B
$x>4$

C
$x\le4$

D
$x\ge4$

E
$x=4$

💡 Pembahasan

Karena:

$$0<\frac12<1$$

maka tanda pertidaksamaan dibalik.

$$\left(\frac12\right)^x<\left(\frac12\right)^4$$

menjadi:

$$x>4$$

  Latihan Soal 4

Penyelesaian dari $4^{x+1}\ge16$ adalah ....

A
$x\ge1$

B
$x\ge2$

C
$x\le1$

D
$x\le2$

E
$x>1$

💡 Pembahasan

$$16=4^2$$

Maka:

$$4^{x+1}\ge4^2$$

Karena basis $4>1$, tanda tetap.

$$\begin{aligned}
x+1&\ge2\\
x&\ge1
\end{aligned}$$

  Latihan Soal 5

Penyelesaian dari $5^{2x-1}<5^{x+3}$ adalah ....

A
$x<3$

B
$x<4$

C
$x>4$

D
$x\ge4$

E
$x\le3$

💡 Pembahasan

Karena basis $5>1$, tanda tetap.

$$\begin{aligned}
2x-1&<x+3\\
x&<4
\end{aligned}$$

  Latihan Soal 6

Penyelesaian dari $\left(\frac14\right)^{x+2}\ge1$ adalah ....

A
$x\ge-2$

B
$x\le-2$

C
$x>-2$

D
$x<-2$

E
$x=2$

💡 Pembahasan

Karena:

$$1=\left(\frac14\right)^0$$

maka:

$$\left(\frac14\right)^{x+2}\ge\left(\frac14\right)^0$$

Karena $0<\frac14<1$, tanda dibalik.

$$\begin{aligned}
x+2&\le0\\
x&\le-2
\end{aligned}$$

  Latihan Soal 7

Penyelesaian dari $2^{x^2-3x}\le2^4$ adalah ....

A
$x\le-1$ atau $x\ge4$

B
$-1\le x\le4$

C
$x<-1$ atau $x>4$

D
$1\le x\le4$

E
$-4\le x\le1$

💡 Pembahasan

Karena basis $2>1$, tanda tetap.

$$\begin{aligned}
x^2-3x&\le4\\
x^2-3x-4&\le0\\
(x-4)(x+1)&\le0
\end{aligned}$$

Maka penyelesaiannya:

$$-1\le x\le4$$

  Latihan Soal 8

Penyelesaian dari $\left(\frac12\right)^{x^2-5x}<\left(\frac12\right)^6$ adalah ....

A
$x<-1$ atau $x>6$

B
$-1<x<6$

C
$x\le-1$ atau $x\ge6$

D
$-6<x<1$

E
$x<1$ atau $x>6$

💡 Pembahasan

Karena basis $\frac12$ berada di antara $0$ dan $1$, tanda dibalik.

$$\begin{aligned}
x^2-5x&>6\\
x^2-5x-6&>0\\
(x-6)(x+1)&>0
\end{aligned}$$

Maka penyelesaiannya:

$$x<-1 \quad \text{atau} \quad x>6$$

  Latihan Soal 9

Penyelesaian dari $3^{2x}-10\cdot3^x+9\le0$ adalah ....

A
$x<0$ atau $x>2$

B
$x\le0$ atau $x\ge2$

C
$0\le x\le2$

D
$1\le x\le9$

E
$x>0$

💡 Pembahasan

Misalkan:

$$y=3^x$$

sehingga $y>0$.

$$\begin{aligned}
3^{2x}-10\cdot3^x+9&\le0\\
y^2-10y+9&\le0\\
(y-1)(y-9)&\le0
\end{aligned}$$

Maka:

$$1\le y\le9$$

Kembalikan ke $y=3^x$.

$$\begin{aligned}
1\le3^x\le9
\end{aligned}$$

Karena $1=3^0$ dan $9=3^2$, maka:

$$0\le x\le2$$

  Latihan Soal 10

Pernyataan yang benar adalah ....

A
Jika $a>1$, tanda pertidaksamaan selalu dibalik.

B
Jika $0<a<1$, tanda pertidaksamaan tetap.

C
Jika $0<a<1$, tanda pertidaksamaan dibalik saat membandingkan pangkat.

D
Pangkat boleh langsung dibandingkan walaupun basis berbeda.

E
Jika $y=2^x$, maka $y$ boleh bernilai negatif.

💡 Pembahasan

Jika basis berada di antara $0$ dan $1$, fungsi eksponen bersifat turun.

Akibatnya, saat membandingkan pangkat, tanda pertidaksamaan harus dibalik.

### Soal Kontekstual Eksponen

#### Soal Kontekstual-Materi  Eksponen

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/soal-kontekstual-materi-eksponen*

Pada materi sebelumnya, kita telah mempelajari pertidaksamaan eksponen. Sekarang kita akan membahas **soal cerita eksponen**.

Soal cerita eksponen biasanya berkaitan dengan keadaan yang berubah secara berulang dengan faktor yang sama. Misalnya, jumlah bakteri yang berlipat ganda, nilai barang yang menyusut, uang yang bertambah karena bunga majemuk, atau populasi yang bertambah setiap periode.

  📌 **Catatan:** Eksponen sering digunakan untuk memodelkan perubahan yang terjadi secara berulang dengan faktor tetap.

---

###### 1. Mengapa Soal Cerita Eksponen Penting?

Dalam kehidupan sehari-hari, tidak semua perubahan bersifat linear. Ada perubahan yang terjadi dengan cara berlipat ganda atau menyusut secara bertahap.

Contoh perubahan eksponen:

- jumlah bakteri menjadi dua kali lipat setiap jam;
- uang tabungan bertambah dengan bunga majemuk;
- nilai kendaraan menyusut setiap tahun;
- populasi meningkat dengan persentase tertentu;
- zat radioaktif meluruh setiap periode waktu tertentu.

Perubahan seperti ini tidak cukup dimodelkan dengan penjumlahan biasa, tetapi lebih tepat menggunakan bentuk eksponen.

---

###### 2. Bentuk Umum Model Eksponen

Bentuk umum model eksponen adalah:

$$P(t)=P_0\cdot a^t$$

dengan:

| Simbol | Arti |
| --- | --- |
| $P(t)$ | Jumlah setelah waktu $t$. |
| $P_0$ | Jumlah awal. |
| $a$ | Faktor perubahan. |
| $t$ | Waktu atau banyak periode. |

  💡 **Ingat:** Jika faktor perubahan tetap pada setiap periode, gunakan model eksponen.

---

###### 3. Pertumbuhan Eksponen

Pertumbuhan eksponen terjadi ketika jumlah suatu objek bertambah dengan faktor tetap.

Jika jumlah bertambah dengan faktor $a$ dan $a>1$, maka modelnya:

$$P(t)=P_0\cdot a^t$$

Contoh:

Sebuah koloni bakteri mula-mula berjumlah $100$. Setiap jam jumlahnya menjadi dua kali lipat. Maka:

$$P_0=100$$

dan:

$$a=2$$

Modelnya:

$$P(t)=100\cdot2^t$$

Jika $t=3$, maka:

$$\begin{aligned}
P(3)
&=100\cdot2^3\\
&=100\cdot8\\
&=800
\end{aligned}$$

Jadi, setelah $3$ jam terdapat $800$ bakteri.

---

###### 4. Peluruhan Eksponen

Peluruhan eksponen terjadi ketika jumlah suatu objek berkurang dengan faktor tetap.

Jika faktor perubahannya memenuhi:

$$0<a<1$$

maka modelnya:

$$P(t)=P_0\cdot a^t$$

Contoh:

Suatu zat mula-mula bermassa $80$ gram. Setiap jam massanya menjadi setengah dari sebelumnya. Maka:

$$P_0=80$$

dan:

$$a=\frac12$$

Modelnya:

$$P(t)=80\left(\frac12\right)^t$$

Jika $t=3$, maka:

$$\begin{aligned}
P(3)
&=80\left(\frac12\right)^3\\
&=80\cdot\frac18\\
&=10
\end{aligned}$$

Jadi, massa zat setelah $3$ jam adalah $10$ gram.

---

###### 5. Menentukan Faktor Pertumbuhan dari Persentase

Jika suatu jumlah bertambah sebesar $r\%$ setiap periode, maka faktor pertumbuhannya adalah:

$$1+\frac{r}{100}$$

Contoh:

Jika suatu modal bertambah $10\%$ setiap tahun, maka faktor pertumbuhannya:

$$\begin{aligned}
1+\frac{10}{100}
&=1+0{,}1\\
&=1{,}1
\end{aligned}$$

Jadi modelnya:

$$M(t)=M_0(1{,}1)^t$$

  📌 **Catatan:** Bertambah $10\%$ bukan berarti dikali $0{,}1$, tetapi dikali $1{,}1$.

---

###### 6. Menentukan Faktor Peluruhan dari Persentase

Jika suatu jumlah berkurang sebesar $r\%$ setiap periode, maka faktor peluruhannya adalah:

$$1-\frac{r}{100}$$

Contoh:

Jika nilai barang menyusut $20\%$ setiap tahun, maka faktor peluruhannya:

$$\begin{aligned}
1-\frac{20}{100}
&=1-0{,}2\\
&=0{,}8
\end{aligned}$$

Jadi modelnya:

$$N(t)=N_0(0{,}8)^t$$

  ⚠️ **Perhatian:** Menyusut $20\%$ berarti nilai yang tersisa adalah $80\%$, sehingga faktor pengalinya $0{,}8$.

---

###### 7. Bunga Majemuk

Bunga majemuk adalah bunga yang dihitung dari modal sebelumnya beserta bunga yang sudah diperoleh.

Jika modal awal $M_0$ mendapat bunga $r\%$ per periode, maka modelnya:

$$M(t)=M_0\left(1+\frac{r}{100}\right)^t$$

Contoh:

Modal awal Rp1.000.000 mendapat bunga majemuk $10\%$ per tahun. Jumlah uang setelah $2$ tahun adalah:

$$\begin{aligned}
M(2)
&=1.000.000(1{,}1)^2\\
&=1.000.000(1{,}21)\\
&=1.210.000
\end{aligned}$$

Jadi, uang setelah $2$ tahun adalah Rp1.210.000.

---

###### 8. Penyusutan Nilai Barang

Penyusutan nilai barang juga dapat dimodelkan dengan eksponen.

Jika harga awal suatu barang $H_0$ menyusut sebesar $r\%$ setiap tahun, maka:

$$H(t)=H_0\left(1-\frac{r}{100}\right)^t$$

Contoh:

Sebuah motor berharga Rp20.000.000. Setiap tahun nilainya menyusut $10\%$. Maka harga motor setelah $3$ tahun:

$$\begin{aligned}
H(3)
&=20.000.000(0{,}9)^3\\
&=20.000.000(0{,}729)\\
&=14.580.000
\end{aligned}$$

Jadi, harga motor setelah $3$ tahun adalah Rp14.580.000.

---

###### 9. Pertumbuhan Berlipat Ganda

Jika suatu jumlah menjadi dua kali lipat setiap periode, maka modelnya:

$$P(t)=P_0\cdot2^t$$

Jika menjadi tiga kali lipat setiap periode, maka:

$$P(t)=P_0\cdot3^t$$

Contoh:

Jumlah pengunjung suatu situs awalnya $500$. Setiap hari jumlah pengunjung menjadi dua kali lipat. Banyak pengunjung setelah $4$ hari:

$$\begin{aligned}
P(4)
&=500\cdot2^4\\
&=500\cdot16\\
&=8.000
\end{aligned}$$

Jadi, banyak pengunjung setelah $4$ hari adalah $8.000$.

---

###### 10. Menentukan Waktu pada Model Eksponen

Kadang soal cerita meminta waktu yang diperlukan agar suatu jumlah mencapai nilai tertentu.

Contoh:

Sebuah bakteri mula-mula berjumlah $50$. Setiap jam jumlahnya menjadi dua kali lipat. Setelah berapa jam jumlah bakteri menjadi $800$?

Model:

$$P(t)=50\cdot2^t$$

Diketahui:

$$P(t)=800$$

Maka:

$$\begin{aligned}
50\cdot2^t&=800\\
2^t&=\frac{800}{50}\\
2^t&=16\\
2^t&=2^4\\
t&=4
\end{aligned}$$

Jadi, waktu yang diperlukan adalah $4$ jam.

---

###### 11. Menentukan Jumlah Awal

Soal cerita eksponen juga dapat menanyakan jumlah awal.

Contoh:

Jumlah bakteri setelah $3$ jam adalah $1.600$. Jika setiap jam bakteri menjadi dua kali lipat, berapakah jumlah bakteri mula-mula?

Model:

$$P(t)=P_0\cdot2^t$$

Diketahui $P(3)=1.600$.

$$\begin{aligned}
P_0\cdot2^3&=1.600\\
P_0\cdot8&=1.600\\
P_0&=200
\end{aligned}$$

Jadi, jumlah bakteri mula-mula adalah $200$.

---

###### 12. Membandingkan Pertumbuhan Linear dan Eksponen

Pertumbuhan linear bertambah dengan jumlah tetap, sedangkan pertumbuhan eksponen bertambah dengan faktor tetap.

| Jenis Pertumbuhan | Ciri | Contoh |
| --- | --- | --- |
| Linear | Bertambah dengan selisih tetap. | Setiap hari bertambah $5$ orang. |
| Eksponen | Bertambah dengan faktor tetap. | Setiap hari menjadi dua kali lipat. |

Contoh perbandingan:

| Hari | Linear: bertambah $5$ | Eksponen: menjadi dua kali lipat |
| --- | --- | --- |
| $0$ | $5$ | $5$ |
| $1$ | $10$ | $10$ |
| $2$ | $15$ | $20$ |
| $3$ | $20$ | $40$ |
| $4$ | $25$ | $80$ |

  📊 **Gambar 1.** Perbandingan grafik pertumbuhan linear dan pertumbuhan eksponen. Pertumbuhan eksponen awalnya tampak lambat, tetapi lama-kelamaan meningkat jauh lebih cepat.

---

###### 13. Langkah Menyelesaikan Soal Cerita Eksponen

Gunakan langkah berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan jumlah awal. |
| 2 | Tentukan faktor perubahan. |
| 3 | Tentukan banyak periode. |
| 4 | Susun model eksponen. |
| 5 | Substitusikan nilai yang diketahui. |
| 6 | Hitung hasilnya dengan teliti. |

---

###### 14. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Menganggap kenaikan persen sebagai penjumlahan biasa | Bertambah $10\%$ setiap tahun dihitung dengan menambah $10$ terus-menerus. | Gunakan faktor $1{,}1$ untuk setiap tahun. |
| Salah menentukan faktor peluruhan | Menyusut $20\%$ ditulis faktor $0{,}2$. | Faktor yang benar adalah $0{,}8$. |
| Menggunakan model linear untuk perubahan berlipat | Menjadi dua kali lipat setiap jam dihitung dengan menambah jumlah awal. | Gunakan faktor $2^t$. |
| Salah membaca periode waktu | Bunga per tahun, tetapi waktu dihitung dalam bulan tanpa penyesuaian. | Samakan satuan periode dengan keterangan soal. |
| Lupa bahwa jumlah awal adalah saat $t=0$ | Menganggap jumlah awal terjadi pada $t=1$. | Dalam model $P(t)=P_0a^t$, jumlah awal terjadi saat $t=0$. |

  ⚠️ **Perhatian:** Pada soal cerita eksponen, bagian terpenting adalah menentukan faktor perubahan dengan benar.

---

###### 15. Rangkuman

- Soal cerita eksponen berkaitan dengan perubahan yang terjadi secara berulang dengan faktor tetap.
- Bentuk umum model eksponen:
  $$P(t)=P_0\cdot a^t$$
- Jika $a>1$, terjadi pertumbuhan eksponen.
- Jika $0<a<1$, terjadi peluruhan eksponen.
- Jika bertambah $r\%$, faktor pertumbuhan:
  $$1+\frac{r}{100}$$
- Jika berkurang $r\%$, faktor peluruhan:
  $$1-\frac{r}{100}$$
- Bunga majemuk dan penyusutan nilai barang dapat dimodelkan dengan eksponen.
- Perubahan “menjadi dua kali lipat” berarti menggunakan faktor $2^t$.
- Perubahan “menjadi setengah” berarti menggunakan faktor $\left(\frac12\right)^t$.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Sebuah koloni bakteri mula-mula berjumlah $150$. Setiap jam jumlah bakteri menjadi dua kali lipat. Berapa banyak bakteri setelah $5$ jam?

💡 Pembahasan

Jumlah awal bakteri:

$$P_0=150$$

Karena setiap jam menjadi dua kali lipat, faktor pertumbuhannya:

$$a=2$$

Model eksponen:

$$P(t)=150\cdot2^t$$

Untuk $t=5$:

$$\begin{aligned}
P(5)
&=150\cdot2^5\\
&=150\cdot32\\
&=4.800
\end{aligned}$$

Jadi, banyak bakteri setelah $5$ jam adalah $4.800$.

  Contoh Soal 2

Harga sebuah laptop mula-mula Rp8.000.000. Setiap tahun nilainya menyusut $15\%$. Berapa harga laptop tersebut setelah $2$ tahun?

💡 Pembahasan

Harga awal:

$$H_0=8.000.000$$

Karena menyusut $15\%$, faktor peluruhannya:

$$\begin{aligned}
1-\frac{15}{100}
&=1-0{,}15\\
&=0{,}85
\end{aligned}$$

Model eksponen:

$$H(t)=8.000.000(0{,}85)^t$$

Untuk $t=2$:

$$\begin{aligned}
H(2)
&=8.000.000(0{,}85)^2\\
&=8.000.000(0{,}7225)\\
&=5.780.000
\end{aligned}$$

Jadi, harga laptop setelah $2$ tahun adalah Rp5.780.000.

  Contoh Soal 3

Modal awal sebesar Rp2.000.000 disimpan dengan bunga majemuk $5\%$ per tahun. Berapa jumlah uang setelah $3$ tahun?

💡 Pembahasan

Modal awal:

$$M_0=2.000.000$$

Bunga majemuk $5\%$ berarti faktor pertumbuhan:

$$\begin{aligned}
1+\frac{5}{100}
&=1+0{,}05\\
&=1{,}05
\end{aligned}$$

Model eksponen:

$$M(t)=2.000.000(1{,}05)^t$$

Untuk $t=3$:

$$\begin{aligned}
M(3)
&=2.000.000(1{,}05)^3\\
&=2.000.000(1{,}157625)\\
&=2.315.250
\end{aligned}$$

Jadi, jumlah uang setelah $3$ tahun adalah Rp2.315.250.

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Jumlah bakteri mula-mula $200$. Setiap jam jumlahnya menjadi dua kali lipat. Banyak bakteri setelah $4$ jam adalah ....

A
$1.600$

B
$2.400$

C
$3.200$

D
$4.000$

E
$6.400$

💡 Pembahasan

Modelnya:

$$P(t)=200\cdot2^t$$

Untuk $t=4$:

$$\begin{aligned}
P(4)
&=200\cdot2^4\\
&=200\cdot16\\
&=3.200
\end{aligned}$$

  Latihan Soal 2

Suatu zat mula-mula bermassa $96$ gram. Setiap jam massanya menjadi setengah dari sebelumnya. Massa zat setelah $3$ jam adalah ....

A
$6$ gram

B
$12$ gram

C
$16$ gram

D
$24$ gram

E
$48$ gram

💡 Pembahasan

Modelnya:

$$P(t)=96\left(\frac12\right)^t$$

Untuk $t=3$:

$$\begin{aligned}
P(3)
&=96\left(\frac12\right)^3\\
&=96\cdot\frac18\\
&=12
\end{aligned}$$

  Latihan Soal 3

Sebuah modal Rp1.000.000 mendapat bunga majemuk $10\%$ per tahun. Jumlah uang setelah $2$ tahun adalah ....

A
Rp1.100.000

B
Rp1.200.000

C
Rp1.210.000

D
Rp1.250.000

E
Rp1.300.000

💡 Pembahasan

Faktor pertumbuhan:

$$1+10\%=1{,}1$$

Maka:

$$\begin{aligned}
M(2)
&=1.000.000(1{,}1)^2\\
&=1.000.000(1{,}21)\\
&=1.210.000
\end{aligned}$$

  Latihan Soal 4

Harga sebuah barang Rp5.000.000 menyusut $20\%$ setiap tahun. Harga barang setelah $2$ tahun adalah ....

A
Rp2.800.000

B
Rp3.000.000

C
Rp3.200.000

D
Rp3.600.000

E
Rp4.000.000

💡 Pembahasan

Faktor peluruhan:

$$1-20\%=0{,}8$$

Maka:

$$\begin{aligned}
H(2)
&=5.000.000(0{,}8)^2\\
&=5.000.000(0{,}64)\\
&=3.200.000
\end{aligned}$$

  Latihan Soal 5

Populasi ikan mula-mula $1.000$. Setiap bulan meningkat $20\%$. Populasi ikan setelah $2$ bulan adalah ....

A
$1.200$

B
$1.440$

C
$1.600$

D
$1.800$

E
$2.000$

💡 Pembahasan

Faktor pertumbuhan:

$$1+20\%=1{,}2$$

Maka:

$$\begin{aligned}
P(2)
&=1.000(1{,}2)^2\\
&=1.000(1{,}44)\\
&=1.440
\end{aligned}$$

  Latihan Soal 6

Jumlah pengunjung sebuah website mula-mula $300$. Setiap hari jumlahnya menjadi tiga kali lipat. Banyak pengunjung setelah $3$ hari adalah ....

A
$2.400$

B
$5.400$

C
$8.100$

D
$9.000$

E
$24.300$

💡 Pembahasan

Modelnya:

$$P(t)=300\cdot3^t$$

Untuk $t=3$:

$$\begin{aligned}
P(3)
&=300\cdot3^3\\
&=300\cdot27\\
&=8.100
\end{aligned}$$

  Latihan Soal 7

Bakteri mula-mula berjumlah $100$. Setiap jam jumlahnya menjadi dua kali lipat. Setelah berapa jam jumlah bakteri menjadi $1.600$?

A
$2$ jam

B
$3$ jam

C
$4$ jam

D
$5$ jam

E
$6$ jam

💡 Pembahasan

Modelnya:

$$P(t)=100\cdot2^t$$

Diketahui $P(t)=1.600$.

$$\begin{aligned}
100\cdot2^t&=1.600\\
2^t&=16\\
2^t&=2^4\\
t&=4
\end{aligned}$$

  Latihan Soal 8

Suatu zat mula-mula $320$ gram. Setiap jam massanya menjadi setengah dari sebelumnya. Setelah berapa jam massanya menjadi $40$ gram?

A
$1$ jam

B
$2$ jam

C
$3$ jam

D
$4$ jam

E
$5$ jam

💡 Pembahasan

Modelnya:

$$P(t)=320\left(\frac12\right)^t$$

Diketahui $P(t)=40$.

$$\begin{aligned}
320\left(\frac12\right)^t&=40\\
\left(\frac12\right)^t&=\frac{40}{320}\\
\left(\frac12\right)^t&=\frac18\\
\left(\frac12\right)^t&=\left(\frac12\right)^3\\
t&=3
\end{aligned}$$

  Latihan Soal 9

Jumlah bakteri setelah $4$ jam adalah $6.400$. Jika setiap jam bakteri menjadi dua kali lipat, jumlah bakteri mula-mula adalah ....

A
$200$

B
$300$

C
$400$

D
$500$

E
$600$

💡 Pembahasan

Modelnya:

$$P(t)=P_0\cdot2^t$$

Diketahui $P(4)=6.400$.

$$\begin{aligned}
P_0\cdot2^4&=6.400\\
P_0\cdot16&=6.400\\
P_0&=400
\end{aligned}$$

  Latihan Soal 10

Sebuah barang berharga Rp10.000.000 menyusut $10\%$ setiap tahun. Model harga barang setelah $t$ tahun adalah ....

A
$H(t)=10.000.000(0{,}9)^t$

B
$H(t)=10.000.000(1{,}1)^t$

C
$H(t)=10.000.000(0{,}1)^t$

D
$H(t)=10.000.000+0{,}9t$

E
$H(t)=10.000.000-10t$

💡 Pembahasan

Menyusut $10\%$ berarti nilai yang tersisa adalah $90\%$.

Faktor peluruhannya:

$$0{,}9$$

Maka modelnya:

$$H(t)=10.000.000(0{,}9)^t$$

## (B) Logaritma

### Konsep Logaritma

#### Konsep Logaritma

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 6 Fungsi dan Pemodelannya, subbab A.1 Konsep Fungsi Logaritma, hlm. 245–250.*

Logaritma adalah **balikan (invers)** dari bentuk eksponensial:

$$y = {}^{b}\!\log x \iff x = b^y$$

##### Definisi Fungsi Logaritma

Misalkan $b$ bilangan positif dengan $b \neq 1$. Fungsi logaritma dengan basis $b$ dinyatakan dengan

$$f(x) = {}^{b}\!\log x \quad \text{untuk setiap } x > 0$$

Pada buku lain fungsi ini juga ditulis $f(x) = \log_b x$.

- Logaritma berbasis 10 disebut **logaritma umum**; basisnya boleh tidak ditulis, misalnya ${}^{10}\!\log 100 = \log 100$.
- Logaritma berbasis $e \approx 2{,}7183$ disebut **logaritma alami**, ditulis $\ln x = {}^{e}\!\log x$.

##### Contoh 6.1

Diberikan $f(x) = {}^{3}\!\log x$. Tentukan nilai (1) $f(3)$ dan (2) $f(81)$.

**Alternatif penyelesaian:** gunakan ${}^{b}\!\log x = y \iff b^y = x$.

1. $f(3) = {}^{3}\!\log 3 = 1$ karena $3^1 = 3$.
2. $f(81) = {}^{3}\!\log 81 = 4$ karena $3^4 = 81$.

##### Contoh 6.2: Grafik Fungsi Logaritma

Sketsalah grafik $f(x) = {}^{\frac{1}{3}}\!\log x$.

**Alternatif penyelesaian:** pilih nilai $x$ yang membuat $f(x)$ bilangan bulat.

| $x$ | $3^3$ | $3^2$ | $3^1$ | $1$ | $3^{-1}$ | $3^{-2}$ | $3^{-3}$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

Titik-titik tersebut dihubungkan dengan kurva mulus.

##### Sifat 6.1 Karakteristik Fungsi Logaritma

Misalkan $f(x) = {}^{a}\!\log x$ untuk $a > 1$ dan $g(x) = {}^{a}\!\log x$ untuk $0 < a < 1$.

1. Daerah asal $f$ dan $g$ adalah himpunan semua bilangan real positif.
2. Daerah hasil $f$ dan $g$ adalah himpunan semua bilangan real.
3. Grafik $f$ dan $g$ memotong sumbu-$x$ di titik $(1, 0)$ dan tidak memotong sumbu-$y$.
4. Grafik $f$ dan $g$ mendekati sumbu-$y$ tetapi tidak menyentuhnya, sehingga sumbu-$y$ ($x = 0$) adalah asimtot tegak.

Perbedaannya: $f$ monoton naik, sedangkan $g$ monoton turun.

#### Memahami Konsep Dasar Logaritma

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/konsep-dasar-logaritma*

Pada materi sebelumnya, kita telah mempelajari eksponen. Sekarang kita masuk ke topik baru, yaitu **logaritma**.

Logaritma sangat erat hubungannya dengan eksponen. Jika eksponen digunakan untuk mencari hasil perpangkatan, maka logaritma digunakan untuk mencari pangkatnya.

  📌 **Catatan:** Logaritma dapat dipahami sebagai operasi kebalikan dari perpangkatan.

---

###### 1. Mengingat Kembali Bentuk Eksponen

Sebelum memahami logaritma, kita ingat kembali bentuk eksponen.

Misalnya:

$$2^3=8$$

Artinya, bilangan $2$ dipangkatkan $3$ menghasilkan $8$.

Pada bentuk tersebut:

- $2$ disebut basis;
- $3$ disebut pangkat atau eksponen;
- $8$ disebut hasil perpangkatan.

Sekarang muncul pertanyaan:

Jika diketahui:

$$2^x=8$$

berapakah nilai $x$?

Karena:

$$2^3=8$$

maka:

$$x=3$$

Nilai $x$ inilah yang dapat dicari menggunakan logaritma.

---

###### 2. Pengertian Logaritma

Logaritma adalah operasi matematika untuk menentukan pangkat suatu bilangan.

Jika:

$$a^b=c$$

maka bentuk logaritmanya adalah:

$${}^a\log c=b$$

Dibaca:

**logaritma basis $a$ dari $c$ sama dengan $b$**.

Artinya, $b$ adalah pangkat yang harus diberikan kepada $a$ agar hasilnya $c$.

  💡 **Ingat:** Logaritma menjawab pertanyaan “basis dipangkatkan berapa agar menghasilkan bilangan tertentu?”

---

###### 3. Hubungan Eksponen dan Logaritma

Hubungan eksponen dan logaritma dapat ditulis sebagai berikut.

$$a^b=c \Longleftrightarrow {}^a\log c=b$$

dengan syarat:

$$a>0,\quad a\ne1,\quad c>0$$

Contoh:

$$2^3=8$$

dapat ditulis dalam bentuk logaritma:

$${}^2\log 8=3$$

Karena $2$ dipangkatkan $3$ menghasilkan $8$.

Contoh lain:

$$5^2=25$$

maka:

$${}^5\log 25=2$$

Karena $5$ dipangkatkan $2$ menghasilkan $25$.

---

###### 4. Bagian-Bagian Logaritma

Pada bentuk:

$${}^a\log c=b$$

setiap bagian memiliki arti.

| Bagian | Nama | Arti |
| --- | --- | --- |
| $a$ | Basis logaritma | Bilangan yang dipangkatkan. |
| $c$ | Numerus | Hasil perpangkatan yang dicari pangkatnya. |
| $b$ | Nilai logaritma | Pangkat yang menghasilkan $c$ dari basis $a$. |

Contoh:

$${}^3\log 81=4$$

Artinya:

- basisnya adalah $3$;
- numerusnya adalah $81$;
- nilai logaritmanya adalah $4$.

Karena:

$$3^4=81$$

---

###### 5. Syarat Logaritma

Pada bentuk:

$${}^a\log c$$

berlaku syarat:

$$a>0,\quad a\ne1,\quad c>0$$

Artinya:

- basis logaritma harus positif;
- basis logaritma tidak boleh sama dengan $1$;
- numerus harus positif.

Mengapa basis tidak boleh $1$?

Karena:

$$1^x=1$$

untuk setiap nilai $x$. Jadi, pangkatnya tidak dapat ditentukan secara tunggal.

Mengapa numerus harus positif?

Karena untuk basis positif, hasil perpangkatan selalu positif.

Contoh:

$$2^x>0$$

untuk setiap bilangan real $x$.

  ⚠️ **Perhatian:** Dalam pembahasan SMA, bentuk seperti ${}^2\log 0$ dan ${}^2\log(-8)$ tidak terdefinisi pada bilangan real.

---

###### 6. Mengubah Bentuk Eksponen ke Bentuk Logaritma

Gunakan hubungan:

$$a^b=c \Longleftrightarrow {}^a\log c=b$$

Contoh 1:

$$2^5=32$$

maka:

$${}^2\log 32=5$$

Contoh 2:

$$4^3=64$$

maka:

$${}^4\log 64=3$$

Contoh 3:

$$10^2=100$$

maka:

$${}^{10}\log 100=2$$

  📌 **Catatan:** Saat mengubah bentuk eksponen ke logaritma, basis tetap menjadi basis.

---

###### 7. Mengubah Bentuk Logaritma ke Bentuk Eksponen

Gunakan hubungan:

$${}^a\log c=b \Longleftrightarrow a^b=c$$

Contoh 1:

$${}^2\log 16=4$$

maka:

$$2^4=16$$

Contoh 2:

$${}^3\log 27=3$$

maka:

$$3^3=27$$

Contoh 3:

$${}^5\log 125=3$$

maka:

$$5^3=125$$

---

###### 8. Cara Membaca Logaritma

Perhatikan bentuk:

$${}^2\log 32=5$$

Bentuk ini dibaca:

**logaritma basis $2$ dari $32$ adalah $5$**.

Maknanya:

$$2^5=32$$

Contoh lain:

$${}^3\log 81=4$$

Dibaca:

**logaritma basis $3$ dari $81$ adalah $4$**.

Maknanya:

$$3^4=81$$

---

###### 9. Logaritma sebagai Kebalikan Eksponen

Logaritma dan eksponen saling berkebalikan.

Jika:

$$y=2^x$$

maka bentuk kebalikannya adalah:

$$x={}^2\log y$$

Jika ditulis sebagai fungsi terhadap $x$, fungsi logaritma dapat ditulis:

$$y={}^2\log x$$

Grafik fungsi eksponen dan logaritma saling berkaitan. Keduanya merupakan pencerminan terhadap garis:

$$y=x$$

  📊 **Grafik Interaktif 1.** Grafik $y=2^x$ dan $y={}^2\log x$ sebagai dua fungsi yang saling berkebalikan. Garis $y=x$ menjadi garis cermin.

Dari grafik tersebut terlihat bahwa:

- grafik $y=2^x$ melalui titik $(0,1)$;
- grafik $y={}^2\log x$ melalui titik $(1,0)$;
- keduanya saling berkebalikan terhadap garis $y=x$.

  📌 **Catatan teknis:** Pada kode Desmos, penulisan logaritma tetap menggunakan format yang didukung Desmos, yaitu **log_2(x)**. Namun, pada teks materi untuk siswa tetap digunakan notasi Indonesia, yaitu ${}^2\log x$.

---

###### 10. Nilai Logaritma Sederhana

Beberapa nilai logaritma dapat dihitung langsung dengan mengingat bentuk perpangkatan.

Contoh:

$${}^2\log 8=3$$

karena:

$$2^3=8$$

Contoh lain:

$${}^3\log 9=2$$

karena:

$$3^2=9$$

Tabel berikut menunjukkan beberapa nilai logaritma sederhana.

| Bentuk Logaritma | Bentuk Eksponen | Nilai |
| --- | --- | --- |
| ${}^2\log 4$ | $2^2=4$ | $2$ |
| ${}^2\log 8$ | $2^3=8$ | $3$ |
| ${}^3\log 27$ | $3^3=27$ | $3$ |
| ${}^5\log 25$ | $5^2=25$ | $2$ |
| ${}^{10}\log 1000$ | $10^3=1000$ | $3$ |

---

###### 11. Logaritma dari Bilangan 1

Untuk setiap basis $a$ yang memenuhi $a>0$ dan $a\ne1$, berlaku:

$${}^a\log 1=0$$

Mengapa?

Karena:

$$a^0=1$$

Contoh:

$${}^2\log 1=0$$

karena:

$$2^0=1$$

Contoh lain:

$${}^5\log 1=0$$

karena:

$$5^0=1$$

  💡 **Ingat:** Logaritma dari $1$ selalu bernilai $0$, selama basisnya valid.

---

###### 12. Logaritma dengan Numerus Sama dengan Basis

Untuk setiap basis $a$ yang memenuhi $a>0$ dan $a\ne1$, berlaku:

$${}^a\log a=1$$

Mengapa?

Karena:

$$a^1=a$$

Contoh:

$${}^2\log 2=1$$

karena:

$$2^1=2$$

Contoh lain:

$${}^7\log 7=1$$

karena:

$$7^1=7$$

---

###### 13. Logaritma Basis 10

Logaritma dengan basis $10$ sering disebut logaritma umum.

Bentuknya:

$${}^{10}\log x$$

Dalam banyak buku pelajaran di Indonesia, jika basis tidak ditulis, maka biasanya yang dimaksud adalah basis $10$.

Jadi:

$$\log 100={}^{10}\log 100$$

Karena:

$$10^2=100$$

maka:

$$\log 100=2$$

Contoh lain:

$$\log 1000=3$$

karena:

$$10^3=1000$$

  📌 **Catatan:** Dalam matematika sekolah di Indonesia, $\log x$ sering berarti ${}^{10}\log x$.

---

###### 14. Logaritma dan Bentuk Pangkat Pecahan

Logaritma juga dapat menghasilkan bilangan pecahan.

Contoh:

$${}^4\log 2$$

Artinya, $4$ harus dipangkatkan berapa agar menjadi $2$?

Karena:

$$4^{\frac12}=2$$

maka:

$${}^4\log 2=\frac12$$

Contoh lain:

$${}^9\log 3=\frac12$$

karena:

$$9^{\frac12}=3$$

---

###### 15. Logaritma dan Pangkat Negatif

Logaritma juga dapat bernilai negatif.

Contoh:

$${}^2\log \frac12$$

Artinya, $2$ harus dipangkatkan berapa agar menjadi $\frac12$?

Karena:

$$2^{-1}=\frac12$$

maka:

$${}^2\log \frac12=-1$$

Contoh lain:

$${}^3\log \frac{1}{27}=-3$$

karena:

$$3^{-3}=\frac{1}{27}$$

  ⚠️ **Perhatian:** Nilai logaritma boleh negatif, tetapi numerus logaritma harus tetap positif.

---

###### 16. Menentukan Nilai Logaritma dengan Menyamakan Basis

Untuk menghitung logaritma sederhana, ubah numerus menjadi bentuk pangkat dari basis.

Contoh:

$${}^2\log 64$$

Karena:

$$64=2^6$$

maka:

$${}^2\log 64=6$$

Contoh lain:

$${}^3\log 81$$

Karena:

$$81=3^4$$

maka:

$${}^3\log 81=4$$

---

###### 17. Menyelesaikan Bentuk Logaritma Sederhana

Contoh:

Tentukan nilai $x$ jika:

$${}^2\log x=5$$

Ubah ke bentuk eksponen.

$$\begin{aligned}
{}^2\log x&=5\\
2^5&=x\\
32&=x
\end{aligned}$$

Jadi:

$$x=32$$

Contoh lain:

$${}^3\log x=4$$

Maka:

$$\begin{aligned}
{}^3\log x&=4\\
3^4&=x\\
81&=x
\end{aligned}$$

Jadi:

$$x=81$$

---

###### 18. Menentukan Basis Logaritma

Contoh:

Tentukan nilai $a$ jika:

$${}^a\log 27=3$$

Ubah ke bentuk eksponen.

$$\begin{aligned}
{}^a\log 27&=3\\
a^3&=27\\
a^3&=3^3\\
a&=3
\end{aligned}$$

Jadi:

$$a=3$$

Perhatikan bahwa basis harus memenuhi $a>0$ dan $a\ne1$.

---

###### 19. Menentukan Nilai Pangkat dari Logaritma

Contoh:

Tentukan nilai $x$ jika:

$${}^5\log 125=x$$

Ubah ke bentuk eksponen.

$$\begin{aligned}
{}^5\log 125&=x\\
5^x&=125\\
5^x&=5^3\\
x&=3
\end{aligned}$$

Jadi:

$$x=3$$

---

###### 20. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengira logaritma adalah pembagian biasa. | ${}^2\log 8=8:2=4$ | Seharusnya ${}^2\log 8=3$ karena $2^3=8$. |
| Lupa syarat basis. | Menggunakan ${}^1\log 8$ | Basis logaritma tidak boleh sama dengan $1$. |
| Lupa syarat numerus. | Menggunakan ${}^2\log(-8)$ | Numerus harus positif. |
| Salah mengubah logaritma ke eksponen. | ${}^2\log 8=3$ ditulis $8^3=2$ | Seharusnya $2^3=8$. |
| Menganggap nilai logaritma selalu positif. | ${}^2\log \frac12$ dianggap tidak mungkin negatif. | Padahal ${}^2\log \frac12=-1$. |

  ⚠️ **Perhatian:** Cara paling aman memahami logaritma adalah selalu mengubahnya ke bentuk eksponen.

---

###### 21. Rangkuman

- Logaritma adalah operasi untuk mencari pangkat.
- Hubungan eksponen dan logaritma:
  $$a^b=c \Longleftrightarrow {}^a\log c=b$$
- Pada bentuk ${}^a\log c=b$:
  - $a$ adalah basis;
  - $c$ adalah numerus;
  - $b$ adalah nilai logaritma.
- Syarat logaritma:
  $$a>0,\quad a\ne1,\quad c>0$$
- ${}^a\log 1=0$ karena $a^0=1$.
- ${}^a\log a=1$ karena $a^1=a$.
- ${}^{10}\log x$ sering ditulis sebagai $\log x$.
- Nilai logaritma dapat berupa bilangan positif, nol, pecahan, atau negatif.
- Untuk menghitung logaritma sederhana, ubah numerus menjadi bentuk pangkat dari basis.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Ubahlah bentuk eksponen berikut ke bentuk logaritma.
$$3^4=81$$

💡 Pembahasan

Gunakan hubungan:

$$a^b=c \Longleftrightarrow {}^a\log c=b$$

Pada bentuk:

$$3^4=81$$

basisnya $3$, pangkatnya $4$, dan hasilnya $81$.

Maka bentuk logaritmanya adalah:

$${}^3\log 81=4$$

  Contoh Soal 2

Tentukan nilai dari:
$${}^2\log 64$$

💡 Pembahasan

Ubah $64$ menjadi pangkat dari $2$.

$$64=2^6$$

Maka:

$$\begin{aligned}
{}^2\log 64
&={}^2\log 2^6\\
&=6
\end{aligned}$$

Jadi:

$${}^2\log 64=6$$

  Contoh Soal 3

Tentukan nilai $x$ jika:
$${}^5\log x=3$$

💡 Pembahasan

Ubah bentuk logaritma ke bentuk eksponen.

$$\begin{aligned}
{}^5\log x&=3\\
5^3&=x\\
125&=x
\end{aligned}$$

Jadi:

$$x=125$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Bentuk logaritma dari $2^5=32$ adalah ....

A
${}^2\log 32=5$

B
${}^5\log 32=2$

C
${}^{32}\log 2=5$

D
${}^2\log 5=32$

E
${}^{32}\log 5=2$

💡 Pembahasan

Dari bentuk:

$$2^5=32$$

basisnya $2$, pangkatnya $5$, dan hasilnya $32$.

Maka bentuk logaritmanya:

$${}^2\log 32=5$$

  Latihan Soal 2

Bentuk eksponen dari ${}^3\log 81=4$ adalah ....

A
$3^3=81$

B
$3^4=81$

C
$4^3=81$

D
$81^3=4$

E
$81^4=3$

💡 Pembahasan

Dari:

$${}^3\log 81=4$$

artinya basis $3$ dipangkatkan $4$ menghasilkan $81$.

Maka:

$$3^4=81$$

  Latihan Soal 3

Nilai dari ${}^2\log 16$ adalah ....

A
$2$

B
$3$

C
$4$

D
$5$

E
$6$

💡 Pembahasan

Karena:

$$16=2^4$$

maka:

$${}^2\log 16=4$$

  Latihan Soal 4

Nilai dari ${}^3\log 27$ adalah ....

A
$1$

B
$2$

C
$3$

D
$4$

E
$5$

💡 Pembahasan

Karena:

$$27=3^3$$

maka:

$${}^3\log 27=3$$

  Latihan Soal 5

Nilai dari ${}^5\log 1$ adalah ....

A
$-1$

B
$0$

C
$1$

D
$5$

E
$10$

💡 Pembahasan

Karena:

$$5^0=1$$

maka:

$${}^5\log 1=0$$

  Latihan Soal 6

Nilai dari ${}^7\log 7$ adalah ....

A
$0$

B
$1$

C
$2$

D
$7$

E
$49$

💡 Pembahasan

Karena:

$$7^1=7$$

maka:

$${}^7\log 7=1$$

  Latihan Soal 7

Nilai dari ${}^4\log 2$ adalah ....

A
$-\frac12$

B
$0$

C
$\frac12$

D
$1$

E
$2$

💡 Pembahasan

Karena:

$$4^{\frac12}=2$$

maka:

$${}^4\log 2=\frac12$$

  Latihan Soal 8

Nilai dari ${}^2\log \frac12$ adalah ....

A
$-1$

B
$0$

C
$\frac12$

D
$1$

E
$2$

💡 Pembahasan

Karena:

$$2^{-1}=\frac12$$

maka:

$${}^2\log \frac12=-1$$

  Latihan Soal 9

Jika ${}^3\log x=4$, maka nilai $x$ adalah ....

A
$12$

B
$27$

C
$81$

D
$108$

E
$243$

💡 Pembahasan

Ubah ke bentuk eksponen.

$$\begin{aligned}
{}^3\log x&=4\\
3^4&=x\\
81&=x
\end{aligned}$$

Jadi, $x=81$.

  Latihan Soal 10

Pernyataan yang benar tentang ${}^a\log c=b$ adalah ....

A
$a+c=b$

B
$a\cdot c=b$

C
$a^b=c$

D
$b^a=c$

E
$c^b=a$

💡 Pembahasan

Hubungan logaritma dan eksponen adalah:

$${}^a\log c=b \Longleftrightarrow a^b=c$$

Jadi, pernyataan yang benar adalah:

$$a^b=c$$

### Sifat-sifat Logaritma

#### Sifat-sifat (Identitas) Logaritma

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 6 Fungsi dan Pemodelannya, subbab A.2 Identitas Fungsi Logaritma, hlm. 251–253.*

##### Sifat 6.2 Identitas Logaritma

Misalkan $b$ bilangan positif dengan $b \neq 1$. Jika $M$, $N$, dan $p$ bilangan real dengan $M > 0$ dan $N > 0$, maka:

- ${}^{b}\!\log (MN) = {}^{b}\!\log M + {}^{b}\!\log N$
- ${}^{b}\!\log \left(\dfrac{M}{N}\right) = {}^{b}\!\log M - {}^{b}\!\log N$
- ${}^{b}\!\log \left(M^p\right) = p \cdot {}^{b}\!\log M$

##### Sifat 6.3 Identitas Logaritma

Misalkan $a$ dan $b$ bilangan positif dengan $a, b \neq 1$. Jika $M$, $N$, dan $p$ bilangan real dengan $M > 0$ dan $N > 0$, maka:

- ${}^{b}\!\log M = \dfrac{{}^{a}\!\log M}{{}^{a}\!\log b}$
- jika ${}^{b}\!\log M = {}^{b}\!\log N$, maka $M = N$
- jika $b > 1$ dan ${}^{b}\!\log M < {}^{b}\!\log N$, maka $M < N$
- jika $0 < b < 1$ dan ${}^{b}\!\log M < {}^{b}\!\log N$, maka $M > N$

##### Contoh 6.3

1. Jika $f(x) = \log x$, tentukan $y$ sehingga $f(80) + f(y) = 4$.
2. Jika $f(x) = {}^{3}\!\log x$ dan $f(5) \approx 1{,}46$, tentukan $f(75)$.

**Alternatif penyelesaian:**

1. $\log 80 + \log y = 4 \Rightarrow \log 80y = 4 \Rightarrow 80y = 10^4 \Rightarrow y = \dfrac{10^4}{80} = 125$.
2. $f(75) = {}^{3}\!\log (3 \times 25) = {}^{3}\!\log 3 + {}^{3}\!\log 5^2 = 1 + 2 \cdot {}^{3}\!\log 5 \approx 1 + 2(1{,}46) = 3{,}92$.

#### Memahami Sifat-sifat Logaritma

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/memahami-sifat-sifat-logaritma*

Pada materi sebelumnya, kita telah mempelajari pengertian logaritma. Logaritma merupakan operasi kebalikan dari eksponen.

Sekarang kita akan mempelajari **sifat-sifat logaritma**. Sifat-sifat ini sangat penting karena akan digunakan untuk menyederhanakan bentuk logaritma, menyelesaikan persamaan logaritma, dan mengubah bentuk logaritma yang tampak rumit menjadi lebih sederhana.

  📌 **Catatan:** Sifat-sifat logaritma membantu kita mengubah operasi perkalian, pembagian, dan perpangkatan menjadi bentuk penjumlahan, pengurangan, dan perkalian.

---

###### 1. Mengingat Kembali Bentuk Dasar Logaritma

Bentuk dasar logaritma adalah:

$${}^a\log b=c$$

yang berarti:

$$a^c=b$$

dengan syarat:

$$a\gt0,\quad a\ne1,\quad b\gt0$$

Pada bentuk tersebut:

- $a$ adalah basis logaritma;
- $b$ adalah numerus;
- $c$ adalah nilai logaritma.

Contoh:

$${}^2\log 8=3$$

karena:

$$2^3=8$$

---

###### 2. Sifat Logaritma dari Perkalian

Sifat pertama adalah sifat logaritma dari perkalian.

Jika $a\gt0$, $a\ne1$, $m\gt0$, dan $n\gt0$, maka:

$${}^a\log(mn)={}^a\log m+{}^a\log n$$

Artinya, logaritma dari perkalian dua bilangan dapat diubah menjadi penjumlahan dua logaritma.

Contoh:

$${}^2\log(8\cdot4)$$

dapat diubah menjadi:

$${}^2\log 8+{}^2\log 4$$

Karena:

$${}^2\log 8=3$$

dan:

$${}^2\log 4=2$$

maka:

$$\begin{aligned}
{}^2\log(8\cdot4)
&={}^2\log 8+{}^2\log 4\\
&=3+2\\
&=5
\end{aligned}$$

Cek langsung:

$$8\cdot4=32$$

dan:

$${}^2\log 32=5$$

  💡 **Ingat:** Perkalian di dalam logaritma berubah menjadi penjumlahan logaritma.

---

###### 3. Sifat Logaritma dari Pembagian

Sifat kedua adalah sifat logaritma dari pembagian.

Jika $a\gt0$, $a\ne1$, $m\gt0$, dan $n\gt0$, maka:

$${}^a\log\left(\frac{m}{n}\right)={}^a\log m-{}^a\log n$$

Artinya, logaritma dari pembagian dua bilangan dapat diubah menjadi pengurangan dua logaritma.

Contoh:

$${}^3\log\left(\frac{81}{9}\right)$$

dapat diubah menjadi:

$${}^3\log 81-{}^3\log 9$$

Karena:

$${}^3\log 81=4$$

dan:

$${}^3\log 9=2$$

maka:

$$\begin{aligned}
{}^3\log\left(\frac{81}{9}\right)
&={}^3\log 81-{}^3\log 9\\
&=4-2\\
&=2
\end{aligned}$$

Cek langsung:

$$\frac{81}{9}=9$$

dan:

$${}^3\log 9=2$$

  💡 **Ingat:** Pembagian di dalam logaritma berubah menjadi pengurangan logaritma.

---

###### 4. Sifat Logaritma dari Perpangkatan

Sifat ketiga adalah sifat logaritma dari perpangkatan.

Jika $a\gt0$, $a\ne1$, $m\gt0$, dan $r$ bilangan real, maka:

$${}^a\log(m^r)=r\cdot{}^a\log m$$

Artinya, pangkat pada numerus dapat dipindahkan menjadi pengali di depan logaritma.

Contoh:

$${}^2\log(8^2)$$

dapat diubah menjadi:

$$2\cdot{}^2\log 8$$

Karena:

$${}^2\log 8=3$$

maka:

$$\begin{aligned}
{}^2\log(8^2)
&=2\cdot{}^2\log 8\\
&=2\cdot3\\
&=6
\end{aligned}$$

Cek langsung:

$$8^2=64$$

dan:

$${}^2\log 64=6$$

  📌 **Catatan:** Sifat ini sangat sering digunakan untuk menyederhanakan bentuk logaritma yang memuat pangkat.

---

###### 5. Sifat Logaritma dari Akar

Bentuk akar dapat diubah menjadi bentuk pangkat pecahan.

Karena:

$$\sqrt[n]{m}=m^{\frac1n}$$

maka:

$${}^a\log\sqrt[n]{m}={}^a\log\left(m^{\frac1n}\right)$$

Dengan sifat perpangkatan logaritma:

$${}^a\log\sqrt[n]{m}=\frac1n\cdot{}^a\log m$$

Contoh:

$${}^2\log\sqrt{8}$$

Karena:

$$\sqrt{8}=8^{\frac12}$$

maka:

$$\begin{aligned}
{}^2\log\sqrt{8}
&={}^2\log\left(8^{\frac12}\right)\\
&=\frac12\cdot{}^2\log 8\\
&=\frac12\cdot3\\
&=\frac32
\end{aligned}$$

Jadi:

$${}^2\log\sqrt{8}=\frac32$$

---

###### 6. Sifat Logaritma dari Bilangan 1

Untuk setiap basis $a$ yang memenuhi $a\gt0$ dan $a\ne1$, berlaku:

$${}^a\log 1=0$$

Hal ini benar karena:

$$a^0=1$$

Contoh:

$${}^2\log 1=0$$

dan:

$${}^{10}\log 1=0$$

  💡 **Ingat:** Logaritma dari $1$ selalu bernilai $0$, asalkan basisnya memenuhi syarat.

---

###### 7. Sifat Logaritma dengan Numerus Sama dengan Basis

Untuk setiap basis $a$ yang memenuhi $a\gt0$ dan $a\ne1$, berlaku:

$${}^a\log a=1$$

Hal ini benar karena:

$$a^1=a$$

Contoh:

$${}^3\log 3=1$$

dan:

$${}^7\log 7=1$$

---

###### 8. Sifat Logaritma dari Pangkat Basis

Jika $a\gt0$ dan $a\ne1$, maka:

$${}^a\log a^n=n$$

Mengapa?

Karena basisnya sama, yaitu $a$. Bentuk ${}^a\log a^n$ menanyakan “$a$ dipangkatkan berapa agar menjadi $a^n$?”

Jawabannya tentu $n$.

Contoh:

$${}^2\log 2^5=5$$

Contoh lain:

$${}^3\log 3^4=4$$

---

###### 9. Sifat Pangkat dengan Eksponen Logaritma

Jika $a\gt0$, $a\ne1$, dan $m\gt0$, maka:

$$a^{{}^a\log m}=m$$

Sifat ini menunjukkan bahwa eksponen dan logaritma saling membatalkan.

Contoh:

$$2^{{}^2\log 7}=7$$

Contoh lain:

$$5^{{}^5\log 12}=12$$

  📌 **Catatan:** Sifat $a^{{}^a\log m}=m$ adalah bentuk kebalikan dari ${}^a\log a^n=n$.

---

###### 10. Sifat Perubahan Basis Logaritma

Kadang-kadang, kita perlu mengubah basis logaritma agar lebih mudah dihitung.

Sifat perubahan basis adalah:

$${}^a\log b=\frac{{}^c\log b}{{}^c\log a}$$

dengan syarat:

$$a\gt0,\quad a\ne1,\quad b\gt0,\quad c\gt0,\quad c\ne1$$

Contoh:

Tentukan nilai:

$${}^4\log 8$$

Kita dapat mengubah basisnya menjadi basis $2$.

$$\begin{aligned}
{}^4\log 8
&=\frac{{}^2\log 8}{{}^2\log 4}\\
&=\frac{3}{2}
\end{aligned}$$

Jadi:

$${}^4\log 8=\frac32$$

---

###### 11. Sifat Kebalikan Basis dan Numerus

Dari sifat perubahan basis, diperoleh:

$${}^a\log b=\frac{1}{{}^b\log a}$$

Contoh:

$${}^2\log 8=\frac{1}{{}^8\log 2}$$

Karena:

$${}^2\log 8=3$$

maka:

$${}^8\log 2=\frac13$$

Sehingga:

$$\frac{1}{{}^8\log 2}=\frac{1}{\frac13}=3$$

---

###### 12. Sifat Perkalian Logaritma Berantai

Salah satu sifat penting dalam logaritma adalah:

$${}^a\log b\cdot{}^b\log c={}^a\log c$$

Contoh:

$${}^2\log 4\cdot{}^4\log 16$$

Gunakan sifat:

$$\begin{aligned}
{}^2\log 4\cdot{}^4\log 16
&={}^2\log 16\\
&=4
\end{aligned}$$

Cek langsung:

$${}^2\log 4=2$$

dan:

$${}^4\log 16=2$$

maka:

$$2\cdot2=4$$

---

###### 13. Sifat Logaritma dengan Pangkat pada Basis dan Numerus

Untuk $a\gt0$, $a\ne1$, $b\gt0$, serta $m$ dan $n$ bilangan real dengan $m\ne0$, berlaku:

$${}^{a^m}\log b^n=\frac{n}{m}\cdot{}^a\log b$$

Contoh:

$${}^{2^2}\log 8^3$$

Karena $2^2=4$ dan $8=2^3$, maka bisa dihitung dengan sifat:

$$\begin{aligned}
{}^{2^2}\log 8^3
&={}^{2^2}\log (2^3)^3\\
&={}^{2^2}\log 2^9\\
&=\frac{9}{2}
\end{aligned}$$

Atau menggunakan rumus:

$$\begin{aligned}
{}^{2^2}\log 8^3
&=\frac{3}{2}\cdot{}^2\log 8\\
&=\frac{3}{2}\cdot3\\
&=\frac92
\end{aligned}$$

---

###### 14. Ringkasan Sifat-sifat Logaritma

| No. | Sifat Logaritma | Keterangan |
| --- | --- | --- |
| 1 | ${}^a\log(mn)={}^a\log m+{}^a\log n$ | Perkalian menjadi penjumlahan. |
| 2 | ${}^a\log\left(\frac{m}{n}\right)={}^a\log m-{}^a\log n$ | Pembagian menjadi pengurangan. |
| 3 | ${}^a\log(m^r)=r\cdot{}^a\log m$ | Pangkat menjadi pengali. |
| 4 | ${}^a\log 1=0$ | Karena $a^0=1$. |
| 5 | ${}^a\log a=1$ | Karena $a^1=a$. |
| 6 | ${}^a\log a^n=n$ | Basis dan numerus berpangkat basis yang sama. |
| 7 | $a^{{}^a\log m}=m$ | Eksponen dan logaritma saling membatalkan. |
| 8 | ${}^a\log b=\frac{{}^c\log b}{{}^c\log a}$ | Perubahan basis. |
| 9 | ${}^a\log b=\frac{1}{{}^b\log a}$ | Kebalikan basis dan numerus. |
| 10 | ${}^a\log b\cdot{}^b\log c={}^a\log c$ | Perkalian logaritma berantai. |

---

###### 15. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengubah perkalian menjadi perkalian logaritma. | ${}^a\log(mn)={}^a\log m\cdot{}^a\log n$ | Seharusnya ${}^a\log(mn)={}^a\log m+{}^a\log n$. |
| Mengubah pembagian menjadi pembagian logaritma. | ${}^a\log\left(\frac{m}{n}\right)=\frac{{}^a\log m}{{}^a\log n}$ | Seharusnya ${}^a\log\left(\frac{m}{n}\right)={}^a\log m-{}^a\log n$. |
| Lupa memindahkan pangkat ke depan. | ${}^a\log(m^r)={}^a\log m^r$ tanpa disederhanakan. | Gunakan ${}^a\log(m^r)=r\cdot{}^a\log m$. |
| Salah memakai sifat perubahan basis. | ${}^a\log b=\frac{{}^c\log a}{{}^c\log b}$ | Seharusnya ${}^a\log b=\frac{{}^c\log b}{{}^c\log a}$. |
| Lupa syarat numerus harus positif. | Menggunakan ${}^2\log(-4)$. | Numerus harus lebih dari $0$. |

  ⚠️ **Perhatian:** Jangan menghafal sifat logaritma secara terpisah tanpa memahami bentuk eksponennya. Banyak kesalahan terjadi karena tertukar antara penjumlahan, pengurangan, perkalian, dan pembagian.

---

###### 16. Rangkuman

- Logaritma memiliki sifat-sifat yang dapat digunakan untuk menyederhanakan bentuk.
- Sifat perkalian:
  $${}^a\log(mn)={}^a\log m+{}^a\log n$$
- Sifat pembagian:
  $${}^a\log\left(\frac{m}{n}\right)={}^a\log m-{}^a\log n$$
- Sifat perpangkatan:
  $${}^a\log(m^r)=r\cdot{}^a\log m$$
- Logaritma dari $1$ bernilai $0$:
  $${}^a\log 1=0$$
- Logaritma dengan numerus sama dengan basis bernilai $1$:
  $${}^a\log a=1$$
- Perubahan basis:
  $${}^a\log b=\frac{{}^c\log b}{{}^c\log a}$$
- Perkalian logaritma berantai:
  $${}^a\log b\cdot{}^b\log c={}^a\log c$$
- Semua sifat logaritma hanya berlaku jika basis dan numerus memenuhi syarat.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Sederhanakan bentuk berikut.
$${}^2\log 8+{}^2\log 4$$

💡 Pembahasan

Gunakan sifat:

$${}^a\log m+{}^a\log n={}^a\log(mn)$$

Maka:

$$\begin{aligned}
{}^2\log 8+{}^2\log 4
&={}^2\log(8\cdot4)\\
&={}^2\log 32\\
&=5
\end{aligned}$$

Jadi, hasilnya adalah $5$.

  Contoh Soal 2

Tentukan nilai dari:
$${}^3\log 81-{}^3\log 9$$

💡 Pembahasan

Gunakan sifat:

$${}^a\log m-{}^a\log n={}^a\log\left(\frac{m}{n}\right)$$

Maka:

$$\begin{aligned}
{}^3\log 81-{}^3\log 9
&={}^3\log\left(\frac{81}{9}\right)\\
&={}^3\log 9\\
&=2
\end{aligned}$$

Jadi, hasilnya adalah $2$.

  Contoh Soal 3

Tentukan nilai dari:
$${}^4\log 8$$

💡 Pembahasan

Gunakan perubahan basis ke basis $2$.

$$\begin{aligned}
{}^4\log 8
&=\frac{{}^2\log 8}{{}^2\log 4}\\
&=\frac{3}{2}
\end{aligned}$$

Jadi:

$${}^4\log 8=\frac32$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Bentuk sederhana dari ${}^2\log 4+{}^2\log 8$ adalah ....

A
$3$

B
$5$

C
$6$

D
$8$

E
$12$

💡 Pembahasan

$$\begin{aligned}
{}^2\log 4+{}^2\log 8
&=2+3\\
&=5
\end{aligned}$$

  Latihan Soal 2

Bentuk sederhana dari ${}^3\log 81-{}^3\log 3$ adalah ....

A
$1$

B
$2$

C
$3$

D
$4$

E
$5$

💡 Pembahasan

$$\begin{aligned}
{}^3\log 81-{}^3\log 3
&=4-1\\
&=3
\end{aligned}$$

  Latihan Soal 3

Bentuk sederhana dari ${}^5\log 25^3$ adalah ....

A
$3$

B
$6$

C
$8$

D
$10$

E
$15$

💡 Pembahasan

Karena $25=5^2$, maka:

$$\begin{aligned}
{}^5\log 25^3
&={}^5\log (5^2)^3\\
&={}^5\log 5^6\\
&=6
\end{aligned}$$

  Latihan Soal 4

Nilai dari ${}^2\log 1$ adalah ....

A
$-1$

B
$0$

C
$1$

D
$2$

E
$4$

💡 Pembahasan

Karena $2^0=1$, maka:

$${}^2\log 1=0$$

  Latihan Soal 5

Nilai dari ${}^7\log 7$ adalah ....

A
$0$

B
$1$

C
$2$

D
$7$

E
$49$

💡 Pembahasan

Karena $7^1=7$, maka:

$${}^7\log 7=1$$

  Latihan Soal 6

Nilai dari ${}^4\log 8$ adalah ....

A
$\frac12$

B
$1$

C
$\frac32$

D
$2$

E
$3$

💡 Pembahasan

Gunakan perubahan basis ke basis $2$.

$$\begin{aligned}
{}^4\log 8
&=\frac{{}^2\log 8}{{}^2\log 4}\\
&=\frac{3}{2}
\end{aligned}$$

  Latihan Soal 7

Nilai dari ${}^2\log 3\cdot{}^3\log 9$ adalah ....

A
$1$

B
${}^2\log 3$

C
${}^2\log 9$

D
${}^3\log 2$

E
${}^9\log 2$

💡 Pembahasan

Gunakan sifat:

$${}^a\log b\cdot{}^b\log c={}^a\log c$$

Maka:

$$\begin{aligned}
{}^2\log 3\cdot{}^3\log 9
&={}^2\log 9
\end{aligned}$$

  Latihan Soal 8

Bentuk sederhana dari ${}^2\log 12-{}^2\log 3$ adalah ....

A
$1$

B
$2$

C
$3$

D
$4$

E
$6$

💡 Pembahasan

$$\begin{aligned}
{}^2\log 12-{}^2\log 3
&={}^2\log\left(\frac{12}{3}\right)\\
&={}^2\log 4\\
&=2
\end{aligned}$$

  Latihan Soal 9

Bentuk sederhana dari $2^{{}^2\log 11}$ adalah ....

A
$2$

B
${}^2\log 11$

C
$11$

D
$22$

E
$121$

💡 Pembahasan

Gunakan sifat:

$$a^{{}^a\log m}=m$$

Maka:

$$2^{{}^2\log 11}=11$$

  Latihan Soal 10

Bentuk sederhana dari ${}^5\log 125+{}^5\log 25$ adalah ....

A
$3$

B
$4$

C
$5$

D
$6$

E
$8$

💡 Pembahasan

$$\begin{aligned}
{}^5\log 125+{}^5\log 25
&=3+2\\
&=5
\end{aligned}$$

### Persamaan Logaritma

#### Memahami Cara Menyelesaikan Persamaan Logaritma

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/persamaan-logaritma*

Pada materi sebelumnya, kita telah mempelajari sifat-sifat logaritma. Sifat-sifat tersebut akan sangat berguna dalam menyelesaikan **persamaan logaritma**.

Persamaan logaritma adalah persamaan yang memuat bentuk logaritma dan variabelnya berada pada numerus, basis, atau bentuk lain yang berhubungan dengan logaritma.

  📌 **Catatan:** Kunci utama menyelesaikan persamaan logaritma adalah mengubahnya ke bentuk eksponen atau menyamakan bentuk logaritmanya.

---

###### 1. Mengingat Kembali Definisi Logaritma

Definisi dasar logaritma adalah:

$${}^a\log b=c$$

jika dan hanya jika:

$$a^c=b$$

dengan syarat:

$$a\gt0,\quad a\ne1,\quad b\gt0$$

Artinya, logaritma selalu memiliki syarat. Saat menyelesaikan persamaan logaritma, kita tidak cukup hanya mendapatkan nilai variabel, tetapi juga harus memeriksa apakah nilai tersebut memenuhi syarat logaritma.

  ⚠️ **Perhatian:** Dalam persamaan logaritma, hasil akhir harus dicek ke syarat numerus dan basis.

---

###### 2. Bentuk Dasar Persamaan Logaritma

Bentuk dasar persamaan logaritma adalah:

$${}^a\log f(x)=b$$

Untuk menyelesaikannya, ubah ke bentuk eksponen:

$$f(x)=a^b$$

dengan syarat:

$$a\gt0,\quad a\ne1,\quad f(x)\gt0$$

Contoh:

$${}^2\log x=5$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
{}^2\log x&=5\\
x&=2^5\\
x&=32
\end{aligned}$$

Cek syarat:

$$x\gt0$$

Karena $32\gt0$, maka $x=32$ memenuhi.

Jadi:

$$x=32$$

---

###### 3. Persamaan Logaritma dengan Numerus Berbentuk Linear

Contoh:

$${}^3\log(x+2)=4$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
{}^3\log(x+2)&=4\\
x+2&=3^4\\
x+2&=81\\
x&=79
\end{aligned}$$

Cek syarat numerus:

$$x+2\gt0$$

Substitusi $x=79$:

$$79+2=81\gt0$$

Jadi, penyelesaiannya adalah:

$$x=79$$

  📌 **Catatan:** Setelah mendapat nilai $x$, selalu substitusikan kembali ke numerus logaritma.

---

###### 4. Persamaan Logaritma dengan Numerus Berbentuk Kuadrat

Persamaan logaritma dapat memuat numerus berbentuk kuadrat.

Contoh:

$${}^2\log(x^2-3x)=2$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
{}^2\log(x^2-3x)&=2\\
x^2-3x&=2^2\\
x^2-3x&=4\\
x^2-3x-4&=0
\end{aligned}$$

Faktorkan:

$$\begin{aligned}
x^2-3x-4&=0\\
(x-4)(x+1)&=0
\end{aligned}$$

Maka:

$$x=4 \quad \text{atau} \quad x=-1$$

Cek syarat numerus:

$$x^2-3x\gt0$$

Untuk $x=4$:

$$4^2-3(4)=16-12=4\gt0$$

Untuk $x=-1$:

$$(-1)^2-3(-1)=1+3=4\gt0$$

Keduanya memenuhi.

Jadi, penyelesaiannya adalah:

$$x=4 \quad \text{atau} \quad x=-1$$

---

###### 5. Persamaan Logaritma dengan Logaritma Sama Basis

Bentuk yang sering muncul adalah:

$${}^a\log f(x)={}^a\log g(x)$$

Jika basisnya sama, maka numerusnya dapat disamakan:

$$f(x)=g(x)$$

dengan syarat:

$$f(x)\gt0 \quad \text{dan} \quad g(x)\gt0$$

Contoh:

$${}^2\log(x+3)={}^2\log(2x-1)$$

Karena basisnya sama, maka:

$$\begin{aligned}
x+3&=2x-1\\
3+1&=2x-x\\
4&=x
\end{aligned}$$

Cek syarat:

$$x+3\gt0$$

dan:

$$2x-1\gt0$$

Untuk $x=4$:

$$4+3=7\gt0$$

dan:

$$2(4)-1=7\gt0$$

Jadi, penyelesaiannya adalah:

$$x=4$$

---

###### 6. Persamaan Logaritma dengan Sifat Penjumlahan

Gunakan sifat:

$${}^a\log m+{}^a\log n={}^a\log(mn)$$

Contoh:

$${}^2\log x+{}^2\log 4=5$$

Gabungkan logaritma di ruas kiri:

$$\begin{aligned}
{}^2\log x+{}^2\log 4&=5\\
{}^2\log(4x)&=5
\end{aligned}$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
4x&=2^5\\
4x&=32\\
x&=8
\end{aligned}$$

Cek syarat:

$$x\gt0$$

Karena $8\gt0$, maka $x=8$ memenuhi.

Jadi:

$$x=8$$

---

###### 7. Persamaan Logaritma dengan Sifat Pengurangan

Gunakan sifat:

$${}^a\log m-{}^a\log n={}^a\log\left(\frac{m}{n}\right)$$

Contoh:

$${}^3\log(2x)-{}^3\log 2=3$$

Gabungkan logaritma:

$$\begin{aligned}
{}^3\log(2x)-{}^3\log 2&=3\\
{}^3\log\left(\frac{2x}{2}\right)&=3\\
{}^3\log x&=3
\end{aligned}$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
x&=3^3\\
x&=27
\end{aligned}$$

Cek syarat:

$$x\gt0$$

Karena $27\gt0$, maka $x=27$ memenuhi.

Jadi:

$$x=27$$

---

###### 8. Persamaan Logaritma dengan Sifat Pangkat

Gunakan sifat:

$${}^a\log(m^r)=r\cdot{}^a\log m$$

Contoh:

$${}^2\log(x^2)=6$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
{}^2\log(x^2)&=6\\
x^2&=2^6\\
x^2&=64\\
x&=8 \quad \text{atau} \quad x=-8
\end{aligned}$$

Cek syarat numerus:

$$x^2\gt0$$

Untuk $x=8$:

$$8^2=64\gt0$$

Untuk $x=-8$:

$$(-8)^2=64\gt0$$

Keduanya memenuhi.

Jadi, penyelesaiannya adalah:

$$x=8 \quad \text{atau} \quad x=-8$$

  ⚠️ **Perhatian:** Jika numerusnya $x^2$, maka $x$ boleh negatif asalkan $x^2\gt0$. Tetapi jika numerusnya $x$, maka $x$ harus positif.

---

###### 9. Persamaan Logaritma yang Menghasilkan Akar Tidak Memenuhi Syarat

Kadang-kadang, hasil aljabar memberikan beberapa nilai, tetapi tidak semuanya memenuhi syarat logaritma.

Contoh:

$${}^2\log(x-1)+{}^2\log(x-3)=3$$

Gabungkan logaritma:

$$\begin{aligned}
{}^2\log(x-1)+{}^2\log(x-3)&=3\\
{}^2\log((x-1)(x-3))&=3
\end{aligned}$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
(x-1)(x-3)&=2^3\\
x^2-4x+3&=8\\
x^2-4x-5&=0
\end{aligned}$$

Faktorkan:

$$\begin{aligned}
x^2-4x-5&=0\\
(x-5)(x+1)&=0
\end{aligned}$$

Maka:

$$x=5 \quad \text{atau} \quad x=-1$$

Cek syarat:

$$x-1\gt0$$

dan:

$$x-3\gt0$$

Maka:

$$x\gt3$$

Dari dua nilai yang diperoleh, hanya $x=5$ yang memenuhi.

Jadi, penyelesaiannya adalah:

$$x=5$$

---

###### 10. Persamaan Logaritma dengan Basis Berubah

Ada juga persamaan logaritma yang variabelnya berada pada basis.

Contoh:

$${}^x\log 16=2$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
{}^x\log 16&=2\\
x^2&=16\\
x&=4 \quad \text{atau} \quad x=-4
\end{aligned}$$

Namun, basis logaritma harus memenuhi:

$$x\gt0,\quad x\ne1$$

Maka $x=-4$ ditolak.

Jadi:

$$x=4$$

  ⚠️ **Perhatian:** Jika variabel berada pada basis logaritma, jangan lupa cek syarat basis, yaitu basis harus positif dan tidak sama dengan $1$.

---

###### 11. Persamaan Logaritma dengan Bentuk Eksponen

Kadang persamaan logaritma dapat diselesaikan dengan mengubah logaritma menjadi bentuk eksponen.

Contoh:

$${}^2\log(x+1)=3$$

Ubah ke bentuk eksponen:

$$\begin{aligned}
{}^2\log(x+1)&=3\\
x+1&=2^3\\
x+1&=8\\
x&=7
\end{aligned}$$

Cek syarat:

$$x+1\gt0$$

Untuk $x=7$:

$$7+1=8\gt0$$

Jadi:

$$x=7$$

---

###### 12. Persamaan Logaritma dengan Substitusi

Beberapa persamaan logaritma dapat diselesaikan dengan substitusi.

Contoh:

$$({}^2\log x)^2-5({}^2\log x)+6=0$$

Misalkan:

$$p={}^2\log x$$

Maka persamaan menjadi:

$$p^2-5p+6=0$$

Faktorkan:

$$\begin{aligned}
p^2-5p+6&=0\\
(p-2)(p-3)&=0
\end{aligned}$$

Maka:

$$p=2 \quad \text{atau} \quad p=3$$

Karena $p={}^2\log x$, maka:

Untuk $p=2$:

$$\begin{aligned}
{}^2\log x&=2\\
x&=2^2\\
x&=4
\end{aligned}$$

Untuk $p=3$:

$$\begin{aligned}
{}^2\log x&=3\\
x&=2^3\\
x&=8
\end{aligned}$$

Cek syarat:

$$x\gt0$$

Keduanya memenuhi.

Jadi, penyelesaiannya adalah:

$$x=4 \quad \text{atau} \quad x=8$$

---

###### 13. Langkah Umum Menyelesaikan Persamaan Logaritma

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan syarat logaritma, yaitu basis valid dan numerus positif. |
| 2 | Gunakan sifat logaritma jika persamaan memuat penjumlahan, pengurangan, atau pangkat. |
| 3 | Jika memungkinkan, samakan basis logaritma. |
| 4 | Ubah bentuk logaritma ke bentuk eksponen. |
| 5 | Selesaikan persamaan aljabar yang diperoleh. |
| 6 | Cek kembali semua nilai yang diperoleh ke syarat logaritma. |

  💡 **Strategi:** Jangan langsung percaya pada semua akar yang diperoleh. Dalam persamaan logaritma, pengecekan syarat adalah bagian wajib.

---

###### 14. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh | Perbaikan |
| --- | --- | --- |
| Tidak mengecek syarat numerus. | Menerima $x=-1$ pada bentuk ${}^2\log(x-3)$. | Harus dicek bahwa $x-3\gt0$. |
| Tidak mengecek syarat basis. | Menerima $x=-4$ pada bentuk ${}^x\log 16$. | Basis harus $x\gt0$ dan $x\ne1$. |
| Salah menggabungkan logaritma. | ${}^a\log m+{}^a\log n={}^a\log(m+n)$. | Seharusnya ${}^a\log m+{}^a\log n={}^a\log(mn)$. |
| Salah pada sifat pengurangan. | ${}^a\log m-{}^a\log n={}^a\log(m-n)$. | Seharusnya ${}^a\log m-{}^a\log n={}^a\log\left(\frac{m}{n}\right)$. |
| Lupa mengubah ke bentuk eksponen. | ${}^2\log x=5$ langsung ditulis $x=10$. | Seharusnya $x=2^5=32$. |

  ⚠️ **Perhatian:** Kesalahan paling sering dalam persamaan logaritma adalah lupa mengecek syarat numerus dan basis.

---

###### 15. Rangkuman

- Persamaan logaritma adalah persamaan yang memuat logaritma dan variabel.
- Definisi dasar:
  $${}^a\log b=c \Longleftrightarrow a^c=b$$
- Syarat logaritma:
  $$a\gt0,\quad a\ne1,\quad b\gt0$$
- Jika:
  $${}^a\log f(x)=b$$
  maka:
  $$f(x)=a^b$$
- Jika:
  $${}^a\log f(x)={}^a\log g(x)$$
  maka:
  $$f(x)=g(x)$$
  dengan syarat $f(x)\gt0$ dan $g(x)\gt0$.
- Gunakan sifat logaritma untuk menggabungkan atau menyederhanakan bentuk.
- Semua hasil akhir harus dicek ke syarat logaritma.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan nilai $x$ yang memenuhi persamaan:
$${}^2\log(x+1)=4$$

💡 Pembahasan

Ubah ke bentuk eksponen.

$$\begin{aligned}
{}^2\log(x+1)&=4\\
x+1&=2^4\\
x+1&=16\\
x&=15
\end{aligned}$$

Cek syarat:

$$x+1\gt0$$

Untuk $x=15$:

$$15+1=16\gt0$$

Jadi, nilai $x$ adalah:

$$x=15$$

  Contoh Soal 2

Tentukan nilai $x$ yang memenuhi persamaan:
$${}^3\log(x+5)={}^3\log(2x-1)$$

💡 Pembahasan

Karena basis logaritma sama, maka numerusnya dapat disamakan.

$$\begin{aligned}
x+5&=2x-1\\
5+1&=2x-x\\
6&=x
\end{aligned}$$

Cek syarat:

$$x+5\gt0$$

dan:

$$2x-1\gt0$$

Untuk $x=6$:

$$6+5=11\gt0$$

dan:

$$2(6)-1=11\gt0$$

Jadi, nilai $x$ adalah:

$$x=6$$

  Contoh Soal 3

Tentukan nilai $x$ yang memenuhi persamaan:
$${}^2\log x+{}^2\log(x-2)=3$$

💡 Pembahasan

Tentukan syarat terlebih dahulu.

$$x\gt0$$

dan:

$$x-2\gt0$$

Maka:

$$x\gt2$$

Gabungkan logaritma.

$$\begin{aligned}
{}^2\log x+{}^2\log(x-2)&=3\\
{}^2\log(x(x-2))&=3\\
x(x-2)&=2^3\\
x^2-2x&=8\\
x^2-2x-8&=0
\end{aligned}$$

Faktorkan:

$$\begin{aligned}
x^2-2x-8&=0\\
(x-4)(x+2)&=0
\end{aligned}$$

Maka:

$$x=4 \quad \text{atau} \quad x=-2$$

Karena syaratnya $x\gt2$, maka $x=-2$ ditolak.

Jadi, nilai $x$ adalah:

$$x=4$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Nilai $x$ yang memenuhi ${}^2\log x=6$ adalah ....

A
$16$

B
$32$

C
$64$

D
$128$

E
$256$

💡 Pembahasan

$$\begin{aligned}
{}^2\log x&=6\\
x&=2^6\\
x&=64
\end{aligned}$$

  Latihan Soal 2

Nilai $x$ yang memenuhi ${}^3\log(x+2)=3$ adalah ....

A
$23$

B
$24$

C
$25$

D
$27$

E
$29$

💡 Pembahasan

$$\begin{aligned}
{}^3\log(x+2)&=3\\
x+2&=3^3\\
x+2&=27\\
x&=25
\end{aligned}$$

  Latihan Soal 3

Nilai $x$ yang memenuhi ${}^2\log(x-1)=4$ adalah ....

A
$15$

B
$17$

C
$18$

D
$31$

E
$33$

💡 Pembahasan

$$\begin{aligned}
{}^2\log(x-1)&=4\\
x-1&=2^4\\
x-1&=16\\
x&=17
\end{aligned}$$

  Latihan Soal 4

Nilai $x$ yang memenuhi ${}^2\log(x+3)={}^2\log(2x-1)$ adalah ....

A
$2$

B
$3$

C
$4$

D
$5$

E
$6$

💡 Pembahasan

Karena basis sama, numerus dapat disamakan.

$$\begin{aligned}
x+3&=2x-1\\
4&=x
\end{aligned}$$

Jadi, $x=4$.

  Latihan Soal 5

Nilai $x$ yang memenuhi ${}^3\log x+{}^3\log 3=3$ adalah ....

A
$3$

B
$9$

C
$18$

D
$27$

E
$81$

💡 Pembahasan

$$\begin{aligned}
{}^3\log x+{}^3\log 3&=3\\
{}^3\log(3x)&=3\\
3x&=3^3\\
3x&=27\\
x&=9
\end{aligned}$$

  Latihan Soal 6

Nilai $x$ yang memenuhi ${}^2\log x+{}^2\log(x-2)=3$ adalah ....

A
$2$

B
$4$

C
$6$

D
$8$

E
$10$

💡 Pembahasan

Syarat:

$$x\gt0,\quad x-2\gt0$$

Maka $x\gt2$.

$$\begin{aligned}
{}^2\log x+{}^2\log(x-2)&=3\\
{}^2\log(x(x-2))&=3\\
x(x-2)&=8\\
x^2-2x-8&=0\\
(x-4)(x+2)&=0
\end{aligned}$$

Maka $x=4$ atau $x=-2$.

Karena syaratnya $x\gt2$, maka $x=4$.

  Latihan Soal 7

Nilai $x$ yang memenuhi ${}^x\log 25=2$ adalah ....

A
$-5$

B
$1$

C
$5$

D
$10$

E
$25$

💡 Pembahasan

Ubah ke bentuk eksponen.

$$\begin{aligned}
{}^x\log 25&=2\\
x^2&=25\\
x&=5 \quad \text{atau} \quad x=-5
\end{aligned}$$

Basis harus positif dan tidak sama dengan $1$, maka $x=-5$ ditolak.

Jadi, $x=5$.

  Latihan Soal 8

Nilai $x$ yang memenuhi $({}^2\log x)^2-5({}^2\log x)+6=0$ adalah ....

A
$2$ dan $4$

B
$4$ dan $8$

C
$8$ dan $16$

D
$16$ dan $32$

E
$32$ dan $64$

💡 Pembahasan

Misalkan:

$$p={}^2\log x$$

Maka:

$$\begin{aligned}
p^2-5p+6&=0\\
(p-2)(p-3)&=0
\end{aligned}$$

Sehingga:

$$p=2 \quad \text{atau} \quad p=3$$

Jika $p=2$:

$$\begin{aligned}
{}^2\log x&=2\\
x&=4
\end{aligned}$$

Jika $p=3$:

$$\begin{aligned}
{}^2\log x&=3\\
x&=8
\end{aligned}$$

Jadi, $x=4$ atau $x=8$.

  Latihan Soal 9

Nilai $x$ yang memenuhi ${}^2\log(x-1)+{}^2\log(x-3)=3$ adalah ....

A
$-1$

B
$3$

C
$5$

D
$7$

E
$9$

💡 Pembahasan

Syarat:

$$x-1\gt0,\quad x-3\gt0$$

Maka:

$$x\gt3$$

Gabungkan logaritma.

$$\begin{aligned}
{}^2\log(x-1)+{}^2\log(x-3)&=3\\
{}^2\log((x-1)(x-3))&=3\\
(x-1)(x-3)&=8\\
x^2-4x+3&=8\\
x^2-4x-5&=0\\
(x-5)(x+1)&=0
\end{aligned}$$

Maka $x=5$ atau $x=-1$.

Karena syaratnya $x\gt3$, maka $x=5$.

  Latihan Soal 10

Nilai $x$ yang memenuhi ${}^5\log(x^2-4x)=1$ adalah ....

A
$-1$ saja

B
$5$ saja

C
$-1$ atau $5$

D
$1$ atau $-5$

E
$0$ atau $4$

💡 Pembahasan

Ubah ke bentuk eksponen.

$$\begin{aligned}
{}^5\log(x^2-4x)&=1\\
x^2-4x&=5^1\\
x^2-4x&=5\\
x^2-4x-5&=0\\
(x-5)(x+1)&=0
\end{aligned}$$

Maka:

$$x=5 \quad \text{atau} \quad x=-1$$

Cek syarat numerus:

$$x^2-4x\gt0$$

Untuk $x=5$:

$$25-20=5\gt0$$

Untuk $x=-1$:

$$1+4=5\gt0$$

Keduanya memenuhi.

### Pertidaksamaan Logaritma

#### Pertidaksamaan Logaritma: Syarat, Sifat, Cara Menyelesaikan

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pertidaksamaan-logaritma*

Pada materi sebelumnya, kita telah mempelajari grafik fungsi logaritma. Sekarang kita akan membahas **pertidaksamaan logaritma**.

Pertidaksamaan logaritma adalah pertidaksamaan yang memuat bentuk logaritma, dengan variabel biasanya berada pada numerus atau basis logaritma.

  📌 **Catatan:** Dalam pertidaksamaan logaritma, syarat logaritma harus diperhatikan sebelum menentukan penyelesaian.

---

###### 1. Mengingat Kembali Syarat Logaritma

Bentuk logaritma:

$${}^a\log b$$

memiliki syarat:

$$a\gt0,\quad a\ne1,\quad b\gt0$$

Artinya:

- basis harus positif;
- basis tidak boleh sama dengan $1$;
- numerus harus positif.

Dalam pertidaksamaan logaritma, syarat numerus sangat penting.

Contoh:

$${}^2\log(x-3)$$

memiliki syarat:

$$x-3\gt0$$

sehingga:

$$x\gt3$$

Nilai $x$ yang tidak memenuhi syarat ini tidak boleh menjadi penyelesaian, walaupun mungkin memenuhi hasil aljabar tertentu.

  ⚠️ **Perhatian:** Dalam logaritma, numerus harus lebih dari $0$, bukan lebih dari atau sama dengan $0$.

---

###### 2. Bentuk Dasar Pertidaksamaan Logaritma

Bentuk dasar pertidaksamaan logaritma adalah:

$${}^a\log f(x)\gt b$$

atau:

$${}^a\log f(x)\lt b$$

Untuk menyelesaikannya, kita harus memperhatikan nilai basis $a$.

Ada dua kasus penting:

| Basis | Sifat Fungsi Logaritma | Pengaruh pada Tanda Pertidaksamaan |
| --- | --- | --- |
| $a\gt1$ | Naik | Tanda pertidaksamaan tetap. |
| $0\lt a\lt1$ | Turun | Tanda pertidaksamaan berbalik. |

  💡 **Ingat:** Jika basis logaritma lebih dari $1$, tanda tetap. Jika basis logaritma berada di antara $0$ dan $1$, tanda berbalik.

---

###### 3. Pertidaksamaan Logaritma dengan Basis Lebih dari $1$

Jika $a\gt1$, maka fungsi:

$$y={}^a\log x$$

bersifat naik.

Akibatnya:

$${}^a\log f(x)\gt{}^a\log g(x)$$

setara dengan:

$$f(x)\gt g(x)$$

dengan syarat:

$$f(x)\gt0,\quad g(x)\gt0$$

Contoh sederhana:

$${}^2\log x\gt3$$

Ubah $3$ menjadi bentuk logaritma basis $2$.

Karena:

$$3={}^2\log 8$$

maka:

$${}^2\log x\gt{}^2\log 8$$

Karena basis $2\gt1$, tanda pertidaksamaan tetap.

$$x\gt8$$

Cek syarat:

$$x\gt0$$

Karena $x\gt8$ sudah memenuhi $x\gt0$, maka penyelesaiannya adalah:

$$x\gt8$$

---

###### 4. Pertidaksamaan Logaritma dengan Basis antara $0$ dan $1$

Jika $0\lt a\lt1$, maka fungsi:

$$y={}^a\log x$$

bersifat turun.

Akibatnya:

$${}^a\log f(x)\gt{}^a\log g(x)$$

setara dengan:

$$f(x)\lt g(x)$$

Tanda pertidaksamaan berbalik.

Contoh:

$${}^\frac12\log x\gt2$$

Ubah $2$ menjadi bentuk logaritma basis $\frac12$.

Karena:

$$\left(\frac12\right)^2=\frac14$$

maka:

$$2={}^\frac12\log\frac14$$

Sehingga:

$${}^\frac12\log x\gt{}^\frac12\log\frac14$$

Karena basis $\frac12$ berada di antara $0$ dan $1$, tanda berbalik.

$$x\lt\frac14$$

Cek syarat:

$$x\gt0$$

Maka penyelesaiannya adalah:

$$0\lt x\lt\frac14$$

  ⚠️ **Perhatian:** Pada basis $0\lt a\lt1$, tanda pertidaksamaan harus dibalik.

---

###### 5. Membandingkan Logaritma dengan Bilangan

Bentuk:

$${}^a\log f(x)\gt b$$

dapat diselesaikan dengan mengubah ke bentuk eksponen.

Jika $a\gt1$, maka:

$${}^a\log f(x)\gt b \Longleftrightarrow f(x)\gt a^b$$

Jika $0\lt a\lt1$, maka:

$${}^a\log f(x)\gt b \Longleftrightarrow 0\lt f(x)\lt a^b$$

Contoh untuk basis lebih dari $1$:

$${}^3\log(x+2)\gt2$$

Syarat:

$$x+2\gt0$$

maka:

$$x\gt-2$$

Karena basis $3\gt1$, tanda tetap.

$$\begin{aligned}
{}^3\log(x+2)&\gt2\\
x+2&\gt3^2\\
x+2&\gt9\\
x&\gt7
\end{aligned}$$

Gabungkan dengan syarat $x\gt-2$.

Karena $x\gt7$ sudah memenuhi $x\gt-2$, maka penyelesaiannya adalah:

$$x\gt7$$

---

###### 6. Visualisasi Pertidaksamaan Logaritma

Pertidaksamaan:

$${}^2\log x\gt3$$

dapat dilihat sebagai perbandingan grafik:

$$y={}^2\log x$$

dengan garis:

$$y=3$$

Penyelesaian terjadi ketika grafik logaritma berada di atas garis $y=3$.

  📊 **Grafik Interaktif 1.** Penyelesaian ${}^2\log x\gt3$ terjadi pada daerah $x\gt8$.

Dari grafik terlihat bahwa grafik $y={}^2\log x$ berada di atas garis $y=3$ ketika:

$$x\gt8$$

---

###### 7. Pertidaksamaan Logaritma dengan Tanda Kurang dari

Contoh:

$${}^2\log x\lt4$$

Karena basis $2\gt1$, tanda pertidaksamaan tetap.

$$\begin{aligned}
{}^2\log x&\lt4\\
x&\lt2^4\\
x&\lt16
\end{aligned}$$

Cek syarat:

$$x\gt0$$

Maka penyelesaiannya adalah:

$$0\lt x\lt16$$

  📊 **Grafik Interaktif 2.** Penyelesaian ${}^2\log x\lt4$ terjadi pada daerah $0\lt x\lt16$.

---

###### 8. Pertidaksamaan Logaritma dengan Numerus Linear

Contoh:

$${}^2\log(x-1)\le3$$

Syarat:

$$x-1\gt0$$

maka:

$$x\gt1$$

Karena basis $2\gt1$, tanda tetap.

$$\begin{aligned}
{}^2\log(x-1)&\le3\\
x-1&\le2^3\\
x-1&\le8\\
x&\le9
\end{aligned}$$

Gabungkan dengan syarat:

$$x\gt1$$

dan:

$$x\le9$$

Maka penyelesaiannya adalah:

$$1\lt x\le9$$

  💡 **Ingat:** Batas dari syarat logaritma selalu menggunakan tanda $\gt0$, sehingga batas domain tidak ikut menjadi penyelesaian.

---

###### 9. Pertidaksamaan Logaritma dengan Basis Pecahan

Contoh:

$${}^\frac12\log(x+1)\le2$$

Syarat:

$$x+1\gt0$$

maka:

$$x\gt-1$$

Karena basis $\frac12$ berada di antara $0$ dan $1$, tanda pertidaksamaan berbalik.

$$\begin{aligned}
{}^\frac12\log(x+1)&\le2\\
x+1&\ge\left(\frac12\right)^2\\
x+1&\ge\frac14\\
x&\ge-\frac34
\end{aligned}$$

Gabungkan dengan syarat $x\gt-1$.

Karena $x\ge-\frac34$ sudah memenuhi $x\gt-1$, maka penyelesaiannya adalah:

$$x\ge-\frac34$$

---

###### 10. Pertidaksamaan Logaritma dengan Logaritma Sama Basis

Bentuk:

$${}^a\log f(x)\gt{}^a\log g(x)$$

dapat diselesaikan dengan membandingkan numerus, tetapi tetap memperhatikan basis.

Jika $a\gt1$, maka:

$$f(x)\gt g(x)$$

Jika $0\lt a\lt1$, maka:

$$f(x)\lt g(x)$$

Syaratnya:

$$f(x)\gt0,\quad g(x)\gt0$$

Contoh:

$${}^2\log(x+3)\gt{}^2\log(2x-1)$$

Syarat:

$$x+3\gt0$$

dan:

$$2x-1\gt0$$

Maka:

$$x\gt-3$$

dan:

$$x\gt\frac12$$

Jadi syarat gabungannya:

$$x\gt\frac12$$

Karena basis $2\gt1$, tanda tetap.

$$\begin{aligned}
x+3&\gt2x-1\\
4&\gt x\\
x&\lt4
\end{aligned}$$

Gabungkan dengan syarat:

$$x\gt\frac12$$

Maka penyelesaiannya adalah:

$$\frac12\lt x\lt4$$

---

###### 11. Pertidaksamaan Logaritma dengan Basis Sama antara $0$ dan $1$

Contoh:

$${}^\frac13\log(x+2)\gt{}^\frac13\log(4x-1)$$

Syarat:

$$x+2\gt0$$

dan:

$$4x-1\gt0$$

Maka:

$$x\gt-2$$

dan:

$$x\gt\frac14$$

Syarat gabungan:

$$x\gt\frac14$$

Karena basis $\frac13$ berada di antara $0$ dan $1$, tanda pertidaksamaan berbalik.

$$\begin{aligned}
x+2&\lt4x-1\\
3&\lt3x\\
1&\lt x
\end{aligned}$$

Jadi:

$$x\gt1$$

Gabungkan dengan syarat $x\gt\frac14$.

Maka penyelesaiannya adalah:

$$x\gt1$$

  ⚠️ **Perhatian:** Ketika basis berada di antara $0$ dan $1$, tanda pertidaksamaan antar numerus harus dibalik.

---

###### 12. Pertidaksamaan Logaritma dengan Penjumlahan

Gunakan sifat:

$${}^a\log m+{}^a\log n={}^a\log(mn)$$

Contoh:

$${}^2\log x+{}^2\log(x-2)\gt3$$

Syarat:

$$x\gt0$$

dan:

$$x-2\gt0$$

Maka:

$$x\gt2$$

Gabungkan logaritma.

$$\begin{aligned}
{}^2\log x+{}^2\log(x-2)&\gt3\\
{}^2\log(x(x-2))&\gt3
\end{aligned}$$

Karena basis $2\gt1$, tanda tetap.

$$\begin{aligned}
x(x-2)&\gt2^3\\
x^2-2x&\gt8\\
x^2-2x-8&\gt0
\end{aligned}$$

Faktorkan:

$$\begin{aligned}
x^2-2x-8&\gt0\\
(x-4)(x+2)&\gt0
\end{aligned}$$

Pembuat nol:

$$x=4 \quad \text{atau} \quad x=-2$$

Karena koefisien $x^2$ positif, pertidaksamaan bernilai positif di luar interval akar.

Maka:

$$x\lt-2 \quad \text{atau} \quad x\gt4$$

Gabungkan dengan syarat $x\gt2$.

Maka penyelesaiannya adalah:

$$x\gt4$$

---

###### 13. Pertidaksamaan Logaritma dengan Pengurangan

Gunakan sifat:

$${}^a\log m-{}^a\log n={}^a\log\left(\frac{m}{n}\right)$$

Contoh:

$${}^3\log(x+6)-{}^3\log x\ge1$$

Syarat:

$$x+6\gt0$$

dan:

$$x\gt0$$

Syarat gabungan:

$$x\gt0$$

Gabungkan logaritma.

$$\begin{aligned}
{}^3\log(x+6)-{}^3\log x&\ge1\\
{}^3\log\left(\frac{x+6}{x}\right)&\ge1
\end{aligned}$$

Karena basis $3\gt1$, tanda tetap.

$$\begin{aligned}
\frac{x+6}{x}&\ge3^1\\
\frac{x+6}{x}&\ge3
\end{aligned}$$

Karena syarat $x\gt0$, maka boleh dikalikan dengan $x$ tanpa membalik tanda.

$$\begin{aligned}
x+6&\ge3x\\
6&\ge2x\\
3&\ge x
\end{aligned}$$

Maka:

$$x\le3$$

Gabungkan dengan syarat $x\gt0$.

Penyelesaiannya adalah:

$$0\lt x\le3$$

---

###### 14. Pertidaksamaan Logaritma Berbentuk Kuadrat

Contoh:

$${}^2\log(x^2-3x)\gt2$$

Syarat:

$$x^2-3x\gt0$$

Faktorkan:

$$x(x-3)\gt0$$

Maka:

$$x\lt0 \quad \text{atau} \quad x\gt3$$

Karena basis $2\gt1$, tanda tetap.

$$\begin{aligned}
{}^2\log(x^2-3x)&\gt2\\
x^2-3x&\gt2^2\\
x^2-3x&\gt4\\
x^2-3x-4&\gt0
\end{aligned}$$

Faktorkan:

$$\begin{aligned}
x^2-3x-4&\gt0\\
(x-4)(x+1)&\gt0
\end{aligned}$$

Maka:

$$x\lt-1 \quad \text{atau} \quad x\gt4$$

Gabungkan dengan syarat:

$$x\lt0 \quad \text{atau} \quad x\gt3$$

Hasil akhirnya:

$$x\lt-1 \quad \text{atau} \quad x\gt4$$

---

###### 15. Langkah Umum Menyelesaikan Pertidaksamaan Logaritma

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan syarat logaritma, terutama numerus harus lebih dari $0$. |
| 2 | Perhatikan basis logaritma. |
| 3 | Jika $a\gt1$, tanda pertidaksamaan tetap. |
| 4 | Jika $0\lt a\lt1$, tanda pertidaksamaan berbalik. |
| 5 | Gunakan sifat logaritma jika ada penjumlahan, pengurangan, atau pangkat. |
| 6 | Selesaikan pertidaksamaan aljabar yang diperoleh. |
| 7 | Gabungkan hasil dengan syarat logaritma. |

  💡 **Strategi:** Kerjakan syarat logaritma di awal agar hasil akhir tidak salah.

---

###### 16. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh | Perbaikan |
| --- | --- | --- |
| Lupa syarat numerus. | ${}^2\log(x-1)\gt3$ langsung diubah tanpa syarat. | Tentukan dulu $x-1\gt0$. |
| Tidak membalik tanda saat basis antara $0$ dan $1$. | ${}^\frac12\log x\gt2$ langsung menjadi $x\gt\frac14$. | Seharusnya $0\lt x\lt\frac14$. |
| Salah menggabungkan logaritma. | ${}^2\log x+{}^2\log(x-2)={}^2\log(2x-2)$. | Seharusnya ${}^2\log(x(x-2))$. |
| Menggunakan batas domain sebagai penyelesaian. | Pada ${}^2\log(x-3)$, memasukkan $x=3$. | $x=3$ membuat numerus nol, sehingga tidak boleh. |
| Salah mengalikan pertidaksamaan rasional. | Mengalikan dengan $x$ tanpa tahu tanda $x$. | Pastikan dulu apakah $x$ positif atau negatif dari syarat. |

  ⚠️ **Perhatian:** Pertidaksamaan logaritma sering salah bukan karena logaritmanya, tetapi karena syarat dan tanda pertidaksamaannya diabaikan.

---

###### 17. Rangkuman

- Pertidaksamaan logaritma adalah pertidaksamaan yang memuat bentuk logaritma.
- Syarat logaritma:
  $$a\gt0,\quad a\ne1,\quad \text{numerus}\gt0$$
- Jika $a\gt1$, fungsi logaritma naik, sehingga tanda pertidaksamaan tetap.
- Jika $0\lt a\lt1$, fungsi logaritma turun, sehingga tanda pertidaksamaan berbalik.
- Bentuk:
  $${}^a\log f(x)\gt b$$
  untuk $a\gt1$ menjadi:
  $$f(x)\gt a^b$$
- Bentuk:
  $${}^a\log f(x)\gt b$$
  untuk $0\lt a\lt1$ menjadi:
  $$0\lt f(x)\lt a^b$$
- Untuk basis sama:
  $${}^a\log f(x)\gt{}^a\log g(x)$$
  tanda bergantung pada basis $a$.
- Sifat logaritma dapat digunakan untuk menggabungkan logaritma.
- Hasil akhir harus digabungkan dengan syarat logaritma.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan penyelesaian dari:
$${}^2\log(x-1)\gt3$$

💡 Pembahasan

Tentukan syarat terlebih dahulu.

$$\begin{aligned}
x-1&\gt0\\
x&\gt1
\end{aligned}$$

Karena basis $2\gt1$, tanda pertidaksamaan tetap.

$$\begin{aligned}
{}^2\log(x-1)&\gt3\\
x-1&\gt2^3\\
x-1&\gt8\\
x&\gt9
\end{aligned}$$

Gabungkan dengan syarat $x\gt1$.

Jadi, penyelesaiannya adalah:

$$x\gt9$$

  Contoh Soal 2

Tentukan penyelesaian dari:
$${}^\frac12\log(x+2)\gt1$$

💡 Pembahasan

Tentukan syarat:

$$\begin{aligned}
x+2&\gt0\\
x&\gt-2
\end{aligned}$$

Karena basis $\frac12$ berada di antara $0$ dan $1$, tanda pertidaksamaan berbalik.

$$\begin{aligned}
{}^\frac12\log(x+2)&\gt1\\
x+2&\lt\left(\frac12\right)^1\\
x+2&\lt\frac12\\
x&\lt-\frac32
\end{aligned}$$

Gabungkan dengan syarat $x\gt-2$.

Maka:

$$-2\lt x\lt-\frac32$$

Jadi, penyelesaiannya adalah:

$$-2\lt x\lt-\frac32$$

  Contoh Soal 3

Tentukan penyelesaian dari:
$${}^2\log x+{}^2\log(x-6)\le4$$

💡 Pembahasan

Tentukan syarat:

$$x\gt0$$

dan:

$$x-6\gt0$$

Maka:

$$x\gt6$$

Gabungkan logaritma.

$$\begin{aligned}
{}^2\log x+{}^2\log(x-6)&\le4\\
{}^2\log(x(x-6))&\le4
\end{aligned}$$

Karena basis $2\gt1$, tanda tetap.

$$\begin{aligned}
x(x-6)&\le2^4\\
x^2-6x&\le16\\
x^2-6x-16&\le0
\end{aligned}$$

Faktorkan:

$$\begin{aligned}
x^2-6x-16&\le0\\
(x-8)(x+2)&\le0
\end{aligned}$$

Karena koefisien $x^2$ positif, pertidaksamaan $\le0$ berlaku di antara akar.

Maka:

$$-2\le x\le8$$

Gabungkan dengan syarat $x\gt6$.

Jadi, penyelesaiannya adalah:

$$6\lt x\le8$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Penyelesaian dari ${}^2\log x\gt4$ adalah ....

A
$x\gt4$

B
$x\gt8$

C
$x\gt16$

D
$0\lt x\lt16$

E
$x\lt16$

💡 Pembahasan

Karena basis $2\gt1$, tanda tetap.

$$\begin{aligned}
{}^2\log x&\gt4\\
x&\gt2^4\\
x&\gt16
\end{aligned}$$

  Latihan Soal 2

Penyelesaian dari ${}^3\log x\le2$ adalah ....

A
$x\le9$

B
$0\lt x\le9$

C
$x\gt9$

D
$x\ge9$

E
$x\lt0$

💡 Pembahasan

Syarat: $x\gt0$.

Karena basis $3\gt1$:

$$\begin{aligned}
{}^3\log x&\le2\\
x&\le3^2\\
x&\le9
\end{aligned}$$

Gabungkan dengan syarat:

$$0\lt x\le9$$

  Latihan Soal 3

Penyelesaian dari ${}^2\log(x-3)\gt2$ adalah ....

A
$x\gt4$

B
$x\gt7$

C
$3\lt x\lt7$

D
$x\lt7$

E
$x\ge7$

💡 Pembahasan

Syarat:

$$x-3\gt0$$

Karena basis $2\gt1$:

$$\begin{aligned}
{}^2\log(x-3)&\gt2\\
x-3&\gt2^2\\
x-3&\gt4\\
x&\gt7
\end{aligned}$$

  Latihan Soal 4

Penyelesaian dari ${}^\frac12\log x\gt2$ adalah ....

A
$x\gt\frac14$

B
$0\lt x\lt\frac14$

C
$x\lt0$

D
$x\ge\frac14$

E
$x\gt4$

💡 Pembahasan

Syarat: $x\gt0$.

Karena basis $\frac12$ berada di antara $0$ dan $1$, tanda berbalik.

$$\begin{aligned}
{}^\frac12\log x&\gt2\\
x&\lt\left(\frac12\right)^2\\
x&\lt\frac14
\end{aligned}$$

Maka:

$$0\lt x\lt\frac14$$

  Latihan Soal 5

Penyelesaian dari ${}^2\log(x+1)\le3$ adalah ....

A
$x\le7$

B
$-1\lt x\le7$

C
$x\gt7$

D
$-1\le x\le7$

E
$x\lt-1$

💡 Pembahasan

Syarat:

$$x+1\gt0$$

maka:

$$x\gt-1$$

Karena basis $2\gt1$:

$$\begin{aligned}
{}^2\log(x+1)&\le3\\
x+1&\le2^3\\
x+1&\le8\\
x&\le7
\end{aligned}$$

Gabungkan:

$$-1\lt x\le7$$

  Latihan Soal 6

Penyelesaian dari ${}^2\log(x+3)\gt{}^2\log(2x-1)$ adalah ....

A
$x\gt4$

B
$\frac12\lt x\lt4$

C
$x\lt4$

D
$x\gt\frac12$

E
$-3\lt x\lt4$

💡 Pembahasan

Syarat:

$$x+3\gt0,\quad 2x-1\gt0$$

maka:

$$x\gt\frac12$$

Karena basis $2\gt1$, tanda tetap.

$$\begin{aligned}
x+3&\gt2x-1\\
4&\gt x\\
x&\lt4
\end{aligned}$$

Gabungkan:

$$\frac12\lt x\lt4$$

  Latihan Soal 7

Penyelesaian dari ${}^2\log x+{}^2\log(x-2)\gt3$ adalah ....

A
$x\gt2$

B
$x\lt-2$

C
$x\gt4$

D
$2\lt x\lt4$

E
$-2\lt x\lt4$

💡 Pembahasan

Syarat:

$$x\gt0,\quad x-2\gt0$$

maka $x\gt2$.

$$\begin{aligned}
{}^2\log x+{}^2\log(x-2)&\gt3\\
{}^2\log(x(x-2))&\gt3\\
x(x-2)&\gt8\\
x^2-2x-8&\gt0\\
(x-4)(x+2)&\gt0
\end{aligned}$$

Maka:

$$x\lt-2 \quad \text{atau} \quad x\gt4$$

Gabungkan dengan $x\gt2$, diperoleh:

$$x\gt4$$

  Latihan Soal 8

Penyelesaian dari ${}^3\log(x+6)-{}^3\log x\ge1$ adalah ....

A
$x\gt3$

B
$0\lt x\le3$

C
$x\le3$

D
$-6\lt x\le3$

E
$x\lt0$

💡 Pembahasan

Syarat:

$$x\gt0$$

Gabungkan logaritma.

$$\begin{aligned}
{}^3\log(x+6)-{}^3\log x&\ge1\\
{}^3\log\left(\frac{x+6}{x}\right)&\ge1\\
\frac{x+6}{x}&\ge3
\end{aligned}$$

Karena $x\gt0$, kalikan dengan $x$.

$$\begin{aligned}
x+6&\ge3x\\
6&\ge2x\\
3&\ge x
\end{aligned}$$

Maka:

$$0\lt x\le3$$

  Latihan Soal 9

Penyelesaian dari ${}^2\log(x^2-3x)\gt2$ adalah ....

A
$x\lt-1$ atau $x\gt4$

B
$-1\lt x\lt4$

C
$x\lt0$ atau $x\gt3$

D
$0\lt x\lt3$

E
$x\gt4$ saja

💡 Pembahasan

Syarat:

$$x^2-3x\gt0$$

Pertidaksamaannya:

$$\begin{aligned}
{}^2\log(x^2-3x)&\gt2\\
x^2-3x&\gt4\\
x^2-3x-4&\gt0\\
(x-4)(x+1)&\gt0
\end{aligned}$$

Maka:

$$x\lt-1 \quad \text{atau} \quad x\gt4$$

Hasil ini sudah memenuhi syarat numerus.

  Latihan Soal 10

Penyelesaian dari ${}^\frac13\log(x+2)\gt{}^\frac13\log(4x-1)$ adalah ....

A
$x\gt\frac14$

B
$x\gt1$

C
$\frac14\lt x\lt1$

D
$x\lt1$

E
$x\lt\frac14$

💡 Pembahasan

Syarat:

$$x+2\gt0,\quad 4x-1\gt0$$

maka:

$$x\gt\frac14$$

Karena basis $\frac13$ berada di antara $0$ dan $1$, tanda berbalik.

$$\begin{aligned}
x+2&\lt4x-1\\
3&\lt3x\\
1&\lt x
\end{aligned}$$

Jadi:

$$x\gt1$$

### Soal Cerita Logaritma

#### Soal Cerita Logaritma

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/soal-cerita-logaritma*

Pada materi sebelumnya, kita telah mempelajari pertidaksamaan logaritma. Sekarang kita akan membahas **soal cerita logaritma**.

Soal cerita logaritma biasanya berkaitan dengan situasi yang melibatkan pertumbuhan, peluruhan, perbandingan skala, atau pencarian waktu. Dalam soal seperti ini, logaritma digunakan untuk menentukan pangkat atau eksponen yang belum diketahui.

  📌 **Catatan:** Logaritma sering digunakan ketika variabel yang dicari berada pada pangkat.

---

###### 1. Mengapa Soal Cerita Membutuhkan Logaritma?

Perhatikan bentuk eksponen berikut.

$$2^t=32$$

Jika $t$ belum diketahui, maka kita dapat menentukan nilainya dengan logaritma.

Karena:

$$32=2^5$$

maka:

$$t=5$$

Dalam soal cerita, bentuk seperti ini sering muncul. Misalnya:

- banyak bakteri menjadi dua kali lipat setiap jam;
- nilai suatu barang menyusut setiap tahun;
- modal bertambah dengan bunga majemuk;
- intensitas bunyi dibandingkan dengan skala tertentu;
- tingkat keasaman dinyatakan dengan pH.

Jika variabel berada di pangkat, logaritma menjadi alat yang sangat berguna.

---

###### 2. Mengingat Hubungan Eksponen dan Logaritma

Hubungan dasar eksponen dan logaritma adalah:

$$a^b=c \Longleftrightarrow {}^a\log c=b$$

Contoh:

$$2^x=64$$

maka:

$$x={}^2\log 64=6$$

Contoh lain:

$$10^x=1000$$

maka:

$$x=\log 1000=3$$

  💡 **Ingat:** Jika variabel berada di pangkat, ubah bentuk eksponen menjadi bentuk logaritma.

---

###### 3. Langkah Menyelesaikan Soal Cerita Logaritma

Untuk menyelesaikan soal cerita logaritma, gunakan langkah berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Pahami informasi yang diketahui pada soal. |
| 2 | Tentukan besaran yang ditanyakan. |
| 3 | Buat model matematika dalam bentuk eksponen atau logaritma. |
| 4 | Jika variabel berada di pangkat, gunakan logaritma. |
| 5 | Selesaikan perhitungan secara teliti. |
| 6 | Tulis kesimpulan sesuai konteks soal. |

  📌 **Catatan:** Dalam soal cerita, jawaban akhir harus disesuaikan dengan konteks. Jika yang ditanya waktu, tulis satuannya.

---

###### 4. Soal Cerita Pertumbuhan Bakteri

Pertumbuhan bakteri sering dimodelkan dengan bentuk eksponen.

Misalnya banyak bakteri mula-mula $P_0$ dan menjadi dua kali lipat setiap satuan waktu. Modelnya:

$$P(t)=P_0\cdot2^t$$

Keterangan:

- $P(t)$ adalah banyak bakteri setelah waktu $t$;
- $P_0$ adalah banyak bakteri mula-mula;
- $2$ menunjukkan bahwa bakteri menjadi dua kali lipat;
- $t$ adalah waktu.

Contoh:

Suatu bakteri mula-mula berjumlah $100$. Setiap jam, jumlahnya menjadi dua kali lipat. Setelah berapa jam jumlah bakteri menjadi $1600$?

Model matematika:

$$100\cdot2^t=1600$$

Bagi kedua ruas dengan $100$.

$$2^t=16$$

Karena:

$$16=2^4$$

maka:

$$t=4$$

Jadi, waktu yang diperlukan adalah $4$ jam.

---

###### 5. Soal Cerita Pertumbuhan dengan Logaritma

Kadang hasil pertumbuhan tidak langsung mudah dikenali sebagai pangkat sederhana.

Contoh:

Suatu populasi mula-mula $500$ dan bertambah menjadi $3$ kali lipat setiap tahun. Setelah berapa tahun populasi menjadi $40.500$?

Model matematika:

$$500\cdot3^t=40500$$

Bagi kedua ruas dengan $500$.

$$3^t=81$$

Karena:

$$81=3^4$$

maka:

$$t=4$$

Jadi, populasi tersebut menjadi $40.500$ setelah $4$ tahun.

Jika pangkatnya tidak mudah dikenali, bentuknya dapat ditulis dengan logaritma:

$$t={}^3\log 81$$

---

###### 6. Soal Cerita Peluruhan atau Penyusutan

Peluruhan atau penyusutan dapat dimodelkan dengan bentuk eksponen.

Misalnya suatu benda menyusut menjadi setengah dari nilai sebelumnya setiap periode. Modelnya:

$$N(t)=N_0\left(\frac12\right)^t$$

Keterangan:

- $N(t)$ adalah nilai setelah waktu $t$;
- $N_0$ adalah nilai mula-mula;
- $\frac12$ menunjukkan penyusutan menjadi setengah;
- $t$ adalah waktu.

Contoh:

Suatu zat mula-mula bermassa $80$ gram. Setiap jam massanya menjadi setengah dari massa sebelumnya. Setelah berapa jam massanya menjadi $10$ gram?

Model matematika:

$$80\left(\frac12\right)^t=10$$

Bagi kedua ruas dengan $80$.

$$\left(\frac12\right)^t=\frac18$$

Karena:

$$\frac18=\left(\frac12\right)^3$$

maka:

$$t=3$$

Jadi, waktu yang diperlukan adalah $3$ jam.

---

###### 7. Soal Cerita Bunga Majemuk

Bunga majemuk adalah bunga yang dihitung dari modal awal ditambah bunga yang sudah diperoleh sebelumnya.

Model sederhana bunga majemuk adalah:

$$M=M_0(1+r)^t$$

Keterangan:

- $M$ adalah modal akhir;
- $M_0$ adalah modal awal;
- $r$ adalah suku bunga per periode dalam bentuk desimal;
- $t$ adalah banyak periode.

Contoh:

Modal sebesar Rp1.000.000 bertambah dengan bunga majemuk $10\%$ per tahun. Setelah berapa tahun modal menjadi Rp1.331.000?

Karena $10\%=0,1$, maka faktor pertumbuhannya:

$$1+0,1=1,1$$

Model matematika:

$$1000000(1,1)^t=1331000$$

Bagi kedua ruas dengan $1000000$.

$$(1,1)^t=1,331$$

Karena:

$$(1,1)^3=1,331$$

maka:

$$t=3$$

Jadi, modal menjadi Rp1.331.000 setelah $3$ tahun.

---

###### 8. Soal Cerita Nilai Barang yang Menyusut

Penyusutan nilai barang juga dapat dimodelkan dengan eksponen.

Misalnya nilai barang menyusut $20\%$ setiap tahun. Artinya nilai barang tersisa $80\%$ setiap tahun.

Faktor penyusutannya adalah:

$$1-20\%=80\%=0,8$$

Modelnya:

$$N=N_0(0,8)^t$$

Contoh:

Harga sebuah barang mula-mula Rp5.000.000. Setiap tahun nilainya menyusut menjadi $80\%$ dari nilai tahun sebelumnya. Setelah berapa tahun nilainya menjadi Rp3.200.000?

Model matematika:

$$5000000(0,8)^t=3200000$$

Bagi kedua ruas dengan $5000000$.

$$(0,8)^t=0,64$$

Karena:

$$(0,8)^2=0,64$$

maka:

$$t=2$$

Jadi, nilai barang menjadi Rp3.200.000 setelah $2$ tahun.

---

###### 9. Soal Cerita Skala Richter

Skala Richter digunakan untuk menyatakan kekuatan gempa. Dalam bentuk sederhana, perbandingan intensitas dua gempa dapat ditulis:

$$\frac{I_1}{I_2}=10^{R_1-R_2}$$

Keterangan:

- $I_1$ dan $I_2$ adalah intensitas gempa;
- $R_1$ dan $R_2$ adalah besar skala Richter.

Contoh:

Gempa A memiliki skala $6$ Richter, sedangkan gempa B memiliki skala $4$ Richter. Berapa kali intensitas gempa A dibandingkan gempa B?

Gunakan model:

$$\frac{I_A}{I_B}=10^{6-4}$$

Maka:

$$\frac{I_A}{I_B}=10^2=100$$

Jadi, intensitas gempa A adalah $100$ kali intensitas gempa B.

  📌 **Catatan:** Pada skala logaritmik, selisih nilai dapat menunjukkan perbandingan yang sangat besar.

---

###### 10. Soal Cerita pH

Dalam kimia, pH larutan dapat ditulis dengan rumus:

$$\text{pH}=-\log[H^+]$$

Keterangan:

- $[H^+]$ adalah konsentrasi ion hidrogen;
- $\log$ berarti logaritma basis $10$;
- pH digunakan untuk menunjukkan tingkat keasaman larutan.

Contoh:

Jika konsentrasi ion hidrogen suatu larutan adalah $10^{-4}$, maka pH larutan tersebut adalah ....

Gunakan rumus:

$$\text{pH}=-\log[H^+]$$

Substitusi:

$$\begin{aligned}
\text{pH}&=-\log(10^{-4})\\
&=-(-4)\\
&=4
\end{aligned}$$

Jadi, pH larutan tersebut adalah $4$.

---

###### 11. Soal Cerita Tingkat Bunyi

Dalam bentuk sederhana, tingkat bunyi dapat dinyatakan dengan rumus:

$$L=10\log\left(\frac{I}{I_0}\right)$$

Keterangan:

- $L$ adalah tingkat bunyi dalam desibel;
- $I$ adalah intensitas bunyi;
- $I_0$ adalah intensitas acuan.

Contoh:

Jika $\frac{I}{I_0}=1000$, maka tingkat bunyinya adalah ....

Gunakan rumus:

$$L=10\log\left(\frac{I}{I_0}\right)$$

Substitusi:

$$\begin{aligned}
L&=10\log(1000)\\
&=10\cdot3\\
&=30
\end{aligned}$$

Jadi, tingkat bunyinya adalah $30$ desibel.

---

###### 12. Soal Cerita Menentukan Waktu dengan Logaritma

Jika suatu model eksponen tidak menghasilkan pangkat yang mudah dikenali, waktu dapat dinyatakan dalam bentuk logaritma.

Contoh:

Suatu populasi mula-mula $200$ dan menjadi dua kali lipat setiap hari. Setelah berapa hari populasi menjadi $1000$?

Model matematika:

$$200\cdot2^t=1000$$

Bagi kedua ruas dengan $200$.

$$2^t=5$$

Karena $5$ bukan pangkat sederhana dari $2$, maka gunakan logaritma.

$$t={}^2\log 5$$

Jadi, waktu yang diperlukan adalah:

$${}^2\log 5 \text{ hari}$$

Jika diperlukan pendekatan desimal, nilai tersebut dapat dihitung dengan kalkulator.

---

###### 13. Soal Cerita Menentukan Banyak Periode

Contoh:

Sebuah investasi bertambah menjadi $4$ kali lipat dalam beberapa periode. Jika setiap periode investasi menjadi dua kali lipat, banyak periode yang diperlukan adalah ....

Misalkan banyak periode adalah $t$.

Model matematika:

$$2^t=4$$

Karena:

$$4=2^2$$

maka:

$$t=2$$

Jadi, banyak periode yang diperlukan adalah $2$ periode.

---

###### 14. Soal Cerita Membandingkan Dua Besaran pada Skala Logaritmik

Pada skala logaritmik, selisih nilai dapat digunakan untuk menentukan perbandingan.

Misalnya:

$$R_1-R_2=d$$

maka perbandingan intensitasnya dapat berbentuk:

$$10^d$$

Contoh:

Suatu gempa berkekuatan $7$ Richter dan gempa lain berkekuatan $5$ Richter. Berapa kali intensitas gempa pertama dibandingkan gempa kedua?

Selisih skala:

$$7-5=2$$

Maka perbandingan intensitas:

$$10^2=100$$

Jadi, intensitas gempa pertama adalah $100$ kali intensitas gempa kedua.

---

###### 15. Mengubah Kalimat Cerita ke Model Matematika

Perhatikan beberapa kata kunci berikut.

| Kalimat pada Soal | Makna Matematika | Model Umum |
| --- | --- | --- |
| Menjadi dua kali lipat setiap periode | Dikali $2$ berulang | $P=P_0\cdot2^t$ |
| Menjadi tiga kali lipat setiap periode | Dikali $3$ berulang | $P=P_0\cdot3^t$ |
| Menyusut menjadi setengah setiap periode | Dikali $\frac12$ berulang | $N=N_0\left(\frac12\right)^t$ |
| Bertambah $10\%$ setiap periode | Dikali $1,1$ berulang | $M=M_0(1,1)^t$ |
| Menyusut $20\%$ setiap periode | Dikali $0,8$ berulang | $N=N_0(0,8)^t$ |
| Selisih skala logaritmik | Perbandingan berbasis $10$ | $10^d$ |

---

###### 16. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh | Perbaikan |
| --- | --- | --- |
| Salah membuat model pertumbuhan. | Dua kali lipat ditulis $P=P_0+2t$. | Seharusnya $P=P_0\cdot2^t$. |
| Salah mengubah persen menjadi faktor. | Bertambah $10\%$ ditulis faktor $10$. | Seharusnya faktornya $1,1$. |
| Salah pada penyusutan. | Menyusut $20\%$ ditulis faktor $0,2$. | Jika menyusut $20\%$, sisa nilainya $80\%$, sehingga faktor $0,8$. |
| Lupa membagi dengan nilai awal. | $100\cdot2^t=1600$ langsung ditulis $2^t=1600$. | Seharusnya dibagi $100$ dahulu, sehingga $2^t=16$. |
| Salah memahami skala logaritmik. | Selisih skala $2$ dianggap berarti $2$ kali. | Pada basis $10$, selisih $2$ berarti $10^2=100$ kali. |

  ⚠️ **Perhatian:** Dalam soal cerita logaritma, kesalahan paling sering terjadi pada tahap membuat model matematika.

---

###### 17. Rangkuman

- Soal cerita logaritma biasanya muncul ketika variabel berada pada pangkat.
- Hubungan dasar:
  $$a^b=c \Longleftrightarrow {}^a\log c=b$$
- Pertumbuhan dua kali lipat dapat dimodelkan dengan:
  $$P=P_0\cdot2^t$$
- Peluruhan menjadi setengah dapat dimodelkan dengan:
  $$N=N_0\left(\frac12\right)^t$$
- Bunga majemuk dapat dimodelkan dengan:
  $$M=M_0(1+r)^t$$
- Penyusutan $p\%$ berarti faktor pengalinya:
  $$1-p\%$$
- Pada skala logaritmik basis $10$, selisih $d$ dapat menghasilkan perbandingan:
  $$10^d$$
- Jika pangkat sulit ditebak, gunakan logaritma.
- Jawaban akhir harus disesuaikan dengan konteks dan satuan.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Suatu bakteri mula-mula berjumlah $250$. Setiap jam, jumlah bakteri menjadi dua kali lipat. Setelah berapa jam jumlah bakteri menjadi $4000$?

💡 Pembahasan

Model pertumbuhan dua kali lipat:

$$P=P_0\cdot2^t$$

Diketahui:

$$P_0=250,\quad P=4000$$

Maka:

$$\begin{aligned}
250\cdot2^t&=4000\\
2^t&=16\\
2^t&=2^4\\
t&=4
\end{aligned}$$

Jadi, waktu yang diperlukan adalah $4$ jam.

  Contoh Soal 2

Suatu zat radioaktif mula-mula bermassa $96$ gram. Setiap jam, massanya menjadi setengah dari massa sebelumnya. Setelah berapa jam massanya menjadi $12$ gram?

💡 Pembahasan

Model peluruhan menjadi setengah:

$$N=N_0\left(\frac12\right)^t$$

Diketahui:

$$N_0=96,\quad N=12$$

Maka:

$$\begin{aligned}
96\left(\frac12\right)^t&=12\\
\left(\frac12\right)^t&=\frac{12}{96}\\
\left(\frac12\right)^t&=\frac18\\
\left(\frac12\right)^t&=\left(\frac12\right)^3\\
t&=3
\end{aligned}$$

Jadi, waktu yang diperlukan adalah $3$ jam.

  Contoh Soal 3

Gempa A memiliki skala $7$ Richter, sedangkan gempa B memiliki skala $5$ Richter. Jika perbandingan intensitas gempa dinyatakan dengan $10^{R_A-R_B}$, berapa kali intensitas gempa A dibandingkan gempa B?

💡 Pembahasan

Diketahui:

$$R_A=7,\quad R_B=5$$

Perbandingan intensitas:

$$10^{R_A-R_B}$$

Maka:

$$\begin{aligned}
10^{R_A-R_B}
&=10^{7-5}\\
&=10^2\\
&=100
\end{aligned}$$

Jadi, intensitas gempa A adalah $100$ kali intensitas gempa B.

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Suatu bakteri mula-mula berjumlah $100$. Setiap jam jumlahnya menjadi dua kali lipat. Banyak bakteri setelah $5$ jam adalah ....

A
$1600$

B
$3200$

C
$5000$

D
$6400$

E
$10000$

💡 Pembahasan

Model:

$$P=100\cdot2^t$$

Untuk $t=5$:

$$\begin{aligned}
P&=100\cdot2^5\\
&=100\cdot32\\
&=3200
\end{aligned}$$

  Latihan Soal 2

Suatu populasi mula-mula $300$. Setiap tahun populasinya menjadi tiga kali lipat. Setelah $3$ tahun, populasinya menjadi ....

A
$2700$

B
$5400$

C
$8100$

D
$9000$

E
$24300$

💡 Pembahasan

Model:

$$P=300\cdot3^t$$

Untuk $t=3$:

$$\begin{aligned}
P&=300\cdot3^3\\
&=300\cdot27\\
&=8100
\end{aligned}$$

  Latihan Soal 3

Suatu zat mula-mula bermassa $64$ gram. Setiap jam massanya menjadi setengah dari massa sebelumnya. Setelah $4$ jam, massa zat tersebut adalah ....

A
$2$ gram

B
$4$ gram

C
$8$ gram

D
$16$ gram

E
$32$ gram

💡 Pembahasan

Model:

$$N=64\left(\frac12\right)^t$$

Untuk $t=4$:

$$\begin{aligned}
N&=64\left(\frac12\right)^4\\
&=64\cdot\frac{1}{16}\\
&=4
\end{aligned}$$

Jadi, massanya $4$ gram.

  Latihan Soal 4

Suatu bakteri mula-mula berjumlah $200$. Setiap jam jumlahnya menjadi dua kali lipat. Setelah berapa jam jumlahnya menjadi $6400$?

A
$3$ jam

B
$4$ jam

C
$5$ jam

D
$6$ jam

E
$7$ jam

💡 Pembahasan

Model:

$$200\cdot2^t=6400$$

Maka:

$$\begin{aligned}
2^t&=\frac{6400}{200}\\
2^t&=32\\
2^t&=2^5\\
t&=5
\end{aligned}$$

  Latihan Soal 5

Modal Rp2.000.000 bertambah dengan bunga majemuk $10\%$ per tahun. Setelah $2$ tahun, modal tersebut menjadi ....

A
Rp2.100.000

B
Rp2.200.000

C
Rp2.420.000

D
Rp2.500.000

E
Rp2.600.000

💡 Pembahasan

Faktor pertumbuhan:

$$1+10\%=1,1$$

Maka:

$$\begin{aligned}
M&=2000000(1,1)^2\\
&=2000000(1,21)\\
&=2420000
\end{aligned}$$

Jadi, modal akhir adalah Rp2.420.000.

  Latihan Soal 6

Harga sebuah barang mula-mula Rp10.000.000. Setiap tahun nilainya menyusut $20\%$. Setelah $2$ tahun, nilai barang tersebut adalah ....

A
Rp4.000.000

B
Rp5.000.000

C
Rp6.000.000

D
Rp6.400.000

E
Rp8.000.000

💡 Pembahasan

Menyusut $20\%$ berarti tersisa $80\%=0,8$.

$$\begin{aligned}
N&=10000000(0,8)^2\\
&=10000000(0,64)\\
&=6400000
\end{aligned}$$

Jadi, nilai barang tersebut adalah Rp6.400.000.

  Latihan Soal 7

Gempa A memiliki skala $6$ Richter dan gempa B memiliki skala $4$ Richter. Jika perbandingan intensitasnya adalah $10^{R_A-R_B}$, maka intensitas gempa A adalah ....

A
$10$ kali gempa B

B
$100$ kali gempa B

C
$1000$ kali gempa B

D
$10000$ kali gempa B

E
$2$ kali gempa B

💡 Pembahasan

Selisih skala:

$$6-4=2$$

Perbandingan intensitas:

$$10^2=100$$

Jadi, intensitas gempa A adalah $100$ kali gempa B.

  Latihan Soal 8

Jika $[H^+]=10^{-5}$, maka pH larutan tersebut adalah ....

A
$3$

B
$4$

C
$5$

D
$6$

E
$7$

💡 Pembahasan

Gunakan rumus:

$$\text{pH}=-\log[H^+]$$

Maka:

$$\begin{aligned}
\text{pH}&=-\log(10^{-5})\\
&=5
\end{aligned}$$

  Latihan Soal 9

Jika $\frac{I}{I_0}=100$, maka nilai $10\log\left(\frac{I}{I_0}\right)$ adalah ....

A
$10$

B
$20$

C
$30$

D
$40$

E
$100$

💡 Pembahasan

Karena:

$$\log 100=2$$

maka:

$$10\log(100)=10\cdot2=20$$

  Latihan Soal 10

Suatu populasi mula-mula $500$ dan menjadi dua kali lipat setiap hari. Jika setelah $t$ hari populasinya menjadi $4000$, maka nilai $t$ adalah ....

A
$2$

B
$3$

C
$4$

D
$5$

E
$8$

💡 Pembahasan

Model:

$$500\cdot2^t=4000$$

Maka:

$$\begin{aligned}
2^t&=\frac{4000}{500}\\
2^t&=8\\
2^t&=2^3\\
t&=3
\end{aligned}$$
