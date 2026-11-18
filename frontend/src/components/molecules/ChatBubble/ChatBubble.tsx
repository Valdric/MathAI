import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import { CheckCheck, CheckCircle2, BookOpen, Search, HelpCircle } from 'lucide-react';
import type { IMessage } from '../../../types/chat';
import { Skeleton } from '../../../components/atoms/Skeleton';
import { Spinner } from '../../../components/atoms/Spinner';

export interface IChatBubbleProps {
  message?: IMessage;
  isLoading?: boolean;
  userName?: string;
  onSelectPrompt?: (prompt: string) => void;
  isLastAiMessage?: boolean;
}

const preprocessLaTeX = (text: string) => {
  let processedText = text.replace(/\\\[/g, '$$');
  processedText = processedText.replace(/\\\]/g, '$$');
  processedText = processedText.replace(/\\\(/g, '$');
  processedText = processedText.replace(/\\\)/g, '$');
  return processedText;
};

export const ChatBubble: React.FC<IChatBubbleProps> = ({
  message,
  isLoading = false,
  userName = 'Siswa',
  onSelectPrompt,
  isLastAiMessage = false,
}) => {
  if (isLoading) {
    return (
      <div className="flex gap-3.5 w-full max-w-3xl mr-auto p-4 md:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 shadow-2xs transition-all my-2">
        <div className="shrink-0">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
            AI
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full overflow-hidden">
          <div className="flex items-center gap-2 select-none">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
              MathAI Tutor
              <CheckCircle2 size={13} className="text-emerald-500 fill-emerald-500/20" />
            </span>
            <span className="text-[11px] text-slate-400">sedang menganalisis &amp; merumuskan langkah...</span>
          </div>
          <div className="flex flex-col gap-2 max-w-md py-1">
            <Skeleton width="95%" height="14px" />
            <Skeleton width="80%" height="14px" />
            <Skeleton width="60%" height="14px" />
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-emerald-600 dark:text-emerald-400 select-none font-medium">
            <Spinner size="sm" />
            <span>Menghitung jawaban terverifikasi...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!message) return null;

  const isUser = message.sender === 'user';
  const timeStr = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Parse [attachment: <filename>] prefix jika pesan memiliki lampiran dokumen
  let attachmentName: string | null = null;
  let userText = message.text;
  if (isUser) {
    const match = message.text.match(/^\[attachment:\s*([^\]]+)\]\n?([\s\S]*)$/);
    if (match) {
      attachmentName = match[1].trim();
      userText = match[2];
    }
  }

  const fileExt = attachmentName ? attachmentName.split('.').pop()?.toLowerCase() : null;

  if (isUser) {
    return (
      <div className="flex flex-col items-end w-full my-2.5">
        <div className="flex items-center gap-2 mb-1 select-none text-right">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {userName}
          </span>
          <span className="text-[10px] text-slate-400">{timeStr} WIB</span>
          <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
            {userName.slice(0, 2).toUpperCase()}
          </div>
        </div>

        <div className="max-w-[85%] md:max-w-2xl p-4 rounded-2xl rounded-tr-xs bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100/90 dark:border-indigo-900/50 text-slate-800 dark:text-slate-100 shadow-2xs text-sm md:text-base leading-relaxed wrap-break-word">
          {attachmentName && (
            <div className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 mb-2.5 shadow-xs">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs uppercase ${
                  fileExt === 'pdf'
                    ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/40'
                    : fileExt === 'docx'
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40'
                    : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/40'
                }`}
              >
                {fileExt?.toUpperCase() || 'FILE'}
              </div>
              <div className="flex flex-col min-w-0 flex-1 text-left">
                <span className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-100 truncate" title={attachmentName}>
                  {attachmentName}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                  Dokumen Terlampir
                </span>
              </div>
            </div>
          )}
          <p className="whitespace-pre-wrap">{userText}</p>
        </div>

        <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-400 dark:text-slate-500 select-none">
          <CheckCheck size={13} className="text-emerald-500" />
          <span>Terkirim &amp; Diterima</span>
        </div>
      </div>
    );
  }

  // AI Response Bubble
  return (
    <div className="flex flex-col items-start w-full my-2.5">
      <div className="flex items-center gap-2 mb-1.5 select-none">
        <div className="w-7 h-7 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
          AI
        </div>
        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
          MathAI Tutor
          <CheckCircle2 size={13} className="text-emerald-500 fill-emerald-500/20" />
        </span>
        <span className="text-[10px] text-slate-400">{timeStr} WIB</span>
      </div>

      <div className="w-full max-w-3xl p-5 md:p-6 rounded-2xl rounded-tl-xs bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-xs text-sm md:text-base leading-relaxed wrap-break-word">
        <div className="prose dark:prose-invert max-w-none prose-p:my-2 prose-headings:my-3">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {preprocessLaTeX(message.text)}
          </ReactMarkdown>
        </div>

        {/* Follow-up suggestions footer (only on the last AI message) */}
        {isLastAiMessage && onSelectPrompt && (
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <HelpCircle size={11} className="text-emerald-500" />
              LANGKAH PEMBAHASAN SELANJUTNYA
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onSelectPrompt('Bahas contoh soal serupa dengan angka yang berbeda')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all cursor-pointer"
              >
                <Search size={12} className="text-emerald-600" />
                <span>Bahas Soal Serupa</span>
              </button>
              <button
                onClick={() => onSelectPrompt('Tuliskan rumus alternatif dan cara cepatnya')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all cursor-pointer"
              >
                <BookOpen size={12} className="text-emerald-600" />
                <span>Rumus Cepat Alternatif</span>
              </button>
              <button
                onClick={() => onSelectPrompt('Berikan latihan soal mandiri tingkat UTBK')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all cursor-pointer"
              >
                <CheckCheck size={12} className="text-emerald-600" />
                <span>Latihan Soal UTBK</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
