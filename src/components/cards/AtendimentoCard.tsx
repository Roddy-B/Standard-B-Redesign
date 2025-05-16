import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface AtendimentoCardProps {
  icon?: LucideIcon;
  tipo: string;
  specbtn: string;
}

export default function AtendimentoCard({ icon: Icon, tipo, specbtn }: AtendimentoCardProps) {
  return (
    <div className="group w-full sm:w-[300px] md:w-96">
      <div className="bg-[#0567F0] shadow-md rounded flex flex-col items-center justify-center h-[217px] transition-colors duration-300 group-hover:bg-[#0039AC] group-hover:text-white px-4">
        <div className="flex flex-col gap-4 items-center text-center w-full">
          {Icon && (
            <Icon className="w-8 h-8 text-white transition-colors duration-300 group-hover:text-white" />
          )}
          <span className="font-inter font-normal text-white text-lg leading-snug transition-colors duration-300 group-hover:text-white">
            {tipo}
          </span>
          <Link href={``} className="w-full">
            <button className="w-full h-12 bg-white/30 border border-white/10 shadow-lg rounded font-franklin text-base text-white font-medium transition-colors duration-300 group-hover:bg-white group-hover:text-black">
              {specbtn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
