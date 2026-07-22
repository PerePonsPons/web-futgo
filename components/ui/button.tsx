import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`rounded-md border px-4 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
}
