# Planeación Visual y Estructura de Pantallas

El ecosistema web principal de Telar Web consta de 5 pantallas/secciones fundamentales, diseñadas para guiar al usuario desde el descubrimiento inicial hasta la conversión (captura de lead a través del cotizador).

## 1. Landing Page Comercial
Es el punto de entrada principal. Se centra en un impacto visual alto y en transmitir el diferencial artesanal y técnico de la agencia.
- **Hero Section**: Alta conversión con enfoque en "Arquitectura & Desarrollo Artesanal". Incluye estadísticas clave (ej. 99+ en PageSpeed, 100% código propio).
- **Llamados a la Acción (CTAs)**: Botones primarios apuntando directamente a iniciar el **Cotizador Guiado** y botones secundarios para conocer el **Proceso**.
- **Versus / Diferenciación**: Elemento visual rápido contrastando Telar Web vs "Agencias tradicionales de Cajas Negras".
- **Contacto de Alto Nivel**: Resumen de datos de contacto (Ubicación, Correo, WhatsApp) en un bloque estilizado en el pie o cuerpo de la página.

## 2. Servicios Detallados
Sección (o vista) dedicada a profundizar en el catálogo de ofertas tecnológicas.
- **Listado de Soluciones**: 
  - Sitios Web Corporativos y Landing Pages.
  - Plataformas y Tiendas E-commerce (Integración de pasarelas locales Wompi/PSE).
  - Sistemas de Inteligencia Artificial & Automatización de flujos.
  - Plataformas SaaS a la Medida.
- **Micro-features**: En cada servicio se detallan los beneficios (cero comisiones recurrentes, panel autogestionable, disponibilidad 24/7, escalabilidad, etc).

## 3. Casos de Éxito y Portafolio
Diseñada para construir prueba social y autoridad, evidenciando resultados reales.
- **Tarjetas de Portafolio**: Exhibición visual (mockups) de proyectos entregados.
- **Métricas de Impacto**: Se destaca más el ROI que solo lo visual. Ej: "+210% de leads calificados", "-80% de llamadas operativas", "Carga reducida de 6.4s a 0.9s".
- **Sectores Cuentas Clave**: Segmentación de los casos (Salud/Odontología, E-commerce/Retail, Logística B2B).

## 4. Proceso y Acuerdo Tecnológico
La sección de transparencia radical que le explica al cliente cómo funciona la agencia.
- **Flujo de 4 Pasos**:
  1. Diagnóstico & Descubrimiento (Análisis de costos y metas).
  2. Prototipado UI/UX (Diseño exclusivo interactivo).
  3. Sprints Transparentes (Desarrollo incremental visible).
  4. Despliegue & 100% Propiedad (Entrega del código y claves al cliente).
- **El Estándar Telar**: Declaración de infraestructura propia, optimización técnica y seguridad por defecto.

## 5. Cotizador Guiado (Core Feature Interactivo)
El corazón de la conversión en el sitio. Un "wizard" paso a paso donde el prospecto configura su web, recibe un aproximado en tiempo real y deja sus datos.
- **Paso 1: Tipo de Proyecto** (Landing, Corporativo, E-commerce, Plataforma SaaS, Sistema IA). Cada opción tiene un costo base asociado.
- **Paso 2: Arquitectura de Vistas** (Volumen: 1-3 vistas, 4-7 vistas, 8+, Dinámicas). Incremento de costo según el tamaño.
- **Paso 3: Módulos & Funcionalidades Extras** (Pasarela de pagos, Agente IA, CMS, Multiidioma, Integración CRM). Checkboxes que suman valores específicos.
- **Paso 4: Arquitectura Tecnológica** (Sugerencia Telar [Next.js] vs Especificaciones Propias).
- **Resumen en Vivo (Sticky Panel)**: Mientras el usuario selecciona, un panel lateral o inferior fijo actualiza el desglose de precios, mostrando el Total Estimado en COP y USD, y el tiempo estimado.
- **Captación de Lead**: Al finalizar, un formulario ligero captura Nombre, Correo y WhatsApp. Estos datos, junto con el resumen, viajan directo a la base de datos de Supabase.
