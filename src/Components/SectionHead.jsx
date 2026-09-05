import PropTypes from 'prop-types';
import './styles/SectionHead.css';

export default function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="section-head">
      <div className="left">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {text && <div className="right">{text}</div>}
    </div>
  );
}

SectionHead.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node,
};
