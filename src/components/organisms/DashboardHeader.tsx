"use client";

import { usePathname } from "next/navigation";
import { getBreadcrumbs } from "@/config/dashboardNav";
import { HiMagnifyingGlass, HiBell, HiCog6Tooth } from "react-icons/hi2";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b border-gray-200 bg-white px-4">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden"
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
        <nav className="flex items-center gap-1.5 text-sm text-gray-600">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-gray-400" aria-hidden>
                  /
                </span>
              )}
              <span
                className={
                  i === breadcrumbs.length - 1
                    ? "font-medium text-gray-900"
                    : "hover:text-gray-900"
                }
              >
                {crumb}
              </span>
            </span>
          ))}
        </nav>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <div className="relative hidden sm:block">
          <HiMagnifyingGlass className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-40 rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm placeholder-gray-400 focus:border-(--color-accent) focus:outline-none focus:ring-1 focus:ring-(--color-accent) sm:w-48"
          />
        </div>
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          aria-label="Notificaciones"
        >
          <HiBell className="size-5" />
        </button>
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          aria-label="Ajustes"
        >
          <HiCog6Tooth className="size-5" />
        </button>
      </div>
    </header>
  );
}
