import Link from "next/link";
import { type ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  cta?: { label: string; href: string };
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  cta,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`text-center relative z-10 ${className}`}>
      {eyebrow && (
        <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-muted-foreground mx-auto leading-relaxed max-w-[65ch]">
          {intro}
        </p>
      )}
      {cta && (
        <div className="mt-6">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary text-primary font-semibold px-5 py-2.5 text-sm hover:bg-primary/10 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {cta.label}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
      <div className="mt-10 border-b border-border" aria-hidden="true" />
    </header>
  );
}
