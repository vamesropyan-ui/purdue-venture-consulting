import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT_EXPO } from '@/lib/motion';

const rows = [
  {
    n: '01',
    title: 'Strategic Consulting',
    desc: 'Market, competitive, and go to market strategy for real startups.',
  },
  {
    n: '02',
    title: 'Case & Career Prep',
    desc: 'Interview training and mentorship for top consulting and venture firms.',
  },
  {
    n: '03',
    title: 'Exclusive Network',
    desc: 'Founders, VCs, alumni, and mentors across the startup ecosystem.',
  },
];

const HomeWhatWeDo = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [...EASE_OUT_EXPO] as [number, number, number, number] }}
          className="font-inter text-xs tracking-[0.24em] uppercase text-muted-foreground mb-20 md:mb-28 md:pl-[6%]"
        >
          What we do
        </motion.div>

        <div className="border-t border-border">
          {rows.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.0,
                delay: i * 0.15,
                ease: [...EASE_OUT_EXPO] as [number, number, number, number],
              }}
              className="grid grid-cols-12 gap-6 items-baseline py-10 md:py-16 border-b border-border"
            >
              <div
                className="col-span-2 md:col-span-2 font-space-grotesk text-accent font-medium"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', letterSpacing: '-0.01em' }}
              >
                {r.n}
              </div>
              <h3
                className="col-span-10 md:col-span-6 font-space-grotesk font-semibold text-foreground"
                style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.75rem)', lineHeight: 1.02, letterSpacing: '-0.025em' }}
              >
                {r.title}
              </h3>
              <p className="col-span-12 md:col-span-4 md:pl-8 font-inter text-base md:text-lg text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
