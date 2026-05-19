'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Search,
  Workflow,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  bullets: ReadonlyArray<string>;
  accent: StepAccent;
};

type StepAccent = 'blue' | 'violet' | 'emerald';

const STEPS: ReadonlyArray<Step> = [
  {
    number: '01',
    icon: Search,
    title: 'Entendo o problema',
    subtitle: 'Discovery & Domínio',
    description:
      'Antes de qualquer linha de código, eu mergulho no contexto do negócio. Converso com stakeholders, mapeio o fluxo real e identifico onde está a dor de verdade.',
    bullets: [
      'Levantamento de requisitos',
      'Modelagem do domínio',
      'Validação com o usuário',
    ],
    accent: 'blue',
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Crio as regras de negócio',
    subtitle: 'Design & Arquitetura',
    description:
      'Traduzo o problema em arquitetura limpa: regras de negócio explícitas, modelos de dados consistentes e APIs que fazem sentido para quem consome.',
    bullets: [
      'Clean Architecture',
      'Modelagem de dados (SQL)',
      'Contratos de API (REST/OData)',
    ],
    accent: 'violet',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Faço acontecer',
    subtitle: 'Execução & Entrega',
    description:
      'Entrego do back ao front com qualidade: código limpo, testes onde importam, deploy automatizado e monitoramento. Projeto só termina quando está rodando em produção.',
    bullets: [
      'Implementação full stack',
      'Deploy automatizado',
      'Iteração contínua',
    ],
    accent: 'emerald',
  },
];

const STEP_STYLES: Record<
  StepAccent,
  {
    border: string;
    glow: string;
    iconWrap: string;
    number: string;
    bullet: string;
    title: string;
  }
> = {
  blue: {
    border: 'hover:border-blue-500/40',
    glow: 'bg-blue-500/10',
    iconWrap: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    number: 'text-blue-500/30',
    bullet: 'bg-blue-500',
    title: 'group-hover:text-blue-100',
  },
  violet: {
    border: 'hover:border-violet-500/40',
    glow: 'bg-violet-500/10',
    iconWrap: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    number: 'text-violet-500/30',
    bullet: 'bg-violet-500',
    title: 'group-hover:text-violet-100',
  },
  emerald: {
    border: 'hover:border-emerald-500/40',
    glow: 'bg-emerald-500/10',
    iconWrap: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    number: 'text-emerald-500/30',
    bullet: 'bg-emerald-500',
    title: 'group-hover:text-emerald-100',
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function MethodologySection() {
  return (
    <section id="metodologia" className="mb-16 scroll-mt-20">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-baseline gap-3 mb-6"
      >
        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
          02 · Como eu trabalho
        </span>
        <div className="flex-1 h-px bg-linear-to-r from-zinc-800 to-transparent" />
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8 max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-3">
          Do problema à{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-violet-400 to-emerald-400">
            entrega
          </span>
        </h2>
        <p className="text-zinc-400 leading-relaxed">
          Não escrevo código pelo código. Meu processo é entender o problema a
          fundo, modelar as regras de negócio com clareza e fazer o projeto
          acontecer ponta a ponta.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
        {STEPS.map(
          (
            { number, icon: Icon, title, subtitle, description, bullets, accent },
            idx,
          ) => {
            const styles = STEP_STYLES[accent];
            const isLast = idx === STEPS.length - 1;

            return (
              <motion.div
                key={number}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div
                  className={`group h-full rounded-2rem border border-zinc-800 bg-zinc-900/60 p-6 md:p-7 relative overflow-hidden transition-all ${styles.border}`}
                >
                  <div
                    className={`absolute -top-16 -right-16 w-40 h-40 ${styles.glow} blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}
                  />

                  <span
                    className={`absolute top-4 right-5 font-mono text-5xl md:text-6xl font-bold ${styles.number} select-none pointer-events-none`}
                  >
                    {number}
                  </span>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-2.5 rounded-xl border ${styles.iconWrap} mb-4`}
                    >
                      <Icon size={22} />
                    </div>

                    <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                      {subtitle}
                    </p>
                    <h3
                      className={`text-xl md:text-2xl font-bold text-zinc-100 mb-3 transition-colors ${styles.title}`}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                      {description}
                    </p>

                    <ul className="space-y-2">
                      {bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-2 text-xs text-zinc-300"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${styles.bullet}`}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!isLast && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 lg:-right-4 -translate-y-1/2 z-20 w-6 h-6 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800">
                    <ArrowRight size={12} className="text-zinc-500" />
                  </div>
                )}
              </motion.div>
            );
          },
        )}
      </div>
    </section>
  );
}
