import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import RevealText from './RevealText';

const heroBackgroundImage = '';

const Hero = () => {
  const navigate = useNavigate();
  const hasBg = Boolean(heroBackgroundImage);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-background">
      {hasBg && (
        <>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackgroundImage})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-0 bg-gradient-to-b from-background/85 via-background/70 to-primary/25"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-inter text-xs md:text-sm tracking-[0.22em] uppercase text-muted-foreground">
              Student Venture Consulting · Purdue
            </span>
          </div>

          <RevealText
            as="h1"
            text="Where strategy meets opportunity."
            accentWords={['opportunity']}
            className="font-space-grotesk font-bold text-foreground leading-[0.95] tracking-tight"
          />


          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground font-inter leading-relaxed">
            A student-led consulting group partnering with venture-backed startups
            on real strategy, market, and go-to-market work.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/work')}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-inter font-semibold px-7 py-3.5 text-base transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
            >
              Explore our work
            </button>
            <button
              onClick={() => navigate('/apply')}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground font-inter font-semibold px-7 py-3.5 text-base transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Apply to join
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </div>
    </section>
  );
};

export default Hero;
