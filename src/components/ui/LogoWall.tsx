"use client";

import { motion } from "framer-motion";

type Logo = { name: string; src?: string; placeholder?: boolean };

type LogoWallProps = {
  logos: Logo[];
  title?: string;
};

export function LogoWall({ logos, title }: LogoWallProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      {title && (
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </p>
      )}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        {logos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
          >
            {logo.placeholder || !logo.src ? (
              <div
                className="h-12 w-28 rounded-xl bg-white border border-slate-100 shadow-[var(--shadow-card)] flex items-center justify-center text-xs font-semibold text-muted-foreground hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                title={logo.name}
              >
                {logo.name}
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 object-contain max-w-[120px] rounded px-2 py-1"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
