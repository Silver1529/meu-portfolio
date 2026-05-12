'use client';

import {
  ArrowLeft, Gamepad2, Database, Hammer, Wrench,
  Trash2, Search, ShieldCheck, Terminal, BookOpen,
  GraduationCap, Sparkles, Cpu, Code2, ExternalLink, Cloud
} from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

export default function CrudDungeonPage() {

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

  const crudMap = [
    { tool: 'BUILD',   icon: Hammer,  verb: 'POST',   sql: 'INSERT', color: 'emerald', desc: 'Constrói uma casa nova no tile à frente do player.' },
    { tool: 'UPGRADE', icon: Wrench,  verb: 'PUT',    sql: 'UPDATE', color: 'amber',   desc: 'Evolui a casa para o próximo nível visual (1→2→3).' },
    { tool: 'DELETE',  icon: Trash2,  verb: 'DELETE', sql: 'DELETE', color: 'rose',    desc: 'Apaga a casa do banco — animação de queda inclusa.' },
    { tool: 'INSPECT', icon: Search,  verb: 'GET',    sql: 'SELECT', color: 'cyan',    desc: 'Lê os dados da casa (SELECT WHERE id = ?).' },
  ] as const;

  const colorMap = {
    emerald: { ring: 'border-emerald-500/30', bg: 'bg-emerald-500/10', fg: 'text-emerald-300', dot: 'bg-emerald-500' },
    amber:   { ring: 'border-amber-500/30',   bg: 'bg-amber-500/10',   fg: 'text-amber-300',   dot: 'bg-amber-500'   },
    rose:    { ring: 'border-rose-500/30',    bg: 'bg-rose-500/10',    fg: 'text-rose-300',    dot: 'bg-rose-500'    },
    cyan:    { ring: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',    fg: 'text-cyan-300',    dot: 'bg-cyan-500'    },
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30 relative overflow-hidden">

      {/* Background Effects (tema cyan/hacker) */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

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
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)]">
              <Gamepad2 className="text-cyan-400" size={32} />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase">
              Educational Game · Full Stack
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            CRUD <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-500">Dungeon</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            Um RPG top-down onde cada ação do player é uma operação <strong>CRUD real</strong> em um banco
            MySQL. Construir uma casa? <span className="font-mono text-emerald-400">INSERT</span>.
            Evoluir? <span className="font-mono text-amber-400">UPDATE</span>. Aprender SQL nunca foi tão divertido.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['Next.js 16', 'TypeScript', 'Kaplay', 'MySQL', 'AWS', 'Zustand', 'React Query', 'Zod', 'Tailwind v4'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-zinc-900/80 text-zinc-300 rounded-lg text-xs border border-zinc-800 font-mono">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA: Acessar o jogo */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://crud-dungeon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-zinc-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]"
            >
              <Gamepad2 size={16}/> Jogar agora
              <ExternalLink size={14}/>
            </a>
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-400 text-xs border border-zinc-800 font-mono">
              crud-dungeon.vercel.app
            </span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* CARD 1: O Mapeamento CRUD↔HTTP↔SQL (Hero feature) */}
          <motion.div variants={cardVariants} className="md:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-40 bg-cyan-500/5 blur-[80px] rounded-full group-hover:bg-cyan-500/10 transition-all" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Sparkles size={24} />
                <h3 className="text-2xl font-bold text-zinc-100">A mágica educacional</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6 max-w-3xl">
                Cada ferramenta do player tem mapeamento explícito para o verbo HTTP correspondente e a
                palavra-chave SQL gerada no backend. O painel CRUD Live mostra essa correspondência em
                tempo real — o aluno <strong>vê o jogo virar query</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {crudMap.map(({ tool, icon: Icon, verb, sql, color, desc }) => {
                  const c = colorMap[color];
                  return (
                    <div key={tool} className={`p-4 rounded-2xl border ${c.ring} ${c.bg} backdrop-blur-sm`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${c.bg} ${c.fg} border ${c.ring}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`font-mono font-bold tracking-wider ${c.fg}`}>{tool}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                        <span className={`px-2 py-0.5 rounded ${c.bg} ${c.fg} border ${c.ring}`}>{verb}</span>
                        <span className="text-zinc-600">→</span>
                        <span className="px-2 py-0.5 rounded bg-zinc-950/50 text-zinc-300 border border-zinc-800">{sql}</span>
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Painéis ao vivo */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20">
              <Terminal size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-cyan-300 transition-colors">CRUD Live · Tela dividida</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Um HUD flutuante sobre o canvas com 5 painéis observáveis: <strong>Database View</strong>,
              <strong> Activity Log</strong>, <strong>Network Log</strong>, <strong>SQL Console</strong> e
              <strong> Stats Cards</strong>. O player joga e debuga ao mesmo tempo.
            </p>

            <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800 font-mono text-[10px] text-cyan-300/80 space-y-1">
              <div className="flex justify-between border-b border-zinc-800 pb-1.5 mb-1.5">
                <span>SQL Console</span>
                <span className="text-emerald-400">●</span>
              </div>
              <p className="text-zinc-500">{'>'} INSERT INTO objetos</p>
              <p className="text-zinc-500 pl-4">(tipo, pos_x, pos_y) VALUES</p>
              <p className="text-zinc-500 pl-4">(<span className="text-cyan-300">{"'servidor'"}</span>, <span className="text-amber-300">20</span>, <span className="text-amber-300">14</span>);</p>
              <p className="text-emerald-400">✓ 1 row affected · 12ms</p>
            </div>
          </motion.div>

          {/* CARD 3: Segurança real */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-emerald-300 transition-colors">Backend hardened</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Apesar de ser um jogo, a API segue padrões production-grade: tokens <strong>CSRF</strong>,
              <strong> rate limiting</strong>, validação por schema com <strong>Zod</strong>, sanitização
              de input e prepared statements no <strong>mysql2</strong>.
            </p>

            <div className="flex flex-wrap gap-2">
              {['CSRF', 'Rate Limit', 'Zod', 'Prepared Stmts', 'Sanitize'].map(item => (
                <span key={item} className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded text-[10px] border border-emerald-500/20 uppercase font-bold tracking-wider">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CARD 4: Game Engine */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-violet-500/30 transition-all group">
            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 text-violet-400 border border-violet-500/20">
              <Gamepad2 size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-violet-300 transition-colors">Engine sob medida</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Construído sobre <strong>Kaplay</strong> (HTML5 game engine), com grid 40×28 tiles, câmera
              com zoom 1.5×, sprites multi-nível para evolução das casas e SFX customizado por evento.
            </p>

            <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800 font-mono text-xs text-zinc-400">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded"></div>servidor</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-violet-400 rounded"></div>banco</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-amber-400 rounded"></div>cache</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded"></div>router</div>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: Onboarding educacional */}
          <motion.div variants={cardVariants} className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-amber-500/30 transition-all group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-400 border border-amber-500/20">
              <BookOpen size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-amber-300 transition-colors">Tutorial + Quiz</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Onboarding em <strong>7 etapas guiadas</strong> (name → intro → move → create → read →
              update → delete) e um <strong>quiz final</strong> que valida o aprendizado dos 4 verbos
              CRUD antes de liberar o modo livre.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <GraduationCap size={14} className="text-amber-400"/>
              <span>Progresso persistido no localStorage</span>
            </div>
          </motion.div>

          {/* CARD 6: Stack overview (full width) */}
          <motion.div variants={cardVariants} className="md:col-span-2 p-6 rounded-3xl border border-dashed border-zinc-800 bg-zinc-950/30">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-zinc-400" size={20}/>
              <h4 className="font-bold text-zinc-200">Stack completa</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Code2 size={10}/> Frontend
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>Next.js 16 (App Router)</li>
                  <li>React 19</li>
                  <li>Tailwind v4</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Gamepad2 size={10}/> Game
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>Kaplay 3001</li>
                  <li>Canvas 2D</li>
                  <li>Custom SFX</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Database size={10}/> Backend
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>MySQL · mysql2</li>
                  <li>Route Handlers</li>
                  <li>Zod schemas</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cloud size={10}/> Cloud · State
                </h5>
                <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                  <li>AWS · Vercel</li>
                  <li>Zustand · React Query</li>
                  <li>localStorage</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
