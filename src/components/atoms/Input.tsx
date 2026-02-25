"use client";

import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

export function Input({
  error = false,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`
        w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-0 focus:border-transparent
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-200"}
        ${className}
      `}
      {...props}
    />
  );
}
