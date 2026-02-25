"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/atoms";
import { InputField } from "@/components/molecules";
import { Card } from "@/components/molecules";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9._-]+$/;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="flex justify-center items-center bg-background px-4 min-h-screen">
      <Card className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <Link href="/" className="font-semibold text-gray-900 text-xl">
            Reparameya
          </Link>
          <p className="mt-1 text-gray-500 text-sm">Inicia sesión en tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Correo o usuario"
            type="text"
            placeholder="Introduce correo o usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!isEmailValid && email.length > 0}
            helperText={
              !isEmailValid && email.length > 0
                ? "Correo o usuario no válido"
                : undefined
            }
          />
          <InputField
            label="Contraseña"
            type="password"
            placeholder="Introduce contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-(--color-accent) focus:ring-(--color-accent)"
                onChange={() => {}}
              />
              <span className="text-gray-600">Recuérdame</span>
            </label>
            <Link
              href="/recuperar-password"
              className="text-(--color-accent) hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={!isFormValid}
          >
            Iniciar sesión
          </Button>
        </form>

        <p className="mt-6 text-gray-500 text-sm text-center">
          ¿Sin cuenta?{" "}
          <Link
            href="/registro"
            className="font-medium text-(--color-accent) hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </Card>
    </div>
  );
}
