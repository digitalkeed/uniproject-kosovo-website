import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { getProjectBySlug } from "@/content/projects";
import { sectors } from "@/content/sectors";

const heroImage =
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projekt | UNI PROJECT" };
  return {
    title: `${project.name} | UNI PROJECT`,
    description: project.shortDescription ?? undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sectorLabel = project.sector
    ? sectors.find((s) => s.slug === project.sector)?.title
    : null;
  const subtitle = [sectorLabel, project.period].filter(Boolean).join(" · ");
  const description =
    project.shortDescription ??
    (project.type === "case-study"
      ? "Case study: nga nevoja tek zgjidhja dhe rezultati."
      : "Referencë nga eksperienca jonë.");

  return (
    <>
      <PageHero
        layout="imageCenter"
        lead="Projekte & Referenca"
        title={project.name}
        description={subtitle ? `${subtitle}. ${description}` : description}
        image={{
          src: heroImage,
          alt: `${project.name} – UNI PROJECT`,
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Të gjitha projektet", href: "/projekte" }}
      />
      <Section className="py-14 bg-section-alt">
        <nav className="text-sm text-muted-foreground">
          <Link href="/projekte" className="text-primary hover:underline">
            Projekte
          </Link>
          <span className="mx-2">→</span>
          <span className="text-foreground">{project.name}</span>
        </nav>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
          {sectorLabel && <span>{sectorLabel}</span>}
          {project.period && <span>{project.period}</span>}
        </div>

        {project.type === "case-study" &&
        (project.problem ??
          project.solution ??
          project.process ??
          project.result) ? (
          <div className="mt-10 space-y-8 max-w-content">
            {project.problem && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Problemi / Nevoja
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Zgjidhja
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
            {project.process && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Procesi
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {project.process}
                </p>
              </div>
            )}
            {project.result && (
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Rezultati
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {project.result}
                </p>
              </div>
            )}
          </div>
        ) : (
          project.shortDescription && (
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-content">
              {project.shortDescription}
            </p>
          )
        )}
      </Section>
      <CTA
        title="Dëshironi të diskutoni një projekt të ngjashëm?"
        description="Na kontaktoni për një ofertë të përshtatshme për objektin tuaj."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Të gjitha projektet"
        secondaryHref="/projekte"
      />
    </>
  );
}
