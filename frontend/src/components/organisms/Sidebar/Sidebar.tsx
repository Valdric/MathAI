import React from 'react';
import { Plus, Trash2, X, MessageSquare, Home, Sparkles } from 'lucide-react';
import { useChatStore } from '../../../store/chatStore';
import { Button } from '../../atoms/Button';
import { SearchBar } from '../../molecules/SearchBar';

export const Sidebar: React.FC = () => {
  const {
    chats,
    activeChatId,
    searchQuery,
    isSidebarOpen,
    createNewChat,
    selectChat,
    deleteChat,
    setSearchQuery,
    toggleSidebar,
  } = useChatStore();

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      className={`fixed inset-y-0 left-0 h-full z-40 flex flex-col w-64 bg-white border-r border-slate-200 dark:bg-slate-950 dark:border-slate-800/80 backdrop-blur-2xl transform md:relative transition-all duration-300 ease-in-out shadow-sm ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      {/* Top Action Button */}
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

      {/* Search Input */}
      <div className="px-3.5 pb-2 shrink-0">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Chat History List */}
      <div className="flex flex-col flex-1 min-h-0 px-2 py-3 overflow-hidden">
        <span className="px-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 select-none">
          RIWAYAT OBROLAN
        </span>
        <div className="flex-1 overflow-y-auto px-1 space-y-1">
          {filteredChats.length === 0 ? (
            <p className="px-3 py-6 text-center text-xs text-slate-400 italic select-none">
              Belum ada riwayat obrolan
            </p>
          ) : (
            filteredChats.map((chat) => {
              const isActive = chat.id === activeChatId;
              return (
                <div
                  key={chat.id}
                  onClick={() => selectChat(chat.id)}
                  className={`group relative flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer select-none transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800 font-semibold shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <MessageSquare
                    size={15}
                    className={`shrink-0 ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600'
                    }`}
                  />
                  <span className="flex-1 text-xs md:text-sm truncate pr-5">{chat.title}</span>
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

      {/* Footer: Kembali ke Beranda */}
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
