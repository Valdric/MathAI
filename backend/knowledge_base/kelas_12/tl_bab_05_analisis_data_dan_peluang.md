---
judul: "Analisis Data dan Peluang"
kelas: "12"
fase: "F"
bab: "TL-5"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (6 bagian)"
---

# Bab TL-5 — Analisis Data dan Peluang

> Kelas 12 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- (A) Variabel Acak
  - Variabel Acak
  - Variabel Acak Diskret dan Kontinu
- (B) Fungsi Peluang
  - Fungsi Peluang Diskret
  - Fungsi Densitas Peluang
- (C) Distribusi Peluang
  - Distribusi Binomial
  - Distribusi Normal

## (A) Variabel Acak

### Variabel Acak

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 4 Analisis Data dan Peluang, subbab A Variabel Acak, Definisi 4.1, hlm. 225–230.*

#### Definisi 4.1

Variabel acak ialah suatu fungsi yang mengaitkan suatu bilangan real pada setiap unsur dalam ruang sampel. Misalkan $X: S \to \mathbb{R}$ dengan $e \mapsto X(e) = x$; maka $X$ disebut variabel acak.

#### Contoh Soal 4.1

Sekeping uang logam seimbang dilempar tiga kali; $X$ menyatakan banyaknya sisi angka yang muncul.

$S = \{AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG\}$ ("A" = angka, "G" = gambar).

| Hasil lemparan | $x$ |
|---|---|
| GGG | 0 |
| AGG, GAG, GGA | 1 |
| AAG, AGA, GAA | 2 |
| AAA | 3 |

Jadi, himpunan semua nilai yang mungkin dari $X$ adalah $\{0, 1, 2, 3\}$.

#### Contoh Soal 4.2

Pasangan suami istri merencanakan dua anak; $Y$ menyatakan banyaknya anak perempuan. $S = \{PP, PL, LP, LL\}$, sehingga $LL \mapsto 0$; $PL, LP \mapsto 1$; $PP \mapsto 2$. Jadi, nilai yang mungkin dari $Y$ adalah $\{0, 1, 2\}$.

### Variabel Acak Diskret dan Kontinu

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 4 Analisis Data dan Peluang, subbab B Variabel Acak Diskret (Definisi 4.2) dan C Variabel Acak Kontinu (Definisi 4.3), hlm. 231–241.*

#### Definisi 4.2: Variabel Acak Diskret

Jika ruang sampel variabel acak $X$ merupakan himpunan berhingga (*finite*) atau tak berhingga yang dapat dihitung satu per satu (*countable*), maka $X$ disebut **variabel acak diskret**.

Ciri-ciri variabel acak diskret:

- nilainya diperoleh dari hasil menghitung atau membilang;
- nilainya berupa bilangan bulat;
- hasilnya dapat direpresentasikan sebagai titik-titik terpisah pada garis bilangan.

**Contoh Soal 4.3 (ringkas):** pada permainan papan angka berputar, papan A memiliki sektor 2, 4, 6 dengan $P(2) = \frac{2}{4}$, $P(4) = \frac{1}{4}$, $P(6) = \frac{1}{4}$, dan papan B memiliki sektor 2, 4, 6 yang sama besar (masing-masing $\frac{1}{3}$). $Z = X + Y$ (jumlah angka kedua papan) hanya dapat bernilai bilangan genap dari 4 sampai 12, sehingga $Z$ variabel acak diskret.

#### Definisi 4.3: Variabel Acak Kontinu

Jika ruang sampel variabel acak $X$ berupa himpunan tak terhitung (*uncountable*), maka $X$ disebut **variabel acak kontinu**.

Ciri-ciri variabel acak kontinu:

- nilainya diperoleh dari hasil pengukuran (tinggi badan, waktu, suhu);
- nilainya bilangan real yang membentuk rentang tak terputus; di antara dua nilai selalu ada nilai lain;
- hasilnya direpresentasikan sebagai deretan titik yang terhubung membentuk garis pada garis bilangan.

#### Contoh Soal 4.5

Mesin pengisi air mineral mengisi botol 600 ml; volume isi bervariasi dari 595 ml hingga 605 ml. $X$ = volume air dalam satu botol. Nilainya diperoleh dari pengukuran dan di antara dua volume selalu ada volume lain (misalnya 597,2 ml), sehingga

$$R_X = \{x \mid 595 \le x \le 605\}$$

mencakup semua bilangan real dalam rentang tersebut. Jadi, $X$ variabel acak kontinu.

## (B) Fungsi Peluang

### Fungsi Peluang Diskret

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 4 Analisis Data dan Peluang, subbab D Fungsi Peluang, Definisi 4.4, hlm. 241–248.*

#### Definisi 4.4

Misalkan $X$ variabel acak. Fungsi $f$ disebut **fungsi peluang** atau **distribusi peluang** $X$ jika untuk setiap hasil $x$ yang mungkin:

1. $f(x) \ge 0$;
2. $\sum f(x) = 1$;
3. $P(X = x) = f(x)$.

Karena $X$ diskret, fungsinya disebut fungsi peluang diskret atau distribusi peluang diskret.

Pada pelemparan uang logam tiga kali dengan $X$ = banyaknya sisi gambar:

| $x$ | 0 | 1 | 2 | 3 | Total |
|---|---|---|---|---|---|
| $P(X = x)$ | $\frac{1}{8}$ | $\frac{3}{8}$ | $\frac{3}{8}$ | $\frac{1}{8}$ | 1 |

$$f(x) = \frac{\binom{3}{x}}{8}, \qquad x = 0, 1, 2, 3$$

dengan $\binom{n}{k} = C_k^n = \dfrac{n!}{k!\,(n - k)!}$.

#### Contoh Soal 4.6

Kotak berisi 5 bola hijau dan 3 bola kuning; diambil 3 bola secara acak. $X$ = banyak bola kuning terambil.

Banyak cara memilih 3 dari 8 bola: $C_3^8 = 56$.

| $x$ | 0 | 1 | 2 | 3 | Total |
|---|---|---|---|---|---|
| $f(x)$ | $\frac{10}{56}$ | $\frac{30}{56}$ | $\frac{15}{56}$ | $\frac{1}{56}$ | 1 |

$$f(x) = \frac{C_x^3 \cdot C_{3-x}^5}{56}, \qquad x = 0, 1, 2, 3$$

Ketiga syarat Definisi 4.4 dipenuhi, sehingga $f$ fungsi peluang.

#### Contoh Soal 4.7

Diketahui $f(x) = \dfrac{x}{12}$ untuk $x = 3, 4, 5$, dan $f(x) = 0$ untuk $x$ lainnya.

a. Distribusinya: $f(3) = \frac{3}{12}$, $f(4) = \frac{4}{12}$, $f(5) = \frac{5}{12}$, dengan total 1.

b. $f(x) \ge 0$, $\sum f(x) = 1$, dan $P(X = x) = f(x)$, sehingga $f$ fungsi peluang variabel acak diskret $X$.

c. $P(X = 4) = \frac{4}{12}$; $P(X \le 4) = \frac{3}{12} + \frac{4}{12} = \frac{7}{12}$; $P(X < 4) = \frac{3}{12}$.

### Fungsi Densitas Peluang

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 4 Analisis Data dan Peluang, subbab D Fungsi Peluang, Definisi 4.5, hlm. 249–254.*

#### Definisi 4.5

Misalkan $X$ variabel acak kontinu. Fungsi $f$ disebut **fungsi densitas peluang** jika:

1. $f(x) \ge 0$ untuk semua $x \in \mathbb{R}$;
2. $\displaystyle\int_{-\infty}^{\infty} f(x)\,dx = 1$;
3. $P(a \le X \le b) = \displaystyle\int_a^b f(x)\,dx$.

Fungsi distribusi kumulatifnya:

$$F(x) = P(X \le x) = \int_{-\infty}^{x} f(t)\,dt, \qquad -\infty < x < \infty$$

dengan hubungan $f(x) = \dfrac{dF(x)}{dx}$.

Peluang variabel acak kontinu tidak dihitung untuk satu nilai tunggal, tetapi untuk suatu interval: peluangnya adalah luas daerah di bawah kurva fungsi densitas, di atas sumbu-$x$, antara garis $x = a$ dan $x = b$.

#### Contoh Soal 4.8

Galat pengukuran suhu reaksi kimia $X$ (dalam °C) memiliki fungsi densitas

$$f(x) = \begin{cases} \dfrac{x^2}{3}, & -1 < x < 2 \\[4pt] 0, & \text{untuk } x \text{ lainnya} \end{cases}$$

a. $\displaystyle\int_{-\infty}^{\infty} f(x)\,dx = \int_{-1}^{2} \frac{x^2}{3}\,dx = \left[\frac{x^3}{9}\right]_{-1}^{2} = \frac{8}{9} + \frac{1}{9} = 1$.

b. $P(0 < X \le 1) = \displaystyle\int_0^1 \frac{x^2}{3}\,dx = \left[\frac{x^3}{9}\right]_0^1 = \frac{1}{9}$.

#### Contoh Soal 4.9

Fungsi distribusi kumulatif dari Contoh 4.8, untuk $-1 < x < 2$:

$$F(x) = \int_{-1}^{x} \frac{t^2}{3}\,dt = \left[\frac{t^3}{9}\right]_{-1}^{x} = \frac{x^3 + 1}{9}$$

dengan $F(x) = 0$ untuk $x \le -1$ dan $F(x) = 1$ untuk $x \ge 2$.

#### Contoh Soal 4.10

Ruang rapat hotel disewakan tidak lebih dari 4 jam; $Y$ = waktu rapat.

a. $f(y) = \dfrac{1}{4}$ untuk $0 \le y \le 4$, dan $0$ untuk $y$ lainnya.

b. $P(Y \ge 3) = \displaystyle\int_3^4 \frac{1}{4}\,dy = \frac{1}{4}(4 - 3) = \frac{1}{4}$.

## (C) Distribusi Peluang

### Distribusi Binomial

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 4 Analisis Data dan Peluang, subbab E.1 Fungsi Distribusi Binomial (Definisi 4.6) dan E.2 Nilai Harapan Distribusi Binomial, hlm. 255–264.*

Percobaan-percobaan pada distribusi binomial bersifat bebas; salah satu kejadian ditetapkan sebagai "berhasil" dengan peluang yang tetap sama pada setiap pengulangan. Proses ini disebut **proses Bernoulli**.

#### Definisi 4.6

Jika suatu percobaan binomial mempunyai peluang berhasil $p$ dan peluang gagal $q = 1 - p$, maka fungsi distribusi peluang variabel acak binomial $X$ (banyaknya keberhasilan dalam $n$ percobaan yang bebas) adalah

$$b(x; n, p) = \binom{n}{x} p^x q^{n - x}, \qquad x = 0, 1, 2, \ldots, n$$

#### Contoh Soal 4.11

Seorang wasit memimpin 7 pertandingan; pada tiap pertandingan uang logam dilempar sekali. Peluang mendapat gambar $p = \frac{1}{2}$, $q = \frac{1}{2}$, $n = 7$. Peluang mendapatkan gambar 5 kali:

$$b\left(5; 7, \tfrac{1}{2}\right) = \binom{7}{5}\left(\frac{1}{2}\right)^5\left(\frac{1}{2}\right)^2 = 21 \cdot \frac{1}{128} \approx 0{,}164$$

> Catatan: soal di buku berbunyi "5 kali pelemparan pertama mendapatkan gambar", tetapi perhitungannya (dengan $\binom{7}{5}$) adalah peluang tepat 5 gambar dari 7 lemparan.

#### Contoh Soal 4.12

Dadu seimbang dilempar 5 kali; peluang mendapat mata dadu empat sebanyak 3 kali, dengan $p = \frac{1}{6}$, $q = \frac{5}{6}$:

$$b\left(3; 5, \tfrac{1}{6}\right) = \binom{5}{3}\left(\frac{1}{6}\right)^3\left(\frac{5}{6}\right)^2 = 10 \cdot \frac{25}{7.776} = \frac{250}{7.776} \approx 0{,}032$$

#### Nilai Harapan Distribusi Binomial

Misalkan hasil percobaan ke-$i$ dinyatakan dengan variabel acak $I_i$, bernilai 1 jika berhasil dan 0 jika gagal. Banyaknya keberhasilan $X = I_1 + I_2 + \cdots + I_n$, dengan $E(I_i) = 1 \cdot p + 0 \cdot q = p$. Maka

$$E(X) = E(I_1) + E(I_2) + \cdots + E(I_n) = np$$

dengan $n$ banyaknya percobaan dan $p$ peluang keberhasilan.

#### Contoh Soal 4.13

Dadu seimbang dilempar tujuh kali; peluang mata dadu lima $p = \frac{1}{6}$. Nilai harapannya

$$E(X) = np = 7 \cdot \frac{1}{6} = \frac{7}{6} \approx 1{,}167$$

### Distribusi Normal

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 4 Analisis Data dan Peluang, subbab F.1 Fungsi Distribusi Normal (Definisi 4.7) dan F.2 Nilai Harapan Distribusi Normal, hlm. 266–274.*

#### Definisi 4.7

Jika $X$ variabel acak normal dengan rata-rata $\mu$ dan varians $\sigma^2$, distribusi normalnya

$$n(x; \mu, \sigma) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2}, \qquad -\infty < x < \infty$$

dengan $\pi \approx 3{,}1416$, $e \approx 2{,}7183$, $\mu$ rata-rata, dan $\sigma$ simpangan baku.

#### Sifat-sifat Kurva Normal

a. Modus (titik yang membuat fungsi maksimum) terjadi pada $x = \mu$.

b. Kurva simetris terhadap garis tegak yang melalui $\mu$.

c. Kurva memiliki titik belok di $x = \mu \pm \sigma$; cekung ke bawah untuk $\mu - \sigma < x < \mu + \sigma$ dan cekung ke atas untuk nilai $x$ lainnya.

d. Kedua ujung kurva mendekati sumbu horizontal sebagai asimtot ketika $x$ menjauhi $\mu$.

e. Luas daerah di bawah kurva dan di atas sumbu mendatar sama dengan 1.

Semakin besar $\sigma$, semakin rendah kurvanya (platikurtik); semakin kecil $\sigma$, semakin tinggi kurvanya (leptokurtik).

#### Distribusi Normal Baku

Distribusi normal baku memiliki $\mu = 0$ dan $\sigma = 1$. Distribusi normal umum diubah menjadi normal baku dengan

$$z = \frac{x - \mu}{\sigma}, \qquad f(z) = \frac{1}{\sqrt{2\pi}}\, e^{-\frac{1}{2}z^2}, \quad -\infty < z < \infty$$

Karena kurva simetris terhadap $z = 0$ dan luas totalnya 1, luas di kanan maupun di kiri $z = 0$ adalah 0,5. Peluang dibaca dari Tabel Distribusi Normal (luas di sebelah kiri $z$).

#### Contoh Soal 4.14

Untuk distribusi normal dengan $\mu = 50$ dan $\sigma = 10$, tentukan peluang $X$ bernilai antara 45 dan 62.

$$z_1 = \frac{45 - 50}{10} = -0{,}5, \qquad z_2 = \frac{62 - 50}{10} = 1{,}2$$

$$P(45 < X < 62) = P(-0{,}5 < Z < 1{,}2) = P(Z < 1{,}2) - P(Z < -0{,}5) = 0{,}8849 - 0{,}3085 = 0{,}5764$$

#### Nilai Harapan Distribusi Normal

Nilai harapan variabel acak berdistribusi normal sama dengan rata-ratanya:

$$E(X) = \mu$$

**Contoh Soal 4.15:** untuk sebaran normal dengan $\mu = 50$ dan $\sigma = 10$, nilai harapannya $E(X) = \mu = 50$.
