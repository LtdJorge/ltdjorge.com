import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import typographyPlugin from "@tailwindcss/typography";

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        typography: {}
    },
    plugins: [typographyPlugin],
} satisfies Config;