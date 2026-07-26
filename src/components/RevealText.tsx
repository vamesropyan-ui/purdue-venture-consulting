import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { EASE_OUT_EXPO, DURATION, prefersReducedMotion } from '@/lib/motion';

type Tag = keyof JSX.IntrinsicElements;

interface RevealTextProps {
  text: string;
  as?: Tag;
  className?: string;
  /** Words rendered with the accent color (matched case-insensitively, punctuation-stripped). */
  accentWords?: string[];
  /** Delay before the first line animates in (seconds). */
  delay?: number;
}

const stripPunct = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const RevealText: React.FC<RevealTextProps> = ({
  text,
  as = 'h2',
  className,
  accentWords = [],
  delay = 0,
}) => {
  const Tag = as as any;
  const containerRef = useRef<HTMLElement | null>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [lines, setLines] = useState<number[][] | null>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.15 });
  const reduced = prefersReducedMotion();

  const words = text.split(/\s+/).filter(Boolean);
  const accentSet = new Set(accentWords.map((w) => stripPunct(w)));

  const measure = () => {
    const rows = new Map<number, number[]>();
    wordRefs.current.forEach((el, i) => {
      if (!el) return;
      const top = el.offsetTop;
      if (!rows.has(top)) rows.set(top, []);
      rows.get(top)!.push(i);
    });
    if (rows.size === 0) return;
    const sorted = [...rows.entries()].sort((a, b) => a[0] - b[0]).map(([, v]) => v);
    setLines(sorted);
  };

  useIsoLayoutEffect(() => {
    // Run measurement whenever we're in the measurement pass (lines === null).
    if (lines === null) measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines, text]);

  useEffect(() => {
    const onResize = () => setLines(null); // re-enter measurement pass
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Measurement pass: render words inline so we can compute offsetTop per word.
  // Once we have line groupings, render animated masked lines.
  return (
    <Tag ref={containerRef as any} className={className}>
      {/* Screen-reader accessible full text */}
      <span className="sr-only">{text}</span>

      {lines === null ? (
        // Measurement render — invisible but laid out identically to final content
        <span aria-hidden="true" style={{ visibility: 'hidden' }}>
          {words.map((w, i) => (
            <React.Fragment key={i}>
              <span
                ref={(el) => (wordRefs.current[i] = el)}
                style={{ display: 'inline-block' }}
              >
                {w}
              </span>
              {i < words.length - 1 ? ' ' : ''}
            </React.Fragment>
          ))}
        </span>
      ) : (
        <span aria-hidden="true">
          {lines.map((lineWordIdxs, lineIdx) => (
            <span
              key={lineIdx}
              style={{
                display: 'block',
                overflow: 'hidden',
                paddingBottom: '0.05em',
              }}
            >
              <motion.span
                style={{ display: 'inline-block', willChange: 'transform' }}
                initial={reduced ? { y: 0 } : { y: '110%' }}
                animate={inView || reduced ? { y: 0 } : { y: '110%' }}
                transition={{
                  duration: reduced ? 0 : DURATION.slow * 0.8,
                  ease: [...EASE_OUT_EXPO] as [number, number, number, number],
                  delay: reduced ? 0 : delay + lineIdx * 0.09,
                }}
              >
                {lineWordIdxs.map((wi, k) => {
                  const w = words[wi];
                  const isAccent = accentSet.has(stripPunct(w));
                  return (
                    <React.Fragment key={wi}>
                      <span className={isAccent ? 'text-accent' : undefined}>{w}</span>
                      {k < lineWordIdxs.length - 1 ? ' ' : ''}
                    </React.Fragment>
                  );
                })}
              </motion.span>
            </span>
          ))}
        </span>
      )}
    </Tag>
  );
};

export default RevealText;
