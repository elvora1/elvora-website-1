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
  //
  // Archivo als Display: breit laufende, industrielle Grotesk. Nimmt die
  // Proportionen des Logo-Schriftzugs auf, statt sie zu ignorieren.
  // IBM Plex Sans fuer Fliesstext: technisch, ruhig, sehr gut lesbar im
  // Deutschen. Bewusst nicht Inter, das greift jeder als Standard.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Archivo',
      cssVariable: '--font-heading',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
  ],
});
