import Link from 'next/link';

const services = [
  {
    icon: '🖥️',
    title: 'Sitios Web & Landing Pages de Alta Conversión',
    description:
      'Presencia digital sólida y persuasiva, optimizada para captar prospectos y convertir visitantes en clientes reales con tiempos de carga menores a un segundo.',
    features: ['100% diseño original sin templates', 'Optimización PageSpeed 95+', 'SEO técnico estructurado e indexable'],
    timeline: 'Entrega desde 2 semanas',
    accent: 'amber',
  },
  {
    icon: '🛒',
    title: 'Plataformas & E-commerce a la Medida',
    description:
      'Tiendas online y portales transaccionales rápidos con checkout simplificado, pasarelas colombianas integradas y cero comisiones mensuales abusivas.',
    features: ['Integración directa de Wompi, PSE y PayU', '0% comisiones recurrentes por transacción', 'Panel autogestionable claro para el equipo'],
    timeline: 'Escalable a millones de SKU',
    accent: 'amber',
  },
  {
    icon: '🤖',
    title: 'Integración de IA & Automatización de Flujos',
    description:
      'Automatiza la atención a clientes con agentes inteligentes 24/7 entrenados con la base de conocimientos de tu empresa y conectados a WhatsApp.',
    features: ['Agentes conversacionales y cotizadores automáticos', 'Conexión fluida con WhatsApp Business API', 'Captura automática de leads hacia CRM'],
    timeline: 'Disponibilidad 24/7',
    accent: 'emerald',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="w-full bg-[#11100f] py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b18] border border-amber-600/25 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Servicios Especializados
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f2eb] leading-tight tracking-tight">
              Soluciones Web Diseñadas para Crecer Sin Límites
            </h2>
            <p className="text-lg text-[#a8a29e]">
              Especialmente concebido para pymes, profesionales y marcas que demandan velocidad radical, diseño propio y retorno verificable de inversión.
            </p>
          </div>
          <Link
            href="/cotizador"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1e1b18] border border-amber-600/30 text-sm font-semibold text-amber-400 hover:bg-[#272320] hover:text-[#f5f2eb] transition-all shadow-[0_0_18px_rgba(217,119,6,0.15)]"
          >
            Explorar todos los servicios
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="flex flex-col justify-between p-8 rounded-2xl bg-[#181614] border border-[#3d3630]/70 shadow-xl hover:-translate-y-1 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="space-y-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${svc.accent === 'emerald' ? 'bg-emerald-500/15' : 'bg-amber-500/15'}`}>
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-[#f5f2eb]">{svc.title}</h3>
                <p className="text-sm text-[#a8a29e] leading-relaxed">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#f5f2eb]">
                      <span className={`text-base ${svc.accent === 'emerald' ? 'text-emerald-400' : 'text-amber-400'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-[#3d3630]/60 mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-[#8c7f76]">{svc.timeline}</span>
                <Link
                  href="/cotizador"
                  className={`text-xs font-bold flex items-center gap-1 transition-colors ${svc.accent === 'emerald' ? 'text-emerald-400 hover:text-[#f5f2eb]' : 'text-amber-400 hover:text-[#f5f2eb]'}`}
                >
                  Cotizar <span aria-hidden>›</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
