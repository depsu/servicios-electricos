// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      /** @param {any} item */
      serialize: (item) => {
        // High priority for service landing pages
        if (item.url.includes('/empresas-industria/montaje-electrico/') ||
          item.url.includes('/hogar-condominios/empalme') ||
          item.url.includes('/hogar-condominios/gasfiteria')) {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        // Medium-high for other service pages
        if (item.url.includes('/empresas-industria/') || item.url.includes('/hogar-condominios/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Medium for coverage pages
        if (item.url.includes('/cobertura/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        // Homepage highest
        if (item.url === 'https://chileelectrico.cl/' || item.url === 'https://chileelectrico.cl') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Default
        return { ...item, priority: 0.5, changefreq: 'monthly' };
      }
    })
  ],
  site: 'https://chileelectrico.cl',

  adapter: vercel()
});