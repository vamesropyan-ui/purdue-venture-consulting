
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ExternalLink, CheckCircle } from 'lucide-react';

const whatWeLookFor = [
  "Sharp, structured thinking over polished résumés",
  "Genuine curiosity about startups and venture",
  "Ownership. You follow through on what you start",
  "Coachability and a team-first attitude",
  "All majors welcome. We value diverse perspectives",
];

const faqs = [
  {
    question: "Do I need a business major?",
    answer: "No. Our consultants come from engineering, business, computer science, and more. What matters is how you think.",
  },
  {
    question: "What's the time commitment?",
    answer: "Plan for roughly 6 to 10 hours per week during an active project, including team meetings.",
  },
  {
    question: "Do I need consulting experience?",
    answer: "Not at all. We train every member in the frameworks and skills you'll use on real client work.",
  },
  {
    question: "What will I actually work on?",
    answer: "Live engagements for real startups, including market research, competitive strategy, go-to-market, product, and more.",
  },
];

const Application = () => {
  const handleApplicationClick = () => {
    window.open('https://forms.cloud.microsoft/r/JCFPANQ1wu', '_blank');
  };

  return (
    <div id="application" className="w-full">
      <div className="mb-8">
        <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4 text-primary">
          Ready to <span className="text-accent">Apply?</span>
        </h2>
        <div className="w-16 h-1 bg-primary mb-5"></div>
      </div>

      <div className="bg-secondary rounded-lg p-8 border border-primary/20 shadow-lg space-y-6">
        <p className="text-foreground text-base font-inter">
          We select one cohort each fall. If you want to do real strategy work for venture-backed startups, and be held to a professional standard while doing it, we want to hear from you.
        </p>

        <div>
          <h3 className="font-space-grotesk font-semibold text-xl text-primary mb-4">Application Requirements</h3>
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
                <p className="text-muted-foreground text-sm">Ability to dedicate 6 to 10 hours per week to club activities</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleApplicationClick}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 text-lg transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>Start Application</span>
          <ExternalLink className="w-5 h-5" />
        </Button>

        <p className="text-muted-foreground text-xs font-inter opacity-80 text-center">
          Opens in a new window • Microsoft Forms
        </p>
      </div>
    </div>
  );
};

export const ApplicationExtras = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div className="bg-secondary rounded-lg p-8 border border-primary/20">
      <h3 className="font-space-grotesk font-semibold text-2xl text-primary mb-6">What We Look For</h3>
      <ul className="space-y-4">
        {whatWeLookFor.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground font-inter">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-secondary rounded-lg p-8 border border-primary/20">
      <h3 className="font-space-grotesk font-semibold text-2xl text-primary mb-6">FAQ</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-border">
            <AccordionTrigger className="text-left text-foreground font-inter font-medium hover:text-accent hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-inter">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default Application;
