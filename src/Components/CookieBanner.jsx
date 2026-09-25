// src/Components/CookieBanner.jsx — Floating cookie consent notification banner
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@data/navigation';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('atmytech_cookie_consent');
      if (!consent) {
        // Show banner after 1.5 seconds delay for natural page load feel
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('atmytech_cookie_consent', 'accepted_all');
      localStorage.setItem('atmytech_cookie_preferences', JSON.stringify({
        essential: true,
        analytics: true,
        functional: true,
      }));
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem('atmytech_cookie_consent', 'essential_only');
      localStorage.setItem('atmytech_cookie_preferences', JSON.stringify({
        essential: true,
        analytics: false,
        functional: false,
      }));
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-consent-banner" role="region" aria-label="Cookie Consent Banner">
      <h4>We value your privacy 🍪</h4>
      <p>
        Atmytech Software Solutions uses essential cookies to make our site work. With your permission, we also use cookies to analyze performance and improve your experience.
      </p>
      <div className="cookie-consent-banner__btns">
        <button type="button" className="cookie-consent-btn-accept" onClick={handleAcceptAll}>
          Accept All
        </button>
        <button type="button" className="cookie-consent-btn-essential" onClick={handleEssentialOnly}>
          Essential Only
        </button>
      </div>
      <div>
        <Link to={ROUTES.COOKIES} className="cookie-consent-link" onClick={() => setVisible(false)}>
          Manage Preferences & Cookie Policy
        </Link>
      </div>
    </div>
  );
}
