const normalizeBaseUrl = (value: string): string => value.replace(/\/+$/, '');

const fallbackApiUrl = import.meta.env.PROD
  ? 'https://api.inseat.achievengine.com/api'
  : 'http://localhost:3001/api';

export const API_BASE_URL = normalizeBaseUrl(
  import.meta.env.VITE_API_URL || fallbackApiUrl
);

