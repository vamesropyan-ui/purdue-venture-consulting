import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const LIGHT_BG = 'linear-gradient(180deg, hsl(210 40% 99%) 0%, hsl(214 32% 95%) 100%)';

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
        backgroundColor: 0xf3f6fb,
        color: 0x13294b,
        color2: 0xc1963c,
        size: 0.85,
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
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20"
      style={{ background: LIGHT_BG }}
    >
      {/* Soft light scrim behind the text for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, hsl(0 0% 100% / 0.55) 0%, hsl(0 0% 100% / 0.3) 45%, transparent 75%)',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-space-grotesk font-semibold text-4xl md:text-6xl mb-5 leading-tight text-primary">
            Where Strategy
            <span className="block text-accent">Meets Opportunity</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-7 max-w-2xl mx-auto font-inter">
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
              className="border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-md transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
