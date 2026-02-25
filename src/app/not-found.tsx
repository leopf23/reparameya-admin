"use client";
import Image from "next/image";
import Button from "@/component/atoms/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-4 min-h-screen text-center">
      <Image src="/404-2.png" alt="404" width={520} height={80} priority />
      <p className="my-5 mb-8 font-semibold text-white text-2xl">
        Oops, no encontramos la página que buscas.
      </p>
      <Link href="/">
        <Button label="Volver al inicio" />
      </Link>
    </div>
  );
}
