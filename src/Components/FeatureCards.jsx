import PropTypes from 'prop-types';
import Icon from './Icon';
import './styles/FeatureCards.css';

export default function FeatureCards({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <div className="feature-card" key={item.title}>
          <div className="feature-card__icon">
            <Icon name={item.icon} size={22} stroke={1.4} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

FeatureCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
