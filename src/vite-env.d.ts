/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_BACKEND_BASE_URL: string;
  }
}
