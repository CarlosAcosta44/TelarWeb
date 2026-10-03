import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';

export const metadata: Metadata = {
  title: 'Servicios Detallados de Desarrollo Web | Telar Web',
  description:
    'Landing pages de alto impacto, plataformas e-commerce, automatización con inteligencia artificial y software SaaS a la medida.',
};

const serviceDetails = [
  {
    id: 'sitios-web',
    tag: 'Conversión & Autoridad',
    title: 'Sitios Web Corporativos & Landing Pages de Alta Conversión',
    desc: 'Arquitectura digital concebida para transformar el tráfico frío en clientes calificados. Desarrollamos cada vista de forma artesanal sin plantillas prefabricadas.',
    badge: 'PageSpeed 95+',
    bullets: [
      'Velocidad de carga sub-segundo con Next.js y compresión edge',
      'SEO técnico semántico estructurado para indexación prioritaria en Google',
      'Diseño exclusivo adaptado a la identidad de tu marca (100% responsive)',
      'Formularios conectados en tiempo real con alertas a WhatsApp y correo',
    ],
    idealFor: 'Empresas de servicios, consultoras, firmas profesionales y startups.',
    timeline: '2 a 4 semanas',
    pricing: 'Desde $2.2M COP',
  },
  {
    id: 'ecommerce',
    tag: 'Comercio Digital Sin Fricción',
    title: 'Plataformas & Tiendas E-commerce a la Medida',
    desc: 'Infraestructura de ventas directa a tu cuenta bancaria. Olvídate de comisiones recurrentes abusivas de plataformas enlatadas que cobran porcentaje por cada transacción.',
    badge: '0% Comisiones',
    bullets: [
      'Integración directa de pasarelas colombianas e internacionales: Wompi, PSE, Bold, Stripe',
      'Carrito de compras sincronizado y checkout en un solo paso',
      'Panel autogestionable de productos, stock y pedidos sin complejidad técnica',
      'Gestión de cupones, promociones y liquidación de envíos nacionales',
    ],
    idealFor: 'Marcas de retail, distribuidores, fabricantes y tiendas con catálogo propio.',
    timeline: '3 a 5 semanas',
    pricing: 'Desde $5.2M COP',
  },
  {
    id: 'ia-automatizacion',
    tag: 'Deep Tech & Eficiencia',
    title: 'Integración de IA & Automatización de Flujos',
    desc: 'Multiplica la capacidad operativa de tu equipo integrando agentes inteligentes que atienden y cotizan 24/7 sobre WhatsApp y web con conocimiento de tu empresa.',
    badge: '24/7 Autopilot',
    bullets: [
      'Agentes entrenados con la documentación, FAQs y políticas de tu negocio',
      'Conexión directa a WhatsApp Business API y chats omnicanal',
      'Calificación y pre-filtrado automático de prospectos hacia tu CRM',
      'Automatización de tareas repetitivas y generación de reportes',
    ],
    idealFor: 'Clínicas, firmas de logística, inmobiliarias y empresas con alto flujo de consultas.',
    timeline: '4 a 6 semanas',
    pricing: 'Desde $9.8M COP',
  },
  {
    id: 'saas-medida',
    tag: 'Escalabilidad Cloud',
    title: 'Plataformas SaaS & Software Empresarial a la Medida',
    desc: 'Lógica comercial compleja empaquetada en aplicaciones web robustas, seguras y de alto desempeño. Arquitecturas desacopladas listas para soportar miles de usuarios.',
    badge: 'Full Ownership',
    bullets: [
      'Autenticación multifactor, roles y permisos granulares (RBAC)',
      'Bases de datos relacionales PostgreSQL con Supabase o AWS RDS',
      'APIs REST / GraphQL optimizadas y webhooks bidireccionales',
      'Dashboards interactivos con visualización de datos y reportes exportables',
    ],
    idealFor: 'Emprendimientos tecnológicos, gestión interna B2B y portales de clientes.',
    timeline: '5 a 8 semanas',
    pricing: 'Desde $8.9M COP',
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121110] text-[#f5f2eb]">
      <Header />
      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-amber-600/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Catálogo de Ingeniería
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#f5f2eb] tracking-tight">
              Servicios Especializados de{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 bg-clip-text text-transparent">
                Desarrollo Web
              </span>
            </h1>
            <p className="text-lg text-[#a8a29e] leading-relaxed">
              Software artesanal de alta precisión para negocios que demandan rendimiento, diseño propio y autonomía total sobre su infraestructura.
            </p>
          </div>

          {/* Service Cards Detailed */}
          <div className="space-y-10">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-10 rounded-3xl bg-[#181614] border border-[#3d3630]/80 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-8 justify-between"
              >
                <div className="lg:w-2/3 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      0{index + 1} · {service.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-[#f5f2eb]">
                    {service.title}
                  </h2>

                  <p className="text-base text-[#a8a29e] leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase text-[#8c7f76] tracking-wider">
                      Capacidades Clave:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#f5f2eb]">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-xs text-[#a8a29e]">
                    <strong className="text-[#f5f2eb]">Ideal para:</strong> {service.idealFor}
                  </div>
                </div>

                {/* Right quick specs & CTA */}
                <div className="lg:w-1/3 flex flex-col justify-between p-6 rounded-2xl bg-[#11100f] border border-[#3d3630]/60 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs pb-3 border-b border-[#3d3630]/50">
                      <span className="text-[#8c7f76] font-mono">Inversión Base</span>
                      <span className="font-mono font-bold text-amber-400 text-sm">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-3 border-b border-[#3d3630]/50">
                      <span className="text-[#8c7f76] font-mono">Tiempo Estimado</span>
                      <span className="font-mono text-[#f5f2eb]">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#8c7f76] font-mono">Propiedad</span>
                      <span className="font-mono text-emerald-400 font-semibold">100% Cliente</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Link
                      href="/cotizador"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-[#1a1105] text-xs font-bold shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:from-amber-500 hover:to-amber-400 transition-all"
                    >
                      Cotizar este servicio
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <a
                      href="https://wa.me/573100000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#181614] border border-[#3d3630] text-[#f5f2eb] text-xs font-semibold hover:border-amber-500/50 transition-colors"
                    >
                      Consultar con un ingeniero
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
