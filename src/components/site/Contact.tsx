import { CalendarDays, Facebook, Lock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Eyebrow } from "./SectionHeading";

const nextSteps = [
  "I read through your inquiry and requirements",
  "I reply by email, with questions if anything is unclear",
  "We talk through the most practical next step",
];

export function Contact({ presetService }: { presetService?: string | undefined }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-elevated lg:grid-cols-[1fr_1.15fr]">
          <div className="dark relative overflow-hidden bg-background p-8 text-foreground sm:p-12">
            <div aria-hidden="true" className="bg-hero-glow absolute inset-0" />
            <div aria-hidden="true" className="bg-blueprint absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            <div className="relative">
              <Eyebrow>Contact</Eyebrow>
              <h2 id="contact-title" className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                Let's build a system that works better for your business.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Tell me what you're trying to improve, where your current process gets stuck, or what you'd like to
                automate. I'll review your requirements and we can discuss the most practical next step.
              </p>

              <ol className="mt-10 space-y-4">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex gap-3.5 text-sm text-foreground/90">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-border bg-card font-mono text-[11px] text-primary">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>

              {(site.email || site.phone || site.bookingUrl || site.socials.length > 0) && (
                <div className="mt-10 flex flex-col items-start gap-3">
                  {site.bookingUrl && (
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-secondary"
                    >
                      <CalendarDays className="h-4 w-4" aria-hidden="true" /> Book a Call
                    </a>
                  )}
                  {site.email && (
                    <Button asChild variant="link" className="h-auto max-w-full justify-start whitespace-normal px-0 text-foreground hover:text-primary">
                      <a href={`mailto:${site.email}`}>
                        <Mail aria-hidden="true" /> <span className="break-all">{site.email}</span>
                      </a>
                    </Button>
                  )}
                  {site.phone && (
                    <Button asChild variant="link" className="px-0 text-foreground hover:text-primary">
                      <a href={`tel:${site.phone}`}><Phone aria-hidden="true" /> {site.phone}</a>
                    </Button>
                  )}
                  {site.socials.map((social) => (
                    <Button key={social.href} asChild variant="link" className="px-0 text-foreground hover:text-primary">
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Facebook aria-hidden="true" /> {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              )}

              <p className="mt-10 flex gap-2.5 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
                <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Your details are only used to respond to your inquiry. They're stored securely and never sold or shared
                for marketing.
              </p>
            </div>
          </div>

          <div className="relative bg-muted/60 p-5 sm:p-10">
            <ContactForm presetService={presetService} />
          </div>
        </div>
      </div>
    </section>
  );
}
