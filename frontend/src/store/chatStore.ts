import { create } from 'zustand';
import type { IChatSession, IMessage } from '../types/chat';
import { useAuthStore } from './authStore';
import {
  askQuestionApi,
  createChatApi,
  deleteAllChatsApi,
  deleteChatApi,
  getChatsApi,
  getMessagesApi,
  updateChatApi,
} from '../services/chat.service';

export interface IChatState {
  chats: IChatSession[];
  activeChatId: string | null;
  searchQuery: string;
  isSidebarOpen: boolean;
  isFocusMode: boolean;
  isSettingsOpen: boolean;
  isProfileOpen: boolean;
  isLoading: boolean;
  userId: string;
  theme: 'light' | 'dark';
  isAppLoading: boolean;

  initUserId: () => void;
  fetchChats: () => Promise<void>;
  fetchMessages: (chatId: string) => Promise<void>;
  createNewChat: () => Promise<void>;
  selectChat: (id: string) => void;
  deleteChat: (id: string) => Promise<void>;
  deleteAllChats: () => Promise<void>;
  setCurriculum: (id: string, grade: string | null, subject: string | null) => Promise<void>;
  sendMessage: (text: string, attachment?: string | null) => Promise<void>;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
  toggleFocusMode: () => void;
  toggleSettings: () => void;
  toggleProfile: () => void;
  clearAllData: () => void;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setAppLoading: (loading: boolean) => void;
}

export const useChatStore = create<IChatState>()((set, get) => ({
  chats: [],
  activeChatId: null,
  searchQuery: '',
  isSidebarOpen: typeof window !== 'undefined' ? window.innerWidth >= 768 : true,
  isFocusMode: false,
  isSettingsOpen: false,
  isProfileOpen: false,
  isLoading: false,
  userId: '',
  theme: 'light',
  isAppLoading: true,

  initUserId: () => {
    const manualTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const currentTheme = manualTheme || get().theme || 'light';
    get().setTheme(currentTheme);

    let storedId = localStorage.getItem('mathaiUserId');
    if (!storedId) {
      storedId =
        'user-' +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      localStorage.setItem('mathaiUserId', storedId);
    }
    set({ userId: storedId });

    // Coba load chats jika sudah login
    if (useAuthStore.getState().isAuthenticated) {
      get()
        .fetchChats()
        .finally(() => {
          set({ isAppLoading: false });
        });
    } else {
      setTimeout(() => {
        set({ isAppLoading: false });
      }, 600);
    }
  },

  fetchChats: async () => {
    try {
      const data = await getChatsApi();

      const formattedChats: IChatSession[] = data.map((c) => ({
        id: c.id,
        title: c.title,
        grade: c.grade,
        subject: c.subject,
        createdAt: c.created_at,
        messages: [], // Akan di-load nanti saat dipilih
      }));

      set({ chats: formattedChats });

      // Jika ada chat tapi tidak ada yang aktif, aktifkan yang pertama dan muat pesannya
      const currentActiveId = get().activeChatId;
      if (
        formattedChats.length > 0 &&
        (!currentActiveId || !formattedChats.find((c) => c.id === currentActiveId))
      ) {
        get().selectChat(formattedChats[0].id);
      }
    } catch (err) {
      console.error(err);
    }
  },

  fetchMessages: async (chatId: string) => {
    try {
      set({ isLoading: true });
      const data = await getMessagesApi(chatId);

      const messages: IMessage[] = data.map((m) => ({
        id: m.id.toString(),
        sender: m.sender === 'user' ? 'user' : 'bot',
        text: m.text,
        timestamp: m.timestamp,
      }));

      set((state) => ({
        chats: state.chats.map((c) => (c.id === chatId ? { ...c, messages } : c)),
        isLoading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ isLoading: false });
    }
  },

  createNewChat: async () => {
    try {
      const c = await createChatApi('Obrolan Baru');

      const newChat: IChatSession = {
        id: c.id,
        title: c.title,
        grade: c.grade,
        subject: c.subject,
        createdAt: c.created_at,
        messages: [],
      };

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      set((state) => ({
        chats: [newChat, ...state.chats],
        activeChatId: newChat.id,
        isSidebarOpen: isMobile ? false : state.isSidebarOpen,
      }));
    } catch (err) {
      console.error(err);
    }
  },

  selectChat: (id: string) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    set((state) => ({
      activeChatId: id,
      isSidebarOpen: isMobile ? false : state.isSidebarOpen,
    }));
    get().fetchMessages(id);
  },

  deleteChat: async (id: string) => {
    try {
      await deleteChatApi(id);

      set((state) => {
        const updatedChats = state.chats.filter((chat) => chat.id !== id);
        let nextActiveId = state.activeChatId;
        if (state.activeChatId === id) {
          nextActiveId = updatedChats.length > 0 ? updatedChats[0].id : null;
        }
        return {
          chats: updatedChats,
          activeChatId: nextActiveId,
        };
      });

      const nextActiveId = get().activeChatId;
      if (nextActiveId) {
        get().fetchMessages(nextActiveId);
      }
    } catch (err) {
      console.error(err);
    }
  },

  deleteAllChats: async () => {
    await deleteAllChatsApi();
    get().clearAllData();
  },

  setCurriculum: async (id: string, grade: string | null, subject: string | null) => {
    const chat = get().chats.find((c) => c.id === id);
    if (!chat) return;

    const title =
      chat.title === 'Obrolan Baru' && subject && grade
        ? `${subject} - ${grade}`
        : chat.title;

    // Optimistic update
    set((state) => ({
      chats: state.chats.map((c) => (c.id === id ? { ...c, grade, subject, title } : c)),
    }));

    try {
      await updateChatApi(id, { title, grade, subject });
    } catch (err) {
      console.error(err);
    }
  },

  sendMessage: async (text: string, attachment?: string | null) => {
    const { activeChatId, chats, isLoading } = get();
    if (!activeChatId || isLoading) return;

    const activeChat = chats.find((c) => c.id === activeChatId);
    if (!activeChat) return;

    // Optimistic user message (sertakan format [attachment: ...] jika terdapat lampiran dokumen)
    const optimisticText = attachment ? `[attachment: ${attachment}]\n${text}` : text;
    const userMsg: IMessage = {
      id: 'temp-' + Date.now(),
      sender: 'user',
      text: optimisticText,
      timestamp: new Date().toISOString(),
    };

    set((state) => ({
      isLoading: true,
      chats: state.chats.map((c) => {
        if (c.id === activeChatId) {
          let updatedTitle = c.title;
          if (c.title === 'Obrolan Baru' && (!c.subject || !c.grade)) {
            updatedTitle = text.length > 20 ? text.substring(0, 20) + '...' : text;
          }
          return {
            ...c,
            title: updatedTitle,
            messages: [...c.messages, userMsg],
          };
        }
        return c;
      }),
    }));

    // Update title in backend if we changed it
    const updatedChat = get().chats.find((c) => c.id === activeChatId);
    if (updatedChat && updatedChat.title !== activeChat.title) {
      updateChatApi(activeChatId, { title: updatedChat.title }).catch(console.error);
    }

    try {
      const data = await askQuestionApi(activeChatId, {
        question: text,
        grade: activeChat.grade,
        subject: activeChat.subject,
        attachment: attachment || null,
      });

      const finalUserMsg: IMessage = {
        id: data.user_message_id.toString(),
        sender: 'user',
        text: optimisticText,
        timestamp: new Date().toISOString(),
      };

      const botMsg: IMessage = {
        id: data.ai_message_id.toString(),
        sender: 'bot',
        text: data.answer,
        timestamp: new Date().toISOString(),
      };

      set((state) => ({
        isLoading: false,
        chats: state.chats.map((c) => {
          if (c.id === activeChatId) {
            // Replace temporary user message with real one, and add bot message
            const msgs = c.messages.filter((m) => m.id !== userMsg.id);
            return { ...c, messages: [...msgs, finalUserMsg, botMsg] };
          }
          return c;
        }),
      }));
    } catch (error: unknown) {
      console.error('Error sending message:', error);
      let displayErrorText =
        'Maaf, terjadi kesalahan saat menghubungi server. Pastikan server backend Anda berjalan.';
      if (error instanceof Error && error.message && !error.message.includes('Failed to fetch')) {
        displayErrorText = error.message;
      }
      const errorMsg: IMessage = {
        id: 'msg-error-' + Date.now(),
        sender: 'bot',
        text: displayErrorText,
        timestamp: new Date().toISOString(),
      };
      set((state) => ({
        isLoading: false,
        chats: state.chats.map((c) => {
          if (c.id === activeChatId) {
            return { ...c, messages: [...c.messages, errorMsg] };
          }
          return c;
        }),
      }));
    }
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleFocusMode: () => {
    set((state) => {
      const nextMode = !state.isFocusMode;
      try {
        if (nextMode) {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          }
        } else {
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
          }
        }
      } catch {
        // Abaikan jika browser tidak mengizinkan fullscreen
      }
      return { isFocusMode: nextMode };
    });
  },
  toggleSettings: () => set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),
  toggleProfile: () => set((state) => ({ isProfileOpen: !state.isProfileOpen })),

  clearAllData: () => {
    set({
      chats: [],
      activeChatId: null,
      isSettingsOpen: false,
      isProfileOpen: false,
      isSidebarOpen: false,
      isFocusMode: false,
    });
  },

  setTheme: (theme: 'light' | 'dark') => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    set({ theme });
  },

  toggleTheme: () => {
    const currentTheme = get().theme;
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    get().setTheme(nextTheme);
  },

  setAppLoading: (loading: boolean) => {
    set({ isAppLoading: loading });
  },
}));
