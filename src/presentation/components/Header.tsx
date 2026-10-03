'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proceso', label: 'Proceso & Acuerdo' },
  { href: '/#portafolio', label: 'Casos de Éxito' },
  { href: '/#cotizador', label: 'Cotizador' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121110]/95 backdrop-blur-xl border-b border-[#3d3630]/60 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
          aria-label="Telar Web — Inicio"
        >
          <span className="font-bold text-xl text-[#f5f2eb] tracking-tight">
            Telar <span className="text-amber-400">Web</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-[#a8a29e] hover:text-[#f5f2eb] hover:bg-[#1e1b18] transition-all tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cotizador"
            id="header-cta-cotizar"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-[#1a1105] text-sm font-bold shadow-[0_0_20px_rgba(217,119,6,0.35)] hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] hover:from-amber-500 hover:to-amber-400 transition-all duration-300"
          >
            Cotizar proyecto
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#a8a29e] hover:text-[#f5f2eb] hover:bg-[#1e1b18] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-[#3d3630]/60 bg-[#121110]/98 backdrop-blur-xl px-6 py-4 flex flex-col gap-1"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setMobileOpen(false);
                handleNavClick(e, link.href);
              }}
              className="px-4 py-3 rounded-lg text-sm font-semibold text-[#a8a29e] hover:text-[#f5f2eb] hover:bg-[#1e1b18] transition-all tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
