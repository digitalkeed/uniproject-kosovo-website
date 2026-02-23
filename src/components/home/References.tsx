"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { LogoWall } from "@/components/ui/LogoWall";
import Link from "next/link";
import { motion } from "framer-motion";

const referenceLogos = [
  { name: "OSCE", placeholder: true },
  { name: "EULEX", placeholder: true },
  { name: "Kuvendi", placeholder: true },
  { name: "Banka", placeholder: true },
];

export function References() {
  return (
    <Section className="bg-section-alt">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12 lg:items-center">
        <div className="lg:col-span-2">
          <motion.div
            className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-[var(--shadow-hero)]"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Ekipi UNI PROJECT në projekt – bashkëpunim dhe rezultate"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60" />
          </motion.div>
        </div>
        <div className="lg:col-span-3">
          <motion.div
            className="text-center lg:text-left mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Projekte & Referenca
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Partnerë dhe projekte që na besojnë në të gjithë Kosovën.
            </p>
          </motion.div>
          <LogoWall logos={referenceLogos} />
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="/projekte"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
            >
              Shiko të gjitha projektet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
