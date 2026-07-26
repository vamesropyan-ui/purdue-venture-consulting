
import React from 'react';
import { Linkedin } from 'lucide-react';
import samPaulAsset from '@/assets/sam-paul.jpg.asset.json';





const leadership = [
  {
    name: "Victoria Mesropyan",
    position: "President",
    major: "Integrated Business & Engineering",
    bio: "Victoria leads PVC's strategy, operations, and client partnerships. She has consulted for venture-backed startups including Captain (Y Combinator–backed), driving market strategy and growth.",
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
    image: samPaulAsset.url,
    initials: "SP"
  }
];

const executiveBoard = [
  {
    name: "Siddhant Haralkar",
    position: "Director of Operations",
    initials: "SH",
    linkedin: "#"
  },
  {
    name: "Shariq Kapadia",
    position: "Director of Finance",
    initials: "SK",
    linkedin: "#"
  },
  {
    name: "Adrian Valdez",
    position: "Director of External Relations",
    initials: "AV",
    linkedin: "#"
  },
  {
    name: "Jordan Hanford",
    position: "Director of Venture Operations",
    initials: "JH",
    linkedin: "#"
  },
  {
    name: "Letizia Echevarria",
    position: "Director of Talent",
    initials: "LE",
    linkedin: "#"
  },
  {
    name: "Noah Brucculeri",
    position: "Director of Growth",
    initials: "NB",
    linkedin: "#"
  }
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
  <div className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-border w-full">
    {/* Front of Card */}
    <div className="group-hover:opacity-0 transition-opacity duration-300 p-5">
      <div className="text-center mb-4">
        <span className="text-[0.65rem] font-inter font-semibold text-primary uppercase tracking-wider bg-primary/20 px-2.5 py-0.5 rounded-full">
          {member.position}
        </span>
      </div>

      <div className="w-24 h-24 mx-auto mb-4 relative">
        <div className="w-full h-full rounded-full border-2 border-accent/40 bg-secondary flex items-center justify-center shadow-md">
          <span className="font-space-grotesk font-bold text-3xl text-primary">
            {member.initials}
          </span>
        </div>
      </div>

      <div className="text-center space-y-1">
        <h3 className="font-space-grotesk font-bold text-base text-foreground leading-tight">
          {member.name}
        </h3>
        <p className="text-primary font-inter font-semibold text-xs">
          {member.position}
        </p>
      </div>
    </div>

    {/* Back of Card */}
    <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-center">
      <div className="text-center space-y-3">
        <div className="w-20 h-20 mx-auto">
          <div className="w-full h-full rounded-full border-2 border-white/60 bg-white/10 flex items-center justify-center">
            <span className="font-space-grotesk font-bold text-2xl text-white">
              {member.initials}
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="font-space-grotesk font-bold text-base text-white">
            {member.name}
          </h3>
          <p className="text-white font-inter font-semibold text-xs">
            {member.position}
          </p>
        </div>

        <div className="w-10 h-px bg-white/50 mx-auto"></div>

        <a
          href={member.linkedin}
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
  <div className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-border w-full sm:w-64 lg:w-60 xl:w-64">
    {/* Front of Card */}
    <div className="group-hover:opacity-0 transition-opacity duration-300 p-6">
      <div className="text-center mb-3">
        <span className="text-xs font-inter font-semibold text-primary uppercase tracking-wider bg-primary/20 px-3 py-1 rounded-full">
          {member.position}
        </span>
      </div>

      <div className="w-36 h-36 mx-auto mb-4 relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-2xl border-2 border-primary/30 shadow-md"
          style={{ objectPosition: 'center 20%' }}
        />
      </div>

      <div className="text-center space-y-1">
        <h3 className="font-space-grotesk font-bold text-lg text-foreground leading-tight">
          {member.name}
        </h3>
        <p className="text-primary font-inter font-semibold text-sm">
          {member.major} • {member.year}
        </p>
      </div>
    </div>

    {/* Back of Card */}
    <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
      <div className="text-center space-y-3">
        <div className="w-20 h-20 mx-auto mb-2">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full border-2 border-accent"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>

        <div className="space-y-1">
          <h3 className="font-space-grotesk font-bold text-lg text-white">
            {member.name}
          </h3>
          <p className="text-white font-inter font-semibold text-sm">
            {member.position}
          </p>
          <p className="text-white font-inter text-xs opacity-80">
            {member.major} • {member.year}
          </p>
        </div>

        <div className="w-12 h-px bg-white/50 mx-auto"></div>

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

const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
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
