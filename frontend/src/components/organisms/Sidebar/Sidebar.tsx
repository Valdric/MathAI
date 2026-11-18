import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  X,
  MessageSquare,
  Home,
  Sparkles,
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
    'Statistika',
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
    createNewChat,
    selectChat,
    deleteChat,
    setCurriculum,
    setSearchQuery,
    toggleSidebar,
  } = useChatStore();

  const [openGrade, setOpenGrade] = useState<string | null>(null);

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
      className={`fixed inset-y-0 left-0 h-full z-40 flex flex-col w-72 bg-white border-r border-slate-200 dark:bg-slate-950 dark:border-slate-800/80 backdrop-blur-2xl transform md:relative transition-all duration-300 ease-in-out shadow-sm ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      {/* 1. Tombol Chat Baru */}
      <div className="flex items-center justify-between p-3.5 shrink-0">
        <Button
          onClick={createNewChat}
          variant="primary"
          className="w-full justify-center py-2.5 px-4 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 shadow-sm gap-2"
        >
          <Plus size={16} />
          <Sparkles size={14} className="text-emerald-200" />
          <span>Chat Baru</span>
        </Button>
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-800 dark:hover:text-slate-100 md:hidden ml-2"
          aria-label="Tutup sidebar"
        >
          <X size={20} />
        </button>
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
                        <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 truncate max-w-[100px]">
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
                    <div className="flex flex-col gap-0.5 p-1.5 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 max-h-48 overflow-y-auto animate-fade-in">
                      {topics.map((topic) => {
                        const isTopicActive =
                          activeChat?.grade === grade && activeChat?.subject === topic;

                        return (
                          <button
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
                  onClick={() => selectChat(chat.id)}
                  className={`group relative flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer select-none transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200/90 dark:border-slate-800 font-semibold shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <MessageSquare
                    size={14}
                    className={`shrink-0 ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600'
                    }`}
                  />
                  <span className="flex-1 text-xs truncate pr-5">{chat.title}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(chat.id);
                    }}
                    className="absolute right-2 opacity-60 md:opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-all"
                    title="Hapus Chat"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 6. Footer: Kembali ke Beranda */}
      <div className="p-3 border-t border-slate-100 dark:border-slate-800/80 shrink-0">
        <button
          onClick={createNewChat}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200 transition-all select-none"
        >
          <Home size={15} className="text-slate-400" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>
    </aside>
  );
};
