import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "dark sticky top-0 z-50 border-b transition-colors",
        scrolled || open ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-background",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" hash="top" aria-label={`${site.name}, home`} className="min-w-0 rounded-md">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            className="hidden h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 sm:inline-flex"
          >
            Let's Talk
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border py-3.5 text-base font-semibold text-foreground"
                >
                  {item.label}
                  <span aria-hidden="true" className="font-mono text-xs text-muted-foreground">
                    #{item.hash}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
