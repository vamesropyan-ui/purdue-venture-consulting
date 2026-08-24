import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ExternalLink, CheckCircle, Clock, Users, Trophy } from 'lucide-react';

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

const requirements = [
  { title: 'Academic Excellence', desc: 'Minimum 3.0 GPA required' },
  { title: 'Leadership Experience', desc: 'Demonstrated leadership in academics, work, or extracurriculars' },
  { title: 'Professional Interest', desc: 'Genuine passion for venture consulting and business strategy' },
  { title: 'Commitment', desc: 'Ability to dedicate 6 to 10 hours per week to club activities' },
];

const Application = () => {
  const handleApplicationClick = () => {
    window.open('https://forms.cloud.microsoft/r/3EKcrSvHz0', '_blank');
  };

  const badges = [
    { icon: CheckCircle, label: 'Secure' },
    { icon: Clock, label: '15 min' },
    { icon: Users, label: 'Inclusive' },
    { icon: Trophy, label: 'Excellence' },
  ];

  return (
    <div id="application" className="w-full h-full">
      <div className="bg-secondary rounded-2xl p-8 md:p-10 text-center border border-primary/15 shadow-lg h-full">
        <img
          src="/lovable-uploads/2912c4e7-9d2d-47db-95cc-d511a5ca659d.png"
          alt="Purdue Venture Consulting"
          className="h-32 w-auto object-contain inline-block mb-8"
        />
        <h3 className="font-space-grotesk font-bold text-3xl md:text-4xl text-primary mb-5">
          Official Application Portal
        </h3>
        <p className="font-inter text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10 text-muted-foreground">
          Apply through our secure online portal. The form covers your background, leadership experience, and essay responses.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-xs mx-auto mb-10">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2">
              <b.icon className="w-7 h-7 text-accent" strokeWidth={1.75} />
              <span className="font-inter text-sm text-muted-foreground">{b.label}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleApplicationClick}
          className="w-full rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-space-grotesk font-semibold py-5 text-lg flex items-center justify-center gap-2 transition-all duration-300"
        >
          <span>Start Application</span>
          <ExternalLink className="w-5 h-5" />
        </button>
        <p className="font-inter text-xs mt-5 text-muted-foreground">
          Opens in a new window • Microsoft Forms
        </p>
      </div>
    </div>
  );
};

export const ApplicationRequirements = () => (
  <div className="bg-secondary rounded-2xl p-8 md:p-10 border border-primary/15 shadow-lg h-full">
    <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-primary mb-3">
      Ready to <span className="text-accent">Apply</span>?
    </h2>
    <div className="w-16 h-1 bg-primary mb-6"></div>
    <p className="text-muted-foreground font-inter mb-8 max-w-md">
      Here's what we look for in every applicant.
    </p>
    <div className="space-y-5">
      {requirements.map((r) => (
        <div key={r.title} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-inter font-semibold text-primary">{r.title}</h4>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Faq = () => (
  <div className="bg-secondary p-8 border border-primary/20 rounded-none">
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
);

export default Application;
