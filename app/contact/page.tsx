import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Contact() {
  return (
    <main className="h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      {/* FONDO UNIFICADO */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.8]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      {/* CONTENIDO CENTRADO */}
      <div className="flex-grow w-full max-w-5xl mx-auto flex flex-col justify-center items-center z-20 px-6">
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mb-6 font-light">Let's talk</p>
        <a href="mailto:contactocalicostudio@gmail.com" className={`${montserrat.className} text-2xl md:text-5xl font-light hover:text-zinc-300 transition-all tracking-tight break-all text-center`}>
          contactocalicostudio@gmail.com
        </a>
      </div>

      {/* FOOTER AJUSTADO */}
      <div className="w-full z-20 p-8 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Calico Studio • Santiago, Chile</p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/calicostudioart/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://www.vimeo.com/calicostudioart" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vimeo</a>
          <a href="https://www.linkedin.com/company/calicostudioart" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </main>
  );
}