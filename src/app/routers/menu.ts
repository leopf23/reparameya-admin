import { FaChartPie, FaRobot } from "react-icons/fa";

export type RouteItem = {
  name: string;
  href?: string;
  description?: string;
  icon?: React.ElementType;
  section: "main" | "herramientas" | "auth";
  children?: RouteItem[];
};

export const menuRoutes: RouteItem[] = [
  {
    name: "Herramientas",
    section: "herramientas",
    children: [
      {
        name: "Automatización",
        description: "Descarga y utiliza nuestros bots",
        href: "#",
        icon: FaRobot,
        section: "herramientas",
      },
      {
        name: "Otras herramientas",
        description: "Descubre más de nosotros",
        href: "#",
        icon: FaChartPie,
        section: "herramientas",
      },
    ],
  },
  { name: "Novedades", href: "/novedades", section: "main" },
  { name: "Nosotros", href: "/nosotros", section: "main" },
  { name: "Aula Virtual", href: "/aula-virtual", section: "main" },
  { name: "Contactos", href: "#", section: "main" },
];
