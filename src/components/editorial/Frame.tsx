import React from 'react';

/** Centered ~1300px frame with hairline left/right edges and an interior
 *  vertical rule ~4.5rem from the left. Shared across editorial pages. */
const Frame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`relative mx-auto w-full max-w-[1300px] border-x border-border ${className}`}>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 bottom-0 hidden md:block border-l border-border"
      style={{ left: '4.5rem' }}
    />
    {children}
  </div>
);

export default Frame;
