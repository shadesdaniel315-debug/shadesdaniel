import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Tools } from "@/components/site/Tools";
import { Trust } from "@/components/site/Trust";
import { site } from "@/content/site";

const title = `${site.name} | GoHighLevel Specialist for CRM Setup & Workflow Automation`;
const description =
  "GoHighLevel specialist building CRM setups, workflow automation, lead follow-up, funnels and pipelines, and appointment automation that fit how your business runs.";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" && search["service"].length <= 60 ? { service: search["service"] } : {},
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: "GoHighLevel Specialist",
          description,
          knowsAbout: [
            "GoHighLevel CRM setup",
            "Workflow automation",
            "Lead follow-up automation",
            "Funnels and pipelines",
            "Appointment automation",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { service } = Route.useSearch();
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Industries />
        <About />
        <Tools />
        <Trust />
        <Faq />
        <Contact presetService={service} />
      </main>
      <Footer />
    </>
  );
}
