---
judul: "Transformasi Geometri"
kelas: "11"
fase: "F"
bab: "7"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (4 bagian)"
---

# Bab 7 — Transformasi Geometri

> Kelas 11 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- Transformasi pada Bidang Kartesius
- Kaitan Matriks dengan Transformasi
- Komposisi Transformasi dengan Menggunakan Matriks
- Dilatasi Lingkaran dan Luas Bayangan

## Transformasi pada Bidang Kartesius

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab IV Transformasi, subbab 4.1–4.4 (Translasi, Refleksi, Rotasi, Dilatasi), Sifat 4.1–4.4, Contoh 4.1–4.4 dan 4.13–4.16, hlm. 126–161.*

### Translasi (Pergeseran)

**Sifat:** bangun yang digeser (translasi) tidak mengalami perubahan bentuk dan ukuran.

Titik $A(x, y)$ ditranslasi oleh $T(a, b)$ menghasilkan bayangan $A'(x', y')$:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} x \\ y \end{pmatrix}$$

**Contoh 1.** Titik $A(2, 3)$ ditranslasikan dengan $T(-3, 4)$. Tentukan bayangan $A$.

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} -3 \\ 4 \end{pmatrix} + \begin{pmatrix} 2 \\ 3 \end{pmatrix} = \begin{pmatrix} -1 \\ 7 \end{pmatrix}$$

Bayangan $A$ adalah $A'(-1, 7)$.

**Contoh 2.** Garis $k: 2x - 3y + 4 = 0$ ditranslasi dengan $T(-1, -3)$. Tentukan bayangan garis $k$.

Misalkan $A(x, y)$ pada garis $k$. Maka $x' = x - 1 \Leftrightarrow x = x' + 1$ dan $y' = y - 3 \Leftrightarrow y = y' + 3$. Substitusi ke persamaan garis:

$$2(x' + 1) - 3(y' + 3) + 4 = 0 \Rightarrow 2x' - 3y' - 3 = 0$$

Bayangan garis $k$ adalah $2x - 3y - 3 = 0$.

### Refleksi (Pencerminan)

**Sifat:** bangun yang dicerminkan dengan cermin datar tidak mengalami perubahan bentuk dan ukuran. Jarak bangun ke cermin sama dengan jarak bayangan ke cermin.

| Pencerminan terhadap | Bayangan $A(x, y)$ | Matriks pencerminan |
| --- | --- | --- |
| Titik $O(0, 0)$ | $A'(-x, -y)$ | $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| Sumbu $x$ | $A'(x, -y)$ | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| Sumbu $y$ | $A'(-x, y)$ | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| Garis $y = x$ | $A'(y, x)$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| Garis $y = -x$ | $A'(-y, -x)$ | $\begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$ |

**Contoh 3.** Titik $A(1, 4)$ dicerminkan terhadap titik asal $O(0, 0)$. Tentukan bayangan $A$.

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 1 \\ 4 \end{pmatrix} = \begin{pmatrix} -1 \\ -4 \end{pmatrix}$$

Bayangan $A$ adalah $A'(-1, -4)$.

**Contoh 4.** Garis $-2x + 4y - 1 = 0$ dicerminkan terhadap titik asal $O(0, 0)$. Tentukan persamaan bayangannya.

Dari $x' = -x \Leftrightarrow x = -x'$ dan $y' = -y \Leftrightarrow y = -y'$, substitusi ke persamaan garis:

$$-2(-x') + 4(-y') - 1 = 0 \Rightarrow 2x' - 4y' - 1 = 0$$

Bayangannya adalah garis $2x - 4y - 1 = 0$.

### Rotasi (Perputaran)

**Sifat:** bangun yang diputar (rotasi) tidak mengalami perubahan bentuk dan ukuran.

Titik $A(x, y)$ diputar dengan pusat $P(p, q)$ sebesar sudut $\alpha$ (berlawanan arah jarum jam) menghasilkan $A'(x', y')$:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix}\begin{pmatrix} x - p \\ y - q \end{pmatrix} + \begin{pmatrix} p \\ q \end{pmatrix}$$

Sudut $\alpha$ dihitung berlawanan arah jarum jam; jika searah jarum jam, sudutnya $-\alpha$.

**Contoh 5.** Titik $A(-2, 3)$ dirotasi dengan pusat $O(0, 0)$ sebesar $90^\circ$ berlawanan arah jarum jam. Tentukan bayangannya.

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos 90^\circ & -\sin 90^\circ \\ \sin 90^\circ & \cos 90^\circ \end{pmatrix}\begin{pmatrix} -2 \\ 3 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} -2 \\ 3 \end{pmatrix} = \begin{pmatrix} -3 \\ -2 \end{pmatrix}$$

Bayangan $A$ adalah $A'(-3, -2)$.

**Contoh 6.** Garis $x - 2y + 3 = 0$ dirotasi dengan pusat $P(1, -1)$ sebesar $180^\circ$ searah jarum jam. Tentukan bayangannya.

Dengan $\alpha = -180^\circ$, $\cos(-180^\circ) = -1$ dan $\sin(-180^\circ) = 0$:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} x - 1 \\ y + 1 \end{pmatrix} + \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} -x + 2 \\ -y - 2 \end{pmatrix}$$

Jadi $x = 2 - x'$ dan $y = -y' - 2$. Substitusi ke persamaan garis:

$$(2 - x') - 2(-y' - 2) + 3 = 0 \Rightarrow -x' + 2y' + 9 = 0$$

Bayangannya adalah garis $x - 2y - 9 = 0$.

### Dilatasi (Perkalian)

**Sifat:** bangun yang didilatasi dengan skala $k$ dapat berubah ukuran tetapi tidak berubah bentuk.

| Nilai $k$ | Ukuran bayangan | Letak terhadap pusat dilatasi |
| --- | --- | --- |
| $k > 1$ | diperbesar | searah |
| $k = 1$ | tetap (tidak berubah letak) | — |
| $0 < k < 1$ | diperkecil | searah |
| $-1 < k < 0$ | diperkecil | berlawanan arah |
| $k = -1$ | tetap | berlawanan arah |
| $k < -1$ | diperbesar | berlawanan arah |

Titik $A(x, y)$ didilatasi dengan pusat $P(p, q)$ dan skala $k$ menghasilkan $A'(x', y')$:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = k\begin{pmatrix} x - p \\ y - q \end{pmatrix} + \begin{pmatrix} p \\ q \end{pmatrix}$$

**Contoh 7.** Titik $A(-2, 3)$ didilatasi dengan pusat $O(0, 0)$ dan skala 3.

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = 3\begin{pmatrix} -2 \\ 3 \end{pmatrix} = \begin{pmatrix} -6 \\ 9 \end{pmatrix}$$

Bayangan $A$ adalah $A'(-6, 9)$.

**Contoh 8.** Garis $2x - 4y + 3 = 0$ didilatasi dengan pusat $P(1, -1)$ dan skala $-2$.

$$x' = -2(x - 1) + 1 = -2x + 3 \Leftrightarrow x = \frac{3 - x'}{2}, \qquad y' = -2(y + 1) - 1 = -2y - 3 \Leftrightarrow y = \frac{-3 - y'}{2}$$

Substitusi ke persamaan garis:

$$2\left(\frac{3 - x'}{2}\right) - 4\left(\frac{-3 - y'}{2}\right) + 3 = 0 \Rightarrow -x' + 2y' + 12 = 0$$

Bayangannya adalah garis $x - 2y - 12 = 0$.

## Kaitan Matriks dengan Transformasi

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab IV Transformasi, subbab 4.2.1 dan 4.3, hlm. 134–155.*

Pencerminan, rotasi, dan dilatasi terhadap titik asal dapat dinyatakan dengan perkalian matriks $2 \times 2$. Matriksnya dapat ditemukan dengan **kesamaan matriks**.

### Menemukan Matriks Pencerminan terhadap Titik O(0, 0)

Pengamatan menunjukkan bahwa titik $A(x, y)$ yang dicerminkan terhadap $O(0, 0)$ berpindah ke $A'(-x, -y)$; misalnya $A(6, 3)$ menjadi $A'(-6, -3)$. Misalkan matriks transformasinya $C = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\begin{pmatrix} -x \\ -y \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}$$

Dengan kesamaan matriks: $-x = ax + by$ memberi $a = -1$, $b = 0$, dan $-y = cx + dy$ memberi $c = 0$, $d = -1$. Jadi matriks pencerminan terhadap $O(0, 0)$ adalah:

$$\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$$

### Menemukan Matriks Rotasi

Titik $A$ dapat ditulis dengan koordinat kutub $A(r\cos\alpha, r\sin\alpha)$. Setelah diputar sebesar $\beta$ dengan pusat $O(0, 0)$, posisinya menjadi $A'(r\cos(\alpha + \beta), r\sin(\alpha + \beta))$. Misalkan matriks rotasinya $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\begin{pmatrix} r\cos(\alpha + \beta) \\ r\sin(\alpha + \beta) \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} r\cos\alpha \\ r\sin\alpha \end{pmatrix}$$

Dengan rumus jumlah sudut, $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$ dan $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$. Dengan menyamakan koefisien diperoleh $a = \cos\beta$, $b = -\sin\beta$, $c = \sin\beta$, $d = \cos\beta$. Jadi matriks rotasi sebesar $\beta$ dengan pusat $O(0, 0)$ adalah:

$$\begin{pmatrix} \cos\beta & -\sin\beta \\ \sin\beta & \cos\beta \end{pmatrix}$$

Untuk pusat rotasi $P(p, q)$, pusat rotasi digeser dulu ke $O(0, 0)$, titik diputar, lalu digeser kembali sejauh pusat rotasi semula.

## Komposisi Transformasi dengan Menggunakan Matriks

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab IV Transformasi, subbab 4.5 Komposisi Transformasi, Masalah 4.6 dan Contoh 4.17, hlm. 162–165.*

Transformasi adalah fungsi, sehingga komposisi transformasi sama dengan komposisi fungsi yang dipelajari di kelas X: fungsi $f$ memetakan anggota himpunan $A$ ke $B$, lalu $g$ melanjutkan pemetaan ke $C$; komposisi $(g \circ f)$ memetakan $A$ langsung ke $C$.

### Komposisi Dua Translasi

Titik $A(x, y)$ ditranslasikan dengan $T_1(a_1, b_1)$, lalu dilanjutkan dengan $T_2(a_2, b_2)$:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix} + \begin{pmatrix} a_1 \\ b_1 \end{pmatrix}, \qquad \begin{pmatrix} x'' \\ y'' \end{pmatrix} = \begin{pmatrix} x' \\ y' \end{pmatrix} + \begin{pmatrix} a_2 \\ b_2 \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix} + \begin{pmatrix} a_1 + a_2 \\ b_1 + b_2 \end{pmatrix}$$

Jadi matriks komposisi translasi adalah jumlah kedua matriks translasi:

$$M_{T_2 \circ T_1} = M_{T_1} + M_{T_2} = \begin{pmatrix} a_1 + a_2 \\ b_1 + b_2 \end{pmatrix}$$

**Contoh.** Titik $A(6, -8)$ ditranslasikan dengan $T_1(-3, 2)$, kemudian dilanjutkan dengan $T_2(-4, -1)$. Tentukan koordinat akhir titik $A$.

$$\begin{pmatrix} x'' \\ y'' \end{pmatrix} = \begin{pmatrix} -4 \\ -1 \end{pmatrix} + \begin{pmatrix} -3 \\ 2 \end{pmatrix} + \begin{pmatrix} 6 \\ -8 \end{pmatrix} = \begin{pmatrix} -1 \\ -7 \end{pmatrix}$$

Posisi akhir titik $A$ adalah $A''(-1, -7)$.

## Dilatasi Lingkaran dan Luas Bayangan

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 5 Transformasi Geometri, subbab A.4 Dilatasi, Contoh 5.8, hlm. 222–223.*

Dilatasi dengan pusat $C(a, b)$ dan faktor skala $k \neq 0$, ditulis $D_{C,k}$, memetakan titik $A(x, y)$ ke $A'(x', y')$ dengan

$$x' = k(x - a) + a, \qquad y' = k(y - b) + b$$

### Contoh 5.8 Mendilatasikan Sebuah Lingkaran

Diberikan lingkaran $L: x^2 + y^2 = r^2$, titik pusat dilatasi $C(a, b)$, dan faktor skala $k \neq 0$. Tentukan peta $L$ oleh $D_{C,k}$ serta perbandingan jari-jari dan luas $L$ dengan petanya $L'$.

**Alternatif penyelesaian:** dari rumus dilatasi,

$$x = \frac{x' - a(1 - k)}{k}, \qquad y = \frac{y' - b(1 - k)}{k}$$

Substitusi ke persamaan $L$ menghasilkan

$$L': \big(x' - a(1 - k)\big)^2 + \big(y' - b(1 - k)\big)^2 = (kr)^2$$

Jadi, lingkaran berpusat $O(0, 0)$ berjari-jari $r$ didilatasikan oleh $D_{C,k}$ menjadi lingkaran berpusat $O'\big(a(1 - k), b(1 - k)\big)$ dengan jari-jari $kr$. Akibatnya:

- perbandingan jari-jari $L$ dan $L'$ adalah $1 : k$;
- perbandingan **luas** $L$ dan **luas** $L'$ adalah $1 : k^2$.

Buku juga mengajak menyelidiki apa yang berubah pada garis $y = mx + c$ dan pada persegi bila didilatasikan dengan pusat $C(a, b)$ dan faktor skala $k$.
