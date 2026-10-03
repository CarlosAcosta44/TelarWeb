import { Metadata } from 'next';
import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';
import CotizadorWizard from '@/presentation/components/cotizador/CotizadorWizard';

export const metadata: Metadata = {
  title: 'Cotizador Guiado de Software | Telar Web',
  description:
    'Simula y cotiza tu proyecto web o plataforma digital en tiempo real. Precios transparentes en COP y USD, estimación de tiempos y arquitectura técnica consensuada.',
};

export default function CotizadorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121110] text-[#f5f2eb]">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <CotizadorWizard />
      </main>
      <Footer />
    </div>
  );
}
