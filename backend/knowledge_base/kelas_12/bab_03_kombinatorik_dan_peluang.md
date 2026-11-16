---
judul: "Kombinatorik dan Peluang"
kelas: "12"
fase: "F"
bab: "3"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (9 bagian)"
---

# Bab 3 — Kombinatorik dan Peluang

> Kelas 12 · Fase F · Matematika Umum

## Daftar Isi

- (A) Kaidah Pencacahan
  - Aturan Pengisian Tempat
  - Permutasi
  - Kombinasi
  - Binomial Newton
- (B) Peluang
  - Peluang Suatu Kejadian
  - Peluang Kejadian Majemuk
  - Peluang Kejadian Majemuk Saling Lepas
  - Peluang Kejadian Majemuk Saling Bebas
  - Peluang Kejadian Majemuk Saling Bebas Bersyarat

## (A) Kaidah Pencacahan

### Aturan Pengisian Tempat

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 3 Kaidah Pencacahan, subbab A Aturan Pengisian Tempat, hlm. 83–90.*

#### Aturan Penjumlahan

Jika terdapat $k$ kejadian yang **saling lepas**, dengan kejadian ke-1 terjadi dalam $n_1$ cara, kejadian ke-2 dalam $n_2$ cara, …, kejadian ke-$k$ dalam $n_k$ cara, maka banyak cara terjadinya seluruh kejadian tersebut adalah

$$n_1 + n_2 + \cdots + n_k$$

Contoh: memilih satu buku berdasarkan 3 jenis, 4 warna, atau 2 ukuran (pengelompokan saling lepas) dapat dilakukan dengan $3 + 4 + 2 = 9$ cara.

**Contoh 3.1.** Zaydan memilih satu bidang lomba dari FLS3N (7 bidang) atau O2SN (9 bidang). Banyak cara: $7 + 9 = 16$.

#### Aturan Perkalian

Aturan perkalian dapat dijelaskan dengan tiga cara:

1. **Aturan tabel.** Humam memiliki 5 kemeja dan 3 celana; dengan tabel pasangan diperoleh $5 \times 3 = 15$ cara berpakaian. Secara umum, $m$ kemeja dan $n$ celana memberikan $m \times n$ kemungkinan.
2. **Aturan diagram cabang (Contoh 3.2).** Dari Kudus ke Lamongan ada 2 jalan, dari Lamongan ke Surabaya 3 jalan, dan dari Surabaya ke Malang 2 jalan. Banyak rute: $2 \times 3 \times 2 = 12$.
3. **Aturan perkalian terurut (Contoh 3.3).** Dari angka 3, 4, 5, 6, 7 dibuat bilangan tiga angka: jika angka boleh berulang ada $5 \times 5 \times 5 = 125$ bilangan; jika tidak boleh berulang ada $5 \times 4 \times 3 = 60$ bilangan.

Jika terdapat $k$ kejadian yang **saling bebas** dengan banyak cara $n_1, n_2, \ldots, n_k$, maka banyak cara terjadinya seluruh kejadian adalah

$$n_1 \times n_2 \times \cdots \times n_k$$

#### Notasi Faktorial

$$n! = 1 \times 2 \times 3 \times \cdots \times n, \qquad 0! = 1, \quad 1! = 1$$

Contoh: $2! = 2$, $3! = 6$, $4! = 24$. Secara umum $n! = n(n - 1)!$.

### Permutasi

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 3 Kaidah Pencacahan, subbab B Permutasi, hlm. 91–101.*

**Eksplorasi.** Dari 8 siswa, ketua dan wakil ketua kelas sudah terpilih, sehingga tersisa 6 siswa untuk mengisi sekretaris dan bendahara: $6 \times 5 = 30$ cara, yaitu $\dfrac{6!}{(6 - 2)!} = P^6_2$.

#### Definisi Permutasi

Permutasi $r$ objek dari $n$ objek ($r \le n$) adalah banyak susunan $r$ objek yang diambil dari $n$ objek dengan **memperhatikan urutan**:

$$P^n_r = \frac{n!}{(n - r)!}$$

#### Permutasi $n$ Objek dari $n$ Objek

$$P^n_n = \frac{n!}{0!} = n!$$

**Contoh 3.4.** Formasi 6 pemain galasin: $6! = 720$ cara. **Contoh 3.5.** 4 pasien menempati 4 kamar bersalin: $4! = 24$ cara.

#### Permutasi dengan Objek yang Sama

Jika dari $n$ unsur terdapat $r_1$ unsur sama jenis ke-1, $r_2$ unsur sama jenis ke-2, …, $r_k$ unsur sama jenis ke-$k$:

$$P = \frac{n!}{r_1! \times r_2! \times \cdots \times r_k!}$$

**Contoh 3.6.** Susunan huruf KALIMANTAN (10 huruf; A muncul 3 kali, N 2 kali): $\dfrac{10!}{3!\,2!} = 302.400$.

**Contoh 3.7.** Susunan huruf BHINNEKA (8 huruf; N muncul 2 kali): $\dfrac{8!}{2!} = 20.160$.

#### Permutasi Siklis

Tiga orang $a$, $b$, $c$ yang duduk melingkar hanya memiliki 2 posisi berbeda (abc dan acb), karena abc, bca, dan cab dianggap sama. Secara umum, banyak susunan $n$ objek berbeda secara melingkar adalah

$$P_{\text{siklis}} = \frac{n!}{n} = (n - 1)!$$

**Contoh 3.8.** Empat orang berdiskusi melingkar: $(4 - 1)! = 6$ susunan.

**Contoh 3.9.** Lima laki-laki dan tiga perempuan duduk mengelilingi meja bundar.

a. Duduk bebas: $(8 - 1)! = 7! = 5.040$ cara.

b. Tidak ada perempuan yang berdampingan: laki-laki duduk dahulu dengan $(5 - 1)! = 4!$ cara; perempuan pertama memiliki 5 pilihan posisi di antara laki-laki, perempuan kedua 4, dan ketiga 3. Banyak cara: $4! \times 5 \times 4 \times 3 = 1.440$.

### Kombinasi

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 3 Kaidah Pencacahan, subbab C Kombinasi, hlm. 102–112.*

**Kombinasi** adalah susunan objek yang **tidak memperhatikan urutan**; misalnya pasangan pemain Agus–Agung sama dengan Agung–Agus. Kombinasi $k$ objek dari $n$ objek ($k \le n$):

$$C^n_k = \frac{P^n_k}{k!} = \frac{n!}{(n - k)!\,k!}$$

Jika $k > n$, didefinisikan $C^n_k = 0$. Untuk bilangan bulat nonnegatif $n$ berlaku $C^n_0 = 1$, $C^n_1 = n$, dan $C^n_n = 1$.

**Contoh 3.10.** Memilih 4 dari 10 siswa untuk lomba debat (tanpa peran khusus): $C^{10}_4 = \dfrac{10!}{6!\,4!} = 210$ cara.

**Contoh 3.11.** Memilih 4 dari 7 siswa dan 3 dari 6 siswi sebagai duta antikekerasan: $C^7_4 \times C^6_3 = 35 \times 20 = 700$ susunan.

#### Kombinasi Berulang (Teorema Stars and Bars)

Jika lebih dari satu bola boleh dimasukkan ke setiap kotak, banyak cara memasukkan $r$ benda identik ke dalam $n$ kotak berbeda adalah

$$C^{n + r - 1}_r = C^{n + r - 1}_{n - 1}$$

Secara ekuivalen, banyak solusi bulat nonnegatif dari $x_1 + x_2 + \cdots + x_k = n$ adalah $C^{n + k - 1}_{k - 1}$.

**Eksplorasi.** Ahmad memilih 4 buah dari 3 jenis (apel, jeruk, pisang): $C^{6}_4 = \dfrac{6!}{4!\,2!} = 15$ cara.

**Contoh 3.12.** Membagi 20 apel dan 15 jeruk kepada 5 anak (boleh tidak mendapat):

$$C^{24}_{20} \times C^{19}_{15} = 10.626 \times 3.876 = 41.186.376$$

**Contoh 3.13.** Banyak solusi bulat nonnegatif $x_1 + x_2 + x_3 + x_4 = 7$: $C^{7 + 4 - 1}_7 = C^{10}_7 = 120$.

### Binomial Newton

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 3 Kaidah Pencacahan, subbab D Penerapan Permutasi dan Kombinasi, hlm. 113–118.*

Konsep permutasi dan kombinasi sudah lama berkembang: penyusunan heksagram I-Ching di Tiongkok (sekitar 1000 SM), kriptografi Al-Khalil al-Farahidi (718–786 M), *Lilavati* karya Bhaskara II, *change ringing* Fabian Stedman (1677), hingga teori Galois. Teori peluang modern lahir dari korespondensi Pascal dan Fermat (1654).

#### Binomial Newton

Untuk $n$ bilangan bulat positif:

$$(a + b)^n = \sum_{r=0}^{n} C^n_r\,a^{n-r}b^r = C^n_0a^n + C^n_1a^{n-1}b + C^n_2a^{n-2}b^2 + \cdots + C^n_nb^n$$

Koefisien-koefisiennya membentuk **segitiga Pascal**.

**Contoh 3.14.** Koefisien suku yang memuat $x^6$ pada $(2 + x)^8$:

$$C^8_6\,(2)^{2}x^6 = 28 \times 4 \times x^6 = 112x^6$$

Jadi koefisiennya 112.

**Contoh 3.15.** Adu penalti dengan 5 penendang:

a. Banyak susunan tepat 3 penendang berhasil: $C^5_3 = 10$.

b. Jika peluang setiap penendang mencetak gol $p = 0{,}8$ ($q = 0{,}2$), peluang tepat 4 gol:

$$P(4) = C^5_4\,(0{,}8)^4(0{,}2)^1 = 5 \times 0{,}4096 \times 0{,}2 = 0{,}4096$$

## (B) Peluang

### Peluang Suatu Kejadian

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 4 Peluang, subbab A Peluang Suatu Kejadian, hlm. 125–138.*

Blaise Pascal (1623–1662) bersama Pierre de Fermat meneliti konsep peluang setelah Chevalier de Méré mempertanyakan permainan judi; Pascal menemukan bahwa sistem permainan tidak pernah berpihak pada penjudi.

**Peluang empirik** adalah rasio frekuensi kemunculan suatu kejadian terhadap banyak percobaan, misalnya dari percobaan mengetos koin, mengambil kelereng, atau menggelindingkan dadu.

#### Ruang Sampel

**Ruang sampel** $S$ adalah himpunan semua hasil percobaan yang mungkin. Untuk sebarang kejadian $A$ dalam $S$ berlaku

$$0 \le P(A) \le 1$$

Kejadian dengan peluang 0 disebut **kemustahilan**, dan dengan peluang 1 disebut **kepastian**. Komplemen kejadian $A$ (kejadian selain $A$), ditulis $A^c$, memenuhi

$$P(A) + P(A^c) = 1 \quad \text{atau} \quad P(A^c) = 1 - P(A)$$

#### Peluang Suatu Kejadian

Jika suatu percobaan memiliki $n$ hasil yang mungkin dan kejadian $A$ terjadi dalam $m$ hasil, maka

$$P(A) = \frac{m}{n}$$

**Contoh 4.2.** Kotak berisi 3 kelereng merah, 4 hijau, dan 5 biru; diambil 3 kelereng sekaligus, sehingga $n(S) = C^{12}_3 = 220$.

| Kejadian | Banyak cara | Peluang |
|---|---|---|
| Ketiganya merah | $C^3_3 = 1$ | $\dfrac{1}{220}$ |
| Ketiganya biru | $C^5_3 = 10$ | $\dfrac{10}{220} = \dfrac{1}{22}$ |
| Dua merah dan satu hijau | $C^3_2 \times C^4_1 = 12$ | $\dfrac{12}{220}$ |
| Satu merah, satu hijau, satu biru | $3 \times 4 \times 5 = 60$ | $\dfrac{60}{220}$ |

### Peluang Kejadian Majemuk

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 4 Peluang, subbab B.1–B.3 Kejadian Majemuk, Frekuensi Harapan, dan Peluang Kejadian Majemuk, hlm. 138–144.*

**Kejadian majemuk** adalah kejadian yang dapat dijelaskan dalam bentuk gabungan, irisan, atau komplemen kejadian. Ruang sampel pelemparan satu koin dan satu dadu: $\{(A, 1), \ldots, (A, 6), (G, 1), \ldots, (G, 6)\}$, sebanyak 12 titik sampel.

#### Frekuensi Harapan

**Frekuensi harapan** adalah harapan banyaknya suatu kejadian terjadi dari sejumlah percobaan:

$$F_h = P(K_j) \times n$$

**Contoh 4.4.** Dua dadu dilempar 360 kali. Peluang mata dadu 3 pada dadu pertama dan 5 pada dadu kedua adalah $\dfrac{1}{6} \times \dfrac{1}{6} = \dfrac{1}{36}$, sehingga $F_h = \dfrac{1}{36} \times 360 = 10$.

#### Peluang Gabungan Dua Kejadian

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

dengan "dan" dinotasikan $\cap$ dan "atau" dinotasikan $\cup$.

**Contoh 4.5.** Dari 34 siswa, 23 menyukai Matematika, 19 Fisika, dan 12 keduanya. Peluang seorang siswa acak menyukai Matematika atau Fisika:

$$P(M \cup F) = \frac{23}{34} + \frac{19}{34} - \frac{12}{34} = \frac{30}{34} = \frac{15}{17}$$

### Peluang Kejadian Majemuk Saling Lepas

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 4 Peluang, subbab B.4 Peluang Kejadian Majemuk Saling Lepas, hlm. 144–151.*

**Kejadian majemuk saling lepas** adalah dua kejadian yang tidak dapat terjadi bersamaan (tidak memiliki irisan):

$$P(A \cap B) = 0, \qquad P(A \cup B) = P(A) + P(B)$$

**Contoh 4.6.** Dari kartu bernomor 1–10, $A$ = kartu genap $\{2, 4, 6, 8, 10\}$ dan $B$ = kartu prima ganjil $\{3, 5, 7\}$. Karena $A \cap B = \{\}$:

$$P(A \cup B) = \frac{5}{10} + \frac{3}{10} = \frac{8}{10} = \frac{4}{5}$$

**Contoh 4.7.** Peluang jumlah dua mata dadu 5 (4 titik sampel) atau 7 (6 titik sampel):

$$P(A \cup B) = \frac{4}{36} + \frac{6}{36} = \frac{10}{36} = \frac{5}{18}$$

**Contoh 4.8.** Dari 15 berkas pelamar (10 lulusan PT A, 5 lulusan PT B; 7 berpengalaman di atas 2 tahun, 3 di bawah 2 tahun, 5 tanpa pengalaman): $P(A \cup B) = \tfrac{10}{15} + \tfrac{5}{15} = 1$; peluang berpengalaman di bawah atau di atas 2 tahun $= \tfrac{3}{15} + \tfrac{7}{15} = \tfrac{2}{3}$.

### Peluang Kejadian Majemuk Saling Bebas

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 4 Peluang, subbab B.5 Peluang Kejadian Majemuk Saling Bebas, hlm. 151–157.*

Jika suatu kejadian tidak memengaruhi kejadian lainnya, dua kejadian $A$ dan $B$ disebut **saling bebas**:

$$P(A \cap B) = P(A) \times P(B)$$

**Contoh (dadu merah dan putih).** Peluang angka 2 pada dadu merah dan 5 pada dadu putih: $P(A \cap B) = \dfrac{6}{36} \times \dfrac{6}{36} = \dfrac{1}{6} \times \dfrac{1}{6} = \dfrac{1}{36}$.

**Contoh 4.9.** Peluang angka genap pada dadu dan gambar pada koin: $\dfrac{1}{2} \times \dfrac{1}{2} = \dfrac{1}{4}$.

**Contoh 4.10.** Dua dadu dilempar dua kali. Peluang muncul jumlah 7 dan jumlah 11 (dalam urutan mana pun):

$$P = \frac{1}{6} \times \frac{1}{18} + \frac{1}{18} \times \frac{1}{6} = \frac{2}{108} = \frac{1}{54}$$

### Peluang Kejadian Majemuk Saling Bebas Bersyarat

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 4 Peluang, subbab B.6 Peluang Kejadian Majemuk Saling Bebas Bersyarat, hlm. 158–165.*

Informasi parsial mengecilkan ruang sampel dan mengubah peluang. Pada **permainan pintu rahasia** (hadiah di balik salah satu dari tiga pintu; pembawa acara membuka satu pintu kosong), beralih ke pintu lain meningkatkan peluang menang dari $\tfrac{1}{3}$ menjadi $\tfrac{2}{3}$.

Kejadian $B|A$ berarti kejadian $B$ terjadi setelah $A$ terjadi.

$$P(A \cap B) = P(A) \times P(B|A), \qquad P(B|A) = \frac{P(A \cap B)}{P(A)} = \frac{n(A \cap B)}{n(A)}$$

**Contoh (kartu hati).** Dua kartu diambil berturut-turut tanpa pengembalian dari 52 kartu. Peluang keduanya hati:

$$P(A \cap B) = \frac{13}{52} \times \frac{12}{51} = \frac{156}{2.652} = \frac{1}{17}$$

**Contoh 4.11.** Peluang terambil kartu merah yang bernomor lebih dari dua dan kurang dari sepuluh: $\dfrac{26}{52} \times \dfrac{14}{26} = \dfrac{14}{52} = \dfrac{7}{26}$.

**Contoh 4.12.** Formasi 200 manajer:

| | Laki-laki | Wanita |
|---|---|---|
| Senior | 18 | 2 |
| Menengah | 36 | 24 |
| Bawah | 24 | 96 |

a. $P(L \cup S) = \dfrac{78}{200} + \dfrac{20}{200} - \dfrac{18}{200} = \dfrac{80}{200} = \dfrac{2}{5}$

b. Dua manajer acak, seorang pria dan seorang wanita: $\dfrac{C^{78}_1 \times C^{122}_1}{C^{200}_2} = \dfrac{9.516}{19.900} = \dfrac{2.379}{4.975}$

c. Pilihan pertama dan kedua sama-sama laki-laki: $\dfrac{78}{200} \times \dfrac{77}{199} = \dfrac{6.006}{39.800} = \dfrac{3.003}{19.900}$

> Catatan: buku menuliskan hasil akhir bagian c sebagai $\tfrac{19.900}{3.003}$ (terbalik); peluang tidak mungkin lebih dari 1, sehingga yang benar $\tfrac{3.003}{19.900}$.
