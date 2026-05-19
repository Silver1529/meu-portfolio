'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Server,
  Layers,
  Terminal,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

type AccentColor = 'cyan' | 'emerald' | 'amber' | 'rose';

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: AccentColor;
};

const PILLARS: ReadonlyArray<Pillar> = [
  {
    icon: Server,
    title: 'Arquitetura Eficiente',
    description:
      'Design de APIs robustas (REST/OData), escalabilidade e organização modular de código.',
    accent: 'cyan',
  },
  {
    icon: Layers,
    title: 'Mindset Full Stack',
    description:
      'Domínio completo do fluxo de dados, desde a query SQL até a renderização do componente em tela.',
    accent: 'emerald',
  },
  {
    icon: Terminal,
    title: 'Cultura Unix/Linux',
    description:
      'Desenvolvimento nativo em Ubuntu, com domínio de terminal, automação de scripts e deploy.',
    accent: 'amber',
  },
  {
    icon: Sparkles,
    title: 'Engenharia Além do Óbvio',
    description:
      'Paixão por lógica complexa, da refatoração de sistemas reais à mecânica de jogos autorais.',
    accent: 'rose',
  },
];

const CORE_STACK: ReadonlyArray<string> = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'React',
  'Next.js',
  'PostgreSQL',
  'MySQL',
  'Linux',
];

const ACCENT_STYLES: Record<
  AccentColor,
  { iconWrap: string; glow: string; hover: string; title: string }
> = {
  cyan: {
    iconWrap: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    glow: 'bg-cyan-500/10',
    hover: 'hover:border-cyan-500/30',
    title: 'group-hover:text-cyan-100',
  },
  emerald: {
    iconWrap: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glow: 'bg-emerald-500/10',
    hover: 'hover:border-emerald-500/30',
    title: 'group-hover:text-emerald-100',
  },
  amber: {
    iconWrap: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    glow: 'bg-amber-500/10',
    hover: 'hover:border-amber-500/30',
    title: 'group-hover:text-amber-100',
  },
  rose: {
    iconWrap: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    glow: 'bg-rose-500/10',
    hover: 'hover:border-rose-500/30',
    title: 'group-hover:text-rose-100',
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function AboutSection() {
  return (
    <section id="sobre" className="mb-16 scroll-mt-20">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-baseline gap-3 mb-6"
      >
        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
          01 · Sobre Mim
        </span>
        <div className="flex-1 h-px bg-linear-to-r from-zinc-800 to-transparent" />
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
      >
        <div className="lg:col-span-2 rounded-2rem border border-zinc-800 bg-zinc-900/60 p-8 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Engenheiro de Software{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
                Full Stack
              </span>
            </h2>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              Foco no desenvolvimento de sistemas escaláveis e de alta
              disponibilidade. Com sólida experiência no ecossistema{' '}
              <span className="text-zinc-100 font-medium">TypeScript</span>,
              atuo na arquitetura e implementação de soluções robustas de
              Back-end com{' '}
              <span className="text-zinc-100 font-medium">Node.js</span> e{' '}
              <span className="text-zinc-100 font-medium">NestJS</span>, além
              de construir interfaces modernas com{' '}
              <span className="text-zinc-100 font-medium">React</span> e{' '}
              <span className="text-zinc-100 font-medium">Next.js</span>.
            </p>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              Minha abordagem é pautada por{' '}
              <span className="text-zinc-100 font-medium">Clean Code</span>,
              modelagem eficiente de bancos SQL e resolução de problemas
              complexos de negócio através de APIs performáticas. Desenvolvo
              nativamente em ambiente Linux, sempre priorizando automação,
              segurança dos dados e entrega de valor contínua.
            </p>
          </div>
        </div>

        <div className="rounded-2rem border border-zinc-800 bg-zinc-900/60 p-8 relative overflow-hidden flex flex-col">
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
              Core Stack
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {CORE_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-zinc-950/60 border border-zinc-800 text-zinc-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-zinc-800 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Especialidade</span>
                <span className="text-zinc-300 font-medium text-right">
                  Back-end + SPA/SSR
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Abordagem</span>
                <span className="text-zinc-300 font-medium text-right">
                  Clean Architecture
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Ambiente</span>
                <span className="text-zinc-300 font-medium text-right">
                  Linux · Ubuntu
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {PILLARS.map(({ icon: Icon, title, description, accent }) => {
          const styles = ACCENT_STYLES[accent];
          return (
            <div
              key={title}
              className={`group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 relative overflow-hidden transition-all ${styles.hover}`}
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 ${styles.glow} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div
                className={`relative z-10 inline-flex p-2.5 rounded-xl border ${styles.iconWrap} mb-4`}
              >
                <Icon size={20} />
              </div>
              <h4
                className={`relative z-10 text-base font-bold text-zinc-100 mb-2 transition-colors ${styles.title}`}
              >
                {title}
              </h4>
              <p className="relative z-10 text-sm text-zinc-400 leading-relaxed">
                {description}
              </p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
