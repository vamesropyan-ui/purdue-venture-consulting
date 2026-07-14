
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle, Clock, Users, Trophy } from 'lucide-react';

const Application = () => {
  const handleApplicationClick = () => {
    window.open('https://forms.cloud.microsoft/r/JCFPANQ1wu', '_blank');
  };

  return (
    <section id="application" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
              Ready to <span className="text-accent">Apply?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-foreground text-lg max-w-2xl mx-auto font-inter">
              Take the first step toward joining Purdue's most welcoming venture consulting community. Our 
              application process encourages all motivated students to grow and contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-space-grotesk font-semibold text-2xl text-primary mb-4">Application Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-primary">Academic Excellence</h4>
                      <p className="text-muted-foreground text-sm">Minimum 3.0 GPA required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-primary">Leadership Experience</h4>
                      <p className="text-muted-foreground text-sm">Demonstrated leadership in academics, work, or extracurriculars</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-primary">Professional Interest</h4>
                      <p className="text-muted-foreground text-sm">Genuine passion for venture consulting and business strategy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-primary">Commitment</h4>
                      <p className="text-muted-foreground text-sm">Ability to dedicate 8-10 hours per week to club activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg border border-primary/20">
                <h4 className="font-space-grotesk font-semibold text-primary mb-3">Next Steps</h4>
                <p className="text-foreground text-sm font-inter mb-4">
                  After submitting your application, you'll receive an email within 1 week 
                  confirming the next steps in joining the team.
                </p>
                <p className="text-accent text-sm font-inter font-medium">
                  Application Deadline: Rolling Admissions
                </p>
              </div>
            </div>

            {/* Application Portal */}
            <div className="bg-secondary rounded-lg p-8 flex flex-col justify-center items-center text-center space-y-6 border border-primary/20">
              <div className="w-40 h-24 flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/2912c4e7-9d2d-47db-95cc-d511a5ca659d.png" 
                  alt="Purdue Venture Consulting Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-space-grotesk font-bold text-2xl text-primary">
                Official Application Portal
              </h3>
              
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                Complete your application through our secure online portal. The form includes 
                sections for personal information, academic background, leadership experience, 
                and essay responses.
              </p>

              <div className="grid grid-cols-2 gap-4 w-full my-6">
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="text-muted-foreground text-xs font-inter">Secure</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="text-muted-foreground text-xs font-inter">15 min</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Users className="w-6 h-6 text-accent" />
                  <span className="text-muted-foreground text-xs font-inter">Inclusive</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  <span className="text-muted-foreground text-xs font-inter">Excellence</span>
                </div>
              </div>

              <Button 
                onClick={handleApplicationClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Application</span>
                <ExternalLink className="w-5 h-5" />
              </Button>

              <p className="text-muted-foreground text-xs font-inter opacity-80">
                Opens in a new window • Microsoft Forms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
