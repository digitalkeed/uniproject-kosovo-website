"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "UNI PROJECT na shërben me pastrim dhe facility management në të gjitha degët. Profesionalë, të rregullt dhe me raportim të qartë – saktësisht çfarë na duhet.",
    author: "Menaxher Operacionesh",
    context: "Banka – rrjet kombëtar",
  },
  {
    quote:
      "Përvoja e gjatë dhe standardet ISO na dhanë besim. Ekipi vjen në kohë, puna është e pastër dhe komunikimi i shkëlqyer.",
    author: "Drejtor Objekti",
    context: "Qendër tregtare – Prishtinë",
  },
  {
    quote:
      "Nga auditimi fillestar deri te raportimi dixhital, gjithçka është transparent. Rekomandoj për objekte të mëdha dhe me kërkesa të larta.",
    author: "Përgjegjës Blerje",
    context: "Institucion publik",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-amber-500" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section className="bg-section-alt py-section">
      <motion.div
        className="text-center mb-ds-56"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-label text-muted-foreground">Dëshmitë</p>
        <h2 className="mt-3 text-h2 text-foreground">
          Kënaqësia e klientit është prioriteti ynë
        </h2>
        <p className="mt-4 text-muted-foreground max-w-prose mx-auto leading-relaxed">
          Rezultatet tona dhe partnerët tanë flasin vetë.
        </p>
      </motion.div>
      <div className="grid gap-ds-24 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="group rounded-card border border-border bg-surface p-[var(--card-padding)] shadow-soft flex flex-col transition-all duration-200 hover:shadow-soft hover:border-border-strong hover:-translate-y-0.5"
          >
            <StarRating />
            <p className="mt-3 text-muted-foreground flex-1 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-ds-16 pt-ds-16 border-t border-border">
              <p className="font-semibold text-foreground text-sm">{t.author}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.context}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
