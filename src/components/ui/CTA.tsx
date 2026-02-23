import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type CTAProps = {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <Section className="bg-primary text-primary-foreground py-section">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-h2 text-white">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">{description}</p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={primaryHref} variant="inverse">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outlineInverse">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
