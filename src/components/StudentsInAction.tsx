import React from 'react';
import Reveal from '@/components/Reveal';

const StudentsInAction = () => (
  <section
    className="relative w-full min-h-[70vh] flex items-end overflow-hidden"
    aria-label="PVC students at final presentations"
  >
    {/* Background image — cropped to focus on the students */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/504d70be-bef1-4524-bcd3-328680f0bc66.png')`,
        backgroundPosition: 'center 55%',
      }}
      aria-hidden="true"
    />

    {/* Readability overlay */}
    <div
      className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-primary/85"
      aria-hidden="true"
    />

    {/* Text layer */}
    <div className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24 pt-32">
        <Reveal delay={100}>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Why Join PVC
          </p>
          <h1 className="font-space-grotesk font-bold text-white leading-[1.05] max-w-4xl" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
            Do real work for real startups.
          </h1>
          <p className="mt-5 text-white/90 text-lg md:text-xl max-w-2xl font-inter">
            Consult for actual startups, train like a top firm, and build a serious network.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default StudentsInAction;
