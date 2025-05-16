"use client";

import { useEffect, useRef } from 'react';
import {Search,X} from 'lucide-react';

interface SearchBarProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const searchRef = useRef<HTMLDivElement>(null);

  // Fecha quando clica fora do componente SearchBar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start md:justify-start md:items-start w-full max-w-[1440px] mx-auto">
      {/* Search Bar Container */}
      <div
        ref={searchRef}
        className="bg-white z-50 mt-16 md:mt-0 w-full max-w-md md:max-w-xl h-auto md:h-[80px] flex items-center justify-between shadow-md rounded-md md:rounded-none"
      >
        <form action="" className="flex justify-between items-center gap-2 md:gap-5 mx-auto w-full px-4 md:px-8">
          <input
            name=""
            placeholder="O que você está procurando?"
            className="w-full h-14 md:h-[60px] focus:outline-none text-[#4B5166] font-franklin font-medium text-base md:text-lg"
            autoFocus
          />
          <div className="flex gap-2 md:gap-3 text-bluetext">
            <button type="submit">
              <Search className="h-8 w-8 md:h-10 md:w-10" />
            </button>
            <button type="button" onClick={onClose}>
              <X className="h-8 w-8 md:h-10 md:w-10" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}