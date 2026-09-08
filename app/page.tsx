import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import FiberSection from "@/components/sections/FiberSection";
import CableSection from "@/components/sections/CableSection";
import BundlesSection from "@/components/sections/BundlesSection";
import TVSection from "@/components/sections/TVSection";
import MobileSection from "@/components/sections/MobileSection";
import PhoneSection from "@/components/sections/PhoneSection";
import ValueAddedServices from "@/components/sections/ValueAddedServices";
import FinePrintGrid from "@/components/sections/FinePrintGrid";
import WhyOrderThroughUs from "@/components/sections/WhyOrderThroughUs";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQSection from "@/components/sections/FAQSection";

import { site, brandName } from "@/lib/site";
import { faqJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: `Optimum® Internet, TV, Mobile & Home Phone — ${brandName}`,
  description:
    "Independent authorized retailer of Optimum® services. Optimum 100% Fiber Internet from $40/mo with Auto Pay, plus cable internet, TV, Optimum Mobile and Home Phone. Call to confirm availability and pricing for your address.",
  alternates: { canonical: "/" },
};

/**
 * §4 — CANONICAL SECTION ORDER. This sequence is prescribed by the Master
 * Structure Spec and must not be reordered:
 *
 *   Hero → Fiber → Cable → Bundles → TV → Mobile → Phone
 *        → Value-Added Services → Fine Print → Why Us → How It Works → FAQ
 *
 * The FAQ is always the final content section before the footer (§10).
 * Global chrome (top disclosure bar, sticky header, sticky mobile call bar)
 * lives in app/layout.tsx.
 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />

      {/* Service lines — strict order */}
      <FiberSection />
      <CableSection />
      <BundlesSection />
      <TVSection />
      <MobileSection />
      <PhoneSection />

      {/* Compliance & closing */}
      <ValueAddedServices />
      <FinePrintGrid />
      <WhyOrderThroughUs />
      <HowItWorks />
      <FAQSection />
    </>
  );
}
