import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Frame from '@/components/editorial/Frame';
import Section from '@/components/editorial/Section';
import { HEAD_SIZE, ROW_TITLE, fadeUp } from '@/components/editorial/tokens';
import RevealText from '@/components/RevealText';

const FORM_URL = 'https://forms.cloud.microsoft/r/JCFPANQ1wu';

const whyJoin = [
  {
    label: 'Real client work',
    body: 'You consult for actual startups, including a Y Combinator company, not hypothetical cases.',
  },
  {
    label: 'Real training',
    body: 'Case prep, frameworks, and mentorship that prepare you for top consulting and venture firms.',
  },
  {
    label: 'Real network',
    body: 'Direct access to founders, VCs, and alumni across the startup ecosystem.',
  },
];

const process = [
  {
    n: '01',
    title: 'Online Application',
    body: 'A short written application covering your background, interests, and why PVC. About 15 minutes. No prior consulting experience required.',
  },
  {
    n: '02',
    title: 'Group Case Study',
    body: "Work through a real business problem alongside other candidates. We're evaluating how you think, structure ambiguity, and collaborate.",
  },
  {
    n: '03',
    title: 'Behavioral Interview',
    body: 'A one-on-one conversation about your experiences, motivation, and fit. A chance for us to get to know you and for you to get to know us.',
  },
];

const lookFor = [
  'Sharp, structured thinking over polished résumés.',
  'Genuine curiosity about startups and venture.',
  'Ownership. You follow through on what you start.',
  'Coachability and a team-first attitude.',
  'All majors welcome. We value diverse perspectives.',
];

const faqs = [
  {
    q: 'Do I need a business major?',
    a: 'No. Our consultants come from engineering, business, computer science, and more. What matters is how you think.',
  },
  {
    q: "What's the time commitment?",
    a: 'Plan for roughly 6 to 10 hours per week during an active project, including team meetings.',
  },
  {
    q: 'Do I need consulting experience?',
    a: "Not at all. We train every member in the frameworks and skills you'll use on real client work.",
  },
  {
    q: 'What will I actually work on?',
    a: 'Live engagements for real startups: market research, competitive strategy, go-to-market, product, and more.',
  },
];

const galleryPhotos = [
  '/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png',
  '/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png',
  '/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png',
];

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`font-inter text-[0.7rem] uppercase tracking-[0.22em] text-accent ${className}`}>
    {children}
  </div>
);

const NumberedRow: React.FC<{
  n: string;
  title: string;
  body: string;
  delay?: number;
}> = ({ n, title, body, delay = 0 }) => (
  <motion.div
    {...fadeUp(delay)}
    className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_2fr] gap-6 md:gap-10 items-baseline py-6 md:py-8 border-t border-border"
  >
    <div className="font-space-grotesk text-sm md:text-base text-accent tabular-nums">
      {n}
    </div>
    <h3
      className="font-space-grotesk font-semibold text-foreground leading-tight"
      style={{ fontSize: ROW_TITLE }}
    >
      {title}
    </h3>
    <p className="col-span-2 md:col-span-1 font-inter text-[0.98rem] leading-relaxed text-muted-foreground">
      {body}
    </p>
  </motion.div>
);

const Apply: React.FC = () => {
  return (
    <div className="bg-background">
      <Frame>
        {/* HEADER */}
        <Section bordered={false} className="pt-16 md:pt-24 pb-14 md:pb-20">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Apply</Eyebrow>
          </motion.div>
          <div className="mt-4 md:mt-6 max-w-4xl">
            <RevealText
              as="h1"
              text="Do real work for real startups."
              accentWords={['startups.']}
              className="font-space-grotesk font-semibold leading-[1.05] tracking-tight text-foreground"
            />
            <style>{`h1 { font-size: ${HEAD_SIZE}; }`}</style>
          </div>
          <motion.p
            {...fadeUp(0.15)}
            className="mt-6 md:mt-8 max-w-2xl font-inter text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            We select one cohort each fall. Applications open August 17 and close September 4.
          </motion.p>
        </Section>

        {/* MAIN PHOTO */}
        <Section className="p-0" bordered>
          <motion.div {...fadeUp(0)} className="overflow-hidden">
            <img
              src="/lovable-uploads/504d70be-bef1-4524-bcd3-328680f0bc66.png"
              alt="PVC members at work"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </motion.div>
        </Section>

        {/* WHY JOIN */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Why Join PVC</Eyebrow>
          </motion.div>
          <div className="mt-8 md:mt-12">
            {whyJoin.map((r, i) => (
              <NumberedRow
                key={r.label}
                n={String(i + 1).padStart(2, '0')}
                title={r.label}
                body={r.body}
                delay={0.05 + i * 0.08}
              />
            ))}
            <div className="border-t border-border" />
          </div>
        </Section>

        {/* RECRUITMENT TIMELINE */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Recruitment</Eyebrow>
          </motion.div>
          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 max-w-2xl font-inter text-muted-foreground"
          >
            One selective cohort each fall. Here is when and how it runs.
          </motion.p>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-border">
            <motion.div
              {...fadeUp(0.1)}
              className="py-8 md:py-10 md:pr-10 md:border-r border-border"
            >
              <Eyebrow className="text-muted-foreground">Applications open</Eyebrow>
              <div
                className="mt-3 font-space-grotesk font-semibold text-foreground leading-none"
                style={{ fontSize: HEAD_SIZE }}
              >
                August 17
              </div>
            </motion.div>
            <motion.div
              {...fadeUp(0.2)}
              className="py-8 md:py-10 md:pl-10 border-t md:border-t-0 border-border"
            >
              <Eyebrow className="text-muted-foreground">Applications close</Eyebrow>
              <div
                className="mt-3 font-space-grotesk font-semibold text-foreground leading-none"
                style={{ fontSize: HEAD_SIZE }}
              >
                September 4
              </div>
            </motion.div>
          </div>

          <div className="mt-14 md:mt-20">
            <Eyebrow>Process</Eyebrow>
            <div className="mt-6">
              {process.map((s, i) => (
                <NumberedRow
                  key={s.n}
                  n={s.n}
                  title={s.title}
                  body={s.body}
                  delay={0.05 + i * 0.08}
                />
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </Section>

        {/* WHAT WE LOOK FOR */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>What We Look For</Eyebrow>
          </motion.div>
          <ul className="mt-8 md:mt-12 border-t border-border">
            {lookFor.map((item, i) => (
              <motion.li
                key={item}
                {...fadeUp(0.05 + i * 0.06)}
                className="py-5 md:py-6 border-b border-border font-space-grotesk text-lg md:text-xl text-foreground"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </Section>

        {/* FAQ */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>FAQ</Eyebrow>
          </motion.div>
          <div className="mt-8 md:mt-12 border-t border-border">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                {...fadeUp(0.05 + i * 0.06)}
                className="group border-b border-border py-5 md:py-6"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <span className="font-space-grotesk font-semibold text-foreground text-lg md:text-xl leading-snug">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 font-inter text-accent transition-transform duration-300 group-open:rotate-45 text-2xl leading-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl font-inter text-[0.98rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </motion.details>
            ))}
          </div>
        </Section>

        {/* STUDENTS IN ACTION */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Life at PVC</Eyebrow>
          </motion.div>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {galleryPhotos.map((src, i) => (
              <motion.div
                key={src}
                {...fadeUp(0.05 + i * 0.08)}
                className="overflow-hidden"
              >
                <img
                  src={src}
                  alt="PVC members"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CLOSING / CTA */}
        <Section className="py-20 md:py-28">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Apply</Eyebrow>
          </motion.div>
          <div className="mt-6 max-w-3xl">
            <RevealText
              as="h2"
              text="Ready to apply?"
              accentWords={['apply?']}
              className="font-space-grotesk font-semibold leading-[1.05] tracking-tight text-foreground"
            />
            <style>{`h2 { font-size: ${HEAD_SIZE}; }`}</style>
          </div>
          <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-inter text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start Application
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="font-inter text-sm text-muted-foreground">
              Applications open Aug 17, close Sept 4.
            </span>
          </motion.div>
        </Section>

        <Section bordered className="py-12"><div /></Section>
      </Frame>
    </div>
  );
};

export default Apply;
