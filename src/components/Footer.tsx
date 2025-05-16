import Link from 'next/link';
import Image from 'next/image';
import { Youtube, Linkedin, Facebook, Instagram } from 'lucide-react';
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto bg-[#edf0f5] text-[#39405C] p-6 sm:p-10 md:p-20 font-inter font-medium">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        {/* Sobre Nós */}
        <div>
          <h2 className="font-semibold text-2xl pb-4">Sobre Nós</h2>
          <ul className="leading-6 tracking-custom-wide font-franklin font-medium space-y-2">
            <li><Link href="#">Nossos Valores</Link></li>
            <li><Link href="#">Visão</Link></li>
            <li><Link href="#">Responsabilidade Social</Link></li>
            <li><Link href="#">Código de conduta</Link></li>
            <li><Link href="#">Código de ética</Link></li>
          </ul>
        </div>

        {/* Produto */}
        <div>
          <h2 className="font-semibold text-2xl pb-4">Produto</h2>
          <ul className="leading-6 tracking-custom-wide font-franklin font-medium space-y-2">
            <li><Link href="#">Descoberto autorizado</Link></li>
            <li><Link href="#">CrediAzul</Link></li>
            <li><Link href="#">Crédito habitação</Link></li>
            <li><Link href="#">Leasing</Link></li>
            <li><Link href="#">Equity Release</Link></li>
          </ul>
        </div>

        {/* Redes Sociais & App */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="font-semibold text-2xl pb-4">Redes Sociais</h2>
            <div className="flex gap-4">
              <Link href="#"><Youtube className="w-6 h-6" /></Link>
              <Link href="#"><Linkedin className="w-6 h-6" /></Link>
              <Link href="#"><Facebook className="w-6 h-6" /></Link>
              <Link href="#"><Instagram className="w-6 h-6" /></Link>
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold pb-4">Baixe o nosso app</p>
            <div className="flex flex-col sm:flex-row gap-4 text-white">
              <Link href="#">
                <button className="flex w-full sm:w-44 h-[64px] items-center justify-center bg-[#0039AC] rounded-lg p-4 shadow hover:bg-white hover:text-black transition-colors">
                  <FaApple className="w-6 h-6 mr-2" />
                  <span className="text-sm text-left">Download via Apple Store</span>
                </button>
              </Link>
              <Link href="#">
                <button className="flex w-full sm:w-44 h-[64px] items-center justify-center bg-[#0039AC] rounded-lg p-4 shadow hover:bg-white hover:text-black transition-colors">
                  <FaGooglePlay className="w-6 h-6 mr-2" />
                  <span className="text-sm text-left">Download via Google Play</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        <div className="w-full md:w-[60%]">
          <Image src="/logo2.png" alt="logo" width={30} height={30} />
          <p className="mt-4 leading-6 tracking-custom-wide text-sm text-gray-700">
            PAIA | Fica | NCA © 2024 | standardbank.co.mz é um serviço de Internet
            Banking disponibilizado pelo Standard Bank, S.A., autorizada nos
            termos da legislação sobre consultoria financeira e serviços de
            intermediação financeira.
          </p>
        </div>

        <div className="text-sm font-franklin text-graybody">
          <ul className="flex flex-col sm:flex-row gap-4 underline underline-offset-2">
            <li><Link href="#">Standard Bank Group</Link></li>
            <li><Link href="#">Copyright</Link></li>
            <li><Link href="#">Termos de uso</Link></li>
            <li><Link href="#">Política de privacidade</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
