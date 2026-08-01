import React from 'react';
import Reveal from './Reveal';

const photos = [
  { src: '/lovable-uploads/mudlabs_present.jpeg', alt: 'MudLabs final presentation team' },
  { src: '/lovable-uploads/rounds_present.jpeg', alt: 'Rounds consulting project team' },
  { src: '/lovable-uploads/Kova_present.jpeg', alt: 'KOVA final presentation' },
  { src: '/lovable-uploads/kova_present_2.jpeg', alt: 'KOVA client introduction' },
  { src: '/lovable-uploads/present_2.jpeg', alt: 'PVC team presenting to audience' },
  { src: '/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png', alt: 'Captain project team presenting' },
  { src: '/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png', alt: 'PoliStock project team presenting' },
  { src: '/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png', alt: 'Elisyan Wealth Ventures team presenting' },
];

// Duplicate the list so the marquee can loop seamlessly.
const loop = [...photos, ...photos];

const StudentGallery = () => (
  <section className="w-full py-10 md:py-12 bg-background overflow-hidden">
    <Reveal>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">Life at PVC</p>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-semibold text-foreground">Students in Action</h2>
        </div>
      </div>

      <div
        className="relative w-full group"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="flex gap-4 md:gap-6 w-max animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <div
              key={`${p.src}-${i}`}
              className="relative shrink-0 w-[280px] sm:w-[340px] md:w-[420px] aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm bg-muted"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

export default StudentGallery;
