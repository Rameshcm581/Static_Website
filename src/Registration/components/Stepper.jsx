import PropTypes from 'prop-types';
import Icon from '@components/Icon';

const STEPS = [
  { num: 1, label: 'Personal' },
  { num: 2, label: 'Course' },
  { num: 3, label: 'Review' },
];

export default function Stepper({ current, onStepClick }) {
  return (
    <nav className="reg-stepper" aria-label="Registration progress">
      <ol className="reg-stepper__list">
        {STEPS.map((s, idx) => {
          const isDone = s.num < current;
          const isCurrent = s.num === current;
          const statusClass = isDone ? 'is-complete' : isCurrent ? 'is-current' : 'is-upcoming';

          return (
            <li key={s.num} className={`reg-stepper__item ${statusClass}`}>
              <button
                type="button"
                className="reg-stepper__btn"
                disabled={!isDone}
                onClick={() => isDone && onStepClick && onStepClick(s.num)}
                aria-current={isCurrent ? 'step' : undefined}
                aria-label={`Step ${s.num}: ${s.label}${isDone ? ' (completed)' : isCurrent ? ' (current)' : ''}`}
              >
                <span className="reg-stepper__marker">
                  {isDone ? <Icon name="check" size={14} stroke={2.5} /> : s.num}
                </span>
                <span className="reg-stepper__label">{s.label}</span>
              </button>
              {idx < STEPS.length - 1 && (
                <span
                  className={`reg-stepper__line ${current > s.num ? 'is-filled' : ''}`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Stepper.propTypes = {
  current: PropTypes.number.isRequired,
  onStepClick: PropTypes.func,
};
