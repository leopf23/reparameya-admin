"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputSearch from "@/component/atoms/inputSearch";
import { CardCourse } from "@/component/molecules/cardCourse";
import { Paginator } from "@/component/molecules/paginator";

const cursos = [
  { title: "Curso de Trading Básico", description: "Aprende los fundamentos del trading desde cero.", price: "Free", imageSrc: "/profileCourse.jpg", link: "/detail-course" },
  { title: "Curso de Análisis Técnico", description: "Domina el análisis técnico para mejorar tus decisiones.", price: "$49.99", imageSrc: "/profileCourse.jpg", link: "/detail-course" },
  { title: "Curso de Psicología del Trading", description: "Controla tus emociones y mejora tu rendimiento.", price: "$29.99", imageSrc: "/profileCourse.jpg", link: "/detail-course" },
  { title: "Curso de Trading Básico", description: "Aprende los fundamentos del trading desde cero.", price: "Free", imageSrc: "/profileCourse.jpg", link: "/detail-course" },
  { title: "Curso de Análisis Técnico", description: "Domina el análisis técnico.", price: "$49.99", imageSrc: "/profileCourse.jpg", link: "/detail-course" },
  { title: "Curso de Psicología del Trading", description: "Controla tus emociones.", price: "$29.99", imageSrc: "/profileCourse.jpg", link: "/detail-course" },
];

export default function AulaVirtualPage() {
  const [filteredCourses, setFilteredCourses] = useState(cursos);

  const handleSearch = (query: string, category: string) => {
    const q = query.toLowerCase();
    const filtered = cursos.filter((curso) => {
      const matchesQuery =
        curso.title.toLowerCase().includes(q) || curso.description.toLowerCase().includes(q);
      const matchesCategory =
        category === "Todos" ||
        (category === "Gratis" && curso.price.toLowerCase() === "free") ||
        (category === "Licencia" && curso.price.toLowerCase() !== "free");
      return matchesQuery && matchesCategory;
    });
    setFilteredCourses(filtered);
  };

  return (
    <div className="my-15">
      <div className="mb-7 text-center">
        <h1 className="font-black text-4xl">Aula Virtual</h1>
        <p className="text-primary">Cursos Disponibles</p>
      </div>

      <div className="center-component">
        <InputSearch onSearch={handleSearch} />
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-15">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((curso, index) => (
            <CardCourse
              key={index}
              title={curso.title}
              description={curso.description}
              price={curso.price}
              imageSrc={curso.imageSrc}
              link={curso.link}
            />
          ))
        ) : (
          <p className="col-span-full mt-10 text-white text-lg text-center center-component">
            <Image src="/kamaleon04.svg" alt="No results" width={220} height={80} priority />
            No se encontraron cursos que coincidan con tu búsqueda.
          </p>
        )}
      </div>

      <div className="mt-20 center-component">
        <Paginator />
      </div>
    </div>
  );
}
