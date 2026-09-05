// src/layout/NavBar.jsx — floating pill navigation with mobile menu
import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { useMenu } from '@context/MenuContext';
import { NAV_LINKS, ROUTES } from '@data/navigation';
import { COMPANY } from '@data/company';
import './styles/NavBar.css';

const linkClass = ({ isActive }) => (isActive ? 'on' : '');

export default function NavBar() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const { pathname } = useLocation();

  // Close the mobile menu after navigating or on Escape.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen, closeMenu]);

  return (
    <nav className={`nav${isMenuOpen ? ' nav--open' : ''}`} aria-label="Primary">
      <div className="nav-inner">
        <div className="nav-brand">
          <Link to={ROUTES.HOME} aria-label={`${COMPANY.name} home`}>
            <img className="logo-mark" src={`${import.meta.env.BASE_URL}assets/images/logo-placeholder.svg`} alt={COMPANY.name} />
          </Link>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-cta">
          <Button to={ROUTES.SERVICES} variant="ghost" size="sm" iconLeft="eye" className="nav-cta__secondary">
            What we do
          </Button>
          <Button to={ROUTES.CONTACT} variant="primary" size="sm" iconRight="arrow">
            Start a project
          </Button>
        </div>

        <button
          type="button"
          className="nav-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size={20} stroke={1.8} />
        </button>
      </div>

      <div className="nav-menu" id="mobile-menu" hidden={!isMenuOpen}>
        <div className="nav-menu__links">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-menu__cta">
          <Button to={ROUTES.SERVICES} variant="ghost" iconLeft="eye">What we do</Button>
          <Button to={ROUTES.CONTACT} variant="primary" iconRight="arrow">Start a project</Button>
        </div>
      </div>

      <button
        type="button"
        className="nav-backdrop"
        hidden={!isMenuOpen}
        onClick={closeMenu}
        aria-label="Close menu"
        tabIndex={-1}
      />
    </nav>
  );
}
