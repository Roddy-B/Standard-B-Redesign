// utils.ts
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

// Mock API function (replace with your actual API call)
export const fetchExchangeRates = async (): Promise<{
    USD: { buy: number; sell: number; date: string };
    EUR: { buy: number; sell: number; date: string };
    ZAR: { buy: number; sell: number; date: string };
    GBP: { buy: number; sell: number; date: string };
} | null> => {
    // Simulate API delay and data retrieval
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock response
    const today = format(new Date(), 'dd/MM/yy');
    return {
        USD: { buy: 63.45, sell: 64.52, date: today },
        EUR: { buy: 73.45, sell: 74.53, date: today },
        ZAR: { buy: 3.45, sell: 3.52, date: today },
        GBP: { buy: 78.45, sell: 79.52, date: today },
    };
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}