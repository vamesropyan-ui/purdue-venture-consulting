import React from 'react';
import { Briefcase, GraduationCap, Rocket, Network, TrendingUp, Users } from 'lucide-react';
import Reveal from './Reveal';

const points = [
  { icon: Briefcase, title: 'Real client work', body: 'Consult for actual startups — including a Y Combinator–backed company — not hypothetical case competitions.' },
  { icon: GraduationCap, title: 'Consulting training', body: 'Case prep, frameworks, and mock interviews that prepare you for top consulting and venture firms.' },
  { icon: Rocket, title: 'Work that ships', body: 'You own real deliverables that founders actually use to make decisions.' },
  { icon: Network, title: 'A serious network', body: 'Direct access to founders, VCs, alumni, and mentors across the startup ecosystem.' },
  { icon: TrendingUp, title: 'Career outcomes', body: 'Build the experience and skills that land competitive internships and full-time offers.' },
  { icon: Users, title: 'A driven community', body: "Join a selective, collaborative team of Purdue's most motivated students." },
];

const WhyJoin = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <div className="text-accent font-inter font-semibold tracking-[0.3em] text-sm mb-4">FOR STUDENTS</div>
        <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">Why Join PVC</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={i * 80}>
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-accent/60 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-md bg-primary/5 border border-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>
                <h3 className="font-space-grotesk font-bold text-lg text-primary mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm font-inter leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyJoin;
