// src/context/MenuContext.jsx — mobile navigation open/close state
/* eslint-disable react-refresh/only-export-components -- provider and hook ship together */
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const value = useMemo(
    () => ({ isMenuOpen, openMenu, closeMenu, toggleMenu }),
    [isMenuOpen, openMenu, closeMenu, toggleMenu]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error('useMenu must be used within MenuProvider');
  }
  return ctx;
};
