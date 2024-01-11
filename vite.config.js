import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ["ckeditor5-custom-build"],
      output: {
        globals: {
          "ckeditor5-custom-build": "ClassicEditor",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@ckeditor/ckeditor5-react": path.resolve(
        __dirname,
        "node_modules/@ckeditor/ckeditor5-react"
      ),
      ckeditor: path.resolve(
        __dirname,
        "node_modules/ckeditor5-custom-build/build/ckeditor"
      ),
    },
  },
  optimizeDeps: {
    exclude: ["ckeditor5-custom-build"],
  },
});
