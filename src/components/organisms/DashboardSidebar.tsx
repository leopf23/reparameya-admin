"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronRight } from "react-icons/hi2";
import { dashboardNav } from "@/config/dashboardNav";

const sidebarLinkBase =
  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-out hover:translate-x-0.5 active:scale-[0.99]";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>("Técnicos");

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-gray-50">
      {/* User */}
      <div className="flex items-center gap-3 border-b border-gray-200 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">
          <span className="text-lg font-medium">LP</span>
        </div>
        <span className="truncate text-sm font-medium text-gray-900">
          Leonardo Perez
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3">
        {dashboardNav.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {section.title}
            </h3>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.children?.some((c) => c.href === pathname) ?? false);
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = openSection === item.label;

                return (
                  <li key={item.href}>
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setOpenSection(isOpen ? null : item.label)
                          }
                          className={`${sidebarLinkBase} w-full justify-between text-gray-700 hover:bg-gray-200/80 hover:text-gray-900`}
                        >
                          <span className="flex items-center gap-3">
                            <item.icon className="size-5 shrink-0 text-gray-500" />
                            {item.label}
                          </span>
                          <HiChevronRight
                            className={`size-4 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <ul className="ml-4 mt-0.5 space-y-0.5 border-l border-gray-200 pl-3">
                            {item.children!.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={`${sidebarLinkBase} -ml-px border-l-2 border-transparent pl-3 text-gray-600 hover:bg-gray-200/60 hover:text-gray-900 ${
                                      childActive
                                        ? "border-(--color-accent) bg-blue-50/50 text-(--color-accent)"
                                        : ""
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`${sidebarLinkBase} text-gray-700 hover:bg-gray-200/80 hover:text-gray-900 ${
                          isActive
                            ? "bg-gray-200 text-gray-900"
                            : ""
                        }`}
                      >
                        <item.icon className="size-5 shrink-0 text-gray-500" />
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Logo */}
      <div className="border-t border-gray-200 p-4">
        <Link
          href="/"
          className="flex items-center gap-1 font-semibold text-gray-900"
        >
          <span className="text-2xl font-bold text-(--color-accent)">R</span>
          <span>eparameYa!</span>
        </Link>
      </div>
    </aside>
  );
}
