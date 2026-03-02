"use client";

import { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";

export interface SidebarModalProps {
  /** Si el sidebar está abierto */
  isOpen: boolean;
  /** Callback al cerrar (botón X o overlay) */
  onClose: () => void;
  /** Título del header */
  title: string;
  /** Contenido del body */
  children: React.ReactNode;
  /** Ancho del panel (ej: "28rem", "400px"). Por defecto 28rem */
  width?: string;
  /** Cerrar al hacer clic en el overlay */
  closeOnOverlayClick?: boolean;
  /** Clases adicionales para el panel */
  className?: string;
}

export function SidebarModal({
  isOpen,
  onClose,
  title,
  children,
  width = "28rem",
  closeOnOverlayClick = true,
  className = "",
}: SidebarModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" aria-modal="true" role="dialog" aria-labelledby="sidebar-modal-title">
      {/* Overlay */}
      <button
        type="button"
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-label="Cerrar"
      />

      {/* Panel lateral */}
      <div
        className="relative flex flex-col h-full w-full max-w-[100vw] bg-white shadow-xl overflow-hidden animate-slide-in-right"
        style={{ width }}
      >
        {/* Header */}
        <div className="flex items-center justify-between shrink-0 border-b border-gray-200 px-5 py-4">
          <h2 id="sidebar-modal-title" className="font-semibold text-gray-900 text-lg">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
            aria-label="Cerrar"
          >
            <HiXMark className="size-5" />
          </button>
        </div>

        {/* Body con scroll */}
        <div className={`flex-1 overflow-y-auto px-5 py-4 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
