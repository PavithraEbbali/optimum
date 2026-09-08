import { site, telHref, retailerDisclosure, trademarkLine, pricingDisclaimer} from "@/lib/site";
import { LegalPageWrapper, TableOfContents, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: "Terms & Conditions" };

const SECTIONS: TocSection[] = [
  { id: "about-this-site",       title: "About This Site" },
  { id: "use-of-site",           title: "Use of the Site" },
  { id: "eligibility",           title: "Eligibility" },
  { id: "pricing-availability",  title: "Pricing & Availability" },
  { id: "orders-fulfillment",    title: "Orders & Fulfillment" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "limitation",            title: "Limitation of Liability" },
  { id: "indemnification",       title: "Indemnification" },
  { id: "governing-law",         title: "Governing Law" },
  { id: "changes",               title: "Changes to These Terms" },
  { id: "contact",               title: "Contact" },
];

export default function TermsAndConditions() {
  return (
    <LegalPageWrapper title="Terms & Conditions" lastUpdated={site.pricingDate} sections={SECTIONS}>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">
        Please read these Terms &amp; Conditions carefully before using this website. By accessing
        or using this site, you agree to be bound by these terms and all applicable laws and
        regulations.
      </p>

      <LegalSection id="about-this-site" title="About This Site">
        <p>This website is operated by <strong className="font-semibold text-slate-700">{site.entityName}</strong>, an independent authorized retailer of Optimum internet, TV, and mobile services.</p>
        <p>{retailerDisclosure}</p>
        <p>{trademarkLine}</p>
      </LegalSection>

      <LegalSection id="use-of-site" title="Use of the Site">
        <p>This site is provided for informational purposes and to facilitate contact with our authorized sales representatives. You agree to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Use the site only for lawful purposes and in accordance with these Terms.</li>
          <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the site.</li>
          <li>Not attempt to gain unauthorized access to any part of the site or its related systems.</li>
          <li>Not transmit any unsolicited commercial communications or malicious code.</li>
        </ul>
      </LegalSection>

      <LegalSection id="eligibility" title="Eligibility">
        <p>You must be at least 18 years of age to use this site or request services through it. By using this site, you represent and warrant that you meet this requirement and have the legal capacity to enter into a binding agreement.</p>
      </LegalSection>

      <LegalSection id="pricing-availability" title="Pricing & Availability">
        <p>{pricingDisclaimer}</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>All prices are subject to change without notice.</li>
          <li>Promotional rates apply for a limited introductory period; standard rates apply thereafter.</li>
          <li>Additional taxes, fees, and surcharges apply and are not included in advertised prices.</li>
          <li>Service and plan availability vary by location and are confirmed at the time of order.</li>
        </ul>
      </LegalSection>

      <LegalSection id="orders-fulfillment" title="Orders & Fulfillment">
        <p>All service orders are placed with and fulfilled by Optimum / Altice USA, not by {site.entityName}. As an authorized retailer, we facilitate the connection between customers and Optimum. Your service agreement, billing, and support relationship will be directly with Optimum upon order completion.</p>
        <p>We do not guarantee service activation dates or the availability of specific promotional offers at the time your order is processed by Optimum.</p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="Intellectual Property">
        <p>All content on this site that is original to {site.entityName} — including text, graphics, logos (excluding Optimum trademarks), and site design — is owned by or licensed to {site.entityName} and protected by applicable intellectual property laws.</p>
        <p>You may not reproduce, distribute, or create derivative works from site content without our express written permission.</p>
      </LegalSection>

      <LegalSection id="limitation" title="Limitation of Liability">
        <p>To the fullest extent permitted by applicable law, {site.entityName} and its officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Your use of or inability to use this site.</li>
          <li>Any errors or omissions in site content.</li>
          <li>Actions or omissions of Optimum in fulfilling your service order.</li>
          <li>Any unauthorized access to or alteration of your transmissions or data.</li>
        </ul>
        <p className="mt-3">Our total liability to you for any claims arising from use of this site shall not exceed $100 USD.</p>
      </LegalSection>

      <LegalSection id="indemnification" title="Indemnification">
        <p>You agree to defend, indemnify, and hold harmless {site.entityName} and its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising from your use of this site or violation of these Terms.</p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing Law">
        <p>These Terms are governed by the laws of the state in which {site.entityName} is primarily operated, without regard to conflict-of-law provisions. Any disputes arising from these Terms or your use of this site shall be resolved in the courts of competent jurisdiction in that state.</p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to These Terms">
        <p>We reserve the right to update these Terms &amp; Conditions at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the site after any changes constitutes your acceptance of the revised terms.</p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>Questions about these Terms? Contact us:</p>
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
