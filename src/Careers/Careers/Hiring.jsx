// src/Careers/Careers/Hiring.jsx — how hiring works, shown as the email thread it actually is (illustrative)
import Icon from '@components/Icon';
import { COMPANY } from '@data/company';
import { ROLES } from '@data/roles';
import './styles/Hiring.css';

const ROLE = ROLES[0]?.title || 'Frontend Engineer (React)';
const FIRST = COMPANY.name.split(' ')[0];

const THREAD = [
  {
    step: 'Write to us', day: 'Day 1', from: 'You', to: FIRST, subject: `Application: ${ROLE}`,
    body: 'Hi — CV attached. I’d most like to work on the dashboards side of things; here’s a project I built last year and what I’d do differently now.',
    attach: 'CV.pdf',
  },
  {
    step: 'A short call', day: 'Day 2', from: FIRST, to: 'You', subject: `Re: Application: ${ROLE}`,
    body: 'Thanks — read it this morning, liked the write-up on what you’d change. Could you do half an hour on Thursday at 4? You’d be talking to the person you’d actually work with.',
  },
  {
    step: 'Talk through your work', day: 'Day 5', from: FIRST, to: 'You', subject: `Re: Application: ${ROLE}`,
    body: 'Good to talk today. Next step: bring something you’ve built — code or designs — and we’ll go through the decisions behind it together. Nothing to prepare, no take-home.',
  },
  {
    step: 'A straight answer', day: 'Day 11', from: FIRST, to: 'You', subject: `Re: Application: ${ROLE}`,
    body: 'We’d like to make you an offer. Details attached — take the weekend, and call if anything’s unclear.',
    attach: 'Offer.pdf',
  },
];

export default function Hiring() {
  return (
    <section className="hiring">
      <div className="wrap hiring-grid">
        <div className="hiring-copy">
          <h2>How hiring<br /><span className="italic">works here.</span></h2>
          <p>Four emails, usually inside two weeks. This is roughly what the thread looks like from your side.</p>
          <p className="hiring-note">And if it&apos;s a no, the last email still arrives — with the reason. We don&apos;t leave people waiting.</p>
          <a className="hiring-mail" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>

        <ol className="thread" aria-label="A typical hiring thread">
          {THREAD.map((m, i) => (
            <li className={`mail${m.from === 'You' ? ' mail--you' : ''}`} key={m.step} style={{ '--i': i }}>
              <div className="mail-step"><span>{m.step}</span><span>{m.day}</span></div>
              <article className="mail-card">
                <header>
                  <span className="mail-avatar" aria-hidden="true">{m.from === 'You' ? 'Y' : FIRST[0]}</span>
                  <div className="mail-who">
                    <b>{m.from}</b>
                    <span>to {m.to}</span>
                  </div>
                  <span className="mail-subject">{m.subject}</span>
                </header>
                <p>{m.body}</p>
                {m.attach && <span className="mail-attach"><Icon name="layers" size={12} /> {m.attach}</span>}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
