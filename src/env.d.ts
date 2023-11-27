interface ImportMetaEnv {
  readonly VITE_FIREBASE_APP_KEY: string
  readonly VITE_KAKAO_APP_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
