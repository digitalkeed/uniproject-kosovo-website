export type ProjectType = "case-study" | "reference";

export type Project = {
  slug: string;
  name: string;
  sector?: string;
  type: ProjectType;
  period?: string;
  shortDescription?: string;
  problem?: string;
  solution?: string;
  process?: string;
  result?: string;
};

export const projects: Project[] = [
  {
    slug: "eulex",
    name: "EULEX",
    sector: "publike",
    type: "reference",
    period: "Projekt me afat të gjatë",
    shortDescription: "Partneritet me misione ndërkombëtare për pastrim dhe menaxhim të hapësirave.",
  },
  {
    slug: "osce",
    name: "OSCE",
    sector: "publike",
    type: "reference",
    period: "Projekt me afat të gjatë",
    shortDescription: "Shërbime të vazhdueshme për institucione ndërkombëtare në Kosovë.",
  },
  {
    slug: "kuvendi",
    name: "Kuvendi i Kosovës",
    sector: "publike",
    type: "case-study",
    period: "Kontratë vjetore",
    problem: "Nevojë për pastrim dhe menaxhim të hapësirave të mëdha institucionale me standarde të larta dhe fleksibilitet orar.",
    solution: "Ofertë e përshtatur me ekipe të dedikuara, raportim dixhital dhe koordinim me orarin e punës së Kuvendit.",
    process: "Auditim fillestar, plan pune me SLA, ekzekutim me supervizim ditor dhe raporte mujore për klientin.",
    result: "Mjedis i pastër dhe i rregulluar vazhdimisht, komunikim i qartë dhe respektimi i të gjitha kërkesave.",
  },
  {
    slug: "banka-kombetare",
    name: "Banka – rrjet kombëtar",
    sector: "banka",
    type: "case-study",
    period: "Kontratë me shumë degë",
    problem: "Pastrim dhe facility management në të gjitha degët e bankës me nevojë për konsistencë dhe raportim të centralizuar.",
    solution: "Struktura ekipi dhe supervizimi për çdo lokacion, me një pikë kontakti dhe dashboard raportimi.",
    process: "Koordinim me menaxhmentin e çdo dege, listat e punës dhe inspektime cilësie të planifikuara.",
    result: "Standarde të njëjta në të gjithë rrjetin, ulje e ankesave dhe besim i lartë nga klienti.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSectors(): string[] {
  const set = new Set(projects.map((p) => p.sector).filter(Boolean));
  return Array.from(set) as string[];
}
