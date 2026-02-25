# Reparameya Admin

Proyecto **ligero y limpio** en Next.js 16 con Tailwind CSS v4 y TypeScript. Estructura **Atomic Design**, sin dependencias extra.

## Estructura

```
src/
├── app/
│   ├── (main)/           # Rutas con layout (header + footer)
│   │   ├── layout.tsx
│   │   └── page.tsx      # /
│   ├── login/
│   │   └── page.tsx      # /login
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
└── components/
    ├── atoms/            # Button, Input, Text
    ├── molecules/        # InputField, Card
    ├── organisms/        # Header, Footer
    └── templates/       # MainLayout
```

## Comandos

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## Login demo

- **Usuario:** `admin` o `admin@reparameya.com`
- **Contraseña:** `password`

## Tecnologías

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
