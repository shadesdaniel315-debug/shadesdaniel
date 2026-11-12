import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { services, type Service } from "@/content/services";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

function ServiceCard({ service, wide = false }: { service: Service; wide?: boolean }) {
  const Icon = service.icon;
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated sm:p-7",
        wide && "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-10",
      )}
    >
      <div className="flex flex-col">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        {wide && <DiscussLink slug={service.slug} title={service.title} className="mt-6 hidden lg:inline-flex" />}
      </div>
      <div className="flex flex-1 flex-col">
        <ul className={cn("mt-5 space-y-2.5", wide && "lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-3 lg:space-y-0")}>
          {service.points.map((p) => (
            <li key={p} className="flex gap-2.5 text-sm text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <DiscussLink slug={service.slug} title={service.title} className={cn(wide && "lg:hidden")} />
        </div>
      </div>
    </article>
  );
}

function DiscussLink({ slug, title, className }: { slug: string; title: string; className?: string }) {
  return (
    <Link
      to="/"
      hash="contact"
      search={{ service: slug }}
      resetScroll={false}
      aria-label={`Discuss this service: ${title}`}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5",
        className,
      )}
    >
      Discuss This Service
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function Services() {
  const main = services.slice(0, -1);
  const last = services[services.length - 1];
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="Services"
            title="Systems I Build"
            intro="Each service is about one thing: making the way you handle leads, follow-up, and appointments more organized and less dependent on manual work."
          />
          <p className="text-sm leading-relaxed text-muted-foreground lg:justify-self-end lg:text-right">
            Pick one area or combine several.
            <br className="hidden lg:block" /> Every build starts with how your business works today.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {main.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
          {last && <ServiceCard service={last} wide />}
        </div>
      </div>
    </section>
  );
}
