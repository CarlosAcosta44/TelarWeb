import Link from 'next/link';

interface CaseStudy {
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  statLabel: string;
  statValue: string;
  statColor: string;
  progressPercent: number;
  highlight: string;
  tech: string[];
}

const cases: CaseStudy[] = [
  {
    tag: 'B2B · Logística',
    tagColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    title: 'Logística Andina SAS',
    subtitle: 'Cotizador de transporte en tiempo real integrado con CRM y WhatsApp Business API.',
    statLabel: 'Leads calificados',
    statValue: '+210%',
    statColor: 'text-amber-400',
    progressPercent: 85,
    highlight: 'Carga reducida de 6.4s a 0.9s · 99 en PageSpeed',
    tech: ['Next.js', 'Supabase', 'WhatsApp API', 'Tailwind'],
  },
  {
    tag: 'Salud & Odontología',
    tagColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    title: 'Clínica Dental Sonrisas',
    subtitle: 'Portal web con agenda médica sincrónica, confirmaciones automáticas y ficha clínica digital.',
    statLabel: 'Citas agendadas online',
    statValue: '65% total',
    statColor: 'text-emerald-400',
    progressPercent: 65,
    highlight: '-80% en llamadas operativas de secretaría',
    tech: ['Next.js', 'PostgreSQL', 'Calendly API', 'Clean UI'],
  },
  {
    tag: 'E-commerce · Retail',
    tagColor: 'border-amber-500/30 text-amber-500 bg-amber-500/10',
    title: 'Boutique Café Origen',
    subtitle: 'E-commerce ultrarrápido con pasarelas Wompi / PSE y logística sincronizada a nivel nacional.',
    statLabel: 'Expansión territorial',
    statValue: '3x Ventas',
    statColor: 'text-amber-400',
    progressPercent: 95,
    highlight: '14 ciudades cubiertas en el primer mes',
    tech: ['Next.js', 'Wompi PSE', 'Supabase', 'Serverless'],
  },
];

export default function Portfolio() {
  return (
    <section id="casos-de-exito" className="w-full bg-[#11100f] py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b18] border border-amber-600/25 font-mono text-xs text-emerald-400 uppercase tracking-widest">
              Portafolio de Resultados
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f2eb] leading-tight tracking-tight">
              Resultados Reales en Negocios Reales
            </h2>
            <p className="text-lg text-[#a8a29e]">
              Empresas y pymes que reemplazaron plataformas lentas por tecnología Telar Web con impacto medible en facturación y escalabilidad.
            </p>
          </div>
          <Link
            href="/casos-de-exito"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1e1b18] border border-[#3d3630] text-sm font-semibold text-amber-400 hover:text-[#f5f2eb] hover:border-amber-500/50 transition-all"
          >
            Ver todos los casos de éxito
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-[#181614] border border-[#3d3630]/70 hover:border-amber-500/50 shadow-xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Visual Header / Mockup Banner */}
                <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#1e1b18] to-[#121110] border border-[#3d3630]/60 p-4 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center justify-between z-10">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-semibold border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  </div>

                  {/* Wireframe preview bars */}
                  <div className="space-y-2 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="h-3 w-3/4 rounded bg-amber-500/30" />
                    <div className="h-2 w-1/2 rounded bg-[#3d3630]" />
                    <div className="flex gap-2 pt-1">
                      <div className="h-8 flex-1 rounded bg-[#272320] border border-[#3d3630]/50" />
                      <div className="h-8 flex-1 rounded bg-[#272320] border border-[#3d3630]/50" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-xl font-bold text-[#f5f2eb] group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a8a29e] mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#11100f] text-[#8c7f76] border border-[#2b2723]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Card */}
              <div className="p-4 rounded-xl bg-[#11100f] border border-[#3d3630]/60 space-y-2.5 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a8a29e]">{item.statLabel}</span>
                  <span className={`text-base font-bold font-mono ${item.statColor}`}>
                    {item.statValue}
                  </span>
                </div>
                <div className="w-full bg-[#2e2a26] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all duration-700 shadow-[0_0_8px_#f59e0b]"
                    style={{ width: `${item.progressPercent}%` }}
                  />
                </div>
                <p className="text-[11px] font-mono text-[#8c7f76]">
                  {item.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
