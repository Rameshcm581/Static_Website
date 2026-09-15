// src/Services/Services/ServiceGrid.jsx — the six service areas as a tabbed showcase
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHead from '@components/SectionHead';
import Icon from '@components/Icon';
import { ROUTES } from '@data/navigation';
import { Device } from './Screens';
import './styles/ServiceGrid.css';

const SERVICES = [
  { id: 'mvp', icon: 'rocket', title: 'MVP Development', short: 'MVP', to: ROUTES.MVP, desc: 'Validate fast with a focused first version. Single-feature focus, investor-ready prototype, a working v1.0.', list: ['Full-cycle MVP build', 'Investor-ready prototype', 'Single game-changing feature', 'End-to-end ownership'] },
  { id: 'web', icon: 'globe', title: 'Web Applications', short: 'Web', to: null, desc: 'Performant, scalable web products. Maintainable code, sensible architecture, real testing — and good UX.', list: ['SaaS & dashboards', 'React / Laravel / Node', 'Payments & auth', 'Admin & analytics'] },
  { id: 'mobile', icon: 'phone2', title: 'Mobile Applications', short: 'Mobile', to: null, desc: 'iOS and Android products that feel native and ship reliably. Built for engagement and retention.', list: ['iOS & Android', 'React Native + native', 'Push & deep links', 'Store-ready handover'] },
  { id: 'ai', icon: 'spark', title: 'AI / ML & Chatbots', short: 'AI / ML', to: ROUTES.CONSULTING, desc: 'Predictive models, intelligent automation, and conversational AI built into the products that move your numbers.', list: ['Predictive analytics', 'RAG & LLM assistants', 'Support & conversion bots', 'Production deployments'] },
  { id: 'iot-ar', icon: 'iot', title: 'IoT & AR', short: 'IoT & AR', to: ROUTES.CONSULTING, desc: 'Interconnected device systems and AR experiences — designed for real operational outcomes, not novelty.', list: ['IoT system design', 'Device data pipelines', 'AR strategy & pilots', 'Operational AR builds'] },
  { id: 'consulting', icon: 'layers', title: 'Technology Consulting', short: 'Consulting', to: ROUTES.CONSULTING, desc: 'Advisors who also build. Cross-industry technical proficiency and affordable IT consulting that ends in working software.', list: ['Tech & architecture audits', 'AI/ML adoption strategy', 'Conversion-focused UX', 'Team augmentation'] },
];

const idFromHash = () => {
  const id = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
  return SERVICES.some((s) => s.id === id) ? id : SERVICES[0].id;
};

export default function ServiceGrid() {
  const [active, setActive] = useState(idFromHash);
  const tabRefs = useRef({});
  const current = SERVICES.find((s) => s.id === active) || SERVICES[0];
  const index = SERVICES.indexOf(current);

  // #web / #mobile links from the hero and footer select the matching tab.
  useEffect(() => {
    const onHash = () => setActive(idFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const onKeyDown = (e) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1, Home: -index, End: SERVICES.length - 1 - index };
    if (!(e.key in keys)) {
      return;
    }
    e.preventDefault();
    const next = SERVICES[(index + keys[e.key] + SERVICES.length) % SERVICES.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section id="services" className="services">
      <div className="wrap">
        <SectionHead
          eyebrow="What we build"
          title={<>Six service areas.<br /><span className="italic">One accountable team.</span></>}
          text="We do product engineering and the consulting that supports it. We don't pretend to do everything — and we tell you honestly when a problem isn't ours to take."
        />

        <div className="show">
          <div className="show-tabs" role="tablist" aria-label="Service areas" onKeyDown={onKeyDown}>
            {SERVICES.map((s) => {
              const selected = s.id === active;
              return (
                <button
                  key={s.id}
                  id={s.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${s.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`show-tab${selected ? ' is-active' : ''}`}
                  onClick={() => setActive(s.id)}
                  ref={(el) => { tabRefs.current[s.id] = el; }}
                >
                  <Icon name={s.icon} size={15} stroke={1.6} />
                  <span className="show-tab__full">{s.title}</span>
                  <span className="show-tab__short">{s.short}</span>
                </button>
              );
            })}
          </div>

          <div className="show-panel" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={current.id} key={current.id}>
            <div className="show-copy">
              <h3>{current.title}</h3>
              <p className="show-desc">{current.desc}</p>
              <ul className="show-points">
                {current.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {current.to ? (
                <Link to={current.to} className="show-link">Explore service <Icon name="arrowUR" size={14} /></Link>
              ) : (
                <Link to={ROUTES.CONTACT} className="show-link">Talk to us about this <Icon name="arrowUR" size={14} /></Link>
              )}
            </div>
            <div className="show-stage">
              <Device id={current.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
