import type { Metadata, Viewport } from "next";
import { DM_Sans, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

import TopDisclosureBar from "@/components/layout/TopDisclosureBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCallBar from "@/components/layout/StickyCallBar";
import CookieConsent from "@/components/ui/CookieConsent";

import { site, brandName } from "@/lib/site";
import { organizationJsonLd, productOffersJsonLd } from "@/lib/jsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.carrier}® Internet, TV, Mobile & Home Phone — ${brandName}`,
    template: `%s | ${brandName}`,
  },
  description:
    "Independent authorized retailer of Optimum® services. Order Optimum Fiber and cable internet, TV, Optimum Mobile and Home Phone by phone — availability and pricing confirmed for your exact address.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: brandName,
    title: `${site.carrier}® Internet, TV, Mobile & Home Phone — ${brandName}`,
    description:
      "Independent authorized retailer of Optimum® services. Internet, TV, Mobile and Home Phone — call to confirm availability and pricing for your address.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#004587",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${hankenGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productOffersJsonLd) }}
        />
      </head>
      <body className="bg-white font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[9999] focus-visible:rounded-lg focus-visible:bg-optimum-blue focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold focus-visible:text-white"
        >
          Skip to main content
        </a>

        {/* Global chrome (§2.0, §2.1) */}
        <TopDisclosureBar />
        <Header />

        {/* pb-20 clears the §2.10 sticky mobile call bar so the footer is never
            obscured; the bar itself is hidden from md up. The padding wraps BOTH
            main and the footer — placing it on <main> alone would leave the
            footer (a following sibling) sitting under the fixed bar at the
            bottom of the document. */}
        <div className="pb-20 md:pb-0">
          <main id="main-content">{children}</main>
          <Footer />
        </div>

        {/* §2.10 */}
        <StickyCallBar />
        <CookieConsent />
      </body>
    </html>
  );
}
