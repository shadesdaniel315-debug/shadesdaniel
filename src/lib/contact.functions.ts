import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";
import { contactSubmissionSchema, isLikelySpam } from "./contact-schema";

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSubmissionSchema.parse(input))
  .handler(async ({ data }) => {
    // Quietly accept obvious bot submissions without storing them.
    if (isLikelySpam(data)) return { ok: true as const };

    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
      console.error("Contact form: backend configuration missing");
      return { ok: false as const, error: "The form is temporarily unavailable. Please try again later." };
    }

    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("contact_inquiries").insert({
      full_name: data.fullName,
      email: data.email,
      company: data.company || null,
      service: data.service,
      budget: data.budget || null,
      details: data.details,
    });

    if (error) {
      console.error("Contact form insert failed:", error.message);
      return { ok: false as const, error: "Your message could not be sent. Please try again in a moment." };
    }

    return { ok: true as const };
  });
