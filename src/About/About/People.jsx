// src/About/About/People.jsx — who you'll work with: one lead between you and the team, and the door to Careers
import Button from '@components/Button';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/People.css';

const ROLES = [
  { role: 'A lead who owns it', text: 'One person accountable from discovery to handover. They run the weekly demo and they answer the phone.' },
  { role: 'Design', text: 'Screens people understand without training. We design with your staff, not just for them.' },
  { role: 'Engineering', text: 'Senior engineers who write code your future team can read — web, iOS and Android.' },
  { role: 'Data entry team', text: 'A supervised team working to your checklist, with verification built into the process.' },
];

export default function People() {
  return (
    <section className="people">
      <div className="wrap people-grid">
        <div className="people-copy">
          <h2>Who you&apos;ll<br /><span className="italic">work with.</span></h2>
          <p className="people-intro">No account managers, no hand-offs. The people you meet on the first call are the people who build it.</p>
          <dl className="people-roles">
            {ROLES.map((r) => (
              <div key={r.role}>
                <dt>{r.role}</dt>
                <dd>{r.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="org" aria-label="How an engagement is staffed: you work with one lead, who works with design, engineering and the data entry team.">
          <div className="org-node org-node--you">You</div>
          <span className="org-line" aria-hidden="true" />
          <div className="org-node org-node--lead">A lead who owns it</div>
          <span className="org-line" aria-hidden="true" />
          <div className="org-fork" aria-hidden="true" />
          <div className="org-row">
            <div className="org-node">Design</div>
            <div className="org-node">Engineering</div>
            <div className="org-node">Data entry team</div>
          </div>
          <figcaption>One line of contact. One team behind it.</figcaption>
        </figure>

        <div className="people-foot">
          <p>We&apos;re hiring in {COMPANY.operationsCity}.</p>
          <Button to={ROUTES.CAREERS} variant="ghost" iconRight="arrow">See open roles</Button>
        </div>
      </div>
    </section>
  );
}
