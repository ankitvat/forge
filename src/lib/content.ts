export const NAV_LINKS = [
  { label: "Nutrition", href: "#nutrition" },
  { label: "Recipes", href: "#recipes" },
  { label: "My Story", href: "#transformation" },
  { label: "Membership", href: "#membership" },
  { label: "FAQ", href: "#faq" },
  { label: "Get Started", href: "#contact" },
] as const;

export const MARQUEE_WORDS = [
  "No excuses",
  "Show up",
  "Lift heavy",
  "Eat right",
  "Recover hard",
  "Repeat",
] as const;

// --- Nutrition (image 2) -----------------------------------------------------

export interface NutritionGoal {
  label: string;
  title: string;
  points: string[];
}

export const NUTRITION_GOALS: NutritionGoal[] = [
  {
    label: "Goal — Fat Loss",
    title: "Eat less. Keep the muscle.",
    points: [
      "A calorie target set from your own measurements, not a calculator average",
      "Protein held high so the weight you lose is fat, not muscle",
      "Two flexible meals a week built in — birthdays and biryani included",
      "Targets recalculated every fortnight as your weight drops",
    ],
  },
  {
    label: "Goal — Muscle Gain",
    title: "Eat more. Stay lean.",
    points: [
      "A controlled surplus — enough to grow, not enough to soften",
      "Carbs timed around your training days, not spread flat across the week",
      "Vegetarian and eggetarian versions of every plan",
      "Monthly check to confirm the gain is muscle before adding more food",
    ],
  },
];

// --- Recipes (image 3) -------------------------------------------------------

export interface Recipe {
  time: string;
  tag: string;
  title: string;
  body: string;
  kcal: number;
  protein: number;
}

export const RECIPES: Recipe[] = [
  {
    time: "15 MIN",
    tag: "Fat loss",
    title: "Paneer bhurji, high protein",
    body: "Low-fat paneer, onion, tomato, one whole egg. Roti on the side or eat it as is.",
    kcal: 380,
    protein: 38,
  },
  {
    time: "20 MIN",
    tag: "Muscle gain",
    title: "Chicken rice bowl",
    body: "Grilled thigh, basmati, curd, cucumber. Cook the rice once, eat it three days.",
    kcal: 640,
    protein: 52,
  },
  {
    time: "5 MIN",
    tag: "Either goal",
    title: "Overnight oats, banana",
    body: "Oats, milk, whey, banana, peanut butter. Built the night before a 6am session.",
    kcal: 470,
    protein: 34,
  },
];

// --- Transformation (image 4) ------------------------------------------------

export const TRANSFORMATION_STATS = [
  { value: "10+", label: "Years training, without a year off" },
  { value: "4", label: "Full recomposition cycles, documented" },
  { value: "1", label: "System — the one you'd be running" },
] as const;

export interface TransformationPhoto {
  slot: string;
  caption: string;
  /** Optional image src — leave blank to render an upload placeholder frame. */
  src?: string;
}

export const TRANSFORMATION_PHOTOS: TransformationPhoto[] = [
  { slot: "Transformation 1", caption: "2016 — starting out" },
  { slot: "Transformation 2", caption: "2018 — first real bulk" },
  { slot: "Transformation 3", caption: "2021 — leaning out" },
  { slot: "Transformation 4", caption: "2023 — strongest year" },
  { slot: "Transformation 5", caption: "Today" },
];

// --- Membership / Pricing (image 5) -----------------------------------------

export interface Plan {
  id: "monthly" | "quarterly" | "yearly";
  name: string;
  blurb: string;
  price: string;
  cadence: string;
  perMonth?: string;
  cta: string;
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    blurb: "Try the system",
    price: "₹2,499",
    cadence: "per month, rolling",
    cta: "Start monthly",
  },
  {
    id: "quarterly",
    name: "3 months",
    blurb: "One full training block",
    price: "₹5,999",
    cadence: "",
    perMonth: "₹2,000/month — save 20%",
    cta: "Start 3 months",
    featured: true,
  },
  {
    id: "yearly",
    name: "12 months",
    blurb: "Two full cycles",
    price: "₹14,999",
    cadence: "",
    perMonth: "₹1,250/month — save 50%",
    cta: "Start 12 months",
  },
];

export const PLAN_INCLUSIONS = [
  "Custom training programme",
  "Nutrition plan & macros",
  "Weekly form reviews",
  "The Circle community",
  "Direct coach access",
] as const;

// --- FAQ (image 5) -----------------------------------------------------------

export const FAQS = [
  {
    q: "I'm a complete beginner. Is this for me?",
    a: "Yes. Month one is built for people who've never trained — movement quality first, weight second.",
  },
  {
    q: "How much time do I need per week?",
    a: "Four sessions of 60–75 minutes. The programme is written around the days you actually have.",
  },
  {
    q: "Do I need a gym membership?",
    a: "A gym is ideal, but the programme adapts to home equipment. Tell me what you have.",
  },
  {
    q: "Can I cancel or pause?",
    a: "Monthly cancels any time. Longer plans can be paused once for up to four weeks.",
  },
] as const;

// --- Contact / intake form (image 6) ----------------------------------------

/**
 * Google Form: "Client fitness intake form - FORGE"
 *   viewform: /forms/d/e/{FORM_ID}/viewform
 *   submit:   /forms/d/e/{FORM_ID}/formResponse
 *
 * Field entry IDs pulled from the form's FB_PUBLIC_LOAD_DATA on 2026-07-26.
 * If you edit the Google Form (add/remove/rename fields), re-run the parser
 * to refresh these — the numeric IDs stay stable unless a field is deleted.
 */
export const INTAKE_FORM = {
  formId: "1FAIpQLSdi8p9_hUzgJUbQK53biOLQJwCrdrUtmIAOCNqYIdisvWO4Ag",
  entries: {
    fullName: "entry.1892819668",
    age: "entry.850682555",
    contactNumber: "entry.1028895212",
    weightKg: "entry.1940623195",
    height: "entry.1443750040",
    goal: "entry.2082179462",
  },
  goals: ["Fat loss", "Muscle Gain", "General Fitness", "Strength & Conditioning"],
} as const;

export const CONTACT_INFO = {
  whatsapp: "+91 870 098 6529",
  // wa.me expects a digits-only international number, no leading + or spaces.
  whatsappHref: "https://wa.me/918700986529",
  email: "hello@forgeco.in",
  replyWithin: "Replies within 24 hours, seven days a week.",
} as const;

// --- Media -------------------------------------------------------------------

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=2000&auto=format&fit=crop",
} as const;
