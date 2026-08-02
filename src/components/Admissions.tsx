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

      {/* Fall Cohort Timeline — compact pill */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex items-center gap-4 bg-primary rounded-full px-7 py-3.5 shadow-md text-white">
          <span className="flex items-center gap-2">
            <CalendarDays className="w-[18px] h-[18px] text-accent" />
            <span className="font-inter text-[15px]"><span className="font-semibold">Opens</span> Aug 17</span>
          </span>
          <span className="w-6 h-px bg-white/30"></span>
          <span className="font-inter text-[15px]"><span className="font-semibold">Closes</span> Sept 4</span>
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
