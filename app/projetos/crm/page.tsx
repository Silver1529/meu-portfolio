'use client';

import { 
  ArrowLeft, LayoutTemplate, Database, CloudLightning, 
  Lock, Code2, Cpu, Network, Server, ShieldCheck 
} from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export default function CrmPage() {
  
  // Animações
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/30 relative overflow-hidden">
      
      {/* Background Effects (Tema Azul/Roxo) */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto p-6 md:p-12 lg:p-20 relative z-10">
        
        {/* Nav */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-10 transition-colors group">
          <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium">Voltar para Dashboard</span>
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]">
              <LayoutTemplate className="text-blue-500" size={32} />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider uppercase">
              Core System Architecture
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Núcleo CRM & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Extensões Seguras</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            Atuação profunda na engenharia do sistema da <strong>Compare Plano de Saúde</strong>. 
            Do design de APIs seguras à otimização de queries em bancos NoSQL, focando na eliminação de gargalos operacionais.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* CARD 1: GOOGLE API (Destaque Principal) */}
          <motion.div variants={cardVariants} className="md:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-40 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-all" />
             
             <div className="flex flex-col md:flex-row gap-8 relative z-10">
               <div className="flex-1 space-y-4">
                 <div className="flex items-center gap-3 text-blue-400 mb-2">
                   <CloudLightning size={24}/>
                   <h3 className="text-2xl font-bold text-zinc-100">Integração Google Cloud</h3>
                 </div>
                 
                 <p className="text-zinc-400 leading-relaxed">
                   Desenvolvi um <strong>Middleware de Integração</strong> que elimina a necessidade de "Alt+Tab". 
                   O sistema intercepta leads via API, trata os dados em tempo real e os injeta no contexto da extensão.
                 </p>
                 
                 <ul className="space-y-2 mt-4">
                   {[
                     "OAuth 2.0 para autenticação segura sem expor credenciais.",
                     "Sincronização bidirecional (CRM ↔ Planilhas/Drive).",
                     "Redução de 40% no tempo de cadastro de novos leads."
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {item}
                     </li>
                   ))}
                 </ul>

                 <div className="flex gap-2 pt-4">
                   {['GCP', 'Node.js', 'REST API'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-xs border border-blue-500/20 font-mono">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Visual Fake de API */}
               <div className="flex-1 bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4 font-mono text-xs text-zinc-500 overflow-hidden shadow-inner">
                 <div className="flex gap-1.5 mb-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                 </div>
                 <div className="space-y-1">
                   <p><span className="text-purple-400">const</span> <span className="text-blue-400">syncLead</span> = <span className="text-purple-400">async</span> (data) ={'>'} {'{'}</p>
                   <p className="pl-4"><span className="text-purple-400">const</span> token = <span className="text-yellow-400">await</span> googleAuth.getToken();</p>
                   <p className="pl-4"><span className="text-zinc-400">// Secure injection pipeline</span></p>
                   <p className="pl-4"><span className="text-purple-400">await</span> crm.inject({'{'}</p>
                   <p className="pl-8">client: data.name,</p>
                   <p className="pl-8">source: <span className="text-green-400">'Google API'</span></p>
                   <p className="pl-4">{'}'});</p>
                   <p className="pl-4 text-green-500">console.log('Sync Complete');</p>
                   <p>{'}'}</p>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* CARD 2: DATA ENGINEERING */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-purple-500/30 transition-all group">
             <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500 border border-purple-500/20">
               <Database size={24} />
             </div>
             
             <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-purple-300 transition-colors">Engenharia de Dados</h3>
             <p className="text-zinc-400 text-sm leading-relaxed mb-6">
               Arquitetura de banco de dados otimizada para alta performance. Criação de índices compostos e <strong>Aggregation Pipelines</strong> no MongoDB para gerar relatórios complexos em milissegundos.
             </p>

             <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-[10px] text-purple-300/80">
               <div className="flex justify-between border-b border-zinc-800 pb-2 mb-2">
                 <span>Query Performance</span>
                 <span className="text-green-400">98/100</span>
               </div>
               <div className="space-y-1">
                 <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-purple-500 h-full w-[85%]"></div>
                 </div>
                 <span className="text-zinc-500">Indexing Strategy Applied</span>
               </div>
             </div>
          </motion.div>

          {/* CARD 3: SECURITY & EXTENSION */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md hover:border-yellow-500/30 transition-all group">
             <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 text-yellow-500 border border-yellow-500/20">
               <ShieldCheck size={24} />
             </div>
             
             <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-yellow-200 transition-colors">Segurança & Isolation</h3>
             <p className="text-zinc-400 text-sm leading-relaxed mb-6">
               Desenvolvimento de extensão React rodando em <strong>Contexto Isolado (Sandboxed)</strong>. Utilização de Shadow DOM para evitar conflitos de estilo e comunicação criptografada com o Backend.
             </p>

             <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded text-[10px] border border-yellow-500/20 uppercase font-bold tracking-wider">
                  <Lock size={10}/> Encrypted
                </span>
                <span className="flex items-center gap-1.5 px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-[10px] border border-zinc-700 uppercase font-bold tracking-wider">
                  <Code2 size={10}/> Shadow DOM
                </span>
             </div>
          </motion.div>

          {/* CARD 4: INFRA & DEVOPS (Extra) */}
          <motion.div variants={cardVariants} className="md:col-span-2 p-6 rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-zinc-900 rounded-full text-zinc-400">
                 <Server size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-zinc-200">Infraestrutura & Deploy</h4>
                 <p className="text-sm text-zinc-500">Pipelines de CI/CD e Containerização</p>
               </div>
            </div>
            <div className="flex gap-4 opacity-50">
               <Cpu size={24} className="text-zinc-600"/>
               <Network size={24} className="text-zinc-600"/>
               <Database size={24} className="text-zinc-600"/>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}