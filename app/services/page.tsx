import PageWrapper from '../PageWrapper';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Services() {
  return (
    <PageWrapper>
      {/* Ajuste de padding-top para evitar colisión con el header */}
      <main className="min-h-screen w-full bg-transparent text-white antialiased flex flex-col relative pt-28 md:pt-32 pb-12">
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
          
          <div className="text-center px-5 max-w-xl mb-12">
            <p className={`${montserrat.className} text-zinc-300 font-light text-sm md:text-base tracking-wide leading-relaxed`}>
              We specialize in 2D animation, mastering tradigital and cut-out techniques to deliver high-end productions. Our team covers the full creative cycle: from pre-production and complex rig construction to design and final post-production.
            </p>
          </div>

          {/* Grid responsivo: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-2">
            {[ 
              { title: "Pre-Production", desc: "Visual development, storyboarding, and technical planning." },
              { title: "Production", desc: "Line production, managing technical pipelines and project delivery." },
              { title: "Post-Production", desc: "Compositing, color grading, and final rendering." },
              { title: "2D Animation", desc: "Expert cutout and frame-by-frame animation with optimized custom rig construction." },
              { title: "Character Design", desc: "Original character design, character sheets, and expression charts." },
              { title: "Consulting", desc: "Technical pipeline consulting and rigging solutions for your team." }
            ].map((service, i) => (
              <div 
                key={i} 
                className="group flex flex-col items-center text-center p-6 border border-white/10 bg-black/40 backdrop-blur-md rounded-xl transition-all duration-500 hover:border-white/30 hover:scale-[1.02] hover:bg-white/5"
              >
                <h3 className={`${montserrat.className} text-[11px] md:text-[12px] font-medium mb-3 tracking-widest uppercase text-white transition-colors duration-300 group-hover:text-zinc-200`}>
                  {service.title}
                </h3>
                <p className="text-[9px] md:text-[10px] text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}