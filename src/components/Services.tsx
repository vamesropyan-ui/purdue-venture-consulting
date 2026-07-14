
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Work directly with startups and established companies to solve complex business challenges and drive growth initiatives.",
      features: ["Market Analysis", "Business Strategy", "Operations Optimization", "Financial Modeling"]
    },
    {
      title: "Case Interview Prep",
      description: "Comprehensive training program designed to prepare members for consulting interviews at top-tier firms.",
      features: ["Mock Interviews", "Case Study Practice", "Personal Coaching", "Industry Insights"]
    },
    {
      title: "Exclusive Networking",
      description: "Connect with industry leaders, alumni, and peers through curated events and professional development opportunities.",
      features: ["Executive Speakers", "Corporate Events", "Alumni Network", "Professional Mentorship"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            What We <span className="text-accent">Do</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-2xl mx-auto font-inter">
            Empowering students through hands-on venture consulting experience, professional development, 
            and exclusive access to industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/20"
            >
              <div className="mb-6">
                <h3 className="font-space-grotesk font-semibold text-xl text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm font-inter">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
