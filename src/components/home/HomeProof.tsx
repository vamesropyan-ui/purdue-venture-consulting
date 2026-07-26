import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EASE_OUT_EXPO } from '@/lib/motion';

const clients = ['Captain', 'Astor', 'Zuri', 'Elisyan', 'KOVA', 'Rounds', 'PoliStock', 'BeWealther'];

const metrics = [
  { n: '10+', label: 'startups served' },
  { n: '1', label: 'YC backed client' },
  { n: '7', label: 'industries' },
  { n: '50+', label: 'deliverables shipped' },
];

const HomeProof = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const driftY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="min-h-screen flex flex-col justify-center py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [...EASE_OUT_EXPO] as [number, number, number, number] }}
          className="font-space-grotesk font-semibold text-foreground max-w-5xl"
          style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
        >
          Trusted by founders, including a{' '}
          <span className="text-accent">Y Combinator</span> company.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [...EASE_OUT_EXPO] as [number, number, number, number] }}
        className="mt-20 md:mt-28 relative"
      >
        <div className="marquee-track flex whitespace-nowrap gap-16 font-space-grotesk font-medium text-foreground/80"
             style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="shrink-0 flex items-center gap-16">
              {c}
              <span className="text-accent/60" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </motion.div>

      <div ref={ref} className="container mx-auto px-6 mt-24 md:mt-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-x-8">
          {metrics.map((m, i) => {
            const inner = (
              <>
                <div
                  className="font-space-grotesk font-bold text-foreground"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.04em' }}
                >
                  {m.n}
                </div>
                <div className="mt-4 font-inter text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {m.label}
                </div>
              </>
            );
            const cls = i % 2 === 1 ? 'md:mt-16' : '';
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.12,
                  ease: [...EASE_OUT_EXPO] as [number, number, number, number],
                }}
                className={cls}
              >
                {i === 1 ? <motion.div style={{ y: driftY }}>{inner}</motion.div> : inner}
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: pvc-marquee 38s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        @keyframes pvc-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HomeProof;
