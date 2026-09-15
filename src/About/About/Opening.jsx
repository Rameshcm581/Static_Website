// src/About/About/Opening.jsx — the About page opens on a statement and three facts
import { Link } from 'react-router-dom';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/Opening.css';

export default function Opening() {
  return (
    <section className="about-open">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to={ROUTES.HOME}>Home</Link><span className="sep">/</span><span aria-current="page">About</span>
        </nav>
        <h1>
          A small studio in {COMPANY.operationsCity}.<br />
          <span className="italic accent">Software you can run a business on.</span>
        </h1>
        <div className="about-open__row">
          <p className="about-open__lede">
            <strong>{COMPANY.name}</strong> started in {COMPANY.foundedYear}. We design, build and look after
            mobile apps, web applications and secure digital systems for businesses in {COMPANY.operationsCity},
            across {COMPANY.state} and beyond — and we take on reliable data entry when the paperwork is the problem.
          </p>
          <dl className="about-open__facts">
            <div><dt>Founded</dt><dd>{COMPANY.foundedYear}</dd></div>
            <div><dt>Based in</dt><dd>{COMPANY.operationsCity}, {COMPANY.state}</dd></div>
            <div><dt>We build</dt><dd>Mobile · Web · Systems · Data entry</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
