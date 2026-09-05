// src/Contact/pages/Contact.jsx
import usePageMeta from '@hooks/usePageMeta';
import PageBanner from '@components/PageBanner';
import FaqSection from '@components/FaqSection';
import ContactSection from '@/Contact/Contact/ContactSection';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/Contact.css';

const META = [
  { icon: 'mail', title: 'Email', sub: COMPANY.email },
  { icon: 'phone', title: 'Phone', sub: COMPANY.phone },
  { icon: 'pin', title: `${COMPANY.state}, ${COMPANY.country}`, sub: `Operations in ${COMPANY.operationsCity} · ${COMPANY.registeredOffice}` },
  { icon: 'shield', title: COMPANY.shortLegalName, sub: `${COMPANY.registrationLabel} ${COMPANY.registrationNumber} · ${COMPANY.registrar}` },
];

export default function Contact() {
  usePageMeta({
    title: `Contact ${COMPANY.name} | Let's Build Your Product`,
    description: `Tell us about your project. Reach the ${COMPANY.name} team for MVP development, web & app engineering, and technology consulting.`,
  });

  return (
    <div className="contact-page">
      <PageBanner
        crumbs={[{ label: 'Home', to: ROUTES.HOME }, { label: 'Contact' }]}
        eyebrow="Contact"
        title="Let's talk about"
        accent="what you're building."
        lede="Whether you have a detailed spec or just a problem you can't stop thinking about, we'd like to hear it. Tell us where you are and we'll tell you honestly how we can help."
        meta={META}
      />
      <ContactSection />
      <FaqSection />
    </div>
  );
}
