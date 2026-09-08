import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { legalLinks } from "@/lib/content";

/** Derived from the same legalLinks array the footer renders, so the two never drift. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    ...legalLinks.map((link) => ({
      url: `${base}${link.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
