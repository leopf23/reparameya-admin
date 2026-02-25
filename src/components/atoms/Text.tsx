import type { HTMLAttributes } from "react";

export type TextVariant = "h1" | "h2" | "body" | "small" | "muted";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  as?: "p" | "span" | "h1" | "h2";
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<TextVariant, string> = {
  h1: "text-2xl font-semibold text-gray-900",
  h2: "text-lg font-medium text-gray-900",
  body: "text-sm text-gray-700",
  small: "text-xs text-gray-600",
  muted: "text-sm text-gray-500",
};

export function Text({
  variant = "body",
  as: Component = "p",
  children,
  className = "",
  ...props
}: TextProps) {
  return (
    <Component className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
