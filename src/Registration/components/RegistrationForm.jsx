import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Button';
import Stepper from './Stepper';
import StepPersonal from './StepPersonal';
import StepCourse from './StepCourse';
import StepReview from './StepReview';
import SuccessPanel from './SuccessPanel';
import { LAST_STEP, STEP_FIELDS, validate } from '../utils/validation';
import { submitRegistrationApi } from '@api/apicall';

export default function RegistrationForm({ values, onChange, onReset }) {
  const [step, setStep] = useState(1);
  const [backwards, setBackwards] = useState(false);
  const [errors, setErrors] = useState({});
  const [shaking, setShaking] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(null);

  const cardRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  // Field change handling
  const handleInput = (e) => {
    const { name, type } = e.target;
    onChange(name, type === 'checkbox' ? e.target.checked : e.target.value);
    setErrors((prev) => {
      if (!(name in prev)) {
        return prev;
      }
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const fieldState = (name) => ({
    error: errors[name],
    shaking: shaking === name,
    onShakeEnd: () => setShaking(null),
  });

  // Validation execution
  const runValidation = (names) => {
    const found = validate(names, values);
    setErrors((prev) => {
      const next = { ...prev };
      names.forEach((n) => {
        if (found[n]) {
          next[n] = found[n];
        } else {
          delete next[n];
        }
      });
      return next;
    });

    const first = names.find((n) => found[n]);
    if (!first) {
      return true;
    }

    setShaking(first);
    const el = formRef.current?.elements[first];
    const node = el instanceof RadioNodeList ? el[0] : el;
    node?.focus({ preventScroll: true });
    node?.closest('.reg-field')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return false;
  };

  // Step navigation
  const goToStep = (n, { focusHeading = true } = {}) => {
    setBackwards(n < step);
    setStep(n);
    setSubmitError('');
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (focusHeading) {
      setTimeout(() => {
        formRef.current?.querySelector('.reg-legend__title')?.focus({ preventScroll: true });
      }, 60);
    }
  };

  const next = () => {
    if (!runValidation(STEP_FIELDS[step])) {
      return;
    }
    if (step < LAST_STEP) {
      goToStep(step + 1);
    }
  };

  const back = () => {
    if (step > 1) {
      goToStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enter key inside early steps behaves like Continue
    if (step < LAST_STEP) {
      next();
      return;
    }
    if (!runValidation(STEP_FIELDS[LAST_STEP])) {
      return;
    }

    const refCode = `REG-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const data = { ...values, refCode, submittedAt: new Date().toISOString() };
    setSubmitting(true);
    setSubmitError('');

    try {
      await submitRegistrationApi(data);
      setSubmitted(data);
    } catch (err) {
      setSubmitError(
        err.message || 'We could not submit your registration. Please check your connection and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!submitted) {
      return;
    }
    successRef.current?.focus();
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [submitted]);

  const registerAnother = () => {
    onReset();
    setErrors({});
    setShaking(null);
    setSubmitted(null);
    setSubmitError('');
    setBackwards(false);
    setStep(1);
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      document.getElementById('fullName')?.focus({ preventScroll: true });
    }, 250);
  };

  const stepProps = { values, errors, onChange: handleInput, fieldState };

  return (
    <div className="reg-card" ref={cardRef} id="registration-card">
      <div className="reg-card__head">
        <div className="reg-card__head-row">
          <div>
            <h2 className="reg-card__title">Registration Form</h2>
            <p className="reg-card__sub">
              Three streamlined steps &middot; Takes approximately two minutes
            </p>
          </div>
          <span className="reg-card__step-badge" aria-live="polite">
            Step <strong>{step}</strong> of {LAST_STEP}
          </span>
        </div>
        <Stepper current={step} onStepClick={(targetStep) => goToStep(targetStep)} />
      </div>

      {submitted ? (
        <SuccessPanel
          data={submitted}
          onRegisterAnother={registerAnother}
          panelRef={successRef}
        />
      ) : (
        <form
          id="registration-form"
          className="reg-form"
          ref={formRef}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="reg-steps-wrap">
            <div
              key={step}
              className={`reg-step-view is-active ${backwards ? 'is-back' : ''}`}
            >
              {step === 1 && <StepPersonal {...stepProps} />}
              {step === 2 && <StepCourse {...stepProps} />}
              {step === 3 && <StepReview {...stepProps} onGoTo={goToStep} />}
            </div>
          </div>

          {submitError && (
            <div className="reg-submit-error" role="alert">
              <span className="reg-submit-error__icon" aria-hidden="true">⚠️</span>
              <div className="reg-submit-error__content">
                <strong>Submission failed:</strong> {submitError}
              </div>
            </div>
          )}

          <div className="reg-actions">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={back}
                className="reg-btn-back"
              >
                Back
              </Button>
            )}

            <div className="reg-actions__spacer" />

            {step < LAST_STEP ? (
              <Button
                type="submit"
                variant="primary"
                iconRight="arrow"
                className="reg-btn-continue"
              >
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                iconRight="arrow"
                disabled={submitting}
                className="reg-btn-submit"
              >
                {submitting ? 'Submitting registration…' : 'Submit registration'}
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

RegistrationForm.propTypes = {
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
