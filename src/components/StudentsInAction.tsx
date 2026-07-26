import React from 'react';
import Reveal from './Reveal';

const photos = [
  { src: '/lovable-uploads/504d70be-bef1-4524-bcd3-328680f0bc66.png', alt: 'PVC members at final presentations' },
  { src: '/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png', alt: 'Captain project team presenting' },
  { src: '/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png', alt: 'PoliStock project team presenting' },
  { src: '/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png', alt: 'Elisyan Wealth Ventures project team presenting' },
];

const StudentsInAction = () => (
  <section className="w-full">
    <Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {photos.map((p) => (
          <div key={p.src} className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

export default StudentsInAction;
