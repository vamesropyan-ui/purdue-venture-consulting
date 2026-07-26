import { EASE_OUT_EXPO } from '@/lib/motion';

/** Shared editorial type scale (clamps). */
export const HEAD_SIZE = 'clamp(1.9rem, 3.8vw, 3rem)';
export const HERO_SIZE = 'clamp(2.5rem, 5.5vw, 5rem)';
export const ROW_TITLE = 'clamp(1.4rem, 2.6vw, 2.1rem)';
export const METRIC_SIZE = 'clamp(2.25rem, 4vw, 3.25rem)';

export const EASE = [...EASE_OUT_EXPO] as [number, number, number, number];

/** Standard fade + slide-up used across editorial sections. */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, delay, ease: EASE },
});
