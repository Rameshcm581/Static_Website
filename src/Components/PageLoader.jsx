import PropTypes from 'prop-types';
import { COMPANY } from '@data/company';
import './styles/PageLoader.css';

const logoUrl = `${import.meta.env.BASE_URL}assets/images/logo.png`;

// Eagerly preload image into browser memory immediately on JS load
if (typeof window !== 'undefined') {
  const img = new Image();
  img.src = logoUrl;
}

export default function PageLoader({
  minHeight = '100vh',
  label = 'Loading...',
  variant = 'orbit',
  fullScreen = true,
}) {
  const containerClasses = [
    'page-loader',
    `page-loader--${variant}`,
    fullScreen ? 'page-loader--fullscreen' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={containerClasses}
      style={!fullScreen ? { minHeight } : undefined}
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
                loading="eager"
                fetchPriority="high"
                decoding="sync"
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
                loading="eager"
                fetchPriority="high"
                decoding="sync"
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
                loading="eager"
                fetchPriority="high"
                decoding="sync"
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
  fullScreen: PropTypes.bool,
};
