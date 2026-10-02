# Planeación Detallada: TelarWeb Agencia

TelarWeb es una agencia de software boutique (artesanal) especializada en soluciones web de alta conversión y performance. El objetivo de este sitio web es servir como la cara pública de la agencia, demostrar autoridad técnica y, lo más importante, capturar y calificar leads a través de un **Cotizador Guiado** interactivo.

## 1. Arquitectura de Pantallas y Secciones

### 1.1 Landing Page Comercial (Inicio)
- **Hero Section**: Alta conversión con enfoque en "Arquitectura & Desarrollo Artesanal". Debe incluir los llamados a la acción (CTAs) principales hacia el cotizador y los procesos.
- **Servicios Especializados**: 
  - Landing Pages de alta conversión.
  - E-commerce a la medida (Wompi, PSE).
  - Integración de IA y flujos automáticos.
- **Proceso & Acuerdo Tecnológico**: Explicación de las 4 fases (Diagnóstico, Prototipado, Sprints, Despliegue) y una tabla de comparación "Telar Web vs Cajas Negras".
- **Contacto Directo**: Módulo rápido para contacto por correo y WhatsApp.

### 1.2 Casos de Éxito (Portafolio)
- Tarjetas visuales de resultados reales (ej. "Panadería Doña Elena", "Logística Andina", "Clínica Sonrisas").
- **Métricas Destacadas**: En cada tarjeta se mostrará el aumento de conversión (ej. +210%), métricas de PageSpeed (0.9s), o ahorro de tiempo.

### 1.3 Cotizador Guiado Interactivo (Core Feature)
Esta es la funcionalidad principal interactiva. Es un *wizard* de 4 pasos donde el usuario configura su proyecto y el precio se actualiza en tiempo real, terminando en un formulario de captura de lead.

- **Paso 1: Tipo de Proyecto** (Landing, Corporativo, E-commerce, SaaS a medida, Integración IA).
- **Paso 2: Volumen de Vistas** (1 a 3, 4 a 7, 8+, Ecosistema Dinámico).
- **Paso 3: Funcionalidades Especiales** (Pasarelas de Pago, Agente IA, CMS Headless, Multiidioma, Sincronización CRM). Múltiple selección.
- **Paso 4: Arquitectura Tecnológica** (Stack recomendado vs Requerimientos propios).
- **Resumen Flotante (Sticky)**: Muestra en tiempo real la sumatoria de costos en COP y USD, además de estimación de tiempo.
- **Lead Capture Form**: Formulario final (Nombre, Email Corporativo, WhatsApp/Teléfono) que, al enviarse, guarda toda la cotización en Supabase.

---

## 2. Modelado de Base de Datos (Supabase)

Para soportar el cotizador interactivo, implementaremos la siguiente tabla principal para guardar las solicitudes de diagnóstico/cotización:

**Tabla: `quote_requests` (Cotizaciones / Leads)**
- `id` (uuid, PK)
- `client_name` (text, not null)
- `client_email` (text, not null)
- `client_phone` (text, not null)
- `project_type` (text, not null) - Ej: 'corporate', 'ecommerce', etc.
- `views_scope` (text, not null)
- `special_modules` (text[] - array de strings)
- `tech_architecture` (text)
- `estimated_price_cop` (numeric)
- `estimated_price_usd` (numeric)
- `estimated_timeline` (text)
- `status` (text) - default: 'pending' (pending, contacted, closed)
- `created_at` (timestamptz)

> *Nota de Seguridad*: Esta tabla tendrá Row Level Security (RLS) habilitado. Se permitirá `INSERT` para usuarios anónimos (público general), pero el `SELECT` o `UPDATE` estará restringido solo a administradores.

---

## 3. Estado de la Aplicación y Manejo de UI

- **Interactividad**: Usaremos React Context o Zustand (o simples estados locales si el componente está unificado) para mantener el estado del cotizador y actualizar el componente "Sticky" del precio.
- **Estilos**: Tailwind CSS con un sistema de diseño oscuro y profesional (`bg-[#121110]`), usando colores clave como `amber-500` (Telar Gold), `emerald-400` y `copper`.
- **Animaciones**: Utilizaremos Framer Motion para hacer las transiciones entre las selecciones del cotizador y para la aparición suave (FadeIn) de las secciones de la Landing Page.

## 4. Próximos Pasos Técnicos para Agentes/Desarrolladores
1. Configurar la tabla `quote_requests` en Supabase y generar los repositorios y casos de uso pertinentes en `src/domain` y `src/application`.
2. Crear los tokens de diseño (colores y tipografías personalizadas) en `tailwind.config.ts`.
3. Desarrollar el componente aislado `QuoteWizard.tsx` con su lógica de cálculo.
4. Ensamblar la Landing Page integrando los componentes estáticos visuales.
