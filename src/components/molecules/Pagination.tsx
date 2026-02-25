"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface PaginationProps {
  totalPages: number;
  className?: string;
}

export function Pagination({ totalPages, className = "" }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Math.min(
    Math.max(1, parseInt(searchParams.get("page") ?? "1", 10)),
    totalPages
  );

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  const showPages = 5;
  let start = Math.max(1, currentPage - Math.floor(showPages / 2));
  let end = Math.min(totalPages, start + showPages - 1);
  if (end - start + 1 < showPages) start = Math.max(1, end - showPages + 1);
  const pages: (number | "ellipsis")[] = [];
  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push("ellipsis");
  }
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push("ellipsis");
    pages.push(totalPages);
  }

  return (
    <nav
      className={`flex flex-wrap items-center justify-center gap-1 sm:gap-2 ${className}`}
      aria-label="Paginación"
    >
      <button
        type="button"
        onClick={() => goToPage(1)}
        disabled={currentPage <= 1}
        className="rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Primera página"
      >
        &laquo;
      </button>
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Página anterior"
      >
        &lsaquo;
      </button>
      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e-${i}`} className="px-2 text-gray-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => goToPage(p)}
            className={`min-w-9 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
              p === currentPage
                ? "border-(--color-accent) bg-(--color-accent) text-white"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Página siguiente"
      >
        &rsaquo;
      </button>
      <button
        type="button"
        onClick={() => goToPage(totalPages)}
        disabled={currentPage >= totalPages}
        className="rounded-lg border border-gray-200 bg-white p-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Última página"
      >
        &raquo;
      </button>
    </nav>
  );
}
