import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT_EXPO, DURATION, prefersReducedMotion } from '@/lib/motion';

type Tag = keyof JSX.IntrinsicElements;

interface RevealTextProps {
  text: string;
  as?: Tag;
  className?: string;
  /** Words rendered with the accent color (matched case-insensitively, punctuation-stripped). */
  accentWords?: string[];
  /** Delay before the reveal animates in (seconds). */
  delay?: number;
}

const stripPunct = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();

const RevealText: React.FC<RevealTextProps> = ({
  text,
  as = 'h2',
  className,
  accentWords = [],
  delay = 0,
}) => {
  const Tag = as as any;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [clip, setClip] = useState(true);
  const reduced = prefersReducedMotion();

  const words = text.split(/\s+/).filter(Boolean);
  const accentSet = new Set(accentWords.map((w) => stripPunct(w)));

  // Trigger reveal on scroll into view, with a safety fallback.
  useEffect(() => {
    if (reduced) {
      setVisible(true);
      setClip(false);
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

    const t = window.setTimeout(reveal, 600);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [reduced]);

  const heading = (
    <Tag className={className}>
      {words.map((w, i) => {
        const isAccent = accentSet.has(stripPunct(w));
        return (
          <React.Fragment key={i}>
            <span className={isAccent ? 'text-accent' : undefined}>{w}</span>
            {i < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </Tag>
  );

  if (reduced) {
    return <div ref={containerRef}>{heading}</div>;
  }

  const duration = DURATION.slow * 0.9;

  return (
    <div
      ref={containerRef}
      style={{
        overflow: clip ? 'hidden' : 'visible',
      }}
    >
      <motion.div
        style={{ willChange: 'transform' }}
        initial={{ y: '100%' }}
        animate={visible ? { y: '0%' } : { y: '100%' }}
        transition={{
          duration,
          ease: [...EASE_OUT_EXPO] as [number, number, number, number],
          delay,
        }}
        onAnimationComplete={() => setClip(false)}
      >
        {heading}
      </motion.div>
    </div>
  );
};

export default RevealText;
