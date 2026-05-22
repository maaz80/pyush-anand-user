import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  build: {
    cssMinify: true,
    minify: 'terser',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    modulePreload: {
      polyfill: true
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('react-router')) return 'router';
            if (id.includes('react-helmet')) return 'helmet';
          }
        }
      }
    }
  },
})
