import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const heroImage =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80";

const trustBadges = [
  "Oferta e shpejtë",
  "Pa kontratë të detyrueshme",
  "Standarde ISO",
];

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-hero-tint pt-20 pb-0 sm:pt-24 lg:pt-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <p className="text-caption text-primary">
            Lider në Kosovë që nga 2001
          </p>
          <h1 className="mt-4 text-hero font-bold text-foreground text-balance">
            Mjedise të pastra. Objekte funksionale. Shërbim 24/7.
          </h1>
          <p className="mt-6 text-body-lg text-muted-foreground max-w-prose mx-auto lg:mx-0">
            UNI PROJECT ofron pastrim profesional, mirembajtje teknike dhe
            facility management në të gjithë Kosovën – me standarde ISO, staf të
            trajnuar dhe raportim dixhital.
          </p>
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <Button href="/kontakt" variant="primary">
              Kerko oferte
            </Button>
            <Button href="/kontakt" variant="secondary">
              Na kontakto
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {trustBadges.map((label) => (
              <span key={label} className="badge-pill">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] rounded-card overflow-hidden shadow-hero border border-border">
          <Image
            src={heroImage}
            alt="Pastrim profesional – ambient i pastër dhe i rregulluar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}
