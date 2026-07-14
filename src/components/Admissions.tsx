
import React from 'react';

const Admissions = () => {
  const steps = [
    {
      step: "01",
      title: "Application",
      description: "Submit your application including resume, and personal statement demonstrating your passion for consulting.",
      timeline: "Rolling Admissions"
    },
    {
      step: "02",
      title: "Interview",
      description: "Interview with the team to discuss your background, interests, and fit for our community.",
      timeline: "About 1 Week After Application"
    },
    {
      step: "03",
      title: "Final Selection",
      description: "Join our community after a final evaluation of your potential for leadership and commitment to growth.",
      timeline: "2 Weeks After Application Submission"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Admissions <span className="text-accent">Process</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-2xl mx-auto font-inter">
            Our open application process welcomes all students eager to grow, while our strike policy
            ensures commitment and accountability throughout their venture consulting journey.
          </p>
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
                      <p className="text-foreground font-inter leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-inter font-medium">
                        {step.timeline}
                      </div>
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
                  <div className="text-3xl font-space-grotesk font-bold text-accent mb-2">3.0+</div>
                  <div className="text-muted-foreground text-sm font-inter">Average GPA</div>
                </div>
                <div>
                  <div className="text-3xl font-space-grotesk font-bold text-accent mb-2">2 weeks</div>
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
