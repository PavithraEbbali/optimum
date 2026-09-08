import { site, telHref} from "@/lib/site";
import { LegalPageWrapper, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: "Accessibility" };

const SECTIONS: TocSection[] = [
  { id: "commitment", title: "Our Commitment" },
  { id: "standard", title: "Conformance Standard" },
  { id: "measures", title: "Measures We Take" },
  { id: "known-limitations", title: "Known Limitations" },
  { id: "feedback", title: "Feedback" },
  { id: "carrier-accessibility", title: "Optimum Accessibility Services" },
];

export default function Accessibility() {
  return (
    <LegalPageWrapper
      title="Accessibility Statement"
      lastUpdated={site.pricingDate}
      sections={SECTIONS}
    >
      <LegalSection id="commitment" title="Our Commitment">
        <p>
          {site.entityName} is committed to making this website usable by as many people as
          possible, regardless of ability or the technology they use to browse.
        </p>
        <p>
          Because our order line is the primary way customers place an order, we treat phone
          access as a core part of accessibility: every offer described on this site can be
          completed by speaking with an agent, without needing to use the website at all.
        </p>
      </LegalSection>

      <LegalSection id="standard" title="Conformance Standard">
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
          These guidelines explain how to make web content more accessible to people with a
          wide range of disabilities.
        </p>
      </LegalSection>

      <LegalSection id="measures" title="Measures We Take">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Semantic HTML structure with a single, ordered heading outline on each page.</li>
          <li>A visible keyboard focus indicator on every interactive element.</li>
          <li>A &ldquo;Skip to main content&rdquo; link as the first focusable element.</li>
          <li>
            Text and interface colors checked against WCAG AA contrast ratios on both white and
            tinted surfaces.
          </li>
          <li>
            Price figures paired with a screen-reader sentence, so a price is announced as a
            whole amount rather than as separate digits and symbols.
          </li>
          <li>
            Accordions built on native disclosure elements, so they work with the keyboard and
            with browser find-in-page.
          </li>
          <li>
            Animation limited to brief one-time entrance transitions, all of which are disabled
            when your system requests reduced motion.
          </li>
          <li>Standard system cursors throughout — no custom cursor replacements.</li>
        </ul>
      </LegalSection>

      <LegalSection id="known-limitations" title="Known Limitations">
        <p>
          Decorative photographic backgrounds sit behind several sections. They are hidden
          from assistive technology and carry no information that is not also in the text.
        </p>
        <p>
          Where this site links to Optimum or other third-party websites, we do not control the
          accessibility of those destinations.
        </p>
      </LegalSection>

      <LegalSection id="feedback" title="Feedback">
        <p>
          If you encounter a barrier on this site, please tell us — we treat accessibility
          reports as priority issues.
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            Email:{" "}
            <span className="font-medium text-optimum-blue">{site.entityEmail}</span>
          </li>
          <li>
            Phone:{" "}
            <a
              href={telHref}
              data-call-cta
              data-call-placement="legal-accessibility"
              className="font-medium text-optimum-blue underline underline-offset-2"
            >
              {site.phoneDisplay}
            </a>{" "}
            ({site.hours})
          </li>
          <li>Mail: {site.entityName}, {site.entityAddress}</li>
        </ul>
        <p>
          Please describe the page and what you were trying to do. We aim to respond within
          five business days.
        </p>
      </LegalSection>

      <LegalSection id="carrier-accessibility" title="Optimum Accessibility Services">
        <p>
          The Optimum service itself offers accessibility features such as accessible
          equipment, closed captioning, audio description and alternative billing formats.
          If you need any of these, tell the agent when you call and they will make sure the
          request is included with your order.
        </p>
      </LegalSection>
    </LegalPageWrapper>
  );
}
