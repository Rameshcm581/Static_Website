// src/Services/Services/ServiceGrid.jsx — the six service areas
import { Link } from 'react-router-dom';
import SectionHead from '@components/SectionHead';
import Icon from '@components/Icon';
import { ROUTES } from '@data/navigation';
import './styles/ServiceGrid.css';

const SERVICES = [
  { n: '01', id: 'mvp', icon: 'rocket', title: 'MVP Development', to: ROUTES.MVP, desc: 'Validate fast with a focused first version. Single-feature focus, investor-ready prototype, a working v1.0.', list: ['Full-cycle MVP build', 'Investor-ready prototype', 'Single game-changing feature', 'End-to-end ownership'] },
  { n: '02', id: 'web', icon: 'globe', title: 'Web Applications', to: `${ROUTES.SERVICES}#web`, desc: 'Performant, scalable web products. Maintainable code, sensible architecture, real testing — and good UX.', list: ['SaaS & dashboards', 'React / Laravel / Node', 'Payments & auth', 'Admin & analytics'] },
  { n: '03', id: 'mobile', icon: 'phone2', title: 'Mobile Applications', to: `${ROUTES.SERVICES}#mobile`, desc: 'iOS and Android products that feel native and ship reliably. Built for engagement and retention.', list: ['iOS & Android', 'React Native + native', 'Push & deep links', 'Store-ready handover'] },
  { n: '04', id: 'ai', icon: 'spark', title: 'AI / ML & Chatbots', to: ROUTES.CONSULTING, desc: 'Predictive models, intelligent automation, and conversational AI built into the products that move your numbers.', list: ['Predictive analytics', 'RAG & LLM assistants', 'Support & conversion bots', 'Production deployments'] },
  { n: '05', id: 'iot-ar', icon: 'iot', title: 'IoT & AR', to: ROUTES.CONSULTING, desc: 'Interconnected device systems and AR experiences — designed for real operational outcomes, not novelty.', list: ['IoT system design', 'Device data pipelines', 'AR strategy & pilots', 'Operational AR builds'] },
  { n: '06', id: 'consulting', icon: 'layers', title: 'Technology Consulting', to: ROUTES.CONSULTING, desc: 'Advisors who also build. Cross-industry technical proficiency and affordable IT consulting that ends in working software.', list: ['Tech & architecture audits', 'AI/ML adoption strategy', 'Conversion-focused UX', 'Team augmentation'] },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <SectionHead
          eyebrow="What we build"
          title={<>Six service areas.<br /><span className="italic">One accountable team.</span></>}
          text="We do product engineering and the consulting that supports it. We don't pretend to do everything — and we tell you honestly when a problem isn't ours to take."
        />
        <div className="svc-grid">
          {SERVICES.map((service) => (
            <div className="svc" key={service.n} id={service.id}>
              <div className="svc-top">
                <div className="ico-wrap"><Icon name={service.icon} size={22} stroke={1.4} /></div>
                <div className="num">{service.n} / 06</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="svc-list">
                {service.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link to={service.to} className="more">Explore service <Icon name="arrowUR" size={14} /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
