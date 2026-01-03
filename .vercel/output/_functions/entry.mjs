import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DFrnv6oN.mjs';
import { manifest } from './manifest_DJSQaqj0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/leads.astro.mjs');
const _page3 = () => import('./pages/certificaciones-y-seguridad.astro.mjs');
const _page4 = () => import('./pages/cobertura/_slug_.astro.mjs');
const _page5 = () => import('./pages/cobertura.astro.mjs');
const _page6 = () => import('./pages/contacto.astro.mjs');
const _page7 = () => import('./pages/cotizar.astro.mjs');
const _page8 = () => import('./pages/empresas-industria/proyectos.astro.mjs');
const _page9 = () => import('./pages/empresas-industria.astro.mjs');
const _page10 = () => import('./pages/empresas-industria/_---slug_.astro.mjs');
const _page11 = () => import('./pages/faq.astro.mjs');
const _page12 = () => import('./pages/gracias.astro.mjs');
const _page13 = () => import('./pages/hogar-condominios/proyectos.astro.mjs');
const _page14 = () => import('./pages/hogar-condominios.astro.mjs');
const _page15 = () => import('./pages/hogar-condominios/_---slug_.astro.mjs');
const _page16 = () => import('./pages/nosotros.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/leads.ts", _page2],
    ["src/pages/certificaciones-y-seguridad.astro", _page3],
    ["src/pages/cobertura/[slug].astro", _page4],
    ["src/pages/cobertura/index.astro", _page5],
    ["src/pages/contacto.astro", _page6],
    ["src/pages/cotizar.astro", _page7],
    ["src/pages/empresas-industria/proyectos.astro", _page8],
    ["src/pages/empresas-industria/index.astro", _page9],
    ["src/pages/empresas-industria/[...slug].astro", _page10],
    ["src/pages/faq.astro", _page11],
    ["src/pages/gracias.astro", _page12],
    ["src/pages/hogar-condominios/proyectos.astro", _page13],
    ["src/pages/hogar-condominios/index.astro", _page14],
    ["src/pages/hogar-condominios/[...slug].astro", _page15],
    ["src/pages/nosotros.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3dea1fcb-3def-4b40-b567-004bbd8f8e8b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
