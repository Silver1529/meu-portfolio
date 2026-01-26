'use client';

import { 
  ArrowLeft, Cpu, Database, Globe, Server, 
  Terminal, Braces, Code2, Layers 
} from 'lucide-react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';

// Componente de Card com efeito Spotlight (Luz que segue o mouse)
function SkillCard({ category, delay }: { category: any, delay: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative border border-zinc-800 bg-zinc-900/50 overflow-hidden rounded-3xl"
    >
      {/* O brilho que segue o mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-8">
        <div className="flex items-center gap-4 mb-8">
           <div className={`p-3 rounded-xl bg-zinc-950 border border-zinc-800 ${category.color}`}>
             <category.icon size={24} />
           </div>
           <h2 className="text-xl font-bold text-zinc-100">{category.title}</h2>
        </div>

        <div className="space-y-5">
          {category.skills.map((skill: any, idx: number) => (
            <div key={idx} className="relative">
              <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Braces size={14} className="text-zinc-600"/> {skill.name}
                </span>
                <span className="text-xs text-zinc-500 font-mono">{skill.percent}%</span>
              </div>
              
              {/* Barra de Progresso */}
              <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1), type: "spring" }}
                  className={`h-full rounded-full ${category.barColor} relative`}
                >
                    <div className="absolute inset-0 bg-white/20"></div>
                </motion.div>
              </div>
              <p className="text-[10px] text-zinc-600 mt-1 truncate">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  
  // Dados das Skills (Adicionei porcentagem para as barras)
  const skillCategories = [
    {
      title: "Frontend Ecosystem",
      icon: Globe,
      color: "text-cyan-400",
      barColor: "bg-cyan-500",
      skills: [
        {name: "HTML", percent: 100, desc: "Markup, Semântica."},
        { name: "Next.js 14", percent: 90, desc: "Server Actions, App Router." },
        { name: "React", percent: 95, desc: "Hooks, Context, Redux." },
        { name: "Tailwind CSS", percent: 98, desc: "Design System, Responsividade." },
        { name: "TypeScript", percent: 85, desc: "Tipagem estrita, Interfaces." },
      ]
    },
    {
      title: "Backend & Server-Side",
      icon: Server,
      color: "text-green-400",
      barColor: "bg-green-500",
      skills: [
        { name: "Node.js", percent: 92, desc: "API REST, Express, NestJS." },
        { name: "Python", percent: 88, desc: "Automação, Pandas, Selenium." },
        { name: "Google APIs", percent: 80, desc: "Integration, OAuth2." },
        { name: "Excel.js", percent: 85, desc: "Relatórios automatizados." },
        {name: "Insomnia", percent: 96, desc: "Testes de API, Debugging."}
      ]
    },
    {
      title: "Database & Data",
      icon: Database,
      color: "text-purple-400",
      barColor: "bg-purple-500",
      skills: [
        { name: "MongoDB", percent: 90, desc: "Aggregation, Indexing." },
        { name: "SQL / Postgres", percent: 75, desc: "Relacional, Joins." },
        { name: "JSON Handling", percent: 95, desc: "Estruturas complexas." },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Terminal,
      color: "text-orange-400",
      barColor: "bg-orange-500",
      skills: [
        { name: "Docker", percent: 80, desc: "Containers, Compose." },
        { name: "Git & GitHub", percent: 90, desc: "Flow, Actions, CI/CD." },
        { name: "VS Code", percent: 100, desc: "Power User, Snippets." },
      ]
    }
  ];

  return (
    // Removi bg-black para o fundo animado aparecer
    <main className="min-h-screen text-zinc-100 selection:bg-purple-500/30 relative overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto p-6 md:p-12 relative z-10">
        
        {/* Nav */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-12 transition-colors group">
          <div className="p-2 rounded-full bg-zinc-900/50 border border-zinc-800 group-hover:border-zinc-700 backdrop-blur-md">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium">Voltar para Home</span>
        </Link>

        {/* Header */}
        <div className="mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
             <div className="h-1 w-10 bg-purple-500 rounded-full"></div>
             <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Tech Stack</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Arsenal <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Tecnológico</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl leading-relaxed"
          >
            Minha caixa de ferramentas completa. Foco em tecnologias modernas baseadas em JavaScript/TypeScript e automações robustas com Python.
          </motion.p>
        </div>

        {/* Grid de Skills com Cards Avançados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <SkillCard key={idx} category={cat} delay={idx * 0.1} />
          ))}
        </div>

      </div>
    </main>
  );
}