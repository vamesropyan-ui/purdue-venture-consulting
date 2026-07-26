import React from 'react';
import Reveal from './Reveal';

const reasons = [
  {
    label: 'Real client work',
    body: 'You consult for actual startups, including a Y Combinator-backed company, not hypothetical cases.',
  },
  {
    label: 'Real training',
    body: 'Case prep, frameworks, and mentorship that prepare you for top consulting and venture firms.',
  },
  {
    label: 'Real network',
    body: 'Direct access to founders, VCs, and alumni across the startup ecosystem.',
  },
];

const WhyJoin = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6 max-w-5xl">
      <Reveal>
        <div className="text-center mb-14">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Why Join PVC
          </h2>
          <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
            We built this club for students who want to learn by doing, alongside people who take the work seriously.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {reasons.map((reason, i) => (
          <Reveal key={reason.label} delay={i * 100}>
            <div className="text-center md:text-left">
              <h3 className="font-space-grotesk font-bold text-xl text-primary mb-3">
                {reason.label}
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {reason.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyJoin;
