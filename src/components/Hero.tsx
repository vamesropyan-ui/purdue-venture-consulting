import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const Hero = () => {
  const navigate = useNavigate();
  const vantaRef = useRef<HTMLElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    if (!vantaEffect && vantaRef.current) {
      const effect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x0a1428,
        color: 0xc1963c,
        color2: 0x3b5b8c,
        size: 0.9,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, hsl(216 55% 16%) 0%, hsl(216 62% 9%) 60%, hsl(216 65% 6%) 100%)',
      }}
    >
      {/* Vignette so text always reads over the animation */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, hsl(216 65% 6% / 0.72) 0%, hsl(216 65% 6% / 0.35) 45%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 z-[1]"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(216 65% 6% / 0.85))' }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-space-grotesk font-semibold text-5xl md:text-7xl mb-6 leading-tight text-white">
            Where Strategy
            <span className="block text-accent">Meets Opportunity</span>
          </h1>

          <p className="text-slate-200/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-inter">
            A club that helps motivated students connect with rising startups,
            venture capital firms, and innovation leaders across the nation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate('/apply')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 rounded-md transition-all duration-300 text-base sm:text-lg w-full sm:w-auto shadow-lg shadow-accent/20"
            >
              Join Our Community
            </Button>
            <Button
              onClick={() => navigate('/work')}
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-3 rounded-md transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default Hero;
