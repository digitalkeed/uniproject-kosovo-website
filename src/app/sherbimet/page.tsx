import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CardGrid } from "@/components/ui/CardGrid";
import { Button } from "@/components/ui/Button";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { services } from "@/content/services";

const heroImage =
  "https://images.pexels.com/photos/5691584/pexels-photo-5691584.jpeg?auto=compress&cs=tinysrgb&w=1200";

const supportImage =
  "https://images.pexels.com/photos/5691584/pexels-photo-5691584.jpeg?auto=compress&cs=tinysrgb&w=800";

export const metadata = {
  title: "Shërbimet | UNI PROJECT",
  description:
    "Pastrim profesional, facility management dhe shërbime të specializuara në të gjithë Kosovën.",
};

export default function SherbimetPage() {
  return (
    <PageTemplate
      hero={{
        layout: "imageRight",
        lead: "Zgjidhje të plota për çdo objekt",
        title: "Shërbimet tona",
        description:
          "Nga pastrimi ditor dhe industrial tek facility management dhe shërbime të specializuara – pastrim fasadash, panelesh solare me robotike dhe ndërhyrje on-call. Ekipe të trajnuara, pajisje moderne dhe raportim dixhital për çdo projekt.",
        image: {
          src: heroImage,
          alt: "Ekip pastrimi profesional në punë – UNI PROJECT",
        },
        ctaPrimary: { label: "Kerko oferte", href: "/kontakt" },
        ctaSecondary: { label: "Shiko sektorët", href: "/sektoret" },
      }}
      proofStrip={<TrustStrip />}
      cta={{
        title: "Zgjidhja për objektin tuaj fillon këtu",
        description:
          "Na tregoni për objektin – lokacione, m², frekuencë – dhe do të ju kontaktojmë brenda shkurt. Pa angazhim.",
        primaryLabel: "Kerko oferte",
        primaryHref: "/kontakt",
        secondaryLabel: "Shiko shërbimet",
        secondaryHref: "/sherbimet",
      }}
    >
      <Section
        className="overflow-hidden py-section bg-section-offer"
        innerClassName="max-w-7xl relative z-10"
      >
        <SectionHeader
          eyebrow="SHËRBIMET"
          title="Çfarë ofrojmë"
          intro="Shërbime të ndërlidhura: pastrim profesional (përfshirë dezinfektim dhe pastrim në lartësi), menaxhim i objekteve dhe gatishmëri 24/7 për emergjenca dhe projekte sezonale."
          cta={{ label: "Shiko të gjitha", href: "/sherbimet" }}
        />
        <CardGrid
          items={services}
          renderCard={(s) => <ServiceCard key={s.slug} service={s} />}
          gridClass="grid gap-ds-16 sm:gap-ds-24 sm:grid-cols-2 lg:grid-cols-3 mt-ds-56"
        />
      </Section>

      <Section className="py-section bg-surface">
        <div className="grid gap-ds-32 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] rounded-hero overflow-hidden shadow-soft">
            <Image
              src={supportImage}
              alt="Si të filloni – vlerësim dhe ofertë"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-heading text-h2 text-foreground">Si të filloni</h2>
            <p className="mt-ds-12 text-muted-foreground max-w-content leading-relaxed">
              Për çdo shërbim ofrojmë vlerësim fillestar, plan pune me SLA dhe
              raportim periodik. Na tregoni objektin dhe nevojat – do të
              përshtasim ofertën.
            </p>
            <div className="mt-ds-24">
              <Button href="/kontakt">Kerko oferte</Button>
            </div>
          </div>
        </div>
      </Section>
    </PageTemplate>
  );
}
