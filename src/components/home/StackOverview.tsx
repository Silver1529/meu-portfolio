import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { skillGroups, levelLabel } from '@/src/data/skills';
import type { SkillLevel } from '@/src/data/types';

const LEVEL_ORDER: SkillLevel[] = ['produção', 'projetos', 'estudo'];

function LevelMark({ level }: { level: SkillLevel }) {
  // Três traços: cheio = uso em produção, dois = projetos, um = estudo.
  const filled = level === 'produção' ? 3 : level === 'projetos' ? 2 : 1;
  return (
    <span className="inline-flex items-end gap-px" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span key={i} className={`block w-1 rounded-[1px] ${i < filled ? 'bg-brand' : 'bg-line'}`} style={{ height: `${5 + i * 3}px` }} />
      ))}
    </span>
  );
}

export default function StackOverview() {
  return (
    <div>
      <h2 className="display max-w-[22ch] text-3xl font-bold text-ink md:text-4xl">O que eu uso de verdade.</h2>
      <p className="mt-5 max-w-[62ch] text-ink-2">
        Sem porcentagens inventadas. Cada tecnologia aqui aparece em código que eu escrevi; o marcador indica se é uso
        diário em produção ou uso em projetos próprios e pontuais.
      </p>

      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.72rem] text-muted">
        {LEVEL_ORDER.filter((l) => skillGroups.some((g) => g.skills.some((s) => s.level === l))).map((l) => (
          <li key={l} className="inline-flex items-center gap-2">
            <LevelMark level={l} /> {levelLabel[l]}
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="ruled pt-5">
            <h3 className="font-semibold text-ink">{g.title}</h3>
            <p className="mt-1 text-sm text-ink-2">{g.description}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {g.skills.map((s) => (
                <li key={s.name} className="inline-flex items-center gap-2 text-sm text-ink-2" title={levelLabel[s.level]}>
                  <LevelMark level={s.level} />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        href="/projetos/skills"
        className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-strong"
      >
        Ver onde cada tecnologia foi usada
        <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </Link>
    </div>
  );
}
