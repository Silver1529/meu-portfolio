'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'mb:intro-seen';
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const TYPE_MS = 2900;
const FLY_MS = 1150;

type Phase = 'cover' | 'type' | 'fly' | 'done';

type Props = {
  /** id do <h1> do hero que recebe o nome no fim da animação (precisa ter largura do texto, ex.: w-fit). */
  targetId: string;
  lines: readonly [string, string];
  caption: string;
  onDone?: () => void;
};

/** Espera a fonte de exibição do elemento carregar, com limite de tempo. */
async function waitForFont(el: HTMLElement, timeoutMs = 900) {
  if (!document.fonts?.load) return;
  const family = getComputedStyle(el).fontFamily;
  const load = document.fonts.load(`800 1em ${family}`).then(() => undefined, () => undefined);
  const timeout = new Promise<void>((r) => setTimeout(r, timeoutMs));
  await Promise.race([load, timeout]);
}

/**
 * Entrada do site: o nome monta letra a letra numa composição à esquerda,
 * uma régua se desenha e uma legenda em mono aparece. Em seguida o nome
 * "voa" e assenta exatamente no <h1> do hero enquanto o fundo se dissolve.
 *
 * - Roda uma vez por sessão (sessionStorage).
 * - Pula com clique, Enter, Espaço ou Esc.
 * - Com prefers-reduced-motion, não roda.
 * - O overlay é renderizado no servidor para não haver flash de conteúdo.
 */
export default function Intro({ targetId, lines, caption, onDone }: Props) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('cover');
  const [fly, setFly] = useState<{ x: number; y: number; scale: number } | null>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const started = useRef(false);
  const phaseRef = useRef<Phase>('cover');
  phaseRef.current = phase;

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const finish = useCallback(() => {
    const target = document.getElementById(targetId);
    if (target) target.style.visibility = '';
    setPhase('done');
    onDone?.();
  }, [onDone, targetId]);

  const startFly = useCallback(() => {
    if (phaseRef.current === 'fly' || phaseRef.current === 'done') return;
    clearTimers();
    const target = document.getElementById(targetId);
    const source = nameRef.current;
    if (!target || !source) {
      finish();
      return;
    }
    const t = target.getBoundingClientRect();
    const s = source.getBoundingClientRect();
    const scale = s.width > 0 ? t.width / s.width : 1;
    setFly({ x: t.left - s.left, y: t.top - s.top, scale });
    target.style.visibility = 'hidden';
    setPhase('fly');
    timers.current.push(window.setTimeout(finish, FLY_MS));
  }, [finish, targetId]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      seen = false;
    }

    if (seen || reduce) {
      finish();
      return;
    }

    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* sem armazenamento: a intro roda novamente na próxima visita */
    }

    let cancelled = false;
    const begin = async () => {
      if (nameRef.current) await waitForFont(nameRef.current);
      if (cancelled) return;
      setPhase('type');
      timers.current.push(window.setTimeout(() => startFly(), TYPE_MS));
    };
    void begin();

    return () => {
      cancelled = true;
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== 'type') return;
    const skip = (e: KeyboardEvent | PointerEvent) => {
      if (e instanceof KeyboardEvent && !['Enter', 'Escape', ' '].includes(e.key)) return;
      startFly();
    };
    window.addEventListener('keydown', skip);
    window.addEventListener('pointerdown', skip);
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, [phase, startFly]);

  const typing = phase === 'type';
  const flying = phase === 'fly';

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <div
          id="intro"
          role="presentation"
          aria-hidden
          className="fixed inset-0 z-50 select-none"
          style={{ pointerEvents: flying ? 'none' : 'auto' }}
        >
          <noscript>
            <style>{`#intro{display:none}`}</style>
          </noscript>

          {/* Fundo: só ele se dissolve. O nome permanece sólido até assentar no hero. */}
          <motion.div
            className="absolute inset-0 bg-bg"
            initial={false}
            animate={{ opacity: flying ? 0 : 1 }}
            transition={{ duration: 0.7, delay: flying ? 0.45 : 0, ease: EASE }}
          />

          <div className="container-page relative flex h-full items-center">
            <div className="relative">
              <motion.div
                ref={nameRef}
                className="display w-fit font-extrabold text-ink"
                style={{
                  fontSize: 'clamp(3.25rem, 12vw, 7.5rem)',
                  transformOrigin: 'top left',
                  willChange: 'transform',
                }}
                animate={flying && fly ? { x: fly.x, y: fly.y, scale: fly.scale } : { x: 0, y: 0, scale: 1 }}
                transition={{ duration: FLY_MS / 1000, ease: EASE }}
              >
                {lines.map((line, li) => (
                  <span key={line} className={`block whitespace-nowrap ${li === 1 ? 'text-brand' : ''}`}>
                    {Array.from(line).map((ch, ci) => {
                      const index = li * lines[0].length + ci;
                      return (
                        <motion.span
                          key={`${li}-${ci}`}
                          className="inline-block"
                          initial={{ opacity: 0, y: '0.55em', filter: 'blur(8px)' }}
                          animate={typing || flying ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                          transition={{ duration: 0.95, delay: 0.15 + index * 0.065, ease: EASE }}
                        >
                          {ch}
                        </motion.span>
                      );
                    })}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="mt-5 h-px w-full origin-left bg-brand"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: typing ? 1 : 0, opacity: typing ? 1 : 0 }}
                transition={{ duration: typing ? 0.9 : 0.2, delay: typing ? 1.1 : 0, ease: EASE }}
              />
              <motion.p
                className="caret mt-3 font-mono text-sm text-ink-2 sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: typing ? 1 : 0 }}
                transition={{ duration: typing ? 0.5 : 0.15, delay: typing ? 1.6 : 0, ease: EASE }}
              >
                {caption}
              </motion.p>
            </div>
          </div>

          <motion.p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.7rem] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: typing ? 1 : 0 }}
            transition={{ delay: typing ? 2 : 0, duration: 0.3 }}
          >
            clique para pular
          </motion.p>
        </div>
      )}
    </AnimatePresence>
  );
}
