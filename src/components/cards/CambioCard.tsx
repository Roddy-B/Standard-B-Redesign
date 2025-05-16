import React from 'react';
import { CalendarIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from 'next/image';

interface CambioCardProps {
    currency: 'USD' | 'EUR' | 'ZAR' | 'GBP';
    buyRate: number;
    sellRate: number;
    date: string;
}

const CambioCard: React.FC<CambioCardProps> = ({ currency, buyRate, sellRate, date }) => {
    const currencyDetails = {
        USD: { symbol: '$', name: 'US Dollar', flagSrc: '/usd.png' },
        EUR: { symbol: '€', name: 'Euro', flagSrc: '/eur.png' },
        ZAR: { symbol: 'R', name: 'South African Rand', flagSrc: '/zar.png' },
        GBP: { symbol: '£', name: 'British Pound', flagSrc: '/gbp.png' },
    };

    const { name, flagSrc } = currencyDetails[currency];

    return (
        <div className={cn(
            "w-full max-w-[400px] bg-white/25 backdrop-blur-md rounded-xl",
            "p-4 sm:p-6 md:p-10",
            "border border-white/10 shadow-lg",
            "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
            "flex flex-col justify-between"
        )}>
            <div>
                <div className="flex flex-col items-center gap-1 sm:gap-2 mb-4">
                    <Image src={flagSrc} alt={`${name} flag`} className="w-7 h-7 object-cover rounded-sm" />
                    <h2 className="text-base sm:text-lg font-semibold text-white">{`MZN / ${currency}`}</h2>
                </div>
                <div className='flex justify-between gap-6 sm:gap-10'>
                    <div className="mb-2 sm:mb-4">
                        <p className="text-xs sm:text-sm text-white">Compra</p>
                        <p className="text-lg sm:text-xl font-bold text-white">{buyRate.toFixed(2)}</p>
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm text-white">Venda</p>
                        <p className="text-lg sm:text-xl font-bold text-white">{sellRate.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-white text-xs sm:text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>{date}</span>
            </div>
        </div>
    );
};

export default CambioCard;
