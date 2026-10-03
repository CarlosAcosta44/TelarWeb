'use client';

import React from 'react';
import Link from 'next/link';

export default function QuoterTeaser() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#121110] to-[#1a1816]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Cotizador Interactivo
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
            Descubre cuánto cuesta tu próximo proyecto web en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">segundos</span>
          </h2>
          
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Sin reuniones largas ni presupuestos ocultos. Selecciona tus necesidades, añade módulos y obtén un estimado transparente en tiempo real.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/cotizador"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Iniciar Cotización Gratis</span>
              <svg 
                className="w-5 h-5 relative z-10 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-[#121110] flex items-center justify-center text-xs text-white">✓</div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-[#121110] flex items-center justify-center text-xs text-white">✓</div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-[#121110] flex items-center justify-center text-xs text-white">✓</div>
              </div>
              <span>100% Transparente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
