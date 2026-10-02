# TelarWeb — Plataforma Web de la Agencia

Repositorio principal del sitio web de **Telar Web**, una agencia boutique de desarrollo web artesanal enfocada en soluciones de alta conversión y performance para pymes.

> Sitio web de la propia agencia: demostración de capacidades, portafolio de clientes y captación de leads vía el **Cotizador Guiado Interactivo**.

---

## 📚 Documentación del Proyecto

Toda la documentación técnica y de producto está en la carpeta [`.docs/`](./.docs/):

| Documento | Descripción |
|---|---|
| [`context.md`](./.docs/context.md) | Contexto general, propuesta de valor y descripción del producto. |
| [`planning.md`](./.docs/planning.md) | Planeación visual detallada de las 5 pantallas del sitio. |
| [`architecture.md`](./.docs/architecture.md) | Stack tecnológico y arquitectura Clean Architecture del código. |
| [`database.md`](./.docs/database.md) | Diseño de base de datos en Supabase (tablas, campos y políticas RLS). |
| [`designs/`](./.docs/designs/) | Diseños visuales de referencia (HTML y screenshots por pantalla). |

---

## 🚀 Iniciar el proyecto en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

---

## 🌿 Flujo de trabajo (GitFlow)
- **`main`**: Código en producción. Solo recibe merges de `release/*` o `hotfix/*`.
- **`develop`**: Rama de integración. Aquí convergen las features terminadas.
- **`feature/*`**: Una rama por funcionalidad (ej. `feature/quote-wizard`).
- **`hotfix/*`**: Correcciones urgentes en producción.

---

## 🛠️ Stack
- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** + Framer Motion
- **Supabase** (PostgreSQL + Auth + Storage)
- **Vercel** (CI/CD y Hosting)
