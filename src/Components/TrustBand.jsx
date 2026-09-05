import { Link } from 'react-router-dom';
import Icon from './Icon';
import { COMPANY, MAILTO, TEL } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/TrustBand.css';

export default function TrustBand() {
  return (
    <section className="trust">
      <div className="wrap">
        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-ico"><Icon name="shield" size={20} stroke={1.4} /></div>
            <h4>Registered company</h4>
            <p>{COMPANY.legalName}<br /><span className="mono">{COMPANY.registrationLabel} {COMPANY.registrationNumber}</span></p>
          </div>
          <div className="trust-card">
            <div className="trust-ico"><Icon name="pin" size={20} stroke={1.4} /></div>
            <h4>{COMPANY.state}, {COMPANY.country}</h4>
            <p>Operations in {COMPANY.operationsCity}<br />Registered office in {COMPANY.registeredOffice}</p>
          </div>
          <div className="trust-card">
            <div className="trust-ico"><Icon name="calendar" size={20} stroke={1.4} /></div>
            <h4>Founded {COMPANY.foundedYear}</h4>
            <p>Incorporated {COMPANY.incorporatedOn}, {COMPANY.registrar}<br />Status: {COMPANY.status}</p>
          </div>
          <div className="trust-card">
            <div className="trust-ico"><Icon name="mail" size={20} stroke={1.4} /></div>
            <h4>Get in touch</h4>
            <p>
              <a href={MAILTO}>{COMPANY.email}</a><br />
              <a href={TEL}>{COMPANY.phone}</a><br />
              <Link to={ROUTES.CONTACT} className="trust-link">Project enquiries →</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
