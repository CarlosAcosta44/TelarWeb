import Link from 'next/link';

const footerLinks = [
  {
    title: 'Navegación',
    links: [
      { href: '/', label: 'Inicio' },
      { href: '/servicios', label: 'Servicios' },
      { href: '/proceso', label: 'Proceso & Acuerdo' },
      { href: '/casos-de-exito', label: 'Casos de Éxito' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { href: '/cotizador', label: 'Cotizador Guiado' },
      { href: '/servicios#sitios-web', label: 'Landing Pages & Corporativos' },
      { href: '/servicios#ecommerce', label: 'E-commerce a la Medida' },
      { href: '/servicios#ia-automatizacion', label: 'Integración IA & Flujos' },
      { href: '/servicios#saas-medida', label: 'Plataformas SaaS' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0b0a] border-t border-[#3d3630]/60 text-[#a8a29e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3d3630]/60">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                <span className="text-[#1a1105] font-bold text-sm font-mono">TW</span>
              </div>
              <span className="font-bold text-lg text-[#f5f2eb]">
                Telar <span className="text-amber-400">Web</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Tejiendo el futuro digital de pymes y profesionales con tecnología cercana, transparente y de alto rendimiento.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Ingeniería de Software · Colombia
              </span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="lg:col-span-2 space-y-3">
              <div className="text-xs font-bold text-[#f5f2eb] uppercase tracking-wider">{group.title}</div>
              <ul className="space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-amber-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#f5f2eb] uppercase tracking-wider">Contacto</div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-[#8c7f76] mb-0.5">Correo</p>
                <a href="mailto:contacto@telarweb.co" className="hover:text-amber-400 transition-colors">
                  contacto@telarweb.co
                </a>
              </div>
              <div>
                <p className="text-xs text-[#8c7f76] mb-0.5">WhatsApp</p>
                <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  +57 300 000 0000
                </a>
              </div>
              <div>
                <p className="text-xs text-[#8c7f76] mb-0.5">Ubicación</p>
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c7f76]">
          <p>© {new Date().getFullYear()} Telar Web. Todos los derechos reservados.</p>
          <p className="font-mono">Hecho con 🧵 en Colombia</p>
        </div>
      </div>
    </footer>
  );
}
