"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
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

  const chipBase =
    "rounded-button px-4 py-2 text-sm font-medium min-h-[44px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  return (
    <Section className="py-section bg-section-alt">
      <div className="text-center mb-ds-56">
        <p className="text-label text-muted-foreground">Projekte</p>
        <h2 className="mt-3 text-h2 text-foreground">
          Zgjidhni projektin
        </h2>
        <p className="mt-4 text-muted-foreground max-w-prose mx-auto leading-relaxed">
          Projekte me afat dhe case studies nga eksperienca jonë.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-ds-12 mb-ds-40">
        <span className="text-label text-muted-foreground">Sektor:</span>
        <button
          type="button"
          onClick={() => setSector("")}
          className={`${chipBase} ${
            sector === ""
              ? "bg-primary text-primary-foreground shadow-soft"
              : "bg-surface border border-border text-foreground hover:border-border-strong"
          }`}
        >
          Të gjitha
        </button>
        {sectorOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setSector(opt.value)}
            className={`${chipBase} ${
              sector === opt.value
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-surface border border-border text-foreground hover:border-border-strong"
            }`}
          >
            {opt.label}
          </button>
        ))}
        <span className="text-label text-muted-foreground ml-ds-24">Lloji:</span>
        <button
          type="button"
          onClick={() => setTypeFilter("")}
          className={`${chipBase} ${
            typeFilter === ""
              ? "bg-primary text-primary-foreground shadow-soft"
              : "bg-surface border border-border text-foreground hover:border-border-strong"
          }`}
        >
          Të gjitha
        </button>
        {typeOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTypeFilter(opt.value)}
            className={`${chipBase} ${
              typeFilter === opt.value
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-surface border border-border text-foreground hover:border-border-strong"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="grid gap-ds-24 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard
            key={p.slug}
            project={p}
            sectorLabel={sectorOptions.find((s) => s.value === p.sector)?.label}
            typeLabel={typeOptions.find((t) => t.value === p.type)?.label}
          />
        ))}
      </div>
    </Section>
  );
}
