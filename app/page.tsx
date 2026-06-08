import Header from './Header';

export default function Home() {
  return (
    <main className="h-screen w-full relative overflow-hidden bg-black text-white selection:bg-white selection:text-black antialiased">
      
      {/* VIDEO DE FONDO */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay loop muted playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.75]" 
          src="/videos/videobg.mp4" 
        />
      </div>

      {/* GRADIENTES DE DESENFOQUE */}
      <div className="absolute top-0 left-0 w-full h-40 md:h-48 z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)] backdrop-blur-sm bg-black/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 z-10 pointer-events-none [mask-image:linear-gradient(to_top,black_10%,transparent_100%)] backdrop-blur-sm bg-black/20"></div>

      <Header />

      {/* ÁREA DE BOTÓN ADAPTADA PARA MÓVIL */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        {/* En móvil: siempre visible (opacity-100). En escritorio: invisible hasta hacer hover (md:opacity-0) */}
        <div className="w-full px-6 flex items-center justify-center">
          <a 
            href="/reel" 
            className="px-6 py-3 border border-white/30 text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] 
                       opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-in-out
                       hover:bg-white hover:text-black backdrop-blur-sm whitespace-nowrap text-center"
          >
            Watch Colaborators Demo Reel
          </a>
        </div>
      </div>

      {/* TEXTO INFERIOR */}
      <div className="absolute bottom-8 left-0 w-full px-6 md:bottom-12 md:left-16 lg:left-24 z-20 pointer-events-none text-center md:text-left">
        <p className="text-[9px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/90 font-light drop-shadow-md">
          [ 2D ANIMATION STUDIO — SANTIAGO, CHILE ]
        </p>
      </div>
      
    </main>
  );
}