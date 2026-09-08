import { Phone } from "lucide-react";
import { site, telHref } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The ONLY way a tel: link is rendered on this site.
 *
 * §2 — every call CTA (top bar, header, hero, plan cards, steps, FAQ, footer,
 * sticky mobile bar) must carry `data-call-cta` for conversion tracking.
 * Routing every phone link through this component makes that structural rather
 * than a thing each author has to remember.
 */
export interface CallLinkProps {
  /** Visual treatment */
  variant?: "primary" | "large" | "outline" | "inline" | "bare";
  /** Show the phone glyph */
  icon?: boolean;
  /** Override the label. Defaults to the visible phone number (§2 requires it visible). */
  children?: React.ReactNode;
  className?: string;
  /** Distinguishes where the click came from, for analytics segmentation. */
  placement: string;
  /**
   * Visible label:
   *  - "number" shows the phone number. Reserved for the global chrome and the
   *    nav / FAQ / footer, where §2.0, §2.1 and §2.10 require a visible number.
   *  - "order" shows "Call to Order". Used by every in-page section and card.
   *
   * The aria-label always announces the actual number either way, so screen
   * reader users are never given a CTA whose destination is unstated.
   */
  label?: "number" | "order";
}

const VARIANTS: Record<NonNullable<CallLinkProps["variant"]>, string> = {
  primary: "btn-call",
  large: "btn-call-lg",
  outline: "btn-outline",
  inline:
    "font-semibold text-optimum-blue underline underline-offset-2 hover:text-optimum-accent",
  bare: "inline-flex items-center gap-2",
};

export default function CallLink({
  variant = "primary",
  icon = true,
  children,
  className,
  placement,
  label = "number",
}: CallLinkProps) {
  const defaultLabel =
    label === "order" ? "Call to Order" : `Call ${site.phoneDisplay}`;

  return (
    <a
      href={telHref}
      data-call-cta
      data-call-placement={placement}
      aria-label={`Call ${site.phoneDisplay} to order`}
      className={cn(VARIANTS[variant], className)}
    >
      {icon ? <Phone size={variant === "large" ? 22 : 17} aria-hidden="true" /> : null}
      {children ?? <span>{defaultLabel}</span>}
    </a>
  );
}
