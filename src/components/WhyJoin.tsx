import React from 'react';
import { motion } from 'framer-motion';

const WhyJoin = () => (
  <section className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-8 md:gap-16 items-start"
      >
        <div>
          <p className="text-accent font-inter font-semibold tracking-[0.25em] uppercase text-xs mb-4">
            What makes us different
          </p>
          <h2 className="font-space-grotesk font-bold text-primary text-2xl md:text-3xl leading-tight tracking-tight">
            Plenty of clubs do consulting. We do it with startups.
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground font-inter text-base md:text-lg leading-relaxed">
            Most consulting clubs practice on case studies. We work with actual startups, real
            companies building something new, so you get hands-on experience solving problems that
            matter.
          </p>
          <p className="text-muted-foreground font-inter text-base md:text-lg leading-relaxed">
            No consulting experience required. Just curiosity and the urge to build, alongside
            students who want to build too.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyJoin;
