'use client';

import { useState, useTransition } from 'react';
import { submitQuoteAction } from '@/app/actions';
import { ProjectType, ViewsScope } from '@/domain/entities/QuoteRequest';

interface ProjectTypeOption {
  type: ProjectType;
  title: string;
  desc: string;
  icon: string;
  baseCop: number;
  baseUsd: number;
  timeline: string;
  badge?: string;
}

const projectOptions: ProjectTypeOption[] = [
  {
    type: 'landing',
    title: 'Landing Page de Ventas',
    desc: 'Una sola página hiperoptimizada para lanzamientos, captación de leads y campañas de conversión inmediata.',
    icon: '🚀',
    baseCop: 2200000,
    baseUsd: 550,
    timeline: '1 a 2 semanas',
  },
  {
    type: 'corporate',
    title: 'Sitio Web Corporativo',
    desc: 'Estructura institucional completa, posicionamiento de autoridad de marca y catálogo de servicios con SEO senior.',
    icon: '🏢',
    baseCop: 3800000,
    baseUsd: 950,
    timeline: '2 a 4 semanas',
    badge: 'Más Popular',
  },
  {
    type: 'ecommerce',
    title: 'Tienda Online / E-commerce',
    desc: 'Catálogo de productos, carrito dinámico, panel de inventarios y pasarela local o global integrada (Wompi/PSE).',
    icon: '🛍️',
    baseCop: 5200000,
    baseUsd: 1300,
    timeline: '3 a 5 semanas',
  },
  {
    type: 'custom_saas',
    title: 'Plataforma o SaaS a la Medida',
    desc: 'Lógica de negocio personalizada, paneles de clientes con roles, APIs REST, microservicios y bases de datos cloud.',
    icon: '⚡',
    baseCop: 8900000,
    baseUsd: 2250,
    timeline: '5 a 8 semanas',
  },
  {
    type: 'ai_system',
    title: 'Integración de IA & Automatización',
    desc: 'Flujos con LLMs, RAG sobre documentos de tu empresa, agentes inteligentes conectados a WhatsApp y CRM.',
    icon: '🧠',
    baseCop: 9800000,
    baseUsd: 2450,
    timeline: '6 a 9 semanas',
    badge: 'Deep Tech',
  },
];

interface ScopeOption {
  scope: ViewsScope;
  title: string;
  desc: string;
  extraCop: number;
  extraUsd: number;
  badge: string;
}

const scopeOptions: ScopeOption[] = [
  {
    scope: '1-3',
    title: '1 a 3 Vistas',
    desc: 'Home, Servicios, Contacto',
    extraCop: 0,
    extraUsd: 0,
    badge: 'Básico',
  },
  {
    scope: '4-7',
    title: '4 a 7 Vistas',
    desc: 'Estructura corporativa sólida',
    extraCop: 900000,
    extraUsd: 230,
    badge: 'Recomendado',
  },
  {
    scope: '8+',
    title: '8+ Vistas',
    desc: 'Portafolio, Blog, Casos & FAQs',
    extraCop: 1900000,
    extraUsd: 480,
    badge: 'Extenso',
  },
  {
    scope: 'dynamic',
    title: 'Dinámica Total',
    desc: 'Rutas ilimitadas vía CMS / DB',
    extraCop: 3400000,
    extraUsd: 850,
    badge: 'Completo',
  },
];

interface SpecialModule {
  id: string;
  name: string;
  desc: string;
  priceCop: number;
  priceUsd: number;
  popular?: boolean;
}

const moduleOptions: SpecialModule[] = [
  {
    id: 'payment_gateway',
    name: 'Pasarela de Pagos (PSE, Wompi, Tarjetas o Stripe)',
    desc: 'Cobros en línea seguros, webhooks de confirmación automática y facturación inmediata.',
    priceCop: 1200000,
    priceUsd: 300,
  },
  {
    id: 'ai_agent',
    name: 'Agente de Inteligencia Artificial para WhatsApp & Web',
    desc: 'Entrenado con la información de tu empresa para calificar leads y agendar reuniones 24/7.',
    priceCop: 1800000,
    priceUsd: 450,
    popular: true,
  },
  {
    id: 'headless_cms',
    name: 'Panel Autoadministrable Intuitivo (CMS Headless)',
    desc: 'Edita textos, imágenes y noticias sin tocar código ni depender de programadores.',
    priceCop: 950000,
    priceUsd: 240,
  },
  {
    id: 'multi_language',
    name: 'Arquitectura Multi-idioma (Español / Inglés)',
    desc: 'Rutas internacionalizadas (/es, /en) con SEO optimizado para mercados globales.',
    priceCop: 800000,
    priceUsd: 200,
  },
  {
    id: 'crm_sync',
    name: 'Sincronización Directa a CRM / ERP (HubSpot, Notion, etc.)',
    desc: 'Conexión de formularios y eventos en tiempo real hacia tus bases de datos comerciales.',
    priceCop: 1400000,
    priceUsd: 350,
  },
];

function formatCop(val: number): string {
  return '$' + val.toLocaleString('es-CO');
}

function formatUsd(val: number): string {
  return '$' + val.toLocaleString('en-US');
}

export default function CotizadorWizard() {
  const [selectedProject, setSelectedProject] = useState<ProjectType>('corporate');
  const [selectedScope, setSelectedScope] = useState<ViewsScope>('4-7');
  const [selectedModules, setSelectedModules] = useState<string[]>(['headless_cms']);
  const [techArchitecture, setTechArchitecture] = useState<'telar-recommended' | 'custom-specs'>('telar-recommended');

  // Lead capture form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Calculations
  const currentProject = projectOptions.find((p) => p.type === selectedProject)!;
  const currentScope = scopeOptions.find((s) => s.scope === selectedScope)!;
  const activeModules = moduleOptions.filter((m) => selectedModules.includes(m.id));

  const totalCop =
    currentProject.baseCop +
    currentScope.extraCop +
    activeModules.reduce((acc, m) => acc + m.priceCop, 0);

  const totalUsd =
    currentProject.baseUsd +
    currentScope.extraUsd +
    activeModules.reduce((acc, m) => acc + m.priceUsd, 0);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim()) {
      setErrorMessage('Por favor ingresa tu nombre o el de tu empresa.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Por favor ingresa tu número de WhatsApp o teléfono.');
      return;
    }

    startTransition(async () => {
      const result = await submitQuoteAction({
        clientName: name,
        clientEmail: email,
        clientPhone: phone,
        projectType: selectedProject,
        viewsScope: selectedScope,
        specialModules: selectedModules,
        techArchitecture: techArchitecture,
        estimatedPriceCop: totalCop,
        estimatedPriceUsd: totalUsd,
        estimatedTimeline: currentProject.timeline,
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error);
      }
    });
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola Telar Web! He configurado una cotización para un *${currentProject.title}* (${currentScope.title}). Estimado: ${formatCop(totalCop)} COP. Mi nombre es ${name || 'un prospecto'}. ¿Podemos agendar una llamada de diagnóstico?`
  );

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-amber-600/30 text-amber-400 font-mono text-xs uppercase tracking-widest shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Simulador Interactivo en Tiempo Real
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#f5f2eb] tracking-tight">
          Cotizador Guiado{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 bg-clip-text text-transparent">
            de Software
          </span>
        </h1>
        <p className="text-lg text-[#a8a29e] leading-relaxed">
          Diseña tu proyecto web a la medida seleccionando alcance, módulos y arquitectura. Transparencia de costos sin intermediarios ni cobros sorpresa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Interactive Wizard (8 Columns) */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* STEP 1: Tipo de Proyecto */}
          <section className="bg-[#181614] rounded-2xl p-6 sm:p-8 border border-[#3d3630]/70 shadow-xl flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-[#1a1105] font-bold text-sm shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                  1
                </span>
                <div>
                  <h2 className="text-xl font-bold text-[#f5f2eb]">
                    Tipo de Solución Digital
                  </h2>
                  <p className="text-xs text-[#a8a29e]">
                    Selecciona el núcleo o propósito principal de tu sistema web.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-wider hidden sm:block">
                Paso Requerido
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectOptions.map((opt) => {
                const isSelected = selectedProject === opt.type;
                return (
                  <button
                    key={opt.type}
                    type="button"
                    onClick={() => setSelectedProject(opt.type)}
                    className={`text-left p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between gap-4 cursor-pointer ${
                      isSelected
                        ? 'bg-[#272320] border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                        : 'bg-[#151311] border-[#3d3630]/60 hover:bg-[#1e1b18] hover:border-amber-500/40'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#1e1b18] border border-amber-500/20 flex items-center justify-center text-xl">
                        {opt.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        {opt.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                            {opt.badge}
                          </span>
                        )}
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            isSelected
                              ? 'bg-amber-500 text-[#1a1105]'
                              : 'border border-[#3d3630] bg-[#11100f]'
                          }`}
                        >
                          {isSelected && '✓'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="font-bold text-base text-[#f5f2eb]">
                        {opt.title}
                      </div>
                      <p className="text-xs text-[#a8a29e] mt-1.5 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#3d3630]/40 text-xs">
                      <span className="font-mono font-bold text-amber-400">
                        Desde {formatCop(opt.baseCop)} COP
                      </span>
                      <span className="text-[#8c7f76] font-mono">
                        ~ {opt.timeline}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* STEP 2: Alcance de Vistas */}
          <section className="bg-[#181614] rounded-2xl p-6 sm:p-8 border border-[#3d3630]/70 shadow-xl flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-[#1a1105] font-bold text-sm shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                2
              </span>
              <div>
                <h2 className="text-xl font-bold text-[#f5f2eb]">
                  Volumen y Arquitectura de Vistas
                </h2>
                <p className="text-xs text-[#a8a29e]">
                  ¿Cuántas secciones o pantallas estructuradas necesita tu desarrollo?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {scopeOptions.map((scopeOpt) => {
                const isSelected = selectedScope === scopeOpt.scope;
                return (
                  <button
                    key={scopeOpt.scope}
                    type="button"
                    onClick={() => setSelectedScope(scopeOpt.scope)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[#272320] border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                        : 'bg-[#151311] border-[#3d3630]/60 hover:bg-[#1e1b18] hover:border-amber-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-semibold text-emerald-400">
                        {scopeOpt.badge}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#f5f2eb]">
                        {scopeOpt.title}
                      </div>
                      <div className="text-xs text-[#a8a29e] mt-1">
                        {scopeOpt.desc}
                      </div>
                    </div>
                    <div className="font-mono text-xs text-amber-400 font-bold pt-2 border-t border-[#3d3630]/40">
                      {scopeOpt.extraCop === 0 ? 'Incluido en base' : `+ ${formatCop(scopeOpt.extraCop)} COP`}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* STEP 3: Módulos & Funcionalidades Especiales */}
          <section className="bg-[#181614] rounded-2xl p-6 sm:p-8 border border-[#3d3630]/70 shadow-xl flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-[#1a1105] font-bold text-sm shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                3
              </span>
              <div>
                <h2 className="text-xl font-bold text-[#f5f2eb]">
                  Módulos & Funcionalidades Especiales
                </h2>
                <p className="text-xs text-[#a8a29e]">
                  Agrega capacidades de monetización, automatización e inteligencia a tu plataforma.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {moduleOptions.map((mod) => {
                const isChecked = selectedModules.includes(mod.id);
                return (
                  <label
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                      isChecked
                        ? 'bg-[#272320] border-amber-500/70 shadow-sm'
                        : 'bg-[#151311] border-[#3d3630]/60 hover:bg-[#1e1b18] hover:border-amber-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-5 h-5 rounded bg-[#11100f] border-[#3d3630] text-amber-500 focus:ring-0 cursor-pointer"
                      />
                      <div>
                        <div className="font-semibold text-sm text-[#f5f2eb] flex items-center gap-2">
                          <span>{mod.name}</span>
                          {mod.popular && (
                            <span className="px-2 py-0.2 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#a8a29e] mt-1 leading-relaxed">
                          {mod.desc}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs text-amber-400 font-bold block">
                        + {formatCop(mod.priceCop)} COP
                      </span>
                      <span className="text-[10px] font-mono text-[#8c7f76]">
                        ({formatUsd(mod.priceUsd)} USD)
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </section>

          {/* STEP 4: Definición de Arquitectura */}
          <section className="bg-[#181614] rounded-2xl p-6 sm:p-8 border border-[#3d3630]/70 shadow-xl flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-[#1a1105] font-bold text-sm shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                4
              </span>
              <div>
                <h2 className="text-xl font-bold text-[#f5f2eb]">
                  Definición de Arquitectura & Stack
                </h2>
                <p className="text-xs text-[#a8a29e]">
                  ¿Tienes infraestructura existente o prefieres la recomendación óptima Telar?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setTechArchitecture('telar-recommended')}
                className={`text-left p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer ${
                  techArchitecture === 'telar-recommended'
                    ? 'bg-[#272320] border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                    : 'bg-[#151311] border-[#3d3630]/60 hover:bg-[#1e1b18]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-[#1e1b18] border border-amber-500/30 flex items-center justify-center text-amber-400 text-sm">
                    ✨
                  </span>
                  <span
                    className={`w-4 h-4 rounded-full ${
                      techArchitecture === 'telar-recommended'
                        ? 'bg-amber-500 shadow-[0_0_6px_#f59e0b]'
                        : 'border border-[#3d3630]'
                    }`}
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#f5f2eb]">
                    Recomendación Telar (Óptimo)
                  </div>
                  <p className="text-xs text-[#a8a29e] mt-1.5 leading-relaxed">
                    Next.js + Tailwind + Vercel / Cloudflare + Supabase. Máxima velocidad, menor costo mensual y PageSpeed 95+.
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTechArchitecture('custom-specs')}
                className={`text-left p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between gap-3 cursor-pointer ${
                  techArchitecture === 'custom-specs'
                    ? 'bg-[#272320] border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                    : 'bg-[#151311] border-[#3d3630]/60 hover:bg-[#1e1b18]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-[#1e1b18] border border-amber-500/30 flex items-center justify-center text-amber-400 text-sm">
                    ⚙️
                  </span>
                  <span
                    className={`w-4 h-4 rounded-full ${
                      techArchitecture === 'custom-specs'
                        ? 'bg-amber-500 shadow-[0_0_6px_#f59e0b]'
                        : 'border border-[#3d3630]'
                    }`}
                  />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#f5f2eb]">
                    Requerimientos Específicos
                  </div>
                  <p className="text-xs text-[#a8a29e] mt-1.5 leading-relaxed">
                    ¿Tienes infraestructura propia (AWS, GCP, VPS, Docker, o bases de datos existentes)? Lo acordamos en el taller técnico.
                  </p>
                </div>
              </button>
            </div>
          </section>

          {/* Guarantee Pill */}
          <div className="bg-[#181614] rounded-2xl p-6 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold text-lg">
                🤝
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#f5f2eb]">Pacto de Claridad Telar</h3>
                <p className="text-xs text-[#a8a29e]">
                  El valor estimado es el valor que acordamos en el contrato formal. Cero letras chicas ni cobros imprevistos.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#11100f] border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold whitespace-nowrap">
              Sin cobros sorpresa
            </div>
          </div>
        </div>

        {/* Right: Sticky Live Investment Summary (4 Columns) */}
        <aside className="lg:col-span-4 sticky top-24 flex flex-col gap-6">
          <div className="bg-[#181614] rounded-2xl p-6 sm:p-7 border border-amber-500/40 shadow-2xl backdrop-blur-xl flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#3d3630]/60">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">📋</span>
                <span className="font-bold text-base text-[#f5f2eb]">
                  Resumen en Vivo
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30">
                Estimación 2025
              </span>
            </div>

            {/* Price Display */}
            <div className="bg-[#11100f] border border-amber-500/40 p-4 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.15)] flex flex-col gap-1">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Inversión Estimada Total
              </div>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-3xl font-extrabold text-amber-400 tracking-tight font-mono drop-shadow-[0_0_12px_rgba(245,158,11,0.35)]">
                  {formatCop(totalCop)}
                </span>
                <span className="font-mono text-xs text-amber-400 font-bold">
                  COP
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#3d3630]/50 text-xs">
                <span className="text-[#a8a29e]">Equivalente aprox:</span>
                <span className="font-mono text-emerald-400 font-bold">
                  ~ {formatUsd(totalUsd)} USD
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#11100f] border border-[#3d3630]/60 text-xs">
              <div className="flex items-center gap-2 text-[#f5f2eb]">
                <span className="text-amber-400">⏱️</span>
                <span className="font-semibold">Tiempo Estimado:</span>
              </div>
              <span className="font-mono font-bold text-amber-400">
                {currentProject.timeline}
              </span>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-[#8c7f76] uppercase tracking-wider">
                Desglose de Parámetros
              </div>
              <div className="text-xs space-y-1.5 font-mono">
                <div className="flex items-center justify-between py-1 text-[#f5f2eb] border-b border-[#3d3630]/40">
                  <span className="truncate pr-2">{currentProject.title}</span>
                  <span className="text-amber-400 font-bold">
                    {formatCop(currentProject.baseCop)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-[#f5f2eb] border-b border-[#3d3630]/40">
                  <span className="truncate pr-2">{currentScope.title}</span>
                  <span className="text-amber-400 font-bold">
                    {currentScope.extraCop === 0 ? '$0' : `+${formatCop(currentScope.extraCop)}`}
                  </span>
                </div>

                {activeModules.map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between py-1 text-[#a8a29e] border-b border-[#3d3630]/40"
                  >
                    <span className="truncate pr-2">{m.name}</span>
                    <span className="text-amber-400 font-semibold">
                      +{formatCop(m.priceCop)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Telar Standard Inclusions */}
            <div className="bg-[#11100f] border border-[#3d3630]/60 p-4 rounded-xl space-y-2">
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>🛡️</span> Siempre Incluido en Telar:
              </span>
              <ul className="text-xs space-y-1 text-[#a8a29e]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 100% código propio en tu repositorio
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Despliegue y dominio primer año
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> PageSpeed 95+ (Core Web Vitals)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 30 días de garantía post-lanzamiento
                </li>
              </ul>
            </div>

            {/* Submission Form */}
            {submitted ? (
              <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <h4 className="font-bold text-base text-[#f5f2eb]">
                  ¡Cotización Guardada!
                </h4>
                <p className="text-xs text-[#a8a29e]">
                  Registramos tu solicitud en nuestra plataforma. Un arquitecto revisará los detalles y te responderá en menos de 2 horas hábiles.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/573100000000?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 text-[#0c0b0a] font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition-colors"
                  >
                    Abrir WhatsApp con esta cotización
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                <div className="text-xs font-semibold text-[#f5f2eb]">
                  Reserva tu cotización:
                </div>

                {errorMessage && (
                  <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu Nombre o Empresa *"
                  required
                  className="w-full bg-[#11100f] text-[#f5f2eb] px-3.5 py-2.5 rounded-xl border border-[#3d3630] placeholder:text-[#8c7f76] text-xs focus:outline-none focus:border-amber-500"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo Corporativo *"
                  required
                  className="w-full bg-[#11100f] text-[#f5f2eb] px-3.5 py-2.5 rounded-xl border border-[#3d3630] placeholder:text-[#8c7f76] text-xs focus:outline-none focus:border-amber-500"
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp / Teléfono (+57...) *"
                  required
                  className="w-full bg-[#11100f] text-[#f5f2eb] px-3.5 py-2.5 rounded-xl border border-[#3d3630] placeholder:text-[#8c7f76] text-xs focus:outline-none focus:border-amber-500"
                />

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-500 text-[#1a1105] font-bold text-xs shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isPending ? (
                    <span>Guardando cotización...</span>
                  ) : (
                    <>
                      <span>Solicitar Asesoría & Bloquear Cotización</span>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[10px] font-mono text-[#8c7f76] text-center">
                  Atención personalizada desde Bogotá. Sin compromisos ni llamadas intrusivas.
                </p>
              </form>
            )}

            {/* Direct WhatsApp Callout */}
            <div className="p-3.5 rounded-xl bg-[#11100f] border border-amber-500/20 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-[#f5f2eb]">¿Prefieres charlar ya?</div>
                <div className="text-[11px] text-[#a8a29e]">Conecta directo con ingeniería</div>
              </div>
              <a
                href={`https://wa.me/573100000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold hover:bg-emerald-500/25 transition-colors"
              >
                Hablar
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
