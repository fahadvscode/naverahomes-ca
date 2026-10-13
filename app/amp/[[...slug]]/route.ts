import { renderAmp } from "@/lib/amp-html";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, context: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await context.params;
  const html = renderAmp(slug, new Date().toISOString());
  if (!html) {
    return new Response("Not found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
  }
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "private, no-store",
    },
  });
}
