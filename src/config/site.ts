export interface SiteConfig {
    company: {
        name: string;
        logoText: string;
        logoTextHighlight: string;
        email: string;
        phone: string;
        whatsapp: string;
        address: string;
    };
    social: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        twitter?: string;
    };
    theme: {
        navbarVariant: 'generic' | 'service';
        footerVariant: 'generic' | 'service';
        font: 'sans' | 'serif' | 'mono';
        colors: {
            primary: string;
            secondary: string;
            accent: string;
        };
    };
    features: {
        showServiceStatus: boolean;
        showBlog: boolean;
        showTestimonials: boolean;
    };
}

export const siteConfig: SiteConfig = {
    company: {
        name: "Servicios Eléctricos RM",
        logoText: "SERV",
        logoTextHighlight: "ELECTRO",
        email: "contacto@chileelectrico.cl",
        phone: "+56 9 3015 3632",
        whatsapp: "56930153632",
        address: "Región Metropolitana, Chile"
    },
    social: {
        // facebook: "https://facebook.com",
        // instagram: "https://instagram.com"
    },
    theme: {
        navbarVariant: 'service',
        footerVariant: 'service',
        font: 'sans', // 'sans' | 'serif' | 'mono'
        colors: {
            primary: '#f59e0b',   // amber-500 (Electric Yellow - Energía)
            secondary: '#0f172a', // slate-900 (Industrial Deep Blue)
            accent: '#10b981'     // emerald-500 (Safety Green - SEC)
        }
    },
    features: {
        showServiceStatus: true,
        showBlog: false, // User requested no blog for now
        showTestimonials: true
    }
};
