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
    },

    // --- URBANO / HOGAR (Santiago) ---
    // Demanda medida en GSC (ago-2026): estas búsquedas caían en la portada entre el
    // puesto 59 y el 77 por no tener página propia. El molde ya está probado:
    // /cobertura/san-bernardo/ rankea 4,0 en "electricidad san bernardo".
    {
        slug: 'nunoa',
        name: 'Ñuñoa',
        type: 'volumen',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'gasfiteria-a-domicilio'],
        microZones: ['Plaza Ñuñoa', 'Villa Frei', 'Irarrázaval', 'Estadio Nacional'],
        intro: 'Electricistas a domicilio en Ñuñoa, con la experiencia que pide la casa antigua: tableros, circuitos nuevos y ampliaciones.',
        responseTime: 'Visitas técnicas de Lunes a Sábado',
        metaDescription: 'Electricista a domicilio en Ñuñoa: cambio de tablero, protección diferencial, circuitos nuevos y ampliaciones en Plaza Ñuñoa, Villa Frei e Irarrázaval. Trabajo declarado ante la SEC.',
        proofPoints: [
            'Buena parte de Ñuñoa es vivienda antigua con instalación original: tableros sin diferencial y circuitos pensados para mucha menos carga de la que hoy se usa',
            'Ampliaciones y remodelaciones: el segundo piso o la cocina nueva casi siempre necesitan circuito propio, no colgarse del que ya existe',
            'Trabajo limpio en casa habitada: se protege el piso, se pica lo mínimo y se retiran los escombros al terminar'
        ],
        faq: [
            {
                question: 'Mi casa en Ñuñoa es antigua y salta el automático seguido, ¿qué hay que revisar?',
                answer: 'En viviendas antiguas lo habitual es que un solo circuito alimente media casa, así que basta con juntar estufa, hervidor y lavadora para llegar al límite. Conviene medir el consumo real por circuito antes de tocar el tablero: si el conductor está sano, la solución es repartir la carga en circuitos separados; si el cable ya trabajó caliente, hay que reponer ese tramo.'
            },
            {
                question: '¿Vale la pena cambiar el tablero de una casa antigua?',
                answer: 'Sí cuando no tiene protección diferencial, que es la que corta ante una fuga a tierra y evita la electrocución. Muchas viviendas construidas antes de que fuera exigible no la tienen. El cambio incluye revisar la puesta a tierra: un diferencial sin tierra en condiciones protege menos.'
            },
            {
                question: 'Voy a remodelar la cocina, ¿necesito circuito nuevo?',
                answer: 'Casi siempre. Horno eléctrico, encimera y microondas juntos superan lo que aguanta un circuito de enchufes común. Lo correcto es un circuito dedicado con su propia protección, dimensionado según los equipos que va a instalar.'
            }
        ]
    },
    {
        slug: 'providencia',
        name: 'Providencia',
        type: 'volumen',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'montaje-electrico/tableros-electricos'],
        microZones: ['Los Leones', 'Pedro de Valdivia', 'Manuel Montt', 'Barrio Italia'],
        intro: 'Eléctrico a domicilio en Providencia para departamentos, oficinas y casas: fallas, tableros y circuitos nuevos.',
        responseTime: 'Visitas técnicas de Lunes a Sábado',
        metaDescription: 'Eléctrico a domicilio en Providencia: departamentos, oficinas y casas en Los Leones, Pedro de Valdivia, Manuel Montt y Barrio Italia. Tableros, circuitos y fallas.',
        proofPoints: [
            'Trabajo en edificios: coordinamos con administración y conserjería el acceso, el horario permitido y el corte cuando el tablero es compartido',
            'Departamentos con equipos que la instalación original no contemplaba, como aire acondicionado o carga de vehículo eléctrico: primero se revisa qué aguanta el empalme',
            'Oficinas y locales de Barrio Italia: circuitos separados para equipos y trabajo declarado ante la SEC cuando corresponde'
        ],
        faq: [
            {
                question: '¿Atienden departamentos o solo casas?',
                answer: 'Departamentos también, y es lo más frecuente en Providencia. Conviene avisar a la administración antes: en varios edificios el acceso a shafts y al tablero general requiere autorización y un horario definido.'
            },
            {
                question: 'Quiero instalar aire acondicionado, ¿el departamento lo soporta?',
                answer: 'Depende de la potencia contratada y del estado del tablero. Un equipo split de tamaño medio suele necesitar circuito propio con su protección; si el empalme quedó justo, primero hay que revisar si corresponde aumentar la capacidad. Se mide antes de instalar, no después.'
            },
            {
                question: 'Se cortó la luz solo en mi departamento y el edificio está normal, ¿qué es?',
                answer: 'Lo más probable es que actuara una protección propia del departamento o que haya una falla desde el medidor hacia adentro. Si el tablero del departamento está sano y sigue sin luz, la falla suele estar en el tramo del medidor, que está en zona común: ahí se coordina con la administración para intervenir.'
            }
        ]
    },
    {
        slug: 'la-florida',
        name: 'La Florida',
        type: 'volumen',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'gasfiteria-a-domicilio'],
        microZones: ['Vicuña Mackenna', 'Walker Martínez', 'Rojas Magallanes', 'Bellavista de La Florida'],
        intro: 'Electricista a domicilio en La Florida: tableros, enchufes sin corriente, ampliaciones y segundo piso.',
        responseTime: 'Visitas técnicas de Lunes a Sábado',
        metaDescription: 'Electricista a domicilio en La Florida: cambio de tablero, protección diferencial, circuitos para ampliación y segundo piso en Rojas Magallanes, Walker Martínez y Bellavista.',
        proofPoints: [
            'Casas de villa ampliadas por etapas: lo habitual es encontrar la ampliación colgada del circuito original, que no fue calculado para eso',
            'Cambio de tablero con protección diferencial y revisión de la puesta a tierra en la misma visita',
            'Electricidad y gasfitería con el mismo equipo, útil cuando la ampliación incluye baño o cocina'
        ],
        faq: [
            {
                question: 'Amplié la casa y ahora se corta la luz cuando enciendo varias cosas, ¿por qué?',
                answer: 'Porque la ampliación quedó alimentada por un circuito que no fue dimensionado para esa carga. La solución no es cambiar el automático por uno más grande: eso solo saca la protección y deja el cable expuesto a calentarse: , sino llevar un circuito nuevo con conductor adecuado y su protección.'
            },
            {
                question: 'Tengo enchufes que no dan corriente en una pieza, ¿es grave?',
                answer: 'Puede ser un contacto suelto en la caja o un tramo cortado, y conviene revisarlo pronto: los contactos flojos calientan y son una causa común de incendio de origen eléctrico. Se ubica el punto con instrumento y se repara el tramo, sin picar toda la muralla.'
            },
            {
                question: '¿Puedo subir la potencia contratada de la casa?',
                answer: 'Sí, es un trámite ante la distribuidora que exige que la instalación interior esté en condiciones y declarada. Primero se revisa el tablero, el conductor de acometida y la puesta a tierra; si algo no cumple, se corrige antes de pedir el aumento.'
            }
        ]
    },
    {
        slug: 'penalolen',
        name: 'Peñalolén',
        type: 'volumen',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'gasfiteria-a-domicilio'],
        microZones: ['Peñalolén Alto', 'Grecia', 'San Luis de Macul', 'Quebrada de Macul'],
        intro: 'Electricistas a domicilio en Peñalolén, tanto para casas de villa como para viviendas del sector alto.',
        responseTime: 'Visitas técnicas de Lunes a Sábado',
        metaDescription: 'Electricista a domicilio en Peñalolén: tableros, circuitos nuevos, iluminación exterior y regularización en Grecia, San Luis de Macul y Peñalolén Alto.',
        proofPoints: [
            'La comuna mezcla villa consolidada y vivienda del sector alto con terreno: las necesidades van del cambio de tablero a la iluminación exterior y el portón',
            'Puesta a tierra medida, no supuesta: en terrenos con relleno el valor real puede estar muy lejos de lo que exige la norma',
            'Regularización de instalaciones que nunca fueron declaradas ante la SEC, necesaria al vender o al contratar un seguro'
        ],
        faq: [
            {
                question: 'Quiero iluminación en el patio y el portón eléctrico, ¿va en el mismo circuito de la casa?',
                answer: 'No conviene. La iluminación exterior y el portón se alimentan mejor desde un circuito propio, con conductor apto para intemperie y protección diferencial: así una falla afuera, con lluvia de por medio, no deja la casa completa sin luz.'
            },
            {
                question: '¿Cómo sé si mi casa tiene puesta a tierra en buen estado?',
                answer: 'Se mide con instrumento; no basta con ver que exista la barra. Si el valor es alto, el diferencial puede no actuar como debe. La medición es rápida y queda registrada en el informe de la visita.'
            },
            {
                question: 'Mi casa nunca fue declarada ante la SEC, ¿se puede regularizar ahora?',
                answer: 'Sí. Se revisa la instalación en terreno, se corrige lo que no cumple (normalmente tablero, protecciones y tierra) y un instalador autorizado la declara. Es lo que piden al vender la propiedad o cuando la aseguradora lo exige.'
            }
        ]
    },
    {
        slug: 'san-miguel',
        name: 'San Miguel',
        type: 'volumen',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'gasfiteria-a-domicilio'],
        microZones: ['Gran Avenida', 'Ciudad del Niño', 'El Llano', 'Departamental'],
        intro: 'Eléctrico a domicilio en San Miguel: casas antiguas del barrio y departamentos nuevos de Gran Avenida.',
        responseTime: 'Visitas técnicas de Lunes a Sábado',
        metaDescription: 'Eléctrico a domicilio en San Miguel: cambio de tablero, circuitos nuevos y fallas en Gran Avenida, El Llano, Ciudad del Niño y Departamental.',
        proofPoints: [
            'Dos San Miguel en la misma comuna: la casa antigua del barrio, con instalación original, y la torre nueva de Gran Avenida, con tablero moderno pero cargas que crecieron',
            'Cambio de tablero y separación de circuitos en viviendas donde toda la casa cuelga de una sola protección',
            'Electricidad y gasfitería en la misma visita, que ahorra un viaje cuando la falla es de cocina o baño'
        ],
        faq: [
            {
                question: 'Vivo en un departamento de Gran Avenida y saltan las protecciones, ¿lo puede ver un eléctrico particular?',
                answer: 'Sí, todo lo que está desde el medidor hacia adentro del departamento. Si la falla está en el tablero general o en zonas comunes, corresponde a la administración del edificio y se le informa con lo que se midió.'
            },
            {
                question: 'La casa tiene un solo automático para todo, ¿se puede separar?',
                answer: 'Sí, y es lo recomendable. Con circuitos separados (iluminación, enchufes, cocina), una falla deja sin servicio solo una parte y es mucho más fácil de ubicar. Se hace desde el tablero, sin rehacer la instalación completa.'
            },
            {
                question: '¿Entregan algún documento del trabajo?',
                answer: 'Sí: informe de lo ejecutado y, cuando el trabajo lo requiere, la declaración ante la SEC hecha por instalador autorizado. Ese documento es el que le piden al vender o ante un seguro.'
            }
        ]
    },
    {
        slug: 'la-reina',
        name: 'La Reina',
        type: 'premium',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'pintura-interior-exterior'],
        microZones: ['Príncipe de Gales', 'Larraín', 'Villa La Reina', 'La Reina Alta'],
        intro: 'Electricistas para casas de La Reina: tableros, iluminación de jardín, bombas y terminaciones cuidadas.',
        responseTime: 'Agendamiento con día y hora',
        metaDescription: 'Electricista en La Reina: cambio de tablero, iluminación exterior, bombas de riego y circuitos nuevos en Príncipe de Gales, Larraín y La Reina Alta. Trabajo limpio y agendado.',
        proofPoints: [
            'Casa con jardín: iluminación exterior, bomba de riego y quincho piden circuitos propios y material apto para intemperie',
            'Trabajo limpio en casa habitada: se cubre el piso, se pica lo mínimo indispensable y se retiran los escombros',
            'Visita agendada con día y hora, sin ventanas de espera abiertas'
        ],
        faq: [
            {
                question: 'La bomba de riego hace saltar la protección, ¿qué puede ser?',
                answer: 'Si salta al momento de partir, suele faltar capacidad para el peak de arranque del motor. Si salta después de un rato andando, apunta más a humedad o a aislación dañada en el tramo enterrado, algo común cuando la canalización del jardín se hizo con material de interior. Son dos causas distintas y se distinguen midiendo antes de cambiar nada.'
            },
            {
                question: '¿Se puede iluminar el jardín sin picar los pisos terminados?',
                answer: 'En general sí. El trazado se resuelve por zonas de tierra, cornisas o canalización a la vista bien resuelta, y se elige el recorrido antes de partir. Lo que no se debe hacer es usar cable de interior en el exterior, aunque quede escondido.'
            },
            {
                question: '¿Hacen también la reparación de la muralla después del trabajo eléctrico?',
                answer: 'Sí, incluimos la reposición y pintura de lo intervenido cuando se acuerda en el presupuesto. Es lo que evita que quede el parche a la vista después de una canalización.'
            }
        ]
    },
    {
        slug: 'lo-barnechea-la-dehesa',
        name: 'Lo Barnechea / La Dehesa',
        type: 'premium',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'pintura-interior-exterior'],
        microZones: ['La Dehesa', 'El Arrayán', 'Los Trapenses', 'Cerro 18'],
        intro: 'Servicio eléctrico para casas de Lo Barnechea y La Dehesa: tableros, exteriores, portones y terminaciones finas.',
        responseTime: 'Agendamiento con día y hora',
        metaDescription: 'Electricistas en Lo Barnechea y La Dehesa: tableros, iluminación exterior, portones, riego y aumento de capacidad en El Arrayán y Los Trapenses. Terminaciones cuidadas.',
        proofPoints: [
            'Casas grandes con mucha carga repartida: piscina, riego, portón y climatización rara vez caben en la instalación con que se construyó la casa',
            'Terminaciones finas: canalización planificada para no dañar revestimientos, y reposición de lo intervenido',
            'Acceso resuelto antes de llegar: autorización de portería y horario permitido se avisan con anticipación'
        ],
        faq: [
            {
                question: 'Sumé piscina y climatización y el tablero quedó chico, ¿qué corresponde hacer?',
                answer: 'Primero medir el consumo real y compararlo con la potencia contratada. Muchas veces alcanza con reordenar el tablero y llevar circuitos dedicados; cuando no, corresponde tramitar el aumento de capacidad ante la distribuidora, que exige la instalación interior en condiciones y declarada.'
            },
            {
                question: 'El portón eléctrico deja de funcionar cuando llueve, ¿es del motor?',
                answer: 'No siempre. Es frecuente que la alimentación o las cajas del exterior no sean estancas y entre humedad, lo que hace actuar el diferencial o corroe los contactos. Se revisa primero la canalización exterior y la conexión, antes de cambiar el motor.'
            },
            {
                question: 'En mi condominio la portería no deja entrar sin autorización previa, ¿cómo lo resuelven?',
                answer: 'Se avisa con anticipación quién entra y con qué materiales, para que la administración lo registre antes del día de la visita. Es lo que evita perder la hora agendada esperando en la portería, sobre todo cuando el trabajo necesita subir herramienta o escalera.'
            }
        ]
    },
    // Demanda medida (DataForSEO, sep-2026): "electricista las condes" 590/mes y
    // "electricista vitacura" 260/mes. Ambas comunas están en la zona de concesión de
    // Enel Distribución (enel.cl). Los sectores son barrios reales de cada comuna.
    {
        slug: 'las-condes-vitacura',
        name: 'Las Condes / Vitacura',
        type: 'premium',
        serviceFocus: ['electricidad-domiciliaria', 'aumento-de-capacidad-electrica', 'montaje-electrico/bandejas-portaconductores'],
        microZones: ['El Golf', 'Nueva Las Condes', 'Los Dominicos', 'San Carlos de Apoquindo', 'Santa María de Manquehue', 'Jardín del Este'],
        intro: 'Electricista en Las Condes y Vitacura para departamentos en altura, casas con jardín y oficinas: tableros, respaldo ante cortes e iluminación.',
        responseTime: 'Visitas de Lunes a Sábado y urgencias 24/7',
        metaDescription: 'Electricista en Las Condes y Vitacura: tableros, generador de respaldo, dimmers y oficinas en El Golf, Los Dominicos y Santa María de Manquehue.',
        proofPoints: [
            'Generador de respaldo en casa, conectado con tablero de transferencia: la casa se desconecta de la red antes de que el generador tome la carga',
            'Plantas de oficina: bandejas sobre el cielo falso, circuitos rotulados y plano de rutas al entregar',
            'Iluminación regulable que no parpadea: el dimmer se elige según la ampolleta LED que va a controlar, no al revés'
        ],
        faq: [
            {
                question: '¿Qué distribuidora eléctrica atiende Las Condes y Vitacura?',
                answer: 'Enel Distribución. Las dos comunas están dentro de su zona de concesión, así que el cambio de medidor, un empalme nuevo o un aumento de potencia se tramitan ante Enel. Cuando el trabajo lo requiere, esa coordinación la hacemos nosotros.'
            },
            {
                question: 'Quiero un generador para no quedarme sin luz en un corte largo, ¿cómo se conecta a la casa?',
                answer: 'A través de un tablero de transferencia, que desconecta la vivienda de la red de Enel antes de conectar el generador. Nunca con un alargador enchufado a un enchufe de la casa: eso puede devolver tensión hacia la calle y poner en riesgo a quien esté reparando la línea. Primero se define qué circuitos quedan en respaldo, por ejemplo refrigerador, luces, portón y bomba, y con esa lista se elige la potencia del equipo.'
            },
            {
                question: 'Cambié las ampolletas por LED y ahora parpadean o zumban con el dimmer, ¿hay que rehacer la instalación?',
                answer: 'Casi nunca. Lo habitual es que el regulador haya sido diseñado para ampolletas incandescentes y no se entienda con la carga baja de un LED. Se revisa que la ampolleta sea regulable y se reemplaza el dimmer por uno compatible; el cableado suele quedar igual.'
            },
            {
                question: 'Estamos habilitando una oficina en un edificio de El Golf, ¿pueden trabajar sin cortar la luz a los otros pisos?',
                answer: 'En general sí, porque la obra se alimenta desde el tablero de la propia planta, que es lo que se interviene. Si hace falta tocar el tablero general o subir por el shaft, el permiso lo da la administración, que también fija la ventana de trabajo, normalmente fuera del horario de oficina. Al terminar se entregan los circuitos etiquetados y el plano de distribución de rutas.'
            }
        ]
    }
];
