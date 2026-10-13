import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function isAnonKey(key: string) {
  try {
    const payload = JSON.parse(Buffer.from(key.split(".")[1], "base64url").toString("utf8")) as {
      role?: string;
    };
    return payload.role === "anon";
  } catch {
    return false;
  }
}

export function createAnonClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || key.includes("[") || !isAnonKey(key)) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
