'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
      
      {/* Camada de Ruído (Noise) para textura cinematográfica */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

      {/* Blob Roxo Principal - Movimento Lento e Fluido */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 0.9, 0.6],
          x: [0, 150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[-15%] w-[1000px] h-[1000px] bg-purple-500/40 rounded-full blur-[140px]"
      />

      {/* Blob Azul Profundo - Movimento Contrário */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, -150, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[-15%] right-[-15%] w-[1100px] h-[1100px] bg-indigo-500/35 rounded-full blur-[140px]"
      />

      {/* Blob Central - O "Coração" Pulsante */}
      <motion.div
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/25 rounded-full blur-[110px]"
      />
    </div>
  );
}