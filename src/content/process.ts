export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Vlerësim",
    description: "Auditim i objektit, sektori, fluksi, risku.",
  },
  {
    title: "Plan pune",
    description: "SLA, frekuenca, ekipe, furnizime.",
  },
  {
    title: "Ekzekutim",
    description: "Implementim me supervizim.",
  },
  {
    title: "Kontroll & raportim",
    description: "Monitorim cilësie dhe raportim dixhital.",
  },
];

export const whatClientGets = [
  "Marrëveshje e qartë (SLA) me frekuencë dhe detyra të përcaktuara",
  "Raporte periodike dixhitale dhe pikë kontakti të dedikuar",
  "Supervizim dhe inspektime cilësie të vazhdueshme",
  "Përmirësim i vazhdueshëm bazuar në reagimin tuaj",
];

export const qaLoopSteps: ProcessStep[] = [
  {
    title: "Inspektim",
    description: "Kontroll i rregullt i hapësirave dhe i standardeve.",
  },
  {
    title: "Raportim",
    description: "Dokumentim dhe komunikim i gjetjeve me klientin.",
  },
  {
    title: "Përmirësim",
    description: "Veprime korrigjuese dhe përditësim i praktikave kur është e nevojshme.",
  },
];
