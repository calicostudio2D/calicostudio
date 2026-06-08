import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Services() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      {/* FONDO UNIFICADO */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.8]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex-grow w-full max-w-6xl mx-auto flex flex-col justify-center items-center z-20 px-6 pt-24 pb-12">
        
        {/* TÍTULO */}
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-3 font-light">Services</h4>
          <p className={`${montserrat.className} text-white font-light text-xl md:text-3xl tracking-wide max-w-3xl mx-auto leading-snug`}>
            We provide comprehensive solutions to bring your vision to life.
          </p>
        </div>
        
        {/* CUADRÍCULA DE SERVICIOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[ 
            { title: "Animation", desc: "High-quality 2D frame-by-frame and rig animation services." },
            { title: "Pre-Production", desc: "Visual development, storyboarding, and technical planning." },
            { title: "Production", desc: "Line production and technical pipeline management." },
            { title: "Post-Production", desc: "Compositing, color grading, and final rendering." }
          ].map((service, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 md:p-10 border border-white/5 bg-black/60 backdrop-blur-sm rounded-2xl shadow-2xl transition-all duration-300 hover:bg-black/80 hover:border-white/10">
              <h3 className={`${montserrat.className} text-sm md:text-base font-medium mb-3 tracking-wide`}>{service.title}</h3>
              <p className="text-[10px] md:text-[11px] text-zinc-300 font-light leading-relaxed max-w-[200px]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}