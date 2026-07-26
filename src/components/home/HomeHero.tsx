import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../RevealText';
import { EASE_OUT_EXPO } from '@/lib/motion';

const HomeHero = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between pt-16 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: [...EASE_OUT_EXPO] as [number, number, number, number] }}
        className="container mx-auto px-6"
      >
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-inter text-xs tracking-[0.24em] uppercase text-muted-foreground">
            Purdue · Student Venture Consulting
          </span>
        </div>
      </motion.div>

      <motion.div style={{ y }} className="container mx-auto px-6">
        <div className="max-w-[92%] md:max-w-[85%]">
          <div style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', lineHeight: 0.92, letterSpacing: '-0.035em' }}>
            <RevealText
              as="h1"
              text="Where strategy meets opportunity."
              accentWords={['opportunity']}
              className="font-space-grotesk font-bold text-foreground"
              delay={0.25}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.1, ease: [...EASE_OUT_EXPO] as [number, number, number, number] }}
        className="container mx-auto px-6"
      >
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-inter text-sm lowercase text-foreground/70 hover:text-accent transition-colors duration-500"
        >
          explore our work <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeHero;
