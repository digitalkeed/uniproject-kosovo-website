import Image from "next/image";
import { type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { isoStandards, hseItems } from "@/content/standards";
import { standardIcons } from "@/components/ui/icons";

const heroImage =
  "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1200";

const imageBlockSrc =
  "https://images.pexels.com/photos/7659564/7659564.jpeg?auto=compress&cs=tinysrgb&w=800";

const isoIconByKey: Record<string, ReactNode> = {
  "9001": standardIcons.quality,
  "45001": standardIcons.safety,
  "14001": standardIcons.environment,
};

const hseIcons = [
  standardIcons.ppe,
  standardIcons.document,
  standardIcons.compliance,
];

export const metadata = {
  title: "Standarde & Siguria | UNI PROJECT",
  description:
    "ISO 9001, ISO 45001, ISO 14001. Praktika HSE, PPE, procedura dhe përputhshmëri.",
};

export default function StandardetPage() {
  return (
    <>
      <PageHero
        layout="imageLeft"
        lead="Certifikime dhe praktika të dokumentuara"
        title="Standarde & Siguria"
        description="Operojmë sipas ISO 9001, ISO 45001 dhe ISO 14001 – cilësi, siguri dhe shëndeti në punë dhe menaxhim mjedisor. PPE, procedura dhe përputhshmëria me ligjet dhe me kërkesat e klientit janë pjesë e përditshme e punës sonë."
        image={{
          src: heroImage,
          alt: "Dokumentacion dhe standarde – UNI PROJECT",
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Si operojmë", href: "/si-operojme" }}
      />

      <Section className="py-14 bg-section-alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Certifikimet ISO
        </h2>
        <p className="text-center text-muted-foreground max-w-content mx-auto mb-10">
          Tre standarde ndërkombëtare që garantojnë procese të qarta, siguri
          për stafin dhe respekt ndaj mjedisit.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {isoStandards.map((std) => (
            <Card key={std.id} variant="default">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 [&_svg]:w-6 [&_svg]:h-6">
                {isoIconByKey[std.id]}
              </div>
              <h3 className="text-lg font-semibold">{std.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {std.shortDescription}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="py-14 bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={imageBlockSrc}
              alt="Përputhshmëria në praktikë – punë e sigurt dhe e dokumentuar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Përputhshmëria në praktikë
            </h3>
            <p className="mt-3 text-muted-foreground max-w-content">
              Në terren, në zyrë dhe në menaxhim – siguria dhe përputhshmëria janë
              jo-negociueshme. PPE, procedura dhe trajnime të rregullta janë pjesë
              e përditshme e punës sonë.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-14 bg-section-alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          HSE – Siguria, shëndeti dhe mjedisi
        </h2>
        <p className="text-center text-muted-foreground max-w-content mx-auto mb-10">
          Në terren, në zyrë dhe në menaxhim – siguria dhe përputhshmëria janë
          jo-negociueshme.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hseItems.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 [&_svg]:w-6 [&_svg]:h-6">
                {hseIcons[i]}
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Dëshironi të diskutoni standardet dhe sigurinë?"
        description="Na kontaktoni për informacion ose për një ofertë të përshtatshme."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Si operojmë"
        secondaryHref="/si-operojme"
      />
    </>
  );
}
