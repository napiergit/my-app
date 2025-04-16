import { defineConfig } from "vite";
import solid from "solid-start/vite";

export default defineConfig({
  plugins: [
    solid({
      adapter: "solid-start-static",
      ssr: true,
    }),
  ],
  build: {
    outDir: ".output/public",
  },
});
