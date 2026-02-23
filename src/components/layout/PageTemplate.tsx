import { type ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { CTA } from "@/components/ui/CTA";

export type PageTemplateHero = {
  title: string;
  lead?: string;
  description: string;
  image: { src: string; alt: string };
  layout?: "imageRight" | "imageLeft" | "imageCenter" | "imageFull";
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export type PageTemplateCTA = {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

type PageTemplateProps = {
  hero: PageTemplateHero;
  children: ReactNode;
  proofStrip?: ReactNode;
  cta: PageTemplateCTA;
};

/**
 * Shared page structure: Hero → primary content (cards) → proof strip → CTA.
 * Use on all subpages to avoid "H1 + list" emptiness.
 */
export function PageTemplate({ hero, children, proofStrip, cta }: PageTemplateProps) {
  return (
    <>
      <PageHero
        title={hero.title}
        lead={hero.lead}
        description={hero.description}
        image={hero.image}
        layout={hero.layout}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
      />
      {children}
      {proofStrip && (
        <section className="py-section px-page-x bg-section-alt" aria-label="Dëshmi">
          <div className="mx-auto max-w-container">{proofStrip}</div>
        </section>
      )}
      <CTA
        title={cta.title}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref={cta.primaryHref}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={cta.secondaryHref}
      />
    </>
  );
}
