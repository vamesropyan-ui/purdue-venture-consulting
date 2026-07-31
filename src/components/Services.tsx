
import React from 'react';
import Reveal from './Reveal';


const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Work directly with startups and established companies to solve complex business challenges and drive growth initiatives.",
      features: ["Market Analysis", "Business Strategy", "Operations Optimization", "Financial Modeling"]
    },
    {
      title: "Real Client Work",
      description: "Our teams tackle live business challenges for startups, from market entry to growth strategy, and deliver work founders can act on.",
      features: ["Live Engagements", "Market Entry", "Growth Strategy", "Actionable Deliverables"]
    },
    {
      title: "Innovation Network",
      description: "We connect founders, operators, and student consultants through a growing network built around the startup ecosystem.",
      features: ["Founder Connections", "Operator Insights", "Partner Organizations", "Ecosystem Events"]
    }

  ];

  return (
    <section id="services" className="pt-10 pb-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            What We <span className="text-accent">Do</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-2xl mx-auto font-inter">
            We take on real engagements for startups and venture-backed companies, pairing ambitious
            founders with teams that treat their goals like our own.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 120}>
              <div
                className="bg-card/80 backdrop-blur-sm rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-[0_1px_2px_rgba(19,41,75,0.06),0_12px_32px_-12px_rgba(19,41,75,0.18)] hover:shadow-[0_2px_4px_rgba(19,41,75,0.08),0_24px_48px_-16px_rgba(19,41,75,0.26)] border border-primary/10 h-full"
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
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
