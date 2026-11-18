import React, { useState, useEffect } from 'react';
import { useChatStore } from '../../../store/chatStore';
import { Button } from '../../atoms/Button';
import { BookOpen } from 'lucide-react';
import { API_URL } from '../../../config';

const GRADES = ['Kelas 10', 'Kelas 11', 'Kelas 12'];

// Daftar bab resmi yang disinkronkan dengan backend/knowledge_base & sma_m4thlab_curriculum.md
const DEFAULT_TOPICS_BY_GRADE: Record<string, string[]> = {
  'Kelas 10': [
    'Eksponen dan Logaritma',
    'Barisan dan Deret',
    'Vektor dan Operasinya',
    'Trigonometri',
    'Sistem Persamaan dan Pertidaksamaan Linear',
    'Persamaan, Fungsi, dan Pertidaksamaan Kuadrat',
    'Statistika',
    'Peluang',
    'Persamaan dan Pertidaksamaan Nilai Mutlak',
    'Logika Matematika',
  ],
  'Kelas 11': [
    'Komposisi Fungsi dan Fungsi Invers',
    'Lingkaran',
    'Statistika: Analisis Data Bivariat',
    'Induksi Matematika',
    'Polinomial',
    'Matriks',
    'Transformasi Geometri',
    'Fungsi dan Pemodelannya',
  ],
  'Kelas 12': [
    'Transformasi Fungsi',
    'Investasi dan Pinjaman',
    'Kombinatorik dan Peluang',
    'Dimensi Tiga',
    'Kekongruenan dan Kesebangunan',
    'Geometri Analitik',
    'Limit',
    'Turunan Fungsi',
    'Integral',
    'Analisis Data dan Peluang',
  ],
};

export const WelcomeForm: React.FC = () => {
  const { activeChatId, setCurriculum } = useChatStore();
  // Mulai dengan null agar awalnya hanya menampilkan pilihan kelas, tanpa list materi panjang
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [topicsByGrade, setTopicsByGrade] = useState<Record<string, string[]>>(DEFAULT_TOPICS_BY_GRADE);

  useEffect(() => {
    // Sinkronisasi daftar bab per kelas secara dinamis dari indeks ChromaDB (/api/knowledge/topics)
    fetch(`${API_URL}/api/knowledge/topics`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data?.topics) return;
        const t = data.topics;
        const extra = (t['Tambahan'] || []).map((item: any) => item.bab).filter(Boolean);
        const mapGrade = (key: string, fallbackKey: string) => {
          const list = (t[key] || []).map((item: any) => item.bab).filter(Boolean);
          return list.length > 0 ? list : DEFAULT_TOPICS_BY_GRADE[fallbackKey];
        };
        setTopicsByGrade({
          'Kelas 10': [
            ...mapGrade('10', 'Kelas 10'),
            ...extra.filter((b: string) => !mapGrade('10', 'Kelas 10').includes(b)),
          ],
          'Kelas 11': mapGrade('11', 'Kelas 11'),
          'Kelas 12': mapGrade('12', 'Kelas 12'),
        });
      })
      .catch(() => {
        // Tetap gunakan DEFAULT_TOPICS_BY_GRADE jika offline
      });
  }, []);

  if (!activeChatId) return null;

  const currentSubjects = selectedGrade
    ? topicsByGrade[selectedGrade] || DEFAULT_TOPICS_BY_GRADE[selectedGrade] || []
    : [];

  const handleGradeSelect = (grade: string) => {
    if (selectedGrade === grade) {
      // Toggle tutup jika kelas yang sama diklik kembali
      setSelectedGrade(null);
      setSelectedSubject(null);
    } else {
      setSelectedGrade(grade);
      setSelectedSubject(null);
    }
  };

  const handleStartConfigured = () => {
    if (selectedGrade && selectedSubject) {
      setCurriculum(activeChatId, selectedGrade, selectedSubject);
    }
  };

  const handleStartDirect = () => {
    setCurriculum(activeChatId, '', '');
  };

  const isFormValid = selectedGrade !== null && selectedSubject !== null;

  return (
    <div className="flex-1 overflow-y-auto w-full h-full relative z-10 bg-slate-100/60 dark:bg-slate-950 p-4 md:p-8 flex flex-col items-center">
      {/* Floating Card Modal di Tengah Layar */}
      <div className="w-full max-w-xl my-auto bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-300">
        {/* Judul Sambutan */}
        <div className="flex flex-col items-center text-center mb-6 select-none">
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-1.5 tracking-tight">
            Selamat Datang di MathAI
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
            Tutor virtual AI untuk Matematika SMA. Silakan pilih kelas di bawah untuk melihat daftar materi pelajaran.
          </p>
        </div>

        <div className="space-y-5 mb-6">
          {/* Step 1: Pilihan Kelas */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider select-none">
              Pilih Kelas SMA
            </span>
            <div className="grid grid-cols-3 gap-3">
              {GRADES.map((grade) => {
                const isSelected = selectedGrade === grade;
                return (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => handleGradeSelect(grade)}
                    className={`flex flex-col items-center justify-center py-3 px-2 rounded-2xl border text-center transition-all duration-200 select-none cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm ring-2 ring-emerald-500/20'
                        : 'border-slate-200/90 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <span className="text-sm md:text-base font-bold">{grade}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                      Kurikulum Merdeka
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Muncul di bawahnya materi kelas saat kelas diklik */}
          {selectedGrade && (
            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider select-none">
                  Pilih Materi {selectedGrade}
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  {currentSubjects.length} Materi
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
                {currentSubjects.map((subject) => {
                  const isSubjectSelected = selectedSubject === subject;
                  return (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => setSelectedSubject(subject)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left text-xs md:text-sm transition-all duration-150 select-none cursor-pointer ${
                        isSubjectSelected
                          ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold shadow-2xs'
                          : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <BookOpen
                        size={13}
                        className={
                          isSubjectSelected
                            ? 'text-emerald-600 shrink-0'
                            : 'text-slate-400 shrink-0'
                        }
                      />
                      <span className="truncate">{subject}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-center pt-2 border-t border-slate-100 dark:border-slate-800">
          {selectedGrade && (
            <Button
              onClick={handleStartConfigured}
              disabled={!isFormValid}
              variant="primary"
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-bold bg-emerald-600 hover:bg-emerald-700"
            >
              Mulai Belajar {selectedSubject ? `• ${selectedSubject}` : ''}
            </Button>
          )}
          <Button
            onClick={handleStartDirect}
            variant="flat"
            className="w-full sm:w-auto px-4 py-2.5 text-xs md:text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Langsung Tanya AI (Tanpa Materi)
          </Button>
        </div>
      </div>
    </div>
  );
};
