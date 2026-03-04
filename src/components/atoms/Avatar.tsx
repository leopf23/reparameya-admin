"use client";

import type { ImgHTMLAttributes } from "react";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  /** URL de la imagen del avatar. Si no se proporciona, se muestran las iniciales. */
  src?: string | null;
  /** Texto para alt y para derivar iniciales cuando no hay src (ej: "Alexa Rawles" → "AR"). */
  alt?: string;
  /** Iniciales a mostrar cuando no hay imagen (ej: "AR"). Si no se pasa, se derivan de `alt`. */
  initials?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-16 w-16 text-lg",
};

function getInitials(alt?: string, initials?: string): string {
  if (initials) return initials.slice(0, 2).toUpperCase();
  if (!alt || !alt.trim()) return "?";
  const parts = alt.trim().split(/\s+/);
  if (parts.length >= 2)
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return parts[0].slice(0, 2).toUpperCase();
}

export function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  className = "",
  ...imgProps
}: AvatarProps) {
  const initialText = getInitials(alt, initials);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
        {...imgProps}
      />
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium ${sizeClasses[size]} ${className}`}
      aria-hidden
    >
      {initialText}
    </div>
  );
}
