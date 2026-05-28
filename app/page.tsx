export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased relative">
      
      {/* HEADER EDITORIAL */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <img 
            src="/images/logo.png" 
            alt="Calico Studio"
            className="w-12 md:w-16 h-auto object-contain brightness-0 invert" 
          />
        </div>

        <nav className="pointer-events-auto flex space-x-8 md:space-x-12 font-serif text-sm uppercase tracking-widest text-white">
          <a href="#reel" className="hover:text-zinc-400 transition-colors">Reel</a>
          <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
          <a href="#work" className="hover:text-zinc-400 transition-colors">Work</a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
        </nav>

        <div className="w-12 md:w-16"></div>
      </header>

      {/* HERO SECTION */}
      <section id="reel" className="relative h-screen w-full flex flex-col justify-end p-6 md:p-12 border-b border-white/10 overflow-hidden bg-black">
        
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover blur-[6px] brightness-[0.7] scale-105" 
            src="/videos/videobg.mp4" 
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <img 
            src="/images/logo.png" 
            alt="Calico Studio Logo" 
            className="w-48 md:w-72 h-auto object-contain" 
          />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 relative z-20">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/80 mb-3">
              [ 2D ANIMATION STUDIO — SANTIAGO, CHILE ]
            </p>
          </div>
          
          <div className="flex space-x-6 text-[11px] font-mono uppercase tracking-wider border-t border-white/30 pt-4 md:border-t-0 md:pt-0 w-full md:w-auto justify-between md:justify-start">
            <a href="https://www.instagram.com/calicostudioart/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href="https://www.vimeo.com/calicostudioart" target="_blank" rel="noopener noreferrer" className="hover:underline">Vimeo</a>
            <a href="https://www.linkedin.com/company/calicostudioart" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* SECCIÓN WORK */}
      <section id="work" className="py-24 px-6 md:px-12 bg-black z-10 relative">
        <div className="mb-20 flex justify-between items-baseline border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Selected Work</h2>
        </div>
        
        <div className="space-y-24 md:space-y-44 max-w-6xl mx-auto">
          <div className="group cursor-pointer block border-b border-white/5 pb-8">
            <div className="w-full aspect-video bg-zinc-900 overflow-hidden relative mb-6"></div>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Project03</h3>
          </div>
        </div>
      </section>

      {/* SECCIÓN ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-white/10 z-10 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">El Estudio</h4>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
              AUDIOVISUALES AVILÉS LEÓN PARRA SpA — Operamos como una plataforma de desarrollo técnico y creativo.
            </p>
          </div>
          <div className="md:w-1/3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Contacto</h4>
            <a href="mailto:contactocalicostudio@gmail.com" className="text-zinc-400 hover:text-white font-mono text-sm underline">contactocalicostudio@gmail.com</a>
          </div>
        </div>
      </section>

    </main>
  );
}