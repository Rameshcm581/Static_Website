import PropTypes from 'prop-types';

export default function Field({
  name,
  label,
  htmlFor,
  required,
  optional,
  error,
  shaking,
  onShakeEnd,
  className = '',
  children,
}) {
  const fieldClasses = [
    'reg-field',
    error && 'is-invalid',
    shaking && 'is-shaking',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={fieldClasses}
      data-field={name}
      onAnimationEnd={(e) => {
        if (e.animationName.includes('shake') && onShakeEnd) {
          onShakeEnd();
        }
      }}
    >
      {label && (
        <div className="reg-field__label-row">
          <label htmlFor={htmlFor || name} id={`${name}-label`} className="reg-field__label">
            {label}
            {required && <span className="reg-req" aria-hidden="true"> *</span>}
            {optional && <span className="reg-opt"> (optional)</span>}
          </label>
        </div>
      )}
      <div className="reg-field__control">{children}</div>
      {error && (
        <p className="reg-field__error" role="alert" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  error: PropTypes.string,
  shaking: PropTypes.bool,
  onShakeEnd: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
