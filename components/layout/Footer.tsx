import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  site,
  telHref,
  retailerDisclosure,
  trademarkLine,
  pricingDisclaimer,
} from "@/lib/site";
import { legalLinks, navLinks } from "@/lib/content";

/**
 * §2.9 / §7.5 — Compliance footer.
 *
 * Carries the independent-retailer disclosure, the exact Optimum trademark
 * attribution line, all nine legal pages, and the operator's legal identity.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-surface-soft">
      <div className="container py-14">
        {/* Top: identity + nav + contact */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Operator identity */}
          <div>
            <p className="font-display text-lg font-extrabold tracking-tight text-optimum-blue">
              {site.wordmark}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.11em] text-slate-500">
              Independent Authorized {site.carrier}® Retailer
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              {retailerDisclosure}
            </p>
          </div>

          {/* Section links */}
          <nav aria-label="Sections">
            <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/${link.href}`}
                    className="tap-target py-0.5 text-sm text-slate-600 transition-colors hover:text-optimum-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
              Order line
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href={telHref}
                  data-call-cta
                  data-call-placement="footer"
                  aria-label={`Call ${site.phoneDisplay} to order`}
                  className="inline-flex items-center gap-2 font-bold text-optimum-blue hover:text-optimum-accent"
                >
                  <Phone size={15} aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <p className="mt-1 text-xs text-slate-500">Agents available {site.hours}</p>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{site.entityEmail}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {site.entityName}
                  <br />
                  {site.entityAddress}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links (§2.9) */}
        <nav aria-label="Legal" className="mt-12 border-t border-slate-200 pt-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="tap-target py-0.5 text-xs font-medium text-slate-600 transition-colors hover:text-optimum-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Disclosures */}
        <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
          {/* §7.5 — exact trademark attribution */}
          <p className="text-xs font-medium leading-relaxed text-slate-600">
            {trademarkLine}
          </p>
          <p className="text-xs leading-relaxed text-slate-500">{pricingDisclaimer}</p>
          <p className="pt-2 text-xs font-semibold text-slate-600">
            © {year} {site.entityName} — Not {site.carrier}.
          </p>
        </div>
      </div>
    </footer>
  );
}
