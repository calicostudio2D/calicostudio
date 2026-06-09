import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Work() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      {/* Fondo - Fixed para evitar scroll issues en móviles */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.9]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>

      {/* Contenido principal - Ajustado para ser scrollable si es necesario */}
      <div className="flex-grow w-full max-w-6xl mx-auto flex flex-col justify-center items-center z-20 px-6 py-20 gap-y-8">
        <div className="text-center">
          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-2 font-light">Our Work</h4>
          <p className={`${montserrat.className} text-zinc-100 font-light text-lg md:text-2xl tracking-wide`}>
            Explore our latest projects.
          </p>
        </div>

        {/* Contenedor del Proyecto - Ajuste de gap y orden */}
        <div className="flex flex-col items-center gap-6 w-full md:flex-row md:gap-12">
          {/* Video - Aspect ratio más amigable en móvil */}
          <div className="w-full md:w-3/5 aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe 
              src="https://player.vimeo.com/video/1196170471?title=0&byline=0&portrait=0" 
              className="w-full h-full" 
              allowFullScreen 
              title="Hora del Té" 
            />
          </div>

          {/* Info - Alineación centrada en móvil, izquierda en desktop */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-1">Currently in production</p>
            <h3 className={`${montserrat.className} text-2xl md:text-6xl font-medium mb-4`}>Hora del Té</h3>
            <div className="space-y-1 text-xs md:text-base text-zinc-300 font-light max-w-sm mx-auto md:mx-0">
              <p><span className="text-zinc-600">Studio:</span> Calico Studio</p>
              <p><span className="text-zinc-600">Technique:</span> 2D Animation</p>
              <p><span className="text-zinc-600">Role:</span> Production & Animation</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}