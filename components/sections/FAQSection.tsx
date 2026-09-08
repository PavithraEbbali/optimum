import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CallLink from "@/components/ui/CallLink";
import { site } from "@/lib/site";
import { faqs } from "@/lib/content";

/**
 * §2.8 / §10 — FAQ. ALWAYS the final content section before the footer.
 *
 * Built on native <details>/<summary> so the accordion is keyboard accessible,
 * expandable without JavaScript, and findable by in-page browser search.
 */
export default function FAQSection() {
  return (
    <section id="faq" className="section bg-white">
      <div className="container max-w-4xl">
        <Reveal>
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title mt-2">Questions, answered</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 40}>
              <details className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-display text-base font-bold text-ink marker:content-none hover:text-optimum-blue sm:text-lg">
                  {faq.q}
                  <ChevronDown
                    size={19}
                    className="shrink-0 text-optimum-blue transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="pb-5 pr-8">
                  <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-slate-200 bg-surface-soft p-6 text-center sm:p-8">
            <h3 className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
              Still have a question?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Agents available {site.hours}
            </p>
            <div className="mt-5 flex justify-center">
              <CallLink placement="faq" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
