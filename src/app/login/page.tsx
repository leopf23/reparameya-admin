"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import { FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Image from 'next/image'


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9._-]+$/;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const validEmail = emailRegex.test(email);
  const validUsername = usernameRegex.test(email);
  const isEmailValid = validEmail || validUsername || email === "";
  const isFormValid = (validEmail || validUsername) && password.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validUser = "admin";
    const validEmailValue = "admin@reparameya.com";
    const validPassword = "password";

    if (
      (email === validUser || email === validEmailValue) &&
      password === validPassword
    ) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "usuario",
          JSON.stringify({ nombre: "Admin", correo: validEmailValue })
        );
      }
      router.push("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel: añade tu imagen (ej. del obrero) en public/login-hero.jpg */}
      <div className="hidden lg:block relative w-1/2 min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url(/bg-login.jpg)",
            backgroundColor: "#1e3a5f",
          }}
        />
        <div className="absolute inset-0 bg-[#0046FD]/70" />

      </div>

      {/* Right panel: white form */}
      <div className="flex flex-1 justify-center items-center bg-white px-6 py-12">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-gray-900 text-xl"
            >
              <Image
                src="/logo-full.png"
                width={160}
                height={160}
                alt="Picture of the author"
              />
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="[&_input]:bg-gray-50 [&_input]:border-gray-200 [&_label]:text-gray-500">
              <InputField
                label="Login"
                type="text"
                placeholder="Introducir correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!isEmailValid && email.length > 0}
                helperText={
                  !isEmailValid && email.length > 0
                    ? "Correo o usuario no válido"
                    : undefined
                }
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1.5 font-medium text-gray-500 text-sm"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Introducir contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 px-3 py-2.5 pr-10 border border-gray-200 focus:border-[#2563eb] rounded-lg focus:outline-none focus:ring-[#2563eb]/20 focus:ring-2 w-full text-gray-900 text-sm placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="top-1/2 right-3 absolute text-gray-400 hover:text-gray-600 -translate-y-1/2"
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <button
                  type="button"
                  role="switch"
                  aria-checked={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`relative h-6 w-11 shrink-0 rounded-full border border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 ${rememberMe ? "bg-[#0046FD]" : "bg-gray-200"
                    }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${rememberMe ? "translate-x-5" : "translate-x-0"
                      }`}
                  />
                </button>
                <span className="text-gray-600">Recuérdame</span>
              </label>
              <Link
                href="/recuperar-password"
                className="font-medium text-[#2563eb] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] py-3 rounded-lg w-full font-semibold text-white"
              disabled={!isFormValid}
            >
              Iniciar sesión
            </Button>

            <Button
              type="button"
              className="flex justify-center items-center gap-2 bg-gray-700 hover:bg-gray-600 py-3 border-2 border-gray-300 rounded-lg w-full font-medium text-white"
            >
              <FaGoogle className="w-5 h-5" />
              O iniciar sesión con Google
            </Button>
          </form>

          <p className="mt-8 text-gray-600 text-sm text-center">
            ¿Aún no tienes cuenta?{" "}
            <Link
              href="/registro"
              className="font-medium text-[#2563eb] underline hover:no-underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
