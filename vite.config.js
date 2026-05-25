import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,        //  har route ka alag CSS
    cssMinify: true,
    minify: 'terser',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    modulePreload: {
      polyfill: false,
      resolveDependencies: () => [] //  Dynamic chunks preload block
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
            //  Animation libraries — sabse bade, alag chunk
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('framer-motion')) return 'framer-motion';

            //  React core
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('react-router')) return 'router';

            //  Icons — badi library hai
            if (id.includes('react-icons')) return 'icons';

            //  Baaki sab vendor ek saath
            if (id.includes('node_modules')) return 'vendor';
          }
        }
      }
    }
  },
})