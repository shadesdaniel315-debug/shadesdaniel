import { ClipboardCheck, FlaskConical, MessageCircle, Route } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "./SectionHeading";

const expectations = [
  { icon: MessageCircle, title: "Clear communication", body: "Plain-language updates, and straight answers when something isn't possible or isn't supported." },
  { icon: ClipboardCheck, title: "Clear project scope", body: "We agree on what's being built, what's included, and what's needed from you before work starts." },
  { icon: Route, title: "Organized implementation", body: "Named workflows, tidy pipelines, and a setup your team can find their way around." },
  { icon: FlaskConical, title: "Testing before handover", body: "Key scenarios are tested so you're not the first person to discover a broken step." },
];

/** Shows real testimonials when added to content/testimonials.ts, otherwise "What you can expect". */
export function Trust() {
  if (testimonials.length > 0) {
    return (
      <section id="testimonials" aria-labelledby="trust-title" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="trust-title" eyebrow="Testimonials" title="What clients say" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  {t.role && <p className="text-xs text-muted-foreground">{t.role}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="expect" aria-labelledby="trust-title" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="trust-title"
          eyebrow="Working together"
          title="What you can expect"
          align="center"
          intro="No inflated promises. Just a dependable way of working."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((e) => (
            <div key={e.title} className="bg-card p-7">
              <e.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-base font-bold text-foreground">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
