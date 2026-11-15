import { API_URL } from '../config';

interface IApiErrorPayload {
  detail?: string | Array<{ msg?: string }>;
  error?: string;
  message?: string;
}

export interface IRequestOptions extends RequestInit {
  token?: string | null;
  fallbackError?: string;
}

export const extractApiError = (data: unknown, fallbackMessage: string): string => {
  if (!data || typeof data !== 'object') {
    return fallbackMessage;
  }

  const payload = data as IApiErrorPayload;

  if (typeof payload.detail === 'string' && payload.detail.trim()) {
    return payload.detail;
  }

  if (Array.isArray(payload.detail) && payload.detail.length > 0) {
    const messages = payload.detail
      .map((item) => item?.msg)
      .filter((msg): msg is string => Boolean(msg));
    if (messages.length > 0) {
      return messages.join(', ');
    }
  }

  if (typeof payload.error === 'string' && payload.error.trim()) {
    return payload.error;
  }

  if (typeof payload.message === 'string' && payload.message.trim()) {
    return payload.message;
  }

  return fallbackMessage;
};

export const apiRequest = async <T>(
  endpoint: string,
  options: IRequestOptions = {}
): Promise<T> => {
  const {
    token,
    fallbackError = 'Terjadi kesalahan pada server',
    headers,
    ...fetchOptions
  } = options;

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  const data: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(extractApiError(data, `${fallbackError} (HTTP ${response.status})`));
  }

  return data as T;
};
