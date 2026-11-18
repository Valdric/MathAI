import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Menu,
  Send,
  MessageSquare,
  FileText,
  X,
  Loader2,
  Share2,
  Maximize2,
  Minimize2,
  Calculator as CalcIcon,
  Sparkles,
  Camera,
  Sigma,
} from 'lucide-react';
import { useChatStore } from '../../../store/chatStore';
import { useAuthStore } from '../../../store/authStore';
import { API_URL } from '../../../config';
import { ChatBubble } from '../../molecules/ChatBubble';
import { ProfileMenu } from '../../molecules/ProfileMenu';
import { WelcomeForm } from '../WelcomeForm';
import { VerifiedMaterialCard } from '../VerifiedMaterialCard';
import { CalculatorModal } from '../CalculatorModal';
import { getTopicCurriculum } from '../../../data/curriculumData';

interface IUploadedDoc {
  filename: string;
  chunks: number;
  kelas?: string | null;
  bab?: string | null;
}

export const ChatArea: React.FC = () => {
  const { chats, activeChatId, isLoading, sendMessage, toggleSidebar } = useChatStore();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const [inputText, setInputText] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState<IUploadedDoc[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadNotice, setUploadNotice] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const activeChat = chats.find((c) => c.id === activeChatId);
  const hasCurriculum = Boolean(activeChat?.grade && activeChat?.subject);
  const topicData = activeChat?.subject
    ? getTopicCurriculum(activeChat.subject, activeChat.grade || undefined)
    : null;

  const fetchUploadedDocs = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_URL}/api/documents`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUploadedDocs(data.documents || []);
      }
    } catch {
      // Abaikan jika gagal memuat dokumen awal
    }
  }, [token]);

  useEffect(() => {
    fetchUploadedDocs();
  }, [fetchUploadedDocs]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !token) return;

    setIsUploading(true);
    setUploadNotice(null);
    const formData = new FormData();
    formData.append('file', file);
    if (activeChat?.grade) formData.append('kelas', activeChat.grade);
    if (activeChat?.subject) formData.append('bab', activeChat.subject);

    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.detail || `Gagal mengunggah file (${res.status})`);
      }
      setUploadNotice({
        type: 'ok',
        text: data.message || `File ${file.name} berhasil diindeks ke RAG.`,
      });
      await fetchUploadedDocs();
    } catch (err: any) {
      setUploadNotice({
        type: 'err',
        text: err.message || 'Gagal mengunggah dokumen.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteDoc = async (filename: string) => {
    if (!token) return;
    try {
      const res = await fetch(`${API_URL}/api/documents/${encodeURIComponent(filename)}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setUploadedDocs((prev) => prev.filter((d) => d.filename !== filename));
        setUploadNotice({ type: 'ok', text: `Dokumen ${filename} dihapus dari RAG.` });
      }
    } catch {
      setUploadNotice({ type: 'err', text: `Gagal menghapus dokumen ${filename}.` });
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages, isLoading]);

  const handleSend = () => {
    const text = inputText.trim();
    if (!text || isLoading) return;
    sendMessage(text);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickChipClick = (chipText: string) => {
    const cleanPrompt = chipText.replace(/^#\s*[A-Z]+:\s*/, '');
    setInputText((prev) => (prev ? `${prev} ${cleanPrompt}` : cleanPrompt));
    textareaRef.current?.focus();
  };

  const handleInsertFormulaSymbol = () => {
    setInputText((prev) => `${prev} $f(x) = $ `);
    textareaRef.current?.focus();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  return (
    <div
      className={`flex-1 flex flex-col h-full bg-slate-50/60 dark:bg-slate-950/20 overflow-hidden relative transition-all ${
        isFocusMode ? 'max-w-5xl mx-auto w-full' : ''
      }`}
    >
      {/* Header Bar */}
      <header className="relative z-30 flex items-center justify-between px-4 md:px-6 py-3 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shrink-0 select-none shadow-2xs">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-700 dark:hover:text-slate-100 md:hidden"
            aria-label="Buka menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo & PRO Badge */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 dark:text-white">
              Math<span className="text-emerald-600">AI</span>
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-600 text-white tracking-wider">
              PRO
            </span>
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />

          {/* Breadcrumb Navigasi */}
          {activeChat && hasCurriculum ? (
            <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-500 dark:text-slate-400 truncate">
              <span className="hidden sm:inline">Matematika Wajib / Bab 1</span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
              <span className="font-bold text-slate-800 dark:text-slate-100 truncate">
                {activeChat.subject}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 shrink-0">
                {activeChat.grade}
              </span>
            </div>
          ) : (
            <span className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 truncate">
              {activeChat ? activeChat.title : 'Obrolan Baru'}
            </span>
          )}
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-1.5 md:gap-2 pl-2 shrink-0">
          {/* Toast Salin Link */}
          {shareToast && (
            <span className="hidden sm:inline text-xs text-emerald-600 dark:text-emerald-400 font-medium animate-fade-in mr-1">
              Tautan disalin!
            </span>
          )}

          <button
            onClick={handleShare}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium transition-all"
            title="Bagikan sesi pembahasan"
          >
            <Share2 size={13} className="text-slate-500" />
            <span>Bagikan</span>
          </button>

          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
              isFocusMode
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                : 'border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
            title="Mode Fokus (Memaksimalkan ruang baca)"
          >
            {isFocusMode ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            <span className="hidden md:inline">Mode Fokus</span>
          </button>

          <button
            onClick={() => setIsCalcOpen(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium transition-all"
            title="Buka kalkulator matematika"
          >
            <CalcIcon size={13} className="text-slate-500" />
            <span className="hidden md:inline">Kalkulator</span>
          </button>

          <ProfileMenu />
        </div>
      </header>

      {/* Main Content Area */}
      {!activeChatId || !activeChat ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 select-none">
          <MessageSquare size={48} className="text-slate-300 dark:text-slate-700 mb-4 animate-pulse" />
          <h2 className="text-base md:text-xl font-bold mb-2">Mulai Belajar Sekarang</h2>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Pilih salah satu riwayat obrolan di sidebar atau buat obrolan baru untuk mulai bertanya pada MathAI.
          </p>
        </div>
      ) : activeChat.grade === null && activeChat.subject === null ? (
        <WelcomeForm />
      ) : (
        <>
          <div className="flex-1 overflow-y-auto w-full px-4 md:px-8 py-5">
            <div className="max-w-4xl mx-auto flex flex-col">
              {/* TAHAP 3: Kartu Materi & Rumus Terverifikasi Muncul */}
              {topicData && (
                <VerifiedMaterialCard data={topicData} grade={activeChat.grade} />
              )}

              {/* TAHAP 4: Sesi Tanya Jawab (Chat Messages) */}
              {activeChat.messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-6 text-center my-4 bg-white/50 dark:bg-slate-900/40 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl select-none">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Materi di atas sudah siap! Sekarang giliranmu bertanya.
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                    Tanyakan rumus yang belum kamu pahami, minta penjelasan langkah demi langkah, atau ketik soal latihanmu di bawah.
                  </p>
                </div>
              ) : (
                activeChat.messages.map((msg, idx) => (
                  <ChatBubble
                    key={msg.id}
                    message={msg}
                    userName={user?.name || 'Siswa'}
                    onSelectPrompt={handleQuickChipClick}
                    isLastAiMessage={
                      msg.sender === 'bot' &&
                      idx ===
                        activeChat.messages
                          .map((m) => m.sender)
                          .lastIndexOf('bot')
                    }
                  />
                ))
              )}

              {/* Typing indicator */}
              {isLoading && <ChatBubble isLoading={true} />}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Section & Quick Suggestion Chips */}
          <footer className="px-4 py-3 md:px-8 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shrink-0 flex flex-col items-center gap-2.5">
            {/* Quick Suggestion Chips (Prompt Pills Sesuai Topik) */}
            {topicData?.quickChips && (
              <div className="w-full max-w-3xl flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none select-none">
                {topicData.quickChips.map((chip, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => handleQuickChipClick(chip)}
                    className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800/90 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all shadow-2xs"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* Uploaded Documents List */}
            {(uploadedDocs.length > 0 || uploadNotice) && (
              <div className="w-full max-w-3xl flex flex-col gap-1.5">
                {uploadNotice && (
                  <div
                    className={`flex items-center justify-between text-xs px-3 py-1.5 rounded-lg border ${
                      uploadNotice.type === 'ok'
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300'
                        : 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300'
                    }`}
                  >
                    <span className="truncate">{uploadNotice.text}</span>
                    <button
                      onClick={() => setUploadNotice(null)}
                      className="ml-2 p-0.5 hover:opacity-75 shrink-0"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}

                {uploadedDocs.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {uploadedDocs.map((doc) => (
                      <div
                        key={doc.filename}
                        className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-full shadow-2xs"
                        title={`Terindeks di ChromaDB (${doc.chunks} potongan teks)`}
                      >
                        <FileText size={12} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="truncate max-w-44 font-medium">{doc.filename}</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                          ({doc.chunks})
                        </span>
                        <button
                          onClick={() => handleDeleteDoc(doc.filename)}
                          className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors ml-0.5"
                          title={`Hapus ${doc.filename}`}
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Input Bar Form */}
            <div className="w-full max-w-3xl flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 shadow-xs transition-all duration-200">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt,.md,image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading || isLoading}
                title="Unggah dokumen materi (.pdf, .docx, .md, .txt) atau foto tabel soal"
                aria-label="Unggah file atau foto soal"
                className="flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shrink-0 disabled:opacity-50"
              >
                {isUploading ? (
                  <Loader2 size={18} className="animate-spin text-emerald-600" />
                ) : (
                  <Camera size={18} />
                )}
              </button>

              <button
                type="button"
                onClick={handleInsertFormulaSymbol}
                title="Sisipkan format rumus matematika LaTeX"
                aria-label="Sisipkan rumus"
                className="flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shrink-0"
              >
                <Sigma size={18} />
              </button>

              <textarea
                ref={textareaRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  activeChat?.subject
                    ? `Tanyakan soal tentang ${activeChat.subject}, masukkan tabel nilai, atau foto latihan...`
                    : 'Tanya apa saja seputar Matematika SMA ke MathAI...'
                }
                rows={1}
                disabled={isLoading}
                className="flex-1 bg-transparent border-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 px-2 py-1.5 outline-none resize-none text-sm md:text-base max-h-32"
              />

              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs md:text-sm shadow-sm active:scale-95 transition-all shrink-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
                aria-label="Kirim soal"
              >
                <span>Kirim Soal</span>
                <Send size={15} />
              </button>
            </div>

            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-600 text-center select-none">
              MathAI dirancang khusus silabus Kurikulum Merdeka &amp; m4th-lab.net. Jawaban diverifikasi step-by-step.
            </span>
          </footer>
        </>
      )}

      {/* Kalkulator Modal */}
      <CalculatorModal isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
    </div>
  );
};
