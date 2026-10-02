# Diseño de Base de Datos (Supabase)

La plataforma Telar Web utiliza Supabase como BaaS. A continuación se detallan las tablas y estructuras principales que se requieren para su funcionamiento, particularmente enfocadas en la captación de leads a través del cotizador interactivo.

## Tabla: `quote_requests` (Cotizaciones / Leads)

Esta tabla almacena los prospectos calificados que completan el **Cotizador Guiado** o el formulario de contacto de la página.

### Esquema
- `id` (uuid, PK, autogenerado)
- `client_name` (text, not null): Nombre completo o nombre de la empresa del prospecto.
- `client_email` (text, not null): Correo electrónico (idealmente corporativo).
- `client_phone` (text, not null): Número de teléfono o WhatsApp.
- `project_type` (text, not null): El tipo de solución seleccionada. Ej: 'landing', 'corporate', 'ecommerce', 'custom_saas', 'ai_system'.
- `views_scope` (text, not null): Volumen de vistas arquitectónicas seleccionadas. Ej: '1-3', '4-7', '8+', 'dynamic'.
- `special_modules` (text[]): Array de identificadores de funcionalidades extra. Ej: `['payment_gateway', 'ai_agent']`.
- `tech_architecture` (text, not null): Stack seleccionado por el usuario. Ej: 'telar-recommended', 'custom-specs'.
- `estimated_price_cop` (numeric): El precio final estimado en pesos colombianos.
- `estimated_price_usd` (numeric): El precio final estimado en dólares.
- `estimated_timeline` (text): Tiempo de entrega proyectado. Ej: '2 a 4 semanas'.
- `status` (text, not null): Estado comercial del lead. Valores predeterminados: 'pending' (por defecto), 'contacted', 'negotiating', 'closed_won', 'closed_lost'.
- `created_at` (timestamptz, autogenerado): Fecha y hora de creación de la solicitud.

### Políticas de Seguridad (RLS - Row Level Security)

Para garantizar la privacidad y seguridad:
1. **Insert Policy (Public)**: Se habilita para que cualquier visitante de la web (anónimo) pueda enviar (INSERT) una nueva solicitud de cotización, utilizando la API key anónima de Supabase.
2. **Select / Update / Delete Policy (Restringida)**: Bloqueada para usuarios anónimos. Solo accesible a través del Service Role Key en entornos backend seguros, o por usuarios administrativos autenticados mediante Supabase Auth.
