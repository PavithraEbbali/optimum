import { site, telHref, retailerDisclosure, trademarkLine, pricingDisclaimer} from "@/lib/site";
import { LegalPageWrapper, TableOfContents, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: "Privacy Policy" };

const SECTIONS: TocSection[] = [
  { id: "information-we-collect",     title: "Information We Collect" },
  { id: "how-we-use",                 title: "How We Use Your Information" },
  { id: "cookies-analytics",          title: "Cookies, Analytics & Advertising" },
  { id: "how-we-share",               title: "How We Share Information" },
  { id: "your-rights",                title: "Your Privacy Rights" },
  { id: "data-retention",             title: "Data Retention & Security" },
  { id: "childrens-privacy",          title: "Children's Privacy" },
  { id: "changes",                    title: "Changes to This Policy" },
  { id: "contact",                    title: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageWrapper title="Privacy Policy" lastUpdated={site.pricingDate} sections={SECTIONS}>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">
        {site.entityName} ("we," "us," or "our") operates as an independent authorized retailer
        of Optimum internet and related services. This Privacy Policy describes how we collect, use,
        and protect information when you visit our website or contact us.{" "}
        <strong className="font-semibold text-slate-700">{retailerDisclosure}</strong>
      </p>

      <LegalSection id="information-we-collect" title="Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li><strong>Contact information</strong> you voluntarily provide — name, phone number, email address — when requesting information or calling us.</li>
          <li><strong>Usage data</strong> collected automatically: IP address, browser type, pages visited, referring URLs, and session duration via standard server logs and analytics tools.</li>
          <li><strong>Device information</strong> such as operating system, screen resolution, and device type.</li>
          <li><strong>Cookie and tracking data</strong> as described in Section 03 below.</li>
        </ul>
        <p className="mt-3">We do not intentionally collect sensitive personal information such as Social Security numbers, financial account details, or health information.</p>
      </LegalSection>

      <LegalSection id="how-we-use" title="How We Use Your Information">
        <p>We use collected information to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Respond to your inquiries and provide information about available Optimum service plans.</li>
          <li>Connect you with Optimum for order placement and service fulfillment.</li>
          <li>Send follow-up communications about your inquiry (subject to your consent under TCPA).</li>
          <li>Improve our website, marketing communications, and user experience.</li>
          <li>Analyze traffic patterns and measure advertising effectiveness.</li>
          <li>Comply with applicable laws, regulations, and legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies-analytics" title="Cookies, Analytics & Advertising">
        <p>We use cookies and similar tracking technologies to enhance your browsing experience. These include:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li><strong>Essential cookies</strong> — required for basic site functionality; cannot be disabled.</li>
          <li><strong>Analytics cookies</strong> — tools such as Google Analytics help us understand site usage. Data is aggregated and anonymized.</li>
          <li><strong>Advertising cookies</strong> — pixels or tracking tags from ad networks measure campaign performance and may be used to serve relevant ads.</li>
        </ul>
        <p className="mt-3">You can manage cookie preferences through your browser settings. Disabling certain cookies may affect site functionality. See our <a href="/cookies-policy" className="text-brand-blue hover:underline">Cookies Policy</a> for full details.</p>
      </LegalSection>

      <LegalSection id="how-we-share" title="How We Share Information">
        <p>We do not sell your personal information. We may share your data with:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li><strong>Optimum / Altice USA</strong> — to process your service inquiry or order.</li>
          <li><strong>Service providers</strong> — analytics, hosting, CRM, and marketing vendors who act on our behalf under confidentiality agreements.</li>
          <li><strong>Legal authorities</strong> — when required by law, court order, or to protect the rights and safety of our users or others.</li>
          <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets.</li>
        </ul>
      </LegalSection>

      <LegalSection id="your-rights" title="Your Privacy Rights">
        <p>Depending on your state of residence, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal data, subject to legal obligations.</li>
          <li>Opt out of the sale or sharing of your personal information (we do not sell data).</li>
          <li>Receive a copy of your data in a portable format.</li>
        </ul>
        <p className="mt-3">To exercise these rights, call us at <a href={telHref} className="text-brand-blue hover:underline">{site.phoneDisplay}</a>. We will respond within the timeframe required by applicable law.</p>
      </LegalSection>

      <LegalSection id="data-retention" title="Data Retention & Security">
        <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy or as required by law. Inquiry data is typically retained for up to 24 months.</p>
        <p>We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
      </LegalSection>

      <LegalSection id="childrens-privacy" title="Children's Privacy">
        <p>Our website is not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete it.</p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to This Policy">
        <p>We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will post the updated policy on this page with a revised "Last updated" date. Continued use of our site after changes constitutes acceptance of the updated policy.</p>
      </LegalSection>

      <LegalSection id="contact" title="Contact Us">
        <p>For privacy-related questions or to exercise your rights, please contact us:</p>
        <ul className="list-none pl-0 space-y-1.5 mt-2">
          <li><strong>Phone:</strong> <a href={telHref} className="text-brand-blue hover:underline">{site.phoneDisplay}</a></li>
          <li><strong>Hours:</strong> {site.hours}</li>
          <li><strong>Entity:</strong> {site.entityName}</li>
        </ul>
        <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">{retailerDisclosure}</p>
      </LegalSection>
    </LegalPageWrapper>
  );
}
