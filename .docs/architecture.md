# Arquitectura y Stack Tecnológico

Este documento define la arquitectura técnica y el conjunto de herramientas (stack) utilizados para el desarrollo de la plataforma Telar Web.

## 1. Enfoque General de Tecnología
Las herramientas y el stack tecnológico no son estáticos; se definen y seleccionan de manera personalizada en conjunto con el cliente, evaluando sus necesidades específicas, escalabilidad y requerimientos técnicos para cada proyecto. Sin embargo, para la plataforma base de Telar Web, se ha estandarizado el siguiente entorno:

## 2. Stack Tecnológico Base
- **Frontend Framework**: [Next.js](https://nextjs.org/) (App Router) y React.
- **Lenguaje**: TypeScript, garantizando tipado estático y código robusto.
- **Estilos**: Tailwind CSS para un diseño modular y ágil, junto con CSS Variables para la paleta de colores (`amber-500`, `emerald-400`, `copper`).
- **Animaciones**: Framer Motion para transiciones suaves e interactividad.
- **Manejo de Estado Global**: Context API o Zustand (especialmente para el Cotizador Interactivo).
- **Backend-as-a-Service (BaaS)**: Supabase (PostgreSQL, Autenticación y Storage).
- **Despliegue**: Vercel (CI/CD automático desde el repositorio de GitHub).

## 3. Arquitectura del Código (Clean Architecture)

Se aplicará una variante de Clean Architecture adaptada a Next.js para asegurar que el código sea mantenible, escalable y agnóstico a servicios externos en la medida de lo posible.

### Estructura de Directorios (`src/`)

1. **Dominio (`src/domain`)**
   - **Entidades**: Modelos de datos puros (ej. `QuoteRequest.ts`).
   - **Repositorios (Interfaces)**: Contratos que definen qué operaciones se pueden hacer en la base de datos (ej. `QuoteRepository.ts`), sin importar si es Supabase, Firebase o una API.

2. **Casos de Uso / Aplicación (`src/application`)**
   - Lógica de negocio (ej. `SubmitQuoteRequest.ts`). Los casos de uso orquestan la interacción entre las entidades y los repositorios.

3. **Infraestructura (`src/infrastructure`)**
   - Implementaciones reales de las interfaces del dominio (ej. `SupabaseQuoteRepository.ts`).
   - Clientes de servicios externos, conexión a bases de datos.

4. **Presentación (`src/presentation` y `src/app`)**
   - **UI Components (`src/presentation/components`)**: Botones, Tarjetas, Secciones, Modales, Formularios (desacoplados de la lógica de red).
   - **Páginas y Rutas (`src/app`)**: *App Router* de Next.js, Server Components, y Server Actions (`actions.ts`) que actúan como puente hacia la capa de Aplicación.

## 4. Integraciones Planificadas
- WhatsApp Business API / Correos transaccionales para alertas de contacto directo.
- Posible integración futura con ecosistemas como Telar Tag (perfil digital) o Telar Monitor (dashboards).
