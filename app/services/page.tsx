import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Services() {
  return (
    <main className="h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.9]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      <div className="flex-grow w-full max-w-7xl mx-auto flex flex-col justify-center items-center z-20 px-6 py-10 gap-y-8">
        <div className="text-center">
          <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-2 font-light">Services</h4>
          <p className={`${montserrat.className} text-zinc-100 font-light text-lg md:text-2xl tracking-wide max-w-2xl mx-auto leading-relaxed`}>
            We provide comprehensive solutions to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {[ 
            { title: "Animation", desc: "High-quality 2D frame-by-frame and rig animation services." },
            { title: "Pre-Production", desc: "Visual development, storyboarding, and technical planning." },
            { title: "Production", desc: "Line production and technical pipeline management." },
            { title: "Post-Production", desc: "Compositing, color grading, and final rendering." }
          ].map((service, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 md:p-12 border border-white/10 bg-black/50 backdrop-blur-md rounded-2xl transition-all duration-500 hover:bg-black/70 hover:border-white/20 hover:scale-[1.02]">
              <h3 className={`${montserrat.className} text-xs md:text-base font-medium mb-2 tracking-widest uppercase text-white`}>{service.title}</h3>
              <p className="text-[10px] md:text-[12px] text-zinc-300 font-light leading-relaxed max-w-[200px]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}