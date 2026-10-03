'use client';

import React, { useState } from 'react';
import { submitContactAction } from '@/app/actions';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const result = await submitContactAction(data);

    setIsSubmitting(false);
    if (result.success) {
      setStatusMessage({ type: 'success', text: 'Mensaje enviado exitosamente. Te contactaremos pronto.' });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatusMessage({ type: 'error', text: result.error });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Info Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              ¿Listo para dar el <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">siguiente paso?</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
              Escríbenos para agendar un diagnóstico inicial gratuito. Hablaremos de tus metas, analizaremos tu presencia digital actual y propondremos la mejor arquitectura para tu negocio.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Correo Electrónico</h4>
                  <a href="mailto:hola@telarweb.com" className="text-neutral-400 hover:text-orange-400 transition-colors">hola@telarweb.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/20">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">WhatsApp Directo</h4>
                  <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">+57 300 000 0000</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Nombre completo</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all placeholder-neutral-600"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Empresa / Proyecto</label>
                    <input 
                      type="text" 
                      name="company"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all placeholder-neutral-600"
                      placeholder="Ej. Mi Tienda S.A."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Correo electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all placeholder-neutral-600"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">¿En qué podemos ayudarte?</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none placeholder-neutral-600"
                    placeholder="Cuéntanos brevemente sobre tu negocio y qué buscas lograr en internet..."
                  />
                </div>

                {statusMessage && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {statusMessage.text}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-xs text-neutral-500 text-center mt-4">
                  Al enviar este formulario aceptas nuestra política de privacidad. Tus datos están seguros.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
