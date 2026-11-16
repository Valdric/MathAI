---
judul: "Fungsi dan Pemodelannya"
kelas: "11"
fase: "F"
bab: "8"
mapel: "Matematika Tingkat Lanjut"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (11 bagian); m4th-lab.net (12 bagian)"
---

# Bab 8 — Fungsi dan Pemodelannya

> Kelas 11 · Fase F · Matematika Tingkat Lanjut

## Daftar Isi

- (A) Fungsi Trigonometri
  - Ukuran Sudut Radian
  - Fungsi Trigonometri pada Lingkaran Satuan
  - Sudut di Semua Kuadran dan Relasi Sudut
  - Grafik Fungsi Trigonometri
  - Pemodelan Fenomena Periodik
  - Identitas Penjumlahan dan Pengurangan Sudut
- (B) Fungsi Logaritma
  - Fungsi dan Grafik Logaritma
  - Pemodelan Fungsi Logaritma
- (C) Fungsi Aljabar
  - Fungsi Rasional
  - Persamaan dan Pertidaksamaan Rasional
  - Fungsi Akar
  - Persamaan dan Pertidaksamaan Irasional
- (D) Fungsi Non-aljabar
  - Fungsi Eksponensial, Nilai Mutlak, Tangga, dan Sesepenggal

## (A) Fungsi Trigonometri

### Ukuran Sudut Radian

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas X, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab 4 Trigonometri, subbab 4.1 Ukuran Sudut (Derajat dan Radian), Sifat 4.1–4.2 dan Tabel 4.1, hlm. 119–124.*

Satu **radian** adalah besar sudut pusat $\angle AOB$ yang panjang busurnya sama dengan jari-jari lingkaran, yaitu $\overset{\frown}{AB} = r$. Jika panjang busur tidak sama dengan $r$, besar sudutnya dalam radian:

$$\angle AOB = \frac{\overset{\frown}{AB}}{r} \text{ rad}$$

Karena satu putaran sama dengan $2\pi$ radian:

$$360^\circ = 2\pi \text{ rad}, \qquad 1^\circ = \frac{\pi}{180} \text{ rad}, \qquad 1 \text{ rad} = \frac{180^\circ}{\pi} \approx 57{,}3^\circ$$

- Konversi $x$ derajat ke radian: kalikan $x$ dengan $\dfrac{\pi}{180^\circ}$. Misalnya $45^\circ = 45^\circ \times \dfrac{\pi}{180^\circ} = \dfrac{\pi}{4}$ rad.
- Konversi $x$ radian ke derajat: kalikan $x$ dengan $\dfrac{180^\circ}{\pi}$.

#### Contoh

Nyatakan dalam radian: (a) $\frac{1}{4}$ putaran, (b) $\frac{1}{3}$ putaran, (c) 4 putaran, (d) $225^\circ$.

**Penyelesaian:**

a. $\frac{1}{4} \times 360^\circ = 90^\circ = 90 \times \dfrac{\pi}{180} = \dfrac{\pi}{2}$ rad

b. $\frac{1}{3} \times 360^\circ = 120^\circ = 120 \times \dfrac{\pi}{180} = \dfrac{2\pi}{3}$ rad

c. $4 \times 360^\circ = 1.440^\circ = 1.440 \times \dfrac{\pi}{180} = 8\pi$ rad

d. $225^\circ = 225 \times \dfrac{\pi}{180} = \dfrac{5\pi}{4}$ rad, atau $\dfrac{225}{360} = \dfrac{5}{8}$ putaran

| Derajat | Radian | Derajat | Radian |
| --- | --- | --- | --- |
| $0^\circ$ | 0 | $90^\circ$ | $\frac{\pi}{2}$ |
| $30^\circ$ | $\frac{\pi}{6}$ | $120^\circ$ | $\frac{2\pi}{3}$ |
| $45^\circ$ | $\frac{\pi}{4}$ | $135^\circ$ | $\frac{3\pi}{4}$ |
| $60^\circ$ | $\frac{\pi}{3}$ | $180^\circ$ | $\pi$ |

### Fungsi Trigonometri pada Lingkaran Satuan

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 3 Fungsi Trigonometri, subbab A Fungsi Trigonometri dan Lingkaran Satuan, hlm. 101–120.*

#### Definisi 3.2 Fungsi Trigonometri Bilangan Real

Misalkan $t$ sembarang bilangan real dan $P(x, y)$ titik pada **lingkaran satuan** (lingkaran berpusat di titik asal dengan jari-jari 1) yang bersesuaian dengan sudut pusat $t$. Fungsi-fungsi trigonometri didefinisikan sebagai berikut:

$$\cos t = x, \qquad \sin t = y, \qquad \tan t = \frac{y}{x}\;(x \neq 0)$$

$$\sec t = \frac{1}{x}\;(x \neq 0), \qquad \csc t = \frac{1}{y}\;(y \neq 0), \qquad \cot t = \frac{x}{y}\;(y \neq 0)$$

#### Tanda Fungsi Trigonometri di Setiap Kuadran

| Kuadran | Tanda koordinat | Bernilai positif | Bernilai negatif |
|---|---|---|---|
| I | $x > 0$, $y > 0$ | sin, cos, tan | – |
| II | $x < 0$, $y > 0$ | sin | cos, tan |
| III | $x < 0$, $y < 0$ | tan | sin, cos |
| IV | $x > 0$, $y < 0$ | cos | sin, tan |

#### Bilangan Acuan

**Bilangan acuan** $\bar{t}$ untuk $t$ adalah panjang busur lingkaran satuan terpendek antara titik yang ditentukan oleh $t$ dan sumbu-$x$. Nilai fungsi trigonometri untuk sembarang bilangan real ditentukan dari nilai pada bilangan acuannya, dengan tanda sesuai kuadran.

**Contoh 3.5.** Untuk $t = \dfrac{4\pi}{3}$ (kuadran III), bilangan acuannya $\bar{t} = t - \pi = \dfrac{\pi}{3}$. Untuk $t = 315^\circ$ (kuadran IV), sudut acuannya $360^\circ - 315^\circ = 45^\circ$.

#### Sifat 3.2 Fungsi Genap dan Fungsi Ganjil

Kosinus dan sekan adalah **fungsi genap**: $\cos(-t) = \cos t$ dan $\sec(-t) = \sec t$.

Sinus, kosekan, tangen, dan kotangen adalah **fungsi ganjil**: $\sin(-t) = -\sin t$, $\csc(-t) = -\csc t$, $\tan(-t) = -\tan t$, dan $\cot(-t) = -\cot t$.

**Contoh 3.8.** $\sin\left(-\dfrac{\pi}{4}\right) = -\sin\dfrac{\pi}{4} = -\dfrac{\sqrt{2}}{2}$ dan $\sec\left(-\dfrac{\pi}{6}\right) = \sec\dfrac{\pi}{6} = \dfrac{2}{\sqrt{3}} = \dfrac{2\sqrt{3}}{3}$.

### Sudut di Semua Kuadran dan Relasi Sudut

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas X, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab 4 Trigonometri, subbab 4.1 dan 4.4 Relasi Sudut, Sifat 4.4–4.5, hlm. 124–172.*

#### Sudut Baku dan Kuadran

Sudut dalam posisi baku memiliki sisi awal pada sumbu $X$ positif; sisi terminalnya menentukan kuadran sudut tersebut:

| Kuadran | Besar sudut |
| --- | --- |
| I | $0^\circ$–$90^\circ$ |
| II | $90^\circ$–$180^\circ$ |
| III | $180^\circ$–$270^\circ$ |
| IV | $270^\circ$–$360^\circ$ |

Contoh: sudut $60^\circ$ memiliki sisi terminal di kuadran I, sudut $-45^\circ$ di kuadran IV, dan sudut $120^\circ$ di kuadran II.

#### Tanda Nilai Perbandingan Trigonometri di Setiap Kuadran

| Kuadran | Nilai yang bertanda positif | Jembatan keledai |
| --- | --- | --- |
| I ($0^\circ < \theta \leq 90^\circ$) | sinus, cosinus, tangen | **A**sal |
| II ($90^\circ < \theta \leq 180^\circ$) | sinus (cosinus dan tangen negatif) | **S**aja |
| III ($180^\circ < \theta \leq 270^\circ$) | tangen (sinus dan cosinus negatif) | **T**ahu |
| IV ($270^\circ < \theta \leq 360^\circ$) | cosinus (sinus dan tangen negatif) | **C**aranya |

#### Sifat Relasi Antarsudut

Untuk setiap $0^\circ < a < 90^\circ$:

| Kuadran II | Kuadran III | Kuadran IV |
| --- | --- | --- |
| $\sin(90^\circ + a) = \cos a$ | $\sin(180^\circ + a) = -\sin a$ | $\sin(360^\circ - a) = -\sin a$ |
| $\cos(90^\circ + a) = -\sin a$ | $\cos(180^\circ + a) = -\cos a$ | $\cos(360^\circ - a) = \cos a$ |
| $\tan(90^\circ + a) = -\cot a$ | $\tan(180^\circ + a) = \tan a$ | $\tan(360^\circ - a) = -\tan a$ |
| $\sin(180^\circ - a) = \sin a$ | | |
| $\cos(180^\circ - a) = -\cos a$ | | |
| $\tan(180^\circ - a) = -\tan a$ | | |

#### Contoh

Dengan $\theta = 30^\circ$ dan $\theta = 60^\circ$:

$$\cos 150^\circ = \cos(180^\circ - 30^\circ) = -\cos 30^\circ = -\frac{1}{2}\sqrt{3}$$

$$\cos 120^\circ = \cos(180^\circ - 60^\circ) = -\cos 60^\circ = -\frac{1}{2}$$

$$\sin 210^\circ = \sin(180^\circ + 30^\circ) = -\sin 30^\circ = -\frac{1}{2}$$

### Grafik Fungsi Trigonometri

#### Grafik Fungsi Trigonometri

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas X, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab 4 Trigonometri, subbab 4.7 Grafik Fungsi Trigonometri, Masalah 4.12–4.13 dan Contoh 4.17, hlm. 193–200.*

Grafik fungsi trigonometri digambar dengan memasangkan ukuran sudut $x$ dengan nilai perbandingan trigonometrinya (dari tabel sudut istimewa dan relasi sudut), lalu menghubungkan titik-titik tersebut.

##### Sifat Grafik $y = \sin x$

a. Grafik berbentuk gelombang.
b. Nilai maksimum 1 dan nilai minimum $-1$.
c. Untuk 1 periode (1 putaran penuh, $0 \leq x \leq 2\pi$), kurva $y = \sin x$ memiliki 1 "gunung" dan 1 "lembah".
d. Nilai fungsi sinus berulang pada gunung atau lembah yang sama.
e. Untuk semua ukuran sudut $x$, daerah hasil fungsi $y = \sin x$ adalah $-1 \leq y \leq 1$.

Dari grafik $y = \sin x$ dapat dibentuk kombinasi fungsi sinus, misalnya $y = 2\sin x$, $y = \sin 2x$, dan $y = \sin\left(x + \frac{\pi}{2}\right)$.

##### Contoh

Gambarkan grafik fungsi $y = \sin 2x$ dan $y = \sin\left(x + \frac{\pi}{2}\right)$ untuk $0 \leq x \leq 2\pi$, lalu tuliskan perbedaannya.

**Penyelesaian:**

Untuk $y = \sin 2x$, setiap besar sudut dikalikan dua:

| $x$ | 0 | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{2}$ | $\frac{3\pi}{4}$ | $\pi$ | $\frac{5\pi}{4}$ | $\frac{3\pi}{2}$ | $\frac{7\pi}{4}$ | $2\pi$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $y = \sin 2x$ | 0 | $\frac{1}{2}\sqrt{3}$ | 1 | 0 | $-1$ | 0 | 1 | 0 | $-1$ | 0 |

Grafik $y = \sin 2x$ menyelesaikan 2 gelombang penuh pada $0 \leq x \leq 2\pi$ (periodenya $\pi$).

Untuk $y = \sin\left(x + \frac{\pi}{2}\right)$, setiap besar sudut ditambah $\frac{\pi}{2}$ (atau $90^\circ$). Menurut relasi sudut, $\sin\left(x + \frac{\pi}{2}\right) = \cos x$, sehingga grafiknya sama dengan grafik $y = \cos x$:

| $x$ | 0 | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ | $\frac{3\pi}{2}$ | $2\pi$ |
| --- | --- | --- | --- | --- | --- | --- |
| $y = \cos x$ | 1 | $\frac{1}{2}$ | 0 | $-1$ | 0 | 1 |

Perbedaannya: $y = \sin 2x$ memampatkan grafik sinus secara mendatar (periode berubah dari $2\pi$ menjadi $\pi$), sedangkan $y = \sin\left(x + \frac{\pi}{2}\right)$ menggeser grafik sinus sejauh $\frac{\pi}{2}$ ke kiri tanpa mengubah periodenya.

#### Grafik Fungsi Trigonometri dan Transformasinya

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 3 Fungsi Trigonometri, subbab B.1–B.2 Grafik Fungsi Trigonometri, hlm. 121–131.*

##### Amplitudo

Pengali 2 pada $f(x) = 2\sin x$ membuat grafik sinus melebar secara vertikal: jarak antara nilai tengah dan nilai maksimum (atau minimum) menjadi 2. Jarak ini disebut **amplitudo**:

$$A = \frac{|M - m|}{2}$$

dengan $M$ nilai $y$ maksimum dan $m$ nilai $y$ minimum fungsi. Grafik $f(x) = 2\sin x$ dan $g(x) = -2\sin x$ sama-sama beramplitudo 2.

##### Sifat 3.3 Transformasi Fungsi Sinus dan Kosinus

$$y = a\sin k(x - b) + c \qquad \text{dan} \qquad y = a\cos k(x - b) + c, \qquad k > 0$$

Grafik kedua fungsi tersebut memiliki **amplitudo** $|a|$, **periode** $\dfrac{2\pi}{k}$, **pergeseran horizontal** $b$, dan **pergeseran vertikal** $c$.

##### Grafik Fungsi Tangen

Fungsi $y = \tan x$ memiliki **periode** $\pi$ dan tidak terdefinisi pada $x = \dfrac{\pi}{2} + n\pi$ untuk sembarang bilangan bulat $n$. Di sekitar nilai-nilai tersebut grafiknya mendekati garis vertikal ke arah atas atau bawah; garis seperti ini disebut **asimtot vertikal**. Satu periode $y = \tan x$ adalah $-\dfrac{\pi}{2} < x < \dfrac{\pi}{2}$.

Grafik tangen yang ditransformasi (misalnya digeser ke kiri lalu diregangkan secara vertikal) diperoleh dengan menggeser dan meregangkan grafik $y = \tan x$ beserta asimtot-asimtotnya.

### Pemodelan Fenomena Periodik

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 3 Fungsi Trigonometri, subbab B.3 Pemodelan dengan Fungsi-Fungsi Trigonometri, hlm. 131–135.*

Fungsi trigonometri berguna untuk memodelkan ketinggian pasang surut air laut. Pasang surut terjadi karena gaya gravitasi bulan dan matahari. Pada Maret 2021, kapal Ever Given yang tersangkut di Terusan Suez berhasil diselamatkan dengan bantuan gelombang pasang.

#### Contoh 3.12: Pasang Surut Teluk Kupang

Pada suatu hari, permukaan air Teluk Kupang 0,4 m di atas rata-rata saat pasang dan 0,4 m di bawah rata-rata saat surut, dengan dua kali pasang dan dua kali surut. Pada pukul 00.00 ketinggiannya sama dengan rata-rata.

1. Grafiknya beramplitudo 0,4 dan berperiode 12 jam, sehingga $k = \dfrac{2\pi}{12} = \dfrac{\pi}{6}$ dan modelnya

$$y = 0{,}4\sin\left(\frac{\pi}{6}x\right)$$

2. Pada pukul 16.00 ($x = 16$):

$$y = 0{,}4\sin\left(\frac{16\pi}{6}\right) = 0{,}4\sin\left(\frac{2\pi}{3}\right) = 0{,}4 \cdot \frac{\sqrt{3}}{2} \approx 0{,}35$$

Jadi ketinggian permukaan air sekitar 0,35 m di atas rata-rata.

### Identitas Penjumlahan dan Pengurangan Sudut

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 3 Fungsi Trigonometri, subbab C.2 Identitas Penjumlahan dan Pengurangan Sudut, hlm. 139–141.*

Dengan titik-titik pada lingkaran satuan dan teorema Pythagoras, buku menurunkan identitas penjumlahan kosinus; identitas lainnya diperoleh dari identitas genap ganjil:

$$\cos(A + B) = \cos A\cos B - \sin A\sin B$$

$$\cos(A - B) = \cos A\cos(-B) - \sin A\sin(-B) = \cos A\cos B + \sin A\sin B$$

$$\sin(A + B) = \sin A\cos B + \cos A\sin B$$

$$\sin(A - B) = \sin A\cos B - \cos A\sin B$$

$$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A\tan B}, \qquad \tan(A - B) = \frac{\tan A - \tan B}{1 + \tan A\tan B}$$

#### Contoh 3.14

Buktikan $\cos\left(\dfrac{\pi}{2} - x\right) = \sin x$.

$$\cos\left(\frac{\pi}{2} - x\right) = \cos\frac{\pi}{2}\cos x + \sin\frac{\pi}{2}\sin x = 0 \cdot \cos x + 1 \cdot \sin x = \sin x$$

Dengan cara serupa, $\sin\left(\dfrac{\pi}{2} - x\right) = \cos x$.

## (B) Fungsi Logaritma

### Fungsi dan Grafik Logaritma

#### Memahami Fungsi Logaritma

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/memahami-fungsi-logaritma*

Pada materi sebelumnya, kita telah mempelajari persamaan logaritma. Sekarang kita akan membahas **fungsi logaritma**.

Fungsi logaritma adalah fungsi yang memuat bentuk logaritma dengan variabel berada pada numerus. Fungsi ini sangat erat hubungannya dengan fungsi eksponen karena keduanya merupakan fungsi yang saling berkebalikan.

  📌 **Catatan:** Fungsi logaritma dapat dipahami sebagai fungsi kebalikan dari fungsi eksponen.

---

###### 1. Bentuk Umum Fungsi Logaritma

Bentuk umum fungsi logaritma adalah:

$$f(x)={}^a\log x$$

dengan syarat:

$$a\gt0,\quad a\ne1,\quad x\gt0$$

Pada fungsi tersebut:

- $a$ adalah basis logaritma;
- $x$ adalah variabel yang menjadi numerus;
- $f(x)$ adalah nilai logaritma.

Contoh fungsi logaritma:

- $f(x)={}^2\log x$
- $f(x)={}^3\log x$
- $f(x)={}^{10}\log x$
- $f(x)={}^\frac12\log x$

  ⚠️ **Perhatian:** Pada fungsi $f(x)={}^a\log x$, nilai $x$ harus lebih dari $0$.

---

###### 2. Mengapa Fungsi Logaritma Memiliki Syarat $x\gt0$?

Perhatikan hubungan logaritma dan eksponen:

$${}^a\log x=y \Longleftrightarrow a^y=x$$

Jika $a\gt0$ dan $a\ne1$, maka hasil $a^y$ selalu positif.

Artinya:

$$x=a^y\gt0$$

Jadi, fungsi logaritma hanya terdefinisi untuk:

$$x\gt0$$

Dengan kata lain, grafik fungsi logaritma hanya berada di sebelah kanan sumbu $Y$.

---

###### 3. Domain dan Range Fungsi Logaritma

Untuk fungsi:

$$f(x)={}^a\log x$$

dengan $a\gt0$ dan $a\ne1$, domain dan range-nya adalah sebagai berikut.

| Unsur | Nilai | Penjelasan |
| --- | --- | --- |
| Domain | $x\gt0$ | Numerus logaritma harus positif. |
| Range | Semua bilangan real | Nilai logaritma dapat negatif, nol, atau positif. |

Contoh:

Untuk fungsi:

$$f(x)={}^2\log x$$

domainnya adalah:

$$x\gt0$$

range-nya adalah semua bilangan real.

---

###### 4. Fungsi Logaritma sebagai Kebalikan Fungsi Eksponen

Fungsi logaritma merupakan kebalikan dari fungsi eksponen.

Jika:

$$y=2^x$$

maka fungsi inversnya adalah:

$$y={}^2\log x$$

Kedua grafik tersebut saling simetris terhadap garis:

$$y=x$$

  📊 **Grafik Interaktif 1.** Grafik $y=2^x$ dan $y={}^2\log x$ sebagai dua fungsi yang saling berkebalikan. Garis $y=x$ menjadi garis cermin.

Dari grafik tersebut terlihat bahwa:

- grafik $y=2^x$ melalui titik $(0,1)$;
- grafik $y={}^2\log x$ melalui titik $(1,0)$;
- grafik $y=2^x$ dan $y={}^2\log x$ saling mencerminkan terhadap garis $y=x$.

  📌 **Catatan teknis:** Pada kode Desmos, fungsi logaritma ditulis dengan format **log_2(x)**. Namun, pada teks materi tetap digunakan notasi Indonesia, yaitu ${}^2\log x$.

---

###### 5. Titik Penting pada Fungsi Logaritma

Perhatikan fungsi:

$$f(x)={}^2\log x$$

Beberapa titik pentingnya dapat diperoleh dengan mengubah bentuk logaritma ke bentuk eksponen.

| $x$ | $f(x)={}^2\log x$ | Alasan | Titik |
| --- | --- | --- | --- |
| $\frac14$ | $-2$ | $2^{-2}=\frac14$ | $\left(\frac14,-2\right)$ |
| $\frac12$ | $-1$ | $2^{-1}=\frac12$ | $\left(\frac12,-1\right)$ |
| $1$ | $0$ | $2^0=1$ | $(1,0)$ |
| $2$ | $1$ | $2^1=2$ | $(2,1)$ |
| $4$ | $2$ | $2^2=4$ | $(4,2)$ |
| $8$ | $3$ | $2^3=8$ | $(8,3)$ |

  📊 **Grafik Interaktif 2.** Grafik $y={}^2\log x$ dengan beberapa titik penting.

---

###### 6. Titik Potong dengan Sumbu $X$

Grafik fungsi logaritma:

$$f(x)={}^a\log x$$

memotong sumbu $X$ ketika:

$$f(x)=0$$

Maka:

$$\begin{aligned}
{}^a\log x&=0\\
x&=a^0\\
x&=1
\end{aligned}$$

Jadi, grafik fungsi logaritma selalu memotong sumbu $X$ di titik:

$$(1,0)$$

untuk setiap basis $a$ yang memenuhi $a\gt0$ dan $a\ne1$.

  💡 **Ingat:** Semua grafik $y={}^a\log x$ selalu melalui titik $(1,0)$.

---

###### 7. Apakah Fungsi Logaritma Memotong Sumbu $Y$?

Grafik fungsi logaritma tidak memotong sumbu $Y$.

Mengapa?

Sumbu $Y$ terjadi saat:

$$x=0$$

Namun, fungsi logaritma hanya terdefinisi untuk:

$$x\gt0$$

Karena $x=0$ tidak memenuhi syarat, maka fungsi logaritma tidak memiliki titik potong dengan sumbu $Y$.

  ⚠️ **Perhatian:** Grafik logaritma mendekati sumbu $Y$, tetapi tidak pernah memotongnya.

---

###### 8. Asimtot Tegak Fungsi Logaritma

Fungsi logaritma:

$$f(x)={}^a\log x$$

memiliki asimtot tegak:

$$x=0$$

Asimtot tegak adalah garis yang didekati grafik, tetapi tidak pernah dipotong oleh grafik.

Untuk fungsi logaritma, garis $x=0$ adalah sumbu $Y$.

  📊 **Grafik Interaktif 3.** Grafik $y={}^2\log x$ memiliki asimtot tegak $x=0$.

Dari grafik terlihat bahwa grafik $y={}^2\log x$ semakin mendekati sumbu $Y$, tetapi tidak menyentuh atau memotongnya.

---

###### 9. Fungsi Logaritma dengan Basis Lebih dari $1$

Jika basis logaritma memenuhi:

$$a\gt1$$

maka fungsi:

$$f(x)={}^a\log x$$

merupakan fungsi naik.

Artinya, semakin besar nilai $x$, semakin besar nilai $f(x)$.

Contoh:

$$f(x)={}^2\log x$$

Untuk beberapa nilai $x$:

| $x$ | ${}^2\log x$ |
| --- | --- |
| $1$ | $0$ |
| $2$ | $1$ |
| $4$ | $2$ |
| $8$ | $3$ |

Terlihat bahwa saat $x$ membesar, nilai ${}^2\log x$ juga membesar.

---

###### 10. Fungsi Logaritma dengan Basis antara $0$ dan $1$

Jika basis logaritma memenuhi:

$$0\lt a\lt1$$

maka fungsi:

$$f(x)={}^a\log x$$

merupakan fungsi turun.

Artinya, semakin besar nilai $x$, semakin kecil nilai $f(x)$.

Contoh:

$$f(x)={}^\frac12\log x$$

Karena:

$$\left(\frac12\right)^{-1}=2$$

maka:

$${}^\frac12\log 2=-1$$

Karena:

$$\left(\frac12\right)^0=1$$

maka:

$${}^\frac12\log 1=0$$

Karena:

$$\left(\frac12\right)^1=\frac12$$

maka:

$${}^\frac12\log \frac12=1$$

  📊 **Grafik Interaktif 4.** Perbandingan grafik logaritma dengan basis $2$ dan basis $\frac12$.

Dari grafik tersebut terlihat bahwa:

- $y={}^2\log x$ merupakan fungsi naik;
- $y={}^\frac12\log x$ merupakan fungsi turun;
- keduanya sama-sama melalui titik $(1,0)$;
- keduanya memiliki asimtot tegak $x=0$.

---

###### 11. Perbandingan Fungsi Eksponen dan Fungsi Logaritma

Fungsi logaritma dan fungsi eksponen memiliki hubungan yang sangat dekat.

| Unsur | Fungsi Eksponen | Fungsi Logaritma |
| --- | --- | --- |
| Bentuk umum | $y=a^x$ | $y={}^a\log x$ |
| Domain | Semua bilangan real | $x\gt0$ |
| Range | $y\gt0$ | Semua bilangan real |
| Titik penting | $(0,1)$ | $(1,0)$ |
| Asimtot | $y=0$ | $x=0$ |
| Hubungan | Saling berkebalikan terhadap garis $y=x$. |  |

---

###### 12. Transformasi Sederhana Fungsi Logaritma

Bentuk fungsi logaritma dapat mengalami pergeseran.

Misalnya:

$$f(x)={}^2\log(x-1)$$

Fungsi ini merupakan pergeseran grafik $y={}^2\log x$ sejauh $1$ satuan ke kanan.

Syaratnya:

$$x-1\gt0$$

sehingga:

$$x\gt1$$

Asimtot tegaknya berubah dari:

$$x=0$$

menjadi:

$$x=1$$

Contoh lain:

$$g(x)={}^2\log x+3$$

Grafik ini merupakan pergeseran grafik $y={}^2\log x$ sejauh $3$ satuan ke atas.

  📊 **Grafik Interaktif 5.** Pergeseran grafik fungsi logaritma.

Dari grafik tersebut:

- $y={}^2\log x$ adalah grafik dasar;
- $y={}^2\log(x-1)$ bergeser $1$ satuan ke kanan;
- $y={}^2\log x+3$ bergeser $3$ satuan ke atas.

---

###### 13. Menentukan Domain Fungsi Logaritma

Untuk menentukan domain fungsi logaritma, pastikan numerusnya lebih dari $0$.

Contoh 1:

$$f(x)={}^2\log(x-5)$$

Syarat:

$$x-5\gt0$$

Maka:

$$x\gt5$$

Jadi, domainnya adalah:

$$x\gt5$$

Contoh 2:

$$g(x)={}^3\log(2x+4)$$

Syarat:

$$2x+4\gt0$$

Maka:

$$\begin{aligned}
2x+4&\gt0\\
2x&\gt-4\\
x&\gt-2
\end{aligned}$$

Jadi, domainnya adalah:

$$x\gt-2$$

Contoh 3:

$$h(x)={}^5\log(x^2-9)$$

Syarat:

$$x^2-9\gt0$$

Faktorkan:

$$\begin{aligned}
x^2-9&\gt0\\
(x-3)(x+3)&\gt0
\end{aligned}$$

Maka:

$$x\lt-3 \quad \text{atau} \quad x\gt3$$

Jadi, domainnya adalah:

$$x\lt-3 \quad \text{atau} \quad x\gt3$$

---

###### 14. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh | Perbaikan |
| --- | --- | --- |
| Menganggap domain fungsi logaritma semua bilangan real. | $f(x)={}^2\log x$ dianggap berlaku untuk semua $x$. | Domainnya harus $x\gt0$. |
| Mengira grafik logaritma memotong sumbu $Y$. | Menentukan titik saat $x=0$. | Fungsi logaritma tidak terdefinisi untuk $x=0$. |
| Salah menentukan sifat naik atau turun. | ${}^\frac12\log x$ dianggap fungsi naik. | Jika $0\lt a\lt1$, fungsi logaritma turun. |
| Lupa menggeser asimtot saat bentuknya berubah. | $y={}^2\log(x-1)$ dianggap memiliki asimtot $x=0$. | Asimtotnya adalah $x=1$. |
| Salah menentukan domain saat numerus berbentuk kuadrat. | ${}^2\log(x^2-9)$ dianggap domainnya $x\gt3$ saja. | Domainnya $x\lt-3$ atau $x\gt3$. |

  ⚠️ **Perhatian:** Setiap fungsi logaritma harus selalu diperiksa syarat numerusnya. Numerus harus lebih dari $0$.

---

###### 15. Rangkuman

- Fungsi logaritma memiliki bentuk umum:
  $$f(x)={}^a\log x$$
- Syarat basis:
  $$a\gt0,\quad a\ne1$$
- Syarat numerus:
  $$x\gt0$$
- Domain fungsi $f(x)={}^a\log x$ adalah:
  $$x\gt0$$
- Range fungsi logaritma adalah semua bilangan real.
- Grafik $y={}^a\log x$ selalu melalui titik $(1,0)$.
- Grafik fungsi logaritma tidak memotong sumbu $Y$.
- Fungsi logaritma memiliki asimtot tegak $x=0$.
- Jika $a\gt1$, fungsi logaritma naik.
- Jika $0\lt a\lt1$, fungsi logaritma turun.
- Fungsi logaritma merupakan invers dari fungsi eksponen.
- Grafik $y=a^x$ dan $y={}^a\log x$ saling simetris terhadap garis $y=x$.
- Untuk menentukan domain fungsi logaritma, pastikan numerusnya lebih dari $0$.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan domain dari fungsi:
$$f(x)={}^2\log(x-4)$$

💡 Pembahasan

Syarat numerus logaritma adalah lebih dari $0$.

Maka:

$$\begin{aligned}
x-4&\gt0\\
x&\gt4
\end{aligned}$$

Jadi, domain fungsi tersebut adalah:

$$x\gt4$$

  Contoh Soal 2

Tentukan titik potong grafik $f(x)={}^3\log x$ dengan sumbu $X$.

💡 Pembahasan

Titik potong dengan sumbu $X$ terjadi saat $f(x)=0$.

$$\begin{aligned}
{}^3\log x&=0\\
x&=3^0\\
x&=1
\end{aligned}$$

Jadi, titik potong grafik dengan sumbu $X$ adalah:

$$(1,0)$$

  Contoh Soal 3

Tentukan domain dari fungsi:
$$g(x)={}^5\log(x^2-4)$$

💡 Pembahasan

Syarat numerus:

$$x^2-4\gt0$$

Faktorkan:

$$\begin{aligned}
x^2-4&\gt0\\
(x-2)(x+2)&\gt0
\end{aligned}$$

Pembuat nolnya:

$$x=2 \quad \text{atau} \quad x=-2$$

Karena bentuk kuadrat terbuka ke atas, maka daerah positif berada di luar interval akar.

Jadi:

$$x\lt-2 \quad \text{atau} \quad x\gt2$$

Domain fungsi adalah:

$$x\lt-2 \quad \text{atau} \quad x\gt2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Domain dari fungsi $f(x)={}^2\log x$ adalah ....

A
$x\lt0$

B
$x\gt0$

C
$x\ge0$

D
$x\le0$

E
Semua bilangan real

💡 Pembahasan

Pada fungsi logaritma, numerus harus lebih dari $0$.

Karena numerusnya adalah $x$, maka:

$$x\gt0$$

  Latihan Soal 2

Range dari fungsi $f(x)={}^3\log x$ adalah ....

A
$y\gt0$

B
$y\lt0$

C
$y\ge0$

D
Semua bilangan real

E
$0\lt y\lt1$

💡 Pembahasan

Fungsi logaritma dapat menghasilkan nilai negatif, nol, atau positif.

Jadi, range-nya adalah semua bilangan real.

  Latihan Soal 3

Grafik fungsi $y={}^2\log x$ memotong sumbu $X$ di titik ....

A
$(0,1)$

B
$(1,0)$

C
$(2,0)$

D
$(0,2)$

E
$(-1,0)$

💡 Pembahasan

Titik potong sumbu $X$ terjadi saat $y=0$.

$$\begin{aligned}
{}^2\log x&=0\\
x&=2^0\\
x&=1
\end{aligned}$$

Jadi, titiknya adalah $(1,0)$.

  Latihan Soal 4

Asimtot tegak dari fungsi $y={}^2\log x$ adalah ....

A
$x=0$

B
$y=0$

C
$x=1$

D
$y=1$

E
$y=x$

💡 Pembahasan

Fungsi $y={}^2\log x$ memiliki domain $x\gt0$ dan grafiknya mendekati sumbu $Y$.

Maka asimtot tegaknya adalah:

$$x=0$$

  Latihan Soal 5

Domain dari fungsi $f(x)={}^2\log(x-3)$ adalah ....

A
$x\lt3$

B
$x\gt3$

C
$x\ge3$

D
$x\le3$

E
Semua bilangan real

💡 Pembahasan

Syarat numerus:

$$\begin{aligned}
x-3&\gt0\\
x&\gt3
\end{aligned}$$

  Latihan Soal 6

Domain dari fungsi $g(x)={}^3\log(2x+6)$ adalah ....

A
$x\gt3$

B
$x\gt0$

C
$x\gt-3$

D
$x\lt-3$

E
$x\ne-3$

💡 Pembahasan

Syarat numerus:

$$\begin{aligned}
2x+6&\gt0\\
2x&\gt-6\\
x&\gt-3
\end{aligned}$$

  Latihan Soal 7

Grafik fungsi $y={}^2\log(x-4)$ memiliki asimtot tegak ....

A
$x=0$

B
$x=2$

C
$x=4$

D
$y=4$

E
$y=0$

💡 Pembahasan

Untuk fungsi:

$$y={}^2\log(x-4)$$

syaratnya:

$$x-4\gt0$$

Batasnya adalah:

$$x=4$$

Jadi, asimtot tegaknya adalah $x=4$.

  Latihan Soal 8

Jika $a\gt1$, maka grafik fungsi $y={}^a\log x$ bersifat ....

A
naik

B
turun

C
konstan

D
periodik

E
tidak memiliki domain

💡 Pembahasan

Jika basis logaritma $a\gt1$, maka fungsi $y={}^a\log x$ bersifat naik.

  Latihan Soal 9

Jika $0\lt a\lt1$, maka grafik fungsi $y={}^a\log x$ bersifat ....

A
naik

B
turun

C
konstan

D
selalu positif

E
tidak memotong sumbu $X$

💡 Pembahasan

Jika $0\lt a\lt1$, maka fungsi logaritma $y={}^a\log x$ bersifat turun.

  Latihan Soal 10

Domain dari fungsi $h(x)={}^2\log(x^2-9)$ adalah ....

A
$-3\lt x\lt3$

B
$x\gt3$ saja

C
$x\lt-3$ saja

D
$x\lt-3$ atau $x\gt3$

E
Semua bilangan real

💡 Pembahasan

Syarat numerus:

$$x^2-9\gt0$$

Faktorkan:

$$\begin{aligned}
x^2-9&\gt0\\
(x-3)(x+3)&\gt0
\end{aligned}$$

Daerah positif berada di luar interval akar, sehingga:

$$x\lt-3 \quad \text{atau} \quad x\gt3$$

#### Memahami Grafik Fungsi Logaritma

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/memahami-grafik-fungsi-logaritma*

Pada materi sebelumnya, kita telah mempelajari fungsi logaritma. Sekarang kita akan membahas grafik fungsi logaritma secara lebih khusus.

Grafik fungsi logaritma penting dipahami karena melalui grafik kita dapat melihat domain, range, titik potong sumbu, sifat naik atau turun, transformasi grafik, dan asimtot tegaknya.

  📌 **Catatan:** Grafik fungsi logaritma membantu kita memahami mengapa fungsi logaritma hanya terdefinisi untuk numerus yang bernilai positif.

---

###### 1. Bentuk Umum Grafik Fungsi Logaritma

Bentuk umum fungsi logaritma adalah:

$$y={}^a\log x$$

dengan syarat:

$$a\gt0,\quad a\ne1,\quad x\gt0$$

Pada fungsi tersebut:

- $a$ adalah basis logaritma;
- $x$ adalah numerus;
- $y$ adalah nilai fungsi.

Karena numerus logaritma harus positif, maka grafik fungsi logaritma hanya berada pada daerah:

$$x\gt0$$

Artinya, grafik tidak memiliki bagian di sebelah kiri sumbu $Y$ dan tidak pernah menyentuh sumbu $Y$.

---

###### 2. Domain dan Range Grafik Fungsi Logaritma

Untuk fungsi:

$$y={}^a\log x$$

dengan $a\gt0$ dan $a\ne1$, berlaku:

| Unsur | Nilai | Penjelasan |
| --- | --- | --- |
| Domain | $x\gt0$ | Numerus logaritma harus positif. |
| Range | Semua bilangan real | Nilai logaritma dapat negatif, nol, atau positif. |
| Titik potong sumbu $X$ | $(1,0)$ | Karena ${}^a\log 1=0$. |
| Titik potong sumbu $Y$ | Tidak ada | Karena $x=0$ tidak memenuhi domain. |
| Asimtot tegak | $x=0$ | Grafik mendekati sumbu $Y$, tetapi tidak memotongnya. |

  💡 **Ingat:** Grafik dasar $y={}^a\log x$ selalu melalui titik $(1,0)$ dan memiliki asimtot tegak $x=0$.

---

###### 3. Titik-Titik Penting pada Grafik $y={}^2\log x$

Untuk menggambar grafik fungsi logaritma, kita dapat membuat tabel nilai.

Perhatikan fungsi:

$$y={}^2\log x$$

Gunakan hubungan:

$${}^2\log x=y \Longleftrightarrow 2^y=x$$

| $y$ | $x=2^y$ | Titik $(x,y)$ |
| --- | --- | --- |
| $-2$ | $2^{-2}=\frac14$ | $\left(\frac14,-2\right)$ |
| $-1$ | $2^{-1}=\frac12$ | $\left(\frac12,-1\right)$ |
| $0$ | $2^0=1$ | $(1,0)$ |
| $1$ | $2^1=2$ | $(2,1)$ |
| $2$ | $2^2=4$ | $(4,2)$ |
| $3$ | $2^3=8$ | $(8,3)$ |

  📊 **Grafik Interaktif 1.** Grafik $y={}^2\log x$ beserta beberapa titik pentingnya.

---

###### 4. Titik Potong Grafik dengan Sumbu $X$

Grafik fungsi logaritma:

$$y={}^a\log x$$

memotong sumbu $X$ ketika:

$$y=0$$

Maka:

$$\begin{aligned}
{}^a\log x&=0\\
x&=a^0\\
x&=1
\end{aligned}$$

Jadi, titik potong grafik fungsi logaritma dengan sumbu $X$ adalah:

$$(1,0)$$

Hal ini berlaku untuk semua fungsi dasar:

$$y={}^a\log x$$

dengan $a\gt0$ dan $a\ne1$.

  💡 **Ingat:** Semua grafik dasar fungsi logaritma melalui titik $(1,0)$.

---

###### 5. Grafik Fungsi Logaritma Tidak Memotong Sumbu $Y$

Grafik fungsi logaritma tidak memotong sumbu $Y$.

Sumbu $Y$ terjadi ketika:

$$x=0$$

Namun, pada fungsi logaritma:

$$y={}^a\log x$$

syaratnya adalah:

$$x\gt0$$

Karena $x=0$ tidak memenuhi syarat, maka grafik fungsi logaritma tidak memiliki titik potong dengan sumbu $Y$.

  ⚠️ **Perhatian:** Grafik fungsi logaritma mendekati sumbu $Y$, tetapi tidak pernah memotong sumbu $Y$.

---

###### 6. Asimtot Tegak pada Grafik Fungsi Logaritma

Asimtot adalah garis yang didekati oleh grafik, tetapi tidak pernah disentuh atau dipotong oleh grafik.

Pada fungsi logaritma dasar:

$$y={}^a\log x$$

asimtot tegaknya adalah:

$$x=0$$

Garis $x=0$ adalah sumbu $Y$.

Mengapa asimtotnya $x=0$?

Karena domain fungsi logaritma adalah:

$$x\gt0$$

Semakin nilai $x$ mendekati $0$ dari kanan, grafik semakin mendekati sumbu $Y$, tetapi tidak pernah mencapai $x=0$.

  📊 **Grafik Interaktif 2.** Grafik $y={}^2\log x$ dengan asimtot tegak $x=0$.

Dari grafik tersebut terlihat bahwa:

- grafik hanya berada pada daerah $x\gt0$;
- grafik semakin mendekati garis $x=0$;
- grafik tidak pernah memotong garis $x=0$;
- garis $x=0$ disebut asimtot tegak.

---

###### 7. Grafik Logaritma dengan Basis Lebih dari $1$

Jika basis logaritma memenuhi:

$$a\gt1$$

maka grafik fungsi:

$$y={}^a\log x$$

merupakan grafik naik.

Artinya, jika $x$ semakin besar, maka nilai $y$ juga semakin besar.

Contoh:

$$y={}^2\log x$$

Tabel nilainya:

| $x$ | ${}^2\log x$ |
| --- | --- |
| $\frac12$ | $-1$ |
| $1$ | $0$ |
| $2$ | $1$ |
| $4$ | $2$ |
| $8$ | $3$ |

Terlihat bahwa saat $x$ bertambah, nilai $y$ juga bertambah.

  📊 **Grafik Interaktif 3.** Grafik $y={}^2\log x$ sebagai contoh fungsi logaritma naik.

---

###### 8. Grafik Logaritma dengan Basis antara $0$ dan $1$

Jika basis logaritma memenuhi:

$$0\lt a\lt1$$

maka grafik fungsi:

$$y={}^a\log x$$

merupakan grafik turun.

Artinya, jika $x$ semakin besar, maka nilai $y$ semakin kecil.

Contoh:

$$y={}^\frac12\log x$$

Tabel nilainya:

| $x$ | ${}^\frac12\log x$ |
| --- | --- |
| $\frac12$ | $1$ |
| $1$ | $0$ |
| $2$ | $-1$ |
| $4$ | $-2$ |

  📊 **Grafik Interaktif 4.** Perbandingan grafik logaritma naik dan grafik logaritma turun.

Dari grafik tersebut:

- $y={}^2\log x$ merupakan grafik naik;
- $y={}^\frac12\log x$ merupakan grafik turun;
- keduanya melalui titik $(1,0)$;
- keduanya memiliki asimtot tegak $x=0$.

---

###### 9. Pengaruh Basis terhadap Bentuk Grafik

Basis logaritma memengaruhi arah grafik.

| Nilai Basis | Sifat Grafik | Contoh |
| --- | --- | --- |
| $a\gt1$ | Naik | $y={}^2\log x$ |
| $0\lt a\lt1$ | Turun | $y={}^\frac12\log x$ |

  💡 **Ingat:** Jika basis lebih dari $1$, grafik naik. Jika basis antara $0$ dan $1$, grafik turun.

---

###### 10. Hubungan Grafik Logaritma dan Grafik Eksponen

Fungsi logaritma merupakan invers dari fungsi eksponen.

Jika:

$$y=2^x$$

maka inversnya adalah:

$$y={}^2\log x$$

Kedua grafik tersebut simetris terhadap garis:

$$y=x$$

  📊 **Grafik Interaktif 5.** Grafik $y=2^x$ dan $y={}^2\log x$ saling berkebalikan terhadap garis $y=x$.

Dari grafik tersebut terlihat bahwa:

- titik $(0,1)$ pada grafik eksponen berpasangan dengan titik $(1,0)$ pada grafik logaritma;
- grafik eksponen memiliki asimtot mendatar $y=0$;
- grafik logaritma memiliki asimtot tegak $x=0$;
- kedua grafik saling mencerminkan terhadap garis $y=x$.

---

###### 11. Transformasi Grafik $y={}^a\log(x-h)$

Perhatikan fungsi:

$$y={}^a\log(x-h)$$

Fungsi ini merupakan pergeseran grafik dasar:

$$y={}^a\log x$$

sejauh $h$ satuan secara horizontal.

Syarat numerus:

$$x-h\gt0$$

Maka:

$$x\gt h$$

Jadi, asimtot tegaknya adalah:

$$x=h$$

Contoh:

$$y={}^2\log(x-3)$$

Syarat:

$$x-3\gt0$$

Maka:

$$x\gt3$$

Asimtot tegaknya adalah:

$$x=3$$

  📊 **Grafik Interaktif 6.** Grafik $y={}^2\log x$ dan $y={}^2\log(x-3)$.

Dari grafik tersebut:

- grafik $y={}^2\log x$ memiliki asimtot $x=0$;
- grafik $y={}^2\log(x-3)$ memiliki asimtot $x=3$;
- grafik bergeser $3$ satuan ke kanan;
- titik potong sumbu $X$ bergeser dari $(1,0)$ menjadi $(4,0)$.

---

###### 12. Transformasi Grafik $y={}^a\log(x+h)$

Perhatikan fungsi:

$$y={}^a\log(x+h)$$

Syarat numerus:

$$x+h\gt0$$

Maka:

$$x\gt-h$$

Jadi, asimtot tegaknya adalah:

$$x=-h$$

Contoh:

$$y={}^2\log(x+2)$$

Syarat:

$$x+2\gt0$$

Maka:

$$x\gt-2$$

Asimtot tegaknya adalah:

$$x=-2$$

Grafik $y={}^2\log(x+2)$ merupakan pergeseran grafik $y={}^2\log x$ sejauh $2$ satuan ke kiri.

  💡 **Ingat:** Untuk bentuk $y={}^a\log(x-h)$, asimtot tegaknya adalah $x=h$. Untuk bentuk $y={}^a\log(x+h)$, asimtot tegaknya adalah $x=-h$.

---

###### 13. Transformasi Grafik $y={}^a\log x+k$

Perhatikan fungsi:

$$y={}^a\log x+k$$

Fungsi ini merupakan pergeseran grafik dasar:

$$y={}^a\log x$$

sejauh $k$ satuan secara vertikal.

Jika $k\gt0$, grafik bergeser ke atas.

Jika $k\lt0$, grafik bergeser ke bawah.

Asimtot tegaknya tetap:

$$x=0$$

karena numerusnya tetap $x$.

Contoh:

$$y={}^2\log x+2$$

Grafik bergeser $2$ satuan ke atas, tetapi asimtot tegaknya tetap:

$$x=0$$

  📊 **Grafik Interaktif 7.** Pergeseran vertikal grafik fungsi logaritma.

Dari grafik tersebut:

- $y={}^2\log x+2$ bergeser $2$ satuan ke atas;
- $y={}^2\log x-2$ bergeser $2$ satuan ke bawah;
- semua grafik tetap memiliki asimtot tegak $x=0$.

---

###### 14. Menentukan Asimtot Tegak dari Grafik Fungsi Logaritma

Untuk menentukan asimtot tegak grafik logaritma, perhatikan numerusnya.

Bentuk umum:

$$y={}^a\log f(x)$$

Asimtot tegak biasanya diperoleh dari batas domain, yaitu:

$$f(x)=0$$

dengan syarat fungsi hanya berlaku ketika:

$$f(x)\gt0$$

Contoh 1:

$$y={}^2\log(x-5)$$

Asimtot tegak diperoleh dari:

$$x-5=0$$

Maka:

$$x=5$$

Jadi, asimtot tegaknya adalah:

$$x=5$$

Contoh 2:

$$y={}^3\log(2x+6)$$

Asimtot tegak diperoleh dari:

$$2x+6=0$$

Maka:

$$\begin{aligned}
2x+6&=0\\
2x&=-6\\
x&=-3
\end{aligned}$$

Jadi, asimtot tegaknya adalah:

$$x=-3$$

Contoh 3:

$$y={}^5\log(4-x)$$

Asimtot tegak diperoleh dari:

$$4-x=0$$

Maka:

$$x=4$$

Namun domainnya adalah:

$$4-x\gt0$$

sehingga:

$$x\lt4$$

Jadi, grafik berada di sebelah kiri garis $x=4$, dan asimtot tegaknya adalah:

$$x=4$$

  ⚠️ **Perhatian:** Asimtot tegak diperoleh dari batas numerus sama dengan nol, tetapi domain tetap harus ditentukan dari numerus lebih dari nol.

---

###### 15. Menentukan Titik Potong Sumbu $X$ pada Grafik Transformasi

Titik potong sumbu $X$ terjadi saat:

$$y=0$$

Contoh:

Tentukan titik potong sumbu $X$ dari grafik:

$$y={}^2\log(x-3)$$

Karena titik potong sumbu $X$ terjadi saat $y=0$, maka:

$$\begin{aligned}
{}^2\log(x-3)&=0\\
x-3&=2^0\\
x-3&=1\\
x&=4
\end{aligned}$$

Jadi, titik potong sumbu $X$ adalah:

$$(4,0)$$

Contoh lain:

$$y={}^3\log(x+2)$$

Maka:

$$\begin{aligned}
{}^3\log(x+2)&=0\\
x+2&=3^0\\
x+2&=1\\
x&=-1
\end{aligned}$$

Jadi, titik potong sumbu $X$ adalah:

$$(-1,0)$$

---

###### 16. Cara Menggambar Grafik Fungsi Logaritma

Untuk menggambar grafik fungsi logaritma, ikuti langkah berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan domain dari syarat numerus lebih dari $0$. |
| 2 | Tentukan asimtot tegak dari batas numerus sama dengan $0$. |
| 3 | Tentukan titik potong sumbu $X$ dengan membuat $y=0$. |
| 4 | Ambil beberapa titik bantu yang memenuhi domain. |
| 5 | Tentukan apakah grafik naik atau turun berdasarkan basis. |
| 6 | Gambar kurva yang mendekati asimtot tegak dan melalui titik-titik bantu. |

  💡 **Strategi:** Untuk menggambar grafik logaritma, asimtot tegak dan titik potong sumbu $X$ adalah dua informasi yang paling penting.

---

###### 17. Contoh Menggambar Grafik Fungsi Logaritma

Gambarlah grafik:

$$y={}^2\log(x-2)$$

Langkah pertama, tentukan domain.

$$\begin{aligned}
x-2&\gt0\\
x&\gt2
\end{aligned}$$

Jadi, domainnya adalah:

$$x\gt2$$

Langkah kedua, tentukan asimtot tegak.

Batas numerus:

$$x-2=0$$

Maka:

$$x=2$$

Jadi, asimtot tegaknya adalah:

$$x=2$$

Langkah ketiga, tentukan titik potong sumbu $X$.

$$\begin{aligned}
{}^2\log(x-2)&=0\\
x-2&=2^0\\
x-2&=1\\
x&=3
\end{aligned}$$

Jadi, grafik melalui titik:

$$(3,0)$$

Langkah keempat, ambil titik bantu.

| $x-2$ | $x$ | $y={}^2\log(x-2)$ | Titik |
| --- | --- | --- | --- |
| $1$ | $3$ | $0$ | $(3,0)$ |
| $2$ | $4$ | $1$ | $(4,1)$ |
| $4$ | $6$ | $2$ | $(6,2)$ |

  📊 **Grafik Interaktif 8.** Grafik $y={}^2\log(x-2)$ dengan asimtot tegak $x=2$.

---

###### 18. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh | Perbaikan |
| --- | --- | --- |
| Mengira grafik logaritma memiliki domain semua bilangan real. | $y={}^2\log x$ dianggap berlaku untuk $x\le0$. | Domainnya hanya $x\gt0$. |
| Menganggap grafik memotong sumbu $Y$. | Mencari titik saat $x=0$. | Fungsi logaritma tidak terdefinisi saat $x=0$. |
| Salah menentukan asimtot tegak. | $y={}^2\log(x-3)$ dianggap memiliki asimtot $x=0$. | Asimtotnya adalah $x=3$. |
| Salah menentukan titik potong sumbu $X$. | $y={}^2\log(x-3)$ dianggap memotong sumbu $X$ di $(3,0)$. | Seharusnya ${}^2\log(x-3)=0$, sehingga $x=4$. |
| Salah membedakan grafik naik dan turun. | $y={}^\frac12\log x$ dianggap naik. | Jika $0\lt a\lt1$, grafik logaritma turun. |

  ⚠️ **Perhatian:** Pada grafik logaritma, asimtot tegak ditentukan dari batas domain, bukan dari titik potong sumbu $X$.

---

###### 19. Rangkuman

- Bentuk umum grafik fungsi logaritma adalah:
  $$y={}^a\log x$$
- Syarat basis:
  $$a\gt0,\quad a\ne1$$
- Domain grafik dasar:
  $$x\gt0$$
- Range grafik logaritma adalah semua bilangan real.
- Grafik dasar $y={}^a\log x$ selalu melalui titik:
  $$(1,0)$$
- Grafik fungsi logaritma tidak memotong sumbu $Y$.
- Grafik dasar $y={}^a\log x$ memiliki asimtot tegak:
  $$x=0$$
- Jika $a\gt1$, grafik logaritma naik.
- Jika $0\lt a\lt1$, grafik logaritma turun.
- Untuk bentuk $y={}^a\log(x-h)$, asimtot tegaknya adalah:
  $$x=h$$
- Untuk bentuk $y={}^a\log(x+h)$, asimtot tegaknya adalah:
  $$x=-h$$
- Titik potong sumbu $X$ diperoleh dengan membuat $y=0$.
- Asimtot tegak diperoleh dari batas numerus sama dengan nol.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan domain, titik potong sumbu $X$, dan asimtot tegak dari grafik:
$$y={}^2\log(x-4)$$

💡 Pembahasan

Syarat numerus:

$$\begin{aligned}
x-4&\gt0\\
x&\gt4
\end{aligned}$$

Jadi, domainnya adalah $x\gt4$.

Asimtot tegak diperoleh dari batas numerus:

$$\begin{aligned}
x-4&=0\\
x&=4
\end{aligned}$$

Jadi, asimtot tegaknya adalah $x=4$.

Titik potong sumbu $X$ terjadi saat $y=0$.

$$\begin{aligned}
{}^2\log(x-4)&=0\\
x-4&=2^0\\
x-4&=1\\
x&=5
\end{aligned}$$

Jadi, titik potong sumbu $X$ adalah $(5,0)$.

  Contoh Soal 2

Tentukan asimtot tegak dari grafik:
$$y={}^3\log(2x+8)$$

💡 Pembahasan

Asimtot tegak diperoleh dari batas numerus sama dengan nol.

$$\begin{aligned}
2x+8&=0\\
2x&=-8\\
x&=-4
\end{aligned}$$

Jadi, asimtot tegaknya adalah:

$$x=-4$$

Domain grafiknya adalah:

$$\begin{aligned}
2x+8&\gt0\\
2x&\gt-8\\
x&\gt-4
\end{aligned}$$

  Contoh Soal 3

Tentukan titik potong sumbu $X$ dari grafik:
$$y={}^5\log(x+3)$$

💡 Pembahasan

Titik potong sumbu $X$ terjadi saat $y=0$.

$$\begin{aligned}
{}^5\log(x+3)&=0\\
x+3&=5^0\\
x+3&=1\\
x&=-2
\end{aligned}$$

Jadi, titik potong sumbu $X$ adalah:

$$(-2,0)$$

Cek domain:

$$x+3\gt0$$

Untuk $x=-2$:

$$-2+3=1\gt0$$

Maka titik tersebut memenuhi.

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Grafik fungsi $y={}^2\log x$ memiliki asimtot tegak ....

A
$x=0$

B
$y=0$

C
$x=1$

D
$y=1$

E
$y=x$

💡 Pembahasan

Grafik dasar $y={}^a\log x$ memiliki asimtot tegak $x=0$.

Jadi, asimtot tegaknya adalah:

$$x=0$$

  Latihan Soal 2

Grafik fungsi $y={}^3\log x$ memotong sumbu $X$ di titik ....

A
$(0,1)$

B
$(1,0)$

C
$(3,0)$

D
$(0,3)$

E
$(-1,0)$

💡 Pembahasan

Titik potong sumbu $X$ terjadi saat $y=0$.

$$\begin{aligned}
{}^3\log x&=0\\
x&=3^0\\
x&=1
\end{aligned}$$

Jadi, titik potong sumbu $X$ adalah $(1,0)$.

  Latihan Soal 3

Grafik fungsi $y={}^2\log(x-5)$ memiliki asimtot tegak ....

A
$x=0$

B
$x=1$

C
$x=5$

D
$y=5$

E
$y=0$

💡 Pembahasan

Asimtot tegak diperoleh dari batas numerus:

$$\begin{aligned}
x-5&=0\\
x&=5
\end{aligned}$$

Jadi, asimtot tegaknya adalah $x=5$.

  Latihan Soal 4

Domain grafik fungsi $y={}^2\log(x+4)$ adalah ....

A
$x\gt4$

B
$x\gt-4$

C
$x\lt-4$

D
$x\lt4$

E
$x\ne-4$

💡 Pembahasan

Syarat numerus:

$$\begin{aligned}
x+4&\gt0\\
x&\gt-4
\end{aligned}$$

Jadi, domainnya adalah $x\gt-4$.

  Latihan Soal 5

Titik potong sumbu $X$ grafik $y={}^2\log(x-3)$ adalah ....

A
$(3,0)$

B
$(4,0)$

C
$(5,0)$

D
$(0,3)$

E
$(0,4)$

💡 Pembahasan

Titik potong sumbu $X$ terjadi saat $y=0$.

$$\begin{aligned}
{}^2\log(x-3)&=0\\
x-3&=2^0\\
x-3&=1\\
x&=4
\end{aligned}$$

Jadi, titik potong sumbu $X$ adalah $(4,0)$.

  Latihan Soal 6

Jika $a\gt1$, maka grafik $y={}^a\log x$ bersifat ....

A
naik

B
turun

C
konstan

D
periodik

E
tidak memiliki asimtot

💡 Pembahasan

Jika $a\gt1$, grafik fungsi logaritma bersifat naik.

  Latihan Soal 7

Jika $0\lt a\lt1$, maka grafik $y={}^a\log x$ bersifat ....

A
naik

B
turun

C
konstan

D
selalu positif

E
tidak memiliki domain

💡 Pembahasan

Jika $0\lt a\lt1$, grafik fungsi logaritma bersifat turun.

  Latihan Soal 8

Asimtot tegak dari grafik $y={}^5\log(2x-6)$ adalah ....

A
$x=0$

B
$x=2$

C
$x=3$

D
$x=5$

E
$y=3$

💡 Pembahasan

Asimtot tegak diperoleh dari:

$$\begin{aligned}
2x-6&=0\\
2x&=6\\
x&=3
\end{aligned}$$

Jadi, asimtot tegaknya adalah $x=3$.

  Latihan Soal 9

Grafik $y={}^2\log x+3$ memiliki asimtot tegak ....

A
$x=0$

B
$x=3$

C
$y=3$

D
$y=0$

E
$x=-3$

💡 Pembahasan

Pada fungsi:

$$y={}^2\log x+3$$

numerusnya tetap $x$, sehingga batas domainnya tetap $x=0$.

Jadi, asimtot tegaknya adalah $x=0$.

  Latihan Soal 10

Titik potong sumbu $X$ grafik $y={}^3\log(x+5)$ adalah ....

A
$(-5,0)$

B
$(-4,0)$

C
$(-3,0)$

D
$(4,0)$

E
$(5,0)$

💡 Pembahasan

Titik potong sumbu $X$ terjadi saat $y=0$.

$$\begin{aligned}
{}^3\log(x+5)&=0\\
x+5&=3^0\\
x+5&=1\\
x&=-4
\end{aligned}$$

Jadi, titik potong sumbu $X$ adalah $(-4,0)$.

### Pemodelan Fungsi Logaritma

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 6 Fungsi dan Pemodelannya, subbab A.3 Pemodelan Fungsi Logaritma, hlm. 253–259.*

Fungsi logaritma dipakai untuk memodelkan berbagai fenomena, misalnya penyebaran virus, kekuatan kata sandi, skala Richter, pengisian daya baterai, dan harga jual mobil.

#### Contoh 6.6: Skala Richter

Besar gempa dalam skala Richter adalah $R = \log\dfrac{I}{I_0}$, dengan $I$ intensitas gempa dan $I_0$ intensitas gempa tingkat nol. Gempa Haiti tahun 2010 memiliki intensitas $10^7$ kali gempa tingkat nol, sehingga $I = 10^7 I_0$ dan

$$R = \log\frac{10^7 I_0}{I_0} = \log 10^7 = 7$$

Jadi kekuatan gempa tersebut 7 skala Richter.

#### Pengisian Daya Baterai

Jika $C_0$ daya maksimum yang dapat disimpan baterai dan $k$ konstanta positif yang bergantung pada baterai dan pengisi dayanya, lama waktu (menit) untuk mengisi daya hingga $C$ adalah

$$t = -\frac{1}{k}\ln\left(1 - \frac{C}{C_0}\right)$$

## (C) Fungsi Aljabar

### Fungsi Rasional

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 6 Fungsi dan Pemodelannya, subbab B.1 Fungsi Rasional, hlm. 260–268.*

#### Definisi 6.2 Fungsi Rasional

Jika $P(x)$ dan $Q(x)$ fungsi polinomial dan $f(x) = \dfrac{P(x)}{Q(x)}$ dengan $Q(x) \neq 0$, maka $f(x)$ adalah **fungsi rasional**. Diasumsikan $P(x)$ dan $Q(x)$ tidak memiliki faktor persekutuan.

**Daerah asal** (domain) fungsi rasional adalah himpunan bilangan real yang tidak membuat penyebut bernilai nol.

**Contoh 6.9.** Untuk $f(x) = \dfrac{1}{x - 1}$, pembuat nol penyebut adalah $x = 1$, sehingga $D_f = \{x \mid x \neq 1, x \in \mathbb{R}\}$.

#### Asimtot

- **Asimtot vertikal (Definisi 6.3):** jika grafik $f$ terus mendekati garis $x = a$ ketika $y$ menuju positif atau negatif tak hingga, garis $x = a$ adalah asimtot vertikal.
- **Asimtot horizontal (Definisi 6.4):** jika grafik $f$ terus mendekati garis $y = b$ ketika $x$ menuju positif atau negatif tak hingga, garis $y = b$ adalah asimtot horizontal.
- **Asimtot miring (Definisi 6.5):** jika grafik $f$ terus mendekati garis $y = mx + b$ ketika $x$ menuju positif atau negatif tak hingga, garis tersebut adalah asimtot miring.

Contoh dari buku: fungsi rasional dengan penyebut $x^2 - 9$ (yang tidak berfaktor sama dengan pembilang) memiliki asimtot vertikal $x = -3$ dan $x = 3$. Asimtot digunakan bersama titik bantu untuk menggambar grafik fungsi rasional.

### Persamaan dan Pertidaksamaan Rasional

#### Pengertian Bentuk Rasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pengertian-bentuk-rasional*

Setelah mempelajari pertidaksamaan kuadrat, sekarang kita masuk ke bagian **bentuk rasional**. Bentuk rasional banyak digunakan dalam aljabar, terutama pada persamaan rasional dan pertidaksamaan rasional.

Secara sederhana, bentuk rasional adalah bentuk pecahan aljabar yang memuat variabel pada pembilang, penyebut, atau keduanya.

  📌 **Catatan:** Materi bentuk rasional sangat penting karena pada bentuk rasional, penyebut tidak boleh sama dengan nol.

---

###### 1. Pengertian Bentuk Rasional

**Bentuk rasional** adalah bentuk aljabar yang dapat ditulis sebagai pecahan:

$$\frac{P(x)}{Q(x)}$$

dengan:

- $P(x)$ adalah bentuk aljabar pada pembilang,
- $Q(x)$ adalah bentuk aljabar pada penyebut,
- $Q(x)\ne0$.

Contoh bentuk rasional:

$$\frac{x+2}{x-3}$$

$$\frac{2x^2-5x+1}{x+4}$$

$$\frac{x^2-9}{x^2-4x+3}$$

Bentuk-bentuk tersebut disebut rasional karena ditulis sebagai perbandingan dua bentuk aljabar.

  💡 **Ingat:** Bentuk rasional selalu memiliki syarat bahwa penyebutnya tidak boleh bernilai nol.

---

###### 2. Syarat Penyebut Tidak Nol

Pada bentuk rasional:

$$\frac{P(x)}{Q(x)}$$

penyebutnya adalah $Q(x)$.

Karena pembagian dengan nol tidak didefinisikan, maka harus berlaku:

$$Q(x)\ne0$$

Contoh:

$$\frac{x+2}{x-3}$$

Penyebutnya adalah:

$$x-3$$

Syaratnya:

$$x-3\ne0$$

$$x\ne3$$

Jadi, bentuk rasional tersebut terdefinisi untuk semua nilai $x$ real, kecuali:

$$x=3$$

  ⚠️ **Perhatian:** Nilai yang membuat penyebut nol harus dikeluarkan dari domain bentuk rasional.

---

###### 3. Contoh Bentuk Rasional dan Bukan Bentuk Rasional

Perhatikan tabel berikut.

| Bentuk | Termasuk Bentuk Rasional? | Alasan |
| --- | --- | --- |
| $\frac{x+1}{x-2}$ | Ya | Berbentuk pecahan aljabar. |
| $\frac{x^2-4}{x+2}$ | Ya | Pembilang dan penyebut berupa bentuk aljabar. |
| $3x+5$ | Ya, dapat dianggap rasional | Dapat ditulis sebagai $\frac{3x+5}{1}$. |
| $\sqrt{x}+1$ | Tidak dalam pembahasan rasional aljabar sederhana | Memuat bentuk akar variabel. |
| $\frac{1}{\sqrt{x}}$ | Tidak dalam pembahasan rasional aljabar sederhana | Penyebut memuat bentuk akar variabel. |

  📌 **Catatan:** Dalam aljabar sekolah, bentuk rasional biasanya dipahami sebagai pecahan dari polinom atau bentuk aljabar tanpa akar variabel.

---

###### 4. Bentuk Rasional Sederhana

Bentuk rasional sederhana biasanya memiliki penyebut linear.

Contoh:

$$\frac{1}{x+2}$$

$$\frac{x-5}{x+1}$$

$$\frac{3x+4}{2x-7}$$

Untuk setiap bentuk tersebut, nilai penyebut tidak boleh nol.

Contoh:

$$\frac{3x+4}{2x-7}$$

Penyebut:

$$2x-7$$

Syarat:

$$2x-7\ne0$$

$$2x\ne7$$

$$x\ne\frac72$$

Jadi, bentuk tersebut terdefinisi untuk:

$$x\ne\frac72$$

---

###### 5. Bentuk Rasional dengan Penyebut Kuadrat

Bentuk rasional juga dapat memiliki penyebut berbentuk kuadrat.

Contoh:

$$\frac{x+1}{x^2-5x+6}$$

Penyebutnya adalah:

$$x^2-5x+6$$

Syarat:

$$x^2-5x+6\ne0$$

Faktorkan:

$$(x-2)(x-3)\ne0$$

Maka:

$$x\ne2$$

dan

$$x\ne3$$

Jadi, bentuk rasional tersebut terdefinisi untuk semua $x$ real, kecuali:

$$x=2 \quad \text{dan} \quad x=3$$

  💡 **Strategi:** Jika penyebut berbentuk kuadrat, faktorkan penyebut untuk mencari nilai yang tidak diperbolehkan.

---

###### 6. Domain Bentuk Rasional

**Domain** adalah himpunan semua nilai $x$ yang membuat suatu bentuk atau fungsi terdefinisi.

Pada bentuk rasional, domain ditentukan dengan mengeluarkan nilai yang membuat penyebut nol.

Contoh:

Tentukan domain dari:

$$f(x)=\frac{x+4}{x^2-9}$$

Penyebut:

$$x^2-9$$

Syarat:

$$x^2-9\ne0$$

$$(x-3)(x+3)\ne0$$

Maka:

$$x\ne3$$

dan

$$x\ne-3$$

Jadi, domainnya adalah:

$$\{x\in\mathbb{R}\mid x\ne -3,\ x\ne3\}$$

Dalam notasi interval:

$$(-\infty,-3)\cup(-3,3)\cup(3,\infty)$$

  📌 **Catatan:** Domain bentuk rasional selalu memperhatikan penyebut, bukan hanya pembilang.

---

###### 7. Menyederhanakan Bentuk Rasional

Bentuk rasional dapat disederhanakan jika pembilang dan penyebut memiliki faktor yang sama.

Contoh:

$$\frac{x^2-4}{x-2}$$

Faktorkan pembilang:

$$x^2-4=(x-2)(x+2)$$

Maka:

$$\frac{x^2-4}{x-2}=\frac{(x-2)(x+2)}{x-2}$$

Untuk $x\ne2$, faktor $(x-2)$ dapat dicoret.

$$\frac{(x-2)(x+2)}{x-2}=x+2$$

Jadi:

$$\frac{x^2-4}{x-2}=x+2,\quad x\ne2$$

  ⚠️ **Perhatian:** Walaupun sudah disederhanakan menjadi $x+2$, syarat awal $x\ne2$ tetap berlaku.

---

###### 8. Mengapa Syarat Awal Tetap Berlaku?

Perhatikan bentuk:

$$\frac{x^2-4}{x-2}$$

Bentuk tersebut tidak terdefinisi saat:

$$x=2$$

karena penyebut menjadi:

$$2-2=0$$

Setelah disederhanakan, diperoleh:

$$x+2$$

Namun, bentuk awal tetap tidak boleh memiliki $x=2$.

Jadi:

$$\frac{x^2-4}{x-2}=x+2,\quad x\ne2$$

Artinya, bentuk tersebut sama dengan $x+2$ untuk semua nilai $x$, kecuali $x=2$.

  📌 **Catatan:** Penyederhanaan tidak menghapus syarat penyebut awal.

---

###### 9. Operasi pada Bentuk Rasional

Bentuk rasional dapat dioperasikan seperti pecahan biasa, tetapi tetap memperhatikan syarat penyebut tidak nol.

Operasi yang sering muncul antara lain:

| Operasi | Contoh |
| --- | --- |
| Penjumlahan | $\frac{1}{x}+\frac{2}{x+1}$ |
| Pengurangan | $\frac{x}{x-2}-\frac{1}{x+3}$ |
| Perkalian | $\frac{x+1}{x-2}\cdot\frac{x-2}{x+3}$ |
| Pembagian | $\frac{x+1}{x-2}\div\frac{x}{x+3}$ |

Pada materi ini, kita fokus pada pengertian dan syarat bentuk rasional. Operasi dan penyelesaian bentuk rasional akan diperdalam pada materi berikutnya.

---

###### 10. Menyederhanakan dengan Memfaktorkan

Untuk menyederhanakan bentuk rasional, langkah utama adalah memfaktorkan pembilang dan penyebut.

Contoh:

Sederhanakan:

$$\frac{x^2-5x+6}{x^2-4}$$

Faktorkan pembilang:

$$x^2-5x+6=(x-2)(x-3)$$

Faktorkan penyebut:

$$x^2-4=(x-2)(x+2)$$

Maka:

$$\frac{x^2-5x+6}{x^2-4}
=
\frac{(x-2)(x-3)}{(x-2)(x+2)}$$

Untuk $x\ne2$, faktor $(x-2)$ dapat dicoret.

$$=\frac{x-3}{x+2}$$

Namun, syarat penyebut awal:

$$(x-2)(x+2)\ne0$$

maka:

$$x\ne2$$

dan

$$x\ne-2$$

Jadi:

$$\frac{x^2-5x+6}{x^2-4}=\frac{x-3}{x+2},\quad x\ne2,\ x\ne-2$$

  💡 **Ingat:** Faktor yang sama boleh dicoret, tetapi nilai yang membuat penyebut awal nol tetap tidak boleh digunakan.

---

###### 11. Bentuk Rasional Bernilai Nol

Bentuk rasional:

$$\frac{P(x)}{Q(x)}$$

bernilai nol jika pembilangnya nol dan penyebutnya tidak nol.

Syaratnya:

$$P(x)=0$$

dan

$$Q(x)\ne0$$

Contoh:

Tentukan nilai $x$ yang membuat:

$$\frac{x-4}{x+2}=0$$

Agar pecahan bernilai nol, pembilang harus nol.

$$x-4=0$$

$$x=4$$

Cek penyebut:

$$x+2=4+2=6\ne0$$

Jadi, bentuk rasional tersebut bernilai nol saat:

$$x=4$$

  📌 **Catatan:** Pecahan bernilai nol jika pembilangnya nol, bukan penyebutnya.

---

###### 12. Bentuk Rasional Tidak Terdefinisi

Bentuk rasional tidak terdefinisi jika penyebutnya nol.

Contoh:

Tentukan nilai $x$ yang membuat bentuk berikut tidak terdefinisi.

$$\frac{x+5}{x^2-4x+3}$$

Penyebut:

$$x^2-4x+3$$

Buat penyebut sama dengan nol.

$$x^2-4x+3=0$$

Faktorkan:

$$(x-1)(x-3)=0$$

Maka:

$$x=1 \quad \text{atau} \quad x=3$$

Jadi, bentuk rasional tersebut tidak terdefinisi saat:

$$x=1 \quad \text{atau} \quad x=3$$

---

###### 13. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengabaikan syarat penyebut | $\frac{x+2}{x-3}$ dianggap berlaku untuk semua $x$ real. | Harus ditulis $x\ne3$. |
| Menganggap pembilang tidak boleh nol | $\frac{x-4}{x+2}$ dianggap tidak boleh $x=4$. | Pembilang boleh nol. Justru pecahan bernilai nol saat pembilang nol. |
| Mencoret suku, bukan faktor | $\frac{x+2}{x+3}$ dicoret $x$ sehingga menjadi $\frac{2}{3}$. | Yang boleh dicoret hanya faktor yang sama, bukan suku yang dijumlahkan. |
| Melupakan syarat awal setelah menyederhanakan | $\frac{x^2-4}{x-2}=x+2$ tanpa syarat. | Seharusnya $x+2,\ x\ne2$. |
| Salah menentukan nilai yang membuat penyebut nol | $x-3=0$ disimpulkan $x=-3$. | Seharusnya $x=3$. |

  ⚠️ **Perhatian:** Pada bentuk rasional, syarat penyebut tidak nol adalah bagian penting dari jawaban.

---

###### 14. Rangkuman

- Bentuk rasional adalah bentuk aljabar yang dapat ditulis sebagai:
  $$\frac{P(x)}{Q(x)}$$
  dengan $Q(x)\ne0$.
- Penyebut bentuk rasional tidak boleh sama dengan nol.
- Domain bentuk rasional adalah semua nilai $x$ yang tidak membuat penyebut nol.
- Bentuk rasional dapat disederhanakan dengan memfaktorkan pembilang dan penyebut.
- Faktor yang sama boleh dicoret, tetapi syarat penyebut awal tetap berlaku.
- Bentuk rasional bernilai nol jika pembilangnya nol dan penyebutnya tidak nol.
- Bentuk rasional tidak terdefinisi jika penyebutnya nol.
- Jangan mencoret suku yang dijumlahkan atau dikurangkan; yang boleh dicoret hanya faktor yang sama.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan nilai $x$ yang tidak diperbolehkan pada bentuk rasional berikut.
$$\frac{x+2}{x-5}$$

💡 Pembahasan

Nilai yang tidak diperbolehkan adalah nilai yang membuat penyebut sama dengan nol.

Penyebut:

$$x-5$$

Syarat:

$$x-5\ne0$$

Maka:

$$x\ne5$$

Jadi, nilai $x$ yang tidak diperbolehkan adalah **$x=5$**.

  Contoh Soal 2

Tentukan domain dari fungsi rasional berikut.
$$f(x)=\frac{x+4}{x^2-9}$$

💡 Pembahasan

Domain fungsi rasional ditentukan dari syarat penyebut tidak nol.

Penyebut:

$$x^2-9$$

Syarat:

$$x^2-9\ne0$$

Faktorkan:

$$(x-3)(x+3)\ne0$$

Maka:

$$x\ne3$$

dan

$$x\ne-3$$

Jadi, domainnya adalah:

$$\{x\in\mathbb{R}\mid x\ne -3,\ x\ne3\}$$

  Contoh Soal 3

Sederhanakan bentuk rasional berikut dan tentukan syaratnya.
$$\frac{x^2-4}{x-2}$$

💡 Pembahasan

Faktorkan pembilang:

$$x^2-4=(x-2)(x+2)$$

Maka:

$$\frac{x^2-4}{x-2}=\frac{(x-2)(x+2)}{x-2}$$

Faktor $(x-2)$ dapat dicoret dengan syarat:

$$x-2\ne0$$

$$x\ne2$$

Jadi:

$$\frac{x^2-4}{x-2}=x+2,\quad x\ne2$$

Hasil sederhananya adalah **$x+2$ dengan syarat $x\ne2$**.

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Bentuk rasional dapat ditulis dalam bentuk ....

A
$\frac{P(x)}{Q(x)}$, dengan $Q(x)\ne0$

B
$P(x)\cdot Q(x)$, dengan $P(x)=0$

C
$P(x)+Q(x)$, dengan $Q(x)=0$

D
$\sqrt{P(x)}+Q(x)$ saja

E
$P(x)=Q(x)$ saja

💡 Pembahasan

Bentuk rasional adalah bentuk yang dapat ditulis sebagai pecahan aljabar:

$$\frac{P(x)}{Q(x)}$$

dengan syarat $Q(x)\ne0$.

  Latihan Soal 2

Nilai $x$ yang tidak diperbolehkan pada bentuk $\frac{x+1}{x-4}$ adalah ....

A
$x=-4$

B
$x=4$

C
$x=-1$

D
$x=1$

E
$x=0$

💡 Pembahasan

Penyebut tidak boleh nol.

$$x-4\ne0$$

Maka:

$$x\ne4$$

Jadi, nilai yang tidak diperbolehkan adalah $x=4$.

  Latihan Soal 3

Domain dari $f(x)=\frac{2x-1}{x+3}$ adalah ....

A
semua bilangan real

B
$x\ne3$

C
$x\ne-3$

D
$x=3$

E
$x=-3$ saja

💡 Pembahasan

Penyebut:

$$x+3$$

Syarat:

$$x+3\ne0$$

$$x\ne-3$$

Jadi, domainnya adalah semua bilangan real kecuali $x=-3$.

  Latihan Soal 4

Domain dari $f(x)=\frac{x+4}{x^2-9}$ adalah ....

A
$x\ne -3$ dan $x\ne3$

B
$x= -3$ dan $x=3$

C
$x\ne4$

D
$x\ne9$

E
semua bilangan real

💡 Pembahasan

Penyebut tidak boleh nol.

$$x^2-9\ne0$$

$$(x-3)(x+3)\ne0$$

Maka:

$$x\ne3 \quad \text{dan} \quad x\ne-3$$

  Latihan Soal 5

Bentuk sederhana dari $\frac{x^2-4}{x-2}$ adalah ....

A
$x-2$

B
$x+2$, dengan $x\ne2$

C
$x+2$, dengan $x=2$

D
$x^2+4$

E
$2x$

💡 Pembahasan

Faktorkan:

$$x^2-4=(x-2)(x+2)$$

Maka:

$$\frac{x^2-4}{x-2}=\frac{(x-2)(x+2)}{x-2}=x+2$$

dengan syarat $x\ne2$.

  Latihan Soal 6

Nilai $x$ yang membuat $\frac{x-5}{x+1}$ bernilai nol adalah ....

A
$x=5$

B
$x=-1$

C
$x=1$

D
$x=-5$

E
$x=0$

💡 Pembahasan

Bentuk rasional bernilai nol jika pembilangnya nol dan penyebutnya tidak nol.

Pembilang:

$$x-5=0$$

Maka:

$$x=5$$

Cek penyebut:

$$5+1=6\ne0$$

Jadi, nilai yang membuat bentuk tersebut bernilai nol adalah $x=5$.

  Latihan Soal 7

Nilai $x$ yang membuat $\frac{x+2}{x-7}$ tidak terdefinisi adalah ....

A
$x=-2$

B
$x=7$

C
$x=-7$

D
$x=2$

E
$x=0$

💡 Pembahasan

Bentuk rasional tidak terdefinisi jika penyebutnya nol.

$$x-7=0$$

Maka:

$$x=7$$

  Latihan Soal 8

Bentuk sederhana dari $\frac{x^2-5x+6}{x^2-4}$ adalah ....

A
$\frac{x-2}{x+2}$, dengan $x\ne2,\ x\ne-2$

B
$\frac{x-3}{x+2}$, dengan $x\ne2,\ x\ne-2$

C
$\frac{x-3}{x-2}$, dengan $x\ne3$

D
$\frac{x+3}{x+2}$, dengan $x\ne-2$

E
$x-3$, dengan $x\ne2$

💡 Pembahasan

Faktorkan pembilang dan penyebut.

$$x^2-5x+6=(x-2)(x-3)$$

$$x^2-4=(x-2)(x+2)$$

Maka:

$$\frac{x^2-5x+6}{x^2-4}
=
\frac{(x-2)(x-3)}{(x-2)(x+2)}$$

Coret faktor $(x-2)$.

$$=\frac{x-3}{x+2}$$

Syarat penyebut awal:

$$x^2-4\ne0$$

sehingga:

$$x\ne2,\quad x\ne-2$$

  Latihan Soal 9

Kesalahan yang benar-benar harus dihindari saat menyederhanakan bentuk rasional adalah ....

A
memfaktorkan pembilang

B
memfaktorkan penyebut

C
mencoret suku yang bukan faktor

D
menentukan syarat penyebut

E
menulis hasil akhir dengan syarat

💡 Pembahasan

Yang boleh dicoret adalah faktor yang sama, bukan suku yang hanya dijumlahkan atau dikurangkan.

Contoh salah:

$$\frac{x+2}{x+3}\ne\frac{2}{3}$$

  Latihan Soal 10

Pernyataan yang benar tentang bentuk rasional adalah ....

A
penyebut boleh bernilai nol

B
pembilang tidak boleh bernilai nol

C
penyebut tidak boleh bernilai nol

D
semua bentuk rasional pasti tidak memiliki domain

E
bentuk rasional tidak boleh disederhanakan

💡 Pembahasan

Pada bentuk rasional, penyebut tidak boleh bernilai nol karena pembagian dengan nol tidak didefinisikan.

#### Menyelesaikan Persamaan Rasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/menyelesaikan-persamaan-rasional*

Pada materi sebelumnya, kita telah mempelajari pengertian bentuk rasional. Sekarang kita akan membahas **persamaan rasional**.

Persamaan rasional adalah persamaan yang memuat bentuk pecahan aljabar. Dalam menyelesaikannya, kita harus selalu memperhatikan syarat penyebut tidak sama dengan nol.

  📌 **Catatan:** Pada persamaan rasional, solusi yang diperoleh harus diperiksa kembali agar tidak membuat penyebut bernilai nol.

---

###### 1. Pengertian Persamaan Rasional

**Persamaan rasional** adalah persamaan yang memuat bentuk rasional, yaitu bentuk aljabar yang dapat ditulis sebagai:

$$\frac{P(x)}{Q(x)}$$

dengan:

$$Q(x)\ne0$$

Contoh persamaan rasional:

$$\frac{x+1}{x-2}=3$$

$$\frac{2}{x+1}=\frac{5}{x-3}$$

$$\frac{x}{x-2}+\frac{1}{x+2}=2$$

$$\frac{x^2-1}{x+1}=4$$

  💡 **Ingat:** Persamaan rasional mengandung pecahan aljabar dan penyebutnya tidak boleh bernilai nol.

---

###### 2. Syarat Penyebut Tidak Nol

Dalam persamaan rasional, langkah pertama yang harus diperhatikan adalah menentukan syarat penyebut tidak nol.

Contoh:

$$\frac{x+1}{x-2}=3$$

Penyebutnya adalah:

$$x-2$$

Syaratnya:

$$x-2\ne0$$

$$x\ne2$$

Artinya, nilai $x=2$ tidak boleh menjadi solusi.

  ⚠️ **Perhatian:** Jika hasil akhir persamaan menghasilkan nilai yang membuat penyebut nol, nilai tersebut harus ditolak.

---

###### 3. Cara Menyelesaikan Persamaan Rasional Sederhana

Contoh:

Tentukan penyelesaian dari:

$$\frac{x+1}{x-2}=3$$

Syarat penyebut:

$$x-2\ne0$$

$$x\ne2$$

Kalikan kedua ruas dengan penyebut $x-2$.

$$x+1=3(x-2)$$

Selesaikan:

$$x+1=3x-6$$

$$1+6=3x-x$$

$$7=2x$$

$$x=\frac72$$

Cek syarat:

$$x\ne2$$

Karena:

$$\frac72\ne2$$

maka solusi diterima.

Jadi, penyelesaiannya adalah:

$$x=\frac72$$

---

###### 4. Menghilangkan Penyebut dengan KPK Penyebut

Jika terdapat beberapa penyebut, kita dapat mengalikan kedua ruas dengan KPK penyebut.

Contoh:

$$\frac{2}{x}+\frac{1}{x+1}=1$$

Syarat:

$$x\ne0$$

dan

$$x+1\ne0 \Rightarrow x\ne-1$$

KPK penyebut adalah:

$$x(x+1)$$

Kalikan kedua ruas dengan $x(x+1)$.

$$x(x+1)\left(\frac{2}{x}+\frac{1}{x+1}\right)=x(x+1)(1)$$

Maka:

$$2(x+1)+x=x(x+1)$$

Sederhanakan:

$$2x+2+x=x^2+x$$

$$3x+2=x^2+x$$

Pindahkan semua suku ke satu ruas.

$$x^2+x-3x-2=0$$

$$x^2-2x-2=0$$

Gunakan rumus umum:

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

Dengan:

$$a=1,\quad b=-2,\quad c=-2$$

$$D=(-2)^2-4(1)(-2)=4+8=12$$

Maka:

$$x=\frac{2\pm\sqrt{12}}{2}$$

$$x=\frac{2\pm2\sqrt3}{2}$$

$$x=1\pm\sqrt3$$

Cek syarat:

$$x\ne0,\quad x\ne-1$$

Kedua nilai $1-\sqrt3$ dan $1+\sqrt3$ tidak sama dengan $0$ atau $-1$, sehingga keduanya diterima.

Jadi, penyelesaiannya adalah:

$$x=1-\sqrt3 \quad \text{atau} \quad x=1+\sqrt3$$

  📌 **Catatan:** Mengalikan dengan KPK penyebut bertujuan menghilangkan bentuk pecahan agar persamaan lebih mudah diselesaikan.

---

###### 5. Persamaan Rasional dengan Dua Pecahan

Contoh:

Tentukan penyelesaian dari:

$$\frac{2}{x-1}=\frac{3}{x+2}$$

Syarat:

$$x-1\ne0 \Rightarrow x\ne1$$

$$x+2\ne0 \Rightarrow x\ne-2$$

Lakukan perkalian silang.

$$2(x+2)=3(x-1)$$

Selesaikan:

$$2x+4=3x-3$$

$$4+3=3x-2x$$

$$7=x$$

Jadi:

$$x=7$$

Cek syarat:

$$7\ne1$$

dan

$$7\ne-2$$

Maka solusi diterima.

Jadi, penyelesaiannya adalah:

$$x=7$$

  💡 **Ingat:** Perkalian silang boleh digunakan jika kedua ruas berbentuk pecahan tunggal.

---

###### 6. Persamaan Rasional yang Menghasilkan Solusi Terlarang

Tidak semua nilai yang diperoleh dari perhitungan dapat diterima.

Contoh:

Tentukan penyelesaian dari:

$$\frac{x}{x-2}=\frac{2}{x-2}$$

Syarat:

$$x-2\ne0$$

$$x\ne2$$

Karena penyebut kedua ruas sama, maka:

$$x=2$$

Namun, dari syarat awal:

$$x\ne2$$

Jadi, nilai $x=2$ tidak boleh digunakan.

Maka persamaan tersebut tidak memiliki penyelesaian.

$$\varnothing$$

  ⚠️ **Perhatian:** Solusi yang membuat penyebut nol disebut solusi terlarang dan harus ditolak.

---

###### 7. Persamaan Rasional dengan Pembilang Dapat Difaktorkan

Contoh:

Tentukan penyelesaian dari:

$$\frac{x^2-4}{x-2}=5$$

Syarat:

$$x-2\ne0$$

$$x\ne2$$

Faktorkan pembilang:

$$x^2-4=(x-2)(x+2)$$

Maka:

$$\frac{(x-2)(x+2)}{x-2}=5$$

Untuk $x\ne2$, coret faktor $(x-2)$.

$$x+2=5$$

$$x=3$$

Cek syarat:

$$3\ne2$$

Maka solusi diterima.

Jadi, penyelesaiannya adalah:

$$x=3$$

  📌 **Catatan:** Walaupun faktor $(x-2)$ dicoret, syarat $x\ne2$ tetap berlaku.

---

###### 8. Persamaan Rasional yang Menghasilkan Persamaan Kuadrat

Beberapa persamaan rasional setelah penyebutnya dihilangkan dapat menghasilkan persamaan kuadrat.

Contoh:

Tentukan penyelesaian dari:

$$\frac{x+1}{x-1}=\frac{x-1}{x+1}$$

Syarat:

$$x-1\ne0 \Rightarrow x\ne1$$

$$x+1\ne0 \Rightarrow x\ne-1$$

Lakukan perkalian silang:

$$(x+1)(x+1)=(x-1)(x-1)$$

$$(x+1)^2=(x-1)^2$$

Kembangkan:

$$x^2+2x+1=x^2-2x+1$$

Kurangkan $x^2$ dan $1$ dari kedua ruas.

$$2x=-2x$$

$$4x=0$$

$$x=0$$

Cek syarat:

$$0\ne1$$

dan

$$0\ne-1$$

Maka solusi diterima.

Jadi, penyelesaiannya adalah:

$$x=0$$

---

###### 9. Persamaan Rasional dengan Ruas Kanan Nol

Jika persamaan rasional berbentuk:

$$\frac{P(x)}{Q(x)}=0$$

maka syaratnya:

$$P(x)=0$$

dan

$$Q(x)\ne0$$

Contoh:

Tentukan penyelesaian dari:

$$\frac{x^2-9}{x-3}=0$$

Syarat:

$$x-3\ne0$$

$$x\ne3$$

Agar pecahan bernilai nol, pembilang harus nol.

$$x^2-9=0$$

$$(x-3)(x+3)=0$$

Maka:

$$x=3 \quad \text{atau} \quad x=-3$$

Cek syarat:

$$x\ne3$$

Maka $x=3$ ditolak.

Nilai $x=-3$ diterima.

Jadi, penyelesaiannya adalah:

$$x=-3$$

  💡 **Ingat:** Pecahan bernilai nol jika pembilangnya nol, tetapi penyebutnya tidak nol.

---

###### 10. Persamaan Rasional dengan Penyebut Kuadrat

Contoh:

Tentukan penyelesaian dari:

$$\frac{x+1}{x^2-4}=1$$

Syarat:

$$x^2-4\ne0$$

$$(x-2)(x+2)\ne0$$

Maka:

$$x\ne2,\quad x\ne-2$$

Kalikan kedua ruas dengan $x^2-4$.

$$x+1=x^2-4$$

Pindahkan semua suku ke satu ruas.

$$x^2-x-5=0$$

Gunakan rumus umum.

$$a=1,\quad b=-1,\quad c=-5$$

$$D=(-1)^2-4(1)(-5)=1+20=21$$

Maka:

$$x=\frac{-(-1)\pm\sqrt{21}}{2(1)}$$

$$x=\frac{1\pm\sqrt{21}}{2}$$

Cek syarat:

$$x\ne2,\quad x\ne-2$$

Nilai $\frac{1+\sqrt{21}}{2}$ dan $\frac{1-\sqrt{21}}{2}$ tidak sama dengan $2$ atau $-2$, sehingga keduanya diterima.

Jadi, penyelesaiannya adalah:

$$x=\frac{1-\sqrt{21}}{2} \quad \text{atau} \quad x=\frac{1+\sqrt{21}}{2}$$

---

###### 11. Persamaan Rasional yang Tidak Memiliki Penyelesaian

Ada persamaan rasional yang setelah diselesaikan ternyata tidak memiliki solusi yang memenuhi syarat.

Contoh:

$$\frac{x+1}{x-2}=1+\frac{3}{x-2}$$

Syarat:

$$x-2\ne0$$

$$x\ne2$$

Kalikan kedua ruas dengan $x-2$.

$$x+1=(x-2)+3$$

$$x+1=x+1$$

Pernyataan ini benar untuk semua $x$ yang memenuhi syarat.

Jadi, penyelesaiannya adalah semua bilangan real kecuali $x=2$.

Namun, bandingkan dengan contoh lain:

$$\frac{x}{x-1}=\frac{1}{x-1}$$

Syarat:

$$x-1\ne0$$

$$x\ne1$$

Karena penyebut sama:

$$x=1$$

Tetapi $x=1$ dilarang.

Jadi, persamaan tersebut tidak memiliki penyelesaian.

$$\varnothing$$

  📌 **Catatan:** Setelah penyebut dihilangkan, hasil bisa berupa satu solusi, banyak solusi, atau tidak ada solusi.

---

###### 12. Langkah Umum Menyelesaikan Persamaan Rasional

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan syarat penyebut tidak nol. |
| 2 | Kalikan kedua ruas dengan KPK penyebut atau gunakan perkalian silang. |
| 3 | Selesaikan persamaan yang diperoleh. |
| 4 | Periksa hasil terhadap syarat awal. |
| 5 | Tulis himpunan penyelesaian. |

  💡 **Strategi:** Jangan melewati langkah pemeriksaan syarat, karena persamaan rasional sering menghasilkan solusi terlarang.

---

###### 13. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tidak menentukan syarat penyebut | $\frac{x+1}{x-2}=3$ langsung dikalikan tanpa mencatat $x\ne2$. | Tulis syarat penyebut terlebih dahulu. |
| Menerima solusi terlarang | Hasil $x=2$ diterima padahal penyebut $x-2$. | Jika membuat penyebut nol, solusi harus ditolak. |
| Salah melakukan perkalian silang | $\frac{2}{x-1}=\frac{3}{x+2}$ ditulis $2(x-1)=3(x+2)$. | Seharusnya $2(x+2)=3(x-1)$. |
| Mencoret suku yang bukan faktor | $\frac{x+2}{x+3}=1$ dicoret $x$ menjadi $\frac{2}{3}=1$. | Yang boleh dicoret hanya faktor yang sama. |
| Lupa membalik tanda saat mengalikan negatif | Terjadi pada pertidaksamaan rasional, bukan persamaan rasional. | Pada persamaan, tanda sama dengan tidak berubah, tetapi syarat tetap harus diperiksa. |

  ⚠️ **Perhatian:** Persamaan rasional harus selalu diperiksa kembali terhadap penyebut awal.

---

###### 14. Rangkuman

- Persamaan rasional adalah persamaan yang memuat bentuk pecahan aljabar.
- Bentuk rasional memiliki syarat penyebut tidak boleh nol.
- Untuk menyelesaikan persamaan rasional, tentukan syarat penyebut terlebih dahulu.
- Penyebut dapat dihilangkan dengan mengalikan kedua ruas menggunakan KPK penyebut.
- Jika kedua ruas berupa pecahan tunggal, dapat digunakan perkalian silang.
- Solusi yang membuat penyebut nol harus ditolak.
- Jika bentuk rasional sama dengan nol, maka pembilangnya nol dan penyebutnya tidak nol.
- Hasil akhir persamaan rasional dapat berupa satu solusi, beberapa solusi, semua real dengan pengecualian, atau tidak ada penyelesaian.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan penyelesaian dari persamaan berikut.
$$\frac{x+1}{x-2}=3$$

💡 Pembahasan

Tentukan syarat penyebut:

$$x-2\ne0$$

$$x\ne2$$

Kalikan kedua ruas dengan $x-2$.

$$x+1=3(x-2)$$

$$x+1=3x-6$$

$$7=2x$$

$$x=\frac72$$

Cek syarat:

$$\frac72\ne2$$

Jadi, penyelesaiannya adalah:

$$x=\frac72$$

  Contoh Soal 2

Tentukan penyelesaian dari persamaan berikut.
$$\frac{2}{x-1}=\frac{3}{x+2}$$

💡 Pembahasan

Syarat:

$$x-1\ne0 \Rightarrow x\ne1$$

$$x+2\ne0 \Rightarrow x\ne-2$$

Gunakan perkalian silang.

$$2(x+2)=3(x-1)$$

$$2x+4=3x-3$$

$$7=x$$

Jadi:

$$x=7$$

Cek syarat:

$$7\ne1,\quad 7\ne-2$$

Maka solusi diterima.

Jadi, penyelesaiannya adalah:

$$x=7$$

  Contoh Soal 3

Tentukan penyelesaian dari persamaan berikut.
$$\frac{x^2-9}{x-3}=0$$

💡 Pembahasan

Syarat penyebut:

$$x-3\ne0$$

$$x\ne3$$

Agar pecahan bernilai nol, pembilang harus nol.

$$x^2-9=0$$

$$(x-3)(x+3)=0$$

Maka:

$$x=3 \quad \text{atau} \quad x=-3$$

Karena $x=3$ tidak memenuhi syarat, maka $x=3$ ditolak.

Jadi, penyelesaiannya adalah:

$$x=-3$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Persamaan berikut yang merupakan persamaan rasional adalah ....

A
$x^2-4x+3=0$

B
$\frac{x+1}{x-2}=3$

C
$2x+5=0$

D
$x^3-1=0$

E
$\sqrt{x}+1=0$

💡 Pembahasan

Persamaan rasional memuat bentuk pecahan aljabar.

Bentuk $\frac{x+1}{x-2}=3$ merupakan persamaan rasional.

  Latihan Soal 2

Syarat penyebut dari persamaan $\frac{x+4}{x-5}=2$ adalah ....

A
$x\ne -4$

B
$x\ne5$

C
$x=5$

D
$x=-5$

E
$x=4$

💡 Pembahasan

Penyebutnya adalah $x-5$.

$$x-5\ne0$$

$$x\ne5$$

  Latihan Soal 3

Penyelesaian dari $\frac{x+1}{x-2}=3$ adalah ....

A
$x=2$

B
$x=\frac72$

C
$x=-\frac72$

D
$x=3$

E
$x=-2$

💡 Pembahasan

Syarat:

$$x\ne2$$

Kalikan dengan $x-2$.

$$x+1=3(x-2)$$

$$x+1=3x-6$$

$$7=2x$$

$$x=\frac72$$

  Latihan Soal 4

Penyelesaian dari $\frac{2}{x-1}=\frac{3}{x+2}$ adalah ....

A
$x=1$

B
$x=-2$

C
$x=7$

D
$x=-7$

E
$x=0$

💡 Pembahasan

Syarat:

$$x\ne1,\quad x\ne-2$$

Perkalian silang:

$$2(x+2)=3(x-1)$$

$$2x+4=3x-3$$

$$x=7$$

  Latihan Soal 5

Penyelesaian dari $\frac{x}{x-2}=\frac{2}{x-2}$ adalah ....

A
$x=2$

B
tidak ada penyelesaian

C
$x=0$

D
$x=-2$

E
semua bilangan real

💡 Pembahasan

Syarat:

$$x-2\ne0$$

$$x\ne2$$

Karena penyebut sama:

$$x=2$$

Namun, $x=2$ tidak memenuhi syarat.

Jadi, tidak ada penyelesaian.

  Latihan Soal 6

Penyelesaian dari $\frac{x^2-4}{x-2}=5$ adalah ....

A
$x=2$

B
$x=3$

C
$x=-3$

D
$x=5$

E
$x=-5$

💡 Pembahasan

Syarat:

$$x\ne2$$

Faktorkan pembilang:

$$x^2-4=(x-2)(x+2)$$

Maka:

$$\frac{(x-2)(x+2)}{x-2}=5$$

$$x+2=5$$

$$x=3$$

  Latihan Soal 7

Penyelesaian dari $\frac{x^2-9}{x-3}=0$ adalah ....

A
$x=3$

B
$x=-3$

C
$x=0$

D
$x=9$

E
tidak ada penyelesaian

💡 Pembahasan

Syarat:

$$x\ne3$$

Agar pecahan bernilai nol, pembilang harus nol.

$$x^2-9=0$$

$$(x-3)(x+3)=0$$

Maka:

$$x=3 \quad \text{atau} \quad x=-3$$

Karena $x=3$ dilarang, maka solusi yang diterima adalah $x=-3$.

  Latihan Soal 8

Penyelesaian dari $\frac{x+1}{x^2-4}=1$ adalah ....

A
$x=\frac{1-\sqrt{21}}{2}$ atau $x=\frac{1+\sqrt{21}}{2}$

B
$x=2$ atau $x=-2$

C
$x=1$ atau $x=-1$

D
$x=\frac{-1-\sqrt{21}}{2}$ atau $x=\frac{-1+\sqrt{21}}{2}$

E
tidak ada penyelesaian

💡 Pembahasan

Syarat:

$$x\ne2,\quad x\ne-2$$

Kalikan dengan $x^2-4$.

$$x+1=x^2-4$$

$$x^2-x-5=0$$

Gunakan rumus umum:

$$x=\frac{1\pm\sqrt{21}}{2}$$

Kedua nilai tersebut tidak sama dengan $2$ atau $-2$, sehingga diterima.

  Latihan Soal 9

Hal yang harus selalu diperiksa setelah menyelesaikan persamaan rasional adalah ....

A
apakah pembilang selalu positif

B
apakah solusi membuat penyebut nol

C
apakah koefisien $x^2$ selalu nol

D
apakah hasil selalu bilangan negatif

E
apakah ruas kanan selalu nol

💡 Pembahasan

Pada persamaan rasional, solusi yang membuat penyebut nol harus ditolak. Karena itu, syarat penyebut wajib diperiksa.

  Latihan Soal 10

Pernyataan yang benar tentang persamaan rasional adalah ....

A
penyebut boleh bernilai nol

B
semua hasil perhitungan pasti diterima

C
solusi harus memenuhi syarat penyebut tidak nol

D
persamaan rasional tidak pernah memiliki solusi terlarang

E
pembilang tidak boleh pernah bernilai nol

💡 Pembahasan

Persamaan rasional harus memperhatikan syarat penyebut tidak nol. Solusi yang melanggar syarat harus ditolak.

#### Memahami Konsep Pertidaksamaan Rasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pertidaksamaan-rasional*

Pada materi sebelumnya, kita telah mempelajari persamaan rasional. Sekarang kita akan membahas **pertidaksamaan rasional**.

Pertidaksamaan rasional adalah pertidaksamaan yang memuat bentuk pecahan aljabar. Pada pertidaksamaan rasional, kita harus memperhatikan dua jenis titik penting, yaitu titik yang membuat pembilang nol dan titik yang membuat penyebut nol.

  📌 **Catatan:** Pada pertidaksamaan rasional, nilai yang membuat penyebut nol tidak boleh menjadi anggota himpunan penyelesaian.

---

###### 1. Pengertian Pertidaksamaan Rasional

**Pertidaksamaan rasional** adalah pertidaksamaan yang memuat bentuk rasional, yaitu bentuk pecahan aljabar.

Bentuk umumnya dapat ditulis sebagai:

$$\frac{P(x)}{Q(x)}>0$$

$$\frac{P(x)}{Q(x)}<0$$

$$\frac{P(x)}{Q(x)}\ge0$$

$$\frac{P(x)}{Q(x)}\le0$$

dengan:

$$Q(x)\ne0$$

Contoh pertidaksamaan rasional:

$$\frac{x-2}{x+3}>0$$

$$\frac{x+1}{x-4}\le0$$

$$\frac{x^2-9}{x-1}\ge0$$

$$\frac{2x+5}{x^2-4}<0$$

  💡 **Ingat:** Pertidaksamaan rasional memuat pecahan aljabar dan penyebutnya tidak boleh nol.

---

###### 2. Perbedaan Persamaan Rasional dan Pertidaksamaan Rasional

| Aspek | Persamaan Rasional | Pertidaksamaan Rasional |
| --- | --- | --- |
| Tanda | $=$ | $>$, $<$, $\ge$, atau $\le$ |
| Contoh | $\frac{x+1}{x-2}=3$ | $\frac{x+1}{x-2}>3$ |
| Hasil umum | Nilai $x$ tertentu | Interval nilai $x$ |
| Hal penting | Cek penyebut tidak nol | Cek penyebut tidak nol dan tanda interval |

  📌 **Catatan:** Pertidaksamaan rasional biasanya diselesaikan menggunakan garis bilangan seperti pertidaksamaan kuadrat, tetapi titik yang membuat penyebut nol juga harus dimasukkan sebagai titik batas.

---

###### 3. Titik Pembuat Nol dan Titik Tak Terdefinisi

Pada pertidaksamaan rasional:

$$\frac{P(x)}{Q(x)} \ \square \ 0$$

terdapat dua jenis titik penting.

| Jenis Titik | Diperoleh Dari | Keterangan |
| --- | --- | --- |
| Titik pembuat nol | $P(x)=0$ | Membuat nilai pecahan sama dengan nol. |
| Titik tak terdefinisi | $Q(x)=0$ | Membuat penyebut nol sehingga tidak boleh menjadi solusi. |

Contoh:

$$\frac{x-2}{x+3}>0$$

Pembilang:

$$x-2=0 \Rightarrow x=2$$

Penyebut:

$$x+3=0 \Rightarrow x=-3$$

Maka titik batasnya adalah:

$$x=-3 \quad \text{dan} \quad x=2$$

Namun, $x=-3$ tidak boleh menjadi solusi karena membuat penyebut nol.

  ⚠️ **Perhatian:** Titik dari penyebut selalu tidak ikut, baik tandanya $>$, $<$, $\ge$, maupun $\le$.

---

###### 4. Langkah Menyelesaikan Pertidaksamaan Rasional

Langkah-langkah menyelesaikan pertidaksamaan rasional adalah sebagai berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Ubah pertidaksamaan ke bentuk $\frac{P(x)}{Q(x)} \ \square \ 0$. |
| 2 | Tentukan nilai yang membuat pembilang nol. |
| 3 | Tentukan nilai yang membuat penyebut nol. |
| 4 | Letakkan semua titik batas pada garis bilangan. |
| 5 | Tentukan tanda pada setiap interval. |
| 6 | Pilih interval sesuai tanda pertidaksamaan. |
| 7 | Perhatikan titik batas mana yang ikut dan tidak ikut. |

  💡 **Strategi:** Jangan mengalikan langsung dengan penyebut yang memuat variabel, karena tandanya bisa berubah tergantung nilai $x$.

---

###### 5. Mengapa Tidak Boleh Sembarangan Mengalikan dengan Penyebut?

Pada pertidaksamaan:

$$\frac{x-2}{x+3}>0$$

kita tidak boleh langsung mengalikan kedua ruas dengan $x+3$ tanpa mengetahui tanda $x+3$.

Jika $x+3$ positif, tanda pertidaksamaan tetap.

Jika $x+3$ negatif, tanda pertidaksamaan harus berubah.

Karena tanda $x+3$ bergantung pada nilai $x$, cara yang lebih aman adalah menggunakan garis bilangan.

  ⚠️ **Perhatian:** Pada pertidaksamaan, mengalikan dengan bentuk yang belum diketahui positif atau negatif dapat menyebabkan kesalahan tanda.

---

###### 6. Contoh Dasar: Pertidaksamaan Lebih dari Nol

Tentukan himpunan penyelesaian dari:

$$\frac{x-2}{x+3}>0$$

Tentukan titik pembuat nol.

Pembilang:

$$x-2=0$$

$$x=2$$

Tentukan titik tak terdefinisi.

Penyebut:

$$x+3=0$$

$$x=-3$$

Letakkan titik batas pada garis bilangan:

$$-3 \quad \text{dan} \quad 2$$

Interval yang terbentuk:

$$x<-3$$

$$-3<x<2$$

$$x>2$$

Uji tanda pada setiap interval.

| Interval | Nilai Uji | Tanda $x-2$ | Tanda $x+3$ | Tanda Pecahan |
| --- | --- | --- | --- | --- |
| $x<-3$ | $x=-4$ | Negatif | Negatif | Positif |
| $-3<x<2$ | $x=0$ | Negatif | Positif | Negatif |
| $x>2$ | $x=3$ | Positif | Positif | Positif |

Karena pertidaksamaannya:

$$\frac{x-2}{x+3}>0$$

maka pilih interval yang bertanda positif.

Tanda $>$ berarti nilai nol tidak ikut, sehingga $x=2$ tidak ikut.

Titik $x=-3$ juga tidak ikut karena membuat penyebut nol.

Jadi, himpunan penyelesaiannya adalah:

$$x<-3 \quad \text{atau} \quad x>2$$

Dalam notasi interval:

$$(-\infty,-3)\cup(2,\infty)$$

---

###### 7. Contoh dengan Tanda Kurang dari Nol

Tentukan himpunan penyelesaian dari:

$$\frac{x-2}{x+3}<0$$

Dari contoh sebelumnya, titik batasnya adalah:

$$x=-3 \quad \text{dan} \quad x=2$$

Tanda interval:

| Interval | Tanda Pecahan |
| --- | --- |
| $x<-3$ | Positif |
| $-3<x<2$ | Negatif |
| $x>2$ | Positif |

Karena yang diminta adalah:

$$\frac{x-2}{x+3}<0$$

maka pilih interval negatif.

Jadi, penyelesaiannya:

$$-3<x<2$$

Dalam notasi interval:

$$(-3,2)$$

  📌 **Catatan:** Titik $x=-3$ tidak boleh ikut karena penyebut nol, sedangkan $x=2$ tidak ikut karena tanda pertidaksamaan adalah $<$.

---

###### 8. Contoh dengan Tanda Lebih dari atau Sama dengan

Tentukan himpunan penyelesaian dari:

$$\frac{x-2}{x+3}\ge0$$

Titik batas:

- $x=2$ dari pembilang,
- $x=-3$ dari penyebut.

Tanda interval:

$$+\quad -\quad +$$

Karena pertidaksamaan menggunakan tanda $\ge0$, pilih daerah positif dan nilai yang membuat pecahan sama dengan nol.

Daerah positif:

$$x<-3 \quad \text{atau} \quad x>2$$

Nilai yang membuat pecahan nol:

$$x=2$$

Titik $x=2$ ikut karena tanda $\ge$.

Namun, titik $x=-3$ tidak ikut karena membuat penyebut nol.

Jadi, penyelesaiannya:

$$x<-3 \quad \text{atau} \quad x\ge2$$

Dalam notasi interval:

$$(-\infty,-3)\cup[2,\infty)$$

  💡 **Ingat:** Untuk $\ge$ atau $\le$, titik dari pembilang dapat ikut, tetapi titik dari penyebut tidak pernah ikut.

---

###### 9. Contoh dengan Tanda Kurang dari atau Sama dengan

Tentukan himpunan penyelesaian dari:

$$\frac{x-2}{x+3}\le0$$

Titik batas:

$$x=-3 \quad \text{dan} \quad x=2$$

Tanda interval:

| Interval | Tanda Pecahan |
| --- | --- |
| $x<-3$ | Positif |
| $-3<x<2$ | Negatif |
| $x>2$ | Positif |

Karena pertidaksamaannya $\le0$, pilih daerah negatif dan titik pembuat nol.

Daerah negatif:

$$-3<x<2$$

Titik pembuat nol:

$$x=2$$

Maka:

$$-3<x\le2$$

Dalam notasi interval:

$$(-3,2]$$

---

###### 10. Contoh dengan Pembilang Kuadrat

Tentukan himpunan penyelesaian dari:

$$\frac{x^2-9}{x-1}\ge0$$

Faktorkan pembilang:

$$x^2-9=(x-3)(x+3)$$

Maka:

$$\frac{x^2-9}{x-1}=\frac{(x-3)(x+3)}{x-1}$$

Titik pembuat nol dari pembilang:

$$x-3=0 \Rightarrow x=3$$

$$x+3=0 \Rightarrow x=-3$$

Titik tak terdefinisi dari penyebut:

$$x-1=0 \Rightarrow x=1$$

Titik batas:

$$-3,\quad 1,\quad 3$$

Buat tabel tanda.

| Interval | Tanda $x+3$ | Tanda $x-1$ | Tanda $x-3$ | Tanda Pecahan |
| --- | --- | --- | --- | --- |
| $x<-3$ | Negatif | Negatif | Negatif | Negatif |
| $-3<x<1$ | Positif | Negatif | Negatif | Positif |
| $1<x<3$ | Positif | Positif | Negatif | Negatif |
| $x>3$ | Positif | Positif | Positif | Positif |

Karena pertidaksamaannya:

$$\frac{x^2-9}{x-1}\ge0$$

maka pilih interval positif dan titik pembuat nol.

Interval positif:

$$-3<x<1$$

dan

$$x>3$$

Titik pembuat nol $x=-3$ dan $x=3$ ikut karena tanda $\ge$.

Titik $x=1$ tidak ikut karena penyebut nol.

Jadi, penyelesaiannya:

$$-3\le x<1 \quad \text{atau} \quad x\ge3$$

Dalam notasi interval:

$$[-3,1)\cup[3,\infty)$$

---

###### 11. Contoh yang Belum Berbentuk Nol

Tentukan himpunan penyelesaian dari:

$$\frac{x+1}{x-2}>1$$

Ubah ke bentuk nol.

$$\frac{x+1}{x-2}-1>0$$

Samakan penyebut.

$$\frac{x+1}{x-2}-\frac{x-2}{x-2}>0$$

$$\frac{x+1-(x-2)}{x-2}>0$$

$$\frac{x+1-x+2}{x-2}>0$$

$$\frac{3}{x-2}>0$$

Titik pembuat nol tidak ada karena pembilang $3$ tidak pernah nol.

Titik tak terdefinisi:

$$x-2=0$$

$$x=2$$

Tentukan tanda:

- jika $x<2$, penyebut negatif, sehingga pecahan negatif;
- jika $x>2$, penyebut positif, sehingga pecahan positif.

Karena diminta:

$$\frac{3}{x-2}>0$$

maka pilih:

$$x>2$$

Jadi, penyelesaiannya adalah:

$$x>2$$

  ⚠️ **Perhatian:** Jangan langsung mencoret atau mengalikan penyebut pada pertidaksamaan rasional sebelum mengetahui tandanya.

---

###### 12. Contoh dengan Penyebut Kuadrat

Tentukan himpunan penyelesaian dari:

$$\frac{x+2}{x^2-9}<0$$

Faktorkan penyebut:

$$x^2-9=(x-3)(x+3)$$

Maka:

$$\frac{x+2}{(x-3)(x+3)}<0$$

Titik pembuat nol dari pembilang:

$$x+2=0$$

$$x=-2$$

Titik tak terdefinisi dari penyebut:

$$x-3=0 \Rightarrow x=3$$

$$x+3=0 \Rightarrow x=-3$$

Titik batas:

$$-3,\quad -2,\quad 3$$

Buat tabel tanda.

| Interval | Tanda $x+2$ | Tanda $x+3$ | Tanda $x-3$ | Tanda Pecahan |
| --- | --- | --- | --- | --- |
| $x<-3$ | Negatif | Negatif | Negatif | Negatif |
| $-3<x<-2$ | Negatif | Positif | Negatif | Positif |
| $-2<x<3$ | Positif | Positif | Negatif | Negatif |
| $x>3$ | Positif | Positif | Positif | Positif |

Karena pertidaksamaannya:

$$\frac{x+2}{x^2-9}<0$$

maka pilih interval negatif.

Tanda $<$ berarti titik pembuat nol tidak ikut.

Titik dari penyebut juga tidak ikut.

Jadi, penyelesaiannya adalah:

$$x<-3 \quad \text{atau} \quad -2<x<3$$

Dalam notasi interval:

$$(-\infty,-3)\cup(-2,3)$$

---

###### 13. Menyelesaikan Pertidaksamaan Rasional dengan Faktor Berulang

Perhatikan pertidaksamaan:

$$\frac{(x-1)^2}{x+2}>0$$

Titik pembuat nol:

$$(x-1)^2=0$$

$$x=1$$

Titik tak terdefinisi:

$$x+2=0$$

$$x=-2$$

Titik batas:

$$-2 \quad \text{dan} \quad 1$$

Perhatikan bahwa $(x-1)^2$ selalu bernilai tidak negatif. Untuk $x\ne1$, nilainya positif.

Tanda pecahan ditentukan oleh penyebut $x+2$, kecuali saat $x=1$ nilainya nol.

| Interval | Tanda $(x-1)^2$ | Tanda $x+2$ | Tanda Pecahan |
| --- | --- | --- | --- |
| $x<-2$ | Positif | Negatif | Negatif |
| $-2<x<1$ | Positif | Positif | Positif |
| $x>1$ | Positif | Positif | Positif |

Karena diminta $>0$, pilih daerah positif, tetapi $x=1$ tidak ikut karena membuat nilai pecahan nol.

Jadi, penyelesaiannya adalah:

$$-2<x<1 \quad \text{atau} \quad x>1$$

Dalam notasi interval:

$$(-2,1)\cup(1,\infty)$$

  📌 **Catatan:** Faktor berpangkat genap tidak mengubah tanda saat melewati titik batas.

---

###### 14. Tabel Titik Batas pada Pertidaksamaan Rasional

| Asal Titik Batas | Contoh | Apakah Boleh Ikut? |
| --- | --- | --- |
| Pembilang | $x-2=0$ | Ikut jika tandanya $\ge$ atau $\le$. |
| Pembilang | $x-2=0$ | Tidak ikut jika tandanya $>$ atau $<$. |
| Penyebut | $x+3=0$ | Tidak pernah ikut. |

  💡 **Ingat:** Titik dari penyebut selalu kosong pada garis bilangan.

---

###### 15. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengalikan langsung dengan penyebut | $\frac{x-2}{x+3}>0$ dikalikan $x+3$ menjadi $x-2>0$. | Gunakan garis bilangan karena tanda $x+3$ belum pasti. |
| Menganggap titik penyebut boleh ikut untuk $\ge$ atau $\le$ | $x=-3$ ikut pada $\frac{x-2}{x+3}\ge0$. | $x=-3$ tidak boleh ikut karena penyebut nol. |
| Tidak mengubah ke bentuk nol | $\frac{x+1}{x-2}>1$ langsung dianalisis sebagai $\frac{x+1}{x-2}>0$. | Ubah menjadi $\frac{x+1}{x-2}-1>0$. |
| Tidak memfaktorkan pembilang atau penyebut | $\frac{x^2-9}{x-1}\ge0$ tidak dicari titik $x=-3$ dan $x=3$. | Faktorkan $x^2-9=(x-3)(x+3)$. |
| Salah menentukan titik pembuat nol | Pembilang $x-2=0$ ditulis $x=-2$. | Seharusnya $x=2$. |

  ⚠️ **Perhatian:** Pertidaksamaan rasional harus dianalisis berdasarkan tanda pecahan pada setiap interval.

---

###### 16. Rangkuman

- Pertidaksamaan rasional memuat bentuk pecahan aljabar.
- Bentuk umum pertidaksamaan rasional adalah:
  $$\frac{P(x)}{Q(x)} \ \square \ 0$$
  dengan $Q(x)\ne0$.
- Titik pembuat nol diperoleh dari pembilang $P(x)=0$.
- Titik tak terdefinisi diperoleh dari penyebut $Q(x)=0$.
- Titik dari pembilang ikut jika tanda pertidaksamaan $\ge$ atau $\le$.
- Titik dari pembilang tidak ikut jika tanda pertidaksamaan $>$ atau $<$.
- Titik dari penyebut tidak pernah ikut.
- Jika pertidaksamaan belum berbentuk nol, ubah dahulu ke bentuk nol.
- Gunakan garis bilangan untuk menentukan tanda pada setiap interval.
- Jangan sembarangan mengalikan pertidaksamaan dengan penyebut yang memuat variabel.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan himpunan penyelesaian dari pertidaksamaan berikut.
$$\frac{x-2}{x+3}>0$$

💡 Pembahasan

Tentukan titik pembuat nol dari pembilang:

$$x-2=0$$

$$x=2$$

Tentukan titik tak terdefinisi dari penyebut:

$$x+3=0$$

$$x=-3$$

Titik batasnya adalah $-3$ dan $2$.

Uji tanda interval:

| Interval | Tanda Pecahan |
| --- | --- |
| $x<-3$ | Positif |
| $-3<x<2$ | Negatif |
| $x>2$ | Positif |

Karena diminta $>0$, pilih interval positif.

Titik $-3$ tidak ikut karena penyebut nol. Titik $2$ tidak ikut karena tanda $>$.

Jadi:

$$x<-3 \quad \text{atau} \quad x>2$$

  Contoh Soal 2

Tentukan himpunan penyelesaian dari pertidaksamaan berikut.
$$\frac{x-2}{x+3}\le0$$

💡 Pembahasan

Titik pembuat nol:

$$x-2=0 \Rightarrow x=2$$

Titik tak terdefinisi:

$$x+3=0 \Rightarrow x=-3$$

Tanda interval:

| Interval | Tanda Pecahan |
| --- | --- |
| $x<-3$ | Positif |
| $-3<x<2$ | Negatif |
| $x>2$ | Positif |

Karena diminta $\le0$, pilih interval negatif dan titik pembuat nol.

Titik $x=2$ ikut karena membuat pembilang nol.

Titik $x=-3$ tidak ikut karena membuat penyebut nol.

Jadi:

$$-3<x\le2$$

  Contoh Soal 3

Tentukan himpunan penyelesaian dari pertidaksamaan berikut.
$$\frac{x+1}{x-2}>1$$

💡 Pembahasan

Ubah ke bentuk nol.

$$\frac{x+1}{x-2}>1$$

$$\frac{x+1}{x-2}-1>0$$

Samakan penyebut.

$$\frac{x+1-(x-2)}{x-2}>0$$

$$\frac{x+1-x+2}{x-2}>0$$

$$\frac{3}{x-2}>0$$

Titik tak terdefinisi:

$$x-2=0$$

$$x=2$$

Karena pembilang $3$ selalu positif, pecahan akan positif jika penyebut positif.

$$x-2>0$$

$$x>2$$

Jadi, himpunan penyelesaiannya adalah:

$$x>2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Pertidaksamaan berikut yang merupakan pertidaksamaan rasional adalah ....

A
$x^2-5x+6>0$

B
$\frac{x-2}{x+3}\le0$

C
$2x+1<0$

D
$x^3-1\ge0$

E
$\sqrt{x}+1>0$

💡 Pembahasan

Pertidaksamaan rasional memuat bentuk pecahan aljabar. Bentuk $\frac{x-2}{x+3}\le0$ merupakan pertidaksamaan rasional.

  Latihan Soal 2

Pada pertidaksamaan $\frac{x-2}{x+3}>0$, titik yang membuat penyebut nol adalah ....

A
$x=2$

B
$x=-3$

C
$x=3$

D
$x=-2$

E
$x=0$

💡 Pembahasan

Penyebutnya adalah $x+3$.

$$x+3=0$$

$$x=-3$$

Jadi, titik yang membuat penyebut nol adalah $x=-3$.

  Latihan Soal 3

Pada pertidaksamaan rasional, titik yang membuat penyebut nol ....

A
selalu ikut jika tandanya $\ge$

B
selalu ikut jika tandanya $\le$

C
tidak pernah ikut penyelesaian

D
boleh ikut jika pembilang juga nol

E
tidak perlu diperhatikan

💡 Pembahasan

Titik yang membuat penyebut nol tidak pernah ikut penyelesaian karena pembagian dengan nol tidak didefinisikan.

  Latihan Soal 4

Himpunan penyelesaian dari $\frac{x-2}{x+3}>0$ adalah ....

A
$x<-3$ atau $x>2$

B
$-3<x<2$

C
$x\le -3$ atau $x\ge2$

D
$-3\le x\le2$

E
$x=-3$ atau $x=2$

💡 Pembahasan

Titik batasnya $x=-3$ dan $x=2$.

Tanda pecahan positif pada interval $x<-3$ dan $x>2$.

Karena tanda $>$, titik pembuat nol tidak ikut. Titik penyebut juga tidak ikut.

Jadi:

$$x<-3 \quad \text{atau} \quad x>2$$

  Latihan Soal 5

Himpunan penyelesaian dari $\frac{x-2}{x+3}<0$ adalah ....

A
$x<-3$ atau $x>2$

B
$-3<x<2$

C
$x\le -3$ atau $x\ge2$

D
$-3\le x\le2$

E
$x=2$ saja

💡 Pembahasan

Tanda pecahan negatif pada interval di antara $-3$ dan $2$.

Karena $x=-3$ membuat penyebut nol dan $x=2$ membuat pembilang nol, keduanya tidak ikut untuk tanda $<$.

Jadi:

$$-3<x<2$$

  Latihan Soal 6

Himpunan penyelesaian dari $\frac{x-2}{x+3}\ge0$ adalah ....

A
$x<-3$ atau $x>2$

B
$-3<x<2$

C
$x<-3$ atau $x\ge2$

D
$x\le -3$ atau $x\ge2$

E
$-3\le x\le2$

💡 Pembahasan

Daerah positif adalah $x<-3$ atau $x>2$.

Karena tanda $\ge$, titik pembuat nol $x=2$ ikut.

Titik $x=-3$ tidak ikut karena membuat penyebut nol.

Jadi:

$$x<-3 \quad \text{atau} \quad x\ge2$$

  Latihan Soal 7

Himpunan penyelesaian dari $\frac{x-2}{x+3}\le0$ adalah ....

A
$x<-3$ atau $x>2$

B
$-3<x\le2$

C
$-3\le x<2$

D
$x\le -3$ atau $x\ge2$

E
$x= -3$ atau $x=2$

💡 Pembahasan

Daerah negatif adalah $-3<x<2$.

Karena tanda $\le$, titik pembuat nol $x=2$ ikut.

Titik $x=-3$ tidak ikut karena membuat penyebut nol.

Jadi:

$$-3<x\le2$$

  Latihan Soal 8

Himpunan penyelesaian dari $\frac{x^2-9}{x-1}\ge0$ adalah ....

A
$x<-3$ atau $1<x<3$

B
$-3\le x<1$ atau $x\ge3$

C
$-3<x<1$ atau $x>3$

D
$x\le -3$ atau $1\le x\le3$

E
$x=1$ saja

💡 Pembahasan

Faktorkan:

$$\frac{x^2-9}{x-1}=\frac{(x-3)(x+3)}{x-1}$$

Titik pembuat nol: $x=-3$ dan $x=3$.

Titik tak terdefinisi: $x=1$.

Tanda pecahan positif pada interval $-3<x<1$ dan $x>3$.

Karena tanda $\ge$, titik $-3$ dan $3$ ikut, sedangkan $1$ tidak ikut.

Jadi:

$$-3\le x<1 \quad \text{atau} \quad x\ge3$$

  Latihan Soal 9

Langkah pertama yang tepat untuk menyelesaikan $\frac{x+1}{x-2}>1$ adalah ....

A
mengubahnya menjadi $\frac{x+1}{x-2}-1>0$

B
langsung mengalikan dengan $x-2$ tanpa syarat

C
menghapus penyebutnya

D
menjadikan $x=2$ sebagai solusi

E
mengubah tanda $>$ menjadi $=$

💡 Pembahasan

Pertidaksamaan rasional sebaiknya diubah ke bentuk nol terlebih dahulu:

$$\frac{x+1}{x-2}>1$$

$$\frac{x+1}{x-2}-1>0$$

  Latihan Soal 10

Kesalahan yang harus dihindari pada pertidaksamaan rasional adalah ....

A
menentukan titik pembuat nol

B
menentukan titik tak terdefinisi

C
membuat garis bilangan

D
mengalikan langsung dengan penyebut yang tandanya belum pasti

E
memeriksa titik dari penyebut

💡 Pembahasan

Pada pertidaksamaan rasional, penyebut yang memuat variabel dapat bernilai positif atau negatif. Karena itu, tidak boleh sembarangan mengalikan langsung dengan penyebut tanpa analisis tanda.

#### Syarat Penyebut Tidak Nol pada Bentuk Rasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/syarat-penyebut-bentuk-rasional*

Pada materi sebelumnya, kita telah mempelajari pertidaksamaan rasional. Sekarang kita akan memperdalam salah satu konsep paling penting dalam bentuk rasional, yaitu **syarat penyebut tidak nol**.

Konsep ini harus selalu diperhatikan ketika menyederhanakan bentuk rasional, menentukan domain, menyelesaikan persamaan rasional, maupun menyelesaikan pertidaksamaan rasional.

  📌 **Catatan:** Pada bentuk rasional, penyebut tidak boleh bernilai nol karena pembagian dengan nol tidak didefinisikan.

---

###### 1. Mengingat Kembali Bentuk Rasional

Bentuk rasional adalah bentuk aljabar yang dapat ditulis sebagai:

$$\frac{P(x)}{Q(x)}$$

dengan:

$$Q(x)\ne0$$

Pada bentuk tersebut:

- $P(x)$ disebut pembilang,
- $Q(x)$ disebut penyebut,
- penyebut $Q(x)$ tidak boleh sama dengan nol.

Contoh bentuk rasional:

$$\frac{x+2}{x-3}$$

$$\frac{x^2-4}{x+1}$$

$$\frac{2x-5}{x^2-9}$$

  💡 **Ingat:** Syarat utama bentuk rasional adalah penyebut tidak boleh sama dengan nol.

---

###### 2. Mengapa Penyebut Tidak Boleh Nol?

Dalam matematika, pembagian dengan nol tidak didefinisikan.

Misalnya:

$$\frac{5}{0}$$

bentuk tersebut tidak memiliki nilai yang dapat didefinisikan.

Karena itu, jika suatu bentuk rasional memiliki penyebut yang memuat variabel, kita harus memastikan bahwa nilai variabel tidak membuat penyebut menjadi nol.

Contoh:

$$\frac{x+1}{x-4}$$

Jika $x=4$, maka penyebut menjadi:

$$4-4=0$$

Sehingga bentuknya menjadi:

$$\frac{4+1}{4-4}=\frac{5}{0}$$

Bentuk tersebut tidak terdefinisi.

Jadi, harus berlaku:

$$x\ne4$$

  ⚠️ **Perhatian:** Nilai yang membuat penyebut nol harus dikeluarkan, meskipun nilai tersebut tampak memenuhi langkah perhitungan lain.

---

###### 3. Nilai Terlarang pada Bentuk Rasional

Nilai yang membuat penyebut bernilai nol disebut **nilai terlarang**.

Contoh:

$$\frac{3x+1}{x+5}$$

Penyebut:

$$x+5$$

Cari nilai yang membuat penyebut nol.

$$x+5=0$$

$$x=-5$$

Jadi, nilai terlarangnya adalah:

$$x=-5$$

Artinya, bentuk rasional tersebut terdefinisi untuk semua bilangan real kecuali $x=-5$.

---

###### 4. Menentukan Syarat Penyebut Linear

Jika penyebut berbentuk linear, syarat penyebut tidak nol dapat ditentukan langsung.

Contoh:

$$\frac{x-2}{2x-7}$$

Penyebutnya adalah:

$$2x-7$$

Syarat:

$$2x-7\ne0$$

$$2x\ne7$$

$$x\ne\frac72$$

Jadi, syaratnya adalah:

$$x\ne\frac72$$

Perhatikan contoh lain.

| Bentuk Rasional | Penyebut | Syarat |
| --- | --- | --- |
| $\frac{x+1}{x-3}$ | $x-3$ | $x\ne3$ |
| $\frac{2x-5}{x+4}$ | $x+4$ | $x\ne-4$ |
| $\frac{x^2+1}{3x-6}$ | $3x-6$ | $x\ne2$ |

---

###### 5. Menentukan Syarat Penyebut Kuadrat

Jika penyebut berbentuk kuadrat, kita dapat memfaktorkan penyebut terlebih dahulu.

Contoh:

$$\frac{x+1}{x^2-5x+6}$$

Penyebut:

$$x^2-5x+6$$

Syarat:

$$x^2-5x+6\ne0$$

Faktorkan:

$$(x-2)(x-3)\ne0$$

Maka:

$$x\ne2$$

dan

$$x\ne3$$

Jadi, syaratnya adalah:

$$x\ne2,\quad x\ne3$$

  💡 **Strategi:** Untuk penyebut kuadrat, faktorkan terlebih dahulu agar nilai terlarang mudah ditemukan.

---

###### 6. Menentukan Syarat Penyebut dengan Selisih Kuadrat

Penyebut kadang berbentuk selisih kuadrat.

Contoh:

$$\frac{2x+1}{x^2-16}$$

Penyebut:

$$x^2-16$$

Syarat:

$$x^2-16\ne0$$

Faktorkan:

$$(x-4)(x+4)\ne0$$

Maka:

$$x\ne4$$

dan

$$x\ne-4$$

Jadi, syaratnya adalah:

$$x\ne -4,\quad x\ne4$$

---

###### 7. Menentukan Syarat Penyebut Bentuk Kuadrat Sempurna

Contoh:

$$\frac{x+3}{x^2-6x+9}$$

Penyebut:

$$x^2-6x+9$$

Faktorkan:

$$x^2-6x+9=(x-3)^2$$

Syarat:

$$(x-3)^2\ne0$$

Maka:

$$x-3\ne0$$

$$x\ne3$$

Jadi, syaratnya adalah:

$$x\ne3$$

  📌 **Catatan:** Jika penyebut berbentuk kuadrat sempurna, biasanya hanya ada satu nilai terlarang.

---

###### 8. Menentukan Syarat Penyebut yang Tidak Mudah Difaktorkan

Ada penyebut kuadrat yang tidak mudah difaktorkan. Untuk kasus seperti ini, gunakan diskriminan.

Contoh:

$$\frac{x+1}{x^2+2x+5}$$

Penyebut:

$$x^2+2x+5$$

Hitung diskriminan:

$$D=b^2-4ac$$

Dengan:

$$a=1,\quad b=2,\quad c=5$$

Maka:

$$D=2^2-4(1)(5)=4-20=-16$$

Karena $D<0$ dan $a>0$, penyebut tidak pernah bernilai nol untuk semua $x$ real.

Jadi, bentuk rasional tersebut terdefinisi untuk semua bilangan real.

Domainnya:

$$x\in\mathbb{R}$$

  💡 **Ingat:** Jika penyebut kuadrat memiliki $D<0$, maka penyebut tidak memiliki akar real. Artinya, tidak ada nilai real yang membuat penyebut nol.

---

###### 9. Domain Bentuk Rasional

Domain bentuk rasional adalah himpunan semua nilai $x$ yang membuat bentuk tersebut terdefinisi.

Pada bentuk rasional:

$$\frac{P(x)}{Q(x)}$$

domainnya adalah semua bilangan real kecuali nilai yang membuat:

$$Q(x)=0$$

Contoh:

Tentukan domain dari:

$$f(x)=\frac{2x-1}{x^2-4x+3}$$

Penyebut:

$$x^2-4x+3$$

Faktorkan:

$$x^2-4x+3=(x-1)(x-3)$$

Syarat:

$$(x-1)(x-3)\ne0$$

Maka:

$$x\ne1,\quad x\ne3$$

Jadi, domainnya adalah:

$$\{x\in\mathbb{R}\mid x\ne1,\ x\ne3\}$$

Dalam notasi interval:

$$(-\infty,1)\cup(1,3)\cup(3,\infty)$$

---

###### 10. Syarat Awal Tetap Berlaku Setelah Penyederhanaan

Perhatikan bentuk:

$$\frac{x^2-9}{x-3}$$

Faktorkan pembilang:

$$x^2-9=(x-3)(x+3)$$

Maka:

$$\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}$$

Faktor $(x-3)$ dapat dicoret, sehingga:

$$=x+3$$

Namun, bentuk awal memiliki penyebut:

$$x-3$$

Syarat awal:

$$x-3\ne0$$

$$x\ne3$$

Jadi:

$$\frac{x^2-9}{x-3}=x+3,\quad x\ne3$$

  ⚠️ **Perhatian:** Setelah dicoret, syarat awal tidak hilang. Nilai yang membuat penyebut awal nol tetap tidak boleh digunakan.

---

###### 11. Syarat pada Persamaan Rasional

Dalam persamaan rasional, syarat penyebut harus ditentukan sebelum menyelesaikan persamaan.

Contoh:

$$\frac{x^2-4}{x-2}=5$$

Syarat:

$$x-2\ne0$$

$$x\ne2$$

Faktorkan:

$$\frac{(x-2)(x+2)}{x-2}=5$$

Untuk $x\ne2$, coret faktor yang sama.

$$x+2=5$$

$$x=3$$

Cek syarat:

$$3\ne2$$

Maka $x=3$ diterima.

Jika hasil yang diperoleh adalah $x=2$, maka harus ditolak karena melanggar syarat.

---

###### 12. Syarat pada Pertidaksamaan Rasional

Dalam pertidaksamaan rasional, nilai yang membuat penyebut nol menjadi titik batas, tetapi tidak pernah ikut dalam penyelesaian.

Contoh:

$$\frac{x-2}{x+3}\le0$$

Titik pembuat nol dari pembilang:

$$x-2=0$$

$$x=2$$

Titik tak terdefinisi dari penyebut:

$$x+3=0$$

$$x=-3$$

Karena $x=-3$ membuat penyebut nol, maka $x=-3$ tidak boleh ikut.

Penyelesaian pertidaksamaan tersebut adalah:

$$-3<x\le2$$

Perhatikan bahwa $x=2$ ikut karena membuat pembilang nol dan tanda pertidaksamaan $\le$.

Namun, $x=-3$ tidak ikut karena membuat penyebut nol.

  💡 **Ingat:** Dalam pertidaksamaan rasional, titik dari penyebut selalu kosong pada garis bilangan.

---

###### 13. Pembilang Boleh Nol, Penyebut Tidak Boleh Nol

Pada bentuk rasional:

$$\frac{P(x)}{Q(x)}$$

pembilang boleh bernilai nol, asalkan penyebut tidak nol.

Jika pembilang nol dan penyebut tidak nol, nilai bentuk rasional adalah nol.

Contoh:

$$\frac{x-4}{x+1}$$

Jika $x=4$, maka:

$$\frac{4-4}{4+1}=\frac{0}{5}=0$$

Ini boleh karena penyebut tidak nol.

Tetapi jika $x=-1$, maka:

$$\frac{-1-4}{-1+1}=\frac{-5}{0}$$

Ini tidak boleh karena penyebut nol.

  📌 **Catatan:** Banyak siswa keliru menganggap pembilang tidak boleh nol. Padahal pembilang boleh nol.

---

###### 14. Menentukan Nilai yang Membuat Bentuk Rasional Bernilai Nol

Bentuk rasional bernilai nol jika pembilangnya nol dan penyebutnya tidak nol.

Contoh:

Tentukan nilai $x$ yang membuat:

$$\frac{x^2-4}{x-2}=0$$

Syarat penyebut:

$$x-2\ne0$$

$$x\ne2$$

Agar pecahan bernilai nol:

$$x^2-4=0$$

$$(x-2)(x+2)=0$$

Maka:

$$x=2 \quad \text{atau} \quad x=-2$$

Cek syarat:

- $x=2$ ditolak karena membuat penyebut nol.
- $x=-2$ diterima karena penyebut tidak nol.

Jadi, bentuk rasional bernilai nol saat:

$$x=-2$$

---

###### 15. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengabaikan syarat penyebut | $\frac{x+1}{x-3}$ dianggap berlaku untuk semua $x$. | Harus ditulis $x\ne3$. |
| Menganggap pembilang tidak boleh nol | $\frac{x-4}{x+1}$ dianggap tidak boleh $x=4$. | Pembilang boleh nol. Nilai $x=4$ membuat pecahan bernilai nol. |
| Melupakan syarat setelah menyederhanakan | $\frac{x^2-9}{x-3}=x+3$ tanpa syarat. | Seharusnya $x+3,\ x\ne3$. |
| Salah menentukan nilai terlarang | $x+5=0$ disimpulkan $x=5$. | Seharusnya $x=-5$. |
| Mengikutkan titik dari penyebut pada pertidaksamaan rasional | Pada $\frac{x-2}{x+3}\le0$, ditulis $-3\le x\le2$. | Seharusnya $-3<x\le2$ karena $x=-3$ membuat penyebut nol. |

  ⚠️ **Perhatian:** Syarat penyebut tidak nol harus diperiksa dari bentuk awal, bukan hanya dari bentuk yang sudah disederhanakan.

---

###### 16. Rangkuman

- Pada bentuk rasional:
  $$\frac{P(x)}{Q(x)}$$
  harus berlaku:
  $$Q(x)\ne0$$
- Nilai yang membuat penyebut nol disebut nilai terlarang.
- Domain bentuk rasional adalah semua bilangan real kecuali nilai yang membuat penyebut nol.
- Jika penyebut linear, cari nilai terlarang dengan menyelesaikan persamaan linear.
- Jika penyebut kuadrat, faktorkan atau gunakan diskriminan.
- Pembilang boleh bernilai nol, asalkan penyebut tidak nol.
- Bentuk rasional bernilai nol jika pembilang nol dan penyebut tidak nol.
- Setelah bentuk rasional disederhanakan, syarat dari penyebut awal tetap berlaku.
- Pada persamaan rasional, solusi harus diperiksa terhadap syarat penyebut.
- Pada pertidaksamaan rasional, titik dari penyebut tidak pernah ikut penyelesaian.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan syarat penyebut dari bentuk rasional berikut.
$$\frac{2x+1}{x^2-5x+6}$$

💡 Pembahasan

Penyebutnya adalah:

$$x^2-5x+6$$

Syarat penyebut tidak nol:

$$x^2-5x+6\ne0$$

Faktorkan:

$$(x-2)(x-3)\ne0$$

Maka:

$$x\ne2$$

dan

$$x\ne3$$

Jadi, syaratnya adalah:

$$x\ne2,\quad x\ne3$$

  Contoh Soal 2

Tentukan domain dari fungsi rasional berikut.
$$f(x)=\frac{x+4}{x^2-4x+3}$$

💡 Pembahasan

Domain ditentukan dari penyebut tidak nol.

Penyebut:

$$x^2-4x+3$$

Faktorkan:

$$x^2-4x+3=(x-1)(x-3)$$

Syarat:

$$(x-1)(x-3)\ne0$$

Maka:

$$x\ne1,\quad x\ne3$$

Jadi, domainnya adalah:

$$\{x\in\mathbb{R}\mid x\ne1,\ x\ne3\}$$

Dalam notasi interval:

$$(-\infty,1)\cup(1,3)\cup(3,\infty)$$

  Contoh Soal 3

Tentukan nilai $x$ yang membuat bentuk rasional berikut bernilai nol.
$$\frac{x^2-4}{x-2}=0$$

💡 Pembahasan

Syarat penyebut:

$$x-2\ne0$$

$$x\ne2$$

Agar pecahan bernilai nol, pembilang harus nol.

$$x^2-4=0$$

$$(x-2)(x+2)=0$$

Maka:

$$x=2 \quad \text{atau} \quad x=-2$$

Cek syarat:

- $x=2$ ditolak karena membuat penyebut nol.
- $x=-2$ diterima karena tidak membuat penyebut nol.

Jadi, bentuk rasional tersebut bernilai nol saat:

$$x=-2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Pada bentuk rasional, penyebut harus memenuhi syarat ....

A
tidak boleh sama dengan nol

B
harus selalu sama dengan nol

C
harus selalu negatif

D
tidak boleh memuat variabel

E
harus selalu lebih dari satu

💡 Pembahasan

Pada bentuk rasional, penyebut tidak boleh sama dengan nol karena pembagian dengan nol tidak didefinisikan.

  Latihan Soal 2

Nilai terlarang dari bentuk $\frac{x+2}{x-6}$ adalah ....

A
$x=-6$

B
$x=6$

C
$x=-2$

D
$x=2$

E
$x=0$

💡 Pembahasan

Penyebut:

$$x-6$$

Nilai terlarang diperoleh dari:

$$x-6=0$$

$$x=6$$

  Latihan Soal 3

Syarat dari bentuk $\frac{3x-1}{2x+5}$ adalah ....

A
$x\ne\frac52$

B
$x\ne-\frac52$

C
$x=\frac52$

D
$x=-5$

E
$x=0$

💡 Pembahasan

Penyebut:

$$2x+5$$

Syarat:

$$2x+5\ne0$$

$$2x\ne-5$$

$$x\ne-\frac52$$

  Latihan Soal 4

Syarat dari bentuk $\frac{x+1}{x^2-5x+6}$ adalah ....

A
$x\ne -2$ dan $x\ne -3$

B
$x\ne2$ dan $x\ne3$

C
$x=2$ dan $x=3$

D
$x\ne1$ saja

E
semua bilangan real tanpa pengecualian

💡 Pembahasan

Penyebut:

$$x^2-5x+6$$

Faktorkan:

$$x^2-5x+6=(x-2)(x-3)$$

Syarat:

$$(x-2)(x-3)\ne0$$

Maka:

$$x\ne2,\quad x\ne3$$

  Latihan Soal 5

Domain dari $f(x)=\frac{x+4}{x^2-4x+3}$ adalah ....

A
$x\ne1$ dan $x\ne3$

B
$x=1$ dan $x=3$

C
$x\ne4$ saja

D
$x\ne-4$ saja

E
semua bilangan real

💡 Pembahasan

Penyebut:

$$x^2-4x+3$$

Faktorkan:

$$x^2-4x+3=(x-1)(x-3)$$

Maka syaratnya:

$$x\ne1,\quad x\ne3$$

  Latihan Soal 6

Bentuk $\frac{x^2-9}{x-3}$ dapat disederhanakan menjadi ....

A
$x+3$, tanpa syarat

B
$x+3$, dengan $x\ne3$

C
$x-3$, dengan $x\ne3$

D
$x^2+9$, dengan $x\ne3$

E
$3x$, tanpa syarat

💡 Pembahasan

Faktorkan pembilang:

$$x^2-9=(x-3)(x+3)$$

Maka:

$$\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3$$

Namun, syarat awal tetap berlaku:

$$x-3\ne0$$

$$x\ne3$$

  Latihan Soal 7

Nilai $x$ yang membuat $\frac{x^2-4}{x-2}=0$ adalah ....

A
$x=2$

B
$x=-2$

C
$x=0$

D
$x=4$

E
tidak ada nilai $x$

💡 Pembahasan

Syarat penyebut:

$$x\ne2$$

Agar pecahan bernilai nol, pembilang harus nol.

$$x^2-4=0$$

$$(x-2)(x+2)=0$$

Maka:

$$x=2 \quad \text{atau} \quad x=-2$$

Karena $x=2$ dilarang, solusi yang diterima adalah $x=-2$.

  Latihan Soal 8

Pada pertidaksamaan $\frac{x-2}{x+3}\le0$, nilai $x=-3$ tidak ikut penyelesaian karena ....

A
membuat pembilang nol

B
membuat penyebut nol

C
membuat pecahan bernilai satu

D
membuat pembilang positif

E
membuat variabel hilang

💡 Pembahasan

Jika $x=-3$, penyebut menjadi:

$$x+3=-3+3=0$$

Karena penyebut nol tidak diperbolehkan, maka $x=-3$ tidak ikut penyelesaian.

  Latihan Soal 9

Pernyataan yang benar adalah ....

A
pembilang bentuk rasional tidak boleh nol

B
penyebut bentuk rasional boleh nol

C
pembilang boleh nol, tetapi penyebut tidak boleh nol

D
jika pembilang nol, bentuk rasional tidak terdefinisi

E
penyebut nol membuat bentuk rasional bernilai satu

💡 Pembahasan

Pembilang boleh bernilai nol karena pecahan dapat bernilai nol. Namun, penyebut tidak boleh bernilai nol karena pembagian dengan nol tidak didefinisikan.

  Latihan Soal 10

Jika penyebut suatu bentuk rasional adalah $x^2+2x+5$, maka domain bentuk rasional tersebut adalah ....

A
semua bilangan real

B
$x\ne5$

C
$x\ne-5$

D
$x\ne2$ dan $x\ne5$

E
tidak ada domain

💡 Pembahasan

Penyebut:

$$x^2+2x+5$$

Diskriminan:

$$D=2^2-4(1)(5)=4-20=-16$$

Karena $D<0$ dan $a>0$, penyebut tidak pernah bernilai nol untuk semua $x$ real.

Jadi, domainnya adalah semua bilangan real.

#### Soal Kontekstual Pertidaksamaan Rasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/soal-kontekstual-pertidaksamaan-rasional*

Pada materi sebelumnya, kita telah mempelajari syarat penyebut tidak nol pada bentuk rasional. Sekarang kita akan menerapkan persamaan rasional dan pertidaksamaan rasional dalam soal cerita.

Soal cerita rasional biasanya berkaitan dengan kecepatan, waktu, debit air, pekerjaan bersama, rata-rata, biaya per unit, atau syarat perbandingan tertentu.

  📌 **Catatan:** Dalam soal cerita rasional, variabel sering muncul pada penyebut. Karena itu, syarat penyebut tidak nol dan makna konteks harus selalu diperhatikan.

---

###### 1. Mengingat Kembali Persamaan Rasional

Persamaan rasional adalah persamaan yang memuat bentuk pecahan aljabar.

Contoh:

$$\frac{x+1}{x-2}=3$$

$$\frac{2}{x}+\frac{1}{x+1}=1$$

$$\frac{x}{x-3}=2$$

Dalam persamaan rasional, penyebut tidak boleh bernilai nol.

Contoh:

$$\frac{x}{x-3}=2$$

Syaratnya:

$$x-3\ne0$$

$$x\ne3$$

  💡 **Ingat:** Solusi persamaan rasional harus diperiksa agar tidak membuat penyebut bernilai nol.

---

###### 2. Mengingat Kembali Pertidaksamaan Rasional

Pertidaksamaan rasional adalah pertidaksamaan yang memuat bentuk pecahan aljabar.

Contoh:

$$\frac{x-2}{x+3}>0$$

$$\frac{x+1}{x-4}\le0$$

$$\frac{2x-1}{x+5}\ge3$$

Dalam pertidaksamaan rasional, penyelesaian biasanya berupa interval.

Titik penting yang harus diperhatikan:

| Jenis Titik | Diperoleh Dari | Keterangan |
| --- | --- | --- |
| Titik pembuat nol | Pembilang sama dengan nol | Dapat ikut jika tanda $\ge$ atau $\le$. |
| Titik tak terdefinisi | Penyebut sama dengan nol | Tidak pernah ikut penyelesaian. |

---

###### 3. Kata Kunci dalam Soal Cerita Rasional

Soal cerita persamaan dan pertidaksamaan rasional biasanya menggunakan kata-kata berikut.

| Kata Kunci | Model Matematika |
| --- | --- |
| sama dengan | $=$ |
| lebih dari | $>$ |
| kurang dari | $<$ |
| paling sedikit / minimal | $\ge$ |
| paling banyak / maksimal / tidak lebih dari | $\le$ |

  💡 **Ingat:** Kata "minimal" berarti $\ge$, sedangkan "maksimal" berarti $\le$.

---

###### 4. Langkah Menyelesaikan Soal Cerita Rasional

Langkah umum menyelesaikan soal cerita rasional adalah sebagai berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Baca soal dan tentukan apa yang ditanyakan. |
| 2 | Tentukan variabel yang sesuai. |
| 3 | Susun model persamaan atau pertidaksamaan rasional. |
| 4 | Tentukan syarat penyebut tidak nol. |
| 5 | Selesaikan model matematika. |
| 6 | Periksa hasil terhadap syarat dan konteks soal. |
| 7 | Tulis kesimpulan dengan satuan yang tepat. |

  ⚠️ **Perhatian:** Dalam soal cerita, nilai variabel sering harus bernilai positif, misalnya waktu, kecepatan, jumlah barang, panjang, atau debit.

---

###### 5. Soal Cerita tentang Kecepatan, Jarak, dan Waktu

Hubungan dasar kecepatan, jarak, dan waktu adalah:

$$v=\frac{s}{t}$$

atau:

$$t=\frac{s}{v}$$

dengan:

- $v$ adalah kecepatan,
- $s$ adalah jarak,
- $t$ adalah waktu.

Contoh:

Sebuah mobil menempuh jarak $120$ km. Jika kecepatannya $x$ km/jam, waktu tempuhnya adalah:

$$\frac{120}{x}$$

Karena kecepatan tidak boleh nol, maka:

$$x\ne0$$

Dalam konteks nyata, kecepatan juga harus positif.

$$x>0$$

---

###### 6. Contoh Persamaan Rasional tentang Waktu Tempuh

Sebuah mobil menempuh jarak $120$ km dengan kecepatan $x$ km/jam. Jika waktu tempuhnya $3$ jam, tentukan kecepatan mobil.

Model waktu tempuh:

$$\frac{120}{x}=3$$

Syarat:

$$x\ne0$$

Kalikan kedua ruas dengan $x$.

$$120=3x$$

$$x=40$$

Karena $x=40$ memenuhi syarat dan masuk akal sebagai kecepatan, maka kecepatan mobil adalah:

$$40 \text{ km/jam}$$

---

###### 7. Contoh Pertidaksamaan Rasional tentang Waktu Maksimal

Sebuah mobil harus menempuh jarak $120$ km dalam waktu paling banyak $4$ jam. Jika kecepatannya $x$ km/jam, tentukan batas kecepatan mobil.

Waktu tempuh:

$$\frac{120}{x}$$

Paling banyak $4$ jam berarti:

$$\frac{120}{x}\le4$$

Karena $x$ adalah kecepatan, maka:

$$x>0$$

Selesaikan:

$$\frac{120}{x}\le4$$

Karena $x>0$, kita boleh mengalikan kedua ruas dengan $x$ tanpa mengubah tanda.

$$120\le4x$$

$$30\le x$$

atau:

$$x\ge30$$

Jadi, kecepatan mobil harus paling sedikit:

$$30 \text{ km/jam}$$

  📌 **Catatan:** Pada soal ini, $x>0$ sudah diketahui dari konteks kecepatan, sehingga mengalikan dengan $x$ aman.

---

###### 8. Soal Cerita tentang Pekerjaan Bersama

Jika seseorang dapat menyelesaikan pekerjaan dalam $x$ hari, maka dalam satu hari ia menyelesaikan:

$$\frac{1}{x}$$

bagian pekerjaan.

Jika orang pertama dapat menyelesaikan pekerjaan dalam $a$ hari dan orang kedua dalam $b$ hari, maka pekerjaan bersama per hari adalah:

$$\frac{1}{a}+\frac{1}{b}$$

Contoh:

A dapat menyelesaikan pekerjaan dalam $x$ hari. B dapat menyelesaikan pekerjaan dalam $6$ hari. Jika bersama-sama mereka menyelesaikan pekerjaan dalam $4$ hari, tentukan nilai $x$.

Model:

$$\frac{1}{x}+\frac{1}{6}=\frac{1}{4}$$

Syarat:

$$x\ne0$$

Selesaikan:

$$\frac{1}{x}=\frac{1}{4}-\frac{1}{6}$$

$$\frac{1}{x}=\frac{3-2}{12}$$

$$\frac{1}{x}=\frac{1}{12}$$

Maka:

$$x=12$$

Jadi, A dapat menyelesaikan pekerjaan sendiri dalam $12$ hari.

  💡 **Ingat:** Pada soal pekerjaan, gunakan satuan "bagian pekerjaan per satuan waktu".

---

###### 9. Soal Cerita tentang Debit Air

Debit air dapat dimodelkan dengan:

$$D=\frac{V}{t}$$

dengan:

- $D$ adalah debit,
- $V$ adalah volume,
- $t$ adalah waktu.

Contoh:

Sebuah bak berisi $240$ liter air. Jika air mengalir dengan debit $x$ liter/menit, waktu yang diperlukan untuk mengisi bak adalah:

$$\frac{240}{x}$$

Karena debit harus positif, maka:

$$x>0$$

Jika bak harus terisi dalam waktu paling lama $30$ menit, maka:

$$\frac{240}{x}\le30$$

Karena $x>0$, kalikan kedua ruas dengan $x$.

$$240\le30x$$

$$8\le x$$

atau:

$$x\ge8$$

Jadi, debit air minimal adalah $8$ liter/menit.

---

###### 10. Soal Cerita tentang Biaya Per Orang

Biaya per orang sering berbentuk rasional.

Contoh:

Biaya sewa bus sebesar Rp$1.200.000,00$ ditanggung bersama oleh $x$ orang. Biaya per orang adalah:

$$\frac{1.200.000}{x}$$

Jika biaya per orang paling banyak Rp$60.000,00$, maka:

$$\frac{1.200.000}{x}\le60.000$$

Karena $x$ menyatakan banyak orang, maka:

$$x>0$$

Kalikan kedua ruas dengan $x$.

$$1.200.000\le60.000x$$

$$20\le x$$

atau:

$$x\ge20$$

Jadi, banyak orang paling sedikit adalah $20$ orang.

  ⚠️ **Perhatian:** Jika variabel menyatakan banyak orang, banyak barang, atau banyak benda, jawabannya harus disesuaikan dengan bilangan bulat positif.

---

###### 11. Soal Cerita tentang Harga Rata-rata

Contoh:

Seorang pedagang membeli $x$ buah buku dengan total harga Rp$180.000,00$. Harga rata-rata per buku tidak lebih dari Rp$15.000,00$. Tentukan banyak buku minimal yang dibeli.

Harga rata-rata per buku:

$$\frac{180.000}{x}$$

Tidak lebih dari Rp$15.000,00$ berarti:

$$\frac{180.000}{x}\le15.000$$

Karena $x$ menyatakan banyak buku:

$$x>0$$

Kalikan kedua ruas dengan $x$.

$$180.000\le15.000x$$

$$12\le x$$

atau:

$$x\ge12$$

Jadi, banyak buku minimal adalah $12$ buah.

---

###### 12. Soal Cerita yang Perlu Diubah ke Bentuk Nol

Tidak semua pertidaksamaan rasional dapat langsung dikalikan dengan penyebut. Jika tanda penyebut belum pasti, ubah dahulu ke bentuk nol dan gunakan garis bilangan.

Contoh:

Tentukan nilai $x$ yang memenuhi:

$$\frac{x+1}{x-2}>1$$

Dalam konteks umum, $x$ tidak dijelaskan sebagai bilangan positif. Maka jangan langsung mengalikan dengan $x-2$.

Ubah ke bentuk nol.

$$\frac{x+1}{x-2}-1>0$$

Samakan penyebut:

$$\frac{x+1-(x-2)}{x-2}>0$$

$$\frac{3}{x-2}>0$$

Titik tak terdefinisi:

$$x-2=0$$

$$x=2$$

Karena pembilang $3$ positif, pecahan positif jika penyebut positif.

$$x-2>0$$

$$x>2$$

Jadi, penyelesaiannya:

$$x>2$$

---

###### 13. Soal Cerita dengan Selisih Waktu

Contoh:

Sebuah kendaraan menempuh jarak $60$ km. Jika kecepatannya ditambah $10$ km/jam, waktu tempuh menjadi $1$ jam lebih cepat. Tentukan kecepatan awal kendaraan.

Misalkan kecepatan awal kendaraan adalah $x$ km/jam.

Syarat:

$$x>0$$

Waktu awal:

$$\frac{60}{x}$$

Kecepatan baru:

$$x+10$$

Waktu baru:

$$\frac{60}{x+10}$$

Karena waktu baru $1$ jam lebih cepat, maka:

$$\frac{60}{x}-\frac{60}{x+10}=1$$

Syarat penyebut:

$$x\ne0,\quad x\ne-10$$

Namun, karena konteks kecepatan, cukup gunakan:

$$x>0$$

Selesaikan:

$$\frac{60(x+10)-60x}{x(x+10)}=1$$

$$\frac{600}{x(x+10)}=1$$

$$600=x(x+10)$$

$$600=x^2+10x$$

$$x^2+10x-600=0$$

Faktorkan:

$$(x+30)(x-20)=0$$

Maka:

$$x=-30 \quad \text{atau} \quad x=20$$

Karena kecepatan harus positif, maka:

$$x=20$$

Jadi, kecepatan awal kendaraan adalah:

$$20 \text{ km/jam}$$

---

###### 14. Soal Cerita tentang Jumlah Orang Minimal

Contoh:

Sebuah biaya kegiatan sebesar Rp$900.000,00$ ditanggung bersama oleh $x$ peserta. Agar biaya per peserta kurang dari Rp$50.000,00$, tentukan jumlah peserta minimal.

Biaya per peserta:

$$\frac{900.000}{x}$$

Kurang dari Rp$50.000,00$ berarti:

$$\frac{900.000}{x}<50.000$$

Karena $x$ menyatakan jumlah peserta:

$$x>0$$

Kalikan kedua ruas dengan $x$.

$$900.000<50.000x$$

$$18<x$$

atau:

$$x>18$$

Karena $x$ harus bilangan bulat, maka jumlah peserta minimal adalah:

$$19$$

Jadi, jumlah peserta minimal adalah $19$ orang.

  💡 **Ingat:** Jika diperoleh $x>18$ dan $x$ harus bilangan bulat, maka nilai terkecil yang memenuhi adalah $19$.

---

###### 15. Menafsirkan Jawaban dalam Konteks

Dalam soal cerita rasional, jawaban akhir harus disesuaikan dengan konteks.

| Konteks | Syarat Umum |
| --- | --- |
| Waktu | Biasanya bernilai positif. |
| Kecepatan | Harus bernilai positif. |
| Debit | Harus bernilai positif. |
| Banyak orang/barang | Bilangan bulat positif. |
| Biaya per orang | Biasanya bernilai positif. |

  📌 **Catatan:** Hasil matematika yang benar belum tentu sesuai konteks. Misalnya, kecepatan negatif atau jumlah orang pecahan harus ditolak.

---

###### 16. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tidak menentukan syarat penyebut | $\frac{120}{x}=3$ diselesaikan tanpa menulis $x\ne0$. | Tulis syarat penyebut terlebih dahulu. |
| Salah menerjemahkan kata kunci | "Paling banyak" ditulis $\ge$. | "Paling banyak" berarti $\le$. |
| Mengalikan pertidaksamaan dengan penyebut yang tandanya belum pasti | $\frac{x+1}{x-2}>1$ langsung dikali $x-2$. | Ubah ke bentuk nol atau pastikan tanda penyebut terlebih dahulu. |
| Tidak menyesuaikan dengan konteks | Jumlah peserta minimal dari $x>18$ dijawab $18{,}5$. | Jika peserta harus bilangan bulat, jawab $19$. |
| Menerima nilai negatif untuk kecepatan atau waktu | Kecepatan $x=-30$ diterima sebagai jawaban. | Kecepatan harus positif, sehingga nilai negatif ditolak. |

  ⚠️ **Perhatian:** Pada soal cerita, selalu periksa kembali satuan dan kewajaran jawaban.

---

###### 17. Rangkuman

- Soal cerita rasional sering berkaitan dengan waktu, kecepatan, debit, pekerjaan bersama, biaya per orang, atau rata-rata.
- Persamaan rasional biasanya menghasilkan nilai tertentu.
- Pertidaksamaan rasional biasanya menghasilkan interval atau batas nilai.
- Penyebut tidak boleh bernilai nol.
- Jika variabel jelas bernilai positif, seperti kecepatan, waktu, debit, atau jumlah orang, gunakan syarat positif.
- Jika variabel menyatakan jumlah orang atau barang, jawaban biasanya harus bilangan bulat positif.
- Jangan sembarangan mengalikan pertidaksamaan dengan penyebut yang tandanya belum pasti.
- Jawaban akhir harus sesuai dengan konteks soal.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Sebuah mobil menempuh jarak $120$ km. Jika waktu tempuhnya $3$ jam, tentukan kecepatan mobil.

💡 Pembahasan

Misalkan kecepatan mobil adalah $x$ km/jam.

Waktu tempuh:

$$\frac{120}{x}$$

Karena waktu tempuhnya $3$ jam, maka:

$$\frac{120}{x}=3$$

Syarat:

$$x\ne0$$

Kalikan kedua ruas dengan $x$.

$$120=3x$$

$$x=40$$

Karena kecepatan harus positif, $x=40$ diterima.

Jadi, kecepatan mobil adalah **$40$ km/jam**.

  Contoh Soal 2

Sebuah bak berisi $240$ liter air. Agar bak terisi paling lama $30$ menit, tentukan debit minimal air dalam liter/menit.

💡 Pembahasan

Misalkan debit air adalah $x$ liter/menit.

Waktu untuk mengisi bak:

$$\frac{240}{x}$$

Paling lama $30$ menit berarti:

$$\frac{240}{x}\le30$$

Karena debit harus positif:

$$x>0$$

Kalikan kedua ruas dengan $x$.

$$240\le30x$$

$$8\le x$$

atau:

$$x\ge8$$

Jadi, debit minimal air adalah **$8$ liter/menit**.

  Contoh Soal 3

Sebuah kendaraan menempuh jarak $60$ km. Jika kecepatannya ditambah $10$ km/jam, waktu tempuh menjadi $1$ jam lebih cepat. Tentukan kecepatan awal kendaraan.

💡 Pembahasan

Misalkan kecepatan awal kendaraan adalah $x$ km/jam.

Syarat:

$$x>0$$

Waktu awal:

$$\frac{60}{x}$$

Waktu setelah kecepatan ditambah $10$ km/jam:

$$\frac{60}{x+10}$$

Karena waktu baru $1$ jam lebih cepat:

$$\frac{60}{x}-\frac{60}{x+10}=1$$

Samakan penyebut.

$$\frac{60(x+10)-60x}{x(x+10)}=1$$

$$\frac{600}{x(x+10)}=1$$

Kalikan kedua ruas dengan $x(x+10)$.

$$600=x(x+10)$$

$$600=x^2+10x$$

$$x^2+10x-600=0$$

Faktorkan:

$$(x+30)(x-20)=0$$

Maka:

$$x=-30 \quad \text{atau} \quad x=20$$

Karena kecepatan harus positif, $x=-30$ ditolak.

Jadi, kecepatan awal kendaraan adalah **$20$ km/jam**.

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Sebuah mobil menempuh jarak $150$ km dengan kecepatan $x$ km/jam. Bentuk waktu tempuh mobil tersebut adalah ....

A
$\frac{150}{x}$ jam

B
$150x$ jam

C
$x-150$ jam

D
$x+150$ jam

E
$\frac{x}{150}$ jam

💡 Pembahasan

Rumus waktu adalah:

$$t=\frac{s}{v}$$

Dengan jarak $150$ km dan kecepatan $x$ km/jam, waktu tempuhnya:

$$\frac{150}{x}$$

  Latihan Soal 2

Sebuah mobil menempuh jarak $150$ km dalam waktu $3$ jam. Kecepatan mobil tersebut adalah ....

A
$30$ km/jam

B
$50$ km/jam

C
$100$ km/jam

D
$153$ km/jam

E
$450$ km/jam

💡 Pembahasan

Misalkan kecepatan mobil $x$ km/jam.

$$\frac{150}{x}=3$$

$$150=3x$$

$$x=50$$

Jadi, kecepatannya $50$ km/jam.

  Latihan Soal 3

Sebuah kendaraan harus menempuh jarak $120$ km dalam waktu paling banyak $3$ jam. Jika kecepatannya $x$ km/jam, maka syarat kecepatannya adalah ....

A
$x\le40$

B
$x\ge40$

C
$x<40$

D
$x>120$

E
$x=3$

💡 Pembahasan

Waktu tempuh:

$$\frac{120}{x}$$

Paling banyak $3$ jam berarti:

$$\frac{120}{x}\le3$$

Karena $x>0$, kalikan dengan $x$.

$$120\le3x$$

$$40\le x$$

Jadi, $x\ge40$.

  Latihan Soal 4

A dapat menyelesaikan pekerjaan dalam $x$ hari, sedangkan B dalam $6$ hari. Jika bersama-sama selesai dalam $4$ hari, model persamaannya adalah ....

A
$\frac{1}{x}+\frac{1}{6}=\frac{1}{4}$

B
$x+6=4$

C
$\frac{x}{6}=4$

D
$\frac{6}{x}=4$

E
$x-6=4$

💡 Pembahasan

Jika A selesai dalam $x$ hari, maka pekerjaan A per hari adalah $\frac{1}{x}$.

Jika B selesai dalam $6$ hari, maka pekerjaan B per hari adalah $\frac{1}{6}$.

Bersama-sama selesai dalam $4$ hari berarti pekerjaan bersama per hari adalah $\frac{1}{4}$.

Jadi, modelnya:

$$\frac{1}{x}+\frac{1}{6}=\frac{1}{4}$$

  Latihan Soal 5

Nilai $x$ dari persamaan $\frac{1}{x}+\frac{1}{6}=\frac{1}{4}$ adalah ....

A
$6$

B
$12$

C
$18$

D
$24$

E
$36$

💡 Pembahasan

$$\frac{1}{x}+\frac{1}{6}=\frac{1}{4}$$

$$\frac{1}{x}=\frac{1}{4}-\frac{1}{6}$$

$$\frac{1}{x}=\frac{3-2}{12}$$

$$\frac{1}{x}=\frac{1}{12}$$

Jadi:

$$x=12$$

  Latihan Soal 6

Sebuah bak berisi $240$ liter air. Jika debit air $x$ liter/menit dan waktu pengisian paling lama $30$ menit, maka syarat debitnya adalah ....

A
$x\le8$

B
$x\ge8$

C
$x<8$

D
$x>240$

E
$x=30$

💡 Pembahasan

Waktu pengisian:

$$\frac{240}{x}$$

Paling lama $30$ menit:

$$\frac{240}{x}\le30$$

Karena $x>0$:

$$240\le30x$$

$$8\le x$$

Jadi, $x\ge8$.

  Latihan Soal 7

Biaya sewa bus Rp$1.200.000,00$ ditanggung oleh $x$ orang. Agar biaya per orang paling banyak Rp$60.000,00$, banyak orang yang diperlukan adalah ....

A
paling banyak $20$ orang

B
paling sedikit $20$ orang

C
kurang dari $20$ orang

D
lebih dari $60$ orang

E
tepat $60$ orang saja

💡 Pembahasan

Biaya per orang:

$$\frac{1.200.000}{x}$$

Paling banyak Rp$60.000,00$:

$$\frac{1.200.000}{x}\le60.000$$

Karena $x>0$:

$$1.200.000\le60.000x$$

$$20\le x$$

Jadi, banyak orang paling sedikit $20$ orang.

  Latihan Soal 8

Penyelesaian dari $\frac{x+1}{x-2}>1$ adalah ....

A
$x<2$

B
$x>2$

C
$x=2$

D
$x<1$

E
semua bilangan real

💡 Pembahasan

Ubah ke bentuk nol:

$$\frac{x+1}{x-2}-1>0$$

$$\frac{x+1-(x-2)}{x-2}>0$$

$$\frac{3}{x-2}>0$$

Karena pembilang positif, pecahan positif jika:

$$x-2>0$$

$$x>2$$

  Latihan Soal 9

Sebuah kendaraan menempuh jarak $60$ km. Jika kecepatannya ditambah $10$ km/jam, waktu tempuh menjadi $1$ jam lebih cepat. Kecepatan awal kendaraan adalah ....

A
$10$ km/jam

B
$20$ km/jam

C
$30$ km/jam

D
$40$ km/jam

E
$60$ km/jam

💡 Pembahasan

Misalkan kecepatan awal $x$ km/jam.

$$\frac{60}{x}-\frac{60}{x+10}=1$$

$$\frac{60(x+10)-60x}{x(x+10)}=1$$

$$\frac{600}{x(x+10)}=1$$

$$600=x(x+10)$$

$$x^2+10x-600=0$$

$$(x+30)(x-20)=0$$

Maka $x=-30$ atau $x=20$.

Karena kecepatan harus positif, maka $x=20$.

  Latihan Soal 10

Biaya kegiatan Rp$900.000,00$ ditanggung bersama oleh $x$ peserta. Agar biaya per peserta kurang dari Rp$50.000,00$, jumlah peserta minimal adalah ....

A
$18$ orang

B
$19$ orang

C
$20$ orang

D
$50$ orang

E
$90$ orang

💡 Pembahasan

Biaya per peserta:

$$\frac{900.000}{x}$$

Kurang dari Rp$50.000,00$:

$$\frac{900.000}{x}<50.000$$

Karena $x>0$:

$$900.000<50.000x$$

$$18<x$$

Karena $x$ jumlah peserta dan harus bilangan bulat, nilai terkecil yang memenuhi adalah $19$.

Jadi, jumlah peserta minimal adalah $19$ orang.

### Fungsi Akar

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 6 Fungsi dan Pemodelannya, subbab B.2 Fungsi Akar, hlm. 268–273.*

#### Definisi 6.6 Fungsi Akar

Jika $g(x)$ suatu fungsi dan $n$ bilangan bulat lebih dari 1, maka $f(x) = \sqrt[n]{g(x)}$ adalah **fungsi akar** (dalam lingkup bilangan real).

#### Daerah Asal Fungsi Akar

Untuk $f(x) = \sqrt[n]{g(x)}$:

- Jika $n$ **genap** ($n = 2, 4, 6, \ldots$), daerah asal $f$ adalah semua nilai pada daerah asal $g$ yang tidak menyebabkan $g(x) < 0$.
- Jika $n$ **ganjil**, daerah asal $f$ adalah semua nilai pada daerah asal $g$.

Contoh: $f(x) = \sqrt{x - 2}$ terdefinisi untuk $x - 2 \ge 0$, yaitu $x \ge 2$.

### Persamaan dan Pertidaksamaan Irasional

#### Memahami Bentuk Irasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/bentuk-irasional*

Setelah mempelajari bentuk rasional, sekarang kita masuk ke bagian **bentuk irasional**. Bentuk irasional banyak muncul dalam aljabar, terutama pada persamaan irasional dan pertidaksamaan irasional.

Secara sederhana, bentuk irasional adalah bentuk aljabar yang memuat akar dengan variabel di dalamnya.

  📌 **Catatan:** Dalam pembahasan aljabar sekolah, bentuk irasional biasanya berkaitan dengan bentuk akar seperti $\sqrt{x}$, $\sqrt{x+2}$, atau $\sqrt{x^2-4}$.

---

###### 1. Pengertian Bentuk Irasional

**Bentuk irasional** adalah bentuk aljabar yang memuat variabel di dalam tanda akar.

Contoh bentuk irasional:

$$\sqrt{x}$$

$$\sqrt{x+3}$$

$$\sqrt{2x-1}$$

$$\sqrt{x^2-4}$$

$$3+\sqrt{x+5}$$

Bentuk-bentuk tersebut disebut irasional karena memuat bentuk akar yang nilainya tidak selalu dapat ditulis sebagai bilangan rasional sederhana.

  💡 **Ingat:** Ciri utama bentuk irasional dalam aljabar adalah adanya variabel di dalam tanda akar.

---

###### 2. Bentuk Umum Bentuk Irasional

Bentuk irasional sederhana dapat ditulis sebagai:

$$\sqrt{f(x)}$$

dengan $f(x)$ adalah bentuk aljabar.

Contoh:

| Bentuk Irasional | Bagian dalam Akar |
| --- | --- |
| $\sqrt{x+2}$ | $x+2$ |
| $\sqrt{3x-6}$ | $3x-6$ |
| $\sqrt{x^2-9}$ | $x^2-9$ |
| $2\sqrt{x+1}$ | $x+1$ |

---

###### 3. Syarat Bentuk Irasional

Untuk akar pangkat dua, bagian di dalam akar harus bernilai tidak negatif.

Jika bentuknya:

$$\sqrt{f(x)}$$

maka harus berlaku:

$$f(x)\ge0$$

Syarat ini disebut **syarat keberadaan bentuk akar**.

Contoh:

$$\sqrt{x-3}$$

Agar bentuk tersebut terdefinisi pada bilangan real, harus berlaku:

$$x-3\ge0$$

$$x\ge3$$

Jadi, bentuk $\sqrt{x-3}$ terdefinisi untuk:

$$x\ge3$$

  ⚠️ **Perhatian:** Untuk akar pangkat dua dalam bilangan real, bagian dalam akar tidak boleh negatif.

---

###### 4. Domain Bentuk Irasional

**Domain** bentuk irasional adalah himpunan nilai $x$ yang membuat bentuk akar terdefinisi.

Untuk bentuk:

$$\sqrt{f(x)}$$

domainnya ditentukan dari:

$$f(x)\ge0$$

Contoh:

Tentukan domain dari:

$$f(x)=\sqrt{x+5}$$

Syarat:

$$x+5\ge0$$

$$x\ge -5$$

Jadi, domainnya adalah:

$$\{x\in\mathbb{R}\mid x\ge -5\}$$

Dalam notasi interval:

$$[-5,\infty)$$

  📌 **Catatan:** Domain bentuk irasional ditentukan dari syarat bagian dalam akar tidak negatif.

---

###### 5. Contoh Bentuk Irasional dan Bukan Bentuk Irasional

Perhatikan tabel berikut.

| Bentuk | Termasuk Bentuk Irasional? | Alasan |
| --- | --- | --- |
| $\sqrt{x+1}$ | Ya | Variabel berada di dalam akar. |
| $2+\sqrt{3x-4}$ | Ya | Memuat akar dengan variabel di dalamnya. |
| $\sqrt{5}$ | Tidak termasuk bentuk irasional aljabar dalam variabel | Tidak memuat variabel. |
| $x^2+3x+2$ | Tidak | Tidak memuat tanda akar. |
| $\frac{x+1}{x-2}$ | Tidak | Termasuk bentuk rasional, bukan bentuk irasional. |

---

###### 6. Bentuk Irasional Sederhana

Bentuk irasional sederhana biasanya berupa akar dari bentuk linear.

Contoh:

$$\sqrt{x}$$

$$\sqrt{x+4}$$

$$\sqrt{2x-6}$$

$$\sqrt{5-x}$$

Untuk menentukan domainnya, cukup buat bagian dalam akar tidak negatif.

Contoh:

Tentukan domain dari:

$$\sqrt{2x-6}$$

Syarat:

$$2x-6\ge0$$

$$2x\ge6$$

$$x\ge3$$

Jadi, domainnya adalah:

$$x\ge3$$

---

###### 7. Bentuk Irasional dengan Akar Linear Berbentuk $a-x$

Contoh:

Tentukan domain dari:

$$\sqrt{7-x}$$

Syarat:

$$7-x\ge0$$

Pindahkan:

$$-x\ge -7$$

Kalikan dengan $-1$, tanda pertidaksamaan berubah.

$$x\le7$$

Jadi, domainnya adalah:

$$x\le7$$

Dalam notasi interval:

$$(-\infty,7]$$

  ⚠️ **Perhatian:** Saat mengalikan pertidaksamaan dengan bilangan negatif, tanda pertidaksamaan harus dibalik.

---

###### 8. Bentuk Irasional dengan Akar Kuadrat

Bentuk irasional dapat memiliki bagian dalam akar berupa bentuk kuadrat.

Contoh:

Tentukan domain dari:

$$\sqrt{x^2-9}$$

Syarat:

$$x^2-9\ge0$$

Faktorkan:

$$(x-3)(x+3)\ge0$$

Akar pembatas:

$$x=-3 \quad \text{dan} \quad x=3$$

Karena koefisien $x^2$ positif, bentuk $x^2-9$ bernilai positif di luar akar.

Maka:

$$x\le -3 \quad \text{atau} \quad x\ge3$$

Jadi, domainnya adalah:

$$(-\infty,-3]\cup[3,\infty)$$

  💡 **Strategi:** Jika bagian dalam akar berupa kuadrat, gunakan konsep pertidaksamaan kuadrat untuk menentukan domainnya.

---

###### 9. Bentuk Irasional dengan Penyebut

Kadang bentuk irasional juga muncul dalam pecahan.

Contoh:

$$\frac{1}{\sqrt{x-2}}$$

Pada bentuk ini, ada dua syarat:

1. Bagian dalam akar harus tidak negatif.
2. Penyebut tidak boleh nol.

Karena akar berada di penyebut, maka:

$$\sqrt{x-2}\ne0$$

Selain itu:

$$x-2\ge0$$

Gabungkan syarat.

Agar akar terdefinisi:

$$x-2\ge0$$

$$x\ge2$$

Agar penyebut tidak nol:

$$\sqrt{x-2}\ne0$$

maka:

$$x-2\ne0$$

$$x\ne2$$

Gabungan syarat:

$$x>2$$

Jadi, domain dari:

$$\frac{1}{\sqrt{x-2}}$$

adalah:

$$x>2$$

  📌 **Catatan:** Jika akar berada di penyebut, bagian dalam akar harus bernilai positif, bukan sekadar tidak negatif.

---

###### 10. Bentuk Irasional dengan Akar di Pembilang

Jika akar berada di pembilang, syaratnya hanya bagian dalam akar tidak negatif.

Contoh:

$$\frac{\sqrt{x-2}}{x+1}$$

Ada dua syarat:

1. Dari akar:
   $$x-2\ge0$$
   sehingga:
   $$x\ge2$$

2. Dari penyebut:
   $$x+1\ne0$$
   sehingga:
   $$x\ne-1$$

Namun, jika $x\ge2$, maka otomatis $x\ne-1$.

Jadi, domainnya adalah:

$$x\ge2$$

  💡 **Ingat:** Jika bentuk memuat akar dan pecahan, periksa syarat akar dan syarat penyebut sekaligus.

---

###### 11. Menyederhanakan Bentuk Irasional

Beberapa bentuk irasional dapat disederhanakan menggunakan sifat akar.

Sifat dasar:

$$\sqrt{ab}=\sqrt{a}\cdot\sqrt{b}$$

untuk $a\ge0$ dan $b\ge0$.

Contoh:

$$\sqrt{12}=\sqrt{4\cdot3}=2\sqrt3$$

Contoh bentuk aljabar:

$$\sqrt{4x^2}=2|x|$$

Mengapa bukan langsung $2x$?

Karena:

$$\sqrt{x^2}=|x|$$

Jadi:

$$\sqrt{4x^2}=2|x|$$

  ⚠️ **Perhatian:** Dalam bilangan real, $\sqrt{x^2}=|x|$, bukan selalu $x$.

---

###### 12. Bentuk Sekawan

Bentuk irasional juga sering berkaitan dengan **bentuk sekawan**.

Contoh pasangan sekawan:

| Bentuk | Sekawan |
| --- | --- |
| $\sqrt{x}+2$ | $\sqrt{x}-2$ |
| $3+\sqrt{x}$ | $3-\sqrt{x}$ |
| $\sqrt{x+1}+\sqrt{x-1}$ | $\sqrt{x+1}-\sqrt{x-1}$ |

Bentuk sekawan sering digunakan untuk merasionalkan penyebut atau menyederhanakan bentuk akar.

Contoh:

$$\frac{1}{\sqrt{x}+2}$$

dapat dirasionalkan dengan mengalikan sekawannya:

$$\sqrt{x}-2$$

Namun, pembahasan merasionalkan bentuk akar akan diperdalam pada materi lanjutan jika diperlukan.

---

###### 13. Nilai Bentuk Irasional

Untuk menentukan nilai bentuk irasional, substitusikan nilai variabel dengan memperhatikan domain.

Contoh:

Tentukan nilai:

$$\sqrt{x+5}$$

untuk $x=4$.

Substitusikan:

$$\sqrt{4+5}=\sqrt9=3$$

Jadi, nilainya adalah:

$$3$$

Namun, jika $x=-6$, maka:

$$\sqrt{-6+5}=\sqrt{-1}$$

Dalam bilangan real, bentuk tersebut tidak terdefinisi.

  📌 **Catatan:** Sebelum mensubstitusikan nilai, pastikan nilai tersebut memenuhi domain.

---

###### 14. Bentuk Irasional dalam Persamaan

Bentuk irasional dapat muncul dalam persamaan.

Contoh:

$$\sqrt{x+1}=3$$

Untuk menyelesaikannya, kita dapat menguadratkan kedua ruas.

$$x+1=9$$

$$x=8$$

Cek:

$$\sqrt{8+1}=\sqrt9=3$$

Jadi, $x=8$ benar.

Namun, pada persamaan irasional, hasil harus selalu diperiksa kembali karena proses menguadratkan dapat menghasilkan solusi palsu.

  ⚠️ **Perhatian:** Pada persamaan irasional, pemeriksaan solusi sangat penting karena menguadratkan kedua ruas dapat menambah solusi yang tidak valid.

---

###### 15. Bentuk Irasional dalam Pertidaksamaan

Bentuk irasional juga dapat muncul dalam pertidaksamaan.

Contoh:

$$\sqrt{x+1}\le3$$

Syarat akar:

$$x+1\ge0$$

$$x\ge -1$$

Karena kedua ruas tidak negatif, kuadratkan:

$$x+1\le9$$

$$x\le8$$

Gabungkan dengan syarat domain:

$$-1\le x\le8$$

Jadi, penyelesaiannya adalah:

$$[-1,8]$$

Materi pertidaksamaan irasional akan dibahas lebih khusus pada bagian berikutnya.

---

###### 16. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengabaikan syarat akar | $\sqrt{x-3}$ dianggap berlaku untuk semua $x$. | Harus ada syarat $x\ge3$. |
| Salah menentukan domain | $\sqrt{7-x}$ diberi domain $x\ge7$. | Seharusnya $x\le7$. |
| Menganggap $\sqrt{x^2}=x$ untuk semua $x$ | $\sqrt{x^2}=x$. | Seharusnya $\sqrt{x^2}=\|x\|$. |
| Tidak memperhatikan akar di penyebut | $\frac{1}{\sqrt{x-2}}$ diberi domain $x\ge2$. | Seharusnya $x>2$ karena penyebut tidak boleh nol. |
| Tidak memeriksa solusi persamaan irasional | Hasil setelah dikuadratkan langsung diterima. | Solusi harus dicek ke bentuk awal. |

  ⚠️ **Perhatian:** Bentuk irasional selalu menuntut pemeriksaan domain terlebih dahulu.

---

###### 17. Rangkuman

- Bentuk irasional adalah bentuk aljabar yang memuat variabel di dalam tanda akar.
- Bentuk umum sederhana:
  $$\sqrt{f(x)}$$
- Untuk akar pangkat dua, harus berlaku:
  $$f(x)\ge0$$
- Domain bentuk irasional ditentukan dari syarat bagian dalam akar tidak negatif.
- Jika akar berada di penyebut, bagian dalam akar harus bernilai positif.
- Jika bentuk memuat akar dan pecahan, periksa syarat akar dan syarat penyebut.
- $\sqrt{x^2}=|x|$, bukan selalu $x$.
- Bentuk irasional dapat muncul dalam persamaan dan pertidaksamaan.
- Pada persamaan irasional, solusi harus diperiksa kembali ke bentuk awal.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan domain dari bentuk irasional berikut.
$$\sqrt{x-4}$$

💡 Pembahasan

Agar bentuk akar terdefinisi, bagian dalam akar harus tidak negatif.

$$x-4\ge0$$

$$x\ge4$$

Jadi, domain dari $\sqrt{x-4}$ adalah:

$$x\ge4$$

Dalam notasi interval:

$$[4,\infty)$$

  Contoh Soal 2

Tentukan domain dari bentuk irasional berikut.
$$\sqrt{9-x}$$

💡 Pembahasan

Syarat bagian dalam akar tidak negatif.

$$9-x\ge0$$

$$-x\ge -9$$

Kalikan dengan $-1$, tanda pertidaksamaan berubah.

$$x\le9$$

Jadi, domain dari $\sqrt{9-x}$ adalah:

$$x\le9$$

Dalam notasi interval:

$$(-\infty,9]$$

  Contoh Soal 3

Tentukan domain dari bentuk berikut.
$$\frac{1}{\sqrt{x+2}}$$

💡 Pembahasan

Karena akar berada di penyebut, maka penyebut harus terdefinisi dan tidak boleh nol.

Penyebut:

$$\sqrt{x+2}$$

Agar akar terdefinisi:

$$x+2\ge0$$

Agar penyebut tidak nol:

$$\sqrt{x+2}\ne0$$

Maka bagian dalam akar harus lebih dari nol.

$$x+2>0$$

$$x>-2$$

Jadi, domainnya adalah:

$$x>-2$$

Dalam notasi interval:

$$(-2,\infty)$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Bentuk berikut yang termasuk bentuk irasional aljabar adalah ....

A
$x^2+3x+2$

B
$\sqrt{x+1}$

C
$\frac{x+1}{x-2}$

D
$2x-5$

E
$x^3-1$

💡 Pembahasan

Bentuk irasional aljabar memuat variabel di dalam tanda akar.

Bentuk $\sqrt{x+1}$ memenuhi ciri tersebut.

  Latihan Soal 2

Syarat agar $\sqrt{x-5}$ terdefinisi pada bilangan real adalah ....

A
$x\ge5$

B
$x\le5$

C
$x>5$

D
$x<5$

E
$x\ne5$

💡 Pembahasan

Bagian dalam akar harus tidak negatif.

$$x-5\ge0$$

$$x\ge5$$

  Latihan Soal 3

Domain dari $\sqrt{x+3}$ adalah ....

A
$x\ge3$

B
$x\ge-3$

C
$x\le-3$

D
$x<3$

E
$x\ne-3$

💡 Pembahasan

Syarat:

$$x+3\ge0$$

$$x\ge-3$$

  Latihan Soal 4

Domain dari $\sqrt{10-x}$ adalah ....

A
$x\ge10$

B
$x\le10$

C
$x>10$

D
$x\ne10$

E
semua bilangan real

💡 Pembahasan

Syarat:

$$10-x\ge0$$

$$-x\ge-10$$

Kalikan dengan $-1$, tanda berubah.

$$x\le10$$

  Latihan Soal 5

Domain dari $\sqrt{x^2-16}$ adalah ....

A
$x\le-4$ atau $x\ge4$

B
$-4\le x\le4$

C
$x< -4$ atau $x>4$

D
$x\ne-4$ dan $x\ne4$

E
semua bilangan real

💡 Pembahasan

Syarat:

$$x^2-16\ge0$$

$$(x-4)(x+4)\ge0$$

Karena koefisien $x^2$ positif, daerah yang memenuhi berada di luar akar.

Jadi:

$$x\le-4 \quad \text{atau} \quad x\ge4$$

  Latihan Soal 6

Domain dari $\frac{1}{\sqrt{x-6}}$ adalah ....

A
$x\ge6$

B
$x>6$

C
$x\le6$

D
$x<6$

E
$x\ne6$

💡 Pembahasan

Karena akar berada di penyebut, bagian dalam akar harus lebih dari nol.

$$x-6>0$$

$$x>6$$

  Latihan Soal 7

Nilai dari $\sqrt{x+5}$ untuk $x=4$ adalah ....

A
$2$

B
$3$

C
$4$

D
$5$

E
$9$

💡 Pembahasan

Substitusikan $x=4$.

$$\sqrt{x+5}=\sqrt{4+5}=\sqrt9=3$$

  Latihan Soal 8

Bentuk yang benar untuk $\sqrt{x^2}$ adalah ....

A
$x$ untuk semua $x$

B
$|x|$

C
$-x$ untuk semua $x$

D
$x^2$

E
$2x$

💡 Pembahasan

Dalam bilangan real:

$$\sqrt{x^2}=|x|$$

karena hasil akar pangkat dua selalu tidak negatif.

  Latihan Soal 9

Pasangan sekawan dari $\sqrt{x}+5$ adalah ....

A
$\sqrt{x}-5$

B
$\sqrt{x}+5$

C
$x-5$

D
$x+5$

E
$5-\sqrt{x+5}$

💡 Pembahasan

Bentuk sekawan diperoleh dengan mengganti tanda tengah.

Sekawan dari $\sqrt{x}+5$ adalah:

$$\sqrt{x}-5$$

  Latihan Soal 10

Pernyataan yang benar tentang bentuk irasional adalah ....

A
bagian dalam akar pangkat dua boleh selalu negatif

B
domain bentuk akar tidak perlu diperiksa

C
bagian dalam akar pangkat dua harus tidak negatif

D
akar di penyebut boleh bernilai nol

E
$\sqrt{x^2}=x$ untuk semua bilangan real $x$

💡 Pembahasan

Untuk akar pangkat dua dalam bilangan real, bagian dalam akar harus tidak negatif.

Jika bentuknya $\sqrt{f(x)}$, maka harus berlaku $f(x)\ge0$.

#### Memahami Konsep Persamaan Irasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/memahami-konsep-persamaan-irasional*

Pada materi sebelumnya, kita telah mempelajari pengertian bentuk irasional. Sekarang kita akan membahas **persamaan irasional**.

Persamaan irasional adalah persamaan yang memuat variabel di dalam tanda akar. Dalam menyelesaikannya, kita sering menggunakan cara menguadratkan kedua ruas.

  📌 **Catatan:** Persamaan irasional harus selalu diperiksa kembali karena proses menguadratkan dapat menghasilkan solusi palsu.

---

###### 1. Pengertian Persamaan Irasional

**Persamaan irasional** adalah persamaan yang memuat bentuk akar dengan variabel di dalamnya.

Contoh persamaan irasional:

$$\sqrt{x+1}=3$$

$$\sqrt{2x-1}=x-2$$

$$\sqrt{x+4}+1=x$$

$$\sqrt{x^2-5x+6}=2$$

Bentuk-bentuk tersebut termasuk persamaan irasional karena variabel berada di dalam tanda akar.

  💡 **Ingat:** Ciri utama persamaan irasional adalah adanya variabel di dalam akar.

---

###### 2. Syarat Persamaan Irasional

Untuk akar pangkat dua, bagian dalam akar harus bernilai tidak negatif.

Jika terdapat bentuk:

$$\sqrt{f(x)}$$

maka harus berlaku:

$$f(x)\ge0$$

Contoh:

$$\sqrt{x-3}=5$$

Syarat akar:

$$x-3\ge0$$

$$x\ge3$$

Jadi, sebelum menyelesaikan persamaan, kita harus memastikan nilai $x$ memenuhi syarat domain.

  ⚠️ **Perhatian:** Jangan langsung menguadratkan tanpa memperhatikan syarat akar.

---

###### 3. Langkah Umum Menyelesaikan Persamaan Irasional

Langkah-langkah menyelesaikan persamaan irasional adalah sebagai berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan syarat bagian dalam akar tidak negatif. |
| 2 | Jika perlu, isolasi bentuk akar pada salah satu ruas. |
| 3 | Kuadratkan kedua ruas. |
| 4 | Selesaikan persamaan yang diperoleh. |
| 5 | Periksa setiap calon solusi ke persamaan awal. |
| 6 | Tulis solusi yang valid. |

  💡 **Strategi:** Jika ada satu bentuk akar, usahakan bentuk akar itu berdiri sendiri sebelum dikuadratkan.

---

###### 4. Contoh Persamaan Irasional Sederhana

Tentukan penyelesaian dari:

$$\sqrt{x+1}=3$$

Syarat akar:

$$x+1\ge0$$

$$x\ge -1$$

Kuadratkan kedua ruas:

$$(\sqrt{x+1})^2=3^2$$

$$x+1=9$$

$$x=8$$

Cek ke persamaan awal:

$$\sqrt{8+1}=\sqrt9=3$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=8$$

---

###### 5. Persamaan Irasional dengan Koefisien Linear

Tentukan penyelesaian dari:

$$\sqrt{2x-1}=5$$

Syarat akar:

$$2x-1\ge0$$

$$2x\ge1$$

$$x\ge\frac12$$

Kuadratkan kedua ruas:

$$2x-1=25$$

$$2x=26$$

$$x=13$$

Cek:

$$\sqrt{2(13)-1}=\sqrt{25}=5$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=13$$

---

###### 6. Persamaan Irasional dengan Akar Perlu Diisolasi

Tentukan penyelesaian dari:

$$\sqrt{x+4}+2=5$$

Isolasi bentuk akar terlebih dahulu.

$$\sqrt{x+4}=5-2$$

$$\sqrt{x+4}=3$$

Syarat akar:

$$x+4\ge0$$

$$x\ge -4$$

Kuadratkan kedua ruas:

$$x+4=9$$

$$x=5$$

Cek:

$$\sqrt{5+4}+2=\sqrt9+2=3+2=5$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=5$$

  📌 **Catatan:** Jangan menguadratkan sebelum bentuk akar diisolasi, agar perhitungan lebih sederhana.

---

###### 7. Persamaan Irasional dengan Ruas Kanan Mengandung Variabel

Tentukan penyelesaian dari:

$$\sqrt{x+6}=x$$

Syarat akar:

$$x+6\ge0$$

$$x\ge -6$$

Selain itu, karena $\sqrt{x+6}$ selalu tidak negatif, maka ruas kanan juga harus tidak negatif.

$$x\ge0$$

Gabungan syarat:

$$x\ge0$$

Kuadratkan kedua ruas:

$$x+6=x^2$$

Pindahkan semua suku ke satu ruas.

$$x^2-x-6=0$$

Faktorkan:

$$(x-3)(x+2)=0$$

Maka:

$$x=3 \quad \text{atau} \quad x=-2$$

Cek syarat $x\ge0$.

- $x=3$ memenuhi.
- $x=-2$ tidak memenuhi.

Cek ke persamaan awal:

$$\sqrt{3+6}=3$$

$$\sqrt9=3$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=3$$

  ⚠️ **Perhatian:** Jika ruas kanan sama dengan bentuk akar, ruas kanan harus bernilai tidak negatif.

---

###### 8. Solusi Palsu pada Persamaan Irasional

Perhatikan persamaan:

$$\sqrt{x+6}=x-2$$

Syarat akar:

$$x+6\ge0$$

$$x\ge -6$$

Karena ruas kiri berupa akar dan selalu tidak negatif, maka ruas kanan juga harus tidak negatif.

$$x-2\ge0$$

$$x\ge2$$

Kuadratkan kedua ruas:

$$x+6=(x-2)^2$$

$$x+6=x^2-4x+4$$

Pindahkan semua suku ke satu ruas.

$$0=x^2-5x-2$$

Gunakan rumus umum:

$$x=\frac{5\pm\sqrt{25+8}}{2}$$

$$x=\frac{5\pm\sqrt{33}}{2}$$

Calon solusi:

$$x_1=\frac{5-\sqrt{33}}{2}$$

$$x_2=\frac{5+\sqrt{33}}{2}$$

Periksa syarat $x\ge2$.

Karena:

$$\frac{5-\sqrt{33}}{2}<2$$

maka $x_1$ ditolak.

Sedangkan:

$$\frac{5+\sqrt{33}}{2}>2$$

maka $x_2$ dapat diperiksa ke persamaan awal dan diterima.

Jadi, penyelesaiannya adalah:

$$x=\frac{5+\sqrt{33}}{2}$$

  📌 **Catatan:** Solusi yang muncul setelah dikuadratkan belum tentu memenuhi persamaan awal.

---

###### 9. Persamaan Irasional dengan Bentuk Linear di Luar Akar

Tentukan penyelesaian dari:

$$\sqrt{3x+4}=x+2$$

Syarat akar:

$$3x+4\ge0$$

$$x\ge-\frac43$$

Karena ruas kiri tidak negatif, maka ruas kanan juga harus tidak negatif.

$$x+2\ge0$$

$$x\ge-2$$

Gabungan syarat:

$$x\ge-\frac43$$

Kuadratkan kedua ruas:

$$3x+4=(x+2)^2$$

$$3x+4=x^2+4x+4$$

Pindahkan semua suku ke satu ruas.

$$0=x^2+x$$

$$x(x+1)=0$$

Maka:

$$x=0 \quad \text{atau} \quad x=-1$$

Cek syarat:

Keduanya memenuhi $x\ge-\frac43$.

Cek ke persamaan awal.

Untuk $x=0$:

$$\sqrt{3(0)+4}=0+2$$

$$\sqrt4=2$$

Benar.

Untuk $x=-1$:

$$\sqrt{3(-1)+4}=-1+2$$

$$\sqrt1=1$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=-1 \quad \text{atau} \quad x=0$$

---

###### 10. Persamaan Irasional dengan Dua Bentuk Akar

Tentukan penyelesaian dari:

$$\sqrt{x+5}=\sqrt{2x-1}$$

Syarat:

$$x+5\ge0 \Rightarrow x\ge -5$$

$$2x-1\ge0 \Rightarrow x\ge\frac12$$

Gabungan syarat:

$$x\ge\frac12$$

Kuadratkan kedua ruas:

$$x+5=2x-1$$

$$6=x$$

Jadi:

$$x=6$$

Cek:

$$\sqrt{6+5}=\sqrt{11}$$

$$\sqrt{2(6)-1}=\sqrt{11}$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=6$$

---

###### 11. Persamaan Irasional yang Tidak Memiliki Penyelesaian

Tentukan penyelesaian dari:

$$\sqrt{x+1}=-3$$

Perhatikan bahwa:

$$\sqrt{x+1}\ge0$$

untuk setiap nilai $x$ yang memenuhi domain.

Namun, ruas kanan adalah:

$$-3<0$$

Tidak mungkin nilai akar pangkat dua sama dengan bilangan negatif.

Jadi, persamaan tersebut tidak memiliki penyelesaian.

$$\varnothing$$

  ⚠️ **Perhatian:** Akar pangkat dua utama selalu bernilai tidak negatif.

---

###### 12. Persamaan Irasional dengan Akar Kuadrat di Dalam

Tentukan penyelesaian dari:

$$\sqrt{x^2-5x+6}=0$$

Agar akar bernilai nol, bagian dalam akar harus nol.

$$x^2-5x+6=0$$

Faktorkan:

$$(x-2)(x-3)=0$$

Maka:

$$x=2 \quad \text{atau} \quad x=3$$

Cek:

Untuk $x=2$:

$$\sqrt{2^2-5(2)+6}=\sqrt{4-10+6}=\sqrt0=0$$

Untuk $x=3$:

$$\sqrt{3^2-5(3)+6}=\sqrt{9-15+6}=\sqrt0=0$$

Keduanya benar.

Jadi, penyelesaiannya adalah:

$$x=2 \quad \text{atau} \quad x=3$$

---

###### 13. Mengapa Harus Dicek Ulang?

Proses menguadratkan kedua ruas dapat mengubah persamaan.

Contoh:

Jika:

$$a=b$$

maka tentu:

$$a^2=b^2$$

Namun, jika:

$$a^2=b^2$$

belum tentu:

$$a=b$$

Karena bisa saja:

$$a=-b$$

Contoh:

$$(-3)^2=3^2$$

tetapi:

$$-3\ne3$$

Karena itu, hasil dari proses menguadratkan harus diperiksa ke persamaan awal.

  📌 **Catatan:** Pemeriksaan solusi bukan langkah tambahan, tetapi bagian wajib dalam persamaan irasional.

---

###### 14. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tidak menentukan syarat akar | $\sqrt{x-3}=5$ langsung dikuadratkan. | Tulis dulu syarat $x-3\ge0$. |
| Tidak mengisolasi akar | $\sqrt{x+4}+2=5$ langsung ditulis $x+4+4=25$. | Isolasi dulu menjadi $\sqrt{x+4}=3$. |
| Tidak memeriksa solusi | Semua akar persamaan kuadrat hasil kuadrat langsung diterima. | Cek semua calon solusi ke persamaan awal. |
| Menganggap akar bisa bernilai negatif | $\sqrt{x+1}=-3$ dianggap punya solusi. | Akar pangkat dua utama selalu tidak negatif. |
| Lupa syarat ruas kanan tidak negatif | $\sqrt{x+6}=x-2$ tidak diberi syarat $x-2\ge0$. | Karena ruas kiri akar, ruas kanan harus $\ge0$. |

  ⚠️ **Perhatian:** Kesalahan paling sering pada persamaan irasional adalah menerima solusi palsu.

---

###### 15. Rangkuman

- Persamaan irasional adalah persamaan yang memuat variabel di dalam tanda akar.
- Untuk akar pangkat dua, bagian dalam akar harus tidak negatif.
- Langkah umum:
  1. tentukan syarat akar,
  2. isolasi bentuk akar,
  3. kuadratkan kedua ruas,
  4. selesaikan persamaan,
  5. cek solusi ke persamaan awal.
- Akar pangkat dua utama selalu bernilai tidak negatif.
- Jika bentuknya $\sqrt{f(x)}=g(x)$, maka harus diperhatikan:
  $$f(x)\ge0$$
  dan
  $$g(x)\ge0$$
- Proses menguadratkan dapat menghasilkan solusi palsu.
- Solusi akhir harus memenuhi syarat dan persamaan awal.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan penyelesaian dari persamaan berikut.
$$\sqrt{x+1}=4$$

💡 Pembahasan

Syarat akar:

$$x+1\ge0$$

$$x\ge-1$$

Kuadratkan kedua ruas.

$$x+1=16$$

$$x=15$$

Cek:

$$\sqrt{15+1}=\sqrt{16}=4$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=15$$

  Contoh Soal 2

Tentukan penyelesaian dari persamaan berikut.
$$\sqrt{x+6}=x$$

💡 Pembahasan

Syarat akar:

$$x+6\ge0$$

$$x\ge-6$$

Karena ruas kiri akar, ruas kanan harus tidak negatif.

$$x\ge0$$

Kuadratkan kedua ruas.

$$x+6=x^2$$

$$x^2-x-6=0$$

$$(x-3)(x+2)=0$$

Maka:

$$x=3 \quad \text{atau} \quad x=-2$$

Cek syarat $x\ge0$.

Nilai $x=-2$ ditolak.

Cek $x=3$:

$$\sqrt{3+6}=\sqrt9=3$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=3$$

  Contoh Soal 3

Tentukan penyelesaian dari persamaan berikut.
$$\sqrt{3x+4}=x+2$$

💡 Pembahasan

Syarat akar:

$$3x+4\ge0$$

$$x\ge-\frac43$$

Karena ruas kiri akar, ruas kanan harus tidak negatif.

$$x+2\ge0$$

$$x\ge-2$$

Gabungan syarat:

$$x\ge-\frac43$$

Kuadratkan kedua ruas.

$$3x+4=(x+2)^2$$

$$3x+4=x^2+4x+4$$

$$0=x^2+x$$

$$x(x+1)=0$$

Maka:

$$x=0 \quad \text{atau} \quad x=-1$$

Cek ke persamaan awal.

Untuk $x=0$:

$$\sqrt{3(0)+4}=0+2$$

$$2=2$$

Benar.

Untuk $x=-1$:

$$\sqrt{3(-1)+4}=-1+2$$

$$1=1$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=-1 \quad \text{atau} \quad x=0$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Persamaan berikut yang termasuk persamaan irasional adalah ....

A
$x^2-5x+6=0$

B
$\sqrt{x+2}=5$

C
$\frac{x+1}{x-2}=3$

D
$2x+1=0$

E
$x^3-1=0$

💡 Pembahasan

Persamaan irasional memuat variabel di dalam tanda akar.

Bentuk $\sqrt{x+2}=5$ termasuk persamaan irasional.

  Latihan Soal 2

Syarat akar dari persamaan $\sqrt{x-4}=3$ adalah ....

A
$x\ge4$

B
$x\le4$

C
$x>4$

D
$x<4$

E
$x\ne4$

💡 Pembahasan

Bagian dalam akar harus tidak negatif.

$$x-4\ge0$$

$$x\ge4$$

  Latihan Soal 3

Penyelesaian dari $\sqrt{x+1}=4$ adalah ....

A
$x=4$

B
$x=15$

C
$x=16$

D
$x=-15$

E
$x=-1$

💡 Pembahasan

Kuadratkan kedua ruas.

$$\sqrt{x+1}=4$$

$$x+1=16$$

$$x=15$$

Cek:

$$\sqrt{15+1}=4$$

Benar.

  Latihan Soal 4

Penyelesaian dari $\sqrt{2x-1}=5$ adalah ....

A
$x=5$

B
$x=12$

C
$x=13$

D
$x=25$

E
$x=-13$

💡 Pembahasan

Kuadratkan kedua ruas.

$$2x-1=25$$

$$2x=26$$

$$x=13$$

  Latihan Soal 5

Penyelesaian dari $\sqrt{x+4}+2=5$ adalah ....

A
$x=5$

B
$x=9$

C
$x=3$

D
$x=-4$

E
$x=25$

💡 Pembahasan

Isolasi akar terlebih dahulu.

$$\sqrt{x+4}+2=5$$

$$\sqrt{x+4}=3$$

$$x+4=9$$

$$x=5$$

  Latihan Soal 6

Penyelesaian dari $\sqrt{x+6}=x$ adalah ....

A
$x=3$

B
$x=-2$

C
$x=3$ atau $x=-2$

D
$x=6$

E
tidak ada penyelesaian

💡 Pembahasan

Karena ruas kanan sama dengan akar, harus $x\ge0$.

Kuadratkan:

$$x+6=x^2$$

$$x^2-x-6=0$$

$$(x-3)(x+2)=0$$

Maka $x=3$ atau $x=-2$.

Karena $x=-2$ tidak memenuhi $x\ge0$, maka yang diterima hanya $x=3$.

  Latihan Soal 7

Persamaan $\sqrt{x+1}=-3$ memiliki penyelesaian ....

A
$x=8$

B
$x=-8$

C
tidak ada penyelesaian

D
$x=-1$

E
semua bilangan real

💡 Pembahasan

Akar pangkat dua utama selalu bernilai tidak negatif.

Karena ruas kanan $-3$ bernilai negatif, persamaan tidak memiliki penyelesaian.

  Latihan Soal 8

Penyelesaian dari $\sqrt{x+5}=\sqrt{2x-1}$ adalah ....

A
$x=1$

B
$x=5$

C
$x=6$

D
$x=-6$

E
tidak ada penyelesaian

💡 Pembahasan

Kuadratkan kedua ruas.

$$x+5=2x-1$$

$$x=6$$

Cek:

$$\sqrt{6+5}=\sqrt{11}$$

$$\sqrt{2(6)-1}=\sqrt{11}$$

Benar.

  Latihan Soal 9

Penyelesaian dari $\sqrt{x^2-5x+6}=0$ adalah ....

A
$x=0$ saja

B
$x=5$ saja

C
$x=2$ atau $x=3$

D
$x=-2$ atau $x=-3$

E
tidak ada penyelesaian

💡 Pembahasan

Agar akar bernilai nol, bagian dalam akar harus nol.

$$x^2-5x+6=0$$

$$(x-2)(x-3)=0$$

Maka:

$$x=2 \quad \text{atau} \quad x=3$$

  Latihan Soal 10

Hal yang wajib dilakukan setelah menguadratkan kedua ruas pada persamaan irasional adalah ....

A
menghapus semua syarat akar

B
memeriksa solusi ke persamaan awal

C
mengubah akar menjadi pecahan

D
mengganti tanda sama dengan menjadi pertidaksamaan

E
menolak semua solusi

💡 Pembahasan

Menguadratkan kedua ruas dapat menghasilkan solusi palsu. Karena itu, setiap calon solusi harus diperiksa kembali ke persamaan awal.

#### Pemeriksaan Akar pada Persamaan Irasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pemeriksaan-akar-pada-persamaan-irasional*

Pada materi sebelumnya, kita telah mempelajari persamaan irasional. Salah satu hal paling penting dalam persamaan irasional adalah **memeriksa kembali calon solusi**.

Mengapa harus diperiksa? Karena proses menguadratkan kedua ruas dapat menghasilkan nilai yang tampak benar dalam perhitungan, tetapi ternyata tidak memenuhi persamaan awal.

  📌 **Catatan:** Pada persamaan irasional, setiap calon solusi harus dicek kembali ke persamaan semula.

---

###### 1. Mengingat Kembali Persamaan Irasional

Persamaan irasional adalah persamaan yang memuat variabel di dalam tanda akar.

Contoh:

$$\sqrt{x+3}=5$$

$$\sqrt{x+6}=x$$

$$\sqrt{2x-1}=x-3$$

$$\sqrt{x+4}+1=x$$

Dalam menyelesaikan persamaan irasional, kita sering menguadratkan kedua ruas agar tanda akar hilang.

Namun, hasil setelah dikuadratkan belum tentu semuanya benar.

  💡 **Ingat:** Menguadratkan kedua ruas dapat memunculkan calon solusi yang tidak memenuhi persamaan awal.

---

###### 2. Mengapa Pemeriksaan Akar Diperlukan?

Jika:

$$a=b$$

maka pasti:

$$a^2=b^2$$

Namun, jika:

$$a^2=b^2$$

belum tentu:

$$a=b$$

Contoh:

$$(-3)^2=3^2$$

karena:

$$9=9$$

Tetapi:

$$-3\ne3$$

Artinya, dari persamaan kuadrat yang diperoleh setelah menguadratkan, bisa muncul nilai yang sebenarnya tidak memenuhi persamaan awal.

  ⚠️ **Perhatian:** Pemeriksaan akar bukan pilihan, tetapi langkah wajib dalam persamaan irasional.

---

###### 3. Solusi Valid dan Solusi Palsu

Dalam persamaan irasional, hasil perhitungan dapat berupa:

| Jenis Solusi | Arti |
| --- | --- |
| Solusi valid | Nilai yang memenuhi syarat akar dan benar jika disubstitusikan ke persamaan awal. |
| Solusi palsu | Nilai yang muncul dari proses perhitungan, tetapi tidak memenuhi persamaan awal. |

Contoh solusi palsu sering muncul pada persamaan seperti:

$$\sqrt{x+6}=x-2$$

Karena ruas kanan harus tidak negatif, maka harus berlaku:

$$x-2\ge0$$

atau:

$$x\ge2$$

Jika hasil perhitungan menghasilkan nilai kurang dari $2$, nilai tersebut harus ditolak.

---

###### 4. Dua Pemeriksaan Utama

Ada dua pemeriksaan utama dalam persamaan irasional.

| Pemeriksaan | Tujuan |
| --- | --- |
| Syarat akar | Memastikan bagian dalam akar tidak negatif. |
| Substitusi ke persamaan awal | Memastikan calon solusi benar-benar memenuhi persamaan semula. |

Jika bentuknya:

$$\sqrt{f(x)}=g(x)$$

maka syarat yang perlu diperhatikan adalah:

$$f(x)\ge0$$

dan

$$g(x)\ge0$$

Syarat $g(x)\ge0$ muncul karena nilai akar pangkat dua utama selalu tidak negatif.

  📌 **Catatan:** Jika ruas kanan dari bentuk akar bernilai negatif, persamaan tidak mungkin benar.

---

###### 5. Contoh Tanpa Solusi Palsu

Tentukan penyelesaian dari:

$$\sqrt{x+1}=4$$

Syarat akar:

$$x+1\ge0$$

$$x\ge -1$$

Kuadratkan kedua ruas.

$$x+1=16$$

$$x=15$$

Cek ke persamaan awal:

$$\sqrt{15+1}=4$$

$$\sqrt{16}=4$$

$$4=4$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=15$$

Pada contoh ini, calon solusi yang diperoleh valid.

---

###### 6. Contoh dengan Solusi Palsu

Tentukan penyelesaian dari:

$$\sqrt{x+6}=x-2$$

Syarat akar:

$$x+6\ge0$$

$$x\ge -6$$

Karena ruas kiri adalah akar, maka ruas kanan harus tidak negatif.

$$x-2\ge0$$

$$x\ge2$$

Kuadratkan kedua ruas.

$$x+6=(x-2)^2$$

$$x+6=x^2-4x+4$$

Pindahkan semua suku ke satu ruas.

$$0=x^2-5x-2$$

Gunakan rumus umum.

$$x=\frac{5\pm\sqrt{(-5)^2-4(1)(-2)}}{2}$$

$$x=\frac{5\pm\sqrt{25+8}}{2}$$

$$x=\frac{5\pm\sqrt{33}}{2}$$

Calon solusi:

$$x_1=\frac{5-\sqrt{33}}{2}$$

dan

$$x_2=\frac{5+\sqrt{33}}{2}$$

Periksa syarat $x\ge2$.

Karena:

$$\frac{5-\sqrt{33}}{2}<2$$

maka:

$$x_1=\frac{5-\sqrt{33}}{2}$$

ditolak.

Nilai:

$$x_2=\frac{5+\sqrt{33}}{2}$$

memenuhi syarat $x\ge2$.

Cek ke persamaan awal.

Untuk:

$$x=\frac{5+\sqrt{33}}{2}$$

nilai ruas kanan $x-2$ bernilai tidak negatif, sehingga solusi ini diterima.

Jadi, penyelesaiannya adalah:

$$x=\frac{5+\sqrt{33}}{2}$$

  ⚠️ **Perhatian:** Calon solusi yang tidak memenuhi syarat ruas kanan harus ditolak.

---

###### 7. Pemeriksaan dengan Substitusi Langsung

Tentukan penyelesaian dari:

$$\sqrt{x+5}=x-1$$

Syarat akar:

$$x+5\ge0$$

$$x\ge -5$$

Karena ruas kanan harus tidak negatif:

$$x-1\ge0$$

$$x\ge1$$

Kuadratkan kedua ruas.

$$x+5=(x-1)^2$$

$$x+5=x^2-2x+1$$

Pindahkan semua suku ke satu ruas.

$$0=x^2-3x-4$$

Faktorkan:

$$(x-4)(x+1)=0$$

Maka:

$$x=4 \quad \text{atau} \quad x=-1$$

Periksa syarat $x\ge1$.

- $x=4$ memenuhi syarat.
- $x=-1$ tidak memenuhi syarat.

Cek ke persamaan awal.

Untuk $x=4$:

$$\sqrt{4+5}=4-1$$

$$\sqrt9=3$$

$$3=3$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=4$$

Nilai $x=-1$ adalah solusi palsu karena tidak memenuhi persamaan awal.

---

###### 8. Contoh Solusi Palsu yang Tampak Meyakinkan

Tentukan penyelesaian dari:

$$\sqrt{x+2}=x-4$$

Syarat akar:

$$x+2\ge0$$

$$x\ge -2$$

Karena ruas kanan harus tidak negatif:

$$x-4\ge0$$

$$x\ge4$$

Kuadratkan kedua ruas.

$$x+2=(x-4)^2$$

$$x+2=x^2-8x+16$$

Pindahkan semua suku ke satu ruas.

$$0=x^2-9x+14$$

Faktorkan:

$$(x-7)(x-2)=0$$

Maka:

$$x=7 \quad \text{atau} \quad x=2$$

Periksa syarat $x\ge4$.

- $x=7$ memenuhi.
- $x=2$ tidak memenuhi.

Cek ke persamaan awal.

Untuk $x=7$:

$$\sqrt{7+2}=7-4$$

$$\sqrt9=3$$

$$3=3$$

Benar.

Untuk $x=2$:

$$\sqrt{2+2}=2-4$$

$$\sqrt4=-2$$

$$2=-2$$

Salah.

Jadi, penyelesaian yang benar adalah:

$$x=7$$

  📌 **Catatan:** Nilai $x=2$ muncul dari hasil kuadrat, tetapi tidak memenuhi persamaan awal.

---

###### 9. Pemeriksaan pada Persamaan dengan Dua Akar

Tentukan penyelesaian dari:

$$\sqrt{x+4}=\sqrt{2x-1}$$

Syarat akar pertama:

$$x+4\ge0$$

$$x\ge -4$$

Syarat akar kedua:

$$2x-1\ge0$$

$$x\ge\frac12$$

Gabungan syarat:

$$x\ge\frac12$$

Kuadratkan kedua ruas.

$$x+4=2x-1$$

$$x=5$$

Cek ke persamaan awal:

$$\sqrt{5+4}=\sqrt{2(5)-1}$$

$$\sqrt9=\sqrt9$$

$$3=3$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=5$$

Pada persamaan dengan dua akar, tetap harus dicek karena setiap akar memiliki syarat domain masing-masing.

---

###### 10. Pemeriksaan pada Persamaan Akar dengan Bentuk Kuadrat

Tentukan penyelesaian dari:

$$\sqrt{x^2-4x+4}=x-2$$

Perhatikan bahwa:

$$x^2-4x+4=(x-2)^2$$

Maka persamaan menjadi:

$$\sqrt{(x-2)^2}=x-2$$

Karena:

$$\sqrt{(x-2)^2}=|x-2|$$

maka:

$$|x-2|=x-2$$

Persamaan ini benar jika:

$$x-2\ge0$$

$$x\ge2$$

Jadi, penyelesaiannya adalah:

$$x\ge2$$

  ⚠️ **Perhatian:** Jangan langsung menulis $\sqrt{(x-2)^2}=x-2$ untuk semua $x$. Yang benar adalah $\sqrt{(x-2)^2}=|x-2|$.

---

###### 11. Contoh yang Tidak Memiliki Penyelesaian

Tentukan penyelesaian dari:

$$\sqrt{x+3}=x-5$$

Syarat akar:

$$x+3\ge0$$

$$x\ge -3$$

Karena ruas kanan harus tidak negatif:

$$x-5\ge0$$

$$x\ge5$$

Kuadratkan kedua ruas.

$$x+3=(x-5)^2$$

$$x+3=x^2-10x+25$$

Pindahkan semua suku ke satu ruas.

$$0=x^2-11x+22$$

Gunakan rumus umum.

$$x=\frac{11\pm\sqrt{121-88}}{2}$$

$$x=\frac{11\pm\sqrt{33}}{2}$$

Calon solusi:

$$x_1=\frac{11-\sqrt{33}}{2}$$

dan

$$x_2=\frac{11+\sqrt{33}}{2}$$

Keduanya perlu dicek ke persamaan awal.

Perkiraan nilai:

$$\frac{11-\sqrt{33}}{2}\approx2{,}63$$

Nilai ini tidak memenuhi syarat $x\ge5$, sehingga ditolak.

Nilai:

$$\frac{11+\sqrt{33}}{2}\approx8{,}37$$

memenuhi syarat $x\ge5$.

Cek nilai kedua ke persamaan awal.

Untuk:

$$x=\frac{11+\sqrt{33}}{2}$$

ruas kanan $x-5$ bernilai positif, sehingga calon ini valid.

Jadi, penyelesaiannya adalah:

$$x=\frac{11+\sqrt{33}}{2}$$

  📌 **Catatan:** Kadang soal tampak tidak memiliki penyelesaian, tetapi setelah dicek ternyata ada satu solusi valid.

---

###### 12. Contoh Benar-benar Tidak Memiliki Penyelesaian

Tentukan penyelesaian dari:

$$\sqrt{x+4}=x-10$$

Syarat akar:

$$x+4\ge0$$

$$x\ge -4$$

Karena ruas kanan harus tidak negatif:

$$x-10\ge0$$

$$x\ge10$$

Kuadratkan kedua ruas.

$$x+4=(x-10)^2$$

$$x+4=x^2-20x+100$$

Pindahkan semua suku ke satu ruas.

$$0=x^2-21x+96$$

Faktorkan:

$$(x-16)(x-6)=0$$

Maka:

$$x=16 \quad \text{atau} \quad x=6$$

Periksa syarat $x\ge10$.

- $x=16$ memenuhi.
- $x=6$ tidak memenuhi.

Cek $x=16$:

$$\sqrt{16+4}=16-10$$

$$\sqrt{20}=6$$

Pernyataan ini salah karena $\sqrt{20}\ne6$.

Jadi, tidak ada solusi yang valid.

$$\varnothing$$

  ⚠️ **Perhatian:** Memenuhi syarat belum tentu pasti benar. Calon solusi tetap harus dicek ke persamaan awal.

---

###### 13. Cara Cepat Memeriksa Calon Solusi

Untuk memeriksa calon solusi, lakukan langkah berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Substitusikan calon nilai $x$ ke persamaan awal. |
| 2 | Hitung ruas kiri. |
| 3 | Hitung ruas kanan. |
| 4 | Jika ruas kiri sama dengan ruas kanan, solusi diterima. |
| 5 | Jika ruas kiri tidak sama dengan ruas kanan, solusi ditolak. |

Contoh:

Calon solusi $x=2$ untuk persamaan:

$$\sqrt{x+2}=x-4$$

Cek:

Ruas kiri:

$$\sqrt{2+2}=\sqrt4=2$$

Ruas kanan:

$$2-4=-2$$

Karena:

$$2\ne -2$$

maka $x=2$ ditolak.

---

###### 14. Pemeriksaan dengan Syarat Ruas Kanan

Untuk bentuk:

$$\sqrt{f(x)}=g(x)$$

selain syarat:

$$f(x)\ge0$$

harus juga berlaku:

$$g(x)\ge0$$

Contoh:

$$\sqrt{x+2}=x-4$$

Syarat ruas kanan:

$$x-4\ge0$$

$$x\ge4$$

Jadi, calon solusi yang kurang dari $4$ pasti ditolak.

Ini dapat mempercepat pemeriksaan sebelum substitusi langsung.

  💡 **Strategi:** Periksa syarat ruas kanan terlebih dahulu. Jika tidak memenuhi, calon solusi langsung ditolak.

---

###### 15. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tidak memeriksa solusi | $x=7$ dan $x=2$ diterima semua pada $\sqrt{x+2}=x-4$. | Cek ke persamaan awal. Hanya $x=7$ yang benar. |
| Mengabaikan syarat ruas kanan | Pada $\sqrt{x+5}=x-1$, nilai $x=-1$ diterima. | Ruas kanan $x-1$ harus tidak negatif, sehingga $x\ge1$. |
| Menganggap $\sqrt{(x-2)^2}=x-2$ untuk semua $x$ | $\sqrt{x^2-4x+4}=x-2$ dianggap benar untuk semua real. | Gunakan $\sqrt{(x-2)^2}=\|x-2\|$. |
| Hanya mengecek syarat, tidak mengecek persamaan awal | Calon solusi diterima karena memenuhi domain saja. | Solusi harus memenuhi domain dan persamaan awal. |
| Tidak membedakan calon solusi dan solusi akhir | Semua hasil faktorisasi langsung ditulis sebagai jawaban. | Sebut sebagai calon solusi, lalu periksa satu per satu. |

  ⚠️ **Perhatian:** Jawaban akhir persamaan irasional hanya berisi solusi yang sudah lolos pemeriksaan.

---

###### 16. Rangkuman

- Pemeriksaan akar sangat penting dalam persamaan irasional.
- Menguadratkan kedua ruas dapat menghasilkan solusi palsu.
- Solusi valid harus memenuhi syarat akar dan persamaan awal.
- Jika bentuknya $\sqrt{f(x)}=g(x)$, maka harus berlaku:
  $$f(x)\ge0$$
  dan
  $$g(x)\ge0$$
- Akar pangkat dua utama selalu bernilai tidak negatif.
- Calon solusi harus disubstitusikan kembali ke persamaan awal.
- Jangan langsung menerima semua hasil faktorisasi atau rumus kuadrat.
- Untuk bentuk $\sqrt{(x-a)^2}$, gunakan:
  $$\sqrt{(x-a)^2}=|x-a|$$

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan penyelesaian dari persamaan berikut.
$$\sqrt{x+2}=x-4$$

💡 Pembahasan

Syarat akar:

$$x+2\ge0$$

$$x\ge-2$$

Karena ruas kiri adalah akar, maka ruas kanan harus tidak negatif.

$$x-4\ge0$$

$$x\ge4$$

Kuadratkan kedua ruas.

$$x+2=(x-4)^2$$

$$x+2=x^2-8x+16$$

$$0=x^2-9x+14$$

$$(x-7)(x-2)=0$$

Maka calon solusi:

$$x=7 \quad \text{atau} \quad x=2$$

Periksa syarat $x\ge4$.

Nilai $x=2$ ditolak.

Cek $x=7$ ke persamaan awal:

$$\sqrt{7+2}=7-4$$

$$3=3$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=7$$

  Contoh Soal 2

Tentukan penyelesaian dari persamaan berikut.
$$\sqrt{x+5}=x-1$$

💡 Pembahasan

Syarat akar:

$$x+5\ge0$$

$$x\ge-5$$

Karena ruas kanan harus tidak negatif:

$$x-1\ge0$$

$$x\ge1$$

Kuadratkan kedua ruas.

$$x+5=(x-1)^2$$

$$x+5=x^2-2x+1$$

$$0=x^2-3x-4$$

$$(x-4)(x+1)=0$$

Maka:

$$x=4 \quad \text{atau} \quad x=-1$$

Periksa syarat $x\ge1$.

Nilai $x=-1$ ditolak.

Cek $x=4$:

$$\sqrt{4+5}=4-1$$

$$3=3$$

Benar.

Jadi, penyelesaiannya adalah:

$$x=4$$

  Contoh Soal 3

Tentukan himpunan penyelesaian dari persamaan berikut.
$$\sqrt{x^2-4x+4}=x-2$$

💡 Pembahasan

Perhatikan bagian dalam akar.

$$x^2-4x+4=(x-2)^2$$

Maka:

$$\sqrt{x^2-4x+4}=\sqrt{(x-2)^2}=|x-2|$$

Persamaan menjadi:

$$|x-2|=x-2$$

Bentuk $|x-2|=x-2$ benar jika:

$$x-2\ge0$$

$$x\ge2$$

Jadi, himpunan penyelesaiannya adalah:

$$x\ge2$$

Dalam notasi interval:

$$[2,\infty)$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Alasan utama solusi persamaan irasional harus diperiksa kembali adalah ....

A
karena semua persamaan irasional tidak memiliki solusi

B
karena proses menguadratkan dapat menghasilkan solusi palsu

C
karena bentuk akar selalu negatif

D
karena variabel tidak boleh bernilai positif

E
karena hasil akar selalu nol

💡 Pembahasan

Proses menguadratkan kedua ruas dapat menghasilkan nilai yang tidak memenuhi persamaan awal. Karena itu, solusi harus dicek kembali.

  Latihan Soal 2

Pada persamaan $\sqrt{x+2}=x-4$, syarat ruas kanan adalah ....

A
$x\ge4$

B
$x\le4$

C
$x>2$

D
$x\ne4$

E
$x\ge-2$

💡 Pembahasan

Karena ruas kiri berupa akar pangkat dua, nilainya selalu tidak negatif.

Maka ruas kanan juga harus tidak negatif.

$$x-4\ge0$$

$$x\ge4$$

  Latihan Soal 3

Penyelesaian dari $\sqrt{x+2}=x-4$ adalah ....

A
$x=2$

B
$x=7$

C
$x=2$ atau $x=7$

D
$x=4$

E
tidak ada penyelesaian

💡 Pembahasan

Kuadratkan:

$$x+2=(x-4)^2$$

$$x+2=x^2-8x+16$$

$$0=x^2-9x+14$$

$$(x-7)(x-2)=0$$

Maka calon solusi $x=7$ atau $x=2$.

Karena syarat ruas kanan $x\ge4$, maka $x=2$ ditolak.

Cek $x=7$:

$$\sqrt{7+2}=7-4$$

$$3=3$$

Jadi, solusi yang benar adalah $x=7$.

  Latihan Soal 4

Pada persamaan $\sqrt{x+5}=x-1$, nilai $x=-1$ harus ditolak karena ....

A
membuat bagian dalam akar negatif

B
membuat ruas kanan negatif

C
membuat ruas kiri sama dengan nol

D
membuat akar tidak memiliki variabel

E
membuat kedua ruas sama

💡 Pembahasan

Untuk $x=-1$, ruas kanan menjadi:

$$x-1=-1-1=-2$$

Padahal ruas kiri berupa akar pangkat dua yang selalu tidak negatif.

Jadi, $x=-1$ ditolak.

  Latihan Soal 5

Penyelesaian dari $\sqrt{x+5}=x-1$ adalah ....

A
$x=-1$

B
$x=4$

C
$x=-1$ atau $x=4$

D
$x=1$

E
tidak ada penyelesaian

💡 Pembahasan

Kuadratkan:

$$x+5=(x-1)^2$$

$$x+5=x^2-2x+1$$

$$0=x^2-3x-4$$

$$(x-4)(x+1)=0$$

Maka $x=4$ atau $x=-1$.

Karena ruas kanan $x-1$ harus tidak negatif, maka $x\ge1$.

Jadi, hanya $x=4$ yang diterima.

  Latihan Soal 6

Nilai $x=2$ bukan solusi dari $\sqrt{x+2}=x-4$ karena ....

A
ruas kiri dan ruas kanan sama-sama bernilai $2$

B
ruas kiri bernilai $2$, sedangkan ruas kanan bernilai $-2$

C
bagian dalam akar bernilai negatif

D
nilai $x=2$ membuat persamaan menjadi $0=0$

E
nilai $x=2$ membuat akar tidak terdefinisi

💡 Pembahasan

Substitusi $x=2$ ke persamaan awal:

$$\sqrt{x+2}=x-4$$

Ruas kiri:

$$\sqrt{2+2}=\sqrt4=2$$

Ruas kanan:

$$2-4=-2$$

Karena $2\ne-2$, maka $x=2$ bukan solusi.

  Latihan Soal 7

Bentuk yang benar dari $\sqrt{(x-2)^2}$ adalah ....

A
$x-2$ untuk semua $x$

B
$|x-2|$

C
$x+2$

D
$-(x-2)$ untuk semua $x$

E
$x^2-4$

💡 Pembahasan

Akar pangkat dua utama selalu bernilai tidak negatif.

Maka:

$$\sqrt{(x-2)^2}=|x-2|$$

  Latihan Soal 8

Himpunan penyelesaian dari $\sqrt{x^2-4x+4}=x-2$ adalah ....

A
$x<2$

B
$x\ge2$

C
$x\le2$

D
semua bilangan real

E
tidak ada penyelesaian

💡 Pembahasan

Karena:

$$x^2-4x+4=(x-2)^2$$

maka:

$$\sqrt{x^2-4x+4}=|x-2|$$

Persamaan menjadi:

$$|x-2|=x-2$$

Hal ini benar jika:

$$x-2\ge0$$

$$x\ge2$$

  Latihan Soal 9

Calon solusi yang tidak memenuhi persamaan awal disebut ....

A
solusi utama

B
akar real

C
solusi palsu

D
domain fungsi

E
nilai mutlak

💡 Pembahasan

Calon solusi yang muncul dari proses perhitungan tetapi tidak memenuhi persamaan awal disebut solusi palsu.

  Latihan Soal 10

Pernyataan yang benar tentang pemeriksaan akar pada persamaan irasional adalah ....

A
semua calon solusi pasti diterima

B
pemeriksaan tidak perlu jika sudah dikuadratkan

C
calon solusi harus dicek ke persamaan awal

D
akar pangkat dua utama selalu negatif

E
ruas kanan tidak perlu diperhatikan

💡 Pembahasan

Setiap calon solusi persamaan irasional harus dicek kembali ke persamaan awal, karena proses menguadratkan dapat menghasilkan solusi palsu.

#### Pertidaksamaan Irasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pertidaksamaan-irasional*

Pada materi sebelumnya, kita telah mempelajari pemeriksaan akar pada persamaan irasional. Sekarang kita akan membahas **pertidaksamaan irasional**.

Pertidaksamaan irasional adalah pertidaksamaan yang memuat variabel di dalam tanda akar. Dalam menyelesaikannya, kita harus memperhatikan syarat akar dan kehati-hatian saat menguadratkan kedua ruas.

  📌 **Catatan:** Pertidaksamaan irasional harus diselesaikan dengan memperhatikan domain akar terlebih dahulu.

---

###### 1. Pengertian Pertidaksamaan Irasional

**Pertidaksamaan irasional** adalah pertidaksamaan yang memuat bentuk akar dengan variabel di dalamnya.

Contoh pertidaksamaan irasional:

$$\sqrt{x+2}>3$$

$$\sqrt{2x-1}\le5$$

$$\sqrt{x+4}<x$$

$$\sqrt{x^2-9}\ge2$$

Bentuk-bentuk tersebut disebut pertidaksamaan irasional karena variabel berada di dalam tanda akar dan dihubungkan dengan tanda pertidaksamaan.

  💡 **Ingat:** Ciri utama pertidaksamaan irasional adalah adanya variabel di dalam akar dan adanya tanda $>$, $<$, $\ge$, atau $\le$.

---

###### 2. Syarat Dasar Bentuk Akar

Untuk akar pangkat dua, bagian dalam akar harus bernilai tidak negatif.

Jika terdapat bentuk:

$$\sqrt{f(x)}$$

maka syaratnya adalah:

$$f(x)\ge0$$

Contoh:

$$\sqrt{x-5}$$

Syaratnya:

$$x-5\ge0$$

$$x\ge5$$

Jadi, sebelum menyelesaikan pertidaksamaan, kita harus menentukan domainnya terlebih dahulu.

  ⚠️ **Perhatian:** Jangan menguadratkan pertidaksamaan irasional sebelum menentukan syarat akar.

---

###### 3. Akar Pangkat Dua Selalu Tidak Negatif

Untuk setiap $x$ yang memenuhi domain, berlaku:

$$\sqrt{f(x)}\ge0$$

Artinya, hasil akar pangkat dua utama tidak pernah negatif.

Contoh:

$$\sqrt{x+2}< -1$$

Pertidaksamaan ini tidak memiliki penyelesaian karena ruas kiri selalu tidak negatif, sedangkan ruas kanan negatif.

Jadi:

$$\sqrt{x+2}< -1$$

tidak memiliki penyelesaian.

$$\varnothing$$

  📌 **Catatan:** Jika bentuk akar dibandingkan dengan bilangan negatif, perhatikan arah tanda pertidaksamaannya.

---

###### 4. Kapan Boleh Menguadratkan Kedua Ruas?

Menguadratkan kedua ruas pada pertidaksamaan harus dilakukan dengan hati-hati.

Jika kedua ruas bernilai tidak negatif, maka:

$$A<B \Rightarrow A^2<B^2$$

dan

$$A\le B \Rightarrow A^2\le B^2$$

untuk:

$$A\ge0,\quad B\ge0$$

Karena bentuk akar selalu tidak negatif, jika ruas kanan juga tidak negatif, penguadratan dapat dilakukan dengan aman.

Contoh:

$$\sqrt{x+1}\le4$$

Karena $4\ge0$, maka dapat dikuadratkan:

$$x+1\le16$$

Namun, tetap harus digabungkan dengan syarat akar:

$$x+1\ge0$$

  💡 **Strategi:** Pastikan kedua ruas tidak negatif sebelum menguadratkan pertidaksamaan.

---

###### 5. Pertidaksamaan Bentuk $\sqrt{f(x)}<a$

Untuk bentuk:

$$\sqrt{f(x)}<a$$

dengan $a$ bilangan real, perhatikan tiga kemungkinan.

| Kondisi $a$ | Kesimpulan |
| --- | --- |
| $a<0$ | Tidak ada penyelesaian, karena akar selalu $\ge0$. |
| $a=0$ | Tidak ada penyelesaian untuk tanda $<$, karena akar tidak mungkin negatif. |
| $a>0$ | Gunakan syarat $f(x)\ge0$ dan kuadratkan menjadi $f(x)<a^2$. |

Contoh:

$$\sqrt{x+2}<3$$

Syarat akar:

$$x+2\ge0$$

$$x\ge-2$$

Kuadratkan:

$$x+2<9$$

$$x<7$$

Gabungkan:

$$-2\le x<7$$

Jadi, penyelesaiannya adalah:

$$[-2,7)$$

---

###### 6. Pertidaksamaan Bentuk $\sqrt{f(x)}\le a$

Untuk bentuk:

$$\sqrt{f(x)}\le a$$

jika $a\ge0$, maka:

$$0\le f(x)\le a^2$$

Contoh:

Tentukan penyelesaian dari:

$$\sqrt{x-1}\le4$$

Syarat akar:

$$x-1\ge0$$

$$x\ge1$$

Kuadratkan:

$$x-1\le16$$

$$x\le17$$

Gabungkan:

$$1\le x\le17$$

Jadi, penyelesaiannya:

$$[1,17]$$

---

###### 7. Pertidaksamaan Bentuk $\sqrt{f(x)}>a$

Untuk bentuk:

$$\sqrt{f(x)}>a$$

ada beberapa kemungkinan.

| Kondisi $a$ | Kesimpulan |
| --- | --- |
| $a<0$ | Semua nilai dalam domain memenuhi, karena akar selalu $\ge0$ dan pasti lebih dari bilangan negatif tertentu. |
| $a=0$ | Perlu $f(x)>0$. |
| $a>0$ | Gunakan syarat $f(x)\ge0$ dan kuadratkan menjadi $f(x)>a^2$. |

Contoh:

$$\sqrt{x+3}>2$$

Syarat akar:

$$x+3\ge0$$

$$x\ge-3$$

Kuadratkan:

$$x+3>4$$

$$x>1$$

Karena $x>1$ sudah memenuhi $x\ge-3$, maka penyelesaiannya adalah:

$$x>1$$

---

###### 8. Pertidaksamaan Bentuk $\sqrt{f(x)}\ge a$

Untuk bentuk:

$$\sqrt{f(x)}\ge a$$

jika $a>0$, maka dapat dikuadratkan menjadi:

$$f(x)\ge a^2$$

dengan tetap memperhatikan domain.

Contoh:

$$\sqrt{2x-1}\ge3$$

Syarat akar:

$$2x-1\ge0$$

$$x\ge\frac12$$

Kuadratkan:

$$2x-1\ge9$$

$$2x\ge10$$

$$x\ge5$$

Karena $x\ge5$ sudah memenuhi domain $x\ge\frac12$, maka penyelesaiannya:

$$x\ge5$$

---

###### 9. Contoh Dasar Pertidaksamaan Irasional

Tentukan himpunan penyelesaian dari:

$$\sqrt{x+5}<4$$

Syarat akar:

$$x+5\ge0$$

$$x\ge-5$$

Karena ruas kanan $4$ positif, kuadratkan kedua ruas.

$$x+5<16$$

$$x<11$$

Gabungkan dengan syarat:

$$x\ge-5$$

dan

$$x<11$$

Jadi:

$$-5\le x<11$$

Dalam notasi interval:

$$[-5,11)$$

---

###### 10. Pertidaksamaan dengan Tanda $\le$

Tentukan himpunan penyelesaian dari:

$$\sqrt{3x-6}\le6$$

Syarat akar:

$$3x-6\ge0$$

$$3x\ge6$$

$$x\ge2$$

Karena ruas kanan positif, kuadratkan kedua ruas.

$$3x-6\le36$$

$$3x\le42$$

$$x\le14$$

Gabungkan:

$$2\le x\le14$$

Jadi, penyelesaiannya adalah:

$$[2,14]$$

---

###### 11. Pertidaksamaan dengan Tanda $>$

Tentukan himpunan penyelesaian dari:

$$\sqrt{x-2}>5$$

Syarat akar:

$$x-2\ge0$$

$$x\ge2$$

Kuadratkan kedua ruas.

$$x-2>25$$

$$x>27$$

Karena $x>27$ sudah memenuhi $x\ge2$, maka:

$$x>27$$

Dalam notasi interval:

$$(27,\infty)$$

---

###### 12. Pertidaksamaan dengan Tanda $\ge$

Tentukan himpunan penyelesaian dari:

$$\sqrt{4x+1}\ge7$$

Syarat akar:

$$4x+1\ge0$$

$$4x\ge-1$$

$$x\ge-\frac14$$

Kuadratkan:

$$4x+1\ge49$$

$$4x\ge48$$

$$x\ge12$$

Karena $x\ge12$ sudah memenuhi domain, maka penyelesaiannya:

$$x\ge12$$

---

###### 13. Pertidaksamaan dengan Ruas Kanan Negatif

Tentukan himpunan penyelesaian dari:

$$\sqrt{x+3}\le -2$$

Karena:

$$\sqrt{x+3}\ge0$$

untuk semua $x$ yang memenuhi domain, maka nilai akar tidak mungkin kurang dari atau sama dengan $-2$.

Jadi, pertidaksamaan tersebut tidak memiliki penyelesaian.

$$\varnothing$$

Perhatikan contoh lain:

$$\sqrt{x+3}>-2$$

Karena akar selalu tidak negatif, maka akar pasti lebih besar dari $-2$ selama bentuk akar terdefinisi.

Syarat domain:

$$x+3\ge0$$

$$x\ge-3$$

Jadi, penyelesaiannya adalah:

$$x\ge-3$$

  📌 **Catatan:** Jika ruas kanan negatif, jangan langsung menguadratkan. Pahami dulu sifat akar yang selalu tidak negatif.

---

###### 14. Pertidaksamaan dengan Ruas Kanan Berbentuk Variabel

Pertidaksamaan irasional dapat berbentuk:

$$\sqrt{f(x)}<g(x)$$

Untuk bentuk seperti ini, ruas kanan harus diperhatikan.

Karena ruas kiri selalu tidak negatif, maka jika:

$$\sqrt{f(x)}<g(x)$$

harus berlaku:

$$g(x)>0$$

Setelah itu, barulah boleh dikuadratkan.

Contoh:

Tentukan penyelesaian dari:

$$\sqrt{x+2}<x$$

Syarat akar:

$$x+2\ge0$$

$$x\ge-2$$

Karena ruas kiri tidak negatif dan harus lebih kecil dari $x$, maka $x$ harus positif.

$$x>0$$

Kuadratkan kedua ruas:

$$x+2<x^2$$

Pindahkan ke satu ruas:

$$x^2-x-2>0$$

Faktorkan:

$$(x-2)(x+1)>0$$

Penyelesaian pertidaksamaan kuadrat:

$$x<-1 \quad \text{atau} \quad x>2$$

Gabungkan dengan syarat $x>0$.

Maka yang memenuhi adalah:

$$x>2$$

Jadi, penyelesaiannya:

$$x>2$$

  ⚠️ **Perhatian:** Untuk $\sqrt{f(x)}<g(x)$, ruas kanan harus benar-benar positif.

---

###### 15. Pertidaksamaan Bentuk $\sqrt{f(x)}\le g(x)$

Untuk bentuk:

$$\sqrt{f(x)}\le g(x)$$

harus berlaku:

$$f(x)\ge0$$

dan

$$g(x)\ge0$$

Setelah itu, kuadratkan:

$$f(x)\le [g(x)]^2$$

Contoh:

Tentukan penyelesaian dari:

$$\sqrt{x+4}\le x$$

Syarat akar:

$$x+4\ge0$$

$$x\ge-4$$

Karena ruas kanan harus tidak negatif:

$$x\ge0$$

Kuadratkan:

$$x+4\le x^2$$

$$x^2-x-4\ge0$$

Cari akar dari:

$$x^2-x-4=0$$

Gunakan rumus umum:

$$x=\frac{1\pm\sqrt{1+16}}{2}$$

$$x=\frac{1\pm\sqrt{17}}{2}$$

Karena koefisien $x^2$ positif, maka:

$$x^2-x-4\ge0$$

berlaku untuk:

$$x\le \frac{1-\sqrt{17}}{2}$$

atau

$$x\ge \frac{1+\sqrt{17}}{2}$$

Gabungkan dengan syarat $x\ge0$.

Karena:

$$\frac{1+\sqrt{17}}{2}>0$$

maka penyelesaiannya:

$$x\ge \frac{1+\sqrt{17}}{2}$$

---

###### 16. Pertidaksamaan Bentuk $\sqrt{f(x)}>g(x)$

Untuk bentuk:

$$\sqrt{f(x)}>g(x)$$

kasusnya lebih hati-hati.

Jika $g(x)<0$, maka pertidaksamaan otomatis benar selama akar terdefinisi, karena ruas kiri selalu $\ge0$ dan ruas kanan negatif.

Jika $g(x)\ge0$, maka boleh dikuadratkan.

Contoh sederhana:

Tentukan penyelesaian dari:

$$\sqrt{x+1}>x-1$$

Syarat akar:

$$x+1\ge0$$

$$x\ge-1$$

Bagi menjadi dua kasus berdasarkan ruas kanan.

**Kasus 1: $x-1<0$**

$$x<1$$

Pada kasus ini, ruas kanan negatif. Karena ruas kiri tidak negatif, pertidaksamaan otomatis benar.

Gabungkan dengan domain:

$$x\ge-1$$

dan

$$x<1$$

maka:

$$-1\le x<1$$

**Kasus 2: $x-1\ge0$**

$$x\ge1$$

Kuadratkan kedua ruas:

$$x+1>(x-1)^2$$

$$x+1>x^2-2x+1$$

$$0>x^2-3x$$

$$x^2-3x<0$$

$$x(x-3)<0$$

Penyelesaiannya:

$$0<x<3$$

Gabungkan dengan $x\ge1$:

$$1\le x<3$$

Gabungkan hasil kasus 1 dan kasus 2:

$$-1\le x<1 \quad \text{atau} \quad 1\le x<3$$

Maka:

$$-1\le x<3$$

Jadi, penyelesaiannya adalah:

$$[-1,3)$$

  📌 **Catatan:** Bentuk $\sqrt{f(x)}>g(x)$ sering perlu dipisahkan menjadi kasus $g(x)<0$ dan $g(x)\ge0$.

---

###### 17. Pertidaksamaan Bentuk $\sqrt{f(x)}\ge g(x)$

Untuk bentuk:

$$\sqrt{f(x)}\ge g(x)$$

jika $g(x)\le0$, maka pertidaksamaan otomatis benar selama akar terdefinisi.

Jika $g(x)>0$, maka dapat dikuadratkan.

Contoh:

Tentukan penyelesaian dari:

$$\sqrt{x+4}\ge x$$

Syarat akar:

$$x+4\ge0$$

$$x\ge-4$$

**Kasus 1: $x\le0$**

Ruas kanan tidak positif. Karena ruas kiri selalu tidak negatif, maka pertidaksamaan benar.

Gabungkan dengan domain:

$$x\ge-4$$

dan

$$x\le0$$

maka:

$$-4\le x\le0$$

**Kasus 2: $x>0$**

Kuadratkan kedua ruas:

$$x+4\ge x^2$$

$$x^2-x-4\le0$$

Akar dari:

$$x^2-x-4=0$$

adalah:

$$x=\frac{1-\sqrt{17}}{2}$$

dan

$$x=\frac{1+\sqrt{17}}{2}$$

Karena koefisien $x^2$ positif, pertidaksamaan $\le0$ berlaku di antara akar:

$$\frac{1-\sqrt{17}}{2}\le x\le \frac{1+\sqrt{17}}{2}$$

Gabungkan dengan $x>0$:

$$0<x\le \frac{1+\sqrt{17}}{2}$$

Gabungkan hasil kedua kasus:

$$-4\le x\le0$$

atau

$$0<x\le \frac{1+\sqrt{17}}{2}$$

Maka:

$$-4\le x\le \frac{1+\sqrt{17}}{2}$$

---

###### 18. Pertidaksamaan dengan Akar Kuadrat di Dalam

Tentukan domain dari pertidaksamaan:

$$\sqrt{x^2-9}\ge2$$

Syarat akar:

$$x^2-9\ge0$$

$$(x-3)(x+3)\ge0$$

Maka domain:

$$x\le-3 \quad \text{atau} \quad x\ge3$$

Kuadratkan kedua ruas:

$$x^2-9\ge4$$

$$x^2-13\ge0$$

$$(x-\sqrt{13})(x+\sqrt{13})\ge0$$

Maka:

$$x\le-\sqrt{13} \quad \text{atau} \quad x\ge\sqrt{13}$$

Karena:

$$\sqrt{13}>3$$

maka hasil ini sudah memenuhi domain.

Jadi, penyelesaiannya adalah:

$$x\le-\sqrt{13} \quad \text{atau} \quad x\ge\sqrt{13}$$

---

###### 19. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tidak menentukan syarat akar | $\sqrt{x-2}<5$ langsung ditulis $x-2<25$. | Tulis dulu $x-2\ge0$. |
| Menguadratkan saat ruas kanan negatif | $\sqrt{x+3}<-2$ dikuadratkan menjadi $x+3<4$. | Tidak ada solusi karena akar tidak mungkin kurang dari bilangan negatif. |
| Tidak memperhatikan ruas kanan variabel | $\sqrt{x+2}<x$ langsung dikuadratkan tanpa syarat $x>0$. | Karena akar tidak negatif, harus $x>0$. |
| Tidak menggabungkan domain dan hasil kuadrat | Hanya mengambil hasil $x<7$ dari $\sqrt{x+2}<3$. | Gabungkan dengan domain $x\ge-2$, sehingga $-2\le x<7$. |
| Salah membalik tanda pada pertidaksamaan | Saat mengalikan dengan bilangan negatif, tanda tidak dibalik. | Jika dikalikan atau dibagi bilangan negatif, tanda pertidaksamaan harus dibalik. |

  ⚠️ **Perhatian:** Pertidaksamaan irasional menuntut dua hal: syarat domain dan kebenaran pertidaksamaan setelah dianalisis.

---

###### 20. Rangkuman

- Pertidaksamaan irasional memuat variabel di dalam tanda akar.
- Untuk akar pangkat dua:
  $$\sqrt{f(x)}$$
  harus memenuhi:
  $$f(x)\ge0$$
- Akar pangkat dua utama selalu bernilai tidak negatif.
- Jika ruas kanan bilangan positif, pertidaksamaan dapat dikuadratkan dengan aman.
- Jika ruas kanan negatif, analisis sifat akar terlebih dahulu.
- Untuk bentuk $\sqrt{f(x)}<g(x)$, harus berlaku $g(x)>0$.
- Untuk bentuk $\sqrt{f(x)}\le g(x)$, harus berlaku $g(x)\ge0$.
- Untuk bentuk $\sqrt{f(x)}>g(x)$ atau $\sqrt{f(x)}\ge g(x)$, sering perlu mempertimbangkan kasus ruas kanan negatif atau tidak negatif.
- Hasil akhir harus merupakan gabungan antara domain akar dan interval hasil penyelesaian pertidaksamaan.
- Jangan langsung menguadratkan tanpa memeriksa tanda kedua ruas.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan himpunan penyelesaian dari pertidaksamaan berikut.
$$\sqrt{x+5}<4$$

💡 Pembahasan

Tentukan syarat akar.

$$x+5\ge0$$

$$x\ge-5$$

Karena ruas kanan $4$ positif, kuadratkan kedua ruas.

$$x+5<16$$

$$x<11$$

Gabungkan dengan syarat domain.

$$x\ge-5$$

dan

$$x<11$$

Jadi, himpunan penyelesaiannya adalah:

$$-5\le x<11$$

Dalam notasi interval:

$$[-5,11)$$

  Contoh Soal 2

Tentukan himpunan penyelesaian dari pertidaksamaan berikut.
$$\sqrt{x+2}<x$$

💡 Pembahasan

Syarat akar:

$$x+2\ge0$$

$$x\ge-2$$

Karena ruas kiri berupa akar dan harus kurang dari $x$, maka ruas kanan harus positif.

$$x>0$$

Kuadratkan kedua ruas.

$$x+2<x^2$$

$$x^2-x-2>0$$

Faktorkan:

$$(x-2)(x+1)>0$$

Penyelesaiannya:

$$x<-1 \quad \text{atau} \quad x>2$$

Gabungkan dengan syarat $x>0$.

Maka yang memenuhi adalah:

$$x>2$$

Jadi, himpunan penyelesaiannya adalah:

$$x>2$$

  Contoh Soal 3

Tentukan himpunan penyelesaian dari pertidaksamaan berikut.
$$\sqrt{x+1}>x-1$$

💡 Pembahasan

Syarat akar:

$$x+1\ge0$$

$$x\ge-1$$

Karena ruas kanan $x-1$ dapat bernilai negatif atau tidak negatif, bagi menjadi dua kasus.

**Kasus 1: $x-1<0$**

$$x<1$$

Pada kasus ini, ruas kanan negatif. Karena ruas kiri berupa akar dan tidak negatif, pertidaksamaan otomatis benar.

Gabungkan dengan domain:

$$x\ge-1$$

dan

$$x<1$$

maka:

$$-1\le x<1$$

**Kasus 2: $x-1\ge0$**

$$x\ge1$$

Kuadratkan kedua ruas.

$$x+1>(x-1)^2$$

$$x+1>x^2-2x+1$$

$$0>x^2-3x$$

$$x^2-3x<0$$

$$x(x-3)<0$$

Maka:

$$0<x<3$$

Gabungkan dengan $x\ge1$.

$$1\le x<3$$

Gabungkan kedua kasus.

$$-1\le x<1 \quad \text{atau} \quad 1\le x<3$$

Jadi:

$$-1\le x<3$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Pertidaksamaan berikut yang termasuk pertidaksamaan irasional adalah ....

A
$x^2-4x+3>0$

B
$\sqrt{x+2}\le5$

C
$\frac{x-1}{x+2}>0$

D
$2x+5<0$

E
$x^3-8\ge0$

💡 Pembahasan

Pertidaksamaan irasional memuat variabel di dalam tanda akar.

Bentuk $\sqrt{x+2}\le5$ termasuk pertidaksamaan irasional.

  Latihan Soal 2

Syarat akar dari pertidaksamaan $\sqrt{x-3}<4$ adalah ....

A
$x\ge3$

B
$x\le3$

C
$x>3$

D
$x<3$

E
$x\ne3$

💡 Pembahasan

Bagian dalam akar harus tidak negatif.

$$x-3\ge0$$

$$x\ge3$$

  Latihan Soal 3

Himpunan penyelesaian dari $\sqrt{x+5}<4$ adalah ....

A
$x<11$

B
$-5\le x<11$

C
$-5<x\le11$

D
$x\ge-5$

E
$x>11$

💡 Pembahasan

Syarat akar:

$$x+5\ge0$$

$$x\ge-5$$

Kuadratkan:

$$x+5<16$$

$$x<11$$

Gabungkan:

$$-5\le x<11$$

  Latihan Soal 4

Himpunan penyelesaian dari $\sqrt{3x-6}\le6$ adalah ....

A
$x\le14$

B
$2\le x\le14$

C
$x\ge2$

D
$x<2$ atau $x>14$

E
$x=6$ saja

💡 Pembahasan

Syarat:

$$3x-6\ge0$$

$$x\ge2$$

Kuadratkan:

$$3x-6\le36$$

$$3x\le42$$

$$x\le14$$

Gabungkan:

$$2\le x\le14$$

  Latihan Soal 5

Himpunan penyelesaian dari $\sqrt{x-2}>5$ adalah ....

A
$x>5$

B
$x\ge2$

C
$x>27$

D
$2\le x\le27$

E
$x<27$

💡 Pembahasan

Syarat akar:

$$x-2\ge0$$

$$x\ge2$$

Kuadratkan:

$$x-2>25$$

$$x>27$$

Jadi, penyelesaiannya adalah $x>27$.

  Latihan Soal 6

Himpunan penyelesaian dari $\sqrt{x+3}\le -2$ adalah ....

A
$x\le1$

B
$x\ge-3$

C
tidak ada penyelesaian

D
$-3\le x\le1$

E
semua bilangan real

💡 Pembahasan

Akar pangkat dua utama selalu tidak negatif.

Karena ruas kanan $-2$ negatif, pertidaksamaan $\sqrt{x+3}\le -2$ tidak mungkin terpenuhi.

Jadi, tidak ada penyelesaian.

  Latihan Soal 7

Himpunan penyelesaian dari $\sqrt{x+3}>-2$ adalah ....

A
$x\ge-3$

B
$x>-2$

C
$x<-3$

D
tidak ada penyelesaian

E
$x\ge2$

💡 Pembahasan

Karena akar selalu tidak negatif, maka $\sqrt{x+3}>-2$ benar selama bentuk akar terdefinisi.

Syarat akar:

$$x+3\ge0$$

$$x\ge-3$$

  Latihan Soal 8

Himpunan penyelesaian dari $\sqrt{x+2}<x$ adalah ....

A
$x<-1$ atau $x>2$

B
$x>2$

C
$x\ge-2$

D
$-2\le x<2$

E
$x<0$

💡 Pembahasan

Syarat akar:

$$x+2\ge0$$

$$x\ge-2$$

Karena $\sqrt{x+2}<x$, maka ruas kanan harus positif.

$$x>0$$

Kuadratkan:

$$x+2<x^2$$

$$x^2-x-2>0$$

$$(x-2)(x+1)>0$$

Maka:

$$x<-1 \quad \text{atau} \quad x>2$$

Gabungkan dengan $x>0$, sehingga:

$$x>2$$

  Latihan Soal 9

Himpunan penyelesaian dari $\sqrt{x+1}>x-1$ adalah ....

A
$x<-1$

B
$-1\le x<3$

C
$x\ge3$

D
$1\le x<3$ saja

E
semua bilangan real

💡 Pembahasan

Syarat akar:

$$x+1\ge0$$

$$x\ge-1$$

Jika $x-1<0$, maka $x<1$. Pada domain $x\ge-1$, semua $-1\le x<1$ memenuhi.

Jika $x-1\ge0$, maka $x\ge1$ dan boleh dikuadratkan.

$$x+1>(x-1)^2$$

$$x+1>x^2-2x+1$$

$$x^2-3x<0$$

$$x(x-3)<0$$

$$0<x<3$$

Gabungkan dengan $x\ge1$, diperoleh $1\le x<3$.

Gabungan keseluruhan:

$$-1\le x<3$$

  Latihan Soal 10

Pernyataan yang benar tentang pertidaksamaan irasional adalah ....

A
boleh selalu langsung dikuadratkan tanpa syarat

B
bagian dalam akar boleh bernilai negatif

C
harus memperhatikan syarat akar dan tanda ruas lain

D
akar pangkat dua utama selalu bernilai negatif

E
hasil akhir tidak perlu digabungkan dengan domain

💡 Pembahasan

Pertidaksamaan irasional harus memperhatikan syarat akar, domain, dan tanda ruas lain sebelum dikuadratkan.

#### Soal Kontekstual Persamaan dan Pertidaksamaan Irasional

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/soal-cerita-persamaan-dan-pertidaksamaan-irasional*

Pada materi sebelumnya, kita telah mempelajari pertidaksamaan irasional. Sekarang kita akan menerapkan persamaan dan pertidaksamaan irasional dalam soal cerita.

Soal cerita irasional biasanya muncul ketika suatu situasi melibatkan rumus akar, seperti jarak, panjang sisi, kecepatan tertentu, tinggi benda, atau hubungan kuadrat yang kemudian dinyatakan dalam bentuk akar.

  📌 **Catatan:** Dalam soal cerita irasional, selain menyelesaikan persamaan atau pertidaksamaan, kita juga harus memastikan jawaban sesuai dengan konteks masalah.

---

###### 1. Mengingat Kembali Bentuk Irasional

Bentuk irasional adalah bentuk aljabar yang memuat variabel di dalam tanda akar.

Contoh:

$$\sqrt{x+4}$$

$$\sqrt{2x-1}$$

$$\sqrt{x^2+9}$$

$$3+\sqrt{x-2}$$

Untuk akar pangkat dua, bagian dalam akar harus tidak negatif.

Jika bentuknya:

$$\sqrt{f(x)}$$

maka syaratnya:

$$f(x)\ge0$$

  💡 **Ingat:** Pada soal cerita, syarat akar harus digabungkan dengan syarat konteks, misalnya panjang, waktu, atau jarak harus bernilai tidak negatif.

---

###### 2. Mengingat Kembali Persamaan Irasional

Persamaan irasional adalah persamaan yang memuat bentuk akar dengan variabel di dalamnya.

Contoh:

$$\sqrt{x+5}=4$$

$$\sqrt{2x-1}=x-3$$

$$\sqrt{x^2+16}=10$$

Langkah umum menyelesaikan persamaan irasional:

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan syarat akar. |
| 2 | Susun model persamaan. |
| 3 | Isolasi bentuk akar jika perlu. |
| 4 | Kuadratkan kedua ruas. |
| 5 | Selesaikan persamaan yang diperoleh. |
| 6 | Cek solusi ke persamaan awal dan konteks soal. |

  ⚠️ **Perhatian:** Menguadratkan kedua ruas dapat menghasilkan solusi palsu. Oleh karena itu, hasil harus dicek.

---

###### 3. Mengingat Kembali Pertidaksamaan Irasional

Pertidaksamaan irasional adalah pertidaksamaan yang memuat bentuk akar dengan variabel di dalamnya.

Contoh:

$$\sqrt{x+2}<5$$

$$\sqrt{3x-1}\ge4$$

$$\sqrt{x+4}<x$$

Pada pertidaksamaan irasional, kita perlu memperhatikan:

- syarat bagian dalam akar,
- tanda ruas lain,
- hasil setelah dikuadratkan,
- konteks soal.

  📌 **Catatan:** Jika ruas kanan berupa bilangan negatif, jangan langsung menguadratkan. Ingat bahwa akar pangkat dua utama selalu tidak negatif.

---

###### 4. Kata Kunci dalam Soal Cerita Irasional

Soal cerita irasional dapat menggunakan kata kunci berikut.

| Kata Kunci | Tanda Matematika | Makna |
| --- | --- | --- |
| sama dengan | $=$ | Membentuk persamaan irasional. |
| lebih dari | $>$ | Nilai harus lebih besar dari batas tertentu. |
| kurang dari | $<$ | Nilai harus lebih kecil dari batas tertentu. |
| paling sedikit / minimal | $\ge$ | Nilai boleh sama dengan batas atau lebih besar. |
| paling banyak / maksimal / tidak lebih dari | $\le$ | Nilai boleh sama dengan batas atau lebih kecil. |

---

###### 5. Langkah Menyelesaikan Soal Cerita Irasional

Langkah umum menyelesaikan soal cerita persamaan dan pertidaksamaan irasional adalah sebagai berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Baca soal dan tentukan apa yang ditanyakan. |
| 2 | Tentukan variabel. |
| 3 | Susun model persamaan atau pertidaksamaan irasional. |
| 4 | Tentukan syarat akar dan syarat konteks. |
| 5 | Selesaikan model matematika. |
| 6 | Cek hasil terhadap bentuk awal dan konteks soal. |
| 7 | Tulis kesimpulan dengan satuan yang tepat. |

  💡 **Strategi:** Dalam soal cerita, jawaban akhir bukan hanya nilai $x$, tetapi juga makna nilai tersebut.

---

###### 6. Soal Cerita tentang Panjang Sisi

Panjang sisi suatu benda dinyatakan dengan:

$$s=\sqrt{x+9}$$

Jika panjang sisi benda tersebut $6$ cm, tentukan nilai $x$.

Model:

$$\sqrt{x+9}=6$$

Syarat akar:

$$x+9\ge0$$

$$x\ge-9$$

Kuadratkan kedua ruas:

$$x+9=36$$

$$x=27$$

Cek:

$$\sqrt{27+9}=\sqrt{36}=6$$

Benar.

Jadi, nilai $x$ adalah:

$$27$$

---

###### 7. Soal Cerita tentang Jarak

Jarak sebuah titik dari pusat koordinat dinyatakan dengan:

$$d=\sqrt{x^2+16}$$

Jika jaraknya $10$ satuan, tentukan nilai $x$.

Model:

$$\sqrt{x^2+16}=10$$

Syarat akar:

$$x^2+16\ge0$$

Syarat ini selalu benar untuk semua $x$ real.

Kuadratkan kedua ruas:

$$x^2+16=100$$

$$x^2=84$$

$$x=\pm\sqrt{84}$$

Sederhanakan:

$$x=\pm2\sqrt{21}$$

Jadi, nilai $x$ yang memenuhi adalah:

$$x=-2\sqrt{21} \quad \text{atau} \quad x=2\sqrt{21}$$

  📌 **Catatan:** Jika variabel menyatakan posisi pada garis bilangan, nilai negatif bisa saja diperbolehkan. Namun, jika variabel menyatakan panjang, nilai negatif harus ditolak.

---

###### 8. Soal Cerita tentang Panjang Diagonal

Sebuah persegi panjang memiliki panjang $x$ cm dan lebar $6$ cm. Diagonalnya $10$ cm. Tentukan panjang persegi panjang tersebut.

Dengan Teorema Pythagoras, diagonal:

$$d=\sqrt{x^2+6^2}$$

Karena diagonalnya $10$ cm, maka:

$$\sqrt{x^2+36}=10$$

Syarat konteks:

$$x>0$$

Kuadratkan kedua ruas:

$$x^2+36=100$$

$$x^2=64$$

$$x=\pm8$$

Karena $x$ menyatakan panjang, maka:

$$x=8$$

Jadi, panjang persegi panjang tersebut adalah:

$$8 \text{ cm}$$

  ⚠️ **Perhatian:** Hasil $x=-8$ secara aljabar muncul, tetapi ditolak karena panjang tidak mungkin negatif.

---

###### 9. Soal Cerita tentang Batas Panjang Diagonal

Sebuah persegi panjang memiliki panjang $x$ cm dan lebar $5$ cm. Diagonalnya kurang dari $13$ cm. Tentukan batas nilai $x$.

Diagonal:

$$d=\sqrt{x^2+5^2}$$

Karena diagonal kurang dari $13$ cm:

$$\sqrt{x^2+25}<13$$

Syarat konteks:

$$x>0$$

Karena ruas kanan positif, kuadratkan kedua ruas.

$$x^2+25<169$$

$$x^2<144$$

$$-12<x<12$$

Gabungkan dengan syarat konteks $x>0$.

Maka:

$$0<x<12$$

Jadi, panjang persegi panjang harus memenuhi:

$$0<x<12$$

---

###### 10. Soal Cerita tentang Tinggi Benda

Tinggi suatu benda setelah $t$ detik dimodelkan oleh:

$$h=\sqrt{4t+1}$$

Jika tinggi benda $5$ meter, tentukan waktu $t$.

Model:

$$\sqrt{4t+1}=5$$

Syarat akar:

$$4t+1\ge0$$

$$t\ge-\frac14$$

Namun, karena $t$ adalah waktu, maka:

$$t\ge0$$

Kuadratkan kedua ruas:

$$4t+1=25$$

$$4t=24$$

$$t=6$$

Cek konteks:

$$t=6\ge0$$

Jadi, waktunya adalah:

$$6 \text{ detik}$$

---

###### 11. Soal Cerita tentang Waktu Maksimal

Tinggi benda dinyatakan dengan:

$$h=\sqrt{3t+4}$$

Tinggi benda paling banyak $5$ meter. Tentukan nilai $t$ yang memenuhi.

Paling banyak $5$ berarti:

$$h\le5$$

Model:

$$\sqrt{3t+4}\le5$$

Syarat akar:

$$3t+4\ge0$$

$$t\ge-\frac43$$

Karena $t$ adalah waktu:

$$t\ge0$$

Kuadratkan kedua ruas:

$$3t+4\le25$$

$$3t\le21$$

$$t\le7$$

Gabungkan dengan $t\ge0$.

Jadi:

$$0\le t\le7$$

Artinya, waktu yang memenuhi adalah dari $0$ detik sampai $7$ detik.

---

###### 12. Soal Cerita tentang Jarak Minimal

Jarak sebuah titik ke pusat koordinat dimodelkan oleh:

$$d=\sqrt{x^2+9}$$

Jika jarak titik tersebut paling sedikit $5$ satuan, tentukan nilai $x$.

Paling sedikit $5$ berarti:

$$d\ge5$$

Model:

$$\sqrt{x^2+9}\ge5$$

Karena ruas kanan positif, kuadratkan kedua ruas.

$$x^2+9\ge25$$

$$x^2\ge16$$

Maka:

$$x\le-4 \quad \text{atau} \quad x\ge4$$

Jadi, nilai $x$ yang memenuhi adalah:

$$x\le-4 \quad \text{atau} \quad x\ge4$$

---

###### 13. Soal Cerita tentang Batas Kecepatan

Sebuah besaran kecepatan dinyatakan dengan:

$$v=\sqrt{2x+10}$$

Jika kecepatan lebih dari $6$ m/s, tentukan nilai $x$.

Model:

$$\sqrt{2x+10}>6$$

Syarat akar:

$$2x+10\ge0$$

$$x\ge-5$$

Kuadratkan kedua ruas:

$$2x+10>36$$

$$2x>26$$

$$x>13$$

Karena $x>13$ sudah memenuhi domain, maka:

$$x>13$$

Jadi, nilai $x$ harus lebih dari $13$.

---

###### 14. Soal Cerita dengan Ruas Kanan Variabel

Dalam beberapa soal, batasnya juga memuat variabel.

Contoh:

Sebuah panjang dinyatakan dengan:

$$p=\sqrt{x+2}$$

Panjang tersebut kurang dari $x$ cm. Tentukan nilai $x$ yang memenuhi.

Model:

$$\sqrt{x+2}<x$$

Syarat akar:

$$x+2\ge0$$

$$x\ge-2$$

Karena ruas kiri berupa akar dan bernilai tidak negatif, agar kurang dari $x$, harus berlaku:

$$x>0$$

Kuadratkan kedua ruas:

$$x+2<x^2$$

$$x^2-x-2>0$$

Faktorkan:

$$(x-2)(x+1)>0$$

Penyelesaian pertidaksamaan kuadrat:

$$x<-1 \quad \text{atau} \quad x>2$$

Gabungkan dengan syarat $x>0$.

Maka:

$$x>2$$

Jadi, nilai $x$ yang memenuhi adalah:

$$x>2$$

  ⚠️ **Perhatian:** Jika ruas kanan berupa variabel, periksa apakah ruas kanan harus positif atau tidak.

---

###### 15. Soal Cerita dengan Luas atau Panjang Tidak Negatif

Kadang hasil perhitungan menghasilkan dua nilai, tetapi hanya satu yang masuk akal.

Contoh:

Sebuah panjang sisi dinyatakan dengan:

$$s=\sqrt{x+1}$$

Diketahui panjang sisi tersebut sama dengan $x-3$ cm. Tentukan nilai $x$.

Model:

$$\sqrt{x+1}=x-3$$

Syarat akar:

$$x+1\ge0$$

$$x\ge-1$$

Karena ruas kanan menyatakan panjang dan juga sama dengan akar, maka:

$$x-3\ge0$$

$$x\ge3$$

Kuadratkan:

$$x+1=(x-3)^2$$

$$x+1=x^2-6x+9$$

$$0=x^2-7x+8$$

Gunakan rumus umum:

$$x=\frac{7\pm\sqrt{49-32}}{2}$$

$$x=\frac{7\pm\sqrt{17}}{2}$$

Periksa syarat $x\ge3$.

Nilai:

$$\frac{7-\sqrt{17}}{2}<3$$

ditolak.

Nilai:

$$\frac{7+\sqrt{17}}{2}>3$$

diterima setelah dicek ke persamaan awal.

Jadi:

$$x=\frac{7+\sqrt{17}}{2}$$

---

###### 16. Menafsirkan Jawaban dalam Konteks

Dalam soal cerita irasional, jawaban harus disesuaikan dengan konteks.

| Konteks | Syarat Umum |
| --- | --- |
| Panjang | Harus positif atau tidak negatif, sesuai soal. |
| Jarak | Tidak boleh negatif. |
| Waktu | Tidak boleh negatif. |
| Kecepatan | Tidak boleh negatif. |
| Posisi pada garis bilangan | Boleh negatif jika konteks mengizinkan. |

  💡 **Ingat:** Jawaban yang benar secara aljabar belum tentu benar secara konteks.

---

###### 17. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tidak menentukan syarat akar | $\sqrt{x+9}=6$ langsung dikuadratkan. | Tentukan dulu $x+9\ge0$. |
| Tidak memperhatikan konteks panjang | Panjang sisi dijawab $x=-8$. | Panjang tidak boleh negatif, sehingga $x=-8$ ditolak. |
| Tidak menggabungkan syarat konteks | Waktu $t$ boleh negatif. | Untuk waktu, gunakan $t\ge0$. |
| Langsung menguadratkan ruas kanan variabel tanpa syarat | $\sqrt{x+2}<x$ langsung dikuadratkan tanpa $x>0$. | Karena ruas kiri tidak negatif dan harus kurang dari $x$, maka $x>0$. |
| Tidak mengecek solusi ke persamaan awal | Semua hasil kuadrat langsung diterima. | Solusi persamaan irasional harus dicek kembali. |

  ⚠️ **Perhatian:** Soal cerita irasional menuntut ketelitian pada model, syarat akar, dan makna jawaban.

---

###### 18. Rangkuman

- Soal cerita irasional memuat model matematika yang mengandung akar dengan variabel di dalamnya.
- Bentuk akar pangkat dua harus memenuhi syarat bagian dalam akar tidak negatif.
- Persamaan irasional biasanya diselesaikan dengan menguadratkan kedua ruas, lalu dicek kembali.
- Pertidaksamaan irasional harus memperhatikan domain dan tanda ruas lain sebelum dikuadratkan.
- Jika variabel menyatakan panjang, waktu, jarak, atau kecepatan, nilai negatif biasanya ditolak.
- Jika variabel menyatakan posisi, nilai negatif bisa saja diperbolehkan.
- Jawaban akhir harus ditulis sesuai konteks dan satuan.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Sebuah persegi panjang memiliki panjang $x$ cm dan lebar $6$ cm. Jika diagonalnya $10$ cm, tentukan panjang persegi panjang tersebut.

💡 Pembahasan

Dengan Teorema Pythagoras, diagonal persegi panjang adalah:

$$d=\sqrt{x^2+6^2}$$

Karena diagonalnya $10$ cm:

$$\sqrt{x^2+36}=10$$

Kuadratkan kedua ruas.

$$x^2+36=100$$

$$x^2=64$$

$$x=\pm8$$

Karena $x$ menyatakan panjang, maka $x$ harus positif.

Jadi:

$$x=8$$

Panjang persegi panjang tersebut adalah **$8$ cm**.

  Contoh Soal 2

Tinggi benda setelah $t$ detik dinyatakan dengan $h=\sqrt{3t+4}$. Jika tinggi benda paling banyak $5$ meter, tentukan interval waktu $t$.

💡 Pembahasan

Paling banyak $5$ meter berarti:

$$h\le5$$

Modelnya:

$$\sqrt{3t+4}\le5$$

Syarat akar:

$$3t+4\ge0$$

$$t\ge-\frac43$$

Karena $t$ menyatakan waktu, maka:

$$t\ge0$$

Kuadratkan kedua ruas.

$$3t+4\le25$$

$$3t\le21$$

$$t\le7$$

Gabungkan dengan $t\ge0$.

Jadi:

$$0\le t\le7$$

Interval waktu yang memenuhi adalah **$0$ sampai $7$ detik**.

  Contoh Soal 3

Sebuah panjang dinyatakan dengan $p=\sqrt{x+2}$. Jika panjang tersebut kurang dari $x$ cm, tentukan nilai $x$ yang memenuhi.

💡 Pembahasan

Model pertidaksamaannya:

$$\sqrt{x+2}<x$$

Syarat akar:

$$x+2\ge0$$

$$x\ge-2$$

Karena ruas kiri berupa akar dan tidak negatif, agar kurang dari $x$, maka:

$$x>0$$

Kuadratkan kedua ruas.

$$x+2<x^2$$

$$x^2-x-2>0$$

Faktorkan:

$$(x-2)(x+1)>0$$

Penyelesaian pertidaksamaan kuadrat:

$$x<-1 \quad \text{atau} \quad x>2$$

Gabungkan dengan $x>0$.

Maka:

$$x>2$$

Jadi, nilai $x$ yang memenuhi adalah:

$$x>2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Panjang sisi suatu benda dinyatakan dengan $s=\sqrt{x+9}$. Jika panjang sisi tersebut $6$ cm, nilai $x$ adalah ....

A
$9$

B
$18$

C
$27$

D
$36$

E
$45$

💡 Pembahasan

Model:

$$\sqrt{x+9}=6$$

Kuadratkan:

$$x+9=36$$

$$x=27$$

  Latihan Soal 2

Sebuah persegi panjang memiliki panjang $x$ cm dan lebar $6$ cm. Jika diagonalnya $10$ cm, panjang persegi panjang tersebut adalah ....

A
$4$ cm

B
$8$ cm

C
$10$ cm

D
$12$ cm

E
$16$ cm

💡 Pembahasan

Diagonal:

$$\sqrt{x^2+6^2}=10$$

$$\sqrt{x^2+36}=10$$

Kuadratkan:

$$x^2+36=100$$

$$x^2=64$$

$$x=\pm8$$

Karena panjang harus positif, maka $x=8$ cm.

  Latihan Soal 3

Sebuah persegi panjang memiliki panjang $x$ cm dan lebar $5$ cm. Jika diagonalnya kurang dari $13$ cm, maka batas nilai $x$ adalah ....

A
$0<x<12$

B
$x<12$

C
$x>12$

D
$-12<x<12$

E
$x\ge12$

💡 Pembahasan

Model:

$$\sqrt{x^2+25}<13$$

Kuadratkan:

$$x^2+25<169$$

$$x^2<144$$

$$-12<x<12$$

Karena $x$ menyatakan panjang, maka $x>0$.

Jadi:

$$0<x<12$$

  Latihan Soal 4

Tinggi benda dinyatakan dengan $h=\sqrt{4t+1}$. Jika tinggi benda $5$ meter, waktu $t$ yang diperlukan adalah ....

A
$4$ detik

B
$6$ detik

C
$8$ detik

D
$10$ detik

E
$12$ detik

💡 Pembahasan

Model:

$$\sqrt{4t+1}=5$$

Kuadratkan:

$$4t+1=25$$

$$4t=24$$

$$t=6$$

Jadi, waktunya $6$ detik.

  Latihan Soal 5

Tinggi benda dinyatakan dengan $h=\sqrt{3t+4}$. Jika tinggi benda paling banyak $5$ meter, interval waktu $t$ adalah ....

A
$t\le7$

B
$0\le t\le7$

C
$t\ge7$

D
$-4\le t\le7$

E
$t>7$

💡 Pembahasan

Model:

$$\sqrt{3t+4}\le5$$

Syarat waktu:

$$t\ge0$$

Kuadratkan:

$$3t+4\le25$$

$$3t\le21$$

$$t\le7$$

Gabungkan:

$$0\le t\le7$$

  Latihan Soal 6

Jarak titik ke pusat koordinat dinyatakan dengan $d=\sqrt{x^2+9}$. Jika jarak paling sedikit $5$ satuan, maka nilai $x$ memenuhi ....

A
$x\le-4$ atau $x\ge4$

B
$-4\le x\le4$

C
$x>5$ saja

D
$x<5$ saja

E
semua bilangan real

💡 Pembahasan

Model:

$$\sqrt{x^2+9}\ge5$$

Kuadratkan:

$$x^2+9\ge25$$

$$x^2\ge16$$

Maka:

$$x\le-4 \quad \text{atau} \quad x\ge4$$

  Latihan Soal 7

Kecepatan dinyatakan dengan $v=\sqrt{2x+10}$. Jika kecepatan lebih dari $6$ m/s, maka nilai $x$ memenuhi ....

A
$x>6$

B
$x>10$

C
$x>13$

D
$x\ge13$

E
$x<13$

💡 Pembahasan

Model:

$$\sqrt{2x+10}>6$$

Kuadratkan:

$$2x+10>36$$

$$2x>26$$

$$x>13$$

  Latihan Soal 8

Sebuah panjang dinyatakan dengan $p=\sqrt{x+2}$. Jika panjang tersebut kurang dari $x$ cm, maka nilai $x$ memenuhi ....

A
$x<-1$ atau $x>2$

B
$x>2$

C
$x\ge-2$

D
$0<x<2$

E
semua bilangan real

💡 Pembahasan

Model:

$$\sqrt{x+2}<x$$

Karena ruas kiri akar dan tidak negatif, maka $x>0$.

Kuadratkan:

$$x+2<x^2$$

$$x^2-x-2>0$$

$$(x-2)(x+1)>0$$

Maka:

$$x<-1 \quad \text{atau} \quad x>2$$

Gabungkan dengan $x>0$, diperoleh:

$$x>2$$

  Latihan Soal 9

Sebuah panjang sisi dinyatakan dengan $s=\sqrt{x+1}$ dan diketahui sama dengan $x-3$ cm. Nilai $x$ yang memenuhi adalah ....

A
$\frac{7-\sqrt{17}}{2}$

B
$\frac{7+\sqrt{17}}{2}$

C
$3$

D
$7$

E
tidak ada penyelesaian

💡 Pembahasan

Model:

$$\sqrt{x+1}=x-3$$

Karena ruas kanan harus tidak negatif:

$$x-3\ge0$$

$$x\ge3$$

Kuadratkan:

$$x+1=(x-3)^2$$

$$x+1=x^2-6x+9$$

$$0=x^2-7x+8$$

Gunakan rumus umum:

$$x=\frac{7\pm\sqrt{17}}{2}$$

Karena $x\ge3$, maka yang diterima adalah:

$$x=\frac{7+\sqrt{17}}{2}$$

  Latihan Soal 10

Dalam soal cerita irasional, alasan jawaban perlu disesuaikan dengan konteks adalah ....

A
karena semua nilai negatif pasti benar

B
karena akar tidak memiliki syarat

C
karena panjang, waktu, jarak, atau kecepatan biasanya tidak boleh negatif

D
karena hasil kuadrat selalu salah

E
karena semua jawaban harus bilangan bulat

💡 Pembahasan

Dalam soal cerita, hasil aljabar harus masuk akal. Misalnya panjang, waktu, jarak, dan kecepatan biasanya tidak boleh bernilai negatif.

## (D) Fungsi Non-aljabar

### Fungsi Eksponensial, Nilai Mutlak, Tangga, dan Sesepenggal

*Sumber: Buku Siswa Matematika Tingkat Lanjut untuk SMA/MA Kelas XI (Edisi Revisi), Yosep Dwi Kristanto dkk., Kemendikbudristek, 2024, Bab 6 Fungsi dan Pemodelannya, subbab C Fungsi Non-aljabar, hlm. 274–289.*

#### Definisi 6.7 Fungsi Eksponensial

Fungsi eksponensial berbentuk $f(x) = ab^x$ dengan $a \neq 0$, $b > 0$, dan $b \neq 1$.

**Contoh 6.14.** Bakteri berkembang biak mengikuti $f(t) = J_0(2^t)$, dengan $J_0$ banyak bakteri semula dan $t$ dalam menit. Jika semula ada 100 bakteri, setelah 10 menit:

$$f(10) = 100(2^{10}) = 100(1.024) = 102.400$$

#### Definisi 6.8 Fungsi Nilai Mutlak

$$f(x) = |x| = \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases} \qquad \text{atau} \qquad f(x) = a|x - h| + k$$

dengan titik puncak $(h, k)$, $a$ menunjukkan seberapa jauh grafik membentang secara vertikal, $h$ pergeseran horizontal, dan $k$ pergeseran vertikal. Fungsi nilai mutlak dipakai, misalnya, untuk memodelkan jarak dan pantulan cahaya.

#### Definisi 6.9 Fungsi Tangga

**Fungsi tangga** adalah fungsi yang bernilai konstan pada interval-interval tempat ia didefinisikan. Contohnya:

- **fungsi atap** $f(x) = \lceil x \rceil$: bilangan bulat terkecil yang lebih besar dari atau sama dengan $x$;
- **fungsi lantai** $f(x) = \lfloor x \rfloor$: bilangan bulat terbesar yang lebih kecil dari atau sama dengan $x$;
- **fungsi pembulatan** $f(x) = [x]$: bilangan bulat terdekat ke $x$.

**Contoh 6.17: Biaya Telepon.** Tarif Rp250,00 per menit dengan pembulatan ke menit atas (menelepon 1,3 menit dibayar 2 menit = Rp500,00).

| Menit | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| Biaya (Rp) | 0 | 250 | 500 | 750 | 1.000 | 1.250 | 1.500 | 1.750 |

Fungsinya: $f(x) = 250k$ untuk $k - 1 < x \le k$, $k = 1, 2, 3, \ldots$

#### Definisi 6.10 Fungsi Sesepenggal

**Fungsi sesepenggal** adalah fungsi yang didefinisikan dengan beberapa formula pada sejumlah daerah asal. Fungsi nilai mutlak dan fungsi tangga termasuk fungsi sesepenggal.
