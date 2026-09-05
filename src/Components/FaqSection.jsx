import { useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import { COMPANY } from '@data/company';
import { ROUTES } from '@data/navigation';
import './styles/FaqSection.css';

const ITEMS = [
  { q: 'What kinds of products do you build?', a: "Web and mobile products end-to-end — from MVPs that need to be in users' hands quickly through to scaled SaaS and consumer apps. We also take on AI/ML, chatbot, IoT and AR engagements as standalone consulting or as part of a wider build." },
  { q: 'Where are you based and where do you work?', a: `We operate from ${COMPANY.operationsCity} in ${COMPANY.state}, with a registered office in ${COMPANY.registeredOffice}. We work with clients across ${COMPANY.country} and remotely with teams elsewhere.` },
  { q: 'How do you price engagements?', a: 'We quote fixed scope and timelines after a discovery call, so there are no surprise invoices. For longer-running roadmaps we offer monthly retainers with a clear unit of work. The exact shape gets confirmed in writing before kickoff.' },
  { q: 'Do we own the code and the IP?', a: "Yes. Code, documentation, designs and credentials transfer to you at the end of every engagement. We don't retain licences and we don't lock you to our infrastructure." },
  { q: 'Can you work with our existing engineering team?', a: "Yes. We pair with in-house teams, share repos, and respect the architecture decisions you've already made — until you ask us not to. Team-augmentation engagements are also available." },
  { q: 'How quickly can you start?', a: 'Typically within two to three weeks of a signed scope. For urgent discovery work, sooner. The honest answer comes in the first call.' },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="wrap faq-grid">
        <div>
          <div className="eyebrow">Questions</div>
          <h2 className="faq-title">Asked<br /><span className="italic">on every call.</span></h2>
          <p className="faq-intro">
            Six things prospective clients ask us in the first conversation.
            If yours isn&apos;t here, the discovery call is free.
          </p>
          <Button to={ROUTES.CONTACT} variant="ghost" iconLeft="phone" className="faq-cta">
            Talk to the team
          </Button>
        </div>
        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`qa${isOpen ? ' open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="qa-head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="qa-q">{item.q}</span>
                  <span className="qa-plus"><Icon name="plus" size={14} stroke={2} /></span>
                </button>
                <div className="qa-a" id={`faq-panel-${i}`} role="region">{item.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
