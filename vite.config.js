import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
