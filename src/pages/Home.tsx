import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-secondary rounded-lg p-10 border border-primary/20 shadow-lg">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-primary mb-4">
              Ready to see what we build?
            </h2>
            <p className="text-foreground font-inter mb-8">
              Explore our recent engagements, or apply to join our next cohort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3">
                <Link to="/work">See Our Work</Link>
              </Button>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold">
                <Link to="/apply">Apply</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
