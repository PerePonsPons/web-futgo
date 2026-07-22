import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <article className="rounded-lg border p-6">{children}</article>;
}
