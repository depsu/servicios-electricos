export const prerender = false; // API endpoints must be server-side rendered

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();

        // Validate minimum data
        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');

        if (!name || !phone) {
            return new Response(JSON.stringify({
                message: "Faltan datos obligatorios"
            }), { status: 400 });
        }

        // Capture Tracking Data
        const tracking = {
            utm_source: data.get('utm_source'),
            utm_medium: data.get('utm_medium'),
            utm_campaign: data.get('utm_campaign'),
            gclid: data.get('gclid'),
            submittedAt: new Date().toISOString()
        };

        // Placeholder: In a real app, send to Email/Database/CRM
        console.log('--- LEAD RECEIVED ---');
        console.log('Contact:', { name, email, phone });
        console.log('Tracking:', tracking);
        console.log('---------------------');

        // Simulate Success
        return new Response(JSON.stringify({
            message: "Lead received successfully",
            id: "LEAD-" + Math.floor(Math.random() * 10000)
        }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({
            message: "Error processing request"
        }), { status: 500 });
    }
}
