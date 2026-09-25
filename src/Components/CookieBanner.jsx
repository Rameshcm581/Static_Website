// src/Components/CookieBanner.jsx — Compact Minimalist Cookie Banner & Preferences Modal Trigger
import { useState, useEffect } from 'react';
import CookiePreferencesModal from './CookiePreferencesModal';
import { COMPANY } from '@data/company';
import './styles/CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('atmytech_cookie_consent');
      if (!consent) {
        // Show banner after 1.5 seconds delay for natural feel
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVisible(false); // Hide banner once user saves preferences
  };

  return (
    <>
      {visible && (
        <div className="cookie-consent-banner" role="region" aria-label="Cookie Privacy Preferences">
          <h4>Cookie Settings & Privacy</h4>
          <p>
            {COMPANY.name} uses essential cookies to ensure secure site performance and optional analytics cookies to enhance your experience.
          </p>
          <div className="cookie-consent-banner__btns">
            <button type="button" className="cookie-consent-btn-accept" onClick={handleAcceptAll}>
              Accept All
            </button>
            <button type="button" className="cookie-consent-btn-essential" onClick={handleEssentialOnly}>
              Essential Only
            </button>
            <button type="button" className="cookie-consent-btn-manage" onClick={handleOpenModal}>
              Manage Preferences
            </button>
          </div>
        </div>
      )}

      <CookiePreferencesModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
