// src/layout/NewsletterForm.jsx — footer subscribe field
import Button from '@components/Button';
import useNewsletterForm from '@hooks/useNewsletterForm';
import './styles/NewsletterForm.css';

export default function NewsletterForm() {
  const { email, isSubmitting, isSent, isError, handleChange, handleSubmit } = useNewsletterForm();

  if (isSent) {
    return <p className="newsletter__done" role="status">Thanks — you&apos;re on the list.</p>;
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="newsletter__label">Email address</label>
      <div className="field">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="you@yourcompany.com"
          value={email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <Button type="submit" variant="primary" size="sm" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Subscribe'}
        </Button>
      </div>
      {isError && <p className="newsletter__error" role="alert">Couldn&apos;t subscribe right now. Please try again.</p>}
    </form>
  );
}
