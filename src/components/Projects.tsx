import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import captainLogo from '@/assets/clients/captain.png.asset.json';
import astorLogo from '@/assets/clients/astor.png.asset.json';
import zuriLogo from '@/assets/clients/zuri.png.asset.json';
import elisyanLogo from '@/assets/clients/elisyan.png.asset.json';
import kovaLogo from '@/assets/clients/kova.png.asset.json';
import polistockLogo from '@/assets/clients/polistock.png.asset.json';
import roundsLogo from '@/assets/clients/rounds.png.asset.json';
import bewealtherLogo from '@/assets/clients/bewealther.png.asset.json';


const stats = [
  { number: '10+', label: 'Startups Served' },
  { number: '1', label: 'YC-Backed Client' },
  { number: '7', label: 'Industries' },
  { number: '50+', label: 'Deliverables Shipped' },
];

// Set `logo` to an imported image path when real logos are available.
const marqueeClients: { name: string; logo: string | null; badge?: string }[] = [
  { name: 'Captain', logo: captainLogo.url, badge: 'YC' },
  { name: 'Astor', logo: astorLogo.url },
  { name: 'Zuri Technologies', logo: zuriLogo.url },
  { name: 'Elisyan Wealth Ventures', logo: elisyanLogo.url },
  { name: 'KOVA', logo: kovaLogo.url },
  { name: 'BeWealther', logo: bewealtherLogo.url },
  { name: 'Rounds', logo: roundsLogo.url },
  { name: 'PoliStock', logo: polistockLogo.url },
];

const quadrants: {
  name: string;
  logo: string | null;
  category: string;
  sentence: string;
  tags: string[];
  yc?: boolean;
}[] = [
  {
    name: 'Captain',
    logo: captainLogo.url,
    yc: true,
    category: 'AI Infrastructure',
    sentence:
      'Market-entry and channel strategy, including RAG landscape research, a vetted 100-company partner pipeline, and a technical benchmarks report.',
    tags: ['Market Research', 'GTM'],
  },
  {
    name: 'Astor',
    logo: astorLogo.url,
    category: 'AI Fintech',
    sentence:
      "Competitive and go-to-market analysis, benchmarking model accuracy against real market data using Porter's Five Forces.",
    tags: ['Competitive Analysis', 'GTM'],
  },
  {
    name: 'Zuri Technologies',
    logo: zuriLogo.url,
    category: 'Consumer Social',
    sentence:
      'Full three-stage engagement covering market sizing, ICP and competitor matrix, business-model validation, and MVP prioritization.',
    tags: ['Market Research', 'Product'],
  },
  {
    name: 'Elisyan Wealth Ventures',
    logo: elisyanLogo.url,
    category: 'Global WealthTech',
    sentence:
      'Marketing, SEO, and AI product strategy. We built the GTM and content engine, then prototyped an AI wealth-assistant MVP.',
    tags: ['GTM & SEO', 'AI Product'],
  },
];

const structureNodes = [
  { title: 'Consultants', body: 'A team of 4 to 6 trained consultants runs the research and builds the deliverables.' },
  { title: 'Project Lead', body: 'An experienced lead manages the engagement and is your main point of contact.' },
  { title: 'Your Strategy', body: 'One cohesive strategy, delivered as a set of connected deliverables.' },
];

const milestones = [
  { phase: 'Pre-semester', title: 'Scoping', body: 'We align on the problem, goals, and success metrics before the semester begins.' },
  { phase: 'Start', title: 'Kickoff', body: 'Project kickoff and onboarding, with regular check-ins throughout the semester.' },
  { phase: 'Mid-semester', title: 'Midpoint Review', body: 'A midpoint presentation of progress, findings, and direction.' },
  { phase: 'End of semester', title: 'Final Presentation', body: 'We present the full strategy and deliverables to your team.' },
  { phase: 'After', title: 'Handoff', body: 'Implementation-ready deliverables plus a feedback loop.' },
];

// Zoom applied to logo images to crop out screenshot padding.
// Tune this single value to make logos fill their square slots.
const LOGO_ZOOM = 1.2;

const LogoSlot: React.FC<{ name: string; logo: string | null; size?: number }> = ({ name, logo, size = 64 }) => (
  <div
    className="flex items-center justify-center rounded-lg bg-white border border-primary/30 overflow-hidden flex-shrink-0"
    style={{ width: size, height: size }}
  >
    {logo ? (
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
    ) : (
      <span className="font-space-grotesk font-bold text-accent" style={{ fontSize: size * 0.4 }}>
        {name.charAt(0)}
      </span>
    )}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-20 bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[640px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(214 46% 95%) 0%, hsl(214 41% 97%) 55%, hsl(var(--background)) 100%)' }} />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.55 }} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMin slice">
          <g stroke="hsl(216 60% 32%)" strokeWidth="1" fill="none" strokeOpacity="0.5">
            <line x1="720" y1="130" x2="-400" y2="640" />
            <line x1="720" y1="130" x2="-150" y2="640" />
            <line x1="720" y1="130" x2="100" y2="640" />
            <line x1="720" y1="130" x2="320" y2="640" />
            <line x1="720" y1="130" x2="500" y2="640" />
            <line x1="720" y1="130" x2="640" y2="640" />
            <line x1="720" y1="130" x2="720" y2="640" />
            <line x1="720" y1="130" x2="800" y2="640" />
            <line x1="720" y1="130" x2="940" y2="640" />
            <line x1="720" y1="130" x2="1120" y2="640" />
            <line x1="720" y1="130" x2="1340" y2="640" />
            <line x1="720" y1="130" x2="1590" y2="640" />
            <line x1="720" y1="130" x2="1840" y2="640" />
            <line x1="0" y1="150" x2="1440" y2="150" />
            <line x1="0" y1="170" x2="1440" y2="170" />
            <line x1="0" y1="196" x2="1440" y2="196" />
            <line x1="0" y1="232" x2="1440" y2="232" />
            <line x1="0" y1="282" x2="1440" y2="282" />
            <line x1="0" y1="352" x2="1440" y2="352" />
            <line x1="0" y1="448" x2="1440" y2="448" />
            <line x1="0" y1="575" x2="1440" y2="575" />
          </g>
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: 'linear-gradient(180deg, transparent, hsl(var(--background)))' }} />
      </div>

      <style>{`
        @keyframes pvc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .pvc-marquee-track { animation: pvc-marquee 40s linear infinite; }
        .pvc-marquee:hover .pvc-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .pvc-marquee-track { animation: none; }
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-accent font-inter font-semibold tracking-[0.3em] text-sm mb-4">OUR WORK</div>
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Real strategy. Real startups. Real results.
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-3xl mx-auto font-inter">
            We work with venture-backed founders across AI, fintech, and consumer.
          </p>
        </div>

        {/* Stat bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="bg-secondary border border-primary/20 rounded-lg p-6 text-center hover:border-accent/60 transition-all duration-300 h-full">
                <div className="font-space-grotesk font-bold text-4xl text-primary mb-1">{s.number}</div>
                <div className="text-muted-foreground text-sm font-inter">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>


        {/* Featured quadrants */}
        <div className="mb-20 max-w-6xl mx-auto border border-primary/30 rounded-2xl overflow-hidden bg-secondary/40">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {quadrants.map((q, i) => {
              const isRight = i % 2 === 1;
              const isBottom = i >= 2;
              return (
                <div
                  key={q.name}
                  className={[
                    'p-8 flex flex-col items-center text-center',
                    !isRight ? 'md:border-r md:border-primary/30' : '',
                    !isBottom ? 'border-b border-primary/30' : '',
                    isBottom && i === 2 ? 'md:border-b-0' : '',
                  ].join(' ')}
                >
                  <LogoSlot name={q.name} logo={q.logo} />
                  {q.yc && (
                    <div className="mt-3 text-[0.6rem] font-inter font-bold tracking-widest text-accent border border-accent/60 rounded-full px-3 py-1">
                      Y COMBINATOR BACKED
                    </div>
                  )}
                  <h3 className="font-space-grotesk font-bold text-2xl text-primary mt-4">{q.name}</h3>
                  <div className="text-accent font-inter text-sm mt-1 mb-3">{q.category}</div>
                  <p className="text-foreground font-inter text-sm leading-relaxed max-w-sm">{q.sentence}</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {q.tags.map((t) => (
                      <span key={t} className="text-xs font-inter text-muted-foreground border border-primary/30 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revolving logo marquee */}
        <div className="pvc-marquee overflow-hidden mb-20 max-w-6xl mx-auto border-y border-primary/20 py-6">
          <div className="pvc-marquee-track flex gap-10 w-max">
            {[...marqueeClients, ...marqueeClients].map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex items-center gap-3 flex-shrink-0 px-2">
                <LogoSlot name={c.name} logo={c.logo} size={44} />
                <span className="font-space-grotesk font-semibold text-foreground whitespace-nowrap">{c.name}</span>
                {c.badge && (
                  <span className="text-[0.55rem] font-inter font-bold tracking-widest text-accent border border-accent/60 rounded-full px-2 py-0.5">
                    {c.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Process — two horizontal diagrams */}
        <div className="mb-20">
          <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-primary text-center mb-12">
            How We Approach a Project
          </h3>

          {/* Diagram 1 — Project Structure */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-xs font-inter font-semibold tracking-[0.25em] text-accent uppercase text-center mb-8">
              Project Structure
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[720px] px-4">
                {/* Faculty node + arrow down */}
                <Reveal>
                  <div className="flex flex-col items-center mb-2">
                    <div className="border border-accent/60 rounded-full px-5 py-2 bg-background">
                      <div className="font-space-grotesk font-semibold text-primary text-sm">Faculty & Advisory</div>
                      <div className="text-muted-foreground text-xs font-inter">Senior guidance throughout</div>
                    </div>
                    <div className="w-px h-8 bg-accent/60" />
                    <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-[6px] border-t-accent/60 -mt-1" />
                  </div>
                </Reveal>

                {/* Three horizontal nodes */}
                <div className="flex items-stretch justify-between gap-2">
                  {structureNodes.map((n, i) => (
                    <React.Fragment key={n.title}>
                      <Reveal delay={i * 120} className="flex-1">
                        <div className="border border-primary/30 rounded-lg p-5 bg-secondary/40 h-full text-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-space-grotesk font-bold text-xs flex items-center justify-center mx-auto mb-3">
                            {i + 1}
                          </div>
                          <div className="font-space-grotesk font-bold text-primary mb-1">{n.title}</div>
                          <p className="text-muted-foreground text-xs font-inter leading-relaxed">{n.body}</p>
                        </div>
                      </Reveal>
                      {i < structureNodes.length - 1 && (
                        <div className="flex items-center flex-shrink-0" aria-hidden="true">
                          <div className="w-10 h-px bg-primary/40" />
                          <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-[6px] border-l-primary/40" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Diagram 2 — Engagement Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-inter font-semibold tracking-[0.25em] text-accent uppercase text-center mb-8">
              Engagement Timeline
            </div>

            <div className="overflow-x-auto">
              <div className="relative min-w-[800px] px-4">
                {/* Connector line runs through the gold dot centers */}
                <div className="absolute left-4 right-4 top-[35px] h-px bg-primary/30" />

                <div className="grid grid-cols-5 gap-4">
                  {milestones.map((m, i) => (
                    <Reveal key={m.title} delay={i * 100}>
                      <div className="flex flex-col items-center text-center">
                        <div className="text-[0.65rem] font-inter font-semibold tracking-widest text-muted-foreground uppercase mb-3 h-4 whitespace-nowrap overflow-hidden">
                          {m.phase}
                        </div>
                        <div className="w-4 h-4 rounded-full bg-accent border-2 border-background ring-1 ring-accent/60 z-10 mb-3" />
                        <div className="font-space-grotesk font-bold text-primary text-sm">{m.title}</div>
                        <p className="text-muted-foreground text-xs font-inter leading-relaxed mt-1 max-w-[10rem]">{m.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-gradient-to-br from-secondary to-background border border-accent/40 rounded-lg p-10 text-center max-w-4xl mx-auto">
          <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-primary mb-3">
            Have a startup that needs a strategy team?
          </h3>
          <p className="text-foreground font-inter mb-6 max-w-2xl mx-auto">
            We take on a limited number of engagements each semester.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:vmesropy@purdue.edu"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold px-6 py-3 rounded-md transition-all duration-300"
            >
              Work With Us
            </a>
            <Link
              to="/apply"
              className="border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-inter font-semibold px-6 py-3 rounded-md transition-all duration-300"
            >
              Want to do this work? Apply
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
