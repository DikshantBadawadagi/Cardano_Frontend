// Centralized runtime configuration for the frontend
// Reads from Vite env variables and falls back to sensible defaults
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://cardano-backend-1.onrender.com';
export const VAPI_ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID || 'd55f90ea-6106-4634-a462-dbf049e0c240';

// If you need the full API root including `/api` you can use:
// export const API_ROOT = `${API_BASE_URL}/api`;
