import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve('src') },
      { find: '@app-route', replacement: resolve('src/routes/app') },
      { find: '@auth-route', replacement: resolve('src/routes/auth') },
    ],
  },
})
