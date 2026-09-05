// src/hooks/useScrollToTop.js — scroll to top on route change, honour #hash anchors
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToHash = (hash) => {
  const el = document.getElementById(hash.slice(1));
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }
  return false;
};

export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      if (scrollToHash(hash)) {
        return undefined;
      }
      // Lazy-loaded page may not have rendered the target yet — retry once.
      const timer = setTimeout(() => scrollToHash(hash), 150);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash]);
}
