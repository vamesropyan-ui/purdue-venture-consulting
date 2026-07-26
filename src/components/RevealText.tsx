import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
  const [visible, setVisible] = useState(false);
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
    if (lines === null) measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines, text]);

  useEffect(() => {
    const onResize = () => setLines(null);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Visibility trigger: IntersectionObserver against the viewport, plus a
  // safety fallback that always reveals the text after a short timeout so
  // headings can NEVER remain invisible.
  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal();
            io.disconnect();
            break;
          }
        }
      },
      { root: null, threshold: 0.15 }
    );
    io.observe(node);

    // Fallback: if IO hasn't fired shortly after mount (e.g. Lenis timing,
    // hidden ancestor, or element already fully in view but not triggering),
    // force-reveal so the heading is never left blank.
    const t = window.setTimeout(reveal, 600);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [reduced]);

  return (
    <Tag ref={containerRef as any} className={className}>
      <span className="sr-only">{text}</span>

      {lines === null ? (
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
                animate={visible || reduced ? { y: 0 } : { y: '110%' }}
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
