import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Services() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.9]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>

      <div className="flex-grow w-full max-w-7xl mx-auto flex flex-col justify-center items-center z-20 px-4 py-24 gap-y-10">
        <div className="text-center px-2">
          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-2 font-light">Services</h4>
          <p className={`${montserrat.className} text-zinc-100 font-light text-base md:text-2xl tracking-wide max-w-2xl mx-auto leading-relaxed`}>
            We provide comprehensive solutions to bring your vision to life.
          </p>
        </div>

        {/* Grid optimizado: 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full px-2">
          {[ 
            { title: "Animation", desc: "High-quality 2D frame-by-frame and rig animation services." },
            { title: "Pre-Production", desc: "Visual development, storyboarding, and technical planning." },
            { title: "Production", desc: "Line production and technical pipeline management." },
            { title: "Post-Production", desc: "Compositing, color grading, and final rendering." }
          ].map((service, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 md:p-10 border border-white/10 bg-black/40 backdrop-blur-md rounded-xl transition-all duration-300">
              <h3 className={`${montserrat.className} text-[10px] md:text-sm font-medium mb-3 tracking-widest uppercase text-white`}>
                {service.title}
              </h3>
              <p className="text-[9px] md:text-[12px] text-zinc-400 font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}