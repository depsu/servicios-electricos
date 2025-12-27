export interface Service {
    slug: string;
    title: string;
    segment: 'industrial' | 'hogar';
    description: string;
    shortDescription: string;
    icon: string;
    benefits: string[];
    features?: string[];
    heroImage?: string;
    techSpecs?: { label: string; value: string }[];
    processSteps?: { title: string; desc: string }[];
    deliverables?: string[]; // New field for "Entregables"
}

export const services: Service[] = [
    // --- INDUSTRIAL ---
    {
        slug: 'montaje-electrico/tableros-electricos',
        title: 'Tableros Eléctricos Industriales',
        segment: 'industrial',
        description: 'Diseño, montaje y certificación de tableros eléctricos de fuerza y control para industria y minería. Cumplimiento normativa SEC.',
        shortDescription: 'Diseño y montaje certificado SEC para industria.',
        icon: 'tablero',
        benefits: [
            'Certificación TE1 incluida',
            'Planos As-Built actualizados',
            'Componentes de primeras marcas (Schneider, Legrand)',
            'Garantía técnica de 1 año'
        ],
        deliverables: [
            'Tablero armado y probado',
            'Planos As-Built (Unilineal y Control)',
            'Certificado de Pruebas de Aislamiento',
            'Inscripción TE1 SEC'
        ],
        features: [
            'Tableros de Distribución de Fuerza',
            'Tableros de Control y Comando',
            'Bancos de Condensadores',
            'Tableros de Transferencia Automática (TTA)'
        ]
    },
    {
        slug: 'montaje-electrico/escalerillas-portacables',
        title: 'Escalerillas Porta-cables',
        segment: 'industrial',
        description: 'Instalación de sistemas de canalización de alto tráfico. Escalerillas galvanizadas y de aluminio para naves industriales.',
        shortDescription: 'Canalización de alto tráfico para naves industriales.',
        icon: 'escalerilla',
        benefits: [
            'Ordenamiento y seguridad de cableado',
            'Fácil mantenimiento y escalabilidad',
            'Soportación sísmica certificada',
            'Rapidez de ejecución'
        ]
    },
    {
        slug: 'montaje-electrico/bandejas-portaconductores',
        title: 'Bandejas Portaconductores',
        segment: 'industrial',
        description: 'Sistemas de bandejas ranuradas y lisas para distribución eléctrica y corrientes débiles en oficinas y bodegas.',
        shortDescription: 'Distribución eléctrica eficiente para oficinas y bodegas.',
        icon: 'bandeja',
        benefits: [
            'Estética industrial limpia',
            'Separación de corrientes (fuerza/datos)',
            'Variedad de materiales y terminaciones'
        ]
    },

    // --- HOGAR / RURAL ---
    {
        slug: 'empalme-electrico-rural',
        title: 'Empalmes Eléctricos Rurales',
        segment: 'hogar',
        description: 'Gestión completa de empalmes para parcelas y terrenos rurales. Desde la factibilidad hasta la conexión final con la compañía.',
        shortDescription: 'Electricidad para tu parcela, trámite completo.',
        icon: 'poste',
        benefits: [
            'Trámite 100% aprobado en CGE/Enel',
            'Instalación de poste y acometida',
            'Aumento de capacidad',
            'Visita técnica de factibilidad gratis'
        ]
    },
    {
        slug: 'gasfiteria-a-domicilio',
        title: 'Gasfitería a Domicilio',
        segment: 'hogar',
        description: 'Servicio de gasfitería para emergencias y proyectos. Detección de fugas, instalación de calefont y redes de agua.',
        shortDescription: 'Reparaciones y urgencias, llegamos rápido.',
        icon: 'gota',
        benefits: [
            'Técnicos certificados SEC',
            'Sin ensuciar tu casa',
            'Garantía por escrito',
            'Atención de urgencias'
        ]
    },
    {
        slug: 'pintura-interior-exterior',
        title: 'Pintura de Casas y Fachadas',
        segment: 'hogar',
        description: 'Servicio de pintura profesional para renovación de espacios. Terminaciones finas, tratamiento de muros y limpieza total.',
        shortDescription: 'Renueva tu hogar con terminaciones impecables.',
        icon: 'brocha',
        benefits: [
            'Protección total de muebles y pisos',
            'Pinturas lavables de alta calidad',
            'Reparación de grietas incluida',
            'Presupuesto cerrado sin sorpresas'
        ]
    },
    {
        slug: 'electricidad-domiciliaria',
        title: 'Electricista a Domicilio',
        segment: 'hogar',
        description: 'Soluciones eléctricas seguras para tu hogar. Cambios de enchufe, iluminación LED, recableado y regularizaciones TE1.',
        shortDescription: 'Seguridad eléctrica para tu familia.',
        icon: 'rayo',
        benefits: [
            'Arreglamos cortos circuitos',
            'Instalación de lámparas',
            'Certificados TE1 para venta/arriendo',
            'Electricistas autorizados'
        ]
    }
];
