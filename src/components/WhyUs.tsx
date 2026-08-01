import React from 'react';
import { Rocket, Target, Users, Compass } from 'lucide-react';
import Reveal from './Reveal';

const HL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-accent/30 text-primary rounded-[3px] px-1 box-decoration-clone">{children}</span>
);

const items = [
  {
    icon: Rocket,
    title: 'Startups, not case studies.',
    body: (
      <>
        Every project is a live engagement with a real startup. From <HL>market research to
        go-to-market</HL>, you dig into problems that don't have an answer key and hand the founders
        something they can actually use.
      </>
    ),
  },
  {
    icon: Target,
    title: 'You own the problem.',
    body: (
      <>
        No fetching coffee, no watching from the sidelines. On a small team you <HL>research it, form
        a point of view, and deliver</HL>, the same way a real consulting team would.
      </>
    ),
  },
  {
    icon: Users,
    title: 'You find your people.',
    body: (
      <>
        Engineers, econ majors, designers, business students, all in one room because they'd rather{' '}
        <HL>build something than talk about it</HL>. The projects end. The friendships don't.
      </>
    ),
  },
  {
    icon: Compass,
    title: 'Try it before you commit.',
    body: (
      <>
        Curious about consulting, venture, or startups but not sure yet? PVC is a{' '}
        <HL>low-risk way to try the work</HL>, sharpen your instincts, and figure out what actually
        fits, before you graduate.
      </>
    ),
  },
];

const WhyUs = () => (
  <section className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-6 max-w-6xl">
      <Reveal>
        <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary text-center mb-14 md:mb-16">
          What it's <span className="text-accent">actually like</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100}>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <it.icon className="h-10 w-10 text-primary flex-shrink-0" strokeWidth={1.5} />
                <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-primary leading-tight">
                  {it.title}
                </h3>
              </div>
              <p className="font-inter text-muted-foreground text-base md:text-lg leading-relaxed">
                {it.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
