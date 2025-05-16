import HeroSlides from "@/components/Slide";
import Services from "@/pages/Service";
import Digital from './../pages/Digital';
import Negocio from './../pages/negocio';
import Cambio from './../pages/Cambio';
import Simulador from './../pages/Simulador';
import Atendimento from './../pages/Atendimento';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <main className="mx-auto max-w-[1440px] ">
        <HeroSlides />
        <Services />
        <Digital />
        <Negocio/>
        <Cambio />
        <Simulador />
        <Atendimento/>
        <Footer />
      </main>
    </div>
  );
}