"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

export type ProcessStep = { title: string; description: string };

type ProcessTimelineProps = {
  steps: ProcessStep[];
  icons?: ReactNode[];
  variant?: "grid" | "vertical";
};

export function ProcessTimeline({
  steps,
  icons,
  variant = "grid",
}: ProcessTimelineProps) {
  if (variant === "vertical") {
    return (
      <div className="relative pl-2">
        <div
          className="absolute left-5 top-6 bottom-6 w-0.5 bg-primary/20 rounded-full"
          aria-hidden
        />
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
              className="relative flex gap-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-button z-10 [&_svg]:w-6 [&_svg]:h-6">
                {icons && icons[i] ? icons[i] : <span className="font-bold text-lg">{i + 1}</span>}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <h3 className="text-h3 text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
            className="group rounded-card bg-surface border border-border p-6 shadow-card transition-all duration-normal ease-out hover:shadow-card-hover hover:border-primary/15"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-button [&_svg]:w-6 [&_svg]:h-6">
                {icons && icons[i] ? icons[i] : <span>{i + 1}</span>}
              </div>
              <div className="min-w-0">
                <h3 className="text-h3 text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
