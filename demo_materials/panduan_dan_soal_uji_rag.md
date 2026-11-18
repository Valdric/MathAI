# Panduan Pengujian & Skenario Demo RAG (MathAI UTS)

Dokumen ini berisi panduan skenario dan soal uji yang siap Anda salin (*copy-paste*) saat demonstrasi rekaman video UTS.

---

## 🎯 Skenario Pengujian 1: Sebelum Dokumen Di-upload (Poin 2 di Video)

### Soal Uji yang Diketikkan ke Chatbot:
Salin dan tanyakan soal khusus berikut ke MathAI **SEBELUM** Anda mengunggah file materi:

```text
Sebuah perusahaan memproduksi x unit kalkulator dengan fungsi biaya total:
C(x) = 2x^3 - 36x^2 + 210x + 500
Tentukan jumlah unit produksi x agar biaya marginalnya minimum, dan hitung nilai biaya marginal minimum tersebut!
```

### 🔍 Apa yang Terjadi & Yang Harus Dijelaskan di Video:
- **Respon AI Standar (Tanpa RAG Dokumen Khusus):**
  - AI mungkin salah membedakan antara meminimumkan biaya total $C(x)$ dengan meminimumkan biaya marginal $MC(x) = C'(x)$.
  - Sering kali LLM langsung menyamakan $C'(x) = 0$ (mencari stasioner biaya total, bukan turunan dari biaya marginal), sehingga mendapatkan akar persamaan kuadrat yang salah.
  - Tidak ada sitasi referensi modul kurikulum atau catatan langkah terverifikasi dari dokumen materi.

---

## 🚀 Skenario Pengujian 2: Proses Upload Knowledge (Poin 3 di Video - Giliran Anda)

1. Klik tombol **Kamera / Unggah Dokumen** di samping kolom input chat MathAI.
2. Pilih file materi: `demo_materials/materi_aplikasi_turunan_sma.md`.
3. Tunjukkan di layar:
   - Notifikasi sukses: *"File materi_aplikasi_turunan_sma.md berhasil diproses dan di-index"*.
   - Badge pill dokumen muncul di atas kolom chat dengan label potongan teks.
4. Jelaskan proses Data Engineer:
   - File dibaca $\rightarrow$ Formula LaTeX `$..$` dan `$$..$$` dibersihkan $\rightarrow$ Dipotong secara *Structure-Aware* $\rightarrow$ Disimpan ke Vector Database ChromaDB.

---

## 🏆 Skenario Pengujian 3: Setelah Dokumen Di-upload (Poin 4 di Video)

### Soal Uji yang Diketikkan ke Chatbot (Sama Persis):
Salin kembali soal yang sama persis:

```text
Sebuah perusahaan memproduksi x unit kalkulator dengan fungsi biaya total:
C(x) = 2x^3 - 36x^2 + 210x + 500
Tentukan jumlah unit produksi x agar biaya marginalnya minimum, dan hitung nilai biaya marginal minimum tersebut!
```

### ✅ Kunci Jawaban Eksak yang Dihasilkan AI (Berkat RAG):
1. **Langkah 1:** Menghitung fungsi biaya marginal $MC(x) = C'(x) = 6x^2 - 72x + 210$.
2. **Langkah 2:** Mencari syarat minimum biaya marginal dengan menurunkan $MC(x)$:
   $$MC'(x) = 12x - 72 = 0 \implies x = 6\text{ unit}$$
   Uji turunan kedua: $MC''(6) = 12 > 0$ (terbukti minimum lokal).
3. **Langkah 3:** Menghitung nilai biaya marginal minimum:
   $$MC(6) = 6(6)^2 - 72(6) + 210 = 216 - 432 + 210 = -6$$
4. **Hasil Akhir:** Jumlah unit produksi $x = 6$ unit, dan biaya marginal minimum adalah $-6$ puluh ribu rupiah.

---

## 💡 Tips Tambahan untuk Data Engineer saat Rekaman:
- Tunjukkan bahwa saat file diunggah, dokumen langsung terisolasi dan tersimpan di koleksi ChromaDB `smartai_uploads`.
- Jika Anda mengklik tombol silang (`X`) pada badge file di atas chat, file tersebut otomatis terhapus dari Vector Database (menunjukkan fitur pembersihan resource yang aman).
