// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elvora.me',
  output: 'static',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/kontakt/danke'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // Schriften werden beim Build heruntergeladen und selbst ausgeliefert.
  // Es entsteht keine Verbindung zu Google Fonts o. ae.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter Tight',
      cssVariable: '--font-heading',
      weights: [500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
  ],
});
