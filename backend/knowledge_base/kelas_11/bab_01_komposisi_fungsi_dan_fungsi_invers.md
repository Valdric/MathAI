---
judul: "Komposisi Fungsi dan Fungsi Invers"
kelas: "11"
fase: "F"
bab: "1"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (8 bagian); m4th-lab.net (6 bagian)"
---

# Bab 1 — Komposisi Fungsi dan Fungsi Invers

> Kelas 11 · Fase F · Matematika Umum

## Daftar Isi

- (A) Fungsi
  - Fungsi dan Bukan Fungsi
  - Domain, Kodomain, dan Range
- (B) Komposisi Fungsi
  - Penjumlahan dan Pengurangan Fungsi
  - Perkalian dan Pembagian Fungsi
  - Komposisi Fungsi, Syarat, dan Sifat-sifatnya
- (C) Fungsi Invers
  - Fungsi Injektif, Surjektif, dan Bijektif
  - Fungsi Invers

## (A) Fungsi

### Fungsi dan Bukan Fungsi

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 2 Komposisi Fungsi dan Fungsi Invers, bagian Siap-Siap Belajar dan Ayo Mengingat Kembali, hlm. 83–87.*

**Fungsi** adalah relasi yang menghubungkan **setiap** anggota suatu himpunan dengan **tepat satu** anggota himpunan lain. Fungsi biasanya dinyatakan $f(x) = y$, dengan $f$ fungsi, $x$ variabel masukan (input), dan $y$ variabel keluaran (output). Fungsi dapat dibayangkan sebagai **mesin**: masukan $x$ diproses menjadi keluaran $f(x) = y$.

Contoh relasi berupa fungsi adalah hubungan antara kategori kendaraan dan nilai asuransinya per tahun: kategori 1 → 4,2 juta, kategori 2 → 5,88 juta, kategori 3 → 9,6 juta. Setiap kategori dipasangkan dengan tepat satu nilai asuransi.

Contoh lain di SPBU: biaya pembelian bahan bakar $B$ bergantung pada volume $V$, ditulis $B = f(V)$; jarak tempuh kendaraan $J$ bergantung pada volume bahan bakar yang digunakan, ditulis $J = f(V)$.

#### Tes Garis Vertikal

Untuk menentukan apakah relasi dalam grafik merupakan fungsi, geser sebuah garis vertikal dari kiri ke kanan melewati grafik.

- Jika garis vertikal memotong grafik di **dua titik atau lebih**, relasi tersebut **bukan fungsi**. Contoh: grafik $x = y^2 - 1$; pada $x = 2$ garis vertikal memotong grafik di dua titik berbeda.
- Jika untuk setiap $x$ garis vertikal memotong grafik **tepat di satu titik**, relasi tersebut **fungsi**. Contoh: grafik $y = x^3$.

### Domain, Kodomain, dan Range

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas X, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab 3 Fungsi, subbab 3.1 Memahami Notasi, Domain, Range, dan Grafik Suatu Fungsi, hlm. 74–78.*

#### Notasi Fungsi

Cara kerja sebuah mesin—menerima masukan (*input*), memprosesnya, lalu menghasilkan luaran (*output*)—adalah gambaran cara kerja fungsi. Misalkan sebuah mesin diprogram untuk "menggandakan masukan lalu menambah 5". Jika masukannya $x = 5$, luarannya $2(5) + 5 = 15$.

Jika $f$ adalah fungsi yang mengubah $x$ menjadi $2x + 5$, ditulis:

$$f: x \to 2x + 5$$

dibaca "fungsi $f$ memetakan $x$ ke $2x + 5$". Bentuk lain yang setara adalah $f(x) = 2x + 5$ atau $y = 2x + 5$. Jadi $f(x)$ adalah nilai $y$ untuk nilai $x$ tertentu: $y$ adalah fungsi dari $x$, karena nilai $y$ bergantung pada nilai $x$.

#### Daerah Asal (Domain) dan Daerah Hasil (Range) dari Grafik

Daerah asal adalah semua nilai $x$ yang memenuhi, dan daerah hasil adalah semua nilai $y$ yang dihasilkan. Keduanya sebaiknya dituliskan dengan notasi himpunan atau interval. Contoh dari grafik:

| Grafik | Daerah asal | Daerah hasil |
| --- | --- | --- |
| Kurva yang dimulai dari titik $(-2, -6)$ dan naik ke kanan | $\{x : x \geq -2\}$ | $\{y : y \geq -6\}$ |
| Parabola terbuka ke bawah dengan puncak $(-2, 1)$ | $\{x : x \in \mathbb{R}\}$ | $\{y : y \leq 1, y \in \mathbb{R}\}$ |
| Kurva dengan asimtot tegak $x = 2$ dan asimtot datar $y = 1$ | $\{x : x \neq 2\}$ | $\{y : y \neq 1\}$ |
| Kurva yang dimulai dari $(2, 1)$ dan naik ke kanan | $\{x : x \geq 2\}$ | $\{y : y \geq 1\}$ |

#### Daerah Asal Eksplisit dan Daerah Asal Alami

Daerah asal dapat ditetapkan secara tegas (eksplisit), misalnya:

$$f(x) = 2x^2, \quad 0 \leq x \leq 3$$

sehingga daerah asalnya adalah semua bilangan real $x$ dengan $0 \leq x \leq 3$.

Jika daerah asal tidak ditentukan secara tegas, disepakati bahwa daerah asal fungsi adalah himpunan semua bilangan real $x$ yang membuat fungsi $f$ terdefinisi (nilai $f(x)$ merupakan bilangan real).

#### Contoh

Tentukan daerah asal fungsi $f(x) = \dfrac{1}{x - 2}$ dan $g(x) = \sqrt{2x}$.

**Penyelesaian:**

- Fungsi $f$ tidak terdefinisi jika penyebutnya bernilai 0, yaitu pada $x = 2$. Jadi daerah asal $f$ adalah $\{x : x \neq 2, x \in \mathbb{R}\}$.
- Fungsi $g$ tidak terdefinisi untuk $x$ negatif. Jadi daerah asal $g$ adalah $\{x : x \geq 0, x \in \mathbb{R}\}$.

## (B) Komposisi Fungsi

### Penjumlahan dan Pengurangan Fungsi

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas X, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab 3 Fungsi, subbab 3.2 Operasi Aljabar pada Fungsi, Masalah 3.1, Definisi 3.1, dan Contoh 3.1, hlm. 78–81.*

#### Masalah: Biaya Fotografer

Seorang fotografer menghasilkan gambar yang bagus melalui dua tahap, yaitu pemotretan dan *editing*. Biaya pemotretan mengikuti fungsi $B_1(g) = 500g + 2.500$ dan biaya *editing* mengikuti fungsi $B_2(g) = 100g + 500$, dengan $g$ banyak gambar.

a) Berapa total biaya untuk menghasilkan 10 gambar?
b) Berapa selisih biaya pemotretan dan biaya *editing* untuk 5 gambar?

**Penyelesaian:**

a) Total biaya adalah jumlah kedua fungsi:

$$B_1(g) + B_2(g) = (500g + 2.500) + (100g + 500) = 600g + 3.000$$

$$B_1(10) + B_2(10) = 600(10) + 3.000 = 9.000$$

Jadi, total biaya untuk 10 gambar adalah Rp9.000,00.

b) Selisih biaya:

$$B_1(g) - B_2(g) = (500g + 2.500) - (100g + 500) = 400g + 2.000$$

$$B_1(5) - B_2(5) = 400(5) + 2.000 = 4.000$$

Jadi, selisih biayanya untuk 5 gambar adalah Rp4.000,00.

#### Definisi Penjumlahan dan Pengurangan Fungsi

Jika $f$ fungsi dengan daerah asal $D_f$ dan $g$ fungsi dengan daerah asal $D_g$, maka:

1. Jumlah $f$ dan $g$: $(f + g)(x) = f(x) + g(x)$, dengan daerah asal $D_{f+g} = D_f \cap D_g$.
2. Selisih $f$ dan $g$: $(f - g)(x) = f(x) - g(x)$, dengan daerah asal $D_{f-g} = D_f \cap D_g$.

#### Contoh

Diketahui $f(x) = x + 3$ dan $g(x) = x^2 - 9$. Tentukan $(f + g)(x)$ dan $(f - g)(x)$ beserta daerah asalnya.

**Penyelesaian:**

Daerah asal $f$ dan $g$ adalah semua bilangan real: $D_f = D_g = \{x \mid x \in \mathbb{R}\}$.

$$(f + g)(x) = (x + 3) + (x^2 - 9) = x^2 + x - 6, \qquad D_{f+g} = \{x \mid x \in \mathbb{R}\}$$

$$(f - g)(x) = (x + 3) - (x^2 - 9) = -x^2 + x + 12, \qquad D_{f-g} = \{x \mid x \in \mathbb{R}\}$$

### Perkalian dan Pembagian Fungsi

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas X, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab 3 Fungsi, subbab 3.2 Operasi Aljabar pada Fungsi, Definisi 3.1 dan Contoh 3.1, hlm. 79–81.*

#### Definisi Perkalian dan Pembagian Fungsi

Jika $f$ fungsi dengan daerah asal $D_f$ dan $g$ fungsi dengan daerah asal $D_g$, maka:

3. Perkalian $f$ dan $g$: $(f \times g)(x) = f(x) \times g(x)$, dengan daerah asal $D_{f \times g} = D_f \cap D_g$.
4. Pembagian $f$ dan $g$: $\left(\dfrac{f}{g}\right)(x) = \dfrac{f(x)}{g(x)}$, dengan daerah asal $D_{f/g} = D_f \cap D_g - \{x \mid g(x) = 0\}$.

#### Contoh

Diketahui $f(x) = x + 3$ dan $g(x) = x^2 - 9$. Tentukan $(f \times g)(x)$ dan $\left(\dfrac{f}{g}\right)(x)$ beserta daerah asalnya.

**Penyelesaian:**

$$(f \times g)(x) = (x + 3)(x^2 - 9) = x^3 + 3x^2 - 9x - 27, \qquad D_{f \times g} = \{x \mid x \in \mathbb{R}\}$$

$$\left(\frac{f}{g}\right)(x) = \frac{x + 3}{x^2 - 9} = \frac{x + 3}{(x + 3)(x - 3)} = \frac{1}{x - 3}$$

Daerah asalnya:

$$D_{f/g} = D_f \cap D_g \text{ dan } g(x) \neq 0 \Rightarrow (x + 3)(x - 3) \neq 0$$

$$D_{f/g} = \{x \mid x \in \mathbb{R},\ x \neq -3,\ x \neq 3\}$$

### Komposisi Fungsi, Syarat, dan Sifat-sifatnya

#### Operasi dan Komposisi Fungsi

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 2 Komposisi Fungsi dan Fungsi Invers, subbab A Komposisi Fungsi, hlm. 88–107.*

##### Definisi Komposisi Fungsi

Jika $g : A \to B$ dan $f : B \to C$ dua fungsi, maka komposisi keduanya $f(g(x))$, dinyatakan dengan notasi $(f \circ g)(x)$, adalah fungsi dari domain $A$ ke kodomain $C$:

$$(f \circ g)(x) = f\big(g(x)\big)$$

Contoh: jika $f(x) = x + 1$ dan $g(x) = x^2$, maka

$$h(x) = g\big(f(x)\big) = g(x + 1) = (x + 1)^2$$

##### Syarat Komposisi Fungsi

Dua fungsi $f$ dan $g$ dapat dikomposisikan sebagai $f \circ g$ jika **range dari $g$ merupakan himpunan bagian dari domain $f$**.

##### Sifat-sifat Komposisi Fungsi

- **Tidak komutatif** (secara umum): $f \circ g \neq g \circ f$. Contoh dalam buku: harga setelah diskon 25% lalu potongan Rp15.000,00 tidak sama dengan harga setelah potongan Rp15.000,00 lalu diskon 25%.
- **Asosiatif**: $\big(f \circ (g \circ h)\big)(x) = \big((f \circ g) \circ h\big)(x)$. Buku memeriksanya dengan $f(x) = x + 1$, $g(x) = x^2 + 1$, dan $h(x) = \dfrac{1}{1 + x}$.

#### Memahami Fungsi Komposisi

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/memahami-fungsi-komposisi*

Setelah mempelajari nilai mutlak, sekarang kita masuk ke bagian **fungsi komposisi dan fungsi invers**. Materi pertama pada bagian ini adalah **pengertian fungsi komposisi**.

Fungsi komposisi digunakan ketika hasil dari suatu fungsi menjadi masukan untuk fungsi lainnya.

  📌 **Catatan:** Fungsi komposisi dapat dipahami sebagai proses berurutan: masukan diproses oleh fungsi pertama, lalu hasilnya diproses lagi oleh fungsi kedua.

---

###### 1. Mengingat Kembali Pengertian Fungsi

Fungsi adalah aturan yang memasangkan setiap anggota domain dengan tepat satu anggota kodomain.

Jika $f$ adalah suatu fungsi, maka nilai fungsi $f$ pada $x$ ditulis:

$$f(x)$$

Contoh:

$$f(x)=2x+3$$

Jika $x=4$, maka:

$$f(4)=2(4)+3=8+3=11$$

Jadi:

$$f(4)=11$$

  💡 **Ingat:** Fungsi bekerja seperti mesin. Masukan diproses oleh aturan fungsi, lalu menghasilkan keluaran.

---

###### 2. Pengertian Fungsi Komposisi

**Fungsi komposisi** adalah fungsi yang terbentuk dari gabungan dua fungsi atau lebih secara berurutan.

Jika terdapat dua fungsi $f$ dan $g$, maka komposisi fungsi dapat ditulis:

$$(f\circ g)(x)$$

Dibaca:

$$f \text{ komposisi } g \text{ dari } x$$

atau

$$f \text{ bundaran } g \text{ dari } x$$

Maknanya:

$$(f\circ g)(x)=f(g(x))$$

Artinya, $x$ diproses terlebih dahulu oleh fungsi $g$, kemudian hasilnya diproses oleh fungsi $f$.

  📌 **Catatan:** Pada $(f\circ g)(x)$, fungsi yang dikerjakan terlebih dahulu adalah fungsi yang paling dekat dengan $x$, yaitu $g$.

---

###### 3. Urutan Pengerjaan Fungsi Komposisi

Pada bentuk:

$$(f\circ g)(x)=f(g(x))$$

urutan pengerjaannya adalah:

| Langkah | Proses |
| --- | --- |
| 1 | Masukkan $x$ ke fungsi $g$. |
| 2 | Dapatkan hasil $g(x)$. |
| 3 | Masukkan hasil $g(x)$ ke fungsi $f$. |
| 4 | Hasil akhirnya adalah $f(g(x))$. |

Secara skema:

$$x \longrightarrow g(x) \longrightarrow f(g(x))$$

  💡 **Strategi:** Baca komposisi dari kanan ke kiri. Pada $f\circ g$, fungsi $g$ dikerjakan dahulu, lalu fungsi $f$.

---

###### 4. Contoh Sederhana Fungsi Komposisi

Misalkan:

$$f(x)=2x+1$$

dan

$$g(x)=x+3$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

maka masukkan $g(x)$ ke fungsi $f$.

$$f(g(x))=2(g(x))+1$$

Karena $g(x)=x+3$, maka:

$$f(g(x))=2(x+3)+1$$

$$f(g(x))=2x+6+1$$

$$f(g(x))=2x+7$$

Jadi:

$$(f\circ g)(x)=2x+7$$

---

###### 5. Komposisi $g\circ f$

Selain $(f\circ g)(x)$, kita juga dapat menentukan $(g\circ f)(x)$.

Bentuk:

$$(g\circ f)(x)=g(f(x))$$

Artinya, $x$ diproses terlebih dahulu oleh fungsi $f$, lalu hasilnya diproses oleh fungsi $g$.

Jika:

$$f(x)=2x+1$$

dan

$$g(x)=x+3$$

maka:

$$(g\circ f)(x)=g(f(x))$$

Karena $g(x)=x+3$, maka:

$$g(f(x))=f(x)+3$$

Substitusikan $f(x)=2x+1$.

$$g(f(x))=(2x+1)+3$$

$$g(f(x))=2x+4$$

Jadi:

$$(g\circ f)(x)=2x+4$$

  ⚠️ **Perhatian:** Umumnya $(f\circ g)(x)$ tidak sama dengan $(g\circ f)(x)$.

---

###### 6. Fungsi Komposisi Tidak Selalu Komutatif

Dari contoh sebelumnya diperoleh:

$$(f\circ g)(x)=2x+7$$

sedangkan:

$$(g\circ f)(x)=2x+4$$

Karena:

$$2x+7\ne2x+4$$

maka:

$$(f\circ g)(x)\ne(g\circ f)(x)$$

Artinya, urutan fungsi sangat penting dalam fungsi komposisi.

  📌 **Catatan:** Komposisi fungsi tidak selalu bersifat komutatif. Mengubah urutan fungsi dapat mengubah hasil.

---

###### 7. Fungsi Komposisi dengan Nilai Tertentu

Misalkan:

$$f(x)=3x-2$$

dan

$$g(x)=x^2+1$$

Tentukan $(f\circ g)(2)$.

Langkah pertama, cari $g(2)$.

$$g(2)=2^2+1=4+1=5$$

Langkah kedua, masukkan hasil tersebut ke fungsi $f$.

$$f(g(2))=f(5)$$

$$f(5)=3(5)-2=15-2=13$$

Jadi:

$$(f\circ g)(2)=13$$

---

###### 8. Cara Alternatif Menentukan Nilai Fungsi Komposisi

Untuk menentukan $(f\circ g)(2)$, kita juga dapat mencari bentuk umum $(f\circ g)(x)$ terlebih dahulu.

Misalkan:

$$f(x)=3x-2$$

dan

$$g(x)=x^2+1$$

Maka:

$$(f\circ g)(x)=f(g(x))$$

$$f(g(x))=3(g(x))-2$$

$$f(g(x))=3(x^2+1)-2$$

$$f(g(x))=3x^2+3-2$$

$$f(g(x))=3x^2+1$$

Substitusikan $x=2$.

$$(f\circ g)(2)=3(2)^2+1$$

$$=12+1$$

$$=13$$

Hasilnya sama.

  💡 **Strategi:** Untuk nilai tertentu, boleh menghitung fungsi bagian dalam dulu, atau mencari bentuk umum komposisinya terlebih dahulu.

---

###### 9. Fungsi Komposisi dengan Bentuk Linear

Misalkan:

$$f(x)=4x-5$$

dan

$$g(x)=2x+3$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

maka:

$$f(g(x))=4(g(x))-5$$

Substitusikan $g(x)=2x+3$.

$$f(g(x))=4(2x+3)-5$$

$$=8x+12-5$$

$$=8x+7$$

Jadi:

$$(f\circ g)(x)=8x+7$$

---

###### 10. Fungsi Komposisi dengan Bentuk Kuadrat

Misalkan:

$$f(x)=x^2-1$$

dan

$$g(x)=x+4$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

maka:

$$f(g(x))=(g(x))^2-1$$

Substitusikan $g(x)=x+4$.

$$f(g(x))=(x+4)^2-1$$

$$=x^2+8x+16-1$$

$$=x^2+8x+15$$

Jadi:

$$(f\circ g)(x)=x^2+8x+15$$

---

###### 11. Fungsi Komposisi dengan Bentuk Pecahan

Misalkan:

$$f(x)=\frac{1}{x}$$

dan

$$g(x)=x+2$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

maka:

$$f(g(x))=\frac{1}{g(x)}$$

Substitusikan $g(x)=x+2$.

$$f(g(x))=\frac{1}{x+2}$$

Jadi:

$$(f\circ g)(x)=\frac{1}{x+2}$$

Dengan syarat:

$$x+2\ne0$$

$$x\ne-2$$

  ⚠️ **Perhatian:** Jika hasil komposisi memuat pecahan, penyebut tidak boleh nol.

---

###### 12. Domain Fungsi Komposisi

Pada fungsi komposisi:

$$(f\circ g)(x)=f(g(x))$$

nilai $x$ harus memenuhi dua hal:

1. $x$ harus berada pada domain fungsi $g$.
2. Hasil $g(x)$ harus berada pada domain fungsi $f$.

Dengan kata lain, fungsi komposisi hanya terdefinisi jika proses berurutannya memungkinkan.

Contoh:

$$f(x)=\sqrt{x}$$

dan

$$g(x)=x-3$$

Maka:

$$(f\circ g)(x)=f(g(x))=\sqrt{x-3}$$

Agar terdefinisi pada bilangan real:

$$x-3\ge0$$

$$x\ge3$$

Jadi, domain dari $(f\circ g)(x)$ adalah:

$$x\ge3$$

  📌 **Catatan:** Domain fungsi komposisi harus memperhatikan fungsi bagian dalam dan fungsi bagian luar.

---

###### 13. Komposisi Tiga Fungsi

Fungsi komposisi juga dapat melibatkan tiga fungsi.

Misalkan terdapat fungsi $f$, $g$, dan $h$.

Bentuk:

$$(f\circ g\circ h)(x)$$

berarti:

$$f(g(h(x)))$$

Urutannya:

$$x \longrightarrow h(x) \longrightarrow g(h(x)) \longrightarrow f(g(h(x)))$$

Jadi, fungsi yang dikerjakan terlebih dahulu adalah $h$, lalu $g$, kemudian $f$.

Contoh sederhana:

$$f(x)=x+1$$

$$g(x)=2x$$

$$h(x)=x-3$$

Maka:

$$(f\circ g\circ h)(x)=f(g(h(x)))$$

Pertama:

$$h(x)=x-3$$

Kemudian:

$$g(h(x))=2(x-3)=2x-6$$

Lalu:

$$f(g(h(x)))=(2x-6)+1=2x-5$$

Jadi:

$$(f\circ g\circ h)(x)=2x-5$$

---

###### 14. Fungsi Komposisi dalam Kehidupan Sehari-hari

Fungsi komposisi dapat dimisalkan seperti proses bertahap.

Contoh:

Sebuah toko memberikan diskon $10\%$, lalu menambahkan pajak $5\%$.

Misalkan harga awal adalah $x$.

Fungsi diskon:

$$g(x)=0{,}9x$$

Fungsi pajak:

$$f(x)=1{,}05x$$

Jika diskon dilakukan dahulu, lalu pajak, maka modelnya:

$$(f\circ g)(x)=f(g(x))$$

$$=1{,}05(0{,}9x)$$

$$=0{,}945x$$

Jadi, harga akhir adalah:

$$0{,}945x$$

  💡 **Ingat:** Fungsi komposisi sering menggambarkan proses yang dilakukan secara berurutan.

---

###### 15. Cara Membaca Notasi Fungsi Komposisi

Perhatikan tabel berikut.

| Notasi | Dibaca | Makna |
| --- | --- | --- |
| $(f\circ g)(x)$ | $f$ komposisi $g$ dari $x$ | $f(g(x))$ |
| $(g\circ f)(x)$ | $g$ komposisi $f$ dari $x$ | $g(f(x))$ |
| $(f\circ g)(2)$ | $f$ komposisi $g$ pada $2$ | $f(g(2))$ |
| $(f\circ g\circ h)(x)$ | $f$ komposisi $g$ komposisi $h$ | $f(g(h(x)))$ |

---

###### 16. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Salah urutan pengerjaan | $(f\circ g)(x)$ dikerjakan sebagai $g(f(x))$. | Seharusnya $(f\circ g)(x)=f(g(x))$. |
| Menganggap komposisi selalu komutatif | Menganggap $f\circ g=g\circ f$. | Umumnya $f\circ g\ne g\circ f$. |
| Salah substitusi fungsi | Jika $f(x)=2x+1$, maka $f(g(x))$ ditulis $2x+g(x)$. | Seharusnya $f(g(x))=2g(x)+1$. |
| Lupa menyederhanakan bentuk aljabar | $2(x+3)+1$ dibiarkan begitu saja. | Sederhanakan menjadi $2x+7$. |
| Mengabaikan domain | $\frac{1}{x+2}$ dianggap berlaku untuk semua $x$. | Harus ada syarat $x\ne-2$. |

  ⚠️ **Perhatian:** Kesalahan paling sering pada fungsi komposisi adalah tertukar urutan pengerjaan.

---

###### 17. Rangkuman

- Fungsi komposisi adalah gabungan dua fungsi atau lebih yang dikerjakan secara berurutan.
- Notasi fungsi komposisi:
  $$(f\circ g)(x)$$
- Maknanya:
  $$(f\circ g)(x)=f(g(x))$$
- Pada $f\circ g$, fungsi $g$ dikerjakan terlebih dahulu, lalu hasilnya dimasukkan ke fungsi $f$.
- Secara umum:
  $$(f\circ g)(x)\ne(g\circ f)(x)$$
- Fungsi komposisi dapat dihitung dalam bentuk umum atau pada nilai tertentu.
- Domain fungsi komposisi harus memperhatikan domain fungsi bagian dalam dan fungsi bagian luar.
- Jika komposisi melibatkan tiga fungsi:
  $$(f\circ g\circ h)(x)=f(g(h(x)))$$
- Fungsi komposisi sering menggambarkan proses bertahap dalam kehidupan sehari-hari.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui $f(x)=2x+1$ dan $g(x)=x+3$. Tentukan $(f\circ g)(x)$.

💡 Pembahasan

Gunakan definisi fungsi komposisi.

$$(f\circ g)(x)=f(g(x))$$

Karena $f(x)=2x+1$, maka:

$$f(g(x))=2g(x)+1$$

Substitusikan $g(x)=x+3$.

$$f(g(x))=2(x+3)+1$$

$$=2x+6+1$$

$$=2x+7$$

Jadi:

$$(f\circ g)(x)=2x+7$$

  Contoh Soal 2

Diketahui $f(x)=3x-2$ dan $g(x)=x^2+1$. Tentukan $(f\circ g)(2)$.

💡 Pembahasan

Cari nilai fungsi bagian dalam terlebih dahulu.

$$g(2)=2^2+1=5$$

Kemudian masukkan ke fungsi $f$.

$$(f\circ g)(2)=f(g(2))=f(5)$$

$$f(5)=3(5)-2=15-2=13$$

Jadi:

$$(f\circ g)(2)=13$$

  Contoh Soal 3

Diketahui $f(x)=x^2-1$ dan $g(x)=x+4$. Tentukan $(f\circ g)(x)$.

💡 Pembahasan

Gunakan definisi:

$$(f\circ g)(x)=f(g(x))$$

Karena $f(x)=x^2-1$, maka:

$$f(g(x))=(g(x))^2-1$$

Substitusikan $g(x)=x+4$.

$$f(g(x))=(x+4)^2-1$$

$$=x^2+8x+16-1$$

$$=x^2+8x+15$$

Jadi:

$$(f\circ g)(x)=x^2+8x+15$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Jika $(f\circ g)(x)$ ditulis dalam bentuk fungsi bersarang, maka bentuk yang benar adalah ....

A
$f(g(x))$

B
$g(f(x))$

C
$f(x)+g(x)$

D
$f(x)g(x)$

E
$f(x)-g(x)$

💡 Pembahasan

Berdasarkan definisi fungsi komposisi:

$$(f\circ g)(x)=f(g(x))$$

Jadi, fungsi $g$ dikerjakan terlebih dahulu, lalu hasilnya dimasukkan ke fungsi $f$.

  Latihan Soal 2

Pada $(g\circ f)(x)$, fungsi yang dikerjakan terlebih dahulu adalah ....

A
$g$

B
$f$

C
$x$ dihapus terlebih dahulu

D
$f$ dan $g$ dijumlahkan terlebih dahulu

E
tidak ada fungsi yang dikerjakan

💡 Pembahasan

Bentuk:

$$(g\circ f)(x)=g(f(x))$$

Fungsi yang berada paling dekat dengan $x$ adalah $f$, sehingga $f$ dikerjakan terlebih dahulu.

  Latihan Soal 3

Diketahui $f(x)=2x+1$ dan $g(x)=x+3$. Nilai $(f\circ g)(x)$ adalah ....

A
$2x+4$

B
$2x+7$

C
$x+6$

D
$3x+1$

E
$2x+3$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

$$=2(x+3)+1$$

$$=2x+6+1$$

$$=2x+7$$

  Latihan Soal 4

Diketahui $f(x)=2x+1$ dan $g(x)=x+3$. Nilai $(g\circ f)(x)$ adalah ....

A
$2x+4$

B
$2x+7$

C
$x+4$

D
$3x+2$

E
$2x-4$

💡 Pembahasan

$$(g\circ f)(x)=g(f(x))$$

Karena $g(x)=x+3$, maka:

$$g(f(x))=f(x)+3$$

$$=(2x+1)+3$$

$$=2x+4$$

  Latihan Soal 5

Diketahui $f(x)=3x-2$ dan $g(x)=x^2+1$. Nilai $(f\circ g)(2)$ adalah ....

A
$5$

B
$11$

C
$13$

D
$15$

E
$17$

💡 Pembahasan

Cari $g(2)$ terlebih dahulu.

$$g(2)=2^2+1=5$$

Kemudian:

$$f(g(2))=f(5)=3(5)-2=13$$

  Latihan Soal 6

Diketahui $f(x)=x^2-1$ dan $g(x)=x+4$. Nilai $(f\circ g)(x)$ adalah ....

A
$x^2+4x+15$

B
$x^2+8x+15$

C
$x^2+8x+16$

D
$x^2+4x-1$

E
$x^2-8x+15$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

$$=(x+4)^2-1$$

$$=x^2+8x+16-1$$

$$=x^2+8x+15$$

  Latihan Soal 7

Diketahui $f(x)=\frac{1}{x}$ dan $g(x)=x+2$. Nilai $(f\circ g)(x)$ adalah ....

A
$\frac{1}{x+2}$

B
$\frac{1}{x}+2$

C
$\frac{x+2}{x}$

D
$x+2$

E
$\frac{1}{2x}$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

Karena $f(x)=\frac{1}{x}$, maka:

$$f(g(x))=\frac{1}{g(x)}$$

$$=\frac{1}{x+2}$$

  Latihan Soal 8

Jika $f(x)=\sqrt{x}$ dan $g(x)=x-3$, maka domain dari $(f\circ g)(x)$ adalah ....

A
$x\le3$

B
$x\ge3$

C
$x>3$

D
$x\ne3$

E
semua bilangan real

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))=\sqrt{x-3}$$

Agar terdefinisi pada bilangan real:

$$x-3\ge0$$

$$x\ge3$$

  Latihan Soal 9

Jika $(f\circ g\circ h)(x)$ ditulis dalam bentuk fungsi bersarang, maka bentuk yang benar adalah ....

A
$h(g(f(x)))$

B
$f(g(h(x)))$

C
$f(x)+g(x)+h(x)$

D
$g(f(h(x)))$

E
$h(f(g(x)))$

💡 Pembahasan

Komposisi dikerjakan dari kanan ke kiri.

$$(f\circ g\circ h)(x)=f(g(h(x)))$$

  Latihan Soal 10

Pernyataan yang benar tentang fungsi komposisi adalah ....

A
$(f\circ g)(x)$ selalu sama dengan $(g\circ f)(x)$

B
pada $(f\circ g)(x)$, fungsi $f$ selalu dikerjakan terlebih dahulu

C
pada $(f\circ g)(x)$, fungsi $g$ dikerjakan terlebih dahulu

D
fungsi komposisi hanya berlaku untuk fungsi konstan

E
fungsi komposisi berarti menjumlahkan dua fungsi

💡 Pembahasan

Pada:

$$(f\circ g)(x)=f(g(x))$$

fungsi $g$ dikerjakan terlebih dahulu, lalu hasilnya dimasukkan ke fungsi $f$.

#### Cara Menentukan Fungsi Komposisi

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/menentukan-fungsi-komposisi*

Pada materi sebelumnya, kita telah mempelajari pengertian fungsi komposisi. Sekarang kita akan membahas cara **menentukan fungsi komposisi** secara lebih rinci.

Fungsi komposisi sangat penting karena sering digunakan untuk menggabungkan dua proses atau dua aturan fungsi secara berurutan.

  📌 **Catatan:** Pada fungsi komposisi, urutan pengerjaan sangat penting. Umumnya $(f\circ g)(x)\ne(g\circ f)(x)$.

---

###### 1. Mengingat Kembali Notasi Fungsi Komposisi

Jika terdapat dua fungsi $f$ dan $g$, maka komposisi fungsi $f$ terhadap $g$ ditulis:

$$(f\circ g)(x)$$

Maknanya:

$$(f\circ g)(x)=f(g(x))$$

Artinya, $x$ dimasukkan terlebih dahulu ke fungsi $g$, kemudian hasilnya dimasukkan ke fungsi $f$.

Urutannya:

$$x \longrightarrow g(x) \longrightarrow f(g(x))$$

  💡 **Ingat:** Pada $(f\circ g)(x)$, fungsi yang dikerjakan terlebih dahulu adalah $g$.

---

###### 2. Perbedaan $(f\circ g)(x)$ dan $(g\circ f)(x)$

Dua bentuk berikut berbeda urutan pengerjaannya.

| Notasi | Bentuk Fungsi Bersarang | Urutan Pengerjaan |
| --- | --- | --- |
| $(f\circ g)(x)$ | $f(g(x))$ | $g$ dahulu, lalu $f$. |
| $(g\circ f)(x)$ | $g(f(x))$ | $f$ dahulu, lalu $g$. |

  ⚠️ **Perhatian:** Jangan tertukar. Komposisi dibaca dari kanan ke kiri saat menentukan urutan pengerjaan.

---

###### 3. Langkah Menentukan $(f\circ g)(x)$

Untuk menentukan:

$$(f\circ g)(x)$$

lakukan langkah berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tulis bentuk $(f\circ g)(x)=f(g(x))$. |
| 2 | Perhatikan rumus fungsi $f(x)$. |
| 3 | Ganti setiap $x$ pada $f(x)$ dengan $g(x)$. |
| 4 | Sederhanakan bentuk aljabarnya. |

  💡 **Strategi:** Jika $f(x)=2x+5$, maka $f(g(x))=2g(x)+5$.

---

###### 4. Contoh Menentukan $(f\circ g)(x)$

Diketahui:

$$f(x)=3x+2$$

dan

$$g(x)=x-4$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

maka ganti $x$ pada fungsi $f(x)$ dengan $g(x)$.

$$f(g(x))=3g(x)+2$$

Substitusikan $g(x)=x-4$.

$$f(g(x))=3(x-4)+2$$

$$=3x-12+2$$

$$=3x-10$$

Jadi:

$$(f\circ g)(x)=3x-10$$

---

###### 5. Menentukan $(g\circ f)(x)$

Dari fungsi yang sama:

$$f(x)=3x+2$$

dan

$$g(x)=x-4$$

Tentukan $(g\circ f)(x)$.

Karena:

$$(g\circ f)(x)=g(f(x))$$

maka ganti $x$ pada fungsi $g(x)$ dengan $f(x)$.

Karena $g(x)=x-4$, maka:

$$g(f(x))=f(x)-4$$

Substitusikan $f(x)=3x+2$.

$$g(f(x))=(3x+2)-4$$

$$=3x-2$$

Jadi:

$$(g\circ f)(x)=3x-2$$

Perhatikan:

$$(f\circ g)(x)=3x-10$$

sedangkan:

$$(g\circ f)(x)=3x-2$$

Jadi:

$$(f\circ g)(x)\ne(g\circ f)(x)$$

---

###### 6. Menentukan Komposisi dengan Fungsi Kuadrat

Diketahui:

$$f(x)=x^2+1$$

dan

$$g(x)=2x-3$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

dan $f(x)=x^2+1$, maka:

$$f(g(x))=(g(x))^2+1$$

Substitusikan $g(x)=2x-3$.

$$f(g(x))=(2x-3)^2+1$$

$$=4x^2-12x+9+1$$

$$=4x^2-12x+10$$

Jadi:

$$(f\circ g)(x)=4x^2-12x+10$$

  📌 **Catatan:** Jika fungsi luar berbentuk kuadrat, seluruh fungsi bagian dalam harus dikuadratkan.

---

###### 7. Menentukan Komposisi dengan Fungsi Pecahan

Diketahui:

$$f(x)=\frac{2}{x+1}$$

dan

$$g(x)=x-3$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

maka ganti $x$ pada $f(x)$ dengan $g(x)$.

$$f(g(x))=\frac{2}{g(x)+1}$$

Substitusikan $g(x)=x-3$.

$$f(g(x))=\frac{2}{(x-3)+1}$$

$$=\frac{2}{x-2}$$

Jadi:

$$(f\circ g)(x)=\frac{2}{x-2}$$

Dengan syarat:

$$x-2\ne0$$

$$x\ne2$$

  ⚠️ **Perhatian:** Jika komposisi menghasilkan pecahan, penyebut tidak boleh nol.

---

###### 8. Menentukan Komposisi dengan Fungsi Akar

Diketahui:

$$f(x)=\sqrt{x}$$

dan

$$g(x)=2x+5$$

Tentukan $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))$$

maka:

$$f(g(x))=\sqrt{g(x)}$$

Substitusikan $g(x)=2x+5$.

$$f(g(x))=\sqrt{2x+5}$$

Jadi:

$$(f\circ g)(x)=\sqrt{2x+5}$$

Dengan syarat:

$$2x+5\ge0$$

$$2x\ge-5$$

$$x\ge-\frac52$$

Jadi, domainnya adalah:

$$x\ge-\frac52$$

---

###### 9. Menentukan Nilai Komposisi pada Nilai Tertentu

Diketahui:

$$f(x)=4x-1$$

dan

$$g(x)=x^2+2$$

Tentukan $(f\circ g)(3)$.

Cara pertama, hitung fungsi bagian dalam terlebih dahulu.

$$g(3)=3^2+2=9+2=11$$

Kemudian masukkan ke fungsi $f$.

$$(f\circ g)(3)=f(g(3))=f(11)$$

$$f(11)=4(11)-1=44-1=43$$

Jadi:

$$(f\circ g)(3)=43$$

---

###### 10. Menentukan Nilai Komposisi dengan Bentuk Umum

Diketahui:

$$f(x)=4x-1$$

dan

$$g(x)=x^2+2$$

Tentukan $(f\circ g)(3)$ dengan mencari bentuk umum terlebih dahulu.

$$(f\circ g)(x)=f(g(x))$$

Karena $f(x)=4x-1$, maka:

$$f(g(x))=4g(x)-1$$

Substitusikan $g(x)=x^2+2$.

$$f(g(x))=4(x^2+2)-1$$

$$=4x^2+8-1$$

$$=4x^2+7$$

Substitusikan $x=3$.

$$(f\circ g)(3)=4(3)^2+7$$

$$=36+7$$

$$=43$$

Hasilnya sama.

  💡 **Strategi:** Untuk nilai tertentu, pilih cara yang paling singkat. Jika hanya ditanya satu nilai, menghitung dari fungsi bagian dalam sering lebih cepat.

---

###### 11. Menentukan Komposisi Tiga Fungsi

Diketahui:

$$f(x)=x+2$$

$$g(x)=3x$$

$$h(x)=x-5$$

Tentukan $(f\circ g\circ h)(x)$.

Karena:

$$(f\circ g\circ h)(x)=f(g(h(x)))$$

maka fungsi yang dikerjakan pertama adalah $h$.

Pertama:

$$h(x)=x-5$$

Kedua:

$$g(h(x))=3(x-5)=3x-15$$

Ketiga:

$$f(g(h(x)))=(3x-15)+2$$

$$=3x-13$$

Jadi:

$$(f\circ g\circ h)(x)=3x-13$$

---

###### 12. Menentukan Komposisi Jika Diketahui Tabel Fungsi

Fungsi komposisi juga dapat ditentukan dari tabel.

Misalkan diberikan tabel berikut.

| $x$ | $f(x)$ | $g(x)$ |
| --- | --- | --- |
| $1$ | $4$ | $2$ |
| $2$ | $7$ | $3$ |
| $3$ | $9$ | $1$ |
| $4$ | $6$ | $4$ |

Tentukan $(f\circ g)(1)$.

Karena:

$$(f\circ g)(1)=f(g(1))$$

Dari tabel:

$$g(1)=2$$

Maka:

$$f(g(1))=f(2)$$

Dari tabel:

$$f(2)=7$$

Jadi:

$$(f\circ g)(1)=7$$

  📌 **Catatan:** Jika fungsi diberikan dalam tabel, baca nilai fungsi bagian dalam terlebih dahulu.

---

###### 13. Menentukan Komposisi dari Diagram Panah

Dalam diagram panah, komposisi fungsi berarti mengikuti panah secara berurutan.

Misalnya:

$$x \xrightarrow{g} g(x) \xrightarrow{f} f(g(x))$$

Jika diketahui:

$$1 \xrightarrow{g} 4$$

dan

$$4 \xrightarrow{f} 10$$

maka:

$$(f\circ g)(1)=10$$

  📌 **Gambar 1.** Diagram panah fungsi komposisi yang menunjukkan alur $x \to g(x) \to f(g(x))$.

---

###### 14. Menentukan Domain Fungsi Komposisi

Domain fungsi komposisi harus memperhatikan dua hal:

1. $x$ harus memenuhi domain fungsi bagian dalam.
2. Hasil fungsi bagian dalam harus memenuhi domain fungsi bagian luar.

Contoh:

$$f(x)=\frac{1}{x}$$

dan

$$g(x)=x-4$$

Maka:

$$(f\circ g)(x)=f(g(x))=\frac{1}{x-4}$$

Syarat:

$$x-4\ne0$$

$$x\ne4$$

Jadi, domainnya adalah semua bilangan real kecuali $4$.

$$x\in\mathbb{R},\ x\ne4$$

---

###### 15. Domain Komposisi dengan Akar

Diketahui:

$$f(x)=\sqrt{x}$$

dan

$$g(x)=5-x$$

Tentukan domain dari $(f\circ g)(x)$.

Karena:

$$(f\circ g)(x)=f(g(x))=\sqrt{5-x}$$

Syarat akar:

$$5-x\ge0$$

$$-x\ge-5$$

Kalikan dengan $-1$, tanda pertidaksamaan berubah.

$$x\le5$$

Jadi, domainnya adalah:

$$x\le5$$

  ⚠️ **Perhatian:** Untuk bentuk akar, bagian dalam akar harus tidak negatif.

---

###### 16. Menentukan Fungsi Komposisi dari Proses Bertahap

Fungsi komposisi dapat digunakan untuk memodelkan proses bertahap.

Contoh:

Harga barang mula-mula $x$ rupiah. Barang diberi diskon $20\%$, lalu dikenai pajak $10\%$.

Fungsi diskon:

$$g(x)=0{,}8x$$

Fungsi pajak:

$$f(x)=1{,}1x$$

Karena diskon dilakukan dahulu, kemudian pajak, maka:

$$(f\circ g)(x)=f(g(x))$$

$$=1{,}1(0{,}8x)$$

$$=0{,}88x$$

Jadi, harga akhir adalah:

$$0{,}88x$$

---

###### 17. Menentukan Komposisi dan Menafsirkan Hasil

Jika harga awal barang adalah Rp$200.000$, maka harga akhir pada contoh sebelumnya adalah:

$$0{,}88x$$

Substitusikan:

$$x=200.000$$

Maka:

$$0{,}88(200.000)=176.000$$

Jadi, harga akhir barang adalah:

$$\text{Rp}176.000$$

  💡 **Ingat:** Fungsi komposisi sering digunakan untuk proses berurutan seperti diskon, pajak, konversi, dan perubahan skala.

---

###### 18. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Tertukar urutan komposisi | $(f\circ g)(x)$ dihitung sebagai $g(f(x))$. | Seharusnya $(f\circ g)(x)=f(g(x))$. |
| Salah mengganti variabel | Jika $f(x)=x^2+1$, maka $f(g(x))=g(x^2)+1$. | Seharusnya $f(g(x))=(g(x))^2+1$. |
| Tidak memakai tanda kurung | $(2x-3)^2$ ditulis $2x^2-3^2$. | Gunakan tanda kurung saat mengganti $x$ dengan fungsi lain. |
| Mengabaikan domain | $\frac{2}{x-2}$ dianggap berlaku untuk semua $x$. | Harus ada syarat $x\ne2$. |
| Salah membaca tabel fungsi | Untuk $f(g(1))$, langsung mengambil $f(1)$. | Cari dulu $g(1)$, lalu gunakan hasilnya sebagai masukan fungsi $f$. |

  ⚠️ **Perhatian:** Gunakan tanda kurung dengan benar agar substitusi fungsi tidak salah.

---

###### 19. Rangkuman

- Fungsi komposisi adalah gabungan dua fungsi atau lebih secara berurutan.
- Notasi:
  $$(f\circ g)(x)=f(g(x))$$
- Pada $(f\circ g)(x)$, fungsi $g$ dikerjakan terlebih dahulu.
- Pada $(g\circ f)(x)$, fungsi $f$ dikerjakan terlebih dahulu.
- Umumnya:
  $$(f\circ g)(x)\ne(g\circ f)(x)$$
- Untuk menentukan komposisi, ganti variabel pada fungsi luar dengan fungsi bagian dalam.
- Gunakan tanda kurung saat melakukan substitusi.
- Jika fungsi memuat pecahan, periksa syarat penyebut tidak nol.
- Jika fungsi memuat akar, periksa syarat bagian dalam akar tidak negatif.
- Fungsi komposisi dapat ditentukan dari rumus, tabel, diagram panah, atau proses kehidupan sehari-hari.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui $f(x)=3x+2$ dan $g(x)=x-4$. Tentukan $(f\circ g)(x)$ dan $(g\circ f)(x)$.

💡 Pembahasan

Tentukan $(f\circ g)(x)$ terlebih dahulu.

$$(f\circ g)(x)=f(g(x))$$

$$=3(x-4)+2$$

$$=3x-12+2$$

$$=3x-10$$

Jadi:

$$(f\circ g)(x)=3x-10$$

Selanjutnya tentukan $(g\circ f)(x)$.

$$(g\circ f)(x)=g(f(x))$$

Karena $g(x)=x-4$, maka:

$$g(f(x))=f(x)-4$$

$$=(3x+2)-4$$

$$=3x-2$$

Jadi:

$$(g\circ f)(x)=3x-2$$

  Contoh Soal 2

Diketahui $f(x)=x^2+1$ dan $g(x)=2x-3$. Tentukan $(f\circ g)(x)$.

💡 Pembahasan

Gunakan definisi:

$$(f\circ g)(x)=f(g(x))$$

Karena $f(x)=x^2+1$, maka:

$$f(g(x))=(g(x))^2+1$$

Substitusikan $g(x)=2x-3$.

$$f(g(x))=(2x-3)^2+1$$

$$=4x^2-12x+9+1$$

$$=4x^2-12x+10$$

Jadi:

$$(f\circ g)(x)=4x^2-12x+10$$

  Contoh Soal 3

Diketahui $f(x)=\frac{2}{x+1}$ dan $g(x)=x-3$. Tentukan $(f\circ g)(x)$ beserta syaratnya.

💡 Pembahasan

Gunakan definisi:

$$(f\circ g)(x)=f(g(x))$$

Karena:

$$f(x)=\frac{2}{x+1}$$

maka:

$$f(g(x))=\frac{2}{g(x)+1}$$

Substitusikan $g(x)=x-3$.

$$f(g(x))=\frac{2}{(x-3)+1}$$

$$=\frac{2}{x-2}$$

Syarat penyebut:

$$x-2\ne0$$

$$x\ne2$$

Jadi:

$$(f\circ g)(x)=\frac{2}{x-2},\quad x\ne2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Diketahui $f(x)=2x+5$ dan $g(x)=x-1$. Nilai $(f\circ g)(x)$ adalah ....

A
$2x+3$

B
$2x+4$

C
$2x+5$

D
$2x+6$

E
$x+4$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

$$=2(x-1)+5$$

$$=2x-2+5$$

$$=2x+3$$

  Latihan Soal 2

Diketahui $f(x)=2x+5$ dan $g(x)=x-1$. Nilai $(g\circ f)(x)$ adalah ....

A
$2x+3$

B
$2x+4$

C
$2x+4$

D
$2x+6$

E
$x+4$

💡 Pembahasan

$$(g\circ f)(x)=g(f(x))$$

Karena $g(x)=x-1$, maka:

$$g(f(x))=f(x)-1$$

$$=(2x+5)-1$$

$$=2x+4$$

  Latihan Soal 3

Diketahui $f(x)=x^2+1$ dan $g(x)=x+2$. Nilai $(f\circ g)(x)$ adalah ....

A
$x^2+2x+5$

B
$x^2+4x+5$

C
$x^2+4x+4$

D
$x^2+2x+1$

E
$x^2+5$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

$$=(x+2)^2+1$$

$$=x^2+4x+4+1$$

$$=x^2+4x+5$$

  Latihan Soal 4

Diketahui $f(x)=x^2-3x$ dan $g(x)=2x+1$. Nilai $(f\circ g)(x)$ adalah ....

A
$4x^2+2x+1$

B
$4x^2-2x-2$

C
$4x^2-6x+1$

D
$2x^2-3x+1$

E
$4x^2+2x-2$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

$$=(2x+1)^2-3(2x+1)$$

$$=4x^2+4x+1-6x-3$$

$$=4x^2-2x-2$$

  Latihan Soal 5

Diketahui $f(x)=\frac{3}{x-1}$ dan $g(x)=x+4$. Nilai $(f\circ g)(x)$ adalah ....

A
$\frac{3}{x+3}$

B
$\frac{3}{x+4}$

C
$\frac{3}{x-5}$

D
$\frac{x+4}{3}$

E
$\frac{1}{x+3}$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

Karena:

$$f(x)=\frac{3}{x-1}$$

maka:

$$f(g(x))=\frac{3}{g(x)-1}$$

$$=\frac{3}{(x+4)-1}$$

$$=\frac{3}{x+3}$$

  Latihan Soal 6

Diketahui $f(x)=\sqrt{x}$ dan $g(x)=2x+5$. Nilai $(f\circ g)(x)$ adalah ....

A
$\sqrt{x}+2x+5$

B
$\sqrt{2x+5}$

C
$2\sqrt{x}+5$

D
$\sqrt{x+5}$

E
$2x+\sqrt{5}$

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))$$

Karena $f(x)=\sqrt{x}$, maka:

$$f(g(x))=\sqrt{g(x)}$$

$$=\sqrt{2x+5}$$

  Latihan Soal 7

Jika $f(x)=4x-1$ dan $g(x)=x^2+2$, maka nilai $(f\circ g)(3)$ adalah ....

A
$39$

B
$41$

C
$43$

D
$45$

E
$47$

💡 Pembahasan

Cari $g(3)$.

$$g(3)=3^2+2=11$$

Kemudian:

$$(f\circ g)(3)=f(11)$$

$$=4(11)-1$$

$$=43$$

  Latihan Soal 8

Diketahui $f(x)=x+2$, $g(x)=3x$, dan $h(x)=x-5$. Nilai $(f\circ g\circ h)(x)$ adalah ....

A
$3x-15$

B
$3x-13$

C
$3x-10$

D
$3x+2$

E
$3x+13$

💡 Pembahasan

$$(f\circ g\circ h)(x)=f(g(h(x)))$$

$$h(x)=x-5$$

$$g(h(x))=3(x-5)=3x-15$$

$$f(g(h(x)))=(3x-15)+2=3x-13$$

  Latihan Soal 9

Jika $f(x)=\sqrt{x}$ dan $g(x)=5-x$, maka domain dari $(f\circ g)(x)$ adalah ....

A
$x\ge5$

B
$x\le5$

C
$x>5$

D
$x< -5$

E
semua bilangan real

💡 Pembahasan

$$(f\circ g)(x)=f(g(x))=\sqrt{5-x}$$

Syarat akar:

$$5-x\ge0$$

$$x\le5$$

  Latihan Soal 10

Harga barang mula-mula $x$ rupiah. Barang diberi diskon $20\%$, lalu dikenai pajak $10\%$. Jika proses diskon dilakukan dahulu, lalu pajak, maka harga akhirnya adalah ....

A
$0{,}8x$

B
$0{,}9x$

C
$0{,}88x$

D
$1{,}1x$

E
$1{,}3x$

💡 Pembahasan

Diskon $20\%$ berarti harga menjadi:

$$0{,}8x$$

Pajak $10\%$ berarti dikalikan $1{,}1$.

Maka harga akhir:

$$1{,}1(0{,}8x)=0{,}88x$$

## (C) Fungsi Invers

### Fungsi Injektif, Surjektif, dan Bijektif

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 2 Komposisi Fungsi dan Fungsi Invers, subbab B.1 Fungsi Injektif, Surjektif, dan Bijektif, hlm. 108–113.*

Bola yang dilempar ke atas akan naik lalu turun, sehingga melewati posisi yang sama pada dua waktu berbeda: dua masukan berbeda menghasilkan satu keluaran yang sama. Sebaliknya, benda yang bergerak dengan kecepatan tetap tidak pernah berada di posisi yang sama pada dua waktu berbeda.

Berdasarkan jenis relasinya, fungsi dibagi menjadi tiga jenis:

- **Fungsi surjektif** (fungsi *onto*): setiap anggota kodomain memiliki pasangan di domain, sehingga range sama dengan kodomain.
- **Fungsi injektif** (fungsi satu-satu): setiap anggota domain yang berbeda dipasangkan dengan anggota kodomain yang berbeda.
- **Fungsi bijektif** (korespondensi satu-satu): fungsi yang sekaligus injektif dan surjektif.

#### Relasi Invers dari Grafik

Garis lurus $y = \tfrac{1}{2}x + 3$: jika setiap koordinat $(x, y)$ ditukar menjadi $(y, x)$, misalnya $(2, 4)$ menjadi $(4, 2)$, diperoleh relasi invers yang juga berupa garis lurus, sehingga fungsi inversnya juga fungsi, yaitu $y = 2x - 6$.

Untuk fungsi kuadrat seperti $y = 2x^2 - 8$, pertukaran koordinat menghasilkan relasi yang bukan fungsi. Agar memiliki invers yang berupa fungsi, domain fungsi kuadrat perlu dibatasi sehingga menjadi bijektif.

### Fungsi Invers

#### Fungsi Invers

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XI (Edisi Revisi), Dicky Susanto dkk., Kemendikbudristek, 2024, Bab 2 Komposisi Fungsi dan Fungsi Invers, subbab B.2 Fungsi Invers, hlm. 113–125.*

**Fungsi invers** adalah fungsi yang operasinya berkebalikan dari fungsi asalnya; fungsi ini memetakan anggota range fungsi asal ke anggota domain fungsi asal. Fungsi invers ditulis $f^{-1}$; tanda $-1$ di sini **bukan pangkat**.

Syarat: invers suatu fungsi juga merupakan fungsi jika fungsi asalnya **bijektif**.

##### Langkah Menentukan Rumus Fungsi Invers

1. Ubah $y = f(x)$ menjadi bentuk $x = f(y)$.
2. Ubah persamaan $x = f(y)$ menjadi bentuk $y = \ldots$
3. Ganti $y$ dengan $f^{-1}(x)$, sehingga diperoleh rumus fungsi invers.

Contoh dari diagram panah buku: jika $f(x) = x + 3$, maka $f^{-1}(x) = x - 3$.

##### Masalah: Harga Awal Pakaian

Harga sebuah pakaian setelah diskon 40% lalu potongan Rp15.000,00 adalah Rp45.000,00. Berapa harga awalnya?

Fungsi pertama (diskon 40%) $g(x) = 0{,}6x$ dan fungsi kedua (potongan) $f(x) = x - 15.000$. Dengan mesin fungsi yang dikerjakan secara terbalik:

$$45.000 + 15.000 = 60.000, \qquad \frac{10}{6} \times 60.000 = 100.000$$

Jadi, harga awal pakaian Rp100.000,00.

##### Masalah: Tabel Harga Kaos

| Banyak kaos (masukan) | 1 | 3 | 5 | 10 |
|---|---|---|---|---|
| Harga (keluaran) | 55.000 | 165.000 | 275.000 | 550.000 |

Membalik keluaran menjadi masukan menghasilkan fungsi invers: dari harga dapat ditentukan banyak kaos. Grafik banyak kaos terhadap harga dan grafik harga terhadap banyak kaos merupakan pencerminan satu sama lain, dan domain fungsi invers adalah range fungsi asal.

#### Fungsi Invers dan Syarat Bijektif

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas X, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab 3 Fungsi, subbab 3.5 Fungsi Invers, Masalah 3.4–3.5, Definisi 3.3–3.4, dan Sifat 3.3, hlm. 99–104.*

##### Masalah: Keuntungan Pedagang Kain

Keuntungan seorang pedagang kain dari penjualan $x$ potong kain mengikuti fungsi $f(x) = 500x + 1.000$ (rupiah).

a) Berapa keuntungan jika terjual 50 potong kain?
b) Berapa potong kain yang harus terjual agar keuntungannya Rp100.000,00?

**Penyelesaian:**

a) $f(50) = 500(50) + 1.000 = 26.000$. Keuntungannya Rp26.000,00.

b) $100.000 = 500x + 1.000 \Rightarrow 500x = 99.000 \Rightarrow x = 198$. Harus terjual 198 potong kain.

Butir (a) mencari nilai $f(x)$ dari $x$ (fungsi $f$ memetakan $A$ ke $B$), sedangkan butir (b) mencari $x$ dari nilai $f(x)$ (kebalikannya, memetakan $B$ ke $A$). Pemetaan kebalikan inilah invers fungsi.

##### Definisi Invers Fungsi

Jika fungsi $f$ memetakan $A$ ke $B$ dan dinyatakan dalam pasangan terurut $f = \{(x, y) \mid x \in A \text{ dan } y \in B\}$, maka invers fungsi $f$ (dilambangkan $f^{-1}$) adalah relasi yang memetakan $B$ ke $A$:

$$f^{-1} = \{(y, x) \mid y \in B \text{ dan } x \in A\}$$

##### Invers Belum Tentu Fungsi

Misalkan $f: A \to B$ fungsi bijektif, $g: C \to D$ fungsi injektif (tetapi tidak surjektif), dan $h: E \to F$ fungsi surjektif (tetapi tidak injektif). Jika ketiga pemetaan dibalik:

- $f^{-1}$ merupakan fungsi, karena setiap anggota $B$ memiliki tepat satu pasangan di $A$.
- $g^{-1}$ bukan fungsi, karena ada anggota $D$ yang tidak memiliki pasangan di $C$.
- $h^{-1}$ bukan fungsi, karena ada anggota $F$ yang memiliki lebih dari satu pasangan di $E$.

Jadi, invers suatu fungsi belum tentu fungsi; bisa saja hanya relasi biasa. Invers yang merupakan fungsi disebut **fungsi invers**.

##### Sifat: Syarat Fungsi Invers

Suatu fungsi $f: A \to B$ memiliki fungsi invers $f^{-1}: B \to A$ **jika dan hanya jika** $f$ merupakan fungsi bijektif.

##### Definisi Fungsi Invers

Jika fungsi $f: D_f \to R_f$ adalah fungsi bijektif, maka invers fungsi $f$ adalah fungsi $f^{-1}: R_f \to D_f$, dengan $D_f$ daerah asal dan $R_f$ daerah hasil fungsi $f$. Jika $y = f(x)$, maka $x = f^{-1}(y)$.

#### Pengertian Fungsi Invers

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/pengertian-fungsi-invers*

Pada materi sebelumnya, kita telah mempelajari cara menentukan fungsi komposisi. Sekarang kita akan membahas **fungsi invers**.

Fungsi invers adalah fungsi kebalikan. Jika suatu fungsi mengubah masukan menjadi keluaran, maka fungsi invers mengembalikan keluaran tersebut menjadi masukan semula.

  📌 **Catatan:** Fungsi invers dapat dipahami sebagai proses membalik langkah suatu fungsi.

---

###### 1. Mengingat Kembali Fungsi

Fungsi adalah aturan yang memasangkan setiap nilai masukan dengan tepat satu nilai keluaran.

Jika fungsi $f$ memetakan $x$ menjadi $y$, maka ditulis:

$$f(x)=y$$

Artinya, $x$ adalah masukan dan $y$ adalah keluaran.

Contoh:

$$f(x)=2x+3$$

Jika $x=4$, maka:

$$f(4)=2(4)+3=11$$

Jadi, fungsi $f$ mengubah $4$ menjadi $11$.

---

###### 2. Ide Dasar Fungsi Invers

Jika fungsi $f$ mengubah $4$ menjadi $11$, maka fungsi invers dari $f$ akan mengubah $11$ kembali menjadi $4$.

Secara sederhana:

$$4 \xrightarrow{f} 11$$

maka:

$$11 \xrightarrow{f^{-1}} 4$$

Notasi fungsi invers dari $f$ adalah:

$$f^{-1}$$

Dibaca:

$$f \text{ invers}$$

  💡 **Ingat:** Tanda $f^{-1}$ pada fungsi invers bukan berarti $\frac{1}{f}$. Notasi $f^{-1}$ berarti fungsi kebalikan dari $f$.

---

###### 3. Pengertian Fungsi Invers

**Fungsi invers** adalah fungsi yang membalikkan hasil dari fungsi asal.

Jika:

$$f(x)=y$$

maka fungsi inversnya memenuhi:

$$f^{-1}(y)=x$$

Dengan kata lain, fungsi invers mengembalikan keluaran $y$ menjadi masukan semula $x$.

Contoh:

Jika:

$$f(2)=7$$

maka:

$$f^{-1}(7)=2$$

---

###### 4. Fungsi Invers sebagai Proses Kebalikan

Misalkan suatu proses fungsi adalah:

$$x \longrightarrow 2x \longrightarrow 2x+3$$

Fungsi tersebut dapat ditulis:

$$f(x)=2x+3$$

Untuk membalik prosesnya, kita mulai dari hasil akhir.

Misalkan:

$$y=2x+3$$

Agar kembali ke $x$, lakukan langkah kebalikan:

| Proses Fungsi | Proses Invers |
| --- | --- |
| Dikali $2$ | Dibagi $2$ |
| Ditambah $3$ | Dikurangi $3$ |

Karena fungsi asal melakukan kali $2$ lalu tambah $3$, maka fungsi invers melakukan kurang $3$ lalu bagi $2$.

Jadi:

$$f^{-1}(x)=\frac{x-3}{2}$$

---

###### 5. Contoh Sederhana Fungsi Invers

Diketahui:

$$f(x)=x+5$$

Fungsi ini menambahkan $5$ pada setiap masukan.

Jika ingin membalik prosesnya, maka kita harus mengurangi $5$.

Jadi fungsi inversnya adalah:

$$f^{-1}(x)=x-5$$

Periksa:

Jika $x=8$, maka:

$$f(8)=8+5=13$$

Kemudian:

$$f^{-1}(13)=13-5=8$$

Hasilnya kembali ke nilai semula.

  📌 **Catatan:** Fungsi invers harus dapat mengembalikan hasil fungsi ke masukan asal.

---

###### 6. Notasi Fungsi Invers

Notasi fungsi invers dari $f$ adalah:

$$f^{-1}(x)$$

Dibaca:

$$f \text{ invers dari } x$$

Perhatikan perbedaan berikut.

| Notasi | Makna |
| --- | --- |
| $f^{-1}(x)$ | Fungsi invers dari $f$. |
| $\frac{1}{f(x)}$ | Kebalikan nilai dari $f(x)$. |

Contoh:

Jika:

$$f(x)=2x+3$$

maka:

$$f^{-1}(x)=\frac{x-3}{2}$$

Sedangkan:

$$\frac{1}{f(x)}=\frac{1}{2x+3}$$

Keduanya berbeda.

  ⚠️ **Perhatian:** Jangan menyamakan $f^{-1}(x)$ dengan $\frac{1}{f(x)}$.

---

###### 7. Hubungan Fungsi dan Fungsi Invers

Jika fungsi $f$ memiliki invers $f^{-1}$, maka berlaku:

$$f(a)=b$$

jika dan hanya jika:

$$f^{-1}(b)=a$$

Contoh:

Jika:

$$f(3)=10$$

maka:

$$f^{-1}(10)=3$$

Artinya, fungsi invers membalik pasangan nilai dari fungsi asal.

---

###### 8. Fungsi Invers dan Pasangan Berurutan

Jika fungsi $f$ memiliki pasangan berurutan:

$$(1,4),\ (2,7),\ (3,10)$$

maka fungsi inversnya memiliki pasangan berurutan yang dibalik:

$$(4,1),\ (7,2),\ (10,3)$$

| Pasangan Fungsi $f$ | Pasangan Fungsi Invers $f^{-1}$ |
| --- | --- |
| $(1,4)$ | $(4,1)$ |
| $(2,7)$ | $(7,2)$ |
| $(3,10)$ | $(10,3)$ |

  💡 **Ingat:** Fungsi invers menukar posisi domain dan range dari fungsi asal.

---

###### 9. Domain dan Range Fungsi Invers

Jika fungsi $f$ memiliki domain $A$ dan range $B$, maka fungsi invers $f^{-1}$ memiliki domain $B$ dan range $A$.

Artinya:

| Fungsi | Domain | Range |
| --- | --- | --- |
| $f$ | $A$ | $B$ |
| $f^{-1}$ | $B$ | $A$ |

Contoh:

Jika fungsi $f$ memetakan:

$$1 \to 4,\quad 2 \to 7,\quad 3 \to 10$$

maka domain fungsi $f$ adalah:

$$\{1,2,3\}$$

dan range fungsi $f$ adalah:

$$\{4,7,10\}$$

Untuk fungsi invers, domainnya menjadi:

$$\{4,7,10\}$$

dan range-nya menjadi:

$$\{1,2,3\}$$

---

###### 10. Syarat Fungsi Memiliki Invers

Tidak semua fungsi memiliki invers yang juga merupakan fungsi.

Suatu fungsi memiliki invers yang merupakan fungsi jika fungsi tersebut bersifat **satu-satu**.

Fungsi satu-satu artinya setiap nilai keluaran berasal dari tepat satu nilai masukan.

Contoh fungsi satu-satu:

| $x$ | $f(x)$ |
| --- | --- |
| $1$ | $3$ |
| $2$ | $5$ |
| $3$ | $7$ |

Setiap keluaran berbeda. Maka inversnya dapat menjadi fungsi.

---

###### 11. Contoh Fungsi yang Tidak Memiliki Invers sebagai Fungsi

Perhatikan tabel berikut.

| $x$ | $f(x)$ |
| --- | --- |
| $-2$ | $4$ |
| $2$ | $4$ |
| $3$ | $9$ |

Pada fungsi tersebut:

$$f(-2)=4$$

dan

$$f(2)=4$$

Dua masukan berbeda menghasilkan keluaran yang sama.

Jika pasangan dibalik, diperoleh:

$$(4,-2)$$

dan

$$(4,2)$$

Artinya, satu masukan $4$ memiliki dua keluaran, yaitu $-2$ dan $2$.

Maka inversnya bukan fungsi.

  ⚠️ **Perhatian:** Agar invers menjadi fungsi, setiap keluaran pada fungsi asal harus unik.

---

###### 12. Fungsi Linear dan Fungsi Invers

Fungsi linear berbentuk:

$$f(x)=ax+b$$

dengan $a\ne0$.

Fungsi linear seperti ini memiliki invers karena setiap nilai $x$ menghasilkan nilai $f(x)$ yang berbeda.

Contoh:

$$f(x)=3x+1$$

Jika $x$ berbeda, maka hasil $3x+1$ juga berbeda.

Karena itu, fungsi linear dengan $a\ne0$ memiliki invers.

  📌 **Catatan:** Fungsi linear $f(x)=ax+b$ memiliki invers jika $a\ne0$.

---

###### 13. Fungsi Kuadrat dan Fungsi Invers

Fungsi kuadrat seperti:

$$f(x)=x^2$$

tidak memiliki invers yang berupa fungsi jika domainnya semua bilangan real.

Sebab:

$$f(2)=4$$

dan

$$f(-2)=4$$

Dua nilai masukan berbeda menghasilkan keluaran sama.

Jika dibalik, maka:

$$f^{-1}(4)=2$$

dan

$$f^{-1}(4)=-2$$

Satu masukan menghasilkan dua keluaran, sehingga bukan fungsi.

Namun, fungsi kuadrat dapat memiliki invers jika domainnya dibatasi.

Misalnya:

$$f(x)=x^2,\quad x\ge0$$

Pada domain $x\ge0$, fungsi tersebut memiliki invers:

$$f^{-1}(x)=\sqrt{x}$$

  📌 **Catatan:** Fungsi kuadrat dapat memiliki invers jika domainnya dibatasi agar menjadi satu-satu.

---

###### 14. Fungsi Invers dalam Diagram Panah

Fungsi invers dapat digambarkan menggunakan diagram panah dengan arah berlawanan.

Jika fungsi $f$ memetakan:

$$1 \to 5$$

$$2 \to 8$$

$$3 \to 11$$

maka fungsi invers $f^{-1}$ memetakan:

$$5 \to 1$$

$$8 \to 2$$

$$11 \to 3$$

  📊 **Gambar 1.** Diagram panah fungsi $f$ dan fungsi invers $f^{-1}$, dengan arah panah yang berlawanan.

---

###### 15. Fungsi Invers dalam Grafik

Jika fungsi $f$ memiliki invers, maka grafik fungsi invers $f^{-1}$ merupakan pencerminan grafik $f$ terhadap garis:

$$y=x$$

Artinya, setiap titik pada fungsi $f$:

$$(a,b)$$

akan berubah menjadi titik pada fungsi invers:

$$(b,a)$$

Contoh:

Jika grafik fungsi $f$ melalui titik:

$$(2,5)$$

maka grafik fungsi invers $f^{-1}$ melalui titik:

$$(5,2)$$

  📊 **Gambar 2.** Grafik fungsi $f$ dan fungsi invers $f^{-1}$ yang saling bercermin terhadap garis $y=x$.

  💡 **Ingat:** Fungsi invers menukar koordinat $x$ dan $y$.

---

###### 16. Fungsi Invers dan Komposisi Fungsi

Fungsi invers memiliki hubungan erat dengan komposisi fungsi.

Jika $f^{-1}$ adalah invers dari $f$, maka:

$$(f\circ f^{-1})(x)=x$$

dan

$$(f^{-1}\circ f)(x)=x$$

Artinya, jika suatu fungsi dilanjutkan dengan inversnya, hasil akhirnya kembali ke nilai awal.

Contoh:

Misalkan:

$$f(x)=x+4$$

maka:

$$f^{-1}(x)=x-4$$

Sekarang periksa:

$$(f\circ f^{-1})(x)=f(f^{-1}(x))$$

$$=f(x-4)$$

$$=(x-4)+4$$

$$=x$$

dan:

$$(f^{-1}\circ f)(x)=f^{-1}(f(x))$$

$$=f^{-1}(x+4)$$

$$=(x+4)-4$$

$$=x$$

Jadi, keduanya menghasilkan $x$ kembali.

---

###### 17. Cara Mengenali Fungsi Invers Secara Umum

Dua fungsi $f$ dan $g$ saling invers jika:

$$(f\circ g)(x)=x$$

dan

$$(g\circ f)(x)=x$$

Contoh:

$$f(x)=2x+6$$

dan

$$g(x)=\frac{x-6}{2}$$

Periksa:

$$(f\circ g)(x)=f(g(x))$$

$$=2\left(\frac{x-6}{2}\right)+6$$

$$=x-6+6$$

$$=x$$

Kemudian:

$$(g\circ f)(x)=g(f(x))$$

$$=\frac{(2x+6)-6}{2}$$

$$=\frac{2x}{2}$$

$$=x$$

Karena keduanya menghasilkan $x$, maka $g$ adalah invers dari $f$.

---

###### 18. Fungsi Invers dalam Kehidupan Sehari-hari

Fungsi invers dapat dijumpai dalam kehidupan sehari-hari.

Contoh 1: Konversi suhu

Jika suhu Celcius $C$ diubah ke Fahrenheit $F$ dengan rumus:

$$F=\frac95C+32$$

maka fungsi inversnya mengubah Fahrenheit kembali ke Celcius:

$$C=\frac59(F-32)$$

Contoh 2: Harga setelah diskon

Jika harga awal $x$ diberi diskon $20\%$, maka harga akhir:

$$y=0{,}8x$$

Untuk mencari harga awal dari harga akhir, gunakan invers:

$$x=\frac{y}{0{,}8}$$

  📌 **Catatan:** Fungsi invers digunakan ketika kita ingin mencari nilai awal dari hasil akhir suatu proses.

---

###### 19. Perbedaan Fungsi Komposisi dan Fungsi Invers

| Aspek | Fungsi Komposisi | Fungsi Invers |
| --- | --- | --- |
| Makna | Gabungan dua fungsi atau lebih secara berurutan. | Fungsi kebalikan dari suatu fungsi. |
| Notasi | $(f\circ g)(x)$ | $f^{-1}(x)$ |
| Tujuan | Menggabungkan proses. | Membalik proses. |
| Contoh | $f(g(x))$ | Jika $f(x)=x+3$, maka $f^{-1}(x)=x-3$. |

---

###### 20. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Menganggap $f^{-1}(x)$ sebagai pecahan | $f^{-1}(x)=\frac{1}{f(x)}$. | $f^{-1}(x)$ adalah fungsi invers, bukan kebalikan nilai. |
| Tidak membalik pasangan berurutan | $(2,5)$ tetap ditulis $(2,5)$ pada invers. | Seharusnya menjadi $(5,2)$. |
| Mengira semua fungsi memiliki invers yang berupa fungsi | $f(x)=x^2$ pada semua real dianggap memiliki invers fungsi. | Tidak, karena $f(2)=f(-2)=4$. |
| Lupa syarat satu-satu | Fungsi dengan dua masukan berbeda ke satu keluaran dianggap punya invers fungsi. | Inversnya bukan fungsi. |
| Salah membaca grafik invers | Mengira grafik invers dicerminkan terhadap sumbu $x$. | Grafik invers dicerminkan terhadap garis $y=x$. |

  ⚠️ **Perhatian:** Fungsi invers bukan sekadar membalik tanda operasi, tetapi juga harus memenuhi syarat agar tetap menjadi fungsi.

---

###### 21. Rangkuman

- Fungsi invers adalah fungsi kebalikan dari suatu fungsi.
- Jika:
  $$f(x)=y$$
  maka:
  $$f^{-1}(y)=x$$
- Notasi fungsi invers adalah:
  $$f^{-1}(x)$$
- $f^{-1}(x)$ tidak sama dengan $\frac{1}{f(x)}$.
- Fungsi invers menukar masukan dan keluaran.
- Jika fungsi $f$ memiliki pasangan $(a,b)$, maka fungsi inversnya memiliki pasangan $(b,a)$.
- Domain fungsi invers adalah range fungsi asal.
- Range fungsi invers adalah domain fungsi asal.
- Fungsi memiliki invers yang berupa fungsi jika fungsi tersebut satu-satu.
- Grafik fungsi invers merupakan pencerminan grafik fungsi asal terhadap garis $y=x$.
- Jika $f^{-1}$ adalah invers dari $f$, maka:
  $$(f\circ f^{-1})(x)=x$$
  dan
  $$(f^{-1}\circ f)(x)=x$$

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui fungsi $f$ memetakan $2$ ke $9$. Tentukan nilai $f^{-1}(9)$.

💡 Pembahasan

Diketahui fungsi $f$ memetakan $2$ ke $9$.

Artinya:

$$f(2)=9$$

Fungsi invers membalikkan hasil fungsi.

Maka:

$$f^{-1}(9)=2$$

Jadi, nilai $f^{-1}(9)$ adalah:

$$2$$

  Contoh Soal 2

Diketahui pasangan berurutan fungsi $f$ adalah $(1,4)$, $(2,7)$, dan $(3,10)$. Tentukan pasangan berurutan fungsi inversnya.

💡 Pembahasan

Fungsi invers diperoleh dengan menukar posisi komponen pertama dan kedua.

Pasangan fungsi $f$:

$$(1,4),\ (2,7),\ (3,10)$$

Maka pasangan fungsi inversnya adalah:

$$(4,1),\ (7,2),\ (10,3)$$

Jadi, pasangan berurutan fungsi invers adalah:

$$(4,1),\ (7,2),\ (10,3)$$

  Contoh Soal 3

Diketahui $f(x)=x+6$. Tentukan fungsi inversnya secara sederhana.

💡 Pembahasan

Fungsi:

$$f(x)=x+6$$

berarti setiap masukan ditambah $6$.

Proses kebalikannya adalah dikurangi $6$.

Maka fungsi inversnya adalah:

$$f^{-1}(x)=x-6$$

Periksa:

$$f(10)=10+6=16$$

$$f^{-1}(16)=16-6=10$$

Jadi:

$$f^{-1}(x)=x-6$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Jika $f(5)=12$, maka nilai $f^{-1}(12)$ adalah ....

A
$12$

B
$5$

C
$7$

D
$17$

E
$60$

💡 Pembahasan

Jika:

$$f(5)=12$$

maka fungsi invers membalik hasil tersebut.

Jadi:

$$f^{-1}(12)=5$$

  Latihan Soal 2

Jika fungsi $f$ memiliki pasangan $(3,8)$, maka pasangan pada fungsi invers $f^{-1}$ adalah ....

A
$(8,3)$

B
$(3,8)$

C
$(-3,-8)$

D
$(8,-3)$

E
$(-8,3)$

💡 Pembahasan

Fungsi invers menukar posisi komponen pasangan berurutan.

Jika pada $f$ terdapat $(3,8)$, maka pada $f^{-1}$ terdapat:

$$(8,3)$$

  Latihan Soal 3

Notasi $f^{-1}(x)$ berarti ....

A
$\frac{1}{f(x)}$

B
fungsi $f$ dikurangi $1$

C
fungsi invers dari $f$

D
fungsi $f$ dipangkatkan $-1$ sebagai bilangan

E
fungsi $f$ bernilai negatif

💡 Pembahasan

Notasi $f^{-1}(x)$ menyatakan fungsi invers dari $f$, bukan $\frac{1}{f(x)}$.

  Latihan Soal 4

Jika $f(x)=x+9$, maka fungsi inversnya adalah ....

A
$f^{-1}(x)=x-9$

B
$f^{-1}(x)=x+9$

C
$f^{-1}(x)=9x$

D
$f^{-1}(x)=\frac{x}{9}$

E
$f^{-1}(x)=\frac{1}{x+9}$

💡 Pembahasan

Fungsi $f(x)=x+9$ berarti menambah $9$.

Proses kebalikannya adalah mengurangi $9$.

Jadi:

$$f^{-1}(x)=x-9$$

  Latihan Soal 5

Jika $f(x)=3x$, maka fungsi inversnya adalah ....

A
$f^{-1}(x)=3x$

B
$f^{-1}(x)=\frac{x}{3}$

C
$f^{-1}(x)=x-3$

D
$f^{-1}(x)=x+3$

E
$f^{-1}(x)=\frac{1}{3x}$

💡 Pembahasan

Fungsi $f(x)=3x$ berarti mengalikan masukan dengan $3$.

Proses kebalikannya adalah membagi dengan $3$.

Jadi:

$$f^{-1}(x)=\frac{x}{3}$$

  Latihan Soal 6

Jika fungsi $f$ memiliki domain $\{1,2,3\}$ dan range $\{4,5,6\}$, maka domain fungsi invers $f^{-1}$ adalah ....

A
$\{1,2,3\}$

B
$\{4,5,6\}$

C
$\{1,4\}$

D
$\{2,5\}$

E
$\{3,6\}$

💡 Pembahasan

Domain fungsi invers adalah range fungsi asal.

Karena range fungsi $f$ adalah $\{4,5,6\}$, maka domain $f^{-1}$ adalah:

$$\{4,5,6\}$$

  Latihan Soal 7

Fungsi berikut yang memiliki invers sebagai fungsi adalah ....

A
$f(x)=2x+1$

B
$f(x)=x^2$ pada domain semua bilangan real

C
$f(x)=|x|$ pada domain semua bilangan real

D
$f(x)=0$

E
$f(x)=x^2+1$ pada domain semua bilangan real

💡 Pembahasan

Fungsi linear $f(x)=2x+1$ memiliki invers karena setiap nilai $x$ menghasilkan nilai keluaran yang berbeda.

Fungsi $x^2$ dan $|x|$ pada domain semua real tidak satu-satu karena nilai $x$ berbeda dapat menghasilkan keluaran yang sama.

  Latihan Soal 8

Grafik fungsi invers merupakan pencerminan grafik fungsi asal terhadap garis ....

A
$x=0$

B
$y=0$

C
$y=x$

D
$y=-x$

E
$x=1$

💡 Pembahasan

Grafik fungsi invers diperoleh dengan mencerminkan grafik fungsi asal terhadap garis:

$$y=x$$

Titik $(a,b)$ pada fungsi asal berubah menjadi $(b,a)$ pada fungsi invers.

  Latihan Soal 9

Jika $f^{-1}$ adalah invers dari $f$, maka $(f\circ f^{-1})(x)$ bernilai ....

A
$x$

B
$0$

C
$1$

D
$f(x)$

E
$f^{-1}(x)$

💡 Pembahasan

Jika $f^{-1}$ adalah invers dari $f$, maka:

$$(f\circ f^{-1})(x)=x$$

dan:

$$(f^{-1}\circ f)(x)=x$$

  Latihan Soal 10

Pernyataan yang benar tentang fungsi invers adalah ....

A
$f^{-1}(x)$ selalu sama dengan $\frac{1}{f(x)}$

B
fungsi invers membalik masukan dan keluaran fungsi asal

C
semua fungsi pasti memiliki invers yang berupa fungsi

D
grafik fungsi invers dicerminkan terhadap sumbu $x$

E
fungsi invers hanya berlaku pada fungsi konstan

💡 Pembahasan

Fungsi invers membalik masukan dan keluaran fungsi asal.

Jika:

$$f(a)=b$$

maka:

$$f^{-1}(b)=a$$

#### Menentukan Fungsi Invers

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/menentukan-fungsi-invers*

Pada materi sebelumnya, kita telah mempelajari pengertian fungsi invers. Sekarang kita akan membahas cara **menentukan fungsi invers**.

Fungsi invers adalah fungsi kebalikan. Jika fungsi asal mengubah $x$ menjadi $y$, maka fungsi invers mengubah $y$ kembali menjadi $x$.

  📌 **Catatan:** Menentukan fungsi invers berarti mencari aturan baru yang dapat membalik proses fungsi asal.

---

###### 1. Mengingat Kembali Fungsi Invers

Jika:

$$f(x)=y$$

maka fungsi inversnya memenuhi:

$$f^{-1}(y)=x$$

Artinya, fungsi invers mengembalikan hasil fungsi ke nilai masukan semula.

Contoh:

Jika:

$$f(3)=11$$

maka:

$$f^{-1}(11)=3$$

  💡 **Ingat:** Fungsi invers membalik masukan dan keluaran.

---

###### 2. Notasi Fungsi Invers

Fungsi invers dari $f$ ditulis:

$$f^{-1}(x)$$

Dibaca:

$$f \text{ invers dari } x$$

Perlu diingat bahwa:

$$f^{-1}(x)\ne \frac{1}{f(x)}$$

Contoh:

Jika:

$$f(x)=2x+5$$

maka fungsi inversnya bukan:

$$\frac{1}{2x+5}$$

melainkan fungsi yang membalik proses $2x+5$.

  ⚠️ **Perhatian:** Notasi $f^{-1}(x)$ bukan berarti kebalikan pecahan dari $f(x)$.

---

###### 3. Langkah Umum Menentukan Fungsi Invers

Untuk menentukan invers dari fungsi $f(x)$, gunakan langkah berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Ganti $f(x)$ dengan $y$. |
| 2 | Tukar posisi $x$ dan $y$. |
| 3 | Selesaikan persamaan sehingga $y$ berdiri sendiri. |
| 4 | Ganti $y$ dengan $f^{-1}(x)$. |

  💡 **Strategi:** Kunci menentukan invers adalah menukar $x$ dan $y$, lalu menyelesaikan persamaan untuk $y$.

---

###### 4. Contoh Dasar Menentukan Fungsi Invers

Diketahui:

$$f(x)=x+7$$

Tentukan $f^{-1}(x)$.

Langkah 1: Ganti $f(x)$ dengan $y$.

$$y=x+7$$

Langkah 2: Tukar $x$ dan $y$.

$$x=y+7$$

Langkah 3: Selesaikan untuk $y$.

$$y=x-7$$

Langkah 4: Ganti $y$ dengan $f^{-1}(x)$.

$$f^{-1}(x)=x-7$$

Jadi:

$$f^{-1}(x)=x-7$$

---

###### 5. Menentukan Invers Fungsi Linear

Fungsi linear berbentuk:

$$f(x)=ax+b$$

dengan $a\ne0$.

Untuk menentukan inversnya, lakukan langkah umum.

Misalkan:

$$f(x)=3x-5$$

Tentukan $f^{-1}(x)$.

Ganti $f(x)$ dengan $y$.

$$y=3x-5$$

Tukar $x$ dan $y$.

$$x=3y-5$$

Selesaikan untuk $y$.

$$x+5=3y$$

$$y=\frac{x+5}{3}$$

Jadi:

$$f^{-1}(x)=\frac{x+5}{3}$$

  📌 **Catatan:** Fungsi linear $f(x)=ax+b$ memiliki invers jika $a\ne0$.

---

###### 6. Rumus Cepat Invers Fungsi Linear

Untuk fungsi:

$$f(x)=ax+b$$

dengan $a\ne0$, inversnya adalah:

$$f^{-1}(x)=\frac{x-b}{a}$$

Contoh:

$$f(x)=4x+9$$

Maka:

$$a=4,\quad b=9$$

Sehingga:

$$f^{-1}(x)=\frac{x-9}{4}$$

Contoh lain:

$$f(x)=5x-2$$

Maka:

$$a=5,\quad b=-2$$

Sehingga:

$$f^{-1}(x)=\frac{x-(-2)}{5}$$

$$f^{-1}(x)=\frac{x+2}{5}$$

  💡 **Ingat:** Pada $f(x)=ax+b$, nilai $b$ ikut tandanya. Jika $b=-2$, maka $x-b=x-(-2)=x+2$.

---

###### 7. Menentukan Invers Fungsi Pecahan Linear Sederhana

Diketahui:

$$f(x)=\frac{x+2}{3}$$

Tentukan $f^{-1}(x)$.

Ganti $f(x)$ dengan $y$.

$$y=\frac{x+2}{3}$$

Tukar $x$ dan $y$.

$$x=\frac{y+2}{3}$$

Kalikan kedua ruas dengan $3$.

$$3x=y+2$$

Selesaikan untuk $y$.

$$y=3x-2$$

Jadi:

$$f^{-1}(x)=3x-2$$

---

###### 8. Menentukan Invers Fungsi Pecahan Linear

Diketahui:

$$f(x)=\frac{2x+1}{x-3}$$

Tentukan $f^{-1}(x)$.

Ganti $f(x)$ dengan $y$.

$$y=\frac{2x+1}{x-3}$$

Tukar $x$ dan $y$.

$$x=\frac{2y+1}{y-3}$$

Kalikan silang.

$$x(y-3)=2y+1$$

$$xy-3x=2y+1$$

Kumpulkan suku yang memuat $y$ di satu ruas.

$$xy-2y=3x+1$$

Faktorkan $y$.

$$y(x-2)=3x+1$$

Bagi dengan $x-2$.

$$y=\frac{3x+1}{x-2}$$

Jadi:

$$f^{-1}(x)=\frac{3x+1}{x-2}$$

Dengan syarat:

$$x\ne2$$

  ⚠️ **Perhatian:** Pada invers fungsi pecahan linear, setelah menukar $x$ dan $y$, biasanya perlu melakukan perkalian silang.

---

###### 9. Menentukan Invers Fungsi Akar Sederhana

Diketahui:

$$f(x)=\sqrt{x+4}$$

Tentukan $f^{-1}(x)$.

Ganti $f(x)$ dengan $y$.

$$y=\sqrt{x+4}$$

Tukar $x$ dan $y$.

$$x=\sqrt{y+4}$$

Kuadratkan kedua ruas.

$$x^2=y+4$$

Selesaikan untuk $y$.

$$y=x^2-4$$

Jadi:

$$f^{-1}(x)=x^2-4$$

Karena $f(x)=\sqrt{x+4}$ menghasilkan nilai tidak negatif, maka domain fungsi invers adalah:

$$x\ge0$$

  📌 **Catatan:** Jika fungsi asal berbentuk akar, hasilnya tidak negatif. Maka domain inversnya biasanya $x\ge0$.

---

###### 10. Menentukan Invers Fungsi Kuadrat dengan Domain Terbatas

Fungsi kuadrat pada semua bilangan real tidak selalu memiliki invers sebagai fungsi. Namun, jika domainnya dibatasi, inversnya dapat menjadi fungsi.

Contoh:

$$f(x)=x^2+1,\quad x\ge0$$

Tentukan $f^{-1}(x)$.

Ganti $f(x)$ dengan $y$.

$$y=x^2+1$$

Tukar $x$ dan $y$.

$$x=y^2+1$$

Selesaikan untuk $y$.

$$x-1=y^2$$

$$y=\sqrt{x-1}$$

Karena domain fungsi asal adalah $x\ge0$, maka nilai $y$ pada invers dipilih yang tidak negatif.

Jadi:

$$f^{-1}(x)=\sqrt{x-1}$$

Dengan domain invers:

$$x\ge1$$

  ⚠️ **Perhatian:** Pada fungsi kuadrat, tanda akar harus disesuaikan dengan pembatasan domain fungsi asal.

---

###### 11. Invers Fungsi Kuadrat dengan Domain $x\le0$

Diketahui:

$$f(x)=x^2+1,\quad x\le0$$

Tentukan $f^{-1}(x)$.

Ganti $f(x)$ dengan $y$.

$$y=x^2+1$$

Tukar $x$ dan $y$.

$$x=y^2+1$$

Selesaikan untuk $y$.

$$x-1=y^2$$

Karena domain fungsi asal $x\le0$, maka nilai invers harus mengambil cabang negatif.

$$y=-\sqrt{x-1}$$

Jadi:

$$f^{-1}(x)=-\sqrt{x-1}$$

Dengan domain invers:

$$x\ge1$$

---

###### 12. Menentukan Invers dari Pasangan Berurutan

Jika fungsi diberikan dalam bentuk pasangan berurutan, inversnya diperoleh dengan menukar komponen pertama dan kedua.

Contoh:

Fungsi $f$ memiliki pasangan:

$$(1,5),\ (2,7),\ (3,9)$$

Maka fungsi inversnya memiliki pasangan:

$$(5,1),\ (7,2),\ (9,3)$$

| Pasangan Fungsi $f$ | Pasangan Fungsi Invers $f^{-1}$ |
| --- | --- |
| $(1,5)$ | $(5,1)$ |
| $(2,7)$ | $(7,2)$ |
| $(3,9)$ | $(9,3)$ |

---

###### 13. Menentukan Invers dari Tabel Fungsi

Perhatikan tabel fungsi berikut.

| $x$ | $f(x)$ |
| --- | --- |
| $2$ | $6$ |
| $4$ | $10$ |
| $6$ | $14$ |

Tentukan nilai $f^{-1}(10)$.

Dari tabel terlihat:

$$f(4)=10$$

Maka:

$$f^{-1}(10)=4$$

Jadi:

$$f^{-1}(10)=4$$

  💡 **Strategi:** Untuk mencari $f^{-1}(a)$ dari tabel, carilah nilai $x$ yang membuat $f(x)=a$.

---

###### 14. Menentukan Apakah Dua Fungsi Saling Invers

Dua fungsi $f$ dan $g$ saling invers jika memenuhi:

$$(f\circ g)(x)=x$$

dan:

$$(g\circ f)(x)=x$$

Contoh:

$$f(x)=2x-3$$

dan:

$$g(x)=\frac{x+3}{2}$$

Periksa $(f\circ g)(x)$.

$$f(g(x))=2\left(\frac{x+3}{2}\right)-3$$

$$=x+3-3$$

$$=x$$

Periksa $(g\circ f)(x)$.

$$g(f(x))=\frac{(2x-3)+3}{2}$$

$$=\frac{2x}{2}$$

$$=x$$

Karena keduanya menghasilkan $x$, maka:

$$g=f^{-1}$$

dan:

$$f=g^{-1}$$

---

###### 15. Menentukan Invers dengan Membalik Operasi

Untuk fungsi sederhana, invers dapat ditentukan dengan membalik operasi.

Contoh:

$$f(x)=5x-4$$

Fungsi asal melakukan:

| Proses Fungsi | Proses Invers |
| --- | --- |
| Dikali $5$ | Dibagi $5$ |
| Dikurangi $4$ | Ditambah $4$ |

Karena fungsi asal melakukan kali $5$ lalu kurang $4$, maka invers melakukan tambah $4$ lalu bagi $5$.

Jadi:

$$f^{-1}(x)=\frac{x+4}{5}$$

  📌 **Catatan:** Membalik operasi sangat membantu untuk fungsi linear sederhana.

---

###### 16. Hubungan Domain dan Range pada Fungsi Invers

Jika fungsi $f$ memiliki domain $A$ dan range $B$, maka fungsi invers $f^{-1}$ memiliki domain $B$ dan range $A$.

| Fungsi | Domain | Range |
| --- | --- | --- |
| $f$ | $A$ | $B$ |
| $f^{-1}$ | $B$ | $A$ |

Contoh:

Jika:

$$f(x)=\sqrt{x+4}$$

Domain fungsi asal:

$$x\ge-4$$

Range fungsi asal:

$$y\ge0$$

Maka domain inversnya:

$$x\ge0$$

---

###### 17. Fungsi yang Tidak Memiliki Invers sebagai Fungsi

Tidak semua fungsi memiliki invers sebagai fungsi.

Contoh:

$$f(x)=x^2$$

dengan domain semua bilangan real.

Karena:

$$f(2)=4$$

dan:

$$f(-2)=4$$

maka dua masukan berbeda menghasilkan keluaran yang sama.

Jika dibalik, maka:

$$f^{-1}(4)=2$$

dan:

$$f^{-1}(4)=-2$$

Satu masukan menghasilkan dua keluaran, sehingga inversnya bukan fungsi.

  ⚠️ **Perhatian:** Agar invers menjadi fungsi, fungsi asal harus satu-satu.

---

###### 18. Ilustrasi Grafik Fungsi Invers

Grafik fungsi invers merupakan pencerminan grafik fungsi asal terhadap garis:

$$y=x$$

Jika fungsi $f$ melalui titik:

$$(a,b)$$

maka fungsi invers $f^{-1}$ melalui titik:

$$(b,a)$$

Contoh:

Jika grafik $f$ melalui titik $(2,7)$, maka grafik $f^{-1}$ melalui titik $(7,2)$.

  📊 **Gambar 1.** Grafik fungsi $f$ dan fungsi invers $f^{-1}$ yang saling bercermin terhadap garis $y=x$.

---

###### 19. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Menganggap $f^{-1}(x)=\frac{1}{f(x)}$ | Untuk $f(x)=2x+1$, ditulis $f^{-1}(x)=\frac{1}{2x+1}$. | Harus dicari fungsi kebalikannya, bukan kebalikan pecahan. |
| Lupa menukar $x$ dan $y$ | $y=3x+2$ langsung diselesaikan tanpa menukar variabel. | Tukar dulu menjadi $x=3y+2$. |
| Salah tanda saat memindahkan ruas | $x=3y-5$ menjadi $y=\frac{x-5}{3}$. | Seharusnya $x+5=3y$, jadi $y=\frac{x+5}{3}$. |
| Salah memilih cabang akar | $f(x)=x^2,\ x\le0$ diberi invers $\sqrt{x}$. | Seharusnya cabang negatif, yaitu $-\sqrt{x}$. |
| Tidak mencantumkan syarat | $\frac{3x+1}{x-2}$ ditulis berlaku untuk semua $x$. | Harus diberi syarat $x\ne2$. |

  ⚠️ **Perhatian:** Pada fungsi invers, kesalahan tanda dan kesalahan menukar variabel sangat sering terjadi.

---

###### 20. Rangkuman

- Fungsi invers adalah fungsi kebalikan dari fungsi asal.
- Langkah menentukan fungsi invers:
  1. Ganti $f(x)$ dengan $y$.
  2. Tukar $x$ dan $y$.
  3. Selesaikan persamaan sehingga $y$ berdiri sendiri.
  4. Ganti $y$ dengan $f^{-1}(x)$.
- Untuk fungsi linear $f(x)=ax+b$ dengan $a\ne0$:
  $$f^{-1}(x)=\frac{x-b}{a}$$
- Untuk fungsi pecahan linear, gunakan perkalian silang.
- Untuk fungsi akar, biasanya perlu menguadratkan kedua ruas.
- Untuk fungsi kuadrat, domain harus dibatasi agar inversnya menjadi fungsi.
- Domain fungsi invers adalah range fungsi asal.
- Range fungsi invers adalah domain fungsi asal.
- Dua fungsi saling invers jika:
  $$(f\circ g)(x)=x$$
  dan:
  $$(g\circ f)(x)=x$$

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Tentukan invers dari fungsi berikut.
$$f(x)=4x-7$$

💡 Pembahasan

Ganti $f(x)$ dengan $y$.

$$y=4x-7$$

Tukar $x$ dan $y$.

$$x=4y-7$$

Selesaikan untuk $y$.

$$x+7=4y$$

$$y=\frac{x+7}{4}$$

Jadi:

$$f^{-1}(x)=\frac{x+7}{4}$$

  Contoh Soal 2

Tentukan invers dari fungsi berikut.
$$f(x)=\frac{x-5}{2}$$

💡 Pembahasan

Ganti $f(x)$ dengan $y$.

$$y=\frac{x-5}{2}$$

Tukar $x$ dan $y$.

$$x=\frac{y-5}{2}$$

Kalikan kedua ruas dengan $2$.

$$2x=y-5$$

Tambahkan $5$ ke kedua ruas.

$$y=2x+5$$

Jadi:

$$f^{-1}(x)=2x+5$$

  Contoh Soal 3

Tentukan invers dari fungsi berikut.
$$f(x)=\frac{2x+1}{x-3}$$

💡 Pembahasan

Ganti $f(x)$ dengan $y$.

$$y=\frac{2x+1}{x-3}$$

Tukar $x$ dan $y$.

$$x=\frac{2y+1}{y-3}$$

Kalikan silang.

$$x(y-3)=2y+1$$

$$xy-3x=2y+1$$

Kumpulkan suku yang memuat $y$.

$$xy-2y=3x+1$$

Faktorkan $y$.

$$y(x-2)=3x+1$$

Bagi kedua ruas dengan $x-2$.

$$y=\frac{3x+1}{x-2}$$

Jadi:

$$f^{-1}(x)=\frac{3x+1}{x-2},\quad x\ne2$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Invers dari fungsi $f(x)=x+8$ adalah ....

A
$f^{-1}(x)=x-8$

B
$f^{-1}(x)=x+8$

C
$f^{-1}(x)=8x$

D
$f^{-1}(x)=\frac{x}{8}$

E
$f^{-1}(x)=\frac{1}{x+8}$

💡 Pembahasan

Fungsi $f(x)=x+8$ berarti menambah $8$.

Proses kebalikannya adalah mengurangi $8$.

Jadi:

$$f^{-1}(x)=x-8$$

  Latihan Soal 2

Invers dari fungsi $f(x)=5x$ adalah ....

A
$f^{-1}(x)=5x$

B
$f^{-1}(x)=\frac{x}{5}$

C
$f^{-1}(x)=x-5$

D
$f^{-1}(x)=x+5$

E
$f^{-1}(x)=\frac{1}{5x}$

💡 Pembahasan

Fungsi $f(x)=5x$ berarti mengalikan dengan $5$.

Proses inversnya adalah membagi dengan $5$.

Jadi:

$$f^{-1}(x)=\frac{x}{5}$$

  Latihan Soal 3

Invers dari fungsi $f(x)=3x+4$ adalah ....

A
$f^{-1}(x)=3x-4$

B
$f^{-1}(x)=\frac{x-4}{3}$

C
$f^{-1}(x)=\frac{x+4}{3}$

D
$f^{-1}(x)=\frac{3}{x-4}$

E
$f^{-1}(x)=3x+4$

💡 Pembahasan

Misalkan:

$$y=3x+4$$

Tukar $x$ dan $y$.

$$x=3y+4$$

$$x-4=3y$$

$$y=\frac{x-4}{3}$$

Jadi:

$$f^{-1}(x)=\frac{x-4}{3}$$

  Latihan Soal 4

Invers dari fungsi $f(x)=4x-7$ adalah ....

A
$f^{-1}(x)=\frac{x+7}{4}$

B
$f^{-1}(x)=\frac{x-7}{4}$

C
$f^{-1}(x)=4x+7$

D
$f^{-1}(x)=4x-7$

E
$f^{-1}(x)=\frac{4}{x+7}$

💡 Pembahasan

Misalkan:

$$y=4x-7$$

Tukar $x$ dan $y$.

$$x=4y-7$$

$$x+7=4y$$

$$y=\frac{x+7}{4}$$

Jadi:

$$f^{-1}(x)=\frac{x+7}{4}$$

  Latihan Soal 5

Invers dari fungsi $f(x)=\frac{x-5}{2}$ adalah ....

A
$f^{-1}(x)=\frac{x+5}{2}$

B
$f^{-1}(x)=2x-5$

C
$f^{-1}(x)=2x+5$

D
$f^{-1}(x)=\frac{2}{x-5}$

E
$f^{-1}(x)=x-10$

💡 Pembahasan

Misalkan:

$$y=\frac{x-5}{2}$$

Tukar $x$ dan $y$.

$$x=\frac{y-5}{2}$$

$$2x=y-5$$

$$y=2x+5$$

Jadi:

$$f^{-1}(x)=2x+5$$

  Latihan Soal 6

Invers dari fungsi $f(x)=\frac{2x+1}{x-3}$ adalah ....

A
$f^{-1}(x)=\frac{2x+1}{x-3}$

B
$f^{-1}(x)=\frac{3x+1}{x-2}$

C
$f^{-1}(x)=\frac{x-2}{3x+1}$

D
$f^{-1}(x)=\frac{3x-1}{x+2}$

E
$f^{-1}(x)=\frac{x+1}{3x-2}$

💡 Pembahasan

Misalkan:

$$y=\frac{2x+1}{x-3}$$

Tukar $x$ dan $y$.

$$x=\frac{2y+1}{y-3}$$

$$x(y-3)=2y+1$$

$$xy-3x=2y+1$$

$$xy-2y=3x+1$$

$$y(x-2)=3x+1$$

$$y=\frac{3x+1}{x-2}$$

  Latihan Soal 7

Invers dari fungsi $f(x)=\sqrt{x+4}$ adalah ....

A
$f^{-1}(x)=\sqrt{x}-4$

B
$f^{-1}(x)=x^2-4,\ x\ge0$

C
$f^{-1}(x)=x^2+4$

D
$f^{-1}(x)=\sqrt{x+4}$

E
$f^{-1}(x)=x-4$

💡 Pembahasan

Misalkan:

$$y=\sqrt{x+4}$$

Tukar $x$ dan $y$.

$$x=\sqrt{y+4}$$

Kuadratkan.

$$x^2=y+4$$

$$y=x^2-4$$

Karena hasil akar selalu tidak negatif, domain invers adalah $x\ge0$.

  Latihan Soal 8

Invers dari fungsi $f(x)=x^2+1$ dengan domain $x\ge0$ adalah ....

A
$f^{-1}(x)=\sqrt{x-1}$

B
$f^{-1}(x)=-\sqrt{x-1}$

C
$f^{-1}(x)=\sqrt{x+1}$

D
$f^{-1}(x)=x^2-1$

E
$f^{-1}(x)=x-1$

💡 Pembahasan

Misalkan:

$$y=x^2+1$$

Tukar $x$ dan $y$.

$$x=y^2+1$$

$$x-1=y^2$$

Karena domain fungsi asal $x\ge0$, pilih cabang positif.

$$y=\sqrt{x-1}$$

  Latihan Soal 9

Diketahui pasangan fungsi $f$ adalah $(2,6)$, $(4,10)$, dan $(6,14)$. Nilai $f^{-1}(10)$ adalah ....

A
$2$

B
$4$

C
$6$

D
$10$

E
$14$

💡 Pembahasan

Dari pasangan $(4,10)$, diketahui:

$$f(4)=10$$

Maka:

$$f^{-1}(10)=4$$

  Latihan Soal 10

Diketahui $f(x)=2x-3$ dan $g(x)=\frac{x+3}{2}$. Pernyataan yang benar adalah ....

A
$f$ dan $g$ tidak saling invers

B
$g$ adalah invers dari $f$

C
$(f\circ g)(x)=2x$

D
$(g\circ f)(x)=x+3$

E
$f^{-1}(x)=2x+3$

💡 Pembahasan

Periksa komposisi.

$$f(g(x))=2\left(\frac{x+3}{2}\right)-3=x+3-3=x$$

dan:

$$g(f(x))=\frac{(2x-3)+3}{2}=\frac{2x}{2}=x$$

Jadi, $g$ adalah invers dari $f$.

#### Hubungan Fungsi Komposisi dan Fungsi Invers

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/hubungan-fungsi-komposisi-dan-fungsi-invers*

Pada materi sebelumnya, kita telah mempelajari cara menentukan fungsi invers. Sekarang kita akan membahas **hubungan fungsi komposisi dan fungsi invers**.

Fungsi komposisi dan fungsi invers memiliki hubungan yang sangat erat. Fungsi komposisi digunakan untuk menggabungkan proses secara berurutan, sedangkan fungsi invers digunakan untuk membalik proses tersebut.

  📌 **Catatan:** Jika suatu fungsi dikomposisikan dengan inversnya, hasil akhirnya kembali ke nilai semula.

---

###### 1. Mengingat Kembali Fungsi Komposisi

Jika terdapat dua fungsi $f$ dan $g$, maka komposisi fungsi $f$ terhadap $g$ ditulis:

$$(f\circ g)(x)$$

Maknanya:

$$(f\circ g)(x)=f(g(x))$$

Artinya, nilai $x$ diproses terlebih dahulu oleh fungsi $g$, kemudian hasilnya diproses oleh fungsi $f$.

Secara alur:

$$x \xrightarrow{g} g(x) \xrightarrow{f} f(g(x))$$

  💡 **Ingat:** Pada $(f\circ g)(x)$, fungsi yang dikerjakan terlebih dahulu adalah $g$.

---

###### 2. Mengingat Kembali Fungsi Invers

Fungsi invers adalah fungsi kebalikan dari suatu fungsi.

Jika:

$$f(x)=y$$

maka fungsi inversnya memenuhi:

$$f^{-1}(y)=x$$

Artinya, fungsi invers mengembalikan keluaran fungsi menjadi masukan semula.

Contoh:

Jika:

$$f(4)=11$$

maka:

$$f^{-1}(11)=4$$

Secara alur:

$$4 \xrightarrow{f} 11 \xrightarrow{f^{-1}} 4$$

  📌 **Catatan:** Fungsi invers membalik arah proses dari fungsi asal.

---

###### 3. Hubungan Dasar Fungsi dan Inversnya

Jika $f^{-1}$ adalah invers dari fungsi $f$, maka berlaku:

$$(f\circ f^{-1})(x)=x$$

dan:

$$(f^{-1}\circ f)(x)=x$$

Artinya, jika suatu fungsi dilanjutkan dengan inversnya, hasil akhirnya kembali ke nilai awal.

Secara sederhana:

$$x \xrightarrow{f} f(x) \xrightarrow{f^{-1}} x$$

atau:

$$x \xrightarrow{f^{-1}} f^{-1}(x) \xrightarrow{f} x$$

  💡 **Ingat:** Fungsi dan inversnya saling membatalkan melalui komposisi.

---

###### 4. Fungsi Identitas

Hasil komposisi fungsi dengan inversnya disebut **fungsi identitas**.

Fungsi identitas adalah fungsi yang mengembalikan setiap masukan menjadi dirinya sendiri.

Fungsi identitas ditulis:

$$I(x)=x$$

Jika $f^{-1}$ adalah invers dari $f$, maka:

$$(f\circ f^{-1})(x)=I(x)=x$$

dan:

$$(f^{-1}\circ f)(x)=I(x)=x$$

  📌 **Catatan:** Fungsi identitas menjadi tanda bahwa dua fungsi saling invers.

---

###### 5. Contoh Fungsi dan Inversnya

Misalkan:

$$f(x)=x+5$$

Fungsi ini menambahkan $5$ pada setiap masukan.

Inversnya adalah:

$$f^{-1}(x)=x-5$$

karena untuk membalik proses “tambah $5$”, kita harus melakukan proses “kurang $5$”.

Perhatikan alurnya:

$$x \xrightarrow{f} x+5 \xrightarrow{f^{-1}} x$$

atau:

$$x \xrightarrow{f^{-1}} x-5 \xrightarrow{f} x$$

---

###### 6. Memeriksa $(f\circ f^{-1})(x)$

Diketahui:

$$f(x)=x+5$$

dan:

$$f^{-1}(x)=x-5$$

Periksa komposisi:

$$(f\circ f^{-1})(x)=f(f^{-1}(x))$$

Hitung:

$$\begin{aligned}
(f\circ f^{-1})(x)
&=f(f^{-1}(x))\\
&=f(x-5)\\
&=(x-5)+5\\
&=x
\end{aligned}$$

Jadi:

$$(f\circ f^{-1})(x)=x$$

---

###### 7. Memeriksa $(f^{-1}\circ f)(x)$

Diketahui:

$$f(x)=x+5$$

dan:

$$f^{-1}(x)=x-5$$

Periksa komposisi:

$$(f^{-1}\circ f)(x)=f^{-1}(f(x))$$

Hitung:

$$\begin{aligned}
(f^{-1}\circ f)(x)
&=f^{-1}(f(x))\\
&=f^{-1}(x+5)\\
&=(x+5)-5\\
&=x
\end{aligned}$$

Jadi:

$$(f^{-1}\circ f)(x)=x$$

Karena kedua komposisi menghasilkan $x$, maka $f^{-1}$ benar merupakan invers dari $f$.

  💡 **Strategi:** Untuk membuktikan dua fungsi saling invers, periksa apakah kedua komposisinya menghasilkan $x$.

---

###### 8. Syarat Dua Fungsi Saling Invers

Dua fungsi $f$ dan $g$ saling invers jika memenuhi:

$$(f\circ g)(x)=x$$

dan:

$$(g\circ f)(x)=x$$

Dengan kata lain, $g$ adalah invers dari $f$ jika:

$$g=f^{-1}$$

dan $f$ adalah invers dari $g$ jika:

$$f=g^{-1}$$

| Komposisi | Hasil Jika Saling Invers |
| --- | --- |
| $(f\circ g)(x)$ | $x$ |
| $(g\circ f)(x)$ | $x$ |

  ⚠️ **Perhatian:** Jangan hanya menganggap dua fungsi saling invers karena bentuknya mirip. Periksa dengan komposisi.

---

###### 9. Contoh Memeriksa Dua Fungsi Saling Invers

Diketahui:

$$f(x)=2x+3$$

dan:

$$g(x)=\frac{x-3}{2}$$

Akan diperiksa apakah $f$ dan $g$ saling invers.

Pertama, periksa $(f\circ g)(x)$.

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=2\left(\frac{x-3}{2}\right)+3\\
&=x-3+3\\
&=x
\end{aligned}$$

Kedua, periksa $(g\circ f)(x)$.

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=\frac{f(x)-3}{2}\\
&=\frac{(2x+3)-3}{2}\\
&=\frac{2x}{2}\\
&=x
\end{aligned}$$

Karena:

$$(f\circ g)(x)=x$$

dan:

$$(g\circ f)(x)=x$$

maka $f$ dan $g$ saling invers.

---

###### 10. Menggunakan Komposisi untuk Menentukan Invers

Fungsi invers juga dapat dicari menggunakan hubungan komposisi.

Misalkan:

$$f(x)=3x-4$$

Misalkan inversnya adalah:

$$f^{-1}(x)=g(x)$$

Karena $g$ adalah invers dari $f$, maka:

$$(f\circ g)(x)=x$$

Artinya:

$$f(g(x))=x$$

Karena $f(x)=3x-4$, maka:

$$\begin{aligned}
f(g(x))&=x\\
3g(x)-4&=x\\
3g(x)&=x+4\\
g(x)&=\frac{x+4}{3}
\end{aligned}$$

Jadi:

$$f^{-1}(x)=\frac{x+4}{3}$$

  📌 **Catatan:** Cara ini sama maknanya dengan mencari invers menggunakan langkah menukar $x$ dan $y$.

---

###### 11. Menentukan Fungsi Asal dari Inversnya

Jika diketahui fungsi invers, maka fungsi asal dapat dicari dengan mencari invers dari fungsi invers tersebut.

Contoh:

Diketahui:

$$f^{-1}(x)=2x-1$$

Tentukan $f(x)$.

Misalkan:

$$g(x)=2x-1$$

Karena:

$$g(x)=f^{-1}(x)$$

maka:

$$f(x)=g^{-1}(x)$$

Cari invers dari $g(x)=2x-1$.

Misalkan:

$$y=2x-1$$

Tukar $x$ dan $y$.

$$x=2y-1$$

Selesaikan untuk $y$.

$$\begin{aligned}
x&=2y-1\\
x+1&=2y\\
y&=\frac{x+1}{2}
\end{aligned}$$

Jadi:

$$f(x)=\frac{x+1}{2}$$

---

###### 12. Hubungan Domain dan Range pada Fungsi Invers

Jika fungsi $f$ memiliki domain $A$ dan range $B$, maka:

- domain $f^{-1}$ adalah $B$;
- range $f^{-1}$ adalah $A$.

Ketika dikomposisikan, domain tetap harus diperhatikan.

| Komposisi | Berlaku untuk | Hasil |
| --- | --- | --- |
| $(f^{-1}\circ f)(x)$ | $x$ pada domain $f$ | $x$ |
| $(f\circ f^{-1})(x)$ | $x$ pada domain $f^{-1}$ | $x$ |

  ⚠️ **Perhatian:** Walaupun hasil komposisi fungsi dan inversnya adalah $x$, nilai $x$ tetap harus berada pada domain yang sesuai.

---

###### 13. Contoh Fungsi Linear

Diketahui:

$$f(x)=5x+2$$

dan:

$$g(x)=\frac{x-2}{5}$$

Buktikan bahwa $g$ adalah invers dari $f$.

Periksa $(f\circ g)(x)$.

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=5\left(\frac{x-2}{5}\right)+2\\
&=x-2+2\\
&=x
\end{aligned}$$

Periksa $(g\circ f)(x)$.

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=\frac{f(x)-2}{5}\\
&=\frac{(5x+2)-2}{5}\\
&=\frac{5x}{5}\\
&=x
\end{aligned}$$

Karena kedua komposisi menghasilkan $x$, maka:

$$g=f^{-1}$$

---

###### 14. Contoh Fungsi Pecahan Sederhana

Diketahui:

$$f(x)=\frac{x+1}{2}$$

dan:

$$g(x)=2x-1$$

Periksa apakah $f$ dan $g$ saling invers.

Periksa $(f\circ g)(x)$.

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=\frac{g(x)+1}{2}\\
&=\frac{(2x-1)+1}{2}\\
&=\frac{2x}{2}\\
&=x
\end{aligned}$$

Periksa $(g\circ f)(x)$.

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=2f(x)-1\\
&=2\left(\frac{x+1}{2}\right)-1\\
&=x+1-1\\
&=x
\end{aligned}$$

Karena kedua komposisi menghasilkan $x$, maka $f$ dan $g$ saling invers.

---

###### 15. Contoh Fungsi Akar dan Kuadrat

Diketahui:

$$f(x)=x^2,\quad x\ge0$$

dan:

$$g(x)=\sqrt{x}$$

Periksa apakah $g$ adalah invers dari $f$.

Periksa $(g\circ f)(x)$.

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=g(x^2)\\
&=\sqrt{x^2}\\
&=x
\end{aligned}$$

Karena domain $f$ adalah $x\ge0$, maka $\sqrt{x^2}=x$.

Periksa $(f\circ g)(x)$.

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=f(\sqrt{x})\\
&=(\sqrt{x})^2\\
&=x
\end{aligned}$$

Dengan syarat:

$$x\ge0$$

Jadi, pada domain yang sesuai, $f(x)=x^2$ dengan $x\ge0$ dan $g(x)=\sqrt{x}$ saling invers.

  📌 **Catatan:** Fungsi kuadrat perlu pembatasan domain agar memiliki invers sebagai fungsi.

---

###### 16. Mengapa Domain Perlu Diperhatikan?

Perhatikan fungsi:

$$f(x)=x^2$$

dengan domain semua bilangan real.

Fungsi ini tidak memiliki invers yang berupa fungsi pada domain semua bilangan real karena:

$$f(2)=4$$

dan:

$$f(-2)=4$$

Dua nilai masukan berbeda menghasilkan keluaran yang sama.

Jika dibalik, maka:

$$f^{-1}(4)=2$$

dan:

$$f^{-1}(4)=-2$$

Satu nilai masukan menghasilkan dua keluaran, sehingga inversnya bukan fungsi.

Namun, jika domain dibatasi, misalnya $x\ge0$, maka fungsi tersebut menjadi satu-satu dan memiliki invers:

$$f^{-1}(x)=\sqrt{x}$$

  ⚠️ **Perhatian:** Agar invers menjadi fungsi, fungsi asal harus satu-satu.

---

###### 17. Diagram Hubungan Fungsi dan Invers

Hubungan fungsi dan invers dapat digambarkan sebagai proses bolak-balik.

Jika:

$$a \xrightarrow{f} b$$

maka:

$$b \xrightarrow{f^{-1}} a$$

Jika dikomposisikan:

$$a \xrightarrow{f} b \xrightarrow{f^{-1}} a$$

atau:

$$b \xrightarrow{f^{-1}} a \xrightarrow{f} b$$

  📊 **Gambar 1.** Diagram alur fungsi $f$ dan fungsi invers $f^{-1}$ yang menunjukkan proses bolak-balik antara $a$ dan $b$.

---

###### 18. Grafik Hubungan Fungsi dan Invers

Grafik fungsi invers merupakan pencerminan grafik fungsi asal terhadap garis:

$$y=x$$

Jika titik $(a,b)$ berada pada grafik fungsi $f$, maka titik $(b,a)$ berada pada grafik fungsi $f^{-1}$.

Contoh:

Jika grafik fungsi $f$ melalui titik:

$$(2,7)$$

maka grafik fungsi $f^{-1}$ melalui titik:

$$(7,2)$$

  📊 **Gambar 2.** Grafik fungsi $f$ dan fungsi invers $f^{-1}$ yang saling bercermin terhadap garis $y=x$.

  💡 **Ingat:** Pada grafik invers, koordinat titik bertukar posisi.

---

###### 19. Hubungan Fungsi Komposisi, Invers, dan Identitas

Ketiga konsep ini dapat diringkas sebagai berikut.

| Konsep | Makna | Notasi |
| --- | --- | --- |
| Fungsi komposisi | Menggabungkan proses fungsi secara berurutan. | $(f\circ g)(x)=f(g(x))$ |
| Fungsi invers | Membalik proses fungsi. | $f^{-1}(x)$ |
| Fungsi identitas | Menghasilkan kembali masukan semula. | $I(x)=x$ |

Jika $g=f^{-1}$, maka:

$$(f\circ g)(x)=I(x)=x$$

dan:

$$(g\circ f)(x)=I(x)=x$$

---

###### 20. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Mengira cukup memeriksa satu komposisi saja | Hanya memeriksa $(f\circ g)(x)$. | Dalam pembelajaran dasar, periksa juga $(g\circ f)(x)$. |
| Salah urutan komposisi | $(f\circ g)(x)$ dihitung sebagai $g(f(x))$. | Seharusnya $(f\circ g)(x)=f(g(x))$. |
| Menganggap $f^{-1}(x)=\frac{1}{f(x)}$ | Untuk $f(x)=2x+3$, ditulis $f^{-1}(x)=\frac{1}{2x+3}$. | $f^{-1}(x)$ adalah fungsi kebalikan, bukan kebalikan pecahan. |
| Mengabaikan domain | $x^2$ dan $\sqrt{x}$ dianggap saling invers pada semua real. | $x^2$ harus dibatasi, misalnya $x\ge0$. |
| Tidak menyederhanakan sampai menjadi $x$ | $2\left(\frac{x-3}{2}\right)+3$ dibiarkan begitu saja. | Sederhanakan hingga menjadi $x$. |

  ⚠️ **Perhatian:** Dua fungsi saling invers jika komposisinya menghasilkan fungsi identitas.

---

###### 21. Rangkuman

- Fungsi komposisi menggabungkan dua fungsi secara berurutan.
- Fungsi invers membalik proses suatu fungsi.
- Fungsi identitas adalah fungsi yang menghasilkan kembali masukan semula:
  $$I(x)=x$$
- Jika $f^{-1}$ adalah invers dari $f$, maka:
  $$(f\circ f^{-1})(x)=x$$
  dan:
  $$(f^{-1}\circ f)(x)=x$$
- Dua fungsi $f$ dan $g$ saling invers jika:
  $$(f\circ g)(x)=x$$
  dan:
  $$(g\circ f)(x)=x$$
- Domain tetap harus diperhatikan.
- Grafik fungsi invers merupakan pencerminan grafik fungsi asal terhadap garis $y=x$.
- Jika titik $(a,b)$ berada pada grafik $f$, maka titik $(b,a)$ berada pada grafik $f^{-1}$.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Diketahui $f(x)=2x+3$ dan $g(x)=\frac{x-3}{2}$. Buktikan bahwa $f$ dan $g$ saling invers.

💡 Pembahasan

Periksa komposisi pertama.

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=2\left(\frac{x-3}{2}\right)+3\\
&=x-3+3\\
&=x
\end{aligned}$$

Periksa komposisi kedua.

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=\frac{f(x)-3}{2}\\
&=\frac{(2x+3)-3}{2}\\
&=\frac{2x}{2}\\
&=x
\end{aligned}$$

Karena kedua komposisi menghasilkan $x$, maka $f$ dan $g$ saling invers.

  Contoh Soal 2

Diketahui $f(x)=4x-1$ dan $g(x)=\frac{x+1}{4}$. Apakah $g$ merupakan invers dari $f$?

💡 Pembahasan

Periksa $(f\circ g)(x)$.

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=4\left(\frac{x+1}{4}\right)-1\\
&=x+1-1\\
&=x
\end{aligned}$$

Periksa $(g\circ f)(x)$.

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=\frac{f(x)+1}{4}\\
&=\frac{(4x-1)+1}{4}\\
&=\frac{4x}{4}\\
&=x
\end{aligned}$$

Karena kedua komposisi menghasilkan $x$, maka $g$ merupakan invers dari $f$.

  Contoh Soal 3

Diketahui $f(x)=x^2$ dengan domain $x\ge0$ dan $g(x)=\sqrt{x}$. Buktikan bahwa $g$ adalah invers dari $f$ pada domain tersebut.

💡 Pembahasan

Periksa $(g\circ f)(x)$.

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=g(x^2)\\
&=\sqrt{x^2}\\
&=x
\end{aligned}$$

Karena domain $f$ adalah $x\ge0$, maka $\sqrt{x^2}=x$.

Periksa $(f\circ g)(x)$.

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=f(\sqrt{x})\\
&=(\sqrt{x})^2\\
&=x
\end{aligned}$$

Dengan syarat $x\ge0$.

Jadi, $g$ adalah invers dari $f$ pada domain yang sesuai.

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Jika $f^{-1}$ adalah invers dari $f$, maka $(f\circ f^{-1})(x)$ bernilai ....

A
$x$

B
$0$

C
$1$

D
$f(x)$

E
$f^{-1}(x)$

💡 Pembahasan

Jika $f^{-1}$ adalah invers dari $f$, maka:

$$(f\circ f^{-1})(x)=x$$

  Latihan Soal 2

Jika $f$ dan $g$ saling invers, maka pernyataan yang benar adalah ....

A
$(f\circ g)(x)=f(x)$

B
$(f\circ g)(x)=x$ dan $(g\circ f)(x)=x$

C
$(f\circ g)(x)=g(x)$

D
$(f\circ g)(x)=0$

E
$(f\circ g)(x)=1$

💡 Pembahasan

Dua fungsi saling invers jika kedua komposisinya menghasilkan fungsi identitas.

Jadi:

$$(f\circ g)(x)=x$$

dan:

$$(g\circ f)(x)=x$$

  Latihan Soal 3

Fungsi identitas dinyatakan dengan ....

A
$I(x)=0$

B
$I(x)=1$

C
$I(x)=x$

D
$I(x)=x+1$

E
$I(x)=\frac{1}{x}$

💡 Pembahasan

Fungsi identitas adalah fungsi yang mengembalikan setiap masukan menjadi dirinya sendiri.

Maka:

$$I(x)=x$$

  Latihan Soal 4

Diketahui $f(x)=3x+6$ dan $g(x)=\frac{x-6}{3}$. Nilai $(f\circ g)(x)$ adalah ....

A
$x$

B
$3x$

C
$x+6$

D
$x-6$

E
$9x+6$

💡 Pembahasan

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=3\left(\frac{x-6}{3}\right)+6\\
&=x-6+6\\
&=x
\end{aligned}$$

  Latihan Soal 5

Diketahui $f(x)=3x+6$ dan $g(x)=\frac{x-6}{3}$. Nilai $(g\circ f)(x)$ adalah ....

A
$x+6$

B
$3x$

C
$x$

D
$x-6$

E
$9x+6$

💡 Pembahasan

Hitung:

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=\frac{f(x)-6}{3}\\
&=\frac{(3x+6)-6}{3}\\
&=\frac{3x}{3}\\
&=x
\end{aligned}$$

  Latihan Soal 6

Diketahui $f(x)=5x-2$ dan $g(x)=\frac{x+2}{5}$. Pernyataan yang benar adalah ....

A
$f$ dan $g$ bukan saling invers

B
$f$ dan $g$ saling invers

C
$(f\circ g)(x)=5x$

D
$(g\circ f)(x)=x+2$

E
$g(x)=\frac{x-2}{5}$

💡 Pembahasan

Periksa komposisi pertama.

$$\begin{aligned}
f(g(x))
&=5\left(\frac{x+2}{5}\right)-2\\
&=x+2-2\\
&=x
\end{aligned}$$

Periksa komposisi kedua.

$$\begin{aligned}
g(f(x))
&=\frac{(5x-2)+2}{5}\\
&=\frac{5x}{5}\\
&=x
\end{aligned}$$

Maka $f$ dan $g$ saling invers.

  Latihan Soal 7

Jika $f(x)=x^2$ dengan domain $x\ge0$ dan $g(x)=\sqrt{x}$, maka $(g\circ f)(x)$ adalah ....

A
$x$

B
$x^2$

C
$\sqrt{x}$

D
$2x$

E
$x+1$

💡 Pembahasan

Hitung:

$$\begin{aligned}
(g\circ f)(x)
&=g(f(x))\\
&=g(x^2)\\
&=\sqrt{x^2}\\
&=x
\end{aligned}$$

Karena domain $f$ adalah $x\ge0$, maka $\sqrt{x^2}=x$.

  Latihan Soal 8

Jika grafik fungsi $f$ melalui titik $(3,8)$, maka grafik fungsi invers $f^{-1}$ melalui titik ....

A
$(3,8)$

B
$(8,3)$

C
$(-3,-8)$

D
$(8,-3)$

E
$(-8,3)$

💡 Pembahasan

Grafik fungsi invers menukar koordinat titik.

Jika fungsi $f$ melalui $(3,8)$, maka fungsi invers melalui:

$$(8,3)$$

  Latihan Soal 9

Grafik fungsi invers merupakan pencerminan grafik fungsi asal terhadap garis ....

A
$x=0$

B
$y=0$

C
$y=x$

D
$y=-x$

E
$x=1$

💡 Pembahasan

Grafik fungsi invers merupakan pencerminan grafik fungsi asal terhadap garis:

$$y=x$$

  Latihan Soal 10

Pernyataan yang benar tentang hubungan fungsi komposisi dan fungsi invers adalah ....

A
fungsi invers selalu sama dengan kebalikan pecahan fungsi asal

B
dua fungsi saling invers jika jumlahnya sama dengan nol

C
dua fungsi saling invers jika komposisinya menghasilkan fungsi identitas

D
fungsi invers tidak berhubungan dengan komposisi fungsi

E
fungsi komposisi selalu menghasilkan invers

💡 Pembahasan

Dua fungsi $f$ dan $g$ saling invers jika:

$$(f\circ g)(x)=x$$

dan:

$$(g\circ f)(x)=x$$

Artinya, komposisinya menghasilkan fungsi identitas.

#### Soal Kontekstual Fungsi Komposisi dan Invers

*Sumber: m4th-lab.net — https://www.m4th-lab.net/materi/soal-kontekstual-fungsi-komposisi-dan-invers*

Pada materi sebelumnya, kita telah mempelajari hubungan fungsi komposisi dan fungsi invers. Sekarang kita akan membahas **soal cerita fungsi komposisi dan invers**.

Soal cerita fungsi komposisi biasanya berkaitan dengan proses berurutan, seperti diskon lalu pajak, konversi satuan bertahap, biaya produksi lalu keuntungan, atau perubahan nilai secara bertahap. Sementara itu, soal cerita fungsi invers biasanya digunakan untuk mencari nilai awal dari suatu hasil akhir.

  📌 **Catatan:** Fungsi komposisi digunakan untuk proses berurutan, sedangkan fungsi invers digunakan untuk membalik proses atau mencari nilai awal.

---

###### 1. Mengingat Kembali Fungsi Komposisi

Jika terdapat dua fungsi $f$ dan $g$, maka komposisi fungsi $f$ terhadap $g$ ditulis:

$$(f\circ g)(x)$$

Maknanya:

$$(f\circ g)(x)=f(g(x))$$

Artinya, $x$ diproses terlebih dahulu oleh fungsi $g$, kemudian hasilnya diproses oleh fungsi $f$.

Secara alur:

$$x \xrightarrow{g} g(x) \xrightarrow{f} f(g(x))$$

  💡 **Ingat:** Pada $(f\circ g)(x)$, fungsi $g$ dikerjakan terlebih dahulu.

---

###### 2. Mengingat Kembali Fungsi Invers

Fungsi invers adalah fungsi kebalikan.

Jika:

$$f(x)=y$$

maka:

$$f^{-1}(y)=x$$

Artinya, fungsi invers mengembalikan hasil akhir menjadi nilai awal.

Contoh:

Jika:

$$f(4)=13$$

maka:

$$f^{-1}(13)=4$$

  📌 **Catatan:** Fungsi invers sering digunakan ketika soal menanyakan nilai awal sebelum suatu proses dilakukan.

---

###### 3. Kapan Menggunakan Fungsi Komposisi?

Gunakan fungsi komposisi jika suatu soal memuat **lebih dari satu proses yang dilakukan berurutan**.

Contoh kata kunci:

| Kata Kunci | Makna |
| --- | --- |
| “lalu” | Ada proses berikutnya setelah proses pertama. |
| “kemudian” | Proses dilakukan secara berurutan. |
| “setelah itu” | Hasil proses pertama diproses lagi. |
| “dikenai pajak setelah diskon” | Diskon dahulu, lalu pajak. |
| “diubah ke satuan lain, lalu dihitung biaya” | Konversi dahulu, lalu fungsi biaya. |

---

###### 4. Kapan Menggunakan Fungsi Invers?

Gunakan fungsi invers jika soal meminta **nilai awal dari hasil akhir**.

Contoh kata kunci:

| Kata Kunci | Makna |
| --- | --- |
| “harga sebelum diskon” | Mencari nilai awal dari harga akhir. |
| “nilai semula” | Membalik proses fungsi. |
| “modal awal” | Mencari nilai sebelum bertambah atau berkurang. |
| “suhu dalam satuan asal” | Membalik konversi satuan. |
| “input awal” | Mencari masukan yang menghasilkan keluaran tertentu. |

  💡 **Strategi:** Jika soal berjalan maju dari nilai awal ke hasil akhir, gunakan komposisi. Jika soal meminta kembali ke nilai awal, gunakan invers.

---

###### 5. Langkah Menyelesaikan Soal Cerita Fungsi Komposisi

Langkah umum menyelesaikan soal cerita fungsi komposisi adalah sebagai berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan variabel yang digunakan. |
| 2 | Tentukan fungsi untuk proses pertama. |
| 3 | Tentukan fungsi untuk proses kedua. |
| 4 | Tentukan urutan proses. |
| 5 | Susun fungsi komposisi sesuai urutan. |
| 6 | Hitung dan tafsirkan hasilnya. |

  ⚠️ **Perhatian:** Urutan proses sangat penting. Diskon lalu pajak tidak selalu sama maknanya dengan pajak lalu diskon dalam konteks tertentu.

---

###### 6. Langkah Menyelesaikan Soal Cerita Fungsi Invers

Langkah umum menyelesaikan soal cerita fungsi invers adalah sebagai berikut.

| Langkah | Penjelasan |
| --- | --- |
| 1 | Tentukan fungsi yang menggambarkan proses. |
| 2 | Tentukan apakah soal meminta nilai awal. |
| 3 | Cari fungsi inversnya. |
| 4 | Substitusikan hasil akhir ke fungsi invers. |
| 5 | Tulis kesimpulan sesuai konteks. |

---

###### 7. Soal Cerita Diskon dan Pajak

Sebuah barang memiliki harga awal $x$ rupiah. Barang tersebut diberi diskon $20\%$, kemudian dikenai pajak $10\%$. Tentukan fungsi harga akhir terhadap harga awal.

Misalkan fungsi diskon adalah $g$.

Karena diskon $20\%$ berarti harga menjadi $80\%$ dari harga awal, maka:

$$g(x)=0{,}8x$$

Misalkan fungsi pajak adalah $f$.

Karena pajak $10\%$ berarti harga dikalikan $110\%$, maka:

$$f(x)=1{,}1x$$

Urutan prosesnya adalah diskon dahulu, lalu pajak.

Maka modelnya:

$$(f\circ g)(x)=f(g(x))$$

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=1{,}1(0{,}8x)\\
&=0{,}88x
\end{aligned}$$

Jadi, fungsi harga akhirnya adalah:

$$(f\circ g)(x)=0{,}88x$$

---

###### 8. Menentukan Harga Akhir dari Komposisi

Jika harga awal barang adalah Rp$250.000$, maka harga akhirnya:

$$\begin{aligned}
(f\circ g)(250.000)
&=0{,}88(250.000)\\
&=220.000
\end{aligned}$$

Jadi, harga akhir barang adalah:

$$\text{Rp}220.000$$

  📌 **Catatan:** Pada soal uang, hasil akhir harus ditulis kembali dalam konteks rupiah.

---

###### 9. Soal Cerita Harga Awal Menggunakan Invers

Sebuah barang setelah diberi diskon $25\%$ memiliki harga Rp$150.000$. Tentukan harga awal barang.

Misalkan harga awal adalah $x$.

Diskon $25\%$ berarti harga menjadi $75\%$ dari harga awal.

Fungsi harga akhir:

$$f(x)=0{,}75x$$

Diketahui:

$$f(x)=150.000$$

Kita dapat menggunakan invers.

Cari invers dari $f(x)=0{,}75x$.

Misalkan:

$$y=0{,}75x$$

Maka:

$$x=\frac{y}{0{,}75}$$

Jadi:

$$f^{-1}(x)=\frac{x}{0{,}75}$$

Substitusikan harga akhir Rp$150.000$.

$$\begin{aligned}
f^{-1}(150.000)
&=\frac{150.000}{0{,}75}\\
&=200.000
\end{aligned}$$

Jadi, harga awal barang adalah:

$$\text{Rp}200.000$$

---

###### 10. Soal Cerita Biaya Produksi dan Pajak

Sebuah perusahaan menentukan biaya produksi suatu barang dengan fungsi:

$$g(x)=5x+20.000$$

dengan $x$ banyak barang. Setelah itu, biaya tersebut dikenai pajak administrasi $10\%$ dengan fungsi:

$$f(x)=1{,}1x$$

Tentukan fungsi total biaya terhadap banyak barang.

Karena biaya produksi dihitung dahulu, lalu dikenai pajak, maka:

$$(f\circ g)(x)=f(g(x))$$

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=1{,}1(5x+20.000)\\
&=5{,}5x+22.000
\end{aligned}$$

Jadi, fungsi total biaya adalah:

$$(f\circ g)(x)=5{,}5x+22.000$$

---

###### 11. Soal Cerita Biaya Layanan

Sebuah aplikasi transportasi menghitung tarif dasar perjalanan dengan fungsi:

$$g(x)=3.000x+5.000$$

dengan $x$ adalah jarak dalam kilometer. Setelah tarif dasar dihitung, pelanggan mendapat potongan Rp$2.000$ dengan fungsi:

$$f(x)=x-2.000$$

Tentukan fungsi tarif akhir.

Karena tarif dasar dihitung dahulu, lalu diberi potongan, maka:

$$(f\circ g)(x)=f(g(x))$$

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=(3.000x+5.000)-2.000\\
&=3.000x+3.000
\end{aligned}$$

Jadi, fungsi tarif akhir adalah:

$$(f\circ g)(x)=3.000x+3.000$$

---

###### 12. Soal Cerita Konversi Suhu

Suhu dalam derajat Celcius $C$ dikonversi ke Fahrenheit menggunakan fungsi:

$$f(C)=\frac95C+32$$

Jika suhu Celcius mula-mula dinaikkan $10^\circ\text{C}$ terlebih dahulu dengan fungsi:

$$g(C)=C+10$$

tentukan fungsi suhu Fahrenheit setelah suhu dinaikkan.

Karena suhu dinaikkan dahulu, lalu dikonversi ke Fahrenheit, maka:

$$(f\circ g)(C)=f(g(C))$$

Hitung:

$$\begin{aligned}
(f\circ g)(C)
&=f(C+10)\\
&=\frac95(C+10)+32\\
&=\frac95C+18+32\\
&=\frac95C+50
\end{aligned}$$

Jadi, fungsi suhu Fahrenheit setelah dinaikkan adalah:

$$(f\circ g)(C)=\frac95C+50$$

---

###### 13. Soal Cerita Mencari Suhu Awal dengan Invers

Konversi suhu Celcius ke Fahrenheit diberikan oleh:

$$F=\frac95C+32$$

Jika suhu Fahrenheit adalah $86^\circ\text{F}$, tentukan suhu dalam Celcius.

Fungsi konversi:

$$f(C)=\frac95C+32$$

Kita mencari nilai $C$ dari hasil $F=86$, sehingga gunakan invers.

Misalkan:

$$y=\frac95C+32$$

Selesaikan untuk $C$.

$$\begin{aligned}
y&=\frac95C+32\\
y-32&=\frac95C\\
C&=\frac59(y-32)
\end{aligned}$$

Jadi:

$$f^{-1}(y)=\frac59(y-32)$$

Substitusikan $y=86$.

$$\begin{aligned}
f^{-1}(86)
&=\frac59(86-32)\\
&=\frac59(54)\\
&=30
\end{aligned}$$

Jadi, suhu tersebut adalah:

$$30^\circ\text{C}$$

  💡 **Ingat:** Pada soal invers, hasil akhir dimasukkan ke fungsi invers untuk mendapatkan nilai awal.

---

###### 14. Soal Cerita Skor Ujian

Nilai mentah siswa $x$ diubah menjadi nilai akhir dengan fungsi:

$$g(x)=2x+10$$

Kemudian nilai akhir tersebut diberi bonus $5$ poin dengan fungsi:

$$f(x)=x+5$$

Tentukan fungsi nilai akhir setelah bonus.

Karena nilai mentah diolah dahulu, lalu diberi bonus, maka:

$$(f\circ g)(x)=f(g(x))$$

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=(2x+10)+5\\
&=2x+15
\end{aligned}$$

Jadi, fungsi nilai akhir setelah bonus adalah:

$$(f\circ g)(x)=2x+15$$

---

###### 15. Mencari Nilai Mentah dari Nilai Akhir

Dari fungsi nilai akhir:

$$h(x)=2x+15$$

Jika nilai akhir siswa adalah $85$, tentukan nilai mentah siswa.

Karena yang ditanyakan adalah nilai mentah dari nilai akhir, gunakan invers.

Misalkan:

$$y=2x+15$$

Selesaikan untuk $x$.

$$\begin{aligned}
y&=2x+15\\
y-15&=2x\\
x&=\frac{y-15}{2}
\end{aligned}$$

Jadi:

$$h^{-1}(y)=\frac{y-15}{2}$$

Substitusikan $y=85$.

$$\begin{aligned}
h^{-1}(85)
&=\frac{85-15}{2}\\
&=\frac{70}{2}\\
&=35
\end{aligned}$$

Jadi, nilai mentah siswa adalah:

$$35$$

---

###### 16. Soal Cerita Tabungan

Jumlah tabungan awal seseorang adalah $x$ rupiah. Setiap bulan tabungan mendapat tambahan bunga $5\%$, lalu ditambah setoran tetap Rp$50.000$.

Fungsi bunga:

$$g(x)=1{,}05x$$

Fungsi setoran:

$$f(x)=x+50.000$$

Karena bunga diberikan dahulu, lalu setoran ditambahkan, maka:

$$(f\circ g)(x)=f(g(x))$$

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=1{,}05x+50.000
\end{aligned}$$

Jadi, fungsi tabungan akhir adalah:

$$(f\circ g)(x)=1{,}05x+50.000$$

---

###### 17. Mencari Tabungan Awal dengan Invers

Jika setelah bunga dan setoran, tabungan akhir menjadi Rp$575.000$, tentukan tabungan awal.

Gunakan fungsi:

$$h(x)=1{,}05x+50.000$$

Kita cari inversnya.

Misalkan:

$$y=1{,}05x+50.000$$

Selesaikan untuk $x$.

$$\begin{aligned}
y&=1{,}05x+50.000\\
y-50.000&=1{,}05x\\
x&=\frac{y-50.000}{1{,}05}
\end{aligned}$$

Substitusikan $y=575.000$.

$$\begin{aligned}
h^{-1}(575.000)
&=\frac{575.000-50.000}{1{,}05}\\
&=\frac{525.000}{1{,}05}\\
&=500.000
\end{aligned}$$

Jadi, tabungan awal adalah:

$$\text{Rp}500.000$$

---

###### 18. Soal Cerita Mesin Produksi

Sebuah mesin pertama mengubah bahan mentah $x$ menjadi:

$$g(x)=2x+3$$

Kemudian mesin kedua memproses hasilnya menjadi:

$$f(x)=4x-5$$

Tentukan keluaran akhir dari kedua mesin.

Karena bahan diproses oleh mesin pertama dahulu, lalu mesin kedua, maka:

$$(f\circ g)(x)=f(g(x))$$

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=4(2x+3)-5\\
&=8x+12-5\\
&=8x+7
\end{aligned}$$

Jadi, fungsi keluaran akhirnya adalah:

$$(f\circ g)(x)=8x+7$$

---

###### 19. Mencari Bahan Mentah Awal

Jika keluaran akhir mesin adalah $87$, tentukan nilai bahan mentah awal $x$.

Gunakan fungsi akhir:

$$h(x)=8x+7$$

Diketahui:

$$h(x)=87$$

Selesaikan:

$$\begin{aligned}
8x+7&=87\\
8x&=80\\
x&=10
\end{aligned}$$

Jadi, bahan mentah awal adalah:

$$10$$

Cara ini setara dengan menggunakan invers dari $h(x)=8x+7$.

---

###### 20. Diagram Alur Fungsi Komposisi dan Invers

Dalam soal cerita, alur proses dapat digambarkan sebagai berikut.

Untuk fungsi komposisi:

$$x \xrightarrow{g} g(x) \xrightarrow{f} f(g(x))$$

Untuk fungsi invers:

$$\text{hasil akhir} \xrightarrow{h^{-1}} \text{nilai awal}$$

  📊 **Gambar 1.** Diagram alur proses fungsi komposisi dan fungsi invers dalam soal cerita.

---

###### 21. Kesalahan yang Sering Terjadi

| Kesalahan | Contoh Salah | Perbaikan |
| --- | --- | --- |
| Salah urutan proses | Diskon lalu pajak ditulis sebagai pajak lalu diskon tanpa melihat cerita. | Baca urutan kata “lalu”, “kemudian”, atau “setelah itu”. |
| Tidak membedakan komposisi dan invers | Soal meminta nilai awal, tetapi diselesaikan dengan fungsi maju. | Jika mencari nilai awal dari hasil akhir, gunakan invers. |
| Salah mengubah persen | Diskon $20\%$ ditulis $1{,}2x$. | Diskon $20\%$ berarti harga menjadi $0{,}8x$. |
| Salah menafsirkan pajak | Pajak $10\%$ ditulis $0{,}1x$ sebagai harga akhir. | Pajak $10\%$ berarti harga akhir menjadi $1{,}1x$. |
| Tidak menulis kesimpulan sesuai konteks | Hasil uang ditulis hanya sebagai angka tanpa satuan. | Tulis kembali dengan satuan, misalnya rupiah, derajat, kilometer, atau poin. |

  ⚠️ **Perhatian:** Pada soal cerita, memahami urutan proses sama pentingnya dengan menghitung.

---

###### 22. Rangkuman

- Fungsi komposisi digunakan untuk menyelesaikan soal dengan proses berurutan.
- Fungsi invers digunakan untuk mencari nilai awal dari hasil akhir.
- Jika proses pertama adalah $g$ dan proses kedua adalah $f$, maka modelnya:
  $$(f\circ g)(x)=f(g(x))$$
- Jika diketahui hasil akhir dan diminta nilai awal, gunakan fungsi invers.
- Diskon $p\%$ berarti nilai menjadi:
  $$\left(1-\frac{p}{100}\right)x$$
- Pajak $p\%$ berarti nilai menjadi:
  $$\left(1+\frac{p}{100}\right)x$$
- Pada soal cerita, kesimpulan harus ditulis sesuai konteks.
- Urutan proses harus dibaca dengan teliti dari cerita.

---

##### Contoh Soal dan Pembahasan

  Contoh Soal 1

Sebuah barang memiliki harga awal $x$ rupiah. Barang tersebut diberi diskon $20\%$, kemudian dikenai pajak $10\%$. Tentukan fungsi harga akhir terhadap harga awal.

💡 Pembahasan

Diskon $20\%$ berarti harga menjadi $80\%$ dari harga awal.

$$g(x)=0{,}8x$$

Pajak $10\%$ berarti harga dikalikan $110\%$.

$$f(x)=1{,}1x$$

Karena diskon dilakukan dahulu, lalu pajak, maka:

$$(f\circ g)(x)=f(g(x))$$

Hitung:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=1{,}1(0{,}8x)\\
&=0{,}88x
\end{aligned}$$

Jadi, fungsi harga akhirnya adalah:

$$(f\circ g)(x)=0{,}88x$$

  Contoh Soal 2

Setelah diberi diskon $25\%$, harga sebuah barang menjadi Rp$180.000$. Tentukan harga awal barang tersebut.

💡 Pembahasan

Diskon $25\%$ berarti harga akhir menjadi $75\%$ dari harga awal.

Misalkan harga awal adalah $x$.

$$f(x)=0{,}75x$$

Diketahui harga akhir Rp$180.000$.

Maka:

$$\begin{aligned}
0{,}75x&=180.000\\
x&=\frac{180.000}{0{,}75}\\
x&=240.000
\end{aligned}$$

Jadi, harga awal barang tersebut adalah:

$$\text{Rp}240.000$$

  Contoh Soal 3

Suatu mesin pertama mengubah bahan mentah $x$ menjadi $g(x)=2x+3$. Mesin kedua memproses hasilnya menjadi $f(x)=4x-5$. Jika keluaran akhir adalah $87$, tentukan nilai bahan mentah awal.

💡 Pembahasan

Karena mesin pertama bekerja dahulu, lalu mesin kedua, maka fungsi akhirnya:

$$(f\circ g)(x)=f(g(x))$$

Hitung fungsi komposisi:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=4(2x+3)-5\\
&=8x+12-5\\
&=8x+7
\end{aligned}$$

Diketahui keluaran akhir $87$, maka:

$$\begin{aligned}
8x+7&=87\\
8x&=80\\
x&=10
\end{aligned}$$

Jadi, nilai bahan mentah awal adalah:

$$10$$

---

##### Latihan Soal Pilihan Ganda

  Latihan Soal 1

Sebuah barang diberi diskon $10\%$, lalu dikenai pajak $5\%$. Jika harga awal barang adalah $x$, maka fungsi harga akhir adalah ....

A
$0{,}90x$

B
$0{,}945x$

C
$1{,}05x$

D
$1{,}15x$

E
$0{,}85x$

💡 Pembahasan

Diskon $10\%$ berarti dikalikan $0{,}9$.

Pajak $5\%$ berarti dikalikan $1{,}05$.

$$\begin{aligned}
\text{harga akhir}
&=1{,}05(0{,}9x)\\
&=0{,}945x
\end{aligned}$$

  Latihan Soal 2

Harga awal suatu barang Rp$300.000$. Barang diberi diskon $20\%$, lalu dikenai pajak $10\%$. Harga akhirnya adalah ....

A
Rp$240.000$

B
Rp$264.000$

C
Rp$270.000$

D
Rp$280.000$

E
Rp$330.000$

💡 Pembahasan

Diskon $20\%$ berarti dikalikan $0{,}8$.

Pajak $10\%$ berarti dikalikan $1{,}1$.

$$\begin{aligned}
\text{harga akhir}
&=1{,}1(0{,}8)(300.000)\\
&=0{,}88(300.000)\\
&=264.000
\end{aligned}$$

Jadi, harga akhirnya Rp$264.000$.

  Latihan Soal 3

Setelah diberi diskon $25\%$, harga barang menjadi Rp$150.000$. Harga awal barang tersebut adalah ....

A
Rp$200.000$

B
Rp$187.500$

C
Rp$175.000$

D
Rp$125.000$

E
Rp$112.500$

💡 Pembahasan

Diskon $25\%$ berarti harga akhir menjadi $75\%$ dari harga awal.

$$\begin{aligned}
0{,}75x&=150.000\\
x&=\frac{150.000}{0{,}75}\\
x&=200.000
\end{aligned}$$

Jadi, harga awalnya Rp$200.000$.

  Latihan Soal 4

Biaya produksi suatu barang dinyatakan dengan $g(x)=4x+10.000$. Setelah itu dikenai pajak administrasi $10\%$ dengan $f(x)=1{,}1x$. Fungsi total biaya adalah ....

A
$4x+11.000$

B
$4{,}4x+11.000$

C
$4{,}1x+10.000$

D
$5x+10.000$

E
$1{,}1x+10.000$

💡 Pembahasan

Karena biaya produksi dihitung dahulu, lalu pajak, maka:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=1{,}1(4x+10.000)\\
&=4{,}4x+11.000
\end{aligned}$$

  Latihan Soal 5

Tarif dasar perjalanan dinyatakan dengan $g(x)=3.000x+5.000$. Setelah itu pelanggan mendapat potongan Rp$2.000$. Fungsi tarif akhir adalah ....

A
$3.000x+5.000$

B
$3.000x+3.000$

C
$3.000x+7.000$

D
$5.000x+3.000$

E
$3.000x-5.000$

💡 Pembahasan

Tarif dasar:

$$g(x)=3.000x+5.000$$

Potongan Rp$2.000$ berarti:

$$f(x)=x-2.000$$

Maka:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=(3.000x+5.000)-2.000\\
&=3.000x+3.000
\end{aligned}$$

  Latihan Soal 6

Suhu Celcius dinaikkan $10^\circ\text{C}$ terlebih dahulu, lalu dikonversi ke Fahrenheit dengan rumus $F=\frac95C+32$. Fungsi Fahrenheit terhadap suhu awal $C$ adalah ....

A
$\frac95C+32$

B
$\frac95C+50$

C
$\frac95C+10$

D
$\frac59C+32$

E
$\frac59(C-32)$

💡 Pembahasan

Suhu dinaikkan dahulu:

$$g(C)=C+10$$

Lalu dikonversi:

$$f(C)=\frac95C+32$$

Maka:

$$\begin{aligned}
(f\circ g)(C)
&=f(C+10)\\
&=\frac95(C+10)+32\\
&=\frac95C+18+32\\
&=\frac95C+50
\end{aligned}$$

  Latihan Soal 7

Jika suhu Fahrenheit adalah $95^\circ\text{F}$, maka suhu Celciusnya adalah ....
Gunakan rumus $F=\frac95C+32$.

A
$25^\circ\text{C}$

B
$30^\circ\text{C}$

C
$35^\circ\text{C}$

D
$40^\circ\text{C}$

E
$45^\circ\text{C}$

💡 Pembahasan

Gunakan invers:

$$C=\frac59(F-32)$$

Substitusikan $F=95$.

$$\begin{aligned}
C
&=\frac59(95-32)\\
&=\frac59(63)\\
&=35
\end{aligned}$$

Jadi, suhunya $35^\circ\text{C}$.

  Latihan Soal 8

Nilai mentah $x$ diolah menjadi nilai akhir dengan fungsi $h(x)=2x+15$. Jika nilai akhir adalah $95$, maka nilai mentahnya adalah ....

A
$35$

B
$40$

C
$45$

D
$50$

E
$55$

💡 Pembahasan

Diketahui:

$$h(x)=2x+15$$

dan hasil akhirnya $95$.

$$\begin{aligned}
2x+15&=95\\
2x&=80\\
x&=40
\end{aligned}$$

Jadi, nilai mentahnya $40$.

  Latihan Soal 9

Tabungan awal $x$ mendapat bunga $5\%$, lalu ditambah setoran Rp$50.000$. Fungsi tabungan akhir adalah ....

A
$1{,}05x$

B
$1{,}05x+50.000$

C
$0{,}95x+50.000$

D
$x+1{,}05(50.000)$

E
$1{,}5x+50.000$

💡 Pembahasan

Bunga $5\%$ berarti tabungan menjadi $1{,}05x$.

Setelah itu ditambah Rp$50.000$.

Maka fungsi akhirnya:

$$1{,}05x+50.000$$

  Latihan Soal 10

Mesin pertama mengubah bahan $x$ menjadi $g(x)=2x+3$. Mesin kedua mengubah hasilnya menjadi $f(x)=4x-5$. Jika keluaran akhir adalah $87$, maka nilai $x$ adalah ....

A
$8$

B
$10$

C
$12$

D
$14$

E
$16$

💡 Pembahasan

Fungsi akhir:

$$\begin{aligned}
(f\circ g)(x)
&=f(g(x))\\
&=4(2x+3)-5\\
&=8x+7
\end{aligned}$$

Diketahui keluaran akhir $87$.

$$\begin{aligned}
8x+7&=87\\
8x&=80\\
x&=10
\end{aligned}$$
