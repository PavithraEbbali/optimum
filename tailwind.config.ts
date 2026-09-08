import type { Config } from "tailwindcss";

/**
 * Official Optimum brand palette (§2).
 * High-contrast, crisp white surfaces with soft slate cards.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        optimum: {
          /** Optimum Blue — primary brand blue */
          blue: "#0B41CD",
          /** Darker press/hover state */
          deep: "#0733A6",
          /** Brand accent — lighter blue for links/hovers */
          accent: "#2F6BFF",
          /** Optimum Orange — CTAs only */
          orange: "#FA4616",
          /** Orange press/hover state */
          "orange-deep": "#D83A0F",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans, system-ui, sans-serif)"],
        display: ["var(--font-hanken, system-ui, sans-serif)"],
      },
    },
  },
  plugins: [],
};

export default config;
