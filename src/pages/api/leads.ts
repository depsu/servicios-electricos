export const prerender = false;

import type { APIRoute } from 'astro';

// Destino único de todos los formularios del sitio (cotizar, contacto, QuickForm del hero).
// Antes iba por formsubmit.co, que exigía una "activación" que nunca quedó hecha y los
// leads se perdían. Ahora el correo sale por Resend desde el dominio propio
// (contacto@chileelectrico.cl, recibido por Cloudflare Email Routing).
const RESEND_API = 'https://api.resend.com/emails';
const DESTINO = import.meta.env.LEADS_TO || 'contacto@chileelectrico.cl';
const REMITENTE = import.meta.env.LEADS_FROM || 'Chile Eléctrico <contacto@chileelectrico.cl>';
const SITIO = 'https://chileelectrico.cl';

// Etiquetas legibles para el correo que llega.
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

// Campos de control de los formularios (no van en el correo).
const CAMPOS_INTERNOS = new Set(['_subject', '_captcha', '_template', '_next', '_honey']);

const escapar = (texto: string) =>
    texto.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

// Los formularios sin JS mandan un POST normal: ahí respondemos con una redirección
// en vez de JSON. Los que usan fetch piden JSON.
const quiereHtml = (request: Request) =>
    (request.headers.get('accept') || '').includes('text/html');

function responder(request: Request, ok: boolean, mensaje: string, tipo: string) {
    if (quiereHtml(request)) {
        const destino = ok ? `/gracias/?type=${encodeURIComponent(tipo)}` : `/contacto/?enviado=no`;
        return new Response(null, { status: 303, headers: { Location: destino } });
    }
    return new Response(JSON.stringify({ message: mensaje }), {
        status: ok ? 200 : 502,
        headers: { 'Content-Type': 'application/json' },
    });
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();

        // Honeypot: si un bot llenó el campo oculto, fingimos éxito y no mandamos nada.
        if (String(data.get('_honey') || '').trim() !== '') {
            return responder(request, true, 'Solicitud enviada', 'b2c');
        }

        const nombre = String(data.get('name') || '').trim();
        const telefono = String(data.get('phone') || '').trim();
        const email = String(data.get('email') || '').trim();
        const esEmpresa = data.get('form_type') === 'industrial';
        const tipo = esEmpresa ? 'b2b' : 'b2c';

        if (!nombre || (!telefono && !email)) {
            if (quiereHtml(request)) return responder(request, false, '', tipo);
            return new Response(JSON.stringify({ message: 'Faltan datos obligatorios' }), {
                status: 400, headers: { 'Content-Type': 'application/json' },
            });
        }

        const apiKey = import.meta.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('Falta RESEND_API_KEY en el entorno: el lead no se envió.');
            return responder(request, false, 'No pudimos enviar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.', tipo);
        }

        // Armamos la tabla con nombres legibles y sin campos vacíos.
        const filas: Array<[string, string]> = [];
        for (const [clave, valor] of data.entries()) {
            if (CAMPOS_INTERNOS.has(clave)) continue;
            if (typeof valor !== 'string' || valor.trim() === '') continue;
            filas.push([ETIQUETAS[clave] ?? clave, valor.trim()]);
        }
        filas.push(['Recibido', new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })]);
        filas.push(['Página', request.headers.get('referer') || SITIO]);

        const asuntoForm = String(data.get('_subject') || '').trim();
        const asunto = asuntoForm
            || (esEmpresa ? 'Nueva cotización industrial desde chileelectrico.cl' : 'Nueva solicitud de visita desde chileelectrico.cl');

        const html = `<h2 style="font-family:sans-serif">${escapar(asunto)}</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${filas
            .map(([k, v]) => `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:bold">${escapar(k)}</td><td style="padding:6px 12px;border:1px solid #ddd">${escapar(v).replace(/\n/g, '<br>')}</td></tr>`)
            .join('')}</table>`;
        const texto = filas.map(([k, v]) => `${k}: ${v}`).join('\n');

        const envio = await fetch(RESEND_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
                from: REMITENTE,
                to: [DESTINO],
                reply_to: email || undefined,
                subject: `${asunto} · ${nombre}`,
                html,
                text: texto,
            }),
        });

        if (!envio.ok) {
            const detalle = await envio.text().catch(() => '');
            console.error('Resend no envió el lead:', envio.status, detalle.slice(0, 300));
            return responder(request, false, 'No pudimos enviar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.', tipo);
        }

        return responder(request, true, 'Solicitud enviada', tipo);
    } catch (error) {
        console.error('Error procesando el lead', error);
        return new Response(JSON.stringify({
            message: 'No pudimos procesar tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.',
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
};
