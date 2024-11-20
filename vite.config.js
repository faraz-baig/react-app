import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    rollupOptions: {
      input: '/src/main.jsx', // Ensure the correct path here
    },
  },
})
