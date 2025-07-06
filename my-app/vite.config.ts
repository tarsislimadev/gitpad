import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5173-tarsislimadev-gitpad-h3bjoqd6qfp.ws-us120.gitpod.io"
    ]
  }
})
