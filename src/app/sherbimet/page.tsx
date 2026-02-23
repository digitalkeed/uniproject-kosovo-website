import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CardGrid } from "@/components/ui/CardGrid";
import { CTA } from "@/components/ui/CTA";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
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
    <>
      <PageHero
        layout="imageRight"
        lead="Zgjidhje të plota për çdo objekt"
        title="Shërbimet tona"
        description="Nga pastrimi ditor dhe industrial tek facility management dhe shërbime të specializuara – pastrim fasadash, panelesh solare me robotike dhe ndërhyrje on-call. Ekipe të trajnuara, pajisje moderne dhe raportim dixhital për çdo projekt."
        image={{
          src: heroImage,
          alt: "Ekip pastrimi profesional në punë – UNI PROJECT",
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Shiko sektorët", href: "/sektoret" }}
      />
      <Section
        className="overflow-hidden py-20 bg-section-offer"
        innerClassName="max-w-7xl relative z-10"
      >
        <SectionHeader
          eyebrow="SHËRBIMET"
          title="Çfarë ofrojmë"
          intro="Shërbime të ndërlidhura: pastrim profesional (përfshirë dezinfektim dhe pastrim në lartësi), menaxhim i objekteve dhe gatishmëri 24/7 për emergjenca dhe projekte sezonale."
          cta={{ label: "Shiko të gjitha", href: "/sherbimet" }}
        />
        <TrustStrip />
        <CardGrid
          items={services}
          renderCard={(s) => <ServiceCard key={s.slug} service={s} />}
          gridClass="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14"
        />
      </Section>

      <Section className="py-14 bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center max-w-5xl mx-auto">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={supportImage}
              alt="Si të filloni – vlerësim dhe ofertë"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Si të filloni
            </h3>
            <p className="mt-3 text-muted-foreground max-w-content">
              Për çdo shërbim ofrojmë vlerësim fillestar, plan pune me SLA dhe
              raportim periodik. Na tregoni objektin dhe nevojat – do të
              përshtasim ofertën.
            </p>
            <div className="mt-6">
              <Button href="/kontakt">Kerko oferte</Button>
            </div>
          </div>
        </div>
      </Section>
      <CTA
        title="Zgjidhja për objektin tuaj fillon këtu"
        description="Na tregoni për objektin – lokacione, m², frekuencë – dhe do të ju kontaktojmë brenda shkurt. Pa angazhim."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Shiko shërbimet"
        secondaryHref="/sherbimet"
      />
    </>
  );
}
