import React from 'react';
import WhyJoin from '@/components/WhyJoin';
import WhyUs from '@/components/WhyUs';
import StudentsInAction from '@/components/StudentsInAction';
import Admissions from '@/components/Admissions';
import Application, { WhatWeLookFor, Faq } from '@/components/Application';

const Apply = () => (
  <>
    <StudentsInAction />
    <WhyJoin />
    <WhyUs />
    <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(180deg, hsl(214 44% 97%) 0%, hsl(215 40% 94%) 100%)' }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(hsl(214 40% 55%) 1px, transparent 1.4px)', backgroundSize: '26px 26px', opacity: 0.12 }} />
      <div className="container mx-auto px-6 relative z-10">
        <Admissions />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16 md:mt-20">
          <Application />
          <div className="space-y-12">
            <WhatWeLookFor />
            <Faq />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Apply;
