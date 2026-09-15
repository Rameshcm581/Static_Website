// src/Home/Home/PhoneMock.jsx — illustrative client build tracker shown on the hero stage.
// Decorative: the copy is a picture of how a build looks from the client's side, not live data.
import Icon from '@components/Icon';
import './styles/PhoneMock.css';

const MILESTONES = [
  { label: 'Auth & payments', state: 'done', note: 'Done' },
  { label: 'Admin dashboard', state: 'done', note: 'Done' },
  { label: 'Notifications', state: 'review', note: 'In review' },
  { label: 'Store submission', state: 'next', note: 'Next' },
];

export default function PhoneMock() {
  return (
    <div className="phone-wrap" aria-hidden="true">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span className="phone-signal"><i /><i /><i /><i /></span>
          </div>
          <div className="phone-island" />

          <header className="phone-head">
            <h3>v1.0 launch</h3>
            <div className="phone-progress"><div className="phone-progress__fill" /></div>
            <div className="phone-meta"><span>Sprint 3 of 4</span><span>72%</span></div>
          </header>

          <ul className="phone-list">
            {MILESTONES.map((m) => (
              <li key={m.label} className={`is-${m.state}`}>
                <span className="phone-check"><Icon name="check" size={11} stroke={2.4} /></span>
                <span className="phone-label">{m.label}</span>
                <span className="phone-note">{m.note}</span>
              </li>
            ))}
          </ul>

          <div className="phone-foot">
            <span className="phone-foot-ico"><Icon name="code" size={13} /></span>
            <span>Preview build live · repo shared with you</span>
          </div>
        </div>
      </div>
    </div>
  );
}
