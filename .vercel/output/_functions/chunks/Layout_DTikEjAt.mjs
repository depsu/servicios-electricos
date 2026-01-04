import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, o as renderSlot, n as renderScript, k as renderComponent, p as createTransitionScope, q as renderHead, u as unescapeHTML } from './astro/server_CF1QfBv0.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';

const siteConfig = {
  company: {
    name: "Servicios Eléctricos RM",
    logoText: "CHILE",
    logoTextHighlight: "ELECTRICO",
    email: "rivera.ale98@gmail.com",
    phone: "+56 9 3015 3632",
    whatsapp: "56930153632"},
  social: {
    // facebook: "https://facebook.com",
    // instagram: "https://instagram.com"
  },
  theme: {
    font: "sans"}};

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro("https://chileelectrico.cl");
const $$NavbarGeneric = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavbarGeneric;
  const { company} = siteConfig;
  const currentPath = Astro2.url.pathname;
  let whatsappText = "Hola,%20vi%20su%20web%20y%20necesito%20m\xE1s%20informaci\xF3n.";
  if (currentPath.includes("empresas-industria")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20industrial.";
  } else if (currentPath.includes("hogar-condominios")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20para%20hogar.";
  }
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<nav id="main-nav" class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-transform duration-500 ease-out transform translate-y-0"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <a href="/" class="flex items-center gap-2" aria-label="Inicio"> <img src="/images/logo.png" alt="Servicios El\xE9ctricos RM" class="h-10 w-auto"> <div class="flex flex-col justify-center"> <span class="block font-extrabold text-slate-900 text-xl leading-none tracking-tight"> ', '<span class="text-primary">', '</span> </span> </div> </a> <!-- Desktop Menu --> <div class="hidden md:flex items-center gap-8 font-medium text-slate-600"> <a href="/" class="hover:text-primary transition-colors">Inicio</a> <a href="/servicios" class="hover:text-primary transition-colors">Servicios</a> <a href="/nosotros" class="hover:text-primary transition-colors">Nosotros</a> <a href="/contacto" class="hover:text-primary transition-colors">Contacto</a> <div class="flex items-center gap-4 ml-4"> <a', ` class="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full font-bold shadow-md transition hover:-translate-y-0.5 flex items-center gap-2">
WhatsApp
</a> </div> </div> <!-- Mobile Menu Button --> <button id="generic-nav-toggle" class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Abrir men\xFA"> <svg class="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile Menu Overlay --> <div id="generic-mobile-menu" class="hidden fixed inset-0 z-[100] md:hidden"> <div id="generic-menu-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> <div class="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl h-full flex flex-col"> <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50"> <span class="font-bold text-slate-700">Men\xFA</span> <button id="generic-close-menu" class="p-2 rounded-full hover:bg-slate-200 transition"> <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="p-4 space-y-2 overflow-y-auto flex-1"> <a href="/" class="block py-3 px-4 rounded-lg hover:bg-slate-100 font-semibold text-slate-900 transition-colors">Inicio</a> <a href="/servicios" class="block py-3 px-4 rounded-lg hover:bg-slate-100 font-semibold text-slate-900 transition-colors">Servicios</a> <a href="/nosotros" class="block py-3 px-4 rounded-lg hover:bg-slate-100 font-semibold text-slate-900 transition-colors">Nosotros</a> <a href="/contacto" class="block py-3 px-4 rounded-lg hover:bg-slate-100 font-semibold text-slate-900 transition-colors">Contacto</a> </div> </div> </div> </nav> <script>
    const toggleBtn = document.getElementById('generic-nav-toggle');
    const closeBtn = document.getElementById('generic-close-menu');
    const backdrop = document.getElementById('generic-menu-backdrop');
    const menu = document.getElementById('generic-mobile-menu');

    function toggleGenericMenu() {
        if (menu) menu.classList.toggle('hidden');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', toggleGenericMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleGenericMenu);
    if (backdrop) backdrop.addEventListener('click', toggleGenericMenu);

    // Scroll Behavior (Hide/Show)
    let lastScroll = 0;
    const nav = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        // Apply on mobile and small tablets
        if (window.innerWidth < 1024) {
             // Add buffer to prevent jitter at top
             if (currentScroll <= 0) {
                 nav.classList.remove('-translate-y-full');
                 return;
             }
             
             if (currentScroll > lastScroll && currentScroll > 60) {
                 // Scrolling Down -> Hide
                 nav.classList.add('-translate-y-full');
             } else if (currentScroll < lastScroll) {
                 // Scrolling Up -> Show
                 nav.classList.remove('-translate-y-full');
             }
        } else {
             // Always show on desktop
             nav.classList.remove('-translate-y-full');
        }
        
        lastScroll = currentScroll;
    });
<\/script>`])), maybeRenderHead(), company.logoText, company.logoTextHighlight, addAttribute(`https://wa.me/${company.whatsapp}?text=${whatsappText}`, "href"));
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/NavbarGeneric.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://chileelectrico.cl");
const $$NavbarService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavbarService;
  const { company } = siteConfig;
  const currentPath = Astro2.url.pathname;
  let whatsappText = "Hola,%20vi%20su%20web%20y%20necesito%20m\xE1s%20informaci\xF3n.";
  if (currentPath.includes("empresas-industria")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20industrial.";
  } else if (currentPath.includes("hogar-condominios")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20para%20hogar.";
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", " ", '<nav id="service-nav" class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-transform duration-500 ease-out transform translate-y-0"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-17"> <a href="/" class="flex items-center gap-1" aria-label="Inicio"> <div class="w-12 h-12 md:w-[72px] md:h-[72px] flex items-center justify-center"> <img src="/images/logo.png" alt="Servicios El\xE9ctricos RM" class="w-full h-full object-contain"> </div> <div class="flex flex-col justify-center -space-y-0.5"> <span class="block font-extrabold text-slate-900 text-base md:text-lg leading-none tracking-tight"> ', '<span class="text-primary">', '</span> </span> <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"> ', ' <!-- This is where the region text goes --> </span> </div> </a> <!-- Desktop Menu --> <div class="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-sm"> <a href="/" class="hover:text-primary transition-colors">Inicio</a> <a href="/empresas-industria" class="hover:text-primary transition-colors">Empresas</a> <a href="/hogar-condominios" class="hover:text-primary transition-colors">Hogar</a> <a href="/cobertura" class="hover:text-primary transition-colors">Cobertura</a> <a href="/cotizar" class="hover:text-primary transition-colors">Cotizar</a> <a href="/contacto" class="hover:text-primary transition-colors">Contacto</a> <div class="flex items-center gap-4 ml-4"> <a', ' class="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2.5 rounded-full font-bold shadow-lg transition hover:-translate-y-0.5 flex items-center gap-2"> <i class="fa-brands fa-whatsapp text-lg"></i>\nWhatsApp\n</a> </div> </div> <!-- Mobile Toggle --> <div class="flex items-center gap-4 lg:hidden"> <a', ' class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900 active:scale-95 transition"> <i class="fa-brands fa-whatsapp text-xl text-accent"></i> </a> <button onclick="openMenu()" aria-label="Abrir men\xFA de navegaci\xF3n" class="p-2.5 rounded-lg text-slate-900 hover:bg-slate-100 focus:outline-none transition active:scale-95"> <i class="fa-solid fa-bars text-2xl"></i> </button> </div> </div> </div> </nav> <!-- Mobile Menu Overlay (Fuera del Nav para evitar problemas de stacking context) --> <div id="mobile-menu-overlay" class="fixed inset-0 z-[60] invisible opacity-0 transition-all duration-300"> <!-- Backdrop --> <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closeMenu()"></div> <!-- Panel --> <div id="mobile-menu-panel" class="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col"> <!-- Header --> <div class="px-6 h-20 flex items-center justify-between border-b border-slate-100"> <span class="font-extrabold text-slate-900 text-lg tracking-tight">MEN\xDA</span> <button onclick="closeMenu()" aria-label="Cerrar men\xFA" class="w-10 h-10 rounded-full bg-slate-50 text-slate-500 hover:bg-red-50 hover:text-red-500 transition flex items-center justify-center"> <i class="fa-solid fa-xmark text-xl"></i> </button> </div> <!-- Links --> <div class="flex-1 overflow-y-auto py-6 px-6 space-y-2"> <a href="/" onclick="closeMenu()" class="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-primary transition">Inicio</a> <a href="/empresas-industria" onclick="closeMenu()" class="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-primary transition">Empresas e Industria</a> <a href="/hogar-condominios" onclick="closeMenu()" class="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-primary transition">Hogar y Condominios</a> <a href="/cobertura" onclick="closeMenu()" class="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-primary transition">Cobertura</a> <a href="/cotizar" onclick="closeMenu()" class="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-primary transition">Cotizar</a> <a href="/contacto" onclick="closeMenu()" class="block px-4 py-3 rounded-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-primary transition">Contacto</a> </div> <!-- Footer --> <div class="p-6 border-t border-slate-100 bg-slate-50"> <a', ` class="block w-full bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-xl font-bold text-center transition shadow-lg shadow-green-500/20"> <i class="fa-brands fa-whatsapp mr-2"></i> WhatsApp Urgente
</a> </div> </div> </div> <script>
    // Funciones globales exactamente como en el HTML original
    window.openMenu = function() {
        const overlay = document.getElementById('mobile-menu-overlay');
        const panel = document.getElementById('mobile-menu-panel');
        if (overlay && panel) {
            overlay.classList.remove('invisible', 'opacity-0');
            panel.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        }
    }

    window.closeMenu = function() {
        const overlay = document.getElementById('mobile-menu-overlay');
        const panel = document.getElementById('mobile-menu-panel');
        if (overlay && panel) {
            panel.classList.add('translate-x-full');
            overlay.classList.add('invisible', 'opacity-0');
            document.body.style.overflow = '';
        }
    }

    // Soporte para View Transitions
    document.addEventListener('astro:after-swap', () => {
        window.closeMenu();
    });

    // Scroll Behavior (Hide/Show)
    let lastScrollService = 0;
    const navService = document.getElementById('service-nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (window.innerWidth < 1024) { // Mobile and Tablet
             if (currentScroll <= 0) {
                 if(navService) navService.classList.remove('-translate-y-full');
                 return;
             }

             if (currentScroll > lastScrollService && currentScroll > 60) {
                 // Scrolling Down -> Hide
                 if(navService) navService.classList.add('-translate-y-full');
             } else if (currentScroll < lastScrollService) {
                 // Scrolling Up -> Show
                 if(navService) navService.classList.remove('-translate-y-full');
             }
        } else {
             if(navService) navService.classList.remove('-translate-y-full');
        }
        
        lastScrollService = currentScroll;
    });
<\/script>`])), renderScript($$result, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/NavbarService.astro?astro&type=script&index=0&lang.ts"), maybeRenderHead(), company.logoText, company.logoTextHighlight, renderSlot($$result, $$slots["default"]), addAttribute(`https://wa.me/${company.whatsapp}?text=${whatsappText}`, "href"), addAttribute(`https://wa.me/${company.whatsapp}?text=${whatsappText}`, "href"), addAttribute(`https://wa.me/${company.whatsapp}?text=${whatsappText}`, "href"));
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/NavbarService.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`${renderComponent($$result, "NavbarService", $$NavbarService, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}` }`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/Navbar.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  const { company, social } = siteConfig;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary text-slate-300 py-12 border-t border-slate-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-6"> <!-- Company Info --> <div class="text-center md:text-left"> <a href="/" class="inline-block mb-4"> <img src="/images/logo.png" alt="Servicios Eléctricos RM" class="h-12 w-auto"> </a> <h3 class="text-xl font-bold text-white mb-2"> ${company.logoText}<span class="text-primary">${company.logoTextHighlight}</span> </h3> <p class="text-sm text-slate-400 max-w-xs">
Soluciones profesionales y confiables. Contáctanos para más información.
</p> </div> <!-- Social Links --> <div class="flex gap-4"> ${social.facebook && renderTemplate`<a${addAttribute(social.facebook, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fa-brands fa-facebook-f"></i> </a>`} ${social.instagram && renderTemplate`<a${addAttribute(social.instagram, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fa-brands fa-instagram"></i> </a>`} ${social.twitter && renderTemplate`<a${addAttribute(social.twitter, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fa-brands fa-twitter"></i> </a>`} ${social.linkedin && renderTemplate`<a${addAttribute(social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"> <i class="fa-brands fa-linkedin-in"></i> </a>`} </div> </div> <div class="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500"> <div class="flex flex-col gap-1 text-center md:text-left"> <p>&copy; ${currentYear} ${company.name}. Todos los derechos reservados.</p> <p class="text-xs">Desarrollado por <a href="https://www.paginasfast.cl" target="_blank" rel="noopener" class="font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-wider">PÁGINASFAST</a></p> </div> <div class="flex gap-6 mt-4 md:mt-0"> <a href="/privacidad" class="hover:text-white transition-colors">Privacidad</a> <a href="/terminos" class="hover:text-white transition-colors">Términos</a> </div> </div> </div> </footer>`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/FooterGeneric.astro", void 0);

const $$FooterService = createComponent(($$result, $$props, $$slots) => {
  const { company, social } = siteConfig;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-50 text-slate-500 py-12 text-sm border-t border-slate-200"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8"> <div class="lg:col-span-2"> <a href="/" class="flex items-center gap-3 mb-6" aria-label="Inicio"> <div class="w-12 h-12 md:w-[72px] md:h-[72px] flex items-center justify-center"> <img src="/images/logo.png" alt="Servicios Eléctricos RM" class="w-full h-full object-contain"> </div> <div class="flex flex-col justify-center -space-y-0.5"> <span class="block font-extrabold text-slate-900 text-xl leading-none tracking-tight"> ${company.logoText}<span class="text-primary">${company.logoTextHighlight}</span> </span> <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"> ${renderSlot($$result, $$slots["default"])} <!-- Region text --> </span> </div> </a> <p class="mb-6 text-slate-500 max-w-xs leading-relaxed">
Soluciones profesionales y confiables. Contáctanos para más información sobre nuestros servicios.
</p> <div class="flex gap-4"> ${social.facebook && renderTemplate`<a${addAttribute(social.facebook, "href")} class="text-slate-500 hover:text-primary transition" aria-label="Facebook"> <i class="fa-brands fa-facebook text-xl"></i> </a>`} ${social.instagram && renderTemplate`<a${addAttribute(social.instagram, "href")} class="text-slate-500 hover:text-primary transition" aria-label="Instagram"> <i class="fa-brands fa-instagram text-xl"></i> </a>`} ${social.twitter && renderTemplate`<a${addAttribute(social.twitter, "href")} class="text-slate-500 hover:text-primary transition" aria-label="Twitter"> <i class="fa-brands fa-twitter text-xl"></i> </a>`} ${social.linkedin && renderTemplate`<a${addAttribute(social.linkedin, "href")} class="text-slate-500 hover:text-primary transition" aria-label="LinkedIn"> <i class="fa-brands fa-linkedin text-xl"></i> </a>`} </div> </div> <div> <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Industria</h4> <ul class="space-y-2"> <li><a href="/empresas-industria/montaje-electrico/tableros-electricos" class="hover:text-primary transition">Tableros Eléctricos</a></li> <li><a href="/empresas-industria/montaje-electrico/escalerillas-portacables" class="hover:text-primary transition">Escalerillas</a></li> <li><a href="/empresas-industria/montaje-electrico/bandejas-portaconductores" class="hover:text-primary transition">Bandejas</a></li> <li><a href="/empresas-industria" class="font-medium text-primary hover:underline text-xs mt-2 block">Ver todo Industrial &rarr;</a></li> </ul> </div> <div> <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Hogar</h4> <ul class="space-y-2"> <li><a href="/hogar-condominios/empalme-electrico-rural" class="hover:text-primary transition">Empalmes</a></li> <li><a href="/hogar-condominios/gasfiteria-a-domicilio" class="hover:text-primary transition">Gasfitería</a></li> <li><a href="/hogar-condominios/electricidad-domiciliaria" class="hover:text-primary transition">Electricista</a></li> <li><a href="/hogar-condominios" class="font-medium text-primary hover:underline text-xs mt-2 block">Ver todo Hogar &rarr;</a></li> </ul> </div> <div> <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Blog & Ayuda</h4> <ul class="space-y-2"> <li><a href="/blog" class="hover:text-primary transition">Consejos de Mantención</a></li> <li><a href="/faq" class="hover:text-primary transition">Preguntas Frecuentes</a></li> <li><a href="/contacto" class="hover:text-primary transition">Contacto Administrativo</a></li> </ul> </div> </div> <div class="border-t border-slate-200 pt-8 text-center flex flex-col md:flex-row justify-between items-center pb-24 md:pb-0"> <div class="flex flex-col items-center md:items-start gap-2"> <p>&copy; ${currentYear} ${company.name}. Todos los derechos reservados.</p> <p class="text-xs text-slate-400 font-medium">
Desarrollado por <a href="https://www.paginasfast.cl" target="_blank" rel="noopener" class="font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wider">PÁGINASFAST</a> </p> </div> </div> </div> </footer>`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/FooterService.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`${renderComponent($$result, "FooterService", $$FooterService, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}` }`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://chileelectrico.cl");
const $$WhatsAppFloat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WhatsAppFloat;
  const { company } = siteConfig;
  const currentPath = Astro2.url.pathname;
  let whatsappText = "Hola,%20vi%20su%20web%20y%20necesito%20m\xE1s%20informaci\xF3n.";
  if (currentPath.includes("empresas-industria")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20industrial.";
  } else if (currentPath.includes("hogar-condominios")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20para%20hogar.";
  }
  return renderTemplate`<!-- Mobile Bottom Bar -->${maybeRenderHead()}<div class="fixed bottom-0 left-0 right-0 z-50 md:hidden flex flex-col shadow-[0_-4px_20px_rgba(0,0,0,0.15)]" data-astro-cid-y4hhiakm> <div class="bg-white p-3 flex gap-3 border-t border-slate-100" data-astro-cid-y4hhiakm> <a${addAttribute(`tel:${company.phone}`, "href")} class="flex-1 bg-blue-600 text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 active:scale-95 transition shadow-lg shadow-blue-600/20" aria-label="Llamar ahora" data-astro-cid-y4hhiakm> <i class="fa-solid fa-phone animate-pulse" data-astro-cid-y4hhiakm></i> Llamar
</a> <a${addAttribute(`https://wa.me/${company.whatsapp}?text=${whatsappText}`, "href")} class="flex-1 bg-green-600 text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 active:scale-95 transition shadow-lg shadow-green-500/20" aria-label="WhatsApp" data-astro-cid-y4hhiakm> <i class="fa-brands fa-whatsapp text-xl" data-astro-cid-y4hhiakm></i> WhatsApp
</a> </div> </div> <!-- Desktop Floating Button --> <div class="wa-floating-btn hidden md:flex" id="wa-btn" data-astro-cid-y4hhiakm> <svg class="wa-icon wa-icon-logo" viewBox="0 0 24 24" data-astro-cid-y4hhiakm> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-y4hhiakm></path> </svg> <svg class="wa-icon wa-icon-close" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-y4hhiakm> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-y4hhiakm></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-y4hhiakm></line> </svg> <span class="wa-notification-dot" id="wa-dot" data-astro-cid-y4hhiakm>1</span> </div> <!-- Chat Box --> <div class="wa-chat-box" id="whatsapp-chat" data-astro-cid-y4hhiakm> <div class="wa-header" data-astro-cid-y4hhiakm> <button class="wa-close-btn" id="wa-close-btn" data-astro-cid-y4hhiakm>×</button> <img src="/images/logo.png" alt="Logo" class="w-12 h-12 rounded-full object-cover mr-4 border border-slate-100" data-astro-cid-y4hhiakm> <div class="wa-info" data-astro-cid-y4hhiakm> <h4 data-astro-cid-y4hhiakm>Nombre Empresa</h4> <p data-astro-cid-y4hhiakm>En línea</p> </div> </div> <div class="wa-body" data-astro-cid-y4hhiakm> <div class="wa-message" data-astro-cid-y4hhiakm> <div class="wa-msg-text" data-astro-cid-y4hhiakm>Hola, ¿en qué podemos ayudarte hoy?</div> <span class="wa-time" data-astro-cid-y4hhiakm>Justo ahora</span> </div> </div> <div class="wa-footer" data-astro-cid-y4hhiakm> <a${addAttribute(`https://wa.me/${company.whatsapp}?text=${whatsappText}`, "href")} target="_blank" class="wa-start-chat-btn" data-astro-cid-y4hhiakm>
COMENZAR CHAT
</a> </div> </div>  ${renderScript($$result, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/WhatsAppFloat.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/WhatsAppFloat.astro", void 0);

const $$Astro$2 = createAstro("https://chileelectrico.cl");
const $$StickyCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StickyCTA;
  const { company } = siteConfig;
  const currentPath = Astro2.url.pathname;
  let whatsappText = "Hola,%20vi%20su%20web%20y%20necesito%20m\xE1s%20informaci\xF3n.";
  if (currentPath.includes("empresas-industria")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20industrial.";
  } else if (currentPath.includes("hogar-condominios")) {
    whatsappText = "Hola,%20vi%20su%20web%20y%20me%20interesa%20un%20servicio%20para%20hogar.";
  }
  return renderTemplate`<!-- Desktop Sticky CTA (Optional, usuall Mobile Only is preferred but can add margin for desktop) --><!-- Mobile Sticky CTA -->${maybeRenderHead()}<div class="fixed bottom-0 left-0 w-full z-[100] md:hidden bg-slate-900 border-t border-amber-500/30 shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.3)] p-2"> <div class="grid grid-cols-2 gap-2"> <!-- Call Button --> <a${addAttribute(`tel:${company.phone}`, "href")} class="flex flex-col items-center justify-center bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg transition active:scale-95 border border-slate-700" data-gtm="phone_click_sticky"> <i class="fa-solid fa-phone text-amber-400 text-xl mb-1"></i> <span class="text-xs font-bold uppercase tracking-wide">Llamar</span> </a> <!-- WhatsApp Button --> <a${addAttribute(`https://wa.me/${company.whatsapp}?text=${whatsappText}`, "href")} class="flex flex-col items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg transition active:scale-95 shadow-lg" data-gtm="whatsapp_click_sticky"> <i class="fa-brands fa-whatsapp text-2xl mb-0.5"></i> <span class="text-xs font-bold uppercase tracking-wide">Cotiza Gratis</span> </a> </div> </div> ${renderScript($$result, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/StickyCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/components/StickyCTA.astro", void 0);

const $$Astro$1 = createAstro("https://chileelectrico.cl");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://chileelectrico.cl");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Servicios el\xE9ctricos profesionales en Regi\xF3n Metropolitana. Industrial y Domiciliario.", image = "/images/og-default.jpg", schema, regionText = "Regi\xF3n Metropolitana", noIndex = false } = Astro2.props;
  const { font } = siteConfig.theme;
  const fontConfig = {
    sans: {
      url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      family: "font-sans"
      // Tailwind default sans (Inter/System)
    },
    serif: {
      url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap",
      family: "font-serif"
    },
    mono: {
      url: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap",
      family: "font-mono"
    }
  };
  const currentFont = fontConfig[font] || fontConfig.sans;
  return renderTemplate(_b || (_b = __template([`<html lang="es" class="scroll-smooth"> <head><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-NQ44WHJ3');<\/script><!-- End Google Tag Manager test --><meta charset="UTF-8"><meta name="description"`, '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"', "><title>", '</title><!-- Canonical URL --><link rel="canonical"', "><!-- Robots --><!-- Robots -->", '<!-- Geo Meta Tags (Chile) --><meta name="geo.region" content="CL-RM"><meta name="geo.placename" content="Santiago, Regi\xF3n Metropolitana"><meta name="geo.position" content="-33.4489;-70.6693"><meta name="ICBM" content="-33.4489, -70.6693"><!-- Author & Publisher --><meta name="author" content="Servicios El\xE9ctricos RM"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="es_CL"><meta property="og:site_name" content="Servicios El\xE9ctricos RM"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- Page-specific Schema -->", '<!-- Global LocalBusiness Schema --><script type="application/ld+json">', '<\/script><!-- Dynamic Font Loading --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link', ' rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">', "", "</head> <body", '> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQ44WHJ3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) test --> ', " ", " ", " ", " ", " <script>\n            document.addEventListener('astro:page-load', () => {\n                let lastScroll = 0;\n                const navs = [document.getElementById('main-nav'), document.getElementById('service-nav')].filter(Boolean);\n                if (navs.length === 0) return;\n\n                window.addEventListener('scroll', () => {\n                    const currentScroll = window.scrollY;\n                    if (window.innerWidth < 1024) {\n                        if (currentScroll <= 0) {\n                            navs.forEach(nav => nav.classList.remove('-translate-y-full'));\n                            return;\n                        }\n                        if (currentScroll > lastScroll && currentScroll > 60) {\n                            navs.forEach(nav => nav.classList.add('-translate-y-full'));\n                        } else if (currentScroll < lastScroll) {\n                            navs.forEach(nav => nav.classList.remove('-translate-y-full'));\n                        }\n                    } else {\n                        navs.forEach(nav => nav.classList.remove('-translate-y-full'));\n                    }\n                    lastScroll = currentScroll;\n                }, { passive: true });\n            });\n        <\/script> </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(Astro2.url.href, "href"), noIndex ? renderTemplate`<meta name="robots" content="noindex, nofollow">` : renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`, addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Servicios El\xE9ctricos RM",
    "description": "Servicios el\xE9ctricos industriales y domiciliarios en la Regi\xF3n Metropolitana. Tableros el\xE9ctricos, empalmes rurales, gasfiter\xEDa y m\xE1s.",
    "url": "https://chileelectrico.cl",
    "telephone": "+56912345678",
    "email": "rivera.ale98@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "Regi\xF3n Metropolitana",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.4489,
      "longitude": -70.6693
    },
    "areaServed": [
      { "@type": "City", "name": "Lampa" },
      { "@type": "City", "name": "Pudahuel" },
      { "@type": "City", "name": "San Bernardo" },
      { "@type": "City", "name": "Chicureo" },
      { "@type": "City", "name": "Buin" },
      { "@type": "City", "name": "Melipilla" }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": []
  })), addAttribute(currentFont.url, "href"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), addAttribute(`bg-slate-50 antialiased pb-24 md:pb-0 ${currentFont.family}`, "class"), renderComponent($$result, "Navbar", $$Navbar, {}, { "default": ($$result2) => renderTemplate`${regionText}` }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "WhatsAppFloat", $$WhatsAppFloat, { "data-astro-transition-persist": createTransitionScope($$result, "ka4hzxuw") }), renderComponent($$result, "StickyCTA", $$StickyCTA, { "data-astro-transition-persist": createTransitionScope($$result, "ehzm2os6") }));
}, "/Users/alejandroriveracarrasco/proyectos-personales/servicios-electricos/src/layouts/Layout.astro", "self");

export { $$Layout as $, siteConfig as s };
