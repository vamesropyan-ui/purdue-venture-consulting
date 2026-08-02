
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ExternalLink, CheckCircle, Clock, Users, Trophy } from 'lucide-react';

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

  const badges = [
    { icon: CheckCircle, label: 'Secure' },
    { icon: Clock, label: '15 min' },
    { icon: Users, label: 'Inclusive' },
    { icon: Trophy, label: 'Excellence' },
  ];

  return (
    <div id="application" className="w-full">
      <div className="rounded-2xl p-8 md:p-10 text-center shadow-xl" style={{ backgroundColor: 'hsl(216 22% 18%)' }}>
        <img
          src="/lovable-uploads/2912c4e7-9d2d-47db-95cc-d511a5ca659d.png"
          alt="Purdue Venture Consulting"
          className="h-28 w-auto object-contain mx-auto mb-8"
        />
        <h3 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-5" style={{ color: 'hsl(200 68% 54%)' }}>
          Official Application Portal
        </h3>
        <p className="font-inter text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10" style={{ color: 'hsl(214 14% 72%)' }}>
          Complete your application through our secure online portal. The form includes sections for personal information, academic background, leadership experience, and essay responses.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-xs mx-auto mb-10">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2">
              <b.icon className="w-7 h-7" strokeWidth={1.75} style={{ color: 'hsl(200 68% 56%)' }} />
              <span className="font-inter text-sm" style={{ color: 'hsl(214 14% 74%)' }}>{b.label}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleApplicationClick}
          className="w-full rounded-xl text-white font-space-grotesk font-semibold py-5 text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110"
          style={{ backgroundColor: 'hsl(228 82% 64%)' }}
        >
          <span>Start Application</span>
          <ExternalLink className="w-5 h-5" />
        </button>
        <p className="font-inter text-xs mt-5" style={{ color: 'hsl(214 12% 55%)' }}>
          Opens in a new window • Microsoft Forms
        </p>
      </div>
    </div>
  );
};

export const WhatWeLookFor = () => (
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
);

export const Faq = () => (
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
);

export default Application;
