import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Telar Web — Desarrollo Web Artesanal para Pymes',
  description:
    'Agencia boutique de desarrollo web en Colombia. Sitios web ultra-rápidos, diseño original y arquitectura acordada contigo. Sin plantillas, con código de calidad.',
  keywords: ['desarrollo web', 'agencia web colombia', 'diseño web pymes', 'next.js colombia'],
  openGraph: {
    title: 'Telar Web — Desarrollo Web Artesanal',
    description: 'Transformamos tu presencia digital con desarrollo web a la medida.',
    type: 'website',
    locale: 'es_CO',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
