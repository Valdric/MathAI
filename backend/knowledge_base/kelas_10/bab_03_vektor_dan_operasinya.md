---
judul: "Vektor dan Operasinya"
kelas: "10"
fase: "E"
bab: "3"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (8 bagian)"
---

# Bab 3 — Vektor dan Operasinya

> Kelas 10 · Fase E · Matematika Umum

## Daftar Isi

- (A) Terminologi dan Notasi Vektor
  - Pengertian dan Notasi Vektor
  - Vektor Ekuivalen, Bentuk Komponen, dan Panjang Vektor
- (B) Vektor dan Sistem Koordinat
  - Vektor Satuan dan Vektor Posisi
- (C) Operasi Vektor
  - Penjumlahan, Pengurangan, dan Perkalian Skalar
- (D) Hasil Kali Titik
  - Pengertian Hasil Kali Titik
  - Sudut antara Dua Vektor
  - Proyeksi Vektor
- (E) Pembuktian Geometris
  - Pembuktian Geometris dengan Vektor

## (A) Terminologi dan Notasi Vektor

### Pengertian dan Notasi Vektor

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab A.1 Notasi Vektor, hlm. 161–164.*

Ahmad berlayar ke timur dengan kecepatan 60 km/jam, Bunga ke timur laut dengan 60 km/jam, dan Chandra ke timur laut dengan 40 km/jam. Kecepatan Ahmad dan Bunga sama besar, sedangkan arah Bunga dan Chandra sama. Agar ketiga kejadian dapat dibedakan, kita perlu memperhatikan **besar dan arah** sekaligus. Besaran yang memiliki besar dan arah seperti ini disebut **vektor**. Vektor dipakai, misalnya, untuk memodelkan kecepatan bola basket, kecepatan pesawat terbang, dan gaya dorong troli.

#### Notasi Vektor

Vektor digambarkan sebagai **ruas garis berarah**. Ruas garis berarah $\overrightarrow{PQ}$ memiliki **titik pangkal** $P$ dan **titik ujung** $Q$. Panjang ruas garis tersebut dinotasikan $\left\|\overrightarrow{PQ}\right\|$.

Vektor juga dinotasikan dengan huruf kecil bercetak tebal, misalnya $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$, atau huruf kecil bertanda panah, misalnya $\vec{u}$, $\vec{v}$, $\vec{w}$.

### Vektor Ekuivalen, Bentuk Komponen, dan Panjang Vektor

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab A.1 Notasi Vektor (Contoh 4.1, Definisi 4.1, Rumus 4.1), hlm. 163–166.*

#### Contoh 4.1: Vektor-vektor Ekuivalen

Misalkan $\mathbf{u}$ adalah ruas garis berarah dari $(3, 1)$ ke $(7, 4)$ dan $\mathbf{v}$ dari $(0, 0)$ ke $(4, 3)$. Bandingkan arah dan panjangnya.

**Alternatif penyelesaian:** misalkan $\mathbf{u} = \overrightarrow{PQ}$ dan $\mathbf{v} = \overrightarrow{RS}$. Keduanya mengarah ke kanan atas dengan gradien sama:

$$\text{gradien } PQ = \frac{4 - 1}{7 - 3} = \frac{3}{4}, \qquad \text{gradien } RS = \frac{3 - 0}{4 - 0} = \frac{3}{4}$$

Panjangnya, dengan Rumus Jarak:

$$\left\|\overrightarrow{PQ}\right\| = \sqrt{(7 - 3)^2 + (4 - 1)^2} = 5, \qquad \left\|\overrightarrow{RS}\right\| = \sqrt{(4 - 0)^2 + (3 - 0)^2} = 5$$

Karena panjang dan arahnya sama, $\mathbf{u}$ **ekuivalen** dengan $\mathbf{v}$.

#### Definisi 4.1 Bentuk Komponen Suatu Vektor

Jika $\mathbf{v}$ adalah vektor pada bidang dengan titik pangkal $(x_1, y_1)$ dan titik ujung $(x_2, y_2)$, bentuk komponen $\mathbf{v}$ adalah

$$\mathbf{v} = \langle v_1, v_2 \rangle = \langle x_2 - x_1,\; y_2 - y_1 \rangle$$

Bilangan $v_1$ dan $v_2$ disebut **komponen-komponen** vektor $\mathbf{v}$. Jika titik pangkal dan titik ujung berada di titik yang sama, vektornya disebut **vektor nol**, $\mathbf{0} = \langle 0, 0 \rangle$.

Dua vektor $\mathbf{u} = \langle u_1, u_2 \rangle$ dan $\mathbf{v} = \langle v_1, v_2 \rangle$ **ekuivalen** jika $u_1 = v_1$ dan $u_2 = v_2$.

#### Rumus 4.1 Panjang Vektor

Panjang vektor $\mathbf{v} = \langle v_1, v_2 \rangle$ adalah

$$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2}$$

#### Vektor dalam Posisi Baku

Satu vektor dalam bentuk komponen, misalnya $\langle 4, 3 \rangle$, diwakili oleh banyak sekali ruas garis berarah yang besar dan arahnya sama. Representasi yang titik pangkalnya di titik asal $(0, 0)$ disebut vektor dalam **posisi baku**. Secara geometris, sebuah vektor dapat dipandang sebagai himpunan ruas garis berarah yang ekuivalen.

Contoh dalam budaya: komando baris-berbaris "satu langkah ke depan, tiga langkah ke kanan" adalah sebuah vektor. Jika ada 9 orang dalam barisan, gerakan mereka membentuk 9 ruas garis berarah yang ekuivalen dari satu vektor komando.

## (B) Vektor dan Sistem Koordinat

### Vektor Satuan dan Vektor Posisi

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab A.3 Vektor Satuan dan B.2, hlm. 173–177 dan 184.*

**Vektor satuan** adalah vektor yang panjangnya 1. Proses menentukan vektor satuan yang searah dengan suatu vektor disebut **normalisasi**.

#### Contoh 4.6

Diberikan $\mathbf{v} = \langle 3, 4 \rangle$. Tentukan panjangnya dan vektor $\mathbf{u}$ yang searah dengan $\mathbf{v}$ tetapi panjangnya 1.

$$\|\mathbf{v}\| = \sqrt{3^2 + 4^2} = 5, \qquad \mathbf{u} = \left\langle \frac{3}{5}, \frac{4}{5} \right\rangle$$

Periksa: $\|\mathbf{u}\| = \sqrt{\tfrac{9}{25} + \tfrac{16}{25}} = 1$, dan gradien keduanya sama, yaitu $\tfrac{4}{3}$.

Secara umum, vektor satuan yang searah dengan $\mathbf{v}$ adalah

$$\hat{\mathbf{v}} = \frac{\mathbf{v}}{\|\mathbf{v}\|}$$

#### Vektor Satuan Baku

Vektor $\mathbf{i} = \langle 1, 0 \rangle$ (arah sumbu-$x$) dan $\mathbf{j} = \langle 0, 1 \rangle$ (arah sumbu-$y$) disebut **vektor satuan baku**.

**Rumus 4.3:** vektor $\mathbf{v} = \langle v_1, v_2 \rangle$ dapat dinyatakan sebagai $\mathbf{v} = v_1\mathbf{i} + v_2\mathbf{j}$.

#### Contoh 4.7

Diberikan $\mathbf{u} = \langle 3, -2 \rangle$ dan $\mathbf{v} = \langle -2, 0 \rangle$. Nyatakan $\mathbf{u}$, $\mathbf{v}$, dan $3\mathbf{u} + 2\mathbf{v}$ dalam $\mathbf{i}$ dan $\mathbf{j}$.

$$\mathbf{u} = 3\mathbf{i} - 2\mathbf{j}, \qquad \mathbf{v} = -2\mathbf{i}$$

$$3\mathbf{u} + 2\mathbf{v} = 9\mathbf{i} - 6\mathbf{j} - 4\mathbf{i} = 5\mathbf{i} - 6\mathbf{j}$$

#### Vektor Posisi

**Vektor posisi** adalah vektor yang pangkalnya di titik asal.

## (C) Operasi Vektor

### Penjumlahan, Pengurangan, dan Perkalian Skalar

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab A.2 Operasi-Operasi Vektor, hlm. 166–172.*

#### Contoh 4.2: Menyeberangi Sungai

Kecepatan arus sungai 1 m/s. Perahu diarahkan tegak lurus terhadap sungai dengan kecepatan 2 m/s. Jika arus digambarkan sebagai $\mathbf{u} = \langle 1, 0 \rangle$ dan kecepatan perahu sebagai $\mathbf{v} = \langle 0, 2 \rangle$, gerak perahu sebenarnya adalah

$$\mathbf{u} + \mathbf{v} = \langle 1, 2 \rangle, \qquad \|\mathbf{u} + \mathbf{v}\| = \sqrt{1^2 + 2^2} = \sqrt{5} \text{ m/s}$$

#### Definisi 4.2 Penjumlahan Vektor dan Perkalian Skalar

Misalkan $c$ skalar, $\mathbf{u} = \langle u_1, u_2 \rangle$, dan $\mathbf{v} = \langle v_1, v_2 \rangle$.

- Penjumlahan: $\mathbf{u} + \mathbf{v} = \langle u_1 + v_1,\; u_2 + v_2 \rangle$
- Perkalian skalar: $c\mathbf{v} = \langle cv_1,\; cv_2 \rangle$
- Negatif (lawan) dari $\mathbf{v}$: $-\mathbf{v} = \langle -v_1,\; -v_2 \rangle$
- Selisih: $\mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v}) = \langle u_1 - v_1,\; u_2 - v_2 \rangle$

#### Contoh 4.3

Misalkan $\mathbf{u} = \langle 32, -12 \rangle$ dan $\mathbf{v} = \langle -7, 18 \rangle$. Tentukan $2\mathbf{v}$, $\mathbf{u} + 2\mathbf{v}$, dan $\|\mathbf{u} + 2\mathbf{v}\|$.

**Alternatif penyelesaian:**

$$2\mathbf{v} = \langle 2(-7),\; 2(18) \rangle = \langle -14, 36 \rangle$$

$$\mathbf{u} + 2\mathbf{v} = \langle 32 + (-14),\; -12 + 36 \rangle = \langle 18, 24 \rangle$$

$$\|\mathbf{u} + 2\mathbf{v}\| = \sqrt{18^2 + 24^2} = 30$$

#### Makna Geometris

- **Penjumlahan:** titik pangkal satu vektor diimpitkan dengan titik ujung vektor lainnya. Vektor $\mathbf{u} + \mathbf{v}$ merupakan **diagonal jajargenjang** yang bersisi $\mathbf{u}$ dan $\mathbf{v}$.
- **Perkalian skalar:** vektor $c\mathbf{v}$ panjangnya $|c|$ kali panjang $\mathbf{v}$. Jika $c > 0$, $c\mathbf{v}$ searah dengan $\mathbf{v}$; jika $c < 0$, arahnya berlawanan.
- **Pengurangan:** $\mathbf{u} - \mathbf{v}$ adalah $\mathbf{u}$ ditambah lawan dari $\mathbf{v}$.

#### Sifat 4.1 Operasi Vektor

Misalkan $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ vektor-vektor pada bidang serta $c$ dan $d$ skalar.

- $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ (komutatif)
- $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ (asosiatif)
- $\mathbf{v} + \mathbf{0} = \mathbf{v}$ (identitas penjumlahan)
- $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$ (invers penjumlahan)
- $c(d\mathbf{v}) = (cd)\mathbf{v}$
- $(c + d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$ (distributif)
- $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ (distributif)
- $1(\mathbf{v}) = \mathbf{v}$ dan $0(\mathbf{v}) = \mathbf{0}$

#### Contoh 4.4

Untuk sembarang vektor $\mathbf{v}$, tunjukkan bahwa $3\mathbf{v} + (-3)\mathbf{v} = \mathbf{0}$.

**Alternatif penyelesaian:** dengan sifat distributif dan perkalian dengan skalar nol, $3\mathbf{v} + (-3)\mathbf{v} = (3 + (-3))\mathbf{v} = 0(\mathbf{v}) = \mathbf{0}$.

#### Contoh 4.5 dan Sifat 4.2

Jika $\mathbf{v} = \langle 8, -15 \rangle$, tentukan $|-3|\,\|\mathbf{v}\|$, $-3\mathbf{v}$, dan $\|-3\mathbf{v}\|$.

$$\|\mathbf{v}\| = \sqrt{8^2 + (-15)^2} = 17, \qquad |-3|\,\|\mathbf{v}\| = 3 \cdot 17 = 51$$

$$-3\mathbf{v} = \langle -24, 45 \rangle, \qquad \|-3\mathbf{v}\| = \sqrt{576 + 2.025} = \sqrt{2.601} = 51$$

**Sifat 4.2:** jika $\mathbf{v}$ vektor dan $c$ skalar, maka $|c|\,\|\mathbf{v}\| = \|c\mathbf{v}\|$.

## (D) Hasil Kali Titik

### Pengertian Hasil Kali Titik

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab B.1 Pengertian Hasil Kali Titik, hlm. 178–183.*

Penjumlahan, pengurangan, dan perkalian skalar menghasilkan vektor baru. **Hasil kali titik** adalah operasi pada vektor yang menghasilkan bilangan real (skalar), sehingga sering disebut juga hasil kali skalar. Konsep ini dipakai, misalnya, untuk memodelkan gaya sapi pada alat bajak dalam tradisi Pacu Jawi.

#### Definisi 4.3 Hasil Kali Titik

Jika $\mathbf{u} = \langle u_1, u_2 \rangle$ dan $\mathbf{v} = \langle v_1, v_2 \rangle$ dua vektor pada bidang, maka

$$\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2$$

#### Contoh 4.8

1. $\langle 2, 5 \rangle \cdot \langle -3, 3 \rangle = 2(-3) + 5(3) = -6 + 15 = 9$
2. $(2\mathbf{i} - \mathbf{j}) \cdot (3\mathbf{i} + 6\mathbf{j}) = 2(3) + (-1)(6) = 6 - 6 = 0$

#### Sifat 4.3 Sifat-sifat Hasil Kali Titik

Misalkan $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ vektor dan $c$ skalar.

- $\mathbf{v} \cdot \mathbf{v} = \|\mathbf{v}\|^2$
- komutatif: $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$
- distributif: $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$
- $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \cdot (c\mathbf{v})$
- $\mathbf{0} \cdot \mathbf{v} = 0$

### Sudut antara Dua Vektor

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab B.2 Sudut antara Dua Vektor, hlm. 184–186.*

Dengan Aturan Kosinus pada segitiga yang dibentuk oleh $\mathbf{u}$, $\mathbf{v}$, dan $\mathbf{u} - \mathbf{v}$, yaitu $\|\mathbf{u} - \mathbf{v}\|^2 = \|\mathbf{u}\|^2 + \|\mathbf{v}\|^2 - 2\|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta$, serta sifat hasil kali titik, diperoleh rumus berikut.

#### Rumus 4.4 Sudut antara Dua Vektor

Jika $\theta$ sudut di antara vektor-vektor tak nol $\mathbf{u}$ dan $\mathbf{v}$, dengan $0 \le \theta \le \pi$, maka

$$\cos\theta = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|\,\|\mathbf{v}\|}$$

- $\theta = 0$: $\cos\theta = 1$ (searah)
- $0 < \theta < \frac{\pi}{2}$: $0 < \cos\theta < 1$
- $\theta = \frac{\pi}{2}$: $\cos\theta = 0$ (tegak lurus/ortogonal)
- $\frac{\pi}{2} < \theta < \pi$: $-1 < \cos\theta < 0$
- $\theta = \pi$: $\cos\theta = -1$ (berlawanan arah)

#### Contoh 4.9

Diberikan $\mathbf{a} = \langle 3, 6 \rangle$, $\mathbf{b} = \langle 4, -2 \rangle$, $\mathbf{c} = \langle -2, -1 \rangle$, dan $\mathbf{d} = \langle -4, 2 \rangle$. Tentukan sudut antara (1) $\mathbf{a}$ dan $\mathbf{c}$, (2) $\mathbf{a}$ dan $\mathbf{b}$, (3) $\mathbf{c}$ dan $\mathbf{d}$.

**Alternatif penyelesaian:** $\|\mathbf{a}\| = 3\sqrt{5}$, $\|\mathbf{b}\| = 2\sqrt{5}$, $\|\mathbf{c}\| = \sqrt{5}$, $\|\mathbf{d}\| = 2\sqrt{5}$.

1. $\cos\theta = \dfrac{3(-2) + 6(-1)}{3\sqrt{5} \cdot \sqrt{5}} = \dfrac{-12}{15} = -\dfrac{4}{5}$, sehingga $\theta = \arccos\left(-\tfrac{4}{5}\right) \approx 2{,}5$ radian atau $143{,}13^\circ$.
2. $\cos\theta = \dfrac{3(4) + 6(-2)}{3\sqrt{5} \cdot 2\sqrt{5}} = \dfrac{0}{30} = 0$, sehingga $\theta = \dfrac{\pi}{2}$ atau $90^\circ$. Vektor $\mathbf{a}$ dan $\mathbf{b}$ saling tegak lurus (ortogonal).
3. $\cos\theta = \dfrac{(-2)(-4) + (-1)(2)}{\sqrt{5} \cdot 2\sqrt{5}} = \dfrac{6}{10} = \dfrac{3}{5}$, sehingga $\theta = \arccos\tfrac{3}{5} \approx 0{,}93$ radian atau $53{,}13^\circ$.

Dari Rumus 4.4 diperoleh pula $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta$ (Rumus 4.5).

### Proyeksi Vektor

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab B.3 Proyeksi Vektor, hlm. 187–191.*

#### Rumus 4.6 Proyeksi Skalar dan Proyeksi Vektor

Misalkan $\mathbf{u}$ dan $\mathbf{v}$ vektor-vektor bukan nol.

- Proyeksi skalar $\mathbf{v}$ ke $\mathbf{u}$: $\quad \text{komp}_{\mathbf{u}}\mathbf{v} = \dfrac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|}$
- Proyeksi vektor $\mathbf{v}$ ke $\mathbf{u}$: $\quad \text{proy}_{\mathbf{u}}\mathbf{v} = \left(\dfrac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|^2}\right)\mathbf{u}$

Proyeksi vektor diperoleh dengan mengalikan proyeksi skalar dengan vektor satuan $\dfrac{\mathbf{u}}{\|\mathbf{u}\|}$.

#### Contoh 4.13

Diberikan $\mathbf{a} = -2\mathbf{i} + 6\mathbf{j}$ dan $\mathbf{b} = 2\mathbf{i} - \mathbf{j}$. Tentukan proyeksi skalar dan proyeksi vektor $\mathbf{a}$ ke $\mathbf{b}$.

$$\|\mathbf{b}\| = \sqrt{2^2 + (-1)^2} = \sqrt{5}, \qquad \mathbf{a} \cdot \mathbf{b} = (-2)(2) + 6(-1) = -10$$

$$\text{komp}_{\mathbf{b}}\mathbf{a} = \frac{-10}{\sqrt{5}} = -2\sqrt{5}, \qquad \text{proy}_{\mathbf{b}}\mathbf{a} = \frac{-10}{5}\langle 2, -1 \rangle = \langle -4, 2 \rangle$$

#### Contoh 4.14 dan 4.15: Gaya dan Usaha

Kereta mainan ditarik dengan gaya $\|\mathbf{F}\| = 6$ N yang membentuk sudut $\frac{\pi}{6}$ terhadap garis horizontal.

$$\|\mathbf{F}_x\| = 6\cos\frac{\pi}{6} = 3\sqrt{3}, \qquad \|\mathbf{F}_y\| = 6\sin\frac{\pi}{6} = 3, \qquad \mathbf{F} = \langle 3\sqrt{3}, 3 \rangle$$

Jika kereta berpindah horizontal sejauh 10 meter, usaha yang dilakukan gaya tersebut:

$$W = \|\mathbf{F}_x\| \times 10 = 3\sqrt{3} \times 10 = 30\sqrt{3} \text{ J}$$

(J = Joule, setara dengan N·m.)

## (E) Pembuktian Geometris

### Pembuktian Geometris dengan Vektor

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 4 Vektor, subbab C Pembuktian Geometris, hlm. 192–197.*

#### Contoh 4.16: Segitiga

Diberikan segitiga $PQR$, dengan $S$ titik tengah $QR$. Buktikan bahwa $\overrightarrow{QS} = \tfrac{1}{2}\left(\overrightarrow{PR} - \overrightarrow{PQ}\right)$.

**Bukti:** karena $S$ titik tengah $QR$, $\overrightarrow{QS} = \tfrac{1}{2}\overrightarrow{QR}$. Dari segitiga $PQR$, $\overrightarrow{QR} = \overrightarrow{PR} - \overrightarrow{PQ}$. Jadi, $\overrightarrow{QS} = \tfrac{1}{2}\left(\overrightarrow{PR} - \overrightarrow{PQ}\right)$.

#### Contoh 4.17: Jajargenjang

Buktikan bahwa kedua diagonal jajargenjang saling membagi dua sama panjang.

**Bukti:** misalkan jajargenjang $ABCD$, $E$ titik tengah $AC$, dan $F$ titik tengah $BD$. Cukup dibuktikan $\overrightarrow{AE} = \overrightarrow{AF}$.

$$\overrightarrow{AE} = \tfrac{1}{2}\overrightarrow{AC} = \tfrac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{AD}\right)$$

$$\overrightarrow{AF} = \overrightarrow{AB} + \tfrac{1}{2}\overrightarrow{BD} = \overrightarrow{AB} + \tfrac{1}{2}\left(\overrightarrow{AD} - \overrightarrow{AB}\right) = \tfrac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{AD}\right)$$

Karena $\overrightarrow{AE} = \overrightarrow{AF}$, titik $E$ dan $F$ berimpit, sehingga kedua diagonal saling membagi dua sama panjang.
