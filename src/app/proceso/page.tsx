import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';

export const metadata: Metadata = {
  title: 'Proceso & Acuerdo Tecnológico | Telar Web',
  description:
    'Metodología de ingeniería abierta, contratos sin letra chica, entrega de repositorio al cliente y transparencia radical.',
};

const phases = [
  {
    step: '01',
    name: 'Diagnóstico & Descubrimiento',
    time: 'Semana 1',
    desc: 'Sesión de inmersión técnica y comercial. Analizamos tus metas de negocio, mapeamos el tráfico esperado y estimamos el costo real de servidores para evitar sorpresas a futuro.',
    deliverables: ['Acuerdo de Arquitectura', 'Especificación Funcional', 'Presupuesto Cerrado'],
  },
  {
    step: '02',
    name: 'Prototipado UI/UX Exclusivo',
    time: 'Semana 1 - 2',
    desc: 'Diseñamos la interfaz interactiva desde cero. Validamos contigo flujos de conversión, jerarquía visual y accesibilidad antes de escribir una sola línea de código.',
    deliverables: ['Figma Interactivo', 'Guía de Estilos & Tokens', 'Validación con Stakeholders'],
  },
  {
    step: '03',
    name: 'Sprints de Desarrollo Abierto',
    time: 'Semanas 2 - 5',
    desc: 'Desarrollo en Next.js y TypeScript con acceso directo a un entorno de staging en vivo. Puedes probar cada avance semanalmente y seguir el repositorio de GitHub.',
    deliverables: ['Staging en Vivo', 'Acceso a Repositorio Git', 'Testing Automatizado'],
  },
  {
    step: '04',
    name: 'Despliegue & 100% Propiedad',
    time: 'Lanzamiento',
    desc: 'Desplegamos en tu infraestructura en la nube (AWS, Vercel, Cloudflare o VPS). Eres dueño absoluto del código, dominio, credenciales y documentación en video.',
    deliverables: ['Entrega de Repositorio', 'DNS & SSL Configurado', '30 Días de Garantía'],
  },
];

export default function ProcesoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121110] text-[#f5f2eb]">
      <Header />
      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-amber-600/30 text-amber-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Metodología de Ingeniería Abierta
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#f5f2eb] tracking-tight">
              Tu Proyecto,{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400 bg-clip-text text-transparent">
                Tus Reglas Técnicas
              </span>
              : Transparencia Radical.
            </h1>
            <p className="text-lg text-[#a8a29e] leading-relaxed">
              En Telar Web rompemos el modelo opaco de caja negra. Decides y conoces con total precisión la infraestructura, bases de datos y lenguajes antes de firmar cualquier compromiso.
            </p>
          </div>

          {/* Interactive Code Spec Contract Box */}
          <div className="rounded-3xl bg-[#181614] border border-[#3d3630] p-6 lg:p-10 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 font-mono text-xs text-[#8c7f76]">
                    telar-architecture-contract.spec.ts
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#0c0b0a] border border-[#3d3630]/60 font-mono text-xs text-amber-400 space-y-1.5 leading-relaxed overflow-x-auto">
                  <div className="text-[#8c7f76]">{'// Contrato de Propiedad y Despliegue Consensuado'}</div>
                  <div>
                    <span className="text-emerald-400">const</span> clientAgreement = {'{'}
                  </div>
                  <div className="pl-4">
                    sourceCodeOwnership: <span className="text-amber-300">&quot;100% Client Ownership (Day 1)&quot;</span>,
                  </div>
                  <div className="pl-4">
                    cloudProviderChoice: <span className="text-amber-300">&quot;Client Cloud Account (AWS / GCP / VPS)&quot;</span>,
                  </div>
                  <div className="pl-4">
                    vendorLockIn: <span className="text-rose-400 font-bold">false</span>,
                  </div>
                  <div className="pl-4">
                    hiddenFees: <span className="text-rose-400 font-bold">false</span>,
                  </div>
                  <div className="pl-4">
                    liveStagingAccess: <span className="text-emerald-400 font-bold">true</span>,
                  </div>
                  <div className="pl-4">
                    videoDocumentation: <span className="text-emerald-400 font-bold">true</span>,
                  </div>
                  <div className="pl-4">
                    postLaunchWarranty: <span className="text-amber-300">&quot;30 Days Included&quot;</span>,
                  </div>
                  <div>{'};'}</div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 p-6 rounded-2xl bg-[#1e1b18] border border-amber-600/30">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  El Estándar Telar Web
                </span>
                <p className="text-sm text-[#a8a29e] leading-relaxed">
                  Tus requerimientos definen el ecosistema. No forzamos licencias costosas cuando soluciones open-source o Serverless reducen un 80% tu factura de nube mensual.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#11100f] border border-[#3d3630]/60">
                    <div className="text-[10px] font-mono text-[#8c7f76] uppercase">Inversión Mensual</div>
                    <div className="text-lg font-bold text-amber-400 mt-1">Optimizada</div>
                    <div className="text-[11px] text-[#a8a29e]">Sin sobrecostos</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#11100f] border border-[#3d3630]/60">
                    <div className="text-[10px] font-mono text-[#8c7f76] uppercase">Control del Repo</div>
                    <div className="text-lg font-bold text-emerald-400 mt-1">Total</div>
                    <div className="text-[11px] text-[#a8a29e]">En tu GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#f5f2eb]">
              Las 4 Fases de Construcción
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phases.map((phase) => (
                <div
                  key={phase.step}
                  className="p-8 rounded-2xl bg-[#181614] border border-[#3d3630]/70 space-y-4 hover:border-amber-500/50 transition-colors shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-amber-400">
                      {phase.step}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#11100f] text-emerald-400 border border-emerald-500/30">
                      {phase.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#f5f2eb]">
                    {phase.name}
                  </h3>

                  <p className="text-sm text-[#a8a29e] leading-relaxed">
                    {phase.desc}
                  </p>

                  <div className="pt-2 border-t border-[#3d3630]/40">
                    <div className="text-[11px] font-mono uppercase text-[#8c7f76] mb-1.5">
                      Entregables Clave:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((d) => (
                        <span
                          key={d}
                          className="px-2 py-0.5 rounded text-xs bg-[#11100f] text-[#f5f2eb] border border-[#3d3630]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-[#24211e] via-[#1e1b18] to-[#181614] border border-amber-500/40 text-center space-y-6">
            <h2 className="text-3xl font-extrabold text-[#f5f2eb]">
              ¿Listo para planear tu arquitectura sin ataduras?
            </h2>
            <p className="text-base text-[#a8a29e] max-w-xl mx-auto">
              Simula tu proyecto en nuestro cotizador o agenda un taller de diagnóstico técnico con nuestros ingenieros.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/cotizador"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-[#1a1105] text-sm font-bold shadow-[0_0_24px_rgba(217,119,6,0.35)] hover:from-amber-500 hover:to-amber-400 transition-all"
              >
                Abrir Cotizador Guiado
              </Link>
              <a
                href="https://wa.me/573100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#181614] border border-[#3d3630] text-[#f5f2eb] text-sm font-semibold hover:border-amber-500/50 transition-colors"
              >
                Agendar Taller de Diagnóstico
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
