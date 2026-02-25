"use client";
import React from "react";
import InputUi from "@/component/atoms/inputUi";
import { CgMail } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import Image from "next/image";
import Button from "@/component/atoms/button";

export default function FormRegister() {
  return (
    <div>
      <main className="z-10 relative flex flex-col gap-[32px] row-start-2 bg-secondary p-5 rounded-xl w-auto md:h-[610px] h-[800px] transition-all duration-500 ease-in-out">
        <div className="mb-3">
          <h1 className="font-bold text-2xl">Registro de usuario</h1>
          <p className="mt-1 text-[#DADADA] text-[0.9rem]">Completa el formulario para realizar su compra</p>
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <InputUi label="Nombre de usuario" type="text" icon={<FaRegUser />} />
          <InputUi label="Apellido" type="text" />
          <div className="md:col-span-2">
            <InputUi label="Correo electrónico" type="email" icon={<CgMail />} />
          </div>
          <InputUi label="Contraseña" type="password" icon={<CiLock />} />
          <InputUi label="Confirmar Contraseña" type="password" icon={<CiLock />} />
        </div>
        <div className="flex justify-end">
          <Button label="Registrarse" />
        </div>
        <Image className="top-[-98px] right-10 relative" src="/kamaleon01.png" alt="Deco" width={200} height={80} priority />
      </main>
    </div>
  );
}
