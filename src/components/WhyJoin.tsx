import React from 'react';
import { motion } from 'framer-motion';

const NAVY_BAND = 'linear-gradient(160deg, hsl(216 55% 12%) 0%, hsl(215 60% 10%) 100%)';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.3 } as const;

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const stats = [
  { value: '10+', label: 'Startups served' },
  { value: '7', label: 'Industries' },
  { value: '50+', label: 'Deliverables shipped' },
];

const blocks = [
  {
    num: '01',
    title: 'The work is real.',
    body: 'You consult for actual startups, including a Y Combinator company, not case studies. When you present, a founder is listening.',
  },
  {
    num: '02',
    title: 'The standard is the firm, not the club.',
    body: 'We prep cases, build frameworks, and mentor to the bar set by top consulting and venture firms. We train like the places we send people.',
  },
  {
    num: '03',
    title: 'The network compounds.',
    body: "Your teammates today become the founders, investors, and operators you'll build with tomorrow.",
  },
];

const fullBleed = 'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen';

const WhyJoin = () => {
  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="overflow-hidden">
      {/* 1 — Opening statement */}
      <div className={`${fullBleed} bg-background py-24`}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-accent font-inter font-semibold tracking-[0.28em] uppercase text-xs mb-8">
              Purdue Venture Consulting
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-space-grotesk font-bold text-primary text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
              Most students wait until graduation to do work that matters.
            </h2>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="font-space-grotesk font-bold text-accent text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mt-2">
              Ours don't.
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <p className="text-muted-foreground font-inter text-lg md:text-xl leading-relaxed max-w-2xl mt-10">
              Purdue Venture Consulting is a team of students taking on live engagements for
              venture-backed startups. Real clients. Real deadlines. Real decisions that ship. If
              you're looking for a club, this isn't it.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* 2 — Stats */}
      <div className={`${fullBleed} py-24`} style={{ background: NAVY_BAND }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-accent font-inter font-semibold tracking-[0.28em] uppercase text-xs mb-14 text-center">
              The work speaks for itself.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-8">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.12} className="text-center">
                <div className="font-space-grotesk font-bold text-white text-5xl md:text-7xl tracking-tight">
                  {s.value}
                </div>
                <div className="font-inter text-slate-300 text-sm mt-3 tracking-wide">{s.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* 3 — Editorial outcome */}
      <div className={`${fullBleed} bg-background py-24`}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="font-space-grotesk font-bold text-primary text-3xl md:text-5xl leading-[1.1] tracking-tight max-w-3xl">
              Before most students finish sophomore year, our consultants have already presented
              recommendations to startup founders.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-muted-foreground font-inter text-lg leading-relaxed max-w-2xl mt-8">
              You won't practice on hypothetical cases. You'll solve problems that decide where a
              company goes next.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* 4 — Three premium blocks */}
      <div className={`${fullBleed} py-24`} style={{ background: NAVY_BAND }}>
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {blocks.map((b, i) => (
            <FadeUp key={b.num} delay={i * 0.12}>
              <div className="grid grid-cols-1 md:grid-cols-[8rem_1fr] gap-4 md:gap-10 items-start">
                <div className="font-space-grotesk font-bold text-5xl md:text-6xl text-accent/25 leading-none">
                  {b.num}
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold text-white text-2xl md:text-3xl tracking-tight mb-4">
                    {b.title}
                  </h3>
                  <p className="font-inter text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                    {b.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* 5 — Pull quote */}
      <div className={`${fullBleed} bg-background py-24`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <blockquote className="font-space-grotesk italic font-medium text-primary text-3xl md:text-5xl leading-[1.15] tracking-tight">
              "We didn't start a club. We started a firm that happens to be run by students."
            </blockquote>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-inter text-muted-foreground text-sm mt-8">The founding team</p>
          </FadeUp>
        </div>
      </div>

      {/* 6 — CTA */}
      <div className={`${fullBleed} py-24`} style={{ background: NAVY_BAND }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-space-grotesk font-bold text-white text-4xl md:text-6xl tracking-tight leading-tight">
              Ready to do real work?
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="font-inter text-slate-300 text-base md:text-lg mt-5">
              Applications open each fall.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <button
              onClick={scrollToApplication}
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground font-inter font-semibold px-8 py-4 text-base transition-all duration-300 hover:bg-accent/90"
            >
              Start your application
            </button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
