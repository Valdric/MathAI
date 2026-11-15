import type { IUser } from '../store/authStore';
import { apiRequest } from './http';

export interface ILoginResponse {
  message: string;
  token: string;
  user: IUser;
}

export interface IMessageResponse {
  message: string;
}

export interface IUpdateProfilePayload {
  name: string;
  email: string;
  password?: string;
}

export interface IUpdateProfileResponse {
  message: string;
  user: IUser;
}

export const loginApi = (email: string, password: string): Promise<ILoginResponse> => {
  return apiRequest<ILoginResponse>('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    fallbackError: 'Terjadi kesalahan saat login',
  });
};

export const signupApi = (
  name: string,
  email: string,
  password: string
): Promise<IMessageResponse> => {
  return apiRequest<IMessageResponse>('/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    fallbackError: 'Terjadi kesalahan saat mendaftar',
  });
};

export const updateProfileApi = (
  token: string,
  payload: IUpdateProfilePayload
): Promise<IUpdateProfileResponse> => {
  return apiRequest<IUpdateProfileResponse>('/account', {
    method: 'PUT',
    token,
    body: JSON.stringify(payload),
    fallbackError: 'Gagal memperbarui profil',
  });
};

export const deleteAccountApi = (token: string): Promise<IMessageResponse> => {
  return apiRequest<IMessageResponse>('/account', {
    method: 'DELETE',
    token,
    fallbackError: 'Gagal menghapus akun',
  });
};
