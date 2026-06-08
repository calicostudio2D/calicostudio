import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Studio() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      {/* FONDO UNIFICADO */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.8]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      {/* CONTENEDOR PRINCIPAL - pt-24 para espacio del header en móvil */}
      <div className="flex-grow w-full max-w-5xl mx-auto flex flex-col justify-center items-center z-20 px-6 pt-24 pb-12">
        
        {/* INTRODUCCIÓN */}
        <div className="text-center mb-12">
          <h4 className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-3 font-light">The Studio</h4>
          <p className={`${montserrat.className} text-white font-light text-lg md:text-2xl tracking-wide max-w-2xl mx-auto leading-snug`}>
            We operate as a technical and creative development platform, bringing stories to life through 2D animation.
          </p>
        </div>

        {/* SECCIÓN EQUIPO - Adaptativo: flex-col en móvil, md:flex-row en escritorio */}
        <div className="w-full text-center mb-12">
          <h2 className={`${montserrat.className} text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-8`}>Our Team</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 w-full">
            {[ 
              { name: "Claudia Parra", role: "Co-founder & Creative Director", email: "clau.vparrabravo18@gmail.com", img: "/images/02.jpg" },
              { name: "Camila León", role: "Co-founder & Creative Director", email: "camilableonp@gmail.com", img: "/images/01.jpg" },
              { name: "Nicolás Avilés", role: "Co-founder & Creative Director", email: "avilesarayan@gmail.com", img: "/images/03.jpg" }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center w-full md:w-32">
                <div className="w-24 h-32 mb-3 rounded-lg overflow-hidden border border-white/10 shadow-xl">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale" />
                </div>
                <h3 className={`${montserrat.className} text-[11px] font-medium leading-none mb-1`}>{person.name}</h3>
                <p className="text-[7px] uppercase tracking-[0.1em] text-zinc-500 mb-0.5">{person.role}</p>
                <a href={`mailto:${person.email}`} className="text-[7px] text-zinc-600 hover:text-white transition-colors">{person.email}</a>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN PARTNERS */}
        <div className="w-full flex flex-col items-center">
          <h2 className={`${montserrat.className} text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-3`}>Partner</h2>
          <div className="w-20 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <img src="/images/niebla.jpg" alt="Niebla" className="w-full h-auto" />
          </div>
        </div>

      </div>
    </main>
  );
}