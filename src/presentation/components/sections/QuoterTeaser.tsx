import Link from 'next/link';

export default function QuoterTeaser() {
  return (
    <section id="cotizador-destacado" className="w-full bg-[#151311] py-24 border-y border-[#3d3630]/60 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-[#24211e] via-[#1e1b18] to-[#181614] border border-amber-600/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151311] border border-amber-600/30 font-mono text-xs text-amber-400 uppercase tracking-widest">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Cotizador Guiado Online
              </div>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#f5f2eb] tracking-tight">
                Simula y Cotiza Tu Proyecto en{' '}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  2 Minutos
                </span>
              </h2>

              <p className="text-base lg:text-lg text-[#a8a29e] leading-relaxed">
                Transparencia radical desde el primer clic. Configura tus requerimientos de arquitectura, vistas, módulos e integraciones con cálculo en vivo en pesos colombianos (COP) y dólares (USD).
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {[
                  { label: 'Sin letras chicas', color: 'bg-emerald-400' },
                  { label: 'Desglose transparente', color: 'bg-amber-500' },
                  { label: 'Estimación de tiempos reales', color: 'bg-amber-400' },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c0b0a] border border-[#3d3630] font-mono text-xs text-[#f5f2eb]"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right card teaser */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="p-7 rounded-2xl bg-[#0c0b0a] border border-[#3d3630] shadow-xl w-full max-w-sm space-y-5 text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/20">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#f5f2eb]">
                    Configurador Interactivo
                  </h3>
                  <p className="text-xs text-[#a8a29e] mt-1">
                    Landing Page · Sitio Corporativo · E-commerce · Sistema IA
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151311] border border-[#2b2723] text-left space-y-1.5">
                  <div className="flex justify-between text-xs text-[#8c7f76] font-mono">
                    <span>Inversión desde</span>
                    <span className="text-amber-400 font-bold">$2.2M COP</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#8c7f76] font-mono">
                    <span>Entrega desde</span>
                    <span className="text-emerald-400 font-bold">1 a 2 semanas</span>
                  </div>
                </div>

                <Link
                  href="/cotizador"
                  id="quoter-teaser-button"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-[#1a1105] text-sm font-bold shadow-[0_0_24px_rgba(217,119,6,0.35)] hover:from-amber-500 hover:to-amber-400 transition-all duration-300 group"
                >
                  Abrir Cotizador Guiado
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
