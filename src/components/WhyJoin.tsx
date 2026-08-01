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
        className="max-w-3xl md:ml-auto"
      >
        <div className="w-12 h-1 bg-accent mb-6" />
        <p className="text-foreground font-inter text-lg md:text-xl leading-relaxed">
          At Purdue Venture Consulting, we bring together students who are eager to challenge
          themselves, think differently, and learn by solving real business problems. By partnering
          with innovative startups, our members gain hands-on experience, develop practical skills,
          and build the confidence that comes from making a real impact.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyJoin;
