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
    <main className="h-screen w-full bg-black text-white antialiased flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.8]" src="/videos/videobg.mp4" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      </div>
      
      <div className="flex-grow w-full max-w-4xl mx-auto flex flex-col justify-center items-center z-20 px-8 py-10">
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-6 w-full max-w-sm">
            <input
              type="password"
              placeholder="Enter password"
              className={`${montserrat.className} bg-transparent border-b border-zinc-700 p-3 text-white text-center outline-none focus:border-white transition-colors font-light tracking-widest text-sm`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={`${montserrat.className} border border-white/40 bg-white/5 text-white py-4 px-8 text-[10px] uppercase tracking-[0.3em] font-light hover:bg-white hover:text-black transition-all duration-500`}>
              Access Reel
            </button>
            {error && <p className="text-red-500/80 text-[9px] uppercase tracking-widest font-light text-center">Invalid Password</p>}
          </form>
        ) : (
          <div className="w-full">
            <div className="mb-10 text-center">
              <h2 className={`${montserrat.className} text-xs uppercase tracking-[0.4em] font-light mb-4 text-zinc-300`}>Collaborators Showcase</h2>
              <p className={`${montserrat.className} text-zinc-400 text-[10px] font-light max-w-xl mx-auto leading-relaxed uppercase tracking-widest`}>
                This reel serves as a curated showcase of the collective professional experience of our team members.
              </p>
            </div>

            <div className="shadow-2xl rounded-sm overflow-hidden border border-white/10 bg-black">
              <video 
                controls autoPlay className="w-full h-auto" controlsList="nod 'nodownload" onContextMenu={(e) => e.preventDefault()}
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