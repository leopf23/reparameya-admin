import { Card } from "@/components/molecules/Card";

export default function NotificacionesPage() {
  return (
    <div className="flex flex-col flex-1 gap-6 min-w-0">
      <h1 className="font-semibold text-gray-900 text-xl sm:text-2xl">Notificaciones</h1>
      <Card className="p-6">
        <p className="text-gray-500 text-sm">Preferencias de notificaciones (próximamente).</p>
      </Card>
    </div>
  );
}
