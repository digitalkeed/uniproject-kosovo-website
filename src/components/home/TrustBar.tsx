"use client";

import { Section } from "@/components/ui/Section";
import { Stat } from "@/components/ui/Stat";
import { motion } from "framer-motion";

const stats = [
  { value: "24+", label: "Vite përvoja" },
  { value: "270+", label: "Profesionistë" },
  { value: "ISO", label: "9001 / 45001 / 14001" },
  { value: "24/7", label: "Shërbim" },
];

export function TrustBar() {
  return (
    <Section className="bg-surface">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-h2 text-center font-bold text-foreground mb-2"
      >
        Numrat tregojnë historinë tonë
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-body-lg text-muted-foreground mb-12 max-w-content mx-auto"
      >
        I besuar nga banka, qendra tregtare, institucione publike dhe biznese në të gjithë Kosovën
      </motion.p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((s, i) => (
          <Stat key={s.label} value={s.value} label={s.label} index={i} />
        ))}
      </div>
    </Section>
  );
}
