import { Check } from "lucide-react";
import PriceLockup from "@/components/ui/PriceLockup";
import ZipChecker from "@/components/ui/ZipChecker";
import { site } from "@/lib/site";
import { hero } from "@/lib/content";

/**
 * §2.2 — Hero.
 *
 * The animated canvas has been removed. The backdrop is now a static
 * background image (`/images/hero-bg.webp`) layered over an Optimum-blue
 * gradient, so the section still renders correctly before that file is added
 * and if the image ever fails to load.
 *
 * There is no call button here by design: the hero's single job is the ZIP
 * availability lookup. The call CTAs live in the global chrome (top bar, header,
 * sticky mobile bar) and in each service section.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Backdrop: gradient base + photographic overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-optimum-blue/10 via-white to-optimum-blue/5"
      />
      {/* On mobile `.hero-bg` becomes a top band instead of covering the whole
          hero — see globals.css. Covering a tall narrow hero would scale the
          16:9 photo several times over and reduce it to a blur. */}
      <div
        aria-hidden="true"
        className="hero-bg"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
      />
      {/* Scrim keeps body copy at AA contrast over the photo. Horizontal on
          desktop (text sits left); vertical on mobile (text sits below). */}
      <div
        aria-hidden="true"
        className="hero-scrim pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"
      />

      <div className="container relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Left: offer ── */}
          <div>
            <p className="section-eyebrow">{hero.eyebrow}</p>

            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Optimum{" "}
              <span className="text-optimum-blue">100% Fiber Internet</span>{" "}
              from{" "}
              <span className="text-optimum-blue">$60/mo</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.subline}
            </p>

            {/* Dominant §3 price lockup for the lead offer */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/85 p-6 backdrop-blur-sm">
              <p className="mb-3 text-sm font-bold text-ink">{hero.leadOffer.label}</p>
              <PriceLockup
                price={hero.leadOffer.price}
                variance={hero.leadOffer.variance}
                hero
              />
            </div>

            {/* Trust chips — max 4 (§2.2) */}
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {hero.chips.map((chip) => (
                <li key={chip} className="chip bg-white/85 backdrop-blur-sm">
                  <Check size={13} className="text-optimum-blue" aria-hidden="true" />
                  {chip}
                </li>
              ))}
            </ul>
            <p className="mt-3 fine">
              *Conditions apply — see{" "}
              <a
                href="#fine-print"
                className="tap-target font-medium text-optimum-blue underline underline-offset-2"
              >
                pricing details
              </a>
              .
            </p>
          </div>

          {/* ── Right: ZIP availability lookup ── */}
          <div className="lg:pt-10">
            <ZipChecker />
            {/* §2.2 staffed-hours + routing microcopy */}
            <p className="mt-4 text-sm font-medium text-ink-muted">
              Agents available {site.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
