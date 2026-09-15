// src/Services/Services/Screens.jsx — small illustrative screens for the service showcase.
// Drawn in code, one per service area. Illustrative of the kind of product, not client work.
import PropTypes from 'prop-types';
import './styles/Screens.css';

const Status = () => (
  <div className="sc-status"><span>9:41</span><span className="sc-sig"><i /><i /><i /><i /></span></div>
);

export function MvpScreen() {
  return (
    <div className="sc sc-mvp">
      <Status />
      <div className="sc-mvp__hero">
        <small>v1.0 · Beta</small>
        <h4>Book a slot in 20 seconds.</h4>
        <span className="sc-btn">Get started</span>
      </div>
      <ul className="sc-mvp__list">
        <li><b>Tue 10:30</b><span>Erode North</span><em>Open</em></li>
        <li><b>Tue 11:15</b><span>Perundurai</span><em>Open</em></li>
        <li className="is-taken"><b>Tue 12:00</b><span>Erode North</span><em>Taken</em></li>
      </ul>
    </div>
  );
}

export function WebScreen() {
  const bars = [36, 52, 44, 68, 61, 80, 73, 90, 84, 100];
  return (
    <div className="sc sc-web">
      <aside><b /><span className="on" /><span /><span /><span /></aside>
      <div className="sc-web__main">
        <div className="sc-web__top"><b>Orders</b><span>This month</span></div>
        <div className="sc-web__stats">
          <div><small>Orders</small><b>1,284</b></div>
          <div><small>Revenue</small><b>₹ 9.6L</b></div>
          <div><small>On time</small><b>97%</b></div>
        </div>
        <div className="sc-web__chart">{bars.map((h, i) => <i key={i} style={{ '--h': `${h}%` }} />)}</div>
        <div className="sc-web__rows">
          <div><span>#4821</span><span>Erode North</span><em>Paid</em></div>
          <div><span>#4820</span><span>Perundurai</span><em className="pend">Pending</em></div>
          <div><span>#4819</span><span>Bhavani</span><em>Paid</em></div>
        </div>
      </div>
    </div>
  );
}

export function MobileScreen() {
  return (
    <div className="sc sc-mobile">
      <Status />
      <div className="sc-mobile__head"><b>Today</b><i /></div>
      <div className="sc-mobile__card">
        <small>Next delivery</small>
        <b>Order #4821 · 1:00 pm</b>
        <span>Out for delivery · 2 stops away</span>
      </div>
      <div className="sc-mobile__grid">
        <div><b>12</b><span>Deliveries</span></div>
        <div><b>3</b><span>Pickups</span></div>
        <div><b>₹ 18k</b><span>Collected</span></div>
        <div><b>97%</b><span>On time</span></div>
      </div>
      <div className="sc-mobile__tabs"><span className="on" /><span /><span /><span /></div>
    </div>
  );
}

export function AiScreen() {
  const msgs = [
    ['bot', 'Hi! I can help with orders, returns and delivery.'],
    ['me', 'Where is order 4821?'],
    ['bot', 'It left the Erode hub at 8:10 and is out for delivery. Expected by 1 pm.'],
    ['me', 'Can I change the address?'],
    ['bot', 'Yes — until the driver is 2 stops away. Open the address form?'],
  ];
  return (
    <div className="sc sc-ai">
      <div className="sc-ai__head"><i /><div><b>Support assistant</b><span>Answers from your own docs</span></div></div>
      <div className="sc-ai__thread">{msgs.map(([who, t], i) => <p key={i} className={who}>{t}</p>)}</div>
      <div className="sc-ai__input"><span>Type a message</span><i /></div>
    </div>
  );
}

export function IotScreen() {
  const tiles = [
    ['Line 2 · Motor', '61 °C', 'ok'],
    ['Cold room', '3.8 °C', 'ok'],
    ['Compressor', '82 %', 'warn'],
    ['Water tank', '1,240 L', 'ok'],
  ];
  return (
    <div className="sc sc-iot">
      <div className="sc-iot__top"><b>Plant overview</b><span><i />Live</span></div>
      <div className="sc-iot__tiles">
        {tiles.map(([name, val, state]) => (
          <div key={name} className={state}><small>{name}</small><b>{val}</b></div>
        ))}
      </div>
      <div className="sc-iot__log">
        <div><span>08:12</span>Compressor load above 80 % for 6 min</div>
        <div><span>07:40</span>Cold room door opened · 40 s</div>
        <div><span>07:05</span>Shift start · all sensors reporting</div>
      </div>
    </div>
  );
}

export function ConsultingScreen() {
  return (
    <div className="sc sc-doc">
      <div className="sc-doc__head"><small>Technical review · v2</small><b>Architecture &amp; roadmap</b></div>
      <div className="sc-doc__block">
        <b>Findings</b>
        <p>Single database shared by three apps. No staging. Deploys by hand on Fridays.</p>
      </div>
      <div className="sc-doc__block">
        <b>Recommendation</b>
        <ul>
          <li><i className="done" />Split billing into its own service</li>
          <li><i className="done" />Staging environment + automated deploys</li>
          <li><i />Pilot an AI assistant on support tickets</li>
        </ul>
      </div>
    </div>
  );
}

const SCREENS = {
  mvp: { frame: 'phone', Screen: MvpScreen },
  web: { frame: 'browser', Screen: WebScreen },
  mobile: { frame: 'phone', Screen: MobileScreen },
  ai: { frame: 'window', Screen: AiScreen },
  'iot-ar': { frame: 'window', Screen: IotScreen },
  consulting: { frame: 'sheet', Screen: ConsultingScreen },
};

export function Device({ id }) {
  const { frame, Screen } = SCREENS[id];
  return (
    <div className={`dev dev--${frame}`} aria-hidden="true">
      {frame === 'browser' && <div className="dev-bar"><i /><i /><i /><span /></div>}
      {frame === 'phone' && <div className="dev-island" />}
      <div className="dev-screen"><Screen /></div>
    </div>
  );
}
Device.propTypes = { id: PropTypes.oneOf(Object.keys(SCREENS)).isRequired };
