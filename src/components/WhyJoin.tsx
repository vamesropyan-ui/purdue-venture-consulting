import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/lovable-uploads/mudlabs_present.jpeg', alt: 'MudLabs final presentation team' },
  { src: '/lovable-uploads/rounds_team_2026.png', alt: 'Rounds project team' },
  { src: '/lovable-uploads/kova_present_2.jpeg', alt: 'KOVA client introduction' },
  { src: '/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png', alt: 'Captain project team presenting' },
  { src: '/lovable-uploads/polistock_team_2026.png', alt: 'PoliStock project team' },
  { src: '/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png', alt: 'Elisyan Wealth Ventures team presenting' },
  { src: '/lovable-uploads/present_2.jpeg', alt: 'PVC team presenting to audience' },
  { src: '/lovable-uploads/Kova_present.jpeg', alt: 'KOVA final presentation' },
  { src: '/lovable-uploads/gaus_team_2026.png', alt: 'Gaus project team' },
  { src: '/lovable-uploads/zuri_team_2026.png', alt: 'Zuri Technologies project team' },
];

const PER_PAGE = 4;
const pageCount = Math.ceil(photos.length / PER_PAGE);

const WhyJoin = () => {
  const [page, setPage] = useState(0);
  const current = photos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ background: 'linear-gradient(180deg, hsl(214 42% 96%) 0%, hsl(215 38% 93%) 100%)' }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-[8%] w-[440px] h-[440px] rounded-full blur-3xl opacity-[0.14]" style={{ background: 'hsl(216 55% 30%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 right-[6%] w-[480px] h-[480px] rounded-full blur-3xl opacity-[0.12]" style={{ background: 'hsl(216 55% 30%)' }} />

      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" style={{ opacity: 0.6 }} viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        <g transform="translate(-24 -16) scale(1.06)">
          <g>
            <animateTransform attributeName="transform" type="translate" values="0 0; 18 -12; -12 10; 8 6; 0 0" keyTimes="0; 0.3; 0.6; 0.85; 1" dur="24s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1" />
            <g stroke="#13294b" strokeWidth="1" strokeOpacity="0.35">
              <line x1="80" y1="70" x2="240" y2="140" />
              <line x1="240" y1="140" x2="150" y2="300" />
              <line x1="240" y1="140" x2="380" y2="90" />
              <line x1="380" y1="90" x2="520" y2="180" />
              <line x1="330" y1="260" x2="520" y2="180" />
              <line x1="150" y1="300" x2="330" y2="260" />
              <line x1="520" y1="180" x2="650" y2="90" />
              <line x1="650" y1="90" x2="840" y2="160" />
              <line x1="700" y1="280" x2="840" y2="160" />
              <line x1="840" y1="160" x2="960" y2="90" />
              <line x1="840" y1="160" x2="1080" y2="220" />
              <line x1="960" y1="90" x2="1150" y2="110" />
              <line x1="1080" y1="220" x2="1150" y2="110" />
              <line x1="520" y1="180" x2="600" y2="250" />
              <line x1="600" y1="250" x2="700" y2="280" />
            </g>
            <g fill="#13294b">
              <circle cx="80" cy="70" r="4"><animate attributeName="opacity" values="1;0.4;1" dur="5s" repeatCount="indefinite" /></circle>
              <circle cx="150" cy="300" r="4" />
              <circle cx="380" cy="90" r="4"><animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite" /></circle>
              <circle cx="650" cy="90" r="4"><animate attributeName="opacity" values="1;0.5;1" dur="7s" repeatCount="indefinite" /></circle>
              <circle cx="700" cy="280" r="4" />
              <circle cx="960" cy="90" r="4" />
              <circle cx="1150" cy="110" r="4" />
              <circle cx="600" cy="250" r="3.5" />
            </g>
            <g fill="#c9a24a">
              <circle cx="240" cy="140" r="5"><animate attributeName="r" values="5;7;5" dur="3.5s" repeatCount="indefinite" /></circle>
              <circle cx="520" cy="180" r="5"><animate attributeName="r" values="5;7;5" dur="4s" repeatCount="indefinite" /></circle>
              <circle cx="840" cy="160" r="5"><animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" /></circle>
              <circle cx="1080" cy="220" r="5"><animate attributeName="r" values="5;6.5;5" dur="4.5s" repeatCount="indefinite" /></circle>
            </g>
          </g>
        </g>
      </svg>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
        >
          <div>
            <motion.div key={page} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="grid grid-cols-2 gap-3 md:gap-4">
              {current.map((p) => (
                <div key={p.src} className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm bg-muted">
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
            <div className="flex items-center justify-center gap-4 mt-5">
              <button onClick={prev} aria-label="Previous photos" className="h-9 w-9 rounded-full border border-primary/25 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <span key={i} className={`h-2 w-2 rounded-full transition-colors ${i === page ? 'bg-accent' : 'bg-primary/25'}`} />
                ))}
              </div>
              <button onClick={next} aria-label="Next photos" className="h-9 w-9 rounded-full border border-primary/25 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
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
