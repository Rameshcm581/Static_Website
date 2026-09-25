// src/Legal/pages/CookiePolicy.jsx — Comprehensive Cookie Policy & Interactive Preference Manager
import { useState, useEffect } from 'react';
import usePageMeta from '@hooks/usePageMeta';
import { COMPANY } from '@data/company';
import CookiePreferencesManager from '../components/CookiePreferencesManager';
import Icon from '@components/Icon';
import LegalContactCard from '../components/LegalContactCard';
import '../styles/Legal.css';

const SECTIONS = [
  { id: 'overview', title: '1. What Are Cookies?' },
  { id: 'types-used', title: '2. Types of Cookies We Use' },
  { id: 'cookie-table', title: '3. Detailed Cookie Inventory' },
  { id: 'manage-preferences', title: '4. Manage Your Preferences' },
  { id: 'browser-settings', title: '5. Managing Cookies in Browsers' },
  { id: 'third-party-cookies', title: '6. Third-Party Tracking & Pixels' },
  { id: 'updates', title: '7. Policy Updates' },
  { id: 'contact', title: '8. Contact Us' },
];

export default function CookiePolicy() {
  usePageMeta({
    title: `Cookie Policy & Preferences | ${COMPANY.name}`,
    description: `Understand how ${COMPANY.name} uses cookies, local storage, and tracking technologies, and manage your cookie preferences in real-time.`,
  });

  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="legal-page">
      {/* Hero Banner */}
      <section className="legal-hero">
        <div className="wrap">
          <div className="legal-hero__badge">
            <span className="legal-hero__badge-dot"></span>
            Cookie Policy & Transparency
          </div>
          <h1>Cookie Policy</h1>
          <p className="legal-hero__subtitle">
            This Cookie Policy explains how {COMPANY.name} uses cookies, web beacons, and browser storage to optimize site functionality and personalize your technical browsing experience.
          </p>

          <div className="legal-meta">
            <div className="legal-meta__item">
              <strong>Effective Date:</strong> September 25, 2026
            </div>
            <div className="legal-meta__item">
              <strong>Last Updated:</strong> September 25, 2026
            </div>
            <div className="legal-meta__item">
              <strong>Version:</strong> 1.1
            </div>
            <button type="button" className="legal-print-btn" onClick={handlePrint}>
              <Icon name="print" size={15} /> Print Policy
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="wrap">
        <div className="legal-layout">
          {/* Sidebar Navigation */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar__title">Table of Contents</div>
            <nav className="legal-sidebar__nav">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`legal-sidebar__link ${activeId === sec.id ? 'active' : ''}`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="legal-sidebar__quick-box">
              <h5>Cookie Control</h5>
              <p>You can modify your cookie choices at any time on this page.</p>
              <a href="#manage-preferences" className="legal-sidebar__quick-btn">
                Jump to Settings ↓
              </a>
            </div>
          </aside>

          {/* Legal Document Content */}
          <main className="legal-content">
            {/* Section 1 */}
            <section id="overview" className="legal-section">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your computer, smartphone, or tablet when you visit websites. They are widely used by software engineering studios and web applications to make websites work efficiently, enhance security, store visitor preferences, and provide analytical data to website owners.
              </p>
              <p>
                In addition to HTTP cookies, we may use local storage, session storage, or tracking pixels to save lightweight interface states (such as your cookie consent preferences or navigation drawer status).
              </p>
            </section>

            {/* Section 2 */}
            <section id="types-used" className="legal-section">
              <h2>2. Types of Cookies We Use</h2>
              <p>
                We categorize the cookies and storage mechanisms used on <strong>{COMPANY.website}</strong> into three distinct types:
              </p>

              <h3>A. Essential / Strictly Necessary Cookies</h3>
              <p>
                These cookies are indispensable for the core operation of our website. They enable secure session handshakes, routing stability, cross-site request forgery (CSRF) protection, and load balancing across our servers. Without these cookies, basic site functions cannot operate.
              </p>

              <h3>B. Analytics & Performance Cookies</h3>
              <p>
                These cookies aggregate anonymous telemetry about how visitors interact with our studio site (e.g. which service pages are most visited, page load speed, and error rates). This data helps us optimize website performance and user experience.
              </p>

              <h3>C. Functional & Preference Cookies</h3>
              <p>
                Functional cookies allow our site to remember choices you make (such as saved form inputs or dark mode preferences) to deliver a personalized browsing experience during repeat visits.
              </p>
            </section>

            {/* Section 3 */}
            <section id="cookie-table" className="legal-section">
              <h2>3. Detailed Cookie Inventory</h2>
              <p>
                The table below provides a comprehensive list of first-party and third-party cookies utilized on our site:
              </p>

              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Category</th>
                      <th>Provider / Source</th>
                      <th>Purpose & Description</th>
                      <th>Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>atmytech_cookie_consent</code></td>
                      <td>Essential</td>
                      <td>{COMPANY.name}</td>
                      <td>Stores your choice regarding cookie consent (e.g. accepted_all, essential_only).</td>
                      <td>1 Year</td>
                    </tr>
                    <tr>
                      <td><code>atmytech_cookie_preferences</code></td>
                      <td>Essential</td>
                      <td>{COMPANY.name}</td>
                      <td>Saves your granular cookie preference toggles across sessions.</td>
                      <td>1 Year</td>
                    </tr>
                    <tr>
                      <td><code>_ga</code></td>
                      <td>Analytics</td>
                      <td>Google Analytics</td>
                      <td>Calculates visitor session stats, campaign traffic, and overall site usage telemetry.</td>
                      <td>2 Years</td>
                    </tr>
                    <tr>
                      <td><code>_ga_*</code></td>
                      <td>Analytics</td>
                      <td>Google Analytics</td>
                      <td>Maintains session state and counts pageviews across visits.</td>
                      <td>2 Years</td>
                    </tr>
                    <tr>
                      <td><code>atmytech_theme</code></td>
                      <td>Functional</td>
                      <td>{COMPANY.name}</td>
                      <td>Remembers your visual theme preference (light/dark mode).</td>
                      <td>Persistent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Component */}
            <section id="manage-preferences" className="legal-section">
              <h2>4. Manage Your Cookie Preferences</h2>
              <p>
                You can customize your cookie preferences below at any time. Toggling non-essential cookies off will take effect immediately for your current browser session.
              </p>

              {/* Interactive Cookie Preference Manager */}
              <CookiePreferencesManager />
            </section>

            {/* Section 5 */}
            <section id="browser-settings" className="legal-section">
              <h2>5. Managing Cookies in Browser Settings</h2>
              <p>
                In addition to our preference manager above, most modern web browsers allow you to manage or block cookies through their built-in settings:
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Settings → Privacy and security → Third-party cookies</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Enhanced Tracking Protection</li>
                <li><strong>Apple Safari:</strong> Preferences → Privacy → Block all cookies / Prevent cross-site tracking</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>
              <p>
                Please note that blocking essential cookies via browser settings may impact website layout rendering or cause interactive contact forms to malfunction.
              </p>
            </section>

            {/* Section 6 */}
            <section id="third-party-cookies" className="legal-section">
              <h2>6. Third-Party Tracking & Pixels</h2>
              <p>
                We do not employ invasive cross-site ad retargeting pixels or sell visitor activity to third-party data broker networks. Any external analytics scripts used on our website operate in privacy-friendly anonymized IP mode.
              </p>
            </section>

            {/* Section 7 */}
            <section id="updates" className="legal-section">
              <h2>7. Policy Updates</h2>
              <p>
                We may periodically update this Cookie Policy to reflect new software capabilities, performance plugins, or regulatory requirements. Any modifications will be posted here with an updated effective date.
              </p>
            </section>

            {/* Section 8 */}
            <section id="contact" className="legal-section">
              <h2>8. Contact Us</h2>
              <p>
                If you have questions about our use of cookies or technical data practices, please reach out to our team:
              </p>

              <LegalContactCard subtitle="Privacy & Technology Support" />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
