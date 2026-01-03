document.addEventListener('astro:page-load', () => {
    // Funciones globales para abrir/cerrar menú
    window.openMenu = function () {
        const overlay = document.getElementById('mobile-menu-overlay');
        const panel = document.getElementById('mobile-menu-panel');
        if (overlay && panel) {
            overlay.classList.remove('invisible', 'opacity-0');
            panel.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        }
    }

    window.closeMenu = function () {
        const overlay = document.getElementById('mobile-menu-overlay');
        const panel = document.getElementById('mobile-menu-panel');
        if (overlay && panel) {
            panel.classList.add('translate-x-full');
            overlay.classList.add('invisible', 'opacity-0');
            document.body.style.overflow = '';
        }
    }

    // Lógica scroll para ocultar navbars
    let lastScroll = 0;
    const navs = [document.getElementById('main-nav'), document.getElementById('service-nav')].filter(Boolean);

    // Si no hay navs, no hacemos nada
    if (navs.length === 0) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Aplicar solo en móvil/tablet (< 1024px)
        if (window.innerWidth < 1024) {
            // Si estamos arriba del todo, mostrar siempre
            if (currentScroll <= 0) {
                navs.forEach(nav => nav.classList.remove('-translate-y-full'));
                return;
            }

            // Scroll hacia ABAJO y hemos bajado más de 60px -> OCULTAR
            if (currentScroll > lastScroll && currentScroll > 60) {
                navs.forEach(nav => nav.classList.add('-translate-y-full'));
            }
            // Scroll hacia ARRIBA -> MOSTRAR
            else if (currentScroll < lastScroll) {
                navs.forEach(nav => nav.classList.remove('-translate-y-full'));
            }
        } else {
            // En escritorio siempre visible
            navs.forEach(nav => nav.classList.remove('-translate-y-full'));
        }

        lastScroll = currentScroll;
    }, { passive: true });
});
