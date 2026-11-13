import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("h-8 w-8 shrink-0", className)}>
      <rect width="32" height="32" rx="8" className="fill-primary/15" />
      <path
        d="M10 11h6a4 4 0 0 1 4 4v2a4 4 0 0 0 4 4"
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="stroke-primary"
      />
      <circle cx="9" cy="11" r="3" className="fill-foreground" />
      <circle cx="23" cy="21" r="3" className="fill-primary" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[13px] font-extrabold leading-snug text-foreground sm:text-[15px]">{site.name}</span>
        <span className="mt-1 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          CRM · Automation
        </span>
      </span>
    </span>
  );
}
