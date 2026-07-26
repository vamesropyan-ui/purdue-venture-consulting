import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { EASE_OUT_EXPO, prefersReducedMotion } from '@/lib/motion';

/**
 * Initializes Lenis smooth inertial scrolling once for the app.
 * - Respects prefers-reduced-motion (disables smoothing).
 * - Resets scroll to top on route change.
 * - Cleans up on unmount.
 */
const SmoothScroll: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Expo-out easing matching EASE_OUT_EXPO curve.
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const lenis = new Lenis({
      duration: 1.1,
      easing: easeOutExpo,
      smoothWheel: true,
      // Touch devices keep native scroll for best feel.
      touchMultiplier: 1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Expose for anchor-link handlers if needed.
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset scroll on route change (instant, before any smoothing kicks in).
  useEffect(() => {
    const lenis = (window as any).__lenis as Lenis | undefined;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Reference EASE_OUT_EXPO so tree-shakers keep the shared constant colocated
  // with this module's intent (expo-out feel).
  void EASE_OUT_EXPO;

  return null;
};

export default SmoothScroll;
