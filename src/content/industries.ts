import type { LucideIcon } from "lucide-react";
import { Building2, Dumbbell, Lightbulb, ShieldCheck } from "lucide-react";

export const industries: { title: string; icon: LucideIcon; intro: string; points: string[] }[] = [
  {
    title: "Real estate",
    icon: Building2,
    intro: "Buyer and seller leads arrive from many sources and need quick, steady contact.",
    points: [
      "Separate pipelines for buyers, sellers, and referrals",
      "Fast first response and long-term nurture for slower leads",
      "Showing and consultation booking with reminders",
    ],
  },
  {
    title: "Coaching and consulting",
    icon: Lightbulb,
    intro: "Discovery calls, applications, and programs all need organized follow-up.",
    points: [
      "Application or quiz funnels that segment leads",
      "Call booking with confirmations and pre-call messages",
      "Post-call follow-up for leads who have not decided yet",
    ],
  },
  {
    title: "Fitness and wellness",
    icon: Dumbbell,
    intro: "Trials, intro offers, and class bookings depend on timely reminders.",
    points: [
      "Intro offer and trial lead pipelines",
      "Booking reminders to help reduce no-shows",
      "Re-engagement messages for inactive leads",
    ],
  },
  {
    title: "Credit repair",
    icon: ShieldCheck,
    intro: "Consultations and onboarding involve several steps and documents.",
    points: [
      "Consultation booking and intake forms",
      "Onboarding task creation and internal alerts",
      "Consent-aware messaging set up with compliance in mind",
    ],
  },
];
