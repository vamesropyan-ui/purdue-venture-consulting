import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', to: '/about' },
  { name: 'Our Work', to: '/work' },
  { name: 'Team', to: '/team' },
  { name: 'Apply', to: '/apply' },
  { name: 'Contact', to: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 font-inter font-medium text-[15px] whitespace-nowrap ${
      isActive ? 'text-accent' : 'text-slate-200 hover:text-white'
    }`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 shadow-xl backdrop-blur-md"
      style={{ background: 'linear-gradient(180deg, hsl(216 55% 13%) 0%, hsl(215 62% 9%) 100%)' }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[620px] h-[140px] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(ellipse, hsl(200 75% 48% / 0.55), transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/2912c4e7-9d2d-47db-95cc-d511a5ca659d.png"
              alt="Purdue Venture Consulting Logo"
              className="w-16 h-16 object-cover"
            />
            <div className="hidden lg:block font-space-grotesk font-bold text-lg text-white whitespace-nowrap">
              Purdue Venture Consulting
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block flex-shrink-0">
            <Button
              onClick={() => navigate('/apply')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-accent/20 hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
            >
              Apply Now
            </Button>
          </div>

          <button
            className="lg:hidden text-white flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={linkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/apply');
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 w-fit whitespace-nowrap"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
