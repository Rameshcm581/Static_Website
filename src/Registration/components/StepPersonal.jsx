import PropTypes from 'prop-types';
import Field from './Field';
import { GENDERS } from '../data/courses';
import { todayISO } from '../utils/date';

export default function StepPersonal({ values, onChange, fieldState }) {
  const today = todayISO();

  return (
    <fieldset className="reg-fieldset">
      <legend className="reg-legend">
        <span className="reg-legend__title" tabIndex={-1}>
          Personal details
        </span>
        <span className="reg-legend__sub">
          Tell us about yourself so we can set up your learner profile
        </span>
      </legend>

      <div className="reg-grid-2">
        <Field name="fullName" label="Full name" htmlFor="fullName" required {...fieldState('fullName')}>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={onChange}
            placeholder="e.g. Priya Sharma"
            autoComplete="name"
            className="reg-input"
            required
          />
        </Field>

        <Field name="dob" label="Date of birth" htmlFor="dob" required {...fieldState('dob')}>
          <input
            type="date"
            id="dob"
            name="dob"
            value={values.dob}
            onChange={onChange}
            max={today}
            className="reg-input"
            required
          />
        </Field>
      </div>

      <div className="reg-grid-2">
        <Field name="email" label="Email address" htmlFor="email" required {...fieldState('email')}>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="you@example.com"
            autoComplete="email"
            className="reg-input"
            required
          />
        </Field>

        <Field name="phone" label="Phone number" htmlFor="phone" required {...fieldState('phone')}>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
            placeholder="10-digit mobile number"
            autoComplete="tel"
            inputMode="numeric"
            className="reg-input"
            required
          />
        </Field>
      </div>

      <Field name="gender" label="Gender" optional {...fieldState('gender')}>
        <div className="reg-chips" role="radiogroup" aria-labelledby="gender-label">
          {GENDERS.map((g) => {
            const isSelected = values.gender === g;
            return (
              <label
                key={g}
                className={`reg-chip ${isSelected ? 'is-selected' : ''}`}
                htmlFor={`gender-${g}`}
              >
                <input
                  type="radio"
                  id={`gender-${g}`}
                  name="gender"
                  value={g}
                  checked={isSelected}
                  onChange={onChange}
                  className="sr-only"
                />
                <span>{g}</span>
              </label>
            );
          })}
        </div>
      </Field>

      <div className="reg-grid-2">
        <Field name="address" label="Street address" htmlFor="address" optional {...fieldState('address')}>
          <input
            type="text"
            id="address"
            name="address"
            value={values.address}
            onChange={onChange}
            placeholder="Street, locality or apartment"
            autoComplete="street-address"
            className="reg-input"
          />
        </Field>

        <Field name="city" label="City" htmlFor="city" required {...fieldState('city')}>
          <input
            type="text"
            id="city"
            name="city"
            value={values.city}
            onChange={onChange}
            placeholder="e.g. Bengaluru, Erode, Chennai"
            autoComplete="address-level2"
            className="reg-input"
            required
          />
        </Field>
      </div>
    </fieldset>
  );
}

StepPersonal.propTypes = {
  values: PropTypes.shape({
    fullName: PropTypes.string,
    dob: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    gender: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  fieldState: PropTypes.func.isRequired,
};
