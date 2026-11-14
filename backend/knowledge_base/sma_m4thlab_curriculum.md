# Knowledge Base Kurikulum Matematika SMA (Referensi: m4th-lab.net)

Sumber Kebenaran Utama (*Grounding Scope*): **https://www.m4th-lab.net/materi?level=sma**  
Kurikulum Acuan: **Kurikulum Nasional Indonesia (Kurikulum 2013 & Kurikulum Merdeka) — Jenjang SMA/MA Kelas X, XI, dan XII**  
Maintainer: **Valdric (`Valdric/MathAI`)**

---

## A. Matematika Wajib (Umum) — Kelas X, XI, dan XII

### Kelas X (Matematika Wajib)
1. **Eksponen dan Logaritma Dasar**
   - Sifat-sifat bilangan berpangkat bulat dan rasional (bentuk akar).
   - Merasionalkan penyebut bentuk akar.
   - Definisi dan sifat-sifat logaritma: $\,^a\log(b \cdot c) = \,^a\log b + \,^a\log c$, $\,^a\log\left(\frac{b}{c}\right) = \,^a\log b - \,^a\log c$, $\,^a\log(b^n) = n \cdot \,^a\log b$, dan rumus perubahan basis.
2. **Persamaan dan Pertidaksamaan Nilai Mutlak Linear Satu Variabel**
   - Konsep nilai mutlak: $|x| = x$ untuk $x \ge 0$ dan $|x| = -x$ untuk $x < 0$.
   - Penyelesaian persamaan $|f(x)| = c$ dan $|f(x)| = |g(x)|$.
   - Penyelesaian pertidaksamaan nilai mutlak $|f(x)| < c$ dan $|f(x)| > c$.
3. **Sistem Persamaan Linear Tiga Variabel (SPLTV) & Sistem PertidaksamaanDua Variabel (SPtLDV)**
   - Metode substitusi, eliminasi, gabungan, dan determinan (Aturan Cramer) untuk SPLTV.
   - Sistem Persamaan dan Pertidaksamaan Linear-Kuadrat serta Kuadrat-Kuadrat Dua Variabel (SPLKDV & SPtLKDV).
4. **Relasi dan Fungsi**
   - Domain, kodomain, dan range fungsi linear, fungsi kuadrat, dan fungsi rasional (pecahan).
   - Operasi aljabar pada fungsi.
   - **Fungsi Komposisi:** $(f \circ g)(x) = f(g(x))$ beserta sifat asosiatifnya.
   - **Fungsi Invers:** $f^{-1}(x)$ dan sifat $(f \circ g)^{-1}(x) = (g^{-1} \circ f^{-1})(x)$.
5. **Trigonometri Dasar**
   - Ukuran sudut (derajat dan radian: $180^\circ = \pi\text{ rad}$).
   - Perbandingan trigonometri pada segitiga siku-siku ($\sin, \cos, \tan, \csc, \sec, \cot$).
   - Nilai perbandingan trigonometri sudut istimewa ($0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$) dan sudut berelasi di Kuadran I, II, III, dan IV.
   - Identitas trigonometri dasar: $\sin^2 x + \cos^2 x = 1$, $1 + \tan^2 x = \sec^2 x$, $1 + \cot^2 x = \csc^2 x$.
   - **Aturan Sinus:** $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$.
   - **Aturan Cosinus:** $a^2 = b^2 + c^2 - 2bc\cos A$.
   - **Luas Segitiga:** $L = \frac{1}{2}bc\sin A$ dan rumus Heron.
   - Grafik fungsi trigonometri dasar ($y = A\sin(kx \pm \theta) + c$).

### Kelas XI (Matematika Wajib)
1. **Induksi Matematika**
   - Pembuktian deret bilangan, keterbagian, dan ketaksamaan dengan langkah basis ($n=1$) dan langkah induksi ($n=k \implies n=k+1$).
2. **Program Linear Dua Variabel**
   - Pemodelan matematika dari masalah kontekstual.
   - Menentukan Daerah Himpunan Penyelesaian (DHP) sistem pertidaksamaan linear.
   - Menentukan nilai optimum (maksimum/minimum) fungsi objektif $f(x, y) = ax + by$ dengan metode uji titik pojok dan garis selidik.
3. **Matriks**
   - Ordo, jenis-jenis matriks, dan transpos matriks ($A^T$).
   - Kesamaan dua matriks dan operasi aljabar matriks (penjumlahan, pengurangan, perkalian skalar, perkalian dua matriks).
   - **Determinan Matriks** ordo $2 \times 2$ ($\det(A) = ad - bc$) dan ordo $3 \times 3$ (Metode Sarrus & Ekspansi Kofaktor).
   - **Invers Matriks** ordo $2 \times 2$: $A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ dan penyelesaian SPL dengan matriks ($X = A^{-1}B$ atau aturan Cramer).
4. **Transformasi Geometri**
   - Translasi (Pergeseran): $(x', y') = (x + a, y + b)$.
   - Refleksi (Pencerminan) terhadap sumbu-$x$, sumbu-$y$, titik asal, garis $y=x$, $y=-x$, $x=h$, dan $y=k$.
   - Rotasi (Perputaran) sebesar sudut $\theta$ terhadap pusat $(0,0)$ dan $(a,b)$ menggunakan matriks rotasi $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$.
   - Dilatasi (Perkalian) dengan faktor skala $k$ terhadap pusat $(0,0)$ dan $(a,b)$.
   - Komposisi transformasi geometri menggunakan perkalian matriks.
5. **Barisan dan Deret**
   - **Barisan & Deret Aritmetika:** $U_n = a + (n-1)b$ dan $S_n = \frac{n}{2}(2a + (n-1)b)$.
   - **Barisan & Deret Geometri:** $U_n = ar^{n-1}$ dan $S_n = \frac{a(r^n - 1)}{r - 1}$.
   - **Deret Geometri Tak Hingga Konvergen ($|r| < 1$):** $S_\infty = \frac{a}{1 - r}$.
   - Aplikasi barisan dan deret: pertumbuhan eksponensial, peluruhan, bunga tunggal, bunga majemuk ($M_n = M_0(1+i)^n$), dan anuitas.
6. **Limit Fungsi Aljabar**
   - Konsep limit fungsi di satu titik $\lim_{x \to c} f(x)$ dan sifat-sifat limit fungsi aljabar.
   - Penyelesaian bentuk tak tentu $\frac{0}{0}$ dengan pemfaktoran, perkalian sekawan, dan dalil L'Hôpital (sebagai verifikasi).
   - Limit fungsi aljabar menuju ketakhinggaan ($\lim_{x \to \infty}$).
7. **Turunan (Derivatif) Fungsi Aljabar**
   - Definisi turunan: $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$.
   - Rumus turunan fungsi pangkat, hasil kali $(uv)' = u'v + uv'$, hasil bagi $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$, dan **Aturan Rantai** $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$.
   - Aplikasi turunan: persamaan garis singgung kurva ($m = f'(x_1)$), fungsi naik ($f'(x) > 0$) dan fungsi turun ($f'(x) < 0$), titik stasioner ($f'(x) = 0$), serta nilai maksimum dan minimum.
8. **Integral Tak Tentu Fungsi Aljabar**
   - Konsep antiturunan: $\int ax^n \, dx = \frac{a}{n+1}x^{n+1} + C$ untuk $n \ne -1$.
   - Teknik substitusi aljabar pada integral tak tentu.
   - Menentukan persamaan kurva jika diketahui gradien garis singgung dan satu titik yang dilalui.

### Kelas XII (Matematika Wajib)
1. **Dimensi Tiga (Geometri Ruang)**
   - Kedudukan titik, garis, dan bidang dalam ruang dimensi tiga (kubus, balok, limas, prisma).
   - **Jarak dalam Ruang:** jarak titik ke titik, jarak titik ke garis, jarak titik ke bidang, jarak dua garis sejajar/bersilangan, dan jarak dua bidang sejajar.
   - **Sudut dalam Ruang:** sudut antara dua garis, sudut antara garis dan bidang, serta sudut antara dua bidang (menggunakan teorema Pythagoras, luas segitiga, serta aturan sinus/cosinus).
2. **Statistika Deskriptif (Data Tunggal & Data Berkelompok)**
   - Penyajian data: tabel distribusi frekuensi, histogram, poligon frekuensi, dan ogive.
   - **Ukuran Pemusatan Data:** Rata-rata hitung (*Mean* $\bar{x}$, termasuk cara coding/rataan sementara), *Median* ($Me$), dan *Modus* ($Mo$).
   - **Ukuran Letak Data:** Kuartil ($Q_1, Q_2, Q_3$), Desil ($D_i$), dan Persentil ($P_i$).
   - **Ukuran Penyebaran Data:** Jangkauan ($R$), Hamparan/Jangkauan Antarkuartil ($H = Q_3 - Q_1$), Simpangan Kuartil ($Q_d$), Simpangan Rata-rata ($SR$), Ragam/Varians ($S^2$), dan Simpangan Baku ($S$).
3. **Kaidah Pencacahan dan Peluang**
   - **Kaidah Pencacahan:** aturan penjumlahan, aturan perkalian (*filling slots*), notasi faktorial ($n!$).
   - **Permutasi:** permutasi $r$ unsur dari $n$ unsur ($P_r^n = \frac{n!}{(n-r)!}$), permutasi dengan unsur yang sama, dan permutasi siklis ($(n-1)!$).
   - **Kombinasi:** $C_r^n = \binom{n}{r} = \frac{n!}{r!(n-r)!}$.
   - **Peluang Kejadian:** ruang sampel, titik sampel, peluang $P(A) = \frac{n(A)}{n(S)}$, frekuensi harapan $F_h(A) = P(A) \times N$, komplemen kejadian $P(A^c) = 1 - P(A)$.
   - **Peluang Kejadian Majemuk:** kejadian saling lepas $P(A \cup B) = P(A) + P(B)$, tidak saling lepas $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, saling bebas $P(A \cap B) = P(A) \cdot P(B)$, dan **Peluang Bersyarat** $P(A|B) = \frac{P(A \cap B)}{P(B)}$.

---

## B. Matematika Peminatan (Tingkat Lanjut) — Kelas X, XI, dan XII

### Kelas X (Matematika Peminatan)
1. **Fungsi, Persamaan, dan Pertidaksamaan Eksponensial & Logaritma**
   - Grafik fungsi eksponensial $f(x) = a^x$ dan fungsi logaritma $f(x) = \,^a\log x$.
   - Persamaan eksponensial bentuk $a^{f(x)} = a^{g(x)}$, $a^{f(x)} = b^{f(x)}$, $h(x)^{f(x)} = h(x)^{g(x)}$, dan bentuk kuadrat $A(a^x)^2 + B(a^x) + C = 0$.
   - Pertidaksamaan eksponensial dan logaritma (memperhatikan basis $a > 1$ vs $0 < a < 1$ serta syarat numerus $> 0$).
2. **Vektor pada Bidang ($\mathbb{R}^2$) dan Ruang ($\mathbb{R}^3$)**
   - Vektor posisi, vektor satuan $\hat{u} = \frac{\vec{u}}{|\vec{u}|}$, dan panjang/modulus vektor $|\vec{u}| = \sqrt{x^2 + y^2 + z^2}$.
   - Operasi aljabar vektor (penjumlahan, pengurangan, perkalian skalar) dan pembagian ruas garis (perbandingan vektor).
   - **Perkalian Titik (*Dot Product*):** $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$ dan penentuan sudut antara dua vektor.
   - **Perkalian Silang (*Cross Product*):** $\vec{a} \times \vec{b}$ pada $\mathbb{R}^3$.
   - **Proyeksi Ortogonal Vektor:** proyeksi skalar ortogonal $\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$ dan proyeksi vektor ortogonal $\left(\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\right)\vec{b}$.

### Kelas XI (Matematika Peminatan)
1. **Persamaan Trigonometri & Trigonometri Analitik**
   - Penyelesaian persamaan dasar:
     - $\sin x = \sin\alpha \implies x = \alpha + k \cdot 360^\circ$ atau $x = (180^\circ - \alpha) + k \cdot 360^\circ$.
     - $\cos x = \cos\alpha \implies x = \pm\alpha + k \cdot 360^\circ$.
     - $\tan x = \tan\alpha \implies x = \alpha + k \cdot 180^\circ$.
   - Bentuk $a\cos x + b\sin x = c$ diubah menjadi $k\cos(x - \alpha) = c$ dengan $k = \sqrt{a^2 + b^2}$ dan $\tan\alpha = \frac{b}{a}$.
   - **Rumus Jumlah dan Selisih Dua Sudut:** $\sin(\alpha \pm \beta)$, $\cos(\alpha \pm \beta)$, $\tan(\alpha \pm \beta)$.
   - **Rumus Sudut Rangkap dan Sudut Paruh:** $\sin 2\alpha = 2\sin\alpha\cos\alpha$, $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$, $\tan 2\alpha = \frac{2\tan\alpha}{1-\tan^2\alpha}$.
   - **Rumus Perkalian dan Penjumlahan/Pengurangan Sinus & Cosinus:** $2\sin A\cos B = \sin(A+B) + \sin(A-B)$, $\sin A + \sin B = 2\sin\frac{1}{2}(A+B)\cos\frac{1}{2}(A-B)$, dst.
2. **Persamaan Lingkaran dan Irisan Kerucut**
   - Persamaan lingkaran berpusat di $O(0,0)$: $x^2 + y^2 = r^2$ dan berpusat di $P(a,b)$: $(x-a)^2 + (y-b)^2 = r^2$.
   - Bentuk umum persamaan lingkaran: $x^2 + y^2 + Ax + By + C = 0$ dengan pusat $\left(-\frac{1}{2}A, -\frac{1}{2}B\right)$ dan jari-jari $r = \sqrt{\frac{1}{4}A^2 + \frac{1}{4}B^2 - C}$.
   - Kedudukan titik dan garis terhadap lingkaran (diskriminan $D = b^2 - 4ac$).
   - **Persamaan Garis Singgung Lingkaran (PGSL):** melalui titik pada lingkaran (*bagi adil*), diketahui gradien $m$ ($y - b = m(x - a) \pm r\sqrt{1+m^2}$), dan melalui titik di luar lingkaran (garis kutub/polar).
   - Konsep dasar irisan kerucut (parabola, elips, hiperbola).
3. **Polinomial (Suku Banyak)**
   - Operasi aljabar polinomial dan kesamaan dua polinomial.
   - Nilai suku banyak dengan metode substitusi dan **Skema Horner**.
   - Pembagian polinomial oleh $(x - k)$, $(ax + b)$, dan polinomial derajat dua (Metode Bersusun & Horner-Kino): $P(x) = H(x) \cdot Q(x) + S(x)$.
   - **Teorema Sisa** dan **Teorema Faktor** serta sifat akar-akar persamaan polinomial (**Teorema Vieta** untuk derajat 3 dan 4).

### Kelas XII (Matematika Peminatan)
1. **Limit Fungsi Trigonometri dan Limit di Ketakhinggaan**
   - Rumus dasar: $\lim_{x \to 0} \frac{\sin ax}{bx} = \frac{a}{b}$ dan $\lim_{x \to 0} \frac{\tan ax}{bx} = \frac{a}{b}$.
   - Manipulasi identitas $\cos 2x = 1 - 2\sin^2 x \implies 1 - \cos ax = 2\sin^2\left(\frac{a}{2}x\right)$.
   - Limit di ketakhinggaan bentuk rasional $\lim_{x \to \infty} \frac{ax^m + \dots}{px^n + \dots}$ dan bentuk irasional $\lim_{x \to \infty} (\sqrt{ax^2+bx+c} - \sqrt{ax^2+px+q}) = \frac{b-p}{2\sqrt{a}}$.
   - Asimtot datar dan asimtot tegak fungsi aljabar/trigonometri.
2. **Turunan Fungsi Trigonometri dan Aplikasinya**
   - Rumus dasar: $\frac{d}{dx}(\sin x) = \cos x$, $\frac{d}{dx}(\cos x) = -\sin x$, $\frac{d}{dx}(\tan x) = \sec^2 x$, $\frac{d}{dx}(\cot x) = -\csc^2 x$, $\frac{d}{dx}(\sec x) = \sec x \tan x$, $\frac{d}{dx}(\csc x) = -\csc x \cot x$.
   - Aturan rantai pada fungsi trigonometri $f(x) = \sin^n(g(x))$.
   - Aplikasi turunan trigonometri: gradien dan persamaan garis singgung/normal, selang kemonotonan (naik/turun), nilai maksimum/minimum, titik belok dan kecekungan kurva ($f''(x)$).
3. **Integral Tentu, Teknik Integral, dan Aplikasi Integral**
   - **Integral Tentu:** $\int_a^b f(x)\,dx = [F(x)]_a^b = F(b) - F(a)$.
   - **Integral Fungsi Trigonometri**, **Teknik Substitusi**, dan **Integral Parsial** ($\int u\,dv = uv - \int v\,du$).
   - **Luas Daerah** yang dibatasi kurva dan sumbu koordinat atau antara dua kurva: $L = \int_a^b (f(x) - g(x))\,dx$.
   - **Volume Benda Putar** mengelilingi sumbu-$x$ atau sumbu-$y$: $V = \pi \int_a^b (f^2(x) - g^2(x))\,dx$.
4. **Distribusi Peluang Binomial dan Distribusi Normal (Statistika Inferensial)**
   - Variabel acak diskrit dan fungsi distribusi peluang.
   - **Distribusi Binomial (Bernoulli):** $P(X = x) = \binom{n}{x} p^x q^{n-x}$ dengan $q = 1 - p$, rata-rata $\mu = np$, dan simpangan baku $\sigma = \sqrt{npq}$.
   - Variabel acak kontinu dan **Distribusi Normal Baku ($Z$):** transformasi $Z = \frac{X - \mu}{\sigma}$ serta penggunaan tabel distribusi normal $Z$.
