"use client";

import { useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { getBreadcrumbs } from "@/config/dashboardNav";
import { HiMagnifyingGlass, HiBell, HiCog6Tooth, HiArrowRightOnRectangle } from "react-icons/hi2";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const breadcrumbs = getBreadcrumbs(pathname);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCerrarSesion = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("usuario");
    }
    setSettingsOpen(false);
    router.push("/login");
  };

  return (
    <header className="top-0 z-10 sticky flex justify-between items-center gap-4 bg-white px-4 border-gray-200 border-b h-14">
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden flex justify-center items-center hover:bg-gray-100 rounded-lg size-10 text-gray-500 shrink-0"
          aria-label="Abrir menú"
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className="flex items-center gap-1.5 text-gray-600 text-sm" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={`${crumb.href}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-gray-400" aria-hidden>
                  /
                </span>
              )}
              {i === breadcrumbs.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="hidden sm:block relative">
          <HiMagnifyingGlass className="top-1/2 left-3 absolute size-4 text-gray-400 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            placeholder="Search"
            className="w-40 rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm placeholder-gray-400 focus:border-(--color-accent) focus:outline-none focus:ring-1 focus:ring-(--color-accent) sm:w-48"
          />
        </div>
        <button
          type="button"
          className="flex justify-center items-center hover:bg-gray-100 rounded-lg size-9 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Notificaciones"
        >
          <HiBell className="size-5" />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setSettingsOpen((v) => !v)}
            className={`flex justify-center items-center rounded-lg size-9 text-gray-500 transition-colors ${
              settingsOpen ? "bg-gray-100 text-gray-700" : "hover:bg-gray-100 hover:text-gray-700"
            }`}
            aria-label="Ajustes"
            aria-expanded={settingsOpen}
            aria-haspopup="true"
          >
            <HiCog6Tooth className="size-5" />
          </button>
          {settingsOpen && (
            <div
              className="right-0 top-full mt-1 absolute z-50 min-w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
              role="menu"
            >
              <Link
                href="/configuracion"
                role="menuitem"
                onClick={() => setSettingsOpen(false)}
                className="flex gap-2 items-center w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <HiCog6Tooth className="size-5 text-gray-400 shrink-0" />
                Configuración
              </Link>
              <button
                type="button"
                role="menuitem"
                onClick={handleCerrarSesion}
                className="flex gap-2 items-center w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <HiArrowRightOnRectangle className="size-5 text-gray-400 shrink-0" />
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
