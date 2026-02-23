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
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        surface: "var(--surface)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)"],
      },
      spacing: {
        gutter: "var(--gutter)",
        "page-x": "var(--page-padding-x)",
        "ds-4": "var(--space-4)",
        "ds-8": "var(--space-8)",
        "ds-12": "var(--space-12)",
        "ds-16": "var(--space-16)",
        "ds-24": "var(--space-24)",
        "ds-32": "var(--space-32)",
        "ds-40": "var(--space-40)",
        "ds-56": "var(--space-56)",
        "ds-72": "var(--space-72)",
        "ds-96": "var(--space-96)",
        section: "var(--section-gap)",
      },
      maxWidth: {
        container: "var(--container-max)",
        content: "42rem",
        prose: "65ch",
      },
      borderRadius: {
        button: "var(--radius-button)",
        card: "var(--radius-card)",
        hero: "var(--radius-hero)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
