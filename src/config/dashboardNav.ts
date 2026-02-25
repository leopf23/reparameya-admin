import type { IconType } from "react-icons";
import { HiChartPie, HiMapPin, HiUserGroup, HiDocumentText, HiCurrencyDollar } from "react-icons/hi2";

export interface NavItem {
  label: string;
  href: string;
  icon: IconType;
  children?: { label: string; href: string }[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const dashboardNav: NavSection[] = [
  {
    title: "Dashboards",
    items: [
      { label: "Dashboard", href: "/", icon: HiChartPie },
    ],
  },
  {
    title: "Pages",
    items: [
      { label: "Mapa", href: "/mapa", icon: HiMapPin },
      {
        label: "Técnicos",
        href: "/tecnicos",
        icon: HiUserGroup,
        children: [
          { label: "Pendientes", href: "/tecnicos/pendientes" },
          { label: "Bloqueados", href: "/tecnicos/bloqueados" },
        ],
      },
      { label: "Clientes", href: "/clientes", icon: HiDocumentText },
      { label: "Ordenes", href: "/ordenes", icon: HiDocumentText },
      { label: "Facturas", href: "/facturas", icon: HiDocumentText },
      { label: "Beneficios", href: "/beneficios", icon: HiDocumentText },
      { label: "Pagos", href: "/pagos", icon: HiCurrencyDollar },
    ],
  },
];

export function getBreadcrumbs(pathname: string): string[] {
  if (pathname === "/") return ["Dashboards", "Dashboard"];
  const segments = pathname.split("/").filter(Boolean);
  const labels: Record<string, string> = {
    mapa: "Mapa",
    tecnicos: "Técnicos",
    pendientes: "Pendientes",
    bloqueados: "Bloqueados",
    clientes: "Clientes",
    ordenes: "Ordenes",
    facturas: "Facturas",
    beneficios: "Beneficios",
    pagos: "Pagos",
  };
  return segments.map((s) => labels[s] ?? s);
}
