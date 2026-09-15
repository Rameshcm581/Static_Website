// src/Careers/Careers/WriteAnyway.jsx — the close: no matching role is not a reason not to write
import Button from '@components/Button';
import { COMPANY, MAILTO } from '@data/company';
import './styles/WriteAnyway.css';

export default function WriteAnyway() {
  return (
    <section className="write">
      <div className="wrap write-grid">
        <div>
          <h2>Don&apos;t see your role?<br /><span className="italic">Write anyway.</span></h2>
          <p>
            If you&apos;d rather solve the problem than wait for instructions, we want to hear from you.
            Send your resume and a line about what you&apos;d like to work on.
          </p>
        </div>
        <div className="write-cta">
          <Button href={`${MAILTO}?subject=${encodeURIComponent('Working together')}`} variant="accent" size="lg" iconLeft="mail">Write to us</Button>
          <a className="write-mail" href={MAILTO}>{COMPANY.email}</a>
        </div>
      </div>
    </section>
  );
}
