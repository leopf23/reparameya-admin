"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  HiMagnifyingGlass,
  HiAdjustmentsHorizontal,
  HiDocumentArrowDown,
  HiSquares2X2,
  HiPencil,
  HiEye,
} from "react-icons/hi2";
import { Card } from "@/components/molecules/Card";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Pagination } from "@/components/molecules/Pagination";
import { CiFilter } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa";
import { RiFileExcelLine } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";

const TOTAL_PAGES = 10;

type OrdenEstado = "Completado" | "Pendiente" | "En proceso" | "Cancelado";

type OrdenItem = {
  id: string;
  cliente: string;
  montoTotal: number;
  metodoPago: string;
  estado: OrdenEstado;
};

const MOCK_ORDENES: OrdenItem[] = [
  { id: "1030300", cliente: "Misael henriquez figueroa", montoTotal: 1000, metodoPago: "Transferencia VISA", estado: "Completado" },
  { id: "1030301", cliente: "María López García", montoTotal: 2500, metodoPago: "Efectivo", estado: "Pendiente" },
  { id: "1030302", cliente: "Juan Carlos Ramírez", montoTotal: 1800, metodoPago: "Tarjeta Mastercard", estado: "En proceso" },
  { id: "1030303", cliente: "Ana Rodríguez Pérez", montoTotal: 3200, metodoPago: "Transferencia", estado: "Completado" },
  { id: "1030304", cliente: "Pedro Sánchez Cruz", montoTotal: 950, metodoPago: "Efectivo", estado: "Cancelado" },
  { id: "1030305", cliente: "Laura Fernández Díaz", montoTotal: 4100, metodoPago: "Transferencia VISA", estado: "Completado" },
];

function formatRD(value: number) {
  return `RD $${value.toLocaleString("es-DO")}`;
}

const ESTADO_STYLES: Record<OrdenEstado, string> = {
  Completado: "bg-[#0046FD] text-white",
  Pendiente: "bg-amber-100 text-amber-800",
  "En proceso": "bg-blue-100 text-blue-800",
  Cancelado: "bg-gray-100 text-gray-600",
};

function StatusBadge({ estado }: { estado: OrdenEstado }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${ESTADO_STYLES[estado]}`}
    >
      {estado}
    </span>
  );
}

export default function OrdenesPage() {
  const [search, setSearch] = useState("");

  const filteredOrdenes = useMemo(() => {
    if (!search.trim()) return MOCK_ORDENES;
    const q = search.toLowerCase();
    return MOCK_ORDENES.filter(
      (o) =>
        o.id.toLowerCase().includes(q) ||
        o.cliente.toLowerCase().includes(q) ||
        o.metodoPago.toLowerCase().includes(q) ||
        o.estado.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="flex flex-col flex-1 gap-4 min-w-0">
      <h1 className="font-semibold text-gray-900 text-xl sm:text-2xl">Ordenes</h1>

      {/* Barra de búsqueda y acciones */}
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-3">
        <div className="relative flex-1 w-full min-w-0">
          <HiMagnifyingGlass className="top-1/2 left-3 absolute size-5 text-gray-400 -translate-y-1/2 pointer-events-none" />
          <Input
            type="search"
            placeholder="Buscar una orden"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-10 pl-10"
          />
          <span className="hidden sm:inline top-1/2 right-3 absolute text-gray-400 text-sm -translate-y-1/2 pointer-events-none">
            /
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="flex justify-center items-center bg-white hover:bg-gray-50 border border-gray-200 rounded-lg size-10 text-gray-600 transition-colors"
            aria-label="Filtros"
          >
            <CiFilter className="size-5" />
          </button>
          <button
            type="button"
            className="flex justify-center items-center bg-white hover:bg-gray-50 border border-gray-200 rounded-lg size-10 text-gray-600 transition-colors"
            aria-label="Exportar PDF"
          >
            <GrDocumentPdf className="size-5" />
          </button>
          <button
            type="button"
            className="flex justify-center items-center bg-white hover:bg-gray-50 border border-gray-200 rounded-lg size-10 text-gray-600 transition-colors"
            aria-label="Vista"
          >
            <RiFileExcelLine className="size-5" />
          </button>
        </div>
      </div>

      {/* Tabla desktop */}
      <Card className="hidden md:block flex-col flex-1 p-0 min-h-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm text-left">
            <thead>
              <tr className="bg-gray-50/80 border-gray-200 border-b">
                <th className="px-4 py-3 font-semibold text-gray-700"># Orden / ID</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Cliente</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Monto total</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Método de pago</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Estado</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrdenes.map((o, i) => (
                <tr
                  key={o.id}
                  className={`border-b border-gray-100 transition-colors hover:bg-gray-50/50 ${
                    i % 2 === 1 ? "bg-gray-50/30" : ""
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{o.id}</td>
                  <td className="px-4 py-3 max-w-[140px] text-gray-700 truncate" title={o.cliente}>
                    {o.cliente}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{formatRD(o.montoTotal)}</td>
                  <td className="px-4 py-3 text-gray-700">{o.metodoPago}</td>
                  <td className="px-4 py-3">
                    <StatusBadge estado={o.estado} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        className="hover:bg-gray-100 p-2 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Editar orden"
                      >
                        <HiPencil className="size-4" />
                      </button>
                      <Link
                        href={`/ordenes/${o.id}`}
                        className="hover:bg-gray-100 p-2 rounded-lg text-gray-500 hover:text-gray-700 transition-colors inline-flex"
                        aria-label="Ver orden"
                      >
                        <HiEye className="size-4" />
                      </Link>
                    </div>
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

      {/* Vista en tarjetas para móvil */}
      <div className="md:hidden flex flex-col gap-3">
        {filteredOrdenes.map((o) => (
          <Card key={o.id} className="p-4">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start gap-2">
                <span className="font-semibold text-gray-900">#{o.id}</span>
                <StatusBadge estado={o.estado} />
              </div>
              <p className="text-gray-700 text-sm">{o.cliente}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Monto total</span>
                <span className="font-medium text-gray-900">{formatRD(o.montoTotal)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Método de pago</span>
                <span className="max-w-[50%] text-gray-700 truncate">{o.metodoPago}</span>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-gray-100 border-t">
                <button
                  type="button"
                  className="hover:bg-gray-100 p-2 rounded-lg text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Editar orden"
                >
                  <HiPencil className="size-4" />
                </button>
                <Link
                  href={`/ordenes/${o.id}`}
                  className="hover:bg-gray-100 p-2 rounded-lg text-gray-500 hover:text-gray-700 transition-colors inline-flex"
                  aria-label="Ver orden"
                >
                  <HiEye className="size-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
        <div className="p-3">
          <Pagination totalPages={TOTAL_PAGES} />
        </div>
      </div>
    </div>
  );
}
