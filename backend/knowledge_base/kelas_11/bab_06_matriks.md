---
judul: "Matriks"
kelas: "11"
fase: "F"
bab: "6"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (6 bagian); m4th-lab.net (9 bagian)"
---

# Bab 6 — Matriks

> Kelas 11 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- Konsep dan Jenis-jenis Matriks
- Kesamaan Dua Matriks
- Penjumlahan dan Pengurangan Matriks
- Perkalian Matriks
- Determinan Matriks
- Invers Matriks dan Sistem Persamaan Linear

## Konsep dan Jenis-jenis Matriks

### Jenis-jenis Matriks

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 1 Matriks, subbab A Jenis-Jenis Matriks, hlm. 3–9.*

Matriks adalah susunan bilangan dalam baris dan kolom. Matriks berordo $m \times n$ memiliki $m$ baris dan $n$ kolom; elemen baris ke-$i$ kolom ke-$j$ ditulis $a_{ij}$.

1. **Matriks baris**: hanya memiliki satu baris.
2. **Matriks kolom**: hanya memiliki satu kolom.
3. **Matriks persegi**: banyak baris sama dengan banyak kolom ($n \times n$). Elemen $a_{11}, a_{22}, \ldots, a_{nn}$ disebut **diagonal utama**; diagonal yang lain disebut **diagonal samping**.
4. **Matriks datar dan matriks tegak**: matriks datar berordo $m \times n$ dengan $m < n$ (kolom lebih banyak dari baris); matriks tegak berordo $m \times n$ dengan $m > n$ (baris lebih banyak dari kolom).
5. **Matriks segitiga**: matriks persegi dengan elemen di salah satu sisi diagonal utama bernilai nol.
   - **Segitiga atas**: semua elemen di bawah diagonal utama nol.
   - **Segitiga bawah**: semua elemen di atas diagonal utama nol.
6. **Matriks diagonal**: matriks persegi yang semua elemennya nol kecuali elemen pada diagonal utama.
7. **Matriks identitas** $I$: matriks diagonal yang elemen diagonal utamanya bernilai satu, misalnya
$$I_{2 \times 2} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \qquad I_{3 \times 3} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$
8. **Matriks nol** $O$: semua elemennya nol.
9. **Matriks simetris**: matriks persegi dengan $a_{ij} = a_{ji}$ untuk $i \neq j$ (elemen yang letaknya simetris terhadap diagonal utama bernilai sama).

#### Matriks Transpos

**Matriks transpos** adalah matriks yang diperoleh dengan mengubah elemen pada baris menjadi elemen pada kolom dan sebaliknya. Transpos matriks $D$ dinotasikan $D^T$; jika $D$ berordo $3 \times 9$, maka $D^T$ berordo $9 \times 3$. Transpos dari matriks kolom adalah matriks baris.

### Pengertian Matriks

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pengertian-matriks*

Pada materi sebelumnya, kita sudah mempelajari polinomial dan soal cerita polinomial. Sekarang kita masuk ke bagian baru dalam Aljabar SMA, yaitu **matriks**.

Matriks sering digunakan untuk menyusun data atau bilangan dalam bentuk tabel. Dengan matriks, beberapa informasi dapat ditulis secara lebih ringkas dan teratur. Dalam matematika SMA, matriks menjadi dasar untuk mempelajari operasi matriks, determinan, invers matriks, dan penyelesaian sistem persamaan linear.

#### A. Pengertian Matriks

Matriks adalah susunan bilangan, simbol, atau ekspresi matematika yang disusun dalam baris dan kolom, kemudian ditulis di dalam tanda kurung.

Contoh matriks:

$$
A=
\begin{pmatrix}
2 & 3\\
1 & 4
\end{pmatrix}
$$

Matriks di atas memiliki dua baris dan dua kolom.

  **Inti pengertian matriks**

  Matriks adalah susunan elemen-elemen dalam bentuk baris dan kolom. Elemen matriks dapat berupa bilangan, variabel, atau ekspresi aljabar.

#### B. Baris, Kolom, dan Elemen Matriks

Pada matriks, ada tiga istilah dasar yang harus dipahami terlebih dahulu.

- **Baris** adalah susunan elemen yang mendatar.

- **Kolom** adalah susunan elemen yang tegak.

- **Elemen matriks** adalah setiap anggota atau isi dari matriks.

Perhatikan matriks berikut.

$$
B=
\begin{pmatrix}
5 & 7 & 9\\
2 & 4 & 6
\end{pmatrix}
$$

Matriks $B$ memiliki:

- baris pertama: $5,\ 7,\ 9$

- baris kedua: $2,\ 4,\ 6$

- kolom pertama: $5,\ 2$

- kolom kedua: $7,\ 4$

- kolom ketiga: $9,\ 6$

#### C. Ordo Matriks

Ordo matriks menyatakan ukuran matriks. Jika suatu matriks memiliki $m$ baris dan $n$ kolom, maka ordonya adalah:

$$
m \times n
$$

Dengan keterangan:

- $m$ menyatakan banyak baris.

- $n$ menyatakan banyak kolom.

  **Catatan penting**

  Dalam menentukan ordo matriks, urutannya selalu **baris terlebih dahulu, kemudian kolom**. Jadi, matriks dengan 2 baris dan 3 kolom memiliki ordo $2 \times 3$, bukan $3 \times 2$.

Contoh:

$$
C=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
$$

Matriks $C$ memiliki 2 baris dan 3 kolom, sehingga ordonya adalah:

$$
2 \times 3
$$

#### D. Notasi Elemen Matriks

Elemen matriks biasanya dinotasikan dengan huruf kecil yang memiliki dua indeks. Jika matriksnya adalah $A$, maka elemen pada baris ke-$i$ dan kolom ke-$j$ ditulis:

$$
a_{ij}
$$

Indeks pertama menunjukkan baris, sedangkan indeks kedua menunjukkan kolom.

  **Ingat**

  $a_{ij}$ berarti elemen matriks $A$ yang terletak pada baris ke-$i$ dan kolom ke-$j$.

Misalkan:

$$
A=
\begin{pmatrix}
3 & 5 & 8\\
1 & 4 & 7
\end{pmatrix}
$$

Maka:

- $a_{11}=3$, karena berada pada baris pertama kolom pertama.

- $a_{12}=5$, karena berada pada baris pertama kolom kedua.

- $a_{23}=7$, karena berada pada baris kedua kolom ketiga.

#### E. Bentuk Umum Matriks

Secara umum, matriks berordo $m \times n$ dapat ditulis sebagai:

$$
A=
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots & \ddots & \vdots\\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

Bentuk tersebut menunjukkan bahwa matriks $A$ memiliki $m$ baris dan $n$ kolom.

#### F. Contoh Matriks dalam Kehidupan Sehari-hari

Matriks dapat digunakan untuk menyajikan data secara ringkas. Misalnya data nilai tiga siswa pada dua mata pelajaran berikut.

| Siswa | Matematika | Fisika |
| --- | --- | --- |
| Ani | 80 | 75 |
| Budi | 90 | 85 |
| Citra | 70 | 95 |

Data tersebut dapat ditulis dalam bentuk matriks:

$$
N=
\begin{pmatrix}
80 & 75\\
90 & 85\\
70 & 95
\end{pmatrix}
$$

Matriks $N$ memiliki 3 baris dan 2 kolom, sehingga ordonya adalah $3 \times 2$.

#### G. Matriks Baris dan Matriks Kolom

Berdasarkan banyak baris dan kolomnya, ada dua bentuk matriks yang mudah dikenali.

| Jenis Matriks | Bentuk | Contoh |
| --- | --- | --- |
| Matriks baris | Matriks yang hanya memiliki satu baris | $\begin{pmatrix}2 & 5 & 7\end{pmatrix}$ |
| Matriks kolom | Matriks yang hanya memiliki satu kolom | $\begin{pmatrix}3\\4\\8\end{pmatrix}$ |

Matriks baris dengan 1 baris dan 3 kolom memiliki ordo $1 \times 3$. Matriks kolom dengan 3 baris dan 1 kolom memiliki ordo $3 \times 1$.

#### H. Matriks Persegi

Matriks persegi adalah matriks yang banyak barisnya sama dengan banyak kolomnya.

Contoh:

$$
P=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
$$

Matriks $P$ memiliki 2 baris dan 2 kolom, sehingga matriks $P$ merupakan matriks persegi berordo $2 \times 2$.

Contoh lain:

$$
Q=
\begin{pmatrix}
1 & 0 & 2\\
4 & 5 & 6\\
7 & 8 & 9
\end{pmatrix}
$$

Matriks $Q$ memiliki 3 baris dan 3 kolom, sehingga matriks $Q$ merupakan matriks persegi berordo $3 \times 3$.

  **Catatan**

  Matriks persegi penting karena pada materi berikutnya kita akan mempelajari determinan dan invers matriks, yang terutama dibahas pada matriks persegi.

#### I. Banyak Elemen dalam Matriks

Jika suatu matriks berordo $m \times n$, maka banyak elemennya adalah:

$$
m \times n
$$

Misalnya matriks berordo $3 \times 4$. Banyak elemennya adalah:

$$
3 \times 4 = 12
$$

Jadi, matriks berordo $3 \times 4$ memiliki 12 elemen.

#### J. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat mempelajari pengertian matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Menukar urutan ordo | Ordo selalu ditulis baris terlebih dahulu, kemudian kolom. |
| Salah membaca elemen $a_{ij}$ | Indeks $i$ menunjukkan baris, sedangkan indeks $j$ menunjukkan kolom. |
| Mengira semua matriks harus persegi | Matriks tidak harus persegi. Ada matriks $2 \times 3$, $3 \times 2$, $1 \times 4$, dan lainnya. |
| Mengabaikan posisi elemen | Dalam matriks, posisi elemen sangat penting. Elemen pada baris dan kolom berbeda tidak dapat dianggap sama begitu saja. |

  **Perhatikan!**

  Matriks $\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}$ berbeda dengan matriks $\begin{pmatrix}1 & 3\\2 & 4\end{pmatrix}$ karena posisi elemennya berbeda.

#### K. Rangkuman

Berikut rangkuman materi pengertian matriks.

- Matriks adalah susunan elemen dalam bentuk baris dan kolom.

- Elemen matriks dapat berupa bilangan, variabel, atau ekspresi aljabar.

- Ordo matriks ditulis dalam bentuk banyak baris dikali banyak kolom.

- Jika matriks memiliki $m$ baris dan $n$ kolom, maka ordonya adalah $m \times n$.

- Elemen $a_{ij}$ berarti elemen pada baris ke-$i$ dan kolom ke-$j$.

- Matriks baris adalah matriks yang hanya memiliki satu baris.

- Matriks kolom adalah matriks yang hanya memiliki satu kolom.

- Matriks persegi adalah matriks yang banyak baris dan kolomnya sama.

- Banyak elemen matriks berordo $m \times n$ adalah $m \times n$.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan ordo matriks berikut.
$$
A=
\begin{pmatrix}
2 & 4 & 6\\
1 & 3 & 5
\end{pmatrix}
$$

Pembahasan

Matriks $A$ memiliki 2 baris, yaitu:

$$
\begin{pmatrix}
2 & 4 & 6
\end{pmatrix}
\quad \text{dan} \quad
\begin{pmatrix}
1 & 3 & 5
\end{pmatrix}
$$

Matriks $A$ juga memiliki 3 kolom.

Karena ordo matriks ditulis sebagai banyak baris dikali banyak kolom, maka:

$$
\text{ordo } A = 2 \times 3
$$

Jadi, ordo matriks $A$ adalah $2 \times 3$.

  Contoh Soal 2

Diketahui matriks:
$$
B=
\begin{pmatrix}
7 & 2 & 5\\
4 & 9 & 1\\
6 & 3 & 8
\end{pmatrix}
$$
Tentukan nilai $b_{23}$ dan $b_{31}$.

Pembahasan

Elemen $b_{23}$ berarti elemen pada baris ke-2 dan kolom ke-3.

Dari matriks $B$, baris ke-2 adalah:

$$
\begin{pmatrix}
4 & 9 & 1
\end{pmatrix}
$$

Elemen pada kolom ke-3 dari baris tersebut adalah $1$, sehingga:

$$
b_{23}=1
$$

Elemen $b_{31}$ berarti elemen pada baris ke-3 dan kolom ke-1.

Dari matriks $B$, baris ke-3 adalah:

$$
\begin{pmatrix}
6 & 3 & 8
\end{pmatrix}
$$

Elemen pada kolom ke-1 dari baris tersebut adalah $6$, sehingga:

$$
b_{31}=6
$$

Jadi, $b_{23}=1$ dan $b_{31}=6$.

  Contoh Soal 3

Suatu matriks memiliki ordo $3 \times 4$. Tentukan banyak elemen matriks tersebut dan jelaskan apakah matriks tersebut termasuk matriks persegi.

Pembahasan

Matriks berordo $3 \times 4$ memiliki 3 baris dan 4 kolom.

Banyak elemen matriks adalah:

$$\begin{aligned}
3 \times 4 &= 12
\end{aligned}$$

Jadi, matriks tersebut memiliki 12 elemen.

Matriks persegi adalah matriks yang banyak barisnya sama dengan banyak kolomnya.

Karena matriks ini memiliki 3 baris dan 4 kolom, maka banyak baris dan kolomnya tidak sama.

Jadi, matriks tersebut bukan matriks persegi.

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Matriks adalah ....

Abilangan yang hanya memiliki satu faktor

Bpersamaan yang memuat variabel berpangkat dua

Csusunan elemen dalam bentuk baris dan kolom

Dgrafik fungsi yang berbentuk parabola

Ehimpunan bilangan yang selalu berurutan

Pembahasan

Matriks adalah susunan elemen dalam bentuk baris dan kolom. Jadi, jawabannya adalah **C**.

  Latihan Soal 2

Ordo matriks
$$
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
$$
adalah ....

A$1 \times 3$

B$2 \times 3$

C$3 \times 2$

D$2 \times 2$

E$3 \times 3$

Pembahasan

Matriks tersebut memiliki 2 baris dan 3 kolom, sehingga ordonya adalah $2 \times 3$. Jadi, jawabannya adalah **B**.

  Latihan Soal 3

Banyak elemen pada matriks berordo $4 \times 5$ adalah ....

A$9$

B$16$

C$20$

D$25$

E$45$

Pembahasan

$$\begin{aligned}
4 \times 5 &= 20
\end{aligned}$$

Jadi, matriks berordo $4 \times 5$ memiliki 20 elemen. Jawabannya adalah **C**.

  Latihan Soal 4

Diketahui matriks
$$
A=
\begin{pmatrix}
8 & 6\\
5 & 3\\
2 & 1
\end{pmatrix}
$$
Elemen $a_{32}$ adalah ....

A$2$

B$1$

C$3$

D$5$

E$6$

Pembahasan

Elemen $a_{32}$ berada pada baris ke-3 dan kolom ke-2. Pada matriks tersebut, elemen baris ke-3 kolom ke-2 adalah $1$. Jadi, jawabannya adalah **B**.

  Latihan Soal 5

Matriks
$$
\begin{pmatrix}
4 & 7 & 9
\end{pmatrix}
$$
termasuk ....

Amatriks baris

Bmatriks kolom

Cmatriks persegi

Dmatriks nol

Ematriks diagonal

Pembahasan

Matriks tersebut hanya memiliki satu baris, sehingga termasuk matriks baris. Jadi, jawabannya adalah **A**.

  Latihan Soal 6

Matriks
$$
\begin{pmatrix}
2\\
5\\
8
\end{pmatrix}
$$
memiliki ordo ....

A$1 \times 3$

B$2 \times 3$

C$3 \times 2$

D$3 \times 1$

E$1 \times 1$

Pembahasan

Matriks tersebut memiliki 3 baris dan 1 kolom, sehingga ordonya adalah $3 \times 1$. Jadi, jawabannya adalah **D**.

  Latihan Soal 7

Matriks berikut yang merupakan matriks persegi adalah ....

A$\begin{pmatrix}1 & 2 & 3\end{pmatrix}$

B$\begin{pmatrix}1 & 2 & 3\\4 & 5 & 6\end{pmatrix}$

C$\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}$

D$\begin{pmatrix}1\\2\\3\end{pmatrix}$

E$\begin{pmatrix}1 & 2 & 3 & 4\\5 & 6 & 7 & 8\end{pmatrix}$

Pembahasan

Matriks persegi adalah matriks yang banyak barisnya sama dengan banyak kolomnya. Opsi C memiliki 2 baris dan 2 kolom, sehingga merupakan matriks persegi. Jadi, jawabannya adalah **C**.

  Latihan Soal 8

Jika suatu matriks memiliki 5 baris dan 2 kolom, maka ordonya adalah ....

A$5 \times 2$

B$2 \times 5$

C$5 \times 5$

D$2 \times 2$

E$7 \times 1$

Pembahasan

Ordo matriks ditulis baris terlebih dahulu, kemudian kolom. Karena ada 5 baris dan 2 kolom, ordonya adalah $5 \times 2$. Jadi, jawabannya adalah **A**.

  Latihan Soal 9

Diketahui matriks
$$
M=
\begin{pmatrix}
3 & 6 & 9\\
2 & 4 & 8
\end{pmatrix}
$$
Nilai $m_{12}+m_{23}$ adalah ....

A$10$

B$12$

C$14$

D$15$

E$17$

Pembahasan

Elemen $m_{12}$ berada pada baris ke-1 kolom ke-2, sehingga $m_{12}=6$.

Elemen $m_{23}$ berada pada baris ke-2 kolom ke-3, sehingga $m_{23}=8$.

$$\begin{aligned}
m_{12}+m_{23}&=6+8\\
&=14
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 10

Pernyataan yang benar tentang matriks berordo $2 \times 4$ adalah ....

Amatriks tersebut memiliki 4 baris dan 2 kolom

Bmatriks tersebut memiliki 6 elemen

Cmatriks tersebut selalu merupakan matriks persegi

Dmatriks tersebut memiliki 2 baris dan 4 kolom

Ematriks tersebut hanya memiliki satu kolom

Pembahasan

Matriks berordo $2 \times 4$ berarti matriks tersebut memiliki 2 baris dan 4 kolom. Banyak elemennya adalah $2 \times 4=8$. Jadi, jawabannya adalah **D**.

### Jenis-jenis Matriks

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/jenis-jenis-matriks-matriks*

Pada materi sebelumnya, kita sudah mempelajari pengertian matriks. Kita telah mengenal bahwa matriks adalah susunan elemen dalam bentuk baris dan kolom, serta mempelajari istilah ordo, baris, kolom, dan elemen matriks.

Pada materi ini, kita akan mempelajari **jenis-jenis matriks**. Pemahaman ini penting karena beberapa operasi dan sifat matriks bergantung pada jenis matriksnya. Misalnya, determinan dan invers hanya dibahas pada matriks persegi, sedangkan matriks identitas berperan penting dalam operasi perkalian matriks.

#### A. Mengapa Jenis Matriks Perlu Dipahami?

Tidak semua matriks memiliki bentuk dan sifat yang sama. Ada matriks yang hanya terdiri dari satu baris, ada yang hanya terdiri dari satu kolom, ada yang semua elemennya nol, dan ada pula matriks khusus yang memiliki angka $1$ pada diagonal utamanya.

  **Inti materi**

  Jenis matriks ditentukan oleh bentuk, ordo, letak elemen, dan pola elemen di dalam matriks tersebut.

Dengan memahami jenis-jenis matriks, kita akan lebih mudah saat mempelajari operasi matriks, determinan, invers matriks, dan penyelesaian sistem persamaan linear menggunakan matriks.

#### B. Matriks Baris

Matriks baris adalah matriks yang hanya memiliki **satu baris**.

Contoh:

$$
A=
\begin{pmatrix}
2 & 5 & 7
\end{pmatrix}
$$

Matriks $A$ hanya memiliki satu baris dan tiga kolom, sehingga ordonya adalah $1 \times 3$.

  **Catatan**

  Matriks baris selalu memiliki ordo $1 \times n$, dengan $n$ menyatakan banyak kolom.

#### C. Matriks Kolom

Matriks kolom adalah matriks yang hanya memiliki **satu kolom**.

Contoh:

$$
B=
\begin{pmatrix}
3\\
6\\
9
\end{pmatrix}
$$

Matriks $B$ memiliki tiga baris dan satu kolom, sehingga ordonya adalah $3 \times 1$.

  **Catatan**

  Matriks kolom selalu memiliki ordo $m \times 1$, dengan $m$ menyatakan banyak baris.

#### D. Matriks Persegi

Matriks persegi adalah matriks yang memiliki banyak baris sama dengan banyak kolom.

Contoh:

$$
C=
\begin{pmatrix}
1 & 4\\
2 & 5
\end{pmatrix}
$$

Matriks $C$ memiliki 2 baris dan 2 kolom. Karena banyak baris sama dengan banyak kolom, matriks $C$ disebut matriks persegi berordo $2 \times 2$.

Contoh matriks persegi berordo $3 \times 3$:

$$
D=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{pmatrix}
$$

  **Ingat**

  Matriks persegi memiliki ordo $n \times n$. Matriks jenis ini sangat penting karena menjadi dasar untuk mempelajari determinan dan invers matriks.

#### E. Matriks Nol

Matriks nol adalah matriks yang semua elemennya bernilai nol.

Contoh:

$$
O=
\begin{pmatrix}
0 & 0\\
0 & 0
\end{pmatrix}
$$

Matriks tersebut disebut matriks nol berordo $2 \times 2$.

Contoh lain:

$$
P=
\begin{pmatrix}
0 & 0 & 0\\
0 & 0 & 0
\end{pmatrix}
$$

Matriks $P$ adalah matriks nol berordo $2 \times 3$.

  **Perhatikan!**

  Matriks nol tidak harus berbentuk persegi. Selama semua elemennya nol, matriks tersebut disebut matriks nol.

#### F. Matriks Diagonal

Matriks diagonal adalah matriks persegi yang semua elemen di luar diagonal utamanya bernilai nol.

Contoh:

$$
E=
\begin{pmatrix}
2 & 0 & 0\\
0 & 5 & 0\\
0 & 0 & 7
\end{pmatrix}
$$

Matriks $E$ adalah matriks diagonal karena elemen-elemen di luar diagonal utama bernilai nol.

Diagonal utama pada matriks persegi adalah elemen-elemen dari kiri atas ke kanan bawah.

$$
a_{11},\ a_{22},\ a_{33},\ldots
$$

  **Catatan**

  Matriks diagonal harus berupa matriks persegi. Jika suatu matriks bukan matriks persegi, maka tidak disebut matriks diagonal.

#### G. Matriks Skalar

Matriks skalar adalah matriks diagonal yang semua elemen pada diagonal utamanya sama.

Contoh:

$$
F=
\begin{pmatrix}
4 & 0 & 0\\
0 & 4 & 0\\
0 & 0 & 4
\end{pmatrix}
$$

Matriks $F$ adalah matriks skalar karena semua elemen diagonal utamanya bernilai $4$, sedangkan elemen di luar diagonal utama bernilai nol.

Secara umum, matriks skalar berordo $3 \times 3$ dapat ditulis sebagai:

$$
\begin{pmatrix}
k & 0 & 0\\
0 & k & 0\\
0 & 0 & k
\end{pmatrix}
$$

#### H. Matriks Identitas

Matriks identitas adalah matriks skalar yang semua elemen diagonal utamanya bernilai $1$.

Contoh matriks identitas berordo $2 \times 2$:

$$
I_2=
\begin{pmatrix}
1 & 0\\
0 & 1
\end{pmatrix}
$$

Contoh matriks identitas berordo $3 \times 3$:

$$
I_3=
\begin{pmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{pmatrix}
$$

  **Peran penting matriks identitas**

  Dalam perkalian matriks, matriks identitas memiliki peran seperti bilangan $1$ pada perkalian bilangan biasa.

Misalnya pada bilangan biasa:

$$
5 \times 1 = 5
$$

Dalam matriks, secara sederhana idenya mirip:

$$
A \times I = A
$$

Pembahasan lengkap tentang perkalian matriks akan dipelajari pada materi berikutnya.

#### I. Matriks Segitiga Atas

Matriks segitiga atas adalah matriks persegi yang semua elemen di bawah diagonal utama bernilai nol.

Contoh:

$$
G=
\begin{pmatrix}
2 & 3 & 4\\
0 & 5 & 6\\
0 & 0 & 7
\end{pmatrix}
$$

Matriks $G$ disebut matriks segitiga atas karena elemen-elemen di bawah diagonal utama bernilai nol.

#### J. Matriks Segitiga Bawah

Matriks segitiga bawah adalah matriks persegi yang semua elemen di atas diagonal utama bernilai nol.

Contoh:

$$
H=
\begin{pmatrix}
2 & 0 & 0\\
3 & 5 & 0\\
4 & 6 & 7
\end{pmatrix}
$$

Matriks $H$ disebut matriks segitiga bawah karena elemen-elemen di atas diagonal utama bernilai nol.

  **Catatan**

  Matriks segitiga atas dan matriks segitiga bawah harus berupa matriks persegi.

#### K. Ringkasan Jenis-jenis Matriks

| Jenis Matriks | Ciri Utama | Contoh Ordo |
| --- | --- | --- |
| Matriks baris | Memiliki satu baris | $1 \times n$ |
| Matriks kolom | Memiliki satu kolom | $m \times 1$ |
| Matriks persegi | Banyak baris sama dengan banyak kolom | $n \times n$ |
| Matriks nol | Semua elemennya nol | Bisa persegi atau tidak persegi |
| Matriks diagonal | Elemen di luar diagonal utama bernilai nol | $n \times n$ |
| Matriks skalar | Matriks diagonal dengan elemen diagonal utama sama | $n \times n$ |
| Matriks identitas | Matriks diagonal dengan diagonal utama semuanya $1$ | $n \times n$ |
| Matriks segitiga atas | Elemen di bawah diagonal utama bernilai nol | $n \times n$ |
| Matriks segitiga bawah | Elemen di atas diagonal utama bernilai nol | $n \times n$ |

#### L. Hubungan Beberapa Jenis Matriks

Beberapa jenis matriks memiliki hubungan khusus. Misalnya, matriks identitas pasti merupakan matriks skalar, matriks diagonal, dan matriks persegi.

| Matriks | Termasuk Jenis Apa? |
| --- | --- |
| $\begin{pmatrix}1 & 0\\0 & 1\end{pmatrix}$ | Matriks identitas, matriks skalar, matriks diagonal, dan matriks persegi |
| $\begin{pmatrix}5 & 0\\0 & 5\end{pmatrix}$ | Matriks skalar, matriks diagonal, dan matriks persegi |
| $\begin{pmatrix}2 & 0\\0 & 7\end{pmatrix}$ | Matriks diagonal dan matriks persegi |
| $\begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}$ | Matriks nol, matriks diagonal, dan matriks persegi |

  **Perhatikan!**

  Satu matriks dapat termasuk ke dalam beberapa jenis sekaligus. Jadi, jangan hanya melihat satu ciri saja.

#### M. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat mempelajari jenis-jenis matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Mengira matriks nol harus persegi | Matriks nol dapat memiliki ordo apa saja, asalkan semua elemennya nol. |
| Menyebut matriks diagonal pada matriks tidak persegi | Matriks diagonal harus berupa matriks persegi. |
| Menganggap semua matriks persegi adalah matriks identitas | Matriks identitas harus memiliki diagonal utama bernilai $1$ dan elemen lain bernilai $0$. |
| Tertukar antara segitiga atas dan segitiga bawah | Segitiga atas memiliki nol di bawah diagonal utama, sedangkan segitiga bawah memiliki nol di atas diagonal utama. |
| Menganggap matriks skalar sama dengan matriks identitas | Matriks identitas adalah matriks skalar khusus dengan elemen diagonal utama semuanya $1$. |

#### N. Rangkuman

Berikut rangkuman materi jenis-jenis matriks.

- Matriks baris adalah matriks yang hanya memiliki satu baris.

- Matriks kolom adalah matriks yang hanya memiliki satu kolom.

- Matriks persegi adalah matriks yang banyak barisnya sama dengan banyak kolomnya.

- Matriks nol adalah matriks yang semua elemennya bernilai nol.

- Matriks diagonal adalah matriks persegi yang elemen di luar diagonal utamanya bernilai nol.

- Matriks skalar adalah matriks diagonal yang semua elemen diagonal utamanya sama.

- Matriks identitas adalah matriks skalar dengan semua elemen diagonal utama bernilai $1$.

- Matriks segitiga atas adalah matriks persegi yang elemen di bawah diagonal utama bernilai nol.

- Matriks segitiga bawah adalah matriks persegi yang elemen di atas diagonal utama bernilai nol.

- Satu matriks dapat termasuk ke dalam beberapa jenis sekaligus.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan jenis matriks berikut.
$$
A=
\begin{pmatrix}
4 & 0 & 0\\
0 & 4 & 0\\
0 & 0 & 4
\end{pmatrix}
$$

Pembahasan

Matriks $A$ memiliki 3 baris dan 3 kolom, sehingga matriks $A$ adalah matriks persegi.

Semua elemen di luar diagonal utama bernilai nol, sehingga matriks $A$ adalah matriks diagonal.

Elemen-elemen pada diagonal utama semuanya bernilai $4$, yaitu:

$$
4,\ 4,\ 4
$$

Karena semua elemen diagonal utamanya sama, matriks $A$ juga merupakan matriks skalar.

Jadi, matriks $A$ termasuk matriks persegi, matriks diagonal, dan matriks skalar.

  Contoh Soal 2

Tentukan apakah matriks berikut merupakan matriks identitas.
$$
B=
\begin{pmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{pmatrix}
$$

Pembahasan

Matriks $B$ memiliki 3 baris dan 3 kolom, sehingga matriks $B$ adalah matriks persegi.

Elemen pada diagonal utamanya adalah:

$$
1,\ 1,\ 1
$$

Semua elemen di luar diagonal utama bernilai nol.

Karena diagonal utamanya semua bernilai $1$ dan elemen lainnya bernilai $0$, maka matriks $B$ merupakan matriks identitas berordo $3 \times 3$.

Jadi, matriks $B$ adalah matriks identitas.

  Contoh Soal 3

Tentukan jenis matriks berikut.
$$
C=
\begin{pmatrix}
2 & 5 & 7\\
0 & 3 & 4\\
0 & 0 & 6
\end{pmatrix}
$$

Pembahasan

Matriks $C$ memiliki 3 baris dan 3 kolom, sehingga matriks $C$ adalah matriks persegi.

Perhatikan elemen-elemen di bawah diagonal utama.

$$
c_{21}=0,\quad c_{31}=0,\quad c_{32}=0
$$

Semua elemen di bawah diagonal utama bernilai nol.

Jadi, matriks $C$ merupakan matriks segitiga atas.

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Matriks
$$
\begin{pmatrix}
2 & 4 & 6
\end{pmatrix}
$$
termasuk jenis matriks ....

Amatriks baris

Bmatriks kolom

Cmatriks persegi

Dmatriks identitas

Ematriks diagonal

Pembahasan

Matriks tersebut hanya memiliki satu baris, sehingga termasuk matriks baris. Jadi, jawabannya adalah **A**.

  Latihan Soal 2

Matriks
$$
\begin{pmatrix}
3\\
5\\
7
\end{pmatrix}
$$
termasuk jenis matriks ....

Amatriks baris

Bmatriks kolom

Cmatriks skalar

Dmatriks identitas

Ematriks diagonal

Pembahasan

Matriks tersebut hanya memiliki satu kolom, sehingga termasuk matriks kolom. Jadi, jawabannya adalah **B**.

  Latihan Soal 3

Matriks berikut yang merupakan matriks persegi adalah ....

A$\begin{pmatrix}1 & 2 & 3\end{pmatrix}$

B$\begin{pmatrix}1\\2\\3\end{pmatrix}$

C$\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}$

D$\begin{pmatrix}1 & 2 & 3\\4 & 5 & 6\end{pmatrix}$

E$\begin{pmatrix}1 & 2 & 3 & 4\end{pmatrix}$

Pembahasan

Matriks persegi memiliki banyak baris sama dengan banyak kolom. Opsi C memiliki 2 baris dan 2 kolom, sehingga merupakan matriks persegi. Jadi, jawabannya adalah **C**.

  Latihan Soal 4

Matriks
$$
\begin{pmatrix}
0 & 0 & 0\\
0 & 0 & 0
\end{pmatrix}
$$
termasuk jenis matriks ....

Amatriks identitas

Bmatriks skalar

Cmatriks nol

Dmatriks segitiga atas

Ematriks segitiga bawah

Pembahasan

Semua elemen matriks tersebut bernilai nol, sehingga matriks tersebut merupakan matriks nol. Jadi, jawabannya adalah **C**.

  Latihan Soal 5

Matriks
$$
\begin{pmatrix}
5 & 0 & 0\\
0 & 8 & 0\\
0 & 0 & 2
\end{pmatrix}
$$
merupakan matriks ....

Abaris

Bkolom

Cdiagonal

Didentitas

Enol

Pembahasan

Matriks tersebut merupakan matriks persegi dan semua elemen di luar diagonal utamanya bernilai nol. Jadi, matriks tersebut merupakan matriks diagonal. Jawabannya adalah **C**.

  Latihan Soal 6

Matriks
$$
\begin{pmatrix}
6 & 0\\
0 & 6
\end{pmatrix}
$$
termasuk matriks ....

Abaris

Bkolom

Cnol

Dskalar

Ebukan matriks persegi

Pembahasan

Matriks tersebut merupakan matriks diagonal dan semua elemen diagonal utamanya sama, yaitu $6$. Jadi, matriks tersebut merupakan matriks skalar. Jawabannya adalah **D**.

  Latihan Soal 7

Matriks identitas berordo $3 \times 3$ adalah ....

A$\begin{pmatrix}1 & 1 & 1\\1 & 1 & 1\\1 & 1 & 1\end{pmatrix}$

B$\begin{pmatrix}1 & 0 & 0\\0 & 1 & 0\\0 & 0 & 1\end{pmatrix}$

C$\begin{pmatrix}0 & 1 & 0\\1 & 0 & 1\\0 & 1 & 0\end{pmatrix}$

D$\begin{pmatrix}3 & 0 & 0\\0 & 3 & 0\\0 & 0 & 3\end{pmatrix}$

E$\begin{pmatrix}0 & 0 & 0\\0 & 0 & 0\\0 & 0 & 0\end{pmatrix}$

Pembahasan

Matriks identitas memiliki elemen diagonal utama bernilai $1$ dan elemen lainnya bernilai $0$. Jadi, jawabannya adalah **B**.

  Latihan Soal 8

Matriks
$$
\begin{pmatrix}
2 & 5 & 1\\
0 & 3 & 4\\
0 & 0 & 6
\end{pmatrix}
$$
merupakan matriks ....

Asegitiga bawah

Bsegitiga atas

Ckolom

Dbaris

Eidentitas

Pembahasan

Semua elemen di bawah diagonal utama bernilai nol, sehingga matriks tersebut merupakan matriks segitiga atas. Jadi, jawabannya adalah **B**.

  Latihan Soal 9

Matriks
$$
\begin{pmatrix}
4 & 0 & 0\\
7 & 2 & 0\\
5 & 1 & 9
\end{pmatrix}
$$
merupakan matriks ....

Asegitiga bawah

Bsegitiga atas

Cbaris

Dkolom

Eidentitas

Pembahasan

Semua elemen di atas diagonal utama bernilai nol, sehingga matriks tersebut merupakan matriks segitiga bawah. Jadi, jawabannya adalah **A**.

  Latihan Soal 10

Pernyataan yang benar tentang matriks identitas adalah ....

Asemua elemennya harus bernilai nol

Bhanya boleh memiliki satu baris

Cdiagonal utamanya bernilai $1$ dan elemen lainnya bernilai $0$

Dselalu memiliki ordo $1 \times n$

Esemua elemen diagonal utamanya harus bernilai $0$

Pembahasan

Matriks identitas memiliki elemen diagonal utama bernilai $1$ dan elemen lainnya bernilai $0$. Jadi, jawabannya adalah **C**.

## Kesamaan Dua Matriks

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab III Matriks, subbab 3.3 Kesamaan Dua Matriks, Definisi 3.2, hlm. 84–85.*

Perhatikan matriks berikut:

$$\begin{pmatrix} 3 & 5 \\ 7 & 9 \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 7 & 9 \end{pmatrix}$$

Kedua matriks sama: ordonya sama ($2 \times 2$) dan setiap entri yang seletak bernilai sama.

Bagaimana dengan pasangan matriks berikut?

$$\begin{pmatrix} 4 & 9 \\ 5 & 8 \end{pmatrix} \text{ dan } \begin{pmatrix} 4 & 5 \\ 9 & 8 \end{pmatrix}, \qquad \begin{pmatrix} 4 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 6 \end{pmatrix} \text{ dan } \begin{pmatrix} 0 & 0 & 6 \\ 0 & 5 & 0 \\ 4 & 0 & 0 \end{pmatrix}$$

Pada setiap pasangan, ordonya sama dan anggota-anggotanya pun sama, tetapi letaknya berbeda. Entri yang seletak tidak bernilai sama, sehingga kedua matriks dalam setiap pasangan **tidak sama**.

### Definisi Kesamaan Dua Matriks

Matriks $A$ dan matriks $B$ dikatakan sama ($A = B$) jika dan hanya jika:

1. ordo matriks $A$ sama dengan ordo matriks $B$, dan
2. setiap entri yang seletak pada matriks $A$ dan matriks $B$ mempunyai nilai yang sama, yaitu $a_{ij} = b_{ij}$ untuk semua nilai $i$ dan $j$.

Kesamaan dua matriks dipakai untuk menentukan nilai variabel yang belum diketahui dengan menyamakan entri-entri yang seletak, termasuk pada soal yang melibatkan transpos matriks: jika $P^t = Q$, maka ordo $P^t$ harus sama dengan ordo $Q$ dan setiap entri seletaknya sama.

## Penjumlahan dan Pengurangan Matriks

### Penjumlahan dan Pengurangan Matriks

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 1 Matriks, subbab C Penjumlahan dan Pengurangan Antarmatriks, hlm. 13–20.*

Dua matriks yang **berordo sama** dijumlahkan (dikurangkan) dengan menjumlahkan (mengurangkan) elemen-elemen yang seletak: jika $A = (a_{ij})$ dan $B = (b_{ij})$ berordo $m \times n$, maka

$$A + B = (a_{ij} + b_{ij}), \qquad A - B = A + (-B) = (a_{ij} - b_{ij})$$

#### Sifat 1.1 Sifat-sifat Penjumlahan Matriks

Untuk matriks $A$, $B$, $C$, dan $O$ berordo sama:

- komutatif: $A + B = B + A$
- asosiatif: $(A + B) + C = A + (B + C)$
- identitas: $A + O = O + A = A$
- lawan: $A + (-A) = O$

### Operasi Penjumlahan dan Pengurangan Matriks

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/operasi-penjumlahan-dan-pengurangan-matriks*

Pada materi sebelumnya, kita sudah mempelajari jenis-jenis matriks, seperti matriks baris, matriks kolom, matriks persegi, matriks nol, matriks diagonal, matriks skalar, matriks identitas, serta matriks segitiga.

Pada materi ini, kita akan mulai mempelajari **operasi pada matriks**. Operasi pertama yang perlu dipahami adalah **penjumlahan dan pengurangan matriks**.

Penjumlahan dan pengurangan matriks sebenarnya cukup sederhana. Namun, ada satu syarat penting yang tidak boleh dilupakan, yaitu matriks yang dijumlahkan atau dikurangkan harus memiliki **ordo yang sama**.

#### A. Syarat Penjumlahan dan Pengurangan Matriks

Dua matriks dapat dijumlahkan atau dikurangkan jika memiliki ordo yang sama.

Misalnya:

$$
A=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}
$$

Matriks $A$ dan $B$ sama-sama berordo $2 \times 2$, sehingga keduanya dapat dijumlahkan atau dikurangkan.

  **Inti penting**

  Penjumlahan dan pengurangan matriks hanya dapat dilakukan jika kedua matriks memiliki ordo yang sama.

Sebaliknya, matriks berikut tidak dapat dijumlahkan.

$$
C=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\quad \text{dan} \quad
D=
\begin{pmatrix}
5 & 6 & 7\\
8 & 9 & 10
\end{pmatrix}
$$

Matriks $C$ berordo $2 \times 2$, sedangkan matriks $D$ berordo $2 \times 3$. Karena ordonya berbeda, maka $C+D$ tidak dapat dilakukan.

  **Perhatikan!**

  Jangan menjumlahkan matriks hanya karena jumlah barisnya sama. Ordo harus sama persis, yaitu banyak baris sama dan banyak kolom juga sama.

#### B. Cara Menjumlahkan Matriks

Untuk menjumlahkan dua matriks yang ordonya sama, jumlahkan elemen-elemen yang seletak.

Misalkan:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
e & f\\
g & h
\end{pmatrix}
$$

Maka:

$$
A+B=
\begin{pmatrix}
a+e & b+f\\
c+g & d+h
\end{pmatrix}
$$

  **Catatan**

  Elemen yang dijumlahkan harus berada pada posisi yang sama. Elemen baris pertama kolom pertama dijumlahkan dengan elemen baris pertama kolom pertama, dan seterusnya.

#### C. Contoh Penjumlahan Matriks

Diketahui:

$$
A=
\begin{pmatrix}
2 & 4\\
1 & 3
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
A+B
&=
\begin{pmatrix}
2 & 4\\
1 & 3
\end{pmatrix}
+
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}\\
&=
\begin{pmatrix}
2+5 & 4+6\\
1+7 & 3+8
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & 10\\
8 & 11
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
A+B=
\begin{pmatrix}
7 & 10\\
8 & 11
\end{pmatrix}
$$

#### D. Cara Mengurangkan Matriks

Untuk mengurangkan dua matriks yang ordonya sama, kurangkan elemen-elemen yang seletak.

Misalkan:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
e & f\\
g & h
\end{pmatrix}
$$

Maka:

$$
A-B=
\begin{pmatrix}
a-e & b-f\\
c-g & d-h
\end{pmatrix}
$$

#### E. Contoh Pengurangan Matriks

Diketahui:

$$
P=
\begin{pmatrix}
9 & 7\\
6 & 4
\end{pmatrix}
\quad \text{dan} \quad
Q=
\begin{pmatrix}
2 & 5\\
1 & 3
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
P-Q
&=
\begin{pmatrix}
9 & 7\\
6 & 4
\end{pmatrix}
-
\begin{pmatrix}
2 & 5\\
1 & 3
\end{pmatrix}\\
&=
\begin{pmatrix}
9-2 & 7-5\\
6-1 & 4-3
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & 2\\
5 & 1
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
P-Q=
\begin{pmatrix}
7 & 2\\
5 & 1
\end{pmatrix}
$$

#### F. Penjumlahan dan Pengurangan Matriks Berordo $2 \times 3$

Operasi penjumlahan dan pengurangan tidak hanya berlaku pada matriks persegi. Matriks tidak persegi juga dapat dijumlahkan atau dikurangkan, asalkan ordonya sama.

Contoh:

$$
A=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
6 & 5 & 4\\
3 & 2 & 1
\end{pmatrix}
$$

Kedua matriks tersebut sama-sama berordo $2 \times 3$, sehingga dapat dijumlahkan.

$$\begin{aligned}
A+B
&=
\begin{pmatrix}
1+6 & 2+5 & 3+4\\
4+3 & 5+2 & 6+1
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & 7 & 7\\
7 & 7 & 7
\end{pmatrix}
\end{aligned}$$

Keduanya juga dapat dikurangkan.

$$\begin{aligned}
A-B
&=
\begin{pmatrix}
1-6 & 2-5 & 3-4\\
4-3 & 5-2 & 6-1
\end{pmatrix}\\
&=
\begin{pmatrix}
-5 & -3 & -1\\
1 & 3 & 5
\end{pmatrix}
\end{aligned}$$

#### G. Sifat Penjumlahan Matriks

Penjumlahan matriks memiliki beberapa sifat yang mirip dengan penjumlahan bilangan biasa.

| Sifat | Bentuk Umum | Keterangan |
| --- | --- | --- |
| Komutatif | $A+B=B+A$ | Urutan penjumlahan dapat ditukar. |
| Asosiatif | $(A+B)+C=A+(B+C)$ | Pengelompokan penjumlahan dapat diubah. |
| Identitas penjumlahan | $A+O=A$ | $O$ adalah matriks nol yang ordonya sama dengan $A$. |
| Invers penjumlahan | $A+(-A)=O$ | $-A$ adalah lawan dari matriks $A$. |

  **Catatan**

  Sifat-sifat ini berlaku jika semua matriks yang terlibat memiliki ordo yang sesuai untuk dijumlahkan.

#### H. Matriks Nol dalam Penjumlahan Matriks

Matriks nol berperan sebagai identitas dalam penjumlahan matriks.

Misalnya:

$$
A=
\begin{pmatrix}
3 & 5\\
7 & 9
\end{pmatrix}
\quad \text{dan} \quad
O=
\begin{pmatrix}
0 & 0\\
0 & 0
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
A+O
&=
\begin{pmatrix}
3 & 5\\
7 & 9
\end{pmatrix}
+
\begin{pmatrix}
0 & 0\\
0 & 0
\end{pmatrix}\\
&=
\begin{pmatrix}
3+0 & 5+0\\
7+0 & 9+0
\end{pmatrix}\\
&=
\begin{pmatrix}
3 & 5\\
7 & 9
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
A+O=A
$$

#### I. Lawan dari Suatu Matriks

Lawan dari suatu matriks $A$ adalah matriks $-A$, yaitu matriks yang diperoleh dengan mengganti setiap elemen $A$ menjadi lawannya.

Misalnya:

$$
A=
\begin{pmatrix}
2 & -3\\
4 & 5
\end{pmatrix}
$$

Maka:

$$
-A=
\begin{pmatrix}
-2 & 3\\
-4 & -5
\end{pmatrix}
$$

Jika dijumlahkan:

$$\begin{aligned}
A+(-A)
&=
\begin{pmatrix}
2 & -3\\
4 & 5
\end{pmatrix}
+
\begin{pmatrix}
-2 & 3\\
-4 & -5
\end{pmatrix}\\
&=
\begin{pmatrix}
0 & 0\\
0 & 0
\end{pmatrix}
\end{aligned}$$

Jadi, hasilnya adalah matriks nol.

  **Ingat**

  Pengurangan matriks dapat dipandang sebagai penjumlahan dengan lawan matriks.
  $$
  A-B=A+(-B)
  $$

#### J. Menentukan Elemen yang Belum Diketahui

Dalam beberapa soal, penjumlahan atau pengurangan matriks digunakan untuk menentukan nilai variabel.

Misalnya:

$$
\begin{pmatrix}
x & 4\\
3 & y
\end{pmatrix}
+
\begin{pmatrix}
2 & 1\\
5 & 6
\end{pmatrix}
=
\begin{pmatrix}
9 & 5\\
8 & 10
\end{pmatrix}
$$

Karena elemen yang seletak harus sama, maka:

$$\begin{aligned}
x+2&=9\\
x&=7
\end{aligned}$$

dan:

$$\begin{aligned}
y+6&=10\\
y&=4
\end{aligned}$$

Jadi, $x=7$ dan $y=4$.

#### K. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat menjumlahkan atau mengurangkan matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Menjumlahkan matriks berbeda ordo | Penjumlahan dan pengurangan hanya dapat dilakukan jika ordo kedua matriks sama. |
| Salah memasangkan elemen | Elemen yang dijumlahkan atau dikurangkan harus berada pada posisi yang sama. |
| Salah tanda saat pengurangan | Setiap elemen pada matriks kedua harus dikurangkan dari elemen seletaknya pada matriks pertama. |
| Menganggap $A-B=B-A$ | Pengurangan matriks tidak bersifat komutatif secara umum. |
| Melupakan matriks nol harus seordo | Untuk $A+O=A$, matriks nol $O$ harus memiliki ordo yang sama dengan $A$. |

  **Perhatikan!**

  Walaupun $A+B=B+A$, pada umumnya $A-B \neq B-A$.

#### L. Rangkuman

Berikut rangkuman materi operasi penjumlahan dan pengurangan matriks.

- Dua matriks dapat dijumlahkan jika memiliki ordo yang sama.

- Dua matriks dapat dikurangkan jika memiliki ordo yang sama.

- Penjumlahan matriks dilakukan dengan menjumlahkan elemen-elemen yang seletak.

- Pengurangan matriks dilakukan dengan mengurangkan elemen-elemen yang seletak.

- Penjumlahan matriks bersifat komutatif, yaitu $A+B=B+A$.

- Penjumlahan matriks bersifat asosiatif, yaitu $(A+B)+C=A+(B+C)$.

- Matriks nol berperan sebagai identitas pada penjumlahan matriks.

- Lawan dari matriks $A$ adalah $-A$.

- Pengurangan matriks dapat ditulis sebagai $A-B=A+(-B)$.

- Pada umumnya, pengurangan matriks tidak bersifat komutatif.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui:
$$
A=
\begin{pmatrix}
3 & 5\\
2 & 7
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
4 & 1\\
6 & 8
\end{pmatrix}
$$
Tentukan $A+B$.

Pembahasan

Kedua matriks berordo $2 \times 2$, sehingga dapat dijumlahkan.

$$\begin{aligned}
A+B
&=
\begin{pmatrix}
3 & 5\\
2 & 7
\end{pmatrix}
+
\begin{pmatrix}
4 & 1\\
6 & 8
\end{pmatrix}\\
&=
\begin{pmatrix}
3+4 & 5+1\\
2+6 & 7+8
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & 6\\
8 & 15
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
A+B=
\begin{pmatrix}
7 & 6\\
8 & 15
\end{pmatrix}
$$

  Contoh Soal 2

Diketahui:
$$
P=
\begin{pmatrix}
10 & 8 & 6\\
4 & 2 & 0
\end{pmatrix}
\quad \text{dan} \quad
Q=
\begin{pmatrix}
1 & 3 & 5\\
7 & 9 & 11
\end{pmatrix}
$$
Tentukan $P-Q$.

Pembahasan

Kedua matriks berordo $2 \times 3$, sehingga dapat dikurangkan.

$$\begin{aligned}
P-Q
&=
\begin{pmatrix}
10 & 8 & 6\\
4 & 2 & 0
\end{pmatrix}
-
\begin{pmatrix}
1 & 3 & 5\\
7 & 9 & 11
\end{pmatrix}\\
&=
\begin{pmatrix}
10-1 & 8-3 & 6-5\\
4-7 & 2-9 & 0-11
\end{pmatrix}\\
&=
\begin{pmatrix}
9 & 5 & 1\\
-3 & -7 & -11
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
P-Q=
\begin{pmatrix}
9 & 5 & 1\\
-3 & -7 & -11
\end{pmatrix}
$$

  Contoh Soal 3

Tentukan nilai $x$ dan $y$ yang memenuhi persamaan matriks berikut.
$$
\begin{pmatrix}
x & 4\\
3 & y
\end{pmatrix}
+
\begin{pmatrix}
5 & 2\\
1 & 7
\end{pmatrix}
=
\begin{pmatrix}
12 & 6\\
4 & 10
\end{pmatrix}
$$

Pembahasan

Jumlahkan elemen-elemen yang seletak.

$$
\begin{pmatrix}
x+5 & 4+2\\
3+1 & y+7
\end{pmatrix}
=
\begin{pmatrix}
12 & 6\\
4 & 10
\end{pmatrix}
$$

Dari elemen baris pertama kolom pertama:

$$\begin{aligned}
x+5&=12\\
x&=7
\end{aligned}$$

Dari elemen baris kedua kolom kedua:

$$\begin{aligned}
y+7&=10\\
y&=3
\end{aligned}$$

Jadi, nilai $x=7$ dan $y=3$.

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Dua matriks dapat dijumlahkan jika ....

Ajumlah elemennya berbeda

Bmemiliki ordo yang sama

Csemua elemennya positif

Dkeduanya harus matriks identitas

Ekeduanya harus matriks diagonal

Pembahasan

Dua matriks dapat dijumlahkan jika memiliki ordo yang sama. Jadi, jawabannya adalah **B**.

  Latihan Soal 2

Hasil dari
$$
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
+
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}
$$
adalah ....

A$\begin{pmatrix}6 & 8\\10 & 12\end{pmatrix}$

B$\begin{pmatrix}4 & 4\\4 & 4\end{pmatrix}$

C$\begin{pmatrix}5 & 12\\21 & 32\end{pmatrix}$

D$\begin{pmatrix}6 & 7\\10 & 11\end{pmatrix}$

E$\begin{pmatrix}1 & 2\\7 & 8\end{pmatrix}$

Pembahasan

$$\begin{aligned}
\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}
+
\begin{pmatrix}5 & 6\\7 & 8\end{pmatrix}
&=
\begin{pmatrix}
1+5 & 2+6\\
3+7 & 4+8
\end{pmatrix}\\
&=
\begin{pmatrix}
6 & 8\\
10 & 12
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **A**.

  Latihan Soal 3

Hasil dari
$$
\begin{pmatrix}
9 & 7\\
5 & 3
\end{pmatrix}
-
\begin{pmatrix}
4 & 2\\
1 & 6
\end{pmatrix}
$$
adalah ....

A$\begin{pmatrix}13 & 9\\6 & 9\end{pmatrix}$

B$\begin{pmatrix}5 & 5\\4 & 9\end{pmatrix}$

C$\begin{pmatrix}5 & 5\\4 & -3\end{pmatrix}$

D$\begin{pmatrix}-5 & -5\\-4 & 3\end{pmatrix}$

E$\begin{pmatrix}4 & 2\\1 & 6\end{pmatrix}$

Pembahasan

$$\begin{aligned}
\begin{pmatrix}9 & 7\\5 & 3\end{pmatrix}
-
\begin{pmatrix}4 & 2\\1 & 6\end{pmatrix}
&=
\begin{pmatrix}
9-4 & 7-2\\
5-1 & 3-6
\end{pmatrix}\\
&=
\begin{pmatrix}
5 & 5\\
4 & -3
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 4

Jika
$$
A=
\begin{pmatrix}
2 & 5 & 7\\
1 & 3 & 4
\end{pmatrix}
$$
dan
$$
B=
\begin{pmatrix}
6 & 1 & 2\\
5 & 8 & 9
\end{pmatrix},
$$
maka $A+B$ adalah ....

A$\begin{pmatrix}8 & 6\\8 & 9\\10 & 13\end{pmatrix}$

B$\begin{pmatrix}8 & 6 & 9\\6 & 11 & 13\end{pmatrix}$

C$\begin{pmatrix}4 & 4 & 5\\-4 & -5 & -5\end{pmatrix}$

D$\begin{pmatrix}12 & 5 & 14\\5 & 24 & 36\end{pmatrix}$

E$\begin{pmatrix}8 & 6 & 9\\5 & 10 & 12\end{pmatrix}$

Pembahasan

$$\begin{aligned}
A+B
&=
\begin{pmatrix}
2+6 & 5+1 & 7+2\\
1+5 & 3+8 & 4+9
\end{pmatrix}\\
&=
\begin{pmatrix}
8 & 6 & 9\\
6 & 11 & 13
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 5

Jika
$$
P=
\begin{pmatrix}
8 & 6 & 4\\
2 & 0 & -2
\end{pmatrix}
$$
dan
$$
Q=
\begin{pmatrix}
1 & 3 & 5\\
7 & 9 & 11
\end{pmatrix},
$$
maka $P-Q$ adalah ....

A$\begin{pmatrix}9 & 9 & 9\\9 & 9 & 9\end{pmatrix}$

B$\begin{pmatrix}7 & 3 & 1\\5 & 9 & 13\end{pmatrix}$

C$\begin{pmatrix}7 & 3 & -1\\-5 & -9 & -13\end{pmatrix}$

D$\begin{pmatrix}-7 & -3 & 1\\5 & 9 & 13\end{pmatrix}$

E$\begin{pmatrix}8 & 6 & 4\\7 & 9 & 11\end{pmatrix}$

Pembahasan

$$\begin{aligned}
P-Q
&=
\begin{pmatrix}
8-1 & 6-3 & 4-5\\
2-7 & 0-9 & -2-11
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & 3 & -1\\
-5 & -9 & -13
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 6

Operasi berikut yang tidak dapat dilakukan adalah ....

Amatriks $2 \times 2$ ditambah matriks $2 \times 2$

Bmatriks $3 \times 1$ dikurang matriks $3 \times 1$

Cmatriks $1 \times 4$ ditambah matriks $1 \times 4$

Dmatriks $2 \times 3$ ditambah matriks $3 \times 2$

Ematriks $4 \times 4$ dikurang matriks $4 \times 4$

Pembahasan

Penjumlahan dan pengurangan matriks hanya dapat dilakukan jika ordonya sama. Matriks $2 \times 3$ dan $3 \times 2$ memiliki ordo berbeda, sehingga tidak dapat dijumlahkan. Jadi, jawabannya adalah **D**.

  Latihan Soal 7

Jika
$$
\begin{pmatrix}
x & 3\\
2 & y
\end{pmatrix}
+
\begin{pmatrix}
4 & 5\\
6 & 1
\end{pmatrix}
=
\begin{pmatrix}
10 & 8\\
8 & 9
\end{pmatrix},
$$
maka nilai $x+y$ adalah ....

A$10$

B$11$

C$12$

D$14$

E$16$

Pembahasan

Dari elemen baris pertama kolom pertama:

$$\begin{aligned}
x+4&=10\\
x&=6
\end{aligned}$$

Dari elemen baris kedua kolom kedua:

$$\begin{aligned}
y+1&=9\\
y&=8
\end{aligned}$$

Maka:

$$\begin{aligned}
x+y&=6+8\\
&=14
\end{aligned}$$

Jadi, jawabannya adalah **D**.

  Latihan Soal 8

Jika
$$
A=
\begin{pmatrix}
2 & -4\\
5 & 7
\end{pmatrix},
$$
maka $-A$ adalah ....

A$\begin{pmatrix}2 & 4\\-5 & 7\end{pmatrix}$

B$\begin{pmatrix}-2 & -4\\5 & -7\end{pmatrix}$

C$\begin{pmatrix}-2 & 4\\-5 & -7\end{pmatrix}$

D$\begin{pmatrix}4 & -2\\7 & 5\end{pmatrix}$

E$\begin{pmatrix}2 & -4\\5 & 7\end{pmatrix}$

Pembahasan

Matriks $-A$ diperoleh dengan mengganti setiap elemen pada $A$ menjadi lawannya.

$$
-A=
\begin{pmatrix}
-2 & 4\\
-5 & -7
\end{pmatrix}
$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 9

Jika $A+O=A$, maka matriks $O$ adalah ....

Amatriks identitas

Bmatriks nol yang seordo dengan $A$

Cmatriks diagonal yang semua elemennya $1$

Dmatriks baris apa saja

Ematriks kolom apa saja

Pembahasan

Pada penjumlahan matriks, identitasnya adalah matriks nol yang memiliki ordo sama dengan matriks $A$. Jadi, jawabannya adalah **B**.

  Latihan Soal 10

Pernyataan yang benar tentang pengurangan matriks adalah ....

A$A-B$ selalu sama dengan $B-A$

Bmatriks berbeda ordo tetap dapat dikurangkan

Cpengurangan dilakukan pada elemen-elemen yang seletak

Dpengurangan hanya berlaku untuk matriks identitas

Epengurangan matriks selalu menghasilkan matriks nol

Pembahasan

Pengurangan matriks dilakukan dengan mengurangkan elemen-elemen yang seletak. Pada umumnya, $A-B \neq B-A$. Jadi, jawabannya adalah **C**.

## Perkalian Matriks

### Perkalian Matriks

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 1 Matriks, subbab D Perkalian Matriks, hlm. 21–27.*

#### Perkalian Matriks dengan Skalar

Hasil kali skalar $k$ dengan matriks $A$ adalah matriks $kA$ yang elemennya $k$ kali elemen $A$.

**Sifat 1.2** (untuk $A$, $B$ berordo sama, $k$ dan $h$ skalar): $kO = O$; $kA = O$ untuk $k = 0$; $h(kA) = (hk)A$; $(h \pm k)A = hA \pm kA$; $k(A \pm B) = kA \pm kB$.

#### Definisi 1.6 Perkalian Dua Matriks

Jika $A$ berordo $m \times n$ dan $B$ berordo $n \times p$, maka $C = AB$ berordo $m \times p$, dengan elemen $c_{ij}$ diperoleh dengan mengalikan elemen baris ke-$i$ matriks $A$ terhadap elemen kolom ke-$j$ matriks $B$, lalu dijumlahkan:

$$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + a_{i3}b_{3j} + \cdots + a_{in}b_{nj}$$

Syarat: banyak kolom matriks pertama sama dengan banyak baris matriks kedua.

#### Sifat 1.3 Sifat-sifat Perkalian Dua Matriks

- asosiatif: $(AB)C = A(BC)$
- identitas: $AI = IA = A$
- distributif: $A(B \pm C) = AB \pm AC$ atau $(A \pm B)C = AC \pm BC$

Buku mengajak siswa menyelidiki apakah perkalian dua matriks bersifat komutatif; secara umum $AB \neq BA$.

### Perkalian Matriks dengan Skalar

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/perkalian-matriks-dengan-skalar*

Pada materi sebelumnya, kita sudah mempelajari operasi penjumlahan dan pengurangan matriks. Kita telah memahami bahwa dua matriks hanya dapat dijumlahkan atau dikurangkan jika memiliki ordo yang sama.

Pada materi ini, kita akan mempelajari operasi berikutnya, yaitu **perkalian matriks dengan skalar**. Operasi ini berbeda dengan perkalian dua matriks. Pada perkalian matriks dengan skalar, sebuah bilangan dikalikan ke setiap elemen matriks.

#### A. Pengertian Skalar

Dalam matriks, **skalar** adalah bilangan yang digunakan untuk mengalikan sebuah matriks.

Contoh skalar:

- $2$
- $-3$
- $\frac{1}{2}$
- $0$
- $k$, jika $k$ menyatakan suatu bilangan real

  **Catatan**

  Pada materi ini, skalar dapat dianggap sebagai bilangan biasa yang mengalikan semua elemen dalam matriks.

#### B. Pengertian Perkalian Matriks dengan Skalar

Perkalian matriks dengan skalar adalah operasi mengalikan setiap elemen matriks dengan suatu bilangan.

Misalkan:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
$$

Jika $k$ adalah skalar, maka:

$$
kA=
k
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
=
\begin{pmatrix}
ka & kb\\
kc & kd
\end{pmatrix}
$$

  **Inti penting**

  Untuk mengalikan matriks dengan skalar, kalikan setiap elemen matriks dengan skalar tersebut.

#### C. Contoh Perkalian Matriks dengan Skalar

Diketahui:

$$
A=
\begin{pmatrix}
2 & 4\\
1 & 3
\end{pmatrix}
$$

Tentukan $3A$.

Karena $3A$ berarti setiap elemen matriks $A$ dikalikan dengan $3$, maka:

$$\begin{aligned}
3A
&=
3
\begin{pmatrix}
2 & 4\\
1 & 3
\end{pmatrix}\\
&=
\begin{pmatrix}
3\cdot2 & 3\cdot4\\
3\cdot1 & 3\cdot3
\end{pmatrix}\\
&=
\begin{pmatrix}
6 & 12\\
3 & 9
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
3A=
\begin{pmatrix}
6 & 12\\
3 & 9
\end{pmatrix}
$$

#### D. Perkalian Matriks dengan Skalar Negatif

Jika skalar bernilai negatif, maka setiap elemen matriks dikalikan dengan bilangan negatif tersebut. Hal ini dapat mengubah tanda setiap elemen.

Contoh:

$$
B=
\begin{pmatrix}
3 & -2\\
-5 & 4
\end{pmatrix}
$$

Tentukan $-2B$.

$$\begin{aligned}
-2B
&=
-2
\begin{pmatrix}
3 & -2\\
-5 & 4
\end{pmatrix}\\
&=
\begin{pmatrix}
-2\cdot3 & -2\cdot(-2)\\
-2\cdot(-5) & -2\cdot4
\end{pmatrix}\\
&=
\begin{pmatrix}
-6 & 4\\
10 & -8
\end{pmatrix}
\end{aligned}$$

  **Perhatikan!**

  Saat mengalikan matriks dengan skalar negatif, hati-hati terhadap tanda negatif. Misalnya $-2\cdot(-5)=10$, bukan $-10$.

#### E. Perkalian Matriks dengan Skalar Pecahan

Skalar juga dapat berupa pecahan. Caranya tetap sama, yaitu setiap elemen matriks dikalikan dengan pecahan tersebut.

Contoh:

$$
C=
\begin{pmatrix}
4 & 8\\
10 & 12
\end{pmatrix}
$$

Tentukan $\frac{1}{2}C$.

$$\begin{aligned}
\frac{1}{2}C
&=
\frac{1}{2}
\begin{pmatrix}
4 & 8\\
10 & 12
\end{pmatrix}\\
&=
\begin{pmatrix}
\frac{1}{2}\cdot4 & \frac{1}{2}\cdot8\\
\frac{1}{2}\cdot10 & \frac{1}{2}\cdot12
\end{pmatrix}\\
&=
\begin{pmatrix}
2 & 4\\
5 & 6
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
\frac{1}{2}C=
\begin{pmatrix}
2 & 4\\
5 & 6
\end{pmatrix}
$$

#### F. Perkalian Matriks dengan Nol

Jika suatu matriks dikalikan dengan skalar $0$, maka hasilnya adalah matriks nol dengan ordo yang sama.

Misalkan:

$$
D=
\begin{pmatrix}
7 & -1\\
3 & 5
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
0D
&=
0
\begin{pmatrix}
7 & -1\\
3 & 5
\end{pmatrix}\\
&=
\begin{pmatrix}
0\cdot7 & 0\cdot(-1)\\
0\cdot3 & 0\cdot5
\end{pmatrix}\\
&=
\begin{pmatrix}
0 & 0\\
0 & 0
\end{pmatrix}
\end{aligned}$$

  **Ingat**

  Perkalian matriks dengan skalar $0$ selalu menghasilkan matriks nol yang ordonya sama dengan matriks semula.

#### G. Lawan Matriks dan Perkalian dengan $-1$

Pada materi sebelumnya, kita sudah mengenal lawan dari suatu matriks. Lawan dari matriks $A$ ditulis $-A$.

Lawan matriks sebenarnya dapat dipahami sebagai hasil perkalian matriks dengan skalar $-1$.

$$
-A=(-1)A
$$

Misalnya:

$$
A=
\begin{pmatrix}
2 & -3\\
4 & 5
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
-A
&=
(-1)
\begin{pmatrix}
2 & -3\\
4 & 5
\end{pmatrix}\\
&=
\begin{pmatrix}
-2 & 3\\
-4 & -5
\end{pmatrix}
\end{aligned}$$

#### H. Sifat-sifat Perkalian Matriks dengan Skalar

Perkalian matriks dengan skalar memiliki beberapa sifat penting.

| Sifat | Bentuk Umum | Keterangan |
| --- | --- | --- |
| Distributif terhadap penjumlahan matriks | $k(A+B)=kA+kB$ | Skalar dapat dikalikan setelah matriks dijumlahkan atau ke masing-masing matriks terlebih dahulu. |
| Distributif terhadap penjumlahan skalar | $(k+l)A=kA+lA$ | Jumlah skalar dapat didistribusikan ke matriks. |
| Asosiatif terhadap skalar | $k(lA)=(kl)A$ | Perkalian skalar dapat dikelompokkan terlebih dahulu. |
| Identitas skalar | $1A=A$ | Jika matriks dikalikan $1$, hasilnya tetap matriks semula. |
| Perkalian dengan nol | $0A=O$ | Hasilnya matriks nol seordo dengan $A$. |

  **Catatan**

  Sifat-sifat ini akan sering digunakan saat menyederhanakan bentuk matriks yang memuat beberapa operasi sekaligus.

#### I. Menggabungkan Skalar dengan Penjumlahan Matriks

Kadang soal meminta kita menghitung bentuk seperti $2A+3B$. Pada bentuk seperti ini, kita harus mengalikan masing-masing matriks dengan skalarnya, lalu menjumlahkan hasilnya.

Contoh:

$$
A=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}
$$

Tentukan $2A+B$.

$$\begin{aligned}
2A
&=
2
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}\\
&=
\begin{pmatrix}
2 & 4\\
6 & 8
\end{pmatrix}
\end{aligned}$$

Maka:

$$\begin{aligned}
2A+B
&=
\begin{pmatrix}
2 & 4\\
6 & 8
\end{pmatrix}
+
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & 10\\
13 & 16
\end{pmatrix}
\end{aligned}$$

#### J. Menentukan Elemen yang Belum Diketahui

Perkalian matriks dengan skalar juga dapat digunakan untuk menentukan nilai variabel.

Misalnya:

$$
2
\begin{pmatrix}
x & 3\\
4 & y
\end{pmatrix}
=
\begin{pmatrix}
10 & 6\\
8 & 14
\end{pmatrix}
$$

Kalikan skalar $2$ ke setiap elemen matriks sebelah kiri.

$$
\begin{pmatrix}
2x & 6\\
8 & 2y
\end{pmatrix}
=
\begin{pmatrix}
10 & 6\\
8 & 14
\end{pmatrix}
$$

Dari elemen yang seletak:

$$\begin{aligned}
2x&=10\\
x&=5
\end{aligned}$$

dan:

$$\begin{aligned}
2y&=14\\
y&=7
\end{aligned}$$

Jadi, $x=5$ dan $y=7$.

#### K. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat mengalikan matriks dengan skalar adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Hanya mengalikan satu elemen | Skalar harus dikalikan ke semua elemen matriks. |
| Salah tanda saat skalar negatif | Perhatikan bahwa negatif dikali negatif hasilnya positif. |
| Mengubah ordo matriks | Perkalian dengan skalar tidak mengubah ordo matriks. |
| Mengira perkalian skalar sama dengan perkalian dua matriks | Perkalian skalar hanya mengalikan setiap elemen dengan bilangan, bukan menggunakan aturan baris-kolom. |
| Salah menghitung bentuk seperti $2A-B$ | Hitung $2A$ terlebih dahulu, lalu kurangkan dengan $B$ secara elemen seletak. |

  **Perhatikan!**

  Jika $A$ berordo $m \times n$, maka $kA$ juga berordo $m \times n$. Perkalian dengan skalar tidak mengubah ukuran matriks.

#### L. Rangkuman

Berikut rangkuman materi perkalian matriks dengan skalar.

- Skalar adalah bilangan yang mengalikan matriks.

- Perkalian matriks dengan skalar dilakukan dengan mengalikan setiap elemen matriks dengan skalar tersebut.

- Jika $A=\begin{pmatrix}a & b\\c & d\end{pmatrix}$, maka $kA=\begin{pmatrix}ka & kb\\kc & kd\end{pmatrix}$.

- Perkalian dengan skalar negatif dapat mengubah tanda elemen-elemen matriks.

- Perkalian matriks dengan $0$ menghasilkan matriks nol.

- Lawan matriks $-A$ sama dengan $(-1)A$.

- Perkalian matriks dengan skalar tidak mengubah ordo matriks.

- Sifat penting: $k(A+B)=kA+kB$.

- Sifat penting: $(k+l)A=kA+lA$.

- Sifat penting: $k(lA)=(kl)A$.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui:
$$
A=
\begin{pmatrix}
2 & 5\\
-1 & 4
\end{pmatrix}
$$
Tentukan $3A$.

Pembahasan

Kalikan setiap elemen matriks $A$ dengan $3$.

$$\begin{aligned}
3A
&=
3
\begin{pmatrix}
2 & 5\\
-1 & 4
\end{pmatrix}\\
&=
\begin{pmatrix}
3\cdot2 & 3\cdot5\\
3\cdot(-1) & 3\cdot4
\end{pmatrix}\\
&=
\begin{pmatrix}
6 & 15\\
-3 & 12
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
3A=
\begin{pmatrix}
6 & 15\\
-3 & 12
\end{pmatrix}
$$

  Contoh Soal 2

Diketahui:
$$
B=
\begin{pmatrix}
4 & -2 & 6\\
-1 & 3 & 5
\end{pmatrix}
$$
Tentukan $-2B$.

Pembahasan

Kalikan setiap elemen matriks $B$ dengan $-2$.

$$\begin{aligned}
-2B
&=
-2
\begin{pmatrix}
4 & -2 & 6\\
-1 & 3 & 5
\end{pmatrix}\\
&=
\begin{pmatrix}
-2\cdot4 & -2\cdot(-2) & -2\cdot6\\
-2\cdot(-1) & -2\cdot3 & -2\cdot5
\end{pmatrix}\\
&=
\begin{pmatrix}
-8 & 4 & -12\\
2 & -6 & -10
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
-2B=
\begin{pmatrix}
-8 & 4 & -12\\
2 & -6 & -10
\end{pmatrix}
$$

  Contoh Soal 3

Diketahui:
$$
A=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
5 & 1\\
-2 & 3
\end{pmatrix}
$$
Tentukan $2A-B$.

Pembahasan

Hitung $2A$ terlebih dahulu.

$$\begin{aligned}
2A
&=
2
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}\\
&=
\begin{pmatrix}
2 & 4\\
6 & 8
\end{pmatrix}
\end{aligned}$$

Maka:

$$\begin{aligned}
2A-B
&=
\begin{pmatrix}
2 & 4\\
6 & 8
\end{pmatrix}
-
\begin{pmatrix}
5 & 1\\
-2 & 3
\end{pmatrix}\\
&=
\begin{pmatrix}
2-5 & 4-1\\
6-(-2) & 8-3
\end{pmatrix}\\
&=
\begin{pmatrix}
-3 & 3\\
8 & 5
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
2A-B=
\begin{pmatrix}
-3 & 3\\
8 & 5
\end{pmatrix}
$$

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Perkalian matriks dengan skalar dilakukan dengan cara ....

Amengalikan hanya elemen pertama matriks

Bmengalikan setiap elemen matriks dengan skalar

Cmenjumlahkan semua elemen matriks

Dmengubah baris menjadi kolom

Emenghapus elemen diagonal utama

Pembahasan

Perkalian matriks dengan skalar dilakukan dengan mengalikan setiap elemen matriks dengan skalar tersebut. Jadi, jawabannya adalah **B**.

  Latihan Soal 2

Jika
$$
A=
\begin{pmatrix}
2 & 3\\
4 & 5
\end{pmatrix},
$$
maka $2A$ adalah ....

A$\begin{pmatrix}4 & 6\\8 & 10\end{pmatrix}$

B$\begin{pmatrix}2 & 6\\8 & 5\end{pmatrix}$

C$\begin{pmatrix}4 & 5\\6 & 7\end{pmatrix}$

D$\begin{pmatrix}2 & 3\\8 & 10\end{pmatrix}$

E$\begin{pmatrix}6 & 8\\10 & 12\end{pmatrix}$

Pembahasan

$$\begin{aligned}
2A
&=
2
\begin{pmatrix}
2 & 3\\
4 & 5
\end{pmatrix}\\
&=
\begin{pmatrix}
4 & 6\\
8 & 10
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **A**.

  Latihan Soal 3

Jika
$$
B=
\begin{pmatrix}
1 & -2\\
3 & -4
\end{pmatrix},
$$
maka $-3B$ adalah ....

A$\begin{pmatrix}3 & -6\\9 & -12\end{pmatrix}$

B$\begin{pmatrix}-3 & 6\\-9 & 12\end{pmatrix}$

C$\begin{pmatrix}-3 & -6\\-9 & -12\end{pmatrix}$

D$\begin{pmatrix}1 & 6\\3 & 12\end{pmatrix}$

E$\begin{pmatrix}-1 & 2\\-3 & 4\end{pmatrix}$

Pembahasan

$$\begin{aligned}
-3B
&=
-3
\begin{pmatrix}
1 & -2\\
3 & -4
\end{pmatrix}\\
&=
\begin{pmatrix}
-3 & 6\\
-9 & 12
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 4

Jika
$$
C=
\begin{pmatrix}
6 & 8\\
10 & 12
\end{pmatrix},
$$
maka $\frac{1}{2}C$ adalah ....

A$\begin{pmatrix}6 & 4\\5 & 6\end{pmatrix}$

B$\begin{pmatrix}12 & 16\\20 & 24\end{pmatrix}$

C$\begin{pmatrix}3 & 4\\5 & 6\end{pmatrix}$

D$\begin{pmatrix}3 & 8\\10 & 6\end{pmatrix}$

E$\begin{pmatrix}6 & 8\\5 & 6\end{pmatrix}$

Pembahasan

$$\begin{aligned}
\frac{1}{2}C
&=
\frac{1}{2}
\begin{pmatrix}
6 & 8\\
10 & 12
\end{pmatrix}\\
&=
\begin{pmatrix}
3 & 4\\
5 & 6
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 5

Jika
$$
A=
\begin{pmatrix}
3 & -1\\
2 & 5
\end{pmatrix},
$$
maka $0A$ adalah ....

A$\begin{pmatrix}3 & -1\\2 & 5\end{pmatrix}$

B$\begin{pmatrix}1 & 1\\1 & 1\end{pmatrix}$

C$\begin{pmatrix}-3 & 1\\-2 & -5\end{pmatrix}$

D$\begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}$

E$\begin{pmatrix}0 & -1\\2 & 0\end{pmatrix}$

Pembahasan

Jika suatu matriks dikalikan dengan skalar $0$, maka hasilnya adalah matriks nol seordo. Jadi, jawabannya adalah **D**.

  Latihan Soal 6

Jika
$$
A=
\begin{pmatrix}
2 & -5\\
4 & 1
\end{pmatrix},
$$
maka $-A$ adalah ....

A$\begin{pmatrix}2 & 5\\-4 & 1\end{pmatrix}$

B$\begin{pmatrix}-2 & -5\\4 & -1\end{pmatrix}$

C$\begin{pmatrix}-2 & 5\\-4 & -1\end{pmatrix}$

D$\begin{pmatrix}5 & -2\\1 & 4\end{pmatrix}$

E$\begin{pmatrix}2 & -5\\4 & 1\end{pmatrix}$

Pembahasan

Matriks $-A$ diperoleh dengan mengganti setiap elemen menjadi lawannya.

$$
-A=
\begin{pmatrix}
-2 & 5\\
-4 & -1
\end{pmatrix}
$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 7

Jika
$$
A=
\begin{pmatrix}
1 & 3\\
2 & 4
\end{pmatrix}
$$
dan
$$
B=
\begin{pmatrix}
5 & 2\\
1 & 6
\end{pmatrix},
$$
maka $2A+B$ adalah ....

A$\begin{pmatrix}7 & 5\\3 & 10\end{pmatrix}$

B$\begin{pmatrix}7 & 8\\5 & 14\end{pmatrix}$

C$\begin{pmatrix}6 & 5\\3 & 10\end{pmatrix}$

D$\begin{pmatrix}12 & 10\\6 & 20\end{pmatrix}$

E$\begin{pmatrix}7 & 8\\4 & 12\end{pmatrix}$

Pembahasan

$$\begin{aligned}
2A
&=
2
\begin{pmatrix}
1 & 3\\
2 & 4
\end{pmatrix}
=
\begin{pmatrix}
2 & 6\\
4 & 8
\end{pmatrix}
\end{aligned}$$

Maka:

$$\begin{aligned}
2A+B
&=
\begin{pmatrix}
2 & 6\\
4 & 8
\end{pmatrix}
+
\begin{pmatrix}
5 & 2\\
1 & 6
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & 8\\
5 & 14
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 8

Jika
$$
A=
\begin{pmatrix}
3 & 1\\
4 & 2
\end{pmatrix}
$$
dan
$$
B=
\begin{pmatrix}
2 & 5\\
1 & 6
\end{pmatrix},
$$
maka $3A-B$ adalah ....

A$\begin{pmatrix}7 & -2\\11 & 0\end{pmatrix}$

B$\begin{pmatrix}5 & -4\\9 & -4\end{pmatrix}$

C$\begin{pmatrix}9 & 3\\12 & 6\end{pmatrix}$

D$\begin{pmatrix}11 & 8\\13 & 8\end{pmatrix}$

E$\begin{pmatrix}7 & 2\\11 & 0\end{pmatrix}$

Pembahasan

$$\begin{aligned}
3A
&=
3
\begin{pmatrix}
3 & 1\\
4 & 2
\end{pmatrix}
=
\begin{pmatrix}
9 & 3\\
12 & 6
\end{pmatrix}
\end{aligned}$$

Maka:

$$\begin{aligned}
3A-B
&=
\begin{pmatrix}
9 & 3\\
12 & 6
\end{pmatrix}
-
\begin{pmatrix}
2 & 5\\
1 & 6
\end{pmatrix}\\
&=
\begin{pmatrix}
7 & -2\\
11 & 0
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **A**.

  Latihan Soal 9

Jika
$$
2
\begin{pmatrix}
x & 3\\
4 & y
\end{pmatrix}
=
\begin{pmatrix}
12 & 6\\
8 & 10
\end{pmatrix},
$$
maka nilai $x+y$ adalah ....

A$9$

B$10$

C$11$

D$12$

E$13$

Pembahasan

$$
2
\begin{pmatrix}
x & 3\\
4 & y
\end{pmatrix}
=
\begin{pmatrix}
2x & 6\\
8 & 2y
\end{pmatrix}
$$

Dari elemen yang seletak:

$$\begin{aligned}
2x&=12\\
x&=6
\end{aligned}$$

dan:

$$\begin{aligned}
2y&=10\\
y&=5
\end{aligned}$$

Maka:

$$\begin{aligned}
x+y&=6+5\\
&=11
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 10

Pernyataan yang benar tentang perkalian matriks dengan skalar adalah ....

Aperkalian skalar selalu mengubah ordo matriks

Bskalar hanya dikalikan pada elemen diagonal utama

Cperkalian skalar hanya berlaku untuk matriks persegi

Dsetiap elemen matriks dikalikan dengan skalar tersebut

Eperkalian skalar selalu menghasilkan matriks identitas

Pembahasan

Pada perkalian matriks dengan skalar, setiap elemen matriks dikalikan dengan skalar tersebut. Ordo matriks tidak berubah. Jadi, jawabannya adalah **D**.

### Perkalian Dua Matriks

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/perkalian-dua-matriks*

Pada materi sebelumnya, kita sudah mempelajari perkalian matriks dengan skalar. Pada operasi tersebut, sebuah bilangan dikalikan ke setiap elemen matriks.

Pada materi ini, kita akan mempelajari **perkalian dua matriks**. Operasi ini berbeda dengan perkalian matriks dengan skalar. Dalam perkalian dua matriks, kita tidak mengalikan elemen yang seletak, tetapi menggunakan aturan **baris dikali kolom**.

#### A. Ide Dasar Perkalian Dua Matriks

Perkalian dua matriks adalah operasi yang menggabungkan baris dari matriks pertama dengan kolom dari matriks kedua.

Misalnya kita ingin mengalikan matriks $A$ dengan matriks $B$, yaitu:

$$
AB
$$

Maka elemen-elemen hasil perkalian diperoleh dari:

-  baris matriks $A$
- kolom matriks $B$

  **Inti penting**

  Pada perkalian dua matriks, elemen hasil diperoleh dari jumlah hasil kali elemen-elemen pada baris matriks pertama dengan kolom matriks kedua.

#### B. Syarat Dua Matriks Dapat Dikalikan

Dua matriks dapat dikalikan jika banyak kolom matriks pertama sama dengan banyak baris matriks kedua.

Jika:

$$
A \text{ berordo } m \times n
$$

dan:

$$
B \text{ berordo } n \times p
$$

maka $AB$ dapat dikalikan dan hasilnya berordo:

$$
m \times p
$$

  **Catatan**

  Pada perkalian $AB$, yang harus sama adalah **kolom matriks pertama** dan **baris matriks kedua**.

Secara ringkas:

$$
(m \times n)(n \times p)=m \times p
$$

Bagian tengah harus sama, sedangkan ordo hasil diambil dari bagian luar.

  **Cara cepat mengecek ordo**

  $$
  (2 \times 3)(3 \times 4)=2 \times 4
  $$
  Karena angka tengah sama-sama $3$, perkalian dapat dilakukan. Hasilnya berordo $2 \times 4$.

#### C. Contoh Syarat Perkalian Matriks

| Ordo Matriks Pertama | Ordo Matriks Kedua | Dapat Dikalikan? | Ordo Hasil |
| --- | --- | --- | --- |
| $2 \times 3$ | $3 \times 2$ | Ya | $2 \times 2$ |
| $3 \times 2$ | $2 \times 4$ | Ya | $3 \times 4$ |
| $2 \times 2$ | $3 \times 2$ | Tidak | Tidak ada |
| $1 \times 3$ | $3 \times 1$ | Ya | $1 \times 1$ |
| $3 \times 1$ | $1 \times 3$ | Ya | $3 \times 3$ |

#### D. Cara Mengalikan Matriks $2 \times 2$ dengan $2 \times 2$

Misalkan:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
e & f\\
g & h
\end{pmatrix}
$$

Maka:

$$
AB=
\begin{pmatrix}
ae+bg & af+bh\\
ce+dg & cf+dh
\end{pmatrix}
$$

Perhatikan bahwa setiap elemen hasil diperoleh dari baris matriks pertama dikalikan dengan kolom matriks kedua.

  **Perhatikan!**

  Pada perkalian dua matriks, jangan mengalikan elemen yang seletak seperti pada penjumlahan matriks. Aturannya adalah baris dikali kolom.

#### E. Contoh Perkalian Matriks $2 \times 2$

Diketahui:

$$
A=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}
$$

Tentukan $AB$.

Matriks $A$ berordo $2 \times 2$ dan matriks $B$ berordo $2 \times 2$. Karena banyak kolom matriks pertama sama dengan banyak baris matriks kedua, perkalian $AB$ dapat dilakukan.

$$\begin{aligned}
AB
&=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}\\
&=
\begin{pmatrix}
1\cdot5+2\cdot7 & 1\cdot6+2\cdot8\\
3\cdot5+4\cdot7 & 3\cdot6+4\cdot8
\end{pmatrix}\\
&=
\begin{pmatrix}
5+14 & 6+16\\
15+28 & 18+32
\end{pmatrix}\\
&=
\begin{pmatrix}
19 & 22\\
43 & 50
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
AB=
\begin{pmatrix}
19 & 22\\
43 & 50
\end{pmatrix}
$$

#### F. Perkalian Matriks Tidak Selalu Komutatif

Pada bilangan biasa, kita tahu bahwa:

$$
2 \times 3 = 3 \times 2
$$

Namun pada matriks, secara umum:

$$
AB \neq BA
$$

Bahkan, bisa saja $AB$ dapat dilakukan, tetapi $BA$ tidak dapat dilakukan.

  **Perhatikan!**

  Perkalian matriks pada umumnya tidak bersifat komutatif. Jadi, urutan perkalian sangat penting.

Contoh:

$$
A \text{ berordo } 2 \times 3
$$

dan:

$$
B \text{ berordo } 3 \times 4
$$

Maka $AB$ dapat dilakukan dan hasilnya berordo $2 \times 4$. Akan tetapi, $BA$ tidak dapat dilakukan karena:

$$
(3 \times 4)(2 \times 3)
$$

angka tengahnya $4$ dan $2$, tidak sama.

#### G. Perkalian Matriks Baris dengan Matriks Kolom

Perkalian matriks baris dengan matriks kolom sering menghasilkan matriks berordo $1 \times 1$.

Misalnya:

$$
A=
\begin{pmatrix}
2 & 3 & 4
\end{pmatrix}
$$

dan:

$$
B=
\begin{pmatrix}
5\\
6\\
7
\end{pmatrix}
$$

Matriks $A$ berordo $1 \times 3$ dan matriks $B$ berordo $3 \times 1$, sehingga $AB$ dapat dilakukan dan hasilnya berordo $1 \times 1$.

$$\begin{aligned}
AB
&=
\begin{pmatrix}
2 & 3 & 4
\end{pmatrix}
\begin{pmatrix}
5\\
6\\
7
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot5+3\cdot6+4\cdot7
\end{pmatrix}\\
&=
\begin{pmatrix}
10+18+28
\end{pmatrix}\\
&=
\begin{pmatrix}
56
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
AB=
\begin{pmatrix}
56
\end{pmatrix}
$$

#### H. Perkalian Matriks Kolom dengan Matriks Baris

Jika urutannya dibalik, hasilnya bisa berbeda ukuran.

Misalnya:

$$
B=
\begin{pmatrix}
5\\
6\\
7
\end{pmatrix}
$$

dan:

$$
A=
\begin{pmatrix}
2 & 3 & 4
\end{pmatrix}
$$

Matriks $B$ berordo $3 \times 1$ dan matriks $A$ berordo $1 \times 3$, sehingga $BA$ dapat dilakukan dan hasilnya berordo $3 \times 3$.

$$\begin{aligned}
BA
&=
\begin{pmatrix}
5\\
6\\
7
\end{pmatrix}
\begin{pmatrix}
2 & 3 & 4
\end{pmatrix}\\
&=
\begin{pmatrix}
5\cdot2 & 5\cdot3 & 5\cdot4\\
6\cdot2 & 6\cdot3 & 6\cdot4\\
7\cdot2 & 7\cdot3 & 7\cdot4
\end{pmatrix}\\
&=
\begin{pmatrix}
10 & 15 & 20\\
12 & 18 & 24\\
14 & 21 & 28
\end{pmatrix}
\end{aligned}$$

  **Catatan**

  Contoh ini menunjukkan bahwa $AB$ dan $BA$ dapat sama-sama terdefinisi, tetapi hasilnya belum tentu memiliki ordo yang sama.

#### I. Perkalian Matriks $2 \times 3$ dengan $3 \times 2$

Sekarang perhatikan perkalian matriks yang ukurannya berbeda.

Misalkan:

$$
A=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
$$

dan:

$$
B=
\begin{pmatrix}
7 & 8\\
9 & 10\\
11 & 12
\end{pmatrix}
$$

Matriks $A$ berordo $2 \times 3$ dan matriks $B$ berordo $3 \times 2$. Karena angka tengahnya sama-sama $3$, maka $AB$ dapat dilakukan.

Ordo hasilnya adalah:

$$
2 \times 2
$$

Hitung:

$$\begin{aligned}
AB
&=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
\begin{pmatrix}
7 & 8\\
9 & 10\\
11 & 12
\end{pmatrix}\\
&=
\begin{pmatrix}
1\cdot7+2\cdot9+3\cdot11 & 1\cdot8+2\cdot10+3\cdot12\\
4\cdot7+5\cdot9+6\cdot11 & 4\cdot8+5\cdot10+6\cdot12
\end{pmatrix}\\
&=
\begin{pmatrix}
7+18+33 & 8+20+36\\
28+45+66 & 32+50+72
\end{pmatrix}\\
&=
\begin{pmatrix}
58 & 64\\
139 & 154
\end{pmatrix}
\end{aligned}$$

#### J. Matriks Identitas dalam Perkalian Matriks

Pada materi jenis-jenis matriks, kita sudah mengenal matriks identitas. Dalam perkalian matriks, matriks identitas berperan seperti bilangan $1$ pada perkalian bilangan biasa.

Jika ukuran matriks sesuai, maka:

$$
AI=A
$$

dan:

$$
IA=A
$$

Contoh:

$$
A=
\begin{pmatrix}
2 & 5\\
1 & 3
\end{pmatrix}
\quad \text{dan} \quad
I=
\begin{pmatrix}
1 & 0\\
0 & 1
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
AI
&=
\begin{pmatrix}
2 & 5\\
1 & 3
\end{pmatrix}
\begin{pmatrix}
1 & 0\\
0 & 1
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot1+5\cdot0 & 2\cdot0+5\cdot1\\
1\cdot1+3\cdot0 & 1\cdot0+3\cdot1
\end{pmatrix}\\
&=
\begin{pmatrix}
2 & 5\\
1 & 3
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
AI=A
$$

#### K. Sifat-sifat Perkalian Matriks

Perkalian matriks memiliki beberapa sifat penting.

| Sifat | Bentuk Umum | Keterangan |
| --- | --- | --- |
| Asosiatif | $(AB)C=A(BC)$ | Pengelompokan perkalian dapat diubah jika semua operasi terdefinisi. |
| Distributif kiri | $A(B+C)=AB+AC$ | Berlaku jika ukuran matriks sesuai. |
| Distributif kanan | $(A+B)C=AC+BC$ | Berlaku jika ukuran matriks sesuai. |
| Identitas perkalian | $AI=A$ dan $IA=A$ | Matriks identitas harus memiliki ordo yang sesuai. |
| Tidak komutatif secara umum | $AB \neq BA$ | Urutan perkalian matriks sangat penting. |

  **Perhatikan!**

  Walaupun perkalian matriks bersifat asosiatif dan distributif, perkalian matriks tidak bersifat komutatif secara umum.

#### L. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat mengalikan dua matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Mengalikan elemen yang seletak | Perkalian dua matriks menggunakan aturan baris dikali kolom, bukan elemen seletak. |
| Tidak mengecek syarat ordo | Pastikan kolom matriks pertama sama dengan baris matriks kedua. |
| Salah menentukan ordo hasil | Jika $(m \times n)(n \times p)$, hasilnya berordo $m \times p$. |
| Menganggap $AB=BA$ | Perkalian matriks tidak komutatif secara umum. |
| Salah tanda saat elemen negatif | Perhatikan operasi bilangan negatif saat menghitung hasil kali dan jumlahnya. |

#### M. Rangkuman

Berikut rangkuman materi perkalian dua matriks.

- Dua matriks dapat dikalikan jika banyak kolom matriks pertama sama dengan banyak baris matriks kedua.

- Jika $A$ berordo $m \times n$ dan $B$ berordo $n \times p$, maka $AB$ berordo $m \times p$.

- Elemen hasil perkalian matriks diperoleh dari baris matriks pertama dikalikan dengan kolom matriks kedua.

- Perkalian matriks tidak dilakukan dengan mengalikan elemen yang seletak.

- Perkalian matriks pada umumnya tidak bersifat komutatif.

- Bisa saja $AB$ dapat dilakukan, tetapi $BA$ tidak dapat dilakukan.

- Matriks identitas berperan seperti bilangan $1$ dalam perkalian matriks.

- Perkalian matriks bersifat asosiatif jika semua operasi terdefinisi.

- Perkalian matriks bersifat distributif terhadap penjumlahan jika ukuran matriks sesuai.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui:
$$
A=
\begin{pmatrix}
2 & 1\\
3 & 4
\end{pmatrix}
\quad \text{dan} \quad
B=
\begin{pmatrix}
5 & 2\\
1 & 6
\end{pmatrix}
$$
Tentukan $AB$.

Pembahasan

Kedua matriks berordo $2 \times 2$, sehingga $AB$ dapat dilakukan.

$$\begin{aligned}
AB
&=
\begin{pmatrix}
2 & 1\\
3 & 4
\end{pmatrix}
\begin{pmatrix}
5 & 2\\
1 & 6
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot5+1\cdot1 & 2\cdot2+1\cdot6\\
3\cdot5+4\cdot1 & 3\cdot2+4\cdot6
\end{pmatrix}\\
&=
\begin{pmatrix}
10+1 & 4+6\\
15+4 & 6+24
\end{pmatrix}\\
&=
\begin{pmatrix}
11 & 10\\
19 & 30
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
AB=
\begin{pmatrix}
11 & 10\\
19 & 30
\end{pmatrix}
$$

  Contoh Soal 2

Diketahui:
$$
P=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
\quad \text{dan} \quad
Q=
\begin{pmatrix}
2 & 1\\
3 & 4\\
5 & 6
\end{pmatrix}
$$
Tentukan $PQ$.

Pembahasan

Matriks $P$ berordo $2 \times 3$ dan matriks $Q$ berordo $3 \times 2$, sehingga $PQ$ dapat dilakukan dan hasilnya berordo $2 \times 2$.

$$\begin{aligned}
PQ
&=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
\begin{pmatrix}
2 & 1\\
3 & 4\\
5 & 6
\end{pmatrix}\\
&=
\begin{pmatrix}
1\cdot2+2\cdot3+3\cdot5 & 1\cdot1+2\cdot4+3\cdot6\\
4\cdot2+5\cdot3+6\cdot5 & 4\cdot1+5\cdot4+6\cdot6
\end{pmatrix}\\
&=
\begin{pmatrix}
2+6+15 & 1+8+18\\
8+15+30 & 4+20+36
\end{pmatrix}\\
&=
\begin{pmatrix}
23 & 27\\
53 & 60
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
PQ=
\begin{pmatrix}
23 & 27\\
53 & 60
\end{pmatrix}
$$

  Contoh Soal 3

Diketahui matriks $A$ berordo $3 \times 2$ dan matriks $B$ berordo $2 \times 4$. Tentukan apakah $AB$ dapat dilakukan. Jika dapat, tentukan ordo hasilnya.

Pembahasan

Matriks $A$ berordo $3 \times 2$, sedangkan matriks $B$ berordo $2 \times 4$.

Perhatikan ordo perkaliannya:

$$
(3 \times 2)(2 \times 4)
$$

Angka tengahnya sama, yaitu $2$. Maka perkalian $AB$ dapat dilakukan.

Ordo hasilnya diambil dari angka luar, yaitu:

$$
3 \times 4
$$

Jadi, $AB$ dapat dilakukan dan hasilnya berordo $3 \times 4$.

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Dua matriks $A$ dan $B$ dapat dikalikan dalam bentuk $AB$ jika ....

Abanyak baris $A$ sama dengan banyak baris $B$

Bbanyak kolom $A$ sama dengan banyak baris $B$

Cbanyak kolom $A$ sama dengan banyak kolom $B$

Dkedua matriks harus matriks nol

Ekedua matriks harus matriks identitas

Pembahasan

Perkalian $AB$ dapat dilakukan jika banyak kolom matriks $A$ sama dengan banyak baris matriks $B$. Jadi, jawabannya adalah **B**.

  Latihan Soal 2

Jika $A$ berordo $2 \times 3$ dan $B$ berordo $3 \times 4$, maka ordo $AB$ adalah ....

A$2 \times 4$

B$3 \times 3$

C$4 \times 2$

D$2 \times 3$

E$3 \times 4$

Pembahasan

Karena:

$$
(2 \times 3)(3 \times 4)
$$

angka tengah sama-sama $3$, maka $AB$ dapat dilakukan. Ordo hasilnya adalah $2 \times 4$. Jadi, jawabannya adalah **A**.

  Latihan Soal 3

Hasil dari
$$
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}
$$
adalah ....

A$\begin{pmatrix}6 & 8\\10 & 12\end{pmatrix}$

B$\begin{pmatrix}5 & 12\\21 & 32\end{pmatrix}$

C$\begin{pmatrix}19 & 22\\43 & 50\end{pmatrix}$

D$\begin{pmatrix}26 & 30\\38 & 44\end{pmatrix}$

E$\begin{pmatrix}12 & 14\\24 & 28\end{pmatrix}$

Pembahasan

$$\begin{aligned}
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
\begin{pmatrix}
5 & 6\\
7 & 8
\end{pmatrix}
&=
\begin{pmatrix}
1\cdot5+2\cdot7 & 1\cdot6+2\cdot8\\
3\cdot5+4\cdot7 & 3\cdot6+4\cdot8
\end{pmatrix}\\
&=
\begin{pmatrix}
19 & 22\\
43 & 50
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 4

Jika
$$
A=
\begin{pmatrix}
2 & 1\\
0 & 3
\end{pmatrix}
$$
dan
$$
B=
\begin{pmatrix}
4 & 5\\
6 & 7
\end{pmatrix},
$$
maka $AB$ adalah ....

A$\begin{pmatrix}8 & 5\\0 & 21\end{pmatrix}$

B$\begin{pmatrix}14 & 17\\18 & 21\end{pmatrix}$

C$\begin{pmatrix}12 & 15\\6 & 10\end{pmatrix}$

D$\begin{pmatrix}8 & 10\\18 & 21\end{pmatrix}$

E$\begin{pmatrix}10 & 13\\18 & 21\end{pmatrix}$

Pembahasan

$$\begin{aligned}
AB
&=
\begin{pmatrix}
2 & 1\\
0 & 3
\end{pmatrix}
\begin{pmatrix}
4 & 5\\
6 & 7
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot4+1\cdot6 & 2\cdot5+1\cdot7\\
0\cdot4+3\cdot6 & 0\cdot5+3\cdot7
\end{pmatrix}\\
&=
\begin{pmatrix}
14 & 17\\
18 & 21
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 5

Jika
$$
A=
\begin{pmatrix}
1 & 2 & 3
\end{pmatrix}
$$
dan
$$
B=
\begin{pmatrix}
4\\
5\\
6
\end{pmatrix},
$$
maka $AB$ adalah ....

A$\begin{pmatrix}4 & 10 & 18\end{pmatrix}$

B$\begin{pmatrix}5\\7\\9\end{pmatrix}$

C$\begin{pmatrix}32\end{pmatrix}$

D$\begin{pmatrix}4 & 5 & 6\\8 & 10 & 12\\12 & 15 & 18\end{pmatrix}$

E$\begin{pmatrix}15\end{pmatrix}$

Pembahasan

$$\begin{aligned}
AB
&=
\begin{pmatrix}
1 & 2 & 3
\end{pmatrix}
\begin{pmatrix}
4\\
5\\
6
\end{pmatrix}\\
&=
\begin{pmatrix}
1\cdot4+2\cdot5+3\cdot6
\end{pmatrix}\\
&=
\begin{pmatrix}
4+10+18
\end{pmatrix}\\
&=
\begin{pmatrix}
32
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 6

Jika $A$ berordo $3 \times 2$ dan $B$ berordo $2 \times 5$, maka ordo $AB$ adalah ....

A$2 \times 2$

B$2 \times 5$

C$5 \times 3$

D$3 \times 5$

E$3 \times 2$

Pembahasan

Karena:

$$
(3 \times 2)(2 \times 5)
$$

angka tengah sama-sama $2$, maka perkalian dapat dilakukan. Ordo hasilnya adalah $3 \times 5$. Jadi, jawabannya adalah **D**.

  Latihan Soal 7

Operasi perkalian matriks berikut yang tidak dapat dilakukan adalah ....

A$(2 \times 3)(3 \times 4)$

B$(4 \times 2)(2 \times 1)$

C$(3 \times 2)(4 \times 3)$

D$(1 \times 5)(5 \times 2)$

E$(3 \times 3)(3 \times 2)$

Pembahasan

Perkalian matriks dapat dilakukan jika angka tengah sama.

Pada opsi C:

$$
(3 \times 2)(4 \times 3)
$$

angka tengahnya $2$ dan $4$, tidak sama. Jadi, operasi tersebut tidak dapat dilakukan. Jawabannya adalah **C**.

  Latihan Soal 8

Pernyataan yang benar tentang perkalian matriks adalah ....

Aperkalian matriks dilakukan dengan menjumlahkan elemen yang seletak

Bperkalian matriks selalu bersifat komutatif

Csemua matriks berbeda ordo dapat dikalikan

Delemen hasil diperoleh dari baris matriks pertama dan kolom matriks kedua

Eperkalian matriks hanya berlaku untuk matriks nol

Pembahasan

Pada perkalian dua matriks, elemen hasil diperoleh dari baris matriks pertama dan kolom matriks kedua. Jadi, jawabannya adalah **D**.

  Latihan Soal 9

Jika
$$
A=
\begin{pmatrix}
2 & 0\\
1 & 3
\end{pmatrix}
$$
dan
$$
I=
\begin{pmatrix}
1 & 0\\
0 & 1
\end{pmatrix},
$$
maka $AI$ adalah ....

A$\begin{pmatrix}1 & 0\\0 & 1\end{pmatrix}$

B$\begin{pmatrix}2 & 0\\1 & 3\end{pmatrix}$

C$\begin{pmatrix}0 & 2\\3 & 1\end{pmatrix}$

D$\begin{pmatrix}2 & 1\\0 & 3\end{pmatrix}$

E$\begin{pmatrix}3 & 0\\1 & 4\end{pmatrix}$

Pembahasan

Matriks identitas berperan seperti bilangan $1$ dalam perkalian matriks. Karena ukuran matriks sesuai, maka:

$$
AI=A
$$

Jadi:

$$
AI=
\begin{pmatrix}
2 & 0\\
1 & 3
\end{pmatrix}
$$

Jawabannya adalah **B**.

  Latihan Soal 10

Jika
$$
A=
\begin{pmatrix}
1 & 2\\
0 & 1
\end{pmatrix}
$$
dan
$$
B=
\begin{pmatrix}
3 & 4\\
5 & 6
\end{pmatrix},
$$
maka elemen baris pertama kolom kedua dari $AB$ adalah ....

A$8$

B$10$

C$12$

D$16$

E$18$

Pembahasan

Elemen baris pertama kolom kedua dari $AB$ diperoleh dari baris pertama $A$ dan kolom kedua $B$.

$$
\begin{pmatrix}
1 & 2
\end{pmatrix}
\begin{pmatrix}
4\\
6
\end{pmatrix}
$$

$$\begin{aligned}
1\cdot4+2\cdot6&=4+12\\
&=16
\end{aligned}$$

Jadi, jawabannya adalah **D**.

## Determinan Matriks

### Determinan Matriks

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 1 Matriks, subbab E.1 Determinan Matriks, hlm. 28–36.*

#### Definisi 1.7 Determinan Matriks Berordo 2 × 2

Jika $A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$, maka

$$\det A = |A| = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} = a_{11}a_{22} - a_{21}a_{12}$$

Determinan dapat dipakai untuk menyelesaikan sistem persamaan linear dua variabel.

#### Definisi 1.8 Minor dan Kofaktor

Jika $A$ matriks persegi, **minor** elemen $a_{ij}$, ditulis $M_{ij}$, adalah determinan matriks yang diperoleh setelah baris ke-$i$ dan kolom ke-$j$ dihilangkan. **Kofaktor** elemen baris ke-$i$ kolom ke-$j$ adalah

$$k_{ij} = (-1)^{i+j}M_{ij}$$

#### Definisi 1.9 Determinan dengan Ekspansi Kofaktor

Untuk matriks persegi berordo lebih dari $2 \times 2$:

$$|A| = \sum_{i=1}^{n} a_{ij}k_{ij} = a_{1j}k_{1j} + a_{2j}k_{2j} + \cdots + a_{nj}k_{nj} \quad \text{(ekspansi kolom ke-}j\text{)}$$

$$|A| = \sum_{j=1}^{n} a_{ij}k_{ij} = a_{i1}k_{i1} + a_{i2}k_{i2} + \cdots + a_{in}k_{in} \quad \text{(ekspansi baris ke-}i\text{)}$$

Determinan matriks $3 \times 3$ juga dapat dihitung dengan **metode Sarrus**: salin dua kolom pertama di sebelah kanan matriks, lalu jumlahkan hasil kali tiga diagonal utama dan kurangkan hasil kali tiga diagonal samping:

$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = aei + bfg + cdh - ceg - afh - bdi$$

#### Sifat 1.4

Jika $A$ dan $B$ matriks persegi berordo sama, maka $|AB| = |A|\,|B|$.

### Determinan Matriks

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/determinan-matriks*

Pada materi sebelumnya, kita sudah mempelajari perkalian dua matriks. Kita telah memahami bahwa perkalian matriks menggunakan aturan baris dikali kolom, bukan mengalikan elemen yang seletak.

Pada materi ini, kita akan mempelajari **determinan matriks**. Determinan adalah salah satu konsep penting pada matriks, terutama untuk matriks persegi. Determinan akan sangat berguna ketika kita mempelajari invers matriks dan penyelesaian sistem persamaan linear.

#### A. Pengertian Determinan Matriks

Determinan adalah suatu nilai yang diperoleh dari elemen-elemen matriks persegi dengan aturan tertentu.

Determinan hanya didefinisikan untuk **matriks persegi**, yaitu matriks yang banyak barisnya sama dengan banyak kolomnya.

  **Inti penting**

  Determinan adalah nilai khusus dari matriks persegi. Jika suatu matriks bukan matriks persegi, maka determinannya tidak didefinisikan.

Jika matriks $A$ adalah matriks persegi, maka determinannya dapat ditulis sebagai:

$$
\det(A)
$$

atau:

$$
|A|
$$

Misalnya:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
$$

Determinan matriks $A$ dapat ditulis:

$$
\det(A)
$$

atau:

$$
\left|
\begin{matrix}
a & b\\
c & d
\end{matrix}
\right|
$$

#### B. Syarat Matriks Memiliki Determinan

Tidak semua matriks memiliki determinan. Determinan hanya dimiliki oleh matriks persegi.

Contoh matriks yang memiliki determinan:

$$
\begin{pmatrix}
2 & 3\\
1 & 4
\end{pmatrix}
$$

Matriks tersebut berordo $2 \times 2$, sehingga memiliki determinan.

Contoh lain:

$$
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 9
\end{pmatrix}
$$

Matriks tersebut berordo $3 \times 3$, sehingga memiliki determinan.

Contoh matriks yang tidak memiliki determinan:

$$
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{pmatrix}
$$

Matriks tersebut berordo $2 \times 3$, sehingga bukan matriks persegi. Maka determinannya tidak didefinisikan.

  **Perhatikan!**

  Jangan mencari determinan dari matriks yang bukan matriks persegi. Matriks berordo $2 \times 3$, $3 \times 2$, atau $1 \times 4$ tidak memiliki determinan.

#### C. Determinan Matriks Ordo $2 \times 2$

Misalkan:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
$$

Determinan matriks $A$ adalah:

$$
\det(A)=ad-bc
$$

atau:

$$
\left|
\begin{matrix}
a & b\\
c & d
\end{matrix}
\right|
=ad-bc
$$

  **Rumus penting**

  Untuk matriks
  $$
  \begin{pmatrix}
  a & b\\
  c & d
  \end{pmatrix}
  $$
  determinannya adalah:
  $$
  ad-bc
  $$

Cara mengingatnya:

- Kalikan diagonal utama: $a \cdot d$

- Kalikan diagonal samping: $b \cdot c$

- Kurangkan: diagonal utama dikurangi diagonal samping

#### D. Contoh Determinan Matriks Ordo $2 \times 2$

Diketahui:

$$
A=
\begin{pmatrix}
3 & 5\\
2 & 4
\end{pmatrix}
$$

Tentukan $\det(A)$.

Gunakan rumus:

$$
\det(A)=ad-bc
$$

Dari matriks:

$$
a=3,\quad b=5,\quad c=2,\quad d=4
$$

Maka:

$$\begin{aligned}
\det(A)&=ad-bc\\
&=3\cdot4-5\cdot2\\
&=12-10\\
&=2
\end{aligned}$$

Jadi, determinan matriks $A$ adalah $2$.

#### E. Determinan Matriks Ordo $3 \times 3$ dengan Aturan Sarrus

Untuk matriks berordo $3 \times 3$, salah satu cara yang sering digunakan di SMA adalah **aturan Sarrus**.

Misalkan:

$$
A=
\begin{pmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{pmatrix}
$$

Dengan aturan Sarrus, determinannya adalah:

$$
\det(A)=aei+bfg+cdh-ceg-bdi-afh
$$

Rumus ini berasal dari jumlah hasil kali diagonal turun dikurangi jumlah hasil kali diagonal naik.

  **Catatan**

  Aturan Sarrus hanya digunakan untuk matriks berordo $3 \times 3$. Jangan menggunakan aturan Sarrus untuk matriks berordo $4 \times 4$ atau lebih.

#### F. Cara Menggunakan Aturan Sarrus

Misalkan:

$$
A=
\begin{pmatrix}
a & b & c\\
d & e & f\\
g & h & i
\end{pmatrix}
$$

Langkah-langkah aturan Sarrus:

- Salin dua kolom pertama di sebelah kanan matriks.

- Jumlahkan hasil kali diagonal turun.

- Jumlahkan hasil kali diagonal naik.

- Kurangkan jumlah diagonal turun dengan jumlah diagonal naik.

Secara ringkas:

$$
\det(A)=(aei+bfg+cdh)-(ceg+bdi+afh)
$$

#### G. Contoh Determinan Matriks Ordo $3 \times 3$

Diketahui:

$$
A=
\begin{pmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
7 & 8 & 10
\end{pmatrix}
$$

Tentukan $\det(A)$.

Gunakan aturan Sarrus.

$$\begin{aligned}
\det(A)
&=(1\cdot5\cdot10+2\cdot6\cdot7+3\cdot4\cdot8)\\
&\quad -(3\cdot5\cdot7+2\cdot4\cdot10+1\cdot6\cdot8)\\
&=(50+84+96)-(105+80+48)\\
&=230-233\\
&=-3
\end{aligned}$$

Jadi, determinan matriks $A$ adalah $-3$.

#### H. Determinan Matriks Segitiga

Matriks segitiga adalah matriks persegi yang semua elemen di atas atau di bawah diagonal utamanya bernilai nol.

Untuk matriks segitiga atas atau segitiga bawah, determinan dapat dihitung dengan mengalikan elemen-elemen pada diagonal utama.

  **Rumus cepat**

  Jika $A$ adalah matriks segitiga, maka:
  $$
  \det(A)=\text{hasil kali elemen diagonal utama}
  $$

Contoh:

$$
A=
\begin{pmatrix}
2 & 3 & 4\\
0 & 5 & 6\\
0 & 0 & 7
\end{pmatrix}
$$

Matriks tersebut adalah matriks segitiga atas. Maka:

$$\begin{aligned}
\det(A)&=2\cdot5\cdot7\\
&=70
\end{aligned}$$

Jadi, determinan matriks $A$ adalah $70$.

#### I. Determinan Matriks Diagonal

Matriks diagonal adalah matriks persegi yang semua elemen di luar diagonal utama bernilai nol.

Karena matriks diagonal juga termasuk matriks segitiga, maka determinannya adalah hasil kali elemen-elemen diagonal utamanya.

Contoh:

$$
D=
\begin{pmatrix}
3 & 0 & 0\\
0 & 4 & 0\\
0 & 0 & 5
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
\det(D)&=3\cdot4\cdot5\\
&=60
\end{aligned}$$

#### J. Determinan Matriks Identitas

Matriks identitas adalah matriks persegi yang elemen diagonal utamanya bernilai $1$ dan elemen lainnya bernilai $0$.

Contoh matriks identitas berordo $3 \times 3$:

$$
I_3=
\begin{pmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{pmatrix}
$$

Karena determinannya adalah hasil kali elemen diagonal utama, maka:

$$\begin{aligned}
\det(I_3)&=1\cdot1\cdot1\\
&=1
\end{aligned}$$

  **Catatan**

  Determinan matriks identitas selalu bernilai $1$.

#### K. Determinan dan Invers Matriks

Determinan sangat penting karena berhubungan dengan ada atau tidaknya invers matriks.

Untuk matriks persegi $A$:

- Jika $\det(A)\neq0$, maka matriks $A$ memiliki invers.

- Jika $\det(A)=0$, maka matriks $A$ tidak memiliki invers.

  **Hubungan penting**

  Matriks persegi memiliki invers jika dan hanya jika determinannya tidak sama dengan nol.

Contoh:

$$
A=
\begin{pmatrix}
2 & 1\\
3 & 4
\end{pmatrix}
$$

Determinan matriks $A$ adalah:

$$\begin{aligned}
\det(A)&=2\cdot4-1\cdot3\\
&=8-3\\
&=5
\end{aligned}$$

Karena $\det(A)=5$ dan $5\neq0$, maka matriks $A$ memiliki invers.

#### L. Sifat-sifat Determinan

Berikut beberapa sifat determinan yang penting untuk diketahui.

| Sifat | Keterangan | Contoh Singkat |
| --- | --- | --- |
| Determinan hanya untuk matriks persegi | Matriks tidak persegi tidak memiliki determinan | Matriks $2 \times 3$ tidak memiliki determinan |
| Determinan matriks identitas adalah $1$ | Semua diagonal utama bernilai $1$ | $\det(I)=1$ |
| Determinan matriks segitiga | Hasil kali elemen diagonal utama | $2\cdot3\cdot4=24$ |
| Jika satu baris nol, determinan bernilai $0$ | Baris nol membuat determinan menjadi nol | $\begin{pmatrix}1 & 2\\0 & 0\end{pmatrix}$ memiliki determinan $0$ |
| Jika dua baris sama, determinan bernilai $0$ | Baris yang sama membuat matriks tidak memiliki invers | $\begin{pmatrix}1 & 2\\1 & 2\end{pmatrix}$ memiliki determinan $0$ |

#### M. Menentukan Nilai Variabel dari Determinan

Kadang soal determinan memuat variabel. Biasanya kita diminta mencari nilai variabel agar determinan memenuhi nilai tertentu.

Contoh:

$$
A=
\begin{pmatrix}
x & 2\\
3 & 4
\end{pmatrix}
$$

Jika $\det(A)=10$, tentukan nilai $x$.

Gunakan rumus determinan matriks $2 \times 2$.

$$\begin{aligned}
\det(A)&=x\cdot4-2\cdot3\\
&=4x-6
\end{aligned}$$

Karena $\det(A)=10$, maka:

$$\begin{aligned}
4x-6&=10\\
4x&=16\\
x&=4
\end{aligned}$$

Jadi, nilai $x$ adalah $4$.

#### N. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat mempelajari determinan matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Mencari determinan matriks tidak persegi | Determinan hanya didefinisikan untuk matriks persegi. |
| Salah rumus determinan $2 \times 2$ | Rumusnya adalah $ad-bc$, bukan $ab-cd$. |
| Salah tanda pada aturan Sarrus | Jumlah diagonal turun dikurangi jumlah diagonal naik. |
| Menggunakan aturan Sarrus untuk semua ordo | Aturan Sarrus hanya untuk matriks $3 \times 3$. |
| Mengira determinan selalu positif | Determinan dapat bernilai positif, negatif, atau nol. |
| Melupakan hubungan determinan dengan invers | Matriks memiliki invers jika determinannya tidak sama dengan nol. |

  **Perhatikan!**

  Untuk matriks $2 \times 2$, urutan pengurangan sangat penting. Jika
  $$
  A=
  \begin{pmatrix}
  a & b\\
  c & d
  \end{pmatrix},
  $$
  maka $\det(A)=ad-bc$, bukan $bc-ad$.

#### O. Rangkuman

Berikut rangkuman materi determinan matriks.

- Determinan adalah nilai khusus yang diperoleh dari matriks persegi.

- Determinan hanya didefinisikan untuk matriks persegi.

- Notasi determinan matriks $A$ adalah $\det(A)$ atau $|A|$.

- Jika $A=\begin{pmatrix}a & b\\c & d\end{pmatrix}$, maka $\det(A)=ad-bc$.

- Untuk matriks $3 \times 3$, determinan dapat dihitung dengan aturan Sarrus.

- Aturan Sarrus hanya digunakan untuk matriks $3 \times 3$.

- Determinan matriks segitiga adalah hasil kali elemen diagonal utama.

- Determinan matriks diagonal adalah hasil kali elemen diagonal utama.

- Determinan matriks identitas adalah $1$.

- Matriks persegi memiliki invers jika determinannya tidak sama dengan nol.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan determinan matriks berikut.
$$
A=
\begin{pmatrix}
4 & 7\\
2 & 5
\end{pmatrix}
$$

Pembahasan

Gunakan rumus determinan matriks $2 \times 2$.

$$
\det(A)=ad-bc
$$

Dari matriks:

$$
a=4,\quad b=7,\quad c=2,\quad d=5
$$

Maka:

$$\begin{aligned}
\det(A)&=4\cdot5-7\cdot2\\
&=20-14\\
&=6
\end{aligned}$$

Jadi, determinan matriks $A$ adalah $6$.

  Contoh Soal 2

Tentukan determinan matriks berikut.
$$
B=
\begin{pmatrix}
1 & 2 & 3\\
0 & 4 & 5\\
1 & 0 & 6
\end{pmatrix}
$$

Pembahasan

Gunakan aturan Sarrus.

$$\begin{aligned}
\det(B)
&=(1\cdot4\cdot6+2\cdot5\cdot1+3\cdot0\cdot0)\\
&\quad -(3\cdot4\cdot1+2\cdot0\cdot6+1\cdot5\cdot0)\\
&=(24+10+0)-(12+0+0)\\
&=34-12\\
&=22
\end{aligned}$$

Jadi, determinan matriks $B$ adalah $22$.

  Contoh Soal 3

Diketahui:
$$
C=
\begin{pmatrix}
x & 3\\
2 & 5
\end{pmatrix}
$$
Jika $\det(C)=19$, tentukan nilai $x$.

Pembahasan

Gunakan rumus determinan matriks $2 \times 2$.

$$\begin{aligned}
\det(C)&=x\cdot5-3\cdot2\\
&=5x-6
\end{aligned}$$

Karena $\det(C)=19$, maka:

$$\begin{aligned}
5x-6&=19\\
5x&=25\\
x&=5
\end{aligned}$$

Jadi, nilai $x$ adalah $5$.

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Determinan hanya didefinisikan untuk matriks ....

Abaris

Bkolom

Cpersegi

Dberordo $2 \times 3$

Eberordo $1 \times 4$

Pembahasan

Determinan hanya didefinisikan untuk matriks persegi, yaitu matriks yang banyak barisnya sama dengan banyak kolomnya. Jadi, jawabannya adalah **C**.

  Latihan Soal 2

Determinan matriks
$$
\begin{pmatrix}
2 & 3\\
4 & 5
\end{pmatrix}
$$
adalah ....

A$2$

B$-1$

C$-2$

D$10$

E$22$

Pembahasan

$$\begin{aligned}
\det
\begin{pmatrix}
2 & 3\\
4 & 5
\end{pmatrix}
&=2\cdot5-3\cdot4\\
&=10-12\\
&=-2
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 3

Jika
$$
A=
\begin{pmatrix}
6 & 1\\
2 & 3
\end{pmatrix},
$$
maka $\det(A)$ adalah ....

A$8$

B$12$

C$16$

D$18$

E$20$

Pembahasan

$$\begin{aligned}
\det(A)&=6\cdot3-1\cdot2\\
&=18-2\\
&=16
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 4

Determinan matriks identitas berordo $3 \times 3$ adalah ....

A$0$

B$1$

C$2$

D$3$

E$9$

Pembahasan

Determinan matriks identitas selalu bernilai $1$. Jadi, jawabannya adalah **B**.

  Latihan Soal 5

Determinan matriks
$$
\begin{pmatrix}
2 & 5 & 7\\
0 & 3 & 4\\
0 & 0 & 6
\end{pmatrix}
$$
adalah ....

A$6$

B$11$

C$18$

D$36$

E$42$

Pembahasan

Matriks tersebut merupakan matriks segitiga atas. Determinannya adalah hasil kali elemen diagonal utama.

$$\begin{aligned}
\det&=2\cdot3\cdot6\\
&=36
\end{aligned}$$

Jadi, jawabannya adalah **D**.

  Latihan Soal 6

Determinan matriks
$$
\begin{pmatrix}
4 & 0 & 0\\
0 & 5 & 0\\
0 & 0 & 2
\end{pmatrix}
$$
adalah ....

A$10$

B$20$

C$40$

D$45$

E$60$

Pembahasan

Matriks tersebut adalah matriks diagonal. Determinannya adalah hasil kali elemen diagonal utama.

$$\begin{aligned}
\det&=4\cdot5\cdot2\\
&=40
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 7

Jika
$$
A=
\begin{pmatrix}
x & 2\\
3 & 4
\end{pmatrix}
$$
dan $\det(A)=14$, maka nilai $x$ adalah ....

A$3$

B$4$

C$5$

D$6$

E$7$

Pembahasan

$$\begin{aligned}
\det(A)&=x\cdot4-2\cdot3\\
&=4x-6
\end{aligned}$$

Karena $\det(A)=14$, maka:

$$\begin{aligned}
4x-6&=14\\
4x&=20\\
x&=5
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 8

Jika determinan suatu matriks persegi tidak sama dengan nol, maka matriks tersebut ....

Apasti matriks nol

Btidak memiliki invers

Cmemiliki invers

Dbukan matriks persegi

Esemua elemennya nol

Pembahasan

Matriks persegi memiliki invers jika determinannya tidak sama dengan nol. Jadi, jawabannya adalah **C**.

  Latihan Soal 9

Determinan matriks
$$
\begin{pmatrix}
1 & 2\\
1 & 2
\end{pmatrix}
$$
adalah ....

A$0$

B$1$

C$2$

D$3$

E$4$

Pembahasan

$$\begin{aligned}
\det
\begin{pmatrix}
1 & 2\\
1 & 2
\end{pmatrix}
&=1\cdot2-2\cdot1\\
&=2-2\\
&=0
\end{aligned}$$

Jadi, jawabannya adalah **A**.

  Latihan Soal 10

Aturan Sarrus digunakan untuk menghitung determinan matriks berordo ....

A$1 \times 2$

B$2 \times 3$

C$3 \times 2$

D$3 \times 3$

E$4 \times 5$

Pembahasan

Aturan Sarrus digunakan untuk menghitung determinan matriks berordo $3 \times 3$. Jadi, jawabannya adalah **D**.

## Invers Matriks dan Sistem Persamaan Linear

### Invers Matriks

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 1 Matriks, subbab E.2 Invers Matriks, hlm. 36–40.*

Dalam bilangan real, setiap $a \neq 0$ memiliki kebalikan $a^{-1}$ dengan $a \cdot a^{-1} = a^{-1} \cdot a = 1$.

#### Definisi 1.10 Invers Matriks

Jika $A$ matriks berordo $n \times n$ dan $I$ matriks identitas berordo $n \times n$, maka **invers** $A$ adalah matriks $A^{-1}$ yang memenuhi

$$A \cdot A^{-1} = A^{-1} \cdot A = I$$

$A$ disebut **nonsingular** jika memiliki invers ($|A| \neq 0$) dan **singular** jika tidak memiliki invers ($|A| = 0$).

#### Rumus 1.1 Invers Matriks Berordo 2 × 2

Matriks $A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$ memiliki invers jika dan hanya jika $|A| = a_{11}a_{22} - a_{21}a_{12} \neq 0$, dan

$$A^{-1} = \frac{1}{|A|}\,\text{Adjoin}(A), \qquad \text{Adjoin}(A) = \begin{pmatrix} a_{22} & -a_{12} \\ -a_{21} & a_{11} \end{pmatrix}$$

#### Contoh 1.10

Tentukan invers $A = \begin{pmatrix} 3 & -1 \\ -7 & 2 \end{pmatrix}$.

$$|A| = 3(2) - (-7)(-1) = 6 - 7 = -1$$

$$A^{-1} = \frac{1}{-1}\begin{pmatrix} 2 & 1 \\ 7 & 3 \end{pmatrix} = \begin{pmatrix} -2 & -1 \\ -7 & -3 \end{pmatrix}$$

#### Rumus 1.2 Invers Matriks Berordo 3 × 3

Untuk matriks $3 \times 3$ dengan $|A| \neq 0$, $A^{-1} = \dfrac{1}{|A|}\,\text{Adjoin}(A)$, dengan Adjoin($A$) adalah transpos dari matriks kofaktor $A$.

#### Sifat 1.5 Penyelesaian Sistem Persamaan Linear

Jika $A$ memiliki invers, maka penyelesaian sistem persamaan linear $AX = B$ adalah

$$X = A^{-1}B$$

### Invers Matriks

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/invers-matriks*

Pada materi sebelumnya, kita sudah mempelajari determinan matriks. Kita telah memahami bahwa determinan hanya dimiliki oleh matriks persegi dan dapat digunakan untuk menentukan apakah suatu matriks memiliki invers atau tidak.

Pada materi ini, kita akan mempelajari **invers matriks**. Invers matriks sangat penting karena digunakan dalam berbagai materi lanjutan, terutama untuk menyelesaikan sistem persamaan linear menggunakan matriks.

#### A. Pengertian Invers Matriks

Invers matriks adalah matriks yang jika dikalikan dengan matriks asal akan menghasilkan matriks identitas.

Jika $A$ adalah suatu matriks persegi dan $A^{-1}$ adalah invers dari $A$, maka berlaku:

$$
AA^{-1}=I
$$

dan:

$$
A^{-1}A=I
$$

Dengan $I$ adalah matriks identitas yang ordonya sesuai.

  **Inti penting**

  Invers matriks $A$ ditulis $A^{-1}$. Matriks $A^{-1}$ adalah matriks yang jika dikalikan dengan $A$ menghasilkan matriks identitas.

#### B. Hubungan Invers Matriks dengan Bilangan Biasa

Agar lebih mudah memahami invers matriks, kita bisa membandingkannya dengan invers pada bilangan biasa.

Pada bilangan biasa, invers dari $5$ adalah $\frac{1}{5}$ karena:

$$
5 \cdot \frac{1}{5}=1
$$

Pada matriks, invers dari matriks $A$ adalah $A^{-1}$ karena:

$$
A \cdot A^{-1}=I
$$

Bilangan $1$ pada perkalian bilangan biasa memiliki peran yang mirip dengan matriks identitas $I$ pada perkalian matriks.

  **Catatan**

  Pada bilangan biasa, hasil perkalian suatu bilangan dengan inversnya adalah $1$. Pada matriks, hasil perkalian suatu matriks dengan inversnya adalah matriks identitas.

#### C. Syarat Matriks Memiliki Invers

Tidak semua matriks memiliki invers. Suatu matriks memiliki invers jika memenuhi dua syarat berikut.

- Matriks tersebut harus merupakan matriks persegi.

- Determinan matriks tersebut tidak sama dengan nol.

Jika $A$ adalah matriks persegi, maka:

- Jika $\det(A)\neq0$, maka $A$ memiliki invers.

- Jika $\det(A)=0$, maka $A$ tidak memiliki invers.

  **Syarat utama invers matriks**

  Matriks $A$ memiliki invers jika dan hanya jika:
  $$
  \det(A)\neq0
  $$

Matriks yang memiliki invers disebut **matriks nonsingular**. Matriks yang tidak memiliki invers disebut **matriks singular**.

#### D. Matriks Singular dan Nonsingular

Ada dua istilah yang sering muncul saat mempelajari invers matriks.

| Istilah | Arti | Syarat Determinan |
| --- | --- | --- |
| Matriks nonsingular | Matriks yang memiliki invers | $\det(A)\neq0$ |
| Matriks singular | Matriks yang tidak memiliki invers | $\det(A)=0$ |

  **Perhatikan!**

  Matriks tidak persegi tidak memiliki invers. Jadi, matriks berordo $2 \times 3$, $3 \times 2$, atau $1 \times 4$ tidak dibahas inversnya pada materi ini.

#### E. Rumus Invers Matriks Ordo $2 \times 2$

Misalkan:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
$$

Determinan matriks $A$ adalah:

$$
\det(A)=ad-bc
$$

Jika $\det(A)\neq0$, maka invers matriks $A$ adalah:

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{pmatrix}
d & -b\\
-c & a
\end{pmatrix}
$$

  **Rumus penting**

  Untuk matriks
  $$
  A=
  \begin{pmatrix}
  a & b\\
  c & d
  \end{pmatrix},
  $$
  inversnya adalah:
  $$
  A^{-1}
  =
  \frac{1}{ad-bc}
  \begin{pmatrix}
  d & -b\\
  -c & a
  \end{pmatrix}
  $$
  dengan syarat $ad-bc\neq0$.

#### F. Cara Mengingat Rumus Invers Matriks $2 \times 2$

Untuk mencari invers matriks:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
$$

gunakan langkah berikut.

- Hitung determinan $A$, yaitu $ad-bc$.

- Tukar posisi $a$ dan $d$.

- Ganti tanda $b$ dan $c$.

- Kalikan matriks hasil tersebut dengan $\frac{1}{\det(A)}$.

Maka:

$$
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
\longrightarrow
\begin{pmatrix}
d & -b\\
-c & a
\end{pmatrix}
$$

  **Catatan**

  Bagian
  $$
  \begin{pmatrix}
  d & -b\\
  -c & a
  \end{pmatrix}
  $$
  sering disebut sebagai adjoin atau adjugat untuk matriks ordo $2 \times 2$.

#### G. Contoh Menentukan Invers Matriks $2 \times 2$

Diketahui:

$$
A=
\begin{pmatrix}
2 & 1\\
3 & 4
\end{pmatrix}
$$

Tentukan $A^{-1}$.

Hitung determinan matriks $A$.

$$\begin{aligned}
\det(A)&=2\cdot4-1\cdot3\\
&=8-3\\
&=5
\end{aligned}$$

Karena $\det(A)=5$ dan $5\neq0$, maka matriks $A$ memiliki invers.

Gunakan rumus invers matriks $2 \times 2$.

$$\begin{aligned}
A^{-1}
&=
\frac{1}{5}
\begin{pmatrix}
4 & -1\\
-3 & 2
\end{pmatrix}\\
&=
\begin{pmatrix}
\frac{4}{5} & -\frac{1}{5}\\
-\frac{3}{5} & \frac{2}{5}
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
A^{-1}
=
\begin{pmatrix}
\frac{4}{5} & -\frac{1}{5}\\
-\frac{3}{5} & \frac{2}{5}
\end{pmatrix}
$$

#### H. Mengecek Hasil Invers Matriks

Untuk mengecek apakah $A^{-1}$ benar-benar invers dari $A$, kita dapat mengalikan $A$ dengan $A^{-1}$. Jika hasilnya matriks identitas, maka inversnya benar.

Misalkan:

$$
A=
\begin{pmatrix}
2 & 1\\
3 & 4
\end{pmatrix}
$$

dan:

$$
A^{-1}
=
\begin{pmatrix}
\frac{4}{5} & -\frac{1}{5}\\
-\frac{3}{5} & \frac{2}{5}
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
AA^{-1}
&=
\begin{pmatrix}
2 & 1\\
3 & 4
\end{pmatrix}
\begin{pmatrix}
\frac{4}{5} & -\frac{1}{5}\\
-\frac{3}{5} & \frac{2}{5}
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot\frac{4}{5}+1\cdot\left(-\frac{3}{5}\right) & 2\cdot\left(-\frac{1}{5}\right)+1\cdot\frac{2}{5}\\
3\cdot\frac{4}{5}+4\cdot\left(-\frac{3}{5}\right) & 3\cdot\left(-\frac{1}{5}\right)+4\cdot\frac{2}{5}
\end{pmatrix}\\
&=
\begin{pmatrix}
\frac{8}{5}-\frac{3}{5} & -\frac{2}{5}+\frac{2}{5}\\
\frac{12}{5}-\frac{12}{5} & -\frac{3}{5}+\frac{8}{5}
\end{pmatrix}\\
&=
\begin{pmatrix}
1 & 0\\
0 & 1
\end{pmatrix}
\end{aligned}$$

Karena hasilnya matriks identitas, maka invers yang diperoleh benar.

#### I. Contoh Matriks yang Tidak Memiliki Invers

Diketahui:

$$
B=
\begin{pmatrix}
2 & 4\\
1 & 2
\end{pmatrix}
$$

Tentukan apakah matriks $B$ memiliki invers.

Hitung determinannya.

$$\begin{aligned}
\det(B)&=2\cdot2-4\cdot1\\
&=4-4\\
&=0
\end{aligned}$$

Karena $\det(B)=0$, maka matriks $B$ tidak memiliki invers.

  **Perhatikan!**

  Jika determinan suatu matriks bernilai nol, jangan lanjut menggunakan rumus invers. Matriks tersebut tidak memiliki invers.

#### J. Menentukan Nilai Variabel agar Matriks Memiliki Invers

Kadang sebuah matriks memuat variabel, lalu kita diminta menentukan syarat agar matriks tersebut memiliki invers.

Contoh:

$$
A=
\begin{pmatrix}
x & 2\\
3 & 4
\end{pmatrix}
$$

Agar matriks $A$ memiliki invers, harus berlaku:

$$
\det(A)\neq0
$$

Hitung determinannya.

$$\begin{aligned}
\det(A)&=x\cdot4-2\cdot3\\
&=4x-6
\end{aligned}$$

Syarat memiliki invers:

$$\begin{aligned}
4x-6&\neq0\\
4x&\neq6\\
x&\neq\frac{3}{2}
\end{aligned}$$

Jadi, matriks $A$ memiliki invers jika $x\neq\frac{3}{2}$.

#### K. Menyelesaikan Persamaan Matriks Menggunakan Invers

Invers matriks dapat digunakan untuk menyelesaikan persamaan matriks sederhana.

Misalkan:

$$
AX=B
$$

Jika matriks $A$ memiliki invers, maka kedua ruas dapat dikalikan dari kiri dengan $A^{-1}$.

$$\begin{aligned}
AX&=B\\
A^{-1}AX&=A^{-1}B\\
IX&=A^{-1}B\\
X&=A^{-1}B
\end{aligned}$$

  **Catatan**

  Pada persamaan $AX=B$, matriks $A^{-1}$ dikalikan dari kiri. Urutan perkalian tidak boleh sembarangan karena perkalian matriks tidak komutatif secara umum.

Contoh:

$$
A=
\begin{pmatrix}
1 & 2\\
3 & 4
\end{pmatrix}
,\quad
B=
\begin{pmatrix}
5\\
11
\end{pmatrix}
$$

Jika $AX=B$, tentukan $X$.

Pertama, cari invers $A$.

$$\begin{aligned}
\det(A)&=1\cdot4-2\cdot3\\
&=4-6\\
&=-2
\end{aligned}$$

Maka:

$$\begin{aligned}
A^{-1}
&=
\frac{1}{-2}
\begin{pmatrix}
4 & -2\\
-3 & 1
\end{pmatrix}\\
&=
\begin{pmatrix}
-2 & 1\\
\frac{3}{2} & -\frac{1}{2}
\end{pmatrix}
\end{aligned}$$

Karena $X=A^{-1}B$, maka:

$$\begin{aligned}
X
&=
\begin{pmatrix}
-2 & 1\\
\frac{3}{2} & -\frac{1}{2}
\end{pmatrix}
\begin{pmatrix}
5\\
11
\end{pmatrix}\\
&=
\begin{pmatrix}
-2\cdot5+1\cdot11\\
\frac{3}{2}\cdot5-\frac{1}{2}\cdot11
\end{pmatrix}\\
&=
\begin{pmatrix}
-10+11\\
\frac{15}{2}-\frac{11}{2}
\end{pmatrix}\\
&=
\begin{pmatrix}
1\\
2
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
X=
\begin{pmatrix}
1\\
2
\end{pmatrix}
$$

#### L. Invers Matriks dan Sistem Persamaan Linear

Invers matriks dapat digunakan untuk menyelesaikan sistem persamaan linear dua variabel.

Misalnya:

$$
\begin{cases}
ax+by=p\\
cx+dy=q
\end{cases}
$$

Sistem tersebut dapat ditulis dalam bentuk matriks:

$$
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
p\\
q
\end{pmatrix}
$$

Jika matriks koefisien memiliki invers, maka:

$$
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}^{-1}
\begin{pmatrix}
p\\
q
\end{pmatrix}
$$

Pembahasan lebih lengkap tentang sistem persamaan linear dengan matriks akan dipelajari pada materi berikutnya.

#### M. Sifat-sifat Invers Matriks

Berikut beberapa sifat invers matriks yang penting untuk diketahui.

| Sifat | Bentuk Umum | Keterangan |
| --- | --- | --- |
| Invers dari invers | $(A^{-1})^{-1}=A$ | Jika $A$ memiliki invers, maka invers dari $A^{-1}$ adalah $A$. |
| Invers matriks identitas | $I^{-1}=I$ | Invers matriks identitas adalah matriks identitas itu sendiri. |
| Invers hasil kali matriks | $(AB)^{-1}=B^{-1}A^{-1}$ | Urutan inversnya berbalik. |
| Determinan invers | $\det(A^{-1})=\frac{1}{\det(A)}$ | Berlaku jika $A$ memiliki invers. |

  **Perhatikan!**

  Untuk hasil kali matriks, urutan inversnya berbalik:
  $$
  (AB)^{-1}=B^{-1}A^{-1}
  $$
  bukan $A^{-1}B^{-1}$.

#### N. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat mempelajari invers matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Mencari invers matriks tidak persegi | Invers hanya dibahas untuk matriks persegi. |
| Tidak mengecek determinan terlebih dahulu | Jika determinan nol, matriks tidak memiliki invers. |
| Salah menukar elemen pada rumus invers $2 \times 2$ | Elemen $a$ dan $d$ ditukar, sedangkan $b$ dan $c$ diganti tandanya. |
| Salah tanda pada bagian adjoin | Untuk $\begin{pmatrix}a & b\\c & d\end{pmatrix}$, bentuknya menjadi $\begin{pmatrix}d & -b\\-c & a\end{pmatrix}$. |
| Mengabaikan urutan perkalian | Perkalian matriks tidak komutatif secara umum, sehingga urutan perkalian penting. |
| Mengira semua matriks persegi memiliki invers | Matriks persegi hanya memiliki invers jika determinannya tidak sama dengan nol. |

#### O. Rangkuman

Berikut rangkuman materi invers matriks.

- Invers matriks $A$ ditulis $A^{-1}$.

- Jika $A^{-1}$ adalah invers dari $A$, maka $AA^{-1}=I$ dan $A^{-1}A=I$.

- Invers matriks hanya dibahas untuk matriks persegi.

- Matriks $A$ memiliki invers jika $\det(A)\neq0$.

- Matriks yang memiliki invers disebut matriks nonsingular.

- Matriks yang tidak memiliki invers disebut matriks singular.

- Untuk $A=\begin{pmatrix}a & b\\c & d\end{pmatrix}$, inversnya adalah $A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d & -b\\-c & a\end{pmatrix}$.

- Jika $\det(A)=0$, maka $A$ tidak memiliki invers.

- Invers dapat digunakan untuk menyelesaikan persamaan matriks $AX=B$.

- Pada perkalian matriks, urutan perkalian harus diperhatikan.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan invers matriks berikut.
$$
A=
\begin{pmatrix}
3 & 2\\
1 & 1
\end{pmatrix}
$$

Pembahasan

Hitung determinan matriks $A$.

$$\begin{aligned}
\det(A)&=3\cdot1-2\cdot1\\
&=3-2\\
&=1
\end{aligned}$$

Karena $\det(A)=1$, maka matriks $A$ memiliki invers.

Gunakan rumus:

$$
A^{-1}
=
\frac{1}{ad-bc}
\begin{pmatrix}
d & -b\\
-c & a
\end{pmatrix}
$$

Maka:

$$\begin{aligned}
A^{-1}
&=
\frac{1}{1}
\begin{pmatrix}
1 & -2\\
-1 & 3
\end{pmatrix}\\
&=
\begin{pmatrix}
1 & -2\\
-1 & 3
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
A^{-1}
=
\begin{pmatrix}
1 & -2\\
-1 & 3
\end{pmatrix}
$$

  Contoh Soal 2

Tentukan apakah matriks berikut memiliki invers.
$$
B=
\begin{pmatrix}
4 & 6\\
2 & 3
\end{pmatrix}
$$

Pembahasan

Untuk menentukan apakah matriks $B$ memiliki invers, hitung determinannya.

$$\begin{aligned}
\det(B)&=4\cdot3-6\cdot2\\
&=12-12\\
&=0
\end{aligned}$$

Karena $\det(B)=0$, maka matriks $B$ tidak memiliki invers.

Jadi, matriks $B$ merupakan matriks singular.

  Contoh Soal 3

Diketahui:
$$
A=
\begin{pmatrix}
2 & 1\\
5 & 3
\end{pmatrix}
$$
Tentukan $A^{-1}$, lalu gunakan untuk menyelesaikan persamaan:
$$
AX=
\begin{pmatrix}
7\\
19
\end{pmatrix}
$$

Pembahasan

Hitung determinan matriks $A$.

$$\begin{aligned}
\det(A)&=2\cdot3-1\cdot5\\
&=6-5\\
&=1
\end{aligned}$$

Karena determinannya tidak nol, maka matriks $A$ memiliki invers.

$$\begin{aligned}
A^{-1}
&=
\frac{1}{1}
\begin{pmatrix}
3 & -1\\
-5 & 2
\end{pmatrix}\\
&=
\begin{pmatrix}
3 & -1\\
-5 & 2
\end{pmatrix}
\end{aligned}$$

Karena $AX=B$, maka $X=A^{-1}B$.

$$\begin{aligned}
X
&=
\begin{pmatrix}
3 & -1\\
-5 & 2
\end{pmatrix}
\begin{pmatrix}
7\\
19
\end{pmatrix}\\
&=
\begin{pmatrix}
3\cdot7+(-1)\cdot19\\
(-5)\cdot7+2\cdot19
\end{pmatrix}\\
&=
\begin{pmatrix}
21-19\\
-35+38
\end{pmatrix}\\
&=
\begin{pmatrix}
2\\
3
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
A^{-1}
=
\begin{pmatrix}
3 & -1\\
-5 & 2
\end{pmatrix}
$$

dan:

$$
X=
\begin{pmatrix}
2\\
3
\end{pmatrix}
$$

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Invers matriks $A$ ditulis dengan notasi ....

A$A^2$

B$A^T$

C$A^{-1}$

D$\det(A)$

E$|A|$

Pembahasan

Invers matriks $A$ ditulis $A^{-1}$. Jadi, jawabannya adalah **C**.

  Latihan Soal 2

Syarat matriks persegi $A$ memiliki invers adalah ....

A$\det(A)=0$

B$\det(A)\neq0$

C$A$ harus matriks baris

D$A$ harus matriks kolom

Esemua elemen $A$ harus nol

Pembahasan

Matriks persegi $A$ memiliki invers jika determinannya tidak sama dengan nol. Jadi, jawabannya adalah **B**.

  Latihan Soal 3

Jika
$$
A=
\begin{pmatrix}
2 & 1\\
3 & 2
\end{pmatrix},
$$
maka $\det(A)$ adalah ....

A$0$

B$1$

C$2$

D$5$

E$7$

Pembahasan

$$\begin{aligned}
\det(A)&=2\cdot2-1\cdot3\\
&=4-3\\
&=1
\end{aligned}$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 4

Invers dari
$$
A=
\begin{pmatrix}
2 & 1\\
3 & 2
\end{pmatrix}
$$
adalah ....

A$\begin{pmatrix}2 & 1\\3 & 2\end{pmatrix}$

B$\begin{pmatrix}2 & -1\\3 & -2\end{pmatrix}$

C$\begin{pmatrix}2 & -1\\-3 & 2\end{pmatrix}$

D$\begin{pmatrix}-2 & 1\\3 & -2\end{pmatrix}$

E$\begin{pmatrix}1 & 2\\2 & 3\end{pmatrix}$

Pembahasan

Determinannya:

$$\begin{aligned}
\det(A)&=2\cdot2-1\cdot3\\
&=1
\end{aligned}$$

Maka:

$$\begin{aligned}
A^{-1}
&=
\frac{1}{1}
\begin{pmatrix}
2 & -1\\
-3 & 2
\end{pmatrix}\\
&=
\begin{pmatrix}
2 & -1\\
-3 & 2
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 5

Matriks
$$
\begin{pmatrix}
2 & 4\\
1 & 2
\end{pmatrix}
$$
tidak memiliki invers karena ....

Amatriks tersebut bukan matriks persegi

Bsemua elemennya negatif

Cdeterminannya sama dengan nol

Dordo matriksnya terlalu besar

Ematriks tersebut adalah matriks identitas

Pembahasan

$$\begin{aligned}
\det&=2\cdot2-4\cdot1\\
&=4-4\\
&=0
\end{aligned}$$

Karena determinannya sama dengan nol, matriks tersebut tidak memiliki invers. Jadi, jawabannya adalah **C**.

  Latihan Soal 6

Jika
$$
A=
\begin{pmatrix}
1 & 2\\
3 & 5
\end{pmatrix},
$$
maka $A^{-1}$ adalah ....

A$\begin{pmatrix}-5 & 2\\3 & -1\end{pmatrix}$

B$\begin{pmatrix}5 & -2\\-3 & 1\end{pmatrix}$

C$\begin{pmatrix}1 & 2\\3 & 5\end{pmatrix}$

D$\begin{pmatrix}-1 & 3\\2 & -5\end{pmatrix}$

E$\begin{pmatrix}5 & 2\\3 & 1\end{pmatrix}$

Pembahasan

$$\begin{aligned}
\det(A)&=1\cdot5-2\cdot3\\
&=5-6\\
&=-1
\end{aligned}$$

Maka:

$$\begin{aligned}
A^{-1}
&=
\frac{1}{-1}
\begin{pmatrix}
5 & -2\\
-3 & 1
\end{pmatrix}\\
&=
\begin{pmatrix}
-5 & 2\\
3 & -1
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **A**.

  Latihan Soal 7

Matriks
$$
A=
\begin{pmatrix}
x & 2\\
3 & 6
\end{pmatrix}
$$
memiliki invers jika ....

A$x=1$

B$x=0$

C$x\neq1$

D$x\neq0$

E$x=6$

Pembahasan

$$\begin{aligned}
\det(A)&=x\cdot6-2\cdot3\\
&=6x-6
\end{aligned}$$

Agar memiliki invers:

$$\begin{aligned}
6x-6&\neq0\\
6x&\neq6\\
x&\neq1
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 8

Jika $A^{-1}$ adalah invers dari $A$, maka hasil dari $AA^{-1}$ adalah ....

Amatriks nol

Bmatriks identitas

Cmatriks baris

Dmatriks kolom

E$-A$

Pembahasan

Jika $A^{-1}$ adalah invers dari $A$, maka $AA^{-1}=I$. Jadi, jawabannya adalah **B**.

  Latihan Soal 9

Jika
$$
A=
\begin{pmatrix}
2 & 1\\
5 & 3
\end{pmatrix}
$$
dan
$$
AX=
\begin{pmatrix}
5\\
13
\end{pmatrix},
$$
maka $X$ adalah ....

A$\begin{pmatrix}2\\1\end{pmatrix}$

B$\begin{pmatrix}1\\2\end{pmatrix}$

C$\begin{pmatrix}3\\1\end{pmatrix}$

D$\begin{pmatrix}1\\3\end{pmatrix}$

E$\begin{pmatrix}2\\3\end{pmatrix}$

Pembahasan

Cek opsi A:

$$\begin{aligned}
A
\begin{pmatrix}
2\\
1
\end{pmatrix}
&=
\begin{pmatrix}
2 & 1\\
5 & 3
\end{pmatrix}
\begin{pmatrix}
2\\
1
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot2+1\cdot1\\
5\cdot2+3\cdot1
\end{pmatrix}\\
&=
\begin{pmatrix}
5\\
13
\end{pmatrix}
\end{aligned}$$

Jadi, $X=\begin{pmatrix}2\\1\end{pmatrix}$. Jawabannya adalah **A**.

  Latihan Soal 10

Pernyataan yang benar tentang invers matriks adalah ....

Asemua matriks pasti memiliki invers

Bmatriks tidak persegi memiliki invers jika elemennya positif

Cmatriks persegi memiliki invers jika determinannya tidak sama dengan nol

Dmatriks singular selalu memiliki invers

Einvers matriks selalu sama dengan matriks nol

Pembahasan

Matriks persegi memiliki invers jika determinannya tidak sama dengan nol. Jadi, jawabannya adalah **C**.

### Sistem Persamaan Linear dengan Matriks

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/sistem-persamaan-linear-dengan-matriks*

Pada materi sebelumnya, kita sudah mempelajari invers matriks. Kita telah memahami bahwa invers matriks dapat digunakan untuk menyelesaikan persamaan matriks dalam bentuk $AX=B$.

Pada materi ini, kita akan mempelajari cara menyelesaikan **sistem persamaan linear dengan matriks**. Materi ini sangat penting karena menghubungkan konsep sistem persamaan linear, matriks, determinan, dan invers matriks.

#### A. Pengertian Sistem Persamaan Linear

Sistem persamaan linear adalah kumpulan dua atau lebih persamaan linear yang memiliki beberapa variabel.

Contoh sistem persamaan linear dua variabel:

$$
\begin{cases}
2x+y=7\\
x+3y=11
\end{cases}
$$

Pada sistem tersebut, variabelnya adalah $x$ dan $y$. Penyelesaian sistem persamaan linear adalah pasangan nilai $x$ dan $y$ yang memenuhi semua persamaan.

  **Inti penting**

  Sistem persamaan linear dapat diselesaikan dengan matriks jika kita menuliskannya dalam bentuk:
  $$
  AX=B
  $$

#### B. Bentuk Umum Sistem Persamaan Linear Dua Variabel

Bentuk umum sistem persamaan linear dua variabel adalah:

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

Sistem tersebut dapat ditulis dalam bentuk matriks sebagai:

$$
\begin{pmatrix}
a_1 & b_1\\
a_2 & b_2
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
c_1\\
c_2
\end{pmatrix}
$$

Bentuk ini dapat diringkas menjadi:

$$
AX=B
$$

dengan:

- $A$ adalah matriks koefisien.

- $X$ adalah matriks variabel.

- $B$ adalah matriks konstanta.

#### C. Matriks Koefisien, Matriks Variabel, dan Matriks Konstanta

Perhatikan sistem persamaan linear berikut.

$$
\begin{cases}
2x+3y=13\\
x+4y=14
\end{cases}
$$

Sistem tersebut dapat ditulis dalam bentuk:

$$
\begin{pmatrix}
2 & 3\\
1 & 4
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
13\\
14
\end{pmatrix}
$$

| Bagian | Bentuk Matriks | Keterangan |
| --- | --- | --- |
| Matriks koefisien | $\begin{pmatrix}2 & 3\\1 & 4\end{pmatrix}$ | Berisi koefisien variabel $x$ dan $y$ |
| Matriks variabel | $\begin{pmatrix}x\\y\end{pmatrix}$ | Berisi variabel yang dicari |
| Matriks konstanta | $\begin{pmatrix}13\\14\end{pmatrix}$ | Berisi bilangan di ruas kanan persamaan |

  **Catatan**

  Urutan variabel harus konsisten. Jika kolom pertama matriks koefisien adalah koefisien $x$, maka kolom kedua harus koefisien $y$.

#### D. Cara Menyelesaikan Sistem Persamaan Linear dengan Invers Matriks

Jika sistem persamaan linear ditulis dalam bentuk:

$$
AX=B
$$

dan matriks $A$ memiliki invers, maka penyelesaiannya adalah:

$$
X=A^{-1}B
$$

Mengapa demikian?

$$\begin{aligned}
AX&=B\\
A^{-1}AX&=A^{-1}B\\
IX&=A^{-1}B\\
X&=A^{-1}B
\end{aligned}$$

  **Rumus penyelesaian**

  Untuk sistem persamaan linear dalam bentuk $AX=B$, jika $A^{-1}$ ada, maka:
  $$
  X=A^{-1}B
  $$

#### E. Syarat Sistem Dapat Diselesaikan dengan Invers Matriks

Metode invers matriks dapat digunakan jika matriks koefisien memiliki invers.

Untuk sistem dua variabel:

$$
A=
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
$$

Matriks $A$ memiliki invers jika:

$$
\det(A)\neq0
$$

Karena:

$$
\det(A)=ad-bc
$$

maka syaratnya:

$$
ad-bc\neq0
$$

  **Perhatikan!**

  Jika determinan matriks koefisien sama dengan nol, maka metode invers matriks tidak dapat langsung digunakan karena matriks koefisien tidak memiliki invers.

#### F. Langkah Menyelesaikan SPLDV dengan Matriks

Untuk menyelesaikan sistem persamaan linear dua variabel dengan matriks, gunakan langkah berikut.

- Tulis sistem persamaan dalam bentuk matriks $AX=B$.

- Tentukan matriks koefisien $A$.

- Hitung determinan matriks $A$.

- Jika $\det(A)\neq0$, tentukan $A^{-1}$.

- Hitung $X=A^{-1}B$.

- Baca hasilnya sebagai nilai variabel.

#### G. Contoh Menyelesaikan SPLDV dengan Matriks

Selesaikan sistem persamaan berikut dengan matriks.

$$
\begin{cases}
2x+y=7\\
x+3y=11
\end{cases}
$$

Tulis dalam bentuk matriks:

$$
\begin{pmatrix}
2 & 1\\
1 & 3
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
7\\
11
\end{pmatrix}
$$

Misalkan:

$$
A=
\begin{pmatrix}
2 & 1\\
1 & 3
\end{pmatrix}
,\quad
X=
\begin{pmatrix}
x\\
y
\end{pmatrix}
,\quad
B=
\begin{pmatrix}
7\\
11
\end{pmatrix}
$$

Hitung determinan matriks $A$.

$$\begin{aligned}
\det(A)&=2\cdot3-1\cdot1\\
&=6-1\\
&=5
\end{aligned}$$

Karena $\det(A)=5$ dan $5\neq0$, maka $A$ memiliki invers.

$$\begin{aligned}
A^{-1}
&=
\frac{1}{5}
\begin{pmatrix}
3 & -1\\
-1 & 2
\end{pmatrix}
\end{aligned}$$

Gunakan $X=A^{-1}B$.

$$\begin{aligned}
X
&=
\frac{1}{5}
\begin{pmatrix}
3 & -1\\
-1 & 2
\end{pmatrix}
\begin{pmatrix}
7\\
11
\end{pmatrix}\\
&=
\frac{1}{5}
\begin{pmatrix}
3\cdot7+(-1)\cdot11\\
(-1)\cdot7+2\cdot11
\end{pmatrix}\\
&=
\frac{1}{5}
\begin{pmatrix}
21-11\\
-7+22
\end{pmatrix}\\
&=
\frac{1}{5}
\begin{pmatrix}
10\\
15
\end{pmatrix}\\
&=
\begin{pmatrix}
2\\
3
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
x=2,\quad y=3
$$

#### H. Mengecek Hasil Penyelesaian

Setelah memperoleh nilai $x$ dan $y$, kita dapat mengeceknya dengan mensubstitusikan ke sistem semula.

Untuk sistem:

$$
\begin{cases}
2x+y=7\\
x+3y=11
\end{cases}
$$

dengan $x=2$ dan $y=3$, cek persamaan pertama:

$$\begin{aligned}
2x+y&=2(2)+3\\
&=4+3\\
&=7
\end{aligned}$$

Cek persamaan kedua:

$$\begin{aligned}
x+3y&=2+3(3)\\
&=2+9\\
&=11
\end{aligned}$$

Keduanya benar, sehingga penyelesaian sistem tersebut adalah $x=2$ dan $y=3$.

#### I. Sistem Persamaan Linear Tiga Variabel dalam Bentuk Matriks

Sistem persamaan linear tiga variabel juga dapat ditulis dalam bentuk matriks.

Misalnya:

$$
\begin{cases}
x+y+z=6\\
2x-y+z=3\\
x+2y-z=2
\end{cases}
$$

Bentuk matriksnya adalah:

$$
\begin{pmatrix}
1 & 1 & 1\\
2 & -1 & 1\\
1 & 2 & -1
\end{pmatrix}
\begin{pmatrix}
x\\
y\\
z
\end{pmatrix}
=
\begin{pmatrix}
6\\
3\\
2
\end{pmatrix}
$$

Dalam bentuk singkat:

$$
AX=B
$$

dengan:

$$
A=
\begin{pmatrix}
1 & 1 & 1\\
2 & -1 & 1\\
1 & 2 & -1
\end{pmatrix},
\quad
X=
\begin{pmatrix}
x\\
y\\
z
\end{pmatrix},
\quad
B=
\begin{pmatrix}
6\\
3\\
2
\end{pmatrix}
$$

  **Catatan**

  Prinsipnya sama seperti SPLDV, yaitu menulis sistem dalam bentuk $AX=B$. Namun, mencari invers matriks $3 \times 3$ biasanya lebih panjang daripada matriks $2 \times 2$.

#### J. Menggunakan Matriks untuk Menulis Sistem Persamaan

Kadang soal tidak meminta kita menyelesaikan sistem, tetapi hanya meminta menuliskan bentuk matriksnya.

Contoh:

$$
\begin{cases}
3x-2y=8\\
4x+5y=7
\end{cases}
$$

Bentuk matriksnya adalah:

$$
\begin{pmatrix}
3 & -2\\
4 & 5
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
8\\
7
\end{pmatrix}
$$

  **Perhatikan!**

  Tanda negatif pada koefisien harus ikut ditulis. Pada persamaan $3x-2y=8$, koefisien $y$ adalah $-2$, bukan $2$.

#### K. Menyusun Sistem Persamaan dari Bentuk Matriks

Sebaliknya, bentuk matriks juga dapat diubah kembali menjadi sistem persamaan linear.

Contoh:

$$
\begin{pmatrix}
2 & 5\\
3 & -1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
12\\
4
\end{pmatrix}
$$

Bentuk sistem persamaannya adalah:

$$
\begin{cases}
2x+5y=12\\
3x-y=4
\end{cases}
$$

Mengapa demikian?

$$\begin{aligned}
\begin{pmatrix}
2 & 5\\
3 & -1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
&=
\begin{pmatrix}
2x+5y\\
3x-y
\end{pmatrix}
\end{aligned}$$

#### L. Penyelesaian SPLDV dengan Rumus Langsung dari Invers

Untuk sistem:

$$
\begin{cases}
ax+by=p\\
cx+dy=q
\end{cases}
$$

bentuk matriksnya:

$$
\begin{pmatrix}
a & b\\
c & d
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
p\\
q
\end{pmatrix}
$$

Jika $ad-bc\neq0$, maka:

$$
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\frac{1}{ad-bc}
\begin{pmatrix}
d & -b\\
-c & a
\end{pmatrix}
\begin{pmatrix}
p\\
q
\end{pmatrix}
$$

Sehingga:

$$
x=\frac{dp-bq}{ad-bc}
$$

dan:

$$
y=\frac{-cp+aq}{ad-bc}
$$

  **Catatan**

  Rumus langsung ini berasal dari konsep invers matriks. Namun, untuk pemahaman awal, lebih aman menuliskan bentuk $AX=B$ terlebih dahulu.

#### M. Contoh Menggunakan Rumus Langsung

Selesaikan sistem berikut.

$$
\begin{cases}
3x+2y=16\\
x+y=6
\end{cases}
$$

Dari sistem tersebut:

$$
a=3,\quad b=2,\quad c=1,\quad d=1,\quad p=16,\quad q=6
$$

Hitung penyebut:

$$\begin{aligned}
ad-bc&=3\cdot1-2\cdot1\\
&=3-2\\
&=1
\end{aligned}$$

Nilai $x$:

$$\begin{aligned}
x&=\frac{dp-bq}{ad-bc}\\
&=\frac{1\cdot16-2\cdot6}{1}\\
&=\frac{16-12}{1}\\
&=4
\end{aligned}$$

Nilai $y$:

$$\begin{aligned}
y&=\frac{-cp+aq}{ad-bc}\\
&=\frac{-1\cdot16+3\cdot6}{1}\\
&=\frac{-16+18}{1}\\
&=2
\end{aligned}$$

Jadi, penyelesaiannya adalah:

$$
x=4,\quad y=2
$$

#### N. Kapan Metode Matriks Lebih Berguna?

Metode matriks sangat berguna ketika sistem persamaan memiliki pola yang rapi atau ketika kita ingin menyelesaikan sistem dengan pendekatan yang lebih terstruktur.

Metode matriks juga menjadi dasar untuk materi yang lebih lanjut, misalnya:

- penyelesaian sistem persamaan linear dengan invers matriks,

- penyelesaian sistem persamaan linear dengan determinan,

- transformasi geometri,

- pemodelan ekonomi sederhana,

- komputasi dan pemrosesan data.

#### O. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat menyelesaikan sistem persamaan linear dengan matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Salah menulis matriks koefisien | Pastikan koefisien variabel ditulis sesuai urutan variabel pada matriks variabel. |
| Melupakan tanda negatif | Koefisien seperti $-2y$ harus ditulis sebagai $-2$ pada matriks koefisien. |
| Salah menempatkan konstanta | Konstanta harus ditulis pada matriks ruas kanan sesuai urutan persamaannya. |
| Tidak mengecek determinan | Metode invers membutuhkan matriks koefisien yang memiliki invers. |
| Mengalikan invers dari sisi yang salah | Untuk $AX=B$, gunakan $X=A^{-1}B$, bukan $X=BA^{-1}$. |
| Salah membaca hasil matriks variabel | Jika $X=\begin{pmatrix}2\\3\end{pmatrix}$, maka $x=2$ dan $y=3$. |

  **Perhatikan!**

  Pada persamaan $AX=B$, urutan perkalian penting. Karena perkalian matriks tidak komutatif secara umum, jangan menulis $X=BA^{-1}$.

#### P. Rangkuman

Berikut rangkuman materi sistem persamaan linear dengan matriks.

- Sistem persamaan linear dapat ditulis dalam bentuk matriks $AX=B$.

- $A$ adalah matriks koefisien.

- $X$ adalah matriks variabel.

- $B$ adalah matriks konstanta.

- Jika $A$ memiliki invers, maka penyelesaiannya adalah $X=A^{-1}B$.

- Matriks koefisien memiliki invers jika determinannya tidak sama dengan nol.

- Untuk SPLDV, matriks koefisien biasanya berordo $2 \times 2$.

- Untuk SPLTV, matriks koefisien biasanya berordo $3 \times 3$.

- Urutan variabel harus konsisten saat membuat matriks koefisien.

- Hasil akhir matriks variabel harus dibaca sesuai urutan variabelnya.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tuliskan sistem persamaan berikut dalam bentuk matriks.
$$
\begin{cases}
3x+2y=12\\
x-4y=-5
\end{cases}
$$

Pembahasan

Ambil koefisien variabel $x$ dan $y$.

Dari persamaan pertama $3x+2y=12$, koefisiennya adalah $3$ dan $2$.

Dari persamaan kedua $x-4y=-5$, koefisiennya adalah $1$ dan $-4$.

Maka bentuk matriksnya adalah:

$$
\begin{pmatrix}
3 & 2\\
1 & -4
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
12\\
-5
\end{pmatrix}
$$

  Contoh Soal 2

Selesaikan sistem persamaan berikut dengan metode matriks.
$$
\begin{cases}
2x+y=8\\
x+2y=7
\end{cases}
$$

Pembahasan

Tulis sistem dalam bentuk matriks.

$$
\begin{pmatrix}
2 & 1\\
1 & 2
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
8\\
7
\end{pmatrix}
$$

Misalkan:

$$
A=
\begin{pmatrix}
2 & 1\\
1 & 2
\end{pmatrix}
,\quad
B=
\begin{pmatrix}
8\\
7
\end{pmatrix}
$$

Hitung determinan $A$.

$$\begin{aligned}
\det(A)&=2\cdot2-1\cdot1\\
&=4-1\\
&=3
\end{aligned}$$

Maka:

$$\begin{aligned}
A^{-1}
&=
\frac{1}{3}
\begin{pmatrix}
2 & -1\\
-1 & 2
\end{pmatrix}
\end{aligned}$$

Gunakan $X=A^{-1}B$.

$$\begin{aligned}
X
&=
\frac{1}{3}
\begin{pmatrix}
2 & -1\\
-1 & 2
\end{pmatrix}
\begin{pmatrix}
8\\
7
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
2\cdot8-1\cdot7\\
-1\cdot8+2\cdot7
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
16-7\\
-8+14
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
9\\
6
\end{pmatrix}\\
&=
\begin{pmatrix}
3\\
2
\end{pmatrix}
\end{aligned}$$

Jadi, $x=3$ dan $y=2$.

  Contoh Soal 3

Bentuk matriks berikut menyatakan sistem persamaan linear.
$$
\begin{pmatrix}
4 & -1\\
2 & 3
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
10\\
11
\end{pmatrix}
$$
Tentukan sistem persamaan linearnya, lalu selesaikan.

Pembahasan

Ubah bentuk matriks menjadi sistem persamaan.

$$
\begin{cases}
4x-y=10\\
2x+3y=11
\end{cases}
$$

Misalkan:

$$
A=
\begin{pmatrix}
4 & -1\\
2 & 3
\end{pmatrix}
,\quad
B=
\begin{pmatrix}
10\\
11
\end{pmatrix}
$$

Hitung determinan $A$.

$$\begin{aligned}
\det(A)&=4\cdot3-(-1)\cdot2\\
&=12+2\\
&=14
\end{aligned}$$

Maka:

$$\begin{aligned}
A^{-1}
&=
\frac{1}{14}
\begin{pmatrix}
3 & 1\\
-2 & 4
\end{pmatrix}
\end{aligned}$$

Gunakan $X=A^{-1}B$.

$$\begin{aligned}
X
&=
\frac{1}{14}
\begin{pmatrix}
3 & 1\\
-2 & 4
\end{pmatrix}
\begin{pmatrix}
10\\
11
\end{pmatrix}\\
&=
\frac{1}{14}
\begin{pmatrix}
3\cdot10+1\cdot11\\
-2\cdot10+4\cdot11
\end{pmatrix}\\
&=
\frac{1}{14}
\begin{pmatrix}
41\\
24
\end{pmatrix}
\end{aligned}$$

Jadi:

$$
x=\frac{41}{14},\quad y=\frac{12}{7}
$$

Penyelesaian sistem persamaan tersebut adalah $x=\frac{41}{14}$ dan $y=\frac{12}{7}$.

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Bentuk umum sistem persamaan linear dengan matriks adalah ....

A$AX=B$

B$A+B=X$

C$AB=0$

D$X+A=B^{-1}$

E$A=B+X$

Pembahasan

Sistem persamaan linear dapat ditulis dalam bentuk matriks $AX=B$. Jadi, jawabannya adalah **A**.

  Latihan Soal 2

Pada bentuk $AX=B$, matriks $A$ disebut ....

Amatriks variabel

Bmatriks koefisien

Cmatriks konstanta

Dmatriks identitas

Ematriks nol

Pembahasan

Pada bentuk $AX=B$, matriks $A$ berisi koefisien variabel, sehingga disebut matriks koefisien. Jadi, jawabannya adalah **B**.

  Latihan Soal 3

Sistem
$$
\begin{cases}
2x+3y=7\\
4x-y=5
\end{cases}
$$
dapat ditulis dalam bentuk matriks ....

A$\begin{pmatrix}2 & 4\\3 & -1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}7\\5\end{pmatrix}$

B$\begin{pmatrix}2 & 3\\4 & -1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}7\\5\end{pmatrix}$

C$\begin{pmatrix}7 & 5\\2 & 3\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}4\\-1\end{pmatrix}$

D$\begin{pmatrix}x & y\\2 & 3\end{pmatrix}\begin{pmatrix}7\\5\end{pmatrix}=\begin{pmatrix}4\\-1\end{pmatrix}$

E$\begin{pmatrix}2 & 3\\4 & 1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}7\\5\end{pmatrix}$

Pembahasan

Koefisien pada persamaan pertama adalah $2$ dan $3$, sedangkan pada persamaan kedua adalah $4$ dan $-1$. Maka bentuk matriksnya:

$$
\begin{pmatrix}
2 & 3\\
4 & -1
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
7\\
5
\end{pmatrix}
$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 4

Jika $AX=B$ dan $A$ memiliki invers, maka $X$ adalah ....

A$AB^{-1}$

B$BA^{-1}$

C$A^{-1}B$

D$B^{-1}A$

E$A+B$

Pembahasan

$$\begin{aligned}
AX&=B\\
A^{-1}AX&=A^{-1}B\\
X&=A^{-1}B
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 5

Penyelesaian sistem
$$
\begin{cases}
x+y=5\\
2x+y=8
\end{cases}
$$
adalah ....

A$x=1,\ y=4$

B$x=2,\ y=3$

C$x=3,\ y=2$

D$x=4,\ y=1$

E$x=5,\ y=0$

Pembahasan

Dari persamaan pertama:

$$
x+y=5
$$

Cek opsi C, yaitu $x=3$ dan $y=2$.

$$\begin{aligned}
x+y&=3+2=5\\
2x+y&=2(3)+2=8
\end{aligned}$$

Keduanya benar. Jadi, jawabannya adalah **C**.

  Latihan Soal 6

Diketahui
$$
\begin{pmatrix}
2 & 1\\
1 & 2
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
7\\
8
\end{pmatrix}
$$
Nilai $x+y$ adalah ....

A$3$

B$4$

C$5$

D$6$

E$7$

Pembahasan

Bentuk matriks tersebut setara dengan:

$$
\begin{cases}
2x+y=7\\
x+2y=8
\end{cases}
$$

Dari persamaan pertama, $y=7-2x$. Substitusi ke persamaan kedua.

$$\begin{aligned}
x+2(7-2x)&=8\\
x+14-4x&=8\\
-3x&=-6\\
x&=2
\end{aligned}$$

Maka:

$$\begin{aligned}
y&=7-2(2)\\
&=3
\end{aligned}$$

Jadi:

$$\begin{aligned}
x+y&=2+3\\
&=5
\end{aligned}$$

Jawabannya adalah **C**.

  Latihan Soal 7

Bentuk matriks
$$
\begin{pmatrix}
3 & -2\\
1 & 4
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
5\\
9
\end{pmatrix}
$$
setara dengan sistem ....

A$\begin{cases}3x+2y=5\\x+4y=9\end{cases}$

B$\begin{cases}3x-2y=5\\x+4y=9\end{cases}$

C$\begin{cases}3x-2y=9\\x+4y=5\end{cases}$

D$\begin{cases}3x+y=5\\-2x+4y=9\end{cases}$

E$\begin{cases}x-2y=5\\3x+4y=9\end{cases}$

Pembahasan

$$\begin{aligned}
\begin{pmatrix}
3 & -2\\
1 & 4
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
&=
\begin{pmatrix}
3x-2y\\
x+4y
\end{pmatrix}
\end{aligned}$$

Maka sistemnya:

$$
\begin{cases}
3x-2y=5\\
x+4y=9
\end{cases}
$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 8

Jika matriks koefisien suatu SPLDV adalah
$$
A=
\begin{pmatrix}
2 & 4\\
1 & 2
\end{pmatrix},
$$
maka metode invers matriks tidak dapat digunakan karena ....

A$A$ bukan matriks persegi

B$\det(A)=0$

C$A$ adalah matriks identitas

D$A$ memiliki terlalu banyak elemen

Esemua elemen $A$ bernilai positif

Pembahasan

$$\begin{aligned}
\det(A)&=2\cdot2-4\cdot1\\
&=4-4\\
&=0
\end{aligned}$$

Karena determinannya nol, matriks $A$ tidak memiliki invers. Jadi, jawabannya adalah **B**.

  Latihan Soal 9

Sistem
$$
\begin{cases}
3x+y=10\\
x+y=4
\end{cases}
$$
memiliki penyelesaian ....

A$x=1,\ y=3$

B$x=2,\ y=4$

C$x=3,\ y=1$

D$x=4,\ y=3$

E$x=5,\ y=-1$

Pembahasan

Kurangkan persamaan pertama dengan persamaan kedua.

$$\begin{aligned}
(3x+y)-(x+y)&=10-4\\
2x&=6\\
x&=3
\end{aligned}$$

Substitusikan ke $x+y=4$.

$$\begin{aligned}
3+y&=4\\
y&=1
\end{aligned}$$

Jadi, jawabannya adalah **C**.

  Latihan Soal 10

Pernyataan yang benar tentang penyelesaian sistem persamaan linear dengan matriks adalah ....

Amatriks koefisien tidak perlu memperhatikan urutan variabel

Buntuk $AX=B$, penyelesaiannya selalu $X=BA^{-1}$

Cmetode invers dapat digunakan walaupun $\det(A)=0$

Djika $A$ memiliki invers, maka penyelesaian $AX=B$ adalah $X=A^{-1}B$

Ematriks konstanta selalu berisi koefisien variabel

Pembahasan

Jika $AX=B$ dan $A$ memiliki invers, maka kedua ruas dikalikan dari kiri dengan $A^{-1}$ sehingga diperoleh $X=A^{-1}B$. Jadi, jawabannya adalah **D**.

### Soal Cerita Matriks: Cara Membuat Model Matematika dan Contoh Soal

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/soal-cerita-matriks*

Pada materi sebelumnya, kita sudah mempelajari sistem persamaan linear dengan matriks. Kita telah memahami bahwa sistem persamaan linear dapat ditulis dalam bentuk $AX=B$ dan dapat diselesaikan menggunakan invers matriks jika matriks koefisiennya memiliki invers.

Pada materi ini, kita akan mempelajari **soal cerita matriks**. Dalam soal cerita, matriks digunakan untuk menyusun data, melakukan operasi hitung, memodelkan hubungan antarbesaran, dan menyelesaikan masalah yang melibatkan beberapa variabel.

#### A. Pengertian Soal Cerita Matriks

Soal cerita matriks adalah soal yang memuat informasi dalam bentuk cerita atau konteks tertentu, kemudian informasi tersebut diterjemahkan ke dalam bentuk matriks.

Matriks dapat digunakan untuk menyajikan data secara ringkas, misalnya data penjualan, data nilai siswa, jumlah barang, harga barang, produksi, biaya, atau sistem persamaan linear.

  **Inti soal cerita matriks**

  Kita harus mengubah informasi dalam soal menjadi bentuk matriks, lalu menyelesaikannya menggunakan operasi matriks yang sesuai.

#### B. Mengapa Matriks Berguna dalam Soal Cerita?

Matriks berguna karena dapat menyusun banyak data dalam bentuk yang rapi. Misalnya, data penjualan beberapa barang di beberapa toko dapat ditulis dalam satu matriks.

Contoh data penjualan:

| Toko | Buku | Pulpen | Pensil |
| --- | --- | --- | --- |
| Toko A | 20 | 30 | 15 |
| Toko B | 25 | 10 | 40 |

Data tersebut dapat ditulis sebagai matriks:

$$
P=
\begin{pmatrix}
20 & 30 & 15\\
25 & 10 & 40
\end{pmatrix}
$$

Baris pertama menyatakan Toko A, baris kedua menyatakan Toko B, sedangkan kolom pertama, kedua, dan ketiga berturut-turut menyatakan buku, pulpen, dan pensil.

  **Catatan**

  Saat membuat matriks dari data, tentukan terlebih dahulu arti setiap baris dan kolom agar tidak tertukar.

#### C. Langkah Menyelesaikan Soal Cerita Matriks

Untuk menyelesaikan soal cerita matriks, gunakan langkah berikut.

- Baca soal dengan cermat.

- Tentukan data apa saja yang akan dimasukkan ke dalam matriks.

- Tentukan arti setiap baris dan kolom.

- Buat model matriks sesuai informasi pada soal.

- Tentukan operasi yang dibutuhkan, misalnya penjumlahan, pengurangan, perkalian skalar, perkalian dua matriks, atau invers matriks.

- Hitung dengan teliti.

- Tafsirkan hasilnya sesuai konteks soal.

#### D. Soal Cerita Matriks dengan Penjumlahan

Penjumlahan matriks digunakan ketika dua data sejenis ingin digabungkan.

Contoh:

Sebuah toko mencatat penjualan dua jenis barang, yaitu buku dan pulpen, selama dua hari.

Penjualan hari pertama:

$$
A=
\begin{pmatrix}
12 & 20\\
15 & 18
\end{pmatrix}
$$

Penjualan hari kedua:

$$
B=
\begin{pmatrix}
10 & 25\\
14 & 22
\end{pmatrix}
$$

Jika baris pertama menyatakan Toko 1 dan baris kedua menyatakan Toko 2, sedangkan kolom pertama menyatakan buku dan kolom kedua menyatakan pulpen, maka total penjualan selama dua hari adalah:

$$\begin{aligned}
A+B
&=
\begin{pmatrix}
12 & 20\\
15 & 18
\end{pmatrix}
+
\begin{pmatrix}
10 & 25\\
14 & 22
\end{pmatrix}\\
&=
\begin{pmatrix}
12+10 & 20+25\\
15+14 & 18+22
\end{pmatrix}\\
&=
\begin{pmatrix}
22 & 45\\
29 & 40
\end{pmatrix}
\end{aligned}$$

Jadi, total penjualan selama dua hari dinyatakan oleh matriks:

$$
\begin{pmatrix}
22 & 45\\
29 & 40
\end{pmatrix}
$$

#### E. Soal Cerita Matriks dengan Pengurangan

Pengurangan matriks digunakan ketika kita ingin mencari selisih antara dua data yang sejenis.

Contoh:

Jumlah persediaan barang di gudang awal bulan dinyatakan oleh matriks:

$$
A=
\begin{pmatrix}
50 & 40\\
30 & 60
\end{pmatrix}
$$

Jumlah barang yang terjual selama bulan tersebut dinyatakan oleh matriks:

$$
B=
\begin{pmatrix}
12 & 15\\
10 & 25
\end{pmatrix}
$$

Maka persediaan akhir bulan adalah:

$$\begin{aligned}
A-B
&=
\begin{pmatrix}
50 & 40\\
30 & 60
\end{pmatrix}
-
\begin{pmatrix}
12 & 15\\
10 & 25
\end{pmatrix}\\
&=
\begin{pmatrix}
50-12 & 40-15\\
30-10 & 60-25
\end{pmatrix}\\
&=
\begin{pmatrix}
38 & 25\\
20 & 35
\end{pmatrix}
\end{aligned}$$

Jadi, persediaan akhir bulan dinyatakan oleh matriks:

$$
\begin{pmatrix}
38 & 25\\
20 & 35
\end{pmatrix}
$$

#### F. Soal Cerita Matriks dengan Perkalian Skalar

Perkalian matriks dengan skalar digunakan ketika semua data dalam matriks dikalikan dengan bilangan tertentu.

Contoh:

Sebuah toko menaikkan jumlah produksi setiap barang menjadi 3 kali lipat. Produksi awal dinyatakan oleh matriks:

$$
P=
\begin{pmatrix}
10 & 15\\
20 & 25
\end{pmatrix}
$$

Maka produksi baru adalah:

$$\begin{aligned}
3P
&=
3
\begin{pmatrix}
10 & 15\\
20 & 25
\end{pmatrix}\\
&=
\begin{pmatrix}
30 & 45\\
60 & 75
\end{pmatrix}
\end{aligned}$$

Jadi, produksi baru dinyatakan oleh matriks:

$$
\begin{pmatrix}
30 & 45\\
60 & 75
\end{pmatrix}
$$

  **Ingat**

  Jika semua data berubah dengan faktor yang sama, biasanya digunakan perkalian matriks dengan skalar.

#### G. Soal Cerita Matriks dengan Perkalian Dua Matriks

Perkalian dua matriks sering digunakan untuk menghitung total biaya, total pendapatan, atau total nilai dari beberapa data yang saling berhubungan.

Misalnya, sebuah koperasi menjual dua jenis barang, yaitu buku dan pulpen. Banyak barang yang terjual di dua kelas dinyatakan oleh matriks:

$$
A=
\begin{pmatrix}
10 & 5\\
8 & 12
\end{pmatrix}
$$

Baris pertama menyatakan Kelas X, baris kedua menyatakan Kelas XI. Kolom pertama menyatakan buku dan kolom kedua menyatakan pulpen.

Harga buku adalah Rp5.000 dan harga pulpen adalah Rp2.000. Harga barang dapat ditulis sebagai matriks:

$$
H=
\begin{pmatrix}
5000\\
2000
\end{pmatrix}
$$

Total pendapatan setiap kelas diperoleh dari:

$$
AH
$$

Hitung:

$$\begin{aligned}
AH
&=
\begin{pmatrix}
10 & 5\\
8 & 12
\end{pmatrix}
\begin{pmatrix}
5000\\
2000
\end{pmatrix}\\
&=
\begin{pmatrix}
10\cdot5000+5\cdot2000\\
8\cdot5000+12\cdot2000
\end{pmatrix}\\
&=
\begin{pmatrix}
50000+10000\\
40000+24000
\end{pmatrix}\\
&=
\begin{pmatrix}
60000\\
64000
\end{pmatrix}
\end{aligned}$$

Jadi, total pendapatan Kelas X adalah Rp60.000 dan total pendapatan Kelas XI adalah Rp64.000.

#### H. Membaca Hasil Perkalian Matriks dalam Konteks Soal

Dalam soal cerita, hasil perhitungan matriks harus ditafsirkan kembali sesuai konteks.

Contoh hasil:

$$
\begin{pmatrix}
60000\\
64000
\end{pmatrix}
$$

Jika baris pertama menyatakan Kelas X dan baris kedua menyatakan Kelas XI, maka:

- Kelas X memiliki total pendapatan Rp60.000.

- Kelas XI memiliki total pendapatan Rp64.000.

  **Catatan**

  Hasil akhir soal cerita matriks tidak cukup hanya berupa matriks. Jelaskan juga arti hasil tersebut dalam konteks soal.

#### I. Soal Cerita Matriks dengan Sistem Persamaan Linear

Beberapa soal cerita matriks dapat diselesaikan dengan membuat sistem persamaan linear, lalu menuliskannya dalam bentuk matriks.

Contoh:

Harga 2 buku dan 1 pulpen adalah Rp13.000. Harga 1 buku dan 2 pulpen adalah Rp11.000. Tentukan harga satu buku dan satu pulpen.

Misalkan:

- $x$ adalah harga satu buku.

- $y$ adalah harga satu pulpen.

Maka sistem persamaannya:

$$
\begin{cases}
2x+y=13000\\
x+2y=11000
\end{cases}
$$

Bentuk matriksnya:

$$
\begin{pmatrix}
2 & 1\\
1 & 2
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
13000\\
11000
\end{pmatrix}
$$

Misalkan:

$$
A=
\begin{pmatrix}
2 & 1\\
1 & 2
\end{pmatrix},
\quad
X=
\begin{pmatrix}
x\\
y
\end{pmatrix},
\quad
B=
\begin{pmatrix}
13000\\
11000
\end{pmatrix}
$$

Hitung invers matriks $A$.

$$\begin{aligned}
\det(A)&=2\cdot2-1\cdot1\\
&=4-1\\
&=3
\end{aligned}$$

Maka:

$$
A^{-1}
=
\frac{1}{3}
\begin{pmatrix}
2 & -1\\
-1 & 2
\end{pmatrix}
$$

Gunakan $X=A^{-1}B$.

$$\begin{aligned}
X
&=
\frac{1}{3}
\begin{pmatrix}
2 & -1\\
-1 & 2
\end{pmatrix}
\begin{pmatrix}
13000\\
11000
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
2\cdot13000-1\cdot11000\\
-1\cdot13000+2\cdot11000
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
26000-11000\\
-13000+22000
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
15000\\
9000
\end{pmatrix}\\
&=
\begin{pmatrix}
5000\\
3000
\end{pmatrix}
\end{aligned}$$

Jadi, harga satu buku adalah Rp5.000 dan harga satu pulpen adalah Rp3.000.

#### J. Menentukan Total Biaya dari Matriks Jumlah dan Harga

Salah satu model soal cerita matriks yang sering muncul adalah menghitung total biaya dari banyak barang dan harga satuannya.

Misalnya:

| Paket | Buku | Pulpen | Pensil |
| --- | --- | --- | --- |
| Paket A | 2 | 3 | 1 |
| Paket B | 4 | 1 | 2 |

Harga masing-masing barang:

- Buku: Rp6.000

- Pulpen: Rp3.000

- Pensil: Rp2.000

Matriks jumlah barang:

$$
J=
\begin{pmatrix}
2 & 3 & 1\\
4 & 1 & 2
\end{pmatrix}
$$

Matriks harga:

$$
H=
\begin{pmatrix}
6000\\
3000\\
2000
\end{pmatrix}
$$

Total biaya setiap paket:

$$\begin{aligned}
JH
&=
\begin{pmatrix}
2 & 3 & 1\\
4 & 1 & 2
\end{pmatrix}
\begin{pmatrix}
6000\\
3000\\
2000
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot6000+3\cdot3000+1\cdot2000\\
4\cdot6000+1\cdot3000+2\cdot2000
\end{pmatrix}\\
&=
\begin{pmatrix}
12000+9000+2000\\
24000+3000+4000
\end{pmatrix}\\
&=
\begin{pmatrix}
23000\\
31000
\end{pmatrix}
\end{aligned}$$

Jadi, harga Paket A adalah Rp23.000 dan harga Paket B adalah Rp31.000.

#### K. Menentukan Perubahan Data dengan Matriks

Matriks juga dapat digunakan untuk menyatakan perubahan data, misalnya peningkatan produksi, penurunan stok, atau selisih penjualan.

Contoh:

Produksi minggu pertama:

$$
A=
\begin{pmatrix}
30 & 25\\
40 & 35
\end{pmatrix}
$$

Produksi minggu kedua:

$$
B=
\begin{pmatrix}
45 & 30\\
50 & 42
\end{pmatrix}
$$

Kenaikan produksi dari minggu pertama ke minggu kedua adalah:

$$\begin{aligned}
B-A
&=
\begin{pmatrix}
45 & 30\\
50 & 42
\end{pmatrix}
-
\begin{pmatrix}
30 & 25\\
40 & 35
\end{pmatrix}\\
&=
\begin{pmatrix}
15 & 5\\
10 & 7
\end{pmatrix}
\end{aligned}$$

Artinya:

- Data baris pertama kolom pertama naik 15.

- Data baris pertama kolom kedua naik 5.

- Data baris kedua kolom pertama naik 10.

- Data baris kedua kolom kedua naik 7.

#### L. Kesalahan yang Sering Terjadi

Beberapa kesalahan yang sering terjadi saat menyelesaikan soal cerita matriks adalah sebagai berikut.

| Kesalahan | Penjelasan |
| --- | --- |
| Tidak menentukan arti baris dan kolom | Akibatnya, hasil akhir sulit ditafsirkan atau tertukar. |
| Salah memilih operasi matriks | Data yang digabungkan biasanya memakai penjumlahan, sedangkan total biaya sering memakai perkalian matriks. |
| Menjumlahkan matriks berbeda ordo | Penjumlahan dan pengurangan matriks hanya dapat dilakukan jika ordonya sama. |
| Salah urutan perkalian matriks | Perkalian matriks tidak komutatif secara umum. Urutan matriks harus diperhatikan. |
| Lupa menafsirkan hasil akhir | Dalam soal cerita, hasil perhitungan perlu dijelaskan sesuai konteks soal. |
| Salah menulis satuan atau nilai uang | Untuk soal harga, pastikan satuan rupiah dan posisi angka benar. |

  **Perhatikan!**

  Dalam soal cerita matriks, perhitungan yang benar saja belum cukup. Hasil akhir harus ditafsirkan sesuai makna baris dan kolom pada matriks.

#### M. Rangkuman

Berikut rangkuman materi soal cerita matriks.

- Soal cerita matriks adalah soal yang informasinya diterjemahkan ke dalam bentuk matriks.

- Matriks dapat digunakan untuk menyusun data penjualan, persediaan, produksi, harga, nilai, dan sistem persamaan linear.

- Penjumlahan matriks digunakan untuk menggabungkan data sejenis.

- Pengurangan matriks digunakan untuk mencari selisih data sejenis.

- Perkalian skalar digunakan ketika semua data dikalikan dengan bilangan tertentu.

- Perkalian dua matriks dapat digunakan untuk menghitung total biaya atau total pendapatan.

- Sistem persamaan linear dapat ditulis dalam bentuk matriks $AX=B$.

- Jika matriks koefisien memiliki invers, maka penyelesaiannya dapat dicari dengan $X=A^{-1}B$.

- Arti baris dan kolom harus ditentukan sejak awal.

- Hasil akhir harus dijelaskan sesuai konteks soal.

#### Contoh Soal dan Pembahasan

  Contoh Soal 1

Sebuah toko mencatat jumlah penjualan dua jenis barang, yaitu buku dan pulpen, di dua cabang. Penjualan hari Senin dinyatakan oleh matriks:
$$
A=
\begin{pmatrix}
12 & 20\\
15 & 18
\end{pmatrix}
$$
Penjualan hari Selasa dinyatakan oleh matriks:
$$
B=
\begin{pmatrix}
10 & 25\\
14 & 22
\end{pmatrix}
$$
Tentukan matriks yang menyatakan total penjualan selama dua hari.

Pembahasan

Total penjualan selama dua hari diperoleh dengan menjumlahkan matriks $A$ dan $B$.

$$\begin{aligned}
A+B
&=
\begin{pmatrix}
12 & 20\\
15 & 18
\end{pmatrix}
+
\begin{pmatrix}
10 & 25\\
14 & 22
\end{pmatrix}\\
&=
\begin{pmatrix}
12+10 & 20+25\\
15+14 & 18+22
\end{pmatrix}\\
&=
\begin{pmatrix}
22 & 45\\
29 & 40
\end{pmatrix}
\end{aligned}$$

Jadi, matriks total penjualan selama dua hari adalah:

$$
\begin{pmatrix}
22 & 45\\
29 & 40
\end{pmatrix}
$$

  Contoh Soal 2

Sebuah koperasi menjual buku, pulpen, dan pensil. Banyak barang dalam dua paket dinyatakan oleh matriks:
$$
J=
\begin{pmatrix}
2 & 3 & 1\\
4 & 1 & 2
\end{pmatrix}
$$
Harga buku, pulpen, dan pensil berturut-turut adalah Rp6.000, Rp3.000, dan Rp2.000. Tentukan harga masing-masing paket.

Pembahasan

Tulis harga barang dalam bentuk matriks kolom.

$$
H=
\begin{pmatrix}
6000\\
3000\\
2000
\end{pmatrix}
$$

Total harga setiap paket diperoleh dari $JH$.

$$\begin{aligned}
JH
&=
\begin{pmatrix}
2 & 3 & 1\\
4 & 1 & 2
\end{pmatrix}
\begin{pmatrix}
6000\\
3000\\
2000
\end{pmatrix}\\
&=
\begin{pmatrix}
2\cdot6000+3\cdot3000+1\cdot2000\\
4\cdot6000+1\cdot3000+2\cdot2000
\end{pmatrix}\\
&=
\begin{pmatrix}
12000+9000+2000\\
24000+3000+4000
\end{pmatrix}\\
&=
\begin{pmatrix}
23000\\
31000
\end{pmatrix}
\end{aligned}$$

Jadi, harga Paket A adalah Rp23.000 dan harga Paket B adalah Rp31.000.

  Contoh Soal 3

Harga 2 buku dan 1 pulpen adalah Rp13.000. Harga 1 buku dan 2 pulpen adalah Rp11.000. Gunakan matriks untuk menentukan harga satu buku dan satu pulpen.

Pembahasan

Misalkan $x$ adalah harga satu buku dan $y$ adalah harga satu pulpen.

Dari soal diperoleh sistem:

$$
\begin{cases}
2x+y=13000\\
x+2y=11000
\end{cases}
$$

Bentuk matriksnya:

$$
\begin{pmatrix}
2 & 1\\
1 & 2
\end{pmatrix}
\begin{pmatrix}
x\\
y
\end{pmatrix}
=
\begin{pmatrix}
13000\\
11000
\end{pmatrix}
$$

Misalkan:

$$
A=
\begin{pmatrix}
2 & 1\\
1 & 2
\end{pmatrix}
$$

Hitung determinan $A$.

$$\begin{aligned}
\det(A)&=2\cdot2-1\cdot1\\
&=4-1\\
&=3
\end{aligned}$$

Maka:

$$
A^{-1}
=
\frac{1}{3}
\begin{pmatrix}
2 & -1\\
-1 & 2
\end{pmatrix}
$$

Gunakan $X=A^{-1}B$.

$$\begin{aligned}
\begin{pmatrix}
x\\
y
\end{pmatrix}
&=
\frac{1}{3}
\begin{pmatrix}
2 & -1\\
-1 & 2
\end{pmatrix}
\begin{pmatrix}
13000\\
11000
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
2\cdot13000-1\cdot11000\\
-1\cdot13000+2\cdot11000
\end{pmatrix}\\
&=
\frac{1}{3}
\begin{pmatrix}
15000\\
9000
\end{pmatrix}\\
&=
\begin{pmatrix}
5000\\
3000
\end{pmatrix}
\end{aligned}$$

Jadi, harga satu buku adalah Rp5.000 dan harga satu pulpen adalah Rp3.000.

#### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Dalam soal cerita matriks, langkah pertama yang sebaiknya dilakukan adalah ....

Alangsung mengalikan semua angka

Bmenentukan arti baris dan kolom

Cmenghapus data yang besar

Dmengubah semua matriks menjadi matriks identitas

Emencari determinan semua data

Pembahasan

Dalam soal cerita matriks, kita perlu menentukan arti baris dan kolom agar data tidak tertukar. Jadi, jawabannya adalah **B**.

  Latihan Soal 2

Penjualan hari pertama dinyatakan oleh
$$
A=
\begin{pmatrix}
10 & 15\\
20 & 25
\end{pmatrix}
$$
dan penjualan hari kedua dinyatakan oleh
$$
B=
\begin{pmatrix}
5 & 10\\
15 & 20
\end{pmatrix}.
$$
Total penjualan selama dua hari adalah ....

A$\begin{pmatrix}15 & 25\\35 & 45\end{pmatrix}$

B$\begin{pmatrix}5 & 5\\5 & 5\end{pmatrix}$

C$\begin{pmatrix}50 & 150\\300 & 500\end{pmatrix}$

D$\begin{pmatrix}10 & 10\\15 & 20\end{pmatrix}$

E$\begin{pmatrix}20 & 30\\40 & 50\end{pmatrix}$

Pembahasan

$$\begin{aligned}
A+B
&=
\begin{pmatrix}
10 & 15\\
20 & 25
\end{pmatrix}
+
\begin{pmatrix}
5 & 10\\
15 & 20
\end{pmatrix}\\
&=
\begin{pmatrix}
15 & 25\\
35 & 45
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **A**.

  Latihan Soal 3

Persediaan awal barang dinyatakan oleh
$$
A=
\begin{pmatrix}
40 & 35\\
50 & 45
\end{pmatrix}
$$
dan barang yang terjual dinyatakan oleh
$$
B=
\begin{pmatrix}
12 & 10\\
20 & 15
\end{pmatrix}.
$$
Persediaan akhir adalah ....

A$\begin{pmatrix}52 & 45\\70 & 60\end{pmatrix}$

B$\begin{pmatrix}28 & 25\\30 & 30\end{pmatrix}$

C$\begin{pmatrix}30 & 30\\28 & 25\end{pmatrix}$

D$\begin{pmatrix}48 & 45\\70 & 65\end{pmatrix}$

E$\begin{pmatrix}20 & 25\\30 & 35\end{pmatrix}$

Pembahasan

$$\begin{aligned}
A-B
&=
\begin{pmatrix}
40 & 35\\
50 & 45
\end{pmatrix}
-
\begin{pmatrix}
12 & 10\\
20 & 15
\end{pmatrix}\\
&=
\begin{pmatrix}
28 & 25\\
30 & 30
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 4

Produksi awal suatu barang dinyatakan oleh matriks
$$
P=
\begin{pmatrix}
8 & 12\\
15 & 20
\end{pmatrix}.
$$
Jika produksi dinaikkan menjadi 2 kali lipat, maka matriks produksi baru adalah ....

A$\begin{pmatrix}10 & 14\\17 & 22\end{pmatrix}$

B$\begin{pmatrix}16 & 24\\30 & 40\end{pmatrix}$

C$\begin{pmatrix}8 & 24\\30 & 20\end{pmatrix}$

D$\begin{pmatrix}4 & 6\\7{,}5 & 10\end{pmatrix}$

E$\begin{pmatrix}12 & 16\\19 & 24\end{pmatrix}$

Pembahasan

$$\begin{aligned}
2P
&=
2
\begin{pmatrix}
8 & 12\\
15 & 20
\end{pmatrix}\\
&=
\begin{pmatrix}
16 & 24\\
30 & 40
\end{pmatrix}
\end{aligned}$$

Jadi, jawabannya adalah **B**.

  Latihan Soal 5

Banyak barang dalam dua paket dinyatakan oleh
$$
J=
\begin{pmatrix}
1 & 2\\
3 & 1
\end{pmatrix}
$$
dan harga satuan barang dinyatakan oleh
$$
H=
\begin{pmatrix}
5000\\
2000
\end{pmatrix}.
$$
Harga Paket A dan Paket B berturut-turut adalah ....

ARp7.000 dan Rp10.000

BRp9.000 dan Rp17.000

CRp10.000 dan Rp15.000

DRp15.000 dan Rp6.000

ERp5.000 dan Rp2.000

Pembahasan

$$\begin{aligned}
JH
&=
\begin{pmatrix}
1 & 2\\
3 & 1
\end{pmatrix}
\begin{pmatrix}
5000\\
2000
\end{pmatrix}\\
&=
\begin{pmatrix}
1\cdot5000+2\cdot2000\\
3\cdot5000+1\cdot2000
\end{pmatrix}\\
&=
\begin{pmatrix}
9000\\
17000
\end{pmatrix}
\end{aligned}$$

Jadi, harga Paket A adalah Rp9.000 dan harga Paket B adalah Rp17.000. Jawabannya adalah **B**.

  Latihan Soal 6

Harga 1 buku dan 1 pulpen adalah Rp8.000. Harga 2 buku dan 1 pulpen adalah Rp13.000. Harga satu buku adalah ....

ARp3.000

BRp4.000

CRp5.000

DRp6.000

ERp8.000

Pembahasan

Misalkan harga buku $x$ dan harga pulpen $y$.

$$
\begin{cases}
x+y=8000\\
2x+y=13000
\end{cases}
$$

Kurangkan persamaan kedua dengan persamaan pertama.

$$\begin{aligned}
(2x+y)-(x+y)&=13000-8000\\
x&=5000
\end{aligned}$$

Jadi, harga satu buku adalah Rp5.000. Jawabannya adalah **C**.

  Latihan Soal 7

Harga 2 buku dan 1 pensil adalah Rp14.000. Harga 1 buku dan 2 pensil adalah Rp13.000. Harga satu pensil adalah ....

ARp3.000

BRp4.000

CRp4.000

DRp5.000

ERp6.000

Pembahasan

Misalkan harga buku $x$ dan harga pensil $y$.

$$
\begin{cases}
2x+y=14000\\
x+2y=13000
\end{cases}
$$

Dari persamaan pertama, $y=14000-2x$. Substitusi ke persamaan kedua.

$$\begin{aligned}
x+2(14000-2x)&=13000\\
x+28000-4x&=13000\\
-3x&=-15000\\
x&=5000
\end{aligned}$$

Maka:

$$\begin{aligned}
2x+y&=14000\\
2(5000)+y&=14000\\
y&=4000
\end{aligned}$$

Jadi, harga satu pensil adalah Rp4.000. Jawabannya adalah **C**.

  Latihan Soal 8

Banyak barang yang terjual dinyatakan oleh matriks
$$
A=
\begin{pmatrix}
5 & 3\\
4 & 6
\end{pmatrix}
$$
dan harga satuannya dinyatakan oleh matriks
$$
H=
\begin{pmatrix}
4000\\
3000
\end{pmatrix}.
$$
Total pendapatan pada baris pertama adalah ....

ARp17.000

BRp29.000

CRp34.000

DRp42.000

ERp50.000

Pembahasan

Total pendapatan pada baris pertama diperoleh dari baris pertama matriks $A$ dikalikan matriks harga $H$.

$$\begin{aligned}
5\cdot4000+3\cdot3000&=20000+9000\\
&=29000
\end{aligned}$$

Jadi, total pendapatan pada baris pertama adalah Rp29.000. Jawabannya adalah **B**.

  Latihan Soal 9

Matriks jumlah barang berordo $3 \times 2$ dikalikan dengan matriks harga berordo $2 \times 1$. Ordo matriks hasilnya adalah ....

A$3 \times 1$

B$2 \times 3$

C$1 \times 3$

D$2 \times 1$

E$3 \times 2$

Pembahasan

Perhatikan ordo perkaliannya.

$$
(3 \times 2)(2 \times 1)
$$

Angka tengah sama-sama $2$, sehingga perkalian dapat dilakukan. Ordo hasilnya adalah $3 \times 1$. Jadi, jawabannya adalah **A**.

  Latihan Soal 10

Pernyataan yang benar tentang soal cerita matriks adalah ....

Ahasil akhir tidak perlu ditafsirkan

Bsemua soal cerita matriks harus diselesaikan dengan determinan

Cpenjumlahan matriks boleh dilakukan walaupun ordonya berbeda

Darti baris dan kolom harus jelas agar hasil dapat ditafsirkan

Eperkalian matriks selalu dapat dibalik urutannya

Pembahasan

Dalam soal cerita matriks, arti baris dan kolom harus jelas agar hasil perhitungan dapat ditafsirkan sesuai konteks. Jadi, jawabannya adalah **D**.
