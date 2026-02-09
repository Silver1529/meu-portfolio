'use client';

import { 
  ArrowLeft, GitBranch, Database, Layers, 
  Clock, Users, TrendingUp, CheckCircle2, 
  XCircle, ArrowRightLeft, MessageSquare, History
} from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export default function TimelinePage() {
  
  // Animações
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
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

  // 9 Tipos de Eventos
  const eventTypes = [
    { type: 'ATTENDANCE_START', icon: Users, color: 'blue', label: 'Início Atendimento' },
    { type: 'DEAL_WON', icon: CheckCircle2, color: 'green', label: 'Negócio Ganho' },
    { type: 'DEAL_LOST', icon: XCircle, color: 'red', label: 'Negócio Perdido' },
    { type: 'TRANSFER', icon: ArrowRightLeft, color: 'yellow', label: 'Transferência' },
    { type: 'MANUAL_CHANGE', icon: GitBranch, color: 'purple', label: 'Mudança Manual' },
    { type: 'INTERACTION', icon: MessageSquare, color: 'cyan', label: 'Interação' },
    { type: 'OTHER', icon: History, color: 'orange', label: 'Reabertura' },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-purple-500/30 relative overflow-hidden">
      
      {/* Background Effects (Tema Roxo/Azul) */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[60px] -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[60px] translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20 relative z-10">
        
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
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20 shadow-[0_0_30px_-10px_rgba(168,85,247,0.5)]">
              <Clock className="text-purple-500" size={32} />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono tracking-wider uppercase">
              Event Tracking System
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Sistema de <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">Timeline Cliente</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            Arquitetura completa de <strong>rastreamento de eventos</strong> que registra toda a jornada do cliente no CRM. 
            De transferências entre corretores até fechamento de negócios, cada ação é capturada com metadados detalhados em português.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >

          {/* CARD 1: ARQUITETURA DO SISTEMA (Destaque Principal) */}
          <motion.div variants={cardVariants} className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-40 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-purple-500/10 transition-all" />
             
             <div className="flex flex-col md:flex-row gap-8 relative z-10">
               <div className="flex-1 space-y-4">
                 <div className="flex items-center gap-3 text-purple-400 mb-2">
                   <Layers size={24}/>
                   <h3 className="text-2xl font-bold text-zinc-100">Arquitetura Centralizada</h3>
                 </div>
                 
                 <p className="text-zinc-400 leading-relaxed">
                   Sistema construído com <strong>RegisterTimelineEvent</strong> como ponto único de criação de eventos. 
                   Integrado em <strong>9 use cases</strong> diferentes, garantindo que nenhuma ação importante passe despercebida.
                 </p>
                 
                 <ul className="space-y-2 mt-4">
                   {[
                     "Query inteligente com $or: busca por contactId OU clientId",
                     "Claiming automático de eventos órfãos após sincronização",
                     "Metadata 100% em português (modalidade, valor, operadora)",
                     "Try/catch em todos eventos - nunca quebra o fluxo principal"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                       <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> {item}
                     </li>
                   ))}
                 </ul>

                 <div className="flex gap-2 pt-4">
                   {['MongoDB', 'TypeScript', 'Mongoose'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs border border-purple-500/20 font-mono">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Visual de Código - Modelo ClientTimeline */}
               <div className="flex-1 bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4 font-mono text-xs text-zinc-500 overflow-hidden shadow-inner">
                 <div className="flex gap-1.5 mb-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                 </div>
                 <div className="space-y-1">
                   <p><span className="text-blue-400">interface</span> <span className="text-yellow-400">IClientTimeline</span> {'{'}</p>
                   <p className="pl-4">clientId?: <span className="text-cyan-400">ObjectId</span>;</p>
                   <p className="pl-4">contactId?: <span className="text-cyan-400">Number</span>;</p>
                   <p className="pl-4">queueId?: <span className="text-cyan-400">ObjectId</span>;</p>
                   <p className="pl-4">brokerId?: <span className="text-cyan-400">ObjectId</span>;</p>
                   <p className="pl-4">type: <span className="text-green-400">TimelineType</span>;</p>
                   <p className="pl-4">content: <span className="text-cyan-400">string</span>;</p>
                   <p className="pl-4">metadata?: <span className="text-orange-400">Mixed</span>;</p>
                   <p className="pl-4 text-zinc-600">// valor, modalidade, operadora...</p>
                   <p>{'}'}</p>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* GRID: 9 TIPOS DE EVENTOS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div variants={cardVariants} className="md:col-span-3 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="text-blue-400" size={20}/>
                <h3 className="text-xl font-bold text-zinc-100">9 Tipos de Eventos Rastreados</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {eventTypes.map((event, idx) => {
                  const bgClass = `bg-${event.color}-500/5`;
                  const borderClass = `border-${event.color}-500/20`;
                  const hoverClass = `hover:bg-${event.color}-500/10`;
                  const textClass = `text-${event.color}-500`;
                  
                  return (
                    <div key={idx} className={`p-3 rounded-xl border transition-all group/event ${
                      event.color === 'blue' ? 'bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10' :
                      event.color === 'green' ? 'bg-green-500/5 border-green-500/20 hover:bg-green-500/10' :
                      event.color === 'red' ? 'bg-red-500/5 border-red-500/20 hover:bg-red-500/10' :
                      event.color === 'yellow' ? 'bg-yellow-500/5 border-yellow-500/20 hover:bg-yellow-500/10' :
                      event.color === 'purple' ? 'bg-purple-500/5 border-purple-500/20 hover:bg-purple-500/10' :
                      event.color === 'cyan' ? 'bg-cyan-500/5 border-cyan-500/20 hover:bg-cyan-500/10' :
                      'bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10'
                    }`}>
                      <event.icon className={
                        event.color === 'blue' ? 'text-blue-500' :
                        event.color === 'green' ? 'text-green-500' :
                        event.color === 'red' ? 'text-red-500' :
                        event.color === 'yellow' ? 'text-yellow-500' :
                        event.color === 'purple' ? 'text-purple-500' :
                        event.color === 'cyan' ? 'text-cyan-500' :
                        'text-orange-500'
                      } size={20}/>
                      <p className="text-xs font-mono text-zinc-400">{event.type}</p>
                      <p className="text-xs text-zinc-500 mt-1">{event.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-4 bg-zinc-950/50 rounded-lg border border-zinc-800">
                <p className="text-xs text-zinc-500 font-mono">
                  <span className="text-purple-400">const</span> types = [<span className="text-green-400">'ATTENDANCE_START'</span>, <span className="text-green-400">'DEAL_WON'</span>, <span className="text-green-400">'DEAL_LOST'</span>, <span className="text-green-400">'TRANSFER'</span>, <span className="text-green-400">'MANUAL_CHANGE'</span>, <span className="text-green-400">'INTERACTION'</span>, <span className="text-green-400">'OTHER'</span>]
                </p>
              </div>
            </motion.div>
          </div>

          {/* GRID 2x2: Features Técnicas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* ÓRFÃOS */}
            <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-orange-500/30 transition-all group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-500 border border-orange-500/20">
                <Database size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-orange-200 transition-colors">Claiming de Órfãos</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                <strong>Problema:</strong> Quando cliente chega, só temos <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-orange-400">contactId</code> (Ploomes). 
                O <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-blue-400">clientId</code> (MongoDB) só existe após sincronização.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                <strong>Solução:</strong> Todos os 9 use cases fazem <strong>claiming automático</strong>, vinculando eventos órfãos ao clientId criado. Timeline completa mesmo antes da sync.
              </p>

              <div className="mt-4 bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-[10px] text-zinc-400">
                <p className="text-orange-400">// Orphan Claiming</p>
                <p><span className="text-purple-400">await</span> ClientTimeline.updateMany(</p>
                <p className="pl-2">{'{'} contactId, clientId: {'{'} $exists: <span className="text-cyan-400">false</span> {'}'} {'}'},</p>
                <p className="pl-2">{'{'} $set: {'{'} clientId {'}'} {'}'}</p>
                <p>);</p>
              </div>
            </motion.div>

            {/* QUERY INTELIGENTE */}
            <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-500 border border-cyan-500/20">
                <TrendingUp size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-cyan-200 transition-colors">Query com $or</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Busca eventos <strong>antes e depois</strong> da sincronização Ploomes usando operador lógico <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-cyan-400">$or</code>.
              </p>

              <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-[10px] text-zinc-400">
                <p>ClientTimeline.find({'{'}</p>
                <p className="pl-2"><span className="text-cyan-400">$or</span>: [</p>
                <p className="pl-4">{'{'} contactId {'}'},</p>
                <p className="pl-4">{'{'} clientId {'}'}</p>
                <p className="pl-2">]</p>
                <p>{'}'}).sort({'{'} createdAt: <span className="text-green-400">1</span> {'}'})</p>
              </div>

              <ul className="space-y-2 mt-4">
                {['Popula brokerId com nome do usuário', 'Ordena cronologicamente (ASC)', 'Retorna array formatado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                    <div className="w-1 h-1 rounded-full bg-cyan-500"></div> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* METADATA EM PORTUGUÊS */}
            <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-green-500/30 transition-all group">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-500 border border-green-500/20">
                <MessageSquare size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-green-200 transition-colors">Metadata Localizada</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Todos os eventos capturam metadata específica <strong>100% em português</strong> para análise e auditoria completa.
              </p>

              <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-[10px] text-zinc-400 space-y-1">
                <p>metadata: {'{'}</p>
                <p className="pl-2">modalidade: <span className="text-yellow-400">'MEI'</span>,</p>
                <p className="pl-2">operadora: <span className="text-yellow-400">'Unimed'</span>,</p>
                <p className="pl-2">valor: <span className="text-green-400">5000</span>,</p>
                <p className="pl-2">stageAntigo: <span className="text-yellow-400">'Proposta'</span>,</p>
                <p className="pl-2">stageNovo: <span className="text-yellow-400">'Fechado'</span></p>
                <p>{'}'}</p>
              </div>
            </motion.div>

            {/* VISUAL SKILL TREE */}
            <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500 border border-purple-500/20">
                <GitBranch size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-purple-200 transition-colors">Interface Visual</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                <strong>ClientTimelineTree</strong> renderiza eventos em design de <strong>skill tree</strong> com layout alternado, 
                20+ ícones mapeados, gradientes e animações.
              </p>

              <div className="space-y-2">
                {[
                  { icon: Users, label: 'Início Atendimento', colorClasses: 'bg-blue-500/5 border-blue-500/20 text-blue-500' },
                  { icon: ArrowRightLeft, label: 'Transferência', colorClasses: 'bg-yellow-500/5 border-yellow-500/20 text-yellow-500' },
                  { icon: CheckCircle2, label: 'Negócio Ganho', colorClasses: 'bg-green-500/5 border-green-500/20 text-green-500' }
                ].map((item, idx) => {
                  const [bgClass, borderClass, textClass] = item.colorClasses.split(' ');
                  return (
                    <div key={idx} className={`flex items-center gap-3 p-2 rounded-lg border ${bgClass} ${borderClass}`}>
                      <item.icon className={textClass} size={16}/>
                      <span className="text-xs text-zinc-300">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* INTEGRAÇÃO COMPLETA */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/30">
            <h3 className="text-lg font-bold text-zinc-200 mb-4">Integração em 9 Use Cases</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-zinc-500 font-mono">
              {[
                'take-client.ts',
                'start-attendance.ts', 
                'deal-win.ts',
                'deal-lose.ts',
                'update-queue-stage.ts',
                'redirect-to-broker-or-partner.ts',
                'deal-reopen.ts',
                'register-interaction.ts',
                '+ claiming em todos'
              ].map((file, idx) => (
                <div key={idx} className="p-2 bg-zinc-900 rounded border border-zinc-800 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  {file}
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
