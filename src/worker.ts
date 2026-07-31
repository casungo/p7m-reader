export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const event = url.pathname.match(/^\/metrics\/(opened|failed)$/)?.[1];

    if (event) {
      if (request.method !== "POST") {
        return new Response(null, { status: 405, headers: { Allow: "POST" } });
      }
      if (request.headers.get("Origin") !== url.origin) {
        return new Response(null, { status: 403 });
      }
      env.METRICS.writeDataPoint({ blobs: [event], doubles: [1] });
      return new Response(null, { status: 204 });
    }

    return env.ASSETS.fetch(request);
  },
};
