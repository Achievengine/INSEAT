import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '58fc-196-189-29-62.ngrok-free.app', // Add your ngrok URL here
      "d342-196-191-61-180.ngrok-free.app",
      "226c-196-189-27-237.ngrok-free.app",
      "ee87-196-189-28-223.ngrok-free.app"
    ],
  },
})
