export type IsoStandard = {
  id: string;
  title: string;
  shortDescription: string;
};

export type HseItem = {
  title: string;
  description: string;
};

export const isoStandards: IsoStandard[] = [
  {
    id: "9001",
    title: "ISO 9001",
    shortDescription: "Menaxhimi i cilësisë – procese të qarta, përmirësim i vazhdueshëm dhe kënaqësia e klientit.",
  },
  {
    id: "45001",
    title: "ISO 45001",
    shortDescription: "Siguria dhe shëndeti në punë – reduktimi i rreziqeve dhe mbrojtja e stafit dhe të ambientit.",
  },
  {
    id: "14001",
    title: "ISO 14001",
    shortDescription: "Menaxhimi mjedisor – praktika që respektojnë mjedisin dhe burimet.",
  },
];

export const hseItems: HseItem[] = [
  {
    title: "PPE dhe uniforma",
    description: "Përdorimi i pajisjeve mbrojtëse personale dhe uniformave të përshtatshme për çdo lloj pune.",
  },
  {
    title: "Procedura dhe trajnime",
    description: "Procedura të dokumentuara dhe trajnime të rregullta për siguri dhe cilësi.",
  },
  {
    title: "Përputhshmëri",
    description: "Respektimi i ligjeve dhe kërkesave të kontraktuesit në të gjithë operacionet.",
  },
];
