import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import PageTransition from './PageTransition';
import SmoothScroll from './SmoothScroll';
import 'lenis/dist/lenis.css';

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden flex flex-col">
      <AnimatedBackground />
      <PageTransition />
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
