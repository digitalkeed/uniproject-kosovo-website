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
    <Section className="bg-surface py-section">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-label text-center text-muted-foreground mb-2"
      >
        I besuar nga…
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-h2 text-center text-foreground mb-ds-12"
      >
        Banka, qendra tregtare, institucione dhe biznese në Kosovë
      </motion.h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-ds-24 sm:gap-ds-32">
        {stats.map((s, i) => (
          <Stat key={s.label} value={s.value} label={s.label} index={i} />
        ))}
      </div>
    </Section>
  );
}
