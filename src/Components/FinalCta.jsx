import Button from './Button';
import { ROUTES } from '@data/navigation';
import './styles/FinalCta.css';

export default function FinalCta() {
  return (
    <section id="book" className="final">
      <div className="wrap">
        <div className="eyebrow">Let&apos;s build</div>
        <h2>Have an idea worth<br />building? <em>Let&apos;s pressure-test it.</em></h2>
        <p>A free discovery call. We&apos;ll listen, ask the awkward questions, and tell you honestly whether we&apos;re the right team to build it. No deck, no sales.</p>
        <div className="row">
          <Button to={ROUTES.CONTACT} variant="gold" size="lg" iconLeft="calendar">Book a free discovery call</Button>
          <Button to={ROUTES.SERVICES} variant="outline-dark" size="lg" iconLeft="eye">See what we build</Button>
        </div>
      </div>
    </section>
  );
}
