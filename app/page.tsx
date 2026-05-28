import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300'], 
  display: 'swap',
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans antialiased relative scroll-smooth">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-5 md:px-16 lg:px-24 md:py-6 flex justify-between items-center transition-all duration-300 bg-gradient-to-b from-black/90 via-black/40 to-transparent pb-12">
        
        <div className="z-20">
          <img 
            src="/images/logo.png" 
            alt="Calico Studio"
            className="w-10 md:w-12 h-auto object-contain brightness-0 invert" 
          />
        </div>

        <nav className={`${montserrat.className} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-6 md:space-x-12 lg:space-x-16 text-[12px] md:text-[16px] lg:text-[18px] font-light uppercase tracking-[0.15em] md:tracking-[0.2em] text-white z-10 w-max`}>
          
          <a href="#reel" className="relative group overflow-hidden block text-zinc-200 hover:text-white active:scale-90 active:opacity-50 transition-all duration-300 h-[1.2em] leading-none pt-1">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Reel</span>
            <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">Reel</span>
          </a>

          <a href="#work" className="relative group overflow-hidden block text-zinc-200 hover:text-white active:scale-90 active:opacity-50 transition-all duration-300 h-[1.2em] leading-none pt-1">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Our Work</span>
            <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">Our Work</span>
          </a>

          <a href="#about" className="relative group overflow-hidden block text-zinc-200 hover:text-white active:scale-90 active:opacity-50 transition-all duration-300 h-[1.2em] leading-none pt-1">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Studio</span>
            <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">Studio</span>
          </a>

          <a href="#contact" className="relative group overflow-hidden block text-zinc-200 hover:text-white active:scale-90 active:opacity-50 transition-all duration-300 h-[1.2em] leading-none pt-1">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Contact</span>
            <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">Contact</span>
          </a>

        </nav>
        
        <div className="z-20 hidden md:flex items-center space-x-6">
          
          <a href="https://www.instagram.com/calicostudioart/" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden block h-[20px] w-[20px] active:scale-90 active:opacity-50 transition-all duration-300">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full text-zinc-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </span>
            <span className="block absolute top-0 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </span>
          </a>
          
          <a href="https://www.vimeo.com/calicostudioart" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden block h-[20px] w-[20px] active:scale-90 active:opacity-50 transition-all duration-300">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full text-zinc-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.4 7.16c-.09 2.03-1.5 4.8-4.24 8.32C15.32 19.16 12.93 21 10.97 21c-1.21 0-2.24-1.12-3.08-3.36-.56-2.05-1.12-4.11-1.68-6.16-.62-2.24-1.29-3.36-2-3.36-.16 0-.7.33-1.64.98l-.98-1.26c1.03-.9 2.04-1.81 3.04-2.71 1.22-1.12 2.08-1.72 2.58-1.8 1.71-.28 2.61.59 2.71 2.62.15 3.02.47 5.07.96 6.15.65 1.4 1.43 2.1 2.33 2.1 1.27 0 2.62-1.34 4.05-4.02 1.03-1.93 1.5-3.36 1.43-4.27-.12-1.3-1-1.96-2.65-1.96-1.02 0-2 .28-2.92.84 1.27-3.95 3.64-5.83 7.12-5.64 2.23.12 3.28 1.34 3.16 3.65z"/>
              </svg>
            </span>
            <span className="block absolute top-0 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.4 7.16c-.09 2.03-1.5 4.8-4.24 8.32C15.32 19.16 12.93 21 10.97 21c-1.21 0-2.24-1.12-3.08-3.36-.56-2.05-1.12-4.11-1.68-6.16-.62-2.24-1.29-3.36-2-3.36-.16 0-.7.33-1.64.98l-.98-1.26c1.03-.9 2.04-1.81 3.04-2.71 1.22-1.12 2.08-1.72 2.58-1.8 1.71-.28 2.61.59 2.71 2.62.15 3.02.47 5.07.96 6.15.65 1.4 1.43 2.1 2.33 2.1 1.27 0 2.62-1.34 4.05-4.02 1.03-1.93 1.5-3.36 1.43-4.27-.12-1.3-1-1.96-2.65-1.96-1.02 0-2 .28-2.92.84 1.27-3.95 3.64-5.83 7.12-5.64 2.23.12 3.28 1.34 3.16 3.65z"/>
              </svg>
            </span>
          </a>

          <a href="https://www.linkedin.com/company/calicostudioart" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden block h-[20px] w-[20px] active:scale-90 active:opacity-50 transition-all duration-300">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full text-zinc-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
            <span className="block absolute top-0 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="reel" className="relative h-screen w-full flex flex-col justify-end px-8 py-10 md:px-16 lg:px-24 md:py-16 border-b border-white/5 overflow-hidden bg-black">
        
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover blur-[6px] brightness-[0.6] scale-105" 
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
            <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/70 font-light mb-3">
              [ 2D ANIMATION STUDIO — SANTIAGO, CHILE ]
            </p>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="py-32 px-8 md:px-16 lg:px-24 bg-black z-10 relative">
        <div className="mb-24 flex justify-between items-baseline border-b border-white/5 pb-8">
          <h2 className={`${montserrat.className} text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-[0.1em] text-zinc-100`}>
            Selected Work
          </h2>
        </div>
        
        <div className="space-y-32 md:space-y-48 max-w-7xl mx-auto">
          <div className="group block border-b border-white/5 pb-10">
            <div className="w-full aspect-video bg-zinc-900 overflow-hidden relative mb-8 transition-transform duration-700 hover:scale-[1.02]">
              <iframe 
                src="https://player.vimeo.com/video/1196170471?title=0&byline=0&portrait=0" 
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                title="Hora del Té"
              ></iframe>
            </div>
            <h3 className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-[0.05em] text-zinc-200 transition-colors`}>
              Hora del Té
            </h3>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-8 md:px-16 lg:px-24 bg-zinc-950 border-t border-white/5 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-8 font-light">The Studio</h4>
          <p className={`${montserrat.className} text-zinc-200 font-light leading-tight text-3xl md:text-5xl lg:text-[3.5rem] tracking-wide`}>
            We operate as a technical and creative development platform, bringing stories to life through 2D animation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="pt-32 pb-12 px-8 md:px-16 lg:px-24 bg-black border-t border-white/5 z-10 relative flex flex-col justify-between min-h-[70vh]">
        
        <div className="flex-grow flex flex-col justify-center items-center text-center max-w-6xl mx-auto w-full">
          <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-8 font-light">
            [ Let's talk about your next project ]
          </p>
          
          <a 
            href="mailto:contactocalicostudio@gmail.com" 
            className={`${montserrat.className} text-3xl md:text-5xl lg:text-[4rem] font-light text-white hover:text-zinc-400 transition-colors tracking-tight break-all`}
          >
            contactocalicostudio@gmail.com
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] md:text-xs font-mono font-light uppercase tracking-widest text-zinc-500">
          
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Calico Studio</p>
            <p className="mt-2">Santiago, Chile</p>
          </div>

          <div className="flex space-x-8">
            <a href="https://www.instagram.com/calicostudioart/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.vimeo.com/calicostudioart" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vimeo</a>
            <a href="https://www.linkedin.com/company/calicostudioart" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

        </div>
      </section>

    </main>
  );
}