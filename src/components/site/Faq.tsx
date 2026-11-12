import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/faqs";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-border bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Frequently asked questions"
            intro="What's possible always depends on your requirements, account access, GoHighLevel plan, and any third-party tools involved. If your question isn't here, ask it in the form below."
          />
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-5 shadow-card sm:px-7">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border last:border-b-0">
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
