import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_vQEaLLfT.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B78GMCVx.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/","cacheDir":"file:///Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/node_modules/.astro/","outDir":"file:///Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/dist/","srcDir":"file:///Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/","publicDir":"file:///Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/public/","buildClientDir":"file:///Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/dist/client/","buildServerDir":"file:///Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"certificaciones-y-seguridad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/certificaciones-y-seguridad","isIndex":false,"type":"page","pattern":"^\\/certificaciones-y-seguridad\\/?$","segments":[[{"content":"certificaciones-y-seguridad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificaciones-y-seguridad.astro","pathname":"/certificaciones-y-seguridad","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"cobertura/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cobertura","isIndex":true,"type":"page","pattern":"^\\/cobertura\\/?$","segments":[[{"content":"cobertura","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cobertura/index.astro","pathname":"/cobertura","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"cotizar/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cotizar","isIndex":false,"type":"page","pattern":"^\\/cotizar\\/?$","segments":[[{"content":"cotizar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cotizar.astro","pathname":"/cotizar","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"empresas-industria/proyectos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/empresas-industria/proyectos","isIndex":false,"type":"page","pattern":"^\\/empresas-industria\\/proyectos\\/?$","segments":[[{"content":"empresas-industria","dynamic":false,"spread":false}],[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/empresas-industria/proyectos.astro","pathname":"/empresas-industria/proyectos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"empresas-industria/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/empresas-industria","isIndex":true,"type":"page","pattern":"^\\/empresas-industria\\/?$","segments":[[{"content":"empresas-industria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/empresas-industria/index.astro","pathname":"/empresas-industria","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"gracias/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gracias","isIndex":false,"type":"page","pattern":"^\\/gracias\\/?$","segments":[[{"content":"gracias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gracias.astro","pathname":"/gracias","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"hogar-condominios/proyectos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hogar-condominios/proyectos","isIndex":false,"type":"page","pattern":"^\\/hogar-condominios\\/proyectos\\/?$","segments":[[{"content":"hogar-condominios","dynamic":false,"spread":false}],[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar-condominios/proyectos.astro","pathname":"/hogar-condominios/proyectos","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"hogar-condominios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hogar-condominios","isIndex":true,"type":"page","pattern":"^\\/hogar-condominios\\/?$","segments":[[{"content":"hogar-condominios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hogar-condominios/index.astro","pathname":"/hogar-condominios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"nosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/leads","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/leads\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"leads","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/leads.ts","pathname":"/api/leads","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://servicioselectricos.cl","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/cobertura/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/empresas-industria/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/hogar-condominios/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/certificaciones-y-seguridad.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/cobertura/index.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/cotizar.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/empresas-industria/index.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/empresas-industria/proyectos.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/gracias.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/hogar-condominios/index.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/hogar-condominios/proyectos.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/leads@_@ts":"pages/api/leads.astro.mjs","\u0000@astro-page:src/pages/certificaciones-y-seguridad@_@astro":"pages/certificaciones-y-seguridad.astro.mjs","\u0000@astro-page:src/pages/cobertura/[slug]@_@astro":"pages/cobertura/_slug_.astro.mjs","\u0000@astro-page:src/pages/cobertura/index@_@astro":"pages/cobertura.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/cotizar@_@astro":"pages/cotizar.astro.mjs","\u0000@astro-page:src/pages/empresas-industria/proyectos@_@astro":"pages/empresas-industria/proyectos.astro.mjs","\u0000@astro-page:src/pages/empresas-industria/index@_@astro":"pages/empresas-industria.astro.mjs","\u0000@astro-page:src/pages/empresas-industria/[...slug]@_@astro":"pages/empresas-industria/_---slug_.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/gracias@_@astro":"pages/gracias.astro.mjs","\u0000@astro-page:src/pages/hogar-condominios/proyectos@_@astro":"pages/hogar-condominios/proyectos.astro.mjs","\u0000@astro-page:src/pages/hogar-condominios/index@_@astro":"pages/hogar-condominios.astro.mjs","\u0000@astro-page:src/pages/hogar-condominios/[...slug]@_@astro":"pages/hogar-condominios/_---slug_.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_TOb3jGbk.mjs","/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D72VY6JX.mjs","/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/NavbarService.astro?astro&type=script&index=0&lang.ts":"_astro/NavbarService.astro_astro_type_script_index_0_lang.DS5mLSIg.js","/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/gracias.astro?astro&type=script&index=0&lang.ts":"_astro/gracias.astro_astro_type_script_index_0_lang.CgWglCO8.js","/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/WhatsAppFloat.astro?astro&type=script&index=0&lang.ts":"_astro/WhatsAppFloat.astro_astro_type_script_index_0_lang.DKksv-LF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/pages/gracias.astro?astro&type=script&index=0&lang.ts","const a=new URLSearchParams(window.location.search),e=a.get(\"type\")||\"unknown\";window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"lead_success\",leadType:e});"],["/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/WhatsAppFloat.astro?astro&type=script&index=0&lang.ts","function d(){const t=document.getElementById(\"whatsapp-chat\"),e=document.getElementById(\"wa-btn\"),n=document.getElementById(\"wa-dot\");!t||!e||(t.style.display===\"none\"||!t.style.display?(t.style.display=\"flex\",e.classList.add(\"active\"),n&&(n.classList.remove(\"show\"),n.style.display=\"none\")):(t.style.display=\"none\",e.classList.remove(\"active\")))}document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"wa-btn\"),e=document.getElementById(\"wa-close-btn\");t&&t.addEventListener(\"click\",d),e&&e.addEventListener(\"click\",d),setTimeout(()=>{const n=document.getElementById(\"whatsapp-chat\"),s=document.getElementById(\"wa-dot\");n&&n.style.display!==\"flex\"&&s&&s.classList.add(\"show\")},5e3)});"]],"assets":["/favicon.svg","/robots.txt","/_astro/NavbarService.astro_astro_type_script_index_0_lang.DS5mLSIg.js","/certificaciones-y-seguridad/index.html","/cobertura/index.html","/contacto/index.html","/cotizar/index.html","/empresas-industria/proyectos/index.html","/empresas-industria/index.html","/faq/index.html","/gracias/index.html","/hogar-condominios/proyectos/index.html","/hogar-condominios/index.html","/nosotros/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"sAahIbLVMbkA/h9QkiHnumxyKkDkdhj3NkAT6nLaVbw=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
