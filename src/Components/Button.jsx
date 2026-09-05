import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import './styles/Button.css';

const VARIANT_CLASS = {
  primary: 'btn-primary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
  gold: 'btn-gold',
  'outline-dark': 'btn-outline-dark',
};

const SIZE_CLASS = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  iconSize,
  className = '',
  disabled = false,
  onClick,
  target,
  rel,
}) {
  const classes = ['btn', VARIANT_CLASS[variant], SIZE_CLASS[size], className].filter(Boolean).join(' ');
  const iconPx = iconSize || (size === 'lg' ? 16 : 14);

  const content = (
    <>
      {iconLeft && <Icon name={iconLeft} size={iconPx} />}
      {children}
      {iconRight && <Icon name={iconRight} size={iconPx} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    const safeRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;
    return (
      <a href={href} className={classes} onClick={onClick} target={target} rel={safeRel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(Object.keys(VARIANT_CLASS)),
  size: PropTypes.oneOf(Object.keys(SIZE_CLASS)),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  iconSize: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
};
