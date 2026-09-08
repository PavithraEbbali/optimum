"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { navLinks } from "@/lib/content";
import CallLink from "@/components/ui/CallLink";

/**
 * §2.1 — Sticky header.
 *
 * Carries the OPERATOR wordmark, never the carrier logo alone: showing an
 * Optimum mark by itself in the header would read as "this is Optimum", which
 * §7.1 forbids. The carrier is named as a qualifier underneath instead.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // On legal sub-pages, anchors need a leading "/" so the browser lands on the
  // homepage first and then scrolls.
  const href = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Brand lockup. The carrier name is dominant, but it is never shown
            ALONE (§2.1) — "Authorized Retailer" is locked to it so the header
            reads as a retailer of Optimum, not as Optimum itself. */}
        <Link
          href="/"
          className="flex shrink-0 flex-col leading-none"
          aria-label={`${site.entityName} — authorized ${site.carrier} retailer — home`}
        >
          <span className="font-display text-[22px] font-extrabold tracking-tight text-optimum-blue">
            {site.carrier}
            <sup className="ml-0.5 align-super text-[9px] font-bold">®</sup>
          </span>
          <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.13em] text-optimum-orange">
            Authorized Retailer
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={href(link.href)}
                  className="text-sm font-semibold text-ink-muted transition-colors hover:text-optimum-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visible solid call button (§2.1) */}
        <div className="flex items-center gap-2">
          <CallLink
            placement="header"
            className="hidden px-4 py-2.5 text-sm sm:inline-flex"
          />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="container grid grid-cols-2 gap-x-4 py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={href(link.href)}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-semibold text-ink-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container pb-4 sm:hidden">
            <CallLink placement="header-mobile-menu" className="w-full" />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
