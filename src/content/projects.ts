/**
 * Portfolio entries. Each one is built from a screen recording you supplied,
 * except entries marked "Concept project" or "Recreated illustration".
 *
 * To add a real project: copy an entry, change the text, and point `media`
 * at your own video or image. Media files live in public/assets/ and are
 * referenced as "/assets/...". Leave `problem`, `approach` or `outcome` as null
 * until you have real details: the site then shows a neutral note instead.
 */
const solarVideo = "/assets/portfolio/solar-landing-page.mp4";
const solarPoster = "/assets/portfolio/solar-landing-page-poster.jpg";
const quizVideo = "/assets/portfolio/quiz-scoring-workflow.mp4";
const quizPoster = "/assets/portfolio/quiz-scoring-workflow-poster.jpg";
const assessmentVideo = "/assets/portfolio/assessment-optin-page.mp4";
const assessmentPoster = "/assets/portfolio/assessment-optin-page-poster.jpg";
const callVideo = "/assets/portfolio/call-booked-sms-workflow.mp4";
const callPoster = "/assets/portfolio/call-booked-sms-workflow-poster.jpg";
const nurtureVideo = "/assets/portfolio/new-lead-nurture-workflow.mp4";
const nurturePoster = "/assets/portfolio/new-lead-nurture-workflow-poster.jpg";
const eventFlowVideo = "/assets/portfolio/event-reminder-workflow.mp4";
const eventFlowPoster = "/assets/portfolio/event-reminder-workflow-poster.jpg";
const eventPageVideo = "/assets/portfolio/event-landing-page.mp4";
const eventPagePoster = "/assets/portfolio/event-landing-page-poster.jpg";
const routingVideo = "/assets/portfolio/imessage-sms-routing-workflow.mp4";
const routingPoster = "/assets/portfolio/imessage-sms-routing-workflow-poster.jpg";

export type ProjectCategory =
  | "CRM & Pipelines"
  | "Workflows & Follow-Up"
  | "Appointments & Events"
  | "Funnels & Pages"
  | "Messaging & AI";

export type ProjectLabel = "Build walkthrough" | "Recreated illustration" | "Concept project";

export type ProjectMedia =
  | { kind: "video"; src: string; poster: string; caption: string }
  | { kind: "illustration"; name: "pipeline" | "ai-qualification"; caption: string };

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  label: ProjectLabel;
  summary: string;
  /** What the material clearly shows. */
  demonstrates: string[];
  /** The business problem. null = not confirmed yet. */
  problem: string | null;
  /** How you approached it. null = not confirmed yet. */
  approach: string | null;
  /** The structure visible in the build, step by step. */
  architecture: string[];
  tools: string[];
  /** Only real, evidenced results. null = none shown. */
  outcome: string | null;
  media: ProjectMedia[];
};

export const projectCategories: ProjectCategory[] = [
  "CRM & Pipelines",
  "Workflows & Follow-Up",
  "Appointments & Events",
  "Funnels & Pages",
  "Messaging & AI",
];

export const projects: Project[] = [
  {
    slug: "call-booked-confirmations",
    title: "Call Booked: SMS Confirmations & Pre-Call Sequence",
    category: "Appointments & Events",
    label: "Build walkthrough",
    summary:
      "A booking workflow that confirms new calls by email and SMS, waits for replies, and keeps a timed sequence of messages running up to the appointment.",
    demonstrates: [
      "Appointment-triggered automation in the Advanced Builder",
      "Condition-based branching into separate message paths",
      "Wait-for-reply steps with separate reply and timeout paths",
      "Long, timed email and SMS sequences before a scheduled call",
    ],
    problem: null,
    approach: null,
    architecture: [
      "Triggered when a call is booked on a calendar",
      "Contact details and booking data prepared for messaging",
      "If/else condition splits contacts into separate paths",
      "Each path sends a confirmation email and SMS",
      "Wait-for-reply step branches into Reply and Timeout paths",
      "Timed reminder and pre-call messages continue until the appointment",
    ],
    tools: ["Workflow Builder (Advanced)", "Calendars", "Email", "SMS", "If/else conditions", "Wait steps"],
    outcome: null,
    media: [
      {
        kind: "video",
        src: callVideo,
        poster: callPoster,
        caption: "Walkthrough of the workflow canvas, from booking trigger to reminder chain.",
      },
    ],
  },
  {
    slug: "new-lead-nurture",
    title: "21-Day New Lead Nurture Workflow",
    category: "Workflows & Follow-Up",
    label: "Build walkthrough",
    summary:
      "A large multi-branch nurture workflow that handles new leads from several sources and follows up with each group over a 21-day window.",
    demonstrates: [
      "Multiple lead-source triggers in a single workflow",
      "Contact creation and tag-based conditions",
      "Nested branching for different lead situations",
      "Long-running nurture structure",
    ],
    problem: null,
    approach: null,
    architecture: [
      "Separate triggers for each lead source",
      "Branch by trigger so each source is handled on its own path",
      "Contact created or updated in the CRM",
      "Tag-based conditions decide which messages each lead receives",
      "Nurture steps continue across a 21-day period",
    ],
    tools: ["Workflow Builder", "Multiple triggers", "Tags", "Conditions", "Contact actions"],
    outcome: null,
    media: [
      {
        kind: "video",
        src: nurtureVideo,
        poster: nurturePoster,
        caption: "Zooming across the full nurture workflow, then into individual branches.",
      },
    ],
  },
  {
    slug: "lead-pipeline-structure",
    title: "Lead Pipeline Structure",
    category: "CRM & Pipelines",
    label: "Recreated illustration",
    summary:
      "An opportunity pipeline that separates new leads, contact attempts, conversations without a purchase, long-term nurture, and intro-offer buyers.",
    demonstrates: [
      "Opportunity pipeline with clearly defined stages",
      "Lead source and opportunity value tracked on each card",
      "Stages that match a real sales process, including long-term nurture",
    ],
    problem: null,
    approach: null,
    architecture: [
      "New Lead",
      "Attempting Contact",
      "Contact Made (No Purchase)",
      "Long-Term Lead Nurturing",
      "Intro Offer Purchased",
    ],
    tools: ["Opportunities", "Pipelines", "Custom fields", "Lead source tracking"],
    outcome: null,
    media: [
      {
        kind: "illustration",
        name: "pipeline",
        caption:
          "Redrawn from the original recording with placeholder contacts. The original shows real customer details, so it is not published.",
      },
    ],
  },
  {
    slug: "assessment-funnel",
    title: "Assessment Opt-In Page & Score-Based Segmentation",
    category: "Funnels & Pages",
    label: "Build walkthrough",
    summary:
      "A free-assessment opt-in page paired with a workflow that reads each quiz score and tags the contact with the matching result type.",
    demonstrates: [
      "Long-form opt-in page with FAQ and clear calls to action",
      "Quiz submission triggers filtered by score range",
      "Automatic tagging based on the result",
    ],
    problem: null,
    approach: null,
    architecture: [
      "Visitor takes the free assessment from the opt-in page",
      "Quiz Submitted triggers, each filtered by an overall score range",
      "Condition branches by which score range matched",
      "Each branch adds the tag for that result type",
      "Contacts outside every range end without a tag",
    ],
    tools: ["Quizzes", "Workflow triggers", "Conditions", "Tags", "Landing page"],
    outcome: null,
    media: [
      {
        kind: "video",
        src: assessmentVideo,
        poster: assessmentPoster,
        caption: "Scroll-through of the opt-in page.",
      },
      {
        kind: "video",
        src: quizVideo,
        poster: quizPoster,
        caption: "The quiz submission workflow with score-range triggers and tagging branches.",
      },
    ],
  },
  {
    slug: "solar-eligibility-page",
    title: "Solar Eligibility Landing Page",
    category: "Funnels & Pages",
    label: "Build walkthrough",
    summary:
      "A landing page for homeowners checking solar eligibility, with an about section, FAQ accordion, and a lead form with SMS consent checkboxes.",
    demonstrates: [
      "Landing page built in the GoHighLevel site builder",
      "Repeated eligibility calls to action down the page",
      "FAQ accordion that answers common objections",
      "Lead form with separate consent boxes for transactional and marketing SMS",
    ],
    problem: null,
    approach: null,
    architecture: [
      "Hero with a single primary action: Check Eligibility",
      "About section explaining the advisor's approach",
      "FAQ section for common questions",
      "Lead form with SMS consent wording",
    ],
    tools: ["Sites / Funnels", "Forms", "SMS consent", "FAQ element"],
    outcome: null,
    media: [
      {
        kind: "video",
        src: solarVideo,
        poster: solarPoster,
        caption: "Page preview from the hero to the lead form. Footer contact details are cropped out.",
      },
    ],
  },
  {
    slug: "event-registration-page",
    title: "Monthly Event Registration Page",
    category: "Funnels & Pages",
    label: "Build walkthrough",
    summary:
      "A registration page for a recurring in-person event, with separate seat-booking calls to action for two locations.",
    demonstrates: [
      "Event landing page in the GoHighLevel site builder",
      "Location-specific calls to action",
      "Clear 'what to expect' section for first-time attendees",
    ],
    problem: null,
    approach: null,
    architecture: [
      "Hero with two location buttons",
      "Explanation of what the event is",
      "What-to-expect cards",
      "Closing call to action repeating both locations",
    ],
    tools: ["Sites / Funnels", "Landing page", "Calls to action"],
    outcome: null,
    media: [
      {
        kind: "video",
        src: eventPageVideo,
        poster: eventPagePoster,
        caption: "Page preview. Footer contact details are cropped out.",
      },
    ],
  },
  {
    slug: "event-reminder-workflow",
    title: "Event Registration & Reminder Workflow",
    category: "Appointments & Events",
    label: "Build walkthrough",
    summary:
      "A form-triggered workflow that notifies the team, branches by the date a registrant picked, and sends timed reminder emails before their event.",
    demonstrates: [
      "Form submission trigger with internal notification",
      "Five-way branching based on a form answer",
      "Event start time set per branch",
      "Reminder emails timed weeks, days, hours, and minutes before the event",
    ],
    problem: null,
    approach: null,
    architecture: [
      "Form submitted",
      "Internal notification to the team",
      "Condition: which date did the registrant choose?",
      "One branch per option, each with its own event start time",
      "Wait steps and reminder emails counting down to the event",
    ],
    tools: ["Forms", "Workflow Builder", "Internal notifications", "Conditions", "Wait steps", "Email"],
    outcome: null,
    media: [
      {
        kind: "video",
        src: eventFlowVideo,
        poster: eventFlowPoster,
        caption: "Walkthrough from the form trigger down through the reminder branches.",
      },
    ],
  },
  {
    slug: "message-channel-routing",
    title: "Message Channel Routing with Reply Handling",
    category: "Messaging & AI",
    label: "Build walkthrough",
    summary:
      "An outreach workflow that checks which messaging channel a contact can receive, sends on that channel, and branches on whether they reply.",
    demonstrates: [
      "Channel check before sending",
      "Separate message paths per channel",
      "Wait-for-reply with Contact Reply and Time Out outcomes",
      "Follow-up messages when there is no reply",
    ],
    problem: null,
    approach: null,
    architecture: [
      "Check which channel the contact supports",
      "Condition routes to the matching message path",
      "First message sent on that channel",
      "Wait for reply: Contact Reply or Time Out",
      "Follow-up message on time out",
    ],
    tools: ["Workflow Builder", "Conditions", "SMS", "Wait for reply"],
    outcome: null,
    media: [
      {
        kind: "video",
        src: routingVideo,
        poster: routingPoster,
        caption: "From the workflows list into the routing logic and reply branches.",
      },
    ],
  },
  {
    slug: "ai-lead-qualification-concept",
    title: "AI-Assisted Lead Qualification",
    category: "Messaging & AI",
    label: "Concept project",
    summary:
      "A concept for website chat that asks a few qualifying questions, then books qualified leads and hands everyone else to a person.",
    demonstrates: [
      "How AI conversation features can sit in front of a booking calendar",
      "Clear handoff rules so a person can take over",
    ],
    problem: "Concept only. Shows how a qualification flow could be structured.",
    approach:
      "Keep the AI's job narrow: collect a few answers, check them against simple rules, and hand off quickly when anything is unclear.",
    architecture: [
      "Website chat starts a conversation",
      "AI asks a short set of qualifying questions",
      "Answers saved to contact fields",
      "Qualified: offer the booking calendar",
      "Not sure: notify the team and assign the conversation",
    ],
    tools: ["Conversation AI", "Web chat", "Custom fields", "Calendars", "Workflows"],
    outcome: null,
    media: [
      {
        kind: "illustration",
        name: "ai-qualification",
        caption: "Concept diagram. Not a client project.",
      },
    ],
  },
];
