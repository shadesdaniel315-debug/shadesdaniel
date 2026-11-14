const portraitSrc = "/assets/daniel-portrait.jpg";
import { site } from "@/content/site";
import { Eyebrow } from "./SectionHeading";

const principles = [
  { title: "Understand the process before automating it", body: "Automation should follow a process that already makes sense." },
  { title: "Build for clarity, reliability, and usability", body: "Your team should be able to read the setup and trust it." },
  { title: "Test the workflow before considering it complete", body: "Key scenarios get run through before handover." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[1.75rem] border border-dashed border-primary/30" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-muted shadow-elevated">
            <img
              src={portraitSrc}
              alt={`Portrait of ${site.name}`}
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] h-auto w-full object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-border bg-card/95 p-4 shadow-elevated backdrop-blur sm:left-auto sm:right-[-1.25rem] sm:w-64">
            <p className="text-sm font-bold text-foreground">{site.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{site.title}</p>
          </div>
        </div>

        <div className="min-w-0 lg:pt-4">
          <Eyebrow>About me</Eyebrow>
          <h2 id="about-title" className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            I build systems around how your business actually runs.
          </h2>
          <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I work with GoHighLevel to help businesses bring their customer management and follow-up processes into a
              more organized system.
            </p>
            <p>
              My focus is on building practical CRM structures, workflows, funnels, appointment systems, and
              communication processes that fit the way a business operates.
            </p>
            <p>
              I believe automation should do more than save time. It should make everyday operations clearer, reduce
              unnecessary manual work, and help businesses manage opportunities more consistently.
            </p>
            <p>
              I approach each project by understanding the problem first, mapping the process, and building a system
              around the actual requirements.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-foreground">My approach</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {principles.map((p, i) => (
                <li key={p.title} className="rounded-xl border border-border bg-card p-4 shadow-card">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <p className="mt-2 text-sm font-semibold leading-snug text-foreground">{p.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
