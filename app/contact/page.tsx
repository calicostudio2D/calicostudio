import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.9]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>

      <div className="flex-grow w-full max-w-5xl mx-auto flex flex-col justify-center items-center z-20 px-6 py-24 gap-y-16">
        {/* Email Section */}
        <div className="text-center w-full px-2">
          <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-6 font-light">Let's talk</p>
          <a 
            href="mailto:contactocalicostudio@gmail.com" 
            className={`${montserrat.className} text-xl md:text-5xl font-light hover:text-zinc-300 transition-all tracking-tight break-words`}
          >
            contactocalicostudio@gmail.com
          </a>
        </div>

        {/* Apply Section */}
        <div className="text-center">
          <h2 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-6 font-light">Work with us</h2>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeyTdlSLweFDO7fSvNj2U4B0iyceU88PVWg30-3TkDCajMkjQ/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Apply here →
          </a>
        </div>
      </div>
    </main>
  );
}