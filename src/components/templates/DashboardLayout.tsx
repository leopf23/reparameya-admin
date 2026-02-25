"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/organisms/DashboardSidebar";
import { DashboardHeader } from "@/components/organisms/DashboardHeader";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Sidebar: oculto en móvil, visible en lg */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-gray-50 transition-transform duration-300 ease-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <DashboardSidebar />
      </div>

      {/* Overlay móvil */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Área principal: header + contenido */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-auto bg-(--color-bg) p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
