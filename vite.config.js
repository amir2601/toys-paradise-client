import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-firebase': ['firebase/app', 'firebase/auth'],
          'vendor-carousels': ['react-slick', 'slick-carousel'],
          'vendor-ui': ['react-icons', 'react-rating', 'react-toastify', 'sweetalert2'],
        },
      },
    },
  },
})