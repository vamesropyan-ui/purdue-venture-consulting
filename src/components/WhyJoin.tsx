import React from 'react';
import { motion } from 'framer-motion';

const WhyJoin = () => (
  <section className="relative overflow-hidden py-20 md:py-24 bg-background">
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" style={{ opacity: 0.5 }} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
      <g fill="#c9a24a">
        <circle cx="70" cy="80" r="5" />
        <circle cx="230" cy="300" r="4" />
        <circle cx="430" cy="120" r="5" />
        <circle cx="160" cy="210" r="4" />
        <circle cx="350" cy="350" r="4" />
        <circle cx="600" cy="90" r="4" />
      </g>
      <g fill="#13294b" fillOpacity="0.55">
        <circle cx="120" cy="140" r="4" />
        <circle cx="300" cy="240" r="4" />
        <circle cx="95" cy="330" r="4" />
        <circle cx="520" cy="300" r="4" />
        <circle cx="700" cy="160" r="3.5" />
      </g>
      <g stroke="#c9a24a" strokeWidth="2.5" strokeLinecap="round">
        <path d="M270 70 v14 M263 77 h14" />
        <path d="M470 330 v14 M463 337 h14" />
        <path d="M560 190 v12 M554 196 h12" />
      </g>
      <g stroke="#13294b" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round">
        <path d="M190 360 v12 M184 366 h12" />
        <path d="M640 60 v12 M634 66 h12" />
      </g>
      <g fill="#c9a24a">
        <path d="M340 55 l2.5 7 7 2.5 -7 2.5 -2.5 7 -2.5 -7 -7 -2.5 7 -2.5z" />
        <path d="M150 375 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" />
        <path d="M500 235 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" />
      </g>
    </svg>
    <div className="container mx-auto px-6 max-w-6xl relative z-10">
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
