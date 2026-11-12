import {
  Bot,
  CalendarClock,
  ClipboardList,
  Database,
  KanbanSquare,
  LayoutTemplate,
  Mail,
  PhoneCall,
  Webhook,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tools = [
  { icon: Database, label: "GoHighLevel CRM" },
  { icon: Workflow, label: "Workflow Builder" },
  { icon: KanbanSquare, label: "Sales Pipelines" },
  { icon: LayoutTemplate, label: "Funnels & Landing Pages" },
  { icon: ClipboardList, label: "Forms & Surveys" },
  { icon: CalendarClock, label: "Calendars & Appointment Automation" },
  { icon: Mail, label: "Email & SMS Workflows" },
  { icon: Bot, label: "AI Conversation Features" },
  { icon: Webhook, label: "Supported Integrations & Webhooks" },
  { icon: PhoneCall, label: "Phone & Messaging Configuration" },
];

export function Tools() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="dark relative overflow-hidden bg-background py-24 text-foreground sm:py-28">
      <div aria-hidden="true" className="bg-hero-glow absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="tools-title"
          eyebrow="Tools and capabilities"
          title="What I work with inside GoHighLevel"
          intro="The parts of the platform I use to put these systems together."
        />
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((t) => (
            <li
              key={t.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-4 transition hover:border-primary/40"
            >
              <t.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium leading-snug text-foreground">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
