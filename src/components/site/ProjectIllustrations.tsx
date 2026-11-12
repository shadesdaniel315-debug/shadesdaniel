import { Bot, CalendarCheck, MessageSquare, UserRound, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { name: "New Lead", n: 2, tone: "bg-primary" },
  { name: "Attempting Contact", n: 3, tone: "bg-warning" },
  { name: "Contact Made (No Purchase)", n: 2, tone: "bg-violet" },
  { name: "Long-Term Nurturing", n: 3, tone: "bg-primary-glow" },
  { name: "Intro Offer Purchased", n: 1, tone: "bg-success" },
];

/** Redrawn pipeline with placeholder contacts only. */
export function PipelineIllustration({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="img"
      aria-label="Illustration of a five-stage opportunity pipeline with placeholder contacts"
      className="h-full w-full bg-muted/40 p-3 sm:p-4"
    >
      <div className="grid h-full grid-cols-5 gap-1.5 sm:gap-2">
        {stages.map((s, si) => (
          <div key={s.name} className="min-w-0 rounded-lg border border-border bg-background/60 p-1.5 sm:p-2">
            <span className={cn("block h-0.5 w-full rounded-full", s.tone)} />
            <p className={cn("mt-1.5 font-semibold leading-tight text-foreground", compact ? "line-clamp-2 text-[8px] sm:text-[9px]" : "text-[10px] sm:text-xs")}>
              {s.name}
            </p>
            <div className="mt-2 space-y-1.5">
              {Array.from({ length: s.n }).map((_, i) => (
                <div key={i} className="rounded-md border border-border bg-card p-1.5">
                  <div className="flex items-center gap-1">
                    <UserRound className="h-2.5 w-2.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span className="truncate text-[8px] font-medium text-foreground sm:text-[9px]">
                      Contact {String.fromCharCode(65 + ((si * 3 + i) % 26))}
                    </span>
                  </div>
                  {!compact && (
                    <>
                      <p className="mt-1 truncate text-[8px] text-muted-foreground sm:text-[9px]">Source: lead form</p>
                      <p className="truncate text-[8px] text-muted-foreground sm:text-[9px]">Value: $—</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step({ icon: Icon, title, body, tone }: { icon: typeof Bot; title: string; body: string; tone: string }) {
  return (
    <div className="flex min-w-0 items-start gap-2 rounded-lg border border-border bg-card p-2 sm:p-2.5">
      <span className={cn("grid h-6 w-6 shrink-0 place-items-center rounded-md", tone)}>
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs">{title}</p>
        <p className="truncate text-[9px] text-muted-foreground sm:text-[11px]">{body}</p>
      </div>
    </div>
  );
}

/** Concept diagram for an AI-assisted qualification flow. */
export function AiQualificationIllustration() {
  return (
    <div
      role="img"
      aria-label="Concept diagram: website chat, AI qualifying questions, then booking or handoff to a person"
      className="flex h-full w-full flex-col justify-center gap-2 bg-muted/40 p-3 sm:p-5"
    >
      <Step icon={MessageSquare} title="Website chat" body="Visitor starts a conversation" tone="bg-primary/15 text-primary" />
      <div className="ml-5 h-2.5 w-px bg-border" aria-hidden="true" />
      <Step icon={Bot} title="AI asks 3 questions" body="Answers saved to contact fields" tone="bg-violet/15 text-violet" />
      <div className="ml-5 h-2.5 w-px bg-border" aria-hidden="true" />
      <div className="grid grid-cols-2 gap-2">
        <Step icon={CalendarCheck} title="Qualified" body="Offer booking calendar" tone="bg-success/15 text-success" />
        <Step icon={Users} title="Unclear" body="Hand off to team" tone="bg-warning/15 text-warning" />
      </div>
    </div>
  );
}
