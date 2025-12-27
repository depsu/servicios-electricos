export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    if (!name || !phone) {
      return new Response(JSON.stringify({
        message: "Faltan datos obligatorios"
      }), { status: 400 });
    }
    const tracking = {
      utm_source: data.get("utm_source"),
      utm_medium: data.get("utm_medium"),
      utm_campaign: data.get("utm_campaign"),
      gclid: data.get("gclid"),
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("--- LEAD RECEIVED ---");
    console.log("Contact:", { name, email, phone });
    console.log("Tracking:", tracking);
    console.log("---------------------");
    return new Response(JSON.stringify({
      message: "Lead received successfully",
      id: "LEAD-" + Math.floor(Math.random() * 1e4)
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      message: "Error processing request"
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
