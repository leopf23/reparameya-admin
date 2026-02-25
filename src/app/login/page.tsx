"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/component/atoms/button";
import InputUi from "@/component/atoms/inputUi";
import Image from "next/image";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";
import { TbHomeMove } from "react-icons/tb";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9._-]+$/;
    const validEmail = emailRegex.test(email);
    const validUsername = usernameRegex.test(email);
    setIsEmailValid(validEmail || validUsername || email === "");
    setIsFormValid((validEmail || validUsername) && password.length > 0);
  }, [email, password]);

  const handleLogin = () => {
    const validUser = "michael01";
    const validEmail = "michael01@gmail.com";
    const validPassword = "password";

    if ((email === validUser || email === validEmail) && password === validPassword) {
      setIsExiting(true);
      setTimeout(() => {
        localStorage.setItem("usuario", JSON.stringify({ nombre: "Michael", correo: validEmail }));
        router.push("/");
      }, 500);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black opacity-75" />

      <main
        className={`z-10 relative flex flex-col items-center gap-[32px] row-start-2 bg-secondary p-12 rounded-xl w-auto md:w-[440px] h-[570px] transition-all duration-500 ease-in-out ${
          isExiting ? "opacity-0 translate-y-8" : "opacity-100"
        }`}
      >
        <div className="group top-5 left-4 absolute">
          <Link
            href="/"
            className="flex items-center hover:bg-[#222121] p-2 rounded-lg hover:text-green-500 transition-colors duration-300"
          >
            <TbHomeMove size={33} />
          </Link>
          <div className="top-1/2 left-full z-10 absolute bg-gray-900 opacity-0 group-hover:opacity-100 ml-2 px-3 py-2 rounded text-white text-sm whitespace-nowrap transition-opacity -translate-y-1/2 duration-300">
            Volver como visitante
          </div>
        </div>
        <div className="mt-[10px]">
          <Image src="/logo.svg" alt="Logo" width={220} height={80} priority />
        </div>

        <div>
          <InputUi
            label="Correo electrónico o nombre de usuario"
            type="text"
            icon={<FaUser />}
            placeholder="user@example.com"
            className="mb-5 w-auto md:w-[350px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!isEmailValid}
            helperText={!isEmailValid ? "user@example.com" : ""}
          />
          <InputUi
            label="Contraseña"
            type="password"
            icon={<RiLockPasswordFill />}
            placeholder="Ingresa tu contraseña"
            className="w-[280px] md:w-[350px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="space-y-5">
          <Button label="Login" color="primary" onClick={handleLogin} width="w-58" disabled={!isFormValid} />
          <div className="flex justify-center items-center gap-3 bg-[#525050] hover:bg-[#2c2a2a] p-2 py-3 rounded-sm cursor-pointer">
            <AiFillGoogleCircle size={30} />
            <p className="font-medium text-sm">Registrar con Google</p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center gap-4">
          <p>
            ¿Aún no tienes cuenta?{" "}
            <span className="text-primary">
              <Link href="/registrarse">
                <b>Regístrate</b>
              </Link>
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
