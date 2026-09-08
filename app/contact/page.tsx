import { site, telHref, retailerDisclosure } from "@/lib/site";
import { LegalPageWrapper, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: `Contact | ${site.entityName}` };

const SECTIONS: TocSection[] = [
  { id: "order-line", title: "New Orders" },
  { id: "existing-customers", title: "Adding to Existing Service" },
  { id: "legal-entity", title: "Legal Entity" },
  { id: "privacy-requests", title: "Privacy Requests" },
  { id: "who-we-are", title: "Who We Are" },
];

export default function Contact() {
  return (
    <LegalPageWrapper
      title="Contact"
      lastUpdated={site.pricingDate}
      sections={SECTIONS}
    >
      <LegalSection id="order-line" title="New Orders">
        <p>
          Our order line handles new orders for Optimum residential services — internet, TV,
          Optimum Mobile and Home Phone.
        </p>
        <p className="mt-3">
          <a
            href={telHref}
            data-call-cta
            data-call-placement="legal-contact"
            className="text-lg font-bold text-optimum-blue underline underline-offset-2"
          >
            {site.phoneDisplay}
          </a>
        </p>
        <p className="mt-1">Agents available {site.hours}.</p>
      </LegalSection>

      <LegalSection id="existing-customers" title="Adding to Existing Service">
        <p>
          If you already have Optimum service and want to add internet, TV, Optimum Mobile or
          Home Phone, call the order line and an agent will go through what is available at
          your address and what the pricing would be.
        </p>
        <p>
          Our line places new orders and adds new services. It is not an account servicing
          line, so we are not able to make changes to an existing account&apos;s billing.
        </p>
      </LegalSection>

      <LegalSection id="legal-entity" title="Legal Entity">
        <ul className="list-none space-y-1.5">
          <li>
            <span className="font-medium text-ink">{site.entityName}</span>
          </li>
          <li>{site.entityAddress}</li>
          <li>
            Email:{" "}
            <span className="font-medium text-optimum-blue">{site.entityEmail}</span>
          </li>
          <li>Phone: {site.phoneDisplay}</li>
        </ul>
      </LegalSection>

      <LegalSection id="privacy-requests" title="Privacy Requests">
        <p>
          To exercise a privacy right — including opting out of the sale or sharing of your
          personal information — email {site.entityEmail} or see our Do Not Sell or Share My
          Personal Information page for the full process.
        </p>
      </LegalSection>

      <LegalSection id="who-we-are" title="Who We Are">
        <p>{retailerDisclosure}</p>
      </LegalSection>
    </LegalPageWrapper>
  );
}
