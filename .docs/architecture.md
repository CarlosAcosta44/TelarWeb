# Arquitectura de TelarWeb

El proyecto de la agencia TelarWeb sigue una estructura de **Clean Architecture** para separar claramente las responsabilidades, asegurar la escalabilidad y facilitar el testing a medida que la agencia ofrezca más servicios.

## Capas

1. **Dominio (`src/domain`)**
   - **Entidades**: Modelos de datos puros (ej. `ContactMessage`, `Project`, `Service`).
   - **Contratos (Repositories)**: Interfaces que definen cómo se obtienen y guardan los datos, sin conocer la base de datos subyacente.

2. **Aplicación (`src/application/use-cases`)**
   - **Casos de Uso**: Contienen la lógica de negocio y las reglas de la agencia. Ej: `SubmitContactMessage`, `GetServicesPortfolio`. Solo interactúan con los contratos del dominio.

3. **Infraestructura (`src/infrastructure`)**
   - **Repositorios**: Implementaciones reales de las interfaces del dominio (ej. `SupabaseContactRepository`).
   - **Servicios Externos**: Clientes de Supabase, APIs de terceros, etc.

4. **Presentación (`src/presentation` y `src/app`)**
   - **Componentes de UI (`src/presentation/components`)**: Botones, Tarjetas, Secciones visuales.
   - **Páginas y Rutas (`src/app`)**: *App Router* de Next.js, donde se exponen los Server Actions (`actions.ts`) que llaman a los Casos de Uso.

## Stack Tecnológico
- **Frontend**: Next.js (App Router), React, Tailwind CSS, TypeScript.
- **Backend/DB**: Supabase (PostgreSQL).
- **Control de Versiones**: Git, bajo el estándar **GitFlow** y Commits Semánticos (feat, fix, chore).
