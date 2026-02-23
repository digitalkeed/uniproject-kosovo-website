import { projects, getProjectSectors } from "@/content/projects";
import { sectors } from "@/content/sectors";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsHubClient } from "./ProjectsHubClient";

const heroImage =
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200";

export const metadata = {
  title: "Projekte & Referenca | UNI PROJECT",
  description:
    "Projekte me afat dhe case studies nga eksperienca jonë në Kosovë.",
};

export default function ProjektePage() {
  const sectorSlugs = getProjectSectors();
  const sectorOptions = sectorSlugs.map((slug) => ({
    value: slug,
    label: sectors.find((s) => s.slug === slug)?.title ?? slug,
  }));
  const typeOptions = [
    { value: "case-study" as const, label: "Case study" },
    { value: "reference" as const, label: "Referencë" },
  ];

  return (
    <>
      <PageHero
        layout="imageCenter"
        lead="Partnerë dhe projekte që na besojnë"
        title="Projekte & Referenca"
        description="Kemi punuar me institucione publike dhe ndërkombëtare, banka dhe objekte të mëdha në të gjithë Kosovën. Këtu gjeni një përmbledhje të projekteve me afat dhe case studies – nga nevoja e klientit tek rezultati dhe mësimet."
        image={{
          src: heroImage,
          alt: "Projekte dhe referenca – UNI PROJECT",
        }}
        ctaPrimary={{ label: "Kerko oferte", href: "/kontakt" }}
        ctaSecondary={{ label: "Shiko sektorët", href: "/sektoret" }}
      />
      <ProjectsHubClient
        projects={projects}
        sectorOptions={sectorOptions}
        typeOptions={typeOptions}
      />
    </>
  );
}
