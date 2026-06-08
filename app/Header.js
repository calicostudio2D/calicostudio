import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300'], 
  display: 'swap',
});

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-16 lg:px-24 md:py-6 flex flex-col md:flex-row justify-between items-center transition-all duration-300">
      
      {/* CONTENEDOR DEL LOGO AJUSTADO (-30%) */}
      <div className="z-20 flex items-center">
        <Link href="/">
          <img 
            src="/images/logo.png" 
            alt="Calico Studio"
            className="w-16 sm:w-24 md:w-28 lg:w-32 h-auto object-contain brightness-0 invert cursor-pointer active:scale-95 transition-transform drop-shadow-md" 
          />
        </Link>
      </div>

      <nav className={`${montserrat.className} relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex space-x-4 sm:space-x-6 md:space-x-10 lg:space-x-14 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light uppercase tracking-[0.1em] md:tracking-[0.2em] text-white z-10 w-max`}>
        
        <Link href="/work" className="relative group overflow-hidden block text-zinc-200 hover:text-white transition-all duration-300 h-[1.2em] leading-none pt-1">
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Our Work</span>
          <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">Our Work</span>
        </Link>

        <Link href="/services" className="relative group overflow-hidden block text-zinc-200 hover:text-white transition-all duration-300 h-[1.2em] leading-none pt-1">
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Services</span>
          <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">Services</span>
        </Link>

        <Link href="/studio" className="relative group overflow-hidden block text-zinc-200 hover:text-white transition-all duration-300 h-[1.2em] leading-none pt-1">
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">The Studio</span>
          <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">The Studio</span>
        </Link>

        <Link href="/contact" className="relative group overflow-hidden block text-zinc-200 hover:text-white transition-all duration-300 h-[1.2em] leading-none pt-1">
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Contact</span>
          <span className="block absolute top-1 left-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">Contact</span>
        </Link>

      </nav>
      
      <div className="z-20 hidden md:flex items-center space-x-6">
        <a href="https://www.instagram.com/calicostudioart/" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        
        <a href="https://www.vimeo.com/calicostudioart" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22.4 7.16c-.09 2.03-1.5 4.8-4.24 8.32C15.32 19.16 12.93 21 10.97 21c-1.21 0-2.24-1.12-3.08-3.36-.56-2.05-1.12-4.11-1.68-6.16-.62-2.24-1.29-3.36-2-3.36-.16 0-.7.33-1.64.98l-.98-1.26c1.03-.9 2.04-1.81 3.04-2.71 1.22-1.12 2.08-1.72 2.58-1.8 1.71-.28 2.61.59 2.71 2.62.15 3.02.47 5.07.96 6.15.65 1.4 1.43 2.1 2.33 2.1 1.27 0 2.62-1.34 4.05-4.02 1.03-1.93 1.5-3.36 1.43-4.27-.12-1.3-1-1.96-2.65-1.96-1.02 0-2 .28-2.92.84 1.27-3.95 3.64-5.83 7.12-5.64 2.23.12 3.28 1.34 3.16 3.65z"/></svg>
        </a>

        <a href="https://www.linkedin.com/company/calicostudioart" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </header>
  );
}