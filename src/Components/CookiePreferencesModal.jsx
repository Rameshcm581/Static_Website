// src/Components/CookiePreferencesModal.jsx — Compact Minimalist Cookie Preferences Modal
import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@components/Icon';
import { COMPANY } from '@data/company';

const STORAGE_KEY = 'atmytech_cookie_preferences';

export default function CookiePreferencesModal({ isOpen, onClose }) {
  const [preferences, setPreferences] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return {
      essential: true,
      analytics: true,
      functional: true,
    };
  });

  const [savedToast, setSavedToast] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleToggle = (key) => {
    if (key === 'essential') {
      return;
    }
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSavedToast(false);
  };

  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      localStorage.setItem('atmytech_cookie_consent', 'custom');
      setSavedToast(true);
      setTimeout(() => {
        setSavedToast(false);
        onClose();
      }, 900);
    } catch {
      onClose();
    }
  };

  const handleAcceptAll = () => {
    const allOn = { essential: true, analytics: true, functional: true };
    setPreferences(allOn);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allOn));
      localStorage.setItem('atmytech_cookie_consent', 'accepted_all');
      setSavedToast(true);
      setTimeout(() => {
        setSavedToast(false);
        onClose();
      }, 900);
    } catch {
      onClose();
    }
  };

  return (
    <div className="cookie-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cookie-modal-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cookie-modal-close" onClick={onClose} aria-label="Close modal">
          <Icon name="close" size={16} />
        </button>

        <div className="cookie-modal-header">
          <h4>Manage Cookie Preferences</h4>
          <p>Control how {COMPANY.name} collects and uses cookie data during your visits.</p>
        </div>

        <div className="cookie-modal-body">
          {/* Card 1: Essential Cookies */}
          <div className="cookie-card">
            <div className="cookie-card__top">
              <div className="cookie-card__title-group">
                <h5>Essential Cookies</h5>
                <span className="cookie-card__badge-required">Always Active</span>
              </div>
              <label className="switch" aria-label="Essential cookies toggle">
                <input type="checkbox" checked disabled />
                <span className="slider"></span>
              </label>
            </div>
            <p className="cookie-card__desc">
              Necessary for the website to function securely, enable navigation, and process security tokens. Cannot be switched off.
            </p>
          </div>

          {/* Card 2: Analytics & Performance Cookies */}
          <div className="cookie-card">
            <div className="cookie-card__top">
              <div className="cookie-card__title-group">
                <h5>Analytics & Performance Cookies</h5>
              </div>
              <label className="switch" aria-label="Analytics cookies toggle">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleToggle('analytics')}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="cookie-card__desc">
              Help us analyze site traffic, page load performance, and popular pages so we can continuously improve user experience.
            </p>
          </div>

          {/* Card 3: Functional & Preference Cookies */}
          <div className="cookie-card">
            <div className="cookie-card__top">
              <div className="cookie-card__title-group">
                <h5>Functional & Preference Cookies</h5>
              </div>
              <label className="switch" aria-label="Functional cookies toggle">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => handleToggle('functional')}
                />
                <span className="slider"></span>
              </label>
            </div>
            <p className="cookie-card__desc">
              Remember your settings, preferences, dark/light mode selections, and contact form inputs across sessions.
            </p>
          </div>
        </div>

        <div className="cookie-modal-footer">
          <div className="cookie-modal-footer__btns">
            <button type="button" className="cookie-btn-save" onClick={handleSave}>
              Save My Preferences
            </button>
            <button type="button" className="cookie-btn-reset" onClick={handleAcceptAll}>
              Accept All Cookies
            </button>
          </div>
          {savedToast && (
            <div className="cookie-modal-toast">
              ✓ Preferences saved
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

CookiePreferencesModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
