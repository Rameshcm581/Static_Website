import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import './styles/PageBanner.css';

export default function PageBanner({ crumbs = [], eyebrow, title, accent, lede, meta }) {
  return (
    <section className="pbanner">
      <div className="wrap">
        <div className="grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              {crumbs.map((crumb, i) => (
                <Fragment key={crumb.label}>
                  {i > 0 && <span className="sep">/</span>}
                  {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                </Fragment>
              ))}
            </nav>
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="pbanner-title">
              {title} <span className="italic pbanner-accent">{accent}</span>
            </h1>
            <p className="lede">{lede}</p>
          </div>
          {meta && (
            <div className="meta-side">
              {meta.map((item) => (
                <div className="row" key={item.title}>
                  <div className="ico-wrap"><Icon name={item.icon} size={18} stroke={1.4} /></div>
                  <div><b>{item.title}</b>{item.sub}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

PageBanner.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, to: PropTypes.string })
  ),
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired,
  lede: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      sub: PropTypes.string.isRequired,
    })
  ),
};
