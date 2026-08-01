import React from 'react';
import WhyJoin from '@/components/WhyJoin';
import StudentsInAction from '@/components/StudentsInAction';
import Admissions from '@/components/Admissions';
import Application, { ApplicationExtras } from '@/components/Application';

const Apply = () => (
  <>
    <StudentsInAction />
    <WhyJoin />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Admissions />
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
