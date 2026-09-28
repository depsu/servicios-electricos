// Convierte un párrafo con enlaces internos en formato [texto](/ruta/) a HTML seguro.
// Primero escapa todo el texto (así un párrafo nunca puede meter etiquetas propias) y
// después convierte SOLO los enlaces que parten con "/" (internos). Un enlace externo o
// mal formado queda como texto plano: preferible a publicar un enlace roto.
const escapar = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function enlazar(texto: string, clase = 'font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900'): string {
  return escapar(texto).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, (_m, etiqueta: string, ruta: string) => {
    // toda ruta interna va con barra final (la canónica del sitio), salvo anclas y archivos
    const [base, resto = ''] = ruta.split(/(?=[?#])/);
    const conBarra = base.endsWith('/') || /\.[a-z0-9]{2,5}$/.test(base) ? base : `${base}/`;
    return `<a href="${conBarra}${resto}" class="${clase}">${etiqueta}</a>`;
  });
}

// Texto plano (para el JSON-LD y las meta): quita la sintaxis de enlace y deja la etiqueta.
export const sinEnlaces = (texto: string) => texto.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '$1');

// Esquema FAQPage a partir de preguntas visibles (mismo texto, sin sintaxis de enlaces).
export function faqSchema(items: { question: string; answer: string }[] = []) {
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: sinEnlaces(f.question),
      acceptedAnswer: { '@type': 'Answer', text: sinEnlaces(f.answer) },
    })),
  };
}
