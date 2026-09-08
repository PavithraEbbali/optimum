"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

/**
 * Cookie notice.
 *
 * Positioned above the §2.10 sticky mobile call bar (`bottom-20 md:bottom-4`)
 * so it never obscures the primary call CTA. No animation library — it renders
 * once consent state is known, which also avoids a hydration flash.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Storage blocked (private mode, cookies disabled) — stay hidden rather
      // than showing a banner whose choice we could not persist.
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* no-op */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-4 bottom-20 z-40 mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-lg md:bottom-4"
    >
      <p className="text-sm leading-relaxed text-slate-600">
        We use cookies to operate this site and measure how it performs. See our{" "}
        <Link
          href="/cookies-policy"
          className="font-medium text-optimum-blue underline underline-offset-2"
        >
          Cookies Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-optimum-blue underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="rounded-lg bg-optimum-blue px-4 py-2 text-sm font-semibold text-white hover:bg-optimum-deep"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide("declined")}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-ink hover:border-optimum-blue"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
