import React from 'react';
import { CalendarDays, FileText, Users, MessageSquare } from 'lucide-react';

const Admissions = () => {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Online Application",
      description: "A short written application covering your background, interests, and why PVC. Takes about 15 minutes. No prior consulting experience required."
    },
    {
      step: "02",
      icon: Users,
      title: "Group Case Study",
      description: "Work through a real business problem alongside other candidates. We're evaluating how you think, structure ambiguity, and collaborate, not whether you've memorized frameworks."
    },
    {
      step: "03",
      icon: MessageSquare,
      title: "Behavioral Interview",
      description: "A one-on-one conversation about your experiences, motivation, and fit. A chance for us to get to know you and for you to get to know us."
    }
  ];

  return (
    <div id="admissions" className="w-full">
      {/* Heading + corner pill */}
      <div className="mb-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4 text-primary">
            Admissions Process
          </h2>
          <div className="w-16 h-1 bg-primary mb-5"></div>
          <p className="text-foreground text-base font-inter max-w-xl">
            We run one selective cohort each fall. Applications open August 17 and close September 4.
          </p>
        </div>
        <div className="flex-shrink-0 md:pt-1">
          <div className="inline-flex items-center gap-4 bg-primary rounded-full px-7 py-3.5 shadow-md text-white">
            <span className="flex items-center gap-2">
              <CalendarDays className="w-[18px] h-[18px] text-accent" />
              <span className="font-inter text-[15px]"><span className="font-semibold">Opens</span> Aug 17</span>
            </span>
            <span className="w-6 h-px bg-white/30"></span>
            <span className="font-inter text-[15px]"><span className="font-semibold">Closes</span> Sept 4</span>
          </div>
        </div>
      </div>

      {/* Lively 3-step process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl border border-primary/10 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-accent/40 transition-all duration-300"
            >
              <span className="absolute top-3 right-5 font-space-grotesk font-bold text-5xl text-primary/5 group-hover:text-accent/20 transition-colors duration-300 select-none">
                {step.step}
              </span>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg shadow-accent/30 mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-space-grotesk font-semibold text-lg text-primary mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-inter text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
              <div className="mt-5 h-1 w-10 bg-accent/30 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
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
