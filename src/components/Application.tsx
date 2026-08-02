
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

  const requirements = [
    { title: 'Academic Excellence', desc: 'Minimum 3.0 GPA required' },
    { title: 'Leadership Experience', desc: 'Demonstrated leadership in academics, work, or extracurriculars' },
    { title: 'Professional Interest', desc: 'Genuine passion for venture consulting and business strategy' },
    { title: 'Commitment', desc: 'Ability to dedicate 6 to 10 hours per week to club activities' },
  ];

  return (
    <div id="application" className="w-full space-y-8">
      <div className="rounded-2xl p-8 md:p-10 text-center shadow-xl" style={{ background: 'linear-gradient(160deg, hsl(216 55% 14%) 0%, hsl(215 60% 10%) 100%)' }}>
        <img
          src="/lovable-uploads/2912c4e7-9d2d-47db-95cc-d511a5ca659d.png"
          alt="Purdue Venture Consulting"
          className="h-28 w-auto object-contain mx-auto mb-8"
        />
        <h3 className="font-space-grotesk font-bold text-3xl md:text-4xl text-white mb-5">
          Official Application Portal
        </h3>
        <p className="font-inter text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10 text-slate-300">
          Complete your application through our secure online portal. The form includes sections for personal information, academic background, leadership experience, and essay responses.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-w-xs mx-auto mb-10">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-2">
              <b.icon className="w-7 h-7 text-accent" strokeWidth={1.75} />
              <span className="font-inter text-sm text-slate-300">{b.label}</span>
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
        <p className="font-inter text-xs mt-5 text-slate-400">
          Opens in a new window • Microsoft Forms
        </p>
      </div>

      <div className="bg-secondary rounded-lg p-8 border border-primary/20">
        <h3 className="font-space-grotesk font-semibold text-xl text-primary mb-5">Application Requirements</h3>
        <div className="space-y-4">
          {requirements.map((r) => (
            <div key={r.title} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-inter font-semibold text-primary">{r.title}</h4>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
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
