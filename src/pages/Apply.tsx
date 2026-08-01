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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Admissions />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16 md:mt-20">
          <div className="space-y-12">
            <Application />
            <WhatWeLookFor />
          </div>
          <Faq />
        </div>
      </div>
    </section>
  </>
);

export default Apply;
