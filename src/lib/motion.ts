// Shared motion primitives. Import these instead of inline easings/durations
// so timing feels consistent across the site.

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

export const DURATION = {
  fast: 0.4,
  base: 0.7,
  slow: 1.0,
} as const;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
