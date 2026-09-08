import { site, telHref} from "@/lib/site";
import { LegalPageWrapper, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Do Not Sell or Share My Personal Information",
};

const SECTIONS: TocSection[] = [
  { id: "your-rights", title: "Your Rights" },
  { id: "what-we-share", title: "What We Share" },
  { id: "submit-request", title: "Submit a Request" },
  { id: "verification", title: "How We Verify Requests" },
  { id: "authorized-agent", title: "Authorized Agents" },
  { id: "no-discrimination", title: "No Discrimination" },
  { id: "appeals", title: "Appeals" },
];

export default function DoNotSell() {
  return (
    <LegalPageWrapper
      title="Do Not Sell or Share My Personal Information"
      lastUpdated={site.pricingDate}
      sections={SECTIONS}
    >
      <p className="mb-8 text-sm leading-relaxed text-slate-600">
        This notice applies to California residents under the California Consumer Privacy Act
        as amended by the California Privacy Rights Act (CPRA), and to residents of other
        states with comparable opt-out rights.
      </p>

      <LegalSection id="your-rights" title="Your Rights">
        <p>
          If you are a California resident, you have the right to direct {site.entityName} not
          to sell or share your personal information, and to opt out of the use of your
          personal information for cross-context behavioral advertising.
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>The right to opt out of the sale or sharing of your personal information.</li>
          <li>The right to know what personal information is collected and how it is used.</li>
          <li>The right to request deletion of personal information we hold about you.</li>
          <li>The right to correct inaccurate personal information.</li>
          <li>The right to limit the use of sensitive personal information.</li>
        </ul>
      </LegalSection>

      <LegalSection id="what-we-share" title="What We Share">
        <p>
          We do not sell personal information for money. We may share limited identifiers and
          online activity information with advertising and analytics partners so that we can
          measure the performance of our advertising. Under the CPRA, that activity may be
          treated as &ldquo;sharing&rdquo; for cross-context behavioral advertising, and you may opt out
          of it.
        </p>
        <p>
          Information you provide when you call our order line is used to place and service
          your order with Optimum. It is not sold.
        </p>
      </LegalSection>

      <LegalSection id="submit-request" title="Submit a Request">
        <p>To exercise your opt-out or any other right described above, contact us:</p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            By email at{" "}
            <span className="font-medium text-optimum-blue">{site.entityEmail}</span>, with
            &ldquo;Do Not Sell or Share&rdquo; in the subject line.
          </li>
          <li>
            By phone at{" "}
            <a
              href={telHref}
              data-call-cta
              data-call-placement="legal-do-not-sell"
              className="font-medium text-optimum-blue underline underline-offset-2"
            >
              {site.phoneDisplay}
            </a>
            .
          </li>
          <li>By mail at {site.entityName}, {site.entityAddress}.</li>
        </ul>
        <p>
          You may also enable a Global Privacy Control (GPC) signal in your browser. Where we
          detect a GPC signal, we treat it as a valid opt-out request for that browser.
        </p>
      </LegalSection>

      <LegalSection id="verification" title="How We Verify Requests">
        <p>
          An opt-out of sale or sharing does not require verification of identity. For requests
          to know, delete or correct, we will ask you for information sufficient to match you
          to the records we hold — typically the phone number or email address you used when
          contacting us. We use that information only to process your request.
        </p>
        <p>
          We respond to requests within the timeframes required by applicable law, generally
          within 45 days, and will tell you if we need an extension.
        </p>
      </LegalSection>

      <LegalSection id="authorized-agent" title="Authorized Agents">
        <p>
          You may use an authorized agent to submit a request on your behalf. We will ask the
          agent for written proof of authorization, and we may ask you to confirm directly that
          you granted it.
        </p>
      </LegalSection>

      <LegalSection id="no-discrimination" title="No Discrimination">
        <p>
          We will not deny you services, charge you a different price, or provide you a
          different level or quality of service because you exercised any of these rights.
        </p>
      </LegalSection>

      <LegalSection id="appeals" title="Appeals">
        <p>
          If we decline your request, you may appeal by replying to our response or by
          contacting us at {site.entityEmail}. We will inform you in writing of the outcome and
          the reasons for it.
        </p>
      </LegalSection>
    </LegalPageWrapper>
  );
}
