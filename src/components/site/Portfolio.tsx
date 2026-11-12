import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Info } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { projectCategories, projects, type Project, type ProjectLabel } from "@/content/projects";
import { cn } from "@/lib/utils";
import { MediaFull, MediaThumb } from "./ProjectMedia";
import { SectionHeading } from "./SectionHeading";

const labelStyles: Record<ProjectLabel, string> = {
  "Build walkthrough": "bg-primary/15 text-primary",
  "Recreated illustration": "bg-warning/15 text-warning",
  "Concept project": "bg-violet/15 text-violet",
};

function LabelPill({ label, className }: { label: ProjectLabel; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider", labelStyles[label], className)}>
      {label}
    </span>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const first = project.media[0];
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated">
      <button
        type="button"
        onClick={onOpen}
        className="relative block aspect-[16/9] overflow-hidden border-b border-border bg-muted text-left"
        aria-label={`View project: ${project.title}`}
        tabIndex={-1}
      >
        {first && <MediaThumb media={first} title={project.title} />}
      </button>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <LabelPill label={project.label} />
          <span className="font-mono text-[11px] text-muted-foreground">{project.category}</span>
        </div>
        <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
          >
            View Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{title}</h4>
      <div className="mt-2.5 text-sm leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

function Pending({ children }: { children: React.ReactNode }) {
  return <p className="rounded-lg border border-dashed border-border bg-muted/60 px-3 py-2 text-muted-foreground">{children}</p>;
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <>
      <div className="border-b border-border px-5 pb-5 pt-6 sm:px-8 sm:pt-8">
        <div className="flex flex-wrap items-center gap-2 pr-8">
          <LabelPill label={project.label} />
          <span className="font-mono text-[11px] text-muted-foreground">{project.category}</span>
        </div>
        <DialogTitle className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </DialogTitle>
        <DialogDescription className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.summary}
        </DialogDescription>
      </div>

      <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.45fr_1fr]">
        <div className="min-w-0 space-y-6">
          {project.media.map((m, i) => (
            <MediaFull key={i} media={m} title={project.title} />
          ))}
          {project.label === "Build walkthrough" && (
            <p className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Shown as recorded inside GoHighLevel. Browser bars and any visible contact details have been cropped or
              trimmed out; the build itself has not been altered.
            </p>
          )}
        </div>

        <div className="min-w-0 space-y-6">
          <DetailBlock title="What this shows">
            <ul className="space-y-1.5">
              {project.demonstrates.map((d) => (
                <li key={d} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {d}
                </li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock title="Business problem">
            {project.problem ? <p>{project.problem}</p> : <Pending>Project context will be added soon.</Pending>}
          </DetailBlock>

          <DetailBlock title="My approach">
            {project.approach ? <p>{project.approach}</p> : <Pending>Approach notes will be added soon.</Pending>}
          </DetailBlock>

          <DetailBlock title={project.category === "CRM & Pipelines" ? "Pipeline stages" : "Workflow structure"}>
            <ol className="space-y-2">
              {project.architecture.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-accent font-mono text-[10px] font-semibold text-accent-foreground">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </DetailBlock>

          <DetailBlock title="Tools and features">
            <ul className="flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <li key={t} className="rounded-md border border-border bg-muted/60 px-2 py-1 text-xs text-foreground/85">
                  {t}
                </li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock title="Outcome">
            {project.outcome ? <p>{project.outcome}</p> : <Pending>No measured results are shown for this build.</Pending>}
          </DetailBlock>

          <Link
            to="/"
            hash="contact"
            onClick={onClose}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Discuss a similar system
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filters = useMemo(
    () => ["All", ...projectCategories.filter((c) => projects.some((p) => p.category === c))],
    [],
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const open = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="dark relative bg-background py-24 text-foreground sm:py-32">
      <div aria-hidden="true" className="bg-blueprint absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <SectionHeading
            id="portfolio-title"
            eyebrow="Portfolio"
            title="Selected Work"
            intro="Practical systems designed around real business workflows."
          />
          <div className="rounded-xl border border-border bg-card/60 p-4 text-xs leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Build walkthroughs</span> are screen recordings of my own
              GoHighLevel builds. <span className="font-semibold text-foreground">Recreated</span> and{" "}
              <span className="font-semibold text-foreground">concept</span> items are clearly marked and use placeholder
              data only.
            </p>
          </div>
        </div>

        <div className="mt-12 -mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0" role="group" aria-label="Filter projects by category">
          <div className="flex w-max gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "h-9 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition",
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/50 text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={() => setOpenSlug(p.slug)} />
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpenSlug(null)}>
        <DialogContent className="block max-h-[92vh] w-[calc(100%-1.5rem)] max-w-5xl gap-0 overflow-y-auto rounded-2xl p-0 sm:rounded-2xl">
          {open && <ProjectDetail project={open} onClose={() => setOpenSlug(null)} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}
