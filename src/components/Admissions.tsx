import React from 'react';
import { CalendarDays } from 'lucide-react';

const Admissions = () => {
  const steps = [
    {
      step: "01",
      title: "Online Application",
      description: "A short written application covering your background, interests, and why PVC. Takes about 15 minutes. No prior consulting experience required."
    },
    {
      step: "02",
      title: "Group Case Study",
      description: "Work through a real business problem alongside other candidates. We're evaluating how you think, structure ambiguity, and collaborate, not whether you've memorized frameworks."
    },
    {
      step: "03",
      title: "Behavioral Interview",
      description: "A one-on-one conversation about your experiences, motivation, and fit. A chance for us to get to know you and for you to get to know us."
    }
  ];

  return (
    <div id="admissions" className="w-full">
      <div className="mb-8">
        <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4 text-primary">
          Admissions <span className="text-accent">Process</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-5"></div>
        <p className="text-foreground text-base font-inter">
          We run one selective cohort each fall. Applications open August 17 and close September 4.
        </p>
      </div>

      {/* Fall Cohort Timeline */}
      <div className="mb-12 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2 text-accent mb-8">
          <CalendarDays className="w-4 h-4" />
          <span className="font-space-grotesk font-semibold text-xs uppercase tracking-[0.25em]">Fall Cohort Timeline</span>
        </div>
        <div className="relative">
          <div className="absolute top-[7px] left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent to-accent/60"></div>
          <div className="relative grid grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-4 h-4 rounded-full bg-accent"></div>
              <div className="mt-5 font-space-grotesk font-bold text-2xl md:text-3xl text-primary">Aug 17</div>
              <div className="text-muted-foreground font-inter text-sm mt-1">Applications Open</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-4 h-4 rounded-full bg-accent"></div>
              <div className="mt-5 font-space-grotesk font-bold text-2xl md:text-3xl text-primary">Sept 4</div>
              <div className="text-muted-foreground font-inter text-sm mt-1">Applications Close</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="hidden sm:block absolute left-[16.66%] right-[16.66%] top-6 h-px bg-primary/30"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-space-grotesk font-bold text-base shadow-lg ring-4 ring-background z-10 mb-4">
                {step.step}
              </div>
              <h3 className="font-space-grotesk font-semibold text-base text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-secondary p-6 rounded-lg shadow-lg border border-primary/20">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-2xl font-space-grotesk font-bold text-primary mb-1">3.0+</div>
            <div className="text-muted-foreground text-xs font-inter">Average GPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-space-grotesk font-bold text-primary mb-1">2 weeks</div>
            <div className="text-muted-foreground text-xs font-inter">Application Review Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
