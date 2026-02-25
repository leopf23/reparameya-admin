"use client";
import React, { useState } from "react";

type Props = {
  onSearch: (query: string, category: string) => void;
};

export default function InputSearch({ onSearch }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
    onSearch(searchTerm, category);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, selectedCategory);
  };

  return (
    <form className="md:max-w-lg" onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex z-10 items-center bg-[#181818] hover:bg-[#303030] px-4 py-2.5 rounded-s-lg text-white text-sm"
        >
          {selectedCategory}
          <svg className="ms-2.5 w-2.5 h-2.5" viewBox="0 0 10 6">
            <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
        {isOpen && (
          <ul className="z-10 absolute bg-[#1F1F1F] mt-1 rounded-lg w-44 text-white text-sm">
            {["Todos", "Gratis", "Licencia"].map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => handleCategorySelect(cat)}
                  className="hover:bg-gray-600 px-4 py-2 w-full"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="relative w-full">
          <input
            type="search"
            value={searchTerm}
            onChange={handleInputChange}
            className="block bg-[#202020] p-2.5 border border-[#181818] rounded-e-lg w-full text-white text-sm"
            placeholder="Buscar cursos"
          />
          <button
            type="submit"
            className="top-0 right-0 absolute bg-primary px-3 rounded-e-lg h-full text-white"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20">
              <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
