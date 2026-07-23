import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section className={`py-16 ${className}`} {...props}>
      {children}
    </section>
  );
}
