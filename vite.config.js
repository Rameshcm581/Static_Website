import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/Components'),
      '@api': path.resolve(import.meta.dirname, './src/Api'),
      '@context': path.resolve(import.meta.dirname, './src/context'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@data': path.resolve(import.meta.dirname, './src/data'),
      '@layout': path.resolve(import.meta.dirname, './src/layout'),
      '@common': path.resolve(import.meta.dirname, './src/common'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
