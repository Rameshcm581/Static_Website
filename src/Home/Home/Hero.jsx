// src/Home/Home/Hero.jsx
import Button from '@components/Button';
import FloatCard from './FloatCard';
import PhoneMock from './PhoneMock';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/Hero.css';

const FLOAT_CARDS = [
  { className: 'fc-1', icon: 'workflow', tone: 'brass', title: 'Discovery → scope locked', sub: 'Real problem mapped before any code is written', tag: 'Day 1', tagTone: 'pending' },
  { className: 'fc-2', icon: 'rocket', tone: 'ok', title: 'MVP build · v1.0 ready', sub: 'Single-feature focus · investor-ready prototype', tag: 'Shipping', tagTone: 'ok' },
  { className: 'fc-3', icon: 'spark', tone: 'ink', title: 'AI/ML & chatbot advisory', sub: 'Strategy, then a working pilot — not a slide deck', tag: 'In flight', tagTone: 'pending' },
  { className: 'fc-4', icon: 'layers', tone: 'ok', title: 'Code you own', sub: 'Clean, documented, readable by your future team', tag: 'Always', tagTone: 'done' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-meta">
            <span className="pill"><span className="dot" /> A product engineering studio · {COMPANY.state}, {COMPANY.country}</span>
          </div>
          <h1>
            Software<br className="br-lg" />{' '}
            your business<br />
            <span className="accent italic">runs on.</span>
          </h1>
          <p className="hero-lede">
            <strong>{COMPANY.name}</strong> builds mobile apps, web applications and secure
            digital systems for businesses in {COMPANY.operationsCity} and beyond — then stays
            after launch to keep them running. When you need reliable data entry handled,
            we do that too.
          </p>
          <div className="hero-cta">
            <Button to={ROUTES.CONTACT} variant="primary" size="lg" iconLeft="rocket">Start your project</Button>
            <Button to={ROUTES.SERVICES} variant="ghost" size="lg" iconLeft="eye">See what we build</Button>
          </div>
          <div className="hero-meta-row">
            <div className="item"><b>{COMPANY.foundedYear}</b>Founded · {COMPANY.registrar}</div>
            <div className="item"><b>Web · iOS · Android</b>Engineering across platforms</div>
            <div className="item"><b>AI · IoT · AR</b>Consulting that ships</div>
          </div>
        </div>
        <div className="stage">
          <div className="stage-rings" aria-hidden="true" />
          <PhoneMock />
          <div className="stage-cards">
            {FLOAT_CARDS.map((card) => (
              <FloatCard key={card.className} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
