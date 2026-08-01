import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Lightbulb, LineChart, Compass, Sparkles } from 'lucide-react';

const NAVY_BAND = 'linear-gradient(160deg, hsl(216 55% 12%) 0%, hsl(215 60% 10%) 100%)';
const CREAM = 'linear-gradient(180deg, hsl(40 45% 98%) 0%, hsl(40 40% 96%) 100%)';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.3 } as const;

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

const fullBleed = 'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen';

const doing = [
  {
    icon: Rocket,
    title: 'Work with founders',
    body: "You're on a small team supporting a real startup, including a Y Combinator backed company, for the semester.",
  },
  {
    icon: Lightbulb,
    title: 'Solve open problems',
    body: 'Pricing, positioning, new markets, growth. The kind of question that has no answer key in the back of the book.',
  },
  {
    icon: LineChart,
    title: 'Make the call',
    body: "You research it, form a point of view, and present it to the people who'll actually act on it.",
  },
  {
    icon: Users,
    title: 'Learn from your team',
    body: 'Engineers, econ majors, designers, business students. Everyone brings a different angle to the same problem.',
  },
  {
    icon: Compass,
    title: 'Figure out what fits',
    body: 'Consulting, venture, product, startups. This is a low risk way to try the work before you commit a career to it.',
  },
  {
    icon: Sparkles,
    title: 'Get better, fast',
    body: 'Case prep, frameworks, and feedback from people who have done it, so you improve every few weeks.',
  },
];

const WhyJoin = () => {
  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="overflow-hidden">
      {/* 1 - Opening */}
      <div className={`${fullBleed} py-24 md:py-28`} style={{ background: CREAM }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="text-accent font-inter font-semibold tracking-[0.28em] uppercase text-xs mb-8">
              Why students join PVC
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-space-grotesk font-bold text-primary text-4xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight max-w-4xl">
              You already know the theory.
              <br className="hidden md:block" />{' '}
              <span className="text-accent">Here's where you use it.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted-foreground font-inter text-lg md:text-xl leading-relaxed max-w-2xl mt-10">
              PVC is a student team at Purdue that consults for real startups. You'll spend the
              semester on live problems with founders who are counting on your work, alongside people
              who are just as curious as you are.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-primary/80 font-inter text-base md:text-lg leading-relaxed max-w-2xl mt-5">
              No consulting experience required. Just curiosity and the willingness to figure things
              out.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* 2 - What you'll actually do */}
      <div className={`${fullBleed} bg-background py-24`}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <h3 className="font-space-grotesk font-bold text-primary text-3xl md:text-4xl tracking-tight max-w-2xl">
              What a semester actually looks like
            </h3>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-14">
            {doing.map((d, i) => (
              <FadeUp key={d.title} delay={(i % 3) * 0.1}>
                <div className="h-11 w-11 rounded-xl bg-accent/12 border border-accent/25 flex items-center justify-center mb-5">
                  <d.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h4 className="font-space-grotesk font-bold text-primary text-xl tracking-tight mb-2.5">
                  {d.title}
                </h4>
                <p className="font-inter text-muted-foreground text-[0.975rem] leading-relaxed">
                  {d.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* 3 - Dark accent band: numbers */}
      <div className={`${fullBleed} py-20 md:py-24`} style={{ background: NAVY_BAND }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <p className="font-space-grotesk font-bold text-white text-2xl md:text-3xl tracking-tight text-center max-w-2xl mx-auto leading-snug">
              Small team, real projects, and a lot of ground covered so far.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 mt-14">
            {[
              { value: '10+', label: 'Startups weve worked with' },
              { value: '7', label: 'Industries explored' },
              { value: '50+', label: 'Deliverables shipped' },
            ].map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1} className="text-center">
                <div className="font-space-grotesk font-bold text-accent text-5xl md:text-6xl tracking-tight">
                  {s.value}
                </div>
                <div className="font-inter text-slate-300 text-sm mt-3">{s.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* 4 - The people */}
      <div className={`${fullBleed} py-24`} style={{ background: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <h3 className="font-space-grotesk font-bold text-primary text-3xl md:text-5xl leading-[1.1] tracking-tight">
              The people you do it with matter as much as the work.
            </h3>
          </FadeUp>
          <FadeUp delay={0.12} className="space-y-5">
            <p className="font-inter text-muted-foreground text-lg leading-relaxed">
              PVC members come from engineering, business, econ, CS, and design. Different majors,
              same energy: people who'd rather build something than wait for permission.
            </p>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed">
              You'll leave with sharper judgment, work you're proud to talk about, and a group of
              friends who push you.
            </p>
            <p className="font-space-grotesk font-semibold text-primary text-lg">
              That's the part people tell us they didn't expect.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* 5 - CTA */}
      <div className={`${fullBleed} bg-background py-24`}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-space-grotesk font-bold text-primary text-4xl md:text-5xl tracking-tight leading-tight">
              Sound like your kind of semester?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-inter text-muted-foreground text-base md:text-lg mt-5">
              Applications open each fall. The application takes about 15 minutes.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <button
              onClick={scrollToApplication}
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent text-accent-foreground font-inter font-semibold px-8 py-4 text-base transition-all duration-300 hover:bg-accent/90 hover:-translate-y-0.5"
            >
              Start your application
            </button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
