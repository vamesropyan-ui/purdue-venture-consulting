
import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "Purdue Anvil",
      logo: "/lovable-uploads/purdue-anvil.png"
    },
    {
      name: "Zyth",
      logo: "/lovable-uploads/zyth_logo.jpeg"
    },
    {
      name: "Purdue Innovates",
      logo: "/lovable-uploads/purdue_innovates_logo.jpeg"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Our <span className="text-accent">Partners</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-2xl mx-auto font-inter">
            We collaborate with industry-leading consulting firms and Fortune 500 companies 
            to provide our members with unparalleled opportunities.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-48 border border-primary/20"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                  />
                </div>
                <h3 className="font-inter font-medium text-foreground text-sm group-hover:text-accent transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <div className="w-6 h-6 bg-accent rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-primary mb-2">Direct Recruitment</h3>
            <p className="text-muted-foreground text-sm font-inter">Fast-track interviews and exclusive recruiting events with partner firms.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <div className="w-6 h-6 bg-accent rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-primary mb-2">Real Projects</h3>
            <p className="text-muted-foreground text-sm font-inter">Work on actual business challenges and strategic initiatives.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20">
              <div className="w-6 h-6 bg-accent rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-primary mb-2">Mentorship</h3>
            <p className="text-muted-foreground text-sm font-inter">Personal guidance from senior partners and experienced consultants.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
