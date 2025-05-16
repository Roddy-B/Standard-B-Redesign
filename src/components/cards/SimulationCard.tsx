import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon?: IconType;
  imageSrc?: string;
  text: string;
  morelink: string;
}

export function SimuladorCard({ icon: Icon, imageSrc, text, morelink }: ServiceCardProps) {
  return (
    <div className="group w-full sm:w-[280px]">
      <div className="card-container h-44 flex flex-col shadow bg-white text-primary items-center justify-center rounded transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white px-4">
        <div className="p-2 flex flex-col items-center font-inter text-center">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="icon"
              width={24}
              height={24}
              className="object-cover transition-colors duration-300"
            />
          )}
          {Icon && (
            <Icon className="card-icon w-6 h-6 transition-colors duration-300" />
          )}
          <p className="font-medium text-lg text-graybody font-franklin pt-2 transition-colors duration-300 group-hover:text-white">
            {text}
          </p>
          <Link
            href={morelink}
            className="text-base font-franklin font-medium leading-snug text-bluebtn flex gap-2 items-center pt-4 transition-colors duration-300 group-hover:text-white"
          >
            Simular agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
