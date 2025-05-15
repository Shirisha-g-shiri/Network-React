import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Your custom logger, if needed
const logger = {
  info(msg) {
    console.log('info:', msg);
  },
  warn(msg) {
    console.log('warn:', msg);
  },
  error(msg) {
    console.log('error:', msg);
  },
};

// Your transform HTML plugin, if needed
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
  // Removed base for Vercel deployment:
  // base: '/Network-React/',

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
