import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { number: '10+', label: 'Startups Served' },
  { number: '1', label: 'YC-Backed Client' },
  { number: '7', label: 'Industries' },
  { number: '50+', label: 'Deliverables Shipped' },
];

// Set `logo` to an imported image path when real logos are available.
const marqueeClients: { name: string; logo: string | null; badge?: string }[] = [
  { name: 'Captain', logo: null, badge: 'YC' },
  { name: 'Astor', logo: null },
  { name: 'Zuri Technologies', logo: null },
  { name: 'Elisyan Wealth Ventures', logo: null },
  { name: 'KOVA', logo: null },
  { name: 'BeWealther', logo: null },
  { name: 'Rounds', logo: null },
  { name: 'PoliStock', logo: null },
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
    logo: null,
    yc: true,
    category: 'AI Infrastructure',
    sentence:
      'Market-entry and channel strategy — RAG landscape research, a vetted 100-company partner pipeline, and a technical benchmarks report.',
    tags: ['Market Research', 'GTM'],
  },
  {
    name: 'Astor',
    logo: null,
    category: 'AI Fintech',
    sentence:
      "Competitive and go-to-market analysis, benchmarking model accuracy against real market data using Porter's Five Forces.",
    tags: ['Competitive Analysis', 'GTM'],
  },
  {
    name: 'Zuri Technologies',
    logo: null,
    category: 'Consumer Social',
    sentence:
      'Full three-stage engagement — market sizing, ICP and competitor matrix, business-model validation, and MVP prioritization.',
    tags: ['Market Research', 'Product'],
  },
  {
    name: 'Elisyan Wealth Ventures',
    logo: null,
    category: 'Global WealthTech',
    sentence:
      'Marketing, SEO, and AI product strategy — we built the GTM and content engine, then prototyped an AI wealth-assistant MVP.',
    tags: ['GTM & SEO', 'AI Product'],
  },
];

const stages = [
  { title: 'Stage 1 — Market Intelligence', body: 'Market sizing, competitive analysis, and customer discovery.' },
  { title: 'Stage 2 — Strategy & Validation', body: 'Business model, positioning, and financial validation.' },
  { title: 'Stage 3 — Go-To-Market & Product', body: 'Actionable GTM and product plans founders can execute.' },
];

const LogoSlot: React.FC<{ name: string; logo: string | null; size?: number }> = ({ name, logo, size = 56 }) => (
  <div
    className="flex items-center justify-center rounded-full bg-background border border-primary/30 overflow-hidden flex-shrink-0"
    style={{ width: size, height: size }}
  >
    {logo ? (
      <img src={logo} alt={`${name} logo`} className="w-full h-full object-cover" />
    ) : (
      <span className="font-space-grotesk font-bold text-accent" style={{ fontSize: size * 0.4 }}>
        {name.charAt(0)}
      </span>
    )}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <style>{`
        @keyframes pvc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .pvc-marquee-track { animation: pvc-marquee 40s linear infinite; }
        .pvc-marquee:hover .pvc-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .pvc-marquee-track { animation: none; }
        }
      `}</style>

      <div className="container mx-auto px-6">
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
          {stats.map((s) => (
            <div key={s.label} className="bg-secondary border border-primary/20 rounded-lg p-6 text-center hover:border-accent/60 transition-all duration-300">
              <div className="font-space-grotesk font-bold text-4xl text-primary mb-1">{s.number}</div>
              <div className="text-muted-foreground text-sm font-inter">{s.label}</div>
            </div>
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
                      Y COMBINATOR–BACKED
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

        {/* Engagement Process */}
        <div className="mb-20">
          <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-primary text-center mb-10">Our Engagement Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <div key={s.title} className="bg-secondary border border-primary/20 rounded-lg p-6 relative mt-4">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-accent text-accent-foreground font-space-grotesk font-bold rounded-full flex items-center justify-center text-sm shadow-sm">
                  {i + 1}
                </div>
                <h4 className="font-space-grotesk font-semibold text-lg text-primary mb-2 mt-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm font-inter leading-relaxed">{s.body}</p>
              </div>
            ))}
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
              href="mailto:info@purdueventureconsulting.com"
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
