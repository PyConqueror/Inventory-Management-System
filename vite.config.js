import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'inventory-management-system-pt-820e4eafa3ee.herokuapp.com:3001',
        changeOrigin: true,
      },
    },
  },
})