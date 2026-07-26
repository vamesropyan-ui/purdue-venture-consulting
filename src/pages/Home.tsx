import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import HomeStatement from '@/components/home/HomeStatement';
import HomeWhatWeDo from '@/components/home/HomeWhatWeDo';
import HomeProof from '@/components/home/HomeProof';
import HomeClosing from '@/components/home/HomeClosing';

const Home = () => {
  return (
    <div className="relative">
      <HomeHero />
      <HomeStatement />
      <HomeWhatWeDo />
      <HomeProof />
      <HomeClosing />
    </div>
  );
};

export default Home;
