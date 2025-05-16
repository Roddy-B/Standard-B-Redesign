import { SimuladorCard } from "@/components/cards/SimulationCard";
import { ArrowRight } from "lucide-react";

export default function Simulador() {
    return (
        <section className="bg-[#edf0f5] flex justify-center items-center py-20 px-4">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-12">
                {/* Cabeçalho */}
                <div className="text-center">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4  text-bluetext leading-tight">
                        Simuladores
                    </p>
                    <p className="text-base sm:text-lg font-inter font-medium text-graybody pt-2">
                        Explore nossos simuladores financeiros para tomar decisões inteligentes. Planeje, <br className="hidden sm:inline" />
                        simule e alcance seus objetivos financeiros com facilidade.
                    </p>
                </div>

                {/* Cartões */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  justify-items-center">
                    <SimuladorCard 
                        imageSrc="/cred.png"
                        text="CredAzul"
                        morelink="#"
                    />
                    <SimuladorCard 
                        imageSrc="/habit.png"
                        text="Crédito Habitação"
                        morelink="#"
                    />
                    <SimuladorCard 
                        imageSrc="/auto.png"
                        text="Leasing Automóvel"
                        morelink="#"
                    />
                    <SimuladorCard 
                        imageSrc="/QuiQ.png"
                        text="QUIQMola 5 anos"
                        morelink="#"
                    />
                </div>

                {/* Link final */}
                <div>
                    <p className="text-center text-base sm:text-lg font-normal leading-relaxed text-bluebtn flex items-center gap-2 cursor-pointer hover:underline">
                        Ver todos simuladores
                        <ArrowRight className="w-5 h-5" />
                    </p>
                </div>
            </div>
        </section>
    );
}
