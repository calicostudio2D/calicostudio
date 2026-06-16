import PageWrapper from '../PageWrapper';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Contact() {
  return (
    <PageWrapper>
      {/* Ajuste de padding responsivo para evitar solapamiento con header */}
      <main className="min-h-screen w-full bg-transparent text-white antialiased flex flex-col relative pt-32 md:pt-24">
        <div className="flex-grow w-full max-w-5xl mx-auto flex flex-col justify-center items-center z-20 px-6 pb-24 gap-y-16">
          
          <div className="text-center w-full px-2">
            <h2 className={`${montserrat.className} text-[11px] md:text-[15px] uppercase tracking-[0.4em] text-white font-medium mb-6`}>
              Let's talk
            </h2>
            <a 
              href="mailto:contactocalicostudio@gmail.com" 
              className={`${montserrat.className} text-lg md:text-5xl font-light text-white hover:text-zinc-300 transition-all tracking-tight break-all md:break-words`}
            >
              contactocalicostudio@gmail.com
            </a>
          </div>

          <div className="text-center">
            <h2 className={`${montserrat.className} text-[11px] md:text-[15px] uppercase tracking-[0.4em] text-white font-medium mb-6`}>
              Work with us
            </h2>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeyTdlSLweFDO7fSvNj2U4B0iyceU88PVWg30-3TkDCajMkjQ/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${montserrat.className} uppercase tracking-[0.3em] text-[10px] text-zinc-300 hover:text-white transition-all border-b border-white/20 hover:border-white pb-1`}
            >
              Apply here →
            </a>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}