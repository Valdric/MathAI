import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {
  Copy,
  Download,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import type { ICurriculumTopicDetail } from '../../../data/curriculumData';

interface IVerifiedMaterialCardProps {
  data: ICurriculumTopicDetail;
  grade?: string | null;
}

type TabType = 'all' | 'concept' | 'formulas' | 'example';

export const VerifiedMaterialCard: React.FC<IVerifiedMaterialCardProps> = ({ data, grade }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExampleOpen, setIsExampleOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCopyFormulas = () => {
    const textToCopy = data.formulas
      .map((f) => `${f.name}:\n${f.formula}\n(${f.description})`)
      .join('\n\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm transition-all duration-200 overflow-hidden mb-6">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 border-b border-slate-100 dark:border-slate-800/80 gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              MATERI TERVERIFIKASI • {data.curriculumType}
            </span>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            {data.title} {grade ? `(${grade})` : ''}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            {data.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center flex-wrap gap-2 shrink-0">
          <button
            onClick={handleCopyFormulas}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all"
            title="Salin semua rumus ke clipboard"
          >
            <Copy size={13} className="text-slate-500" />
            <span>{copied ? 'Tersalin!' : 'Salin Rumus'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all"
            title="Cetak atau unduh halaman materi"
          >
            <Download size={13} className="text-slate-500" />
            <span>Unduh PDF</span>
          </button>

          <button
            onClick={() => setIsCompleted(!isCompleted)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isCompleted
                ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                : 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50'
            }`}
          >
            <CheckCircle2 size={13} />
            <span>{isCompleted ? 'Tuntas Dipelajari' : 'Tandai Selesai'}</span>
          </button>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-1"
            title={isCollapsed ? 'Buka Rincian Materi' : 'Tutup Rincian Materi'}
            aria-label="Toggle ringkasan materi"
          >
            {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </button>
        </div>
      </div>

      {/* Sub-Tabs Switcher */}
      {!isCollapsed && (
        <div className="flex items-center gap-1 px-4 md:px-5 pt-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/80 overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-1.5 shrink-0 ${
              activeTab === 'all'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <span>📑</span>
            <span>Materi Lengkap</span>
          </button>

          <button
            onClick={() => setActiveTab('concept')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-1.5 shrink-0 ${
              activeTab === 'concept'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <Lightbulb size={13} />
            <span>Konsep & Definisi</span>
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-1.5 shrink-0 ${
              activeTab === 'formulas'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <span>📐</span>
            <span>Rumus Inti ({data.formulas.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('example')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-lg transition-all border-b-2 flex items-center gap-1.5 shrink-0 ${
              activeTab === 'example'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <span>✍️</span>
            <span>Contoh Soal</span>
          </button>
        </div>
      )}

      {/* Collapsible Content */}
      {!isCollapsed && (
        <div className="p-4 md:p-5 flex flex-col gap-5 bg-slate-50/40 dark:bg-slate-900/40">
          {/* Section 1: Konsep & Pemahaman Inti */}
          {(activeTab === 'all' || activeTab === 'concept') && (
            <div className="flex flex-col gap-3.5 p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <BookOpen size={16} />
                </span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  Pemahaman Konsep & Karakteristik Materi
                </h3>
              </div>

              {/* Narasi Ringkasan Konsep */}
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {data.conceptSummary}
              </p>

              {/* Dua Kolom: Poin Kunci & Tips Ujian */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {/* Kolom Kiri: Poin Kunci & Karakteristik */}
                <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    Poin Kunci & Karakteristik
                  </span>
                  <ul className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {data.keyPoints?.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kolom Kanan: Tips Ujian & Jebakan Soal */}
                <div className="flex flex-col gap-2 p-3.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle size={13} className="text-amber-600 dark:text-amber-400" />
                    Tips Ujian & Jebakan Soal
                  </span>
                  <p className="text-xs text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                    {data.examTips}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Formula Cards Grid */}
          {(activeTab === 'all' || activeTab === 'formulas') && (
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span>📐</span> Rumus Inti Terverifikasi
                </span>
                <span className="text-[11px] text-slate-400">
                  {data.formulas.length} Rumus Standar
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {data.formulas.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {item.name}
                        </span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          {item.badge}
                        </span>
                      </div>
                      <div className="py-2.5 text-center text-slate-900 dark:text-slate-100 overflow-x-auto select-all">
                        <ReactMarkdown
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                        >
                          {`$$${item.formula}$$`}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug border-t border-slate-100 dark:border-slate-800 pt-2 mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Interactive Example Walkthrough */}
          {(activeTab === 'all' || activeTab === 'example') && data.example && (
            <div className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10 p-4 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase shadow-2xs">
                    CONTOH SOAL PEMBAHASAN
                  </span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 hidden sm:inline">
                    {data.example.title}
                  </span>
                </div>
                <button
                  onClick={() => setIsExampleOpen(!isExampleOpen)}
                  className="text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{isExampleOpen ? 'Tutup Langkah Detail' : 'Buka Langkah Detail'}</span>
                  {isExampleOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {data.example.problem}
              </p>

              {isExampleOpen && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2 border-t border-emerald-200/60 dark:border-emerald-900/40">
                  {/* Substitusi Rumus (Kiri) */}
                  <div className="md:col-span-2 p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2 shadow-2xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      SUBSTITUSI RUMUS
                    </span>
                    <div className="flex flex-col gap-1.5 text-xs md:text-sm text-slate-800 dark:text-slate-200 overflow-x-auto">
                      {data.example.substitutions.map((sub, sIdx) => (
                        <div key={sIdx} className="font-mono text-slate-700 dark:text-slate-300">
                          <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                          >
                            {sub.includes('\\') || sub.includes('^') || sub.includes('_')
                              ? `$$${sub}$$`
                              : sub}
                          </ReactMarkdown>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hasil Akhir Terverifikasi (Kanan) */}
                  <div className="p-4 rounded-lg bg-emerald-100/40 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-800 flex flex-col items-center justify-center text-center gap-1.5 shadow-2xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      HASIL AKHIR TERVERIFIKASI
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
                      {data.example.finalResult}
                    </span>
                    <span className="text-[11px] text-emerald-800 dark:text-emerald-300 font-medium">
                      {data.example.resultNote}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
