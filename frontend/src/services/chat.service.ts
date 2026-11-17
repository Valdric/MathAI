import { useAuthStore } from '../store/authStore';
import { apiRequest } from './http';

export interface IChatSessionApi {
  id: string;
  title: string;
  subject: string | null;
  grade: string | null;
  created_at: string;
  updated_at: string;
}

export interface IMessageApi {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
}

export interface IAskQuestionPayload {
  question: string;
  grade: string | null;
  subject: string | null;
  attachment?: string | null;
}

export interface IAskQuestionResponse {
  answer: string;
  user_message_id: number;
  ai_message_id: number;
}

export interface IUpdateChatPayload {
  title?: string;
  grade?: string | null;
  subject?: string | null;
}

const getToken = (): string | null => useAuthStore.getState().token;

export const getChatsApi = (): Promise<IChatSessionApi[]> => {
  return apiRequest<IChatSessionApi[]>('/api/chats/', {
    token: getToken(),
    fallbackError: 'Gagal memuat daftar obrolan',
  });
};

export const getMessagesApi = (chatId: string): Promise<IMessageApi[]> => {
  return apiRequest<IMessageApi[]>(`/api/chats/${chatId}/messages`, {
    token: getToken(),
    fallbackError: 'Gagal memuat riwayat pesan',
  });
};

export const createChatApi = (
  title = 'Obrolan Baru',
  grade: string | null = null,
  subject: string | null = null
): Promise<IChatSessionApi> => {
  return apiRequest<IChatSessionApi>('/api/chats/', {
    method: 'POST',
    token: getToken(),
    body: JSON.stringify({ title, grade, subject }),
    fallbackError: 'Gagal membuat obrolan baru',
  });
};

export const updateChatApi = (
  chatId: string,
  payload: IUpdateChatPayload
): Promise<{ message: string }> => {
  return apiRequest<{ message: string }>(`/api/chats/${chatId}`, {
    method: 'PUT',
    token: getToken(),
    body: JSON.stringify(payload),
    fallbackError: 'Gagal memperbarui obrolan',
  });
};

export const deleteChatApi = (chatId: string): Promise<{ message: string }> => {
  return apiRequest<{ message: string }>(`/api/chats/${chatId}`, {
    method: 'DELETE',
    token: getToken(),
    fallbackError: 'Gagal menghapus obrolan',
  });
};

export const deleteAllChatsApi = (): Promise<{ message: string }> => {
  return apiRequest<{ message: string }>('/api/chats/', {
    method: 'DELETE',
    token: getToken(),
    fallbackError: 'Gagal menghapus semua riwayat obrolan',
  });
};

export const askQuestionApi = (
  chatId: string,
  payload: IAskQuestionPayload
): Promise<IAskQuestionResponse> => {
  return apiRequest<IAskQuestionResponse>(`/api/chats/${chatId}/ask`, {
    method: 'POST',
    token: getToken(),
    body: JSON.stringify(payload),
    fallbackError: 'Gagal mengirim pertanyaan',
  });
};
