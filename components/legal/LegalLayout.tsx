"use client";

import Link from "next/link";

export interface TocSection { id: string; title: string }

export function TableOfContents({ sections }: { sections: TocSection[] }) {
  return (
    <div className="rounded-xl border-l-[3.5px] border-brand-blue bg-slate-50/90 px-5 py-5">
      <p className="text-[10px] font-black tracking-[0.16em] text-brand-blue uppercase mb-4">
        Contents
      </p>
      <ol className="space-y-2.5">
        {sections.map((s, i) => (
          <li key={s.id} className="flex items-start gap-3">
            <span className="text-brand-blue font-bold text-xs tabular-nums w-6 shrink-0 leading-snug pt-px">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${s.id}`}
              className="text-slate-600 hover:text-brand-blue transition-colors duration-200 text-xs font-medium leading-snug"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function LegalSection({
  id, title, children,
}: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 mb-10">
      <h2 className="text-base font-bold text-brand-navy mb-3 pb-2 border-b border-slate-100">
        {title}
      </h2>
      <div className="text-sm text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export function LegalPageWrapper({
  title, lastUpdated, sections, children,
}: {
  title: string;
  lastUpdated: string;
  sections: TocSection[];
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      <div className="container max-w-5xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-brand-blue hover:text-brand-navy transition-colors duration-200 mb-8"
        >
          <span className="text-base leading-none">←</span> Back to Home
        </Link>
        <h1 className="font-display font-black text-3xl md:text-4xl text-brand-navy mb-2">
          {title}
        </h1>
        <p className="text-xs text-slate-400 font-medium mb-10">Last updated: {lastUpdated}</p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Sticky left sidebar TOC */}
          <aside className="w-full lg:w-52 xl:w-60 lg:shrink-0">
            <div className="lg:sticky lg:top-28">
              <TableOfContents sections={sections} />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
