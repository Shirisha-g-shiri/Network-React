import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <--- ADD THIS

const logger = {
  info(msg) { console.log('info:', msg); },
  warn(msg) { console.log('warn:', msg); },
  error(msg) { console.log('error:', msg); },
};

const addTransformIndexHtml = {
  name: 'html-transform',
  transformIndexHtml(html) {
    return html.replace(
      /<title>(.*?)<\/title>/,
      '<title>My Vite React App</title>'
    );
  },
};

export default defineConfig({
  customLogger: logger,
  plugins: [react(), addTransformIndexHtml],

  // ✅ ADD THIS
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    cors: true,
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
    },
    host: true,
  },

  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
