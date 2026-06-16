'use client';
import { usePathname } from 'next/navigation';
import Header from "./Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const getOverlayStyle = () => {
    if (pathname === '/') return null;
    if (pathname === '/reel') return "absolute inset-0 bg-black/80 backdrop-blur-[20px]";
    return "absolute inset-0 bg-black/70 backdrop-blur-[8px]";
  };

  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-black text-white">
        
        {/* Fondo, video y capas de desenfoque con pointer-events-none */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover brightness-[0.9]" 
            src="/videos/videobg.mp4" 
          />
          
          <div className="absolute inset-x-0 top-0 h-32 z-10 backdrop-blur-sm bg-black/20 [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)]"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 z-10 backdrop-blur-sm bg-black/20 [mask-image:linear-gradient(to_top,black_10%,transparent_100%)]"></div>

          {pathname !== '/' && (
            <div className={getOverlayStyle()}></div>
          )}
        </div>

        {/* Header con pointer-events-auto para asegurar que los iconos funcionen */}
        <header className="relative z-50 pointer-events-auto">
          <Header />
        </header>
        
        <main className="relative z-20 flex-grow pointer-events-auto">
          {children}
        </main>
      </body>
    </html>
  );
}