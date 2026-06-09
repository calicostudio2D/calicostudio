'use client';

import { useState } from 'react';
import Header from '../Header';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'], display: 'swap' });

export default function Reel() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'cali2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.8]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>
      
      {/* Contenedor con scroll si el video es muy alto */}
      <div className="flex-grow w-full max-w-4xl mx-auto flex flex-col justify-center items-center z-20 px-6 py-24">
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full max-w-[280px]">
            <input
              type="password"
              placeholder="Enter password"
              className={`${montserrat.className} bg-transparent border-b border-zinc-700 p-3 text-white text-center outline-none focus:border-white transition-colors font-light tracking-widest text-sm`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={`${montserrat.className} border border-white/40 bg-white/5 text-white py-3 px-6 text-[10px] uppercase tracking-[0.3em] font-light hover:bg-white hover:text-black transition-all duration-300`}>
              Access Reel
            </button>
            {error && <p className="text-red-500/80 text-[9px] uppercase tracking-widest font-light text-center">Invalid Password</p>}
          </form>
        ) : (
          <div className="w-full max-w-3xl">
            <div className="mb-8 text-center px-4">
              <h2 className={`${montserrat.className} text-[10px] uppercase tracking-[0.3em] font-light mb-2 text-zinc-300`}>Collaborators Showcase</h2>
              <p className={`${montserrat.className} text-zinc-400 text-[9px] font-light max-w-lg mx-auto leading-relaxed uppercase tracking-widest`}>
                Curated showcase of our team's professional experience.
              </p>
            </div>

            <div className="shadow-2xl rounded-lg overflow-hidden border border-white/10 bg-black">
              <video 
                controls 
                autoPlay 
                playsInline
                className="w-full aspect-video" 
                controlsList="nodownload" 
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src="https://res.cloudinary.com/dfgvqgrlt/video/upload/v1781037044/ReelCalico_2026_v4_sbxpou.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}