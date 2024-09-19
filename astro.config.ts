import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'
// noinspection ES6PreferShortImport
import {localeList} from "./src/lib/locales.ts";

export default defineConfig({
    site: 'https://ltdjorge.com',
    integrations: [tailwind(), sitemap()],
    i18n: {
        defaultLocale: 'en',
        locales: localeList.map(
            (locale) => { return locale.locale }
        ),
        routing: {
            prefixDefaultLocale: false,
        }
    }
})