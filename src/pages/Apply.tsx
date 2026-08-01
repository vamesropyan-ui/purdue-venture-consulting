import React from 'react';
import WhyJoin from '@/components/WhyJoin';
import WhyUs from '@/components/WhyUs';
import StudentsInAction from '@/components/StudentsInAction';
import Admissions from '@/components/Admissions';
import Application, { ApplicationExtras } from '@/components/Application';

const Apply = () => (
  <>
    <StudentsInAction />
    <WhyJoin />
    <WhyUs />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Admissions />
        <div className="max-w-2xl mx-auto mt-16 md:mt-20">
          <Application />
        </div>
        <div className="mt-20">
          <ApplicationExtras />
        </div>
      </div>
    </section>
  </>
);

export default Apply;
