import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RevealText from '../RevealText';
import { EASE_OUT_EXPO } from '@/lib/motion';

const HomeClosing = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-32">
      <div className="container mx-auto px-6">
        <div style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', lineHeight: 0.95, letterSpacing: '-0.035em' }}>
          <RevealText
            as="h2"
            text="Let's build what's next."
            accentWords={["next."]}
            className="font-space-grotesk font-bold text-foreground"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.1,
            delay: 0.6,
            ease: [...EASE_OUT_EXPO] as [number, number, number, number],
          }}
          className="mt-20 md:mt-28 flex flex-col md:flex-row gap-6 md:gap-14"
        >
          <Link
            to="/apply"
            className="font-inter text-base lowercase text-foreground/70 hover:text-accent transition-colors duration-500"
          >
            apply to join <span aria-hidden="true">→</span>
          </Link>
          <a
            href="mailto:info@purdueventureconsulting.com"
            className="font-inter text-base lowercase text-foreground/70 hover:text-accent transition-colors duration-500"
          >
            work with us <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeClosing;
