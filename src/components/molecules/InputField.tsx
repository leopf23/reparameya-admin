"use client";

import { Input } from "@/components/atoms";
import type { InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  helperText?: string;
}

export function InputField({
  label,
  id,
  error = false,
  helperText,
  className = "",
  ...inputProps
}: InputFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s/g, "-");
  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="mb-1.5 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <Input id={inputId} error={error} {...inputProps} />
      {error && helperText && (
        <p className="mt-1 text-xs text-red-500">{helperText}</p>
      )}
    </div>
  );
}
