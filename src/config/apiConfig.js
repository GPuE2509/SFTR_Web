// Base backend URL. In production: https://sftr-backend.onrender.com, in development: http://localhost:5000
export const API_BASE_URL = import.meta.env.VITE_API_URL 
  ? (import.meta.env.VITE_API_URL.endsWith('/api') ? import.meta.env.VITE_API_URL.slice(0, -4) : import.meta.env.VITE_API_URL) 
  : 'https://sftr-backend.onrender.com';

// HTTP API endpoint: e.g. https://sftr-backend.onrender.com/api
export const API_URL = `${API_BASE_URL}/api`;

// WebSocket URL: e.g. wss://sftr-backend.onrender.com
export const WS_URL = import.meta.env.VITE_WS_URL || API_BASE_URL.replace(/^http/, 'ws');
