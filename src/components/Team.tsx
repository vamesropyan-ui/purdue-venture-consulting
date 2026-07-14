
import React from 'react';
import { Linkedin } from 'lucide-react';
import professionalPlaceholder from '@/assets/professional-placeholder.png';

const Team = () => {
  const teamMembers = [
    {
      name: "Pedro Garcia Farias",
      position: "Co-Founder",
      major: "Industrial Engineering",
      year: "Junior",
      bio: "Former manufacturing engineering intern at Stellantis with expertise in business management, sales, and marketing.",
      linkedin: "https://www.linkedin.com/in/pgarciaf/",
      image: professionalPlaceholder
    },
    {
      name: "Mehdi El Mansar",
      position: "Co-Founder",
      major: "Aerospace Engineering",
      year: "Junior", 
      bio: "Aerospace engineering student with award-winning design experience and passion for mission-driven, sustainable innovation.",
      linkedin: "https://www.linkedin.com/in/mehdi-el-mansar/",
      image: professionalPlaceholder
    },
    {
      name: "Nikhai Tonwar",
      position: "Co-Founder",
      major: "Industrial Engineering",
      year: "Junior",
      bio: "Former Energy Engineering Intern at Trane Technologies with experience in data analysis, marketing, and business logistics.",
      linkedin: "https://www.linkedin.com/in/nikhai-tonwar-a897a3294/",
      image: professionalPlaceholder
    },
    {
      name: "Hassan Berbich",
      position: "Co-Founder",
      major: "Industrial Engineering",
      year: "Junior",
      bio: "Industrial engineering intern at Aramco with experience in research, teaching, and global supply chain innovation.",
      linkedin: "https://www.linkedin.com/in/hassan-berbich/",
      image: professionalPlaceholder
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-primary">
            Our <span className="text-accent">Team</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground text-lg max-w-2xl mx-auto font-inter">
            Meet the exceptional leaders driving innovation and excellence at Purdue Venture Consulting. 
            Our executive board brings diverse expertise and unwavering commitment to success.
          </p>
        </div>

        {/* Flexible grid that centers items regardless of count */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-border w-full sm:w-80 lg:w-72 xl:w-80"
            >
              {/* Front of Card */}
              <div className="group-hover:opacity-0 transition-opacity duration-300 p-8">
                <div className="text-center mb-4">
                  <span className="text-xs font-inter font-semibold text-primary uppercase tracking-wider bg-primary/20 px-3 py-1 rounded-full">
                    {member.position}
                  </span>
                </div>
                
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl border-2 border-primary/30 shadow-md"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-space-grotesk font-bold text-xl text-foreground leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-primary font-inter font-semibold text-sm">
                    {member.major} • {member.year}
                  </p>
                </div>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-2 border-accent"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-space-grotesk font-bold text-xl text-white">
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
                  
                  <p className="text-white text-sm font-inter leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300 mt-4"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-inter font-medium">Connect</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
