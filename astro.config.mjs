// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import rehypeRaw from "rehype-raw";

export default defineConfig({
  integrations: [react()],
  markdown: { rehypePlugins: [rehypeRaw] },
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  },
});
