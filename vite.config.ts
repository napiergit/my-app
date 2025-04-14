import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// SolidJS specific config
export default defineConfig({
  resolve: {
    alias: {
      crypto: 'crypto-browserify',  // Polyfill crypto
    },
  },
  plugins: [solidPlugin()],
  base: '/my-app/',  // Change this to your repo name (e.g., '/my-app/')
  build: {
    outDir: '.output/public',  // Ensure the build goes to this folder for GitHub Pages
    ssr: false,
  },
});

