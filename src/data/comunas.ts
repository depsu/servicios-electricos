export interface Comuna {
    slug: string;
    name: string;
    type: 'industrial' | 'rural' | 'premium' | 'volumen';
    serviceFocus: string[]; // Slugs of top services
    microZones: string[]; // e.g. "Valle Grande", "ENEA"
    intro: string;
    responseTime: string;
    // SEO: el `intro` se ve en el hero de la página. Si ese texto no le sirve al que
    // busca en Google (p.ej. habla solo de industria y la búsqueda es de casa),
    // aquí va la descripción que verá en el resultado.
    metaDescription?: string;
    // Razones concretas de ESTA comuna. Si se dejan vacías, todas las páginas de
    // cobertura quedan idénticas y Google las trata como una sola (thin content).
    proofPoints?: string[];
    // Preguntas propias de la zona. Alimentan el bloque visible y el schema FAQPage.
    faq?: { question: string; answer: string }[];
}

export const comunas: Comuna[] = [
    // --- INDUSTRIAL ---
    {
        slug: 'lampa-valle-grande',
        name: 'Lampa / Valle Grande',
        type: 'industrial',
        serviceFocus: ['montaje-electrico/tableros-electricos', 'montaje-electrico/escalerillas-portacables'],
        microZones: ['Valle Grande', 'La Montaña', 'Industrial Lampa'],
        intro: 'Servicios de montaje eléctrico especializado para el sector industrial de Lampa y Valle Grande. Atendemos bodegas y centros de distribución.',
        responseTime: 'Respuesta en 2 horas para emergencias industriales',
        metaDescription: 'Electricistas para bodegas, centros de distribución y viviendas en Lampa y Valle Grande: tableros, canalizaciones y empalmes. Trabajos declarados en la SEC.',
        proofPoints: [
            'Montaje en bodegas y centros de distribución sin detener la operación: coordinamos los cortes en horario de baja actividad',
            'Trabajo en altura con personal y equipos certificados, necesario en galpones de Valle Grande',
            'Lampa mezcla galpón y parcela: hacemos tanto el tablero de la bodega como el empalme de la casa'
        ],
        faq: [
            {
                question: '¿Atienden bodegas en el sector industrial de Lampa fuera del horario hábil?',
                answer: 'Sí. En centros de distribución lo habitual es intervenir de noche o el fin de semana, cuando el corte no frena la operación. Se acuerda la ventana de trabajo antes de partir.'
            },
            {
                question: '¿Qué pasa si mi bodega en Valle Grande necesita más potencia de la que tiene?',
                answer: 'Se evalúa el consumo actual y la proyección de cargas, y con eso se define si basta con adecuar el tablero o si hay que aumentar la capacidad del empalme ante la distribuidora. Es el servicio de aumento de capacidad eléctrica.'
            },
            {
                question: '¿Trabajan también en las parcelas del sector?',
                answer: 'Sí. En Lampa conviven el galpón industrial y la parcela de agrado, y hacemos ambos: empalmes rurales llave en mano y electricidad domiciliaria.'
            }
        ]
    },
    {
        slug: 'pudahuel-enea-lo-boza',
        name: 'Pudahuel / ENEA',
        type: 'industrial',
        serviceFocus: ['montaje-electrico/tableros-electricos', 'montaje-electrico/bandejas-portaconductores'],
        microZones: ['ENEA', 'Lo Boza', 'Puerto Madero', 'San Pablo'],
        intro: 'Expertos en normativa SEC para el parque industrial ENEA y Lo Boza. Mantención eléctrica y montaje de canalizaciones.',
        responseTime: 'Técnicos en ruta permanente en sector ENEA',
        metaDescription: 'Electricistas en Pudahuel, ENEA y Lo Boza: tableros, bandejas portaconductores y mantención eléctrica para bodegas y empresas. Declaración TE1 incluida.',
        proofPoints: [
            'Canalizaciones ordenadas y etiquetadas, como exigen las auditorías internas de las bodegas de ENEA',
            'Circuitos de potencia, control y datos separados en bandejas distintas, para evitar interferencias',
            'Planos as-built al terminar: la instalación queda documentada para el que venga después'
        ],
        faq: [
            {
                question: '¿Qué diferencia hay entre escalerillas y bandejas para mi bodega?',
                answer: 'La escalerilla es abierta y se usa para tramos largos de cables de potencia; la bandeja de fondo sólido protege mejor y sirve para control y datos. En la mayoría de las bodegas de ENEA se usan las dos, separadas por tipo de circuito.'
            },
            {
                question: '¿Entregan documentación para la auditoría de la empresa?',
                answer: 'Sí: protocolo de recepción, plano as-built del trazado y la declaración correspondiente ante la SEC cuando el trabajo lo requiere.'
            },
            {
                question: '¿Hacen mantención programada o solo instalación nueva?',
                answer: 'Ambas. La mantención preventiva de tableros (termografía, reapriete, revisión de protecciones) es lo que evita la falla que sí detiene la bodega.'
            }
        ]
    },
    {
        slug: 'san-bernardo',
        name: 'San Bernardo',
        type: 'industrial',
        serviceFocus: ['montaje-electrico/tableros-electricos', 'electricidad-domiciliaria', 'montaje-electrico/escalerillas-portacables'],
        microZones: ['Industrial Puerta Sur', 'Nos', 'Lo Herrera'],
        intro: 'Cobertura total para plantas productivas, maestranzas y viviendas en San Bernardo.',
        responseTime: 'Disponibilidad 24/7 para plantas productivas',
        // "electricista san bernardo" es búsqueda de hogar y el intro habla solo de
        // industria: por eso sale en Google y nadie hace clic.
        metaDescription: 'Electricistas certificados SEC en San Bernardo, tanto para casas y condominios como para plantas industriales: Nos, Lo Herrera y Puerta Sur. Cuéntanos qué necesitas.',
        proofPoints: [
            'Atendemos las dos caras de San Bernardo: la casa en Nos y la planta en Puerta Sur',
            'Urgencias domiciliarias: tablero que salta, enchufes sin corriente, cortocircuito tras la lluvia',
            'Para plantas productivas, disponibilidad 24/7 porque una falla eléctrica detiene la línea completa'
        ],
        faq: [
            {
                question: 'Se me corta la luz en una parte de la casa, ¿es urgente?',
                answer: 'Si salta siempre el mismo automático, hay una falla en ese circuito y conviene revisarlo: forzarlo repetidamente calienta la instalación. Si huele a quemado o hay tizne en el tablero, corte la energía y llame de inmediato.'
            },
            {
                question: '¿Atienden casas y condominios o solo empresas?',
                answer: 'Las dos cosas. En San Bernardo la mayoría de los llamados son de casas: tableros antiguos sin diferencial, ampliaciones y circuitos nuevos.'
            },
            {
                question: '¿Cambian tableros antiguos por uno con protección diferencial?',
                answer: 'Sí, y es de los trabajos más pedidos en viviendas de Nos y Lo Herrera. El diferencial es la protección que corta ante una fuga y evita la electrocución; muchas casas construidas antes no lo tienen.'
            }
        ]
    },

    // --- RURAL / HOGAR ---
    {
        slug: 'chicureo-colina',
        name: 'Chicureo / Colina',
        type: 'premium',
        serviceFocus: ['empalme-electrico-rural', 'electricidad-domiciliaria', 'pintura-interior-exterior'],
        microZones: ['Piedra Roja', 'Chamisero', 'Las Brisas', 'Hacienda Chicureo'],
        intro: 'Servicios para domicilios y parcelas en Chicureo y Colina. Terminaciones finas y respeto por su propiedad.',
        responseTime: 'Agendamiento prioritario para residentes',
        metaDescription: 'Electricistas para casas y parcelas en Chicureo, Colina, Piedra Roja y Chamisero: empalmes, tableros, iluminación y terminaciones. Trabajo limpio y agendado.',
        proofPoints: [
            'Trabajo limpio: cubrimos pisos y terminaciones, y nos llevamos los escombros al terminar',
            'Coordinación con la administración del condominio cuando el reglamento lo exige',
            'Hora agendada y confirmada, no una franja de medio día'
        ],
        faq: [
            {
                question: '¿Pueden instalar un cargador para auto eléctrico en mi casa?',
                answer: 'Sí. Requiere un circuito propio desde el tablero, protección dedicada y verificar que el empalme aguante la carga adicional; si no aguanta, primero se aumenta la capacidad. El punto de carga se declara ante la SEC.'
            },
            {
                question: 'Mi parcela en Chamisero no tiene luz todavía, ¿lo ven ustedes?',
                answer: 'Sí, es el empalme rural llave en mano: visita de factibilidad para ubicar el punto de conexión más cercano, proyecto TE1 ante la SEC, instalación del poste y las protecciones, y la coordinación con la distribuidora para el medidor definitivo.'
            },
            {
                question: '¿Trabajan dentro de condominios con reglamento de obras?',
                answer: 'Sí. Se coordina con la administración el horario permitido y el ingreso de materiales antes de empezar, para que la obra no se frene a medio camino.'
            }
        ]
    },
    {
        slug: 'buin',
        name: 'Buin',
        type: 'rural',
        serviceFocus: ['empalme-electrico-rural', 'gasfiteria-a-domicilio'],
        microZones: ['Alto Jahuel', 'Maipo', 'Viluco'],
        intro: 'Especialistas en zonas rurales de Buin. Empalmes, regularizaciones y agua potable.',
        responseTime: 'Visitas técnicas de Lunes a Sábado',
        metaDescription: 'Empalmes eléctricos rurales, regularizaciones y gasfitería en Buin, Alto Jahuel, Maipo y Viluco. Proyecto TE1 ante la SEC y coordinación con la distribuidora.',
        proofPoints: [
            'Empalmes en parcelas donde el poste más cercano queda lejos: primero se mide la distancia real en terreno',
            'Regularización de instalaciones antiguas que nunca fueron declaradas',
            'Gasfitería y electricidad en la misma visita, algo que ahorra viajes en sectores rurales'
        ],
        faq: [
            {
                question: '¿Cuánto demora un empalme nuevo en una parcela de Buin?',
                answer: 'El plazo lo marca la aprobación del proyecto y la conexión de la distribuidora, no la instalación en sí: el poste y las protecciones se montan en pocos días, pero la aprobación y el medidor definitivo dependen de la empresa eléctrica. En la visita de factibilidad se estima el plazo con lo que se ve en terreno.'
            },
            {
                question: 'Mi terreno está lejos del poste más cercano, ¿se puede igual?',
                answer: 'Casi siempre sí, pero la distancia cambia el proyecto y el costo, porque puede requerir postes intermedios. Por eso la visita de factibilidad es lo primero y no tiene costo.'
            },
            {
                question: '¿Qué es la declaración TE1 y por qué la necesito?',
                answer: 'Es el documento con que un instalador autorizado declara la instalación ante la SEC. Sin esa declaración la distribuidora no conecta el medidor definitivo, y una instalación sin declarar puede traerle problemas al vender o al contratar seguros.'
            }
        ]
    },
    {
        slug: 'paine',
        name: 'Paine',
        type: 'rural',
        serviceFocus: ['empalme-electrico-rural', 'electricidad-domiciliaria'],
        microZones: ['Chada', 'Hospital', 'Huelquén'],
        intro: 'Soluciones eléctricas definitivas para parcelas de agrado y agrícolas en Paine.',
        responseTime: 'Atención zona rural completa',
        metaDescription: 'Electricistas en Paine, Chada, Hospital y Huelquén: empalmes rurales, tableros y electricidad para parcelas de agrado y predios agrícolas.',
        proofPoints: [
            'Instalaciones pensadas para uso agrícola: bombas, riego y galpones tienen exigencias distintas a una casa',
            'Trifásico cuando el consumo lo justifica, porque una bomba grande en monofásico da problemas eternos',
            'Cubrimos los sectores alejados de la comuna, no solo el centro de Paine'
        ],
        faq: [
            {
                question: 'Tengo una bomba de riego que hace saltar la protección, ¿qué puede ser?',
                answer: 'Lo más común es que el circuito y la protección no estén dimensionados para la partida del motor, que exige varias veces la corriente nominal. Se revisa la potencia real de la bomba, el conductor y el tipo de protección, y en algunos casos conviene pasar a trifásico.'
            },
            {
                question: '¿Conviene empalme monofásico o trifásico en una parcela?',
                answer: 'Depende del consumo: para una casa sola suele bastar el monofásico, pero si hay bombas, riego, galpón o taller, el trifásico distribuye mejor la carga y evita caídas de tensión. Se define con el listado de equipos que va a usar.'
            },
            {
                question: '¿Atienden Huelquén y Chada o solo el centro de Paine?',
                answer: 'Atendemos la comuna completa, incluidos los sectores rurales alejados. Al ser visitas más largas, se agendan con día y hora para no hacerlo esperar.'
            }
        ]
    },
    {
        slug: 'talagante',
        name: 'Talagante',
        type: 'volumen',
        serviceFocus: ['gasfiteria-a-domicilio', 'electricidad-domiciliaria'],
        microZones: ['Centro', 'Lonquén', 'El Monte'],
        intro: 'Maestros certificados para reparaciones y mantención en Talagante.',
        responseTime: 'Llegamos en el día',
        metaDescription: 'Electricista y gásfiter a domicilio en Talagante, Lonquén y El Monte: reparaciones, tableros, enchufes y filtraciones. Llegamos en el día.',
        proofPoints: [
            'Reparaciones del día: fallas de enchufes, tableros que saltan y filtraciones',
            'Un solo equipo para electricidad y gasfitería, sin coordinar dos maestros distintos',
            'Presupuesto antes de ejecutar, para que no aparezcan sorpresas al final'
        ],
        faq: [
            {
                question: '¿Cobran la visita si al final no hago el trabajo?',
                answer: 'La visita de diagnóstico se cotiza antes de ir y usted decide con el presupuesto en la mano. Lo importante es que ningún trabajo parte sin que el valor esté conversado.'
            },
            {
                question: 'Tengo una filtración y no sé de dónde viene, ¿la ubican?',
                answer: 'Sí. Se busca el origen antes de picar: muchas veces la mancha aparece lejos del punto que gotea. Primero se ubica, después se repara.'
            },
            {
                question: '¿Atienden El Monte y Lonquén?',
                answer: 'Sí, ambos sectores entran en la cobertura junto con el centro de Talagante.'
            }
        ]
    },
    {
        slug: 'penaflor',
        name: 'Peñaflor',
        type: 'volumen',
        serviceFocus: ['gasfiteria-a-domicilio', 'pintura-interior-exterior'],
        microZones: ['Malloco', 'Centro', 'Las Praderas'],
        intro: 'Servicio rápido y económico de gasfitería y electricidad para Peñaflor y Malloco.',
        responseTime: 'Urgencias domiciliarias',
        metaDescription: 'Gásfiter y electricista a domicilio en Peñaflor, Malloco y Las Praderas: urgencias, reparaciones y pintura interior y exterior. Presupuesto claro antes de empezar.',
        proofPoints: [
            'Urgencias de gasfitería: cañería rota, calefont que no enciende, desagüe tapado',
            'Trabajos combinados: la reparación y después la pintura del sector afectado',
            'Cobertura de Malloco y Las Praderas además del centro de Peñaflor'
        ],
        faq: [
            {
                question: 'Mi calefont no enciende, ¿es problema de gas o eléctrico?',
                answer: 'Puede ser cualquiera de los dos: falta de gas, poca presión de agua, pilas o encendido gastado, o la conexión eléctrica del equipo. Por eso se revisa el conjunto y no solo el calefont.'
            },
            {
                question: '¿Pintan después de una reparación de humedad?',
                answer: 'Sí, pero primero hay que cortar el origen de la humedad y dejar secar; si se pinta encima de un muro húmedo, la pintura se vuelve a levantar en semanas.'
            },
            {
                question: '¿Cuánto se demoran en llegar a una urgencia?',
                answer: 'Depende de la hora y de dónde esté el equipo en ese momento. Al llamar se le dice una hora estimada real, no una promesa que después no se cumple.'
            }
        ]
    },
    {
        slug: 'melipilla',
        name: 'Melipilla',
        type: 'rural',
        serviceFocus: ['empalme-electrico-rural', 'electricidad-domiciliaria'],
        microZones: ['Pomaire', 'Bollenar', 'Codigua'],
        intro: 'Amplia cobertura en provincia de Melipilla. Empalmes y electricidad rural.',
        responseTime: 'Agenda semanal disponible',
        metaDescription: 'Empalmes eléctricos rurales y electricidad domiciliaria en Melipilla, Pomaire, Bollenar y Codigua. Proyecto TE1 y coordinación con la distribuidora.',
        proofPoints: [
            'Cubrimos la provincia completa, incluidos los sectores más alejados del centro',
            'Empalmes rurales llave en mano: proyecto, instalación y trámite con la distribuidora',
            'Visitas agrupadas por sector para bajar el costo de traslado en zonas lejanas'
        ],
        faq: [
            {
                question: '¿Llegan hasta Codigua y Bollenar?',
                answer: 'Sí. Al ser sectores alejados, esas visitas se agrupan por día y sector, así que conviene agendar con anticipación.'
            },
            {
                question: '¿Qué necesito tener listo antes de la visita de factibilidad?',
                answer: 'El rol de la propiedad y, si lo tiene, el plano o croquis del terreno. En la visita se ubica el punto de conexión más cercano y se define por dónde entra la acometida.'
            },
            {
                question: 'Tengo luz pero el medidor está a nombre del dueño anterior, ¿lo pueden regularizar?',
                answer: 'El cambio de titular lo hace la distribuidora, pero si la instalación no está declarada o no cumple la norma, primero hay que regularizarla. Se revisa en terreno qué falta y se declara ante la SEC.'
            }
        ]
    }
];
