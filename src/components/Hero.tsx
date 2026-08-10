import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const LIGHT_BG = 'linear-gradient(180deg, hsl(210 40% 99%) 0%, hsl(214 32% 95%) 100%)';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20"
      style={{ background: LIGHT_BG }}
    >
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
            <span className="block" style={{ color: 'hsl(191 79% 39%)' }}>Meets Opportunity</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-7 max-w-2xl mx-auto font-inter">
            We help startups solve the problems that decide their next stage of growth, with the same
            rigor top firms bring to their clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate('/apply')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-md transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
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
