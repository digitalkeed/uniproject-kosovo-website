"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

export type IconCardItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type IconCardProps = {
  item: IconCardItem;
  index?: number;
  className?: string;
};

export function IconCard({ item, index = 0, className = "" }: IconCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className={`group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:border-primary/20 hover:-translate-y-1 ${className}`}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {item.icon}
      </div>
      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

type IconCardGridProps = {
  items: IconCardItem[];
  columns?: 2 | 3 | 4;
};

export function IconCardGrid({
  items,
  columns = 4,
}: IconCardGridProps) {
  const gridClass =
    columns === 4
      ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        : "grid gap-6 sm:grid-cols-2";
  return (
    <div className={gridClass}>
      {items.map((item, i) => (
        <IconCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}
