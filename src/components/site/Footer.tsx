import { Link } from "@tanstack/react-router";
import { navItems, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="dark border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            GoHighLevel CRM setup, workflow automation, lead follow-up, funnels, and appointment systems built around
            how your business actually works.
          </p>
          <p className="mt-4 text-sm italic text-muted-foreground">“{site.tagline}”</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Navigate</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link to="/" hash={item.hash} className="text-sm text-foreground/85 hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-sm text-foreground/85 hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Get in touch</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/" hash="contact" className="text-foreground/85 hover:text-primary">
                Send a project inquiry
              </Link>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="break-all text-foreground/85 hover:text-primary">
                  {site.email}
                </a>
              </li>
            )}
            {site.phone && (
              <li>
                <a href={`tel:${site.phone}`} className="text-foreground/85 hover:text-primary">
                  {site.phone}
                </a>
              </li>
            )}
            {site.bookingUrl && (
              <li>
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/85 hover:text-primary">
                  Book a call
                </a>
              </li>
            )}
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-foreground/85 hover:text-primary">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Independent GoHighLevel specialist. Not affiliated with or endorsed by HighLevel.</p>
        </div>
      </div>
    </footer>
  );
}
