// src/Legal/components/CookiePreferencesManager.jsx — Interactive cookie consent manager component
import { useState } from 'react';

const STORAGE_KEY = 'atmytech_cookie_preferences';

export default function CookiePreferencesManager() {
  const [preferences, setPreferences] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback if localStorage is restricted
    }
    return {
      essential: true, // Always true and locked
      analytics: true,
      functional: true,
    };
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    if (key === 'essential') {
      return;
    }
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      localStorage.setItem('atmytech_cookie_consent', 'custom');
      setSaved(true);
      setTimeout(() => setSaved(false), 4000);
    } catch {
      // Ignore write errors
    }
  };

  const handleAcceptAll = () => {
    const allOn = { essential: true, analytics: true, functional: true };
    setPreferences(allOn);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allOn));
      localStorage.setItem('atmytech_cookie_consent', 'accepted_all');
      setSaved(true);
      setTimeout(() => setSaved(false), 4000);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="cookie-manager" id="manage-preferences">
      <div className="cookie-manager__header">
        <h4>Manage Cookie Preferences</h4>
        <p>Control how Atmytech Software Solutions collects and uses cookie data during your visits.</p>
      </div>

      <div className="cookie-manager__item">
        <div className="cookie-manager__item-info">
          <h5>
            Essential Cookies
            <span className="cookie-manager__badge-required">Always Active</span>
          </h5>
          <p>Necessary for the website to function securely, enable navigation, and process security tokens. Cannot be switched off.</p>
        </div>
        <label className="switch" aria-label="Essential cookies toggle">
          <input type="checkbox" checked disabled />
          <span className="slider"></span>
        </label>
      </div>

      <div className="cookie-manager__item">
        <div className="cookie-manager__item-info">
          <h5>Analytics & Performance Cookies</h5>
          <p>Help us analyze site traffic, page load performance, and popular pages so we can continuously improve user experience.</p>
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

      <div className="cookie-manager__item">
        <div className="cookie-manager__item-info">
          <h5>Functional & Preference Cookies</h5>
          <p>Remember your settings, preferences, dark/light mode selections, and contact form inputs across sessions.</p>
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

      <div className="cookie-manager__actions">
        <button type="button" className="cookie-btn-save" onClick={handleSave}>
          Save My Preferences
        </button>
        <button type="button" className="cookie-btn-reset" onClick={handleAcceptAll}>
          Accept All Cookies
        </button>
        {saved && (
          <div className="cookie-save-toast">
            ✓ Preferences saved successfully!
          </div>
        )}
      </div>
    </div>
  );
}
