// src/Home/Home/FloatCard.jsx — glass card floating over the hero stage
import PropTypes from 'prop-types';
import Icon from '@components/Icon';
import './styles/FloatCard.css';

const TAG_ICON = { ok: 'check', pending: 'spark', done: 'check' };

export default function FloatCard({ className, icon, title, sub, tag, tone = 'ok', tagTone = 'ok' }) {
  return (
    <div className={`float-card ${className}`}>
      <div className="row">
        <div className={`ico ico--${tone}`}><Icon name={icon} size={18} /></div>
        <div>
          <h4>{title}</h4>
          <div className="sub">{sub}</div>
          <div className={`tag tag-${tagTone}`}>
            <Icon name={TAG_ICON[tagTone]} size={11} />
            {tag}
          </div>
        </div>
      </div>
    </div>
  );
}

FloatCard.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['ok', 'brass', 'ink']),
  tagTone: PropTypes.oneOf(['ok', 'pending', 'done']),
};
