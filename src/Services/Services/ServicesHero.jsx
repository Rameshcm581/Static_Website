// src/Services/Services/ServicesHero.jsx — dark hero with hub + satellite cards
import Icon from '@components/Icon';
import { COMPANY } from '@data/company';
import './styles/ServicesHero.css';

const SATELLITES = [
  { icon: 'rocket', cls: 'c0', title: 'MVP Development', text: 'From sketch to a working v1.0', tag: 'prog', label: 'Shipping' },
  { icon: 'globe', cls: 'c1', title: 'Web Applications', text: 'SaaS, dashboards, marketplaces', tag: 'done', label: 'Live' },
  { icon: 'phone2', cls: 'c2', title: 'Mobile Applications', text: 'iOS & Android · native feel', tag: 'sched', label: 'Beta soon' },
  { icon: 'spark', cls: 'c0', title: 'AI / ML & Chatbots', text: 'Predictive models, RAG & assistants', tag: 'done', label: 'Pilot live' },
  { icon: 'iot', cls: 'c1', title: 'IoT & AR', text: 'Connected devices & AR experiences', tag: 'prog', label: 'In design' },
  { icon: 'layers', cls: 'c2', title: 'Technology Consulting', text: 'Advisors who also build', tag: 'prog', label: 'Active' },
];

// Base angle of each satellite on the orbit; the animation adds a full turn on top.
const ORBIT_START = -90;
const ORBIT_STEP = 60;

const STATS = [
  { num: '6', label: 'Service areas', detail: 'Build, ship, advise' },
  { num: '3', label: 'Platforms', detail: 'Web · iOS · Android' },
  { num: COMPANY.foundedYear, label: 'Founded', detail: `${COMPANY.operationsCity}, ${COMPANY.state}` },
  { num: '1', label: 'Accountable team', detail: 'One lead throughout' },
];

const OUTCOMES = ['Faster time-to-market', 'AI built in, not bolted on', 'Senior team, total ownership'];

export default function ServicesHero() {
  return (
    <section className="sv-hero">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="sv-badge"><span className="ico"><Icon name="cpu" size={13} stroke={1.8} /></span> Your product engineering team</div>
            <h1>Everything your<br />product needs — <em>shipped.</em></h1>
            <p className="lede">{COMPANY.name} isn&apos;t a vendor you brief and chase. It&apos;s a small, senior product team that owns the build end-to-end — discovery, design, engineering, and the AI bits — so your team can stay on the customer, not the coordination.</p>
            <div className="sv-outcomes">
              {OUTCOMES.map((outcome) => (
                <div className="sv-outcome" key={outcome}><span className="d" /> {outcome}</div>
              ))}
            </div>
            <div className="sv-stats">
              {STATS.map((stat) => (
                <div className="sv-stat" key={stat.label}>
                  <div className="num">{stat.num}</div>
                  <div className="lbl">{stat.label}</div>
                  <div className="det">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="sv-anim" aria-hidden="true">
            <div className="sv-hub">
              <div className="ico"><Icon name="cpu" size={26} stroke={1.6} /></div>
              <div className="count">6</div>
              <div className="lbl">Services</div>
            </div>
            {SATELLITES.map((sat, i) => (
              <div className="sv-orbiter" key={sat.title} style={{ '--a': `${ORBIT_START + i * ORBIT_STEP}deg` }}>
                <span className="sv-spoke" />
                <div className="sv-sat">
                  <div className="row">
                    <div className={`sat-ico ${sat.cls}`}><Icon name={sat.icon} size={16} stroke={1.5} /></div>
                    <div className="sat-body">
                      <h5>{sat.title}</h5>
                      <p>{sat.text}</p>
                      <span className={`stag ${sat.tag}`}>{sat.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
