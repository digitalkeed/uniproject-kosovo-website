"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { CTA } from "@/components/ui/CTA";
import type { Project } from "@/content/projects";

type SectorOption = { value: string; label: string };
type TypeOption = { value: "case-study" | "reference"; label: string };

type Props = {
  projects: Project[];
  sectorOptions: SectorOption[];
  typeOptions: TypeOption[];
};

export function ProjectsHubClient({
  projects,
  sectorOptions,
  typeOptions,
}: Props) {
  const [sector, setSector] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (sector && p.sector !== sector) return false;
      if (typeFilter && p.type !== typeFilter) return false;
      return true;
    });
  }, [projects, sector, typeFilter]);

  return (
    <>
      <Section className="py-14 bg-section-alt">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Zgjidhni projektin
          </h2>
          <p className="mt-2 text-muted-foreground max-w-content mx-auto">
            Projekte me afat dhe case studies nga eksperienca jonë.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <span className="text-sm font-semibold text-muted-foreground self-center mr-1">
            Sektor:
          </span>
          <button
            type="button"
            onClick={() => setSector("")}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
              sector === ""
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-white text-foreground hover:bg-slate-50 border border-slate-100 shadow-[var(--shadow-card)]"
            }`}
          >
            Të gjitha
          </button>
          {sectorOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSector(opt.value)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                sector === opt.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-white text-foreground hover:bg-slate-50 border border-slate-100 shadow-[var(--shadow-card)]"
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="text-sm font-semibold text-muted-foreground self-center ml-6 mr-1">
            Lloji:
          </span>
          <button
            type="button"
            onClick={() => setTypeFilter("")}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
              typeFilter === ""
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-white text-foreground hover:bg-slate-50 border border-slate-100 shadow-[var(--shadow-card)]"
            }`}
          >
            Të gjitha
          </button>
          {typeOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setTypeFilter(opt.value)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                typeFilter === opt.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-white text-foreground hover:bg-slate-50 border border-slate-100 shadow-[var(--shadow-card)]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <CardGrid
          items={filtered}
          renderCard={(p) => (
            <Card key={p.slug} href={`/projekte/${p.slug}`} variant="service">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              {p.sector && (
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                  {sectorOptions.find((s) => s.value === p.sector)?.label ?? p.sector}
                </p>
              )}
              <p className="mt-2 text-sm text-muted-foreground">
                {typeOptions.find((t) => t.value === p.type)?.label} {p.period && ` · ${p.period}`}
              </p>
              {p.shortDescription && (
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {p.shortDescription}
                </p>
              )}
            </Card>
          )}
        />
      </Section>
      <CTA
        title="Dëshironi të diskutoni një projekt?"
        description="Na tregoni për objektin tuaj dhe do të ju kontaktojmë me një ofertë të përshtatshme."
        primaryLabel="Kerko oferte"
        primaryHref="/kontakt"
        secondaryLabel="Shiko shërbimet"
        secondaryHref="/sherbimet"
      />
    </>
  );
}
