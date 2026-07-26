import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import Frame from '@/components/editorial/Frame';
import Section from '@/components/editorial/Section';
import { HEAD_SIZE, ROW_TITLE, fadeUp } from '@/components/editorial/tokens';
import RevealText from './RevealText';
import samPaulAsset from '@/assets/sam-paul.jpg.asset.json';

/* ---------- Data ---------- */

const leadership = [
  {
    name: 'Victoria Mesropyan',
    position: 'President',
    major: 'Integrated Business & Engineering',
    bio: "Victoria leads PVC's strategy, operations, and client partnerships. She has consulted for venture-backed startups including Captain (Y Combinator–backed), driving market strategy and growth.",
    linkedin: 'https://www.linkedin.com/in/victoria-mesropyan/',
    image: '/victoria-mesropyan.jpg',
    initials: 'VM',
  },
  {
    name: 'Sam Paul',
    position: 'Vice President',
    major: 'Industrial Engineering & Integrated Business',
    bio: "Sam oversees PVC's consulting projects and delivery quality. He has led engagements for startups including Zuri Technologies and BeWealther across market strategy, business modeling, and product.",
    linkedin: 'https://www.linkedin.com/in/samuelpaul31/',
    image: samPaulAsset.url,
    initials: 'SP',
  },
];

const executiveBoard = [
  { name: 'Siddhant Haralkar', position: 'Director of Operations', initials: 'SH' },
  { name: 'Shariq Kapadia', position: 'Director of Finance', initials: 'SK' },
  { name: 'Adrian Valdez', position: 'Director of External Relations', initials: 'AV' },
  { name: 'Jordan Hanford', position: 'Director of Venture Operations', initials: 'JH' },
  { name: 'Letizia Echevarria', position: 'Director of Talent', initials: 'LE' },
  { name: 'Noah Brucculeri', position: 'Director of Growth', initials: 'NB' },
];

const foundingTeam = [
  {
    name: 'Pedro Garcia Farias',
    major: 'Industrial Engineering',
    linkedin: 'https://www.linkedin.com/in/pgarciaf/',
    image: '/lovable-uploads/pedro_walc2.JPG',
  },
  {
    name: 'Mehdi El Mansar',
    major: 'Aerospace Engineering',
    linkedin: 'https://www.linkedin.com/in/mehdi-el-mansar/',
    image: '/lovable-uploads/mehdi_walc1.JPG',
  },
  {
    name: 'Nikhai Tonwar',
    major: 'Industrial Engineering',
    linkedin: 'https://www.linkedin.com/in/nikhai-tonwar-a897a3294/',
    image: '/lovable-uploads/nikhai_walc2.JPG',
  },
  {
    name: 'Hassan Berbich',
    major: 'Industrial Engineering',
    linkedin: 'https://www.linkedin.com/in/hassan-berbich/',
    image: '/lovable-uploads/hassan_walc1.JPG',
  },
];

const advisoryBoard = [
  {
    name: 'Mike Iem',
    position: 'Owner / President',
    company: 'The Ziem Group Inc',
    linkedin: 'https://www.linkedin.com/in/mikeiem/',
    image: '/lovable-uploads/mike_iem.jpeg',
  },
  {
    name: 'Tim Zhou',
    position: 'Data Storage Sales',
    company: 'IBM',
    linkedin: 'https://www.linkedin.com/in/junshengzhou/',
    image: '/lovable-uploads/tim_zhou.jpeg',
  },
  {
    name: 'Lara Lubinsky',
    position: 'Supply Chain Analyst',
    company: 'Medline Industries',
    linkedin: 'https://www.linkedin.com/in/lara-lubinsky-71827922a/',
    image: '/lovable-uploads/lara_lubinsky.jpeg',
  },
  {
    name: 'Mert Kumluca',
    position: 'Advisor',
    company: '',
    linkedin: '#',
    image: '/lovable-uploads/mert_kumluca.jpeg',
  },
];

/* ---------- Shared bits ---------- */

const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div
    className={`font-inter text-[0.7rem] uppercase tracking-[0.22em] text-accent ${className}`}
  >
    {children}
  </div>
);

const Avatar: React.FC<{
  src?: string;
  alt: string;
  initials?: string;
  size?: number;
  square?: boolean;
}> = ({ src, alt, initials, size = 96, square = false }) => {
  const shape = square ? 'rounded-md' : 'rounded-full';
  return (
    <div
      className={`overflow-hidden ${shape} bg-secondary flex items-center justify-center`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
      ) : (
        <span
          className="font-space-grotesk font-semibold text-primary"
          style={{ fontSize: size * 0.36 }}
        >
          {initials}
        </span>
      )}
    </div>
  );
};

/* ---------- Page ---------- */

const Team: React.FC = () => {
  return (
    <div className="bg-background">
      <Frame>
        {/* HEADER */}
        <Section bordered={false} className="pt-16 md:pt-24 pb-16 md:pb-20">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Team</Eyebrow>
          </motion.div>
          <div className="mt-4 md:mt-6 max-w-4xl">
            <RevealText
              as="h1"
              text="The people behind the work."
              accentWords={['work.']}
              className="font-space-grotesk font-semibold leading-[1.05] tracking-tight text-foreground"
            />
            <style>{`#team-head h1 { font-size: ${HEAD_SIZE}; }`}</style>
          </div>
          <motion.p
            {...fadeUp(0.15)}
            className="mt-6 md:mt-8 max-w-2xl font-inter text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Students, founders, and advisors building Purdue Venture Consulting into a
            place where real strategy work gets done.
          </motion.p>
        </Section>

        {/* LEADERSHIP */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Leadership</Eyebrow>
          </motion.div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
            {leadership.map((m, i) => (
              <motion.div key={m.name} {...fadeUp(0.1 + i * 0.1)}>
                <div className="flex items-start gap-6">
                  <Avatar src={m.image} alt={m.name} initials={m.initials} size={112} />
                  <div className="min-w-0">
                    <Eyebrow className="text-accent">{m.position}</Eyebrow>
                    <h3
                      className="mt-2 font-space-grotesk font-semibold text-foreground leading-tight"
                      style={{ fontSize: ROW_TITLE }}
                    >
                      {m.name}
                    </h3>
                    <p className="mt-1 font-inter text-sm text-muted-foreground">
                      {m.major}
                    </p>
                  </div>
                </div>
                <p className="mt-6 max-w-xl font-inter text-[0.98rem] leading-relaxed text-foreground/85">
                  {m.bio}
                </p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-inter text-sm text-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="underline underline-offset-4 decoration-border">
                    LinkedIn
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* EXECUTIVE BOARD */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Executive Board</Eyebrow>
          </motion.div>

          <ul className="mt-10 md:mt-12 divide-y divide-border border-t border-b border-border">
            {executiveBoard.map((m, i) => (
              <motion.li
                key={m.name}
                {...fadeUp(0.05 + i * 0.06)}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-5 md:py-6"
              >
                <Avatar initials={m.initials} alt={m.name} size={56} />
                <div className="min-w-0">
                  <div className="font-space-grotesk font-semibold text-foreground text-lg md:text-xl leading-tight">
                    {m.name}
                  </div>
                </div>
                <div className="font-inter text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground text-right">
                  {m.position}
                </div>
              </motion.li>
            ))}
          </ul>
        </Section>

        {/* FOUNDING TEAM */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Founding Team</Eyebrow>
          </motion.div>

          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {foundingTeam.map((m, i) => (
              <motion.a
                key={m.name}
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                {...fadeUp(0.08 + i * 0.08)}
                className="group block"
              >
                <Avatar src={m.image} alt={m.name} size={112} />
                <div className="mt-4">
                  <div className="font-space-grotesk font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {m.name}
                  </div>
                  <div className="mt-1 font-inter text-xs md:text-sm text-muted-foreground">
                    {m.major}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* FACULTY ADVISOR */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Faculty Advisor</Eyebrow>
          </motion.div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">
            <motion.div {...fadeUp(0.1)}>
              <div className="overflow-hidden w-[180px] h-[220px] md:w-[220px] md:h-[260px]">
                <img
                  src="/lovable-uploads/lucky_cho.jpeg"
                  alt="Dr. Lucky Cho"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.18)} className="max-w-2xl">
              <h3
                className="font-space-grotesk font-semibold text-foreground leading-tight"
                style={{ fontSize: ROW_TITLE }}
              >
                Dr. Lucky Cho
              </h3>
              <p className="mt-1 font-inter text-sm text-muted-foreground">
                Edwardson School of Industrial Engineering
              </p>

              <div className="mt-5 space-y-2 font-inter text-sm text-foreground/85">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>cho568@purdue.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>315 N. Grant Street, Office 347</span>
                </div>
              </div>

              <p className="mt-6 font-inter text-[0.98rem] leading-relaxed text-foreground/85">
                With over 15 years of experience in strategic consulting and academic
                research, Dr. Lucky brings invaluable expertise to our club. His guidance
                bridges academic theory and real-world venture consulting practice,
                preparing members for successful careers in consulting.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* ADVISORY BOARD */}
        <Section className="py-16 md:py-24">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Advisory Board</Eyebrow>
          </motion.div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {advisoryBoard.map((m, i) => (
              <motion.a
                key={m.name}
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                {...fadeUp(0.08 + i * 0.08)}
                className="group block"
              >
                <Avatar src={m.image} alt={m.name} size={112} />
                <div className="mt-4">
                  <div className="font-space-grotesk font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {m.name}
                  </div>
                  <div className="mt-1 font-inter text-xs md:text-sm text-muted-foreground">
                    {m.position}
                    {m.company ? ` · ${m.company}` : ''}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* bottom spacer */}
        <Section bordered className="py-16"><div /></Section>
      </Frame>
    </div>
  );
};

export default Team;
