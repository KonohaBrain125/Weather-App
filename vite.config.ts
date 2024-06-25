import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@icons': '/src/icons',
      '@types': '/src/types',
      '@context': '/src/context',
      '@components': '/src/components',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://api.weatherstack.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
