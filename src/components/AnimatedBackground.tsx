import React from 'react';

/**
 * Soft, drifting gradient blobs rendered behind page content.
 * Very low opacity so navy text stays crisp on white.
 * Motion is disabled when the user prefers reduced motion.
 */
const AnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="pvc-blob pvc-blob-1" />
      <div className="pvc-blob pvc-blob-2" />
      <div className="pvc-blob pvc-blob-3" />
      <div className="pvc-blob pvc-blob-4" />
    </div>
  );
};

export default AnimatedBackground;
