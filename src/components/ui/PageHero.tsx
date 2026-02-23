import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  title: string;
  lead?: string;
  description: string;
  image: { src: string; alt: string };
  layout?: "imageRight" | "imageLeft" | "imageCenter" | "imageFull";
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function PageHero({
  title,
  lead,
  description,
  image,
  layout = "imageRight",
  ctaPrimary,
  ctaSecondary,
}: PageHeroProps) {
  const isFull = layout === "imageFull";
  const isCenter = layout === "imageCenter";

  const textBlock = (
    <div
      className={
        isCenter
          ? "text-center max-w-3xl mx-auto"
          : "lg:flex lg:flex-col lg:justify-center"
      }
    >
      {lead && (
        <p className="text-sm font-medium text-primary uppercase tracking-wider">
          {lead}
        </p>
      )}
      <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      {(ctaPrimary || ctaSecondary) && (
        <div
          className={`mt-8 flex flex-wrap gap-4 ${isCenter ? "justify-center" : ""}`}
        >
          {ctaPrimary && (
            <Button href={ctaPrimary.href} variant="primary">
              {ctaPrimary.label}
            </Button>
          )}
          {ctaSecondary && (
            <Button href={ctaSecondary.href} variant="secondary">
              {ctaSecondary.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <div className="relative aspect-[4/3] min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden shadow-[var(--shadow-hero)]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );

  if (isFull) {
    return (
      <Section className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-background pt-16 pb-12 sm:pt-20">
        <div className="relative aspect-[21/9] min-h-[280px] sm:min-h-[360px] rounded-2xl overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
            <div className="max-w-3xl">
              {lead && (
                <p className="text-sm font-medium text-white/90 uppercase tracking-wider">
                  {lead}
                </p>
              )}
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {title}
              </h1>
              <p className="mt-4 text-lg text-white/90">{description}</p>
              {(ctaPrimary || ctaSecondary) && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {ctaPrimary && (
                    <Button href={ctaPrimary.href} variant="primary">
                      {ctaPrimary.label}
                    </Button>
                  )}
                  {ctaSecondary && (
                    <Button href={ctaSecondary.href} variant="secondary">
                      {ctaSecondary.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    );
  }

  if (isCenter) {
    return (
      <Section className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-background pt-16 pb-12 sm:pt-20">
        {textBlock}
        <div className="mt-10 max-w-4xl mx-auto">{imageBlock}</div>
      </Section>
    );
  }

  const imageFirst = layout === "imageLeft";
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-background pt-16 pb-12 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
        {imageFirst ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </Section>
  );
}
