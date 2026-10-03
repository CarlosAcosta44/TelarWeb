'use client';

import React from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Clínica Odontológica Sonríe',
    sector: 'Salud / Odontología',
    metric: '+210%',
    metricLabel: 'de leads calificados',
    description: 'Rediseño completo de la plataforma de agendamiento y presencia web, optimizando el embudo de conversión para pacientes de alto valor.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 2,
    title: 'Nova Retail',
    sector: 'E-commerce / Retail',
    metric: '0.9s',
    metricLabel: 'tiempo de carga (antes 6.4s)',
    description: 'Migración a arquitectura Headless (Next.js + Shopify) logrando tiempos de carga instantáneos y duplicando la tasa de retención móvil.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 3,
    title: 'Logística B2B Express',
    sector: 'Logística',
    metric: '-80%',
    metricLabel: 'de llamadas operativas',
    description: 'Desarrollo de un portal de clientes autogestionable con seguimiento en tiempo real y facturación automatizada.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    color: 'from-indigo-500/20 to-purple-500/20'
  }
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 bg-[#121110] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            Resultados Reales
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Éxito y Portafolio</span>
          </h2>
          <p className="text-lg text-neutral-400">
            No solo construimos interfaces hermosas, construimos herramientas que impactan el ROI. Descubre cómo hemos ayudado a otras empresas a escalar su operación digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.05] transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-overlay z-10 opacity-60 group-hover:opacity-40 transition-opacity`} />
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Sector Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-neutral-300">
                    {item.sector}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-8 flex-1 leading-relaxed">
                  {item.description}
                </p>

                {/* Metric Highlight */}
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">
                      {item.metric}
                    </span>
                    <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
