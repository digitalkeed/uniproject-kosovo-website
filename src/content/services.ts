export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  tags?: string[];
  icon?: string;
};

export const services: Service[] = [
  {
    slug: "pastrim-profesional",
    title: "Pastrim profesional",
    shortDescription: "Pastrim ditor, industrial, pas ndërtimit, qendra tregtare.",
    longDescription:
      "Pastrim profesional për zyra, hapësira tregtare, objekte industriale dhe pas ndërtimit. Përfshin pastrim të përditshëm, thellë dhe specializuar sipas nevojave të objektit, me ekipe të trajnuara dhe pajisje moderne.",
    tags: ["B2B", "SLA", "Higjienë"],
    icon: "pastrim",
  },
  {
    slug: "facility-management",
    title: "Facility Management",
    shortDescription: "Mirembajtje teknike, consumables, supervizim, raportim.",
    longDescription:
      "Menaxhim i plotë i objekteve: mirembajtje teknike, furnizime dhe consumables, supervizim stafi, inspektime dhe raportim periodik për transparencë dhe cilësi të vazhdueshme.",
    tags: ["B2B", "24/7", "SLA"],
    icon: "facility",
  },
  {
    slug: "dezinfektim-sanitizim",
    title: "Dezinfektim & Sanitizim",
    shortDescription: "SIP standardeve, me preparate të certifikuara.",
    longDescription:
      "Dezinfektim dhe sanitizim profesional sipas standardeve dhe SOP, me preparate të certifikuara (p.sh. DECONEX 50 FF). Plan detajuar: zona, metodë, kohë, pajisje dhe kontroll cilësie.",
    tags: ["Higjienë", "SLA", "B2B"],
    icon: "dezinfektim",
  },
  {
    slug: "fasadash-lartesi",
    title: "Pastrim fasadash & lartësi",
    shortDescription: "Dritare, fasadë, punë në lartësi.",
    longDescription:
      "Pastrim dritaresh, fasadash dhe punë në lartësi me pajisje speciale dhe personel të certifikuar, me fokus në siguri dhe rezultate të qëndrueshme.",
    tags: ["Specializuar", "Siguri", "B2B"],
    icon: "fasadash",
  },
  {
    slug: "panelesh-solare",
    title: "Pastrim panelesh solare (robotike)",
    shortDescription: "Pajisje speciale dhe robotike.",
    longDescription:
      "Pastrim panelesh solare me pajisje dhe teknologji robotike, për efikasitet maksimal dhe ruajtjen e performancës së instalimeve.",
    tags: ["Robotike", "B2B", "SLA"],
    icon: "solar",
  },
  {
    slug: "on-call",
    title: "On-call / emergjencë / sezonale",
    shortDescription: "Kurdo që kërkohet, orar i zgjatur.",
    longDescription:
      "Shërbime në kërkesë, emergjenca dhe projekte sezonale, me orar të zgjatur dhe gatishmëri për të përgjigjur shpejt ndaj nevojave të klientit.",
    tags: ["24/7", "Emergjencë", "B2B"],
    icon: "oncall",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
