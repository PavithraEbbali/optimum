# BrightLink Connect — Authorized Optimum Dealer Site

Independent authorized dealer marketing site for Optimum residential services.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3** with custom brand tokens
- **Framer Motion 11** — `whileInView` section reveals, accordion, cookie banner
- **Lenis** — smooth scroll
- **React Three Fiber + drei** — hero 3D fiber-burst (dynamic import, SSR disabled, DPR capped)
- **Lucide React** — icons
- **clsx + tailwind-merge** — utility class merging

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## TODO List (required before launch)

| Item | File(s) | Description |
|------|---------|-------------|
| **Entity info** | `lib/siteConfig.ts` | Replace `entityName`, `entityAddress`, `entityEmail` with real details |
| **Domain** | `lib/siteConfig.ts` | Replace `siteUrl` with production domain |
| **Logo asset** | `components/layout/Header.tsx`, `Footer.tsx` | Replace text logo with `<Image>` using actual logo SVG/PNG in `/public/logo.svg` |
| **ZIP availability API** | `components/ui/ZipChecker.tsx` | Connect `// TODO endpoint` to a real address availability API |
| **Phone number** | `lib/siteConfig.ts` | Replace dummy `(800) 555-0142` / `tel:+18005550142` with real number |
| **Hours** | `lib/siteConfig.ts` | Confirm real business hours |
| **Governing law state** | `app/terms-and-conditions/page.tsx` | Confirm correct state for governing law clause |
| **Analytics** | `app/layout.tsx` | Add analytics script (Google Analytics, etc.) behind cookie consent gate |
| **Hero image** | `components/sections/Hero.tsx` | Optional: add a background image under the 3D layer via `next/image` with priority + fill |
| **Section background images** | Any section | Add `next/image` with `fill` + `objectFit="cover"` as the base layer behind animations |
| **OG image domain** | `app/opengraph-image.tsx` | Verify `siteUrl` is set for correct OG image path |
| **Price verification** | `lib/siteConfig.ts` | Re-verify all plan prices against live optimum.com before launch |
| **Google Ads compliance** | All pages | Review with legal team before activating paid traffic |
| **TCPA language** | `app/tcpa-consent/page.tsx` | Have legal counsel review TCPA consent language |

## Brand Tokens

Defined in `tailwind.config.ts`:

| Token | Value | Use |
|-------|-------|-----|
| `brand-blue` | `#0860BF` | Primary blue, buttons, links |
| `brand-navy` | `#0A1F44` | Hero, dark backgrounds, header |
| `brand-orange` | `#F5821F` | Primary CTA buttons |
| `brand-cyan` | `#22D3EE` | Accents, highlights, hero |

## Compliance Notes

- **Disclosure** is shown in both the header sub-bar and footer.
- **Pricing** always carries `+ taxes & fees` and a `priceDisclaimer` noting promo periods.
- **Roll-off** language is included on every price display.
- **Legal routes** are real pages: `/privacy-policy`, `/terms-and-conditions`, `/disclaimer`, `/cookies-policy`, `/tcpa-consent`.
- **Cookie consent** banner appears on first visit.
- **JSON-LD**: `LocalBusiness` + `ItemList` (product/offer per plan) in `layout.tsx`; `FAQPage` in `page.tsx`.
- **Trademark note**: "OPTIMUM and related marks are trademarks of their respective owners, used under authorization..."

## SEO / Performance

- `app/sitemap.ts` — auto-generates sitemap
- `app/robots.ts` — allows all crawlers including GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- `app/opengraph-image.tsx` — edge-rendered OG image via `ImageResponse`
- R3F canvas: `dpr={[1, 1.5]}`, `antialias: false`, `powerPreference: 'high-performance'`
- `prefers-reduced-motion`: disables 3D burst and all Framer Motion animations
- All images should use `next/image` with `priority` on LCP candidates

## File Structure

```
app/
  layout.tsx          # Root layout, metadata, JSON-LD, providers
  page.tsx            # Main one-pager
  globals.css         # Tailwind + global styles
  sitemap.ts          # Sitemap
  robots.ts           # Robots.txt with AI crawler rules
  opengraph-image.tsx # OG image
  privacy-policy/
  terms-and-conditions/
  disclaimer/
  cookies-policy/
  tcpa-consent/

components/
  layout/
    UtilityBar.tsx    # Top bar: promo message + phone
    Header.tsx        # Sticky header: logo, nav, disclosure, phone CTA
    Footer.tsx        # Full footer with compliance text
  sections/
    Hero.tsx          # Hero: 3D burst, ZIP checker, trust chips
    OfferStrip.tsx    # 3 service overview cards
    InternetPlans.tsx # Plan cards with speed counter animation
    PriceLockCallout.tsx
    MobileSection.tsx
    TVSection.tsx
    BundlesSection.tsx
    HowItWorks.tsx
    WhyUs.tsx
    FAQSection.tsx    # Accordion with AnimatePresence
    FinalCTA.tsx
  ui/
    ZipChecker.tsx    # ZIP form (UI only — TODO: real API)
    CookieConsent.tsx # GDPR/CCPA cookie banner
  3d/
    FiberBurst.tsx    # R3F Canvas (dynamic import, SSR disabled)
  providers/
    LenisProvider.tsx # Smooth scroll

lib/
  siteConfig.ts       # All content, prices, plans, FAQs
  jsonLd.ts           # JSON-LD schemas
  cn.ts               # clsx + tailwind-merge utility
```
