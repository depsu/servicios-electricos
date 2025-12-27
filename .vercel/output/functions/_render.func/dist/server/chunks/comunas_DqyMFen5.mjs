const comunas = [
  // --- INDUSTRIAL ---
  {
    slug: "lampa-valle-grande",
    name: "Lampa / Valle Grande",
    type: "industrial",
    serviceFocus: ["montaje-electrico/tableros-electricos", "montaje-electrico/escalerillas-portacables"],
    microZones: ["Valle Grande", "La Montaña", "Industrial Lampa"],
    intro: "Servicios de montaje eléctrico especializado para el sector industrial de Lampa y Valle Grande. Atendemos bodegas y centros de distribución.",
    responseTime: "Respuesta en 2 horas para emergencias industriales"
  },
  {
    slug: "pudahuel-enea-lo-boza",
    name: "Pudahuel / ENEA",
    type: "industrial",
    serviceFocus: ["montaje-electrico/tableros-electricos", "montaje-electrico/bandejas-portaconductores"],
    microZones: ["ENEA", "Lo Boza", "Puerto Madero", "San Pablo"],
    intro: "Expertos en normativa SEC para el parque industrial ENEA y Lo Boza. Mantención eléctrica y montaje de canalizaciones.",
    responseTime: "Técnicos en ruta permanente en sector ENEA"
  },
  {
    slug: "san-bernardo",
    name: "San Bernardo",
    type: "industrial",
    serviceFocus: ["montaje-electrico/tableros-electricos", "montaje-electrico/escalerillas-portacables"],
    microZones: ["Industrial Puerta Sur", "Nos", "Lo Herrera"],
    intro: "Cobertura total para plantas productivas y maestranzas en San Bernardo.",
    responseTime: "Disponibilidad 24/7 para plantas productivas"
  },
  // --- RURAL / HOGAR ---
  {
    slug: "chicureo-colina",
    name: "Chicureo / Colina",
    type: "premium",
    serviceFocus: ["empalme-electrico-rural", "electricidad-domiciliaria", "pintura-interior-exterior"],
    microZones: ["Piedra Roja", "Chamisero", "Las Brisas", "Hacienda Chicureo"],
    intro: "Servicios premium para domicilios y parcelas en Chicureo. Terminaciones finas y respeto por su propiedad.",
    responseTime: "Agendamiento prioritario para residentes"
  },
  {
    slug: "buin",
    name: "Buin",
    type: "rural",
    serviceFocus: ["empalme-electrico-rural", "gasfiteria-a-domicilio"],
    microZones: ["Alto Jahuel", "Maipo", "Viluco"],
    intro: "Especialistas en zonas rurales de Buin. Empalmes, regularizaciones y agua potable.",
    responseTime: "Visitas técnicas de Lunes a Sábado"
  },
  {
    slug: "paine",
    name: "Paine",
    type: "rural",
    serviceFocus: ["empalme-electrico-rural", "electricidad-domiciliaria"],
    microZones: ["Chada", "Hospital", "Huelquén"],
    intro: "Soluciones eléctricas definitivas para parcelas de agrado y agrícolas en Paine.",
    responseTime: "Atención zona rural completa"
  },
  {
    slug: "talagante",
    name: "Talagante",
    type: "volumen",
    serviceFocus: ["gasfiteria-a-domicilio", "electricidad-domiciliaria"],
    microZones: ["Centro", "Lonquén", "El Monte"],
    intro: "Maestros certificados para reparaciones y mantención en Talagante.",
    responseTime: "Llegamos en el día"
  },
  {
    slug: "penaflor",
    name: "Peñaflor",
    type: "volumen",
    serviceFocus: ["gasfiteria-a-domicilio", "pintura-interior-exterior"],
    microZones: ["Malloco", "Centro", "Las Praderas"],
    intro: "Servicio rápido y económico de gasfitería y electricidad para Peñaflor y Malloco.",
    responseTime: "Urgencias domiciliarias"
  },
  {
    slug: "melipilla",
    name: "Melipilla",
    type: "rural",
    serviceFocus: ["empalme-electrico-rural", "electricidad-domiciliaria"],
    microZones: ["Pomaire", "Bollenar", "Codigua"],
    intro: "Amplia cobertura en provincia de Melipilla. Empalmes y electricidad rural.",
    responseTime: "Agenda semanal disponible"
  }
];

export { comunas as c };
