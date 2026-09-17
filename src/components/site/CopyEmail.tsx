'use client';

import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile } from '@/src/data/profile';

type Props = {
  className?: string;
  variant?: 'inline' | 'button';
};

export default function CopyEmail({ className = '', variant = 'inline' }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  if (variant === 'button') {
    return (
      <button
        type="button"
        onClick={copy}
        className={`inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-brand-ink transition-colors hover:bg-brand-strong ${className}`}
      >
        {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
        <span>{copied ? 'E-mail copiado' : 'Copiar e-mail'}</span>
        <span className="sr-only" aria-live="polite">
          {copied ? 'E-mail copiado para a área de transferência' : ''}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`group inline-flex items-center gap-2 font-mono text-sm text-ink-2 transition-colors hover:text-ink ${className}`}
      title="Copiar e-mail"
    >
      <span className="link-ul">{profile.email}</span>
      {copied ? (
        <Check size={14} className="text-ok" aria-hidden />
      ) : (
        <Copy size={14} className="opacity-50 transition-opacity group-hover:opacity-100" aria-hidden />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? 'E-mail copiado' : ''}
      </span>
    </button>
  );
}
