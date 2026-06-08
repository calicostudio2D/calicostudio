import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Reel() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      {/* FONDO UNIFICADO */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay loop muted playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.8]" 
          src="/videos/videobg.mp4" 
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      {/* CONTENEDOR CENTRAL - Ajustado con pt-24 para espacio en móvil */}
      <div className="flex-grow w-full max-w-5xl mx-auto flex flex-col justify-center items-center z-20 px-6 pt-24 pb-12">
        
        <div className="text-center">
          {/* Subtítulo estándar unificado */}
          <h4 className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-4 font-light">Demo Reel</h4>
          
          {/* Título Principal - Ajustado para móvil */}
          <h1 className={`${montserrat.className} text-3xl md:text-6xl font-light tracking-tight text-white mb-6`}>
            In Progress
          </h1>
          
          {/* Descripción corta */}
          <p className={`${montserrat.className} text-zinc-400 font-light text-sm md:text-base tracking-wide max-w-sm md:max-w-lg mx-auto`}>
            We are currently crafting something special. Stay tuned for our upcoming collaboration showcase.
          </p>
        </div>

      </div>
    </main>
  );
}