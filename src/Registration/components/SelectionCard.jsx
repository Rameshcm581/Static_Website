import PropTypes from 'prop-types';
import useFlash from '../hooks/useFlash';
import { COURSES } from '../data/courses';
import { formatDate } from '../utils/date';
import { COMPANY, MAILTO } from '@data/company';
import Icon from '@components/Icon';

function SummaryRow({ label, value, empty }) {
  const flash = useFlash(value);
  const valClasses = [
    'reg-selection-row__val',
    !value && 'is-empty',
    flash && 'is-updated',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="reg-selection-row">
      <dt className="reg-selection-row__dt">{label}</dt>
      <dd className={valClasses}>{value || empty}</dd>
    </div>
  );
}

SummaryRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  empty: PropTypes.string.isRequired,
};

export default function SelectionCard({ values }) {
  const info = COURSES[values.course];

  return (
    <aside className="reg-selection" aria-label="Live registration preview">
      <div className="reg-selection-card">
        <div className="reg-selection-card__head">
          <div className="reg-selection-card__badge">
            <span className="reg-selection-card__live-dot" /> Live Overview
          </div>
          <h2 className="reg-selection-card__title">Your Selection</h2>
        </div>

        <dl className="reg-selection-list">
          <SummaryRow label="Course" value={values.course} empty="Not selected yet" />
          <SummaryRow label="Start Date" value={formatDate(values.startDate)} empty="Choose preferred date" />
          <SummaryRow label="Mode" value={values.mode} empty="Classroom, online or hybrid" />
          <SummaryRow label="Batch" value={values.batch} empty="Weekday morning" />
        </dl>

        {info && (
          <div className="reg-course-note" key={values.course}>
            <div className="reg-course-note__badge">
              <span className="reg-course-note__tag">{info.duration}</span>
              <span className="reg-course-note__dot">&bull;</span>
              <span className="reg-course-note__level">{info.level}</span>
            </div>
            <p className="reg-course-note__blurb">{info.blurb}</p>
          </div>
        )}
      </div>

      <div className="reg-selection-help">
        <div className="reg-selection-help__icon">
          <Icon name="phone" size={16} />
        </div>
        <p className="reg-selection-help__text">
          Need academic guidance? Call{' '}
          <a href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}>{COMPANY.phone}</a> or{' '}
          <a href={MAILTO}>write to admissions</a>.
        </p>
      </div>
    </aside>
  );
}

SelectionCard.propTypes = {
  values: PropTypes.shape({
    course: PropTypes.string,
    startDate: PropTypes.string,
    mode: PropTypes.string,
    batch: PropTypes.string,
  }).isRequired,
};
