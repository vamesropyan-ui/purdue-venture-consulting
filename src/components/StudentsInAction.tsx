import React from 'react';
import Reveal from './Reveal';

const photos = [
  { src: '/lovable-uploads/504d70be-bef1-4524-bcd3-328680f0bc66.png', alt: 'PVC members at final presentations' },
  { src: '/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png', alt: 'Captain project team presenting' },
  { src: '/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png', alt: 'PoliStock project team presenting' },
  { src: '/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png', alt: 'Elisyan Wealth Ventures project team presenting' },
];

const StudentsInAction = () => (
  <section className="py-20 bg-secondary/40">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <div className="text-accent font-inter font-semibold tracking-[0.3em] text-sm mb-4">LIFE AT PVC</div>
        <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">Students in Action</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={i * 80}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StudentsInAction;
