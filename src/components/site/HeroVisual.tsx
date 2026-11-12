import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  GitBranch,
  KanbanSquare,
  MessageSquare,
  Send,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const columns = [
  { name: "New Lead", tone: "bg-primary", cards: [["Web form", 72], ["Facebook", 58], ["Referral", 64]] },
  { name: "Contacted", tone: "bg-violet", cards: [["SMS reply", 66], ["Call", 52]] },
  { name: "Booked", tone: "bg-warning", cards: [["Calendar", 60], ["Calendar", 70]] },
  { name: "Won", tone: "bg-success", cards: [["Closed", 56]] },
] as const;

function Node({
  icon: Icon,
  kind,
  label,
  accent = "text-primary bg-primary/12",
}: {
  icon: LucideIcon;
  kind: string;
  label: string;
  accent?: string;
}) {
  return (
    <div className="min-w-0 flex-1 rounded-lg border border-border bg-background/70 p-2 sm:p-2.5">
      <div className="flex items-center gap-1.5">
        <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded", accent)}>
          <Icon className="h-3 w-3" aria-hidden="true" />
        </span>
        <span className="truncate font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{kind}</span>
      </div>
      <p className="mt-1.5 truncate text-[11px] font-semibold text-foreground sm:text-xs">{label}</p>
    </div>
  );
}

function Connector() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 8" className="h-2 w-3 shrink-0 sm:w-5" preserveAspectRatio="none">
      <line x1="0" y1="4" x2="24" y2="4" className="animate-flow stroke-primary" strokeWidth="2" />
    </svg>
  );
}

/** Original CRM interface concept. Placeholder data only. */
export function HeroVisual() {
  const sideIcons: LucideIcon[] = [Users, KanbanSquare, Workflow, CalendarCheck, MessageSquare];
  return (
    <div className="relative" role="img" aria-label="Illustration of a CRM workspace with a lead pipeline and an automated follow-up workflow">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        {/* window bar */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <p className="min-w-0 truncate font-mono text-[11px] text-muted-foreground">
            workspace / opportunities / <span className="text-foreground">lead-pipeline</span>
          </p>
          <span className="ml-auto hidden shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
            concept view
          </span>
        </div>

        <div className="grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[48px_minmax(0,1fr)]">
          <div className="flex flex-col items-center gap-2 border-r border-border py-4" aria-hidden="true">
            {sideIcons.map((Icon, i) => (
              <span
                key={i}
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-lg",
                  i === 1 ? "bg-primary/15 text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>

          <div className="min-w-0 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-sm font-bold text-foreground">Lead Pipeline</p>
              <div className="flex shrink-0 rounded-md border border-border p-0.5 font-mono text-[10px]">
                <span className="rounded bg-secondary px-2 py-0.5 text-foreground">Board</span>
                <span className="px-2 py-0.5 text-muted-foreground">List</span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
              {columns.map((col) => (
                <div key={col.name} className="min-w-0 rounded-lg bg-muted/60 p-1.5 sm:p-2">
                  <div className="flex items-center gap-1.5">
                    <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", col.tone)} />
                    <p className="truncate text-[10px] font-semibold text-foreground sm:text-[11px]">{col.name}</p>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {col.cards.map(([tag, w], i) => (
                      <div key={i} className="rounded-md border border-border bg-card p-1.5 sm:p-2">
                        <div className="flex items-center gap-1.5">
                          <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-foreground/12" />
                          <span className="h-1.5 rounded-full bg-foreground/20" style={{ width: `${w}%` }} />
                        </div>
                        <span className="mt-1.5 block h-1 w-3/4 rounded-full bg-foreground/10" />
                        <span className="mt-1.5 hidden w-fit rounded bg-accent px-1 py-px font-mono text-[8px] text-accent-foreground sm:block">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* workflow strip */}
            <div className="mt-3 rounded-xl border border-border bg-muted/40 p-2.5 sm:mt-4 sm:p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="flex min-w-0 items-center gap-1.5 truncate text-[11px] font-semibold text-foreground sm:text-xs">
                  <Workflow className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="truncate">Workflow · New lead follow-up</span>
                </p>
                <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-success">
                  <span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-success" />
                  published
                </span>
              </div>
              <div className="mt-2.5 flex items-center">
                <Node icon={Zap} kind="Trigger" label="Form submitted" accent="text-warning bg-warning/15" />
                <Connector />
                <Node icon={KanbanSquare} kind="Action" label="Add to pipeline" />
                <Connector />
                <Node icon={Clock} kind="Wait" label="5 minutes" accent="text-violet bg-violet/15" />
                <Connector />
                <Node icon={GitBranch} kind="If / else" label="Replied?" accent="text-violet bg-violet/15" />
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 pl-[25%]">
                <Node icon={CalendarCheck} kind="Yes" label="Send booking link" accent="text-success bg-success/15" />
                <Node icon={Send} kind="No" label="SMS follow-up" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating status cards */}
      <div className="absolute -right-3 -top-5 hidden w-56 animate-rise rounded-xl border border-border bg-card/95 p-3 shadow-elevated backdrop-blur [animation-delay:400ms] md:block xl:-right-6">
        <div className="flex items-start gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-success/15 text-success">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-foreground">Appointment booked</p>
            <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">Confirmation sent, reminders scheduled</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 hidden w-52 animate-rise rounded-xl border border-border bg-card/95 p-3 shadow-elevated backdrop-blur [animation-delay:650ms] md:block xl:-left-8">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-xs font-semibold text-foreground">Task created for sales team</p>
        </div>
      </div>
    </div>
  );
}
