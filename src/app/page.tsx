import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';
import Hero from '@/presentation/components/sections/Hero';
import Services from '@/presentation/components/sections/Services';
import Process from '@/presentation/components/sections/Process';
import Portfolio from '@/presentation/components/sections/Portfolio';
import QuoterTeaser from '@/presentation/components/sections/QuoterTeaser';
import Contact from '@/presentation/components/sections/Contact';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#121110] text-[#f5f2eb]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <QuoterTeaser />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
