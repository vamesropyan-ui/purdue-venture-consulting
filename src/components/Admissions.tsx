import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';

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

      {/* Date Banner */}
      <div className="mb-10 bg-secondary rounded-2xl p-5 md:p-6 border border-primary/20 shadow-lg">
        <div className="flex items-center space-x-2 text-accent mb-4">
          <CalendarDays className="w-5 h-5" />
          <span className="font-space-grotesk font-semibold text-xs uppercase tracking-wider">Fall Cohort Timeline</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-space-grotesk font-bold text-primary mb-1">Aug 17</div>
            <div className="text-muted-foreground font-inter text-sm">Applications Open</div>
          </div>
          <ArrowRight className="hidden sm:block w-5 h-5 text-accent shrink-0" />
          <ArrowRight className="sm:hidden w-5 h-5 text-accent rotate-90" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-space-grotesk font-bold text-primary mb-1">Sept 4</div>
            <div className="text-muted-foreground font-inter text-sm">Applications Close</div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-14 w-px h-16 bg-gradient-to-b from-primary to-primary/20"></div>
            )}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-space-grotesk font-bold text-base shadow-lg">
                  {step.step}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-secondary rounded-lg p-5 shadow-lg border border-primary/20">
                  <h3 className="font-space-grotesk font-semibold text-lg text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground font-inter text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
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
