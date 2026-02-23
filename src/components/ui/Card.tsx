"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  href?: string;
  variant?: "default" | "service";
  className?: string;
};

export function Card({
  children,
  href,
  variant = "default",
  className = "",
}: CardProps) {
  const Wrapper = href ? Link : "div";
  const isService = variant === "service";

  return (
    <motion.div
      whileHover={
        isService
          ? {
              y: -6,
              transition: { duration: 0.25, ease: [0.33, 1, 0.68, 1] },
            }
          : undefined
      }
      className={className}
    >
      <Wrapper
        href={href ?? "#"}
        className={`
          block rounded-card bg-surface border border-border
          shadow-card
          transition-all duration-normal ease-out
          ${isService
            ? "group p-6 hover:shadow-card-hover hover:border-primary/20 hover:bg-surface"
            : "p-6"}
          ${!href ? "pointer-events-none" : "cursor-pointer"}
        `}
      >
        {children}
      </Wrapper>
    </motion.div>
  );
}
