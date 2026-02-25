"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export interface CardCourseProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  link: string;
}

export function CardCourse({ title, description, price, imageSrc, link }: CardCourseProps) {
  const router = useRouter();

  const handleClick = () => {
    const user = localStorage.getItem("usuario");
    if (user) {
      router.push(link);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-[#222222] shadow-sm rounded-lg w-auto h-full">
      <Image className="rounded-t-lg" src={imageSrc} alt={title} width={800} height={400} priority />
      <div className="flex flex-col flex-1 justify-between p-3">
        <div>
          <h1 className="font-semibold text-[1rem] line-clamp-2">{title}</h1>
          <p className="my-2 text-[#969393] text-sm line-clamp-3 leading-6">{description}</p>
          <h2 className="font-bold text-lg">{price}</h2>
        </div>
        <div className="mt-4">
          <motion.button
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300 }}
            className="group inline-flex items-center gap-2 bg-[#00B66A] hover:bg-[#008950] shadow-md px-6 py-2 rounded-lg font-medium text-white cursor-pointer"
            onClick={handleClick}
          >
            Iniciar Curso
            <motion.span variants={{ hover: { x: 5 } }} transition={{ type: "spring", stiffness: 300 }} className="inline-block">
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
