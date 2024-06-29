import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://the-kubrick-astro.vercel.app/",
  integrations: [tailwind(), mdx()]
});