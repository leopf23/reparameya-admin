"use client";
import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import Button from "@/component/atoms/button";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-20">
      <hr className="py-20 border-[#1c1b1b]" />
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image src="/logo.svg" alt="Logo" width={280} height={80} priority />
          <p className="mt-5 text-base/8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis aut, dicta sapiente non laborum!
            Provident saepe asperiores cum quasi, earum culpa, ex recusandae animi aspernatur ipsa incidunt quos ipsum?
          </p>
          <div>
            <p className="mt-10 font-bold text-2xl">Síguenos en</p>
            <div className="flex gap-5 mt-2 text-primary">
              <FaDiscord size={30} />
              <FaFacebookF size={30} />
              <AiFillInstagram size={30} />
              <BsTwitterX size={30} />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl">Soporte Técnico</p>
          <div className="block md:flex gap-2 my-4">
            <CiMail size={24} />
            soporte@reparameya.com
          </div>
          <Button label="Aula Virtual" />
        </div>
      </div>
    </div>
  );
}
