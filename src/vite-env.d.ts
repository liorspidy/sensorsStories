/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAIN_LIST_ID: string;
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;
  readonly VITE_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
