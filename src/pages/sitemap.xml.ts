import type { APIRoute } from 'astro';

// El sitemap real que genera Astro es `sitemap-index.xml`, que es el que declara
// robots.txt. Pero /sitemap.xml es la dirección que prueba medio mundo (y varias
// herramientas de SEO): sin esto devolvía la página 404.
export const GET: APIRoute = () =>
  new Response(null, {
    status: 301,
    headers: { Location: 'https://chileelectrico.cl/sitemap-index.xml' },
  });
