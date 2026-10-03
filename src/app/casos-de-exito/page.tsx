import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';

export const metadata: Metadata = {
  title: 'Casos de Éxito & Portafolio | Telar Web',
  description:
    'Explora proyectos reales construidos por Telar Web: métricas de impacto, optimización de velocidad, e-commerce y arquitecturas a la medida.',
};

const fullCases = [
  {
    client: 'Logística Andina SAS',
    industry: 'B2B · Logística y Transporte',
    challenge:
      'Proceso manual de cotizaciones por llamadas y correos que tomaba hasta 4 horas por cliente, con pérdida del 45% de leads calificados.',
    solution:
      'Desarrollo de un cotizador de fletes en tiempo real con Next.js y Supabase, conectado automáticamente con WhatsApp Business API y CRM comercial.',
    metrics: [
      { label: 'Leads Calificados', value: '+210%' },
      { label: 'Tiempo de Carga', value: '0.9s (desde 6.4s)' },
      { label: 'PageSpeed Score', value: '99 / 100' },
      { label: 'Ahorro Operativo', value: '35h / semana' },
    ],
    tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'WhatsApp Business API'],
  },
  {
    client: 'Clínica Dental Sonrisas',
    industry: 'Salud & Odontología Especializada',
    challenge:
      'Líneas telefónicas saturadas para agendamiento, alta tasa de inasistencia (no-show) y ausencia de ficha digital para pacientes nuevos.',
    solution:
      'Portal web con agenda interactiva sincrónica, confirmaciones automatizadas por SMS/WhatsApp y formulario seguro de consentimiento.',
    metrics: [
      { label: 'Citas Online', value: '65% del Total' },
      { label: 'Llamadas Operativas', value: '-80%' },
      { label: 'Reducción No-show', value: '-42%' },
      { label: 'Satisfacción', value: '4.9 / 5' },
    ],
    tech: ['Next.js', 'PostgreSQL', 'Calendly API', 'Twilio'],
  },
  {
    client: 'Boutique Café Origen',
    industry: 'E-commerce · Alimentos & Retail Especializado',
    challenge:
      'Tienda en Shopify lenta, con altas comisiones mensuales y carritos abandonados por fallos en pasarelas bancarias locales.',
    solution:
      'E-commerce a la medida con checkout optimizado en un solo paso, pasarela Wompi / PSE directa a cuenta bancaria y cero comisiones recurrentes.',
    metrics: [
      { label: 'Ventas Nacionales', value: '3x Crecimiento' },
      { label: 'Ciudades Cubiertas', value: '14 en Mes 1' },
      { label: 'Conversión Checkout', value: '+38%' },
      { label: 'Comisiones de Plataforma', value: '0%' },
    ],
    tech: ['Next.js App Router', 'Wompi PSE', 'Supabase DB', 'Vercel Edge'],
  },
];

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121110] text-[#f5f2eb]">
      <Header />
      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-amber-600/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Evidencia & Autoridad
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#f5f2eb] tracking-tight">
              Casos de Éxito &{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 bg-clip-text text-transparent">
                Resultados Medibles
              </span>
            </h1>
            <p className="text-lg text-[#a8a29e] leading-relaxed">
              No medimos el éxito únicamente por la estética, sino por el retorno de inversión, la velocidad quirúrgica y la eficiencia de los procesos comerciales de nuestros clientes.
            </p>
          </div>

          {/* Cases List */}
          <div className="space-y-12">
            {fullCases.map((c) => (
              <div
                key={c.client}
                className="p-8 sm:p-12 rounded-3xl bg-[#181614] border border-[#3d3630]/80 shadow-2xl space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#3d3630]/60">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                      {c.industry}
                    </span>
                    <h2 className="text-3xl font-extrabold text-[#f5f2eb] mt-1">
                      {c.client}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#11100f] text-amber-400 border border-amber-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs uppercase text-[#8c7f76] tracking-wider font-semibold">
                      El Desafío Previo
                    </h3>
                    <p className="text-[#a8a29e] leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs uppercase text-[#8c7f76] tracking-wider font-semibold">
                      La Solución Telar Web
                    </h3>
                    <p className="text-[#f5f2eb] leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-2xl bg-[#11100f] border border-[#3d3630]/60 text-center space-y-1"
                    >
                      <div className="text-2xl lg:text-3xl font-bold font-mono text-amber-400">
                        {m.value}
                      </div>
                      <div className="text-xs text-[#a8a29e]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-[#24211e] via-[#1e1b18] to-[#181614] border border-amber-500/40 text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-[#f5f2eb]">
              ¿Quieres un impacto similar en tu negocio?
            </h2>
            <p className="text-base text-[#a8a29e] max-w-xl mx-auto">
              Descubre cuánto costaría estructurar tu sitio o plataforma a la medida en nuestro cotizador interactivo.
            </p>
            <div className="flex justify-center">
              <Link
                href="/cotizador"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-[#1a1105] text-sm font-bold shadow-[0_0_24px_rgba(217,119,6,0.35)] hover:from-amber-500 hover:to-amber-400 transition-all"
              >
                Abrir Cotizador Guiado
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
