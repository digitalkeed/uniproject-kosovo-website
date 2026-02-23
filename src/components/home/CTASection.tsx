import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Section className="bg-primary text-primary-foreground py-section">
      <div className="text-center max-w-prose mx-auto rounded-hero">
        <p className="text-label text-primary-foreground/90">
          Garantia jonë
        </p>
        <h2 className="mt-3 text-h2 text-white text-balance">
          Zgjidhja për objektin tuaj fillon këtu
        </h2>
        <p className="mt-6 text-[length:var(--text-body)] text-primary-foreground/90 leading-relaxed">
          E bëjmë të drejtë herën e parë – nëse nuk jeni plotësisht të kënaqur, e rregullojmë.
          Na tregoni për objektin dhe ju kontaktojmë brenda shkurt. Pa angazhim.
        </p>
        <div className="mt-ds-40 flex flex-wrap justify-center gap-ds-16">
          <Button href="/kontakt" variant="inverse">
            Kerko oferte
          </Button>
          <Button href="/sherbimet" variant="outlineInverse">
            Shiko shërbimet
          </Button>
        </div>
      </div>
    </Section>
  );
}
