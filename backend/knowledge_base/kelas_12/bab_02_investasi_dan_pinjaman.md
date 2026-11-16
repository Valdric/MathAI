---
judul: "Investasi dan Pinjaman"
kelas: "12"
fase: "F"
bab: "2"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (6 bagian)"
---

# Bab 2 — Investasi dan Pinjaman

> Kelas 12 · Fase F · Matematika Umum

## Daftar Isi

- Suku Bunga Tunggal
- Investasi Bunga Majemuk
- Investasi Anuitas
- Pinjaman Bunga Majemuk
- Pinjaman dengan Anuitas
- Parameter Investasi dan Pinjaman

## Suku Bunga Tunggal

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 2 Investasi dan Pinjaman, subbab A Suku Bunga Tunggal, hlm. 37–39.*

Koperasi simpan pinjam biasanya menggunakan bunga tunggal dalam transaksi pembiayaan. **Suku bunga** adalah balas jasa yang diberikan nasabah kepada bank atas peminjaman uang, atau balas jasa yang diberikan bank kepada nasabah atas penyimpanan uang.

$$B = M \times p\% \times n, \qquad M_{\text{akhir}} = M_{\text{awal}} + B$$

**Masalah A.** Pak Roni menyimpan Rp15.000.000,00 di koperasi dengan bunga 1% per tahun selama 5 tahun:

$$B = 15.000.000 \times 1\% \times 5 = 750.000, \qquad M_{\text{akhir}} = 15.750.000$$

**Masalah B.** Pak Bayu menyimpan Rp1.000.000,00 dengan bunga tunggal 18% per tahun selama 8 bulan. Bunga per bulan $\tfrac{18}{12}\% = 1{,}5\%$, sehingga

$$B = 1.000.000 \times 1{,}5\% \times 8 = 120.000, \qquad M_{\text{akhir}} = 1.120.000$$

Besar bunga dan modal akhir bertambah secara **linear** sesuai lama penyimpanan, karena bunga tunggal tidak dihitung dari modal yang sudah ditambah bunga sebelumnya.

## Investasi Bunga Majemuk

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 2 Investasi dan Pinjaman, subbab B Investasi Bunga Majemuk, hlm. 40–45.*

**Bunga majemuk** adalah imbal jasa yang dihitung berdasarkan besar modal pada periode bunga berjalan; besar bunga pertama berbeda dengan bunga kedua, ketiga, dan seterusnya. Bunga majemuk sering dipakai pada investasi jangka panjang seperti deposito, reksa dana, dan saham.

Pak Roni menabung Rp15.000.000,00 dengan bunga majemuk 1% per tahun:

| Tahun | Bunga (Rp) | Modal akhir (Rp) |
|---|---|---|
| 0 | 0 | 15.000.000,00 |
| 1 | 150.000,00 | 15.150.000,00 |
| 2 | 151.500,00 | 15.301.500,00 |
| 3 | 153.015,00 | 15.454.515,00 |
| 4 | 154.545,00 | 15.609.060,00 |
| 5 | 156.091,00 | 15.765.151,00 |

Polanya: $M_1 = M(1 + p)$, $M_2 = M(1 + p)^2$, $M_3 = M(1 + p)^3$, sehingga setelah $n$ periode

$$M_n = M(1 + p)^n$$

dengan $M_n$ modal akhir, $M$ modal awal, $p$ persentase bunga per periode, dan $n$ banyak periode.

### Contoh 2.1

Modal Rp5.000.000,00 dibungakan dengan bunga majemuk 10% per tahun selama 6 tahun.

$$M_6 = 5.000.000(1{,}1)^6 = 8.857.805, \qquad \text{bunga} = 8.857.805 - 5.000.000 = 3.857.805$$

### Contoh 2.2

Ahmad menabung dengan bunga majemuk 3% per 4 bulan. Setelah 8 bulan ($n = 2$ periode) saldonya Rp2.121.800,00. Berapa tabungan semula?

$$2.121.800 = M(1{,}03)^2 = M \times 1{,}0609 \Rightarrow M = 2.000.000$$

## Investasi Anuitas

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 2 Investasi dan Pinjaman, subbab C Investasi Anuitas, hlm. 45–55.*

**Anuitas** adalah sistem pembayaran atau penerimaan pada periode waktu yang teratur dalam jumlah yang sama atas suatu investasi (setiap bulan, triwulan, semester, atau tahun).

- **Anuitas terutang**: pembayaran/penerimaan dilakukan di **awal** setiap periode.
- **Anuitas biasa**: pembayaran/penerimaan dilakukan di **akhir** setiap periode.

### Deposito Affan

Affan menyetor Rp20.000.000,00 setiap tahun dengan bunga 7,2% per tahun. Setelah tahun pertama tabungannya berbunga Rp1.440.000,00 menjadi Rp21.440.000,00; ditambah setoran berikutnya menjadi Rp41.440.000,00, dan seterusnya.

### Jumlah Tabungan Anuitas

Jika seseorang menabung $A$ setiap periode dengan bunga majemuk $i$ per periode, nilai akhir setiap setoran membentuk **deret geometri** dengan suku pertama $A$ dan rasio $(1 + i)$. Menurut buku:

$$S_n = A + A(1 + i) + A(1 + i)^2 + \cdots, \qquad S_n = \frac{A\big((1 + i)^n - 1\big)}{i}$$

### Nilai Masa Depan (Future Value)

$$FV = A \times \frac{(1 + i)^n - 1}{i}$$

dengan $FV$ nilai masa depan, $A$ nilai simpanan per periode, $i$ suku bunga, dan $n$ banyak periode.

**Contoh 2.3.** Santi menyimpan Rp15.000.000,00 per tahun dengan bunga majemuk 6% per tahun selama 10 tahun:

$$FV = 15.000.000 \times \frac{(1{,}06)^{10} - 1}{0{,}06} \approx 197.711.924$$

### Nilai Sekarang (Present Value)

Hubungan nilai sekarang dan nilai masa depan: $FV = PV \times (1 + i)^n$. Untuk penerimaan rutin sebesar $A$ per periode:

$$PV = A \times \frac{1 - (1 + i)^{-n}}{i}$$

**Contoh 2.4.** Seseorang ingin mengambil Rp1.000.000,00 setiap tahun selama 10 tahun dari tabungan berbunga majemuk 4% per tahun. Tabungan awal yang diperlukan:

$$PV = 1.000.000 \times \frac{1 - (1{,}04)^{-10}}{0{,}04} \approx 8.110.895{,}78$$

> Tahukah kalian: kenaikan harga barang dan jasa secara terus-menerus dalam periode tertentu disebut **inflasi**.

## Pinjaman Bunga Majemuk

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 2 Investasi dan Pinjaman, subbab D Pinjaman Bunga Majemuk, hlm. 55–58.*

Pada pinjaman, bunga dihitung dari pokok pinjaman yang masih berjalan, sehingga bunga **berkurang** seiring berjalannya waktu.

Jihan meminjam Rp15.000.000,00 dengan bunga 12% per tahun (1% per bulan), diangsur 10 bulan dengan angsuran pokok tetap Rp1.500.000,00:

| Bulan | Sisa pinjaman | Angsuran pokok | Bunga (1%) | Total angsuran |
|---|---|---|---|---|
| 1 | 15.000.000 | 1.500.000 | 150.000 | 1.650.000 |
| 2 | 13.500.000 | 1.500.000 | 135.000 | 1.635.000 |
| 3 | 12.000.000 | 1.500.000 | 120.000 | 1.620.000 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 10 | 1.500.000 | 1.500.000 | 15.000 | 1.515.000 |

### Rumus Bunga Pinjaman Bulan ke-$k$

$$B_k = \big[P_a - A \times (k - 1)\big] \times \frac{b}{12}$$

dengan $B_k$ bunga bulan ke-$k$, $P_a$ pokok pinjaman awal, $A$ angsuran pokok per bulan, dan $b$ persentase bunga per tahun.

### Contoh 2.5

Pak Andi meminjam Rp20.000.000,00 dengan bunga 10% per tahun (sekitar 0,833% per bulan), dikembalikan dalam 5 bulan dengan angsuran pokok tetap Rp4.000.000,00. Bunga cicilan ke-3:

$$B_3 = [20.000.000 - 4.000.000 \times 2] \times \frac{10\%}{12} = 12.000.000 \times 0{,}0083 = 99.960$$

> Catatan: buku membulatkan $\tfrac{10\%}{12}$ menjadi 0,0083 sehingga bunga bulan pertama tertulis 166.600; dengan nilai tepat $\tfrac{0{,}1}{12}$, bunga bulan pertama Rp166.666,67 dan bunga bulan ketiga Rp100.000,00.

## Pinjaman dengan Anuitas

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 2 Investasi dan Pinjaman, subbab E Pinjaman dengan Anuitas, hlm. 59–71.*

Anuitas pada pinjaman adalah pembayaran dalam jumlah yang sama pada periode yang teratur (misalnya kredit kendaraan dan KPR). Setiap anuitas terdiri atas angsuran pokok $a$ dan bunga $b$:

$$\text{Anuitas } (A) = \text{Angsuran } (a) + \text{Bunga } (b)$$

### Tabel Rencana Pelunasan

Andi meminjam Rp10.000.000,00 dengan anuitas Rp2.000.000,00 per bulan dan bunga 12% per tahun (1% per bulan):

| Bulan | Pinjaman awal bulan | Bunga | Angsuran | Sisa pinjaman |
|---|---|---|---|---|
| 1 | 10.000.000 | 100.000 | 1.900.000 | 8.100.000 |
| 2 | 8.100.000 | 81.000 | 1.919.000 | 6.181.000 |
| 3 | 6.181.000 | 61.810 | 1.938.190 | 4.242.810 |
| 4 | 4.242.810 | 42.428,10 | 1.957.571,90 | 2.285.238,10 |
| 5 | 2.285.238,10 | 22.852,38 | 1.977.147,62 | 308.090,48 |
| 6 | 308.090,48 | 3.080,90 | 308.090,48 | 0 |

Bunga makin kecil dan angsuran makin besar dari bulan ke bulan. Anuitas terakhir menyesuaikan sisa pinjaman ditambah bunganya, yaitu $308.090{,}48 + 3.080{,}90 \approx$ Rp311.171,39.

### Angsuran Bulan ke-$n$

Besar angsuran membentuk barisan geometri dengan rasio $1 + i$ dan suku pertama $a_1 = A - iM$:

$$a_n = (A - Mi)(1 + i)^{n-1}$$

**Contoh 2.6.** Leni meminjam Rp50.000.000,00, bunga 1% per bulan, anuitas Rp2.000.000,00. Angsuran bulan ke-5:

$$a_5 = (2.000.000 - 500.000)(1{,}01)^4 \approx 1.560.906$$

### Jumlah Angsuran dan Sisa Pinjaman

$$S_n = (A - Mi) \times \frac{(1 + i)^n - 1}{i}$$

**Contoh 2.7.** Untuk pinjaman Juan (sama dengan Contoh 2.6), jumlah angsuran hingga bulan ke-5:

$$S_5 = 1.500.000 \times \frac{(1{,}01)^5 - 1}{0{,}01} \approx 7.651.507{,}51$$

Sisa pinjaman $= 50.000.000 - 7.651.507{,}51 = 42.348.492{,}49$.

### Pinjaman Awal dan Besar Anuitas

$$M = A \times \frac{1 - (1 + i)^{-n}}{i}, \qquad A = M \times \frac{i}{1 - (1 + i)^{-n}}$$

**Contoh 2.8.** Anuitas Rp5.023.104,00 per bulan selama 12 bulan dengan bunga 3% per bulan: $M = 5.023.104 \times \dfrac{1 - (1{,}03)^{-12}}{0{,}03} \approx 50.000.000$.

**Contoh 2.9.** Kanaya membeli sepeda listrik Rp12.000.000,00 dengan bunga 6% per tahun (3% per enam bulan), dilunasi dengan 8 kali anuitas setiap enam bulan:

$$A = 12.000.000 \times \frac{0{,}03}{1 - (1{,}03)^{-8}} \approx 1.709.477$$

## Parameter Investasi dan Pinjaman

*Sumber: Buku Siswa Matematika untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi), Mohammad Tohir dkk., Kemendikdasmen, 2025, Bab 2 Investasi dan Pinjaman, subbab F Parameter Investasi dan Pinjaman, hlm. 71–75.*

Dua parameter yang memengaruhi nilai akhir investasi dan pinjaman:

1. **Suku bunga:** makin besar suku bunga, makin besar nilai akhirnya.
2. **Periode pembayaran:** makin lama periode, makin besar nilai akhirnya.

Contoh dari buku: perusahaan "SURYA LIGHT" menginvestasikan dana rutin 10% dari omset minimum (Rp300.000.000,00) selama 2–4 tahun dengan suku bunga 3%–7% per tahun. Grafik hubungan suku bunga dan nilai akhir, serta grafik hubungan periode dan nilai akhir, keduanya naik.
