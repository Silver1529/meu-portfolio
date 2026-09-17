import { experiences, education } from '@/src/data/experience';

export default function ExperienceList() {
  return (
    <div>
      <h2 className="display max-w-[22ch] text-3xl font-bold text-ink md:text-4xl">Onde eu trabalho e o que eu entrego.</h2>

      <ol className="mt-10 space-y-12">
        {experiences.map((e) => (
          <li key={e.company + e.role} className="grid gap-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
            <div className="font-mono text-xs text-muted md:pt-1">
              <p className="text-ink-2">{e.period}</p>
              {e.mode && <p className="mt-1">{e.mode}</p>}
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-ink">
                {e.role}
                <span className="text-muted"> · </span>
                {e.companyUrl ? (
                  <a href={e.companyUrl} target="_blank" rel="noopener noreferrer" className="link-ul">
                    {e.company}
                  </a>
                ) : (
                  e.company
                )}
              </h3>
              <p className="mt-3 max-w-[64ch] leading-relaxed text-ink-2">{e.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-[0.72rem] leading-relaxed text-muted">{e.stack.join(' · ')}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="ruled mt-12 pt-8">
        <h3 className="font-mono text-xs text-muted">Formação</h3>
        <ul className="mt-4 space-y-4">
          {education.map((ed) => (
            <li key={ed.school + ed.degree} className="grid gap-1 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
              <p className="font-mono text-xs text-ink-2">{ed.period ?? '—'}</p>
              <div>
                <p className="font-semibold text-ink">
                  {ed.degree} <span className="text-muted">·</span> {ed.school}
                  {ed.schoolFull && <span className="font-normal text-muted"> ({ed.schoolFull})</span>}
                </p>
                {ed.note && <p className="mt-1 text-sm text-ink-2">{ed.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
