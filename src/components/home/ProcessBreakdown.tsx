"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Zgjidhje të qëndrueshme",
    description:
      "Teknika dhe praktika që ruajnë cilësinë dhe mjedisin, pa kompromentuar rezultatet.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Praktika efikase",
    description: "Ekzekutim me supervizim dhe përdorim efikas të burimeve.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Raportim dhe transparencë",
    description: "Evidencë dixhitale dhe raportim i qartë për çdo hap të projektit.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    featured: false,
  },
];

export function ProcessBreakdown() {
  return (
    <Section id="si-punojme" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12 lg:items-start">
        <div className="lg:col-span-3 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Qendra e shërbimeve për objekte dhe facility management
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Prej pastrimit te mirembajtja teknike, ekipi ynë kujdeset për çdo
              nevojë të hapësirës suaj – shpejt, profesionalisht dhe me
              standarde të larta.
            </p>
          </motion.div>

          <div className="space-y-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={card.featured ? "/teknologjia" : "/si-operojme"}
                  className={`flex items-start gap-4 rounded-[1.25rem] p-5 transition-all duration-300 ${
                    card.featured
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25"
                      : "bg-white hover:bg-slate-50 border border-slate-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                  }`}
                >
                  <span
                    className={`shrink-0 flex h-11 w-11 items-center justify-center rounded-xl ${
                      card.featured ? "bg-white/20" : "bg-white text-primary"
                    }`}
                  >
                    {card.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">{card.title}</h3>
                    {card.description && (
                      <p
                        className={`mt-1 text-sm ${
                          card.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                        }`}
                      >
                        {card.description}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 mt-1">
                    <svg
                      className={`w-5 h-5 ${card.featured ? "text-white" : "text-foreground"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.div
            className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-[var(--shadow-hero)] bg-muted/30"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Objekt profesional – pastrim dhe menaxhim i hapësirës"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
