import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress';

// noinspection ES6PreferShortImport
import {localeList} from "./src/lib/locales.ts";

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ltdjorge.com',

  integrations: [sitemap(), playformCompress({
      CSS: {
          csso: {
              comments: false
          },
          lightningcss: {
              minify: true,
          }
      },
      HTML: true
  }), mdx()],

  build: {
      inlineStylesheets: "always",
      format: "file"
  },

  i18n: {
      defaultLocale: 'en',
      locales: localeList.map(
          (locale) => { return locale.locale }
      ),
      routing: {
          prefixDefaultLocale: false,
      }
  },

  vite: {
    plugins: [tailwindcss()]
  }
})