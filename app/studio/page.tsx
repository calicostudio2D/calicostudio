import PageWrapper from '../PageWrapper';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function TheStudio() {
  return (
    <PageWrapper>
      <main className="min-h-screen w-full bg-transparent text-white antialiased flex flex-col relative">
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full max-w-4xl mx-auto px-6 py-24">
          <h2 className={`${montserrat.className} text-[12px] uppercase tracking-[0.4em] text-zinc-500 mb-8`}>
            The Studio
          </h2>
          <p className={`${montserrat.className} text-zinc-100 font-light text-base md:text-xl tracking-wide leading-relaxed text-center mb-12`}>
            Calico Studio is a 2D animation production house based in Santiago, Chile. 
            We are dedicated to crafting high-quality stories through traditional and modern digital techniques.
          </p>
          {/* Aquí podrías agregar más contenido como historia, equipo o filosofía */}
        </div>
      </main>
    </PageWrapper>
  );
}