import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

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
      isActive ? 'text-accent' : 'text-foreground hover:text-primary'
    }`;

  const WorkWithUsButton = ({ onClick, className = '' }: { onClick?: () => void; className?: string }) => (
    <button
      onClick={onClick ?? (() => navigate('/apply'))}
      className={`group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-1.5 pr-5 py-1.5 font-inter font-semibold text-sm whitespace-nowrap transition-all duration-300 hover:bg-primary/90 hover:shadow-md ${className}`}
    >
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-accent text-accent-foreground text-base leading-none font-bold">+</span>
      <span>Work With Us</span>
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/2912c4e7-9d2d-47db-95cc-d511a5ca659d.png"
              alt="Purdue Venture Consulting Logo"
              className="w-14 h-14 object-cover"
            />
            <div className="hidden lg:block font-space-grotesk font-extrabold text-lg text-foreground tracking-tight whitespace-nowrap">
              Purdue Venture Consulting
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block flex-shrink-0">
            <WorkWithUsButton />
          </div>

          <button
            className="lg:hidden text-primary flex-shrink-0"
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
              <WorkWithUsButton
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/apply');
                }}
                className="w-fit"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
