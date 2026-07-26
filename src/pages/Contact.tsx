import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground font-inter text-lg mb-10">
            Founders, partners, and prospective members, we'd love to hear from you.
          </p>

          <div className="bg-secondary rounded-lg p-8 border border-primary/20 shadow-lg space-y-6 text-left">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="font-space-grotesk font-semibold text-primary">Email</div>
                <a
                  href="mailto:info@purdueventureconsulting.com"
                  className="text-foreground hover:text-accent font-inter"
                >
                  info@purdueventureconsulting.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="font-space-grotesk font-semibold text-primary">Location</div>
                <div className="text-foreground font-inter">West Lafayette, IN 47907</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Linkedin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="font-space-grotesk font-semibold text-primary">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/company/purdue-venture-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent font-inter"
                >
                  Purdue Venture Consulting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
