import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT_EXPO } from '@/lib/motion';

const lines = [
  'We are a student led consulting group.',
  'We partner with venture backed founders on the strategy work',
  'that decides whether a startup scales.',
];

const HomeStatement = () => {
  return (
    <section className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-6">
        <div className="md:pl-[12%] max-w-[46ch]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [...EASE_OUT_EXPO] as [number, number, number, number] }}
            className="font-inter text-xs tracking-[0.24em] uppercase text-accent mb-10"
          >
            Our practice
          </motion.div>
          <h2
            className="font-space-grotesk font-medium text-foreground"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            {lines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 + i * 0.18,
                  ease: [...EASE_OUT_EXPO] as [number, number, number, number],
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomeStatement;
