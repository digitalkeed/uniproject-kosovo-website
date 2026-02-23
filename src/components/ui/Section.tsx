import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: "section" | "div";
};

export function Section({
  children,
  className = "",
  innerClassName = "",
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`py-section px-container-px ${className}`}
    >
      <div
        className={`mx-auto max-w-container w-full ${innerClassName}`}
      >
        {children}
      </div>
    </Component>
  );
}
