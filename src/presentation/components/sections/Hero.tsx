import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#151311] pt-32 pb-24 lg:pt-40 lg:pb-32 border-b border-[#3d3630]/60"
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-amber-600/30 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-amber-500 -ml-2.5" />
              <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                Equipo Joven de Ingeniería · Colombia
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#f5f2eb] leading-tight tracking-tight">
              Transformamos tu{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 bg-clip-text text-transparent">
                presencia digital
              </span>{' '}
              con desarrollo web a la medida.
            </h1>

            {/* Sub */}
            <p className="text-lg text-[#a8a29e] leading-relaxed max-w-2xl">
              Ayudamos a pymes, profesionales y empresas en crecimiento a salir de la invisibilidad digital con sitios web ultra-rápidos, modernos y diseñados para vender. Sin plantillas genéricas, con código de calidad y propósito humano.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/cotizador"
                id="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-[#1a1105] font-bold shadow-[0_0_28px_rgba(217,119,6,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:from-amber-500 hover:to-amber-400 transition-all duration-300 group text-sm"
              >
                Diseñar cotización a la medida
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/#proceso"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1e1b18] border border-[#3d3630] text-[#f5f2eb] font-semibold hover:bg-[#272320] hover:border-amber-600/40 transition-all duration-300 text-sm"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-emerald-400" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Conoce nuestro proceso
              </Link>
            </div>

            {/* Trust pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {[
                { icon: '⚡', text: '99+ en Google PageSpeed' },
                { icon: '🔧', text: 'Stack acordado contigo' },
                { icon: '🛡️', text: '100% Código propio' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#181614] border border-[#3d3630]/60 shadow-sm">
                  <span className="text-base" aria-hidden>{icon}</span>
                  <span className="text-xs font-semibold text-[#f5f2eb] leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#1e1b18] p-2 border border-[#3d3630] shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
              {/* Chart preview */}
              <div className="relative w-full h-72 rounded-xl overflow-hidden bg-[#0c0b0a] flex items-end p-4 gap-2">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-emerald-900/20" />
                {[30, 45, 60, 75, 85, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background: i === 5
                        ? 'linear-gradient(to top, #d97706, #f59e0b)'
                        : i >= 3
                        ? 'rgba(16,185,129,0.5)'
                        : 'rgba(62,58,50,0.8)',
                      boxShadow: i === 5 ? '0 0 12px rgba(245,158,11,0.5)' : undefined,
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a]/80 via-transparent to-transparent" />
              </div>

              {/* Metric overlay */}
              <div className="absolute -bottom-4 left-4 right-4 sm:right-auto sm:w-72 p-4 rounded-xl bg-[#1e1b18]/95 border border-[#3d3630] backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8c7f76] font-mono">Rendimiento y conversión</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold font-mono text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full">
                    ↑ +210%
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#f5f2eb] mt-2">
                  Soluciones web diseñadas para escalar ventas
                </p>
              </div>

              {/* Tech badge */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-[#1e1b18]/95 border border-[#3d3630] backdrop-blur-md shadow-2xl">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 text-base">
                  🧠
                </div>
                <div>
                  <p className="text-sm font-bold text-[#f5f2eb]">Next.js 16 + IA</p>
                  <p className="text-xs font-mono text-amber-400">Arquitectura Consensuada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
