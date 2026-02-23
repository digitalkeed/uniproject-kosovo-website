import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

const heroImage =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80";

const statChips = [
  { value: "24+", label: "vite" },
  { value: "270+", label: "staf" },
];

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-hero-tint py-section">
      <div className="grid gap-ds-56 lg:grid-cols-2 lg:gap-ds-72 lg:items-center">
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <p className="text-label text-primary">
            Lider në Kosovë që nga 2001
          </p>
          <h1 className="mt-4 text-h1 text-foreground text-balance">
            Mjedise të pastra. Objekte funksionale. Shërbim 24/7.
          </h1>
          <p className="mt-6 text-[length:var(--text-body)] text-muted-foreground max-w-prose mx-auto lg:mx-0 leading-relaxed">
            UNI PROJECT ofron pastrim profesional, mirembajtje teknike dhe
            facility management në të gjithë Kosovën – me standarde ISO, staf të
            trajnuara dhe raportim dixhital.
          </p>
          <div className="mt-ds-40 flex flex-wrap justify-center lg:justify-start gap-ds-16">
            <Button href="/kontakt" variant="primary">
              Kerko oferte
            </Button>
            <Button href="/kontakt" variant="secondary">
              Na kontakto
            </Button>
          </div>
          <div className="mt-ds-32 flex flex-wrap justify-center lg:justify-start gap-ds-12">
            <Badge>Oferta e shpejtë</Badge>
            <Badge variant="muted">Pa kontratë të detyrueshme</Badge>
            <Badge variant="primary">Standarde ISO</Badge>
          </div>
        </div>
        <div className="relative aspect-[4/3] min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] rounded-hero overflow-hidden shadow-soft border border-border">
          <Image
            src={heroImage}
            alt="Pastrim profesional – ambient i pastër dhe i rregulluar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-ds-12">
            {statChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex flex-col rounded-card bg-surface/95 backdrop-blur px-4 py-2 shadow-soft border border-border"
              >
                <span className="font-heading text-lg font-semibold text-foreground">{chip.value}</span>
                <span className="text-label text-muted-foreground">{chip.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
