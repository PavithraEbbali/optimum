import type { PriceLockup as PriceLockupData } from "@/lib/content";
import { cn } from "@/lib/cn";

/**
 * §3 CANONICAL PRICE LOCKUP — the single component every price row renders
 * through, in the hero and in every plan card.
 *
 * Structure is fixed: one baseline-aligned flex row, integer visually dominant,
 * cents and "/mo" on the same baseline. The visual row is aria-hidden and paired
 * with an sr-only sentence so screen readers get "$40.00 per month" rather than
 * the fragments read one at a time.
 */
export default function PriceLockup({
  price,
  variance,
  hero = false,
  className,
}: {
  price: PriceLockupData;
  /** §3 market-variance qualifier line */
  variance?: string;
  hero?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("lockup", hero && "lockup--hero", className)}>
      <p className="lockup__row" aria-hidden="true">
        {price.int === "—" ? (
          <span className="lockup__int">Call</span>
        ) : (
          <>
            <span className="lockup__cur">$</span>
            <span className="lockup__int">{price.int}</span>
            <span className="lockup__cents">{price.cents}</span>
            <span className="lockup__per">{price.per}</span>
          </>
        )}
      </p>
      <p className="sr-only">{price.sr}</p>

      <p className="lockup__qual">{price.qualifier}</p>
      <p className="lockup__step">{price.step}</p>

      {variance ? <p className="lockup__step">{variance}</p> : null}

      <p className="lockup__fine">
        <a href="#fine-print">Pricing details below</a>
      </p>
    </div>
  );
}
