'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { submitQuoteAction } from '@/app/actions';

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const clientName = formData.get('name') as string;
    const clientEmail = formData.get('email') as string;
    const clientPhone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!clientName?.trim() || !clientEmail?.trim() || !clientPhone?.trim()) {
      setError('Por favor completa todos los campos requeridos.');
      return;
    }

    startTransition(async () => {
      const res = await submitQuoteAction({
        clientName,
        clientEmail,
        clientPhone,
        projectType: 'corporate',
        viewsScope: '1-3',
        specialModules: message ? [`Mensaje directo: ${message}`] : ['Contacto directo desde landing page'],
        techArchitecture: 'telar-recommended',
        estimatedPriceCop: 3800000,
        estimatedPriceUsd: 950,
        estimatedTimeline: '2 a 4 semanas',
      });

      if (res.success) {
        setSuccess(true);
      } else {
        setError(res.error);
      }
    });
  };

  return (
    <section id="contacto" className="w-full bg-[#11100f] py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1b18] border border-amber-600/30 font-mono text-xs text-amber-400 uppercase tracking-widest">
                Contacto Directo
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#f5f2eb] leading-tight tracking-tight">
                Hablemos de tu proyecto hoy mismo.
              </h2>
              <p className="text-lg text-[#a8a29e] leading-relaxed">
                Estamos listos para evaluar tus requerimientos y estructurar una propuesta clara, técnica y viable en menos de 24 horas.
              </p>
            </div>

            {/* Direct info cards */}
            <div className="space-y-4 pt-2">
              <a
                href="https://wa.me/573100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#181614] border border-[#3d3630]/60 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.54 1.106.31 1.688l-.79 2.012 2.388-.636c.523-.139 1.082-.036 1.517.274A9.155 9.155 0 0012 20.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8c7f76] uppercase">WhatsApp Directo</div>
                  <div className="text-sm font-bold text-[#f5f2eb] group-hover:text-emerald-400 transition-colors">+57 310 000 0000</div>
                </div>
              </a>

              <a
                href="mailto:contacto@telarweb.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#181614] border border-[#3d3630]/60 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 group-hover:scale-105 transition-transform">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8c7f76] uppercase">Correo Electrónico</div>
                  <div className="text-sm font-bold text-[#f5f2eb] group-hover:text-amber-400 transition-colors">contacto@telarweb.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#181614] border border-[#3d3630]/60">
                <div className="w-11 h-11 rounded-lg bg-[#272320] text-[#a8a29e] flex items-center justify-center">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8c7f76] uppercase">Ubicación</div>
                  <div className="text-sm font-bold text-[#f5f2eb]">Bogotá D.C., Colombia · Remoto Global</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick intake form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181614] border border-[#3d3630] shadow-2xl">
              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f5f2eb]">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-sm text-[#a8a29e] max-w-md mx-auto">
                    Un arquitecto de soluciones de Telar Web revisará tus requerimientos y se comunicará contigo en menos de 24 horas hábiles.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/cotizador"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-[#1a1105] text-sm font-bold shadow-[0_0_20px_rgba(217,119,6,0.35)]"
                    >
                      O probar el cotizador guiado
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#f5f2eb]">
                      Inicia tu diagnóstico técnico
                    </h3>
                    <p className="text-sm text-[#a8a29e] mt-1">
                      Cuéntanos sobre tu visión comercial o técnica.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-[#a8a29e] uppercase">
                        Tu Nombre / Empresa *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ej. Carlos Acosta"
                        className="w-full bg-[#11100f] text-[#f5f2eb] px-4 py-3 rounded-xl border border-[#3d3630] focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-mono text-[#a8a29e] uppercase">
                        WhatsApp / Teléfono *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Ej. +57 310 000 0000"
                        className="w-full bg-[#11100f] text-[#f5f2eb] px-4 py-3 rounded-xl border border-[#3d3630] focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-[#a8a29e] uppercase">
                      Correo Electrónico *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="nombre@tuempresa.com"
                      className="w-full bg-[#11100f] text-[#f5f2eb] px-4 py-3 rounded-xl border border-[#3d3630] focus:outline-none focus:border-amber-500 text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-[#a8a29e] uppercase">
                      Detalles del Proyecto
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      placeholder="¿Qué tipo de solución buscas? ¿Plataforma web, e-commerce, integración IA...?"
                      className="w-full bg-[#11100f] text-[#f5f2eb] px-4 py-3 rounded-xl border border-[#3d3630] focus:outline-none focus:border-amber-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-500 text-[#1a1105] text-sm font-bold shadow-[0_0_24px_rgba(217,119,6,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <span>Enviando información...</span>
                    ) : (
                      <>
                        <span>Solicitar Contacto Técnico Inmediato</span>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-[#8c7f76] text-center">
                    Garantizamos confidencialidad absoluta. Sin SPAM ni insistencias comerciales.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
