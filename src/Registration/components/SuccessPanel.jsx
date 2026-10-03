import PropTypes from 'prop-types';
import Icon from '@components/Icon';
import Button from '@components/Button';
import { formatDate } from '../utils/date';
import { ROUTES } from '@data/navigation';

export default function SuccessPanel({ data, onRegisterAnother, panelRef }) {
  const firstName = data.fullName?.trim().split(' ')[0] || 'there';
  const refCode = data.refCode || 'REG-2026-COHORT';

  const summary = [
    { label: 'Specialization', value: data.course },
    { label: 'Cohort Start', value: formatDate(data.startDate) },
    { label: 'Delivery Mode', value: data.mode },
    { label: 'Batch Time', value: data.batch },
  ];

  return (
    <div className="reg-success" ref={panelRef} tabIndex={-1} aria-live="polite">
      <div className="reg-success__badge" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="76" height="76" className="reg-success__svg">
          <circle className="reg-success__ring" cx="32" cy="32" r="29" />
          <path className="reg-success__tick" d="M19.5 32.5 28 41 44.5 23" />
        </svg>
      </div>

      <div className="reg-success__pill">
        <Icon name="spark" size={14} /> Application Ref: <strong>{refCode}</strong>
      </div>

      <h2 className="reg-success__title">
        Thank you, {firstName}. Your seat registration is confirmed.
      </h2>

      <p className="reg-success__lead">
        A formal confirmation and onboarding dossier have been dispatched to{' '}
        <strong>{data.email}</strong>. Our admissions coordinator will reach out before your batch commences.
      </p>

      <dl className="reg-success__summary">
        {summary.map((item) => (
          <div key={item.label} className="reg-success__summary-item">
            <dt>{item.label}</dt>
            <dd>{item.value || '—'}</dd>
          </div>
        ))}
      </dl>

      <div className="reg-success__actions">
        <Button
          type="button"
          variant="outline"
          onClick={onRegisterAnother}
          iconLeft="refresh"
        >
          Register another applicant
        </Button>
        <Button
          to={ROUTES.HOME}
          variant="primary"
          iconRight="arrow"
        >
          Return to home
        </Button>
      </div>
    </div>
  );
}

SuccessPanel.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    course: PropTypes.string,
    startDate: PropTypes.string,
    mode: PropTypes.string,
    batch: PropTypes.string,
    refCode: PropTypes.string,
  }).isRequired,
  onRegisterAnother: PropTypes.func.isRequired,
  panelRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
