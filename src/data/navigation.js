// src/data/navigation.js — route paths and primary navigation

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  MVP: '/services/mvp-development',
  CONSULTING: '/services/technology-consulting',
  CAREERS: '/careers',
  CONTACT: '/contact',
};

export const NAV_LINKS = [
  { label: 'Home', to: ROUTES.HOME, end: true },
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Services', to: ROUTES.SERVICES },
  { label: 'Careers', to: ROUTES.CAREERS },
  { label: 'Contact', to: ROUTES.CONTACT },
];
