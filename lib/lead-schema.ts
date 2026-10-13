import { z } from "zod";

const MAX_OPEN_AGE_MS = 90 * 24 * 60 * 60 * 1000;

export function openedAtIsReady(value: string | undefined) {
  if (!value) return false;
  const opened = Date.parse(value);
  if (!Number.isFinite(opened)) return false;
  const age = Date.now() - opened;
  return age >= 3000 && age <= MAX_OPEN_AGE_MS;
}

export const leadSchema = z.object({
  first_name: z.string().trim().min(1).max(80),
  last_name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\-.\s\d]{10,20}$/),
  is_broker: z.boolean(),
  casl_consent: z.literal(true),
  website: z.string().max(0).optional(),
  elapsed_ms: z.number().min(3000).optional(),
  opened_at: z.string().max(40).optional(),
  consent_page: z.string().max(200),
  utm_source: z.string().max(200).nullish(),
  utm_medium: z.string().max(200).nullish(),
  utm_campaign: z.string().max(200).nullish(),
  utm_term: z.string().max(200).nullish(),
  utm_content: z.string().max(200).nullish(),
}).refine((data) => {
  if (typeof data.elapsed_ms === "number") return true;
  return openedAtIsReady(data.opened_at);
}, { path: ["elapsed_ms"] });

export type LeadInput = z.infer<typeof leadSchema>;
