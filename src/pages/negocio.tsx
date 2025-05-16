import Image from 'next/image';

export default function Negocio() {
  return (
    <section className="relative">
      <div className="container mx-auto relative overflow-hidden h-[600px] md:h-[400px] lg:h-[700px]">
        <Image
          src="/negocio.jpg"
          alt="Banco pessoal simplificado"
          layout="fill"
          objectFit="cover"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.9)_-1.28%,_rgba(3,0,36,0.6)_45.2%,_rgba(3,0,36,0.05)_100%)]"
        ></div>

        {/* Conteúdo sobreposto */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-4 sm:px-6 md:px-10 lg:px-28 py-8 sm:py-12 md:py-16">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium font-franklin leading-tight sm:leading-snug lg:leading-lnH mb-4">
              Você dirige um <br className="hidden lg:block pt-2" />
              negócio?
            </h1>
            <div className="text-lg py-2 sm:py-4 md:py-6">
              <p>
                Todas as operações que você precisa em um só lugar.<br className="hidden md:block" />
                Simples, completo e feito pra você.
              </p>
            </div>

            <button className="bg-[#0567F0] hover:bg-blue-500 w-full sm:w-[200px] md:w-[186px] h-[40px] sm:h-[48px] md:h-[56px] font-bold py-2 px-4 rounded text-white">
              Quero saber mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}