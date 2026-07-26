import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '@/components/RevealText';
import Frame from '@/components/editorial/Frame';
import Section from '@/components/editorial/Section';
import {
  HEAD_SIZE,
  HERO_SIZE,
  ROW_TITLE,
  METRIC_SIZE,
  EASE,
  fadeUp,
} from '@/components/editorial/tokens';

/* -------------------- HERO -------------------- */
const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <Section bordered={false} className="min-h-[82vh] flex flex-col justify-center py-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="flex items-center gap-3"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
        <span className="font-inter text-[11px] tracking-[0.24em] uppercase text-muted-foreground">
          Student Venture Consulting · Purdue
        </span>
      </motion.div>

      <motion.div ref={ref} style={{ y }} className="mt-8 max-w-[22ch] md:max-w-[26ch]">
        <div style={{ fontSize: HERO_SIZE, lineHeight: 1.02, letterSpacing: '-0.025em' }}>
          <RevealText
            as="h1"
            text="Where strategy meets opportunity."
            accentWords={['opportunity']}
            className="font-space-grotesk font-bold text-foreground"
            delay={0.15}
          />
        </div>
      </motion.div>

      <motion.p
        {...fadeUp(0.55)}
        className="mt-8 max-w-[52ch] font-inter text-[1.05rem] md:text-[1.15rem] text-muted-foreground leading-relaxed"
      >
        We connect Purdue's most driven students with rising startups and venture firms,
        and deliver the strategy work that helps them scale.
      </motion.p>

      <motion.div {...fadeUp(0.75)} className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/work"
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-inter text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Explore our work
        </Link>
        <Link
          to="/apply"
          className="inline-flex items-center rounded-full border border-foreground/25 text-foreground px-6 py-3 font-inter text-sm font-medium hover:border-foreground hover:bg-foreground/[0.03] transition-colors"
        >
          Apply to join
        </Link>
      </motion.div>
    </Section>
  );
};

/* -------------------- PROOF STRIP -------------------- */
const clients = ['Astor', 'Zuri', 'Elisyan', 'KOVA', 'Rounds'];

const ProofStrip = () => (
  <Section className="py-8">
    <motion.div
      {...fadeUp(0)}
      className="grid grid-cols-1 md:grid-cols-[220px_1fr] items-center gap-6 md:gap-10 border-y border-border py-6"
    >
      <div className="font-inter text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        Trusted by 10+ startups
      </div>
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 font-space-grotesk text-foreground/85"
           style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
        <span className="flex flex-col leading-tight">
          <span>Captain</span>
          <span className="font-inter text-[10px] tracking-[0.24em] uppercase text-accent mt-1">
            Y Combinator
          </span>
        </span>
        {clients.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </motion.div>
  </Section>
);

/* -------------------- STATEMENT -------------------- */
const Statement = () => (
  <Section className="py-24 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-start">
      <motion.h2
        {...fadeUp(0)}
        className="font-space-grotesk font-semibold text-foreground"
        style={{ fontSize: HEAD_SIZE, lineHeight: 1.1, letterSpacing: '-0.02em' }}
      >
        Real strategy work for the startups building{' '}
        <span className="text-accent">what's next.</span>
      </motion.h2>
      <motion.p
        {...fadeUp(0.15)}
        className="font-inter text-[1.05rem] md:text-[1.15rem] text-muted-foreground leading-relaxed"
      >
        Market intelligence, competitive strategy, go to market, and product. The same
        problems top firms solve, delivered by teams that treat your pipeline like their own.
      </motion.p>
    </div>
  </Section>
);

/* -------------------- WHAT WE DO -------------------- */
const rows = [
  { n: '01', title: 'Strategic Consulting', desc: 'Market, competitive, and go to market strategy for real startups.' },
  { n: '02', title: 'Case & Career Prep', desc: 'Interview training and mentorship for top consulting and venture firms.' },
  { n: '03', title: 'Exclusive Network', desc: 'Founders, VCs, alumni, and mentors across the startup ecosystem.' },
];

const WhatWeDo = () => (
  <Section className="py-24 md:py-32">
    <motion.div
      {...fadeUp(0)}
      className="font-inter text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-12"
    >
      What we do
    </motion.div>
    <div className="border-t border-border">
      {rows.map((r, i) => (
        <motion.div
          key={r.n}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
          className="grid grid-cols-12 gap-6 items-baseline py-8 md:py-10 border-b border-border"
        >
          <div
            className="col-span-2 font-space-grotesk text-accent font-medium"
            style={{ fontSize: '1rem', letterSpacing: '0.02em' }}
          >
            {r.n}
          </div>
          <h3
            className="col-span-10 md:col-span-6 font-space-grotesk font-semibold text-foreground"
            style={{ fontSize: ROW_TITLE, lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            {r.title}
          </h3>
          <p className="col-span-12 md:col-span-4 font-inter text-[1rem] text-muted-foreground leading-relaxed">
            {r.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* -------------------- METRICS BAND -------------------- */
const metrics = [
  { n: '10+', label: 'Startups Served' },
  { n: '1', label: 'YC-Backed Client' },
  { n: '7', label: 'Industries' },
  { n: '50+', label: 'Deliverables Shipped' },
];

const Metrics = () => (
  <Section className="py-20 md:py-24">
    <motion.div
      {...fadeUp(0)}
      className="grid grid-cols-2 md:grid-cols-4 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border"
    >
      {metrics.map((m) => (
        <div key={m.label} className="px-6 py-10 md:py-12">
          <div
            className="font-space-grotesk font-bold text-foreground"
            style={{ fontSize: METRIC_SIZE, lineHeight: 1, letterSpacing: '-0.03em' }}
          >
            {m.n}
          </div>
          <div className="mt-3 font-inter text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            {m.label}
          </div>
        </div>
      ))}
    </motion.div>
  </Section>
);

/* -------------------- CLOSING -------------------- */
const Closing = () => (
  <Section className="py-24 md:py-32">
    <div style={{ fontSize: HEAD_SIZE, lineHeight: 1.05, letterSpacing: '-0.025em' }}>
      <RevealText
        as="h2"
        text="Let's build what's next."
        accentWords={["next."]}
        className="font-space-grotesk font-bold text-foreground"
      />
    </div>
    <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap gap-3">
      <Link
        to="/apply"
        className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-inter text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Apply to join
      </Link>
      <a
        href="mailto:info@purdueventureconsulting.com"
        className="inline-flex items-center rounded-full border border-foreground/25 text-foreground px-6 py-3 font-inter text-sm font-medium hover:border-foreground hover:bg-foreground/[0.03] transition-colors"
      >
        Work with us
      </a>
    </motion.div>
  </Section>
);

/* -------------------- PAGE -------------------- */
const Home = () => {
  return (
    <div className="relative">
      <Frame>
        <Hero />
        <ProofStrip />
        <Statement />
        <WhatWeDo />
        <Metrics />
        <Closing />
      </Frame>
    </div>
  );
};

export default Home;
