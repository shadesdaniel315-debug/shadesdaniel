import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-primary/60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </div>
  );
}
