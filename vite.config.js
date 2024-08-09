import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import manifest from './manifest.json';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['/**/*.png', '/**/*.mp3'],
      manifest,
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{html,css,js,woff,woff2}'],
      },
    }),
  ],
  resolve: {
    alias: {
      components: '/src/components',
      layouts: '/src/layouts',
      models: '/src/models',
      state: '/src/state',
      samples: '/src/samples',
      utils: '/src/utils',
      theme: '/src/theme',
      'global-constants': '/src/global-constants',
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        200: '200.html',
      },
      onwarn: (warning, warn) => {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
});
