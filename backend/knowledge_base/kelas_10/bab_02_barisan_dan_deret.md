---
judul: "Barisan dan Deret"
kelas: "10"
fase: "E"
bab: "2"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (8 bagian)"
---

# Bab 2 — Barisan dan Deret

> Kelas 10 · Fase E · Matematika Umum

## Daftar Isi

- (A) Barisan
  - Pola Barisan
  - Barisan Aritmetika
  - Barisan Geometri
- (B) Deret
  - Deret Aritmetika
  - Deret Geometri
  - Deret Geometri Tak Hingga
- (C) Bunga
  - Bunga Tunggal
  - Bunga Majemuk

## (A) Barisan

### Pola Barisan

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab V Barisan, subbab 5.1 Menemukan Pola Barisan, hlm. 182–187.*

Jika suku-suku sebuah barisan bilangan dilambangkan dengan $U$, bilangan pertama ditulis $U_1$, bilangan kedua $U_2$, dan seterusnya. Bentuk umum barisan bilangan adalah

$$U_1, U_2, U_3, \ldots, U_n, \ldots$$

dengan $U_n = f(n)$ yang disebut **rumus umum suku ke-$n$**.

#### Masalah 5.1: Susunan Kelereng

Kelereng dikelompokkan sehingga setiap kelompok tersusun berbentuk persegi. Banyak kelereng pada kelompok $K_1, K_2, K_3, K_4, K_5$ adalah 1, 4, 9, 16, 25.

| Kelompok | Banyak kelereng | Pola |
|---|---|---|
| $K_1$ | 1 | $1 \times 1$ |
| $K_2$ | 4 | $2 \times 2$ |
| $K_3$ | 9 | $3 \times 3$ |
| $K_4$ | 16 | $4 \times 4$ |
| $K_5$ | 25 | $5 \times 5$ |
| $K_n$ | $n^2$ | $n \times n$ |

Dengan pola ini, kelompok ke-6 berisi 36 kelereng dan kelompok ke-15 berisi $15 \times 15 = 225$ kelereng. Menemukan pola barisan lebih efisien daripada menyusun ulang kelerengnya.

#### Contoh 5.1

Perhatikan barisan huruf ABBCCCDDDDABBCCCDDDDABBCCCDDDD… Tentukan huruf pada urutan $2^5 \times 3^3$.

**Alternatif penyelesaian:** kelompok huruf ABBCCCDDDD (10 huruf) berulang setiap kelipatan 10. Urutan $2^5 \times 3^3 = 32 \times 27 = 864 = 86 \times 10 + 4$, sehingga kelompok huruf berulang 86 kali dan huruf ke-864 sama dengan huruf ke-4, yaitu **C**.

### Barisan Aritmetika

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab V Barisan, subbab 5.2 Menemukan Konsep Barisan Aritmetika, hlm. 191–197.*

#### Masalah: Tumpukan Jeruk

Jeruk sering ditumpuk membentuk piramida. Jika susunannya disederhanakan menjadi susunan segitiga, banyak bulatan pada setiap kelompok adalah 1, 3, 6, 10, 15, …

Selisih dua bilangan yang berdekatan membentuk barisan baru:

$$1 \xrightarrow{+2} 3 \xrightarrow{+3} 6 \xrightarrow{+4} 10 \xrightarrow{+5} 15$$

Barisan selisihnya, yaitu 2, 3, 4, 5, …, memiliki beda tetap 1. Barisan 2, 3, 4, 5, … disebut **barisan aritmetika**, sedangkan barisan 1, 3, 6, 10, 15, … disebut **barisan aritmetika tingkat dua**.

#### Masalah: Tinggi Tangga

Jika tinggi satu anak tangga 20 cm, berapa tinggi tangga dengan 15 anak tangga?

**Penyelesaian:**

$$u_1 = 20,\ u_2 = 20 + 20 = 40,\ u_3 = 60,\ u_4 = 80,\ u_5 = 100,\ \ldots$$

$$u_n = n \times 20 = 20n \Rightarrow u_{15} = 15 \times 20 = 300$$

Jadi, tinggi tangga sampai anak tangga ke-15 adalah 300 cm.

#### Masalah: Perajin Batik

Lani, perajin batik di Gunung Kidul, menyelesaikan 6 helai kain batik pada bulan pertama, 9 helai pada bulan kedua, dan 12 helai pada bulan ketiga. Setiap bulan jumlahnya 3 helai lebih banyak dari bulan sebelumnya. Pada bulan ke berapa Lani menyelesaikan 63 helai kain batik?

**Penyelesaian:**

- Bulan I: $u_1 = a = 6$
- Bulan II: $u_2 = 6 + 1 \cdot 3 = 9$
- Bulan III: $u_3 = 6 + 2 \cdot 3 = 12$
- Bulan IV: $u_4 = 6 + 3 \cdot 3 = 15$
- Bulan ke-$n$: $u_n = 6 + (n - 1) \cdot 3$

$$63 = 6 + (n - 1) \cdot 3 \Rightarrow 63 = 3 + 3n \Rightarrow n = 20$$

Jadi, pada bulan ke-20 Lani menyelesaikan 63 helai kain batik.

#### Definisi Barisan Aritmetika

**Barisan aritmetika** adalah barisan bilangan yang beda setiap dua suku berurutannya sama. Beda, dinotasikan $b$, memenuhi:

$$b = u_2 - u_1 = u_3 - u_2 = u_4 - u_3 = \cdots = u_n - u_{n-1}$$

dengan $n$ bilangan asli sebagai nomor suku dan $u_n$ suku ke-$n$.

Karena setiap dua suku berurutan memiliki beda yang sama:

$$u_1 = a,\quad u_2 = u_1 + b,\quad u_3 = u_1 + 2b,\quad u_4 = u_1 + 3b,\quad \ldots,\quad u_n = u_1 + (n - 1)b$$

#### Sifat: Suku ke-n Barisan Aritmetika

Jika $u_1, u_2, u_3, \ldots, u_n$ suku-suku barisan aritmetika, maka suku ke-$n$-nya:

$$u_n = a + (n - 1)b$$

dengan $a = u_1$ suku pertama dan $b$ beda barisan.

#### Masalah: Tabungan Siti

Siti menabung sisa uang jajannya setiap hari. Selama enam hari, uang yang ditabung mengikuti barisan aritmetika dengan $a = 500$ dan $b = 500$. Berapa uang yang ditabung pada hari ke-6?

**Penyelesaian:**

$$u_6 = a + 5b = 500 + 5(500) = 3.000$$

Jadi, tabungan Siti pada hari ke-6 adalah Rp3.000,00.

#### Contoh

1. Tentukan:
   a. suku ke-15 dari barisan 1, 2, 3, 4, 5, 6, …
   b. suku ke-18 dari barisan 4, 1, −2, −5, −8, …
2. Suku ke-4 barisan aritmetika adalah 19 dan suku ke-7 adalah 31. Tentukan suku ke-50.

**Penyelesaian:**

1. a. $a = 1$, $b = 1$, sehingga $u_{15} = 1 + (15 - 1) \cdot 1 = 15$.

   b. $a = 4$, $b = 1 - 4 = -3$, sehingga $u_{18} = 4 + (18 - 1)(-3) = -47$.

2. Dari $u_n = a + (n - 1)b$:

$$u_4 = a + 3b = 19, \qquad u_7 = a + 6b = 31$$

Kurangkan kedua persamaan: $-3b = -12$, sehingga $b = 4$. Substitusi: $a + 3(4) = 19$, sehingga $a = 7$.

$$u_{50} = a + 49b = 7 + 49(4) = 203$$

### Barisan Geometri

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab V Barisan, subbab 5.3 Menemukan Konsep Barisan Geometri, hlm. 198–203.*

#### Contoh: Menemukan Pola

Perhatikan barisan 2, 4, 8, 16, 32, … Setiap suku diperoleh dengan mengalikan suku sebelumnya dengan 2:

$$\frac{u_2}{u_1} = \frac{u_3}{u_2} = \cdots = \frac{u_n}{u_{n-1}} = 2$$

Jika perbandingan dua suku berurutan dimisalkan $r$ dan suku pertama $a$, maka:

| Suku | Nilai | Bentuk |
| --- | --- | --- |
| $u_1$ | 2 | $a = ar^{1-1}$ |
| $u_2$ | $2 \times 2 = 4$ | $a \times r = ar^{2-1}$ |
| $u_3$ | $2 \times 2 \times 2 = 8$ | $a \times r \times r = ar^{3-1}$ |
| $u_4$ | 16 | $ar^{4-1}$ |
| $u_5$ | 32 | $ar^{5-1}$ |
| $u_n$ | … | $ar^{n-1}$ |

Jadi $u_n = ar^{n-1}$.

#### Contoh: Rasio Pecahan

Perhatikan barisan $1, \dfrac{1}{2}, \dfrac{1}{4}, \dfrac{1}{8}, \dfrac{1}{16}, \ldots$ Setiap suku diperoleh dengan mengalikan suku sebelumnya dengan $\dfrac{1}{2}$, sehingga $a = 1$ dan $r = \dfrac{1}{2}$:

$$u_2 = u_1 \cdot r = a r, \qquad u_3 = u_2 \cdot r = a r^2, \qquad u_4 = a r^3, \qquad \ldots$$

$$u_n = u_{n-1} \cdot r = ar^{n-2} \cdot r = ar^{n-1}$$

#### Contoh: Melipat Kertas

Seorang anak melipat selembar kertas menjadi dua bagian sama besar, lalu terus melipat dua kertas yang sudah terlipat. Setiap kali dibuka, banyak bagian kertas membentuk barisan:

$$1,\ 2,\ 4,\ \ldots$$

Setiap dua suku berurutan memiliki perbandingan yang sama, yaitu 2. Barisan seperti ini disebut barisan geometri.

#### Definisi Barisan Geometri

**Barisan geometri** adalah barisan bilangan yang nilai pembanding (rasio) antara dua suku berurutannya selalu tetap. Rasio, dinotasikan $r$, adalah perbandingan dua suku berdekatan:

$$r = \frac{u_2}{u_1} = \frac{u_3}{u_2} = \frac{u_4}{u_3} = \cdots = \frac{u_n}{u_{n-1}}$$

#### Sifat: Suku ke-n Barisan Geometri

Jika $u_1, u_2, u_3, \ldots, u_n$ suku-suku barisan geometri dengan $u_1 = a$ dan rasio $r$, maka suku ke-$n$-nya:

$$u_n = ar^{n-1}, \quad n \text{ bilangan asli}$$

## (B) Deret

### Deret Aritmetika

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 2 Barisan dan Deret, subbab B.1 Deret Aritmetika, hlm. 50–55.*

#### Eksplorasi 2.5: Jabat Tangan

Setiap pasangan dalam kelompok berjabat tangan tepat satu kali. Jika ada 2 orang terjadi 1 jabat tangan; 3 orang: $1 + 2$; 4 orang: $1 + 2 + 3$; 5 orang: $1 + 2 + 3 + 4$. Uraian banyak jabat tangan ini adalah penjumlahan suku-suku barisan bilangan.

**Deret bilangan** adalah jumlah suku-suku penyusun barisan bilangan. Deret bilangan terdiri atas deret aritmetika dan deret geometri.

#### Tahukah Kalian? Cara Gauss

Carl Friedrich Gauss (1777–1855), saat berusia 10 tahun, menjumlahkan $1 + 2 + 3 + \cdots + 100$ dengan mengelompokkan suku-suku yang jumlahnya sama:

$$1 + 2 + \cdots + 99 + 100 = (1 + 100) + (2 + 99) + \cdots + (50 + 51) = 50 \times 101 = 5.050$$

#### Rumus Jumlah Deret Aritmetika

**Deret aritmetika** adalah deret yang diperoleh dari menjumlahkan suku-suku barisan aritmetika: $U_1 + U_2 + U_3 + \cdots + U_n$.

Tulis $S_n$ dalam urutan maju dan mundur, lalu jumlahkan:

$$S_n = a + (a + b) + \cdots + (a + (n - 1)b)$$

$$S_n = (a + (n - 1)b) + (a + (n - 2)b) + \cdots + a$$

$$2S_n = n \times [2a + (n - 1)b] = n\,(U_1 + U_n)$$

Jadi, jumlah $n$ suku pertama deret aritmetika adalah

$$S_n = \frac{n}{2}\,(a + U_n) \quad \text{atau} \quad S_n = \frac{n}{2}\,[2a + (n - 1)b]$$

dengan $S_n$ = jumlah $n$ suku pertama, $a$ = suku pertama, $b$ = beda, dan $n$ = banyak suku.

#### Contoh 5

Diketahui deret $13 + 16 + 19 + 22 + \cdots$. Tentukan jumlah 30 suku pertama.

**Alternatif penyelesaian:** $a = 13$, $b = 3$, $n = 30$.

$$S_{30} = \frac{30}{2}\,[2(13) + (30 - 1)3] = 15\,(26 + 87) = 15 \cdot 113 = 1.695$$

### Deret Geometri

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 2 Barisan dan Deret, subbab B.2 Deret Geometri, hlm. 56–59.*

#### Eksplorasi 2.6: Jumlah Pasien Terinfeksi

| Bulan | Januari | Februari | Maret | April | Mei |
|---|---|---|---|---|---|
| Jumlah pasien | 4 | 12 | 36 | 108 | 324 |

Jumlah pasien membentuk barisan geometri dengan $a = 4$ dan $r = 3$. Jumlah pasien tiga bulan pertama adalah $S_3 = 4 + 12 + 36 = 52$, yang sama dengan $\dfrac{4(3^3 - 1)}{3 - 1} = 52$.

#### Rumus Jumlah Deret Geometri

$$S_n = \frac{a\,(r^n - 1)}{r - 1} \quad \text{atau} \quad S_n = \frac{a\,(1 - r^n)}{1 - r}, \quad r \neq 1$$

dengan $S_n$ = jumlah $n$ suku pertama, $a$ = suku pertama, $r$ = rasio, dan $n$ = banyak suku.

#### Contoh 6

Hasil produksi sebuah perusahaan sepeda pada tahun 2020 meningkat setiap bulan dan membentuk barisan geometri. Produksi bulan Januari 120 unit, dan pada bulan April mencapai 3.240 unit. Berapa total produksi hingga bulan Mei?

**Alternatif penyelesaian:** $U_1 = a = 120$ dan $U_4 = ar^3 = 3.240$.

$$r^3 = \frac{3.240}{120} = 27 \Rightarrow r = 3$$

$$S_5 = \frac{120\,(3^5 - 1)}{3 - 1} = \frac{120 \times 242}{2} = 14.520$$

Jadi, total produksi sepeda hingga bulan Mei adalah 14.520 unit.

### Deret Geometri Tak Hingga

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 2 Barisan dan Deret, subbab B.3 Deret Geometri Tak Hingga, hlm. 60–62; dan Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 1, subbab B.3, hlm. 28–29.*

#### Eksplorasi 2.7: Memotong Kertas

Selembar kertas dilipat dan digunting menjadi dua bagian sama besar. Salah satu potongan dilipat dan digunting lagi (besarnya $\tfrac{1}{4}$ kertas awal), dan seterusnya. Potongan-potongan itu makin kecil, dan jika disusun kembali menyerupai kertas utuh:

$$\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$$

Deret geometri seperti ini hasilnya mendekati suatu nilai tertentu. Untuk $|r| < 1$, makin besar $n$ maka $r^n$ makin mendekati 0.

#### Jenis Deret Geometri Tak Hingga

**Deret geometri tak hingga** adalah deret geometri yang banyak sukunya tak terhingga.

- **Konvergen**: $|r| < 1$; jumlah deretnya menuju suatu nilai tertentu. Contoh: $\dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \cdots$
- **Divergen**: $|r| > 1$; $S_n$ makin lama makin besar tanpa batas.

Untuk deret konvergen:

$$S = a + ar + ar^2 + \cdots$$

$$rS = ar + ar^2 + ar^3 + \cdots$$

$$(1 - r)S = a \Rightarrow S_\infty = \frac{a}{1 - r}$$

#### Contoh 1.8 (Buku Kelas XII)

Bola tenis dijatuhkan dari ketinggian 5 meter. Setiap memantul, bola mencapai $\tfrac{3}{5}$ dari ketinggian sebelumnya. Tentukan panjang lintasan sampai bola berhenti.

**Alternatif penyelesaian:** lintasan pertama 5 m (jatuh). Pantulan pertama $\tfrac{3}{5} \times 5 = 3$ m, pantulan kedua $\tfrac{3}{5} \times 3 = 1{,}8$ m, dan seterusnya. Setiap pantulan dilalui dua kali (naik dan turun), dengan $a = 3$ dan $r = \tfrac{3}{5}$:

$$2S_\infty = 2 \times \frac{3}{1 - \frac{3}{5}} = 2 \times \frac{3}{\frac{2}{5}} = 2 \times \frac{15}{2} = 15$$

Total panjang lintasan $= 5 + 15 = 20$ meter.

## (C) Bunga

### Bunga Tunggal

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas X (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2023, Bab 2 Barisan dan Deret, subbab C Bunga, hlm. 64–66; dan Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 1, subbab C Bunga Tunggal, hlm. 30–32.*

Menurut Otoritas Jasa Keuangan, **bunga simpanan** adalah balas jasa dari bank kepada nasabah atas jasa nasabah menyimpan uangnya di bank, sedangkan **bunga pinjaman** adalah balas jasa yang ditetapkan bank kepada peminjam. Ada dua jenis bunga, yaitu bunga tunggal dan bunga majemuk.

**Bunga tunggal** adalah bunga yang besarnya hanya ditentukan oleh pokok uangnya, berapa pun lamanya uang disimpan.

#### Eksplorasi: Tabungan Angga

Angga menabung Rp1.000.000,00 dengan bunga tunggal 5% per tahun.

| Tahun | Bunga | Nilai uang |
|---|---|---|
| 1 | $5\% \times 1.000.000 = 50.000$ | $1.000.000 + 50.000 = 1.050.000$ |
| 2 | $5\% \times 1.000.000 = 50.000$ | $1.050.000 + 50.000 = 1.100.000$ |
| 3 | $5\% \times 1.000.000 = 50.000$ | $1.100.000 + 50.000 = 1.150.000$ |
| 4 | $5\% \times 1.000.000 = 50.000$ | $1.150.000 + 50.000 = 1.200.000$ |

> Catatan: tabel pada buku Kelas X tertulis "50%"; yang benar 5%, sesuai keterangan soal.

Nilai uang dengan bunga tunggal membentuk **barisan aritmetika** dengan $U_1 = 1.050.000$ dan $b = 50.000$.

#### Rumus Bunga Tunggal

$$B = M \times p\% \times n$$

dengan $B$ = bunga tunggal, $M$ = modal/simpanan awal, $p\%$ = persentase bunga, dan $n$ = periode (tahun).

#### Contoh 1.9 (Buku Kelas XII)

Zaka menyimpan keuntungan Rp2.000.000,00 di koperasi dengan bunga tunggal 5% per tahun. Berapa total uangnya setelah 4 tahun?

**Alternatif penyelesaian:**

$$B = 2.000.000 \times 0{,}05 \times 4 = 400.000$$

$$\text{Total} = M + B = 2.000.000 + 400.000 = 2.400.000$$

Jadi, total uang Zaka setelah 4 tahun adalah Rp2.400.000,00.

### Bunga Majemuk

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab V Barisan, subbab 5.4.3 Bunga Majemuk, hlm. 207–209.*

Pada **bunga tunggal**, bunga dihitung dari modal awal saja. Pada **bunga majemuk**, bunga setiap periode dihitung dari modal ditambah bunga periode sebelumnya, sehingga bunga ikut berbunga.

#### Masalah: Membandingkan Dua Bank

Ovano menerima warisan Rp70.000.000,00 dan ingin menabungnya selama 5 tahun. Bank BCL memberi bunga tunggal 10% per tahun, sedangkan Bank PHP memberi bunga majemuk 9% per tahun.

| Tahun | Saldo Bank BCL (bunga tunggal 10%) | Saldo Bank PHP (bunga majemuk 9%) |
| --- | --- | --- |
| 0 | Rp70.000.000,00 | Rp70.000.000,00 |
| 1 | Rp77.000.000,00 | Rp76.300.000,00 |
| 2 | Rp84.000.000,00 | Rp83.167.000,00 |
| 3 | Rp91.000.000,00 | Rp90.652.030,00 |
| 4 | Rp98.000.000,00 | Rp98.810.712,70 |
| 5 | Rp105.000.000,00 | Rp107.703.676,84 |

Walaupun suku bunga majemuk Bank PHP lebih kecil, hasil investasinya setelah 5 tahun lebih besar.

#### Rumus Bunga Majemuk

Misalkan modal awal $M_0$ diinvestasikan dengan bunga $i$ per periode.

$$M_1 = M_0 + M_0 \cdot i = M_0(1 + i)$$

$$M_2 = M_1(1 + i) = M_0(1 + i)^2$$

$$M_3 = M_2(1 + i) = M_0(1 + i)^3$$

Secara umum, besar modal pada periode ke-$n$:

$$M_n = M_0(1 + i)^n$$

#### Contoh

Yusuf menabung Rp1.000.000,00 di bank dengan bunga majemuk 10% per tahun. Berapa lama Yusuf harus menabung agar uangnya menjadi Rp1.464.100,00?

**Penyelesaian:**

Diketahui $M_0 = 1.000.000$, $i = 0{,}1$, dan $M_n = 1.464.100$.

| Akhir tahun | Bunga (10% × total) | Total uang | Pola |
| --- | --- | --- | --- |
| 0 | 0 | Rp1.000.000 | $1.000.000(1{,}1)^0$ |
| 1 | Rp100.000 | Rp1.100.000 | $1.000.000(1{,}1)^1$ |
| 2 | Rp110.000 | Rp1.210.000 | $1.000.000(1{,}1)^2$ |
| 3 | Rp121.000 | Rp1.331.000 | $1.000.000(1{,}1)^3$ |
| 4 | Rp133.100 | Rp1.464.100 | $1.000.000(1{,}1)^4$ |

Jadi, Yusuf harus menabung selama 4 tahun.
