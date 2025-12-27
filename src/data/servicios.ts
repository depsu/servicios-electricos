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
    deliverables?: string[];
    faq?: { question: string; answer: string }[];
}

export const services: Service[] = [
    // ============================================================
    // B2B INDUSTRIAL - PRIORITY 1 (High Ticket)
    // ============================================================
    {
        slug: 'montaje-electrico/tableros-electricos',
        title: 'Tableros Eléctricos Industriales',
        segment: 'industrial',
        description: 'Diseño, fabricación, montaje y certificación SEC de tableros eléctricos de fuerza y control para industria, minería y centros logísticos. Trabajamos con las mejores marcas del mercado (Schneider Electric, Legrand, ABB) y entregamos documentación técnica completa.',
        shortDescription: 'Diseño y montaje certificado SEC para industria.',
        icon: 'tablero',
        benefits: [
            'Certificación TE1 incluida en el servicio',
            'Planos As-Built actualizados entregados en digital',
            'Componentes de primeras marcas (Schneider, Legrand, ABB)',
            'Garantía técnica de 12 meses por escrito',
            'Pruebas FAT antes de despacho',
            'Soporte post-venta y mantención preventiva'
        ],
        features: [
            'Tableros de Distribución de Fuerza (TDF)',
            'Tableros de Control y Comando (TCC)',
            'Centros de Control de Motores (CCM)',
            'Bancos de Condensadores y Corrección FP',
            'Tableros de Transferencia Automática (TTA)',
            'Tableros de Alumbrado y Fuerza Normal'
        ],
        techSpecs: [
            { label: 'Normativa', value: 'NCh Elec. 4/2003 / RIC / IEC 61439' },
            { label: 'Índice IP', value: 'IP54 / IP65 / IP66 según ambiente' },
            { label: 'Material Gabinete', value: 'Acero Carbono RAL7035 / Inox 304' },
            { label: 'Voltaje Nominal', value: '380V / 440V / 660V trifásico' },
            { label: 'Corriente Nominal', value: 'Hasta 4000A (barras de cobre)' },
            { label: 'Capacidad de Corto', value: 'Icc hasta 65kA' }
        ],
        processSteps: [
            { title: 'Levantamiento', desc: 'Visita técnica para evaluar cargas, espacio y requerimientos específicos.' },
            { title: 'Ingeniería', desc: 'Diseño unilineal, cuadro de cargas y especificación de protecciones.' },
            { title: 'Fabricación', desc: 'Armado en taller propio con pruebas FAT de aislamiento y continuidad.' },
            { title: 'Montaje', desc: 'Instalación en terreno, conexionado y energización controlada.' },
            { title: 'Certificación', desc: 'Inscripción TE1 ante SEC y entrega de documentación As-Built.' }
        ],
        deliverables: [
            'Tablero armado, probado y etiquetado',
            'Planos Unilineal y de Control As-Built (AutoCAD/PDF)',
            'Certificado de Pruebas de Aislamiento',
            'Inscripción TE1 SEC aprobada',
            'Manual de operación y mantención',
            'Garantía técnica de 12 meses'
        ],
        faq: [
            { question: '¿Cuánto demora la fabricación de un tablero?', answer: 'Dependiendo de la complejidad, entre 2 a 4 semanas desde la aprobación del diseño. Para urgencias, ofrecemos modalidad fast-track.' },
            { question: '¿Trabajan con especificaciones de ingeniería propias del cliente?', answer: 'Sí, podemos fabricar según planos entregados por su ingeniería o desarrollar la ingeniería completa desde cero.' },
            { question: '¿Incluyen la inscripción TE1?', answer: 'Sí, gestionamos todo el trámite ante la SEC y entregamos el certificado aprobado.' },
            { question: '¿Qué garantía tienen los tableros?', answer: '12 meses de garantía técnica que cubre defectos de fabricación y componentes.' }
        ]
    },
    {
        slug: 'montaje-electrico/escalerillas-portacables',
        title: 'Escalerillas Porta-cables',
        segment: 'industrial',
        description: 'Instalación profesional de sistemas de canalización de alto tráfico. Escalerillas tipo escalera en acero galvanizado en caliente, aluminio o acero inoxidable para naves industriales, bodegas y centros de distribución. Cumplimiento de normas sísmicas NCh433.',
        shortDescription: 'Canalización de alto tráfico para naves industriales.',
        icon: 'escalerilla',
        benefits: [
            'Ordenamiento y seguridad del cableado de potencia',
            'Fácil mantenimiento y escalabilidad futura',
            'Soportación sísmica certificada NCh433',
            'Rapidez de ejecución (equipos propios)',
            'Materiales resistentes a ambientes corrosivos',
            'Trazados optimizados para minimizar caídas de tensión'
        ],
        features: [
            'Escalerillas tipo escalera 100mm a 600mm',
            'Curvas horizontales y verticales prefabricadas',
            'Derivaciones en T y Cruz',
            'Soportes sísmicos arriostrados',
            'Accesorios de unión y fijación certificados',
            'Tapas de protección opcionales'
        ],
        techSpecs: [
            { label: 'Material', value: 'Acero Galvanizado en Caliente / Aluminio / Inox 316' },
            { label: 'Espesor', value: '1.5mm / 2.0mm / 2.5mm según carga' },
            { label: 'Norma Fabricación', value: 'NEMA VE-1 / IEC 61537' },
            { label: 'Clase de Carga', value: 'Clase 8A / 8B / 8C (hasta 200 kg/m)' },
            { label: 'Altura Instalación', value: 'Hasta 12 metros con equipos propios' },
            { label: 'Soportación Sísmica', value: 'NCh433 / NCh2369 certificada' }
        ],
        processSteps: [
            { title: 'Visita Técnica', desc: 'Levantamiento de trazados, interferencias y puntos de fijación.' },
            { title: 'Diseño de Ruta', desc: 'Plano isométrico con materiales y especificación de soportes.' },
            { title: 'Suministro', desc: 'Entrega de materiales en obra según programa.' },
            { title: 'Montaje', desc: 'Instalación con equipos de altura y personal certificado.' },
            { title: 'Entrega', desc: 'Protocolo de recepción y planos As-Built de trazado.' }
        ],
        deliverables: [
            'Sistema de escalerillas instalado y fijado',
            'Memoria de cálculo de soportación',
            'Planos de trazado As-Built',
            'Certificado de trabajo en altura',
            'Protocolo de recepción firmado'
        ],
        faq: [
            { question: '¿Trabajan en altura?', answer: 'Sí, contamos con personal certificado ODI y equipos propios (andamios, elevadores) para trabajos hasta 12 metros.' },
            { question: '¿Qué material recomiendan para ambientes corrosivos?', answer: 'Para ambientes con humedad o químicos, recomendamos acero galvanizado en caliente o inoxidable 316.' },
            { question: '¿Pueden integrar corrientes débiles en el mismo trazado?', answer: 'Sí, diseñamos rutas separadas o con tabiques divisorios para cumplir normativa EMC.' }
        ]
    },
    {
        slug: 'montaje-electrico/bandejas-portaconductores',
        title: 'Bandejas Portaconductores',
        segment: 'industrial',
        description: 'Sistemas de bandejas ranuradas, lisas y de fondo perforado para distribución eléctrica y corrientes débiles en oficinas, bodegas, data centers y retail. Solución estética y funcional para cableado horizontal y vertical.',
        shortDescription: 'Distribución eléctrica eficiente para oficinas y bodegas.',
        icon: 'bandeja',
        benefits: [
            'Estética industrial limpia y profesional',
            'Separación de corrientes (fuerza/datos/control)',
            'Variedad de materiales y terminaciones',
            'Instalación rápida con accesorios modulares',
            'Ideal para oficinas, retail y data centers',
            'Cumple normativa para corrientes débiles'
        ],
        features: [
            'Bandejas ranuradas tipo malla',
            'Bandejas lisas para datos y comunicaciones',
            'Bandejas perforadas para ventilación',
            'Canaletas con tapa para estética',
            'Accesorios de cambio de nivel',
            'Soportes de pared y cielo falso'
        ],
        techSpecs: [
            { label: 'Material', value: 'Acero Galvanizado / Aluminio / Pintado RAL' },
            { label: 'Anchos Disponibles', value: '50mm / 100mm / 150mm / 200mm / 300mm' },
            { label: 'Norma', value: 'IEC 61537 / NEMA VE-2' },
            { label: 'Carga Admisible', value: '20 a 80 kg/m según modelo' },
            { label: 'Acabado', value: 'Galvanizado / Electro-zinc / RAL a pedido' }
        ],
        processSteps: [
            { title: 'Evaluación', desc: 'Análisis de necesidades: cantidad de cables, separación de sistemas.' },
            { title: 'Diseño', desc: 'Plano de rutas con especificación de bandejas y accesorios.' },
            { title: 'Instalación', desc: 'Montaje limpio sin interferir con operaciones.' },
            { title: 'Cableado', desc: 'Tendido ordenado y etiquetado de conductores.' }
        ],
        deliverables: [
            'Sistema de bandejas instalado',
            'Plano de distribución de rutas',
            'Etiquetado de circuitos',
            'Protocolo de recepción'
        ],
        faq: [
            { question: '¿Sirven para fibra óptica?', answer: 'Sí, las bandejas lisas y de malla son ideales para fibra óptica y cables de datos.' },
            { question: '¿Se pueden pintar del color corporativo?', answer: 'Sí, ofrecemos acabado RAL personalizado a pedido.' }
        ]
    },

    // ============================================================
    // B2C HOGAR / RURAL - PRIORITY 1
    // ============================================================
    {
        slug: 'empalme-electrico-rural',
        title: 'Empalmes Eléctricos Rurales',
        segment: 'hogar',
        description: 'Gestión completa de empalmes eléctricos para parcelas, terrenos rurales y loteos. Desde el estudio de factibilidad con CGE o Enel hasta la conexión final del medidor. Instalamos postes, acometidas aéreas o subterráneas, y gestionamos toda la tramitación TE1 ante la SEC.',
        shortDescription: 'Electricidad para tu parcela, trámite completo.',
        icon: 'poste',
        benefits: [
            'Trámite 100% aprobado en CGE/Enel/Chilquinta',
            'Instalación de poste de hormigón o madera',
            'Acometida aérea o subterránea',
            'Aumento de capacidad de empalmes existentes',
            'Visita técnica de factibilidad GRATIS',
            'Garantía de aprobación SEC'
        ],
        features: [
            'Empalmes monofásicos hasta 10 kW',
            'Empalmes trifásicos hasta 50 kW',
            'Postación con poste de hormigón 9m',
            'Acometida subterránea en ductos',
            'Tablero de medida homologado',
            'Regularización de empalmes existentes'
        ],
        techSpecs: [
            { label: 'Capacidad Monofásico', value: '3 kW / 5 kW / 7 kW / 10 kW' },
            { label: 'Capacidad Trifásico', value: '10 kW / 20 kW / 30 kW / 50 kW' },
            { label: 'Voltaje', value: '220V monofásico / 380V trifásico' },
            { label: 'Poste', value: 'Hormigón armado 9m o madera impregnada' },
            { label: 'Compañías', value: 'CGE / Enel / Chilquinta / Cooperativas' },
            { label: 'Normativa', value: 'TE1 / RIC / NCh Elec. 4/2003' }
        ],
        processSteps: [
            { title: 'Factibilidad', desc: 'Visitamos tu terreno para verificar punto de conexión más cercano (sin costo).' },
            { title: 'Proyecto TE1', desc: 'Elaboramos e ingresamos la solicitud a la SEC.' },
            { title: 'Aprobación SEC', desc: 'Gestionamos la aprobación del proyecto TE1.' },
            { title: 'Empalme Físico', desc: 'Instalamos poste, caja de empalme y protecciones.' },
            { title: 'Conexión Compañía', desc: 'Coordinamos con CGE/Enel para el medidor definitivo.' }
        ],
        deliverables: [
            'Poste de hormigón armado instalado',
            'Caja de empalme homologada',
            'Tablero de protecciones interior',
            'Certificado TE1 aprobado por SEC',
            'Contrato comercial con la compañía',
            'Garantía de instalación 12 meses'
        ],
        faq: [
            { question: '¿Cuánto demora el trámite completo?', answer: 'El proceso toma entre 4 a 8 semanas dependiendo de la compañía y la complejidad del proyecto.' },
            { question: '¿Pueden aumentar la capacidad de mi empalme actual?', answer: 'Sí, gestionamos aumentos de capacidad de monofásico a trifásico o incrementos de kW.' },
            { question: '¿Qué pasa si el poste de la compañía está muy lejos?', answer: 'Instalamos postes intermedios o extensiones de línea para llegar a su propiedad.' },
            { question: '¿Trabajan con todas las compañías?', answer: 'Sí, trabajamos con CGE, Enel, Chilquinta y cooperativas eléctricas rurales.' },
            { question: '¿La visita de factibilidad tiene costo?', answer: 'No, la primera visita técnica es completamente gratuita y sin compromiso.' }
        ]
    },
    {
        slug: 'gasfiteria-a-domicilio',
        title: 'Gasfitería a Domicilio',
        segment: 'hogar',
        description: 'Servicio profesional de gasfitería para emergencias y proyectos. Detección y reparación de fugas, destape de cañerías, instalación de calefont, termos, llaves y artefactos sanitarios. Llegamos rápido y dejamos limpio.',
        shortDescription: 'Reparaciones y urgencias, llegamos rápido.',
        icon: 'gota',
        benefits: [
            'Técnicos certificados y con experiencia',
            'Sin ensuciar tu casa (protegemos pisos)',
            'Garantía por escrito en todas las reparaciones',
            'Atención de urgencias en menos de 2 horas',
            'Presupuesto antes de comenzar',
            'Materiales de primera calidad incluidos'
        ],
        features: [
            'Reparación de fugas de agua',
            'Destape de cañerías y desagües',
            'Instalación de calefont a gas',
            'Instalación de termos eléctricos',
            'Cambio de llaves y grifería',
            'Instalación de WC, lavamanos y duchas'
        ],
        techSpecs: [
            { label: 'Tiempo de Respuesta', value: '1-2 horas en zona urbana' },
            { label: 'Horario', value: 'Lunes a Sábado 8:00 - 20:00' },
            { label: 'Urgencias', value: '24/7 con recargo nocturno' },
            { label: 'Garantía', value: 'Mínimo 6 meses en reparaciones' },
            { label: 'Cobertura', value: 'Toda la Región Metropolitana' }
        ],
        processSteps: [
            { title: 'Contacto', desc: 'Llámanos o escribe por WhatsApp, describiendo el problema.' },
            { title: 'Diagnóstico', desc: 'Técnico evalúa en terreno y entrega presupuesto antes de trabajar.' },
            { title: 'Reparación', desc: 'Ejecutamos el trabajo protegiendo tu hogar.' },
            { title: 'Garantía', desc: 'Entregamos boleta y garantía por escrito.' }
        ],
        deliverables: [
            'Reparación o instalación terminada',
            'Prueba de funcionamiento en su presencia',
            'Boleta o factura',
            'Garantía por escrito (6-12 meses)',
            'Limpieza del área de trabajo'
        ],
        faq: [
            { question: '¿Cobran el diagnóstico?', answer: 'El diagnóstico tiene un costo mínimo que se descuenta si contrata el servicio.' },
            { question: '¿Atienden urgencias los fines de semana?', answer: 'Sí, contamos con servicio de urgencias 24/7 con recargo por horario nocturno y festivos.' },
            { question: '¿Traen los materiales?', answer: 'Sí, llevamos los materiales más comunes. Para piezas especiales, coordinamos el suministro.' },
            { question: '¿Trabajan con boleta o factura?', answer: 'Emitimos boleta electrónica o factura según su preferencia.' }
        ]
    },
    {
        slug: 'pintura-interior-exterior',
        title: 'Pintura de Casas y Fachadas',
        segment: 'hogar',
        description: 'Servicio de pintura profesional para renovación de espacios interiores y exteriores. Terminaciones finas, tratamiento de muros dañados, reparación de grietas y limpieza total al finalizar. Usamos pinturas lavables de primera calidad.',
        shortDescription: 'Renueva tu hogar con terminaciones impecables.',
        icon: 'brocha',
        benefits: [
            'Protección total de muebles y pisos',
            'Pinturas lavables de alta calidad (Sherwin, Sipa)',
            'Reparación de grietas y desperfectos incluida',
            'Presupuesto cerrado sin sorpresas',
            'Limpieza completa al terminar',
            'Colores asesorados por profesional'
        ],
        features: [
            'Pintura de muros interiores',
            'Pintura de cielos y cornisas',
            'Pintura de fachadas exteriores',
            'Esmalte de puertas y ventanas',
            'Impermeabilización de muros',
            'Texturado y efectos decorativos'
        ],
        techSpecs: [
            { label: 'Rendimiento', value: '20-30 m² por día por pintor' },
            { label: 'Capas', value: '2 manos mínimo + sellador' },
            { label: 'Marcas', value: 'Sherwin Williams / Sipa / Ceresita' },
            { label: 'Garantía', value: '12 meses en terminaciones' }
        ],
        processSteps: [
            { title: 'Visita', desc: 'Evaluamos el estado de los muros y tomamos medidas.' },
            { title: 'Presupuesto', desc: 'Entregamos cotización detallada por metro cuadrado.' },
            { title: 'Preparación', desc: 'Protegemos muebles, reparamos grietas y aplicamos sellador.' },
            { title: 'Pintura', desc: 'Aplicamos las manos necesarias para cobertura perfecta.' },
            { title: 'Entrega', desc: 'Limpieza total y entrega impecable.' }
        ],
        deliverables: [
            'Muros pintados con terminación profesional',
            'Grietas reparadas y empastadas',
            'Limpieza completa del espacio',
            'Garantía de 12 meses'
        ],
        faq: [
            { question: '¿Debo comprar la pintura?', answer: 'No, incluimos la pintura en el presupuesto. Usted solo elige el color.' },
            { question: '¿Cuánto demora pintar una casa?', answer: 'Una casa promedio (3 dormitorios) toma entre 3 a 5 días hábiles.' },
            { question: '¿Mueven los muebles?', answer: 'Sí, movemos y protegemos los muebles. Solo pedimos acceso despejado.' }
        ]
    },
    {
        slug: 'electricidad-domiciliaria',
        title: 'Electricista a Domicilio',
        segment: 'hogar',
        description: 'Soluciones eléctricas seguras para tu hogar. Reparación de cortos circuitos, cambios de enchufes e interruptores, instalación de iluminación LED, recableado de circuitos y regularizaciones TE1 para venta o arriendo de propiedades.',
        shortDescription: 'Seguridad eléctrica para tu familia.',
        icon: 'rayo',
        benefits: [
            'Arreglamos cortos circuitos y fallas eléctricas',
            'Instalación de iluminación LED moderna',
            'Certificados TE1 para venta/arriendo de propiedades',
            'Electricistas autorizados SEC',
            'Trabajo limpio y ordenado',
            'Garantía en todas las reparaciones'
        ],
        features: [
            'Reparación de cortos circuitos',
            'Cambio de enchufes e interruptores',
            'Instalación de lámparas y focos LED',
            'Instalación de tableros eléctricos',
            'Recableado de circuitos antiguos',
            'Certificaciones TE1 para propiedades'
        ],
        techSpecs: [
            { label: 'Personal', value: 'Electricistas clase D SEC' },
            { label: 'Normativa', value: 'NCh Elec. 4/2003 / RIC' },
            { label: 'Garantía', value: '6 meses en reparaciones' },
            { label: 'Certificación', value: 'TE1 para venta/arriendo' }
        ],
        processSteps: [
            { title: 'Contacto', desc: 'Cuéntanos tu problema por teléfono o WhatsApp.' },
            { title: 'Visita Técnica', desc: 'Evaluamos la falla y entregamos presupuesto.' },
            { title: 'Reparación', desc: 'Resolvemos el problema cumpliendo normativa SEC.' },
            { title: 'Garantía', desc: 'Entregamos boleta y garantía por escrito.' }
        ],
        deliverables: [
            'Falla eléctrica reparada y probada',
            'Boleta electrónica',
            'Garantía por escrito',
            'Recomendaciones de seguridad'
        ],
        faq: [
            { question: '¿Pueden hacer la regularización TE1 de mi casa?', answer: 'Sí, evaluamos la instalación, hacemos las reparaciones necesarias y gestionamos el certificado TE1.' },
            { question: '¿Cuánto cuesta una visita?', answer: 'El diagnóstico tiene un costo mínimo que se descuenta al contratar la reparación.' },
            { question: '¿Instalan paneles solares?', answer: 'No es nuestro servicio principal, pero podemos referirlo a especialistas de confianza.' }
        ]
    }
];
