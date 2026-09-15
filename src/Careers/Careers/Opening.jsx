// src/Careers/Careers/Opening.jsx — an invitation: centred, warm, and the three roles offered right away
import { Link } from 'react-router-dom';
import Icon from '@components/Icon';
import { COMPANY } from '@data/company';
import { ROLES, roleId } from '@data/roles';
import { ROUTES } from '@data/navigation';
import './styles/Opening.css';

export default function Opening() {
  return (
    <section className="cr-open">
      <div className="wrap cr-open__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to={ROUTES.HOME}>Home</Link><span className="sep">/</span><span aria-current="page">Careers</span>
        </nav>
        <h1>
          <span className="w">Come</span> <span className="w">build</span><br />
          <span className="w italic accent">with us.</span>
        </h1>
        <p className="cr-open__lede">
          {ROLES.length === 1 ? 'One open role' : `${['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six'][ROLES.length] || ROLES.length} open roles`} in {COMPANY.operationsCity}, hybrid, full-time.
          Small team, senior people, real products.
        </p>
        <ul className="cr-open__doors" aria-label="Open roles">
          {ROLES.map((role, i) => (
            <li key={role.title} style={{ '--i': i }}>
              <a href={`#${roleId(role)}`}>
                <span className="door-team">{role.team}</span>
                <span className="door-title">{role.title}</span>
                <Icon name="arrow" size={16} />
              </a>
            </li>
          ))}
        </ul>
        <p className="cr-open__foot">Apply by email · we read every one.</p>
      </div>
    </section>
  );
}
