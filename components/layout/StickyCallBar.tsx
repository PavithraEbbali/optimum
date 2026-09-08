import { Phone } from "lucide-react";
import { site, telHref } from "@/lib/site";

/**
 * §2.10 — Sticky mobile call bar.
 *
 * Shown below 760px only. Height stays ≤64px and the bar adds the iOS home-bar
 * inset via env(safe-area-inset-bottom) so the tap target is never clipped.
 * The matching `pb-20 md:pb-0` on the main wrapper keeps footer content clear.
 */
export default function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-optimum-deep bg-optimum-blue md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telHref}
        data-call-cta
        data-call-placement="sticky-mobile-bar"
        aria-label={`Call ${site.phoneDisplay} to order`}
        // 63px + the 1px top border keeps the bar's total height at the 64px cap.
        className="flex h-[63px] w-full items-center justify-center gap-2.5 px-4 text-base font-bold text-white"
      >
        <Phone size={19} aria-hidden="true" />
        <span>Call {site.phoneDisplay}</span>
      </a>
    </div>
  );
}
