import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Partners from '@/components/Partners';
import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';

const DARK = 'hsl(216 65% 6%)';

const AboutPage = () => (
  <>
    <Hero />

    {/* Wavy line divider into the next light section */}
    <div
      aria-hidden="true"
      className="relative w-full h-[90px] md:h-[110px] -mb-px"
      style={{
        background:
          'linear-gradient(to bottom, hsl(214 32% 95%), hsl(var(--background)))',
      }}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeOpacity="0.5"
        />
        <path
          d="M0,74 C240,34 480,114 720,74 C960,34 1200,114 1440,74"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeOpacity="0.2"
        />
      </svg>
    </div>


    <Services />

    {/* Light -> Light soft gradient transition */}
    <div
      aria-hidden="true"
      className="h-16 md:h-24 w-full"
      style={{
        background:
          'linear-gradient(to bottom, hsl(var(--background)), hsl(var(--muted)))',
      }}
    />

    <About />

    <Partners />

    {/* Light -> Dark curved divider */}
    <div aria-hidden="true" className="relative -mb-px leading-none bg-background">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[70px] md:h-[120px]"
      >
        <path d="M0,60 C380,140 1020,-10 1440,44 L1440,120 L0,120 Z" fill={DARK} />
      </svg>
    </div>

    <section className="relative overflow-hidden py-20" style={{ background: DARK }}>
      {/* Soft glowing accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[10%] w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.18]"
        style={{ background: 'hsl(40 54% 50%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-[5%] w-[520px] h-[520px] rounded-full blur-3xl opacity-[0.22]"
        style={{ background: 'hsl(216 60% 40%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center rounded-2xl p-10 border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-2xl">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to see what we build?
            </h2>
            <p className="text-slate-200/90 font-inter mb-8">
              Explore our recent engagements, or apply to join our next cohort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 shadow-lg shadow-accent/20"
              >
                <Link to="/work">See Our Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary font-semibold px-6 py-3"
              >
                <Link to="/apply">Apply</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default AboutPage;
