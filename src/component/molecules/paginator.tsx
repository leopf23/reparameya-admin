"use client";
import React from "react";

interface PaginatorProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
  currentPage = 3,
  totalPages = 4,
  onPageChange = () => {},
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px h-10 text-base">
        <li>
          <button
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            className="flex justify-center items-center bg-white dark:bg-[#222222] dark:hover:bg-[#00B66A] ms-0 px-4 rounded-s-lg h-10 text-gray-500 hover:text-gray-700 dark:hover:text-white dark:text-gray-400 leading-tight"
          >
            Anterior
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                page === currentPage
                  ? "text-blue-600 cursor-pointer hover:bg-gray-700 dark:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 bg-[#131313] dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              } border-gray-300 dark:border-gray-700`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            className="flex justify-center items-center dark:bg-[#222222] dark:hover:bg-[#00B66A] px-4 rounded-e-lg h-10 text-gray-500 hover:text-gray-700 dark:hover:text-white dark:text-gray-400 leading-tight"
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};
