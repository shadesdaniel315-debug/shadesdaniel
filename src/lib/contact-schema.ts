import { z } from "zod";

export const budgetOptions = [
  "Not sure yet",
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000+",
] as const;

/** Minimum time (ms) a person needs to fill in the form. Faster submissions are treated as bots. */
export const MIN_FILL_TIME_MS = 2500;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your business email")
    .email("Please enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  company: z.string().trim().max(200, "Must be under 200 characters").optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service").max(100),
  budget: z.string().trim().max(50).optional().or(z.literal("")),
  details: z
    .string()
    .trim()
    .min(20, "Please share a little more detail (at least 20 characters)")
    .max(3000, "Please keep it under 3000 characters"),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm so I can reply to you" }) }),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** What the browser sends: the form values plus spam-check fields. */
export const contactSubmissionSchema = contactSchema.extend({
  website: z.string().max(500).optional(), // honeypot, must stay empty
  startedAt: z.number().int().positive(),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export function isLikelySpam(sub: Pick<ContactSubmission, "website" | "startedAt">, now = Date.now()) {
  if (sub.website && sub.website.trim().length > 0) return true;
  if (now - sub.startedAt < MIN_FILL_TIME_MS) return true;
  return false;
}
