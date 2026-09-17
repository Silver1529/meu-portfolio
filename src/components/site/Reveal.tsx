'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Quando false, o conteúdo fica visível sem animar (ex.: acima da dobra durante a intro). */
  as?: 'div' | 'section' | 'li' | 'article';
};

/**
 * Revelação discreta ao entrar na viewport: deslocamento curto + opacidade.
 * O conteúdo já é visível por padrão em ambientes sem JS ou com movimento reduzido.
 */
export default function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}
