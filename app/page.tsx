'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';

import Intro from '@/src/components/site/Intro';
import Reveal from '@/src/components/site/Reveal';
import CopyEmail from '@/src/components/site/CopyEmail';
import ProjectList from '@/src/components/home/ProjectList';
import ExperienceList from '@/src/components/home/ExperienceList';
import StackOverview from '@/src/components/home/StackOverview';

import { profile } from '@/src/data/profile';
import { aboutParagraphs, aboutHighlights, pillars, coreStack, aboutFacts, methodSteps, methodIntro } from '@/src/data/about';
import { currentFocus } from '@/src/data/experience';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE } }),
};

/** Destaca termos conhecidos dentro de um parágrafo, sem HTML solto. */
function Highlighted({ text }: { text: string }) {
  const pattern = new RegExp(`(${aboutHighlights.map((h) => h.replace('.', '\\.')).join('|')})`, 'g');
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        aboutHighlights.includes(part) ? (
          <strong key={i} className="font-medium text-ink">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="tick-brand font-mono text-xs text-brand lg:sticky lg:top-20">{children}</p>;
}

export default function Home() {
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const show = ready || reduce;

  return (
    <main>
      <Intro
        targetId="hero-name"
        lines={profile.nameLines}
        caption="engenheiro de software · full stack"
        onDone={() => setReady(true)}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="brand-glow pointer-events-none absolute inset-0" />
        <div aria-hidden className="grid-paper pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-page relative grid gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16 lg:pb-28">
          <div>
            <motion.p
              custom={0}
              variants={heroItem}
              initial="hidden"
              animate={show ? 'show' : 'hidden'}
              className="inline-flex items-center gap-2 font-mono text-xs text-ink-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
              </span>
              {profile.availability}
            </motion.p>

            <h1
              id="hero-name"
              className="display mt-6 w-fit text-[clamp(3rem,8vw,6rem)] font-extrabold text-ink"
            >
              {profile.nameLines.map((line, i) => (
                <span key={line} className={`block whitespace-nowrap ${i === 1 ? 'text-brand' : ''}`}>
                  {line}
                </span>
              ))}
            </h1>

            <motion.p
              custom={1}
              variants={heroItem}
              initial="hidden"
              animate={show ? 'show' : 'hidden'}
              className="mt-8 max-w-[38rem] text-xl leading-snug text-ink md:text-2xl"
            >
              {profile.role} na{' '}
              <a href={profile.company.url} target="_blank" rel="noopener noreferrer" className="link-ul">
                {profile.company.name}
              </a>
              .
            </motion.p>

            <motion.p
              custom={2}
              variants={heroItem}
              initial="hidden"
              animate={show ? 'show' : 'hidden'}
              className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-2 md:text-lg"
            >
              Back-end em Node.js e NestJS, SPA/SSR em React e Next.js, automação e engenharia de dados.{' '}
              {profile.education.degree} na {profile.education.school}. {profile.motto}
            </motion.p>

            <motion.div
              custom={3}
              variants={heroItem}
              initial="hidden"
              animate={show ? 'show' : 'hidden'}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            >
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 font-medium text-brand-ink transition-colors hover:bg-brand-strong"
              >
                Ver projetos
                <ArrowDown size={15} aria-hidden />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-2 transition-colors hover:text-ink"
              >
                <Github size={15} aria-hidden /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-2 transition-colors hover:text-ink"
              >
                <Linkedin size={15} aria-hidden /> LinkedIn
              </a>
              <CopyEmail />
            </motion.div>
          </div>

          <motion.aside
            custom={4}
            variants={heroItem}
            initial="hidden"
            animate={show ? 'show' : 'hidden'}
            className="lg:pt-24"
          >
            <dl className="ruled space-y-4 pt-5 text-sm lg:border-t-0 lg:border-l lg:border-line-soft lg:pl-6 lg:pt-0">
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">Empresa</dt>
                <dd className="mt-0.5 text-ink-2">{profile.company.name}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">Formação</dt>
                <dd className="mt-0.5 text-ink-2">
                  {profile.education.degree} · {profile.education.school}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">Ambiente</dt>
                <dd className="mt-0.5 text-ink-2">{profile.environment}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">Trabalhando em</dt>
                <dd className="mt-1.5">
                  <ul className="space-y-1 text-ink-2">
                    {currentFocus.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span aria-hidden className="mt-[0.75em] h-px w-2.5 shrink-0 bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </section>

      <div className="container-page space-y-28 lg:space-y-36">
        {/* SOBRE */}
        <Reveal as="section" className="section-grid ruled scroll-mt-20 pt-10">
          <div id="sobre">
            <SectionLabel>Sobre</SectionLabel>
          </div>
          <div className="min-w-0">
            <h2 className="display max-w-[20ch] text-3xl font-bold text-ink md:text-4xl">
              Engenheiro de software com o pé no back-end e o olho na tela.
            </h2>
            <div className="mt-7 max-w-[66ch] space-y-5 text-[1.02rem] leading-relaxed text-ink-2">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>
                  <Highlighted text={p} />
                </p>
              ))}
            </div>

            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="ruled pt-4">
                  <dt className="font-semibold text-ink">{p.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink-2">{p.description}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">Core stack</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {coreStack.map((t) => (
                    <li key={t} className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-ink-2">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm md:min-w-[18rem]">
                {aboutFacts.map((f) => (
                  <div key={f.label} className="contents">
                    <dt className="text-muted">{f.label}</dt>
                    <dd className="text-right text-ink-2 md:text-left">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>

        {/* EXPERIÊNCIA */}
        <Reveal as="section" className="section-grid ruled scroll-mt-20 pt-10">
          <div id="experiencia">
            <SectionLabel>Experiência</SectionLabel>
          </div>
          <div className="min-w-0">
            <ExperienceList />
          </div>
        </Reveal>

        {/* MÉTODO */}
        <Reveal as="section" className="section-grid ruled scroll-mt-20 pt-10">
          <div id="metodo">
            <SectionLabel>Como eu trabalho</SectionLabel>
          </div>
          <div className="min-w-0">
            <h2 className="display max-w-[22ch] text-3xl font-bold text-ink md:text-4xl">Do problema à entrega.</h2>
            <p className="mt-5 max-w-[60ch] text-ink-2">{methodIntro}</p>

            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {methodSteps.map((s) => (
                <li key={s.number} className="ruled pt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-sm text-brand">{s.number}</span>
                    <span className="font-mono text-[0.7rem] text-muted">{s.subtitle}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span aria-hidden className="mt-[0.75em] h-px w-2.5 shrink-0 bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* PROJETOS */}
        <section className="section-grid ruled scroll-mt-20 pt-10">
          <div id="projetos">
            <SectionLabel>Projetos</SectionLabel>
          </div>
          <div className="min-w-0">
            <ProjectList />
          </div>
        </section>

        {/* STACK */}
        <Reveal as="section" className="section-grid ruled scroll-mt-20 pt-10">
          <div id="stack">
            <SectionLabel>Stack</SectionLabel>
          </div>
          <div className="min-w-0">
            <StackOverview />
          </div>
        </Reveal>

        {/* CONTATO */}
        <Reveal as="section" className="section-grid ruled scroll-mt-20 pt-10">
          <div id="contato">
            <SectionLabel>Contato</SectionLabel>
          </div>
          <div className="min-w-0">
            <h2 className="display max-w-[18ch] text-3xl font-bold text-ink md:text-5xl">Vamos trabalhar juntos?</h2>
            <p className="mt-5 max-w-[56ch] text-ink-2">
              Estou sempre aberto a novos desafios e parcerias. O caminho mais rápido é o e-mail; o LinkedIn também
              funciona.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CopyEmail variant="button" />
              <a href={`mailto:${profile.email}`} className="link-ul font-mono text-sm text-ink-2">
                {profile.email}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {[
                { label: 'GitHub', href: profile.links.github },
                { label: 'LinkedIn', href: profile.links.linkedin },
                { label: 'Código deste site', href: profile.links.repo },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-ink-2 transition-colors hover:text-ink"
                  >
                    {l.label}
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </a>
                </li>
              ))}
              <li>
                <Link href="/projetos/skills" className="text-ink-2 transition-colors hover:text-ink">
                  Stack completa
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
