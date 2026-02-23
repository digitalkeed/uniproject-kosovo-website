export type Sector = {
  slug: string;
  title: string;
  description: string;
};

export const sectors: Sector[] = [
  {
    slug: "banka",
    title: "Banka & rrjet filialesh",
    description:
      "Shërbejmë banka dhe rrjetet e filialesh me pastrim profesional dhe facility management të përshtatshëm për standardet e larta të sektorit financiar dhe sigurinë e hapësirave.",
  },
  {
    slug: "qendra-tregtare",
    title: "Qendra tregtare",
    description:
      "Pastrim dhe menaxhim i qendrave tregtare me fokus në hapësira të mëdha, qarkullim të lartë dhe imazh profesional për vizitorët dhe qira-marrësit.",
  },
  {
    slug: "publike",
    title: "Institucione publike / ndërkombëtare",
    description:
      "Përvoja me institucione publike dhe projekte ndërkombëtare (p.sh. OSCE, EULEX), me respektim të procedurave dhe kërkesave specifike të kontratave.",
  },
  {
    slug: "shendetesi-arsim",
    title: "Shëndetësi & arsim",
    description:
      "Spitale, klinika, shkolla dhe universitete – me fokus në higjienë, dezinfektim dhe mjedise të sigurta për pacientët, studentët dhe stafin.",
  },
  {
    slug: "industri",
    title: "Industri & prodhim",
    description:
      "Pastrim industrial, pas-ndërtimi dhe mirembajtje e objekteve të prodhimit, me respektim të rregullave HSE dhe nevojave operative të fabrikave.",
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
