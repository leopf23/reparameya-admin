"use client";
import React from "react";
import Button from "@/component/atoms/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BannerHome() {
  return (
    <div>
      <Image
        src="/background.svg"
        className="top-0 right-[0px] absolute opacity-50 w-[2000px]"
        alt="Background"
        width={2000}
        height={200}
        priority
      />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <section className="relative flex flex-col justify-center items-center h-[500px] md:h-[780px] lg:h-[700px] 2xl:h-[900px] text-center">
          <div className="mb-10 font-semibold text-2xl md:text-5xl">
            Transforma <span className="text-primary">Tu Estrategia</span>
            <br />
            Financiera Con <span className="text-primary">Nosotros</span>
          </div>
          <div className="block md:flex gap-7 space-y-5">
            <div>
              <Link href="/aula-virtual">
                <Button label="Aula virtual" color="primary" />
              </Link>
            </div>
            <div>
              <Link href="/registrarse">
                <Button label="Registrar" color="line" />
              </Link>
            </div>
          </div>
        </section>
      </motion.h1>
    </div>
  );
}
