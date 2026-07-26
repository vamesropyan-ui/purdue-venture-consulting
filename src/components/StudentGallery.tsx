import React from 'react';
import Reveal from './Reveal';

const photos = [
  { src: '/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png', alt: 'Captain project team presenting' },
  { src: '/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png', alt: 'PoliStock project team presenting' },
  { src: '/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png', alt: 'Elisyan Wealth Ventures project team presenting' },
];

const StudentGallery = () => (
  <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-20 bg-background">
    <Reveal>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">Life at PVC</p>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-semibold text-foreground">Students in Action</h2>
        </div>
        <Reveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          direction="scale"
          stagger={0.1}
        >
          {photos.map((p) => (
            <div key={p.src} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm bg-muted">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </Reveal>
  </section>
);

export default StudentGallery;
