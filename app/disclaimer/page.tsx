import { site, telHref, retailerDisclosure, trademarkLine, pricingDisclaimer} from "@/lib/site";
import { LegalPageWrapper, TableOfContents, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: "Disclaimer" };

const SECTIONS: TocSection[] = [
  { id: "retailer-disclosure",   title: "Independent Retailer Disclosure" },
  { id: "trademark-notice",    title: "Trademark Notice" },
  { id: "pricing-disclaimer",  title: "Pricing Disclaimer" },
  { id: "speed-disclaimer",    title: "Speed & Service Disclaimer" },
  { id: "no-warranty",         title: "No Warranty" },
  { id: "external-links",      title: "External Links" },
  { id: "contact",             title: "Contact" },
];

export default function Disclaimer() {
  return (
    <LegalPageWrapper title="Disclaimer" lastUpdated={site.pricingDate} sections={SECTIONS}>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">
        The following disclosures apply to all content on this website and to all interactions
        facilitated through it. Please review them carefully before placing a service inquiry or order.
      </p>

      <LegalSection id="retailer-disclosure" title="Independent Retailer Disclosure">
        <p>{retailerDisclosure}</p>
        <p>We are not Optimum, Altice USA, or any subsidiary or affiliated entity thereof. We operate solely as an independently owned and managed authorized retailer. Any representations we make about Optimum services are based on information provided to us by Optimum in our capacity as an authorized retailer and are subject to change without notice.</p>
      </LegalSection>

      <LegalSection id="trademark-notice" title="Trademark Notice">
        <p>{trademarkLine}</p>
        <p>All references on this site to "Optimum," "Optimum Internet," "Optimum Mobile," "Optimum TV," and related service names and marks are used solely for the purpose of identifying the services we are authorized to sell. Such references do not imply any endorsement, sponsorship, or affiliation beyond our authorized retailer relationship.</p>
      </LegalSection>

      <LegalSection id="pricing-disclaimer" title="Pricing Disclaimer">
        <p>{pricingDisclaimer}</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>All prices shown are for reference only and are subject to change at any time without notice.</li>
          <li>Promotional pricing applies for a limited introductory period. Standard rates apply upon expiration of the promotional term.</li>
          <li>Prices do not include applicable taxes, government fees, or other surcharges.</li>
          <li>Actual pricing for your service is confirmed at the time your order is processed by Optimum.</li>
          <li>We make no guarantee that any advertised price will be available at your address or at the time of your order.</li>
        </ul>
      </LegalSection>

      <LegalSection id="speed-disclaimer" title="Speed & Service Disclaimer">
        <p>Internet speeds are not guaranteed and may vary based on:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>The number of devices simultaneously connected to your network.</li>
          <li>Network congestion and peak-usage periods.</li>
          <li>The capabilities of your modem, router, and connected devices.</li>
          <li>The technical limitations of your in-home wiring.</li>
          <li>The speed of the website or service you are accessing.</li>
        </ul>
        <p className="mt-3">Service availability varies by address. Not all plans, speeds, or features are available in all service areas. Availability is confirmed at the time of order.</p>
      </LegalSection>

      <LegalSection id="no-warranty" title="No Warranty">
        <p>This website and all information contained herein are provided on an "as is" and "as available" basis, without warranties of any kind, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
        <p>{site.entityName} makes no representation that information on this site is accurate, complete, current, or error-free. We reserve the right to correct any errors or omissions without notice.</p>
      </LegalSection>

      <LegalSection id="external-links" title="External Links">
        <p>This site may contain links to Optimum's official website and other third-party resources for your convenience. We do not control, endorse, or assume responsibility for the content, privacy practices, or accuracy of any third-party sites. Access to linked sites is at your own risk.</p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>For questions regarding these disclaimers:</p>
        <ul className="list-none pl-0 space-y-1.5 mt-2">
          <li><strong>Phone:</strong> <a href={telHref} className="text-brand-blue hover:underline">{site.phoneDisplay}</a></li>
          <li><strong>Hours:</strong> {site.hours}</li>
        </ul>
      </LegalSection>
    </LegalPageWrapper>
  );
}
