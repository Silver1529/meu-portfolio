import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/src/components/site/Reveal';
import { skillGroups, levelLabel } from '@/src/data/skills';
import type { SkillLevel } from '@/src/data/types';

export const metadata: Metadata = {
  title: 'Stack completa',
  description: 'Todas as tecnologias que uso, com o nível baseado em uso real e onde cada uma foi aplicada.',
};

const LEVEL_ORDER: SkillLevel[] = ['produção', 'projetos', 'estudo'];

function LevelMark({ level }: { level: SkillLevel }) {
  const filled = level === 'produção' ? 3 : level === 'projetos' ? 2 : 1;
  return (
    <span className="inline-flex items-end gap-px" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span key={i} className={`block w-1 rounded-[1px] ${i < filled ? 'bg-brand' : 'bg-line'}`} style={{ height: `${5 + i * 3}px` }} />
      ))}
    </span>
  );
}

export default function SkillsPage() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);
  const countOf = (l: SkillLevel) => skillGroups.reduce((n, g) => n + g.skills.filter((s) => s.level === l).length, 0);
  const levels = LEVEL_ORDER.filter((l) => countOf(l) > 0);

  return (
    <main className="container-page pb-8 pt-8 md:pt-12">
      <Link href="/#stack" className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink">
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" aria-hidden />
        voltar
      </Link>

      <header className="mt-10 max-w-[46rem]">
        <p className="tick-brand font-mono text-xs text-brand">Tech stack</p>
        <h1 className="display mt-3 text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold text-ink">
          Arsenal <span className="mark-accent">tecnológico</span>
        </h1>
        <p className="mt-6 max-w-[64ch] text-lg leading-relaxed text-ink-2 md:text-xl">
          Minha caixa de ferramentas completa. Foco em tecnologias modernas baseadas em JavaScript/TypeScript e automações
          robustas com Python.
        </p>
        <p className="mt-4 max-w-[64ch] text-ink-2">
          Nada aqui tem porcentagem. Cada linha diz em que nível uso a tecnologia e em quais projetos ela aparece, para
          que a lista seja verificável e não decorativa.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
          {levels.map((l) => (
            <div key={l} className="ruled pt-3">
              <dt className="inline-flex items-center gap-2 font-mono text-[0.7rem] text-muted">
                <LevelMark level={l} /> {levelLabel[l]}
              </dt>
              <dd className="mt-1 font-mono text-ink">{countOf(l)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-2 font-mono text-[0.7rem] text-muted">{total} tecnologias em {skillGroups.length} grupos</p>
      </header>

      <div className="mt-20 space-y-16">
        {skillGroups.map((group) => (
          <Reveal as="section" key={group.title} className="section-grid ruled pt-8">
            <div>
              <h2 className="text-lg font-semibold text-ink lg:sticky lg:top-20">{group.title}</h2>
              <p className="mt-1 text-sm text-ink-2 lg:sticky lg:top-28">{group.description}</p>
            </div>
            <div className="min-w-0 overflow-x-auto">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">
                  <tr className="border-b border-line">
                    <th className="w-[36%] py-2 pr-4 font-normal">Tecnologia</th>
                    <th className="w-[20%] py-2 pr-4 font-normal">Nível</th>
                    <th className="py-2 font-normal">Onde usei</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-soft">
                  {group.skills.map((s) => (
                    <tr key={s.name} className="align-top">
                      <td className="py-3 pr-4 font-medium text-ink">{s.name}</td>
                      <td className="py-3 pr-4">
                        <span className="inline-flex items-center gap-2 text-ink-2" title={levelLabel[s.level]}>
                          <LevelMark level={s.level} />
                          <span className="font-mono text-[0.72rem]">{s.level}</span>
                        </span>
                      </td>
                      <td className="py-3 text-ink-2">{s.where.join(' · ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
