import { Hammer, Map, Search, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { icon: Search, title: "Understand", body: "Learn about the business, its current processes, and the problems that need solving." },
  { icon: Map, title: "Map", body: "Plan the CRM structure, workflows, triggers, and integrations before anything is built." },
  { icon: Hammer, title: "Build", body: "Configure and connect the required systems in GoHighLevel." },
  { icon: ShieldCheck, title: "Test & Refine", body: "Test key scenarios, resolve issues, and refine the setup based on your requirements." },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="process-title"
          eyebrow="How I work"
          title="A clear process from first call to working system"
          intro="Automation built on a misunderstood process just makes the wrong thing happen faster. So the order matters."
        />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden="true" className="absolute left-[21px] top-2 bottom-2 w-px bg-border lg:left-0 lg:right-0 lg:top-[21px] lg:bottom-auto lg:h-px lg:w-auto" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-5 lg:block">
              <span className="relative z-10 grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-primary shadow-card">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="lg:mt-6 lg:pr-4">
                <p className="font-mono text-xs text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1.5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
