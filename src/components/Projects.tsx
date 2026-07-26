import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RevealText from './RevealText';
import Frame from './editorial/Frame';
import Section from './editorial/Section';
import {
  HEAD_SIZE,
  ROW_TITLE,
  METRIC_SIZE,
  EASE,
  fadeUp,
} from './editorial/tokens';
import captainLogo from '@/assets/clients/captain.png.asset.json';
import astorLogo from '@/assets/clients/astor.png.asset.json';
import zuriLogo from '@/assets/clients/zuri.png.asset.json';
import elisyanLogo from '@/assets/clients/elisyan.png.asset.json';
import kovaLogo from '@/assets/clients/kova.png.asset.json';
import polistockLogo from '@/assets/clients/polistock.png.asset.json';
import roundsLogo from '@/assets/clients/rounds.png.asset.json';
import bewealtherLogo from '@/assets/clients/bewealther.png.asset.json';

/* -------------------- data -------------------- */
const metrics = [
  { n: '10+', label: 'Startups Served' },
  { n: '1', label: 'YC-Backed Client' },
  { n: '7', label: 'Industries' },
  { n: '50+', label: 'Deliverables Shipped' },
];

const projects: {
  name: string;
  logo: string;
  category: string;
  description: string;
  tags: string[];
  yc?: boolean;
}[] = [
  {
    name: 'Captain',
    logo: captainLogo.url,
    yc: true,
    category: 'AI Infrastructure',
    description:
      'Market-entry and channel strategy: RAG landscape research, a vetted 100-company partner pipeline, and a technical benchmarks report.',
    tags: ['Market Research', 'GTM'],
  },
  {
    name: 'Astor',
    logo: astorLogo.url,
    category: 'AI Fintech',
    description:
      "Competitive and go-to-market analysis, benchmarking model accuracy against real market data using Porter's Five Forces.",
    tags: ['Competitive Analysis', 'GTM'],
  },
  {
    name: 'Zuri Technologies',
    logo: zuriLogo.url,
    category: 'Consumer Social',
    description:
      'Full three-stage engagement covering market sizing, ICP and competitor matrix, business-model validation, and MVP prioritization.',
    tags: ['Market Research', 'Product'],
  },
  {
    name: 'Elisyan Wealth Ventures',
    logo: elisyanLogo.url,
    category: 'Global WealthTech',
    description:
      'Marketing, SEO, and AI product strategy. We built the GTM and content engine, then prototyped an AI wealth-assistant MVP.',
    tags: ['GTM & SEO', 'AI Product'],
  },
];

const marqueeClients = [
  { name: 'Captain', logo: captainLogo.url },
  { name: 'Astor', logo: astorLogo.url },
  { name: 'Zuri', logo: zuriLogo.url },
  { name: 'Elisyan', logo: elisyanLogo.url },
  { name: 'KOVA', logo: kovaLogo.url },
  { name: 'BeWealther', logo: bewealtherLogo.url },
  { name: 'Rounds', logo: roundsLogo.url },
  { name: 'PoliStock', logo: polistockLogo.url },
];

const stages = [
  { part: 'Part 1', title: 'Discovery & Scoping', body: 'We align with the founder on the core problem, goals, and success metrics before any work begins.' },
  { part: 'Part 2', title: 'Market Intelligence', body: 'Market sizing, competitive analysis, and customer discovery to ground the strategy in evidence.' },
  { part: 'Part 3', title: 'Strategy & Validation', body: 'Business model, positioning, and financial validation, pressure-testing the path forward.' },
  { part: 'Part 4', title: 'Go-To-Market & Product', body: "Actionable GTM, product, and growth recommendations tailored to the startup's stage." },
  { part: 'Part 5', title: 'Delivery & Handoff', body: 'A final presentation and implementation-ready deliverables the founder can execute immediately.' },
];

/* Zoom applied to logo images to crop out screenshot padding. */
const LOGO_ZOOM = 1.2;

const LogoMark: React.FC<{ name: string; logo: string; size?: number }> = ({
  name,
  logo,
  size = 48,
}) => (
  <div
    className="flex items-center justify-center overflow-hidden bg-white border border-border flex-shrink-0"
    style={{ width: size, height: size, borderRadius: 6 }}
  >
    <img
      src={logo}
      alt={`${name} logo`}
      className="w-full h-full"
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
        transform: `scale(${LOGO_ZOOM})`,
        transformOrigin: 'center',
      }}
    />
  </div>
);

/* -------------------- sections -------------------- */

const Header = () => (
  <Section bordered={false} className="pt-24 md:pt-32 pb-16 md:pb-20">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="font-inter text-[11px] tracking-[0.24em] uppercase text-accent mb-6"
    >
      Our work
    </motion.div>

    <div style={{ fontSize: HEAD_SIZE, lineHeight: 1.05, letterSpacing: '-0.025em' }} className="max-w-[24ch]">
      <RevealText
        as="h1"
        text="Real strategy. Real startups. Real results."
        accentWords={['results.']}
        className="font-space-grotesk font-bold text-foreground"
      />
    </div>

    <motion.p
      {...fadeUp(0.35)}
      className="mt-8 max-w-[54ch] font-inter text-[1.05rem] md:text-[1.15rem] text-muted-foreground leading-relaxed"
    >
      We work with venture-backed founders across AI, fintech, and consumer.
    </motion.p>
  </Section>
);

const Metrics = () => (
  <Section className="py-16 md:py-20">
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

const Featured = () => (
  <Section className="py-24 md:py-32">
    <motion.div
      {...fadeUp(0)}
      className="font-inter text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-12"
    >
      Featured projects
    </motion.div>
    <div className="border-t border-border">
      {projects.map((p, i) => (
        <motion.article
          key={p.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
          className="grid grid-cols-12 gap-6 items-start py-10 md:py-12 border-b border-border"
        >
          <div className="col-span-12 md:col-span-2">
            <LogoMark name={p.name} logo={p.logo} />
            {p.yc && (
              <div className="mt-3 font-inter text-[10px] tracking-[0.22em] uppercase text-accent">
                Y Combinator
              </div>
            )}
          </div>

          <div className="col-span-12 md:col-span-6">
            <h3
              className="font-space-grotesk font-semibold text-foreground"
              style={{ fontSize: ROW_TITLE, lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              {p.name}
            </h3>
            <div className="mt-2 font-inter text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              {p.category}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="font-inter text-[1rem] text-muted-foreground leading-relaxed">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-inter text-[11px] tracking-[0.18em] uppercase text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);

const Marquee = () => (
  <Section className="py-16 md:py-20">
    <style>{`
      @keyframes pvc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .pvc-marquee-track { animation: pvc-marquee 45s linear infinite; }
      .pvc-marquee:hover .pvc-marquee-track { animation-play-state: paused; }
      @media (prefers-reduced-motion: reduce) { .pvc-marquee-track { animation: none; } }
    `}</style>
    <motion.div {...fadeUp(0)} className="border-y border-border py-8">
      <div className="font-inter text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-6">
        Selected clients
      </div>
      <div className="pvc-marquee overflow-hidden">
        <div className="pvc-marquee-track flex items-center gap-14 w-max">
          {[...marqueeClients, ...marqueeClients].map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex items-center gap-3 flex-shrink-0">
              <LogoMark name={c.name} logo={c.logo} size={36} />
              <span className="font-space-grotesk text-foreground/80 whitespace-nowrap">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </Section>
);

const Approach = () => (
  <Section className="py-24 md:py-32">
    <motion.div
      {...fadeUp(0)}
      className="font-inter text-[11px] tracking-[0.24em] uppercase text-muted-foreground mb-8"
    >
      Our approach
    </motion.div>
    <motion.h2
      {...fadeUp(0.1)}
      className="font-space-grotesk font-semibold text-foreground max-w-[22ch] mb-14"
      style={{ fontSize: HEAD_SIZE, lineHeight: 1.1, letterSpacing: '-0.02em' }}
    >
      How we approach a project.
    </motion.h2>

    <div className="relative max-w-3xl">
      {/* connecting vertical line */}
      <div
        aria-hidden="true"
        className="absolute left-[13px] top-2 bottom-2 w-px bg-border"
      />
      <ol className="flex flex-col gap-12">
        {stages.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
            className="relative grid grid-cols-[28px_1fr] gap-6 items-start"
          >
            <div className="relative flex justify-center pt-1">
              <span className="w-[10px] h-[10px] rounded-full bg-accent ring-4 ring-background z-10" />
            </div>
            <div>
              <div className="font-inter text-[11px] tracking-[0.22em] uppercase text-accent mb-1">
                {s.part}
              </div>
              <h3
                className="font-space-grotesk font-semibold text-foreground"
                style={{ fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)', letterSpacing: '-0.01em' }}
              >
                {s.title}
              </h3>
              <p className="mt-2 font-inter text-[1rem] text-muted-foreground leading-relaxed max-w-[52ch]">
                {s.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </Section>
);

const Closing = () => (
  <Section className="py-24 md:py-32">
    <div style={{ fontSize: HEAD_SIZE, lineHeight: 1.05, letterSpacing: '-0.025em' }} className="max-w-[26ch]">
      <RevealText
        as="h2"
        text="Have a startup that needs a strategy team?"
        accentWords={['strategy', 'team?']}
        className="font-space-grotesk font-bold text-foreground"
      />
    </div>
    <motion.p
      {...fadeUp(0.2)}
      className="mt-6 max-w-[52ch] font-inter text-[1.05rem] text-muted-foreground leading-relaxed"
    >
      We take on a limited number of engagements each semester.
    </motion.p>
    <motion.div {...fadeUp(0.35)} className="mt-10 flex flex-wrap gap-3">
      <a
        href="mailto:info@purdueventureconsulting.com"
        className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-inter text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Work with us
      </a>
      <Link
        to="/apply"
        className="inline-flex items-center rounded-full border border-foreground/25 text-foreground px-6 py-3 font-inter text-sm font-medium hover:border-foreground hover:bg-foreground/[0.03] transition-colors"
      >
        Apply to join
      </Link>
    </motion.div>
  </Section>
);

/* -------------------- page -------------------- */
const Projects: React.FC = () => (
  <div id="projects" className="relative">
    <Frame>
      <Header />
      <Metrics />
      <Featured />
      <Marquee />
      <Approach />
      <Closing />
    </Frame>
  </div>
);

export default Projects;
