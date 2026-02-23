"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Besueshmëri & Profesionalizëm",
    description:
      "Ekip i trajnuar, i rregullt dhe i gatshëm – me standarde ISO dhe përvojë 24+ vjeçare.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Cilësi & Standard i lartë",
    description:
      "Materiale cilësore, pajisje moderne dhe kontroll të vazhdueshëm – çdo herë siç duhet.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Transparencë & Raportim",
    description:
      "Pa surpriza. Raportim dixhital dhe komunikim i qartë në çdo hap të projektit.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export function ValueCards() {
  return (
    <Section className="bg-section-gradient">
      <div className="text-center mb-12">
        <h2 className="text-h2 font-bold text-foreground">
          Pse na zgjidhin klientët
        </h2>
        <p className="mt-3 text-body-lg text-muted-foreground max-w-content mx-auto">
          Besueshmëri, cilësi dhe transparencë – vlerat që na bëjnë partner kryesor në Kosovë.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
            className="group rounded-card border border-border bg-surface p-8 text-center shadow-card transition-all duration-normal ease-out hover:shadow-card-hover hover:border-primary/20 hover:-translate-y-1"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 transition-colors duration-normal ease-out group-hover:bg-primary group-hover:text-primary-foreground shadow-sm">
              {card.icon}
            </div>
            <h3 className="text-h3 text-foreground">{card.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
