import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Full-screen navy "curtain" wipe on client-side route changes.
 * Sweeps up to cover, briefly shows the PVC brand mark, then sweeps
 * further up to reveal the newly loaded page underneath.
 *
 * Respects prefers-reduced-motion.
 */
const EASE = [0.76, 0, 0.24, 1] as const;

const PageTransition: React.FC = () => {
  const { pathname } = useLocation();
  const [animKey, setAnimKey] = useState<string | null>(null);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    setAnimKey(pathname + '#' + Date.now());
  }, [pathname]);

  return (
    <AnimatePresence>
      {animKey && (
        <motion.div
          key={animKey}
          aria-hidden="true"
          className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
          style={{ backgroundColor: 'hsl(var(--primary))' }}
          initial={{ y: '100%' }}
          animate={{ y: ['100%', '0%', '0%', '-100%'] }}
          transition={{
            duration: 0.95,
            times: [0, 0.42, 0.58, 1],
            ease: EASE,
          }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => setAnimKey(null)}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -6] }}
            transition={{
              duration: 0.95,
              times: [0, 0.42, 0.62, 0.85],
              ease: 'easeOut',
            }}
          >
            <div
              className="font-space-grotesk text-white leading-none"
              style={{ fontSize: 'clamp(6rem, 18vw, 12rem)', fontWeight: 700 }}
            >
              V
            </div>
            <div
              className="mt-4 h-[2px] w-16"
              style={{ backgroundColor: 'hsl(var(--accent))' }}
            />
            <div
              className="mt-4 font-space-grotesk text-xs sm:text-sm tracking-[0.35em] uppercase"
              style={{ color: 'hsl(var(--accent))' }}
            >
              Purdue Venture Consulting
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
