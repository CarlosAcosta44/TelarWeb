const steps = [
  {
    number: '1',
    title: 'Diagnóstico & Descubrimiento',
    description: 'Análisis de objetivos comerciales, evaluación de costos cloud y pacto de requerimientos técnicos sin sorpresas.',
    accent: 'emerald',
  },
  {
    number: '2',
    title: 'Prototipado UI/UX',
    description: 'Diseño visual exclusivo, arquitectura de información y validación interactiva completa antes de programar.',
    accent: 'amber',
  },
  {
    number: '3',
    title: 'Sprints Transparentes',
    description: 'Desarrollo ágil con entregas incrementales continuas y visibilidad total del progreso en tiempo real.',
    accent: 'amber',
  },
  {
    number: '4',
    title: 'Despliegue & 100% Propiedad',
    description: 'Puesta en producción en tu infraestructura. Eres titular del repositorio, dominio, credenciales y documentación.',
    accent: 'emerald',
  },
];

const telarPros = [
  'Código en tu repositorio: Nunca retenemos tu software ni tus accesos.',
  'Stack consensuado: Elegimos herramientas eficientes según tu capacidad y necesidades.',
  'Costos transparentes: Infraestructura a costo real de proveedor, cero márgenes abusivos.',
];

const agencyBads = [
  'Retención de dominios y repositorios para forzar ataduras comerciales.',
  'Imposición de plantillas genéricas sobrecargadas que se rompen con actualizaciones.',
  'Cobros mensuales inflados por mantenimiento básico no justificado.',
];

export default function Process() {
  return (
    <section id="proceso" className="w-full bg-[#151311] py-24 border-t border-[#3d3630]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b18] border border-amber-600/30 text-xs font-mono text-amber-400 uppercase tracking-widest">
            Metodología & Seguridad
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f2eb] leading-tight tracking-tight">
            Tu Proyecto, Tus Reglas Técnicas: Transparencia Radical
          </h2>
          <p className="text-lg text-[#a8a29e]">
            No te imponemos frameworks forzados. El stack y la infraestructura se seleccionan formalmente contigo según tu presupuesto real y metas de crecimiento.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.number} className="p-6 rounded-2xl bg-[#181614] border border-[#3d3630]/60 space-y-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${step.accent === 'emerald' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'}`}>
                {step.number}
              </div>
              <h3 className="font-bold text-[#f5f2eb]">{step.title}</h3>
              <p className="text-sm text-[#a8a29e] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Versus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-3xl bg-[#181614] border border-[#3d3630]/80 shadow-2xl">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
              <span aria-hidden>✅</span> Telar Web: Compromiso Honesto
            </div>
            <ul className="space-y-3">
              {telarPros.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#f5f2eb]">
                  <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+:)/, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-lg">
              <span aria-hidden>🔒</span> Agencias Tradicionales: Cajas Negras
            </div>
            <ul className="space-y-3">
              {agencyBads.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#a8a29e]">
                  <span className="text-amber-500 mt-0.5 shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
