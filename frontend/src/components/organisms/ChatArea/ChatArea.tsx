import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Menu, Send, BookOpen, MessageSquare, Paperclip, FileText, X, Loader2 } from 'lucide-react';
import { useChatStore } from '../../../store/chatStore';
import { useAuthStore } from '../../../store/authStore';
import { API_URL } from '../../../config';
import { ChatBubble } from '../../molecules/ChatBubble';
import { ProfileMenu } from '../../molecules/ProfileMenu';
import { WelcomeForm } from '../WelcomeForm';

interface IUploadedDoc {
  filename: string;
  chunks: number;
  kelas?: string | null;
  bab?: string | null;
}

export const ChatArea: React.FC = () => {
  const { chats, activeChatId, isLoading, sendMessage, toggleSidebar } = useChatStore();
  const token = useAuthStore((state) => state.token);
  const [inputText, setInputText] = useState('');
  const [uploadedDocs, setUploadedDocs] = useState<IUploadedDoc[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadNotice, setUploadNotice] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const activeChat = chats.find((c) => c.id === activeChatId);

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
      // Abaikan jika gagal memuat daftar dokumen awal
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

  // Auto-scroll to bottom
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

  const hasCurriculum = activeChat ? (activeChat.grade && activeChat.subject) : false;

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50/50 dark:bg-slate-950/20 overflow-hidden relative">
      {/* Header (Always Visible) */}
      <header className="relative z-30 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shrink-0 select-none shadow-sm">
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-700 dark:hover:text-slate-100 md:hidden"
            aria-label="Buka menu"
          >
            <Menu size={20} />
          </button>
          {activeChat ? (
            <div className="flex flex-col gap-1">
              <h2 className="text-sm md:text-lg font-bold text-slate-800 dark:text-slate-100 truncate max-w-45 sm:max-w-md">
                {activeChat.title}
              </h2>
              {hasCurriculum ? (
                <div className="flex items-center bg-emerald-600/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs px-2 py-0.5 rounded-full font-medium w-fit">
                  <BookOpen size={12} className="mr-1" />
                  <span>
                    {activeChat.subject} • {activeChat.grade}
                  </span>
                </div>
              ) : (
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs px-2 py-0.5 rounded-full font-medium w-fit">
                  <span>Obrolan Umum</span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <h2 className="text-sm md:text-lg font-bold text-slate-800 dark:text-slate-100">
                MathAI
              </h2>
            </div>
          )}
        </div>

        {/* Profile Menu Dropdown */}
        <div className="ml-auto pl-4">
          <ProfileMenu />
        </div>
      </header>

      {/* Main Content */}
      {!activeChatId || !activeChat ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 select-none">
          <MessageSquare size={48} className="text-slate-300 dark:text-slate-700 mb-4 animate-pulse" />
          <h2 className="text-base md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            Mulai Belajar Sekarang
          </h2>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Pilih salah satu riwayat obrolan di sidebar atau buat obrolan baru untuk mulai bertanya pada MathAI.
          </p>
        </div>
      ) : activeChat.grade === null && activeChat.subject === null ? (
        <WelcomeForm />
      ) : (
        <>
          <div className="flex-1 overflow-y-auto w-full py-4">
            {activeChat.messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-center h-full w-full select-none max-w-lg mx-auto">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100/30 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 mb-6">
                  <BookOpen size={32} className="text-emerald-500 dark:text-emerald-400" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {hasCurriculum
                    ? `Tanyakan materi ${activeChat.subject} ${activeChat.grade}`
                    : 'Tanyakan apa saja ke MathAI'}
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
                  Ketik pertanyaanmu di bawah ini, atau unggah dokumen materi (.pdf, .docx, .md, .txt) lewat ikon klip untuk dijadikan referensi RAG.
                </p>
              </div>
            ) : (
              activeChat.messages.map((msg) => <ChatBubble key={msg.id} message={msg} />)
            )}

            {/* Typing indicator */}
            {isLoading && <ChatBubble isLoading={true} />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <footer className="px-4 py-4 md:px-8 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/50 backdrop-blur-xl shrink-0 flex flex-col items-center gap-2">
            {/* Uploaded Documents & Upload Notice */}
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
                      aria-label="Tutup notifikasi"
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
                        className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-full shadow-xs"
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
                          title={`Hapus ${doc.filename} dari RAG`}
                          aria-label={`Hapus ${doc.filename}`}
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="w-full max-w-3xl flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all duration-200">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt,.md"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading || isLoading}
                title="Unggah dokumen materi (.pdf, .docx, .md, .txt) maksimal 10 MB"
                aria-label="Unggah dokumen PDF atau materi"
                className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-200/70 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-150 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? <Loader2 size={18} className="animate-spin text-emerald-600" /> : <Paperclip size={18} />}
              </button>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  hasCurriculum
                    ? `Tanya seputar ${activeChat.subject} ${activeChat.grade}...`
                    : 'Tanya apa saja ke MathAI...'
                }
                rows={1}
                disabled={isLoading}
                className="flex-1 bg-transparent border-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 px-2 py-2 outline-none resize-none text-sm md:text-base max-h-32"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-95 transition-all duration-150 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                aria-label="Kirim pesan"
              >
                <Send size={18} />
              </button>
            </div>
            <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-600 text-center select-none">
              MathAI dirancang untuk membantu murid SMA belajar. Unggah PDF/MD (maks 10 MB) untuk referensi tambahan.
            </span>
          </footer>
        </>
      )}
    </div>
  );
};
