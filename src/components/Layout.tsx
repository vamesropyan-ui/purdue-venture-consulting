import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <div className="geometric-bg">
        <div className="geometric-shape w-32 h-32 border-2 border-primary/20 rotate-45"></div>
        <div className="geometric-shape w-24 h-24 bg-primary/10 rounded-full"></div>
        <div className="geometric-shape w-20 h-20 border border-accent/10 transform rotate-12"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
