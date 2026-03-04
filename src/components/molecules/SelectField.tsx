"use client";

import { Select } from "@/components/atoms/Select";
import type { SelectOption } from "@/components/atoms/Select";
import type { SelectHTMLAttributes } from "react";

export interface SelectFieldProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  label: string;
  options: SelectOption[];
  error?: boolean;
  helperText?: string;
  className?: string;
}

export function SelectField({
  label,
  id,
  options,
  error = false,
  helperText,
  className = "",
  ...selectProps
}: SelectFieldProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s/g, "-");
  return (
    <div className={className}>
      <label
        htmlFor={selectId}
        className="mb-1.5 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <Select id={selectId} options={options} error={error} {...selectProps} />
      {error && helperText && (
        <p className="mt-1 text-xs text-red-500">{helperText}</p>
      )}
    </div>
  );
}
