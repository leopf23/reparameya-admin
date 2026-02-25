"use client";
import React, { useState, ReactNode } from "react";

type AccordionItem = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-[#444447] w-full">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between items-center bg-[#3a3a3d] hover:bg-[#303032] p-4 w-full font-medium text-gray-700 dark:text-gray-300 text-left"
          >
            <span>{item.title}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="bg-[#212121] p-4 text-gray-600 dark:text-gray-300">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
