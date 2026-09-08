/**
 * lib/content.ts — Single source of truth for PLAN + COPY content.
 *
 * Every plan rate, speed, qualifier and disclaimer string on the landing page
 * is defined here as typed data. No plan card or disclaimer text may be
 * hardcoded in JSX (§6 code hygiene).
 *
 * PRICING PROVENANCE: rates reflect Optimum's published national starting
 * rates with Auto Pay & Paperless Billing. Optimum prices are address- and
 * market-specific, so every tier carries a market-variance qualifier (§3) and
 * final pricing is confirmed by Optimum at order.
 */

import { site } from "./site";

// ── Types ───────────────────────────────────────────────────────────────────

/** Canonical §3 price lockup payload. Rendered only by <PriceLockup />. */
export interface PriceLockup {
  /** Dominant integer, e.g. "40" */
  int: string;
  /** Cents including the separator, e.g. ".00" */
  cents: string;
  /** Period label, e.g. "/mo" */
  per: string;
  /** Screen-reader equivalent of the whole lockup */
  sr: string;
  /** Promo qualifier line */
  qualifier: string;
  /** Post-promo step-up line */
  step: string;
}

export interface Plan {
  id: string;
  name: string;
  /** Speed headline, e.g. "300 Mbps" */
  speed: string;
  /** Symmetrical vs asymmetrical labelling — cable must be distinguished */
  speedNote: string;
  badge?: string;
  price: PriceLockup;
  /** §3 market-variance qualifier */
  variance: string;
  features: readonly string[];
}

export interface TierRow {
  tier: string;
  speeds: string;
  promo: string;
  postPromo: string;
  equipment: string;
  install: string;
  dataCap: string;
}

// ── Shared qualifier builders ───────────────────────────────────────────────

const AUTOPAY_QUALIFIER = "for 12 mos with Auto Pay & Paperless Billing";
const STEP_LINE = "then regular rates apply · plus taxes & fees";

const variance = (amount: string) =>
  `Starting at ${amount}/mo in most areas · pricing varies by market — call for your area's rate`;

const lockup = (int: string, cents = ".00"): PriceLockup => ({
  int,
  cents,
  per: "/mo",
  sr: `$${int}${cents} per month`,
  qualifier: AUTOPAY_QUALIFIER,
  step: STEP_LINE,
});

/**
 * The existing media assets are retained and mapped to the sections they
 * illustrate. Alt text describes the image; it never repeats an offer claim,
 * so no pricing or availability assertion lives in an alt attribute.
 */
/**
 * Optional full-bleed section backgrounds. Rendered as CSS background images
 * behind a scrim, so a filename that does not exist yet simply falls back to
 * the section's plain surface colour instead of showing a broken image.
 * Delete a key to turn that section's background off.
 */
export const sectionBackgrounds: Record<string, string> = {
  fiber: "/images/hero-fiber.webp",
  internet: "/images/wifi-house.webp",
  bundles: "/images/lifestyle-rooftop.webp",
  tv: "/images/tv-room.webp",
  mobile: "/images/mobile-phone.webp",
  phone: "/images/family-sofa.webp",
  "add-ons": "/images/wifi-extender.webp",
  "how-it-works": "/images/backgrounds/bg-how-it-works.webp",
};

// ── Navigation (§2.1) ───────────────────────────────────────────────────────

export const navLinks = [
  { href: "#fiber", id: "fiber", label: "Fiber" },
  { href: "#internet", id: "internet", label: "Internet" },
  { href: "#bundles", id: "bundles", label: "Bundles" },
  { href: "#tv", id: "tv", label: "TV" },
  { href: "#mobile", id: "mobile", label: "Mobile" },
  { href: "#phone", id: "phone", label: "Phone" },
  { href: "#faq", id: "faq", label: "FAQ" },
] as const;

// ── Hero (§2.2) ─────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "Independent Authorized Retailer",
  subline:
    "Optimum 100% Fiber Internet delivers symmetrical upload and download speeds, with multi-gig tiers up to 5 Gig and 8 Gig available in select areas.",
  leadOffer: {
    label: "Optimum 100% Fiber Internet — 500 Mbps",
    price: lockup("60"),
    variance: variance("$60"),
  },
  /** Verifiable trust chips — max 4 (§2.2) */
  chips: [
    "No Annual Contract*",
    "Unlimited Data*",
    "Smart WiFi 6 Included*",
    "Up to 5-Yr Price Lock*",
  ],
} as const;

// ── 4. FIBER ────────────────────────────────────────────────────────────────

export const fiberIntro = {
  title: "Optimum 100% Fiber Internet®",
  blurb:
    "Symmetrical speeds over a 100% fiber network — uploads as fast as downloads, unlimited data with no caps, and no term contract.",
} as const;

export const fiberPlans: readonly Plan[] = [
  {
    id: "fiber-300",
    name: "300 Mbps Fiber",
    speed: "300 Mbps",
    speedNote: "Symmetrical upload & download over 100% Fiber",
    price: lockup("40"),
    variance: variance("$40"),
    features: [
      "300 Mbps download / 300 Mbps upload",
      "Unlimited data — no caps",
      "No annual term contract",
      "Smart WiFi router included",
    ],
  },
  {
    id: "fiber-500",
    name: "500 Mbps Fiber",
    speed: "500 Mbps",
    speedNote: "Symmetrical upload & download over 100% Fiber",
    badge: "Most Popular",
    price: lockup("60"),
    variance: variance("$60"),
    features: [
      "500 Mbps download / 500 Mbps upload",
      "Unlimited data — no caps",
      "No annual term contract",
      "Smart WiFi router included",
    ],
  },
  {
    id: "fiber-1gig",
    name: "1 Gig Fiber",
    speed: "1 Gig",
    speedNote: "Symmetrical upload & download over 100% Fiber",
    price: lockup("80"),
    variance: variance("$80"),
    features: [
      "1 Gbps download / 1 Gbps upload",
      "Gateway 6E / WiFi 6E router included",
      "Unlimited data — no caps",
      "No annual term contract",
    ],
  },
  {
    id: "fiber-multigig",
    name: "2 Gig & 5 Gig Fiber",
    speed: "2–5 Gig",
    speedNote: "Symmetrical multi-gig — available in select areas only",
    badge: "Fastest",
    price: {
      int: "—",
      cents: "",
      per: "",
      sr: "Pricing varies by market — call for availability",
      qualifier: "multi-gig tiers where available",
      step: "pricing confirmed by Optimum at order · plus taxes & fees",
    },
    variance:
      "Availability and pricing vary by market — call to confirm multi-gig service at your address",
    features: [
      "Symmetrical multi-gig speeds",
      "Built for ultra-demanding households",
      "Unlimited data — no caps",
      "Availability limited to select areas",
    ],
  },
] as const;

// ── 5. CABLE / BROADBAND ────────────────────────────────────────────────────

export const cableIntro = {
  title: "Optimum Cable Internet",
  blurb:
    "Optimum's hybrid fiber-coax network serves addresses outside the 100% Fiber footprint. These tiers are asymmetrical — download speeds are higher than upload speeds, unlike 100% Fiber.",
  distinction:
    "Not 100% Fiber: cable tiers deliver asymmetrical speeds. Ask the agent which network type serves your address.",
} as const;

export const cablePlans: readonly Plan[] = [
  {
    id: "cable-300",
    name: "300 Mbps Internet",
    speed: "300 Mbps",
    speedNote: "Cable download speed — upload speeds are lower than download",
    price: lockup("40"),
    variance: variance("$40"),
    features: [
      "Up to 300 Mbps download",
      "Smart WiFi router included",
      "Unlimited data",
      "No annual term contract",
    ],
  },
  {
    id: "cable-500",
    name: "500 Mbps Internet",
    speed: "500 Mbps",
    speedNote: "Cable download speed — upload speeds are lower than download",
    badge: "Popular",
    price: lockup("60"),
    variance: variance("$60"),
    features: [
      "Up to 500 Mbps download",
      "Smart WiFi router included",
      "Unlimited data",
      "No annual term contract",
    ],
  },
  {
    id: "cable-1gig",
    name: "1 Gig Internet",
    speed: "1 Gig",
    speedNote: "Cable download speed — upload speeds are lower than download",
    price: lockup("80"),
    variance: variance("$80"),
    features: [
      "Up to 1 Gbps download",
      "Smart WiFi router included",
      "Unlimited data",
      "No annual term contract",
    ],
  },
] as const;

// ── 6. BUNDLES ──────────────────────────────────────────────────────────────

export interface Bundle {
  id: string;
  /** Optional card thumbnail. Missing file degrades to a brand gradient. */
  image?: string;
  name: string;
  includes: readonly string[];
  savings: string;
  savingsNote: string;
  badge?: string;
  conditions: readonly string[];
}

export const bundles: readonly Bundle[] = [
  {
    id: "optimum-complete",
    image: "/images/cards/card-bundle-complete.webp",
    name: "Optimum Complete",
    includes: ["Optimum Internet", "Optimum Mobile"],
    savings: "Up to $15–$20/mo",
    savingsNote: "in monthly internet bill credits",
    badge: "Best Value",
    conditions: [
      "Requires Auto Pay & Paperless Billing",
      "Requires at least one active Optimum Mobile line",
      "Bill credit applies to the internet bill and starts after mobile activation",
      "Credit amount varies by internet tier and number of mobile lines",
    ],
  },
  {
    id: "internet-core-tv",
    image: "/images/cards/card-bundle-core-tv.webp",
    name: "Internet + Core TV",
    includes: ["Optimum Internet", "Core TV — 220+ channels"],
    savings: "Bundle pricing",
    savingsNote: "multi-product discount applied at order",
    conditions: [
      "Requires Auto Pay & Paperless Billing",
      "Broadcast Basic fee applies and is billed separately",
      "Promotional pricing applies for the stated term",
    ],
  },
  {
    id: "internet-select-tv",
    image: "/images/cards/card-bundle-select-tv.webp",
    name: "Internet + Select TV",
    includes: ["Optimum Internet", "Select TV — 340+ channels"],
    savings: "Bundle pricing",
    savingsNote: "multi-product discount applied at order",
    conditions: [
      "Requires Auto Pay & Paperless Billing",
      "Broadcast Basic and regional sports surcharges apply",
      "Promotional pricing applies for the stated term",
    ],
  },
] as const;

// ── 7. TV ───────────────────────────────────────────────────────────────────

export interface TvPackage {
  id: string;
  /** Optional card thumbnail. Missing file degrades to a brand gradient. */
  image?: string;
  name: string;
  channels: string;
  blurb: string;
  highlights: readonly string[];
  badge?: string;
}

export const tvPackages: readonly TvPackage[] = [
  {
    id: "core-tv",
    image: "/images/cards/card-tv-core.webp",
    name: "Core TV",
    channels: "220+ channels",
    blurb: "The essentials — entertainment, lifestyle, news and your local channels.",
    highlights: ["Local broadcast channels", "News & lifestyle networks", "Entertainment basics"],
  },
  {
    id: "select-tv",
    image: "/images/cards/card-tv-select.webp",
    name: "Select TV",
    channels: "340+ channels",
    blurb: "Everything in Core, plus regional sports and a wider family lineup.",
    badge: "Most Popular",
    highlights: ["Everything in Core TV", "Regional sports networks", "Expanded family channels"],
  },
  {
    id: "premier-tv",
    image: "/images/cards/card-tv-premier.webp",
    name: "Premier TV",
    channels: "420+ channels",
    blurb: "The full lineup, including premium movie networks.",
    highlights: ["Everything in Select TV", "HBO/Max, SHOWTIME & STARZ", "Widest channel selection"],
  },
  {
    id: "optimum-stream",
    image: "/images/cards/card-tv-stream.webp",
    name: "Optimum Stream",
    channels: "4K streaming device",
    blurb: "A 4K streaming device that brings your TV package and streaming apps together.",
    highlights: ["4K UHD streaming", "Your apps in one place", "Voice remote"],
  },
] as const;

export const tvDisclosures = [
  "A Broadcast Basic fee applies to all TV packages and is billed in addition to the package rate.",
  "Regional sports surcharges apply to Select and Premier TV and vary by market.",
  "Cloud DVR storage is available as an optional add-on for an additional monthly charge.",
  "Channel counts are approximate and vary by market and package.",
] as const;

// ── 8. MOBILE ───────────────────────────────────────────────────────────────

export interface MobilePlan {
  id: string;
  /** Optional card thumbnail. Missing file degrades to a brand gradient. */
  image?: string;
  name: string;
  data: string;
  blurb: string;
  features: readonly string[];
  badge?: string;
}

export const mobileIntro = {
  title: "Optimum Mobile®",
  blurb:
    "Nationwide 5G coverage on America's largest 5G network, with savings when you pair a line with Optimum Internet.",
  savings: "Save $10–$15/mo per line when paired with Optimum Internet.",
  disclosures: [
    "Requires an active Optimum Internet subscription to qualify for the per-line internet pairing discount.",
    "5G access requires a compatible device and is subject to network availability.",
    "Data speeds may be reduced during network congestion. Video streams at the quality tier of the selected plan.",
  ],
} as const;

export const mobilePlans: readonly MobilePlan[] = [
  {
    id: "by-the-gig-1",
    image: "/images/cards/card-mobile-1gb.webp",
    name: "1 GB By the Gig",
    data: "1 GB",
    blurb: "The lowest-cost entry tier for light mobile data use.",
    features: ["1 GB high-speed data", "Unlimited talk & text", "Nationwide 5G access"],
  },
  {
    id: "by-the-gig-3",
    image: "/images/cards/card-mobile-3gb.webp",
    name: "3 GB By the Gig",
    data: "3 GB",
    blurb: "Flexible shared data for households that mostly use WiFi.",
    features: ["3 GB high-speed data", "Unlimited talk & text", "Nationwide 5G access"],
  },
  {
    id: "unlimited",
    image: "/images/cards/card-mobile-unlimited.webp",
    name: "Unlimited",
    data: "Unlimited",
    blurb: "Postpaid unlimited data with SD streaming and a hotspot allowance.",
    badge: "Most Popular",
    features: ["Unlimited data", "SD streaming quality", "Mobile hotspot allowance included"],
  },
  {
    id: "unlimited-max",
    image: "/images/cards/card-mobile-unlimited-max.webp",
    name: "Unlimited Max",
    data: "Unlimited",
    blurb: "Unlimited data with HD streaming and a larger high-speed hotspot allowance.",
    features: ["Unlimited data", "HD streaming quality", "Larger high-speed hotspot allowance"],
  },
] as const;

// ── 9. PHONE ────────────────────────────────────────────────────────────────

export const homePhone = {
  title: "Optimum Home Phone",
  blurb:
    "Digital VoIP residential phone service, available as an add-on to Optimum Internet or TV.",
  calling: [
    "Unlimited local and nationwide calling",
    "Includes calls to Canada, Puerto Rico and the US Virgin Islands",
  ],
  features: [
    "Caller ID",
    "Call waiting",
    "Voicemail",
    "Call forwarding",
    "Three-way calling",
    "Anonymous call block",
  ],
  featureNote: "20+ digital call-management features included.",
  disclosure:
    "Home Phone is available as an add-on to an Optimum Internet or TV subscription. Digital voice service requires power and broadband connectivity to operate, including for 911 calls.",
} as const;

// ── 10. VALUE-ADDED SERVICES (§2.4, §6) ─────────────────────────────────────

export interface AddOn {
  id: string;
  /** Optional card thumbnail. Missing file degrades to a brand gradient. */
  image?: string;
  name: string;
  price: string;
  blurb: string;
  note: string;
}

export const valueAddedServices: readonly AddOn[] = [
  {
    id: "gateway-6e",
    image: "/images/cards/card-gateway.webp",
    name: "Gateway 6E / WiFi 6E",
    price: "Included",
    blurb:
      "Next-generation WiFi 6E gateway, included at no extra monthly charge with 1 Gig tiers.",
    note: "Included with 1 Gig tiers; a monthly equipment charge may apply on other tiers.",
  },
  {
    id: "whole-home-wifi",
    image: "/images/cards/card-mesh.webp",
    name: "Whole Home WiFi",
    price: "$5/mo per extender",
    blurb:
      "Mesh WiFi extenders that carry coverage into the corners of a larger property.",
    note: "Billed per extender, per month, in addition to your service rate.",
  },
  {
    id: "total-care",
    image: "/images/cards/card-total-care.webp",
    name: "Total Care",
    price: "$10/mo",
    blurb:
      "Comprehensive technical support plus in-home wiring protection for your Optimum services.",
    note: "$10/mo for the first 18 months, then $15/mo thereafter.",
  },
  {
    id: "device-protection",
    image: "/images/cards/card-device-protection.webp",
    name: "Device Protection",
    price: "Varies by plan",
    blurb:
      "Protection plans covering eligible connected consumer devices in your home.",
    note: "Coverage terms, eligibility and deductibles are set by the plan administrator.",
  },
] as const;

// ── 11. HONEST FINE-PRINT GRID (§2.5) ───────────────────────────────────────

export const finePrintRows: readonly TierRow[] = [
  {
    tier: "300 Mbps Fiber",
    speeds: "300 ↓ / 300 ↑ Mbps",
    promo: "$40.00/mo",
    postPromo: "Regular rate applies after promo",
    equipment: "Gateway included",
    install: "Self-install kit, or pro install for a fee",
    dataCap: "Unlimited",
  },
  {
    tier: "500 Mbps Fiber",
    speeds: "500 ↓ / 500 ↑ Mbps",
    promo: "$60.00/mo",
    postPromo: "Regular rate applies after promo",
    equipment: "Gateway included",
    install: "Self-install kit, or pro install for a fee",
    dataCap: "Unlimited",
  },
  {
    tier: "1 Gig Fiber",
    speeds: "1000 ↓ / 1000 ↑ Mbps",
    promo: "$80.00/mo",
    postPromo: "Regular rate applies after promo",
    equipment: "Gateway 6E included",
    install: "Self-install kit, or pro install for a fee",
    dataCap: "Unlimited",
  },
  {
    tier: "300 Mbps Cable",
    speeds: "300 ↓ / lower ↑ (asymmetrical)",
    promo: "$40.00/mo",
    postPromo: "Regular rate applies after promo",
    equipment: "Smart WiFi router — up to $10/mo",
    install: "Self-install kit, or pro install for a fee",
    dataCap: "Unlimited",
  },
  {
    tier: "1 Gig Cable",
    speeds: "1000 ↓ / lower ↑ (asymmetrical)",
    promo: "$80.00/mo",
    postPromo: "Regular rate applies after promo",
    equipment: "Smart WiFi router — up to $10/mo",
    install: "Self-install kit, or pro install for a fee",
    dataCap: "Unlimited",
  },
] as const;

export const finePrintNotes = [
  "Advertised rates require Auto Pay & Paperless Billing and reflect promotional pricing for the stated term.",
  "Rates, speeds and promotional terms vary by market. Your exact rate is confirmed by Optimum at order.",
  "Taxes, fees and surcharges are additional and are not included in the rates shown.",
  "Typical speeds are the speeds Optimum expects to deliver; actual speeds vary with wiring, WiFi and network conditions.",
] as const;

/** §2.5 allowlisted exact string — do not reword. */
export const broadbandFactsLinkLabel = "See Optimum's official Broadband Facts label →";

// ── 12. WHY ORDER THROUGH US (§2.6) — approved convenience copy only ────────

export const whyOrderCards = [
  {
    id: "one-call",
    title: "One call orders everything",
    body: "One call orders everything — internet, TV, mobile and home phone in a single order.",
  },
  {
    id: "current-promos",
    title: "Today's promotions, in one place",
    body: "Every current Optimum promotion in one place — agents quote today's offers, not last month's.",
  },
  {
    id: "address-check",
    title: "Address checked on the line",
    body: "Address checked while you're on the line — availability and exact pricing confirmed before you commit.",
  },
  {
    id: "trained-agents",
    title: "Trained sales agents",
    body: `Trained sales agents on the order line, ${site.hours}.`,
  },
] as const;

// ── 13. HOW IT WORKS (§2.7) — exactly 3 steps, ending in a call ─────────────

export const howItWorksSteps = [
  {
    n: 1,
    title: "Call the order line",
    body: `Call our order line and tell the agent what you are looking for. Agents are available ${site.hours}.`,
  },
  {
    n: 2,
    title: "Confirm plans for your address",
    body: "The agent confirms which plans are serviceable at your exact address and quotes today's promotions — availability and pricing confirmed while you're on the line.",
  },
  {
    n: 3,
    title: "Get connected",
    body: "Installation is scheduled directly with Optimum. Many addresses qualify for a self-install kit; where professional installation is required, Optimum schedules a technician visit.",
  },
] as const;

// ── 14. FAQ (§2.8) — final content section before the footer ────────────────

export interface Faq {
  q: string;
  a: string;
}

export const faqs: readonly Faq[] = [
  {
    q: "Is Optimum available at my address?",
    a: "Optimum serviceability is address-specific, and the network type varies — some addresses are served by 100% Fiber, others by Optimum's cable network. A ZIP code only narrows it down. Call the order line and the agent will confirm availability for your exact address while you're on the line.",
  },
  {
    q: "Is this the official Optimum site?",
    a: `No — ${site.entityName} is an independent authorized retailer of Optimum® services. This is not Optimum's website, and we are not affiliated with or endorsed by Optimum or ${site.carrierLegal}. Orders are submitted to and fulfilled by Optimum, and Optimum sets all pricing, speeds and promotional terms.`,
  },
  {
    q: "How does the pricing work, and what fees should I expect?",
    a: "Advertised rates are promotional, require Auto Pay & Paperless Billing, and apply for the stated term. After the promotional period, the regular rate applies. Rates also vary by market, so the price for your address may differ from the rate shown here. Taxes, fees and surcharges — including the Broadcast Basic fee and regional sports surcharges on TV packages — are extra. The agent confirms your exact rate, including the post-promotional rate, before you commit.",
  },
  {
    q: "How does installation work?",
    a: "Installation is scheduled directly with Optimum. Many addresses qualify for a self-install kit, which Optimum ships to you with setup instructions. Where professional installation is required or preferred, Optimum schedules a technician visit; a one-time professional installation charge may apply. The agent will tell you which options apply to your address.",
  },
  {
    q: "Is there a contract, and how does the Price Lock work?",
    a: "Optimum residential internet is sold without an annual term contract, so there is no early termination fee for the internet service. Separately, where a price lock is offered, it holds the base internet service rate for the stated period — up to five years on eligible plans. A price lock is a commitment from Optimum on the rate; it is not a term commitment from you. It covers the base service rate only, not taxes, fees, surcharges or optional add-ons.",
  },
  {
    q: "What equipment is included, and can I use my own modem?",
    a: "1 Gig fiber tiers include the Gateway 6E / WiFi 6E router at no extra monthly charge. Other tiers include a Smart WiFi router, which may carry a monthly equipment charge depending on your plan and market. Optimum's gateway is required to deliver and support the service on most plans, so bring-your-own equipment options are limited — confirm with the agent what applies to the plan you select.",
  },
  {
    q: "Can I add services to an existing Optimum service?",
    a: "Call the order line and an agent will go through what can be added at your address — internet, TV, Optimum Mobile or Home Phone — along with the current promotions and what your rate would be. Our line places new orders and adds new services; it is not an account servicing line.",
  },
] as const;

// ── 15. FOOTER — 9 token-driven legal pages (§2.9) ──────────────────────────

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms of Use" },
  { href: "/do-not-sell", label: "Do Not Sell or Share My Personal Information" },
  { href: "/tcpa-consent", label: "TCPA Consent" },
  { href: "/trademarks", label: "Trademarks" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/contact", label: "Contact" },
  { href: "/cookies-policy", label: "Cookies" },
  { href: "/disclaimer", label: "Disclaimers" },
] as const;
