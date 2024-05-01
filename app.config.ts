import { defineConfig } from "@solidjs/start/config";

console.info("app.config.ts process.env.BASE_PATH", process.env.BASE_PATH);
export default defineConfig({
  ssr: true,
  server: {
    // preset: "github-pages",
    preset: "static",
    baseURL: process.env.BASE_PATH,
  },
});
