// Components/WhySection.jsx — why teams choose us: the statement, centred; the six reasons in two ledgers
import PropTypes from 'prop-types';
import './styles/WhySection.css';

const REASONS = [
  { title: 'Small & senior', text: 'You work with the people writing your code. Decisions are fast and quality stays high.' },
  { title: 'Real-problem first', text: 'Every engagement starts with discovery — we understand the actual problem before writing any code.' },
  { title: 'Outcome-owned', text: 'We treat the result as ours. From discovery through iteration, one team carries the engagement.' },
  { title: 'Code you own', text: 'Clean, documented, readable. Your future engineering hires will thank you for it.' },
  { title: 'Ship early, then improve', text: 'Get something usable in front of users fast, then improve with evidence — not opinion.' },
  { title: 'Honest scope & timelines', text: 'We tell you the awkward truth before the engagement, not at the end of it. Fixed quotes, no surprises.' },
];
const LEFT = REASONS.slice(0, 3);
const RIGHT = REASONS.slice(3);

function Ledger({ items }) {
  return (
    <dl className="why-ledger">
      {items.map((r) => (
        <div key={r.title}>
          <dt>{r.title}</dt>
          <dd>{r.text}</dd>
        </div>
      ))}
    </dl>
  );
}
Ledger.propTypes = { items: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string.isRequired, text: PropTypes.string.isRequired })).isRequired };

export default function WhySection() {
  return (
    <section id="why" className="why">
      <div className="wrap">
        <div className="why-head">
          <div className="eyebrow">Why teams choose us</div>
          <h2>A small team that<br /><span className="italic">acts like yours.</span></h2>
          <p className="why-statement">
            We&apos;re not a body shop and we&apos;re not an agency. We&apos;re a product engineering
            studio that&apos;s chosen, repeatedly, by founders and product owners who want
            <em> real ownership</em> and <em>real accountability</em>.
          </p>
        </div>
        <div className="why-ledgers">
          <Ledger items={LEFT} />
          <Ledger items={RIGHT} />
        </div>
      </div>
    </section>
  );
}
