'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/src/data/projects';
import type { Project } from '@/src/data/types';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const href = project.href ?? project.live ?? project.repo;
  const isExternal = !project.href && !!href;

  const inner = (
    <div className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-2 py-6 md:grid-cols-[3rem_minmax(0,1fr)_14rem_auto]">
      <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand md:text-xl">
            {project.title}
          </h3>
          <span className="font-mono text-[0.7rem] text-muted">{project.kicker}</span>
        </div>
        <p className="mt-1.5 max-w-[62ch] text-sm leading-relaxed text-ink-2">{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-muted md:hidden">
          {project.stack.slice(0, 5).map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <ul className="hidden flex-wrap justify-end gap-x-2 gap-y-1 text-right font-mono text-[0.7rem] text-muted md:flex">
        {project.stack.slice(0, 5).map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <span className="justify-self-end text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand">
        {href ? <ArrowUpRight size={18} aria-hidden /> : <span className="font-mono text-[0.7rem]">{project.status}</span>}
      </span>
    </div>
  );

  const wrapper = project.href ? (
    <Link href={project.href} className="block">
      {inner}
    </Link>
  ) : isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );

  if (reduce) return <li className="ruled">{wrapper}</li>;

  return (
    <motion.li
      className="ruled"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.04, ease: EASE }}
    >
      {wrapper}
    </motion.li>
  );
}

function StatusLine({ project }: { project: Project }) {
  const parts = [project.context, project.period, project.status].filter(Boolean);
  return <span className="font-mono text-[0.7rem] text-muted">{parts.join(' · ')}</span>;
}

export default function ProjectList() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const work = others.filter((p) => p.context === 'Compare Plano de Saúde');
  const own = others.filter((p) => p.context !== 'Compare Plano de Saúde');

  return (
    <div>
      <h2 className="display max-w-[22ch] text-3xl font-bold text-ink md:text-4xl">
        Sistemas reais, em produção, com gente usando.
      </h2>
      <p className="mt-5 max-w-[62ch] text-ink-2">
        A maior parte do que construo é software interno da Compare Plano de Saúde: CRM, automações, integrações e
        ferramentas de operação. O resto são projetos próprios e trabalhos para clientes.
      </p>

      <ol className="mt-10">
        {featured.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </ol>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <h3 className="font-mono text-xs text-muted">Também na Compare Plano de Saúde</h3>
          <ul className="mt-4 divide-y divide-line-soft border-t border-line-soft">
            {work.map((p) => (
              <li key={p.slug} className="py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-semibold text-ink">{p.title}</h4>
                  <StatusLine project={p} />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{p.summary}</p>
                <p className="mt-2 font-mono text-[0.7rem] text-muted">{p.stack.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs text-muted">Pessoais e para clientes</h3>
          <ul className="mt-4 divide-y divide-line-soft border-t border-line-soft">
            {own.map((p) => {
              const href = p.live ?? p.repo;
              return (
                <li key={p.slug} className="py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-semibold text-ink hover:text-brand"
                      >
                        {p.title}
                        <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100" aria-hidden />
                      </a>
                    ) : (
                      <h4 className="font-semibold text-ink">{p.title}</h4>
                    )}
                    <StatusLine project={p} />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{p.summary}</p>
                  <p className="mt-2 font-mono text-[0.7rem] text-muted">{p.stack.join(' · ')}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
