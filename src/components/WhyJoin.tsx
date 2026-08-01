import React from 'react';
import { motion } from 'framer-motion';

const WhyJoin = () => (
  <section
    className="relative overflow-hidden py-20 md:py-24"
    style={{ background: 'linear-gradient(180deg, hsl(214 42% 96%) 0%, hsl(215 38% 93%) 100%)' }}
  >
    <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-[8%] w-[440px] h-[440px] rounded-full blur-3xl opacity-[0.14]" style={{ background: 'hsl(216 55% 30%)' }} />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 right-[6%] w-[480px] h-[480px] rounded-full blur-3xl opacity-[0.12]" style={{ background: 'hsl(216 55% 30%)' }} />

    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" style={{ opacity: 0.5 }} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
      <g stroke="#13294b" strokeWidth="1" strokeOpacity="0.35">
        <line x1="80" y1="70" x2="240" y2="140" />
        <line x1="240" y1="140" x2="150" y2="300" />
        <line x1="240" y1="140" x2="380" y2="90" />
        <line x1="380" y1="90" x2="520" y2="180" />
        <line x1="330" y1="260" x2="520" y2="180" />
        <line x1="150" y1="300" x2="330" y2="260" />
        <line x1="520" y1="180" x2="470" y2="340" />
        <line x1="520" y1="180" x2="650" y2="90" />
        <line x1="650" y1="90" x2="840" y2="160" />
        <line x1="700" y1="280" x2="840" y2="160" />
        <line x1="470" y1="340" x2="700" y2="280" />
        <line x1="840" y1="160" x2="960" y2="90" />
        <line x1="840" y1="160" x2="1080" y2="220" />
        <line x1="960" y1="90" x2="1150" y2="110" />
        <line x1="920" y1="300" x2="1080" y2="220" />
        <line x1="1080" y1="220" x2="1150" y2="110" />
        <line x1="520" y1="180" x2="600" y2="250" />
        <line x1="600" y1="250" x2="700" y2="280" />
      </g>
      <g fill="#13294b">
        <circle cx="80" cy="70" r="4" />
        <circle cx="150" cy="300" r="4" />
        <circle cx="380" cy="90" r="4" />
        <circle cx="330" cy="260" r="4" />
        <circle cx="470" cy="340" r="4" />
        <circle cx="650" cy="90" r="4" />
        <circle cx="700" cy="280" r="4" />
        <circle cx="960" cy="90" r="4" />
        <circle cx="920" cy="300" r="4" />
        <circle cx="1150" cy="110" r="4" />
        <circle cx="600" cy="250" r="3.5" />
      </g>
      <g fill="#c9a24a">
        <circle cx="240" cy="140" r="5"><animate attributeName="r" values="5;6.5;5" dur="3.5s" repeatCount="indefinite" /></circle>
        <circle cx="520" cy="180" r="5"><animate attributeName="r" values="5;6.5;5" dur="4s" repeatCount="indefinite" /></circle>
        <circle cx="840" cy="160" r="5"><animate attributeName="r" values="5;6.5;5" dur="3s" repeatCount="indefinite" /></circle>
        <circle cx="1080" cy="220" r="5" />
      </g>
    </svg>

    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
          <img
            src="/lovable-uploads/present_2.jpeg"
            alt="Purdue Venture Consulting students presenting"
            loading="lazy"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
        <div>
          <div className="w-12 h-1 bg-accent mb-6" />
          <p className="text-foreground font-inter text-lg md:text-xl leading-relaxed">
            At Purdue Venture Consulting, we bring together students who are eager to challenge
            themselves, think differently, and learn by solving real business problems. By partnering
            with innovative startups, our members gain hands-on experience, develop practical skills,
            and build the confidence that comes from making a real impact.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyJoin;
