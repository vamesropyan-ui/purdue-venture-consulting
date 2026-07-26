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
    `transition-colors duration-300 font-inter font-medium text-sm whitespace-nowrap ${
      isActive ? 'text-accent' : 'text-foreground hover:text-accent'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/2912c4e7-9d2d-47db-95cc-d511a5ca659d.png"
              alt="Purdue Venture Consulting Logo"
              className="w-16 h-16 object-cover"
            />
            <div className="hidden lg:block font-space-grotesk font-bold text-lg text-foreground whitespace-nowrap">
              Purdue Venture Consulting
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block flex-shrink-0">
            <Button
              onClick={() => navigate('/apply')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2 rounded-md transition-all duration-300 whitespace-nowrap flex-shrink-0"
            >
              Apply Now
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-md transition-all duration-300 w-fit whitespace-nowrap"
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
