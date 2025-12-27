import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_CF1QfBv0.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://servicioselectricos.cl");
const $$TrustBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrustBar;
  const { items = ["Certificados SEC", "Garant\xEDa Legal", "Facturaci\xF3n Electr\xF3nica", "Atenci\xF3n RM"] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-50 border-y border-slate-200 py-4"> <div class="container mx-auto px-4"> <div class="flex flex-wrap justify-center gap-6 md:gap-12 items-center text-sm font-medium text-slate-600"> ${items.map((item) => renderTemplate`<div class="flex items-center gap-2"> <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${item}</span> </div>`)} </div> </div> </section>`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/TrustBar.astro", void 0);

export { $$TrustBar as $ };
