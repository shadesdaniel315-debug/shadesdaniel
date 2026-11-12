import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Database,
  LayoutTemplate,
  MessagesSquare,
  PhoneCall,
  Repeat2,
  Workflow,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "crm-setup",
    title: "GoHighLevel CRM Setup",
    description:
      "A CRM organized around how your business actually sells, so every lead has a clear place and a clear next step.",
    points: [
      "Account configuration and workspace organization",
      "Contact management and custom fields",
      "Tags, segments, and lead organization",
      "Opportunity pipelines and sales stages",
      "CRM structure tailored to your process",
    ],
    icon: Database,
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Repetitive handoffs, reminders, and updates handled by workflows, so your team spends time on the work that needs people.",
    points: [
      "Automated lead assignment and notifications",
      "Trigger-based workflows",
      "Conditional logic and workflow branching",
      "Follow-up sequences and task creation",
      "Internal alerts and process automation",
    ],
    icon: Workflow,
  },
  {
    slug: "lead-follow-up",
    title: "Lead Follow-Up Systems",
    description:
      "Consistent follow-up that keeps going after the first reply, so fewer leads go quiet because nobody got back to them.",
    points: [
      "Lead nurture sequences",
      "Email and SMS follow-up automation",
      "Missed-call text-back where supported",
      "Lead re-engagement workflows",
      "Consistent communication processes",
    ],
    icon: Repeat2,
  },
  {
    slug: "funnels-forms",
    title: "Funnels, Forms and Landing Pages",
    description:
      "Pages and forms that capture the right details and send every new lead straight into the right pipeline and workflow.",
    points: [
      "Lead capture forms and surveys",
      "Landing pages and funnel setup",
      "Form-to-CRM integration",
      "Pipeline and workflow connections",
      "Clear, conversion-focused user journeys",
    ],
    icon: LayoutTemplate,
  },
  {
    slug: "appointments",
    title: "Appointment Booking and Calendars",
    description:
      "Booking that confirms, reminds, and handles changes on its own, so appointments are easier to keep and easier to manage.",
    points: [
      "Calendar configuration",
      "Booking forms and appointment workflows",
      "Booking confirmations and reminders",
      "Rescheduling and cancellation workflows",
      "Appointment-related notifications",
    ],
    icon: CalendarCheck,
  },
  {
    slug: "ai-conversations",
    title: "AI Conversations and Communication",
    description:
      "Conversations routed to the right place, with AI used where it genuinely helps and a clear handoff to your team.",
    points: [
      "AI conversation setup where appropriate",
      "Website chat and supported messaging channels",
      "Automated conversation routing",
      "Lead qualification and handoff processes",
      "Communication workflow configuration",
    ],
    icon: MessagesSquare,
  },
  {
    slug: "phone-messaging",
    title: "Phone and Messaging Infrastructure",
    description:
      "Help setting up and troubleshooting the phone and messaging pieces that sit underneath your follow-up. Carrier and registry decisions stay outside anyone's control, so I focus on getting your setup and submissions right.",
    points: [
      "Supported phone and messaging configuration",
      "A2P 10DLC registration assistance for eligible US use cases",
      "Caller ID configuration where supported",
      "SHAKEN/STIR and CNAM configuration or troubleshooting where applicable",
      "Voice Integrity registration or reputation troubleshooting where supported",
    ],
    icon: PhoneCall,
  },
];

export const inquiryServiceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "troubleshooting", label: "Fixing an existing setup" },
  { value: "not-sure", label: "Not sure yet" },
];
