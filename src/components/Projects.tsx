import React from 'react';

const stats = [
  { number: '10+', label: 'Startups Served' },
  { number: '1', label: 'YC-Backed Client' },
  { number: '7', label: 'Industries' },
  { number: '50+', label: 'Deliverables Shipped' },
];

const clients = [
  { name: 'Captain', badge: 'Y COMBINATOR–BACKED' },
  { name: 'Gaus' },
  { name: 'Zuri Technologies' },
  { name: 'Elisyan Wealth Ventures' },
  { name: 'KOVA' },
  { name: 'BeWealther' },
  { name: 'Rounds' },
];

const caseStudies = [
  {
    name: 'Captain',
    yc: true,
    category: 'AI Retrieval / RAG Infrastructure',
    body: "Captain is a Y Combinator–backed startup building AI retrieval that truly understands company data — going beyond standard RAG. PVC ran a market-entry and channel-partnership engagement: we researched the RAG landscape (Vector RAG, GraphRAG, Late Chunking), built and vetted a pipeline of 100 target companies, and drove outreach to surface partnership and go-to-market opportunities, synthesized into a benchmarks technical report.",
    tags: ['Market Research', 'Channel Strategy', 'Technical Benchmarking', 'GTM Outreach'],
    caption: 'RAG landscape analysis · 100-company outreach pipeline · benchmark comparison',
  },
  {
    name: 'Gaus',
    category: 'AI Financial Intelligence · Fintech',
    body: "Gaus is an AI investment analyst giving retail investors institutional-grade research. PVC delivered a full competitive and go-to-market analysis — benchmarking Gaus's model outputs against real market performance across major equities, mapping the competitive landscape with Porter's Five Forces, and building a marketing and GTM plan to sharpen differentiation.",
    tags: ['Competitive Analysis', 'Financial Benchmarking', 'GTM Strategy', 'Kano Model'],
    caption: "Porter's Five Forces · competitor positioning matrix · financial accuracy benchmark",
  },
  {
    name: 'Zuri Technologies',
    category: 'Consumer Social · EdTech',
    body: "Zuri turns public speaking into a daily, gamified habit. PVC ran a full three-stage engagement — market intelligence, business-model validation, and product feedback. We sized the market, built the competitor matrix and ICP, validated the model with a Lean Canvas and revenue model, and delivered MVP feature prioritization with UX recommendations.",
    tags: ['Market Research', 'Business Model Validation', 'Product & UX', 'SWOT / PESTEL'],
    caption: 'TAM/SAM/SOM market funnel · competitor matrix · ICP persona · Lean Canvas',
  },
  {
    name: 'Elisyan Wealth Ventures',
    category: 'Global WealthTech',
    body: "Elisyan Wealth Ventures is a privacy-first global wealth-management platform for cross-border assets. PVC partnered with the founder and CTO on two fronts: we built a full brand and go-to-market strategy, an SEO program, and a content engine — then designed and prototyped an AI wealth-assistant MVP alongside a technical implementation roadmap.",
    tags: ['GTM & Marketing', 'SEO Strategy', 'AI Product / MVP', 'Technical Roadmap'],
    caption: 'ICP segmentation · content theme map · SEO pillar plan · AI assistant MVP mockups',
  },
];

const additional = [
  {
    name: 'KOVA',
    tags: ['Marketplace', 'GTM'],
    body: 'A peer-to-peer ridesharing marketplace built by and for students. PVC delivered a scale strategy covering driver supply, rider demand, trust & safety, and a go-to-market plan timed to peak-travel moments.',
  },
  {
    name: 'BeWealther',
    tags: ['FinTech', 'Market Research'],
    body: 'A Duolingo-style financial-education platform for young users. PVC delivered market sizing, competitive positioning against Acorns and Robinhood, and a Gen-Z user acquisition and retention strategy.',
  },
  {
    name: 'Rounds',
    tags: ['HR Tech', 'Outreach'],
    body: 'An AI interview platform making hiring faster and skills-based. PVC built the ICP and market analysis, then ran a student outreach and social media growth campaign to drive early adoption.',
  },
];

const stages = [
  { title: 'Stage 1 — Market Intelligence', body: 'Market sizing, competitive analysis, and customer discovery to frame the real problem.' },
  { title: 'Stage 2 — Strategy & Validation', body: 'Business model, positioning, and financial validation — pressure-testing the path forward.' },
  { title: 'Stage 3 — Go-To-Market & Product', body: 'Actionable GTM, product, and execution plans the founder can run with immediately.' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-accent font-inter font-semibold tracking-[0.3em] text-sm mb-4">OUR WORK</div>
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Real strategy. Real startups. <span className="text-accent">Real results.</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-3xl mx-auto font-inter">
            We've partnered with founders across AI, fintech, and consumer — including a Y Combinator–backed company — to solve the problems that decide whether a startup scales.
          </p>
        </div>

        {/* Stat bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="bg-secondary border border-primary/20 rounded-lg p-6 text-center hover:border-accent/60 transition-all duration-300">
              <div className="font-space-grotesk font-bold text-4xl text-accent mb-1">{s.number}</div>
              <div className="text-muted-foreground text-sm font-inter">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Logo wall */}
        <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-4xl mx-auto">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-secondary border border-primary/30 rounded-md px-5 py-3 flex flex-col items-center hover:border-accent hover:transform hover:scale-105 transition-all duration-300"
            >
              <span className="font-space-grotesk font-semibold text-foreground">{c.name}</span>
              {c.badge && (
                <span className="text-[0.6rem] font-inter font-bold tracking-widest text-accent mt-1">{c.badge}</span>
              )}
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-16 mb-20">
          {caseStudies.map((cs, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={cs.name}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Visual */}
                <div className="bg-secondary border border-primary/20 rounded-lg p-8 min-h-[240px] flex items-center justify-center text-center">
                  <div>
                    <div className="w-12 h-12 mx-auto mb-4 border-2 border-accent/40 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-accent rounded-sm rotate-45"></div>
                    </div>
                    <p className="text-muted-foreground text-sm font-inter italic">{cs.caption}</p>
                  </div>
                </div>
                {/* Text */}
                <div>
                  {cs.yc && (
                    <div className="inline-block mb-3 text-[0.65rem] font-inter font-bold tracking-widest text-accent border border-accent/60 rounded-full px-3 py-1">
                      Y COMBINATOR–BACKED
                    </div>
                  )}
                  <h3 className="font-space-grotesk font-bold text-3xl text-primary mb-2">{cs.name}</h3>
                  <div className="text-accent font-inter text-sm mb-4">{cs.category}</div>
                  <p className="text-foreground font-inter leading-relaxed mb-5">{cs.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span key={t} className="text-xs font-inter text-muted-foreground border border-primary/30 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Projects */}
        <div className="mb-20">
          <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-primary text-center mb-10">Additional Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additional.map((a) => (
              <div key={a.name} className="bg-secondary border border-primary/20 rounded-lg p-6 hover:border-accent/60 hover:transform hover:scale-[1.02] transition-all duration-300">
                <h4 className="font-space-grotesk font-semibold text-xl text-primary mb-3">{a.name}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {a.tags.map((t) => (
                    <span key={t} className="text-xs font-inter text-accent border border-accent/40 rounded-full px-2.5 py-0.5">{t}</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm font-inter leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Process */}
        <div className="mb-20">
          <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-primary text-center mb-10">Our Engagement Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((s, i) => (
              <div key={s.title} className="bg-secondary border border-primary/20 rounded-lg p-6 relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-accent text-background font-space-grotesk font-bold rounded-full flex items-center justify-center text-sm">
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
            We take on a limited number of engagements each semester. Founders and VCs — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:pecc@purdue.edu"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-semibold px-6 py-3 rounded-md transition-all duration-300"
            >
              Work With Us
            </a>
            <a
              href="#application"
              className="border border-accent text-accent hover:bg-accent hover:text-background font-inter font-semibold px-6 py-3 rounded-md transition-all duration-300"
            >
              Want to do this work? Apply
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
