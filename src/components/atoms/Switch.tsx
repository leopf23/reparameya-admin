"use client";

import type { InputHTMLAttributes } from "react";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: boolean;
  className?: string;
}

export function Switch({
  label,
  description,
  error = false,
  className = "",
  id,
  ...props
}: SwitchProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s/g, "-") : undefined);
  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="group flex cursor-pointer items-center justify-between gap-4"
      >
        <span className="flex flex-col gap-0.5">
          {label && (
            <span className="text-sm font-medium text-gray-700">{label}</span>
          )}
          {description && (
            <span className="text-xs text-gray-500">{description}</span>
          )}
        </span>
        <span className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-gray-200 bg-gray-100 transition-colors group-has-checked:bg-(--color-accent) group-has-focus:outline-none group-has-focus:ring-2 group-has-focus:ring-(--color-accent) group-has-focus:ring-offset-2 group-has-disabled:cursor-not-allowed group-has-disabled:opacity-60">
          <input
            type="checkbox"
            role="switch"
            id={inputId}
            className="sr-only"
            {...props}
          />
          <span className="pointer-events-none absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform group-has-checked:translate-x-5" aria-hidden />
        </span>
      </label>
    </div>
  );
}
