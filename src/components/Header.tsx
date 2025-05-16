"use client";

import Link from 'next/link';
import Image from 'next/image';
import {Search, Lock, AlignJustify} from 'lucide-react';
import { useState } from 'react';
import SearchBar from './SearchBar';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full  ">
      <header className="fixed top-0 left-0 right-0 z-50 max-w-[1440px] mx-auto bg-[#0039AC] h-[80px]  flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-28 font-medium font-inter text-base leading-6 tracking-wide text-white">
        {/* Logo + Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo do banco"
              width={40}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 font-franklin font-medium">
            <li><Link href="#">Para Você</Link></li>
            <li><Link href="#">Para Empresas</Link></li>
            <li><Link href="#">Serviços</Link></li>
          </ul>
        </div>

        {/* Ações (Search, Entrar, Menu) */}
        <div className="flex items-center gap-4 md:gap-6 font-franklin font-medium">
          <button className="flex items-center gap-2" onClick={openSearch}>
            <Search className="text-lg" />
            <span className="hidden md:inline">Buscar</span>
          </button>

          {/* Entrar - Desktop */}
          <button className="hidden bg-[#50B7FC] md:flex w-[180px] h-[80px] justify-center items-center gap-2 text-blue-950 font-semibold ">
            <Lock />
            Acessar Entrar
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <AlignJustify className="text-xl" />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0039AC] p-4 space-y-4">
          <ul className="flex flex-col gap-4 font-franklin font-medium">
            <li><Link href="#">Para Você</Link></li>
            <li><Link href="#">Para Empresas</Link></li>
            <li><Link href="#">Serviços</Link></li>
            <li className="flex items-center gap-2">
              <Lock />
              <Link href="#">Acessar Entrar</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && <SearchBar onClose={closeSearch} />}
    </div>
  );
}