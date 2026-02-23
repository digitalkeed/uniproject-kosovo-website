import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { IconCardGrid } from "@/components/ui/IconCard";
import { CTA } from "@/components/ui/CTA";
import { PageHero } from "@/components/ui/PageHero";
import { processIcons, valueIcons, qaLoopIcons } from "@/components/ui/icons";
import {
  processSteps,
  whatClientGets,
  qaLoopSteps,
} from "@/content/process";
import type { IconCardItem } from "@/components/ui/IconCard";

const heroImage =
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200";

const supportingImage =
  "https://images.pexels.com/photos/3184418/3184418.jpeg?auto=compress&cs=tinysrgb&w=800";

const whatClientGetsItems: IconCardItem[] = [
  {
    title: "SLA e qartë",
    description: whatClientGets[0],
    icon: valueIcons.sla,
  },
  {
    title: "Raporte periodike",
    description: whatClientGets[1],
    icon: valueIcons.report,
  },
  {
    title: "Supervizim",
    description: whatClientGets[2],
    icon: valueIcons.supervision,
  },
  {
    title: "Përmirësim i vazhdueshëm",
    description: whatClientGets[3],
    icon: valueIcons.improvement,
  },
];

export const metadata = {
  title: "Si operojmë | UNI PROJECT",
  description:
    "Modeli ynë: vlerësim → plan pune → ekzekutim → kontroll cilësie dhe raportim.",
};

export default function SiOperojmePage() {
  return (
    <>
      <PageHero
        layout="imageCenter"
        lead="Proces i qartë, rezultate të matshme"
        title="Si operojmë"
        description="Nga vlerësimi i objektit deri te raportimi dixhital – çdo hap është i planifikuar dhe i dokumentuar. Supervizimi dhe listat e punës na lejojnë të garantojmë cilësi të qëndrueshme dhe transparencë për klientin."
        image={{
          src: heroImage,
          alt: "Ekip dhe planifikim – si punon UNI PROJECT",
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Shiko teknologjinë", href: "/teknologjia" }}
      />

      <Section className="py-14 bg-section-alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Katër hapat e modelit tonë
        </h2>
        <p className="text-center text-muted-foreground max-w-content mx-auto mb-10">
          Çdo projekt fillon me një auditim dhe përfundon me raportim të
          vazhdueshëm – pa hapa të errëta.
        </p>
        <ProcessTimeline steps={processSteps} icons={processIcons} />
      </Section>

      <Section className="py-14 bg-white">
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[var(--shadow-card)] aspect-[21/9] sm:aspect-[3/1]">
          <Image
            src={supportingImage}
            alt="Auditim dhe punë në terren – UNI PROJECT"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </Section>

      <Section className="py-14 bg-section-alt">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Çfarë merr klienti
        </h2>
        <p className="text-center text-muted-foreground max-w-content mx-auto mb-10">
          Jo vetëm pastrim dhe mirembajtje – por edhe dokumentacion dhe
          komunikim të qartë.
        </p>
        <IconCardGrid items={whatClientGetsItems} columns={4} />
      </Section>

      <Section className="py-14 bg-white">
        <h2 className="text-2xl font-bold text-foreground text-center mb-2">
          Cikli i cilësisë (QA)
        </h2>
        <p className="text-center text-muted-foreground max-w-content mx-auto mb-10">
          Inspektim → raportim → përmirësim, në mënyrë të vazhdueshme. Nuk
          ndalemi te "është bërë" – vazhdojmë të monitorojmë dhe të përmirësojmë.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-2 max-w-4xl mx-auto">
          {qaLoopSteps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-2 sm:gap-1">
              <div className="flex-1 rounded-xl border border-slate-100 bg-white p-5 shadow-[var(--shadow-card)] text-center min-w-0">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 [&_svg]:w-5 [&_svg]:h-5">
                  {qaLoopIcons[i]}
                </div>
                <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < qaLoopSteps.length - 1 && (
                <div className="hidden sm:flex shrink-0 items-center justify-center w-8 text-primary/50" aria-hidden>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Dëshironi të filloni me një vlerësim?"
        description="Na tregoni për objektin – do të ju kontaktojmë brenda shkurt. Pa angazhim."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Shiko shërbimet"
        secondaryHref="/sherbimet"
      />
    </>
  );
}
