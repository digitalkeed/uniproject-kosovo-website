import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconCardGrid } from "@/components/ui/IconCard";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { techPillarIcons, benefitIcons } from "@/components/ui/icons";
import type { IconCardItem } from "@/components/ui/IconCard";

const heroImage =
  "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200";

const imageBlockSrc =
  "https://images.pexels.com/photos/3861969/3861969.jpeg?auto=compress&cs=tinysrgb&w=800";

const pillars = [
  {
    title: "Aplikacion mobil",
    description:
      "Menaxhimi i ekipeve, listat e punës dhe raportimi në kohë reale nga terreni – e gjitha në një platformë të thjeshtë. Evidenco e prezencës dhe e orëve të punës, me notifikime dhe kalkulim automatik.",
    icon: techPillarIcons[0],
  },
  {
    title: "Robotike & pajisje",
    description:
      "Pajisje profesionale dhe zgjidhje robotike, përfshirë pastrimin e panelesh solare për efikasitet dhe qëndrueshmëri. Investojmë në mjete që ulin riskun dhe rrisin cilësinë.",
    icon: techPillarIcons[1],
  },
  {
    title: "Raportim dixhital",
    description:
      "Raporte periodike, dashboard për klientin dhe evidenco të dokumentuara për transparencë dhe përputhshmëri. Çdo aktivitet mund të ndiqet dhe të arkivohet.",
    icon: techPillarIcons[2],
  },
];

const benefits: IconCardItem[] = [
  {
    title: "Evidenco në kohë reale",
    description: "Evidenco e prezencës dhe e detyrave në kohë reale.",
    icon: benefitIcons.presence,
  },
  {
    title: "Orar dhe logjikë",
    description: "Orar dhe logjikë automatike për ekipet.",
    icon: benefitIcons.schedule,
  },
  {
    title: "Cilësi e qëndrueshme",
    description: "Cilësi e qëndrueshme falë monitorimit dhe raportimit.",
    icon: benefitIcons.quality,
  },
  {
    title: "Më pak punë manuale",
    description: "Më pak papërpunim manual dhe më shumë fokus në rezultat.",
    icon: benefitIcons.automation,
  },
  {
    title: "Transparencë për klientin",
    description: "Klienti sheh statusin e shërbimit pa nevojë për thirrje.",
    icon: benefitIcons.visibility,
  },
];

export const metadata = {
  title: "Teknologjia & Inovacioni | UNI PROJECT",
  description:
    "Aplikacion mobil, robotike, raportim dixhital – teknologji për cilësi dhe transparencë.",
};

export default function TeknologjiaPage() {
  return (
    <>
      <PageHero
        layout="imageRight"
        lead="Transparencë dhe performancë"
        title="Teknologjia & Inovacioni"
        description="Evidencojmë prezencën dhe performancën në kohë reale, me aplikacion mobil dhe logjikë automatike të orarit. Robotike dhe pajisje profesionale – sidomos pastrim panelesh solare – janë pjesë e ofertës sonë për rezultate të qëndrueshme."
        image={{
          src: heroImage,
          alt: "Aplikacion dhe raportim dixhital – UNI PROJECT",
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Si operojmë", href: "/si-operojme" }}
      />

      <Section className="py-14 bg-section-alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Tre shtyllat teknologjike
        </h2>
        <p className="text-center text-muted-foreground max-w-content mx-auto mb-10">
          Çdo projekt përfiton nga mjetet dixhitale dhe nga pajisjet e duhura –
          jo vetëm nga njerëzit.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Card key={p.title} variant="default">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 [&_svg]:w-6 [&_svg]:h-6">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={imageBlockSrc}
              alt="Si duket në praktikë – aplikacion dhe ekip në terren"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Si duket në praktikë
            </h3>
            <p className="mt-3 text-muted-foreground max-w-content">
              Ekipet përdorin aplikacionin në terren për të regjistruar detyrat
              dhe të dërguar raporte. Ju merrni qasje në dashboard për të parë
              statusin e shërbimit dhe historikun – pa nevojë për thirrje ose
              email.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-14 bg-white">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Përfitimet për klientin
        </h2>
        <p className="text-center text-muted-foreground max-w-content mx-auto mb-10">
          Teknologjia nuk është vetëm për ne – ajo ju jep juve qartësi dhe
          kontroll.
        </p>
        <IconCardGrid items={benefits} columns={3} />
      </Section>

      <CTA
        title="Dëshironi të shikoni teknologjinë në veprim?"
        description="Na kontaktoni për një demonstrim ose për një ofertë të përshtatshme."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Shiko shërbimet"
        secondaryHref="/sherbimet"
      />
    </>
  );
}
