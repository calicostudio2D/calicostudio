import PageWrapper from '../PageWrapper';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

const team = [
  { name: 'Claudia Parra', role: 'Co-founder & Production Manager', img: '02.jpg' },
  { name: 'Nicolás Avilés', role: 'Co-founder & Animation Director', img: '03.jpg' },
  { name: 'Camila León', role: 'Co-founder & Art Director', img: '01.jpg' },
  { name: 'Ignacio Ruiz', role: 'Administrative Producer', img: '04.jpg' },
];

const partners = [
  { name: 'Niebla Producciones', img: 'niebla.png', link: 'https://www.nieblaproducciones.cl/', height: 'h-24' },
  { name: 'Gaspar 3D', img: 'gsp3d.png', link: 'https://www.instagram.com/gaspar.3d/', height: 'h-12' },
];

export default function Studio() {
  return (
    <PageWrapper>
      <main className="h-screen w-full bg-transparent text-white antialiased flex flex-col relative pt-40 pb-10">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-10">
          
          <section className="text-center">
            <p className={`${montserrat.className} text-zinc-100 font-light text-base md:text-lg tracking-wide leading-relaxed`}>
              Calico Studio is a 2D animation production house based in Santiago, Chile. 
              We are dedicated to crafting high-quality stories through traditional and modern digital techniques.
            </p>
          </section>

          <section>
            <h3 className={`${montserrat.className} text-[13px] uppercase tracking-[0.3em] text-white font-medium mb-8 text-center`}>
              Our Team
            </h3>
            <div className="flex flex-row justify-center gap-4">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center w-1/4">
                  <div className="w-24 h-32 md:w-32 md:h-40 rounded-lg overflow-hidden mb-3 border border-white/10 bg-zinc-900">
                    {/* grayscale permanente + zoom al pasar el mouse */}
                    <img 
                      src={`/images/${member.img}`} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <p className="text-[9px] md:text-sm font-medium tracking-wide text-center leading-tight">{member.name}</p>
                  <p className="text-[7px] md:text-[9px] uppercase tracking-[0.1em] text-zinc-500 mt-0.5 text-center">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className={`${montserrat.className} text-[13px] uppercase tracking-[0.3em] text-white font-medium mb-8 text-center`}>
              Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner) => (
                <a 
                  key={partner.name} 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:scale-105"
                >
                  <img src={`/images/${partner.img}`} alt={partner.name} className={`${partner.height} w-auto object-contain`} />
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>
    </PageWrapper>
  );
}