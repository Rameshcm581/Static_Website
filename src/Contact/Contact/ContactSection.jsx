// src/Contact/Contact/ContactSection.jsx — intro copy + channels + enquiry form
import ContactChannels from './ContactChannels';
import ContactForm from './ContactForm';
import './styles/ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-sec">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Reach us</div>
          <h2 className="contact-title">
            One short form.<br /><span className="italic contact-accent">One business day reply.</span>
          </h2>
          <p className="contact-intro">
            Keep it short — name, email, one line on the project, and budget range if you
            know it. If we&apos;re a fit, we&apos;ll set up a discovery call within one business day.
          </p>
          <ContactChannels />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
