"use client";

import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-(--color-accent) text-white hover:bg-(--color-accent-hover) border-transparent",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 border-transparent",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 border-transparent",
  outline:
    "bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium
        transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-60
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
