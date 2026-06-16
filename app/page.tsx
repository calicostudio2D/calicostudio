import PageWrapper from './PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      {/* Usamos min-h-screen para evitar recortes en navegadores móviles */}
      <main className="min-h-screen w-full relative overflow-hidden bg-transparent text-white antialiased selection:bg-white selection:text-black">
        
        {/* Botón Central */}
        <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
          <a 
            href="/reel" 
            className="px-6 py-3 border border-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] 
            transition-all duration-700 ease-in-out hover:bg-white hover:text-black backdrop-blur-md whitespace-nowrap"
          >
            Watch Colaborators Demo Reel
          </a>
        </div>

        {/* Footer Info Izquierda: Ajuste de padding para móviles */}
        <div className="absolute bottom-8 left-0 w-full px-6 md:bottom-12 md:left-24 z-20 pointer-events-none text-center md:text-left">
          <p className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 font-light">
            [ 2D ANIMATION STUDIO — SANTIAGO, CHILE ]
          </p>
          <p className="text-[7px] sm:text-[9px] font-mono uppercase tracking-[0.2em] text-white/40 font-light mt-1">
            [ STATUS: OPEN FOR CO-PRODUCTIONS ]
          </p>
        </div>

        {/* Footer Info Derecha: Oculto o reducido en móviles si hay choque, mantenido igual en desktop */}
        <div className="absolute bottom-8 right-0 w-full px-6 md:bottom-12 md:right-24 z-20 pointer-events-none text-center md:text-right hidden md:block">
          <p className="text-[7px] sm:text-[9px] font-mono uppercase tracking-[0.2em] text-white/40 font-light">
            © 2026 CALICO STUDIO
          </p>
        </div>
      </main>
    </PageWrapper>
  );
}