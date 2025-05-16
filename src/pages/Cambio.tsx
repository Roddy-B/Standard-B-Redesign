'use client'


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { fetchExchangeRates } from '@/lib/utils';
import CambioCard from '@/components/cards/CambioCard';

// Define a type for the exchange rates data
interface ExchangeRatesData {
  USD: { buy: number; sell: number; date: string };
  EUR: { buy: number; sell: number; date: string };
  ZAR: { buy: number; sell: number; date: string };
  GBP: { buy: number; sell: number; date: string };
}

const Cambio: React.FC = () => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRatesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getExchangeRatesData = async () => {
      try {
        const data = await fetchExchangeRates();
        if (data) {
          setExchangeRates(data as ExchangeRatesData); // Type assertion here
        } else {
          setError('Failed to fetch exchange rates.');
        }
      } catch (err) {
        let errorMessage = 'An error occurred.';
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === 'string') {
          errorMessage = err;
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    getExchangeRatesData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-lg">Loading exchange rates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!exchangeRates) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-lg">No exchange rate data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#0039AC] p-4 sm:p-8">
      <div className="max-w-[1440px] w-full py-15 md:-py-20 lg:py-20 flex flex-col items-center gap-12">
        <div className=" flex flex-col lg:justify-between md:flex-col lg:flex  items-center text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 ">
            Câmbios indicativos
          </h1>
          <button
            className="text-white hover:text-blue-300 px-0 flex items-center gap-1.5"
          >
            Ver mais taxas de forex
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {Object.entries(exchangeRates).map(([currency, rates]) => (
            <motion.div
              key={currency}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * parseInt(currency.slice(-1)) }}
            >
              <CambioCard
                currency={currency as 'USD' | 'EUR' | 'ZAR' | 'GBP'}
                buyRate={rates.buy}
                sellRate={rates.sell}
                date={rates.date}
              />
            </motion.div>
          ))}
        </div>
        <p className=" pt-15 md:pt-10 lg:pt-10 text-center text-white text-sm">
          As tarifas são indicativas e 15 min atrasadas
        </p>
      </div>
    </div>
  );
};

export default Cambio;