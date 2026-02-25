"use client";
import React from "react";

export interface ButtonProps {
  label: string;
  color?: "primary" | "secondary" | "line" | "dark" | "success" | "danger";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  width?: string;
  disabled?: boolean;
}

const colorClasses: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark transition-shadow duration-300 hover:shadow-[0_0_20px_#00B66A]",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white",
  dark: "bg-[#222222] hover:bg-black",
  success: "bg-green-600 hover:bg-green-700 text-white",
  line: "border border-primary rounded-md text-primary transition-shadow duration-300 hover:shadow-[0_0_20px_#00B66A]",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

const Button: React.FC<ButtonProps> = ({
  label,
  color = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  width = "w-40",
  disabled = false,
}) => {
  const baseStyle = `
    inline-flex items-center justify-center gap-2
    px-0 py-3 rounded-sm
    transition-all duration-200
    ${width} min-w-min
    ${disabled ? "bg-[#525050] text-white cursor-not-allowed opacity-70" : "cursor-pointer"}
  `;
  const buttonClasses = `
    ${baseStyle}
    ${!disabled ? colorClasses[color] : ""}
    ${className}
  `;
  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses.trim()}>
      {startIcon && <span className="text-lg">{startIcon}</span>}
      <span className="truncate">{label}</span>
      {endIcon && <span className="text-lg">{endIcon}</span>}
    </button>
  );
};

export default Button;
