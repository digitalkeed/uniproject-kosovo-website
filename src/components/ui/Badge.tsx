import { type ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "primary" | "muted";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center justify-center rounded-button px-3 py-1.5 text-label font-medium";
  const variants = {
    default:
      "bg-surface border border-border text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.04)]",
    primary: "bg-primary/10 text-primary border border-primary/20",
    muted: "bg-muted text-muted-foreground",
  };
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
