import { site, telHref, topDisclosure } from "@/lib/site";

/**
 * §2.0 — Persistent, NON-DISMISSABLE top disclosure bar.
 *
 * There is deliberately no close button and no dismissal state: the reseller
 * disclosure must be visible on first paint and must stay visible.
 */
export default function TopDisclosureBar() {
  return (
    <div className="bg-optimum-blue text-white">
      <div className="container flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-[13px] leading-snug">
        <span className="font-medium">{topDisclosure}</span>
        <a
          href={telHref}
          data-call-cta
          data-call-placement="top-disclosure-bar"
          aria-label={`Call ${site.phoneDisplay} to order`}
          className="tap-target font-bold underline underline-offset-2 hover:text-white/85"
        >
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
