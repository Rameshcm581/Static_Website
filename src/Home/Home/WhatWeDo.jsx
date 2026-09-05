// src/Home/Home/WhatWeDo.jsx — three service pillars + live "project chat" mock
import Button from '@components/Button';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/WhatWeDo.css';

const PILLARS = [
  { n: 1, title: 'MVP development', text: 'Validate fast with a focused, investor-ready first version — the one feature that proves your idea, built well.' },
  { n: 2, title: 'Web & app engineering', text: 'Performant, scalable products across web, iOS and Android. Maintainable code, sensible architecture, real testing.' },
  { n: 3, title: 'Technology consulting', text: 'AI/ML, chatbots, IoT and AR strategy that ends in working software, not a slide deck.' },
];

const MESSAGES = [
  { text: 'Discovery call complete · real problem mapped', status: 'done', label: 'Done' },
  { text: 'Scope & quote shared · single-feature focus', status: 'done', label: 'Done' },
  { text: 'Designs reviewed with founder Tuesday', status: 'prog', label: 'In progress' },
  { text: 'Auth + payments scaffold deployed', status: 'done', label: 'Done' },
  { text: 'AI chatbot pilot — eval on real tickets', status: 'prog', label: 'In progress' },
  { text: 'v1.0 release candidate Thursday demo', status: 'sched', label: 'Scheduled' },
  { text: 'Investor walk-through prepared', status: 'sched', label: 'Scheduled' },
  { text: 'Repo + docs handover written', status: 'done', label: 'Done' },
];

// Duplicated so the CSS marquee loops seamlessly.
const TRACK = [...MESSAGES, ...MESSAGES];

export default function WhatWeDo() {
  return (
    <section className="concierge">
      <div className="wrap concierge-grid">
        <div>
          <div className="eyebrow">What we do</div>
          <h2 className="concierge-title">Three ways we help <em>you ship.</em></h2>
          <p className="concierge-intro">
            We work like a product team, not a ticket queue — small, senior, and
            accountable from discovery to launch. You get clear scope, honest timelines,
            and code your team can read and own.
          </p>
          <div className="steps-mini">
            {PILLARS.map((pillar) => (
              <div className="step-mini" key={pillar.n}>
                <div className="n">{pillar.n}</div>
                <div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button to={ROUTES.SERVICES} variant="accent" iconRight="arrow" className="concierge-cta">
            Explore all services
          </Button>
        </div>
        <div>
          <div className="chat" aria-hidden="true">
            <div className="chat-head">
              <div className="chat-avatar">{COMPANY.initials}</div>
              <div className="chat-who">
                <b>Your product team</b>
                <span>{COMPANY.name} · Online</span>
              </div>
            </div>
            <div className="chat-date">This week</div>
            <div className="chat-scroll">
              <div className="chat-track">
                {TRACK.map((message, i) => (
                  <div className="chat-msg" key={`${message.text}-${i}`}>
                    <div className="t">{message.text}</div>
                    <div className={`s s-${message.status}`}>{message.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chat-foot">
              <span>You&apos;re in the loop the whole way</span>
              <span className="ping"><span className="d" /> Weekly progress posted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
