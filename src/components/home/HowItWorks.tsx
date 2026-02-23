"use client";

import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Zgjidhni shërbimin",
    description: "Na tregoni çfarë ju duhet – pastrim, facility management apo shërbime të specializuara.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Caktoni takimin",
    description: "Vlerësojmë objektin dhe ju dërgojmë një ofertë të qartë, pa surpriza.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Ne kujdesemi për gjithçka",
    description: "Ekipi ynë fillon punën me supervizim dhe raportim të vazhdueshëm.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-surface py-section">
      <div className="text-center mb-ds-56">
        <p className="text-label text-muted-foreground">Si funksionon</p>
        <h2 className="mt-3 text-h2 text-foreground">
          Porosisni shërbimin tuaj në 3 hapa
        </h2>
        <p className="mt-4 text-muted-foreground max-w-prose mx-auto leading-relaxed">
          Tre hapa të thjeshtë – nga kërkesa juaj deri te rezultati.
        </p>
      </div>
      <div className="grid gap-ds-24 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="relative"
          >
            <div className="h-full rounded-card border border-border bg-surface p-[var(--card-padding)] shadow-soft transition-all duration-200 hover:shadow-soft hover:border-border-strong">
              <div className="flex items-start gap-ds-16">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card bg-primary text-primary-foreground font-heading text-xl font-semibold">
                  {s.step}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-h3 text-foreground">{s.title}</h3>
                  <p className="mt-ds-12 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-ds-40 text-center">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-button min-h-[var(--button-height)] px-6 bg-primary text-primary-foreground font-semibold shadow-soft hover:bg-primary-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Kerko oferte
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
