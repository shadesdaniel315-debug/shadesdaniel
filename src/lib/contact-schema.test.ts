import { describe, expect, it } from "vitest";
import { contactSchema, isLikelySpam, MIN_FILL_TIME_MS } from "./contact-schema";

const valid = {
  fullName: "Jane Doe",
  email: "jane@company.com",
  company: "",
  service: "crm-setup",
  budget: "",
  details: "We need our pipeline cleaned up and follow-up automated.",
  consent: true as const,
};

describe("contact form rules", () => {
  it("accepts a complete inquiry with optional fields left empty", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("requires a valid business email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a chosen service", () => {
    expect(contactSchema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });

  it("requires project details of at least 20 characters", () => {
    expect(contactSchema.safeParse({ ...valid, details: "Too short" }).success).toBe(false);
  });

  it("requires the privacy confirmation", () => {
    expect(contactSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });

  it("flags submissions with the hidden field filled in", () => {
    expect(isLikelySpam({ website: "http://spam.example", startedAt: 0 }, 60_000)).toBe(true);
  });

  it("flags submissions sent faster than a person could type", () => {
    const now = 100_000;
    expect(isLikelySpam({ website: "", startedAt: now - (MIN_FILL_TIME_MS - 1) }, now)).toBe(true);
    expect(isLikelySpam({ website: "", startedAt: now - 10_000 }, now)).toBe(false);
  });
});
