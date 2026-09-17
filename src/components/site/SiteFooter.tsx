import Link from 'next/link';
import { profile } from '@/src/data/profile';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ruled mt-24">
      <div className="container-page flex flex-col gap-6 py-10 text-sm text-ink-2 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-ink">{profile.fullName.replace('Bahia', '')}<span className="text-brand">Bahia</span></p>
          <p>
            {profile.role} · {profile.company.name}
          </p>
          <a href={`mailto:${profile.email}`} className="link-ul text-ink-2">
            {profile.email}
          </a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link-ul">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-ul">
              LinkedIn
            </a>
            <Link href="/projetos/skills" className="link-ul">
              Stack completa
            </Link>
            <a href={profile.links.repo} target="_blank" rel="noopener noreferrer" className="link-ul">
              Código deste site
            </a>
          </div>
          <p className="font-mono text-xs text-muted">
            Next.js 16 · React 19 · Tailwind v4 · Motion · © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
