---
judul: "Turunan Fungsi"
kelas: "12"
fase: "F"
bab: "TL-3"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (12 bagian)"
---

# Bab TL-3 — Turunan Fungsi

> Kelas 12 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- (A) Konsep dan Aturan Turunan
  - Konsep Turunan Fungsi
  - Penulisan Turunan Fungsi
  - Turunan Fungsi Aljabar
  - Aturan Rantai
  - Turunan Fungsi Trigonometri
  - Turunan Fungsi Eksponensial
- (B) Aplikasi Turunan
  - Persamaan Garis Singgung pada Kurva
  - Fungsi Naik, Fungsi Turun, dan Stasioner
  - Titik Ekstrem, Nilai Balik Minimum, dan Maksimum
  - Menggambar Grafik Fungsi
  - Kecepatan dan Percepatan
  - Aplikasi Turunan di Berbagai Bidang Ilmu

## (A) Konsep dan Aturan Turunan

### Konsep Turunan Fungsi

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VII Turunan, subbab 7.1 Menemukan Konsep Turunan Fungsi, Definisi 7.1–7.5, Sifat 7.1, Contoh 7.2–7.3, hlm. 250–258.*

#### Garis Sekan dan Garis Singgung

Misalkan $f: \mathbb{R} \to \mathbb{R}$ fungsi kontinu, dengan titik $P(x_1, y_1)$ dan $Q(x_1 + \Delta x, y_1 + \Delta y)$ pada kurva $f$. **Garis sekan** menghubungkan titik $P$ dan $Q$ dengan gradien:

$$m_{\text{sec}} = \frac{f(x_1 + \Delta x) - f(x_1)}{\Delta x}$$

Gradien **garis singgung** di titik $P(x_1, y_1)$ adalah limit gradien garis sekan ketika $Q$ mendekati $P$:

$$m_{\text{GS}} = \lim_{\Delta x \to 0} \frac{f(x_1 + \Delta x) - f(x_1)}{\Delta x}$$

#### Turunan sebagai Limit Fungsi

Fungsi $f$ **dapat diturunkan** di titik $c$ jika dan hanya jika limit berikut ada:

$$\lim_{\Delta x \to 0} \frac{f(c + \Delta x) - f(c)}{\Delta x}$$

Fungsi $f$ dapat diturunkan pada himpunan $S$ jika dan hanya jika $f$ dapat diturunkan di setiap titik $c$ di $S$. Turunan $f$ ditulis:

$$f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}$$

**Sifat:** fungsi $f$ dapat diturunkan di titik $x$ jika dan hanya jika turunan kirinya ($\Delta x \to 0^-$) sama dengan turunan kanannya ($\Delta x \to 0^+$).

#### Contoh 1

Tentukan turunan fungsi $y = x^2$.

$$f'(x) = \lim_{\Delta x \to 0} \frac{(x + \Delta x)^2 - x^2}{\Delta x} = \lim_{\Delta x \to 0} \frac{2x\Delta x + (\Delta x)^2}{\Delta x} = \lim_{\Delta x \to 0} (2x + \Delta x) = 2x$$

#### Contoh 2

Selidiki turunan fungsi $f(x) = |x|$ di titik $O(0, 0)$.

Turunan kanan di $x = 0$: untuk $\Delta x > 0$, $\dfrac{|0 + \Delta x| - |0|}{\Delta x} = \dfrac{\Delta x}{\Delta x} = 1$.

Turunan kiri di $x = 0$: untuk $\Delta x < 0$, $\dfrac{|\Delta x|}{\Delta x} = \dfrac{-\Delta x}{\Delta x} = -1$.

Karena turunan kiri ($-1$) tidak sama dengan turunan kanan ($1$), fungsi $f(x) = |x|$ tidak dapat diturunkan di $x = 0$. Secara grafik, kurva $y = |x|$ memiliki "sudut lancip" di titik $O$.

### Penulisan Turunan Fungsi

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab A.3 Penulisan Turunan Fungsi, hlm. 104–105.*

Beberapa simbol penulisan turunan yang sering digunakan:

- **Notasi Newton:** $f'(x)$ atau $y'$, dibaca turunan pertama fungsi $f(x)$.
- **Notasi Leibniz:** $\dfrac{df(x)}{dx}$ atau $\dfrac{dy}{dx}$, juga menyatakan turunan pertama fungsi $f(x)$.

### Turunan Fungsi Aljabar

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VII Turunan, subbab 7.2 Turunan Fungsi Aljabar, Aturan Turunan 7.1, Contoh 7.4–7.5, hlm. 258–262.*

Dengan definisi turunan sebagai limit, buku membuktikan misalnya bahwa turunan $f(x) = u(x) + v(x)$ adalah:

$$f'(x) = \lim_{\Delta x \to 0} \frac{[u(x + \Delta x) + v(x + \Delta x)] - [u(x) + v(x)]}{\Delta x} = u'(x) + v'(x)$$

#### Aturan Turunan

Misalkan $f$, $u$, $v$ fungsi bernilai real yang dapat diturunkan pada interval $I$ dan $a$ bilangan real:

1. $f(x) = a \Rightarrow f'(x) = 0$
2. $f(x) = ax \Rightarrow f'(x) = a$
3. $f(x) = ax^n \Rightarrow f'(x) = n \cdot a x^{n-1}$
4. $f(x) = a\,u(x) \Rightarrow f'(x) = a\,u'(x)$
5. $f(x) = u(x) \pm v(x) \Rightarrow f'(x) = u'(x) \pm v'(x)$
6. $f(x) = u(x)\,v(x) \Rightarrow f'(x) = u'(x)\,v(x) + u(x)\,v'(x)$
7. $f(x) = \dfrac{u(x)}{v(x)} \Rightarrow f'(x) = \dfrac{u'(x)\,v(x) - u(x)\,v'(x)}{[v(x)]^2}$

#### Contoh

Tentukan turunan dari (a) $f(x) = 5x^4$, (b) $f(x) = x^3 + 2x^2 - 7$.

a. $f'(x) = 4 \cdot 5x^{4-1} = 20x^3$

b. $f'(x) = 3x^2 + 4x$

### Aturan Rantai

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VII Turunan, subbab 7.2, turunan fungsi berpangkat dan Contoh 7.6, hlm. 261–262.*

Untuk fungsi berbentuk pangkat dari suatu fungsi, $f(x) = [u(x)]^n$, buku menurunkan dengan definisi limit bahwa:

$$f'(x) = n\,u'(x)\,[u(x)]^{n-1}$$

Artinya, turunkan pangkatnya seperti biasa, lalu kalikan dengan turunan fungsi di dalam kurung.

#### Contoh

Tentukan turunan $f(x) = (2x^2 - 3x)^4$.

**Penyelesaian:**

Misalkan $u(x) = 2x^2 - 3x$, sehingga $u'(x) = 4x - 3$ dan $n = 4$.

$$f'(x) = 4(4x - 3)(2x^2 - 3x)^3$$

### Turunan Fungsi Trigonometri

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab B.3 Turunan Fungsi Trigonometri, hlm. 115–121.*

Dengan definisi turunan $f'(x) = \displaystyle\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$, identitas selisih sinus/kosinus, dan sifat limit fungsi trigonometri, buku menurunkan turunan fungsi trigonometri dasar.

#### Sifat Turunan Trigonometri

- **STT 1:** jika $f(x) = \sin x$, maka $f'(x) = \cos x$; jika $g(x) = \cos x$, maka $g'(x) = -\sin x$.
- **STT 2:** jika $f(x) = \tan x$, maka $f'(x) = \sec^2 x$.
- **STT 3:** jika $f(x) = \cot x$, maka $f'(x) = -\csc^2 x$.
- **STT 4:** jika $f(x) = \sec x$, maka $f'(x) = \sec x\tan x$.
- **STT 5:** jika $f(x) = \csc x$, maka $f'(x) = -\csc x\cot x$.

#### Contoh Soal 2.6

1. $y = 2x + 5\sin x \Rightarrow y' = 2 + 5\cos x$.
2. $y = 2\sin x\tan x$. Dengan aturan perkalian ($u = \sin x$, $v = \tan x$):

$$y' = 2\left(\cos x\tan x + \sin x\sec^2 x\right) = 2\sin x + \frac{2\sin x}{\cos^2 x}$$

### Turunan Fungsi Eksponensial

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab B.4 Turunan Fungsi Eksponensial, hlm. 122–126.*

Laju perubahan jumlah penduduk umumnya dimodelkan dengan fungsi eksponensial seperti $P = P_0 \cdot e^{rt}$, sehingga turunan fungsi eksponensial diperlukan.

#### Sifat-sifat Turunan Eksponensial

- Jika $f(x) = e^x$, maka $f'(x) = e^x$.
- Jika $f(x) = e^{g(x)}$, maka $f'(x) = g'(x)\,e^{g(x)}$.
- Karena $a^x = e^{x\ln a}$, jika $f(x) = a^x$ ($a > 0$, $a \neq 1$), maka $f'(x) = a^x\ln a$.

#### Contoh Soal 2.7

- $y = 2^x \Rightarrow y' = 2^x\ln 2$.
- $y = 3^{2x}$: misalkan $g(x) = 2x$; dengan aturan rantai, $y' = 3^{2x}\ln 3 \cdot 2 = 2 \cdot 3^{2x}\ln 3$.

## (B) Aplikasi Turunan

### Persamaan Garis Singgung pada Kurva

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab C.1 Persamaan Garis Singgung pada Kurva, hlm. 127–131.*

Untuk kurva $y = f(x)$ dan titik $P(a, b)$ pada kurva:

- kemiringan garis singgung di $P$ adalah $m = f'(a)$;
- persamaan garis singgungnya $y - b = m(x - a)$.

#### Contoh Soal 2.8

Tentukan persamaan garis singgung kurva $y = 2 - 4x^2$ di titik $(1, -2)$.

- **Langkah I:** $f'(x) = -8x$.
- **Langkah II:** kemiringan di $(1, -2)$ adalah $f'(1) = -8$.
- **Langkah III:** $y + 2 = -8(x - 1) \Rightarrow y = -8x + 6$.

### Fungsi Naik, Fungsi Turun, dan Stasioner

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VII Turunan, subbab 7.3.1 Konsep Kemonotonan Fungsi, Definisi 7.6, Sifat 7.2, Contoh 7.8–7.9, hlm. 265–270.*

#### Definisi

Misalkan fungsi $f: S \to \mathbb{R}$, $S \subseteq \mathbb{R}$.

- Fungsi $f$ **naik** jika untuk setiap $x_1, x_2 \in S$, $x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$.
- Fungsi $f$ **turun** jika untuk setiap $x_1, x_2 \in S$, $x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$.

#### Sifat

Misalkan $f$ fungsi bernilai real yang dapat diturunkan pada setiap $x \in I$:

1. Jika $f'(x) > 0$, fungsi selalu naik pada interval $I$.
2. Jika $f'(x) < 0$, fungsi selalu turun pada interval $I$.
3. Jika $f'(x) \geq 0$, fungsi tidak pernah turun pada interval $I$.
4. Jika $f'(x) \leq 0$, fungsi tidak pernah naik pada interval $I$.

Jika $f'(x_1) = 0$, titik $(x_1, f(x_1))$ disebut titik **stasioner** (kritis).

#### Contoh 1

Tentukan interval agar fungsi $f(x) = x^2$ naik.

Syarat fungsi naik: $f'(x) = 2x > 0$, sehingga $x > 0$. Jadi fungsi naik pada interval $\{x \mid x > 0, x \in \mathbb{R}\}$.

#### Contoh 2

Tentukan interval fungsi naik dan turun dari $f(x) = x^4 - 2x^2$.

Pembuat nol dari $f'(x)$:

$$f'(x) = 4x^3 - 4x = 4x(x - 1)(x + 1) = 0 \Rightarrow x = 0,\ x = 1,\ \text{atau } x = -1$$

| Interval | $x < -1$ | $-1 < x < 0$ | $0 < x < 1$ | $x > 1$ |
| --- | --- | --- | --- | --- |
| Tanda $f'(x)$ | $-$ | $+$ | $-$ | $+$ |
| $f$ | turun | naik | turun | naik |

Jadi kurva naik pada interval $-1 < x < 0$ atau $x > 1$, dan turun pada interval $x < -1$ atau $0 < x < 1$.

### Titik Ekstrem, Nilai Balik Minimum, dan Maksimum

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VII Turunan, subbab 7.3.2 Nilai Maksimum atau Minimum Fungsi, Sifat 7.3 dan Contoh 7.11, hlm. 271–275.*

#### Sifat

Misalkan $f$ fungsi bernilai real yang kontinu dan memiliki turunan pertama dan kedua pada $x_1 \in I$:

1. Jika $f'(x_1) = 0$, titik $(x_1, f(x_1))$ disebut titik stasioner/kritis.
2. Jika $f'(x_1) = 0$ dan $f''(x_1) > 0$, titik $(x_1, f(x_1))$ adalah titik **minimum** fungsi.
3. Jika $f'(x_1) = 0$ dan $f''(x_1) < 0$, titik $(x_1, f(x_1))$ adalah titik **maksimum** fungsi.
4. Jika $f''(x_1) = 0$, titik $(x_1, f(x_1))$ disebut titik belok.

#### Contoh

Tentukan titik balik fungsi kuadrat $f(x) = x^2 - 4x + 3$.

**Penyelesaian 1 (konsep fungsi kuadrat):** fungsi $f(x) = ax^2 + bx + c$ mempunyai titik balik $\left(-\dfrac{b}{2a}, -\dfrac{D}{4a}\right)$, maksimum jika $a < 0$ dan minimum jika $a > 0$. Dengan $a = 1$, $b = -4$, $c = 3$, dan $D = 16 - 12 = 4$, titik balik minimumnya $(2, -1)$.

**Penyelesaian 2 (konsep turunan):** $f'(x) = 2x - 4 = 0 \Rightarrow x = 2$, dan $f(2) = 4 - 8 + 3 = -1$. Karena $f''(x) = 2 > 0$, titik $(2, -1)$ adalah titik balik minimum.

### Menggambar Grafik Fungsi

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VII Turunan, subbab 7.4 Menggambar Grafik Fungsi, hlm. 283–285.*

Kurva suatu fungsi dapat digambar dengan menganalisis titik stasioner, interval naik/turun, titik optimum (maksimum atau minimum), dan titik belok.

#### Contoh 7.16

Analisis kurva $f(x) = x^2 - 2x$.

a. Titik stasioner ($f'(x) = 0$): $f'(x) = 2x - 2 = 0 \Rightarrow x = 1$; titik stasioner $P(1, -1)$.

b. Fungsi naik jika $f'(x) = 2x - 2 > 0$, yaitu $x > 1$; fungsi turun jika $x < 1$.

c. Titik belok ($f''(x) = 0$): $f''(x) = 2 \neq 0$, sehingga tidak ada titik belok.

d. Titik optimum: $f''(x) = 2 > 0$, sehingga $P(1, -1)$ titik minimum.

#### Langkah Menganalisis dan Menyketsa Kurva

1. Tentukan pembuat nol fungsi ($f(x) = 0$).
2. Tentukan titik stasioner ($f'(x) = 0$).
3. Tentukan interval fungsi naik ($f'(x) > 0$) atau turun ($f'(x) < 0$).
4. Tentukan jenis titik balik dengan menganalisis kecekungan fungsi.
5. Tentukan titik belok ($f''(x) = 0$).
6. Tentukan beberapa titik bantu.

### Kecepatan dan Percepatan

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab VII Turunan, subbab 7.3.4 Konsep Turunan dalam Permasalahan Kecepatan dan Percepatan, Contoh 7.14, hlm. 278–282.*

Jika lintasan benda dinyatakan sebagai fungsi jarak $s(t)$ terhadap waktu $t$, maka kecepatan adalah turunan pertama jarak, $v(t) = s'(t)$, dan percepatan adalah turunan pertama kecepatan, $a(t) = v'(t)$.

#### Contoh

Sebuah partikel bergerak mengikuti fungsi jarak $s(t) = t^4 - 6t^2 + 12$. Tentukan panjang lintasan dan kecepatan pada saat percepatannya nol.

**Penyelesaian:**

$$v(t) = s'(t) = 4t^3 - 12t, \qquad a(t) = v'(t) = 12t^2 - 12$$

$$a(t) = 0 \Rightarrow 12(t + 1)(t - 1) = 0 \Rightarrow t = 1 \ (t \geq 0)$$

$$v(1) = 4(1)^3 - 12(1) = -8, \qquad s(1) = 1 - 6 + 12 = 7$$

Jadi pada $t = 1$, posisi partikel $s = 7$ dan kecepatannya $-8$ (tanda negatif menunjukkan partikel bergerak ke arah berlawanan).

### Aplikasi Turunan di Berbagai Bidang Ilmu

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 2 Turunan Fungsi, subbab D Aplikasi Turunan Fungsi di Berbagai Bidang Ilmu, hlm. 148–153.*

Tiga konsep turunan yang banyak dipakai di bidang lain: (1) kecepatan dan percepatan, (2) penggunaan turunan pada limit fungsi tak tentu, dan (3) titik optimum (nilai maksimum dan minimum).

#### Contoh Soal 2.14: Kecepatan Peluru

Peluru ditembakkan vertikal ke atas dengan kecepatan awal 50 m/s; ketinggiannya $h(t) = 50t - 5t^2$ meter.

a. $h(0) = 0$ m, $h(5) = 250 - 125 = 125$ m, $h(10) = 500 - 500 = 0$ m.

b. Kecepatan adalah turunan pertama: $v = h'(t) = 50 - 10t$. Maka $v(3) = 20$ m/s, $v(5) = 0$ m/s, dan $v(7) = -20$ m/s.

Percepatan adalah turunan kedua dari lintasan; misalnya untuk $s(t) = t^3 - 6t^2 + 9t$, $a = s''(t) = 6t - 12$, sehingga $a(0) = -12$ m/s².

#### Contoh Soal 2.15: Volume Kotak Maksimum

Dari selembar karton persegi berukuran 18 cm × 18 cm, keempat pojoknya dipotong persegi bersisi $x$ cm, lalu dilipat menjadi kotak tanpa tutup.

$$V(x) = (18 - 2x)^2x = 324x - 72x^2 + 4x^3$$

$$V'(x) = 12x^2 - 144x + 324 = 0 \Rightarrow x = 3 \text{ atau } x = 9$$

$V(0) = 0$, $V(3) = 432$, $V(9) = 0$. Volume maksimum 432 cm³ dengan $x = 3$ cm, sehingga ukuran kotak: panjang 12 cm, lebar 12 cm, dan tinggi 3 cm.
