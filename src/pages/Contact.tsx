import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Frame from '@/components/editorial/Frame';
import Section from '@/components/editorial/Section';
import { HEAD_SIZE, fadeUp } from '@/components/editorial/tokens';
import RevealText from '@/components/RevealText';

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`font-inter text-[0.7rem] uppercase tracking-[0.22em] text-accent ${className}`}>
    {children}
  </div>
);

const rows: Array<{ label: string; value: string; href?: string; external?: boolean }> = [
  {
    label: 'Email',
    value: 'info@purdueventureconsulting.com',
    href: 'mailto:info@purdueventureconsulting.com',
  },
  { label: 'Location', value: 'West Lafayette, IN 47907' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/company/purdue-venture-consulting',
    href: 'https://www.linkedin.com/company/purdue-venture-consulting',
    external: true,
  },
];

const Contact: React.FC = () => (
  <div className="bg-background">
    <Frame>
      {/* HEADER */}
      <Section bordered={false} className="pt-16 md:pt-24 pb-14 md:pb-20">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>Contact</Eyebrow>
        </motion.div>
        <div className="mt-4 md:mt-6 max-w-4xl" style={{ fontSize: HEAD_SIZE }}>
          <RevealText
            as="h1"
            text="Let's talk."
            accentWords={['talk.']}
            className="font-space-grotesk font-semibold leading-[1.05] tracking-tight text-foreground"
          />
        </div>
        <motion.p
          {...fadeUp(0.15)}
          className="mt-6 md:mt-8 max-w-2xl font-inter text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Founders, partners, and prospective members, we'd love to hear from you.
        </motion.p>
      </Section>

      {/* DETAILS */}
      <Section className="py-16 md:py-24">
        <div className="border-t border-border">
          {rows.map((r, i) => {
            const inner = (
              <>
                <div className="font-inter text-xs md:text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  {r.label}
                </div>
                <div className="flex items-center justify-end gap-3 text-right">
                  <span className="font-space-grotesk text-lg md:text-2xl text-foreground group-hover:text-accent transition-colors">
                    {r.value}
                  </span>
                  {r.href && (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  )}
                </div>
              </>
            );
            const className =
              'group grid grid-cols-[auto_1fr] items-center gap-6 py-6 md:py-8 border-b border-border';
            return (
              <motion.div key={r.label} {...fadeUp(0.05 + i * 0.08)}>
                {r.href ? (
                  <a
                    href={r.href}
                    target={r.external ? '_blank' : undefined}
                    rel={r.external ? 'noreferrer' : undefined}
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section bordered className="py-12"><div /></Section>
    </Frame>
  </div>
);

export default Contact;
