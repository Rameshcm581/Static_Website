import PropTypes from 'prop-types';
import { COMPANY } from '@data/company';
import './styles/PageLoader.css';

export default function PageLoader({
  minHeight = '60vh',
  label = 'Loading...',
  variant = 'orbit',
}) {
  const logoUrl = `${import.meta.env.BASE_URL}assets/images/logo.png`;

  return (
    <div
      className={`page-loader page-loader--${variant}`}
      style={{ minHeight }}
      role="status"
      aria-label={label}
    >
      <div className="page-loader__inner">
        {variant === 'orbit' && (
          <>
            <div className="page-loader__stage">
              <div className="page-loader__sonar" aria-hidden="true" />
              <div className="page-loader__sonar page-loader__sonar--2" aria-hidden="true" />
              <div className="page-loader__ring-outer" aria-hidden="true" />
              <div className="page-loader__ring-inner" aria-hidden="true" />
              <img
                src={logoUrl}
                alt={COMPANY.name}
                className="page-loader__logo-orbit"
              />
            </div>
            <div className="page-loader__dots" aria-hidden="true">
              <span className="page-loader__dot" />
              <span className="page-loader__dot" />
              <span className="page-loader__dot" />
            </div>
          </>
        )}

        {variant === 'shimmer' && (
          <>
            <div className="page-loader__card">
              <div className="page-loader__shimmer-beam" aria-hidden="true" />
              <img
                src={logoUrl}
                alt={COMPANY.name}
                className="page-loader__logo-shimmer"
              />
            </div>
            <div className="page-loader__dots" aria-hidden="true">
              <span className="page-loader__dot" />
              <span className="page-loader__dot" />
              <span className="page-loader__dot" />
            </div>
          </>
        )}

        {variant === 'badge' && (
          <>
            <div className="page-loader__badge-frame">
              <div className="page-loader__geo-border" aria-hidden="true" />
              <img
                src={logoUrl}
                alt={COMPANY.name}
                className="page-loader__logo-badge"
              />
            </div>
            <div className="page-loader__dots" aria-hidden="true">
              <span className="page-loader__dot" />
              <span className="page-loader__dot" />
              <span className="page-loader__dot" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

PageLoader.propTypes = {
  minHeight: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['orbit', 'shimmer', 'badge']),
};
