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
  <figure className="mx-auto max-w-xs rounded-2xl border border-primary/15 bg-card/70 backdrop-blur-sm p-3 shadow-lg">
    <div className="grid grid-cols-2 gap-2">
      {founders.map((f) => (
        <div key={f.name} className="flex flex-col items-center">
          <img
            src={f.image}
            alt={`${f.name}, co-founder of Purdue Venture Consulting`}
            loading="lazy"
            className="w-full aspect-square object-cover rounded-xl"
            style={{ objectPosition: 'center 20%' }}
          />
          <span className="mt-2 text-center text-sm font-medium text-primary font-inter">
            {f.name}
          </span>
        </div>
      ))}
    </div>
    <figcaption className="mt-4 text-center text-xs font-inter uppercase tracking-[0.2em] text-accent">
      Meet Your Founders
    </figcaption>
  </figure>
);

export default FoundersImage;
