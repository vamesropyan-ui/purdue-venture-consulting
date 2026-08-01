import React from 'react';
import { ThumbsUp, Briefcase, Users, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

const HL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-accent/30 text-primary rounded-[3px] px-1 box-decoration-clone">{children}</span>
);

const items = [
  {
    icon: ThumbsUp,
    title: 'Real Startup Experience',
    body: (
      <>
        From day one, our consultants work directly with <HL>real startups</HL>, not hypothetical
        case studies. You take on live problems like market research, positioning, and go-to-market,
        and turn them into recommendations the company can actually use. It's <HL>hands-on work</HL>{' '}
        that builds judgment you can't get in a classroom.
      </>
    ),
  },
  {
    icon: Briefcase,
    title: 'Training & Recruiting',
    body: (
      <>
        We prepare members for careers in consulting, venture, product, and startups through{' '}
        <HL>case prep, frameworks, and mentorship</HL>. You'll build a portfolio of real work and
        get connected to founders and alumni across the startup community.
      </>
    ),
  },
  {
    icon: Users,
    title: 'A Community of Builders',
    body: (
      <>
        PVC is more than a club. Our members come from every major but share one thing: they'd
        rather <HL>build something</HL> than just talk about it. You'll work alongside curious,
        driven students and leave with friends who push you.
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Your Path Forward',
    body: (
      <>
        Whether you're exploring consulting for the first time or sharpening your skills, PVC gives
        you room to grow. You'll gain practical experience, sharper judgment, and the{' '}
        <HL>confidence that comes from real impact</HL>, all before you graduate.
      </>
    ),
  },
];

const WhyUs = () => (
  <section className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-6 max-w-6xl">
      <Reveal>
        <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary text-center mb-14 md:mb-16">
          Why <span className="text-accent">PVC?</span>
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
