import PropTypes from 'prop-types';
import Field from './Field';
import Icon from '@components/Icon';
import { formatDate } from '../utils/date';
import { ROUTES } from '@data/navigation';
import { Link } from 'react-router-dom';

function ReviewGroup({ title, icon, rows, onEdit }) {
  return (
    <div className="reg-review-group">
      <div className="reg-review-group__head">
        <div className="reg-review-group__title-box">
          <span className="reg-review-group__icon">
            <Icon name={icon} size={16} />
          </span>
          <h3 className="reg-review-group__title">{title}</h3>
        </div>
        <button
          type="button"
          className="reg-review-group__edit"
          onClick={onEdit}
          aria-label={`Edit ${title}`}
        >
          Edit
        </button>
      </div>
      <dl className="reg-review-list">
        {rows.map(([label, value, fallback]) => (
          <div key={label} className="reg-review-list__row">
            <dt className="reg-review-list__dt">{label}</dt>
            <dd className={`reg-review-list__dd ${!value ? 'is-muted' : ''}`}>
              {value || fallback || '—'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

ReviewGroup.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default function StepReview({ values, onChange, fieldState, onGoTo }) {
  const personal = [
    ['Full name', values.fullName],
    ['Date of birth', formatDate(values.dob)],
    ['Email', values.email],
    ['Phone', values.phone],
    ['Gender', values.gender, 'Not specified'],
    ['Address', values.address, 'Not provided'],
    ['City', values.city],
  ];

  const course = [
    ['Specialization', values.course],
    ['Cohort start', formatDate(values.startDate)],
    ['Delivery mode', values.mode],
    ['Schedule / batch', values.batch],
    ['Qualification', values.qualification, 'Not specified'],
    ['Notes / questions', values.message, 'None provided'],
  ];

  return (
    <section className="reg-review-sec" aria-labelledby="review-title">
      <div className="reg-legend">
        <span className="reg-legend__title" id="review-title" tabIndex={-1}>
          Review &amp; confirmation
        </span>
        <span className="reg-legend__sub">
          Please verify your information before final registration submission
        </span>
      </div>

      <div className="reg-review-groups">
        <ReviewGroup
          title="Personal Profile"
          icon="user"
          rows={personal}
          onEdit={() => onGoTo(1)}
        />
        <ReviewGroup
          title="Course & Schedule"
          icon="layers"
          rows={course}
          onEdit={() => onGoTo(2)}
        />
      </div>

      <Field name="terms" className="reg-consent-field" {...fieldState('terms')}>
        <label className="reg-consent-label" htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={values.terms}
            onChange={onChange}
            className="reg-checkbox"
            required
          />
          <span className="reg-consent-text">
            I agree to the <Link to={ROUTES.TERMS} target="_blank" rel="noreferrer">Terms of Service</Link> and{' '}
            <Link to={ROUTES.PRIVACY} target="_blank" rel="noreferrer">Privacy Policy</Link>, and consent to admissions
            contacting me regarding this registration cohort. <span className="reg-req">*</span>
          </span>
        </label>
      </Field>
    </section>
  );
}

StepReview.propTypes = {
  values: PropTypes.shape({
    fullName: PropTypes.string,
    dob: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    gender: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    course: PropTypes.string,
    startDate: PropTypes.string,
    mode: PropTypes.string,
    batch: PropTypes.string,
    qualification: PropTypes.string,
    message: PropTypes.string,
    terms: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  fieldState: PropTypes.func.isRequired,
  onGoTo: PropTypes.func.isRequired,
};
