import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// CORREÇÃO 1: Ajuste o import (tire o "src" extra se o seu @ já aponta para src)
import AnimatedBackground from "@/src/components/AnimatedBackground"; // Importando o fundo

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel da Silva | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      {/* CORREÇÃO 2: Tirei o "bg-black" daqui. O body tem que ser transparente! */}
      <body className={`${inter.className} min-h-screen capitalize-none`}>
        
        {/* O fundo animado fica aqui */}
        <AnimatedBackground />
        
        {/* O conteúdo fica aqui */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}