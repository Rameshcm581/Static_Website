import PropTypes from 'prop-types';
import Field from './Field';
import Icon from '@components/Icon';
import { BATCHES, COURSE_GROUPS, MODES, QUALIFICATIONS } from '../data/courses';
import { todayISO } from '../utils/date';

export default function StepCourse({ values, onChange, fieldState }) {
  const today = todayISO();
  const batchIndex = Math.max(
    0,
    BATCHES.findIndex((b) => b.value === values.batch)
  );

  return (
    <fieldset className="reg-fieldset">
      <legend className="reg-legend">
        <span className="reg-legend__title" tabIndex={-1}>
          Course &amp; schedule
        </span>
        <span className="reg-legend__sub">
          Select your specialization, preferred delivery mode, and timetable
        </span>
      </legend>

      <div className="reg-grid-2">
        <Field name="course" label="Select course" htmlFor="course" required {...fieldState('course')}>
          <div className="reg-select-wrap">
            <select
              id="course"
              name="course"
              value={values.course}
              onChange={onChange}
              className="reg-select"
              required
            >
              <option value="" disabled>
                Choose a specialization…
              </option>
              {COURSE_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.courses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <span className="reg-select-chevron" aria-hidden="true">
              <Icon name="chevron" size={14} />
            </span>
          </div>
        </Field>

        <Field name="startDate" label="Preferred start date" htmlFor="startDate" required {...fieldState('startDate')}>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={values.startDate}
            onChange={onChange}
            min={today}
            className="reg-input"
            required
          />
        </Field>
      </div>

      <Field name="mode" label="Learning mode" required {...fieldState('mode')}>
        <div className="reg-choice-cards" role="radiogroup" aria-labelledby="mode-label">
          {MODES.map((m) => {
            const isChecked = values.mode === m.value;
            return (
              <label
                key={m.value}
                htmlFor={`mode-${m.value}`}
                className={`reg-choice-card ${isChecked ? 'is-active' : ''}`}
              >
                <input
                  type="radio"
                  id={`mode-${m.value}`}
                  name="mode"
                  value={m.value}
                  checked={isChecked}
                  onChange={onChange}
                  className="sr-only"
                  required
                />
                <div className="reg-choice-card__head">
                  <span className="reg-choice-card__icon">
                    <Icon name={m.icon} size={20} stroke={1.75} />
                  </span>
                  <span className={`reg-choice-card__check ${isChecked ? 'is-visible' : ''}`}>
                    <Icon name="check" size={12} stroke={2.5} />
                  </span>
                </div>
                <strong className="reg-choice-card__title">{m.value}</strong>
                <p className="reg-choice-card__desc">{m.desc}</p>
              </label>
            );
          })}
        </div>
      </Field>

      <div className="reg-grid-2">
        <Field name="batch" label="Preferred batch timing" {...fieldState('batch')}>
          <div className="reg-segmented" role="radiogroup" aria-labelledby="batch-label">
            {BATCHES.map((b) => {
              const isSelected = values.batch === b.value;
              return (
                <label
                  key={b.value}
                  className={`reg-segmented__btn ${isSelected ? 'is-active' : ''}`}
                  htmlFor={`batch-${b.value}`}
                >
                  <input
                    type="radio"
                    id={`batch-${b.value}`}
                    name="batch"
                    value={b.value}
                    checked={isSelected}
                    onChange={onChange}
                    className="sr-only"
                  />
                  <span>{b.label}</span>
                </label>
              );
            })}
            <span
              className="reg-segmented__indicator"
              aria-hidden="true"
              style={{
                width: `${100 / BATCHES.length}%`,
                transform: `translateX(${batchIndex * 100}%)`,
              }}
            />
          </div>
        </Field>

        <Field name="qualification" label="Highest qualification" htmlFor="qualification" optional {...fieldState('qualification')}>
          <div className="reg-select-wrap">
            <select
              id="qualification"
              name="qualification"
              value={values.qualification}
              onChange={onChange}
              className="reg-select"
            >
              <option value="">Select qualification level…</option>
              {QUALIFICATIONS.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
            <span className="reg-select-chevron" aria-hidden="true">
              <Icon name="chevron" size={14} />
            </span>
          </div>
        </Field>
      </div>

      <Field
        name="message"
        label="Background, questions or goals"
        htmlFor="message"
        optional
        {...fieldState('message')}
      >
        <textarea
          id="message"
          name="message"
          rows={3}
          value={values.message}
          onChange={onChange}
          placeholder="Briefly tell us about your prior background, technical interests, or questions for our academic mentors…"
          className="reg-textarea"
        />
      </Field>
    </fieldset>
  );
}

StepCourse.propTypes = {
  values: PropTypes.shape({
    course: PropTypes.string,
    startDate: PropTypes.string,
    mode: PropTypes.string,
    batch: PropTypes.string,
    qualification: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  fieldState: PropTypes.func.isRequired,
};
