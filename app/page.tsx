'use client';

import {
  Github, Linkedin, Mail, ArrowUpRight, Terminal,
  LayoutTemplate, Leaf, Cpu, Check,
  Copy, Server, ShieldCheck, Database,
  Gamepad2, Hammer, Wrench, Trash2, Search,
  Clock, MapPin, Workflow, FileSpreadsheet
} from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  // Função para copiar email com feedback visual
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita navegar se estiver num Link
    navigator.clipboard.writeText("miguelbahia0602@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Variantes tipadas para evitar erro do TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    // REMOVI "bg-zinc-950" PARA O FUNDO ANIMADO APARECER
    <main className="min-h-screen text-zinc-100 selection:bg-green-500/30 relative overflow-hidden">
      
      {/* Luzes de destaque fixas */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto p-6 md:p-12 lg:p-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* HEADER */}
        <motion.header variants={cardVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              Disponível para novos projetos
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-zinc-100 via-zinc-400 to-zinc-600">
              Miguel Bahia
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl font-light leading-relaxed">
              Engenheiro de Software <span className="text-zinc-100 font-medium">@ Compare Plano de Saúde</span> · Ciência da Computação <span className="text-zinc-100 font-medium">@ UNIP</span>. <br/>
              Foco em <span className="text-zinc-100 font-medium">automação</span>, <span className="text-zinc-100 font-medium">engenharia de dados</span> e <span className="text-zinc-100 font-medium">produtos escaláveis</span>.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/Silver1529", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/miguel-bahia-30094234b", label: "LinkedIn" }
            ].map((social, idx) => (
              <Link 
                key={idx} 
                href={social.href} 
                target="_blank"
                className="p-4 bg-zinc-900/70 rounded-2xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all hover:-translate-y-1 group"
              >
                <social.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
              </Link>
            ))}
            <button 
              onClick={handleCopyEmail}
              className="p-4 bg-zinc-900/70 rounded-2xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all hover:-translate-y-1 group relative"
            >
              {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-zinc-400 group-hover:text-white" />}
            </button>
          </div>
        </motion.header>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-6">

          {/* CARD 1: CRM & CORE SYSTEM (Link para detalhes) */}
          <Link href="/projetos/crm" className="md:col-span-2 md:row-span-2 group cursor-pointer">
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="h-full rounded-2rem border border-zinc-800 bg-zinc-900/60 p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-32 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-all" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
                    <LayoutTemplate size={28} />
                  </div>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-100 group-hover:text-blue-100 transition-colors">
                  CRM Core & Extensões
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Desenvolvimento do núcleo do sistema da <strong>Compare Plano de Saúde</strong>. 
                  Criação de integrações via <strong>Google API</strong> para eliminar tarefas manuais e otimização de queries no <strong>MongoDB</strong> para suportar milhares de leads diários.
                </p>

                {/* Mini Features */}
                <div className="grid grid-cols-2 gap-3">
                   <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800">
                      <Database size={14} className="text-green-500"/> MongoDB Aggregations
                   </div>
                   <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-950/50 p-2 rounded-lg border border-zinc-800">
                      <ShieldCheck size={14} className="text-blue-500"/> Google OAuth 2.0
                   </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* CARD 2: AUTOMAÇÃO & BOTS (Vertical Hacker Style) */}
          <Link href="/projetos/automacao" className="md:col-span-1 md:row-span-2 group cursor-pointer">
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full rounded-2rem border border-zinc-800 bg-black/80 p-6 flex flex-col relative overflow-hidden hover:border-green-500/30 transition-all"
            >
              {/* Matrix Rain Effect Placeholder */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute top-0 w-full h-full bg-linear-to-b from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-500 border border-green-500/20">
                  <Terminal size={24} />
                </div>
                <ArrowUpRight className="text-zinc-600 group-hover:text-green-400 transition-colors" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white">Bots & QA</h3>
                <p className="text-zinc-500 text-sm mb-6">
                  Automação de testes (Fuzzing), Alertas via WhatsApp e Relatórios Excel.js.
                </p>
              </div>

              {/* Code Snippet Visual */}
              <div className="mt-auto relative z-10 bg-zinc-900/80 rounded-xl border border-zinc-800 p-4 font-mono text-[10px] md:text-xs text-zinc-400 overflow-hidden group-hover:border-green-500/30 transition-colors">
                <div className="flex gap-1.5 mb-3 border-b border-zinc-800 pb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="space-y-1">
                  <p><span className="text-purple-400">def</span> <span className="text-blue-400">run_qa_bot</span>():</p>
                  <p className="pl-2">data = excel.parse()</p>
                  <p className="pl-2"><span className="text-purple-400">if</span> error_found:</p>
                  <p className="pl-4 text-green-400">whatsapp.send_alert()</p>
                  <p className="pl-2 text-zinc-500 animate-pulse"># Executing task...</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* CARD 3: TIMELINE SYSTEM */}
          <Link href="/projetos/timeline" className="md:col-span-1 md:row-span-1 group cursor-pointer">
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="h-full rounded-2rem border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between hover:bg-zinc-900/70 transition-all hover:border-purple-500/30 relative overflow-hidden"
            >
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/20 blur-40px rounded-full group-hover:bg-purple-500/30 transition-all"></div>
               
               <div className="flex justify-between items-start">
                  <Server className="text-purple-500" size={28} />
                  <ArrowUpRight className="text-zinc-600 group-hover:text-purple-400 transition-colors" />
               </div>
               <div>
                 <h3 className="text-lg font-bold mt-4 group-hover:text-purple-400 transition-colors">Timeline Cliente</h3>
                 <p className="text-zinc-500 text-xs mt-1">Sistema de rastreamento de eventos com 9 tipos de ações e metadata localizada.</p>
               </div>
            </motion.div>
          </Link>

          {/* CARD 4: ECO CALCULATOR */}
          <Link href="https://pegadasecologicas.vercel.app/" target="_blank" className="md:col-span-1 md:row-span-1 group cursor-pointer">
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="h-full rounded-2rem border border-zinc-800 bg-zinc-900/60 p-6 flex flex-col justify-between hover:bg-zinc-900/70 transition-all hover:border-emerald-500/30 relative overflow-hidden"
            >
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/20 blur-40px rounded-full group-hover:bg-emerald-500/30 transition-all"></div>
               
               <div className="flex justify-between items-start">
                  <Leaf className="text-emerald-500" size={28} />
                  <ArrowUpRight className="text-zinc-600 group-hover:text-emerald-400 transition-colors" />
               </div>
               <div>
                 <h3 className="text-lg font-bold mt-4 group-hover:text-emerald-400 transition-colors">Calculadora Eco</h3>
                 <p className="text-zinc-500 text-xs mt-1">Algoritmo de pegada de carbono adaptado para o Brasil.</p>
               </div>
            </motion.div>
          </Link>

          {/* CARD 5: CRUD DUNGEON (Featured - Game/Educacional, full width) */}
          <Link href="/projetos/cruddungeon" className="md:col-span-4 md:row-span-1 group cursor-pointer">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="h-full rounded-2rem border border-cyan-500/20 bg-zinc-900/60 p-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between hover:border-cyan-500/40 transition-all relative overflow-hidden"
            >
              {/* Glow + grid pattern */}
              <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/15 transition-all" />
              <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-violet-500/10 blur-[80px] rounded-full group-hover:bg-violet-500/15 transition-all" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]">
                    <Gamepad2 size={24} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono tracking-wider uppercase">
                    Novo · Educational Game
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-100 group-hover:text-cyan-100 transition-colors">
                  CRUD <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-400">Dungeon</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-xl mb-4">
                  RPG top-down onde cada ação do player vira uma operação <strong>CRUD real</strong> em MySQL/<strong>AWS</strong>.
                  Construído com <strong>Kaplay</strong>, Next.js 16 e backend hardened.
                </p>

                {/* CRUD chips */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                    <Hammer size={12}/> BUILD · INSERT
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono">
                    <Wrench size={12}/> UPGRADE · UPDATE
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[11px] font-mono">
                    <Trash2 size={12}/> DELETE
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono">
                    <Search size={12}/> INSPECT · SELECT
                  </div>
                </div>
              </div>

              {/* Code snippet visual à direita */}
              <div className="relative z-10 w-full md:w-[320px] bg-zinc-950/80 rounded-xl border border-zinc-800 p-4 font-mono text-[11px] text-zinc-400 shadow-inner shrink-0">
                <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="text-[9px] text-cyan-400/70">sql.console</span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-violet-400">INSERT</span> <span className="text-cyan-400">INTO</span> objetos</p>
                  <p className="pl-2">(tipo, pos_x, pos_y)</p>
                  <p><span className="text-violet-400">VALUES</span> (<span className="text-emerald-400">{"'servidor'"}</span>, <span className="text-amber-300">20</span>, <span className="text-amber-300">14</span>);</p>
                  <p className="text-emerald-400 pt-1">✓ 1 row · 12ms</p>
                </div>
                <ArrowUpRight className="absolute top-3 right-3 text-zinc-700 group-hover:text-cyan-400 transition-colors" size={14}/>
              </div>
            </motion.div>
          </Link>

          {/* CARD 6: BATE PONTO (Featured - Sistema Corporativo, full width) */}
          <Link href="/projetos/bateponto" className="md:col-span-4 md:row-span-1 group cursor-pointer">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="h-full rounded-2rem border border-emerald-500/20 bg-zinc-900/60 p-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between hover:border-emerald-500/40 transition-all relative overflow-hidden"
            >
              {/* Glow + radar pulse */}
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/15 transition-all" />
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-teal-500/10 blur-[80px] rounded-full group-hover:bg-teal-500/15 transition-all" />

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]">
                    <Clock size={24} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-wider uppercase">
                    Sistema Corporativo · Monorepo
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-100 group-hover:text-emerald-100 transition-colors">
                  Bate <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">Ponto</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-xl mb-4">
                  Sistema completo de marcação de ponto com <strong>geofencing</strong> (raio 650m via
                  Haversine), fluxo de aprovação, métricas em tempo real e relatórios PDF/Excel. NestJS + Next.js em monorepo.
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                    <MapPin size={12}/> Geofencing
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono">
                    <ShieldCheck size={12}/> JWT + RBAC
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono">
                    <Workflow size={12}/> Approval Flow
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-mono">
                    <FileSpreadsheet size={12}/> PDF/Excel
                  </div>
                </div>
              </div>

              {/* "Card de batida" mock à direita */}
              <div className="relative z-10 w-full md:w-[320px] bg-zinc-950/80 rounded-xl border border-zinc-800 p-4 font-mono text-[11px] text-zinc-400 shadow-inner shrink-0">
                <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                    </div>
                    <span className="text-emerald-400">LIVE</span>
                  </div>
                  <span className="text-[9px] text-zinc-500">POST /marcacoes</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">evento</span>
                    <span className="text-cyan-300">entrada</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">distância</span>
                    <span className="text-emerald-300">142m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">raio</span>
                    <span className="text-zinc-300">650m</span>
                  </div>
                  <div className="pt-1.5 mt-1.5 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-zinc-500">status</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px]">✓ aprovado</span>
                  </div>
                </div>
                <ArrowUpRight className="absolute top-3 right-3 text-zinc-700 group-hover:text-emerald-400 transition-colors" size={14}/>
              </div>
            </motion.div>
          </Link>

          {/* CARD 7: TECH STACK & INFRA (AGORA CLICÁVEL E ATUALIZADO) */}
          <Link href="/projetos/skills" className="md:col-span-2 md:row-span-1 group cursor-pointer">
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="h-full rounded-2rem border border-zinc-800 bg-zinc-900/60 p-8 flex flex-col justify-center hover:border-zinc-700 transition-all relative"
            >
               {/* Seta indicando que é clicável */}
               <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight className="text-zinc-500" />
               </div>

               <div className="flex items-center gap-3 mb-6">
                  <Cpu className="text-purple-500" size={24}/>
                  <h3 className="text-xl font-bold">Tech Stack & Infra</h3>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Frontend */}
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Frontend</h4>
                    <ul className="text-sm text-zinc-300 space-y-1 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Next.js · React</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>TypeScript · Tailwind</li>
                    </ul>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Backend</h4>
                    <ul className="text-sm text-zinc-300 space-y-1 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>NestJS · Node.js</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>Python · Selenium</li>
                    </ul>
                  </div>

                  {/* Data & DevOps */}
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Data & DevOps</h4>
                    <ul className="text-sm text-zinc-300 space-y-1 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>MongoDB · MySQL</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>AWS · Docker · Git</li>
                    </ul>
                  </div>

                  {/* Ver mais */}
                  <div className="flex items-end">
                    <span className="text-xs text-zinc-500 group-hover:text-purple-400 underline underline-offset-4 transition-colors">
                      Ver tudo →
                    </span>
                  </div>
               </div>
            </motion.div>
          </Link>

          {/* CARD 8: CTA (Action Button) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopyEmail}
            className="md:col-span-2 md:row-span-1 rounded-2rem bg-linear-to-br from-zinc-100 to-zinc-300 p-8 flex items-center justify-between text-zinc-900 cursor-pointer group shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">Vamos trabalhar juntos?</h3>
              <p className="text-zinc-600 font-medium">
                {copied ? "✅ Email copiado com sucesso!" : "Clique para copiar meu contato"}
              </p>
            </div>
            
            <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${copied ? 'bg-green-500 text-white scale-110' : 'bg-white text-zinc-900 group-hover:scale-110'}`}>
              {copied ? <Check size={28} /> : <Copy size={28} />}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}