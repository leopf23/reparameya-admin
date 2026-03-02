"use client";

import { useState, useMemo } from "react";
import { HiMagnifyingGlass, HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Card } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Pagination } from "@/components/molecules/Pagination";
import { SidebarModal } from "@/components/molecules/SidebarModal";

const TOTAL_PAGES = 10;

type PagoItem = {
  id: string;
  nombre: string;
  apellido: string;
  servicio: string;
  descripcionServicio: string;
  pagoServicio: number;
  pagoContratista: number;
};

const MOCK_PAGOS: PagoItem[] = [
  { id: "01", nombre: "Leonardo", apellido: "Perez Figueroa", servicio: "Pintar Apartamento", descripcionServicio: "Pintar apartamento en Santo domingo oeste en un 3r Piso", pagoServicio: 5000, pagoContratista: 4000 },
  { id: "02", nombre: "Emmanuel", apellido: "Aguiar pascual", servicio: "Plomeria", descripcionServicio: "Reparación de tuberías y instalación de sanitarios.", pagoServicio: 5000, pagoContratista: 4000 },
  { id: "03", nombre: "Jeremy", apellido: "Perez Figueroa", servicio: "Técnico industrial", descripcionServicio: "Mantenimiento y revisión de equipos industriales.", pagoServicio: 5000, pagoContratista: 4000 },
  { id: "04", nombre: "Juan Carlos", apellido: "Ramirez Cruz", servicio: "Técnico Aire AC", descripcionServicio: "Instalación y mantenimiento de aire acondicionado.", pagoServicio: 5000, pagoContratista: 4000 },
  { id: "05", nombre: "Alejandro", apellido: "Ramirez Peralta", servicio: "Barbero", descripcionServicio: "Servicio de barbería a domicilio.", pagoServicio: 5000, pagoContratista: 4000 },
];

const COMISION_PORCENTAJE = 20;

function formatRD(value: number) {
  return `RD $${value.toLocaleString("es-DO")}`;
}

function formatDOP(value: number) {
  return `DOP $${value.toLocaleString("es-DO")}`;
}

export default function PagosPage() {
  const [search, setSearch] = useState("");
  const [selectedPago, setSelectedPago] = useState<PagoItem | null>(null);

  const filteredPagos = useMemo(() => {
    if (!search.trim()) return MOCK_PAGOS;
    const q = search.toLowerCase();
    return MOCK_PAGOS.filter(
      (p) =>
        p.nombre.toLowerCase().includes(q) ||
        p.apellido.toLowerCase().includes(q) ||
        p.servicio.toLowerCase().includes(q) ||
        p.id.includes(q)
    );
  }, [search]);

  return (
    <div className="flex flex-col flex-1 gap-4 min-w-0">
      <h1 className="font-semibold text-gray-900 text-xl sm:text-2xl">Pagos</h1>

      {/* Tarjetas de resumen */}
      <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <p className="font-medium text-gray-500 text-sm">Ingresos total</p>
          <p className="mt-1 font-bold text-[#0046FD] text-2xl sm:text-3xl">{formatRD(100000)}</p>
        </Card>
        <Card className="p-4">
          <p className="font-medium text-gray-500 text-sm">Ingreso del mes</p>
          <p className="mt-1 font-bold text-gray-900 text-2xl sm:text-3xl">{formatRD(100000)}</p>
        </Card>
        <Card className="p-4">
          <p className="font-medium text-gray-500 text-sm">Pagado a empleados</p>
          <p className="mt-1 font-bold text-green-600 text-2xl sm:text-3xl">{formatRD(60000)}</p>
        </Card>
        <Card className="p-4">
          <p className="font-medium text-gray-500 text-sm">Balance pendiente</p>
          <p className="mt-1 font-bold text-[#0046FD] text-2xl sm:text-3xl">{formatRD(40000)}</p>
        </Card>
      </div>

      {/* Búsqueda */}
      <div className="relative">
        <HiMagnifyingGlass className="top-1/2 left-3 absolute size-5 text-gray-400 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="Buscar un pago"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pr-10 pl-10"
        />
        <button
          type="button"
          className="top-1/2 right-3 absolute hover:opacity-80 text-[#0046FD] -translate-y-1/2"
          aria-label="Filtros"
        >
          <HiAdjustmentsHorizontal className="size-5" />
        </button>
      </div>

      {/* Tabla */}
      <Card className="flex flex-col flex-1 p-0 min-h-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm text-left">
            <thead>
              <tr className="bg-gray-50/80 border-gray-200 border-b">
                <th className="px-4 py-3 font-semibold text-gray-700">ID</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Nombre</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Apellido</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Servicio Realizado</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Pago del servicio</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Pago a contratista</th>
                <th className="px-4 py-3 font-semibold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {filteredPagos.map((p, i) => (
                <tr
                  key={p.id}
                  className={`border-b border-gray-100 transition-colors hover:bg-gray-50/50 ${
                    i % 2 === 1 ? "bg-gray-50/30" : ""
                  }`}
                >
                  <td className="px-4 py-3 text-gray-600">{p.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{p.nombre}</td>
                  <td className="px-4 py-3 text-gray-700">{p.apellido}</td>
                  <td className="px-4 py-3 text-gray-700">{p.servicio}</td>
                  <td className="px-4 py-3 text-gray-700">{formatRD(p.pagoServicio)}</td>
                  <td className="px-4 py-3 text-gray-700">{formatRD(p.pagoContratista)}</td>
                  <td className="px-4 py-3">
                    <Button
                      variant="outline"
                      className="hover:bg-[#0046FD]/5 border-[#0046FD] text-[#0046FD] text-xs"
                      onClick={() => setSelectedPago(p)}
                    >
                      Ver detalle
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-3 border-gray-200 border-t">
          <Pagination totalPages={TOTAL_PAGES} />
        </div>
      </Card>

      {/* Sidebar detalle de pago */}
      <SidebarModal
        isOpen={!!selectedPago}
        onClose={() => setSelectedPago(null)}
        title="Detalle de pago"
      >
        {selectedPago && (
          <div className="flex flex-col gap-6">
            {/* Resumen financiero */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Total del servicio</span>
                <span className="font-medium text-gray-900">{formatDOP(selectedPago.pagoServicio)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Comisión de la app ({COMISION_PORCENTAJE}%)</span>
                <span className="font-medium text-red-600">
                  -{formatDOP(Math.round(selectedPago.pagoServicio * (COMISION_PORCENTAJE / 100)))}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-200">
                <span className="font-medium text-gray-900">Neto a pagar</span>
                <span className="font-bold text-green-600">{formatDOP(selectedPago.pagoContratista)}</span>
              </div>
            </div>

            {/* Descripción del servicio */}
            <div>
              <h3 className="font-medium text-gray-900 text-sm mb-2">Descripción del servicio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedPago.descripcionServicio}</p>
            </div>

            {/* Acción */}
            <div className="mt-auto pt-4">
              <Button variant="primary" className="w-full bg-[#0046FD] hover:bg-[#0040e0]">
                Confirmar pago
              </Button>
            </div>
          </div>
        )}
      </SidebarModal>
    </div>
  );
}
