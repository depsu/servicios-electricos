export const prerender = false;

import type { APIRoute } from 'astro';

// Mismo destino que el formulario de /contacto (ContactForm.astro y QuickForm.astro).
// Antes esta función solo escribía el lead en la consola del servidor y respondía 200:
// la persona veía "gracias" y el dato se perdía. Ahora se reenvía de verdad.
const DESTINO = 'https://formsubmit.co/ajax/rivera.ale982@gmail.com';
const ORIGEN = 'https://chileelectrico.cl';

// Etiquetas legibles para el correo que llega (formsubmit arma la tabla con estas claves).
const ETIQUETAS: Record<string, string> = {
    name: 'Nombre',
    company_name: 'Razón social',
    rut: 'RUT',
    email: 'Email',
    phone: 'Teléfono',
    comuna: 'Comuna',
    servicio: 'Servicio',
    message: 'Mensaje',
    form_type: 'Tipo de formulario',
    utm_source: 'Origen (utm_source)',
    utm_medium: 'Medio (utm_medium)',
    utm_campaign: 'Campaña (utm_campaign)',
    gclid: 'Google Ads (gclid)',
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();

        const name = data.get('name');
        const phone = data.get('phone');

        if (!name || !phone) {
            return new Response(JSON.stringify({
                message: 'Faltan datos obligatorios',
            }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const esEmpresa = data.get('form_type') === 'industrial';

        // Armamos el cuerpo con nombres legibles y sin campos vacíos.
        const payload: Record<string, string> = {
            _subject: esEmpresa
                ? 'Nueva cotización industrial desde chileelectrico.cl'
                : 'Nueva solicitud de visita desde chileelectrico.cl',
            _template: 'table',
            _captcha: 'false',
        };

        for (const [clave, valor] of data.entries()) {
            if (typeof valor !== 'string' || valor.trim() === '') continue;
            payload[ETIQUETAS[clave] ?? clave] = valor.trim();
        }
        payload['Recibido'] = new Date().toISOString();

        // El envío sale del servidor, así que no lleva Origin propio. Sin esa cabecera
        // formsubmit no reconoce el sitio y responde "ábrelo desde un servidor web".
        const envio = await fetch(DESTINO, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': ORIGEN,
                'Referer': `${ORIGEN}/cotizar/`,
            },
            body: JSON.stringify(payload),
        });

        // formsubmit responde 200 incluso cuando NO envió (formulario sin activar,
        // por ejemplo). Hay que mirar el campo "success" del cuerpo, no el código.
        const respuesta = await envio.json().catch(() => ({}) as Record<string, unknown>);
        const enviado = envio.ok && String(respuesta?.success) !== 'false';

        if (!enviado) {
            console.error('formsubmit no envió el lead:', envio.status, JSON.stringify(respuesta).slice(0, 300));
            return new Response(JSON.stringify({
                message: 'No pudimos enviar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.',
            }), { status: 502, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({ message: 'Solicitud enviada' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error procesando el lead', error);
        return new Response(JSON.stringify({
            message: 'No pudimos procesar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.',
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
};
