export interface IFormulaItem {
  name: string;
  badge: string;
  formula: string;
  description: string;
}

export interface IExampleProblem {
  title: string;
  problem: string;
  substitutions: string[];
  finalResult: string;
  resultNote: string;
}

export interface ICurriculumTopicDetail {
  curriculumType: string;
  title: string;
  subtitle: string;
  conceptSummary: string;
  keyPoints: string[];
  examTips: string;
  formulas: IFormulaItem[];
  example: IExampleProblem;
  quickChips: string[];
}

export const CURRICULUM_DATA: Record<string, ICurriculumTopicDetail> = {
  // ==========================================
  // KELAS 10
  // ==========================================

  // 1. Eksponen dan Logaritma
  'Eksponen dan Logaritma': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Eksponen & Logaritma Dasar',
    subtitle: 'Sifat Operasi Bentuk Pangkat, Bentuk Akar, dan Persamaan Logaritma',
    conceptSummary: "Eksponen memodelkan perkalian berulang dan fenomena pertumbuhan atau peluruhan eksponensial (seperti pertumbuhan bakteri, bunga majemuk, dan peluruhan radioaktif). Logaritma merupakan invers langsung dari fungsi eksponen: jika a pangkat c sama dengan b, maka logaritma b berbasis a adalah c. Pemahaman eksponen dan logaritma menjadi fondasi utama dalam aljabar kalkulus, fungsi pertumbuhan, dan pemodelan sains modern.",
    keyPoints: [
      "Sifat Dasar Eksponen: Perkalian dengan basis sama menjumlahkan pangkat, pembagian mengurangkan pangkat, dan pangkat dipangkatkan mengalikan pangkat.",
      "Bentuk Akar & Pangkat Pecahan: Nilai a^(m/n) sama dengan akar pangkat n dari a^m. Pangkat negatif a^(-n) = 1/(a^n).",
      "Syarat Mutlak Logaritma: Basis a harus positif dan tidak sama dengan 1 (a > 0, a != 1), serta numerus b wajib lebih dari nol (b > 0).",
      "Sifat Perubahan Basis: ^a log b = (^c log b) / (^c log a), sangat berguna menyederhanakan perhitungan non-kalkulator."
],
    examTips: "Jebakan Numerus: Pada persamaan logaritma, selalu substitusikan kembali nilai x yang didapat ke numerus awal. Jika menghasilkan nilai numerus <= 0, maka x tersebut adalah penyelesaian palsu (ekstran) dan tidak memenuhi syarat.",
    formulas: [
      {
        name: 'Perkalian & Pembagian Eksponen',
        badge: 'aᵐ · aⁿ',
        formula: 'a^m \\cdot a^n = a^{m+n}, \\quad \\frac{a^m}{a^n} = a^{m-n}',
        description: 'Pangkat dijumlahkan pada perkalian dan dikurangkan pada pembagian (basis sama).',
      },
      {
        name: 'Pangkat Pecahan & Bentuk Akar',
        badge: 'ⁿ√aᵐ',
        formula: 'a^{\\frac{m}{n}} = \\sqrt[n]{a^m}, \\quad a^{-n} = \\frac{1}{a^n}',
        description: 'Konversi bentuk pangkat rasional menjadi bentuk akar dan pangkat negatif.',
      },
      {
        name: 'Definisi Logaritma',
        badge: 'ᵃlog b = c',
        formula: '{}^a\\log b = c \\iff a^c = b \\quad (a > 0, a \\ne 1, b > 0)',
        description: 'Logaritma adalah invers dari perpangkatan. Syarat basis dan numerus harus positif.',
      },
      {
        name: 'Sifat Penjumlahan & Pengurangan',
        badge: 'ᵃlog(b·c)',
        formula: '{}^a\\log b + {}^a\\log c = {}^a\\log(b \\cdot c), \\quad {}^a\\log b - {}^a\\log c = {}^a\\log\\left(\\frac{b}{c}\\right)',
        description: 'Operasi logaritma ber-basis sama mengubah penjumlahan menjadi perkalian numerus.',
      },
    ],
    example: {
      title: 'Penyederhanaan Bentuk Pangkat & Logaritma',
      problem:
        'Sederhanakan ekspresi (2³ · 2⁵) / 2⁴ serta tentukan nilai x dari persamaan ²log(x + 2) = 3.',
      substitutions: [
        'Bentuk eksponen: 2^{3+5-4} = 2^4 = 16',
        '^2\\log(x + 2) = 3 \\implies x + 2 = 2^3',
        'x + 2 = 8 \\implies x = 8 - 2 = 6',
        'Uji syarat numerus: x + 2 = 6 + 2 = 8 > 0 (Memenuhi syarat numerus)',
      ],
      finalResult: 'x = 6',
      resultNote: 'Nilai x = 6 terdefinisi dan memenuhi syarat numerus logaritma.',
    },
    quickChips: [
      '# CARA: Merasionalkan Penyebut Akar',
      'Sifat Perubahan Basis Logaritma',
      'Pertidaksamaan Eksponen',
      'Trik Cepat Soal UTBK Eksponen',
    ],
  },

  // 2. Barisan dan Deret
  'Barisan dan Deret': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Barisan & Deret Aritmetika - Geometri',
    subtitle: 'Pola Bilangan, Suku ke-n, Deret Tak Hingga, dan Penerapan Finansial',
    conceptSummary: "Barisan adalah susunan bilangan terurut dengan aturan pola tertentu, sedangkan deret adalah jumlahan suku-suku dari barisan tersebut. Barisan Aritmetika bertambah atau berkurang dengan selisih tetap (beda b), sedangkan Barisan Geometri bertambah atau berkurang melalui faktor pengali konstan (rasio r). Materi ini diterapkan secara luas dalam perhitungan keuangan perbankan (anuitas dan bunga majemuk), fisika osilasi, hingga algoritma pemrograman.",
    keyPoints: [
      "Hubungan Suku dan Deret: Hubungan krusial yang sering diuji adalah Un = Sn - S(n-1) untuk n >= 2.",
      "Suku Tengah Barisan: Jika banyak suku ganjil, suku tengah aritmetika adalah Ut = (a + Un)/2 dan geometri adalah Ut = sqrt(a * Un).",
      "Deret Geometri Tak Hingga: Hanya memiliki jumlah terdefinisi (konvergen) jika nilai mutlak rasio |r| < 1 dengan rumus S_inf = a / (1 - r).",
      "Sisipan Barisan: Jika disisipkan k bilangan antara dua suku aritmetika, beda baru b' = b / (k + 1)."
],
    examTips: "Suku Bebas Rumus: Jika diketahui dua suku acak (misal U_3 dan U_7), cari beda (b) dengan mengurangkan: U_7 - U_3 = 4b. Tidak perlu mencari suku pertama (a) di awal pengerjaan.",
    formulas: [
      {
        name: 'Suku ke-n Aritmetika',
        badge: 'Uₙ (Arit)',
        formula: 'U_n = a + (n - 1)b, \\quad b = U_n - U_{n-1}',
        description: 'a: suku pertama, b: beda tetap antara dua suku berurutan.',
      },
      {
        name: 'Jumlah n Suku Aritmetika',
        badge: 'Sₙ (Arit)',
        formula: 'S_n = \\frac{n}{2}\\left(2a + (n - 1)b\\right) = \\frac{n}{2}(a + U_n)',
        description: 'Total jumlah deret hingga suku ke-n.',
      },
      {
        name: 'Suku ke-n & Jumlah Geometri',
        badge: 'Uₙ & Sₙ (Geo)',
        formula: 'U_n = a \\cdot r^{n-1}, \\quad S_n = \\frac{a(r^n - 1)}{r - 1} \\quad (r > 1)',
        description: 'r: rasio pengali antarsuku (r = U_n / U_{n-1}).',
      },
      {
        name: 'Deret Geometri Tak Hingga',
        badge: 'S_∞',
        formula: 'S_\\infty = \\frac{a}{1 - r} \\quad (-1 < r < 1)',
        description: 'Deret konvergen hanya memiliki nilai jumlah jika nilai mutlak rasio |r| < 1.',
      },
    ],
    example: {
      title: 'Menghitung Suku ke-10 dan Jumlah 10 Suku Deret Aritmetika',
      problem:
        'Diketahui barisan aritmetika 3, 7, 11, 15, ... Tentukan suku ke-10 (U₁₀) dan jumlah 10 suku pertama (S₁₀).',
      substitutions: [
        'Identifikasi parameter: a = 3, \\quad b = 7 - 3 = 4, \\quad n = 10',
        'U_{10} = 3 + (10 - 1)(4) = 3 + 36 = 39',
        'S_{10} = \\frac{10}{2}(a + U_{10}) = 5(3 + 39)',
        'S_{10} = 5 \\cdot 42 = 210',
      ],
      finalResult: 'U₁₀ = 39, S₁₀ = 210',
      resultNote: 'Perhitungan beda b = 4 konsisten di setiap suku.',
    },
    quickChips: [
      '# CEPAT: Sisipan Suku Barisan Aritmetika',
      'Deret Geometri Tak Hingga Konvergen',
      'Aplikasi Bunga Majemuk & Anuitas',
      'Suku Tengah Barisan',
    ],
  },

  // 3. Vektor dan Operasinya
  'Vektor dan Operasinya': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Vektor Bidang & Ruang (R² & R³)',
    subtitle: 'Panjang Vektor, Perkalian Titik (Dot Product), Sudut, dan Proyeksi Ortogonal',
    conceptSummary: "Vektor adalah entitas matematis yang memiliki magnitudo (panjang) dan arah sekaligus, berbeda dengan skalar yang hanya memiliki nilai numerik. Dalam ruang dimensi dua (R^2) dan tiga (R^3), vektor direpresentasikan sebagai kombinasi vektor basis (i, j, k) atau matriks kolom koordinat. Vektor merupakan bahasa fundamental fisika gaya, kecepatan, momentum, pemodelan grafika 3D komputer, dan sistem navigasi GPS.",
    keyPoints: [
      "Operasi Titik (Dot Product): Perkalian dot u . v menghasilkan besaran skalar. Rumus dot product menghubungkan perkalian komponen dengan sudut: u . v = |u||v| cos(theta).",
      "Kondisi Dua Vektor Tegak Lurus: Dua vektor u dan v ortogonal (saling tegak lurus) jika dan hanya jika u . v = 0.",
      "Kondisi Vektor Sejajar / Segaris: Vektor u dan v kolinear (segaris) jika terdapat konstanta k sehingga u = k * v.",
      "Proyeksi Vektor Ortogonal: Panjang proyeksi u pada v adalah |c| = (u . v) / |v|, sedangkan vektor proyeksinya dikalikan vektor satuan dari v."
],
    examTips: "Perhatikan Jenis Pertanyaan: Bedakan antara \"panjang proyeksi skalar\" (hasilnya angka skalar positif) dengan \"vektor proyeksi ortogonal\" (hasilnya berupa komponen vektor i, j, k).",
    formulas: [
      {
        name: 'Panjang (Modulus) Vektor',
        badge: '|u|',
        formula: '|\\vec{u}| = \\sqrt{u_1^2 + u_2^2 + u_3^2}',
        description: 'Jarak magnitudo vektor dari titik pangkal ke titik ujung.',
      },
      {
        name: 'Perkalian Titik (Dot Product)',
        badge: 'u · v',
        formula: '\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = |\\vec{u}||\\vec{v}|\\cos\\theta',
        description: 'Jika u dan v tegak lurus (ortogonal), maka u · v = 0.',
      },
      {
        name: 'Kosinus Sudut Antarvektor',
        badge: 'cos θ',
        formula: '\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}||\\vec{v}|}',
        description: 'Sudut θ adalah sudut apit terkecil antara vektor u dan v (0° ≤ θ ≤ 180°).',
      },
      {
        name: 'Panjang Proyeksi Ortogonal',
        badge: '|p|',
        formula: '|\\vec{p}| = \\frac{|\\vec{u} \\cdot \\vec{v}|}{|\\vec{v}|}',
        description: 'Panjang bayangan ortogonal vektor u pada vektor v (skalar proyeksi).',
      },
    ],
    example: {
      title: 'Menghitung Sudut Antara Dua Vektor R²',
      problem:
        'Diketahui vektor u = (3, 4) dan vektor v = (4, -3). Tentukan nilai u · v dan besar sudut θ antara kedua vektor.',
      substitutions: [
        '\\vec{u} \\cdot \\vec{v} = (3)(4) + (4)(-3) = 12 - 12 = 0',
        '|\\vec{u}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5',
        '|\\vec{v}| = \\sqrt{4^2 + (-3)^2} = \\sqrt{25} = 5',
        '\\cos\\theta = \\frac{0}{5 \\cdot 5} = 0 \\implies \\theta = 90^\\circ',
      ],
      finalResult: 'u · v = 0, θ = 90° (Tegak Lurus)',
      resultNote: 'Karena dot product bernilai 0, kedua vektor saling ortogonal.',
    },
    quickChips: [
      '# CARA: Vektor Proyeksi Ortogonal u pada v',
      'Vektor Satuan & Pembagian Ruas Garis',
      'Perkalian Silang (Cross Product R³)',
      'Syarat Tiga Titik Kolinier (Segaris)',
    ],
  },

  // 4. Trigonometri
  'Trigonometri': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Trigonometri Dasar & Analitik',
    subtitle: 'Perbandingan Segitiga Siku-Siku, Sudut Berelasi, dan Aturan Sinus-Cosinus',
    conceptSummary: "Trigonometri adalah cabang matematika yang meneliti hubungan antara rasio sisi dan ukuran sudut segitiga. Dari konsep perbandingan siku-siku (sinus, kosinus, tangen), trigonometri diperluas ke lingkaran satuan untuk semua sudut kuadran (0 hingga 360 derajat) dan fungsi gelombang harmonik berulang. Konsep ini mendasari pemetaan geodesi, akustik suara, gelombang elektromagnetik, dan rekayasa mekanik.",
    keyPoints: [
      "Tanda Kuadran (ASTC): Kuadran I (All positif), Kuadran II (Sin positif), Kuadran III (Tan positif), Kuadran IV (Cos positif).",
      "Identitas Pythagoras: sin^2(x) + cos^2(x) = 1, 1 + tan^2(x) = sec^2(x), dan 1 + cot^2(x) = csc^2(x).",
      "Aturan Sinus & Kosinus: Aturan Sinus (a / sin A = b / sin B = 2R) dipakai jika ada pasangan sudut-sisi. Aturan Kosinus (a^2 = b^2 + c^2 - 2bc cos A) dipakai jika diketahui sisi-sudut-sisi.",
      "Rumus Sudut Ganda: sin(2x) = 2 sin x cos x dan cos(2x) = cos^2 x - sin^2 x = 2 cos^2 x - 1 = 1 - 2 sin^2 x."
],
    examTips: "Sudut Berelasi Kuadran: Gunakan patokan sudut 180 derajat atau 360 derajat (misal: 180 - alpha) agar nama fungsi tidak berubah (sin tetap sin), lalu sesuaikan tanda positif/negatif kuadrannya.",
    formulas: [
      {
        name: 'Perbandingan Dasar Siku-Siku',
        badge: 'sin, cos, tan',
        formula: '\\sin\\theta = \\frac{de}{mi}, \\quad \\cos\\theta = \\frac{sa}{mi}, \\quad \\tan\\theta = \\frac{de}{sa}',
        description: 'de: sisi depan, sa: sisi samping, mi: sisi miring (hipotenusa).',
      },
      {
        name: 'Identitas Pythagoras',
        badge: 'sin² + cos²',
        formula: '\\sin^2 x + \\cos^2 x = 1, \\quad 1 + \\tan^2 x = \\sec^2 x',
        description: 'Identitas utama yang berlaku untuk setiap sudut real x.',
      },
      {
        name: 'Aturan Sinus',
        badge: 'a / sin A',
        formula: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
        description: 'Digunakan saat diketahui 2 sudut 1 sisi atau 2 sisi 1 sudut di hadapannya.',
      },
      {
        name: 'Aturan Cosinus & Luas Segitiga',
        badge: 'a² = b² + c²',
        formula: 'a^2 = b^2 + c^2 - 2bc\\cos A, \\quad L = \\frac{1}{2}ab\\sin C',
        description: 'Digunakan saat diketahui 2 sisi dan sudut apit, atau ketiga sisinya.',
      },
    ],
    example: {
      title: 'Mencari Panjang Sisi dengan Aturan Cosinus',
      problem:
        'Pada segitiga ABC, diketahui panjang sisi b = 6 cm, c = 8 cm, dan besar sudut A = 60°. Tentukan panjang sisi a.',
      substitutions: [
        'a^2 = 6^2 + 8^2 - 2(6)(8) \\cos 60^\\circ',
        'a^2 = 36 + 64 - 96(0.5)',
        'a^2 = 100 - 48 = 52',
        'a = \\sqrt{52} = 2\\sqrt{13} \\text{ cm}',
      ],
      finalResult: 'a = 2√13 cm',
      resultNote: 'Panjang sisi positif dan konsisten dengan ketaksamaan segitiga.',
    },
    quickChips: [
      '# TRIK: Sudut Istimewa di 4 Kuadran',
      'Rumus Sudut Rangkap sin 2x & cos 2x',
      'Persamaan a cos x + b sin x = c',
      'Grafik Fungsi Trigonometri',
    ],
  },

  // 5. Sistem Persamaan dan Pertidaksamaan Linear
  'Sistem Persamaan dan Pertidaksamaan Linear': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Sistem Persamaan & Pertidaksamaan Linear',
    subtitle: 'SPLDV, SPLTV 3 Variabel, dan Daerah Himpunan Penyelesaian (DHP)',
    conceptSummary: "Sistem Persamaan Linear (SPLDV & SPLTV) memodelkan kondisi di mana beberapa relasi variabel linear harus terpenuhi secara simultan. Sedangkan Sistem Pertidaksamaan Linear mendefinisikan daerah himpunan penyelesaian (DHP) berupa arsiran pada bidang kartesius yang menjadi dasar Program Linear untuk optimasi keuntungan maksimum atau biaya minimum.",
    keyPoints: [
      "Metode Penyelesaian: Gabungan eliminasi dan substitusi adalah cara paling efisien dan meminimalkan kesalahan hitung fraksi.",
      "Klasifikasi Solusi: Tepat 1 solusi (garis berpotongan), tak terhingga solusi (garis berimpit), atau tidak ada solusi (garis sejajar).",
      "Menentukan Arsiran DHP: Lakukan uji titik netral (0,0). Jika substitusi (0,0) menghasilkan pernyataan bernilai benar, arsir daerah yang memuat titik (0,0).",
      "Titik Pojok Program Linear: Nilai optimum fungsi objektif f(x,y) = ax + by selalu berada di salah satu titik sudut ekstrem daerah himpunan penyelesaian yang tertutup."
],
    examTips: "Garis Tegak & Garis Miring: Untuk pertidaksamaan linear ax + by <= c dengan b > 0, jika tanda <= maka arsiran berada di bawah garis; jika >= arsiran di atas garis.",
    formulas: [
      {
        name: 'Metode Eliminasi & Substitusi',
        badge: 'SPLDV',
        formula: '\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}',
        description: 'Menghilangkan salah satu variabel lalu mensubstitusikan ke persamaan lainnya.',
      },
      {
        name: 'Metode Determinan (Cramer)',
        badge: 'Cramer',
        formula: 'x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}, \\quad z = \\frac{D_z}{D} \\quad (D \\ne 0)',
        description: 'D: determinan matriks koefisien utama.',
      },
      {
        name: 'Garis Batas SPtLDV',
        badge: 'ax + by ≤ c',
        formula: 'ax + by = c \\implies (0, c/b), \\quad (c/a, 0)',
        description: 'Titik potong sumbu koordinat untuk menggambar garis pembatas bidang DHP.',
      },
      {
        name: 'Uji Titik Selidik (0,0)',
        badge: 'Uji DHP',
        formula: 'a(0) + b(0) \\le c \\iff 0 \\le c',
        description: 'Jika pernyataan bernilai benar, arsiran daerah memuat titik pusat (0,0).',
      },
    ],
    example: {
      title: 'Penyelesaian SPLDV 2 Variabel',
      problem:
        'Tentukan nilai x dan y dari sistem persamaan linear: 2x + 3y = 13 dan x - 2y = -4.',
      substitutions: [
        'Dari persamaan kedua: x = 2y - 4',
        'Substitusi ke persamaan pertama: 2(2y - 4) + 3y = 13',
        '4y - 8 + 3y = 13 \\implies 7y = 21 \\implies y = 3',
        'Mencari nilai x: x = 2(3) - 4 = 6 - 4 = 2',
      ],
      finalResult: 'x = 2, y = 3 (HP: {(2, 3)})',
      resultNote: 'Uji verifikasi: 2(2) + 3(3) = 4 + 9 = 13 (Valid).',
    },
    quickChips: [
      '# CARA: SPLTV 3 Variabel Metode Eliminasi',
      'Menentukan Titik Pojok Fungsi Objektif',
      'Program Linear Nilai Maksimum',
      'Metode Garis Selidik ax + by = k',
    ],
  },

  // 6. Persamaan, Fungsi, dan Pertidaksamaan Kuadrat
  'Persamaan, Fungsi, dan Pertidaksamaan Kuadrat': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Fungsi, Persamaan & Pertidaksamaan Kuadrat',
    subtitle: 'Akar Kuadrat, Diskriminan, Titik Puncak Parabola, dan Sifat Definit',
    conceptSummary: "Persamaan dan Fungsi Kuadrat adalah polinomial derajat dua yang membentuk kurva parabola simetris. Karakteristik utama ditentukan oleh nilai diskriminan D = b^2 - 4ac (apakah memotong, menyinggung, atau tidak memotong sumbu X) dan tanda koefisien a (membuka ke atas jika a > 0 atau membuka ke bawah jika a < 0). Sangat relevan dalam lintasan gerak parabola peluru dan perhitungan titik balik optimal.",
    keyPoints: [
      "Sifat Diskriminan: D > 0 (2 akar real berbeda), D = 0 (2 akar real kembar/menyinggung sumbu X), D < 0 (tidak punya akar real/melayang definit).",
      "Rumus Vieta: Penjumlahan akar x_1 + x_2 = -b/a dan perkalian akar x_1 * x_2 = c/a.",
      "Titik Puncak Parabola: Koordinat puncak kurva adalah (x_p, y_p) = (-b / (2a), -D / (4a)). Sumbu simetri adalah x = -b / (2a).",
      "Definit Positif & Definit Negatif: Kurva selalu berada di atas sumbu X jika a > 0 dan D < 0 (definit positif); selalu di bawah jika a < 0 dan D < 0 (definit negatif)."
],
    examTips: "Garis Bilangan Pertidaksamaan: Pada pertidaksamaan kuadrat f(x) > 0 atau < 0, carilah pembuat nol terlebih dahulu, letakkan pada garis bilangan, dan uji tanda (+ atau -) di tiap interval.",
    formulas: [
      {
        name: 'Rumus ABC (Karakteristik Akar)',
        badge: 'x₁,₂',
        formula: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad D = b^2 - 4ac',
        description: 'D > 0: 2 akar real berbeda, D = 0: akar kembar, D < 0: akar imajiner.',
      },
      {
        name: 'Jumlah & Hasil Kali Akar (Vieta)',
        badge: 'x₁ + x₂',
        formula: 'x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}',
        description: 'Hubungan nilai akar-akar tanpa harus mencari akar secara faktual.',
      },
      {
        name: 'Titik Puncak Parabola',
        badge: '(xₚ, yₚ)',
        formula: 'x_p = -\\frac{b}{2a}, \\quad y_p = -\\frac{D}{4a} = f(x_p)',
        description: 'Sumbu simetri x_p dan nilai optimum (maksimum jika a < 0, minimum jika a > 0).',
      },
      {
        name: 'Definit Positif & Negatif',
        badge: 'Definit',
        formula: '\\text{Definit Positif: } a > 0, D < 0; \\quad \\text{Definit Negatif: } a < 0, D < 0',
        description: 'Kurva selalu di atas atau di bawah sumbu-x untuk semua nilai x real.',
      },
    ],
    example: {
      title: 'Menentukan Titik Puncak Fungsi Kuadrat',
      problem:
        'Tentukan sumbu simetri dan koordinat titik puncak dari fungsi kuadrat f(x) = x² - 4x - 5.',
      substitutions: [
        'Parameter: a = 1, b = -4, c = -5',
        'Sumbu simetri x_p = -\\frac{-4}{2(1)} = \\frac{4}{2} = 2',
        'y_p = f(2) = (2)^2 - 4(2) - 5 = 4 - 8 - 5 = -9',
        'Titik puncak: (2, -9)',
      ],
      finalResult: 'Puncak = (2, -9) (Nilai Minimum)',
      resultNote: 'Karena a = 1 > 0, kurva terbuka ke atas sehingga puncak adalah titik balik minimum.',
    },
    quickChips: [
      '# CARA: Menyusun Persamaan Kuadrat Baru',
      'Pertidaksamaan Kuadrat Garis Bilangan',
      'Titik Potong Sumbu X dan Sumbu Y',
      'Syarat Definit Positif & Negatif',
    ],
  },

  // 7. Statistika (Kelas 10 & 11)
  'Statistika': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Statistika Data Kelompok & Tunggal',
    subtitle: 'Ukuran Pemusatan (Mean, Median, Modus) & Ukuran Penyebaran (Kuartil, Simpangan)',
    conceptSummary: "Statistika adalah cabang matematika yang mencakup pengumpulan, pengolahan, analisis, dan interpretasi kumpulan data. Statistika deskriptif SMA berfokus pada dua pilar utama: Ukuran Pemusatan (Mean, Median, Modus) yang menunjukkan nilai tipikal pusat data, dan Ukuran Penyebaran (Jangkauan, Kuartil, Simpangan Baku, Varians) yang mengukur seberapa jauh data tersebar dari pusatnya.",
    keyPoints: [
      "Data Tunggal vs Berkelompok: Data tunggal dihitung dari nilai mentah tiap datum, sedangkan data kelompok diringkas dalam kelas interval frekuensi dengan nilai tengah xi dan tepi kelas Tb.",
      "Mean vs Median Terhadap Pencilan: Nilai Mean sangat sensitif terhadap data ekstrem (outlier), sementara Median lebih representatif karena bersifat kebal (resisten) terhadap nilai pencilan.",
      "Tepi Kelas vs Batas Kelas: Tepi bawah Tb = batas bawah - 0.5 (untuk data bernilai bulat) dan panjang kelas p = tepi atas - tepi bawah.",
      "Letak Ukuran Fraktil: Posisi median letaknya di n/2, kuartil ke-i di (i/4)*n, dan desil ke-i di (i/10)*n dari total frekuensi sampel data."
],
    examTips: "Jebakan Frekuensi Kumulatif (Fk): Pada rumus Median dan Kuartil data berkelompok, nilai Fk adalah total kumulatif frekuensi SEBELUM kelas target, BUKAN frekuensi yang mencakup kelas target itu sendiri.",
    formulas: [
      {
        name: 'Mean (Rata-rata)',
        badge: 'x̄',
        formula: '\\bar{x} = \\frac{\\sum (f_i \\cdot x_i)}{\\sum f_i}',
        description: 'f_i: frekuensi kelas, x_i: nilai tengah interval kelas.',
      },
      {
        name: 'Median (Me)',
        badge: 'Q₂',
        formula: 'Me = T_b + \\left[ \\frac{\\frac{1}{2}n - F_k}{f_{me}} \\right] \\cdot p',
        description: 'T_b: tepi bawah, F_k: frekuensi kumulatif sebelum kelas Me, f_{me}: frek. median.',
      },
      {
        name: 'Modus (Mo)',
        badge: 'Mo',
        formula: 'Mo = T_b + \\left[ \\frac{d_1}{d_1 + d_2} \\right] \\cdot p',
        description: 'd_1: selisih frek. sebelumnya, d_2: selisih frek. setelahnya, p: panjang kelas.',
      },
      {
        name: 'Kuartil (Qᵢ)',
        badge: 'i = 1, 2, 3',
        formula: 'Q_i = T_b + \\left[ \\frac{\\frac{i}{4}n - F_k}{f_{qi}} \\right] \\cdot p',
        description: 'p: panjang kelas interval, n: total ukuran sampel data.',
      },
    ],
    example: {
      title: 'Kuartil Atas (Q₃) Data Berkelompok',
      problem:
        'Diberikan data nilai ujian matematika kelas 11 dengan total frekuensi n = 40. Tentukan Kuartil Atas (Q₃) jika kelas interval Q₃ berada pada rentang nilai 75–79 dengan rincian parameter: T_b = 74.5, F_k = 26, f_{Q3} = 10, dan panjang kelas p = 5.',
      substitutions: [
        'Letak Q_3 = \\frac{3}{4}(40) = 30',
        'Q_3 = 74.5 + \\left[ \\frac{30 - 26}{10} \\right] \\cdot 5',
        'Q_3 = 74.5 + \\left[ \\frac{4}{10} \\right] \\cdot 5 = 74.5 + 2.0',
      ],
      finalResult: 'Q₃ = 76.5',
      resultNote: 'Nilai 76.5 berada di dalam interval rentang 75 - 79 (Valid)',
    },
    quickChips: [
      '# CEPAT: Hitung Desil & Persentil',
      'Simpangan Baku & Varians',
      'Histogram & Poligon Frekuensi',
      'Rumus Rata-rata Sementara',
    ],
  },

  // 8. Peluang
  'Peluang': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Kaidah Pencacahan & Teori Peluang',
    subtitle: 'Aturan Perkalian, Permutasi, Kombinasi, dan Peluang Kejadian Bersyarat',
    conceptSummary: "Peluang (Teori Probabilitas) mengukur derajat kepastian terjadinya suatu peristiwa acak dalam rentang 0 (peristiwa mustahil) hingga 1 (peristiwa pasti). Perhitungan peluang didasarkan pada ruang sampel S dan banyaknya titik sampel kejadian A. Meliputi kaidah pencacahan, permutasi, kombinasi, peluang kejadian saling lepas, dan peluang kejadian bersyarat.",
    keyPoints: [
      "Permutasi vs Kombinasi: Gunakan Permutasi jika urutan diperhatikan (contoh: ketua, wakil, sekretaris; nomor antrean). Gunakan Kombinasi jika urutan tidak diperhatikan (contoh: memilih tim, mengambil bola acak).",
      "Kejadian Saling Lepas: Dua kejadian A dan B saling lepas jika tidak bisa terjadi bersamaan (A irisan B = himpunan kosong), sehingga P(A gabung B) = P(A) + P(B).",
      "Kejadian Bebas: Dua kejadian bebas jika terjadinya A tidak memengaruhi terjadinya B, berlaku P(A irisan B) = P(A) * P(B).",
      "Komplemen Peluang: P(A komplemen) = 1 - P(A), sangat efisien untuk menghitung peluang \"minimal satu\" atau \"paling sedikit satu\"."
],
    examTips: "Paling Sedikit Satu: Jika soal menanyakan \"peluang mendapatkan paling sedikit 1 bola merah\", hitunglah komplemennya: 1 - P(tidak ada bola merah sama sekali).",
    formulas: [
      {
        name: 'Permutasi Siklis & Unsur Berbeda',
        badge: 'P(n, r)',
        formula: 'P(n, r) = \\frac{n!}{(n - r)!}, \\quad P_{\\text{siklis}} = (n - 1)!',
        description: 'Memperhatikan urutan susunan (misal: juara 1, 2, 3 atau posisi duduk melingkar).',
      },
      {
        name: 'Kombinasi (Tanpa Urutan)',
        badge: 'C(n, r)',
        formula: 'C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}',
        description: 'Tidak memperhatikan urutan (misal: memilih 3 perwakilan dari 10 siswa).',
      },
      {
        name: 'Peluang Suatu Kejadian',
        badge: 'P(A)',
        formula: 'P(A) = \\frac{n(A)}{n(S)}, \\quad 0 \\le P(A) \\le 1, \\quad P(A\') = 1 - P(A)',
        description: 'n(A): banyak anggota kejadian A, n(S): total ruang sampel.',
      },
      {
        name: 'Peluang Bersyarat & Bebas',
        badge: 'P(A|B)',
        formula: 'P(A \\cap B) = P(A) \\cdot P(B) \\quad \\text{(Saling Bebas)}, \\quad P(A|B) = \\frac{P(A \\cap B)}{P(B)}',
        description: 'Peluang kejadian A dengan syarat kejadian B telah terjadi.',
      },
    ],
    example: {
      title: 'Pemilihan Tim dengan Kombinasi',
      problem:
        'Dari 7 siswa putra dan 5 siswa putri, akan dibentuk delegasi olimpiade matematika yang beranggotakan 3 orang. Tentukan banyak cara memilih jika delegasi terdiri dari 2 putra dan 1 putri.',
      substitutions: [
        'Memilih 2 putra dari 7: C(7, 2) = \\frac{7!}{2! \\cdot 5!} = \\frac{7 \\times 6}{2} = 21',
        'Memilih 1 putri dari 5: C(5, 1) = 5',
        'Banyak cara total (aturan perkalian): C(7, 2) \\times C(5, 1) = 21 \\times 5 = 105',
      ],
      finalResult: '105 Cara',
      resultNote: 'Kombinasi diterapkan karena urutan pemilihan tidak dibedakan.',
    },
    quickChips: [
      '# CARA: Peluang Pengambilan Bola Tanpa Pengembalian',
      'Peluang Kejadian Saling Lepas',
      'Permutasi dengan Unsur Sama',
      'Frekuensi Harapan F_h(A) = n · P(A)',
    ],
  },

  // 9. Persamaan dan Pertidaksamaan Nilai Mutlak
  'Persamaan dan Pertidaksamaan Nilai Mutlak': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Persamaan & Pertidaksamaan Nilai Mutlak',
    subtitle: 'Definisi Nilai Mutlak Linear Satu Variabel, Sifat Jarak, dan Himpunan Penyelesaian',
    conceptSummary: "Nilai mutlak |x| secara geometris merepresentasikan jarak suatu bilangan dari titik nol pada garis bilangan riil tanpa memperhatikan arahnya (selalu bernilai non-negatif |x| >= 0). Menyelesaikan persamaan dan pertidaksamaan nilai mutlak memerlukan pemisahan kasus berdasarkan definisi formal nilai mutlak atau metode pengkuadratan kedua ruas jika kedua ruas bernilai positif.",
    keyPoints: [
      "Definisi Formal: |x| = x jika x >= 0, dan |x| = -x jika x < 0.",
      "Sifat Pengkuadratan: |x| = |y| ekuivalen dengan x^2 = y^2 atau (x + y)(x - y) = 0.",
      "Pertidaksamaan Dasar: |x| < a ekuivalen dengan -a < x < a. Sedangkan |x| > a ekuivalen dengan x < -a atau x > a (untuk a > 0).",
      "Ketidaksamaan Segitiga: |a + b| <= |a| + |b|, kesamaan tercapai jika a dan b memiliki tanda yang sama."
],
    examTips: "Ruas Kanan Negatif: Jika ada persamaan |f(x)| = -c di mana c positif (misal |2x - 1| = -5), langsung simpulkan tidak ada penyelesaian (Himpunan Kosong) karena nilai mutlak tidak pernah negatif.",
    formulas: [
      {
        name: 'Definisi Nilai Mutlak',
        badge: '|x|',
        formula: '|x| = \\begin{cases} x, & \\text{jika } x \\ge 0 \\\\ -x, & \\text{jika } x < 0 \\end{cases}',
        description: 'Nilai mutlak menyatakan jarak non-negatif suatu bilangan dari titik 0.',
      },
      {
        name: 'Persamaan Mutlak Sifat Dasar',
        badge: '|f(x)| = c',
        formula: '|f(x)| = c \\iff f(x) = c \\quad \\text{atau} \\quad f(x) = -c \\quad (c \\ge 0)',
        description: 'Jika c < 0, persamaan mutlak tidak memiliki solusi (HP = ∅).',
      },
      {
        name: 'Pertidaksamaan Kurang Dari',
        badge: '|x| ≤ a',
        formula: '|f(x)| \\le a \\iff -a \\le f(x) \\le a',
        description: 'Himpunan penyelesaian berada di antara dua batas interval tertutup.',
      },
      {
        name: 'Pertidaksamaan Lebih Dari',
        badge: '|x| ≥ a',
        formula: '|f(x)| \\ge a \\iff f(x) \\le -a \\quad \\text{atau} \\quad f(x) \\ge a',
        description: 'Himpunan penyelesaian terbagi menjadi dua wilayah terpisah ke kiri dan ke kanan.',
      },
    ],
    example: {
      title: 'Penyelesaian Pertidaksamaan Nilai Mutlak',
      problem:
        'Tentukan himpunan penyelesaian dari pertidaksamaan mutlak |2x - 3| < 7.',
      substitutions: [
        'Sifat: |f(x)| < a \\iff -a < f(x) < a',
        '-7 < 2x - 3 < 7',
        'Tambahkan 3 ke semua ruas: -7 + 3 < 2x < 7 + 3 \\implies -4 < 2x < 10',
        'Bagi 2 semua ruas: -2 < x < 5',
      ],
      finalResult: 'HP: {x | -2 < x < 5}',
      resultNote: 'Interval terbuka konsisten dengan tanda pertidaksamaan murni (<).',
    },
    quickChips: [
      '# CARA: Persamaan |f(x)| = |g(x)| Metode Kuadrat',
      'Pertidaksamaan Nilai Mutlak Pecahan',
      'Grafik Fungsi Nilai Mutlak',
      'Metode Analisis Garis Bilangan',
    ],
  },

  // 10. Logika Matematika
  'Logika Matematika': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Logika Matematika & Penarikan Kesimpulan',
    subtitle: 'Tabel Kebenaran, Ekuivalensi, Konvers/Invers/Kontraposisi, dan Silogisme',
    conceptSummary: "Logika matematika adalah instrumen penalaran deduktif untuk membuktikan kebenaran suatu pernyataan majemuk matematis. Mempelajari nilai kebenaran konjungsi (dan), disjungsi (atau), implikasi (jika-maka), dan biimplikasi (jika dan hanya jika), serta metode penarikan kesimpulan valid (Modus Ponens, Modus Tollens, dan Silogisme).",
    keyPoints: [
      "Tabel Implikasi (p -> q): Bernilai SALAH hanya jika premis p bernilai Benar dan konklusi q bernilai Salah. Pada kondisi lainnya selalu bernilai Benar.",
      "Negasi Pernyataan Implikasi: Negasi dari p -> q BUKAN ~p -> ~q, melainkan p dan ~q (~(p -> q) ekuivalen dengan p ^ ~q).",
      "Ekuivalensi Kontraposisi: Pernyataan p -> q selalu memiliki nilai kebenaran identik (ekuivalen) dengan kontraposisinya: ~q -> ~p.",
      "Penarikan Kesimpulan: Modus Ponens [p->q, p |= q], Modus Tollens [p->q, ~q |= ~p], Silogisme [p->q, q->r |= p->r]."
],
    examTips: "Hati-hati Negasi Berkuantor: Negasi dari \"Semua siswa lulus\" adalah \"Ada setidaknya satu siswa yang tidak lulus\" (Semua berubah menjadi Ada/Beberapa, dan predikat dinegasikan).",
    formulas: [
      {
        name: 'Negasi & Disjungsi/Konjungsi',
        badge: '¬p, ∧, ∨',
        formula: '\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, \\quad \\neg(p \\lor q) \\equiv \\neg p \\land \\neg q',
        description: 'Hukum De Morgan untuk menyangkal konjungsi dan disjungsi.',
      },
      {
        name: 'Implikasi & Ekuivalensi',
        badge: 'p ⇒ q',
        formula: 'p \\implies q \\equiv \\neg p \\lor q \\equiv \\neg q \\implies \\neg p',
        description: 'Implikasi hanya bernilai salah jika p bernilai Benar dan q bernilai Salah (B ⇒ S = S).',
      },
      {
        name: 'Konvers, Invers, Kontraposisi',
        badge: 'Kontraposisi',
        formula: '\\text{Konvers: } q \\implies p, \\quad \\text{Invers: } \\neg p \\implies \\neg q, \\quad \\text{Kontraposisi: } \\neg q \\implies \\neg p',
        description: 'Implikasi ekuivalen logis secara mutlak dengan kontraposisinya.',
      },
      {
        name: 'Tiga Kaidah Inferensi Sah',
        badge: 'Ponens, Tollens',
        formula: '\\text{Ponens: } [p \\implies q, p] \\vdash q; \\quad \\text{Tollens: } [p \\implies q, \\neg q] \\vdash \\neg p; \\quad \\text{Silogisme: } [p \\implies q, q \\implies r] \\vdash p \\implies r',
        description: 'Kaidah penarikan kesimpulan yang valid dalam penalaran deduktif.',
      },
    ],
    example: {
      title: 'Penarikan Kesimpulan dengan Modus Tollens',
      problem:
        'Premis 1: Jika hari ini hujan, maka jalanan licin. Premis 2: Jalanan tidak licin. Tentukan kesimpulan yang sah.',
      substitutions: [
        'Misalkan p: Hari ini hujan, q: Jalanan licin',
        'Premis 1: p \\implies q',
        'Premis 2: \\neg q (Jalanan tidak licin)',
        'Berdasarkan kaidah Modus Tollens: [p \\implies q \\land \\neg q] \\implies \\neg p',
      ],
      finalResult: 'Kesimpulan: Hari ini tidak hujan (¬p)',
      resultNote: 'Kesimpulan valid secara deduktif sesuai kaidah Modus Tollens.',
    },
    quickChips: [
      '# SOAL: Penarikan Kesimpulan Silogisme',
      'Tabel Kebenaran Biimplikasi p ⇔ q',
      'Pernyataan Berkuantor (Semua vs Ada)',
      'Tautologi dan Kontradiksi',
    ],
  },

  // ==========================================
  // KELAS 11
  // ==========================================

  // 11. Komposisi Fungsi dan Fungsi Invers
  'Komposisi Fungsi dan Fungsi Invers': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Fungsi Komposisi & Fungsi Invers',
    subtitle: 'Operasi Aljabar Fungsi, Komposisi (f ∘ g)(x), dan Penentuan Invers f⁻¹(x)',
    conceptSummary: "Komposisi fungsi (f o g)(x) adalah operasi penggabungan dua fungsi di mana output dari g(x) menjadi input langsung bagi f. Fungsi invers f^(-1)(x) adalah fungsi pembalik yang memetakan kembali daerah hasil (range) ke daerah asal (domain). Fungsi hanya memiliki invers jika fungsi tersebut bersifat bijektif (korespondensi satu-satu).",
    keyPoints: [
      "Urutan Komposisi: Operasi komposisi tidak bersifat komutatif: (f o g)(x) != (g o f)(x). Evaluasi selalu dilakukan dari dalam ke luar: f(g(x)).",
      "Invers Komposisi: Invers dari komposisi membalik urutan fungsi: (f o g)^(-1)(x) = (g^(-1) o f^(-1))(x).",
      "Syarat Domain dan Range: Range dari g(x) harus beririsan dengan domain dari f(x) agar komposisi f(g(x)) terdefinisi.",
      "Rumus Cepat Invers Pecahan Linear: Untuk f(x) = (ax + b) / (cx + d), inversnya adalah f^(-1)(x) = (-dx + b) / (cx - a)."
],
    examTips: "Mencari g(x) jika (f o g)(x) diketahui: Misalkan y = f(u), lalu gunakan invers f untuk mengekstrak fungsi dalam u = g(x) secara aljabar langsung.",
    formulas: [
      {
        name: 'Fungsi Komposisi',
        badge: '(f ∘ g)(x)',
        formula: '(f \\circ g)(x) = f(g(x)), \\quad (g \\circ f)(x) = g(f(x))',
        description: 'Output dari fungsi g(x) menjadi input bagi fungsi f(x). Umumnya f ∘ g ≠ g ∘ f.',
      },
      {
        name: 'Invers Fungsi Pecahan Linear',
        badge: 'f⁻¹(x)',
        formula: 'f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a} \\quad (x \\ne a/c)',
        description: 'Trik cepat menentukan fungsi invers pecahan linear dengan menukar a dan d serta mengubah tanda.',
      },
      {
        name: 'Sifat Invers Komposisi',
        badge: '(f ∘ g)⁻¹',
        formula: '(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)',
        description: 'Urutan fungsi dibalik saat melakukan operasi invers pada komposisi.',
      },
      {
        name: 'Sifat Fungsi Identitas',
        badge: 'f ∘ f⁻¹',
        formula: '(f \\circ f^{-1})(x) = (f^{-1} \\circ f)(x) = x = I(x)',
        description: 'Komposisi suatu fungsi dengan inversnya selalu menghasilkan fungsi identitas x.',
      },
    ],
    example: {
      title: 'Menentukan Fungsi Invers Pecahan Linear',
      problem:
        'Diketahui fungsi f(x) = (2x + 1) / (3x - 5) dengan x ≠ 5/3. Tentukan fungsi invers f⁻¹(x).',
      substitutions: [
        'Menggunakan rumus cepat f(x) = (ax + b)/(cx + d) dengan a = 2, b = 1, c = 3, d = -5',
        'f^{-1}(x) = \\frac{-dx + b}{cx - a}',
        'Substitusi nilai: -d = -(-5) = 5, -a = -2',
        'f^{-1}(x) = \\frac{5x + 1}{3x - 2} \\quad (x \\ne 2/3)',
      ],
      finalResult: 'f⁻¹(x) = (5x + 1) / (3x - 2)',
      resultNote: 'Syarat penyebut pecahan: x ≠ 2/3 agar fungsi terdefinisi.',
    },
    quickChips: [
      '# CARA: Mencari g(x) jika (f ∘ g)(x) Diketahui',
      'Menentukan Domain & Range Fungsi Invers',
      'Invers Fungsi Kuadrat dengan Melengkapkan Kuadrat',
      'Komposisi Tiga Fungsi (f ∘ g ∘ h)(x)',
    ],
  },

  // 12. Lingkaran
  'Lingkaran': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Persamaan Lingkaran & Garis Singgung',
    subtitle: 'Pusat (a, b), Bentuk Umum, Kedudukan Titik/Garis, dan Persamaan Garis Singgung (PGSL)',
    conceptSummary: "Lingkaran dalam geometri analitik didefinisikan sebagai himpunan titik-titik pada bidang datar yang berjarak konstan (jari-jari r) terhadap suatu titik pusat tertentu (a, b). Persamaan lingkaran dikembangkan dari teorema Pythagoras dan digunakan untuk menentukan kedudukan titik, garis singgung, serta irisan antar-dua lingkaran.",
    keyPoints: [
      "Bentuk Baku vs Bentuk Umum: Bentuk baku (x - a)^2 + (y - b)^2 = r^2. Bentuk umum x^2 + y^2 + Ax + By + C = 0 dengan pusat (-A/2, -B/2) dan r = sqrt((A/2)^2 + (B/2)^2 - C).",
      "Kedudukan Garis Terhadap Lingkaran: Substitusikan garis ke lingkaran dan hitung diskriminan D: D > 0 (memotong di 2 titik), D = 0 (menyinggung), D < 0 (di luar lingkaran).",
      "Garis Singgung Titik pada Lingkaran: Menggunakan kaidah bagi adil: (x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2.",
      "Garis Singgung Bergradien m: y - b = m(x - a) +- r * sqrt(1 + m^2)."
],
    examTips: "Cek Posisi Titik Terlebih Dahulu: Sebelum mencari garis singgung dari titik (x_1, y_1), substitusikan titik ke lingkaran. Jika nilainya = r^2 titik berada PADA lingkaran; jika > r^2 titik berada DI LUAR lingkaran (memerlukan garis kutub/polar).",
    formulas: [
      {
        name: 'Persamaan Pusat (a, b)',
        badge: '(x-a)²+(y-b)²',
        formula: '(x - a)^2 + (y - b)^2 = r^2',
        description: '(a, b): koordinat pusat lingkaran, r: jari-jari lingkaran.',
      },
      {
        name: 'Bentuk Umum Lingkaran',
        badge: 'x²+y²+Ax+By+C=0',
        formula: 'P\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right), \\quad r = \\sqrt{\\frac{A^2}{4} + \\frac{B^2}{4} - C}',
        description: 'Pusat P dan jari-jari r yang diturunkan dari persamaan umum.',
      },
      {
        name: 'PGSL Melalui Titik pada Lingkaran',
        badge: 'PGSL Titik',
        formula: '(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2',
        description: 'Persamaan garis singgung di titik (x₁, y₁) yang terletak tepat pada lingkaran.',
      },
      {
        name: 'PGSL Bergradien m',
        badge: 'PGSL Gradien',
        formula: 'y - b = m(x - a) \\pm r\\sqrt{1 + m^2}',
        description: 'Dua garis singgung sejajar yang memiliki kemiringan gradien m.',
      },
    ],
    example: {
      title: 'Menentukan Pusat & Jari-jari dari Bentuk Umum Lingkaran',
      problem:
        'Tentukan titik pusat dan panjang jari-jari lingkaran dari persamaan x² + y² - 4x + 6y - 12 = 0.',
      substitutions: [
        'A = -4, B = 6, C = -12',
        'Pusat P = (-A/2, -B/2) = (-(-4)/2, -6/2) = (2, -3)',
        'r = \\sqrt{(2)^2 + (-3)^2 - (-12)}',
        'r = \\sqrt{4 + 9 + 12} = \\sqrt{25} = 5',
      ],
      finalResult: 'Pusat (2, -3), Jari-jari r = 5',
      resultNote: 'Jari-jari positif bernilai 5 satuan panjang.',
    },
    quickChips: [
      '# CARA: PGSL Titik di Luar Lingkaran (Garis Kutub)',
      'Kedudukan Garis Terhadap Lingkaran (Nilai D)',
      'Persamaan Garis Singgung Persekutuan Luar',
      'Kedudukan Dua Buah Lingkaran',
    ],
  },

  // 13. Statistika: Analisis Data Bivariat
  'Statistika: Analisis Data Bivariat': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Analisis Data Bivariat',
    subtitle: 'Diagram Pencar (Scatter Plot), Regresi Linear Sederhana, dan Korelasi Pearson',
    conceptSummary: "Analisis data bivariat mempelajari pola hubungan asosiasi antara dua variabel kuantitatif (variabel independen X dan variabel dependen Y) secara bersamaan. Diwujudkan melalui diagram pencar (scatter plot), garis regresi linear terbaik (metode kuadrat terkecil ordinary least squares), dan koefisien korelasi Pearson (r) untuk mengukur kekuatan dan arah hubungan linear.",
    keyPoints: [
      "Diagram Pencar (Scatter Plot): Titik-titik persebaran yang menunjukkan tren pola: linear positif, linear negatif, kurvilinear, atau tidak berpola.",
      "Garis Regresi Linear (y_hat = a + bx): Gradien b = (n * sum(xy) - sum(x)*sum(y)) / (n * sum(x^2) - (sum(x))^2). Garis selalu melewati titik rata-rata (x_bar, y_bar).",
      "Koefisien Korelasi Pearson (r): Nilai r berkisar antara -1 <= r <= 1. r mendekati 1 artinya hubungan linear positif sangat kuat; r = 0 tidak ada hubungan linear.",
      "Koefisien Determinasi (R^2): Menunjukkan persentase variasi variabel Y yang dapat dijelaskan oleh model regresi terhadap X."
],
    examTips: "Korelasi Bukan Kausalitas: Hubungan korelasi yang sangat tinggi (r mendekati 1) hanya membuktikan adanya keterkaitan statistik matematis, BUKAN membuktikan bahwa variabel X secara langsung menjadi sebab fisik bagi Y.",
    formulas: [
      {
        name: 'Garis Regresi Linear (Tren)',
        badge: 'ŷ = a + bx',
        formula: '\\hat{y} = a + bx, \\quad b = \\frac{n\\sum xy - (\\sum x)(\\sum y)}{n\\sum x^2 - (\\sum x)^2}',
        description: 'b: kemiringan garis regresi (gradien), a: intersep sumbu y (a = ȳ - b x̄).',
      },
      {
        name: 'Koefisien Korelasi Pearson (r)',
        badge: 'r (-1 s/d 1)',
        formula: 'r = \\frac{n\\sum xy - (\\sum x)(\\sum y)}{\\sqrt{[n\\sum x^2 - (\\sum x)^2][n\\sum y^2 - (\\sum y)^2]}}',
        description: 'r mendekati 1: korelasi positif kuat; r mendekati -1: korelasi negatif kuat.',
      },
      {
        name: 'Koefisien Determinasi (R²)',
        badge: 'r² (Kontribusi)',
        formula: 'R^2 = r^2 \\times 100\\%',
        description: 'Persentase variasi variabel dependen y yang mampu dijelaskan oleh variabel independen x.',
      },
      {
        name: 'Residual (Galat)',
        badge: 'e = y - ŷ',
        formula: 'e_i = y_i - \\hat{y}_i',
        description: 'Selisih antara nilai pengamatan aktual y_i dengan nilai estimasi ŷ_i dari model.',
      },
    ],
    example: {
      title: 'Menghitung Nilai Prediksi Regresi Linear',
      problem:
        'Model regresi hubungan jam belajar (x) terhadap nilai ujian (y) adalah ŷ = 45 + 5x. Prediksikan nilai siswa yang belajar selama 8 jam.',
      substitutions: [
        'Model: \\hat{y} = 45 + 5x',
        'Substitusi x = 8: \\hat{y} = 45 + 5(8)',
        '\\hat{y} = 45 + 40 = 85',
      ],
      finalResult: 'Nilai Prediksi = 85',
      resultNote: 'Interpretasi: Setiap penambahan 1 jam belajar, nilai ujian diprediksi naik 5 poin.',
    },
    quickChips: [
      '# CARA: Interpretasi Pola Diagram Pencar',
      'Menghitung Koefisien Korelasi Pearson',
      'Analisis Galat Residual',
      'Prediksi Nilai Ekstrapolasi',
    ],
  },

  // 14. Induksi Matematika
  'Induksi Matematika': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Induksi Matematika',
    subtitle: 'Prinsip Pembuktian Formal Deret Bilangan, Keterbagian, dan Ketidaksamaan',
    conceptSummary: "Induksi matematika adalah teknik pembuktian rigor deduktif untuk memvalidasi rumus atau pernyataan matematika P(n) yang berlaku untuk semua bilangan asli n. Bekerja mirip efek kartu domino berantai melalui dua tahapan: Langkah Basis (membuktikan pernyataan untuk n mula-mula) dan Langkah Induksi (membuktikan bahwa kebenaran pada n = k berimplikasi pada n = k + 1).",
    keyPoints: [
      "Langkah 1 (Basis Step): Buktikan bahwa pernyataan benar untuk nilai awal bilangan asli terkecil, biasanya n = 1.",
      "Langkah 2 (Inductive Hypothesis): Asumsikan pernyataan bernilai benar untuk n = k, yaitu P(k) benar.",
      "Langkah 3 (Inductive Step): Buktikan dengan aljabar rigor bahwa jika P(k) benar, maka P(k+1) juga terbukti benar.",
      "Tiga Ranah Penerapan: Deret penjumlahan bilangan, keterbagian bilangan bulat (misal n^3 + 2n habis dibagi 3), dan ketaksamaan aljabar."
],
    examTips: "Gunakan Hipotesis Asumsi: Dalam pembuktian langkah n = k + 1, ekspresi harus dimanipulasi sedemikian rupa agar bentuk P(k) muncul di dalamnya sehingga asumsi hipotesis bisa disubstitusikan.",
    formulas: [
      {
        name: 'Langkah Basis (n = 1)',
        badge: 'P(1) Benar',
        formula: 'P(1) \\implies \\text{Pernyataan terbukti benar untuk } n = 1',
        description: 'Fondasi awal pembuktian untuk bilangan bulat positif terkecil.',
      },
      {
        name: 'Langkah Induksi (Asumsi n = k)',
        badge: 'P(k)',
        formula: '\\text{Diasumsikan bahwa } P(k) \\text{ bernilai BENAR}',
        description: 'Hipotesis induksi yang dijadikan tumpuan pembuktian untuk suku selanjutnya.',
      },
      {
        name: 'Langkah Pembuktian (n = k + 1)',
        badge: 'P(k+1)',
        formula: 'P(k) \\implies P(k + 1) \\text{ Terbukti BENAR}',
        description: 'Membuktikan bahwa kebenaran pada suku ke-k menjamin kebenaran pada suku ke-(k+1).',
      },
      {
        name: 'Sifat Keterbagian',
        badge: 'a | b',
        formula: 'a | b \\iff b = a \\cdot m \\quad (m \\in \\mathbb{Z})',
        description: 'Bilangan a membagi habis b jika b merupakan kelipatan bulat dari a.',
      },
    ],
    example: {
      title: 'Langkah Basis Pembuktian Deret Bilangan Asli',
      problem:
        'Buktikan dengan induksi bahwa 1 + 2 + 3 + ... + n = n(n+1)/2 berlaku untuk n = 1.',
      substitutions: [
        'Ruas Kiri (n = 1): 1',
        'Ruas Kanan (n = 1): \\frac{1(1 + 1)}{2} = \\frac{1(2)}{2} = 1',
        'Ruas Kiri = Ruas Kanan = 1',
      ],
      finalResult: 'Langkah Basis P(1) Terbukti Valid',
      resultNote: 'Fondasi induksi terpenuhi, lanjutkan ke langkah induksi n = k + 1.',
    },
    quickChips: [
      '# CARA: Pembuktian Sifat Keterbagian n³ - n Habis Dibagi 6',
      'Pembuktian Ketidaksamaan Induksi 2ⁿ > n',
      'Pembuktian Deret Kuadrat n(n+1)(2n+1)/6',
      'Struktur Formal Kesimpulan Induksi',
    ],
  },

  // 15. Polinomial
  'Polinomial': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Polinomial (Suku Banyak)',
    subtitle: 'Operasi Aljabar, Skema Horner, Teorema Sisa, Teorema Faktor, dan Rumus Vieta',
    conceptSummary: "Polinomial (suku banyak) adalah ekspresi aljabar derajat n yang memuat variabel berpangkat bilangan bulat positif. Mempelajari operasi penjumlahan, perkalian, pembagian suku banyak (metode pembagian bersusun dan sintetik Horner), Teorema Sisa, Teorema Faktor, dan hubungan akar-akar Vieta.",
    keyPoints: [
      "Teorema Sisa: Jika suku banyak P(x) dibagi oleh (x - k), maka sisa pembagiannya adalah S = P(k). Jika dibagi oleh (ax - b), sisanya P(b/a).",
      "Teorema Faktor: (x - k) merupakan faktor dari P(x) jika dan hanya jika sisa P(k) = 0.",
      "Metode Horner: Algoritma skema perkalian-penjumlahan vertikal yang jauh lebih cepat dibandingkan pembagian bersusun panjang.",
      "Hubungan Vieta Derajat Tiga: Untuk ax^3 + bx^2 + cx + d = 0: x1+x2+x3 = -b/a, x1x2+x1x3+x2x3 = c/a, dan x1*x2*x3 = -d/a."
],
    examTips: "Sisa Pembagian Derajat Dua: Jika pembagi berderajat 2 (misal dibagi (x-1)(x+2)), maka sisa pembagian pasti berderajat maksimal 1 (bentuk S(x) = px + q). Tentukan p dan q dengan mensubstitusikan kedua pembuat nol.",
    formulas: [
      {
        name: 'Teorema Pembagian Suku Banyak',
        badge: 'P(x) = B(x)H(x)+S',
        formula: 'P(x) = B(x) \\cdot H(x) + S(x)',
        description: 'P(x): polinomial yang dibagi, B(x): pembagi, H(x): hasil bagi, S(x): sisa bagi.',
      },
      {
        name: 'Teorema Sisa (Remainder Theorem)',
        badge: 'S = P(k)',
        formula: 'Sisa pembagian P(x) \\text{ oleh } (x - k) \\text{ adalah } S = P(k)',
        description: 'Sisa pembagian dapat dihitung langsung dengan mensubstitusi x = k ke P(x).',
      },
      {
        name: 'Teorema Faktor',
        badge: 'P(k) = 0',
        formula: '(x - k) \\text{ adalah faktor dari } P(x) \\iff P(k) = 0',
        description: 'Suatu binomial adalah faktor jika sisa pembagiannya sama dengan nol.',
      },
      {
        name: 'Teorema Vieta Polinomial Derajat 3',
        badge: 'Vieta',
        formula: 'x_1 + x_2 + x_3 = -\\frac{b}{a}, \\quad x_1 x_2 x_3 = -\\frac{d}{a}',
        description: 'Untuk polinomial kubik ax³ + bx² + cx + d = 0.',
      },
    ],
    example: {
      title: 'Menentukan Sisa Pembagian dengan Teorema Sisa',
      problem:
        'Tentukan sisa pembagian suku banyak P(x) = 2x³ - 5x² + 4x - 7 oleh (x - 2).',
      substitutions: [
        'Pembagi: (x - 2) \\implies k = 2',
        'Berdasarkan Teorema Sisa, S = P(2)',
        'S = 2(2)^3 - 5(2)^2 + 4(2) - 7',
        'S = 2(8) - 5(4) + 8 - 7 = 16 - 20 + 8 - 7 = -3',
      ],
      finalResult: 'Sisa Pembagian S = -3',
      resultNote: 'Hasil pembagian manual atau Skema Horner menghasilkan sisa yang sama persis.',
    },
    quickChips: [
      '# CARA: Skema Horner Derajat 4',
      'Teorema Sisa Pembagi Derajat Dua (ax² + bx + c)',
      'Menentukan Faktor Rasional Polinomial',
      'Teorema Vieta Jumlah Perkalian Akar',
    ],
  },

  // 16. Matriks
  'Matriks': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Matriks & Sistem Persamaan Linear',
    subtitle: 'Operasi Aljabar Matriks, Determinan Ordo 2x2 & 3x3, Invers, dan Persamaan AX = B',
    conceptSummary: "Matriks adalah susunan bilangan berdimensi baris dan kolom yang beroperasi sebagai entitas tunggal. Matriks menjadi fondasi representasi aljabar linear pada komputasi grafika, jaringan saraf kecerdasan buatan, pemrosesan citra digital, dan sistem persamaan linear simultan tingkat lanjut.",
    keyPoints: [
      "Syarat Perkalian Matriks: Perkalian A(m x p) * B(p x n) menghasilkan C(m x n). Kolom matriks pertama harus sama dengan baris matriks kedua.",
      "Determinan Matriks: Ukuran skala geometri transformasi. Matriks 2x2: det(A) = ad - bc. Jika det(A) = 0, matriks disebut singular dan tidak memiliki invers.",
      "Sifat Invers Matriks: A * A^(-1) = I. Sifat penting operasi: (AB)^(-1) = B^(-1) * A^(-1) dan (A^T)^(-1) = (A^(-1))^T.",
      "Metode Determinan Cramer: Variabel x = Dx / D, y = Dy / D, z = Dz / D untuk menyelesaikan sistem persamaan linear secara langsung."
],
    examTips: "Matriks Tidak Komutatif: Jangan pernah mengasumsikan A * B = B * A. Pada persamaan matriks AX = B, solusinya adalah X = A^(-1) * B (dikalikan dari kiri), bukan B * A^(-1).",
    formulas: [
      {
        name: 'Determinan Ordo 2x2',
        badge: 'det(A)',
        formula: '\\det(A) = ad - bc',
        description: 'Untuk matriks A = [[a, b], [c, d]]. Matriks singular jika det = 0.',
      },
      {
        name: 'Invers Matriks Ordo 2x2',
        badge: 'A⁻¹',
        formula: 'A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
        description: 'Invers hanya terdefinisi jika determinan det(A) ≠ 0.',
      },
      {
        name: 'Determinan 3x3 Aturan Sarrus',
        badge: 'Sarrus 3x3',
        formula: '\\det(A) = (aei + bfg + cdh) - (ceg + afh + bdi)',
        description: 'Metode perkalian diagonal utama dikurangi perkalian diagonal sekunder.',
      },
      {
        name: 'Penyelesaian Persamaan AX = B',
        badge: 'X = A⁻¹B',
        formula: 'AX = B \\implies X = A^{-1}B, \\quad XA = B \\implies X = BA^{-1}',
        description: 'Urutan pengali invers tidak boleh terbalik karena perkalian matriks tidak komutatif.',
      },
    ],
    example: {
      title: 'Menentukan Invers Matriks A Ordo 2x2',
      problem:
        'Diberikan matriks A = [[4, 2], [3, 2]]. Tentukan determinan dan invers dari matriks A.',
      substitutions: [
        '\\det(A) = (4)(2) - (2)(3) = 8 - 6 = 2',
        'A^{-1} = \\frac{1}{2} \\begin{pmatrix} 2 & -2 \\\\ -3 & 4 \\end{pmatrix}',
        'A^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1.5 & 2 \\end{pmatrix}',
      ],
      finalResult: 'det(A) = 2, Invers Valid',
      resultNote: 'Karena det(A) ≠ 0, matriks non-singular dan memiliki invers unik.',
    },
    quickChips: [
      '# CARA: Metode Cramer untuk SPLDV',
      'Determinan Matriks 3x3 Sarrus',
      'Matriks Transformasi Geometri',
      'Sifat Transpose (AB)ᵀ = Bᵀ · Aᵀ',
    ],
  },

  // 17. Transformasi Geometri
  'Transformasi Geometri': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Transformasi Geometri dengan Matriks',
    subtitle: 'Translasi (Pergeseran), Refleksi (Pencerminan), Rotasi (Perputaran), dan Dilatasi',
    conceptSummary: "Transformasi geometri adalah pemetaan titik-titik pada bidang koordinat ke posisi bayangan baru. Terdiri dari Transformasi Isometri yang mempertahankan ukuran dan bentuk objek (Translasi/pergeseran, Refleksi/pencerminan, dan Rotasi/perputaran) serta Dilatasi (perbesaran/pengecilan) yang mengubah skala objek berdasarkan faktor perbesaran k.",
    keyPoints: [
      "Translasi T(a,b): Menjumlahkan koordinat secara langsung: x' = x + a dan y' = y + b.",
      "Refleksi Matriks: Terhadap sumbu X [1 0; 0 -1], sumbu Y [-1 0; 0 1], garis y = x [0 1; 1 0], dan garis y = -x [0 -1; -1 0].",
      "Rotasi [O, theta]: Matriks rotasi berpusat di asal (0,0) adalah [cos theta, -sin theta; sin theta, cos theta] dengan sudut positif berlawanan jarum jam.",
      "Komposisi Transformasi: Transformasi T1 dilanjutkan T2 dinyatakan dengan perkalian matriks dari kanan ke kiri: M = M2 * M1."
],
    examTips: "Urutan Matriks Komposisi: Jika soal menyatakan \"transformasi T_1 dilanjutkan dengan T_2\", maka matriks total yang dikalikan ke titik koordinat adalah (M_2 . M_1), bukan sebaliknya.",
    formulas: [
      {
        name: 'Translasi (Pergeseran)',
        badge: 'T(a, b)',
        formula: '\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} x \\\\ y \\end{pmatrix} + \\begin{pmatrix} a \\\\ b \\end{pmatrix}',
        description: 'Pergeseran titik sejauh a satuan horizontal dan b satuan vertikal.',
      },
      {
        name: 'Refleksi Sumbu X & Sumbu Y',
        badge: 'Pencerminan',
        formula: 'M_x = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}, \\quad M_y = \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}',
        description: 'Pencerminan terhadap sumbu koordinat kartesius.',
      },
      {
        name: 'Rotasi Pusat (0, 0) Sudut θ',
        badge: 'R(O, θ)',
        formula: '\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix}',
        description: 'Sudut θ bernilai positif jika berlawanan arah putaran jarum jam.',
      },
      {
        name: 'Dilatasi Pusat (0, 0) Faktor k',
        badge: '[O, k]',
        formula: '\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix}',
        description: 'Perbesaran atau pengecilan objek geometri dengan faktor skala k.',
      },
    ],
    example: {
      title: 'Bayangan Titik Akibat Rotasi 90° Berlawanan Jarum Jam',
      problem:
        'Tentukan bayangan titik A(3, -2) setelah dirotasikan 90° terhadap pusat O(0, 0).',
      substitutions: [
        '\\cos 90^\\circ = 0, \\quad \\sin 90^\\circ = 1',
        '\\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}',
        'x\' = (0)(3) + (-1)(-2) = 2',
        'y\' = (1)(3) + (0)(-2) = 3',
      ],
      finalResult: "A'(2, 3)",
      resultNote: "Bayangan titik A(3, -2) berpindah ke kuadran I menjadi (2, 3).",
    },
    quickChips: [
      '# CARA: Refleksi Terhadap Garis y = x dan y = -x',
      'Rotasi dengan Pusat P(a, b)',
      'Komposisi Dua Transformasi Matriks M₂ · M₁',
      'Luas Bangun Datar Setelah Dilatasi',
    ],
  },

  // 18. Fungsi dan Pemodelannya
  'Fungsi dan Pemodelannya': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Fungsi & Pemodelan Masalah Nyata',
    subtitle: 'Fungsi Rasional, Asimtot Datar & Tegak, serta Pemodelan Eksponensial',
    conceptSummary: "Materi ini menghubungkan konsep fungsi aljabar murni (linear, kuadrat, eksponensial, logaritmik, rasional, dan trigonometri) dengan pemodelan fenomena sains dan sosial nyata. Siswa belajar mengonversi deskripsi verbal atau kumpulan data lapangan menjadi formulasi fungsi matematika yang dapat diprediksi.",
    keyPoints: [
      "Menentukan Domain dan Range: Domain alami fungsi rasional mensyaratkan penyebut != 0, sedangkan fungsi akar genap mensyaratkan nilai di dalam akar >= 0.",
      "Karakteristik Laju Pertumbuhan: Model linear memiliki laju perubahan konstan, model kuadrat memiliki percepatan konstan, sedangkan model eksponen memiliki laju perubahan proporsional terhadap ukuran nilai saat itu.",
      "Titik Ekstrem Pemodelan: Nilai maksimum atau minimum fisik suatu model diperoleh dari koordinat puncak fungsi kuadrat atau titik stasioner turunan pertama f'(x) = 0.",
      "Model Asimtot Fungsi Rasional: Asimtot tegak dicapai saat penyebut bernilai nol, sedangkan asimtot datar ditentukan oleh limit saat x mendekati tak hingga."
],
    examTips: "Konteks Fisik Variabel: Perhatikan batasan domain dalam konteks nyata. Waktu (t) dan panjang (r) tidak boleh bernilai negatif (t >= 0), meskipun persamaan kuadrat menghasilkan akar negatif.",
    formulas: [
      {
        name: 'Asimtot Tegak Fungsi Rasional',
        badge: 'x = Asimtot',
        formula: 'f(x) = \\frac{g(x)}{h(x)} \\implies h(x) = 0',
        description: 'Garis vertikal yang didekati kurva ketika penyebut bernilai nol.',
      },
      {
        name: 'Asimtot Datar Fungsi Rasional',
        badge: 'y = Limit',
        formula: 'y = \\lim_{x \\to \\pm\\infty} \\frac{ax^n + \\dots}{bx^m + \\dots} = \\begin{cases} a/b, & n = m \\\\ 0, & n < m \\end{cases}',
        description: 'Garis horizontal yang didekati kurva ketika nilai x menuju tak hingga.',
      },
      {
        name: 'Model Pertumbuhan Eksponensial',
        badge: 'N(t)',
        formula: 'N(t) = N_0 \\cdot e^{kt} = N_0(1 + r)^t',
        description: 'N₀: populasi awal, r: laju pertumbuhan per periode waktu t.',
      },
      {
        name: 'Model Peluruhan Radioaktif',
        badge: 'Peluruhan',
        formula: 'N(t) = N_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}}',
        description: 'T₁/₂: waktu paruh zat radioaktif berkurang menjadi setengahnya.',
      },
    ],
    example: {
      title: 'Menentukan Asimtot Fungsi Rasional',
      problem:
        'Tentukan asimtot tegak dan asimtot datar dari fungsi f(x) = (3x + 6) / (x - 2).',
      substitutions: [
        'Asimtot Tegak: penyebut h(x) = 0 \\implies x - 2 = 0 \\implies x = 2',
        'Asimtot Datar: limit x \\to \\infty: \\lim_{x \\to \\infty} \\frac{3x + 6}{x - 2} = \\frac{3}{1} = 3',
        'Garis asimtot tegak adalah x = 2, dan garis asimtot datar adalah y = 3.',
      ],
      finalResult: 'Asimtot Tegak x = 2, Asimtot Datar y = 3',
      resultNote: 'Kurva tidak pernah memotong garis x = 2.',
    },
    quickChips: [
      '# CARA: Menggambar Grafik Fungsi Rasional',
      'Model Waktu Paruh Zat Radioaktif',
      'Laju Pertumbuhan Bakteri Eksponensial',
      'Asimtot Miring (Oblique Asymptote)',
    ],
  },

  // ==========================================
  // KELAS 12
  // ==========================================

  // 19. Transformasi Fungsi
  'Transformasi Fungsi': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Transformasi Fungsi Matematika',
    subtitle: 'Pergeseran (Translasi), Pencerminan, Peregangan Vertikal & Horizontal',
    conceptSummary: "Transformasi fungsi mempelajari bagaimana grafik y = f(x) bergeser, meregang, tertekan, atau tercermin pada bidang koordinat saat persamaannya dimodifikasi secara aljabar. Pemahaman ini memungkinkan siswa menggambar dan menganalisis grafik fungsi kompleks tanpa perlu memplot titik demi titik secara manual.",
    keyPoints: [
      "Pergeseran Vertikal & Horizontal: y = f(x) + c menggeser grafik ke atas sejauh c. y = f(x - c) menggeser grafik ke KANAN sejauh c.",
      "Pencerminan: y = -f(x) mencerminkan grafik terhadap sumbu X. y = f(-x) mencerminkan grafik terhadap sumbu Y.",
      "Peregangan Vertikal & Horizontal: y = a * f(x) meregangkan vertikal dengan faktor a. y = f(b * x) memampatkan horizontal dengan faktor 1/b.",
      "Kombinasi Transformasi: Transformasi horizontal (di dalam f) diproses dari luar ke dalam atau sebaliknya dengan memperhatikan tanda tanda kurung y = f(b(x - h)) + k."
],
    examTips: "Tanda Berlawanan pada X: Ingat bahwa pergeseran sumbu X berlawanan dengan tandanya: f(x - 3) bergeser ke arah POSITIF (kanan), bukan ke kiri.",
    formulas: [
      {
        name: 'Pergeseran Vertikal & Horizontal',
        badge: 'Translasi',
        formula: 'y = f(x - a) + b',
        description: 'Kurva bergeser a satuan ke kanan (jika a > 0) dan b satuan ke atas (jika b > 0).',
      },
      {
        name: 'Refleksi Sumbu X & Sumbu Y',
        badge: 'Refleksi',
        formula: 'y = -f(x) \\quad (\\text{Sumbu X}), \\quad y = f(-x) \\quad (\\text{Sumbu Y})',
        description: 'Membalik orientasi grafik kurva terhadap sumbu kartesius.',
      },
      {
        name: 'Peregangan Vertikal',
        badge: 'y = k · f(x)',
        formula: 'y = k \\cdot f(x) \\quad (k > 1: \\text{meregang}, 0 < k < 1: \\text{menyusut})',
        description: 'Nilai ordinat y dikalikan dengan faktor skala k.',
      },
      {
        name: 'Peregangan Horizontal',
        badge: 'y = f(k · x)',
        formula: 'y = f(k \\cdot x) \\quad (k > 1: \\text{menyusut horizontal}, 0 < k < 1: \\text{meregang})',
        description: 'Grafik merapat ke sumbu Y jika k > 1.',
      },
    ],
    example: {
      title: 'Pergeseran Grafik Fungsi Kuadrat',
      problem:
        'Grafik f(x) = x² digeser 3 satuan ke kanan dan 4 satuan ke bawah. Tentukan persamaan fungsi hasil transformasi g(x).',
      substitutions: [
        'Pergeseran ke kanan 3 satuan: x \\to (x - 3)',
        'Pergeseran ke bawah 4 satuan: kurangi 4 di akhir persamaan',
        'g(x) = (x - 3)^2 - 4',
        'Ekspansi: g(x) = x^2 - 6x + 9 - 4 = x^2 - 6x + 5',
      ],
      finalResult: 'g(x) = (x - 3)² - 4 = x² - 6x + 5',
      resultNote: 'Titik puncak berpindah dari (0, 0) ke (3, -4).',
    },
    quickChips: [
      '# CARA: Refleksi Fungsi Kuadrat & Eksponen',
      'Peregangan Vertikal Fungsi Trigonometri',
      'Urutan Kombinasi Transformasi Fungsi',
      'Grafik Fungsi Nilai Mutlak Tergeser',
    ],
  },

  // 20. Investasi dan Pinjaman
  'Investasi dan Pinjaman': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Matematika Finansial: Investasi & Pinjaman',
    subtitle: 'Bunga Majemuk, Anuitas Pinjaman, Angsuran, dan Nilai Sisa Utang',
    conceptSummary: "Menerapkan konsep matematika barisan dan deret pada dunia literasi finansial. Menghitung bunga tunggal, bunga majemuk berperiode (tahunan, semester, bulanan), anuitas pelunasan kredit pinjaman, nilai sekarang (Present Value), dan nilai masa depan (Future Value). Membekali siswa dengan kemampuan pengambilan keputusan keuangan yang rasional.",
    keyPoints: [
      "Bunga Tunggal vs Bunga Majemuk: Bunga tunggal dihitung hanya dari modal awal Mn = M0(1 + n*i). Bunga majemuk berbunga-bunga secara eksponensial Mn = M0(1 + i)^n.",
      "Konversi Suku Bunga dan Periode: Jika bunga majemuk dibungakan m kali dalam setahun, gunakan suku bunga i/m dan jumlah periode n * m.",
      "Konsep Anuitas (A = a_k + b_k): Pembayaran cicilan anuitas konstan terdiri atas porsi angsuran pokok (a_k) yang semakin membesar dan porsi bunga (b_k) yang semakin mengecil seiring waktu.",
      "Tabel Pelunasan: Sisa pinjaman periode berikutnya dihitung dari sisa utang saat ini dikurangi angsuran pokok periode berjalan."
],
    examTips: "Kesesuaian Satuan Waktu: Pastikan satuan waktu periode pinjaman (n) dan periode suku bunga (i) sudah setara (misal sama-sama dalam bulan atau tahun) sebelum dimasukkan ke rumus.",
    formulas: [
      {
        name: 'Bunga Majemuk (Nilai Akhir)',
        badge: 'Mₙ',
        formula: 'M_n = M_0 (1 + i)^n',
        description: 'M₀: modal awal, i: suku bunga per periode, n: jumlah periode waktu.',
      },
      {
        name: 'Besar Anuitas Bulanan',
        badge: 'Anuitas (A)',
        formula: 'A = \\frac{M \\cdot i}{1 - (1 + i)^{-n}}',
        description: 'Besar pembayaran cicilan berkala yang konstan setiap bulan.',
      },
      {
        name: 'Komponen Anuitas (Angsuran & Bunga)',
        badge: 'A = aₙ + bₙ',
        formula: 'A = a_n + b_n, \\quad a_n = a_1 (1 + i)^{n-1}, \\quad b_n = S_{n-1} \\cdot i',
        description: 'a_n: porsi angsuran pokok ke-n, b_n: porsi bunga ke-n, S: sisa utang.',
      },
      {
        name: 'Nilai Sekarang (Present Value)',
        badge: 'PV',
        formula: 'PV = \\frac{M_n}{(1 + i)^n} = M_n (1 + i)^{-n}',
        description: 'Nilai uang saat ini dari penerimaan masa depan dengan diskonto bunga i.',
      },
    ],
    example: {
      title: 'Menghitung Saldo Akhir Bunga Majemuk',
      problem:
        'Pak Budi menabung Rp 10.000.000 di bank dengan bunga majemuk 6% per tahun. Berapa total saldo tabungan setelah 3 tahun?',
      substitutions: [
        'M_0 = 10.000.000, \\quad i = 0.06, \\quad n = 3',
        'M_3 = 10.000.000 \\times (1 + 0.06)^3',
        'M_3 = 10.000.000 \\times (1.06)^3 = 10.000.000 \\times 1.191016',
        'M_3 = 11.910.160',
      ],
      finalResult: 'Rp 11.910.160',
      resultNote: 'Bunga total yang diperoleh selama 3 tahun adalah Rp 1.910.160.',
    },
    quickChips: [
      '# CARA: Menghitung Angsuran Pokok Pertama (a₁)',
      'Tabel Rencana Pelunasan Anuitas',
      'Perbedaan Bunga Tunggal vs Majemuk',
      'Perhitungan Sisa Pinjaman Periode ke-k',
    ],
  },

  // 21. Kombinatorik dan Peluang
  'Kombinatorik dan Peluang': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Kombinatorik & Peluang Lanjut',
    subtitle: 'Permutasi Unsur Sama/Siklis, Kombinasi, Peluang Majemuk, dan Peluang Bersyarat',
    conceptSummary: "Tingkat lanjut dari teori peluang yang membedah teknik pencacahan kompleks: permutasi dengan unsur yang sama, permutasi siklis (melingkar), kombinasi pemilihan multi-grup, aturan pengisian tempat (filling slot), serta teorema Binomial Newton untuk ekspansi suku berpangkat n.",
    keyPoints: [
      "Permutasi Unsur Sama: P = n! / (k1! * k2! * ... * km!), sering digunakan pada pembentukan kata dari susunan huruf yang berulang.",
      "Permutasi Siklis: P_siklis = (n - 1)!, digunakan untuk posisi melingkar mengelilingi meja bundar.",
      "Binomial Newton: Suku ke-(r+1) dari ekspansi (a + b)^n dirumuskan sebagai C(n, r) * a^(n-r) * b^r.",
      "Peluang Bersyarat: P(A|B) = P(A irisan B) / P(B), mengukur peluang terjadinya A setelah dipastikan B telah terjadi."
],
    examTips: "Duduk Berdampingan pada Permutasi: Jika ada unsur yang harus selalu berdampingan/berkelompok, ikatlah mereka menjadi 1 kesatuan elemen tunggal, lalu kalikan dengan permutasi internal di dalam ikatan tersebut.",
    formulas: [
      {
        name: 'Permutasi Unsur Sama',
        badge: 'P(n; k₁, k₂)',
        formula: 'P = \\frac{n!}{k_1! \\cdot k_2! \\cdot \\dots \\cdot k_m!}',
        description: 'Menyusun huruf atau objek di mana terdapat beberapa unsur yang identik.',
      },
      {
        name: 'Permutasi Siklis (Melingkar)',
        badge: 'P_siklis',
        formula: 'P_{\\text{siklis}} = (n - 1)!',
        description: 'Susunan objek melingkar tanpa posisi awal yang tetap.',
      },
      {
        name: 'Peluang Gabungan Dua Kejadian',
        badge: 'P(A ∪ B)',
        formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
        description: 'Jika kejadian saling lepas, maka P(A ∩ B) = 0.',
      },
      {
        name: 'Peluang Bersyarat & Teorema Perkalian',
        badge: 'P(A|B)',
        formula: 'P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)',
        description: 'Peluang terjadinya peristiwa A dan B secara berurutan dengan saling mempengaruhi.',
      },
    ],
    example: {
      title: 'Susunan Kata dari Huruf Berulang',
      problem:
        'Tentukan banyak susunan kata berbeda yang dapat dibentuk dari huruf-huruf pembentuk kata "MATEMATIKA".',
      substitutions: [
        'Total huruf n = 10',
        'Huruf berulang: M = 2, A = 3, T = 2',
        'P = \\frac{10!}{2! \\cdot 3! \\cdot 2!} = \\frac{3.628.800}{2 \\cdot 6 \\cdot 2}',
        'P = \\frac{3.628.800}{24} = 151.200',
      ],
      finalResult: '151.200 Susunan Kata',
      resultNote: 'Menggunakan rumus permutasi n unsur dengan pengali k unsur identik.',
    },
    quickChips: [
      '# CARA: Peluang Pengambilan 2 Bola Sekaligus',
      'Distribusi Peluang Binomial n Percobaan',
      'Peluang Komplemen Kejadian "Paling Sedikit Satu"',
      'Kaidah Kotak Penyusunan Angka Ganjil/Genap',
    ],
  },

  // 22. Dimensi Tiga
  'Dimensi Tiga': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Dimensi Tiga (Geometri Ruang)',
    subtitle: 'Kedudukan & Jarak Titik ke Titik, Garis, Bidang, serta Sudut Bangun Ruang Kubus & Balok',
    conceptSummary: "Geometri ruang (dimensi tiga) mempelajari kedudukan dan jarak antar-elemen bangun ruang (kubus, balok, limas, prisma): jarak titik ke titik, jarak titik ke garis, jarak titik ke bidang, serta sudut yang terbentuk antara garis dan bidang. Menuntut kemampuan visualisasi spasial dan proyeksi ortogonal tegak lurus.",
    keyPoints: [
      "Rumus Cepat Kubus: Kubus dengan rusuk s memiliki panjang diagonal sisi s*sqrt(2) dan diagonal ruang s*sqrt(3).",
      "Jarak Titik ke Garis: Proyeksikan titik ke garis secara TEGAK LURUS. Gunakan bantuan luas segitiga (L = 1/2 * alas1 * tinggi1 = 1/2 * alas2 * tinggi2).",
      "Jarak Titik ke Bidang: Proyeksikan titik tegak lurus ke bidang. Buat bidang bantuan yang memuat titik dan tegak lurus bidang target.",
      "Aturan Cosinus dalam Sudut Ruang: Tarik dua garis pada kedua bidang yang berpotongan tegak lurus pada garis persekutuan untuk mengukur sudut persekutuan."
],
    examTips: "Jarak Titik Sudut ke Diagonal Ruang Kubus: Jarak dari titik sudut ke diagonal ruang kubus rusuk s yang tidak melaluinya selalu bernilai (s/3)*sqrt(6).",
    formulas: [
      {
        name: 'Diagonal Sisi & Ruang Kubus',
        badge: 'd_s & d_r',
        formula: 'd_s = s\\sqrt{2}, \\quad d_r = s\\sqrt{3}',
        description: 's: panjang rusuk kubus. Diagonal ruang menghubungkan dua titik sudut terjauh.',
      },
      {
        name: 'Jarak Titik ke Garis',
        badge: 'Titik-Garis',
        formula: 'L = \\frac{1}{2} a t \\implies d = \\frac{2 \\times \\text{Luas}}{\\text{Alas}}',
        description: 'Menggunakan kesamaan luas segitiga untuk menentukan panjang garis tinggi tegak lurus.',
      },
      {
        name: 'Jarak Titik ke Bidang Diagonal',
        badge: 'Titik-Bidang',
        formula: 'd = \\frac{1}{3} s\\sqrt{3} \\quad \\text{atau} \\quad \\frac{2}{3} s\\sqrt{3}',
        description: 'Jarak titik sudut kubus ke bidang diagonal segitiga yang melintas di depannya.',
      },
      {
        name: 'Sudut Antara Garis dan Bidang',
        badge: 'Sudut (θ)',
        formula: '\\sin\\theta = \\frac{\\text{proyeksi tegak}}{\\text{panjang garis}}',
        description: 'Sudut yang dibentuk oleh garis dengan bayangan proyeksi ortogonalnya pada bidang.',
      },
    ],
    example: {
      title: 'Jarak Titik Sudut ke Diagonal Ruang Kubus',
      problem:
        'Diberikan kubus ABCD.EFGH dengan panjang rusuk s = 6 cm. Tentukan panjang diagonal ruang AG dan jarak titik C ke garis AG.',
      substitutions: [
        'Panjang diagonal ruang AG = s\\sqrt{3} = 6\\sqrt{3} \\text{ cm}',
        'Panjang diagonal sisi AC = s\\sqrt{2} = 6\\sqrt{2} \\text{ cm}, \\quad CG = 6 \\text{ cm}',
        'Segitiga ACG siku-siku di C. Luas = \\frac{1}{2} \\times AC \\times CG = \\frac{1}{2} \\times AG \\times d',
        'd = \\frac{AC \\times CG}{AG} = \\frac{6\\sqrt{2} \\times 6}{6\\sqrt{3}} = \\frac{6\\sqrt{2}}{\\sqrt{3}} = 2\\sqrt{6} \\text{ cm}',
      ],
      finalResult: 'Jarak d = 2√6 cm',
      resultNote: 'Jarak terpendek tegak lurus dari titik sudut C ke diagonal ruang AG.',
    },
    quickChips: [
      '# CARA: Jarak Titik ke Bidang pada Limas Beraturan',
      'Sudut Antara Dua Bidang (Garis Potong)',
      'Jarak Garis ke Bidang yang Sejajar',
      'Irisan Bidang Datar dengan Bangun Ruang',
    ],
  },

  // 23. Kekongruenan dan Kesebangunan
  'Kekongruenan dan Kesebangunan': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Kekongruenan & Kesebangunan Bangun Datar',
    subtitle: 'Syarat Dua Segitiga Kongruen, Perbandingan Sisi Bersesuaian, dan Teorema Thales',
    conceptSummary: "Kekongruenan mengkaji dua bangun datar yang memiliki bentuk dan ukuran persis sama (sudut-sudut bersesuaian sama besar dan sisi-sisi bersesuaian sama panjang). Kesebangunan mengkaji dua bangun yang memiliki bentuk sama tetapi ukurannya proporsional melalui rasio perbandingan sisi yang konstan.",
    keyPoints: [
      "Syarat Kekongruenan Segitiga: Sisi-Sisi-Sisi (s-s-s), Sisi-Sudut-Sisi (s-sd-s), Sudut-Sisi-Sudut (sd-s-sd), atau Sisi-Sudut-Sudut (s-sd-sd).",
      "Syarat Kesebangunan Segitiga: Sudut-Sudut-Sudut (sd-sd-sd), Sisi-Sisi-Sisi yang proporsional, atau Sisi-Sudut-Sisi yang proporsional.",
      "Teorema Garis Sejajar Segitiga: Garis yang sejajar dengan salah satu sisi segitiga membagi dua sisi lainnya dengan perbandingan panjang yang senilai.",
      "Perbandingan Luas dan Volume: Jika perbandingan panjang sisi adalah k, maka perbandingan luas bangun adalah k^2 dan perbandingan volume bangun adalah k^3."
],
    examTips: "Pasangan Sisi Bersesuaian: Selalu tentukan sisi yang bersesuaian berdasarkan letak sudut di depan sisi tersebut, bukan berdasarkan orientasi visual letak gambar yang bisa diputar.",
    formulas: [
      {
        name: 'Syarat Kekongruenan Segitiga',
        badge: 'Kongruen (≅)',
        formula: '\\text{S-S-S (Sisi)}, \\quad \\text{S-Sd-S}, \\quad \\text{Sd-S-Sd}',
        description: 'Bentuk dan ukuran sama persis (sudut bersesuaian sama, sisi bersesuaian sama panjang).',
      },
      {
        name: 'Syarat Kesebangunan Segitiga',
        badge: 'Sebangun (~)',
        formula: '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} = k \\quad (k: \\text{faktor skala})',
        description: 'Bentuk sama tetapi ukuran berbeda dengan perbandingan sisi konstan.',
      },
      {
        name: 'Teorema Pembagi Sisi (Thales)',
        badge: 'Thales',
        formula: '\\frac{AD}{DB} = \\frac{AE}{EC}',
        description: 'Garis yang sejajar sisi segitiga membagi dua sisi lainnya dengan perbandingan seimbang.',
      },
      {
        name: 'Perbandingan Luas Dua Bangun Sebangun',
        badge: 'L₁ / L₂ = k²',
        formula: '\\frac{L_1}{L_2} = k^2, \\quad \\frac{V_1}{V_2} = k^3',
        description: 'Perbandingan luas berbanding kuadrat dari faktor skala panjang k.',
      },
    ],
    example: {
      title: 'Menentukan Tinggi Benda Menggunakan Kesebangunan Bayangan',
      problem:
        'Sebuah tiang bendera setinggi 2 m menghasilkan bayangan sepanjang 3 m. Pada saat yang sama, sebuah pohon menghasilkan bayangan sepanjang 12 m. Tentukan tinggi pohon tersebut.',
      substitutions: [
        'Perbandingan kesebangunan: \\frac{\\text{Tinggi Pohon}}{\\text{Tinggi Tiang}} = \\frac{\\text{Bayangan Pohon}}{\\text{Bayangan Tiang}}',
        '\\frac{T}{2} = \\frac{12}{3} = 4',
        'T = 4 \\times 2 = 8 \\text{ meter}',
      ],
      finalResult: 'Tinggi Pohon = 8 meter',
      resultNote: 'Segitiga siku-siku terbentuk oleh sudut datang sinar matahari yang sama.',
    },
    quickChips: [
      '# CARA: Teorema Air Mancur Segitiga Siku-Siku',
      'Membuktikan Dua Segitiga Kongruen',
      'Perbandingan Panjang Sisi Trapesium Terpotong',
      'Penerapan Kesebangunan pada Masalah Nyata',
    ],
  },

  // 24. Geometri Analitik
  'Geometri Analitik': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Geometri Analitik: Irisan Kerucut',
    subtitle: 'Persamaan Parabola, Elips, Hiperbola, dan Garis Singgung Kurva Kuadrat',
    conceptSummary: "Geometri analitik menghubungkan geometri bidang dengan persamaan aljabar menggunakan sistem koordinat Kartesius. Membahas irisan kerucut: lingkaran, parabola dengan fokus dan direktris, elips dengan sumbu mayor/minor, dan hiperbola dengan garis asimtot.",
    keyPoints: [
      "Eksentrisitas Irisan Kerucut (e): Lingkaran (e = 0), Parabola (e = 1), Elips (0 < e < 1), Hiperbola (e > 1).",
      "Persamaan Elips Berpusat di (0,0): x^2/a^2 + y^2/b^2 = 1 dengan fokus c^2 = a^2 - b^2 (untuk a > b).",
      "Persamaan Hiperbola Berpusat di (0,0): x^2/a^2 - y^2/b^2 = 1 dengan fokus c^2 = a^2 + b^2 dan asimtot y = +-(b/a)x.",
      "Karakteristik Parabola: Jarak setiap titik pada parabola ke titik fokus sama persis dengan jaraknya ke garis direktris."
],
    examTips: "Fokus Elips vs Hiperbola: Hati-hati dengan tanda hubung fokus: pada Elips tanda persamaannya positif (+) tapi fokusnya c^2 = a^2 - b^2 (-). Pada Hiperbola persamaannya negatif (-) tapi fokusnya c^2 = a^2 + b^2 (+).",
    formulas: [
      {
        name: 'Parabola Pusat (0, 0)',
        badge: 'y² = 4px',
        formula: 'y^2 = 4px \\quad (\\text{Fokus } (p, 0), \\text{ Direktriks } x = -p)',
        description: 'Himpunan titik berjarak sama ke titik fokus dan garis direktriks.',
      },
      {
        name: 'Elips Pusat (0, 0)',
        badge: 'Elips',
        formula: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, \\quad c^2 = a^2 - b^2 \\quad (a > b)',
        description: 'Fokus di (±c, 0). Panjang sumbu mayor 2a dan sumbu minor 2b.',
      },
      {
        name: 'Hiperbola Pusat (0, 0)',
        badge: 'Hiperbola',
        formula: '\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, \\quad c^2 = a^2 + b^2, \\quad y = \\pm\\frac{b}{a}x',
        description: 'Garis asimtot kurva hiperbola membatasi lengan grafik ke tak hingga.',
      },
      {
        name: 'PGSL Parabola Melalui Titik (x₁, y₁)',
        badge: 'PGSL Parabola',
        formula: 'y_1 y = 2p(x + x_1)',
        description: 'Persamaan garis singgung parabola di titik singgung yang terletak pada kurva.',
      },
    ],
    example: {
      title: 'Menentukan Titik Fokus dan Garis Direktriks Parabola',
      problem:
        'Tentukan koordinat titik fokus dan persamaan garis direktriks dari parabola y² = 16x.',
      substitutions: [
        'Bentuk baku: y^2 = 4px',
        '4p = 16 \\implies p = 4',
        'Titik fokus F = (p, 0) = (4, 0)',
        'Persamaan garis direktriks: x = -p \\implies x = -4',
      ],
      finalResult: 'Fokus (4, 0), Direktriks x = -4',
      resultNote: 'Parabola terbuka ke arah kanan horizontal sepanjang sumbu-X.',
    },
    quickChips: [
      '# CARA: Persamaan Garis Asimtot Hiperbola',
      'Eksentrisitas Elips e = c/a',
      'PGSL Elips dengan Gradien Tertentu',
      'Translasi Irisan Kerucut ke Pusat (h, k)',
    ],
  },

  // 25. Limit
  'Limit': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Kalkulus: Limit Fungsi Aljabar & Trigonometri',
    subtitle: 'Metode Faktorisasi, Merasionalkan Bentuk Akar, Limit Trigonometri, dan Limit di Ketakhinggaan',
    conceptSummary: "Limit fungsi menggambarkan nilai yang didekati oleh output f(x) saat input x bergerak semakin dekat menuju titik tertentu (atau tak hingga), tanpa harus f(x) terdefinisi di titik itu. Limit menjadi konsep gerbang mutlak untuk mendefinisikan turunan (kalkulus diferensial) dan luas kurva (kalkulus integral).",
    keyPoints: [
      "Bentuk Tak Tentu: Bentuk 0/0, tak-hingga/tak-hingga, dan tak-hingga - tak-hingga memerlukan manipulasi aljabar (faktorisasi, rasionalisasi akar, atau dalil L'Hopital).",
      "Dalil L'Hopital: Jika lim f(x)/g(x) menghasilkan 0/0 atau tak-hingga/tak-hingga, maka limit sama dengan lim f'(x)/g'(x) (turunkan pembilang dan penyebut secara terpisah).",
      "Limit Trigonometri Dasar: lim (x->0) sin(ax) / (bx) = a/b dan lim (x->0) tan(ax) / (bx) = a/b. Catatan: cosinus bukan pembuat nol pada x->0.",
      "Limit Menuju Tak Hingga Fungsi Rasional: Ditentukan oleh rasio derajat pangkat tertinggi pembilang (m) dan penyebut (n): jika m = n hasilnya a/b; jika m < n hasilnya 0; jika m > n hasilnya tak hingga."
],
    examTips: "Uji Substitusi Langsung Terlebih Dahulu: Jangan langsung memfaktorkan atau menerapkan L'Hopital sebelum melakukan substitusi x = c. Jika substitusi menghasilkan nilai real terdefinisi, itulah jawabannya!",
    formulas: [
      {
        name: 'Limit Bentuk Tak Tentu 0/0',
        badge: 'Faktorisasi',
        formula: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{(x - a)P(x)}{(x - a)Q(x)} = \\frac{P(a)}{Q(a)}',
        description: 'Eliminasi pembuat nol (x - a) sebelum mensubstitusi nilai x.',
      },
      {
        name: 'Limit Dasar Trigonometri',
        badge: 'sin x / x = 1',
        formula: '\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}, \\quad \\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}',
        description: 'Hanya berlaku untuk sinus dan tangen saat x menuju nol.',
      },
      {
        name: 'Limit di Ketakhinggaan Rasional',
        badge: 'x → ∞',
        formula: '\\lim_{x \\to \\infty} \\frac{ax^m + \\dots}{px^n + \\dots} = \\begin{cases} a/p, & m = n \\\\ 0, & m < n \\\\ \\infty, & m > n \\end{cases}',
        description: 'Perhatikan derajat pangkat tertinggi pembilang m dan penyebut n.',
      },
      {
        name: 'Limit Ketakhinggaan Bentuk Selisih Akar',
        badge: '√(ax²+bx+c)',
        formula: '\\lim_{x \\to \\infty} \\left(\\sqrt{ax^2 + bx + c} - \\sqrt{ax^2 + px + q}\\right) = \\frac{b - p}{2\\sqrt{a}}',
        description: 'Rumus cepat selisih bentuk akar kuadrat dengan koefisien a yang sama.',
      },
    ],
    example: {
      title: 'Limit Bentuk Selisih Akar di Ketakhinggaan',
      problem:
        'Hitunglah nilai dari lim_{x → ∞} [√(4x² + 5x - 2) - √(4x² - 3x + 7)].',
      substitutions: [
        'Identifikasi koefisien: a = 4, b = 5, p = -3',
        'Gunakan rumus cepat: L = \\frac{b - p}{2\\sqrt{a}}',
        'L = \\frac{5 - (-3)}{2\\sqrt{4}} = \\frac{5 + 3}{2(2)}',
        'L = \\frac{8}{4} = 2',
      ],
      finalResult: 'Nilai Limit = 2',
      resultNote: 'Koefisien x² sama (a = 4) sehingga rumus cepat dapat diterapkan langsung.',
    },
    quickChips: [
      '# CARA: Teorema L\'Hopital untuk Bentuk 0/0',
      'Merasionalkan Perkalian Sekawan Akar',
      'Limit Trigonometri Bentuk 1 - cos ax',
      'Kontinuitas Fungsi di Suatu Titik',
    ],
  },

  // 26. Turunan Fungsi
  'Turunan Fungsi': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Kalkulus: Turunan Fungsi (Derivatif)',
    subtitle: 'Aturan Pangkat Aljabar, Turunan Trigonometri, Aturan Rantai, dan Aplikasi Nilai Maksimum/Minimum',
    conceptSummary: "Turunan (diferensial) f'(x) mengukur laju perubahan sesaat nilai fungsi f terhadap variabel x. Secara geometris, turunan merepresentasikan gradien (kemiringan) garis singgung kurva di setiap titik. Materi ini dipakai untuk mencari selang kemonotonan kurva (fungsi naik/turun), titik stasioner ekstrem (maksimum/minimum), dan kelengkungan kurva (titik belok).",
    keyPoints: [
      "Aturan Dasar Diferensiasi: Turunan x^n adalah n * x^(n-1). Aturan rantai [f(g(x))]' = f'(g(x)) * g'(x).",
      "Aturan Perkalian & Pembagian: (uv)' = u'v + uv'. Sedangkan (u/v)' = (u'v - uv') / v^2.",
      "Uji Fungsi Naik dan Turun: Fungsi naik saat f'(x) > 0, dan fungsi turun saat f'(x) < 0.",
      "Titik Stasioner & Ekstrem: Syarat stasioner adalah f'(x) = 0. Uji turunan kedua: jika f''(x) < 0 maka titik balik MAKSIMUM, jika f''(x) > 0 maka titik balik MINIMUM."
],
    examTips: "Jangan Lupa Turunan Rantai: Kesalahan paling umum adalah melupakan turunan fungsi bagian dalam. Contoh: turunan sin(3x^2) adalah cos(3x^2) DIKALI dengan 6x, bukan hanya cos(3x^2).",
    formulas: [
      {
        name: 'Aturan Pangkat Aljabar',
        badge: "f'(x)",
        formula: "f(x) = a x^n \\implies f'(x) = a \\cdot n x^{n-1}",
        description: 'Pangkat diturunkan sebagai pengali koefisien lalu berkurang satu.',
      },
      {
        name: 'Perkalian & Pembagian Fungsi',
        badge: "(uv)' & (u/v)'",
        formula: "(u \\cdot v)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
        description: 'Aturan produk dan kuotien dengan syarat v(x) ≠ 0.',
      },
      {
        name: 'Turunan Fungsi Trigonometri',
        badge: 'Trig Deriv',
        formula: "\\frac{d}{dx}(\\sin x) = \\cos x, \\quad \\frac{d}{dx}(\\cos x) = -\\sin x, \\quad \\frac{d}{dx}(\\tan x) = \\sec^2 x",
        description: 'Turunan dasar fungsi sinus, kosinus, dan tangen.',
      },
      {
        name: 'Titik Stasioner & Garis Singgung',
        badge: "f'(x) = 0",
        formula: "f'(x) = 0 \\implies x_{\\text{stasioner}}, \\quad m = f'(x_1) \\implies y - y_1 = m(x - x_1)",
        description: 'Gradien garis singgung m diperoleh dari turunan pertama di titik singgung.',
      },
    ],
    example: {
      title: 'Menentukan Persamaan Garis Singgung Kurva',
      problem:
        'Tentukan persamaan garis singgung pada kurva y = x² - 3x + 4 pada titik yang berabsis x = 2.',
      substitutions: [
        'Mencari ordinat y saat x = 2: y = (2)^2 - 3(2) + 4 = 4 - 6 + 4 = 2 \\implies (2, 2)',
        "Turunan pertama: y' = 2x - 3",
        "Gradien m = y'(2) = 2(2) - 3 = 4 - 3 = 1",
        'Persamaan garis singgung: y - y_1 = m(x - x_1) \\implies y - 2 = 1(x - 2)',
        'y = x - 2 + 2 \\implies y = x',
      ],
      finalResult: 'Persamaan Garis Singgung: y = x',
      resultNote: 'Garis singgung memotong kurva tepat di titik (2, 2) dengan kemiringan m = 1.',
    },
    quickChips: [
      '# CARA: Interval Fungsi Naik & Fungsi Turun',
      'Uji Turunan Kedua untuk Titik Belok & Kecekungan',
      'Aturan Rantai Fungsi Komposisi Berpangkat',
      'Optimasi Masalah Nilai Maksimum Soal Cerita',
    ],
  },

  // 27. Integral
  'Integral': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Kalkulus: Integral Tak Tentu & Tentu',
    subtitle: 'Antiturunan Aljabar, Integral Substitusi & Parsial, serta Perhitungan Luas Daerah & Volume Benda Putar',
    conceptSummary: "Integral adalah operasi invers dari turunan (antiturunan). Integral Tak Tentu menghasilkan keluarga fungsi dengan konstanta integrasi + C. Integral Tentu menghitung akumulasi total perubahan bersih, yang secara geometris merepresentasikan luas daerah di bawah kurva fungsi atau volume benda putar saat diputar mengelilingi sumbu koordinat.",
    keyPoints: [
      "Aturan Pangkat Integral: int x^n dx = (1 / (n + 1)) * x^(n+1) + C untuk n != -1. Jika n = -1, int (1/x) dx = ln|x| + C.",
      "Teorema Dasar Kalkulus: int_a^b f(x) dx = F(b) - F(a) dengan F'(x) = f(x).",
      "Metode Substitusi: Digunakan jika integran memuat fungsi g(x) dan turunan g'(x)-nya sekaligus (int f(g(x)) * g'(x) dx = int f(u) du).",
      "Metode Parsial: Digunakan jika substitusi gagal (int u dv = u * v - int v du). Tips pemilihan u menggunakan prioritas LIATE (Logaritma, Invers trigonometri, Aljabar, Trigonometri, Eksponensial)."
],
    examTips: "Luas di Bawah Sumbu X: Jika daerah yang dihitung berada di bawah sumbu X, hasil integral tentunya bernilai negatif. Tambahkan tanda negatif di depan integral atau gunakan nilai mutlak agar nilai luas tetap positif.",
    formulas: [
      {
        name: 'Integral Tak Tentu Aljabar',
        badge: '∫ xⁿ dx',
        formula: '\\int a x^n dx = \\frac{a}{n + 1} x^{n+1} + C \\quad (n \\ne -1)',
        description: 'C adalah konstanta integrasi sembarang.',
      },
      {
        name: 'Teorema Dasar Kalkulus (Integral Tentu)',
        badge: '∫ₐᵇ f(x) dx',
        formula: '\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)',
        description: 'F(x) adalah antiturunan dari fungsi kontinu f(x).',
      },
      {
        name: 'Teknik Substitusi & Parsial',
        badge: '∫ u dv',
        formula: '\\int f(g(x))g\'(x)dx = \\int f(u)du, \\quad \\int u dv = u v - \\int v du',
        description: 'Substitusi mempermudah variabel, sedangkan integral parsial memisahkan turunan dan antiturunan.',
      },
      {
        name: 'Luas Daerah & Volume Benda Putar',
        badge: 'Luas & Volume',
        formula: 'L = \\int_a^b (y_{\\text{atas}} - y_{\\text{bawah}}) dx, \\quad V = \\pi \\int_a^b y^2 dx',
        description: 'Luas di antara dua kurva dan volume benda putar mengelilingi sumbu-X sebesar 360°.',
      },
    ],
    example: {
      title: 'Menghitung Nilai Integral Tentu Aljabar',
      problem:
        'Hitunglah nilai dari integral tentu ∫ dari x = 1 hingga x = 3 untuk fungsi (3x² - 2x + 1) dx.',
      substitutions: [
        'Antiturunan F(x) = \\int (3x^2 - 2x + 1) dx = x^3 - x^2 + x',
        'F(3) = (3)^3 - (3)^2 + 3 = 27 - 9 + 3 = 21',
        'F(1) = (1)^3 - (1)^2 + 1 = 1 - 1 + 1 = 1',
        'Nilai = F(3) - F(1) = 21 - 1 = 20',
      ],
      finalResult: 'Hasil Integral = 20',
      resultNote: 'Nilai positif menyatakan akumulasi luas daerah di atas sumbu-X.',
    },
    quickChips: [
      '# CARA: Rumus Cepat Luas Daerah D√D / (6a²)',
      'Integral Parsial Metode Tanzalin (Tabel)',
      'Integral Trigonometri sin ax & cos ax',
      'Volume Benda Putar Mengelilingi Sumbu Y',
    ],
  },

  // 28. Analisis Data dan Peluang
  'Analisis Data dan Peluang': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Statistika Inferensial & Distribusi Peluang',
    subtitle: 'Variabel Acak Diskrit, Distribusi Peluang Binomial, dan Distribusi Normal Baku (Z-Score)',
    conceptSummary: "Bab sintesis yang mengintegrasikan pengolahan data empiris statistik dengan distribusi probabilitas teoritis. Mempelajari sebaran variabel acak diskrit, distribusi Binomial untuk percobaan Bernoulli berulang, dan distribusi Normal Gauss (kurva lonceng) yang menjadi landasan inferensi statistik modern.",
    keyPoints: [
      "Variabel Acak & Nilai Harapan: Nilai harapan E(X) = mu = sum(x * P(X = x)). Merupakan rata-rata teoritis jangka panjang.",
      "Distribusi Binomial: P(X = x) = C(n, x) * p^x * (1 - p)^(n - x). Syarat: n percobaan independen, setiap percobaan hanya menghasilkan 2 keluaran (sukses atau gagal).",
      "Distribusi Normal Standar (Z): Transformasi skor mentah ke skor Z dengan rumus Z = (X - mu) / sigma untuk membaca tabel luas kurva normal baku.",
      "Aturan Empiris Kurva Normal: Sekitar 68% data berada dalam mu +- 1*sigma, 95% dalam mu +- 2*sigma, dan 99.7% dalam mu +- 3*sigma."
],
    examTips: "Membaca Tabel Z Normal: Perhatikan apakah tabel Z yang disediakan soal menghitung luas dari Z negatif ke Z (luas kumulatif kiri) atau dari titik tengah 0 ke Z.",
    formulas: [
      {
        name: 'Distribusi Peluang Binomial',
        badge: 'P(X = k)',
        formula: 'P(X = k) = \\binom{n}{k} p^k (1 - p)^{n-k}',
        description: 'n: jumlah percobaan, k: jumlah sukses yang diinginkan, p: peluang sukses.',
      },
      {
        name: 'Rata-rata & Simpangan Baku Binomial',
        badge: 'μ & σ',
        formula: '\\mu = n \\cdot p, \\quad \\sigma = \\sqrt{n \\cdot p \\cdot (1 - p)}',
        description: 'Ukuran nilai harapan dan dispersi pada proses Bernoulli.',
      },
      {
        name: 'Transformasi Skor Baku Z (Normal)',
        badge: 'Z-Score',
        formula: 'Z = \\frac{X - \\mu}{\\sigma}',
        description: 'Mengubah variabel acak normal X menjadi distribusi normal baku dengan rata-rata 0 dan varians 1.',
      },
      {
        name: 'Sifat Kurva Distribusi Normal',
        badge: 'Kurva Lonceng',
        formula: '\\int_{-\\infty}^{\\infty} f(x) dx = 1, \\quad P(\\mu - \\sigma \\le X \\le \\mu + \\sigma) \\approx 68.27\\%',
        description: 'Kurva simetris terhadap rata-rata μ dengan luas total daerah di bawah kurva sama dengan 1.',
      },
    ],
    example: {
      title: 'Menghitung Peluang Binomial Percobaan Koin',
      problem:
        'Sebuah koin seimbang dilempar sebanyak 4 kali. Tentukan peluang munculnya tepat 3 sisi gambar (G).',
      substitutions: [
        'Jumlah percobaan n = 4, jumlah sukses k = 3',
        'Peluang sukses muncul gambar p = 1/2, peluang gagal q = 1 - 1/2 = 1/2',
        'P(X = 3) = \\binom{4}{3} \\left(\\frac{1}{2}\\right)^3 \\left(\\frac{1}{2}\\right)^{4-3}',
        'P(X = 3) = 4 \\times \\frac{1}{8} \\times \\frac{1}{2} = \\frac{4}{16} = \\frac{1}{4} = 0.25',
      ],
      finalResult: 'Peluang P(X = 3) = 1/4 (25%)',
      resultNote: 'Peluang binomial terdefinisi dengan tepat pada rentang probabilitas 0 hingga 1.',
    },
    quickChips: [
      '# CARA: Membaca Tabel Distribusi Normal Z',
      'Peluang Kumulatif Binomial P(X ≤ k)',
      'Uji Hipotesis Rata-rata Satu Sampel',
      'Distribusi Peluang Acak Kontinu',
    ],
  },
};

// Helper function untuk mengambil data materi berdasarkan nama bab
export const getTopicCurriculum = (subject: string, grade?: string): ICurriculumTopicDetail => {
  if (!subject) {
    if (grade?.includes('11')) {
      return CURRICULUM_DATA['Statistika: Analisis Data Bivariat'];
    }
    return CURRICULUM_DATA['Statistika'];
  }

  // Jika jenjang kelas 11 dan memilih 'Statistika' umum, arahkan ke Analisis Data Bivariat
  if (
    grade?.includes('11') &&
    subject.toLowerCase().includes('statistika') &&
    !subject.toLowerCase().includes('tunggal') &&
    !subject.toLowerCase().includes('kelompok')
  ) {
    return CURRICULUM_DATA['Statistika: Analisis Data Bivariat'];
  }

  // 1. Cek kecocokan langsung
  if (CURRICULUM_DATA[subject]) {
    return CURRICULUM_DATA[subject];
  }

  // 2. Normalisasi string untuk pencocokan kata kunci
  const cleanSubj = subject.toLowerCase().replace(/[^a-z0-9]/g, ' ');

  for (const [key, val] of Object.entries(CURRICULUM_DATA)) {
    const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, ' ');
    if (cleanSubj.includes(cleanKey) || cleanKey.includes(cleanSubj)) {
      return val;
    }
  }

  // 3. Pencocokan kata kunci utama
  const keywordMappings: [string[], string][] = [
    [['eksponen', 'pangkat', 'akar', 'logaritma'], 'Eksponen dan Logaritma'],
    [['barisan', 'deret', 'aritmatika', 'aritmetika', 'geometri'], 'Barisan dan Deret'],
    [['vektor', 'vektornya', 'dot product', 'proyeksi'], 'Vektor dan Operasinya'],
    [['trigonometri', 'sinus', 'cosinus', 'tangen', 'sudut'], 'Trigonometri'],
    [['spltv', 'spldv', 'sptldv', 'sistem persamaan', 'program linear'], 'Sistem Persamaan dan Pertidaksamaan Linear'],
    [['persamaan kuadrat', 'fungsi kuadrat', 'parabola', 'kuadrat'], 'Persamaan, Fungsi, dan Pertidaksamaan Kuadrat'],
    [['statistika', 'mean', 'median', 'modus', 'kuartil', 'desil'], 'Statistika'],
    [['bivariat', 'regresi', 'scatter', 'pencar'], 'Statistika: Analisis Data Bivariat'],
    [['peluang', 'kombinatorik', 'permutasi', 'kombinasi'], 'Peluang'],
    [['nilai mutlak', 'mutlak', 'absolut'], 'Persamaan dan Pertidaksamaan Nilai Mutlak'],
    [['logika', 'implikasi', 'biimplikasi', 'silogisme', 'premis'], 'Logika Matematika'],
    [['komposisi', 'invers', 'komposisi fungsi', 'fungsi invers'], 'Komposisi Fungsi dan Fungsi Invers'],
    [['lingkaran', 'pgsl', 'jari-jari'], 'Lingkaran'],
    [['induksi', 'induksi matematika'], 'Induksi Matematika'],
    [['polinomial', 'suku banyak', 'horner', 'vieta'], 'Polinomial'],
    [['matriks', 'determinan', 'invers matriks'], 'Matriks'],
    [['transformasi geometri', 'translasi', 'refleksi', 'rotasi', 'dilatasi'], 'Transformasi Geometri'],
    [['pemodelan', 'fungsi rasional', 'asimtot'], 'Fungsi dan Pemodelannya'],
    [['transformasi fungsi'], 'Transformasi Fungsi'],
    [['investasi', 'pinjaman', 'anuitas', 'bunga majemuk'], 'Investasi dan Pinjaman'],
    [['dimensi tiga', 'geometri ruang', 'jarak titik', 'kubus', 'balok'], 'Dimensi Tiga'],
    [['kongruen', 'kekongruenan', 'kesebangunan', 'sebangun'], 'Kekongruenan dan Kesebangunan'],
    [['geometri analitik', 'irisan kerucut', 'elips', 'hiperbola'], 'Geometri Analitik'],
    [['limit', 'ketakhinggaan', 'tak hingga'], 'Limit'],
    [['turunan', 'derivatif', 'diferensial', 'stasioner'], 'Turunan Fungsi'],
    [['integral', 'antiturunan', 'luas daerah', 'volume putar'], 'Integral'],
    [['inferensial', 'distribusi normal', 'z score', 'z-score', 'binomial'], 'Analisis Data dan Peluang'],
  ];

  for (const [keywords, targetKey] of keywordMappings) {
    if (keywords.some((kw) => cleanSubj.includes(kw))) {
      return CURRICULUM_DATA[targetKey];
    }
  }

  // 4. Fallback jika nama topik di luar silabus SMA
  return {
    curriculumType: 'Kurikulum Merdeka',
    title: subject,
    subtitle: `Materi Pelajaran ${grade || 'SMA'} Terverifikasi`,
    conceptSummary: `Materi pembelajaran ${subject} untuk jenjang ${grade || 'SMA'} berfokus pada pemahaman konsep fundamental, penalaran deduktif, serta penerapan rumus dalam menyelesaikan soal standar asesmen nasional dan UTBK-SNBT.`,
    keyPoints: [
      `Pahami definisi formal dan notasi matematis dari ${subject}.`,
      `Identifikasi parameter yang diketahui sebelum memilih rumus penyelesaian.`,
      `Periksa batasan syarat nilai (domain fungsi, syarat numerus, atau kepositifan).`,
      `Lakukan pembuktian atau pengujian kembali hasil akhir untuk mencegah kekeliruan.`
    ],
    examTips: `Tips Efisien: Identifikasi tipe soal terlebih dahulu. Buat sketsa atau daftarkan variabel penting untuk mempercepat proses eliminasi jawaban yang salah.`,
    formulas: [
      {
        name: 'Konsep Dasar',
        badge: 'Definisi',
        formula: 'f(x) \\iff \\text{Himpunan Penyelesaian}',
        description: `Struktur materi ${subject} sesuai standar silabus nasional.`,
      },
      {
        name: 'Rumus Utama',
        badge: 'Formula',
        formula: 'P_n = \\sum_{i=1}^n x_i',
        description: 'Pondasi matematis untuk penyelesaian model soal.',
      },
      {
        name: 'Relasi & Operasi',
        badge: 'Sifat',
        formula: 'A \\cap B \\iff x \\in A \\land x \\in B',
        description: 'Sifat operasi aljabar yang berlaku pada bab ini.',
      },
      {
        name: 'Aturan Verifikasi',
        badge: 'Syarat',
        formula: '\\Delta \\ge 0 \\quad \\text{atau} \\quad x \\in \\mathbb{R}',
        description: 'Batasan nilai yang memenuhi syarat penyelesaian.',
      },
    ],
    example: {
      title: `Contoh Soal Pembahasan ${subject}`,
      problem: `Diberikan persoalan terkait materi ${subject} pada tingkat ${grade || 'SMA'}. Pahami konsep dasar dan langkah sistematis sebelum menyelesaikan perhitungan.`,
      substitutions: [
        'Langkah 1: Identifikasi parameter dan variabel yang diketahui dari soal.',
        'Langkah 2: Terapkan rumus dasar yang bersesuaian dengan materi.',
        'Langkah 3: Lakukan penyederhanaan aljabar secara bertahap.',
      ],
      finalResult: 'Hasil Terverifikasi',
      resultNote: 'Gunakan asisten MathAI di bawah ini untuk pembahasan soal spesifik.',
    },
    quickChips: [
      `# Trik Cepat ${subject}`,
      `Contoh Soal UTBK ${subject}`,
      'Latihan Soal Ujian',
      'Rangkuman Rumus Penting',
    ],
  };
};
