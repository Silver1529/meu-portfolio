import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import Reveal from '@/src/components/site/Reveal';

type MetaItem = { label: string; value: ReactNode };
type LinkItem = { label: string; href: string; primary?: boolean };

type Props = {
  kicker: string;
  title: ReactNode;
  summary: ReactNode;
  meta: MetaItem[];
  tags: readonly string[];
  links?: LinkItem[];
  children: ReactNode;
};

/**
 * Estrutura comum das páginas de projeto: cabeçalho com ficha técnica e
 * seções em grade "rótulo à esquerda, conteúdo à direita".
 */
export default function ProjectShell({ kicker, title, summary, meta, tags, links = [], children }: Props) {
  return (
    <main className="container-page pb-8 pt-8 md:pt-12">
      <Link
        href="/#projetos"
        className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" aria-hidden />
        voltar aos projetos
      </Link>

      <header className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div className="max-w-[46rem]">
          <p className="tick-brand font-mono text-xs text-brand">{kicker}</p>
          <h1 className="display mt-3 text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold text-ink">{title}</h1>
          <p className="mt-6 max-w-[64ch] text-lg leading-relaxed text-ink-2 md:text-xl">{summary}</p>

          {links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    l.primary
                      ? 'inline-flex items-center gap-1.5 rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-ink transition-colors hover:bg-brand-strong'
                      : 'inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink-2 hover:text-ink'
                  }
                >
                  {l.label}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>

        <dl className="ruled grid grid-cols-2 gap-x-6 gap-y-5 pt-6 text-sm lg:grid-cols-1 lg:border-t-0 lg:border-l lg:border-line-soft lg:pl-8 lg:pt-1">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">{m.label}</dt>
              <dd className="mt-1 text-ink-2">{m.value}</dd>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-1">
            <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span key={t} className="rounded-sm border border-line px-1.5 py-0.5 font-mono text-[0.72rem] text-ink-2">
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <div className="mt-20 space-y-20">{children}</div>
    </main>
  );
}

type SectionProps = {
  label: string;
  title?: ReactNode;
  children: ReactNode;
  id?: string;
};

export function ProjectSection({ label, title, children, id }: SectionProps) {
  return (
    <Reveal as="section" className="section-grid ruled pt-8">
      <div id={id}>
        <p className="tick-brand font-mono text-xs text-brand lg:sticky lg:top-20">{label}</p>
      </div>
      <div className="min-w-0">
        {title && <h2 className="display text-2xl font-bold text-ink md:text-3xl">{title}</h2>}
        <div className={title ? 'mt-5' : ''}>{children}</div>
      </div>
    </Reveal>
  );
}

/** Lista de fatos em duas colunas (termo / descrição). Sem cards. */
export function FactList({ items }: { items: ReadonlyArray<{ term: ReactNode; desc: ReactNode }> }) {
  return (
    <dl className="divide-y divide-line-soft">
      {items.map((it, i) => (
        <div key={i} className="grid gap-1 py-3 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6">
          <dt className="font-medium text-ink">{it.term}</dt>
          <dd className="text-sm leading-relaxed text-ink-2">{it.desc}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Lista de pontos com marcador tipográfico. */
export function Bullets({ items, className = '' }: { items: ReadonlyArray<ReactNode>; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-2">
          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** Texto corrido de projeto, largura de leitura confortável. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-[68ch] space-y-4 text-[0.98rem] leading-relaxed text-ink-2 [&_strong]:font-medium [&_strong]:text-ink">{children}</div>;
}
