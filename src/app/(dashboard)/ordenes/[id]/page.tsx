"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Card } from "@/components/molecules/Card";
import { GrDocumentPdf } from "react-icons/gr";
import { RiFileExcelLine } from "react-icons/ri";
import { HiMapPin } from "react-icons/hi2";

type OrdenEstado = "Completado" | "Pendiente" | "En proceso" | "Cancelado";

function formatRD(value: number) {
  return `RD $${value.toLocaleString("es-DO")}`;
}

function formatDOP(value: number) {
  return `DOP $${value.toLocaleString("es-DO")}`;
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

// Mock detalle de orden (en producción vendría por id)
const MOCK_DETALLE: Record<
  string,
  {
    cliente: { nombre: string; correo: string; documento: string; telefono: string; localidad: string };
    servicio: {
      imagen: string;
      estado: OrdenEstado;
      tipo: string;
      direccion: string;
      descripcion: string;
    };
    financiero: { subtotal: number; comision: number; itbis: number; total: number };
  }
> = {
  "1030300": {
    cliente: {
      nombre: "Misael henriquez figueroa",
      correo: "mfigueroa2020@gmail.com",
      documento: "402-0000000-0",
      telefono: "809-000-000",
      localidad:
        "Santo Domingo Distrito nacional Calle #8 esq paseo de los locutores",
    },
    servicio: {
      imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
      estado: "Completado",
      tipo: "Servicios de plomeria",
      direccion: "Av. Winston Churchill Con Calle Victor Garrido Puello, Santo Domingo",
      descripcion:
        "Necesito un plomero en Santo Domingo para resolver un problema de plomería en mi hogar, la llave no quiere cerrar y bota agua. Busco atención rápida, segura y confiable. Es una situación urgente relacionada con una fuga y reparación de tuberías.",
    },
    financiero: { subtotal: 1000, comision: 500, itbis: 500, total: 2000 },
  },
};

function getDetalle(id: string) {
  return (
    MOCK_DETALLE[id] ?? {
      cliente: {
        nombre: "Cliente",
        correo: "correo@ejemplo.com",
        documento: "—",
        telefono: "—",
        localidad: "—",
      },
      servicio: {
        imagen: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
        estado: "Pendiente" as OrdenEstado,
        tipo: "Servicio",
        direccion: "—",
        descripcion: "—",
      },
      financiero: { subtotal: 0, comision: 0, itbis: 0, total: 0 },
    }
  );
}

export default function DetalleOrdenPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const detalle = getDetalle(id);
  const { cliente, servicio, financiero } = detalle;

  return (
    <div className="flex flex-col flex-1 gap-4 min-w-0">
      <h1 className="font-semibold text-gray-900 text-xl sm:text-2xl">
        Detalle de orden{" "}
        <span className="text-[#0046FD]">#{id || "—"}</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Información del cliente */}
        <Card className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-900">Informacion del cliente</h2>
          <dl className="flex flex-col gap-3 text-sm">
            <div>
              <dt className="text-gray-500 font-normal">Name</dt>
              <dd className="font-semibold text-gray-900 mt-0.5">{cliente.nombre}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-normal">Correo Electronico</dt>
              <dd className="text-gray-700 mt-0.5 break-all">{cliente.correo}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-normal">Documento de identidad</dt>
              <dd className="text-gray-700 mt-0.5">{cliente.documento}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-normal">Telefono</dt>
              <dd>
                <a
                  href={`tel:${cliente.telefono}`}
                  className="text-[#0046FD] hover:underline mt-0.5 inline-block"
                >
                  {cliente.telefono}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-gray-500 font-normal">Localidad</dt>
              <dd className="text-gray-700 mt-0.5">{cliente.localidad}</dd>
            </div>
          </dl>
        </Card>

        {/* Información del servicio */}
        <Card className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-900">Informacion del servicio</h2>
          <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={servicio.imagen}
              alt="Servicio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge estado={servicio.estado} />
          </div>
          <p className="font-semibold text-gray-900">{servicio.tipo}</p>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <HiMapPin className="size-4 shrink-0 mt-0.5 text-gray-500" />
            <span>{servicio.direccion}</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Descripción</p>
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
              {servicio.descripcion}
            </p>
          </div>
        </Card>

        {/* Detalle de orden (resumen financiero) */}
        <Card className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-900">Detalle de Orden</h2>
          <dl className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between items-center">
              <dt className="text-gray-600">Subtotal</dt>
              <dd className="text-gray-900">{formatDOP(financiero.subtotal)}</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className="text-gray-600">Comisión</dt>
              <dd className="text-gray-900">{formatDOP(financiero.comision)}</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className="text-gray-600">ITBIS</dt>
              <dd className="text-gray-900">{formatDOP(financiero.itbis)}</dd>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <dt className="font-semibold text-gray-900">Total</dt>
              <dd className="font-semibold text-gray-900 text-base">
                {formatDOP(financiero.total)}
              </dd>
            </div>
          </dl>
          <div>
            <p className="text-gray-600 text-sm font-medium mb-2">
              Exportar Detalle de Orden
            </p>
            <div className="flex items-center gap-2">
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
                aria-label="Exportar Excel"
              >
                <RiFileExcelLine className="size-5" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
