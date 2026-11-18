import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Plus,
  Trash2,
  MessageSquare,
  ChevronDown,
  GraduationCap,
  BookOpen,
} from 'lucide-react';
import { useChatStore } from '../../../store/chatStore';
import { Button } from '../../atoms/Button';
import { SearchBar } from '../../molecules/SearchBar';

const GRADES = ['Kelas 10', 'Kelas 11', 'Kelas 12'];

const TOPICS_BY_GRADE: Record<string, string[]> = {
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

export const Sidebar: React.FC = () => {
  const {
    chats,
    activeChatId,
    searchQuery,
    isSidebarOpen,
    isFocusMode,
    createNewChat,
    selectChat,
    deleteChat,
    setCurriculum,
    setSearchQuery,
  } = useChatStore();

  const [openGrade, setOpenGrade] = useState<string | null>(null);
  const [chatToDelete, setChatToDelete] = useState<{ id: string; title: string } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!chatToDelete) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isDeleting) {
        setChatToDelete(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [chatToDelete, isDeleting]);

  const activeChat = chats.find((c) => c.id === activeChatId);

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectTopic = async (grade: string, topic: string) => {
    if (activeChatId) {
      const current = chats.find((c) => c.id === activeChatId);
      // Jika chat saat ini masih kosong, perbarui materi kurikulumnya langsung
      if (current && current.messages.length === 0) {
        await setCurriculum(activeChatId, grade, topic);
        return;
      }
    }
    // Jika chat saat ini sudah ada pesan atau belum ada chat, buat sesi baru
    await createNewChat();
    const newActiveId = useChatStore.getState().activeChatId;
    if (newActiveId) {
      await setCurriculum(newActiveId, grade, topic);
    }
  };

  return (
    <aside
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      className={`fixed md:relative inset-y-0 left-0 h-full z-40 flex flex-col bg-white dark:bg-slate-950 backdrop-blur-2xl overflow-hidden transition-[width,transform,opacity] duration-300 ease-in-out shadow-sm shrink-0 select-none ${
        isFocusMode
          ? 'w-0 -translate-x-full md:-translate-x-full opacity-0 pointer-events-none border-r-0'
          : isSidebarOpen
          ? 'w-72 translate-x-0 opacity-100 border-r border-slate-200 dark:border-slate-800/80'
          : 'w-0 -translate-x-full md:-translate-x-full opacity-0 pointer-events-none border-r-0'
      }`}
    >
      <div className="w-72 h-full flex flex-col shrink-0">
        {/* 1. Tombol Chat Baru */}
        <div className="p-3.5 shrink-0">
          <Button
            type="button"
            onClick={createNewChat}
            variant="primary"
            className="w-full justify-center py-2.5 px-4 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 shadow-sm gap-2"
          >
            <Plus size={16} />
            <span>Chat Baru</span>
          </Button>
        </div>

      {/* 2. Search Bar */}
      <div className="px-3.5 pb-2 shrink-0">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Scrollable Container for Menu Materi & Riwayat Chat */}
      <div className="flex-1 overflow-y-auto px-2 py-1 flex flex-col">
        {/* ========================================================= */}
        {/* 3. MENU DROPDOWN MATERI KELAS                             */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-1.5 px-1.5 mb-2.5">
          <div className="flex items-center justify-between px-1.5 mb-0.5 select-none">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap size={14} className="text-emerald-600 dark:text-emerald-400" />
              PILIH MATERI KELAS
            </span>
          </div>

          {/* 3 Kelas dengan Dropdown Masing-Masing */}
          <div className="flex flex-col gap-1.5">
            {GRADES.map((grade) => {
              const isOpen = openGrade === grade;
              const topics = TOPICS_BY_GRADE[grade] || [];
              const hasActiveTopicInGrade =
                activeChat?.grade === grade && activeChat?.subject;

              return (
                <div
                  key={grade}
                  className="flex flex-col rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  {/* Tombol Dropdown Kelas */}
                  <button
                    type="button"
                    onClick={() => setOpenGrade(isOpen ? null : grade)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition-colors select-none ${
                      isOpen
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          hasActiveTopicInGrade
                            ? 'bg-emerald-500 ring-2 ring-emerald-300 dark:ring-emerald-700'
                            : 'bg-slate-300 dark:bg-slate-600'
                        }`}
                      />
                      <span className="shrink-0">{grade}</span>
                      {hasActiveTopicInGrade && (
                        <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 truncate max-w-25">
                          • {activeChat.subject}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
                      <span className="text-[10px] font-medium text-slate-400">
                        {topics.length} Bab
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-emerald-600 dark:text-emerald-400' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Isi Dropdown: Daftar Materi Kelas Tersebut */}
                  {isOpen && (
                    <div className="flex flex-col gap-0.5 p-1.5 pr-1 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 max-h-48 overflow-y-auto animate-fade-in">
                      {topics.map((topic) => {
                        const isTopicActive =
                          activeChat?.grade === grade && activeChat?.subject === topic;

                        return (
                          <button
                            type="button"
                            key={topic}
                            onClick={() => handleSelectTopic(grade, topic)}
                            className={`w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-all select-none ${
                              isTopicActive
                                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border-l-2 border-emerald-600'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                            title={`Pilih materi: ${topic}`}
                          >
                            <BookOpen
                              size={12}
                              className={`shrink-0 ${
                                isTopicActive ? 'text-emerald-600' : 'text-slate-400'
                              }`}
                            />
                            <span className="truncate">{topic}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. PEMBATAS JELAS (DIVIDER)                               */}
        {/* ========================================================= */}
        <div className="border-t border-slate-200/90 dark:border-slate-800/90 my-2 pt-2 px-1 select-none">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare size={13} className="text-slate-400" />
              RIWAYAT OBROLAN
            </span>
            <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-full">
              {filteredChats.length}
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. DAFTAR RIWAYAT CHAT                                    */}
        {/* ========================================================= */}
        <div className="flex-1 space-y-1 px-1">
          {filteredChats.length === 0 ? (
            <p className="px-3 py-4 text-center text-xs text-slate-400 italic select-none">
              Belum ada riwayat obrolan
            </p>
          ) : (
            filteredChats.map((chat) => {
              const isActive = chat.id === activeChatId;
              return (
                <div
                  key={chat.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => selectChat(chat.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      selectChat(chat.id);
                    }
                  }}
                  className={`group relative flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer select-none transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-950 dark:text-emerald-100 border border-emerald-500/30 dark:border-emerald-500/30 font-semibold shadow-2xs before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:rounded-r-full before:bg-emerald-600 dark:before:bg-emerald-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <MessageSquare
                    size={14}
                    className={`shrink-0 transition-colors ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600'
                    }`}
                  />
                  <span className="flex-1 text-xs truncate pr-6">{chat.title}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setChatToDelete({ id: chat.id, title: chat.title });
                    }}
                    className={`absolute right-2 p-1 rounded-md transition-all ${
                      isActive
                        ? 'text-emerald-700/60 dark:text-emerald-400/60 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 opacity-80 group-hover:opacity-100'
                        : 'text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-200 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100'
                    }`}
                    title="Hapus Chat"
                    aria-label="Hapus Chat"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
      </div>

      {/* Modal Dialog Konfirmasi Hapus Obrolan (Portal ke document.body agar di tengah layar penuh) */}
      {chatToDelete &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 dark:bg-slate-950/70 backdrop-blur-xs animate-fade-in"
            onClick={() => !isDeleting && setChatToDelete(null)}
          >
            <div
              className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-2xl flex flex-col gap-4 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <Trash2 size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Hapus Riwayat Obrolan?
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Sesi obrolan <span className="font-semibold text-slate-700 dark:text-slate-200">"{chatToDelete.title}"</span> akan dihapus permanen dan tidak dapat dikembalikan lagi.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setChatToDelete(null)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={async () => {
                    setIsDeleting(true);
                    try {
                      await deleteChat(chatToDelete.id);
                    } finally {
                      setIsDeleting(false);
                      setChatToDelete(null);
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-700 text-white shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-60"
                >
                  {isDeleting ? 'Menghapus...' : 'Ya, Hapus'}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </aside>
  );
};
