import PageWrapper from '../PageWrapper';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Work() {
  const projectImages = ["hdt1.png", "hdt2.png", "hdt3.jpg", "hdt4.jpg"];

  return (
    <PageWrapper>
      <main className="min-h-screen w-full bg-transparent text-white antialiased flex flex-col relative">
        <div className="flex-grow w-full max-w-6xl mx-auto flex flex-col justify-center items-center z-20 px-6 pt-32 pb-20 gap-y-12">
          
          <div className="text-center">
            {/* Título actualizado con estilo minimalista consistente */}
            <h4 className={`${montserrat.className} text-[13px] uppercase tracking-[0.3em] text-white font-medium mb-12`}>
              Explore our latest projects.
            </h4>
          </div>

          {/* Proyecto principal */}
          <div className="flex flex-col items-center gap-6 w-full md:flex-row md:gap-12">
            <div className="w-full md:w-3/5 aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black hover:scale-[1.01] transition-transform duration-700 ease-out">
              <img src="/images/hdtportada.png" alt="Hora del Té" className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-2/5 text-center md:text-left">
              <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-1">Currently in production</p>
              <h3 className={`${montserrat.className} text-2xl md:text-6xl font-medium mb-4`}>Hora del Té</h3>
              
              <div className="space-y-1 text-xs md:text-base text-zinc-300 font-light max-w-sm mx-auto md:mx-0">
                <p><span className="text-zinc-600">Technique:</span> 2D Animation (Frame-by-frame & Cutout)</p>
                <p><span className="text-zinc-600">Type:</span> Short film</p>
                <p className="pt-2 italic text-zinc-400 text-[10px] md:text-xs">Original project by Calico Studio</p>
              </div>
            </div>
          </div>

          {/* Cuadrícula de imágenes de apoyo */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
            {projectImages.map((imgName, i) => (
              <div key={i} className="aspect-video rounded-lg border border-white/10 overflow-hidden bg-zinc-900/50 hover:border-white/30 transition-all duration-300">
                <img 
                  src={`/images/${imgName}`} 
                  alt={`Hora del Té detalle ${i + 1}`} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}