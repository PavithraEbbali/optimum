import { site, telHref, retailerDisclosure, trademarkLine, pricingDisclaimer} from "@/lib/site";
import { LegalPageWrapper, TableOfContents, LegalSection, TocSection } from "@/components/legal/LegalLayout";

export const metadata = { title: "TCPA Consent" };

const SECTIONS: TocSection[] = [
  { id: "tcpa-notice",        title: "TCPA Notice" },
  { id: "consent-covers",     title: "What This Consent Covers" },
  { id: "how-we-contact",     title: "How We May Contact You" },
  { id: "opt-out",            title: "Your Right to Opt Out" },
  { id: "dnc-registry",       title: "Do-Not-Call Registry" },
  { id: "sms-terms",          title: "SMS / Text Message Terms" },
  { id: "retailer-notice",      title: "Independent Retailer Notice" },
  { id: "contact",            title: "Contact Us" },
];

export default function TcpaConsent() {
  return (
    <LegalPageWrapper title="TCPA Consent & Communication Policy" lastUpdated={site.pricingDate} sections={SECTIONS}>
      <p className="text-sm text-slate-600 leading-relaxed mb-8">
        This page describes your rights and our obligations under the Telephone Consumer Protection
        Act (TCPA) and related state telemarketing laws. Please read carefully before contacting us
        or submitting your phone number through this site.
      </p>

      <LegalSection id="tcpa-notice" title="TCPA Notice">
        <p>By providing your phone number to {site.entityName} — whether by calling us, submitting an inquiry form, or otherwise interacting with this site — you expressly consent to be contacted by {site.entityName} and its authorized representatives at the number you provide.</p>
        <p>This consent includes contact via:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Live telephone calls</li>
          <li>Automated or pre-recorded voice messages</li>
          <li>Text messages (SMS/MMS), including via automated dialing systems</li>
        </ul>
        <p className="mt-3 font-medium text-slate-700">This consent is not a condition of purchasing any goods or services. Message and data rates may apply.</p>
      </LegalSection>

      <LegalSection id="consent-covers" title="What This Consent Covers">
        <p>Your consent covers communications related to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Information about available Optimum internet, TV, and mobile plans and pricing.</li>
          <li>Follow-up communications regarding an inquiry you submitted through this site.</li>
          <li>Promotional offers, new plan availability, and service updates in your area.</li>
          <li>Order confirmation and status updates when applicable.</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-contact" title="How We May Contact You">
        <p>We may contact you using the phone number(s) you provide, including cell phones. We may use automated telephone dialing systems (autodialers) or pre-recorded messages when doing so. We will always identify ourselves as calling on behalf of {site.entityName} as an authorized Optimum retailer.</p>
        <p>Typical calling hours are during standard business hours in your time zone, unless an exception applies under applicable law.</p>
      </LegalSection>

      <LegalSection id="opt-out" title="Your Right to Opt Out">
        <p>You may revoke your consent to be contacted at any time by:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Calling us at <a href={telHref} className="text-brand-blue hover:underline">{site.phoneDisplay}</a> and verbally requesting removal from our contact list.</li>
          <li>Replying <strong>STOP</strong> to any text message we send you.</li>
          <li>Stating "Do not call me" or an equivalent during any phone call.</li>
        </ul>
        <p className="mt-3">Opt-out requests will be honored within a reasonable time, not to exceed 30 days. Please note that you may still receive one confirmation message following your opt-out request. Transactional communications related to a pending order may continue until that order is completed or cancelled.</p>
      </LegalSection>

      <LegalSection id="dnc-registry" title="Do-Not-Call Registry">
        <p>If your phone number is registered on the National Do Not Call Registry or a state equivalent, we will honor that registration for general marketing calls. However, by expressly providing your consent through this site or by calling us, you acknowledge that such consent supersedes your DNC registration solely for the purposes and duration described in this policy.</p>
        <p>You may register your number with the National DNC Registry at <span className="text-brand-blue">donotcall.gov</span> or by calling 1-888-382-1222.</p>
      </LegalSection>

      <LegalSection id="sms-terms" title="SMS / Text Message Terms">
        <p>If you consent to receive text messages from us:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2">
          <li>Message frequency will vary based on your inquiry and account activity.</li>
          <li>Message and data rates may apply based on your mobile carrier plan.</li>
          <li>Reply <strong>STOP</strong> to unsubscribe from text messages at any time.</li>
          <li>Reply <strong>HELP</strong> for assistance or call us at <a href={telHref} className="text-brand-blue hover:underline">{site.phoneDisplay}</a>.</li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
        </ul>
      </LegalSection>

      <LegalSection id="retailer-notice" title="Independent Retailer Notice">
        <p>{retailerDisclosure}</p>
        <p>Communications from us are on behalf of {site.entityName} in our capacity as an authorized retailer. We are not calling on behalf of Optimum or Altice USA directly.</p>
      </LegalSection>

      <LegalSection id="contact" title="Contact Us">
        <p>For questions about our communication practices or to exercise your opt-out rights:</p>
        <ul className="list-none pl-0 space-y-1.5 mt-2">
          <li><strong>Phone:</strong> <a href={telHref} className="text-brand-blue hover:underline">{site.phoneDisplay}</a></li>
          <li><strong>Hours:</strong> {site.hours}</li>
          <li><strong>Entity:</strong> {site.entityName}</li>
        </ul>
        <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">
          This page constitutes notice of your TCPA consent rights. Consent obtained through this site is subject to the terms above and applicable federal and state telemarketing laws.
        </p>
      </LegalSection>
    </LegalPageWrapper>
  );
}
