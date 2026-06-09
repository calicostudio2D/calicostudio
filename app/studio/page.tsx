import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Studio() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative">
      <Header />
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.9]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-6 flex flex-col justify-center items-center gap-y-10">
        <div className="text-center">
          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-2 font-light">The Studio</h4>
          <p className={`${montserrat.className} text-zinc-200 font-light text-base md:text-lg tracking-wide max-w-2xl mx-auto`}>
            We operate as a technical and creative development platform, bringing stories to life through 2D animation.
          </p>
        </div>
        <div className="w-full text-center">
          <h2 className={`${montserrat.className} text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-6`}>Our Team</h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 w-full">
            {[ 
              { name: "Claudia Parra", role: "Co-founder & Creative Director", img: "/images/02.jpg" },
              { name: "Camila León", role: "Co-founder & Creative Director", img: "/images/01.jpg" },
              { name: "Nicolás Avilés", role: "Co-founder & Creative Director", img: "/images/03.jpg" },
              { name: "Ignacio Ruiz", role: "Creative Director", img: "/images/04.jpg" }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center w-28 md:w-36">
                <div className="w-full h-32 md:h-44 mb-2 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className={`${montserrat.className} text-[10px] font-medium leading-none mb-1`}>{person.name}</h3>
                <p className="text-[6px] uppercase tracking-[0.1em] text-zinc-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className={`${montserrat.className} text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4`}>Partner</h2>
          <div className="w-32 md:w-48 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <img src="/images/niebla.png" alt="Niebla" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}