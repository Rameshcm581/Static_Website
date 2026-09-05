// src/Careers/Careers/Roles.jsx — open roles list + speculative application
import SectionHead from '@components/SectionHead';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { COMPANY, MAILTO } from '@data/company';
import './styles/Roles.css';

const ROLES = [
  { team: 'Engineering', title: 'PHP / Laravel Developer', type: 'Full-time', location: `${COMPANY.operationsCity} · Hybrid` },
  { team: 'Engineering', title: 'Frontend Engineer (React)', type: 'Full-time', location: `${COMPANY.operationsCity} · Hybrid` },
  { team: 'Design', title: 'UI / UX Designer', type: 'Full-time', location: `${COMPANY.operationsCity} · Hybrid` },
  { team: 'Design', title: 'Web Designer', type: 'Full-time', location: `${COMPANY.operationsCity} · Hybrid` },
];

export default function Roles() {
  return (
    <section className="roles">
      <div className="wrap">
        <SectionHead
          eyebrow="Open roles"
          title={<>Where your code<br /><span className="italic">actually ships.</span></>}
          text="We're a small team building real products for real clients. That means ownership from day one, short feedback loops, and the chance to see your work in users' hands quickly."
        />
        <div className="roles-list">
          {ROLES.map((role) => (
            <div className="role" key={role.title}>
              <div className="role-team">{role.team}</div>
              <div className="role-title">{role.title}</div>
              <div className="role-meta"><span>{role.type}</span><span>·</span><span>{role.location}</span></div>
              <a href={`${MAILTO}?subject=${encodeURIComponent(`Application: ${role.title}`)}`} className="role-cta">
                Apply <Icon name="arrowUR" size={14} />
              </a>
            </div>
          ))}
        </div>
        <div className="careers-apply">
          <div>
            <h3>Don&apos;t see your role?</h3>
            <p>If you&apos;d rather solve the problem than wait for instructions, write anyway. Send your resume and a line about what you&apos;d like to work on.</p>
          </div>
          <Button href={MAILTO} variant="accent" iconLeft="mail">{COMPANY.email}</Button>
        </div>
      </div>
    </section>
  );
}
