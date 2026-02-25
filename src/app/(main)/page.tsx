import { Text } from "@/components/atoms";
import { Card } from "@/components/molecules";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Text variant="h1" as="h1" className="mb-2">
        Bienvenido
      </Text>
      <Text variant="muted" className="mb-8">
        Panel de administración. Inicia sesión para continuar.
      </Text>
      <Card className="max-w-md">
        <Text variant="body" className="mb-4">
          Proyecto Next.js con Tailwind y Atomic Design. Ligero y sin dependencias
          extra.
        </Text>
        <Link
          href="/login"
          className="inline-block text-sm font-medium text-(--color-accent) hover:underline"
        >
          Ir a login →
        </Link>
      </Card>
    </div>
  );
}
