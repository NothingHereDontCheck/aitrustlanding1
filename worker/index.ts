export interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/subscribe") {
      try {
        const body = await request.json<{ name?: string; email?: string }>();
        const email = (body.email ?? "").trim();
        const name = (body.name ?? "").trim();

        if (!email) {
          return Response.json({ error: "Email is required" }, { status: 400 });
        }

        await env.DB.prepare(
          "INSERT INTO leads (name, email, created_at) VALUES (?, ?, ?)"
        )
          .bind(name, email, new Date().toISOString())
          .run();

        return Response.json({ success: true });
      } catch {
        return Response.json({ error: "Failed to save" }, { status: 500 });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
