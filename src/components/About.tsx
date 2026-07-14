
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
                About <span className="text-accent">Purdue Venture Consulting</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <p className="text-foreground text-lg leading-relaxed font-inter">
              Purdue Venture Consulting is a student organization that helps motivated students 
              develop strategic thinking skills and connect with the startup ecosystem.
            </p>
            
            <p className="text-foreground text-lg leading-relaxed font-inter">
              Our mission is to bridge the gap between academic excellence and real-world 
              venture creation. We provide our members with unparalleled access to startup consulting 
              opportunities, venture capital mentorship, and a network that extends far beyond campus.
            </p>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-accent">30+</div>
                <div className="text-accent text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-accent">5+</div>
                <div className="text-accent text-sm">Partner Companies</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-secondary p-8 rounded-lg shadow-lg border border-primary/20">
              <div className="space-y-4">
                <h3 className="font-space-grotesk font-semibold text-xl text-primary">Our Values</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Excellence</h4>
                      <p className="text-muted-foreground text-sm">Pursuing the highest standards in everything we do</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Accessibility</h4>
                      <p className="text-muted-foreground text-sm">Welcoming all students eager to grow through hands-on experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Growth</h4>
                      <p className="text-muted-foreground text-sm">Equipping members with the tools to succeed in consulting and beyond</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-foreground">Impact</h4>
                      <p className="text-muted-foreground text-sm">Creating meaningful change for our clients and community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
