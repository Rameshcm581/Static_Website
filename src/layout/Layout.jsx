// src/layout/Layout.jsx — public site shell
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useMenu } from '@context/MenuContext';
import useScrollToTop from '@hooks/useScrollToTop';
import NavBar from './NavBar';
import Footer from './Footer';
import FloatingCta from './FloatingCta';

export default function Layout() {
  const { isMenuOpen } = useMenu();
  useScrollToTop();

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', isMenuOpen);
    return () => document.body.classList.remove('is-menu-open');
  }, [isMenuOpen]);

  return (
    <div className="site-shell">
      <NavBar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
