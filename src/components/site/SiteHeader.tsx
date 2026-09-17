'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profile } from '@/src/data/profile';

const NAV = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#contato', label: 'Contato' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const crumbs = pathname.split('/').filter(Boolean);

  return (
    <header
      className={`sticky top-0 z-40 bg-bg transition-[border-color] duration-300 ${
        scrolled ? 'border-b border-line-soft' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3 font-mono text-[0.8rem]">
          <Link
            href="/"
            className="inline-flex h-7 items-center rounded-sm border border-brand/40 bg-brand-soft px-1.5 font-semibold tracking-tight text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-ink"
            aria-label="Início"
          >
            MB
          </Link>
          {crumbs.length > 0 ? (
            <nav aria-label="Caminho" className="hidden min-w-0 items-center gap-1.5 text-muted sm:flex">
              {crumbs.map((c, i) => (
                <span key={c} className="flex items-center gap-1.5 truncate">
                  <span aria-hidden>/</span>
                  {i === crumbs.length - 1 ? (
                    <span className="text-ink-2">{c}</span>
                  ) : (
                    <Link href={c === 'projetos' ? '/#projetos' : `/${crumbs.slice(0, i + 1).join('/')}`} className="hover:text-ink">
                      {c}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          ) : (
            <span className="hidden text-muted sm:inline">{profile.name}</span>
          )}
        </div>

        <nav aria-label="Seções" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-ink-2 transition-colors hover:bg-surface hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-2 transition-colors hover:border-ink-2 hover:text-ink"
          >
            <Github size={16} aria-hidden />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
