// components/DigitalLife.tsx
import React from 'react';
import DigitalCard from '@/components/cards/DigitalCards';
import { ChevronRight } from 'lucide-react';

const Digital: React.FC = () => {
  return (
    <div className='white p-5 md:p-10 lg:p-30'>
    <div className="bg-blue-700 py-10 md:py-20 lg:py-35">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl">
        {/* Left Section */}
        <div className="text-white flex flex-col items-center text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Digitalize sua vida</h2>
          <p className="text-lg mb-6">
            Conecte-se à modernidade com nossas soluções digitais - simplicidade e
            eficiência na ponta dos seus dedos.
          </p>
          <div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white flex gap-2 font-semibold py-3 px-6 rounded-md">
            Saber mais
            <ChevronRight />
          </button>
          </div>
        </div>

        {/* Right Section - Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <DigitalCard title="Bol" iconSrc="/Bol.png" />
          <DigitalCard title="Net Plus" iconSrc="/NetPlus.png" />
          <DigitalCard title="QuiQ" iconSrc="/QuiQ.png" />
          <DigitalCard title="Grande Depósitos" iconSrc="/atm.png" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Digital;