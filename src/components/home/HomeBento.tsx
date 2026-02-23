"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

const bentoSlugs = ["pastrim-profesional", "facility-management", "on-call"] as const;

export function HomeBento() {
  const items = bentoSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as typeof services;

  return (
    <Section className="py-section bg-section-alt">
      <div className="text-center mb-ds-56">
        <p className="text-label text-muted-foreground">Shërbimet</p>
        <h2 className="mt-3 text-h2 text-foreground">
          3 shtylla – një partner
        </h2>
        <p className="mt-4 text-muted-foreground max-w-prose mx-auto leading-relaxed">
          Pastrim profesional, menaxhim i objekteve dhe gatishmëri 24/7 për çdo nevojë.
        </p>
      </div>
      <div className="grid gap-ds-24 lg:grid-cols-2 lg:gap-ds-32">
        {items[0] && (
          <div className="lg:row-span-2 min-h-[280px]">
            <ServiceCard service={items[0]} />
          </div>
        )}
        {items.slice(1, 3).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="mt-ds-40 text-center">
        <Link
          href="/sherbimet"
          className="inline-flex items-center gap-2 rounded-button border-2 border-primary text-primary font-semibold px-5 py-2.5 text-sm hover:bg-primary/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Shiko të gjitha shërbimet
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
