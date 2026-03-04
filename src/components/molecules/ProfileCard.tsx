"use client";

import type { ReactNode } from "react";
import { Avatar } from "@/components/atoms/Avatar";

export interface ProfileCardProps {
  /** URL de la foto o undefined para mostrar iniciales */
  avatarSrc?: string | null;
  /** Nombre completo (para alt del avatar y visualización) */
  name: string;
  /** Subtítulo, ej: email */
  subtitle?: string;
  /** Acción opcional (ej: botón "Editar") */
  action?: ReactNode;
  /** Tamaño del avatar */
  avatarSize?: "sm" | "md" | "lg";
  className?: string;
}

export function ProfileCard({
  avatarSrc,
  name,
  subtitle,
  action,
  avatarSize = "lg",
  className = "",
}: ProfileCardProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${className}`}
    >
      <Avatar
        src={avatarSrc}
        alt={name}
        size={avatarSize}
        className="shrink-0"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-gray-900">{name}</p>
        {subtitle && (
          <p className="truncate text-sm text-gray-500">{subtitle}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
