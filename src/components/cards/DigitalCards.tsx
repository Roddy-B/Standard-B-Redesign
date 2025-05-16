// components/cards/DigitalCards.tsx
import React from 'react';
import Image from 'next/image';

interface DigitalCardProps {
  title: string;
  iconSrc: string;
}

const DigitalCard: React.FC<DigitalCardProps> = ({ title, iconSrc }) => {
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col items-center justify-center p-6 transition-transform transform hover:scale-105">
      <div className="mb-2">
        <Image src={iconSrc} alt={title} width={36} height={36} />
      </div>
      <h3 className="text-center text-lg font-medium text-gray-800">{title}</h3>
    </div>
  );
};

export default DigitalCard;