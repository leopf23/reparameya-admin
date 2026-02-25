"use client";
import React from "react";
import Image from "next/image";
import Button from "@/component/atoms/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface InfoSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
  buttonUrl: string;
  reverse?: boolean;
}

export default function InfoSection({
  title,
  description,
  imageSrc,
  buttonLabel,
  buttonUrl,
  reverse = false,
}: InfoSectionProps) {
  const router = useRouter();
  return (
    <div>
      <div className={`block md:flex justify-between items-center content-center my-45 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <div className="w-auto md:w-[600px]">
          <h1 className="mb-2 font-bold text-4xl">{title}</h1>
          <p className="mb-6 text-base/8">{description}</p>
          <Button label={buttonLabel} onClick={() => router.push(buttonUrl)} />
        </div>
        <motion.div whileHover={{ scale: 1.1, rotate: 2 }}>
          <Image
            src={imageSrc}
            alt={title}
            className="mt-10 md:mt-0 w-[200px] md:w-[340px]"
            width={340}
            height={200}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
