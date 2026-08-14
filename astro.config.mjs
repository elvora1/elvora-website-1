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
  // Drei Familien, jede mit genau einer Aufgabe:
  //
  //   Instrument Serif  Aussagen. Schmal, hoch, mit deutlichem Strichstaerken-
  //                     wechsel. Steht auf Plakatgroesse fuer sich, ohne dass
  //                     man sie fetten muss -- sie hat naemlich gar keinen
  //                     Fettschnitt, nur 400. Das ist Absicht: die Wirkung
  //                     kommt aus Groesse und Satz, nicht aus Gewicht.
  //   IBM Plex Sans     Fliesstext. Technisch, ruhig, im Deutschen sehr gut
  //                     lesbar. Bewusst nicht Inter, das nimmt jeder.
  //   IBM Plex Mono     Kennungen, Nummern, Kennzahlen. Aus derselben Familie
  //                     wie der Fliesstext, passt also im Grundton, faellt
  //                     aber als Etikett sofort als solches auf.
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
      name: 'Instrument Serif',
      cssVariable: '--font-heading',
      weights: [400],
      styles: ['normal', 'italic'],
      // Nur `latin`. Umlaute, ß und die deutschen Anführungszeichen liegen
      // alle darin; `latin-ext` waere Polnisch, Tschechisch, Tuerkisch und
      // haette die Zahl der Schriftdateien verdoppelt.
      subsets: ['latin'],
      // Ausweichschrift muss ein Serif sein, sonst springt die Seite beim
      // Nachladen sichtbar von Grotesk auf Serif um.
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
      display: 'swap',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-label',
      weights: [500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
      display: 'swap',
    },
  ],
});
