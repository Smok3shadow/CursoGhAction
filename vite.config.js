import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://smok3shadow.github.io/CursoGhAction/',
  plugins: [react()]
})
