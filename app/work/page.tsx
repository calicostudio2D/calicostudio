import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Work() {
  return (
    <main className="h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      {/* FONDO UNIFICADO */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.8]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      <div className="flex-grow w-full max-w-6xl mx-auto flex flex-col justify-center items-center z-20 px-8">
        
        {/* TÍTULO UNIFICADO CON TAMAÑO EQUILIBRADO */}
        <div className="text-center mb-16">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4 font-light">Our Work</h4>
          <p className={`${montserrat.className} text-white font-light text-2xl md:text-4xl tracking-wide max-w-3xl mx-auto`}>
            Explore our latest projects.
          </p>
        </div>

        {/* CONTENIDO WORK - TAMAÑOS AJUSTADOS */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Video con mayor presencia */}
          <div className="w-full md:w-3/5 aspect-[16/9] rounded-xl overflow-hidden relative shadow-2xl border border-white/5">
            <iframe src="https://player.vimeo.com/video/1196170471?title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" allowFullScreen title="Hora del Té" />
          </div>
          
          {/* Texto con tipografía más cómoda */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-4">In production</p>
            <h3 className={`${montserrat.className} text-4xl md:text-5xl font-medium mb-6`}>Hora del Té</h3>
            <div className="space-y-3 text-base text-zinc-200 font-light">
              <p><span className="text-zinc-500">Estudio:</span> Calico Studio</p>
              <p><span className="text-zinc-500">Técnica:</span> Animación 2D</p>
              <p><span className="text-zinc-500">Rol:</span> Production & Animation</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}