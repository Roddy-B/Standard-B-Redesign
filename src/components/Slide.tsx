"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    src: '/slide1.png',
    alt: 'Image 1',
    title: 'Banco pessoal simplificado',
    description: 'Escolha os produtos certos da nossa gama completa de soluções bancárias pessoais, para atender às suas necessidades financeiras.',
  },
  {
    src: '/slide2.jpg',
    alt: 'Image 2',
    title: 'Nao seja alvos de fraudes online',
    description: 'Seja extremamente vigilante contra golpes. arme-se entendendo o que procurar',
  },
  {
    src: '/slide3.jpg',
    alt: 'Image 3',
    title: 'O seu negócio é o nosso negócio',
    description: 'aproveite nossa oferta de produtos e serviços para melhor iniciar o seu negócio',
  },
];

const HeroSlides = () => {
  return (
    <div className='z-0'>
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="relative w-full h-[524px] md:h-[624px] lg:h-[764px] z-0"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            objectFit="cover"
            priority={index < 2} // Priorize as primeiras imagens
            style={{ position: 'absolute', zIndex: 0 }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.9)_-1.28%,_rgba(0,0,0,0.8)_-1.27%,_rgba(3,0,36,0.7)_46.83%,_rgba(3,0,36,0)_100%)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white md:items-start px-6 md:pl-28 py-8 md:py-0 text-center md:text-left">
            <div className="max-w-md md:max-w-xl">
              <h1 className="text-3xl md:text-5xl lg:text-[56px] font-medium font-franklin leading-tight md:leading-snug lg:leading-lnH">
                {slide.title}
              </h1>
              <div className="text-base md:text-lg py-4 md:py-6">
                <p>{slide.description}</p>
              </div>
            </div>
            <div>
            <button className="bg-[#0567F0] hover:bg-blue-500 w-full md:w-[186px] h-[48px] md:h-[56px] font-bold py-2 px-4 rounded text-white">
              Quero saber mais
            </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default HeroSlides;