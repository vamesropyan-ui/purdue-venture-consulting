
import React from 'react';
import FoundersImage from '@/components/FoundersImage';

const SkylineTexture = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 320"
    preserveAspectRatio="xMidYMax slice"
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ opacity: 0.14 }}
  >
    <g fill="none" stroke="hsl(var(--accent))" strokeWidth="2">
      {[
        { x: 20, y: 150, w: 120, h: 170 },
        { x: 160, y: 90, w: 90, h: 230 },
        { x: 270, y: 180, w: 140, h: 140 },
        { x: 430, y: 60, w: 100, h: 260 },
        { x: 550, y: 140, w: 130, h: 180 },
        { x: 700, y: 100, w: 80, h: 220 },
        { x: 800, y: 170, w: 150, h: 150 },
        { x: 970, y: 80, w: 95, h: 240 },
        { x: 1085, y: 160, w: 125, h: 160 },
        { x: 1230, y: 110, w: 90, h: 210 },
        { x: 1340, y: 175, w: 90, h: 145 },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} />
          {Array.from({ length: Math.floor((b.h - 20) / 34) }).map((_, r) =>
            Array.from({ length: Math.floor((b.w - 16) / 30) }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={b.x + 14 + c * 30}
                y={b.y + 18 + r * 34}
                width="12"
                height="14"
              />
            ))
          )}
        </g>
      ))}
    </g>
  </svg>
);

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12"
      style={{ background: 'linear-gradient(180deg, hsl(40 40% 98%) 0%, hsl(38 36% 96%) 100%)' }}
    >
      <SkylineTexture />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-inter font-semibold uppercase tracking-[0.25em] text-accent mb-3">
                Our Story
              </p>
              <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
                Built by founders, for founders
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
            </div>

            <p className="text-foreground text-lg leading-relaxed font-inter">
              Purdue Venture Consulting was founded in 2025 by four students, Pedro Garcia Farias,
              Mehdi El Mansar, Nikhai Tonwar, and Hassan Berbich, who felt something was missing at
              Purdue. Innovation was moving faster than ever, yet there was no student group
              dedicated to helping startups turn bold ideas into real strategy.
            </p>

            <p className="text-foreground text-lg leading-relaxed font-inter">
              So they built one. What started as a small team with a shared conviction has grown
              into a consulting group that partners with founders and venture-backed companies
              across this new era of innovation.
            </p>

            <p className="text-foreground text-lg leading-relaxed font-inter">
              Today, we bring the same rigor top firms do to the problems founders actually face,
              and give Purdue's most driven students the chance to do real work that matters.
            </p>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-primary">50+</div>
                <div className="text-muted-foreground text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-primary">10+</div>
                <div className="text-muted-foreground text-sm">Startups Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-primary">4</div>
                <div className="text-muted-foreground text-sm">Partner Organizations</div>
              </div>
            </div>
          </div>

          {/* Right Column - Founders photo */}
          <div className="relative">
            <FoundersImage />
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-sm p-8 shadow-sm">
          <h3 className="font-space-grotesk font-semibold text-xl text-primary mb-6">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', copy: 'Pursuing the highest standards in everything we do' },
              { title: 'Accessibility', copy: 'Welcoming all students eager to grow through hands-on experience' },
              { title: 'Growth', copy: 'Equipping members with the tools to succeed in consulting and beyond' },
              { title: 'Impact', copy: 'Creating meaningful change for our clients and community' },
            ].map((v) => (
              <div key={v.title} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-inter font-semibold text-foreground">{v.title}</h4>
                  <p className="text-muted-foreground text-sm">{v.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
