import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-GloriaMacarenaRico/', // 👈 importante para GitHub Pages
  plugins: [react()],
  server: {
    open: true
  }
})
