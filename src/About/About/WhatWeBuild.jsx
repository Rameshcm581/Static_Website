// src/About/About/WhatWeBuild.jsx — the four things we do, as a menu: each row is the link
import { Link } from 'react-router-dom';
import Icon from '@components/Icon';
import { ROUTES } from '@data/navigation';
import './styles/WhatWeBuild.css';

const BUILD = [
  { title: 'Mobile apps', text: 'iOS and Android apps your staff and customers actually use — orders, bookings, field work, payments.', replaces: 'WhatsApp orders and notebooks', to: `${ROUTES.SERVICES}#mobile` },
  { title: 'Web applications', text: 'Dashboards, portals and admin systems that replace the spreadsheet — fast, secure, and editable by you.', replaces: 'Spreadsheets and email threads', to: `${ROUTES.SERVICES}#web` },
  { title: 'Secure digital systems', text: 'Roles, backups and sensible hosting, so the system still holds up when the business is three times the size.', replaces: 'Shared laptops and USB backups', to: ROUTES.SERVICES },
  { title: 'Data entry services', text: 'Paper, PDFs and legacy records digitised to an agreed checklist — verified, on schedule, ready to import.', replaces: 'Cupboards of paper', to: ROUTES.CONTACT },
];

export default function WhatWeBuild() {
  return (
    <section className="build">
      <div className="wrap">
        <div className="build-head">
          <h2>What we <span className="italic">build.</span></h2>
          <p>Four things, done properly. If your problem doesn&apos;t fit one of them, we&apos;ll say so on the first call.</p>
        </div>
        <ul className="menu">
          {BUILD.map((b, i) => (
            <li key={b.title} style={{ '--i': i }}>
              <Link to={b.to} className="menu-row">
                <span className="menu-title">{b.title}</span>
                <span className="menu-body">
                  <span className="menu-text">{b.text}</span>
                  <span className="menu-replaces"><em>Replaces</em> {b.replaces}</span>
                </span>
                <span className="menu-arrow" aria-hidden="true"><Icon name="arrow" size={22} stroke={1.5} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
