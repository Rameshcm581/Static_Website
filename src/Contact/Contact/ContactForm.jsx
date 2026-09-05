// src/Contact/Contact/ContactForm.jsx — enquiry form (state + submit live in useContactForm)
import Button from '@components/Button';
import Icon from '@components/Icon';
import useContactForm from '@hooks/useContactForm';
import { COMPANY, MAILTO } from '@data/company';
import './styles/ContactForm.css';

const PROJECT_TYPES = [
  'MVP development',
  'Web application',
  'Mobile application',
  'AI / ML or chatbot',
  'IoT or AR',
  'Technology consulting',
  'Not sure yet',
];

const BUDGET_RANGES = ['Under ₹5L', '₹5L – ₹15L', '₹15L – ₹40L', '₹40L+', 'Open / unsure'];

export default function ContactForm() {
  const { values, status, error, isSubmitting, isSent, handleChange, handleSubmit } = useContactForm();

  if (isSent) {
    return (
      <div className="contact-form" role="status">
        <div className="form-sent">
          <div className="form-sent-ico"><Icon name="check" size={28} stroke={2} /></div>
          <h3>Thanks — we have it.</h3>
          <p>
            We&apos;ll be in touch within one business day, from a real person. If urgent, write to{' '}
            <a href={MAILTO}>{COMPANY.email}</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="row2">
        <label>
          Name
          <input name="name" required type="text" placeholder="Your name" value={values.name} onChange={handleChange} autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" required type="email" placeholder="you@yourcompany.com" value={values.email} onChange={handleChange} autoComplete="email" />
        </label>
      </div>
      <label>
        Company
        <input name="company" type="text" placeholder="Company or project name" value={values.company} onChange={handleChange} autoComplete="organization" />
      </label>
      <label>
        Project type
        <select name="projectType" value={values.projectType} onChange={handleChange}>
          <option value="" disabled>Choose one…</option>
          {PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </label>
      <label>
        Budget range
        <select name="budget" value={values.budget} onChange={handleChange}>
          <option value="" disabled>Choose one…</option>
          {BUDGET_RANGES.map((range) => <option key={range} value={range}>{range}</option>)}
        </select>
      </label>
      <label>
        One line about the project
        <textarea name="message" rows="4" placeholder="What are you building, and what problem does it solve?" value={values.message} onChange={handleChange} />
      </label>
      {status === 'error' && <p className="form-error" role="alert">{error}</p>}
      <Button type="submit" variant="primary" iconRight="arrow" className="form-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send enquiry'}
      </Button>
      <p className="form-foot">We reply within one business day. Submissions are confidential.</p>
    </form>
  );
}
