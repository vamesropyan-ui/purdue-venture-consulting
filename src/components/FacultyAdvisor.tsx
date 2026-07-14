
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacultyAdvisor = () => {
  return (
    <section id="faculty-advisor" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Faculty <span className="text-accent">Advisor</span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Meet our dedicated faculty advisor who guides and supports our venture consulting endeavors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-secondary shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/lovable-uploads/lucky_cho.jpeg" 
                      alt="Dr. Lucky Cho"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl mb-2 text-primary">
                    Dr. Lucky Cho
                  </h3>
                  <p className="text-accent font-semibold text-lg mb-4">
                    Edwardson School of Industrial Engineering
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center md:justify-start gap-3 text-foreground">
                      <Mail className="w-5 h-5" />
                      <span>cho568@purdue.edu</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3 text-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>315 N. Grant Street, Office 347</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    With over 15 years of experience in strategic consulting and academic research, 
                    Dr. Lucky brings invaluable expertise to our club. Their guidance helps 
                    bridge the gap between academic theory and real-world venture consulting practice, 
                    ensuring our members are well-prepared for successful careers in consulting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FacultyAdvisor;
