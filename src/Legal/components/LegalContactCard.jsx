// src/Legal/components/LegalContactCard.jsx — Reusable legal contact info card component
import PropTypes from 'prop-types';
import Icon from '@components/Icon';
import { COMPANY, MAILTO } from '@data/company';

export default function LegalContactCard({ subtitle = 'Legal & Data Protection Contact Cell' }) {
  const fullAddress = `${COMPANY.registeredOffice}, ${COMPANY.operationsCity}, ${COMPANY.state}, ${COMPANY.country}`;
  const rawPhone = COMPANY.phone.replace(/\s+/g, '');

  return (
    <div className="legal-contact-card">
      <div className="legal-contact-card__header">
        <div className="legal-contact-card__icon-badge">
          <Icon name="shield" size={20} />
        </div>
        <div>
          <h4>{COMPANY.legalName}</h4>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="legal-contact-card__grid">
        <div className="legal-contact-card__item">
          <div className="legal-contact-card__item-ico">
            <Icon name="mail" size={18} />
          </div>
          <div className="legal-contact-card__item-content">
            <span className="legal-contact-card__label">Email Legal Inquiries</span>
            <a href={MAILTO} className="legal-contact-card__value legal-contact-card__link">
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="legal-contact-card__item">
          <div className="legal-contact-card__item-ico">
            <Icon name="phone" size={18} />
          </div>
          <div className="legal-contact-card__item-content">
            <span className="legal-contact-card__label">Phone Support</span>
            <a href={`tel:${rawPhone}`} className="legal-contact-card__value legal-contact-card__link">
              {COMPANY.phone}
            </a>
          </div>
        </div>

        <div className="legal-contact-card__item">
          <div className="legal-contact-card__item-ico">
            <Icon name="pin" size={18} />
          </div>
          <div className="legal-contact-card__item-content">
            <span className="legal-contact-card__label">Registered Address</span>
            <span className="legal-contact-card__value">
              {fullAddress}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

LegalContactCard.propTypes = {
  subtitle: PropTypes.string,
};
