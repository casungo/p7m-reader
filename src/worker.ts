export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const event = url.pathname.match(/^\/metrics\/(opened|failed)$/)?.[1];

    if (event) {
      if (request.method !== "POST") {
        return new Response(null, { status: 405, headers: { Allow: "POST" } });
      }
      console.log(JSON.stringify({ event }));
      return new Response(null, { status: 204 });
    }

    return env.ASSETS.fetch(request);
  },
};
