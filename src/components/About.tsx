
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
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>

            <p className="text-foreground text-lg leading-relaxed font-inter">
              Purdue Venture Consulting was founded in 2025 by four students, Pedro Garcia Farias,
              Mehdi El Mansar, Nikhai Tonwar, and Hassan Berbich, who felt something was missing at
              Purdue. Innovation was moving faster than ever, yet there was no student group
              dedicated to helping startups turn bold ideas into real strategy.
            </p>

            <p className="text-foreground text-lg leading-relaxed font-inter">
              So they built one. What started as a small team with a shared conviction has grown
              into a consulting group that partners with founders and venture-backed companies
              across this new era of innovation.
            </p>

            <p className="text-foreground text-lg leading-relaxed font-inter">
              Today, we bring the same rigor top firms do to the problems founders actually face,
              and give Purdue's most driven students the chance to do real work that matters.
            </p>


            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-primary">50+</div>
                <div className="text-muted-foreground text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-primary">10+</div>
                <div className="text-muted-foreground text-sm">Startups Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-primary">4</div>
                <div className="text-muted-foreground text-sm">Partner Organizations</div>
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
