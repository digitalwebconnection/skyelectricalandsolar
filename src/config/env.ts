export const env = {
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  API_URL: import.meta.env.VITE_API_URL || "",
  INQUIRY_ENDPOINT: import.meta.env.VITE_INQUIRY_ENDPOINT || "",
  GA_ID: import.meta.env.VITE_GA_ID || "",
} as const;

export default env;

