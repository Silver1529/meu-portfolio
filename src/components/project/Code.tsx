import type { ReactNode } from 'react';

/**
 * Bloco de código ilustrativo. Cores limitadas à paleta do site:
 * palavras-chave em destaque, strings em verde, comentários apagados.
 */
export function Code({ title, children, footer }: { title?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-md border border-line bg-bg-elev">
      {title && (
        <figcaption className="flex items-center justify-between border-b border-line-soft px-4 py-2 font-mono text-[0.7rem] text-muted">
          <span>{title}</span>
        </figcaption>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-[0.78rem] leading-relaxed text-ink-2">
        <code>{children}</code>
      </pre>
      {footer && <div className="border-t border-line-soft px-4 py-2 font-mono text-[0.72rem] text-muted">{footer}</div>}
    </figure>
  );
}

export const K = ({ children }: { children: ReactNode }) => <span className="text-brand">{children}</span>;
export const S = ({ children }: { children: ReactNode }) => <span className="text-ok">{children}</span>;
export const C = ({ children }: { children: ReactNode }) => <span className="text-muted">{children}</span>;
export const F = ({ children }: { children: ReactNode }) => <span className="text-accent">{children}</span>;
export const N = ({ children }: { children: ReactNode }) => <span className="text-ink">{children}</span>;

/** Painel de dados chave/valor em mono, para mocks de resposta/estado. */
export function DataPanel({
  title,
  rows,
  status,
}: {
  title: string;
  rows: ReadonlyArray<{ k: string; v: ReactNode }>;
  status?: ReactNode;
}) {
  return (
    <div className="rounded-md border border-line bg-bg-elev font-mono text-[0.78rem]">
      <div className="flex items-center justify-between border-b border-line-soft px-4 py-2 text-[0.7rem] text-muted">
        <span>{title}</span>
        {status}
      </div>
      <dl className="divide-y divide-line-soft">
        {rows.map((r) => (
          <div key={r.k} className="flex items-center justify-between gap-4 px-4 py-2">
            <dt className="text-muted">{r.k}</dt>
            <dd className="text-right text-ink-2">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
