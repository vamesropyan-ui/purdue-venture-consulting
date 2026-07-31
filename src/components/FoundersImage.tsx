import React from 'react';

// Easy to replace: swap this component's contents with a single final
// "Meet Your Founders" graphic when it's ready.
const founders = [
  { name: 'Pedro Garcia Farias', image: '/lovable-uploads/pedro_walc2.JPG' },
  { name: 'Mehdi El Mansar', image: '/lovable-uploads/mehdi_walc1.JPG' },
  { name: 'Nikhai Tonwar', image: '/lovable-uploads/nikhai_walc2.JPG' },
  { name: 'Hassan Berbich', image: '/lovable-uploads/hassan_walc1.JPG' },
];

const FoundersImage = () => (
  <figure className="rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-sm p-4 shadow-lg">
    <div className="grid grid-cols-2 gap-3">
      {founders.map((f) => (
        <img
          key={f.name}
          src={f.image}
          alt={`${f.name}, co-founder of Purdue Venture Consulting`}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-xl"
          style={{ objectPosition: 'center 20%' }}
        />
      ))}
    </div>
    <figcaption className="mt-4 text-center text-xs font-inter uppercase tracking-[0.2em] text-accent">
      Meet Your Founders
    </figcaption>
  </figure>
);

export default FoundersImage;
