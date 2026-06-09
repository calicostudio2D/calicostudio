import Header from './Header';

export default function Home() {
  return (
    <main className="h-screen w-full relative overflow-hidden bg-black text-white antialiased selection:bg-white selection:text-black">
      {/* Fondo de Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover brightness-[0.9]" 
          src="/videos/videobg.mp4" 
        />
      </div>

      {/* Degradados (Gradientes) */}
      <div className="absolute inset-x-0 top-0 h-32 md:h-48 z-10 pointer-events-none backdrop-blur-sm bg-black/20 [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 z-10 pointer-events-none backdrop-blur-sm bg-black/20 [mask-image:linear-gradient(to_top,black_10%,transparent_100%)]"></div>

      <Header />

      {/* Botón Central - Adaptado a móvil */}
      <div className="absolute inset-0 z-20 flex items-center justify-center group">
        <a 
          href="/reel" 
          className="px-6 py-3 border border-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] 
          opacity-100 transition-opacity duration-700 ease-in-out 
          hover:bg-white hover:text-black backdrop-blur-md whitespace-nowrap"
        >
          Watch Colaborators Demo Reel
        </a>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-8 left-0 w-full px-6 md:bottom-12 md:left-24 z-20 pointer-events-none text-center md:text-left">
        <p className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 font-light">
          [ 2D ANIMATION STUDIO — SANTIAGO, CHILE ]
        </p>
      </div>
    </main>
  );
}