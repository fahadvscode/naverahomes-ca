import { z } from "zod";

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
  elapsed_ms: z.number().min(3000),
  consent_page: z.string().max(200),
  utm_source: z.string().max(200).nullish(),
  utm_medium: z.string().max(200).nullish(),
  utm_campaign: z.string().max(200).nullish(),
  utm_term: z.string().max(200).nullish(),
  utm_content: z.string().max(200).nullish(),
});

export type LeadInput = z.infer<typeof leadSchema>;
