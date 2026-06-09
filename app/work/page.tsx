import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Work() {
  return (
    <main className="h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.9]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      <div className="flex-grow w-full max-w-6xl mx-auto flex flex-col justify-center items-center z-20 px-8 py-10 gap-y-12">
        
        <div className="text-center">
          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-3 font-light">Our Work</h4>
          <p className={`${montserrat.className} text-zinc-100 font-light text-2xl tracking-wide`}>
            Explore our latest projects.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="w-full md:w-3/5 aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe src="https://player.vimeo.com/video/1196170471?title=0&byline=0&portrait=0" className="w-full h-full" allowFullScreen title="Hora del Té" />
          </div>
          
          <div className="w-full md:w-2/5 text-center md:text-left">
            <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-3">Currently in production</p>
            <h3 className={`${montserrat.className} text-4xl md:text-6xl font-medium mb-6`}>Hora del Té</h3>
            
            <div className="space-y-3 text-sm md:text-base text-zinc-300 font-light">
              <p><span className="text-zinc-600">Studio:</span> Calico Studio</p>
              <p><span className="text-zinc-600">Technique:</span> 2D Animation</p>
              <p><span className="text-zinc-600">Role:</span> Production & Animation</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}