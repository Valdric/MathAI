---
judul: "Induksi Matematika"
kelas: "11"
fase: "F"
bab: "4"
mapel: "Matematika Umum"
kurikulum: "Kurikulum Merdeka"
sumber: "buku siswa/guru Matematika Kemendikbud/Kemendikdasmen (2 bagian)"
---

# Bab 4 — Induksi Matematika

> Kelas 11 · Fase F · Matematika Umum

## Daftar Isi

- Prinsip Induksi Matematika
- Penerapan Induksi Matematika

## Prinsip Induksi Matematika

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab I Induksi Matematika, subbab 1.1–1.2, hlm. 3–13.*

**Induksi matematika** adalah teknik pembuktian yang baku dalam matematika. Dengan induksi matematika, kebenaran suatu pernyataan matematis dapat dibuktikan hanya dengan sejumlah langkah terbatas yang cukup mudah. Prinsipnya seperti **efek domino**: jika domino disusun berjajar dan domino pertama dijatuhkan, semua domino akan jatuh satu per satu.

Induksi matematika digunakan untuk **membuktikan** kebenaran pernyataan yang berhubungan dengan bilangan asli, bukan untuk **menemukan** formula.

> Catatan historis: penggunaan induksi matematis pertama kali diketahui dalam karya Francesco Maurolico (1494–1575), *Arithmeticorum Libri Duo*, untuk membuktikan bahwa jumlah $n$ bilangan ganjil positif pertama sama dengan $n^2$.

### Prinsip 1.1 Induksi Matematika

Misalkan $P(n)$ suatu pernyataan bilangan asli. Pernyataan $P(n)$ benar jika memenuhi:

1. **Langkah awal (basic step):** $P(1)$ benar.
2. **Langkah induksi (induction step):** jika $P(k)$ benar, maka $P(k + 1)$ benar, untuk setiap $k$ bilangan asli.

Langkah awal tidak harus $n = 1$; dapat dipilih sebarang nilai $n$ yang memudahkan. Jika $P(n)$ memenuhi kedua langkah, formula $P(n)$ terbukti benar; jika salah satu tidak dipenuhi, formula $P(n)$ salah.

### Contoh 1.1

Buktikan bahwa jumlah $n$ bilangan ganjil positif pertama sama dengan $n^2$, yaitu

$$P(n): \; 1 + 3 + 5 + \cdots + (2n - 1) = n^2$$

**Langkah awal:** untuk $n = 1$, $1 = 1^2$. Jadi $P(1)$ benar.

**Langkah induksi:** misalkan $P(k)$ benar, yaitu $1 + 3 + 5 + \cdots + (2k - 1) = k^2$. Kedua ruas ditambah $(2k + 1)$:

$$1 + 3 + \cdots + (2k - 1) + (2k + 1) = k^2 + 2k + 1 = (k + 1)^2$$

Ini adalah $P(k + 1)$, karena suku ke-$(k + 1)$ adalah $2(k + 1) - 1 = 2k + 1$. Jadi, $1 + 3 + 5 + \cdots + (2n - 1) = n^2$ benar untuk setiap bilangan asli $n$.

## Penerapan Induksi Matematika

*Sumber: Buku Siswa Matematika SMA/MA/SMK/MAK Kelas XI, Kemendikbud (Kurikulum 2013, Edisi Revisi 2017), Bab I Induksi Matematika, subbab 1.3 Bentuk-Bentuk Penerapan Induksi Matematika, hlm. 14–24.*

### Penerapan pada Barisan Bilangan (Masalah 1.4)

Diberikan barisan bilangan asli 2, 9, 16, 23, 30, 37, 44, 51, … Rancang formula suku ke-$n$, uji dengan induksi matematika, lalu tentukan suku ke-1.000.

Barisan bertambah 7 setiap suku, sehingga dirancang formula $u_n = 7n - 5$.

**Langkah awal:** untuk $n = 4$, $u_4 = 7(4) - 5 = 23$, sesuai barisan. Jadi $P(4)$ benar.

**Langkah induksi:** misalkan $u_k = 7k - 5$ benar. Karena barisan bertambah 7, suku berikutnya

$$u_{k+1} = (7k - 5) + 7 = 7k + 2 = 7(k + 1) - 5$$

Jadi $P(k + 1)$ benar, sehingga formula $u_n = 7n - 5$ benar. Dengan demikian $u_{1.000} = 7(1.000) - 5 = 6.995$.

### Penerapan pada Keterbagian (Contoh 1.5)

"Habis dibagi" berarti hasil baginya bilangan bulat tanpa sisa; misalnya 36 habis dibagi 3, tetapi tidak habis dibagi 7.

Tunjukkan bahwa $11^n - 6$ habis dibagi 5 untuk setiap bilangan asli $n$.

**Langkah awal:** buku memilih $n = 3$: $11^3 - 6 = 1.325 = 5(265)$, habis dibagi 5.

**Langkah induksi:** misalkan $11^k - 6$ habis dibagi 5, yaitu $11^k - 6 = 5m$ untuk suatu bilangan bulat positif $m$, sehingga $11^k = 5m + 6$. Maka

$$11^{k+1} - 6 = 11^k \cdot 11 - 6 = (5m + 6)(11) - 6 = 55m + 60 = 5(11m + 12)$$

Jadi $11^{k+1} - 6$ juga habis dibagi 5. Karena kedua langkah dipenuhi, $11^n - 6$ habis dibagi 5 untuk setiap bilangan asli $n$.

### Contoh 1.6

Buku juga membuktikan dengan induksi matematika bahwa untuk $n$ bilangan asli dan $x \neq y$, bentuk $x^n - y^n$ habis dibagi $(x - y)$.
