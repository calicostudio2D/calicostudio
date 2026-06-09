import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Studio() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased relative overflow-x-hidden">
      
      {/* Header fijo con z-index alto */}
      <div className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <Header />
      </div>

      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.9]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>

      {/* AJUSTE CLAVE: 
        pt-24 para móvil (espacio para header) 
        pt-40 para desktop (más aire)
      */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center px-4 pt-24 md:pt-40 pb-20 gap-y-10">
        
        {/* Intro */}
        <div className="text-center px-2">
          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-2 font-light">The Studio</h4>
          <p className={`${montserrat.className} text-zinc-200 font-light text-sm md:text-lg tracking-wide max-w-2xl mx-auto`}>
            We operate as a technical and creative development platform, bringing stories to life through 2D animation.
          </p>
        </div>

        {/* Equipo */}
        <div className="w-full text-center">
          <h2 className={`${montserrat.className} text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-6`}>Our Team</h2>
          <div className="grid grid-cols-2 md:flex md:flex-row justify-center gap-y-8 gap-x-4 w-full max-w-2xl mx-auto">
            {[ 
              { name: "Claudia Parra", role: "Co-founder & Creative Director", img: "/images/02.jpg" },
              { name: "Camila León", role: "Co-founder & Creative Director", img: "/images/01.jpg" },
              { name: "Nicolás Avilés", role: "Co-founder & Creative Director", img: "/images/03.jpg" },
              { name: "Ignacio Ruiz", role: "Creative Director", img: "/images/04.jpg" }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-28 h-36 md:w-36 md:h-44 mb-2 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale" />
                </div>
                <h3 className={`${montserrat.className} text-[10px] font-medium leading-tight mb-0.5`}>{person.name}</h3>
                <p className="text-[7px] uppercase tracking-[0.1em] text-zinc-500 px-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner */}
        <div className="w-full flex flex-col items-center mt-4">
          <h2 className={`${montserrat.className} text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-2`}>Partner</h2>
          <div className="w-28 opacity-80 grayscale transition-all duration-500">
            <img src="/images/niebla.png" alt="Niebla" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}