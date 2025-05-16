// Services.tsx

import CardService from '@/components/cards/ServiceCard';
import { ShieldBan, CreditCard, Car, Home, Wallet, Luggage } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-[#EDF0F5] py-30 w-full max-w-[1440px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-semibold text-gray-800">
            Serviços bancários adaptados às <br /> suas necessidades
          </h2>
          <p className="mt-2 text-gray-600">Como podemos te ajudar?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          <CardService title="Conta Bancária" icon={<ShieldBan size={36} />} />
          <CardService title="Cartões de crédito" icon={<CreditCard size={36} />} />
          <CardService title="Empréstimos para Veículos" icon={<Car size={36} />} />
          <CardService title="Empréstimos para habitação" icon={<Home size={36} />} />
          <CardService title="Fazer pagamentos" icon={<Wallet size={36} />} />
          <CardService title="Fazer uma viagem" icon={<Luggage size={36} />} />
        </div>
      </div>
    </div>
  );
};

export default Services;