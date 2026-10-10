import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-render': {
        target: 'https://filmes-atividade.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-render/, ''),
      },
    },
  },
})