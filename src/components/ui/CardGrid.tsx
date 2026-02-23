import { type ReactNode } from "react";

type CardGridProps<T> = {
  items: T[];
  renderCard: (item: T) => ReactNode;
  gridClass?: string;
};

export function CardGrid<T>({
  items,
  renderCard,
  gridClass = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
}: CardGridProps<T>) {
  return <div className={gridClass}>{items.map(renderCard)}</div>;
}
