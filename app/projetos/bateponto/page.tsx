'use client';

import {
  ArrowLeft, Clock, MapPin, ShieldCheck, Users, Mail,
  Workflow, FileSpreadsheet, Database, Server, Cpu,
  Code2, Layers, Bell, KeyRound, Network
} from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export default function BatePontoPage() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.05 }
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
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 relative overflow-hidden">

      {/* Background Effects (tema corporativo emerald/teal) */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

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
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_-10px_rgba(16,185,129,0.6)]">
              <Clock className="text-emerald-400" size={32} />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase">
              Sistema Corporativo · Monorepo
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Bate <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">Ponto</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            Sistema completo de marcação de ponto com <strong>geofencing</strong>, fluxo de aprovação
            e métricas em tempo real. Arquitetura em monorepo com <strong>NestJS</strong> + <strong>Next.js</strong>,
            preparado para times híbridos, home-office e presencial.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['NestJS 11', 'Next.js 15', 'MongoDB', 'BullMQ', 'Redis', 'JWT', 'Zod', 'Turborepo', 'Tailwind v4'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-zinc-900/80 text-zinc-300 rounded-lg text-xs border border-zinc-800 font-mono">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* CARD 1: Geofencing (Hero feature) */}
          <motion.div variants={cardVariants} className="md:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-40 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-all" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 text-emerald-400 mb-2">
                  <MapPin size={24} />
                  <h3 className="text-2xl font-bold text-zinc-100">Geofencing inteligente</h3>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  Cada batida é validada por <strong>distância Haversine</strong> entre a coordenada do
                  funcionário e a sede da empresa (raio padrão de 650m). Fora do raio? O ponto vira
                  uma <strong>solicitação</strong> que entra na fila de aprovação do admin.
                </p>

                <ul className="space-y-2 mt-4">
                  {[
                    'Política de geo adaptativa: presencial, home-office e híbrido.',
                    'Híbrido: configuração por dia da semana (em casa vs empresa).',
                    'Auditoria completa: distância, coordenadas e admin aprovador.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-2 flex-wrap">
                  {['Haversine', 'GPS', '650m radius', 'Approval Flow'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-xs border border-emerald-500/20 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual fake do fluxo */}
              <div className="flex-1 bg-zinc-950/50 rounded-xl border border-zinc-800/50 p-4 font-mono text-xs text-zinc-500 overflow-hidden shadow-inner">
                <div className="flex justify-between border-b border-zinc-800 pb-2 mb-3">
                  <span className="text-emerald-400/70">marcacao.controller.ts</span>
                  <span className="text-[10px] text-zinc-600">POST /marcacoes</span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-purple-400">const</span> dist = haversine(user.coords, empresa);</p>
                  <p><span className="text-purple-400">if</span> (dist {'<='} <span className="text-amber-300">RAIO_M</span>) {'{'}</p>
                  <p className="pl-4 text-zinc-400">{'//'} Dentro do raio</p>
                  <p className="pl-4"><span className="text-cyan-400">registrarPonto</span>(evento);</p>
                  <p className="pl-4 text-emerald-400">sendMail(<span className="text-zinc-500">{"'confirmação'"}</span>);</p>
                  <p>{'}'} <span className="text-purple-400">else</span> {'{'}</p>
                  <p className="pl-4 text-zinc-400">{'//'} Fora do raio</p>
                  <p className="pl-4"><span className="text-cyan-400">criarSolicitacao</span>({'{'}</p>
                  <p className="pl-8">evento, dist, lat, lng,</p>
                  <p className="pl-8">status: <span className="text-green-400">{"'pendente'"}</span></p>
                  <p className="pl-4">{'})'};</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Arquitetura */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-teal-500/30 transition-all group">
            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 text-teal-400 border border-teal-500/20">
              <Layers size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-teal-300 transition-colors">Monorepo Turbo</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Estrutura organizada em <strong>apps</strong> (api, web) e <strong>packages</strong>
              (shared, database, apuracao). Build distribuído com <strong>Turborepo</strong>, cache
              compartilhado e dependências entre pacotes.
            </p>

            <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-[10px] text-teal-300/80">
              <p className="text-zinc-600">bateponto/</p>
              <p className="pl-2">├── apps/</p>
              <p className="pl-4 text-cyan-300">│   ├── api/ (NestJS)</p>
              <p className="pl-4 text-violet-300">│   └── web/ (Next.js)</p>
              <p className="pl-2">└── packages/</p>
              <p className="pl-4 text-emerald-300">    ├── shared/</p>
              <p className="pl-4 text-emerald-300">    ├── database/</p>
              <p className="pl-4 text-emerald-300">    └── apuracao/</p>
            </div>
          </motion.div>

          {/* CARD 3: Fluxo de aprovação */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/30 transition-all group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-400 border border-amber-500/20">
              <Workflow size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-amber-300 transition-colors">Aprovação granular</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Admin recebe solicitações pendentes com geolocalização + distância exata. Pode
              <strong> aprovar</strong> (vira marcação real) ou <strong>recusar</strong> com motivo.
              Tudo auditado com timestamps e responsável.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-amber-500/10 text-amber-300 rounded text-[10px] border border-amber-500/20 uppercase font-bold">Pendente</span>
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded text-[10px] border border-emerald-500/20 uppercase font-bold">Aprovada</span>
              <span className="px-2 py-1 bg-rose-500/10 text-rose-300 rounded text-[10px] border border-rose-500/20 uppercase font-bold">Recusada</span>
            </div>
          </motion.div>

          {/* CARD 4: Auth + Segurança */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
              <ShieldCheck size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-blue-300 transition-colors">Segurança em camadas</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              JWT com Passport.js, <strong>bcrypt</strong> (12 rounds), <strong>Helmet</strong>,
              <strong> Throttler</strong> contra brute-force e troca de senha obrigatória no primeiro
              acesso. Decorators custom <code className="text-blue-300">@Roles</code> e
              <code className="text-blue-300"> @CurrentUser</code>.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { icon: KeyRound, label: 'JWT' },
                { icon: ShieldCheck, label: 'Helmet' },
                { icon: Network, label: 'Throttler' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-[10px] border border-blue-500/20 uppercase font-bold">
                  <Icon size={10}/> {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CARD 5: Métricas + Exports */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-violet-500/30 transition-all group">
            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 text-violet-400 border border-violet-500/20">
              <FileSpreadsheet size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-violet-300 transition-colors">Métricas + relatórios</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Cálculo de horas trabalhadas, almoço, extras e esperadas — por <strong>dia, semana
              e mês</strong>. Agregações por time. Exports nativos para <strong>PDF</strong> (pdf-lib)
              e <strong>Excel</strong> (exceljs).
            </p>

            <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800 font-mono text-[10px] text-violet-300/80 space-y-1">
              <div className="flex justify-between"><span>Trabalhado</span> <span className="text-emerald-400">42h 18m</span></div>
              <div className="flex justify-between"><span>Esperado</span> <span className="text-zinc-400">40h 00m</span></div>
              <div className="flex justify-between"><span>Extras</span> <span className="text-amber-400">+2h 18m</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mt-2">
                <div className="bg-violet-500 h-full w-[105%]"></div>
              </div>
            </div>
          </motion.div>

          {/* CARD 6: Stack completa (full width) */}
          <motion.div variants={cardVariants} className="md:col-span-2 p-6 rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/30">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-zinc-400" size={20}/>
              <h4 className="font-bold text-zinc-200">Stack completa</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Server size={10}/> Backend
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>NestJS 11</li>
                  <li>Mongoose 9</li>
                  <li>Zod + nestjs-zod</li>
                  <li>Passport JWT</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Code2 size={10}/> Frontend
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>Next.js 15</li>
                  <li>Radix UI</li>
                  <li>React Hook Form</li>
                  <li>TanStack Query/Table</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Database size={10}/> Infra
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>MongoDB</li>
                  <li>Redis + BullMQ</li>
                  <li>Turborepo</li>
                  <li>Yarn 4 workspaces</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Bell size={10}/> Integrações
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>Nodemailer (SMTP)</li>
                  <li>pdf-lib + exceljs</li>
                  <li>cep-promise</li>
                  <li>date-fns + tz</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CARD 7: Features overview (full width) */}
          <motion.div variants={cardVariants} className="md:col-span-2 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-emerald-400" size={24}/>
              <h4 className="text-xl font-bold text-zinc-100">Módulos do sistema</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Clock,           label: 'Marcações',     desc: '4 eventos/dia: entrada, almoço, retorno, saída.' },
                { icon: Users,           label: 'Funcionários',  desc: 'CRUD com roles, jornada e modelo de trabalho.' },
                { icon: Workflow,        label: 'Solicitações',  desc: 'Aprovação de pontos fora do raio.' },
                { icon: FileSpreadsheet, label: 'Ajustes',       desc: 'Correções manuais de horas pelo admin.' },
                { icon: MapPin,          label: 'Equipes',       desc: 'Métricas agregadas por time.' },
                { icon: Mail,            label: 'Notificações',  desc: 'Emails de boas-vindas e confirmação.' },
                { icon: KeyRound,        label: 'Auth',          desc: 'JWT + troca de senha obrigatória.' },
                { icon: Bell,            label: 'Observability', desc: 'Logs estruturados + métricas.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="p-3 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:border-emerald-500/20 transition-all">
                  <Icon className="text-emerald-400 mb-2" size={18}/>
                  <h5 className="font-bold text-sm text-zinc-100 mb-1">{label}</h5>
                  <p className="text-[11px] text-zinc-500 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
