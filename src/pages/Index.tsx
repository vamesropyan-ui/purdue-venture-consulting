
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Admissions from '@/components/Admissions';
import Team from '@/components/Team';
import AdvisoryBoard from '@/components/AdvisoryBoard';
import FacultyAdvisor from '@/components/FacultyAdvisor';
import PurdueAlumni from '@/components/PurdueAlumni';
import Partners from '@/components/Partners';
import Application from '@/components/Application';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric Background for entire site */}
      <div className="geometric-bg">
        <div className="geometric-shape w-32 h-32 border-2 border-primary/20 rotate-45"></div>
        <div className="geometric-shape w-24 h-24 bg-primary/10 rounded-full"></div>
        <div className="geometric-shape w-20 h-20 border border-accent/10 transform rotate-12"></div>
        <div className="geometric-shape w-16 h-16 border border-primary/15 rounded-lg rotate-[30deg]" style={{ top: '40%', right: '5%', animationDelay: '1s' }}></div>
        <div className="geometric-shape w-28 h-28 bg-accent/5 rounded-full" style={{ top: '70%', left: '15%', animationDelay: '3s' }}></div>
        <div className="geometric-shape w-12 h-12 border-2 border-accent/20 rotate-45" style={{ top: '25%', left: '80%', animationDelay: '5s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Admissions />
          <Team />
          <FacultyAdvisor />
          <AdvisoryBoard />
          {/* <PurdueAlumni /> */}
          <Partners />
          <Application />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
