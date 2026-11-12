/**
 * Your personal details live here. Anything left empty is hidden on the site,
 * so nothing fake or broken is ever shown to visitors.
 */
export const site = {
  name: "Daniel Shades",
  role: "GoHighLevel Specialist",
  title: "GoHighLevel Specialist | CRM & Automation Systems",
  tagline: "I make the busywork work for you.",
  /** Public business email, e.g. "hello@yourdomain.com". Empty = hidden. */
  email: "",
  /** Booking link (Calendly, GHL calendar, etc.). Empty = no "Book a Call" button. */
  bookingUrl: "",
  /** Add real profile URLs only. Empty list = no social links shown. */
  socials: [] as { label: string; href: string }[],
};

export const navItems = [
  { label: "Home", hash: "top" },
  { label: "Services", hash: "services" },
  { label: "Portfolio", hash: "portfolio" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
] as const;
