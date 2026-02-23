"use client";

import Link from "next/link";
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
    <Wrapper
      href={href ?? "#"}
      className={`
        block rounded-card bg-surface border border-border
        shadow-soft
        transition-all duration-200 ease-out
        ${variant === "default" ? "p-[var(--card-padding)]" : "p-[var(--card-padding)]"}
        ${isService
          ? "group hover:shadow-soft hover:border-border-strong hover:-translate-y-0.5"
          : ""}
        ${!href ? "pointer-events-none" : "cursor-pointer"}
        ${className}
      `}
    >
      {children}
    </Wrapper>
  );
}
