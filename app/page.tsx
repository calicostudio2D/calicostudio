export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased relative">
      
      {/* LÍNEAS GUÍA ESTRUCTURALES */}
      <div className="fixed inset-0 pointer-events-none z-40 flex justify-between px-6 md:px-12">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      {/* HEADER FLOTANTE */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-between items-start pointer-events-none mix-blend-difference">
        <div className="pointer-events-auto">
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none">
            Calico<br/>Studio
          </h1>
        </div>
        <nav className="pointer-events-auto flex space-x-6 md:space-x-12 font-mono text-xs md:text-sm uppercase tracking-widest pt-2">
          <a href="#reel" className="hover:opacity-50 transition-opacity">Reel</a>
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="reel" className="relative h-screen w-full flex flex-col justify-end p-6 md:p-12 border-b border-white/10 overflow-hidden">
        
        {/* VIDEO DE FONDO */}
        <div className="absolute inset-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover blur-[6px] brightness-[0.7] scale-105" 
            src="/videos/bg-loop.mp4" 
          />
        </div>

        {/* Textos inferiores */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 relative z-10 drop-shadow-md">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/80 mb-3">
              [ 2D ANIMATION STUDIO — SANTIAGO, CHILE ]
            </p>
            <p className="text-lg md:text-2xl font-bold tracking-tight leading-snug text-white">
              -.
            </p>
          </div>
          
          <div className="flex space-x-6 text-[11px] font-mono uppercase tracking-wider border-t border-white/30 pt-4 md:border-t-0 md:pt-0 w-full md:w-auto justify-between md:justify-start">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Vimeo</a>
            <a href="#" className="hover:underline">Behance</a>
          </div>
        </div>
      </section>

      {/* SECCIÓN WORK */}
      <section id="work" className="py-24 px-6 md:px-12 bg-black z-10 relative">
        <div className="mb-20 flex justify-between items-baseline border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            Selected Work
          </h2>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest hidden sm:block">
            Proyectos & Créditos
          </span>
        </div>
        
        <div className="space-y-24 md:space-y-44 max-w-6xl mx-auto">
          
          <div className="group cursor-pointer block border-b border-white/5 pb-8">
            <div className="w-full aspect-video bg-zinc-900 overflow-hidden relative mb-6">
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 z-10"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2">
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter group-hover:tracking-normal transition-all duration-300">
                Project03
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Desarrollo / Producción / Licitación CNTV
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            
            <div className="group cursor-pointer border-b border-white/5 pb-8">
              <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 z-10"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                Project02
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mt-1">
                Créditos de Animación / Largometraje
              </p>
            </div>

            <div className="group cursor-pointer border-b border-white/5 pb-8 md:mt-24">
              <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 z-10"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
                Project01
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mt-1">
                Servicios de Animación 2D / Cortometraje
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN ABOUT / CONTACTO */}
      <section id="about" className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-white/10 z-10 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">El Estudio</h4>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
              -.
            </p>
          </div>
          <div className="md:w-1/3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Contacto</h4>
            <p className="text-lg font-bold mb-2">Hablemos de tu próximo proyecto.</p>
            <a href="mailto:contactocalicostudio@gmail.com" className="text-zinc-400 hover:text-white font-mono text-sm underline block mb-1">
              contactocalicostudio@gmail.com
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>© 2026 Calico Studio.</span>
          <span>All rights reserved.</span>
        </div>
      </section>

    </main>
  );
}