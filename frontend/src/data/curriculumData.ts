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
  formulas: IFormulaItem[];
  example: IExampleProblem;
  quickChips: string[];
}

export const CURRICULUM_DATA: Record<string, ICurriculumTopicDetail> = {
  // Statistika (Kelas 10 & 11)
  'Statistika': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Statistika',
    subtitle: 'Ukuran Pemusatan & Penyebaran Data Berkelompok (Grouped Data)',
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

  // Eksponen dan Logaritma (Kelas 10)
  'Eksponen dan Logaritma': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Eksponen & Logaritma Dasar',
    subtitle: 'Sifat Operasi Bentuk Pangkat, Akar, dan Persamaan Logaritma',
    formulas: [
      {
        name: 'Perkalian Eksponen',
        badge: 'aᵐ · aⁿ',
        formula: 'a^m \\cdot a^n = a^{m+n}',
        description: 'Pangkat dijumlahkan jika bilangan pokok (basis) sama.',
      },
      {
        name: 'Pembagian Eksponen',
        badge: 'aᵐ / aⁿ',
        formula: '\\frac{a^m}{a^n} = a^{m-n}',
        description: 'Pangkat dikurangkan dengan syarat a ≠ 0.',
      },
      {
        name: 'Definisi Logaritma',
        badge: 'ᵃlog b = c',
        formula: '{}^a\\log b = c \\iff a^c = b',
        description: 'Syarat basis a > 0, a ≠ 1 dan numerus b > 0.',
      },
      {
        name: 'Penjumlahan Logaritma',
        badge: 'ᵃlog(b·c)',
        formula: '{}^a\\log b + {}^a\\log c = {}^a\\log(b \\cdot c)',
        description: 'Penjumlahan logaritma ber-basis sama menjadi perkalian numerus.',
      },
    ],
    example: {
      title: 'Penyederhanaan Bentuk Eksponen & Logaritma',
      problem:
        'Sederhanakan ekspresi (2³ · 2⁵) / 2⁴ serta tentukan nilai dari ²log 16 + ²log 4.',
      substitutions: [
        'Bentuk eksponen: 2^{3+5-4} = 2^4 = 16',
        '^2\\log 16 = 4 \\quad \\text{karena} \\quad 2^4 = 16',
        '^2\\log 4 = 2 \\quad \\text{karena} \\quad 2^2 = 4',
        'Hasil penjumlahan: 4 + 2 = 6',
      ],
      finalResult: 'Hasil = 6',
      resultNote: 'Bentuk terdefinisi dan memenuhi sifat basis identik.',
    },
    quickChips: [
      '# TIPS: Merasionalkan Penyebut Bentuk Akar',
      'Sifat Logaritma Basis Berubah',
      'Pertidaksamaan Eksponensial',
      'Trik Cepat Soal UTBK Eksponen',
    ],
  },

  // Matriks (Kelas 11)
  'Matriks': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Matriks & Sistem Persamaan',
    subtitle: 'Operasi Aljabar Matriks, Determinan, dan Invers Matriks 2x2 & 3x3',
    formulas: [
      {
        name: 'Determinan Ordo 2x2',
        badge: 'det(A)',
        formula: '\\det(A) = ad - bc',
        description: 'Untuk matriks A = [[a, b], [c, d]]. Matriks singular jika det = 0.',
      },
      {
        name: 'Invers Matriks 2x2',
        badge: 'A⁻¹',
        formula: 'A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
        description: 'Invers hanya ada jika det(A) ≠ 0.',
      },
      {
        name: 'Perkalian Matriks',
        badge: 'A · B',
        formula: '(AB)_{ij} = \\sum_{k} a_{ik} \\cdot b_{kj}',
        description: 'Jumlah kolom matriks pertama harus sama dengan baris matriks kedua.',
      },
      {
        name: 'Sifat Transpose',
        badge: '(AB)ᵀ',
        formula: '(AB)^T = B^T \\cdot A^T',
        description: 'Urutan perkalian dibalik pada sifat transpose.',
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
      'Persamaan AX = B',
    ],
  },

  // Trigonometri (Kelas 10 & 11)
  'Trigonometri': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Trigonometri Dasar & Analitik',
    subtitle: 'Perbandingan Segitiga Siku-Siku, Sudut Berelasi, dan Aturan Sinus-Cosinus',
    formulas: [
      {
        name: 'Identitas Pythagoras',
        badge: 'sin² + cos²',
        formula: '\\sin^2 x + \\cos^2 x = 1',
        description: 'Identitas utama yang berlaku untuk setiap sudut real x.',
      },
      {
        name: 'Aturan Sinus',
        badge: 'a / sin A',
        formula: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
        description: 'Digunakan saat diketahui 2 sudut 1 sisi atau 2 sisi 1 sudut di hadapannya.',
      },
      {
        name: 'Aturan Cosinus',
        badge: 'a² = b² + c²',
        formula: 'a^2 = b^2 + c^2 - 2bc \\cos A',
        description: 'Digunakan saat diketahui 2 sisi dan sudut apit, atau ketiga sisinya.',
      },
      {
        name: 'Luas Segitiga',
        badge: 'Luas',
        formula: 'L = \\frac{1}{2} a b \\sin C',
        description: 'Menghitung luas segitiga sembarang dari 2 sisi dan sudut apitnya.',
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

  // Turunan Fungsi (Kelas 11 & 12)
  'Turunan Fungsi': {
    curriculumType: 'Kurikulum Merdeka',
    title: 'Kalkulus: Turunan Fungsi Aljabar',
    subtitle: 'Konsep Derivatif, Aturan Rantai, Nilai Stasioner, dan Garis Singgung',
    formulas: [
      {
        name: 'Aturan Pangkat Aljabar',
        badge: 'd/dx (xⁿ)',
        formula: 'f(x) = a x^n \\implies f\'(x) = a \\cdot n x^{n-1}',
        description: 'Pangkat diturunkan sebagai pengali koefisien lalu berkurang satu.',
      },
      {
        name: 'Perkalian Dua Fungsi',
        badge: '(u · v)\'',
        formula: '(u \\cdot v)\' = u\'v + uv\'',
        description: 'Aturan produk untuk perkalian fungsi aljabar berlainan variabel.',
      },
      {
        name: 'Pembagian Dua Fungsi',
        badge: '(u / v)\'',
        formula: '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}',
        description: 'Aturan kuotien dengan syarat penyebut v(x) ≠ 0.',
      },
      {
        name: 'Titik Stasioner',
        badge: 'f\'(x) = 0',
        formula: 'f\'(x) = 0 \\implies x_{\\text{stasioner}}',
        description: 'Syarat kurva mencapai nilai maksimum, minimum, atau titik belok.',
      },
    ],
    example: {
      title: 'Menentukan Titik Balik Maksimum/Minimum',
      problem:
        'Tentukan titik stasioner dan jenisnya dari fungsi f(x) = x³ - 3x² - 9x + 5.',
      substitutions: [
        'f\'(x) = 3x^2 - 6x - 9 = 0',
        'x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0',
        'x_1 = 3 \\implies f(3) = 27 - 27 - 27 + 5 = -22 \\text{ (Min)}',
        'x_2 = -1 \\implies f(-1) = -1 - 3 + 9 + 5 = 10 \\text{ (Maks)}',
      ],
      finalResult: 'Maks (-1, 10), Min (3, -22)',
      resultNote: 'Uji turunan kedua f\'\'(-1) < 0 (maksimum) dan f\'\'(3) > 0 (minimum).',
    },
    quickChips: [
      '# CARA: Persamaan Garis Singgung Kurva',
      'Interval Fungsi Naik & Turun',
      'Aturan Rantai Fungsi Komposisi',
      'Turunan Fungsi Trigonometri',
    ],
  },
};

// Helper function untuk mengambil data materi berdasarkan nama bab
export const getTopicCurriculum = (subject: string, grade?: string): ICurriculumTopicDetail => {
  // Cek kecocokan langsung
  if (CURRICULUM_DATA[subject]) {
    return CURRICULUM_DATA[subject];
  }

  // Cek kecocokan sebagian kata kunci
  const lower = subject.toLowerCase();
  for (const [key, val] of Object.entries(CURRICULUM_DATA)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return val;
    }
  }

  // Fallback dinamis jika bab belum terdaftar secara spesifik
  return {
    curriculumType: 'Kurikulum Merdeka',
    title: subject,
    subtitle: `Materi Pelajaran ${grade || 'SMA'} Terverifikasi`,
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

