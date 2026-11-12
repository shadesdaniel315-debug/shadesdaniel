import { industries } from "@/content/industries";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="relative border-y border-border bg-muted/50 py-24 sm:py-32">
      <div aria-hidden="true" className="bg-blueprint-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="industries-title"
          eyebrow="Industries I support"
          title="Different businesses, the same need for organized follow-up"
          intro="The details change by industry, but the goal stays the same: every lead tracked, every appointment confirmed, and less to remember by hand."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <article key={ind.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                <ind.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.intro}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {ind.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-foreground/85">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
