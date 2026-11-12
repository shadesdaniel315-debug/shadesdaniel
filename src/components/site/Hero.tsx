import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { site } from "@/content/site";
import { HeroVisual } from "./HeroVisual";

const capabilities = ["CRM Setup", "Workflow Automation", "Lead Management", "Funnels & Pipelines"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="dark relative overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="bg-hero-glow absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.02fr_1fr] lg:gap-12 lg:pb-32 lg:pt-24">
        <div className="min-w-0">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span className="truncate">{site.title}</span>
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Better lead management starts with <span className="text-gradient">better systems.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build GoHighLevel CRM and automation systems that help businesses manage leads, streamline follow-ups,
            organize their sales processes, and reduce repetitive manual work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              hash="contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link
              to="/"
              hash="portfolio"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card/40 px-6 text-sm font-semibold text-foreground transition hover:bg-card"
            >
              Explore My Work
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground" aria-label="Core capabilities">
            {capabilities.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-primary/70">·</span>}
                {c}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-primary/60 pl-4 text-sm italic text-muted-foreground">“{site.tagline}”</p>
        </div>

        <div className="min-w-0 animate-rise [animation-delay:120ms] lg:pl-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
