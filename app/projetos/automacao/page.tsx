'use client';

import { 
  ArrowLeft, Bot, FileSpreadsheet, MessageCircle, 
  RefreshCw, ShieldCheck, Terminal, Cpu, Code2, 
  Binary, AlertCircle 
} from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export default function AutomacaoPage() {

  // Tipagem correta para evitar erros
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-green-500/50 relative overflow-hidden font-mono">
      
      {/* Background Matrix/Cyberpunk Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-length:100%_4px,6px_100%]"></div>
      <div className="fixed top-0 left-1/2 w-[800px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20 relative z-10">
        
        {/* Header Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-green-500/80 hover:text-green-400 mb-10 transition-colors group tracking-widest uppercase text-xs">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {'<'} System.Exit / Return to Root
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-16 border-b border-green-900/30 pb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-green-900/20 rounded-none border border-green-500/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>
              <Bot className="text-green-400 relative z-10" size={32} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-green-500/70 text-xs tracking-widest uppercase">System Operational</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Automação & <span className="text-green-500">Inteligência de Bots</span>
              </h1>
            </div>
          </div>
          
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl border-l-2 border-green-500/50 pl-6">
            Ecossistema de scripts autônomos para <span className="text-green-300">QA Testing</span>, <span className="text-green-300">ETL de Dados</span> e <span className="text-green-300">Recuperação de Receita</span>.
            <br className="hidden md:block" />
            Substituindo processos manuais por código Python e Node.js de alta eficiência.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* CARD 1: QA BOT (Terminal Style) */}
          <motion.div variants={cardVariants} className="bg-zinc-900/50 border border-green-500/20 p-0 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all">
             <div className="p-6 border-b border-green-500/10 bg-black/40 flex justify-between items-start">
                <div className="flex gap-4">
                   <div className="p-3 bg-green-500/10 rounded text-green-500 border border-green-500/20">
                     <ShieldCheck size={24} />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">QA & Fuzzing Bot</h3>
                     <p className="text-xs text-green-500/60 uppercase tracking-wider mt-1">Selenium • Python • PyTest</p>
                   </div>
                </div>
                <div className="animate-spin text-green-500/50 duration-[5s]"><RefreshCw size={18}/></div>
             </div>
             
             <div className="p-6 space-y-4">
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Bot de teste de estresse (Fuzzing) que bombardeia o sistema com formulários aleatórios para garantir a integridade do banco de dados e prevenir falhas em produção.
               </p>

               {/* Terminal Visual */}
               <div className="bg-black rounded border border-zinc-800 p-4 font-mono text-xs text-zinc-500 h-32 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_10px_#22c55e]"></div>
                  <p className="text-green-400">$ pytest run_stress_test.py --threads=4</p>
                  <p className="mt-2">[INFO] Spawning 4 headless browsers...</p>
                  <p>[TEST] Case #492: <span className="text-blue-400">Random Data Injection</span></p>
                  <p>[TEST] Input: "User_X92", Val: 99999.99</p>
                  <p className="text-green-500">[SUCCESS] Quote received in DB (200 OK)</p>
                  <p className="text-green-500">[SUCCESS] Pipeline Integrity Verified.</p>
                  <p className="animate-pulse">_</p>
               </div>
             </div>
          </motion.div>

          {/* CARD 2: WHATSAPP RETENTION (Logic Visual) */}
          <motion.div variants={cardVariants} className="bg-zinc-900/50 border border-green-500/20 p-0 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all">
             <div className="p-6 border-b border-green-500/10 bg-black/40 flex justify-between items-start">
                <div className="flex gap-4">
                   <div className="p-3 bg-green-500/10 rounded text-green-500 border border-green-500/20">
                     <MessageCircle size={24} />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Alerta de Retenção</h3>
                     <p className="text-xs text-green-500/60 uppercase tracking-wider mt-1">Node.js • Webhooks • WPPConnect</p>
                   </div>
                </div>
                <AlertCircle size={18} className="text-red-500 animate-pulse"/>
             </div>
             
             <div className="p-6 space-y-4">
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Sistema de monitoramento em tempo real. Detecta perda de clientes de alto valor (Churn) e dispara instantaneamente um alerta personalizado com dados estratégicos para o gestor.
               </p>

               {/* Code Snippet Visual */}
               <div className="bg-[#1e1e1e] rounded border border-zinc-800 p-4 font-mono text-xs overflow-hidden relative">
                  <div className="flex gap-1.5 mb-3 opacity-50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-300">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">monitorChurn</span> = (client) ={'>'} {'{'}</p>
                    <p className="pl-4"><span className="text-purple-400">if</span> (client.value {'>'} <span className="text-green-300">5000</span> && client.status === <span className="text-orange-300">'LOST'</span>) {'{'}</p>
                    <p className="pl-8 text-zinc-500">// Disparo Imediato</p>
                    <p className="pl-8"><span className="text-blue-400">WhatsApp</span>.send({'{'}</p>
                    <p className="pl-12">priority: <span className="text-red-400">'HIGH'</span>,</p>
                    {/* AQUI ESTAVA O ERRO - Corrigido com aspas simples envolvendo o template string */}
                    <p className="pl-12">msg: <span className="text-orange-300">{'`ALERTA: ${client.name} cancelou!`'}</span></p>
                    <p className="pl-8">{'}'});</p>
                    <p className="pl-4">{'}'}</p>
                    <p>{'}'}</p>
                  </div>
               </div>
             </div>
          </motion.div>

          {/* CARD 3: ETL & EXCEL (Data Stream) */}
          <motion.div variants={cardVariants} className="bg-zinc-900/50 border border-green-500/20 p-0 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all">
             <div className="p-6 border-b border-green-500/10 bg-black/40 flex justify-between items-start">
                <div className="flex gap-4">
                   <div className="p-3 bg-green-500/10 rounded text-green-500 border border-green-500/20">
                     <FileSpreadsheet size={24} />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Pipeline de Dados & BI</h3>
                     <p className="text-xs text-green-500/60 uppercase tracking-wider mt-1">ExcelJS • Pandas • Aggregation</p>
                   </div>
                </div>
                <Binary size={18} className="text-green-500/50"/>
             </div>
             
             <div className="p-6 space-y-4">
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Script ETL (Extract, Transform, Load) que processa dados brutos do CRM, calcula métricas de MRR (Receita Mensal) e Churn Diário, exportando relatórios complexos via <strong>Excel.js</strong>.
               </p>

               {/* Data Processing Visual */}
               <div className="bg-zinc-950 rounded border border-zinc-800 p-4 relative overflow-hidden h-24 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                  <div className="w-full space-y-3">
                     <div className="flex justify-between text-[10px] text-zinc-500 font-mono uppercase">
                        <span>Processing Leads</span>
                        <span className="text-green-400">100%</span>
                     </div>
                     <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-full shadow-[0_0_10px_#22c55e]"></div>
                     </div>
                     <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-zinc-600">Generating .xlsx...</span>
                        <span className="text-green-400">Done</span>
                     </div>
                  </div>
               </div>
             </div>
          </motion.div>

          {/* CARD 4: SPA GENERATOR (Blueprint) */}
          <motion.div variants={cardVariants} className="bg-zinc-900/50 border border-green-500/20 p-0 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all">
             <div className="p-6 border-b border-green-500/10 bg-black/40 flex justify-between items-start">
                <div className="flex gap-4">
                   <div className="p-3 bg-green-500/10 rounded text-green-500 border border-green-500/20">
                     <Code2 size={24} />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Gerador Automático de SPA</h3>
                     <p className="text-xs text-green-500/60 uppercase tracking-wider mt-1">AST • Scaffolding • React</p>
                   </div>
                </div>
                <Cpu size={18} className="text-green-500/50"/>
             </div>
             
             <div className="p-6 space-y-4">
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Ferramenta CLI para desenvolvedores. Utiliza templates pré-configurados para gerar a estrutura completa de uma Landing Page integrada ao CRM, economizando horas de setup manual de rotas e componentes.
               </p>

               {/* Folder Structure Visual */}
               <div className="bg-[#1e1e1e] rounded border border-zinc-800 p-4 font-mono text-xs text-zinc-400">
                  <p className="text-green-400 mb-2">$ npm run gen:spa "Nova Campanha"</p>
                  <div className="pl-2 border-l border-zinc-700 space-y-1">
                     <p>📂 src/</p>
                     <p className="pl-4">📂 pages/nova-campanha/</p>
                     <p className="pl-8 text-green-300">📄 index.tsx <span className="text-zinc-600 text-[10px] ml-2">(Generated)</span></p>
                     <p className="pl-4">📂 components/</p>
                     <p className="pl-8 text-green-300">📄 Form.tsx <span className="text-zinc-600 text-[10px] ml-2">(Injected)</span></p>
                  </div>
               </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}