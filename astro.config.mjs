// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

import fs from 'node:fs';
import path from 'node:path';

// Fecha real de cada post del blog, leída del frontmatter (pubDate).
// Se usa como <lastmod> del sitemap. No se inventa: si el post no tiene
// pubDate legible, la URL sale sin lastmod.
const blogDir = path.resolve('./src/content/blog');
/** @type {Record<string, string>} */
const blogLastmod = {};
try {
  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const match = raw.match(/^pubDate:\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})"?/m);
    if (!match) continue;
    const slug = file.replace(/\.mdx?$/, '');
    blogLastmod[`/blog/${slug}/`] = new Date(`${match[1]}T00:00:00Z`).toISOString();
  }
} catch {
  // sin blog o sin permisos: el sitemap se genera igual, solo sin lastmod
}

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
        // Blog: prioridad propia y lastmod real desde el frontmatter
        const pathname = new URL(item.url).pathname;
        if (blogLastmod[pathname]) {
          return { ...item, priority: 0.7, changefreq: 'monthly', lastmod: blogLastmod[pathname] };
        }
        if (pathname === '/blog/') {
          return { ...item, priority: 0.7, changefreq: 'weekly' };
        }
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