import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import image from "@astrojs/image";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://margaretandlogan.love",
  integrations: [
    mdx(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    astroI18next(),
  ],
});