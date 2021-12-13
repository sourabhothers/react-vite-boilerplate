import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";
import Inspect from "vite-plugin-inspect";
import purgeCSS from "rollup-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@public": resolve(__dirname, "public"),
      "@src": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
    },
  },
  plugins: [Inspect(), react(), purgeCSS({ content: ["**/*"] })],
  build: {
    sourcemap: true,
  },
});
