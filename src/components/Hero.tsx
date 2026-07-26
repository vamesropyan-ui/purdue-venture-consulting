import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

// Drop in a background image path here (e.g. '/lovable-uploads/hero.jpg')
// to render the hero over a full-bleed photo. Leave empty for the clean
// white background with the animated blobs.
const heroBackgroundImage = '';

const Hero = () => {
  const navigate = useNavigate();
  const hasBg = Boolean(heroBackgroundImage);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {hasBg && (
        <>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackgroundImage})` }}
            aria-hidden="true"
          />
          {/* Readability overlay: white wash + subtle navy bottom gradient */}
          <div
            className="absolute inset-0 z-0 bg-gradient-to-b from-background/85 via-background/70 to-primary/25"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-space-grotesk font-semibold text-5xl md:text-7xl mb-6 leading-tight text-foreground">
            Where Strategy
            <span className="block text-primary">Meets Opportunity</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto font-inter">
            A club that helps motivated students connect with rising startups,
            venture capital firms, and innovation leaders across the nation.
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
              className="border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold px-6 sm:px-8 py-3 rounded-md transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
