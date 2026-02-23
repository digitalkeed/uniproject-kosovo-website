import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "outlineInverse";
  className?: string;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center min-h-[var(--button-height)] px-6 rounded-button font-semibold text-base transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:bg-primary-hover hover:shadow-soft active:translate-y-0",
  secondary:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary/8 hover:border-primary/80 active:translate-y-0",
  ghost:
    "text-foreground hover:bg-muted",
  inverse:
    "bg-surface text-primary shadow-soft hover:bg-surface hover:shadow-soft active:translate-y-0",
  outlineInverse:
    "border-2 border-white text-white bg-transparent hover:bg-white/15",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
