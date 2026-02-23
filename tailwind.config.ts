import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: "var(--accent)",
        "primary-green": "var(--primary-green)",
        border: "var(--border)",
        surface: "var(--surface)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--leading-tight)" }],
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-tight)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-snug)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-snug)" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "var(--leading-relaxed)" }],
        caption: ["var(--text-caption)", { lineHeight: "var(--leading-snug)" }],
      },
      spacing: {
        section: "var(--section-y)",
        "container-px": "var(--container-px)",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "var(--container-max)",
        content: "42rem",
        prose: "65ch",
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        button: "var(--shadow-button)",
        "button-hover": "var(--shadow-button-hover)",
        hero: "var(--shadow-hero)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
    },
  },
  plugins: [],
};
export default config;
