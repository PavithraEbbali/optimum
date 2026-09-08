/**
 * lib/site.ts — Single source of truth for OPERATOR identity.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ⚠️  LAUNCH CHECKLIST — replace every token marked `TODO` before going live.
 *     These are intentionally NOT filled with sample data: Master Structure
 *     Spec §5.1 forbids dummy addresses and placeholder 555- numbers, so the
 *     tokens below are deliberately non-dialable until a real TFN is provisioned.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Compliance invariants enforced from this file:
 *  - §7.1  We are an INDEPENDENT AUTHORIZED RETAILER. Never "Optimum".
 *  - §7.5  Optimum trademark attribution must appear in the footer.
 *  - §5.2  Call-center reality phrasing only. No local/storefront/technician claims.
 */

export const site = {
  // ── Operator legal identity (§7.1) ────────────────────────────────────────
  /** Operator legal entity. Change this ONE value to rebrand the whole site. */
  entityName: "BrightLink Connect",
  /** Operator wordmark used in the footer and legal pages. */
  wordmark: "BrightLink Connect",
  /** TODO: real registered business address */
  entityAddress: "[Registered Address, City, ST 00000]",
  /** TODO: real operator contact email */
  entityEmail: "info@brightlinkconnect.com",
  /** TODO: real canonical domain */
  siteUrl: "https://www.brightlinkconnect.com",

  // ── Order line (§2) ───────────────────────────────────────────────────────
  /** TODO: real toll-free number, display format */
  phoneDisplay: "(XXX) XXX-XXXX",
  /** TODO: real toll-free number, E.164 format — drives every tel: href */
  phoneE164: "+1XXXXXXXXXX",
  /** Staffed hours for the order line (§2.2) */
  hours: "Mon–Sun 8am–10pm ET",
  hoursShort: "Mon–Sun 8am–10pm ET",

  // ── Carrier (never claim to BE this) ──────────────────────────────────────
  carrier: "Optimum",
  carrierLegal: "CSC Holdings, LLC (an Altice USA company)",

  /** Official FCC Broadband Facts labels (§2.5 allowlisted link) */
  broadbandFactsUrl: "https://www.optimum.com/broadband-facts",

  pricingDate: "September 2026",
} as const;

/** Canonical tel: href — every call CTA on the page derives from this. */
/**
 * Public-facing brand shown in titles, social cards and the footer lockup.
 * Optimum is the dominant word; "Authorized Retailer" is locked to it so the
 * site never presents itself AS Optimum (§7.1). Distinct from site.entityName,
 * which is the operator's legal identity and appears only where a real party
 * must be named: disclosures, copyright, TCPA and the legal pages.
 */
export const brandName = `${site.carrier} Authorized Retailer`;

export const telHref = `tel:${site.phoneE164}`;

// ── Approved disclosure strings ─────────────────────────────────────────────

/** §2.0 — persistent, non-dismissable top bar */
export const topDisclosure =
  `Independent Authorized Retailer of ${site.carrier}® — Not ${site.carrier}. Call to order:`;

/** §7.1 — reseller identity, used in footer + FAQ */
export const retailerDisclosure =
  `${site.entityName} is an independent authorized retailer of ${site.carrier}® services. ` +
  `We are not ${site.carrier}, and we are not affiliated with or endorsed by ${site.carrier} or ` +
  `${site.carrierLegal}. Orders placed through our order line are submitted to and fulfilled by ` +
  `${site.carrier}. All pricing, speeds, promotional terms and serviceability are set by ` +
  `${site.carrier} and are confirmed by ${site.carrier} at the time of order.`;

/** §7.5 — exact trademark attribution line. Do not reword. */
export const trademarkLine =
  "Optimum and related marks are trademarks of CSC Holdings, LLC (an Altice USA company).";

/** §5.2 — approved call-center reality phrasing */
export const agentPhrasing = {
  agents: "Trained sales agents on the order line",
  addressCheck:
    "Availability confirmed for your exact address while you're on the line",
  install: "Installation scheduled directly with Optimum",
} as const;

/** Master pricing disclaimer (§7.4) */
export const pricingDisclaimer =
  `New residential customers only. Not available in all areas; serviceability is address-specific. ` +
  `Advertised rates reflect the Auto Pay & Paperless Billing discount and must be maintained to keep the discount. ` +
  `Promotional rates apply for the stated term; standard rates apply thereafter and are subject to change. ` +
  `Pricing, speeds and promotions vary by market and are confirmed by ${site.carrier} at order. ` +
  `Multi-gig and 100% Fiber tiers are limited to select service areas. ` +
  `Equipment, installation, broadcast, regional sports and other fees, plus taxes and surcharges, are extra. Restrictions apply.`;
