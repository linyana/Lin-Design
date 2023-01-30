import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LinDesign-page",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
