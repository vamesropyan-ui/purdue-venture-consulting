
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
    <section id="admissions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Admissions <span className="text-accent">Process</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-2xl mx-auto font-inter">
            We run one selective cohort each fall. Applications open August 17 and close September 4.
          </p>
        </div>

        {/* Date Banner */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-secondary rounded-2xl p-6 md:p-8 border border-primary/20 shadow-lg">
            <div className="flex items-center justify-center space-x-2 text-accent mb-6">
              <CalendarDays className="w-5 h-5" />
              <span className="font-space-grotesk font-semibold text-sm uppercase tracking-wider">Fall Cohort Timeline</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-space-grotesk font-bold text-primary mb-1">Aug 17</div>
                <div className="text-muted-foreground font-inter text-sm">Applications Open</div>
              </div>
              <ArrowRight className="hidden md:block w-6 h-6 text-accent rotate-0 md:rotate-0" />
              <div className="md:hidden">
                <ArrowRight className="w-6 h-6 text-accent rotate-90" />
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-space-grotesk font-bold text-primary mb-1">Sept 4</div>
                <div className="text-muted-foreground font-inter text-sm">Applications Close</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-24 bg-gradient-to-b from-primary to-primary/20"></div>
                )}
                
                <div className="flex items-start space-x-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-space-grotesk font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="bg-secondary rounded-lg p-6 transition-all duration-300 shadow-lg border border-primary/20">
                      <h3 className="font-space-grotesk font-semibold text-xl text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-foreground font-inter leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admission Stats */}
          <div className="mt-16 text-center">
            <div className="bg-secondary p-8 rounded-lg shadow-lg border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-space-grotesk font-bold text-primary mb-2">3.0+</div>
                  <div className="text-muted-foreground text-sm font-inter">Average GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-space-grotesk font-bold text-primary mb-2">2 weeks</div>
                  <div className="text-muted-foreground text-sm font-inter">Application Review Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
