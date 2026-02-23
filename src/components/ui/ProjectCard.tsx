"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

const placeholder =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";

type ProjectCardProps = {
  project: Project;
  sectorLabel?: string;
  typeLabel?: string;
};

export function ProjectCard({ project, sectorLabel, typeLabel }: ProjectCardProps) {
  const imgSrc = project.image ?? placeholder;
  const metric = project.resultMetric ?? project.period ?? typeLabel;

  return (
    <Link
      href={`/projekte/${project.slug}`}
      className="group block rounded-card bg-surface border border-border overflow-hidden shadow-soft transition-all duration-200 hover:shadow-soft hover:border-border-strong hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-[var(--card-padding)]">
        {project.sector && (
          <span className="text-label text-muted-foreground">
            {sectorLabel ?? project.sector}
          </span>
        )}
        <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
          {project.name}
        </h3>
        {metric && (
          <p className="mt-1 text-sm text-muted-foreground">
            {metric}
          </p>
        )}
        {project.shortDescription && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
          Shiko më shumë
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
