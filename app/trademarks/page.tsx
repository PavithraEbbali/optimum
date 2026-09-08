import { site, retailerDisclosure, trademarkLine} from "@/lib/site";
import { LegalPageWrapper, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: "Trademarks" };

const SECTIONS: TocSection[] = [
  { id: "attribution", title: "Trademark Attribution" },
  { id: "nominative-use", title: "How We Use These Marks" },
  { id: "no-affiliation", title: "No Affiliation or Endorsement" },
  { id: "third-party", title: "Third-Party Marks" },
  { id: "our-marks", title: "Our Marks" },
  { id: "contact", title: "Contact" },
];

export default function Trademarks() {
  return (
    <LegalPageWrapper
      title="Trademarks"
      lastUpdated={site.pricingDate}
      sections={SECTIONS}
    >
      <LegalSection id="attribution" title="Trademark Attribution">
        <p className="font-medium text-ink">{trademarkLine}</p>
      </LegalSection>

      <LegalSection id="nominative-use" title="How We Use These Marks">
        <p>
          {site.entityName} references the Optimum name and related service names solely to
          identify the services we are authorized to sell as an independent retailer. This is
          nominative use: naming the product being offered so customers understand what they
          are buying.
        </p>
        <p>
          We do not use the Optimum logo in place of our own wordmark, and we do not present
          this site as an Optimum property.
        </p>
      </LegalSection>

      <LegalSection id="no-affiliation" title="No Affiliation or Endorsement">
        <p>{retailerDisclosure}</p>
        <p>
          Nothing on this site should be read as a claim of ownership of the Optimum marks, or
          as an endorsement, sponsorship or certification of {site.entityName} by{" "}
          {site.carrierLegal} beyond our authorized retailer relationship.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="Third-Party Marks">
        <p>
          Channel, network and device names referenced on this site — including premium
          networks offered within Optimum TV packages — are trademarks of their respective
          owners. They are named only to describe the content included in a package and do not
          imply any relationship between those owners and {site.entityName}.
        </p>
      </LegalSection>

      <LegalSection id="our-marks" title="Our Marks">
        <p>
          The {site.entityName} name and wordmark are the property of {site.entityName}. All
          other trademarks appearing on this site remain the property of their respective
          owners.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>
          Questions or concerns about trademark use on this site may be directed to{" "}
          <span className="font-medium text-optimum-blue">{site.entityEmail}</span>, or by mail
          to {site.entityName}, {site.entityAddress}.
        </p>
      </LegalSection>
    </LegalPageWrapper>
  );
}
