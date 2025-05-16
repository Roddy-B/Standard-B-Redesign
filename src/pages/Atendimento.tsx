import { MapPin, Headset, MessageCircleMore } from "lucide-react";
import AtendimentoCard from '../components/cards/AtendimentoCard';

export default function Atendimento() {
    return (
        <section className="bg-white flex justify-center items-center py-30 px-4">
            <div className="w-full max-w-[1216px] flex flex-col items-center gap-12">
                {/* Cabeçalho */}
                <div className="text-center">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 font-franklin text-bluetext leading-tight">
                        Atendimento
                    </p>
                    <p className="text-base sm:text-lg font-inter font-medium text-graybody pt-2">
                        Você tem todo o suporte necessário para tirar dúvidas e encontrar soluções que precisa.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <AtendimentoCard 
                        icon={MapPin} 
                        tipo="Rede de atendimento" 
                        specbtn="Encontre uma agência" 
                    />
                    <AtendimentoCard 
                        icon={Headset} 
                        tipo="Central de atendimento" 
                        specbtn="Fale Conosco" 
                    />
                    <AtendimentoCard 
                        icon={MessageCircleMore} 
                        tipo="Fale com um agente" 
                        specbtn="Conversar agora" 
                    />
                </div>
            </div>
        </section>
    );
}
