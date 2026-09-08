import { site, telHref, retailerDisclosure, trademarkLine, pricingDisclaimer } from "@/lib/site";
import { LegalPageWrapper, TableOfContents, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: `Cookies Policy | ${site.entityName}` };

const SECTIONS: TocSection[] = [
  { id: "what-are-cookies",       title: "What Are Cookies?" },
  { id: "types-of-cookies",       title: "Types of Cookies We Use" },
  { id: "essential-cookies",      title: "Strictly Necessary Cookies" },
  { id: "analytics-cookies",      title: "Analytics Cookies" },
  { id: "marketing-cookies",      title: "Marketing & Advertising Cookies" },
  { id: "managing-cookies",       title: "Managing Your Cookie Preferences" },
  { id: "third-party-cookies",    title: "Third-Party Cookies" },
  { id: "do-not-track",           title: "Do Not Track" },
  { id: "updates",                title: "Updates to This Policy" },
  { id: "contact",                title: "Contact" },
];

export default function CookiesPolicy() {
  return (
    <LegalPageWrapper title="Cookies Policy" lastUpdated={site.pricingDate} sections={SECTIONS}>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">
        This Cookies Policy explains how {site.entityName} uses cookies and similar tracking
        technologies when you visit our website. By continuing to use our site, you consent to the
        use of cookies as described in this policy.
      </p>

      <LegalSection id="what-are-cookies" title="What Are Cookies?">
        <p>Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to site owners. Cookies cannot run programs or deliver viruses to your device.</p>
        <p>Similar technologies such as web beacons, pixels, and local storage may also be used for analogous purposes and are collectively referred to as "cookies" in this policy.</p>
      </LegalSection>

      <LegalSection id="types-of-cookies" title="Types of Cookies We Use">
        <p>We categorize the cookies on our site into the following types, each serving a distinct purpose as described in the sections below:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Strictly necessary cookies</li>
          <li>Analytics and performance cookies</li>
          <li>Marketing and advertising cookies</li>
        </ul>
      </LegalSection>

      <LegalSection id="essential-cookies" title="Strictly Necessary Cookies">
        <p>These cookies are required for the website to function and cannot be switched off. They are set in response to actions made by you, such as navigating between pages or submitting a form. Examples include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Session cookies that maintain your state as you browse the site.</li>
          <li>Security cookies that protect against cross-site request forgery.</li>
          <li>Load-balancing cookies that ensure server stability.</li>
        </ul>
        <p className="mt-3">Because these cookies are strictly necessary, they cannot be disabled through our site. You may disable them through your browser, but doing so may affect site functionality.</p>
      </LegalSection>

      <LegalSection id="analytics-cookies" title="Analytics Cookies">
        <p>We use analytics tools — including Google Analytics — to understand how visitors interact with our site. These cookies collect information such as:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Pages visited and the order in which they were visited.</li>
          <li>Time spent on each page.</li>
          <li>Links clicked and features used.</li>
          <li>The source or referral that brought you to the site.</li>
        </ul>
        <p className="mt-3">All data collected by analytics cookies is aggregated and anonymized. We use this information solely to improve our website and content.</p>
      </LegalSection>

      <LegalSection id="marketing-cookies" title="Marketing & Advertising Cookies">
        <p>These cookies may be set through our site by advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites. They work by uniquely identifying your browser and device. Examples include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Conversion tracking pixels that measure the effectiveness of our ad campaigns.</li>
          <li>Remarketing cookies that allow us to show our ads to users who have previously visited our site.</li>
          <li>Social media pixels (e.g., Meta Pixel) that help us measure interactions with our social advertising.</li>
        </ul>
        <p className="mt-3">If you do not allow these cookies, you will not experience targeted advertising from us on other websites.</p>
      </LegalSection>

      <LegalSection id="managing-cookies" title="Managing Your Cookie Preferences">
        <p>You have the right to decide whether to accept or reject non-essential cookies. You can manage your preferences through your browser settings. Most browsers allow you to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>View all cookies currently stored on your device.</li>
          <li>Block all or specific types of cookies.</li>
          <li>Delete cookies when you close your browser or at any time.</li>
          <li>Set alerts when cookies are being placed.</li>
        </ul>
        <p className="mt-3">Refer to your browser's help section for instructions. Note that blocking certain cookies may impair the functionality of this site.</p>
        <p>To opt out of Google Analytics tracking specifically, you can use the <a href="https://tools.google.com/dlpage/gaoptout" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
      </LegalSection>

      <LegalSection id="third-party-cookies" title="Third-Party Cookies">
        <p>Some cookies on our site are set by third-party service providers who deliver functionality or advertising on our behalf. These third parties may collect information about your online activities over time and across different websites. Their use of cookies is governed by their own privacy policies, not by this policy.</p>
        <p>Third-party services we use may include Google Analytics, Google Ads, Meta Ads, and similar platforms.</p>
      </LegalSection>

      <LegalSection id="do-not-track" title="Do Not Track">
        <p>Some browsers include a "Do Not Track" (DNT) feature that signals websites not to track user behavior. Our site does not currently respond to DNT signals, as no universal standard for interpreting DNT has been established. We will update this policy if a standard is adopted.</p>
      </LegalSection>

      <LegalSection id="updates" title="Updates to This Policy">
        <p>We may update this Cookies Policy periodically to reflect changes in technology, law, or our business practices. We will post the revised policy on this page with an updated "Last updated" date.</p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>Questions about our use of cookies?</p>
        <ul className="list-none pl-0 space-y-1.5 mt-2">
          <li><strong>Phone:</strong> <a href={telHref} className="text-brand-blue hover:underline">{site.phoneDisplay}</a></li>
          <li><strong>Hours:</strong> {site.hours}</li>
        </ul>
        <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">{retailerDisclosure}</p>
      </LegalSection>
    </LegalPageWrapper>
  );
}
