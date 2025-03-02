import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Set this back to sliceathon once the custom domain expires
  plugins: [svelte(), tailwindcss()],
});
