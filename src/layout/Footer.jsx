// src/layout/Footer.jsx
import { Link } from 'react-router-dom';
import Icon from '@components/Icon';
import NewsletterForm from './NewsletterForm';
import { COMPANY, MAILTO, TEL } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/Footer.css';

const SERVICE_LINKS = [
  { label: 'MVP development', to: ROUTES.MVP },
  { label: 'Web applications', to: `${ROUTES.SERVICES}#web` },
  { label: 'Mobile applications', to: `${ROUTES.SERVICES}#mobile` },
  { label: 'AI / ML & chatbots', to: ROUTES.CONSULTING },
  { label: 'Technology consulting', to: ROUTES.CONSULTING },
];

const COMPANY_LINKS = [
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Careers', to: ROUTES.CAREERS },
  { label: 'Contact', to: ROUTES.CONTACT },
];

const SOCIAL_LINKS = [
  { icon: 'linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'twitter', label: 'Twitter', href: '#' },
  { icon: 'insta', label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-brand__row">
              <img className="logo-mark foot-logo" src={`${import.meta.env.BASE_URL}assets/images/logo-placeholder.svg`} alt={COMPANY.name} />
            </div>
            <p>A product engineering and digital-transformation studio from {COMPANY.state}. We turn product ideas into digital solutions that solve.</p>
            <p className="foot-tag">Code your team can own.</p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li><a href={MAILTO}>{COMPANY.email}</a></li>
              <li><a href={TEL}>{COMPANY.phone}</a></li>
              <li>{COMPANY.operationsCity}, {COMPANY.state}</li>
              <li>{COMPANY.registeredOffice}</li>
            </ul>
          </div>
          <div className="news">
            <h5>Build with us</h5>
            <NewsletterForm />
            <p>An occasional letter — what we&apos;re learning building products. No spam, easy to leave.</p>
            <div className="foot-social">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.icon} href={social.href} aria-label={social.label}>
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <div>© {COMPANY.copyrightYear} {COMPANY.legalName} · {COMPANY.registrationLabel} {COMPANY.registrationNumber} · {COMPANY.state}, {COMPANY.country}</div>
          <div className="legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
