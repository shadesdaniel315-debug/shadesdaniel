import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { site } from "@/content/site";

const title = `Privacy Policy | ${site.name}`;
const description = `How ${site.name} collects, uses, and stores the information you share through this website.`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-xl font-bold text-foreground">{children}</h2>;
}

function Privacy() {
  return (
    <>
      <Header />
      <main id="main" className="bg-background">
        <article className="mx-auto max-w-3xl px-5 py-20 text-base leading-relaxed text-muted-foreground sm:px-8 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Privacy</p>
          <h1 className="mt-4 text-4xl font-extrabold text-foreground">Privacy Policy</h1>
          <p className="mt-6">
            This policy explains what information this website collects, why, and how it's handled. This site is run by{" "}
            {site.name}
            {site.email ? (
              <>
                {" "}
                and you can reach me at{" "}
                <a className="font-semibold text-primary hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </>
            ) : null}
            .
          </p>

          <H2>Information you send through the contact form</H2>
          <p className="mt-3">
            When you send a project inquiry, the form collects your name, business email, your company or website
            (optional), the service you're interested in, an estimated budget (optional), and your project details. This
            information is used only to read and reply to your inquiry and to discuss a possible project with you.
          </p>
          <p className="mt-3">
            Inquiries are stored in a secure database provided by Lovable, which hosts this website. They are not sold,
            rented, or shared with anyone for marketing. Please don't include passwords, account logins, or customer
            data in the form.
          </p>

          <H2>Website analytics</H2>
          <p className="mt-3">
            This site uses Lovable's built-in visitor analytics. It uses no cookies, stores nothing on your device,
            doesn't keep IP addresses, and doesn't identify visitors. Lovable collects this data for us.{" "}
            <a
              className="font-semibold text-primary hover:underline"
              href="https://lovable.dev/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lovable's privacy policy
            </a>{" "}
            explains how it handles it.
          </p>
          <p className="mt-3">
            It records the pages visited, where visitors came from, their country, browser, operating system and device
            type, how long they stay, how fast pages load, and errors. This is recorded for every visitor, without
            cookies and without identifying anyone. Detailed data is kept for 90 days and daily summaries for a year.
          </p>

          <H2>Fonts</H2>
          <p className="mt-3">
            Text on this site uses fonts loaded from Google Fonts. When a page loads, your browser requests those font
            files from Google, which receives your IP address and browser details as part of that request.
          </p>

          <H2>How long inquiries are kept</H2>
          <p className="mt-3">
            Inquiries are kept for as long as needed to respond and to keep a record of our conversation. You can ask
            for your inquiry to be deleted at any time.
          </p>

          <H2>Your choices</H2>
          <p className="mt-3">
            You can ask to see, correct, or delete the information you've sent. To make a request, send a message
            through the{" "}
            <Link to="/" hash="contact" className="font-semibold text-primary hover:underline">
              contact form
            </Link>
            {site.email ? " or by email" : ""}.
          </p>

          <p className="mt-12 border-t border-border pt-6 text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
