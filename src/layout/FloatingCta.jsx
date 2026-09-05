// src/layout/FloatingCta.jsx — "Start a project" pill that appears mid-scroll
import { useLocation } from 'react-router-dom';
import Button from '@components/Button';
import useScrollVisibility from '@hooks/useScrollVisibility';
import { useMenu } from '@context/MenuContext';
import { ROUTES } from '@data/navigation';
import './styles/FloatingCta.css';

export default function FloatingCta() {
  const { pathname } = useLocation();
  const { isMenuOpen } = useMenu();
  const visible = useScrollVisibility({ after: 1200, beforeEnd: 1400 });

  if (pathname === ROUTES.CONTACT) {
    return null;
  }

  const show = visible && !isMenuOpen;

  return (
    <Button
      to={ROUTES.CONTACT}
      variant="accent"
      iconLeft="rocket"
      className={`float-cta${show ? ' show' : ''}`}
    >
      Start a project
    </Button>
  );
}
