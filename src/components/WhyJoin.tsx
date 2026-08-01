import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const WhyJoin = () => {
  const vantaRef = useRef<HTMLElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0xeef2f9,
        color: 0x1e3a5f,
        points: 12,
        maxDistance: 21,
        spacing: 15,
        showDots: true,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-20 md:py-24"
      style={{ backgroundColor: 'hsl(214 40% 96%)' }}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <img
              src="/lovable-uploads/present_2.jpeg"
              alt="Purdue Venture Consulting students presenting"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="rounded-2xl bg-background/80 backdrop-blur-sm border border-border/60 shadow-md p-6 md:p-8">
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-foreground font-inter text-lg md:text-xl leading-relaxed">
              At Purdue Venture Consulting, we bring together students who are eager to challenge
              themselves, think differently, and learn by solving real business problems. By partnering
              with innovative startups, our members gain hands-on experience, develop practical skills,
              and build the confidence that comes from making a real impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoin;
