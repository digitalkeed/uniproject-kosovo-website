import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { sectors } from "@/content/sectors";

const heroImage =
  "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200";

const supportImage =
  "https://images.pexels.com/photos/3861969/3861969.jpeg?auto=compress&cs=tinysrgb&w=800";

export const metadata = {
  title: "Sektorët | UNI PROJECT",
  description: "Shërbejmë në të gjithë Kosovën – nga banka tek industria.",
};

export default function SektoretPage() {
  return (
    <>
      <PageHero
        layout="imageLeft"
        lead="Sektorë të ndryshëm, një standard"
        title="Sektorët që shërbejmë"
        description="Shërbejmë banka, qendra tregtare, institucione publike dhe ndërkombëtare, sektorin e shëndetësisë dhe arsimit dhe industriën. Përvoja jonë na lejon të përshtasim shërbimin sipas rregullave dhe pritjeve të çdo sektori, me fokus në siguri dhe cilësi."
        image={{
          src: heroImage,
          alt: "Objekt profesional – UNI PROJECT shërben në të gjithë Kosovën",
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Shiko shërbimet", href: "/sherbimet" }}
      />
      <Section className="py-14 bg-section-alt">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground">
            Nga banka tek industria
          </h2>
          <p className="mt-2 text-muted-foreground max-w-content mx-auto">
            Çdo sektor ka nevoja dhe standarde të veta. Ekipet tona janë të
            trajnuara për të punuar në ambiente me kërkesa të larta për
            higjienë, siguri dhe raportim.
          </p>
        </div>
        <CardGrid
          items={sectors}
          renderCard={(s) => (
            <Card key={s.slug} href={`/sektoret/${s.slug}`} variant="service">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {s.description}
              </p>
            </Card>
          )}
        />
      </Section>

      <Section className="py-14 bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center max-w-5xl mx-auto">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] order-2 lg:order-1">
            <Image
              src={supportImage}
              alt="Përvoja dhe fleksibiliteti – UNI PROJECT"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-xl font-semibold text-foreground">
              Përvoja dhe fleksibiliteti
            </h3>
            <div className="mt-3 space-y-3 text-muted-foreground text-sm max-w-content">
              <p>
                <strong className="text-foreground">Përvoja ndërkombëtare.</strong>{" "}
                Kemi punuar me misione dhe institucione si OSCE dhe EULEX, ku
                procedurat dhe raportimi janë thelbësorë.
              </p>
              <p>
                <strong className="text-foreground">Fleksibilitet.</strong> Nga
                kontrata vjetore tek projekte sezonale – përshtasim modelin sipas
                nevojave të klientit.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <CTA
        title="Dëshironi të punojmë për sektorin tuaj?"
        description="Na tregoni për objektin dhe do të ju kontaktojmë brenda shkurt me një ofertë të përshtatshme."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Shiko shërbimet"
        secondaryHref="/sherbimet"
      />
    </>
  );
}
