import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//https://nasa-api-pbty.onrender.com
//http://localhost:3000

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api' :{
        target: 'https://nasa-api-pbty.onrender.com',
        secure: true,

      },
    },
  },
  plugins: [react()],
})
