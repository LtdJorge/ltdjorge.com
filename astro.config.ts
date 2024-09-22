import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'
import playformInline from '@playform/inline';
import playformCompress from '@playform/compress';

// noinspection ES6PreferShortImport
import {localeList} from "./src/lib/locales.ts";

export default defineConfig({
    site: 'https://ltdjorge.com',
    integrations: [tailwind(), sitemap(), playformCompress({
        CSS: {
            csso: {
                comments: false
            },
            lightningcss: {
                minify: true,
                unusedSymbols: true
            }
        },
        HTML: true
    }), playformInline({
        Path: './src'
    })],
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