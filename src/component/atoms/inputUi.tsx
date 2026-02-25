"use client";
import React from "react";

export interface InputUiProps {
  label: string;
  type?: "text" | "email" | "password" | "number";
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
}

const InputUi: React.FC<InputUiProps> = ({
  label,
  type = "text",
  icon,
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
  error = false,
  helperText = "",
}) => {
  return (
    <div className={`${className}`}>
      <label className="block mb-1 font-medium text-white text-sm">{label}</label>
      <div className="relative">
        {icon && (
          <span className="left-0 absolute inset-y-0 flex items-center pl-3 text-gray-500 text-lg">
            {icon}
          </span>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            pl-[40px] pr-6 py-4
            bg-[#1F1F1F] text-white w-full rounded-sm
            focus:outline-none focus:ring-2 text-sm
            ${error ? "border border-red-500 focus:ring-red-500 focus:border-red-500" : "focus:ring-green-500 focus:border-green-500"}
          `}
        />
      </div>
      {error && <p className="mt-1 text-red-500 text-sm">{helperText}</p>}
    </div>
  );
};

export default InputUi;
