import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-(--color-bg) px-4">
      <h1 className="text-2xl font-semibold text-gray-900">404</h1>
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
