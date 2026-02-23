import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { getSectorBySlug } from "@/content/sectors";

const heroImages: Record<string, string> = {
  banka:
    "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "qendra-tregtare":
    "https://images.pexels.com/photos/3252299/pexels-photo-3252299.jpeg?auto=compress&cs=tinysrgb&w=1200",
  publike:
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "shendetesi-arsim":
    "https://images.pexels.com/photos/7578896/pexels-photo-7578896.jpeg?auto=compress&cs=tinysrgb&w=1200",
  industri:
    "https://images.pexels.com/photos/3252299/pexels-photo-3252299.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const defaultHeroImage =
  "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: "Sektor | UNI PROJECT" };
  return {
    title: `${sector.title} | UNI PROJECT`,
    description: sector.description,
  };
}

export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const heroImage = heroImages[slug] ?? defaultHeroImage;

  return (
    <>
      <PageHero
        layout="imageLeft"
        lead="Sektorët"
        title={sector.title}
        description={sector.description}
        image={{
          src: heroImage,
          alt: `${sector.title} – UNI PROJECT`,
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Të gjithë sektorët", href: "/sektoret" }}
      />
      <Section className="py-14 bg-section-alt">
        <nav className="text-sm text-muted-foreground">
          <Link href="/sektoret" className="text-primary hover:underline">
            Sektorët
          </Link>
          <span className="mx-2">→</span>
          <span className="text-foreground">{sector.title}</span>
        </nav>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed max-w-content">
              {sector.description}
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-100 shadow-[var(--shadow-card)] max-w-content">
              <h3 className="font-semibold text-foreground">
                Pse të zgjidhni UNI PROJECT për këtë sektor
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Kemi përvojë me klientë të ngjashëm dhe e dimë çfarë kërkojnë
                standardet dhe procedurat. Na tregoni objektin – do të përshtasim
                ofertën dhe do të ju kontaktojmë brenda 24–48 orëve.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={heroImage}
              alt={`${sector.title} – UNI PROJECT`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
      <CTA
        title="Dëshironi një ofertë për këtë sektor?"
        description="Plotësoni formularin ose na kontaktoni direkt. Do të ju përgjigjemi brenda 24–48 orëve."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Të gjithë sektorët"
        secondaryHref="/sektoret"
      />
    </>
  );
}
