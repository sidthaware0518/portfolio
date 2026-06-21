import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 50518, // custom local dev port → http://localhost:50518
    strictPort: true,
  },
});
