import React from 'react';
import Reveal from './Reveal';

const photos = [
  { src: '/lovable-uploads/mudlabs_present.jpeg', alt: 'MudLabs final presentation team', cls: 'col-span-2 row-span-2' },
  { src: '/lovable-uploads/rounds_team_2026.png', alt: 'Rounds project team', cls: '' },
  { src: '/lovable-uploads/kova_present_2.jpeg', alt: 'KOVA client introduction', cls: '' },
  { src: '/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png', alt: 'Captain project team presenting', cls: '' },
  { src: '/lovable-uploads/polistock_team_2026.png', alt: 'PoliStock project team', cls: '' },
  { src: '/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png', alt: 'Elisyan Wealth Ventures team presenting', cls: '' },
  { src: '/lovable-uploads/present_2.jpeg', alt: 'PVC team presenting to audience', cls: '' },
  { src: '/lovable-uploads/Kova_present.jpeg', alt: 'KOVA final presentation', cls: 'col-span-2' },
];

const StudentGallery = () => (
  <section className="w-full py-10 md:py-12 bg-background overflow-hidden">
    <Reveal>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">Life at PVC</p>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-semibold text-foreground">Students in Action</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[150px] gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl border border-border shadow-sm bg-muted group ${p.cls}`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default StudentGallery;
