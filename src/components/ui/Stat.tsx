"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type StatProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  index?: number;
};

export function Stat({ value, label, icon, index = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.33, 1, 0.68, 1] }}
      className="text-center rounded-card bg-surface border border-border px-6 py-8 shadow-soft transition-all duration-200 ease-out hover:border-primary/20"
    >
      {icon && (
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
          {icon}
        </div>
      )}
      <div className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
        {value}
      </div>
      <div className="text-sm text-muted-foreground mt-1.5 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
