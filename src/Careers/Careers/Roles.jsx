// src/Careers/Careers/Roles.jsx — open roles as three tall columns on the dark band, Apply pinned to the foot of each
import Icon from '@components/Icon';
import { COMPANY, MAILTO } from '@data/company';
import { ROLES, roleId } from '@data/roles';
import './styles/Roles.css';

export default function Roles() {
  return (
    <section id="roles" className="roles">
      <div className="wrap">
        <div className="roles-head">
          <h2>Open <span className="italic">roles.</span></h2>
          <p>
            All full-time and hybrid in {COMPANY.operationsCity}. Apply by email — each button drafts one with
            the role in the subject line; add your CV or portfolio and a line about what you&apos;d like to work on.
          </p>
        </div>

        {ROLES.length ? (
          <ul className="posts" style={{ '--n': ROLES.length }}>
            {ROLES.map((role, i) => (
              <li className="post" id={roleId(role)} key={role.title} style={{ '--i': i }}>
                <span className="post-team">{role.team}</span>
                <h3>{role.title}</h3>
                <p>{role.text}</p>
                <div className="post-meta"><span>{role.type}</span><span>{role.location}</span></div>
                <a
                  className="post-apply"
                  href={`${MAILTO}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                  aria-label={`Apply for ${role.title} by email`}
                >
                  Apply for this role <Icon name="arrowUR" size={15} />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="roles-empty">No open roles right now. If you&apos;d like to work with us anyway, write to us below.</p>
        )}
      </div>
    </section>
  );
}
