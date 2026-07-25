import {
  Dumbbell,
  Salad,
  LineChart,
  Flame,
  Users,
  Compass,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "The Method", href: "#method" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Coaching", href: "#coaching" },
  { label: "Membership", href: "#membership" },
  { label: "FAQ", href: "#faq" },
] as const;

export const MARQUEE_WORDS = [
  "No excuses",
  "Show up",
  "Lift heavy",
  "Eat right",
  "Recover hard",
  "Repeat",
] as const;

export interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Dumbbell,
    title: "Custom Training",
    body: "Programming built around your body, your schedule and your equipment — reviewed and adjusted every single week.",
  },
  {
    icon: Salad,
    title: "Nutrition That Fits",
    body: "Flexible meal plans with macro targets you can actually live with. No chicken-and-rice prison sentences.",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    body: "Lifts, measurements, photos and habits in one dashboard, so the trend line does the motivating for you.",
  },
  {
    icon: Flame,
    title: "Built Discipline",
    body: "Daily check-ins and streaks that turn showing up into a reflex. Motivation fades — systems don't.",
  },
  {
    icon: Users,
    title: "The Circle",
    body: "A private community of people mid-transformation. Accountability you can't buy off a shelf.",
  },
  {
    icon: Compass,
    title: "The Method",
    body: "One proven system from first session to final photo. No guesswork, no fad detours, no wasted months.",
  },
];

export interface Stage {
  number: string;
  title: string;
  months: string;
  body: string;
}

export const ROADMAP: Stage[] = [
  {
    number: "01",
    title: "Foundations",
    months: "Month 1",
    body: "Movement quality, baseline strength and the habits everything else stands on.",
  },
  {
    number: "02",
    title: "Growth",
    months: "Months 2–3",
    body: "Progressive overload kicks in. Volume climbs, plates get added, sleeves get tighter.",
  },
  {
    number: "03",
    title: "Refinement",
    months: "Months 4–5",
    body: "Dial in nutrition and conditioning to strip body fat while the muscle stays.",
  },
  {
    number: "04",
    title: "Re-Evaluation",
    months: "Month 6",
    body: "Retest every lift, remeasure everything, and set the next six months on fire.",
  },
];

export const STATS = [
  { value: 1200, suffix: "+", label: "Members forged" },
  { value: 94, suffix: "%", label: "Finish the 6 months" },
  { value: 48, suffix: "k", label: "Sessions logged" },
] as const;

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Self-Forged",
    price: "$29",
    cadence: "/month",
    blurb: "The system, self-driven.",
    features: [
      "Full training library",
      "Macro calculator & templates",
      "Progress dashboard",
      "Community read access",
    ],
  },
  {
    name: "The Club",
    price: "$89",
    cadence: "/month",
    blurb: "Coaching plus the Circle.",
    featured: true,
    features: [
      "Everything in Self-Forged",
      "Custom program, updated weekly",
      "Nutrition plan & check-ins",
      "The Circle community",
      "Form reviews on every lift",
    ],
  },
  {
    name: "1-on-1",
    price: "$249",
    cadence: "/month",
    blurb: "A coach in your corner, daily.",
    features: [
      "Everything in The Club",
      "Daily coach access",
      "Video calls every fortnight",
      "Competition & photoshoot prep",
    ],
  },
];

export const FAQS = [
  {
    q: "I'm a complete beginner. Is this for me?",
    a: "Yes — Foundations exists exactly for you. Every program starts from your current level, not from a fantasy version of you. Most members who finish the 6 months started with zero gym experience.",
  },
  {
    q: "How much time do I need per week?",
    a: "Plans are built for 3, 4 or 5 sessions a week, 45–75 minutes each. You tell us what your life allows; the programming bends around it — not the other way round.",
  },
  {
    q: "Do I need a gym membership?",
    a: "A barbell and rack is the fast lane, but every block ships with dumbbell-only and home variants. The method survives hotel gyms, garage setups and deployments.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Follow the program for 30 days — training logged, nutrition tracked. If you don't see measurable progress, you get every cent back. The system works when you do.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Monthly plans cancel in two clicks, no exit interviews. But we'll say it straight: the people who commit for the full 6 months are the ones in the transformation photos.",
  },
] as const;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=2000&auto=format&fit=crop",
  coach:
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=75&w=1200&auto=format&fit=crop",
  cta: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=75&w=2000&auto=format&fit=crop",
} as const;
