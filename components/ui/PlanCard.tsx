import { Check } from "lucide-react";
import type { Plan } from "@/lib/content";
import PriceLockup from "@/components/ui/PriceLockup";
import CallLink from "@/components/ui/CallLink";
import { cn } from "@/lib/cn";

/**
 * Shared plan card for the Fiber and Cable service lines.
 * Every price row renders through the canonical §3 <PriceLockup />.
 */
export default function PlanCard({
  plan,
  placement,
}: {
  plan: Plan;
  /** Analytics segmentation for the card's call CTA */
  placement: string;
}) {
  const featured = Boolean(plan.badge);

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-white p-6",
        featured
          ? "border-optimum-blue shadow-[0_1px_3px_rgba(0,69,135,0.12)]"
          : "border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">
            {plan.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-optimum-blue">{plan.speed}</p>
        </div>
        {plan.badge ? (
          <span className="shrink-0 rounded-full bg-optimum-blue px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {plan.badge}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-xs leading-relaxed text-slate-500">{plan.speedNote}</p>

      <div className="mt-5">
        <PriceLockup price={plan.price} variance={plan.variance} />
      </div>

      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-optimum-blue"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <CallLink label="order" placement={placement} className="w-full" />
      </div>
    </article>
  );
}
