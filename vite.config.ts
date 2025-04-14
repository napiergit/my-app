import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()], // Solid plugin
  ssr: {
    noExternal: ['crypto-browserify'], // Fix for crypto in SSR
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify', // Polyfill crypto for SSR
    },
  },
  optimizeDeps: {
    include: ['crypto-browserify'], // Ensure crypto-browserify is included
  },
  build: {
    outDir: 'output/public',
		rollupOptions: {
      external: ['crypto'], // Exclude crypto from the final bundle
    },
  },
});

