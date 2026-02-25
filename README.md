# Reparameya Admin

Proyecto basado en la estructura de **kamaleon-strategy**: Next.js (App Router), Tailwind CSS v4, React 19, con layout público, login, registro, aula virtual, novedades y nosotros.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/app/(layout)/` – Páginas con header y footer (home, nosotros, novedades, aula-virtual, detail-course)
- `src/app/login` – Página de login (sin layout)
- `src/app/registrarse` – Registro de usuario
- `src/app/routers/menu.ts` – Rutas del menú de navegación
- `src/component/atoms/` – Button, InputUi, InputSearch
- `src/component/molecules/` – HeaderUi, Footer, BannerHome, InfoSection, CardBlog, CardCourse, Paginator, Accordion, FormRegister

## Assets

Coloca en `public/` los archivos que usa la app:

- `isoLogo.svg`, `logo.svg` – Logos
- `background.svg`, `background.jpg`, `background-section.svg` – Fondos
- `kamaleon01.png`, `kamaleon02.png`, `kamaleon03.png`, `kamaleon04.svg` – Imágenes de secciones
- `vector-down.svg` – Decoración
- `404-2.png` – Página 404
- `profileCourse.jpg`, `profile.jpg` – Avatares

Puedes copiarlos desde el proyecto **kamaleon-strategy** en `public/` si los tienes allí.

## Scripts

- `npm run dev` – Desarrollo con Turbopack
- `npm run build` – Build de producción
- `npm run start` – Servidor de producción
- `npm run lint` – Linter

## Tecnologías

- Next.js 16, React 19
- Tailwind CSS v4
- Framer Motion, Headless UI, React Icons
