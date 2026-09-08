import { site, retailerDisclosure } from "./site";
import { fiberPlans, faqs } from "./content";

/**
 * Structured data.
 *
 * Deliberately `Organization`, NOT `LocalBusiness`: a LocalBusiness node with a
 * street address and opening hours asserts a physical storefront serving
 * walk-in customers, which §5.1 forbids for a phone-order retailer. The
 * operator is described as an organization reachable on a sales phone line.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.entityName,
  description: retailerDisclosure,
  url: site.siteUrl,
  email: site.entityEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  /** Explicitly disclaims affiliation rather than implying it. */
  disambiguatingDescription: `Independent authorized retailer of ${site.carrier}® services. Not ${site.carrier}.`,
};

export const productOffersJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.carrier} Internet plans`,
  itemListElement: fiberPlans
    // The multi-gig tier has no published rate, so it carries no Offer node.
    .filter((plan) => plan.price.int !== "—")
    .map((plan, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: `${site.carrier} ${plan.name}`,
        description: `${plan.speedNote}. ${plan.features.join(". ")}.`,
        brand: { "@type": "Brand", name: site.carrier },
        offers: {
          "@type": "Offer",
          price: `${plan.price.int}${plan.price.cents}`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          /** Promotional rate requiring Auto Pay; varies by market. */
          description: `${plan.price.qualifier}. ${plan.variance}`,
        },
      },
    })),
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};
