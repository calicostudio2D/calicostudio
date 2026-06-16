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

  const getOverlayStyle = (): string => {
    // Devolvemos un string vacío en lugar de null
    if (pathname === '/') return "";
    if (pathname === '/reel') return "absolute inset-0 bg-black/80 backdrop-blur-[20px]";
    return "absolute inset-0 bg-black/70 backdrop-blur-[8px]";
  };

  const overlayClass = getOverlayStyle();

  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-black text-white">
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover brightness-[0.9]" 
            src="/videos/videobg.mp4" 
          />
          
          <div className="absolute inset-x-0 top-0 h-32 z-10 backdrop-blur-sm bg-black/20 [mask-image:linear-gradient(to_bottom,black_10%,transparent_100%)]"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 z-10 backdrop-blur-sm bg-black/20 [mask-image:linear-gradient(to_top,black_10%,transparent_100%)]"></div>

          {/* Renderizamos solo si overlayClass tiene contenido */}
          {overlayClass !== "" && (
            <div className={overlayClass}></div>
          )}
        </div>

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