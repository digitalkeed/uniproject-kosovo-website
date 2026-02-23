import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Section className="bg-primary text-primary-foreground py-20 sm:py-24">
      <div className="text-center max-w-prose mx-auto">
        <p className="text-caption text-primary-foreground/90">
          Garantia jonë
        </p>
        <h2 className="mt-3 text-h2 font-bold leading-tight text-balance">
          Zgjidhja për objektin tuaj fillon këtu
        </h2>
        <p className="mt-6 text-body-lg text-primary-foreground/90 leading-relaxed">
          E bëjmë të drejtë herën e parë – nëse nuk jeni plotësisht të kënaqur, e rregullojmë.
          Na tregoni për objektin dhe ju kontaktojmë brenda shkurt. Pa angazhim.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
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
