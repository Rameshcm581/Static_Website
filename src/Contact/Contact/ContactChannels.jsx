// src/Contact/Contact/ContactChannels.jsx — email, phone, addresses, careers link
import { Link } from 'react-router-dom';
import Icon from '@components/Icon';
import { COMPANY, MAILTO, TEL } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/ContactChannels.css';

export default function ContactChannels() {
  return (
    <div className="contact-channels">
      <div className="ch">
        <div className="ch-ico"><Icon name="mail" size={18} /></div>
        <div><b>Email</b><a href={MAILTO}>{COMPANY.email}</a></div>
      </div>
      <div className="ch">
        <div className="ch-ico"><Icon name="phone" size={18} /></div>
        <div><b>Phone</b><a href={TEL}>{COMPANY.phone}</a></div>
      </div>
      <div className="ch">
        <div className="ch-ico"><Icon name="pin" size={18} /></div>
        <div><b>Operations</b>{COMPANY.operationsCity}, {COMPANY.state}, {COMPANY.country}</div>
      </div>
      <div className="ch">
        <div className="ch-ico"><Icon name="shield" size={18} /></div>
        <div><b>Registered office</b>{COMPANY.registeredOffice}</div>
      </div>
      <div className="ch">
        <div className="ch-ico"><Icon name="users" size={18} /></div>
        <div><b>Careers</b><Link to={ROUTES.CAREERS}>See open roles →</Link></div>
      </div>
    </div>
  );
}
