import React from 'react';
import { motion } from 'framer-motion';
import Frame from '@/components/editorial/Frame';
import Section from '@/components/editorial/Section';
import { HEAD_SIZE, ROW_TITLE, METRIC_SIZE, fadeUp } from '@/components/editorial/tokens';
import RevealText from '@/components/RevealText';

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`font-inter text-[0.7rem] uppercase tracking-[0.22em] text-accent ${className}`}>
    {children}
  </div>
);

const values = [
  { n: '01', title: 'Excellence', body: 'We hold every deliverable to a professional standard, not a student one.' },
  { n: '02', title: 'Accessibility', body: 'Talent comes from every major and background. Curiosity and ownership matter most.' },
  { n: '03', title: 'Growth', body: 'We train, mentor, and stretch our members through real work, not busywork.' },
  { n: '04', title: 'Impact', body: 'Recommendations get shipped. Founders act on what we deliver.' },
];

const stats = [
  { n: '50+', label: 'Active Members' },
  { n: '10+', label: 'Startups Served' },
  { n: '4', label: 'Partner Organizations' },
];

const partners = [
  { name: 'Purdue Innovates', src: '/lovable-uploads/purdue_innovates_logo.jpeg' },
  { name: 'Anvil', src: '/lovable-uploads/purdue-anvil.png' },
  { name: 'JE USA', src: '/lovable-uploads/je_usa_logo.png' },
  { name: 'Purdue Founders', src: '/lovable-uploads/purdue_founders_logo.png' },
];

const About: React.FC = () => (
  <div className="bg-background">
    <Frame>
      {/* HEADER */}
      <Section bordered={false} className="pt-16 md:pt-24 pb-14 md:pb-20">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>About</Eyebrow>
        </motion.div>
        <div className="mt-4 md:mt-6 max-w-4xl" style={{ fontSize: HEAD_SIZE }}>
          <RevealText
            as="h1"
            text="Bridging Purdue talent and the startup world."
            accentWords={['world.']}
            className="font-space-grotesk font-semibold leading-[1.05] tracking-tight text-foreground"
          />
        </div>
        <motion.p
          {...fadeUp(0.15)}
          className="mt-6 md:mt-8 max-w-2xl font-inter text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          A student-led venture consulting group at Purdue University, working with real founders across the startup ecosystem.
        </motion.p>
      </Section>

      {/* MISSION */}
      <Section className="py-16 md:py-24">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Mission</Eyebrow>
        </motion.div>
        <div className="mt-8 md:mt-12 max-w-[62ch]">
          <motion.p
            {...fadeUp(0.1)}
            className="font-space-grotesk text-xl md:text-2xl leading-snug text-foreground"
          >
            Purdue Venture Consulting is a student-led organization that helps motivated students develop strategic thinking and connect with the startup ecosystem.
          </motion.p>
          <motion.p
            {...fadeUp(0.2)}
            className="mt-8 font-inter text-[1.02rem] leading-relaxed text-muted-foreground"
          >
            Our mission is to bridge the gap between academic excellence and real-world venture creation, giving members access to startup consulting, venture mentorship, and a network that extends well beyond campus.
          </motion.p>
        </div>
      </Section>

      {/* VALUES */}
      <Section className="py-16 md:py-24">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Values</Eyebrow>
        </motion.div>
        <div className="mt-8 md:mt-12">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              {...fadeUp(0.05 + i * 0.08)}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_2fr] gap-6 md:gap-10 items-baseline py-6 md:py-8 border-t border-border"
            >
              <div className="font-space-grotesk text-sm md:text-base text-accent tabular-nums">
                {v.n}
              </div>
              <h3
                className="font-space-grotesk font-semibold text-foreground leading-tight"
                style={{ fontSize: ROW_TITLE }}
              >
                {v.title}
              </h3>
              <p className="col-span-2 md:col-span-1 font-inter text-[0.98rem] leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </Section>

      {/* STATS */}
      <Section className="py-16 md:py-24">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>By the numbers</Eyebrow>
        </motion.div>
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.05 + i * 0.1)}
              className={`py-8 md:py-10 md:px-8 ${
                i > 0 ? 'border-t md:border-t-0 md:border-l border-border' : 'md:pr-8'
              }`}
            >
              <div
                className="font-space-grotesk font-semibold text-foreground leading-none"
                style={{ fontSize: METRIC_SIZE }}
              >
                {s.n}
              </div>
              <div className="mt-3 font-inter text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PARTNERS */}
      <Section className="py-16 md:py-24">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Partners</Eyebrow>
        </motion.div>
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp(0.05 + i * 0.08)}
              className="flex items-center justify-center h-20 md:h-24"
              title={p.name}
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-full max-w-full object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section bordered className="py-12"><div /></Section>
    </Frame>
  </div>
);

export default About;
