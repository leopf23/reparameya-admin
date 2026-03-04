"use client";

import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: boolean;
  className?: string;
}

export function Select({
  options,
  error = false,
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      className={`
        w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 pr-9 text-sm text-gray-900
        focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-0 focus:border-transparent
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
        appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-size-[1.25rem_1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat
        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-200"}
        ${className}
      `}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
