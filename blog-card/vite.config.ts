import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/componentarium/blog-card/", // 👈 base correcta para GitHub Pages
});
