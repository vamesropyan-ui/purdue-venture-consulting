import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="relative">
      {/* Thin vertical editorial rule near left edge of content container */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute top-0 bottom-0 w-px bg-border"
        style={{ left: 'max(1.5rem, calc((100% - 1280px) / 2 + 3rem))' }}
      />

      <Hero />
      <div className="border-t border-border" />
      <Services />
      <div className="border-t border-border" />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-card rounded-lg p-10 border border-border shadow-sm">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-primary mb-4">
              Ready to see what we build?
            </h2>
            <p className="text-foreground font-inter mb-8">
              Explore our recent engagements, or apply to join our next cohort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full">
                <Link to="/work">See Our Work</Link>
              </Button>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold rounded-full">
                <Link to="/apply">Apply</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
