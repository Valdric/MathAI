---
judul: "Geometri Analitik"
kelas: "12"
fase: "F"
bab: "TL-1"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (7 bagian)"
---

# Bab TL-1 — Geometri Analitik

> Kelas 12 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- (A) Lingkaran dan Garis Singgung
  - Definisi dan Persamaan Lingkaran
  - Kedudukan Titik terhadap Lingkaran
  - Kedudukan Garis terhadap Lingkaran
  - Persamaan Garis Singgung Lingkaran
- (B) Irisan Kerucut
  - Parabola
  - Elips
  - Hiperbola

## (A) Lingkaran dan Garis Singgung

### Definisi dan Persamaan Lingkaran

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 1 Lingkaran, Elips, dan Garis Singgung Lingkaran, subbab A Lingkaran, hlm. 5–17.*

Lingkaran pada irisan kerucut terbentuk dari kerucut yang dipotong bidang yang tegak lurus ($90^\circ$) terhadap garis tinggi kerucut dan tidak melalui puncaknya.

#### Definisi Lingkaran

**Lingkaran** adalah kurva tertutup sederhana yang semua titiknya berjarak sama dari titik pusat. Jarak yang sama itu disebut **jari-jari** ($r$) dan titik tertentu itu disebut **titik pusat**. Lingkaran dapat digambar tanpa jangka: ikat benang pada pensil, tahan ujung benang yang lain, tarik benang hingga kencang, lalu gerakkan pensil melingkar.

#### Persamaan Lingkaran Berpusat $O(0, 0)$

Untuk sebarang titik $A(x, y)$ pada lingkaran berpusat $O$ berjari-jari $r$, teorema Pythagoras pada segitiga $OAA'$ ($A'$ proyeksi $A$ ke sumbu-$x$) memberikan

$$x^2 + y^2 = r^2$$

**Contoh Soal 1.1.** Lingkaran berpusat $O$ dengan $r = 4$: $x^2 + y^2 = 16$.

#### Persamaan Lingkaran Berpusat $P(a, b)$ (Bentuk Baku)

$$(x - a)^2 + (y - b)^2 = r^2$$

**Contoh Soal 1.2.** Pusat $P(1, 2)$ dan $r = 6$: $(x - 1)^2 + (y - 2)^2 = 36$.

**Contoh Soal 1.3.** Pusat $P(-5, 2)$ dan diameter 6 ($r = 3$): $(x + 5)^2 + (y - 2)^2 = 9$.

#### Bentuk Umum Persamaan Lingkaran

Menjabarkan bentuk baku menghasilkan

$$x^2 + y^2 + Ax + By + C = 0$$

dengan $A$, $B$, $C$ bilangan real. Contoh: $(x - 1)^2 + (y - 2)^2 = 36$ identik dengan $x^2 + y^2 - 2x - 4y - 31 = 0$, dan $(x + 5)^2 + (y - 2)^2 = 9$ identik dengan $x^2 + y^2 + 10x - 4y + 20 = 0$.

**Contoh Soal 1.4.** Lingkaran berjari-jari 3 dan berpusat $P(-1, 2)$: bentuk bakunya $(x + 1)^2 + (y - 2)^2 = 9$; dijabarkan menjadi $x^2 + 2x + 1 + y^2 - 4y + 4 = 9$, sehingga bentuk umumnya

$$x^2 + y^2 + 2x - 4y - 4 = 0$$

### Kedudukan Titik terhadap Lingkaran

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 1, subbab C.1 Kedudukan Titik terhadap Lingkaran, hlm. 38–43.*

**Kuasa titik** adalah nilai yang diperoleh dengan menyubstitusikan koordinat suatu titik ke persamaan lingkaran (dalam bentuk ruas kanan nol). Untuk lingkaran $(x - a)^2 + (y - b)^2 = r^2$ dan titik $A(x_1, y_1)$:

$$K_A = (x_1 - a)^2 + (y_1 - b)^2 - r^2$$

- $K_A < 0$: titik berada **di dalam** lingkaran.
- $K_A = 0$: titik berada **pada** lingkaran.
- $K_A > 0$: titik berada **di luar** lingkaran.

**Contoh Soal 1.11.** Titik $A(5, -2)$ terhadap $L: (x - 6)^2 + (y + 5)^2 = 16$:

$$K_A = (5 - 6)^2 + (-2 + 5)^2 - 16 = 1 + 9 - 16 = -6 < 0$$

Jadi titik $A$ berada di dalam lingkaran.

### Kedudukan Garis terhadap Lingkaran

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 1, subbab C.2 Kedudukan Garis terhadap Lingkaran, hlm. 43–50.*

Garis $g$ dapat **memotong** lingkaran (dua titik), **menyinggung** lingkaran (satu titik), atau **tidak memotong dan tidak menyinggung** lingkaran. Substitusikan persamaan garis ke persamaan lingkaran sehingga diperoleh persamaan kuadrat, lalu hitung diskriminannya $D = b^2 - 4ac$:

- $D > 0$: garis memotong lingkaran;
- $D = 0$: garis menyinggung lingkaran;
- $D < 0$: garis tidak memotong dan tidak menyinggung lingkaran.

**Contoh Soal 1.18.** Garis $y = 3$ dan lingkaran $(x + 1)^2 + (y - 3)^2 = 9$: substitusi menghasilkan $(x + 1)^2 = 9$, yaitu $(x + 4)(x - 2) = 0$. Garis memotong lingkaran di $(-4, 3)$ dan $(2, 3)$.

**Contoh Soal 1.19.** Tunjukkan bahwa garis $2x + y - 5 = 0$ menyinggung lingkaran $x^2 + y^2 - 5 = 0$.

Dari garis, $y = 5 - 2x$. Substitusi:

$$x^2 + (5 - 2x)^2 - 5 = 0 \Rightarrow 5x^2 - 20x + 20 = 0$$

$$D = (-20)^2 - 4(5)(20) = 400 - 400 = 0$$

Karena $D = 0$, garis menyinggung lingkaran.

### Persamaan Garis Singgung Lingkaran

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 1, subbab D Persamaan Garis Singgung Lingkaran, hlm. 51–68.*

#### Titik Singgung Diketahui

Dengan prinsip "pembagian adil", garis singgung di titik $(x_1, y_1)$ pada lingkaran:

- $x^2 + y^2 = r^2$: $\quad x_1x + y_1y = r^2$
- $(x - a)^2 + (y - b)^2 = r^2$: $\quad (x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$

**Contoh Soal 1.20.** Garis singgung lingkaran $(x + 2)^2 + (y - 3)^2 = 16$ di titik $A(-2, 7)$:

$$(-2 + 2)(x + 2) + (7 - 3)(y - 3) = 16 \Rightarrow 4(y - 3) = 16 \Rightarrow y = 7$$

#### Kemiringan $m$ Diketahui

Garis singgung lingkaran $x^2 + y^2 = r^2$ dengan kemiringan $m$ berbentuk $y = mx + n$ dengan

$$n = \pm r\sqrt{1 + m^2}$$

**Contoh Soal 1.22.** Lingkaran $x^2 + y^2 = 4$ dengan kemiringan 2: $n = \pm 2\sqrt{1 + 2^2} = \pm 2\sqrt{5}$. Garis singgungnya $y = 2x + 2\sqrt{5}$ dan $y = 2x - 2\sqrt{5}$.

#### Titik di Luar Lingkaran Diketahui (Garis Polar)

Dari titik di luar lingkaran dapat ditarik dua garis singgung. Titik-titik singgungnya terletak pada **garis polar**: untuk lingkaran $x^2 + y^2 = r^2$ dan titik $T(x_1, y_1)$ di luar lingkaran, garis polarnya $x_1x + y_1y = r^2$.

**Contoh Soal 1.26.** Garis singgung lingkaran $x^2 + y^2 = 4$ yang melalui $T(3, 2)$. Garis polarnya $3x + 2y = 4$, atau $y = \dfrac{4 - 3x}{2}$. Substitusi ke persamaan lingkaran:

$$x^2 + \left(\frac{4 - 3x}{2}\right)^2 = 4 \Rightarrow 13x^2 - 24x = 0 \Rightarrow x = 0 \text{ atau } x = \frac{24}{13}$$

Untuk $x = 0$, titik singgungnya $(0, 2)$, sehingga salah satu garis singgungnya $0 \cdot x + 2y = 4$, yaitu $y = 2$. Titik singgung kedua diperoleh dari $x = \tfrac{24}{13}$ dengan cara yang sama.

## (B) Irisan Kerucut

### Parabola

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 1, Pengayaan Irisan Kerucut: Parabola, hlm. 69–76.*

#### Definisi Parabola

**Parabola** adalah tempat kedudukan titik-titik yang jaraknya terhadap suatu titik tertentu (**titik fokus** $F$) dan suatu garis tertentu (**garis direktriks** $d$) selalu sama. Titik puncak parabola adalah titik tengah antara fokus dan titik potong sumbu simetri dengan direktriks.

#### Persamaan Parabola Berpuncak $O(0, 0)$

Untuk titik $P(x, y)$ dengan fokus $F(0, p)$ dan direktriks $y = -p$, syarat $d_1 = d_2$ memberikan $\sqrt{x^2 + (y - p)^2} = |y + p|$, sehingga

| Arah terbuka | Persamaan | Fokus | Direktriks |
|---|---|---|---|
| ke atas | $x^2 = 4py$ | $(0, p)$ | $y = -p$ |
| ke bawah | $x^2 = -4py$ | $(0, -p)$ | $y = p$ |
| ke kanan | $y^2 = 4px$ | $(p, 0)$ | $x = -p$ |
| ke kiri | $y^2 = -4px$ | $(-p, 0)$ | $x = p$ |

#### Parabola Berpuncak $(m, n)$

Misalnya parabola terbuka ke kiri: $(y - n)^2 = -4p(x - m)$, dengan fokus $(m - p, n)$ dan direktriks $x = m + p$.

**Contoh Soal 1.28.** Parabola berpuncak $(2, 3)$ dengan fokus $(1, 3)$ terbuka ke kiri; $m = 2$, $n = 3$, dan $m - p = 1 \Rightarrow p = 1$.

$$(y - 3)^2 = -4(1)(x - 2) \Rightarrow y^2 - 6y + 4x + 1 = 0$$

### Elips

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 1, subbab B Elips, hlm. 18–37.*

Elips terbentuk dari bidang irisan yang memotong kerucut, tetapi tidak tegak lurus sumbu dan tidak sejajar garis pembangun kerucut.

#### Definisi Elips

**Elips** adalah kumpulan titik pada bidang datar yang **jumlah jaraknya** terhadap dua titik tertentu selalu sama. Kedua titik itu disebut **titik fokus** ($F_1$ dan $F_2$).

#### Unsur-unsur Elips

1. Dua sumbu: sumbu utama dan sumbu sekawan.
2. Titik fokus $F_1$ dan $F_2$, masing-masing berjarak $c$ dari pusat.
3. Titik pusat $P$, di tengah-tengah kedua fokus.
4. Sumbu fokal: garis yang menghubungkan kedua fokus.
5. Titik puncak: $A$, $A'$, $B$, $B'$.
6. **Sumbu mayor**: diameter terpanjang ($AA'$), panjangnya $2a$.
7. **Sumbu minor**: melalui pusat dan tegak lurus sumbu mayor ($BB'$), panjangnya $2b$, dengan $a > b$.
8. **Latus rectum**: ruas garis melalui fokus dan tegak lurus sumbu mayor, panjangnya $\dfrac{2b^2}{a}$.

#### Elips Berpusat $O(0, 0)$ dengan Sumbu Mayor pada Sumbu-$x$

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

1. Titik fokus $F_1(-c, 0)$ dan $F_2(c, 0)$ dengan $c^2 = a^2 - b^2$.
2. Pusat $O(0, 0)$.
3. Puncak $A'(-a, 0)$, $A(a, 0)$, $B'(0, -b)$, $B(0, b)$.
4. Panjang sumbu mayor $2a$ dan sumbu minor $2b$.
5. **Eksentrisitas** $e = \dfrac{c}{a}$, dengan $0 < e < 1$; menunjukkan seberapa melengkung elips.
6. **Direktriks**: garis tegak lurus sumbu mayor di luar elips, $x = \dfrac{a^2}{c}$ dan $x = -\dfrac{a^2}{c}$.

### Hiperbola

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), Sri Adi Widodo dkk., Kemendikdasmen, 2025, Bab 1, Pengayaan Irisan Kerucut: Hiperbola, hlm. 77–78.*

**Hiperbola** terbentuk ketika bidang datar memotong sebagian dari dua kerucut yang berlawanan. Hiperbola adalah himpunan titik-titik yang **selisih jaraknya** terhadap dua titik tertentu (titik fokus) selalu sama, yaitu $2a$; hiperbola juga dapat didefinisikan sebagai lintasan titik-titik dengan eksentrisitas lebih dari satu.

Unsur-unsur hiperbola:

- **Sumbu utama** (sumbu transversal/mayor): sumbu simetri yang melalui kedua fokus.
- **Sumbu sekawan** (sumbu konjugasi/minor): sumbu simetri yang tegak lurus sumbu utama di pertengahannya.
- **Titik pusat**: perpotongan sumbu utama dan sumbu sekawan.
- **Titik puncak**: perpotongan hiperbola dengan sumbu utama.
- Terdiri atas **dua cabang** kurva (berbeda dengan parabola yang hanya satu kurva).
- **Dua asimtot** berupa garis lurus; makin jauh dari pusat, kurva makin dekat ke asimtot tetapi tidak pernah berpotongan.

Materi hiperbola selengkapnya dan kedudukan dua lingkaran dirujuk buku ke tautan pengayaan https://bukupusbuk.id/s/mtl12pengayaan1.
