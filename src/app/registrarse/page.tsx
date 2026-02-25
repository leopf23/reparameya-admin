"use client";
import React from "react";
import FormRegister from "@/component/molecules/formRegister";
import { motion } from "framer-motion";

export default function RegistrarsePage() {
  return (
    <div className="p-3 md:p-0">
      <div className="relative flex justify-center min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
        <div className="absolute inset-0 bg-[url('/background-section.svg')] bg-cover bg-center opacity-90" />
        <div className="top-5 md:top-10 z-0 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FormRegister />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
