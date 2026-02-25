"use client";
import BannerHome from "@/component/molecules/bannerHome";
import Image from "next/image";
import InfoSection from "@/component/molecules/infoSection";
import { motion } from "framer-motion";
import React from "react";
import { MdOutlineAccessAlarms, MdSpeed } from "react-icons/md";
import Link from "next/link";
import Button from "@/component/atoms/button";

export default function Home() {
  return (
    <div>
      <BannerHome />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <InfoSection
          title="Educate"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem explicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem explicabo..."
          imageSrc="/kamaleon02.png"
          buttonUrl="/aula-virtual"
          buttonLabel="Aula virtual"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <InfoSection
          title="Herramientas"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem explicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem explicabo..."
          imageSrc="/kamaleon03.png"
          buttonLabel="Ver Más"
          buttonUrl="#"
          reverse
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="right-1/2 left-1/2 relative bg-[#000000] -mx-[50vw] my-30 px-6 py-20 w-screen">
          <div className="flex md:flex-row flex-col justify-center items-center gap-10 mx-auto max-w-7xl">
            <div className="flex items-center gap-2">
              <MdSpeed size={30} className="text-primary" />
              <p className="font-bold text-lg">VELOCIDAD</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineAccessAlarms size={30} className="text-primary" />
              <p className="font-bold text-lg">OPERACIÓN 24/7</p>
            </div>
            <div className="flex items-center gap-2">
              <MdSpeed size={30} className="text-primary" />
              <p className="font-bold text-lg">OPTIMIZACIÓN Y AJUSTES</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="block md:flex justify-between items-center content-center my-45">
        <div className="z-10 w-auto md:w-[600px]">
          <h1 className="mb-2 font-bold text-4xl">Nosotros</h1>
          <p className="mb-6 text-base/8">
            sit amet consectetur adipisicing elit. Exercitationem explicabo Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Exercitationem explicabo...
          </p>
          <Link href="/nosotros">
            <Button label="Nosotros" color="primary" />
          </Link>
        </div>
        <div className="z-10 hover:rotate-90 transition-transform duration-300">
          <Image src="/isoLogo.svg" alt="logo" className="mt-10 md:mt-0 w-[200px] md:w-[240px]" width={240} height={100} priority />
        </div>
      </div>

      <div className="top-2/1 2xl:top-[1800px] right-1/2 left-1/2 z-0 absolute -mx-[50vw] w-screen">
        <Image src="/vector-down.svg" alt="Vector" className="w-[1500px] 2xl:w-[2500px]" width={1500} height={80} priority />
      </div>
    </div>
  );
}
