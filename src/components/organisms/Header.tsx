"use client";

import Link from "next/link";

const navItems = [{ label: "Inicio", href: "/" }];

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Reparameya
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg border border-transparent bg-(--color-accent) px-4 py-2.5 text-sm font-medium text-white hover:bg-(--color-accent-hover) focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2"
          >
            Iniciar sesión
          </Link>
        </nav>
      </div>
    </header>
  );
}
