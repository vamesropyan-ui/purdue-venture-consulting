import React from 'react';
import { Linkedin } from 'lucide-react';





const leadership = [
  {
    name: "Victoria Mesropyan",
    position: "President",
    major: "Industrial Engineering",
    bio: "Victoria leads PVC's strategy, operations, and client partnerships. She has consulted for venture-backed startups including Captain (Y Combinator backed), driving market strategy and growth.",
    linkedin: "https://www.linkedin.com/in/victoria-mesropyan/",
    image: "/victoria-mesropyan.jpg",
    initials: "VM"
  },
  {
    name: "Sam Paul",
    position: "Vice President",
    major: "Industrial Engineering & Integrated Business",
    bio: "Sam oversees PVC's consulting projects and delivery quality. He has led engagements for startups including Zuri Technologies and BeWealther across market strategy, business modeling, and product.",
    linkedin: "https://www.linkedin.com/in/samuelpaul31/",
    image: '/team/sam-paul.jpg',
    initials: "SP"
  }
];

const executiveBoard = [
  {
    name: "Siddhant Haralkar",
    position: "Director of Operations",
    initials: "SH",
    linkedin: "https://www.linkedin.com/in/siddhant-haralkar",
    image: '/team/siddhant-haralkar.jpg',
    bio: "Sid is a Computer Engineering student with interests in technology, product strategy and consulting. He enjoys working on problems at the intersection of business and technology. Outside of school, he enjoys working out, playing sports, and listening to music."
  },
  {
    name: "Shariq Kapadia",
    position: "Director of Finance",
    initials: "SK",
    linkedin: "https://www.linkedin.com/in/shariq-kapadia/",
    image: '/team/shariq-kapadia.png',
    bio: "Shariq is a junior, pursuing a Bachelor's degree in Integrated Business and Engineering. With a passion for finance and consulting, he looks to grow his skills through related work experiences and student organizations. He is eager to apply his knowledge in a dynamic environment and continue expanding his professional skill set as he starts his career. In his free time, he enjoys playing basketball and golf."
  },
  {
    name: "Adrian Valdez",
    position: "Director of External Relations",
    initials: "AV",
    linkedin: "https://www.linkedin.com/in/adrian-valdez-7a8588243/",
    image: '/team/adrian-valdez.jpg',
    bio: "Adrian Valdez is a Finance student at Purdue University with experience in consulting, marketing, and growth strategy. He has helped clients generate tens of millions of views, build communities of millions of users, and contribute to campaigns that supported millions of dollars in funding. Adrian is passionate about combining creative strategy with data-driven thinking to help brands and startups grow."
  },
  {
    name: "Jordan Hanford",
    position: "Director of Venture Operations",
    initials: "JH",
    linkedin: "https://www.linkedin.com/in/jordan-hanford-5990a8327",
    image: '/team/jordan-hanford.jpg',
    bio: "Jordan is an Integrated Business and Engineering student at Purdue University with a focus on strategy, operations, and analytics. He enjoys applying structured thinking to complex challenges and collaborating with others to develop practical, data-informed solutions."
  },
  {
    name: "Letizia Echevarria",
    position: "Director of Talent",
    initials: "LE",
    linkedin: "https://www.linkedin.com/in/letiziaechevarria/",
    image: '/team/letizia-echevarria.png',
    major: "Industrial Engineering",
    bio: "Letizia is an Industrial Engineering student at Purdue with a passion for people operations, talent strategy, and building community. She leads PVC's recruitment and member development, working to bring together students who are eager to learn, collaborate, and make an impact for startups."
  },
  {
    name: "Noah Brucculeri",
    position: "Director of Growth",
    initials: "NB",
    linkedin: "https://www.linkedin.com/in/noah-brucculeri-303481330",
    image: '/team/noah-brucculeri.jpg',
    major: "Integrated Business and Engineering",
    bio: "Integrated Business & Engineering student and former Corporate Law Intern with experience in software development, finance, and leadership. Passionate about entrepreneurship and building innovative solutions."
  },
];

const foundingTeam = [
  {
    name: "Pedro Garcia Farias",
    position: "Co-Founder",
    major: "Industrial Engineering",
    year: "Junior",
    bio: "Former manufacturing engineering intern at Stellantis with expertise in business management, sales, and marketing.",
    linkedin: "https://www.linkedin.com/in/pgarciaf/",
    image: "/lovable-uploads/pedro_walc2.JPG"
  },
  {
    name: "Mehdi El Mansar",
    position: "Co-Founder",
    major: "Aerospace Engineering",
    year: "Junior",
    bio: "Aerospace engineering student with award-winning design experience and passion for mission-driven, sustainable innovation.",
    linkedin: "https://www.linkedin.com/in/mehdi-el-mansar/",
    image: "/lovable-uploads/mehdi_walc1.JPG"
  },
  {
    name: "Nikhai Tonwar",
    position: "Co-Founder",
    major: "Industrial Engineering",
    year: "Junior",
    bio: "Former Energy Engineering Intern at Trane Technologies with experience in data analysis, marketing, and business logistics.",
    linkedin: "https://www.linkedin.com/in/nikhai-tonwar-a897a3294/",
    image: "/lovable-uploads/nikhai_walc2.JPG"
  },
  {
    name: "Hassan Berbich",
    position: "Co-Founder",
    major: "Industrial Engineering",
    year: "Junior",
    bio: "Industrial engineering intern at Aramco with experience in research, teaching, and global supply chain innovation.",
    linkedin: "https://www.linkedin.com/in/hassan-berbich/",
    image: "/lovable-uploads/hassan_walc1.JPG"
  }
];

interface LeadershipMember {
  name: string;
  position: string;
  major: string;
  bio: string;
  linkedin: string;
  image?: string;
  initials: string;
}

interface ExecutiveMember {
  name: string;
  position: string;
  initials: string;
  linkedin: string;
  image?: string;
  bio?: string;
  major?: string;
}

interface FoundingMember {
  name: string;
  position: string;
  major: string;
  year: string;
  bio: string;
  linkedin: string;
  image: string;
}

const LeadershipCard = ({ member }: { member: LeadershipMember }) => (
  <div className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-border w-full sm:w-72 lg:w-80">
    {/* Front of Card */}
    <div className="group-hover:opacity-0 transition-opacity duration-300 p-6">
      <div className="text-center mb-4">
        <span className="text-xs font-inter font-semibold text-primary uppercase tracking-wider bg-primary/20 px-3 py-1 rounded-full">
          {member.position}
        </span>
      </div>

      <div className="w-36 h-36 mx-auto mb-5 relative">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full border-2 border-accent/40 shadow-md"
            style={{ objectPosition: 'center 20%' }}
          />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-accent/40 bg-secondary flex items-center justify-center shadow-md">
            <span className="font-space-grotesk font-bold text-4xl text-primary">
              {member.initials}
            </span>
          </div>
        )}
      </div>

      <div className="text-center space-y-1.5">
        <h3 className="font-space-grotesk font-bold text-xl text-foreground leading-tight">
          {member.name}
        </h3>
        <p className="text-primary font-inter font-semibold text-sm">
          {member.major}
        </p>
      </div>
    </div>


    {/* Back of Card */}
    <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
      <div className="text-center space-y-3">
        <div className="w-20 h-20 mx-auto">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full border-2 border-white/60"
              style={{ objectPosition: 'center 20%' }}
            />
          ) : (
            <div className="w-full h-full rounded-full border-2 border-white/60 bg-white/10 flex items-center justify-center">
              <span className="font-space-grotesk font-bold text-2xl text-white">
                {member.initials}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="font-space-grotesk font-bold text-lg text-white">
            {member.name}
          </h3>
          <p className="text-white font-inter font-semibold text-sm">
            {member.position}
          </p>
          <p className="text-white font-inter text-xs opacity-80">
            {member.major}
          </p>
        </div>

        <div className="w-10 h-px bg-white/50 mx-auto"></div>

        <p className="text-white text-xs font-inter leading-relaxed">
          {member.bio}
        </p>

        <a
          href={member.linkedin}
          className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 mt-2"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm font-inter font-medium">Connect</span>
        </a>
      </div>
    </div>
  </div>
);


const ExecutiveBoardCard = ({ member }: { member: ExecutiveMember }) => (
  <div className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-border w-full min-h-[340px]">
    {/* Front of Card */}
    <div className="group-hover:opacity-0 transition-opacity duration-300 p-5 h-full flex flex-col justify-center">
      <div className="text-center mb-4">
        <span className="text-[0.65rem] font-inter font-semibold text-primary uppercase tracking-wider bg-primary/20 px-2.5 py-0.5 rounded-full">
          {member.position}
        </span>
      </div>

      <div className="w-24 h-24 mx-auto mb-4 relative">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full border-2 border-accent/40 shadow-md"
            style={{ objectPosition: 'center 20%' }}
          />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-accent/40 bg-secondary flex items-center justify-center shadow-md">
            <span className="font-space-grotesk font-bold text-3xl text-primary">
              {member.initials}
            </span>
          </div>
        )}
      </div>

      <div className="text-center space-y-1">
        <h3 className="font-space-grotesk font-bold text-base text-foreground leading-tight">
          {member.name}
        </h3>
        <p className="text-primary font-inter font-semibold text-xs">
          {member.position}
        </p>
        {member.major && (
          <p className="text-muted-foreground font-inter text-xs">
            {member.major}
          </p>
        )}
      </div>
    </div>

    {/* Back of Card */}
    <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center overflow-y-auto">
      <div className="text-center space-y-3">
        <div className="w-20 h-20 mx-auto">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full border-2 border-white/60"
              style={{ objectPosition: 'center 20%' }}
            />
          ) : (
            <div className="w-full h-full rounded-full border-2 border-white/60 bg-white/10 flex items-center justify-center">
              <span className="font-space-grotesk font-bold text-2xl text-white">
                {member.initials}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="font-space-grotesk font-bold text-base text-white">
            {member.name}
          </h3>
          <p className="text-white font-inter font-semibold text-xs">
            {member.position}
          </p>
          {member.major && (
            <p className="text-white font-inter text-xs opacity-80">
              {member.major}
            </p>
          )}
        </div>

        <div className="w-10 h-px bg-white/50 mx-auto"></div>

        {member.bio && (
          <p className="text-white text-[11px] font-inter leading-snug">
            {member.bio}
          </p>
        )}

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 mt-1"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm font-inter font-medium">Connect</span>
        </a>
      </div>
    </div>
  </div>
);


const FoundingCard = ({ member }: { member: FoundingMember }) => (
  <div className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-border w-full sm:w-56 min-h-[380px]">
    {/* Front of Card */}
    <div className="group-hover:opacity-0 transition-opacity duration-300 p-5 h-full flex flex-col justify-center">
      <div className="text-center mb-3">
        <span className="text-[0.65rem] font-inter font-semibold text-primary uppercase tracking-wider bg-primary/20 px-2.5 py-0.5 rounded-full">
          {member.position}
        </span>
      </div>

      <div className="w-28 h-28 mx-auto mb-3 relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-2xl border-2 border-primary/30 shadow-md"
          style={{ objectPosition: 'center 20%' }}
        />
      </div>

      <div className="text-center space-y-1">
        <h3 className="font-space-grotesk font-bold text-base text-foreground leading-tight">
          {member.name}
        </h3>
        <p className="text-primary font-inter font-semibold text-xs">
          {member.major} • {member.year}
        </p>
      </div>
    </div>

    {/* Back of Card */}
    <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center overflow-y-auto">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full border-2 border-accent"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>

        <div className="space-y-0.5">
          <h3 className="font-space-grotesk font-bold text-base text-white leading-tight">
            {member.name}
          </h3>
          <p className="text-white font-inter font-semibold text-xs">
            {member.position}
          </p>
          <p className="text-white font-inter text-[11px] opacity-80">
            {member.major} • {member.year}
          </p>
        </div>

        <div className="w-10 h-px bg-white/50 mx-auto"></div>

        <p className="text-white text-[11px] font-inter leading-snug">
          {member.bio}
        </p>

        <a
          href={member.linkedin}
          className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 mt-1"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-xs font-inter font-medium">Connect</span>
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team" className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(180deg, hsl(214 44% 97%) 0%, hsl(215 40% 95%) 100%)' }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1440 1400" preserveAspectRatio="xMidYMid slice" fill="none">
          <g stroke="#2c405d" strokeWidth="1.4" opacity="0.14">
            <path d="M-40 40 Q 360 -15 720 40 T 1480 40" />
            <path d="M-40 125 Q 360 70 720 125 T 1480 125" />
            <path d="M-40 210 Q 360 155 720 210 T 1480 210" />
            <path d="M-40 295 Q 360 240 720 295 T 1480 295" />
            <path d="M-40 380 Q 360 325 720 380 T 1480 380" />
            <path d="M-40 465 Q 360 410 720 465 T 1480 465" />
            <path d="M-40 635 Q 360 580 720 635 T 1480 635" />
            <path d="M-40 720 Q 360 665 720 720 T 1480 720" />
            <path d="M-40 805 Q 360 750 720 805 T 1480 805" />
            <path d="M-40 890 Q 360 835 720 890 T 1480 890" />
            <path d="M-40 975 Q 360 920 720 975 T 1480 975" />
            <path d="M-40 1060 Q 360 1005 720 1060 T 1480 1060" />
            <path d="M-40 1145 Q 360 1090 720 1145 T 1480 1145" />
            <path d="M-40 1230 Q 360 1175 720 1230 T 1480 1230" />
            <path d="M-40 1315 Q 360 1260 720 1315 T 1480 1315" />
          </g>
          <path d="M-40 550 Q 360 495 720 550 T 1480 550" stroke="#c99a2e" strokeWidth="1.8" opacity="0.5" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Our <span className="text-accent">Team</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        {/* Tier 1 — Leadership */}
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto mb-20">
          {leadership.map((member, index) => (
            <LeadershipCard key={index} member={member} />
          ))}
        </div>

        {/* Tier 2 — Executive Board */}
        <div className="text-center mb-12">
          <h3 className="font-space-grotesk font-semibold text-2xl md:text-3xl text-primary">
            Executive <span className="text-accent">Board</span>
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {executiveBoard.map((member, index) => (
            <ExecutiveBoardCard key={index} member={member} />
          ))}
        </div>

        {/* Tier 3 — Founding Team */}
        <div className="text-center mb-12">
          <h3 className="font-space-grotesk font-semibold text-2xl md:text-3xl text-primary">
            Founding <span className="text-accent">Team</span>
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {foundingTeam.map((member, index) => (
            <FoundingCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
