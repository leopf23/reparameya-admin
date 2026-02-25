import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-background px-4 min-h-screen">
      <h1 className="font-semibold text-gray-900 text-2xl">404</h1>
      <p className="text-gray-600">Página no encontrada.</p>
      <Link
        href="/"
        className="text-sm font-medium text-(--color-accent) hover:underline"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
