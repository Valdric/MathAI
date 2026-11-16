import React, { useState, useEffect } from 'react';
import { useChatStore } from '../../../store/chatStore';
import { OptionCard } from '../../molecules/OptionCard';
import { Button } from '../../atoms/Button';
import { Sparkles } from 'lucide-react';
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
  const [selectedGrade, setSelectedGrade] = useState<string | null>('Kelas 10');
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
          'Kelas 10': [...mapGrade('10', 'Kelas 10'), ...extra.filter((b: string) => !mapGrade('10', 'Kelas 10').includes(b))],
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
    : DEFAULT_TOPICS_BY_GRADE['Kelas 10'];

  const handleGradeSelect = (grade: string) => {
    setSelectedGrade(grade);
    setSelectedSubject(null);
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
    <div className={"flex-1 flex items-center justify-center p-4 md:p-8 overflow-y-auto w-full h-full relative z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"}>
      <div className={"w-full max-w-2xl bg-white/50 dark:bg-slate-900/50 border border-white/40 dark:border-slate-700/50 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-2xl transition-colors duration-300"}>
        <div className={"flex flex-col items-center text-center mb-6 select-none"}>
          <div className={"flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-600/20 mb-4"}>
            <Sparkles className={"text-white"} size={24} />
          </div>
          <h1 className={"text-xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2"}>Selamat Datang di MathAI</h1>
          <p className={"text-xs md:text-base text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed"}>
            Tutor virtual AI yang siap membantu belajarmu. Pilih kelas dan bab sesuai materi Kurikulum Merdeka &amp; m4th-lab.net, atau langsung mengobrol sekarang.
          </p>
        </div>

        <div className={"space-y-6 mb-8"}>
          {/* Grade Selector */}
          <div className={"flex flex-col gap-3"}>
            <span className={"text-xs font-semibold text-slate-500 uppercase tracking-wider select-none"}>1. Pilih Kelas SMA</span>
            <div className={"grid grid-cols-3 gap-3"}>
              {GRADES.map((grade) => (
                <OptionCard
                  key={grade}
                  label={grade}
                  selected={selectedGrade === grade}
                  onClick={() => handleGradeSelect(grade)}
                />
              ))}
            </div>
          </div>

          {/* Subject Selector (Sinkron dengan Bab per Kelas) */}
          <div className={"flex flex-col gap-3"}>
            <span className={"text-xs font-semibold text-slate-500 uppercase tracking-wider select-none"}>
              2. Pilih Bab / Topik Materi ({selectedGrade || 'Semua Kelas'})
            </span>
            <div className={"grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto pr-1"}>
              {currentSubjects.map((subject) => (
                <OptionCard
                  key={subject}
                  label={subject}
                  selected={selectedSubject === subject}
                  onClick={() => setSelectedSubject(subject)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={"flex flex-col sm:flex-row gap-3 items-center justify-center"}>
          <Button
            onClick={handleStartConfigured}
            disabled={!isFormValid}
            variant="primary"
            className={"w-full sm:w-auto px-8 py-3 text-base"}
          >
            Mulai Belajar
          </Button>
          <Button
            onClick={handleStartDirect}
            variant="flat"
            className={"w-full sm:w-auto px-6 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm"}
          >
            Langsung Tanya AI
          </Button>
        </div>
      </div>
    </div>
  );
};
