import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { createAnonClient } from "@/lib/supabase";

const SOURCE = "https://naverahomes.ca";

function isFormPost(req: Request) {
  const type = req.headers.get("content-type") || "";
  return type.includes("application/x-www-form-urlencoded") || type.includes("multipart/form-data");
}

function corsHeaders(req: Request) {
  const headers = new Headers();
  const origin = req.headers.get("origin");
  const claimed = new URL(req.url).searchParams.get("__amp_source_origin");
  if (origin) headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To");
  headers.set("Vary", "Origin");
  const sourceAllowed = !claimed || claimed === SOURCE;
  if (sourceAllowed) headers.set("AMP-Access-Control-Allow-Source-Origin", SOURCE);
  return { headers, sourceAllowed };
}

function json(req: Request, body: { ok: boolean }, status: number, redirect = false) {
  const { headers } = corsHeaders(req);
  if (redirect) headers.set("AMP-Redirect-To", `${SOURCE}/thank-you`);
  return NextResponse.json(body, { status, headers });
}

function utmValue(value: string) {
  const trimmed = value.trim().slice(0, 200);
  if (!trimmed || trimmed.startsWith("QUERY_PARAM")) return null;
  return trimmed;
}

async function readLead(req: Request) {
  if (!isFormPost(req)) return req.json().catch(() => null);
  const form = await req.formData().catch(() => null);
  if (!form) return null;
  const read = (key: string) => {
    const value = form.get(key);
    return typeof value === "string" ? value : "";
  };
  const broker = read("is_broker");
  const consent = read("casl_consent");
  return {
    first_name: read("first_name"),
    last_name: read("last_name"),
    email: read("email"),
    phone: read("phone"),
    is_broker: broker === "yes" ? true : broker === "no" ? false : broker,
    casl_consent: consent === "true" ? true : consent,
    website: read("website"),
    opened_at: read("opened_at"),
    consent_page: read("consent_page"),
    utm_source: utmValue(read("utm_source")),
    utm_medium: utmValue(read("utm_medium")),
    utm_campaign: utmValue(read("utm_campaign")),
    utm_term: utmValue(read("utm_term")),
    utm_content: utmValue(read("utm_content")),
  };
}

export async function OPTIONS(req: Request) {
  const { headers, sourceAllowed } = corsHeaders(req);
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, AMP-Same-Origin");
  return new NextResponse(null, { status: sourceAllowed ? 204 : 403, headers });
}

export async function POST(req: Request) {
  const { sourceAllowed } = corsHeaders(req);
  if (!sourceAllowed) return json(req, { ok: false }, 403);

  const formPost = isFormPost(req);
  const parsed = leadSchema.safeParse(await readLead(req));
  if (!parsed.success) return json(req, { ok: false }, 400);

  const { website, elapsed_ms, opened_at: _openedAt, ...lead } = parsed.data;
  if (website) return json(req, { ok: false }, 400);
  if (!formPost && (typeof elapsed_ms !== "number" || elapsed_ms < 3000)) {
    return json(req, { ok: false }, 400);
  }

  const supabase = createAnonClient();
  if (!supabase) return json(req, { ok: false }, 500);

  const { error } = await supabase.from("navera_homes_leads").insert({
    first_name: lead.first_name,
    last_name: lead.last_name,
    email: lead.email,
    phone: lead.phone,
    is_broker: lead.is_broker,
    casl_consent: lead.casl_consent,
    consent_page: lead.consent_page,
    utm_source: lead.utm_source ?? null,
    utm_medium: lead.utm_medium ?? null,
    utm_campaign: lead.utm_campaign ?? null,
    utm_term: lead.utm_term ?? null,
    utm_content: lead.utm_content ?? null,
    source: SOURCE,
    consent_timestamp: new Date().toISOString(),
  });

  if (error) return json(req, { ok: false }, 500);
  return json(req, { ok: true }, 200, formPost);
}
